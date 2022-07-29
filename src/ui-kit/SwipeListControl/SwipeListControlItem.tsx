import { JSX } from '@redneckz/uni-jsx';
import type { SwipeListControlItemProps } from './SwipeListControlProps';

export const SwipeListControlItem = JSX<SwipeListControlItemProps>(
  ({ className = '', style, children }) => {
    return (
      <div
        className={`snap-center snap-always min-w-full mx-[-4px] px-1 ${className}`}
        style={style}
        role="listitem"
      >
        {children}
      </div>
    );
  },
);
