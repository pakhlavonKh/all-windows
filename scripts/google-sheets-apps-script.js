/**
 * ============================================================================
 * ALL WINDOWS — Интеграция формы с Google Таблицей и Telegram-ботом
 * (Поддержка отправки в несколько Telegram-чатов одновременно)
 * ============================================================================
 * 
 * ⚠️ ВАЖНО ДЛЯ ОБНОВЛЕНИЯ КОДА В APPS SCRIPT:
 * Простого сохранения (Ctrl+S / Save) в редакторе Code.gs НЕДОСТАТОЧНО, 
 * чтобы обновить работающую ссылку веб-приложения (/exec)!
 * 
 * Каждый раз после изменения кода выполните 5 шагов:
 * 1. Нажмите синюю кнопку «Развернуть» (Deploy) в правом верхнем углу
 * 2. Выберите «Управление развертываниями» (Manage deployments)
 * 3. Нажмите иконку КАРАНДАША (Редактировать) рядом с активным веб-приложением
 * 4. В выпадающем списке «Версия» (Version) выберите «Новая версия» (New version)
 * 5. Нажмите «Развернуть» (Deploy).
 * ============================================================================
 */

// ==================== НАСТРОЙКИ (КОНФИГУРАЦИЯ) ====================
var CONFIG = {
  // Токен вашего бота от @BotFather (например: '7829182741:AAHq_...')
  TELEGRAM_BOT_TOKEN: 'YOUR_BOT_TOKEN_HERE',

  // 👥 СПИСОК ID ЧАТОВ, ГРУПП ИЛИ КАНАЛОВ ДЛЯ УВЕДОМЛЕНИЙ:
  // Вы можете указать несколько получателей в массиве через запятую:
  //   - Для личного чата: ID от @userinfobot (например: '987654321')
  //     ВАЖНО: каждый получатель должен предварительно написать боту /start!
  //   - Для группы: добавьте бота в группу/канал и укажите ID со знаком минус (например: '-1001234567890')
  //     ВАЖНО: боту необходимо предоставить права на отправку сообщений в группе/канале!
  TELEGRAM_CHAT_IDS: [
    'YOUR_CHAT_ID_1_HERE',
    // 'YOUR_CHAT_ID_2_HERE',
    // '-1001234567890'
  ],

  // Одиночный Chat ID (сохранен для обратной совместимости):
  TELEGRAM_CHAT_ID: 'YOUR_CHAT_ID_HERE',

  // Название листа в Google Таблице
  SHEET_NAME: 'Заявки с сайта',

  // Часовой пояс (Ташкент: GMT+5)
  TIMEZONE: 'GMT+5'
};

/**
 * Вспомогательная функция: получает список уникальных настроенных Chat ID из CONFIG
 */
function getTelegramChatIds() {
  var chatIds = [];

  // 1. Проверяем массив или строку TELEGRAM_CHAT_IDS
  if (CONFIG.TELEGRAM_CHAT_IDS) {
    if (Array.isArray(CONFIG.TELEGRAM_CHAT_IDS)) {
      chatIds = chatIds.concat(CONFIG.TELEGRAM_CHAT_IDS);
    } else if (typeof CONFIG.TELEGRAM_CHAT_IDS === 'string') {
      chatIds = chatIds.concat(CONFIG.TELEGRAM_CHAT_IDS.split(','));
    }
  }

  // 2. Проверяем одиночный TELEGRAM_CHAT_ID (для обратной совместимости)
  if (CONFIG.TELEGRAM_CHAT_ID) {
    chatIds.push(CONFIG.TELEGRAM_CHAT_ID);
  }

  // 3. Плейсхолдеры по умолчанию, которые нужно игнорировать
  var placeholders = [
    'YOUR_CHAT_ID_HERE',
    'YOUR_CHAT_ID_1_HERE',
    'YOUR_CHAT_ID_2_HERE',
    'YOUR_CHAT_ID_3_HERE'
  ];

  // 4. Очищаем, отфильтровываем заглушки и удаляем дубликаты
  var uniqueIds = [];
  for (var i = 0; i < chatIds.length; i++) {
    var rawId = (chatIds[i] || '').toString().trim();
    if (rawId && placeholders.indexOf(rawId) === -1 && uniqueIds.indexOf(rawId) === -1) {
      uniqueIds.push(rawId);
    }
  }

  return uniqueIds;
}

/**
 * Обработка входящих POST-запросов от формы сайта
 */
