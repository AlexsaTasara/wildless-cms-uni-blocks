import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { MobileLinkDocsContent } from './LinkDocsContent';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Title } from '../../ui-kit/Title/Title';
import { formatSuffix } from './formatSuffix';
import { getExtFromHref } from './getExtFromHref';
import { ListControl } from '../ListControl/ListControl';

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
        <ListControl listMode={listMode} context={context}>
          {documents?.length
            ? documents.map(({ text, fileSize, ...linkProps }, i) => (
                <div
                  key={String(i)}
                  className={`snap-center snap-always min-w-[335px] p-4 flex ${
                    hasBorder ? 'rounded-md border-main-stroke border' : ''
                  }`}
                  role="listitem"
                >
                  {icon && (
                    <Icon
                      className="mr-4 min-w-6 min-h-6"
                      name={icon}
                      width="24px"
                      height="24px"
                      asSVG
                    />
                  )}
                  {text}
                  {linkProps?.href && formatSuffix(getExtFromHref(linkProps.href), fileSize)}
                </div>
              ))
            : null}
        </ListControl>
      </section>
    );
  },
);
