import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { MobileLinkDocsContent } from './LinkDocsContent';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Title } from '../../ui-kit/Title/Title';
import { formatSuffix } from './formatSuffix';
import { getExtFromHref } from './getExtFromHref';
import { SwipeListControl } from '../SwipeListControl/SwipeListControl';
import { LinkDocsItem } from './LinkDocsContent';
import { IconName } from '../../ui-kit/Icon/IconProps';

export interface LinkDocsProps extends MobileLinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({
    className = '',
    context,
    title,
    subtitle,
    icon = 'DocIcon',
    documents,
    listMode = 'vertical',
    hasBorder = false,
  }) => {
    return (
      <section className={`py-6 px-4 bg-white ${className}`}>
        {title && <Title className={`${subtitle ? 'mb-5' : 'mb-2'}`}>{title}</Title>}
        {subtitle && <Title className="mb-5">{subtitle}</Title>}
        <SwipeListControl context={context}>
          {documents?.length
            ? documents.map((doc, i) => (
                <LinkDocsListItem key={String(i)} hasBorder={hasBorder} doc={doc} />
              ))
            : null}
        </SwipeListControl>
      </section>
    );
  },
);

export interface LinkDocsItemProps {
  hasBorder: boolean;
  doc: LinkDocsItem;
  icon?: IconName;
}

const LinkDocsListItem = JSX<LinkDocsItemProps>(({ hasBorder, doc, icon }) => {
  const { text, fileSize, ...linkProps } = doc;
  return (
    <div
      className={`snap-center snap-always min-w-[335px] flex ${
        hasBorder ? 'rounded-md border-main-stroke border p-4' : ''
      }`}
      role="listitem"
    >
      {icon && (
        <Icon className="mr-4 min-w-6 min-h-6" name={icon} width="24px" height="24px" asSVG />
      )}
      {text}
      {linkProps?.href && formatSuffix(getExtFromHref(linkProps.href), fileSize)}
    </div>
  );
});
