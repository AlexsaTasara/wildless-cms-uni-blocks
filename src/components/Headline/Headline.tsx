import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { ALIGN_TEXT, HEADLINE_BLOCK_STYLE_MAPS, HEADLINE_VERSION } from './constants';
import type { HeadlineContent } from './HeadlineContent';
import { Description } from '../../ui-kit/Description/Description';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

export const Headline = JSX<HeadlineProps>(
  ({
    bgColorHeadline = 'transparent',
    align = 'left',
    className = '',
    title,
    description,
    headlineVersion = 'XL',
    ...rest
  }) => {
    const STYLE_MAPS = HEADLINE_BLOCK_STYLE_MAPS[bgColorHeadline];
    const SIZE_MAPS = HEADLINE_VERSION[headlineVersion];

    return (
      <BlockWrapper
        className={`font-sans flex flex-col p-[50px] ${SIZE_MAPS.gap} ${STYLE_MAPS.background} ${className}`}
        {...rest}
      >
        {title ? (
          <Heading
            headingType={SIZE_MAPS?.headingType}
            as={SIZE_MAPS?.as}
            className={`whitespace-pre-wrap ${STYLE_MAPS.text} ${ALIGN_TEXT[align]}`}
            title={title}
          />
        ) : null}
        {description ? (
          <Description
            className={`${SIZE_MAPS.descriptionFont} ${STYLE_MAPS.text} ${ALIGN_TEXT[align]}`}
            description={description}
          />
        ) : null}
      </BlockWrapper>
    );
  },
);
