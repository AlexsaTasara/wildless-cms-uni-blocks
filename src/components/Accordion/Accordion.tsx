import { JSX } from '@redneckz/uni-jsx';
import { AlignType } from '../../model/AlignType';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';

const ALIGN_TITLE: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion = JSX<AccordionProps>(
  ({
    title,
    description,
    accordionItems,
    context,
    className = '',
    accordionAlignTitle = 'center',
    ...rest
  }) => {
    return (
      <BlockWrapper
        context={context}
        className={`p-[50px] font-sans bg-white text-primary-text ${className}`}
        {...rest}
      >
        {title ? (
          <Heading
            headingType="h4"
            className={`mb-2.5 ${ALIGN_TITLE[accordionAlignTitle]}`}
            title={title}
          />
        ) : null}
        {description ? <div className="mb-2.5 text-base">{description}</div> : null}
        {accordionItems?.length ? (
          <ul className="list-none m-0 p-0">
            {accordionItems.map((item, i) => (
              <AccordionItem key={`AccordionItem${i}`} {...item} context={context} />
            ))}
          </ul>
        ) : null}
      </BlockWrapper>
    );
  },
);
