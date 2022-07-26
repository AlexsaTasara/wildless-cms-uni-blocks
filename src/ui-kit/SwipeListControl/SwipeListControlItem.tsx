import { JSX } from '@redneckz/uni-jsx';
import type { SwipeListControlItemProps } from './SwipeListControlProps';

export const SwipeListControlItem = JSX<SwipeListControlItemProps>(
  ({ className = '', children }) => {
    return (
      <div
        className={`snap-center snap-always min-w-[calc(100%-8px)] ${className}`}
        role="listitem"
      >
        {children}
      </div>
    );
  },
);
