import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type {
  ContactCard,
  ContactData,
  ContactInformationContent,
  TextColorVersion,
} from './ContactInformationContent';

const TEXT_COLORS: Record<TextColorVersion, string> = {
  black: 'text-black-500',
  red: 'text-red-500',
  green: 'text-green-500',
};

export interface ContactInformationProps extends ContactInformationContent, UniBlockProps {}

export const ContactInformation = JSX<ContactInformationProps>((props) => {
  const { className = '', title, contactCards, anchor = '' } = props;

  return (
    <section id={anchor} className={`font-sans text-primary-text py-10 bg-white ${className}`}>
      <section>
        {title ? <Heading className="w-full ml-10 mb-8" headingType="h4" title={title} /> : null}
      </section>
      {contactCards?.length ? (
        <div className="flex flex-row ml-8">{contactCards.map(renderCard)}</div>
      ) : null}
    </section>
  );
});

function renderCard(card: ContactCard, i: number) {
  return (
    <div key={String(i)} className="mb-8 ml-4">
      <div className="flex gap-1 flex-col h-full max-w-[990px]">
        <div className="flex flex-row mb-4">
          {card?.icon ? (
            <Img
              className="w-[48px] h-[48px] min-h-[48px] min-w-[48px] bg-main rounded-full box-border p-[12px]"
              image={card.icon}
              width="48"
              height="48"
              asSVG
            />
          ) : null}
          {card?.label ? (
            <div className="font-medium text-primary-text text-md ml-2 p-[12px]">{card.label}</div>
          ) : null}
        </div>
        {card.data?.length ? (
          <div className="grid grid-cols-2 gap-1">{card.data.map(renderData)}</div>
        ) : null}
      </div>
    </div>
  );
}

function renderData(data: ContactData, i: number) {
  const textCol = data.label === 'E-mail' ? 'green' : 'black';

  return (
    <div key={String(i)} className="mb-8 gap-2">
      {data?.label ? (
        <div className="font-normal text-secondary-text text-sm mb-2 w-[180px]">{data.label}</div>
      ) : null}
      {data?.values?.length ? (
        <div className={`font-medium text-primary-text text-md m-0 ${TEXT_COLORS[textCol]}`}>
          {data.values.map((val) => (
            <div>{val}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
