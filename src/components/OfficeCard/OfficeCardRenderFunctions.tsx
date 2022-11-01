import { Img } from '../../ui-kit/Img/Img';
import type {
  ContactInformation,
  Currency,
  DayOfWeek,
  DayStatus,
  Metro,
  TextColorVersion,
} from './OfficeCardContent';

const TEXT_COLORS: Record<TextColorVersion, string> = {
  red: 'text-red-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500',
};

export function renderCurrentDay(openTime: DayStatus) {
  return (
    <div className=" flex flex-col">
      {openTime?.open ? (
        <div className={`${TEXT_COLORS['green']} mr-7 border p-2.5 border-green-500`}>
          {openTime.open}
        </div>
      ) : null}
      {openTime?.break ? (
        <div className={`${TEXT_COLORS['yellow']} mr-7 border p-2.5 border-yellow-500`}>
          {openTime.break}
        </div>
      ) : null}
      {openTime?.close ? (
        <div className={`${TEXT_COLORS['red']} mr-7 border p-2.5 border-red-500`}>
          {openTime.close}
        </div>
      ) : null}
    </div>
  );
}

export function renderMetro(metro: Metro, i: number) {
  return (
    <div key={String(i)} className="flex mb-6 gap-1 flex-row h-full max-w-[490px] mr-5">
      {metro.icon ? (
        <Img
          className="mr-[10px] max-w-6 max-h-6"
          width="24px"
          height="24px"
          asSVG
          image={metro.icon}
        />
      ) : null}
      {metro?.name ? (
        <div className="font-medium text-sm text-primary-text">{metro.name}</div>
      ) : null}
      {metro?.distance ? (
        <div className="font-normal text-sm text-secondary-text">{metro.distance}</div>
      ) : null}
      {metro?.time ? (
        <div className="font-normal text-sm text-secondary-text">{metro.time}</div>
      ) : null}
    </div>
  );
}

export function renderContacts(contact: ContactInformation, i: number) {
  return (
    <div key={String(i)} className="flex gap-1 flex-col h-full max-w-[490px]">
      {contact?.title ? (
        <div className="font-normal text-sm text-secondary-text">{contact.title}</div>
      ) : null}
      {contact?.info ? (
        <div className="font-medium text-base text-primary-text ">{contact.info}</div>
      ) : null}
    </div>
  );
}

export function renderDates(currentDate: DayOfWeek, i: number) {
  const textCol = currentDate.status === 'Без перерыва' ? 'green' : 'red';

  return (
    <div key={String(i)} className="flex gap-1 flex-col h-full max-w-[490px]">
      {currentDate?.dayOfWeek ? (
        <div className="font-normal text-sm text-secondary-text">{currentDate.dayOfWeek}</div>
      ) : null}
      {currentDate?.time ? (
        <div className="font-medium text-l text-primary-text">{currentDate.time}</div>
      ) : null}
      {currentDate?.status ? (
        <div className={`font-normal text-sm text-secondary-text ${TEXT_COLORS[textCol]}`}>
          {currentDate.status}
        </div>
      ) : null}
    </div>
  );
}

export function renderCurrency(currency: Currency, i: number) {
  return (
    <div key={String(i)} className="flex gap-1 flex-row h-full max-w-[490px]">
      {currency?.name ? (
        <div className="flex flex-col mr-5">
          <div className="font-normal text-sm text-secondary-text">{'Валюта'}</div>
          <div className="font-medium text-base text-primary-text">{currency.name}</div>
        </div>
      ) : null}
      {currency?.buy ? (
        <div className="flex flex-col mr-5 font-normal">
          <div className="text-sm text-secondary-text">{'Купить'}</div>
          <div className="text-base text-primary-text">{currency.buy}</div>
        </div>
      ) : null}
      {currency?.sell ? (
        <div className="flex flex-col font-normal">
          <div className="text-sm text-secondary-text">{'Продать'}</div>
          <div className="text-base text-primary-text">{currency.sell}</div>
        </div>
      ) : null}
    </div>
  );
}
