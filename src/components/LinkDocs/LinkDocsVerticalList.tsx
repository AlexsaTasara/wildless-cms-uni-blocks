import { JSX } from '@redneckz/uni-jsx';
import type { LinkDocsContent } from './LinkDocsContent';
import { LinkDocsListItem } from './LinkDocsListItem';

export type LinkDocsVerticalListProps = Pick<LinkDocsContent, 'hasBorder' | 'documents' | 'icon'>;

export const LinkDocsVerticalList = JSX<LinkDocsVerticalListProps>(
  ({ hasBorder = true, documents, icon }) => {
    return (
      <div
        className={`text-m-sm text-primary-main flex flex-col ${hasBorder ? 'gap-3.5' : 'gap-2'}`}
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
    );
  },
);
