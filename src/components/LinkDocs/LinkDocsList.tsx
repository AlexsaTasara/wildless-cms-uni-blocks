import { JSX } from '@redneckz/uni-jsx';
import { Icon } from '../../ui-kit/Icon/Icon';
import { formatSuffix } from './utils/formatSuffix';
import { getExtFromHref } from './utils/getExtFromHref';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { LinkColumnsMode, LinkDocsItem } from './LinkDocsContent';

export interface LinkDocsListProps {
  className?: string;
  documents: LinkDocsItem[];
  columnsMode: LinkColumnsMode;
  icon: IconName;
}

export const LinkDocsList = JSX<LinkDocsListProps>(
  ({ className, documents, columnsMode, icon }) => {
    return (
      <div className={className} role="list">
        {documents.map(({ text, fileSize, ...linkProps }, i) => (
          <a
            key={String(i)}
            className={`group flex text-sm align-middle h-fit text-primary-text no-underline hover:text-primary-main ${
              columnsMode === 'double' ? 'basis-[calc(50%-20px)]' : ''
            }`}
            role="listitem"
            {...linkProps}
          >
            {icon ? <Icon className="mr-2.5 h-fit" name={icon} width="24px" height="24px" /> : null}
            <span className="self-center">
              {text}
              <span className="text-secondary-text group-hover:text-primary-main">
                {linkProps?.href && formatSuffix(getExtFromHref(linkProps.href), fileSize)}
              </span>
            </span>
          </a>
        ))}
      </div>
    );
  },
);
