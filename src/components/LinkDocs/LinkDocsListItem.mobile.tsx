import { JSX } from '@redneckz/uni-jsx';
import { Icon } from '../../ui-kit/Icon/Icon';
import { formatSuffix } from './formatSuffix';
import { getExtFromHref } from './getExtFromHref';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { LinkDocsItem } from './LinkDocsContent';

export interface LinkDocsListItemProps {
  hasBorder: boolean;
  doc: LinkDocsItem;
  icon?: IconName;
}

export const LinkDocsListItem = JSX<LinkDocsListItemProps>(({ hasBorder, doc, icon }) => {
  const { text, fileSize, ...linkProps } = doc;
  return (
    <a
      className={`snap-center snap-always min-w-[calc(100%-8px)] flex ${
        hasBorder ? 'rounded-md border-main-stroke border p-4' : ''
      }`}
      role="listitem"
      {...linkProps}
    >
      {icon && (
        <Icon className={`mr-4 min-w-6 min-h-6`} name={icon} width="24px" height="24px" asSVG />
      )}
      {text}
      {linkProps?.href && formatSuffix(getExtFromHref(linkProps.href), fileSize)}
    </a>
  );
});
