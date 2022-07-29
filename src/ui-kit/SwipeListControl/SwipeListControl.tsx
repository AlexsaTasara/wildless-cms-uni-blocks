import { JSX } from '@redneckz/uni-jsx';
import type { CSSProperties } from 'react';
import type { SwipeListControlProps } from './SwipeListControlProps';
import { getScrollPoints } from './getScrollPoints';
import { getIndexParts } from './getIndexParts';
import { SwipeListControlItem } from './SwipeListControlItem';

const DOT_STYLES = 'bg-primary-main opacity-30 w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full';
const DOT_WIDTH = 6;
const ACTIVE_DOT_WIDTH = 22;
const DOT_OPACITY = 0.3;
const ACTIVE_DOT_OPACITY = 1;
const GAP = 14;
const PADDING = 16;

export const SwipeListControl = JSX<SwipeListControlProps>(
  ({ className = '', context, children, showDots = true }) => {
    const [scrollPoints, setScrollPoints] = context.useState<[number, number][] | undefined>(
      undefined,
    );
    const [activeIndex, setActiveIndex] = context.useState<number>(0);
    const [indexFraction, setIndexFraction] = context.useState<number>(0);

    const handleToggle = (e: UIEvent) => {
      const container = e.currentTarget as HTMLElement;

      if (!scrollPoints) {
        const { clientWidth, childElementCount, scrollWidth, children } = container;

        // 8px to compensate padding-margin combo of child container without CSS calc function
        const itemWidth = (children[0] as HTMLElement).offsetWidth - 8;

        setScrollPoints(
          getScrollPoints({
            gap: GAP,
            padding: PADDING,
            clientWidth,
            scrollWidth,
            childElementCount,
            itemWidth,
          }),
        );
        return;
      }

      const { scrollLeft } = container;
      const { index, fraction } = getIndexParts(scrollLeft, scrollPoints);
      setActiveIndex(index);
      setIndexFraction(fraction);
    };

    return (
      <div>
        <div
          className={`mx-[-16px] px-4 gap-3.5 overflow-auto flex horizontal-list no-scrollbar ${className}`}
          role="list"
          onScroll={handleToggle}
        >
          {children?.length ? (
            children.map((child, idx) => (
              <SwipeListControlItem key={String(idx)}>{child}</SwipeListControlItem>
            ))
          ) : (
            <SwipeListControlItem>{children}</SwipeListControlItem>
          )}
        </div>
        {showDots && children?.length ? (
          <div className="flex gap-2 mx-auto mt-[22px] w-fit">
            {children?.map((_, idx) => (
              <div
                key={String(idx)}
                className={`${DOT_STYLES}`}
                style={getDotStyles(idx, activeIndex, indexFraction)}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
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
