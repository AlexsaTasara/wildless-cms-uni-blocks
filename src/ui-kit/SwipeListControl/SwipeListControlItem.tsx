import { JSX } from '@redneckz/uni-jsx';
import type { SwipeListControlItemProps } from './SwipeListControlProps';

export const SwipeListControlItem = JSX<SwipeListControlItemProps>(
  ({ className = '', style, children }) => {
    return (
      <div
        className={`snap-center snap-always min-w-full ${className}`}
        style={style}
        role="listitem"
      >
        {children}
      </div>
    );
  },
);
