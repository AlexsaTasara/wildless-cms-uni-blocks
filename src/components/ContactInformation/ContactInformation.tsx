import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type {
  ContactCard,
  ContactData,
  ContactInformationContent,
} from './ContactInformationContent';
import { TEXT_COLORS } from './textColors';

export interface ContactInformationProps extends ContactInformationContent, UniBlockProps {}

export const ContactInformation = JSX<ContactInformationProps>((props) => {
  const { className = '', context, title, contactCards } = props;

  return (
    <BlockWrapper
      context={context}
      className={`font-sans text-primary-text py-10 bg-white ${className}`}
    >
      <div>
        {title ? <Heading className="w-full ml-10 mb-8" headingType="h4" title={title} /> : null}
      </div>
      {contactCards?.length ? (
        <div className="flex flex-row ml-8">{contactCards.map(renderCard)}</div>
      ) : null}
    </BlockWrapper>
  );
});

function renderCard(card: ContactCard, i: number) {
  return (
    <div key={String(i)} className="mb-8 ml-4 flex gap-1 flex-col h-full max-w-[990px]">
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
          <div className="font-medium text-primary-text text-base ml-2 p-[12px]">{card.label}</div>
        ) : null}
      </div>
      {card.data?.length ? (
        <div className="grid grid-cols-2 gap-2">{card.data.map(renderContactData)}</div>
      ) : null}
    </div>
  );
}

function renderContactData(contactInformation: ContactData, i: number) {
  const textCol = contactInformation.label === 'E-mail' ? 'green' : 'black';

  return (
    <div key={String(i)} className="mb-2 gap-2">
      {contactInformation?.label ? (
        <div className="font-normal text-secondary-text text-sm mb-2 w-[180px]">
          {contactInformation.label}
        </div>
      ) : null}
      {contactInformation?.values?.length ? (
        <div className={`font-normal text-primary-text text-base m-0 ${TEXT_COLORS[textCol]}`}>
          {contactInformation.values.map((val) => (
            <div>{val}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
