/**
 * @title Цвет текста
 * @enumNames [
 *    "Красный",
 *    "Зеленый",
 *    "Желтый"
 * ]
 */
export type TextColorVersion = 'red' | 'green' | 'yellow';

export const TEXT_COLORS: Record<TextColorVersion, string> = {
  red: 'text-red-500',
  green: 'text-green-700',
  yellow: 'text-yellow-500',
};
