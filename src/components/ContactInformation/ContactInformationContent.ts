import { Picture } from '../../model/Picture';

/**
 * @title Цвет текста
 * @enumNames [
 *    "Красный",
 *    "Зеленый",
 *    "Черный"
 * ]
 */
export type TextColorVersion = 'red' | 'green' | 'black';

export interface ContactInformationContent {
  title?: string;
  contactCards?: OneCard[];
}

export interface OneCard {
  icon?: Picture;
  label?: string;
  data?: ContactData[];
}

export interface ContactData {
  label?: string;
  value?: string[];
  textColor?: TextColorVersion;
}
