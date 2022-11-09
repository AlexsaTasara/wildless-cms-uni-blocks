import type { Picture } from '../../model/Picture';

export interface OfficeCardContent {
  title?: string;
  linkAndArrow?: LinkAndArrow;
  location?: Location;
  openTime?: DayStatus;
  metros?: Metro[];
  contactsInfo?: ContactInformation[];
  dates?: DayOfWeek[];
  currencies?: Currency[];
}

export interface LinkAndArrow {
  link?: string;
  iconbutton?: Picture;
}

export interface DayStatus {
  open?: string;
  break?: string;
  close?: string;
}

export interface Currency {
  name?: string;
  buy?: string;
  sell?: string;
}

export interface Location {
  icon?: Picture;
  adress: string;
}

export interface DayOfWeek {
  dayOfWeek?: string;
  time?: string;
  status?: string;
}

export interface ContactInformation {
  title?: string;
  info?: string;
}

export interface Metro {
  icon?: Picture;
  name?: string;
  distance?: string;
  time?: string;
}
