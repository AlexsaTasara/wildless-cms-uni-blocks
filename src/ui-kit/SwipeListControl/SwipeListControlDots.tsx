import { JSX } from '@redneckz/uni-jsx';
import type { CSSProperties } from 'react';

const DOT_STYLES = 'bg-primary-main opacity-30 w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full';
const DOT_WIDTH = 6;
const ACTIVE_DOT_WIDTH = 22;
const DOT_OPACITY = 0.3;
const ACTIVE_DOT_OPACITY = 1;

export interface SwipeListControlDotsProps {
  activeIndex: number;
  indexFraction: number;
  showDots?: boolean;
}

export const SwipeListControlDots = JSX<SwipeListControlDotsProps>(
  ({ children, activeIndex, indexFraction, showDots }) => {
    return showDots && children?.length ? (
      <div className="flex gap-2 mx-auto mt-[22px] w-fit">
        {children?.map((_, idx) => (
          <div
            key={String(idx)}
            className={`${DOT_STYLES}`}
            style={getDotStyles(idx, activeIndex, indexFraction)}
          />
        ))}
      </div>
    ) : null;
  },
);

const getDotStyles = (
  currentIdx: number,
  activeIndex: number,
  indexFraction: number,
): CSSProperties | undefined => {
  if (currentIdx < activeIndex || currentIdx > activeIndex + 1) return null;

  const leftIndexMod = 1 - indexFraction;
  const rightIndexMod = indexFraction;

  if (currentIdx === activeIndex)
    return {
      opacity: `${DOT_OPACITY + ACTIVE_DOT_OPACITY * leftIndexMod}`,
      width: `${DOT_WIDTH + ACTIVE_DOT_WIDTH * leftIndexMod}px`,
    };

  return {
    opacity: `${DOT_OPACITY + ACTIVE_DOT_OPACITY * rightIndexMod}`,
    width: `${DOT_WIDTH + ACTIVE_DOT_WIDTH * rightIndexMod}px`,
  };
};
