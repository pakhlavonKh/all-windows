export interface LeadProductItem {
  categoryTitle: string;
  productTitle: string;
  color?: string;
  glass?: string;
  width?: string | number;
  height?: string | number;
  quantity?: string | number;
}

export interface LeadData {
  name: string;
  phone: string;
  items?: LeadProductItem[];
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

// Hardcoded Google Apps Script Web App URL (no .env dependency)
const HARDCODED_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyeIeTPwKwyFuteRtrm5in1apZbjTw7Cr1cF1A9qWjzNKY2Aq6lSoWP5-bXjOXyeD3RHQ/exec';

/**
 * Отправка данных заявки в Google Apps Script Web App
 * Google Apps Script автоматически записывает заявку в Google Sheets
 * и отправляет форматированное уведомление в Telegram бот.
 */
export async function submitLead(data: LeadData): Promise<SubmitLeadResponse> {
  const scriptUrl = HARDCODED_SCRIPT_URL;

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

    return {
      success: true,
      message: 'Заявка успешно отправлена',
      simulated: false,
    };
  } catch (err: any) {
    try {
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(data)], { type: 'text/plain;charset=utf-8' });
        const beaconSent = navigator.sendBeacon(scriptUrl, blob);
        if (beaconSent) {
          return {
            success: true,
            message: 'Заявка успешно отправлена',
            simulated: false,
          };
        }
      }
    } catch {
      // Игнорируем ошибку beacon fallback
    }

    throw new Error(err?.message || 'Не удалось отправить заявку. Попробуйте еще раз.');
  }
}
