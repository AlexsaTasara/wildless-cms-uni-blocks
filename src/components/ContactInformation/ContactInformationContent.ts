import { Picture } from '../../model/Picture';

export interface ContactInformationContent {
  title?: string;
  cards?: OneCard[];
}

export interface OneCard {
  icon?: Picture;
  label?: string;
  data?: ContactData[][];
}

export interface ContactData {
  label?: string;
  value?: string[];
}
