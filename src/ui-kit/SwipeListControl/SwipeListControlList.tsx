import { JSX } from '@redneckz/uni-jsx';
import { SwipeListControlItem } from './SwipeListControlItem';
import type { SwipeListControlListProps } from './SwipeListControlProps';
import { getContainerStyle } from './utils/getContainerStyle';
import { DEFAULT_GAP, DEFAULT_PADDING } from './constants';

export const SwipeListControlList = JSX<SwipeListControlListProps>(
  ({ className, children, onScroll, gap = DEFAULT_GAP, padding = DEFAULT_PADDING }) => {
    return (
      <div
        className={`overflow-auto flex horizontal-list no-scrollbar ${className}`}
        style={{ ...getContainerStyle(padding), gap: `${gap}px` }}
        role="list"
        onScroll={onScroll}
      >
        {children?.length ? (
          children.map((child, idx) => (
            <SwipeListControlItem key={String(idx)} style={getContainerStyle(padding / 4)}>
              {child}
            </SwipeListControlItem>
          ))
        ) : (
          <SwipeListControlItem>{children}</SwipeListControlItem>
        )}
      </div>
    );
  },
);
