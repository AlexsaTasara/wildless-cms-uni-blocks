/**
 * @title Цвет текста
 * @enumNames [
 *    "Красный",
 *    "Зеленый",
 *    "Черный"
 * ]
 */
export type TextColorVersion = 'red' | 'green' | 'black';

export const TEXT_COLORS: Record<TextColorVersion, string> = {
  black: 'text-black-500',
  red: 'text-red-500',
  green: 'text-green-500',
};
