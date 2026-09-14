/**
 * ============================================================================
 * ALL WINDOWS — Интеграция формы с Google Таблицей и Telegram-ботом
 * ============================================================================
 * 
 * ⚠️ ВАЖНО ДЛЯ ОБНОВЛЕНИЯ КОДА В APPS SCRIPT:
 * Простого сохранения (Ctrl+S / Save) в редакторе Code.gs НЕДОСТАТОЧНО, 
 * чтобы обновить работающую ссылку веб-приложения (/exec)!
 * 
 * Каждый раз после изменения кода выполните 4 шага:
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

  // ID чата, группы или канала, куда отправлять уведомления:
  // - Для личного чата: ваш ID от @userinfobot (например: 987654321)
  //   ВАЖНО: обязательно напишите боту /start в Telegram, иначе бот не сможет писать вам!
  // - Для группы: добавьте бота в группу и укажите ID группы (например: -1001234567890)
  TELEGRAM_CHAT_ID: 'YOUR_CHAT_ID_HERE',

  // Название листа в Google Таблице
  SHEET_NAME: 'Заявки с сайта',

  // Часовой пояс (Ташкент: GMT+5)
  TIMEZONE: 'GMT+5'
};

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

    // 2. Отправляем уведомление в Telegram
    var telegramSent = false;
    var telegramError = null;
    if (CONFIG.TELEGRAM_BOT_TOKEN && CONFIG.TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE') {
      try {
        var tgResult = sendTelegramNotification(data);
        telegramSent = tgResult.success;
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
      telegramError: telegramError
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
  return ContentService.createTextOutput(JSON.stringify({
    status: 'online',
    service: 'ALL WINDOWS Lead Collector & Telegram Bot',
    telegramConfigured: (CONFIG.TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE' && CONFIG.TELEGRAM_CHAT_ID !== 'YOUR_CHAT_ID_HERE'),
    time: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss')
  })).setMimeType(ContentService.MimeType.JSON);
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
  
  // В Google Таблицах строки, начинающиеся с '+', воспринимаются как математические формулы,
  // что вызывает ошибку #ERROR! (Formula parse error). 
  // Одиночный апостроф "'" принудительно сохраняет номер как чистый текст (в ячейке сам апостроф скрыт).
  var rawPhone = (data.phone || data.formPhone || '').toString().trim();
  var phone = rawPhone ? ("'" + rawPhone) : 'Не указано';

  var category = data.categoryTitle || data.category || 'Не выбрано';
  var product = data.productTitle || data.product || 'Не выбрано';
  var color = data.color || data.formColor || 'Стандарт';
  var glass = data.glass || data.formGlass || 'Не выбрано';
  var dimensions = (data.width && data.height) ? (data.width + ' × ' + data.height + ' мм') : 'Не указаны';
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
 * Отправка сообщения в Telegram с кнопками быстрого звонка
 */
function sendTelegramNotification(data) {
  var token = CONFIG.TELEGRAM_BOT_TOKEN;
  var chatId = CONFIG.TELEGRAM_CHAT_ID;

  if (!token || !chatId || token === 'YOUR_BOT_TOKEN_HERE') {
    return { success: false, error: 'Token или Chat ID не заданы в CONFIG' };
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
    '📞 <b>Телефон:</b> <a href="tel:' + cleanPhone + '">' + displayPhone + '</a> (<code>' + cleanPhone + '</code>)\n' +
    '🏢 <b>Категория:</b> ' + category + '\n' +
    '🪟 <b>Система:</b> ' + product + '\n' +
    '🎨 <b>Цвет:</b> ' + color + '\n' +
    '🔲 <b>Стекло:</b> ' + glass + '\n' +
    '📐 <b>Размеры:</b> ' + dimensions + '\n' +
    '💬 <b>Комментарий:</b> <i>' + comment + '</i>\n' +
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

  var payload = {
    chat_id: chatId,
    text: text,
    parse_mode: 'HTML'
  };

  if (keyboard.length > 0) {
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
  // Если Telegram вернул ошибку (например, блокировка или ошибка в reply_markup),
  // пробуем немедленно отправить сообщение без кнопок, чтобы заявка гарантированно дошла!
  if (resCode !== 200 && payload.reply_markup) {
    Logger.log('Предупреждение: ошибка Telegram API при отправке с кнопками (' + resCode + '): ' + resText + '. Повторная отправка без кнопок...');
    delete payload.reply_markup;
    options.payload = JSON.stringify(payload);
    response = UrlFetchApp.fetch(url, options);
    resCode = response.getResponseCode();
    resText = response.getContentText();
  }

  if (resCode !== 200) {
    Logger.log('Telegram API Error (' + resCode + '): ' + resText);
    return { success: false, error: 'Telegram API returned ' + resCode + ': ' + resText };
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
    comment: 'Тестовая отправка из Google Apps Script',
    source: 'Тест'
  };

  Logger.log('1. Сохранение в таблицу...');
  var row = saveLeadToSheet(testLead);
  Logger.log('Строка в таблице: ' + row);

  Logger.log('2. Отправка в Telegram...');
  var res = sendTelegramNotification(testLead);
  Logger.log('Результат: ' + JSON.stringify(res));
}
