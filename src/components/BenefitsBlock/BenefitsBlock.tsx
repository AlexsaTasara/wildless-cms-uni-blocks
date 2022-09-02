import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { Benefit, BenefitsBlockContent } from './BenefitsBlockContent';

export interface BenefitsBlockProps extends BenefitsBlockContent, UniBlockProps {}

export const BenefitsBlock = JSX<BenefitsBlockProps>(
  ({ className, title, benefits, anchor = null }) => {
    return (
      <section
        className={`font-sans text-primary-text bg-white p-12 flex flex-col items-center ${
          className || ''
        }`}
        id={anchor}
      >
        {title ? (
          <Heading headingType="h2" className="max-w-[47rem] text-center" title={title} />
        ) : null}
        {benefits?.length ? (
          <div className="grid grid-cols-2 gap-8 mt-9">{benefits.map(renderStep)}</div>
        ) : null}
      </section>
    );
  },
);

const renderStep = (benefit: Benefit, i: number) => {
  return (
    <div key={String(i)} className="flex items-center gap-5 max-w-[500px]">
      {benefit.icon ? (
        <Img
          className="h-[70px] w-[70px] min-w-[70px] min-h-[70px]"
          image={benefit.icon}
          width="70"
          height="70"
        />
      ) : null}
      <div>
        <h3 className="font-medium text-xl m-0">{benefit.label}</h3>
        {benefit.description && (
          <div className="font-normal text-sm mt-2">{benefit.description}</div>
        )}
      </div>
    </div>
  );
};
