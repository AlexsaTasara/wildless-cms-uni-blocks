import { context } from '../../react/setup-fixture';
import { ContactInformation } from './ContactInformation';
import type {
  ContactCard,
  ContactData,
  ContactInformationContent,
} from './ContactInformationContent';

export const DATA1: ContactData = {
  label: 'Телефон филиала',
  values: ['8 (495) 200-78-70', '8 (195) 860-28-71'],
};

export const DATA2: ContactData = {
  label: 'Операционный зал',
  values: ['8 (495) 200-78-70'],
};

export const DATA3: ContactData = {
  label: 'Для консультации по контролю валюты',
  values: ['8 (800) 200-78-70', '8 (495) 773-20-19'],
};

export const DATA4: ContactData = {
  label: 'Факс',
  values: ['8 (800) 200-78-70'],
};

export const DATA5: ContactData = {
  label: 'E-mail',
  values: ['newname@mail.ru'],
  textColor: 'green',
};

export const ONECARD1: ContactCard = {
  label: 'Для физических лиц',
  data: [DATA1, DATA2, DATA1, DATA3, DATA4, DATA5],
  icon: { icon: 'DocumentTextIcon' },
};

export const ONECARD2: ContactCard = {
  label: 'Для юридических лиц лиц',
  data: [DATA1, DATA2, DATA3, DATA4, DATA5],
  icon: { icon: 'DocumentTextIcon' },
};

export const ONECARD3: ContactCard = {
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
