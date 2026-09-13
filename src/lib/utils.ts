import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import type React from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Автоматическое форматирование телефонных номеров Узбекистана:
 * Формат: +998 (XX) XXX-XX-XX
 * Всегда автоматически подставляет префикс +998 и отсекает любые буквы.
 */
export function formatPhoneNumber(value: string): string {
  // Извлекаем только цифры, полностью удаляя любые буквы и символы
  let digits = (value || '').replace(/\D/g, '');

  // Если начинается с 998, отсекаем префикс кода страны для форматирования значащей части
  if (digits.startsWith('998')) {
    digits = digits.slice(3);
  } else if (digits.startsWith('8') && digits.length > 9) {
    // если введено через 8 (8901234567)
    digits = digits.slice(1);
  }

  // Ограничиваем 9 цифрами (код оператора 2 цифры + номер 7 цифр)
  digits = digits.slice(0, 9);

  if (digits.length === 0) {
    return '+998 ';
  }

  let formatted = '+998 (' + digits.slice(0, 2);
  if (digits.length >= 2) {
    formatted += ') ';
  }
  if (digits.length > 2) {
    formatted += digits.slice(2, Math.min(digits.length, 5));
  }
  if (digits.length >= 5) {
    formatted += '-';
  }
  if (digits.length > 5) {
    formatted += digits.slice(5, Math.min(digits.length, 7));
  }
  if (digits.length >= 7) {
    formatted += '-';
  }
  if (digits.length > 7) {
    formatted += digits.slice(7, 9);
  }

  return formatted;
}

/**
 * Блокирует ввод букв и любых нецифровых символов с клавиатуры
 */
export function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  // Разрешаем системные клавиши, стрелки, Backspace, Delete, Tab и сочетания Ctrl/Cmd
  if (
    ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Escape', 'Home', 'End'].includes(e.key) ||
    e.ctrlKey ||
    e.metaKey
  ) {
    return;
  }
  // Запрещаем ввод любых символов, кроме цифр 0-9
  if (!/^\d$/.test(e.key)) {
    e.preventDefault();
  }
}
