import { context } from '../../react/setup-fixture';
import { ContactInformation } from './ContactInformation';
import type { ContactData, ContactInformationContent } from './ContactInformationContent';

const DIF_DATA: ContactData[] = [
  {
    label: 'Телефон филиала',
    values: ['8 (495) 200-78-70', '8 (195) 860-28-71'],
  },
  {
    label: 'Операционный зал',
    values: ['8 (495) 200-78-70'],
  },
  {
    label: 'Для консультации по контролю валюты',
    values: ['8 (800) 200-78-70', '8 (495) 773-20-19'],
  },
  {
    label: 'Факс',
    values: ['8 (800) 200-78-70'],
  },
  {
    label: 'E-mail',
    values: ['newname@mail.ru'],
  },
];

const CARDS: ContactInformationContent = {
  title: 'Контактная информация',
  contactCards: [
    {
      label: 'Для физических лиц',
      data: [DIF_DATA[0], DIF_DATA[1], DIF_DATA[0], DIF_DATA[2], DIF_DATA[3], DIF_DATA[4]],
      icon: { icon: 'DocumentTextIcon' },
    },
    {
      label: 'Для юридических лиц лиц',
      data: DIF_DATA,
      icon: { icon: 'DocumentTextIcon' },
    },
    {
      label: 'Хранилище ценностей',
      data: [DIF_DATA[0], DIF_DATA[1]],
      icon: { icon: 'DocumentTextIcon' },
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ContactInformation className="col-span-12" context={context} {...CARDS} />
    </div>
  ),
};
