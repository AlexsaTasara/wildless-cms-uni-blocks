import { JSX } from '@redneckz/uni-jsx';
import type { SwipeListControlItemProps } from './SwipeListControlProps';

export const SwipeListControlItem = JSX<SwipeListControlItemProps>(
  ({ className = '', children }) => {
    return (
      <div
        className={`snap-center snap-always min-w-full mx-[-4px] px-1 ${className}`}
        role="listitem"
      >
        {children}
      </div>
    );
  },
);
