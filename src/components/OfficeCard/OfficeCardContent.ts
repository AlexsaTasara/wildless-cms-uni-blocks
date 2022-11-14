import type { Picture } from '../../model/Picture';
/*** @title Ссылка с изображением стрелки*/
export interface LinkAndArrow {
  link?: string;
  iconbutton?: Picture;
}
/*** @title Статус офиса на сегодняшний день*/
export interface DayStatus {
  open?: string;
  break?: string;
  close?: string;
}
/*** @title Информация о валюте*/
export interface Currency {
  name?: string;
  buy?: string;
  sell?: string;
}
/*** @title Адрес офиса*/
export interface Location {
  icon?: Picture;
  adress: string;
}
/*** @title Статус офиса в определенный день недели*/
export interface DayOfWeek {
  dayOfWeek?: string;
  time?: string;
  status?: string;
}
/*** @title Контактная информация офиса*/
export interface ContactInformation {
  title?: string;
  info?: string;
}
/*** @title Ближайшее метро*/
export interface Metro {
  icon?: Picture;
  name?: string;
  distance?: string;
  time?: string;
}
/*** @title Информация об офисе*/
export interface OfficeCardContent {
  title?: string;
  linkAndArrow?: LinkAndArrow;
  location?: Location;
  openTime?: DayStatus;
  /*** @title Список ближайших станций метро*/
  metros?: Metro[];
  /*** @title Контактная информация*/
  contactsInfo?: ContactInformation[];
  /*** @title Статус офиса в каждый день недели*/
  dates?: DayOfWeek[];
  /*** @title Информация о нескольких валютах*/
  currencies?: Currency[];
}
