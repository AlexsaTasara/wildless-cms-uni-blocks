import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img/Img';
import type {
  ContactInformation,
  Currency,
  DayOfWeek,
  Metro,
  OfficeCardContent,
  TextColorVersion,
} from './OfficeCardContent';

export interface OfficeCardProps extends OfficeCardContent, UniBlockProps {}

const TEXT_COLORS: Record<TextColorVersion, string> = {
  red: 'text-red-500',
  green: 'text-green-500',
};

export const OfficeCard = JSX<OfficeCardProps>((props) => {
  const {
    className = '',
    title,
    link,
    location,
    openTime,
    metros,
    contactsInfo,
    dates,
    currencies,
    anchor = '',
  } = props;

  return (
    <section
      id={anchor}
      className={`flex flex-col font-sans text-primary-text py-10 bg-white divide-solid divide-black divide-y pr-8 pl-8 pt-8 pb-8 divide ${className}`}
    >
      <div className="flex flex-row flex-grow-0 justify-between">
        <div className="mb-2 flex flex-col">
          <div className=" mb-2 flex gap-10 flex-row h-full font-medium text-2xl justify-start text-primary-text">
            <div className="">{title}</div>
            <div className={`${TEXT_COLORS['green']} text-base`}>{link}</div>
          </div>
          <div className=" mb-1 flex gap-1 flex-row h-full font-medium text-xl text-base">
            {location?.icon ? (
              <Img
                className="mr-[10px] max-w-6 max-h-6"
                width="24px"
                height="24px"
                asSVG
                image={location.icon}
              />
            ) : null}
            {location?.adress}
          </div>
          {metros?.length ? <div className="flex flex-row">{metros.map(renderMetro)}</div> : null}
        </div>
        <div className={`${TEXT_COLORS['green']} mr-7`}>{openTime}</div>
      </div>
      {contactsInfo?.length ? (
        <div className="flex flex-row pt-6 pb-6">{contactsInfo.map(renderContacts)}</div>
      ) : null}
      {dates?.length ? (
        <div className="flex flex-row pt-6 pb-6">{dates.map(renderDates)}</div>
      ) : null}
      {currencies?.length ? (
        <div className="flex flex-row pt-6 pb-6">{currencies.map(renderCurrency)}</div>
      ) : null}
    </section>
  );
});

function renderMetro(metro: Metro, i: number) {
  return (
    <div key={String(i)} className="flex mb-8 gap-1 flex-row h-full max-w-[490px] mr-5">
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

function renderContacts(contact: ContactInformation, i: number) {
  return (
    <div key={String(i)} className="flex gap-1 flex-col h-full max-w-[490px] mr-5">
      {contact?.title ? (
        <div className="font-normal text-sm text-secondary-text">{contact.title}</div>
      ) : null}
      {contact?.info ? (
        <div className="font-medium text-xl text-primary-text ">{contact.info}</div>
      ) : null}
    </div>
  );
}

function renderDates(currentDate: DayOfWeek, i: number) {
  const textCol = currentDate.status === 'Без перерыва' ? 'green' : 'red';

  return (
    <div key={String(i)} className="flex gap-1 flex-col h-full max-w-[490px] mr-5">
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

function renderCurrency(currency: Currency, i: number) {
  return (
    <div key={String(i)} className="flex gap-1 flex-row h-full max-w-[490px] mr-5">
      {currency?.name ? (
        <div className="flex flex-col mr-4">
          <div className="font-normal text-sm text-secondary-text">{'Валюта'}</div>
          <div className="font-medium text-xl text-primary-text">{currency.name}</div>
        </div>
      ) : null}
      {currency?.buy ? (
        <div className="flex flex-col mr-4">
          <div className="font-normal text-sm text-secondary-text">{'Купить'}</div>
          <div className="font-normal text-xl text-primary-text">{currency.buy}</div>
        </div>
      ) : null}
      {currency?.sell ? (
        <div className="flex flex-col mr-4">
          <div className="font-normal text-sm text-secondary-text">{'Продать'}</div>
          <div className="font-normal text-xl text-primary-text">{currency.sell}</div>
        </div>
      ) : null}
    </div>
  );
}
