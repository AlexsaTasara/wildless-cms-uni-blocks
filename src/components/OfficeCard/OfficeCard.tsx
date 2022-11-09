import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import type { OfficeCardContent } from './OfficeCardContent';
import { renderContacts } from './renderContacts';
import { renderCurrency } from './renderCurrency';
import { renderCurrentDay } from './renderCurrentDay';
import { renderDates } from './renderDates';
import { renderPageName } from './renderPageName';

export interface OfficeCardProps extends OfficeCardContent, UniBlockProps {}

export const OfficeCard = JSX<OfficeCardProps>((props) => {
  const {
    className = '',
    title = '',
    linkAndArrow,
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
      className={`flex flex-col font-sans text-primary-text bg-white divide-solid divide-stone-300 divide-y p-8 divide ${className}`}
    >
      <div className="flex flex-row flex-grow-0 justify-between">
        {renderPageName({ title, linkAndArrow, location, metros })}
        {openTime ? renderCurrentDay(openTime) : null}
      </div>
      {contactsInfo?.length ? (
        <div className="flex flex-row pt-6 pb-6 gap-16">{contactsInfo.map(renderContacts)}</div>
      ) : null}
      {dates?.length ? (
        <div className="flex flex-row pt-6 pb-6 gap-16">{dates.map(renderDates)}</div>
      ) : null}
      {currencies?.length ? (
        <div className="flex flex-row pt-6 pb-6 gap-16">{currencies.map(renderCurrency)}</div>
      ) : null}
    </section>
  );
});
