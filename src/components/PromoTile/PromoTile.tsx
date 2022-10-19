import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { PromoTileContent } from './PromoTileContent';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import { Headline } from '../Headline/Headline';
import { VersionStyleMap } from '../../model/BlockVersion';

export interface PromoTileProps extends PromoTileContent, UniBlockProps {}

export const PromoTile = JSX<PromoTileProps>(
  ({
    className = '',
    context,
    title = 'Акции и спецпредложения',
    date,
    description,
    buttons = [],
    version = 'primary',
    ...rest
  }) => {
    return (
      <BlockWrapper
        context={context}
        className={`bg-white text-primary-text font-sans p-9 box-border ${className} ${
          VersionStyleMap[version]
        } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
        {...rest}
      >
        <BaseTile
          context={context}
          title={
            title ? (
              <Headline
                context={context}
                title={title}
                className={`!p-0 max-w-[600px]`}
                headlineVersion={getTileHeadingType(className)}
                bgColorHeadline={version}
                align="left"
                as="h2"
              />
            ) : null
          }
          buttons={
            buttons?.length ? (
              <ButtonSection context={context} buttons={buttons} className="flex gap-3" />
            ) : null
          }
        >
          <div className="mt-1.5">
            {date ? <div className="text-s mb-2">{formatDate(date)}</div> : null}
            <div className="text-l">{description}</div>
          </div>
        </BaseTile>
      </BlockWrapper>
    );
  },
);

function formatDate(date: string) {
  const dateObj = new Date(date);
  const dateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return dateObj.toLocaleString('ru-RU', dateFormat).replace('г.', '');
}
