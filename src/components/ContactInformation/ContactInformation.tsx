import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import type { ContactData, ContactInformationContent, OneCard } from './ContactInformationContent';

export interface ContactInformationProps extends ContactInformationContent, UniBlockProps {}

export const ContactInformation = JSX<ContactInformationProps>((props) => {
  const { className = '', title, contactCards, anchor = null } = props;
  return (
    <section id={anchor} className={`font-sans text-primary-text py-10 bg-white ${className}`}>
      <section>
        {title ? (
          <Heading
            className="w-full ml-5 mb-8"
            headingType={getTileHeadingType(className)}
            title={title}
          />
        ) : null}
      </section>
      {contactCards ? <div className="flex flex-row">{contactCards.map(renderCard)}</div> : null}
    </section>
  );
});

function renderCard(card: OneCard, i: number) {
  return (
    <div key={String(i)} className="flex flex-col mb-8">
      <div className="flex gap-1 flex-row h-full ml-5 max-w-[490px]">
        {card.label ? (
          <div className="font-medium text-primary-text text-sm m-0">{card.label}</div>
        ) : null}
        {card.data ? <div className="flex">{card.data.map(renderDataCol)}</div> : null}
      </div>
    </div>
  );
}

function renderDataCol(data: ContactData[], i: number) {
  return (
    <div key={String(i)} className="flex flex-row mb-8">
      <div className="flex gap-1 flex-row h-full ml-5 max-w-[490px]">
        {data ? (
          <div className="font-medium text-primary-text text-sm m-0">{data.map(renderDataRow)}</div>
        ) : null}
      </div>
    </div>
  );
}

function renderDataRow(data: ContactData, i: number) {
  return (
    <div key={String(i)} className="flex flex-col mb-8">
      <div className="flex gap-1 flex-row h-full ml-5 max-w-[490px]">
        {data.label ? (
          <div className="font-medium text-primary-text text-sm m-0">{data.label}</div>
        ) : null}
        {data.value ? (
          <div className="font-medium text-primary-text text-sm m-0">
            {data.value.map((val) => val)}
          </div>
        ) : null}
      </div>
    </div>
  );
}
