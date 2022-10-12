import { Picture } from '../../model/Picture';

/**
 * @title Цвет текста
 * @enumNames [
 *    "Зеленый",
 *    "Черный"
 * ]
 */
export type TextColorVersion = 'green' | 'black';

export interface RSE {
  label?: string;
  requisite?: string;
  services?: Services;
  extra?: Extra;
}

export interface Requisite {
  label?: string;
  importantInformation?: ImpInfo[];
  buttons?: Button[];
  BonusTexts?: BonusText[];
}

export interface ImpInfo {
  label?: string;
  information?: string;
}

export interface Services {
  label?: string;
  services?: Service[];
}

export interface Service {
  icon?: Picture;
  label?: string;
}

export interface Extra {
  label?: string;
}

export interface Button {
  icon?: Picture;
  label?: string;
}

export interface BonusText {
  value?: string;
  textColor?: TextColorVersion;
}
