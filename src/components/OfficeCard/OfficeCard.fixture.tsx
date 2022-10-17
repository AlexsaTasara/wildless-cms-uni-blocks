import { context } from '../../react/setup-fixture';
import { OfficeCard } from './OfficeCard';
import type { ContactInformation, Metro, OfficeCardContent, DayOfWeek } from './OfficeCardContent';

export const CONTACTS: ContactInformation[] = [
  { title: 'Телефон офиса', info: '123456789' },
  { title: 'Телефон компании', info: '123456789' },
];

export const DATES: DayOfWeek[] = [
  {
    dayOfWeek: 'Понедельник',
    time: '900 - 1700',
    status: 'Без перерыва',
    textColor: 'green',
  },
  {
    dayOfWeek: 'Вторник',
    time: '900 - 1700',
    status: 'Без перерыва',
  },
  { dayOfWeek: 'Суббота', status: 'Выходной', textColor: 'red' },
];

export const CURRENT_METRO: Metro[] = [
  {
    name: 'Сокольники',
    distance: '(~250м)',
    time: '6 мин',
  },
  {
    name: 'Курская',
    distance: '(~350м)',
    time: '8 мин',
  },
];

export const OFFICE_CARD: OfficeCardContent = {
  title: 'Центральный офис нижегородского филиала',
  link: 'www.aaa.ru',
  location: 'Проезд 2',
  metros: CURRENT_METRO,
  contactsInfo: CONTACTS,
  dates: DATES,
  currencies: ['123'],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <OfficeCard className="col-span-12" context={context} {...OFFICE_CARD} />
    </div>
  ),
};
