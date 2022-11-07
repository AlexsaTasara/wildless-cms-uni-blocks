import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img/Img';
import type {
  LinkAndArrow,
  Location,
  Metro,
  OfficeCardContent,
  TextColorVersion,
} from './OfficeCardContent';
import {
  renderContacts,
  renderCurrency,
  renderCurrentDay,
  renderDates,
  renderMetro,
} from './OfficeCardRenderFunctions';

const TEXT_COLORS: Record<TextColorVersion, string> = {
  red: 'text-red-500',
  green: 'text-green-700',
  yellow: 'text-yellow-500',
};

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

type renderPageNameProps = {
  title: string;
  linkAndArrow?: LinkAndArrow;
  location?: Location;
  metros?: Metro[];
};

function renderPageName({ title, linkAndArrow, location, metros }: renderPageNameProps) {
  return (
    <div className="mb-2 flex flex-col content-center ">
      <div className="mb-2 flex flex-row gap-2.5 h-full font-medium text-center text-h6 justify-start content-center">
        <div className="">{title}</div>
        {linkAndArrow?.link ? (
          <div className={`${TEXT_COLORS['green']} text-base text-center`}>{linkAndArrow.link}</div>
        ) : null}
        {linkAndArrow?.iconbutton ? (
          <Img
            className="mr-[10px] max-w-6 max-h-6"
            width="24px"
            height="24px"
            asSVG
            image={linkAndArrow.iconbutton}
          />
        ) : null}
      </div>

      <div className="mb-2 flex flex-row h-full font-normal text-l ">
        {location?.icon ? (
          <Img
            className="mr-[10px] max-w-6 max-h-6"
            width="24px"
            height="24px"
            asSVG
            image={location.icon}
          />
        ) : null}
        <span className="">{location?.adress}</span>
      </div>
      {metros?.length ? <div className="flex flex-row gap-3">{metros.map(renderMetro)}</div> : null}
    </div>
  );
}
