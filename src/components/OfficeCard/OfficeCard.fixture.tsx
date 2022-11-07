import { context } from '../../react/setup-fixture';
import { OfficeCard } from './OfficeCard';
import type {
  ContactInformation,
  Currency,
  DayOfWeek,
  DayStatus,
  LinkAndArrow,
  Location,
  Metro,
  OfficeCardContent,
} from './OfficeCardContent';

export const MONEY: Currency[] = [
  { name: 'USD', buy: '104,0741', sell: '103,1618' },
  { name: 'EUR', buy: '105,0876', sell: '102,1198' },
  { name: 'GBP', buy: '103,1792', sell: '101,67732' },
];

export const CONTACTS: ContactInformation[] = [
  { title: 'Телефон офиса', info: '123456789' },
  { title: 'Телефон компании', info: '123456789' },
];

export const DATES: DayOfWeek[] = [
  {
    dayOfWeek: 'Понедельник',
    time: '9:00 - 17:00',
    status: 'Без перерыва',
  },
  {
    dayOfWeek: 'Вторник',
    time: '9:00 - 17:00',
    status: 'Без перерыва',
  },
  {
    dayOfWeek: 'Среда',
    time: '9:00 - 17:00',
    status: 'Перерыв 13:10 - 13:30',
  },
  {
    dayOfWeek: 'Четверг',
    time: '9:00 - 17:00',
    status: 'Перерыв 13:10 - 13:30',
  },
  {
    dayOfWeek: 'Пятница',
    time: '9:00 - 17:00',
    status: 'Без перерыва',
  },
  { dayOfWeek: 'Суббота', status: 'Выходной' },
  { dayOfWeek: 'Воскресенье', status: 'Выходной' },
];

export const CURRENT_METRO: Metro[] = [
  {
    icon: { icon: 'CardTickIcon' },
    name: 'Сокольники',
    distance: '(~250м)',
    time: '6 мин',
  },
  {
    icon: { icon: 'CardTickIcon' },
    name: 'Курская',
    distance: '(~350м)',
    time: '8 мин',
  },
];

export const ADDRESS: Location = {
  icon: { icon: 'GeolocationIcon' },
  adress: 'Калиниский проезд 2, дом 5',
};

export const CURRENT_DAY: DayStatus = {
  open: 'Открыто до 20:00',
};

export const LINK_AND_ARROW: LinkAndArrow = {
  link: 'Подробнее',
  iconbutton: { icon: 'ArrowUpIcon' },
};

export const OFFICE_CARD: OfficeCardContent = {
  title: 'Центральный офис нижегородского филиала',
  linkAndArrow: LINK_AND_ARROW,
  location: ADDRESS,
  openTime: CURRENT_DAY,
  metros: CURRENT_METRO,
  contactsInfo: CONTACTS,
  dates: DATES,
  currencies: MONEY,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <OfficeCard className="col-span-12" context={context} {...OFFICE_CARD} />
    </div>
  ),
};
