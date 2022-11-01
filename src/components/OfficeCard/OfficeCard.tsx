import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img/Img';
import type { OfficeCardContent, TextColorVersion } from './OfficeCardContent';
import {
  renderCurrentDay,
  renderContacts,
  renderCurrency,
  renderDates,
  renderMetro,
} from './OfficeCardRenderFunctions';

export interface OfficeCardProps extends OfficeCardContent, UniBlockProps {}

const TEXT_COLORS: Record<TextColorVersion, string> = {
  red: 'text-red-500',
  green: 'text-green-600',
  yellow: 'text-yellow-500',
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
      className={`flex flex-col font-sans text-primary-text bg-white divide-solid divide-stone-300 divide-y p-8 divide ${className}`}
    >
      <div className="flex flex-row flex-grow-0 justify-between">
        <div className="mb-2 flex flex-col content-center ">
          <div className=" mb-2 flex flex-row gap-2.5 h-full font-medium text-center text-h6 justify-start">
            <div className="">{title}</div>
            <div className={`${TEXT_COLORS['green']} text-base text-center`}>{link}</div>
          </div>
          <div className=" mb-2 flex flex-row h-full font-normal text-l ">
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
          {metros?.length ? (
            <div className="flex flex-row gap-3">{metros.map(renderMetro)}</div>
          ) : null}
        </div>
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
