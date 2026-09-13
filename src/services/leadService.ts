export interface LeadData {
  name: string;
  phone: string;
  categoryTitle?: string;
  productTitle?: string;
  color?: string;
  glass?: string;
  width?: string | number;
  height?: string | number;
  comment?: string;
  source?: string;
}

export interface SubmitLeadResponse {
  success: boolean;
  message?: string;
  simulated?: boolean;
}

// Hardcoded Google Apps Script Web App URL
const HARDCODED_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbznHWCmBh8g-ZaGUo-tnHm5KcYeXnqWqHiiRO60--ys3zvw7iP_jCB9Mak4fr05IIj5MA/exec';

/**
 * Отправка данных заявки в Google Apps Script Web App
 * Google Apps Script автоматически записывает заявку в Google Sheets
 * и отправляет форматированное уведомление в Telegram бот.
 */
export async function submitLead(data: LeadData): Promise<SubmitLeadResponse> {
  const envUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();
  const scriptUrl = (envUrl && envUrl !== '' && !envUrl.includes('YOUR_DEPLOYMENT_ID')) 
    ? envUrl 
    : HARDCODED_SCRIPT_URL;

  console.log('🚀 [leadService] Отправка заявки на Apps Script URL:', scriptUrl);
  console.log('📦 [leadService] Данные заявки:', data);

  try {
    // Используем mode: 'no-cors' с text/plain.
    // Google Apps Script возвращает 302 редирект, который браузеры блокируют при стандартном CORS JSON,
    // но отправка в режиме 'no-cors' гарантированно доставляет payload в doPost(e.postData.contents).
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    console.log('✅ [leadService] Запрос успешно отправлен в Google Apps Script!');
    return {
      success: true,
      message: 'Заявка успешно отправлена',
      simulated: false,
    };
  } catch (err: any) {
    console.error('❌ [leadService] Ошибка при отправке заявки:', err);
    throw new Error(err?.message || 'Не удалось отправить заявку. Попробуйте еще раз.');
  }
}
