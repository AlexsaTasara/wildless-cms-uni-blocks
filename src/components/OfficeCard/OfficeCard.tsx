import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import type {
  ContactInformation,
  Metro,
  OfficeCardContent,
  TextColorVersion,
  Weekday,
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
    metros,
    contactsInfo,
    dates,
    currency,
    anchor = '',
  } = props;

  return (
    <section id={anchor} className={`font-sans text-primary-text py-10 bg-white ${className}`}>
      {renderHead(title, link, location)}
      {metros ? <div className="flex flex-row">{metros.map(renderMetro)}</div> : null}
      {contactsInfo ? (
        <div className="flex flex-row">{contactsInfo.map(renderContacts)}</div>
      ) : null}
      {dates ? <div className="flex flex-row">{dates.map(renderDates)}</div> : null}
      {currency?.length ? (
        <div className="flex flex-row">{currency.map(renderCurrency)}</div>
      ) : null}
    </section>
  );
});

function renderHead(
  title: string | undefined,
  link: string | undefined,
  location: string | undefined,
) {
  return (
    <section>
      {title ? <Heading className="w-full ml-5 mb-8" headingType="h2" title={title} /> : null}
      {link ? <Heading className="w-full ml-5 mb-8" headingType="h2" title={link} /> : null}
      {location ? <Heading className="w-full ml-5 mb-8" headingType="h2" title={location} /> : null}
    </section>
  );
}

function renderMetro(metro: Metro, i: number) {
  return (
    <div key={String(i)} className="flex flex-col mb-8">
      <div className="flex gap-1 flex-row h-full ml-5 max-w-[490px]">
        {metro?.name ? (
          <div className="font-medium text-primary-text text-sm m-0">{metro.name}</div>
        ) : null}
        {metro?.distance ? (
          <div className="font-normal text-sm text-secondary-text">{metro.distance}</div>
        ) : null}
        {metro?.time ? (
          <div className="font-normal text-sm text-secondary-text">{metro.time}</div>
        ) : null}
      </div>
    </div>
  );
}

function renderContacts(contact: ContactInformation, i: number) {
  return (
    <div key={String(i)} className="flex flex-row mb-8">
      <div className="flex gap-1 flex-col h-full ml-5 max-w-[490px]">
        {contact?.title ? (
          <div className="font-normal text-sm text-secondary-text">{contact.title}</div>
        ) : null}
        {contact?.info ? (
          <div className="font-medium text-primary-text text-xl m-0">{contact.info}</div>
        ) : null}
      </div>
    </div>
  );
}

function renderDates(curdate: Weekday, i: number) {
  let textCol = TEXT_COLORS['green'];
  curdate?.textColor ? (textCol = curdate.textColor) : null;

  return (
    <div key={String(i)} className="flex flex-row mb-8">
      <div className="flex gap-1 flex-col h-full ml-5 max-w-[490px]">
        {curdate?.dayOfWeek ? (
          <div className="font-normal text-sm text-secondary-text">{curdate.dayOfWeek}</div>
        ) : null}
        {curdate?.time ? (
          <div className="font-medium text-primary-text text-xl m-0">{curdate.time}</div>
        ) : null}
        {curdate?.status ? (
          <div className={`font-normal text-sm text-secondary-text ${TEXT_COLORS[textCol]}`}>
            {curdate.status}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function renderCurrency(currency: string, i: number) {
  return (
    <div key={String(i)} className="flex flex-row mb-8">
      <div className="flex gap-1 flex-col h-full ml-5 max-w-[490px]">
        {currency ? (
          <div className="font-medium text-primary-text text-xl m-0">{currency}</div>
        ) : null}
      </div>
    </div>
  );
}
