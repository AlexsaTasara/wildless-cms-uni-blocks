import { JSX } from '@redneckz/uni-jsx';
import { SwipeListControlItem } from './SwipeListControlItem';
import type { SwipeListControlChildrenProps } from './SwipeListControlProps';

export const SwipeListControlChildren = JSX<SwipeListControlChildrenProps>(
  ({ className, children, onScroll }) => {
    return (
      <div
        className={`mx-[-16px] px-4 gap-3.5 overflow-auto flex horizontal-list no-scrollbar ${className}`}
        role="list"
        onScroll={onScroll}
      >
        {children?.length ? (
          children.map((child, idx) => (
            <SwipeListControlItem key={String(idx)}>{child}</SwipeListControlItem>
          ))
        ) : (
          <SwipeListControlItem>{children}</SwipeListControlItem>
        )}
      </div>
    );
  },
);
