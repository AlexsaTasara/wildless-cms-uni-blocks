import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { BonusContent } from './BonusContent';
import { Heading } from '../../ui-kit/Heading/Heading';

export interface BonusProps extends BonusContent, UniBlockProps {}

export const Bonus = JSX<BonusProps>((props) => {
  const { className = '', title, description, bonusItems, anchor = null } = props;

  return (
    <section className={`bg-white p-12 ${className}`} id={anchor}>
      <div className="container">
        {title ? <Heading headingType="h2" className="text-center" title={title} /> : null}
        {description ? (
          <div className="text-md font-light text-center mt-2">{description}</div>
        ) : null}
        <div className="flex flex-wrap w-full mt-9">
          {bonusItems
            ? bonusItems.map((_, i) => {
                return (
                  <div
                    key={String(i)}
                    className="flex-grow w-[49%] border border-gray pl-9 pt-9 pr-6 pb-6 mb-4 mx-2 even:mr-0 odd:ml-0 last:odd:w-full last:odd:mx-0"
                  >
                    <div className="flex justify-between w-full">
                      <div className="mr-4">
                        <div className="text-title-sm">{_.name}</div>
                        <div className="text-md font-light mt-3 max-w-[488px]">{_.description}</div>
                      </div>
                      {_.bonusCount ? (
                        <div className="relative -bottom-3 h-auto flex items-end mt-14 shrink-0">
                          <span className="font-mohave -tracking-wider text-title-extra bg-clip-text text-transparent bg-green-to-yellow -mb-7">
                            {_.bonusCount}
                          </span>
                          <span className="text-[44px] bg-clip-text text-transparent bg-green-to-yellow">
                            {_.bonusName}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
});
