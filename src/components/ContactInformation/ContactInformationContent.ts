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
  contactCards?: ContactCard[];
}

export interface ContactCard {
  icon?: Picture;
  label?: string;
  data?: ContactData[];
}

export interface ContactData {
  label?: string;
  values?: string[];
  textColor?: TextColorVersion;
}
