import { JSX } from '@redneckz/uni-jsx';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import { LinkDocsListItem } from './LinkDocsListItem';
import type { LinkDocsVerticalListProps } from './LinkDocsVerticalList';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';

export interface LinkDocsHorizontalListProps extends LinkDocsVerticalListProps {
  context: ContentPageContext;
}

export const LinkDocsHorizontalList = JSX<LinkDocsHorizontalListProps>(
  ({ context, hasBorder = true, documents, icon }) => {
    return (
      <SwipeListControl context={context} className="text-m-sm text-primary-main">
        {documents?.length
          ? documents.map((doc, i) => (
              <LinkDocsListItem key={String(i)} hasBorder={hasBorder} doc={doc} icon={icon} />
            ))
          : null}
      </SwipeListControl>
    );
  },
);
