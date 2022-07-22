import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img';
import { BaseTile } from '../BaseTile/BaseTile';
import type { ProductBlockInnerCommonProps } from './ProductBlockContent';
import { renderBenefit } from './renderBenefit';

export interface ProductBlockInnerProps extends ProductBlockInnerCommonProps, UniBlockProps {
  isMobile?: boolean;
}

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({ className, context, title, titleSize, description, benefits, buttons, image, items }) => {
    return (
      <div className={`'flex grow justify-between items-stretch' ${className || ''}`}>
        <div className="flex flex-col">
          <BaseTile
            context={context}
            title={title}
            titleSize={titleSize || 'XL'}
            description={description}
            items={items}
            buttons={buttons}
          >
            {benefits?.length ? (
              <div className="flex gap-6 mt-6 mb-3.5">{benefits.map(renderBenefit)}</div>
            ) : null}
          </BaseTile>
        </div>
        {image?.src && <Img className="mt-auto" image={image} />}
      </div>
    );
  },
);