function doPost(e) {
  try {
    var data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Проверяем, если это входящий вебхук от самого Telegram
    if (data.message && data.message.chat) {
      return handleTelegramWebhook(data);
    }

    // 1. Записываем заявку в Google Таблицу
    var savedRow = saveLeadToSheet(data);

    // 2. Отправляем уведомление в настроенные Telegram-чаты
    var telegramSent = false;
    var telegramError = null;
    var telegramDetails = null;

    if (CONFIG.TELEGRAM_BOT_TOKEN && CONFIG.TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE') {
      try {
        var tgResult = sendTelegramNotification(data);
        telegramSent = tgResult.success;
        telegramDetails = tgResult;
        if (!telegramSent) telegramError = tgResult.error;
      } catch (tgErr) {
        telegramError = tgErr.toString();
      }
    } else {
      telegramError = 'TELEGRAM_BOT_TOKEN не настроен в CONFIG';
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Заявка успешно принята',
      sheetRow: savedRow,
      telegramSent: telegramSent,
      telegramError: telegramError,
      telegramDetails: telegramDetails
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Ошибка при обработке doPost: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Обработка GET-запроса (проверка состояния сервиса)
 */
function doGet(e) {
  var configuredChatIds = getTelegramChatIds();
  return ContentService.createTextOutput(JSON.stringify({
    status: 'online',
    service: 'ALL WINDOWS Lead Collector & Multi-Chat Telegram Bot',
    telegramConfigured: (CONFIG.TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE' && configuredChatIds.length > 0),
    configuredChatsCount: configuredChatIds.length,
    configuredChatIds: configuredChatIds,
    time: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss')
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Обработка входящих сообщений от Telegram (вебхук), для простого определения Chat ID
 */
function handleTelegramWebhook(data) {
  var chat = data.message && data.message.chat;
  if (chat && chat.id) {
    var infoText = '👋 <b>ALL WINDOWS Bot</b>\n\n' +
      '🆔 <b>ID этого чата:</b> <code>' + chat.id + '</code>\n' +
      '📌 <b>Тип:</b> ' + (chat.type || 'private') + '\n\n' +
      'Скопируйте этот ID и вставьте в массив <code>TELEGRAM_CHAT_IDS</code> в настройках Google Apps Script.';
    try {
      sendTelegramMessageToChat(CONFIG.TELEGRAM_BOT_TOKEN, chat.id, infoText, []);
    } catch (e) {
      Logger.log('Ошибка отправки ответа на вебхук: ' + e.toString());
    }
  }
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Сохраняет заявку в Google Таблицу
 */
function saveLeadToSheet(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    setupSheetHeaders(sheet);
  } else if (sheet.getLastRow() === 0) {
    setupSheetHeaders(sheet);
  }

  var timestamp = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'dd.MM.yyyy HH:mm:ss');
  var name = data.name || data.formName || 'Не указано';
  
  // В Google Таблицах строки, начинающиеся с '+', воспринимаются как формулы (#ERROR!).
  // Одиночный апостроф "'" принудительно сохраняет номер как чистый текст.
  var rawPhone = (data.phone || data.formPhone || '').toString().trim();
  var phone = rawPhone ? ("'" + rawPhone) : 'Не указано';

  var category = data.categoryTitle || data.category || 'Не выбрано';
  var product = data.productTitle || data.product || 'Не выбрано';
  var color = data.color || data.formColor || 'Стандарт';
  var glass = data.glass || data.formGlass || 'Не выбрано';
  var dimensions = (data.width && data.height) ? (data.width + ' × ' + data.height + ' мм') : 'Не указаны';
  
  // Если переданы несколько изделий, форматируем списком для ячеек таблицы
  if (data.items && Array.isArray(data.items) && data.items.length > 1) {
    category = data.items.map(function(item, idx) { 
      return (idx + 1) + ') ' + (item.categoryTitle || 'Конструкция'); 
    }).join('\n');

    product = data.items.map(function(item, idx) { 
      var qty = item.quantity ? (' [' + item.quantity + ' шт]') : '';
      return (idx + 1) + ') ' + (item.productTitle || 'Не выбрано') + qty; 
    }).join('\n');

    color = data.items.map(function(item, idx) { 
      return (idx + 1) + ') ' + (item.color || 'Стандарт'); 
    }).join('\n');

    glass = data.items.map(function(item, idx) { 
      return (idx + 1) + ') ' + (item.glass || '—'); 
    }).join('\n');

    dimensions = data.items.map(function(item, idx) { 
      var d = (item.width && item.height) ? (item.width + ' × ' + item.height + ' мм') : 'Не указаны';
      return (idx + 1) + ') ' + d; 
    }).join('\n');
  }

  var comment = data.comment || data.formComment || '—';
  var source = data.source || 'Веб-сайт (ALL WINDOWS)';
  var status = 'Новая';

  var row = [
    timestamp,
    name,
    phone,
    category,
    product,
    color,
    glass,
    dimensions,
    comment,
    source,
    status
  ];

  sheet.appendRow(row);

  var lastRow = sheet.getLastRow();
  var range = sheet.getRange(lastRow, 1, 1, row.length);
  range.setVerticalAlignment('middle');
  range.setFontSize(10);
  // Принудительно задаем текстовый формат ячейке с телефоном (Колонка C)
  sheet.getRange(lastRow, 3).setNumberFormat('@');

  return lastRow;
}

/**
 * Настройка заголовков таблицы
 */
function setupSheetHeaders(sheet) {
  var headers = [
    'Дата и время',
    'Имя клиента',
    'Телефон',
    'Категория',
    'Система / Продукт',
    'Цвет профиля',
    'Стеклопакет',
    'Размеры (Ш×В)',
    'Комментарий / Адрес',
    'Источник заявки',
    'Статус обработки'
  ];

  sheet.appendRow(headers);
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#1c1917');
  headerRange.setFontColor('#f59e0b');
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(11);
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 36);
  sheet.setFrozenRows(1);
  // Настраиваем колонку телефона как простой текст
  sheet.getRange('C:C').setNumberFormat('@');

  for (var i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
}

/**
 * Подготовка текста заявки и отправка во ВСЕ настроенные Telegram-чаты
 */
function sendTelegramNotification(data) {
  var token = CONFIG.TELEGRAM_BOT_TOKEN;
  var chatIds = getTelegramChatIds();

  if (!token || token === 'YOUR_BOT_TOKEN_HERE') {
    return { success: false, error: 'TELEGRAM_BOT_TOKEN не настроен в CONFIG' };
  }

  if (chatIds.length === 0) {
    return { success: false, error: 'Ни один Chat ID не указан в CONFIG (TELEGRAM_CHAT_IDS / TELEGRAM_CHAT_ID)' };
  }

  var name = escapeHtml(data.name || data.formName || 'Не указано');
  var rawPhone = (data.phone || data.formPhone || '').toString();
  var cleanPhone = rawPhone.replace(/[^\d+]/g, '');
  var displayPhone = escapeHtml(rawPhone || 'Не указано');
  var category = escapeHtml(data.categoryTitle || data.category || 'Не выбрано');
  var product = escapeHtml(data.productTitle || data.product || 'Не выбрано');
  var color = escapeHtml(data.color || data.formColor || 'Стандарт');
  var glass = escapeHtml(data.glass || data.formGlass || 'Не выбрано');
  var dimensions = escapeHtml((data.width && data.height) ? (data.width + ' × ' + data.height + ' мм') : 'Не указаны');
  var comment = escapeHtml(data.comment || data.formComment || '—');
  var source = escapeHtml(data.source || 'Заявка с сайта');
  var timeStr = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'dd.MM.yyyy в HH:mm');

  var text = '✨ <b>НОВАЯ ЗАЯВКА НА РАСЧЁТ | ALL WINDOWS</b>\n\n' +
    '👤 <b>Клиент:</b> ' + name + '\n' +
    '📞 <b>Телефон:</b> <a href="tel:' + cleanPhone + '">' + displayPhone + '</a> (<code>' + cleanPhone + '</code>)\n';

  // Если передано несколько изделий, формируем детальный блок
  if (data.items && Array.isArray(data.items) && data.items.length > 0) {
    text += '\n📦 <b>Выбранные конструкции (' + data.items.length + ' поз.):</b>\n';
    for (var i = 0; i < data.items.length; i++) {
      var itm = data.items[i];
      var itmCat = escapeHtml(itm.categoryTitle || 'Конструкция');
      var itmProd = escapeHtml(itm.productTitle || 'Не выбрано');
      var itmDim = (itm.width && itm.height) ? (itm.width + ' × ' + itm.height + ' мм') : 'Размеры не указаны';
      var itmQty = itm.quantity ? (' (' + itm.quantity + ' шт)') : '';
      var itmColor = itm.color ? escapeHtml(itm.color) : 'Стандарт';
      var itmGlass = itm.glass ? escapeHtml(itm.glass) : 'Стандарт';
      
      text += '  <b>' + (i + 1) + '. ' + itmCat + ':</b> ' + itmProd + itmQty + '\n' +
              '     • <i>Размеры:</i> ' + itmDim + '\n' +
              '     • <i>Цвет:</i> ' + itmColor + ' | <i>Стекло:</i> ' + itmGlass + '\n';
    }
    text += '\n';
  } else {
    text += '🏢 <b>Категория:</b> ' + category + '\n' +
      '🪟 <b>Система:</b> ' + product + '\n' +
      '🎨 <b>Цвет:</b> ' + color + '\n' +
      '🔲 <b>Стекло:</b> ' + glass + '\n' +
      '📐 <b>Размеры:</b> ' + dimensions + '\n';
  }

  text += '💬 <b>Комментарий:</b> <i>' + comment + '</i>\n' +
    '📍 <b>Источник:</b> ' + source + '\n' +
    '⏱ <b>Время:</b> ' + timeStr;

  var keyboard = [];
  
  // Кнопки для быстрой связи с клиентом (Telegram и WhatsApp)
  if (cleanPhone) {
    var pureDigits = cleanPhone.replace(/\D/g, '');
    if (pureDigits.length >= 9) {
      keyboard.push([{
        text: '✈️ Написать клиенту в Telegram',
        url: 'https://t.me/+' + pureDigits
      }]);
      keyboard.push([{
        text: '💬 Написать клиенту в WhatsApp',
        url: 'https://wa.me/' + pureDigits
      }]);
    }
  }

  var sentCount = 0;
  var errors = [];

  // Отправляем сообщение в каждый настроенный чат по отдельности
  // Ошибка в одном чате не прерывает отправку в другие чаты!
  for (var c = 0; c < chatIds.length; c++) {
    var targetChatId = chatIds[c];
    try {
      var sendRes = sendTelegramMessageToChat(token, targetChatId, text, keyboard);
      if (sendRes.success) {
        sentCount++;
      } else {
        errors.push('Чат ' + targetChatId + ': ' + sendRes.error);
      }
    } catch (chatErr) {
      errors.push('Чат ' + targetChatId + ': ' + chatErr.toString());
    }
  }

  if (sentCount === 0 && errors.length > 0) {
    return { 
      success: false, 
      error: errors.join('; '),
      sentCount: 0,
      totalChats: chatIds.length
    };
  }

  return { 
    success: true, 
    sentCount: sentCount, 
    totalChats: chatIds.length,
    errors: errors.length > 0 ? errors.join('; ') : null 
  };
}

/**
 * Отправка сообщения конкретному получателю (chatId) с автоматическим fallback без кнопок
 */
function sendTelegramMessageToChat(token, chatId, text, keyboard) {
  var payload = {
    chat_id: chatId,
    text: text,
    parse_mode: 'HTML'
  };

  if (keyboard && keyboard.length > 0) {
    payload.reply_markup = JSON.stringify({
      inline_keyboard: keyboard
    });
  }

  var url = 'https://api.telegram.org/bot' + token + '/sendMessage';
  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(url, options);
  var resCode = response.getResponseCode();
  var resText = response.getContentText();

  // ⚠️ ЖЕЛЕЗНЫЙ FALLBACK:
  // Если Telegram вернул ошибку при отправке с кнопками (например, ограничение группы или inline_keyboard),
  // пробуем немедленно отправить сообщение без кнопок, чтобы заявка гарантированно дошла!
  if (resCode !== 200 && payload.reply_markup) {
    Logger.log('Предупреждение: ошибка чата ' + chatId + ' при отправке с кнопками (' + resCode + '). Повторная отправка чистого текста...');
    delete payload.reply_markup;
    options.payload = JSON.stringify(payload);
    response = UrlFetchApp.fetch(url, options);
    resCode = response.getResponseCode();
    resText = response.getContentText();
  }

  if (resCode !== 200) {
    Logger.log('Telegram API Error для чата ' + chatId + ' (' + resCode + '): ' + resText);
    return { success: false, error: 'HTTP ' + resCode + ': ' + resText };
  }

  return { success: true };
}

/**
 * Вспомогательная функция экранирования HTML
 */
function escapeHtml(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Тестовая функция для проверки в редакторе Apps Script (нажмите Run / Выполнить)
 */
function testSendTelegram() {
  var testLead = {
    name: 'Тестовый клиент',
    phone: '+998 90 123 45 67',
    categoryTitle: 'Алюминиевые окна',
    productTitle: 'Aldoks 75 High Insulated',
    color: 'Антрацит матовый (RAL 7016)',
    glass: 'Двухкамерный энергосберегающий Low-E',
    width: '2100',
    height: '1500',
    comment: 'Тестовая отправка из Google Apps Script на несколько чатов',
    source: 'Тест нескольких получателей'
  };

  Logger.log('1. Сохранение в таблицу...');
  var row = saveLeadToSheet(testLead);
  Logger.log('Строка в таблице: ' + row);

  Logger.log('2. Проверка настроенных Chat ID: ' + JSON.stringify(getTelegramChatIds()));

  Logger.log('3. Отправка в Telegram...');
  var res = sendTelegramNotification(testLead);
  Logger.log('Результат отправки: ' + JSON.stringify(res));
}
