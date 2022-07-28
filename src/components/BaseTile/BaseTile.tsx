import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Title } from '../../ui-kit/Title/Title';
import { BaseTileInner } from './BaseTileInner';
import type { BaseTileCommonProps } from './BaseTileProps';
import { getTitleSizeByClassName } from './getTitleSizeByClassName';

export interface BaseTileProps extends BaseTileCommonProps, UniBlockProps {}

const TITLE_CLASSES = 'font-medium m-0 whitespace-pre-wrap max-w-[600px]';

export const BaseTile = JSX<BaseTileProps>(
  ({
    className,
    context,
    title,
    titleSize,
    description,
    children,
    buttons,
    image,
    items,
    version = 'primary',
  }) => {
    return (
      <div className={`font-sans flex flex-col grow h-full items-start`}>
        {title && (
          <Title
            size={titleSize || getTitleSizeByClassName(className)}
            className={`${TITLE_CLASSES} ${version === 'primary' ? 'text-primary-text' : ''}`}
          >
            {title}
          </Title>
        )}
        <BaseTileInner
          context={context}
          buttons={buttons}
          image={image}
          children={children}
          description={description}
          items={items}
        />
      </div>
    );
  },
);
