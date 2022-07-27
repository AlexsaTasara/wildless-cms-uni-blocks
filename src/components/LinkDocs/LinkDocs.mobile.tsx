import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { MobileLinkDocsContent } from './LinkDocsContent';
import { Title } from '../../ui-kit/Title/Title.mobile';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import { LinkDocsListItem } from './LinkDocsListItem.mobile';
import { SwipeListControlItem } from '../../ui-kit/SwipeListControl/SwipeListControlItem';

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
    hasBorder = true,
  }) => {
    return (
      <section className={`py-6 px-4 bg-white ${className}`}>
        {title && (
          <Title className={`text-center ${subtitle ? 'mb-2' : 'mb-5'}`} size="M">
            {title}
          </Title>
        )}
        {subtitle && <h3 className="mb-5 text-center text-m-base">{subtitle}</h3>}
        {listMode === 'vertical' ? (
          <div
            className={`text-sm text-primary-main flex flex-col ${hasBorder ? 'gap-3.5' : 'gap-2'}`}
            role="list"
          >
            {documents?.length
              ? documents.map((doc, i) => (
                  <div key={String(i)} role="listitem">
                    <LinkDocsListItem hasBorder={hasBorder} doc={doc} icon={icon} />
                  </div>
                ))
              : null}
          </div>
        ) : (
          <SwipeListControl context={context} className="text-sm text-primary-main">
            {documents?.length
              ? documents.map((doc, i) => (
                  <SwipeListControlItem key={String(i)}>
                    <LinkDocsListItem hasBorder={hasBorder} doc={doc} icon={icon} />
                  </SwipeListControlItem>
                ))
              : null}
          </SwipeListControl>
        )}
      </section>
    );
  },
);
