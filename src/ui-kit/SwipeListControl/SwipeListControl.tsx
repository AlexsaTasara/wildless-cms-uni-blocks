import { JSX } from '@redneckz/uni-jsx';
import type { CSSProperties } from 'react';
import type { SwipeListControlProps } from './SwipeListControlProps';
import { getScrollPoints } from './getScrollPoints';
import { useDOMContentLoaded } from '../../hooks/useDOMContentLoaded';
import { getIndexParts } from './getIndexParts';
import { getSwipeListControlHash } from './getSwipeListControlHash';

const DOT_STYLES = 'bg-primary-main opacity-30 w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full';
const DOT_WIDTH = 6;
const ACTIVE_DOT_WIDTH = 22;
const DOT_OPACITY = 0.3;
const ACTIVE_DOT_OPACITY = 1;

export const SwipeListControl = JSX<SwipeListControlProps>(
  ({
    className = '',
    context,
    children,
    gap = 14,
    margin = -16,
    padding = 16,
    showDots = true,
  }) => {
    const [randomHash] = context.useState<string>(getSwipeListControlHash());

    const [childrenCount, setChildrenCount] = context.useState<number>(0);
    const [scrollPoints, setScrollPoints] = context.useState<[number, number][]>([]);

    useDOMContentLoaded(context, () => {
      const container = document.querySelector(`[data-hash=${randomHash}]`) as Element;
      const { clientWidth, childElementCount, scrollWidth, children } = container;

      setChildrenCount(childElementCount);
      setScrollPoints(getScrollPoints(gap, padding, { clientWidth, scrollWidth, children }));
    });

    const [activeIndex, setActiveIndex] = context.useState<number>(0);
    const [indexFraction, setIndexFraction] = context.useState<number>(0);

    const handleToggle = (e: UIEvent) => {
      const { scrollLeft } = e.currentTarget as HTMLElement;
      const { index, fraction } = getIndexParts(scrollLeft, scrollPoints);
      setActiveIndex(index);
      setIndexFraction(fraction);
    };

    return (
      <div>
        <div
          className={`overflow-auto flex horizontal-list no-scrollbar ${className}`}
          role="list"
          onScroll={handleToggle}
          data-hash={randomHash}
          style={{
            marginLeft: `${margin}px`,
            marginRight: `${margin}px`,
            paddingLeft: `${padding}px`,
            paddingRight: `${padding}px`,
            columnGap: `${gap}px`,
          }}
        >
          {children}
        </div>
        {showDots && childrenCount ? (
          <div className="flex gap-2 mx-auto mt-[22px] w-fit">
            {new Array(childrenCount).fill(0).map((_, idx) => (
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

  let styles: CSSProperties;
  const leftIndexMod = 1 - indexFraction;
  const rightIndexMod = indexFraction;

  if (currentIdx === activeIndex) {
    styles = {
      opacity: `${DOT_OPACITY + ACTIVE_DOT_OPACITY * leftIndexMod}`,
      width: `${DOT_WIDTH + ACTIVE_DOT_WIDTH * leftIndexMod}px`,
    };
  } else {
    styles = {
      opacity: `${DOT_OPACITY + ACTIVE_DOT_OPACITY * rightIndexMod}`,
      width: `${DOT_WIDTH + ACTIVE_DOT_WIDTH * rightIndexMod}px`,
    };
  }
  return styles;
};
