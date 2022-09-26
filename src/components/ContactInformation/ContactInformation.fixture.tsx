import { context } from '../../react/setup-fixture';
import { ContactInformation } from './ContactInformation';
import type { ContactData, ContactInformationContent, OneCard } from './ContactInformationContent';

export const DATA1: ContactData = {
  label: 'Телефон филиала',
  value: ['8 (495) 200-78-70'],
};

export const DATA2: ContactData = {
  label: 'Операционный зал',
  value: ['8 (495) 200-78-70'],
};

export const DATA3: ContactData = {
  label: 'Для консультации по контролю валюты',
  value: ['8 (800) 200-78-70', '8 (495) 773-20-19'],
};

export const DATA4: ContactData = {
  label: 'Факс',
  value: ['8 (800) 200-78-70'],
};

export const DATA5: ContactData = {
  label: 'E-mail',
  value: ['newname@mail.ru'],
  textColor: 'green',
};

export const ONECARD1: OneCard = {
  label: 'Для физических лиц',
  data: [DATA1, DATA2, DATA1, DATA3, DATA4, DATA5],
  icon: { icon: 'DocumentTextIcon' },
};

export const ONECARD2: OneCard = {
  label: 'Для юридических лиц лиц',
  data: [DATA1, DATA2, DATA3, DATA4, DATA5],
  icon: { icon: 'DocumentTextIcon' },
};

export const ONECARD3: OneCard = {
  label: 'Хранилище ценностей',
  data: [DATA1, DATA2],
  icon: { icon: 'DocumentTextIcon' },
};

export const ALLCARDS: ContactInformationContent = {
  title: 'Контактная информация',
  contactCards: [ONECARD1, ONECARD2, ONECARD3],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ContactInformation className="col-span-12" context={context} {...ALLCARDS} />
    </div>
  ),
};
