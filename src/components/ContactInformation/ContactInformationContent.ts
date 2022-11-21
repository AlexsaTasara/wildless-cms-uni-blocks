import { Picture } from '../../model/Picture';

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
}
