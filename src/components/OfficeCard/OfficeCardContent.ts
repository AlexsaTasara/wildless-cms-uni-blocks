/**
 * @title Цвет текста
 * @enumNames [
 *    "Красный",
 *    "Зеленый"
 * ]
 */
export type TextColorVersion = 'red' | 'green';

export interface OfficeCardContent {
  title?: string;
  link?: string;
  location?: string;
  metros?: Metro[];
  contactsInfo?: ContactInformation[];
  dates?: Weekday[];
  currency?: string[];
}

export interface Weekday {
  dayOfWeek?: string;
  time?: string;
  status?: string;
  textColor?: TextColorVersion;
}

export interface ContactInformation {
  title?: string;
  info?: string;
}

export interface Metro {
  name?: string;
  distance?: string;
  time?: string;
}
