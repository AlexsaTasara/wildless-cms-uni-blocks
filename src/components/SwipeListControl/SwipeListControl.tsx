import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { CSSProperties } from 'react';
import type { SwipeListControlContent } from './SwipeListControlContent';

const DOT_STYLES = 'bg-primary-main opacity-30 w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full';
const DOT_WIDTH = 6;
const ACTIVE_DOT_WIDTH = 22;
const DOT_OPACITY = 0.3;
const ACTIVE_DOT_OPACITY = 1;

export interface SwipeListControlProps extends SwipeListControlContent, UniBlockProps {}

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
    const [randomHash] = context.useState<string>(
      `slider-control-${String(Math.floor(Math.random() * 1e9))}`,
    );
    const [isFirstRun, setIsFirstRun] = context.useState(true);

    if (isFirstRun) {
      window.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector(`[data-hash=${randomHash}]`) as Element;

        const { clientWidth, childElementCount } = container;
        setChildrenCount(childElementCount);

        const itemWidth = (container.children[0] as HTMLElement).offsetWidth;
        const scrollItemWidth = itemWidth + gap;
        const scrollableDistance = container.scrollWidth - clientWidth;
        const edgeScrollDistance = (3 * itemWidth - clientWidth) / 2 + gap + padding;

        const scrollableItemsCount = childElementCount - 1;
        const scrollPoints: [number, number][] = new Array(scrollableItemsCount)
          .fill(0)
          .map((_, idx) =>
            idx === 0 || idx === scrollableItemsCount - 1
              ? [
                  idx > 0 ? scrollableDistance - edgeScrollDistance : 0,
                  idx > 0 ? scrollableDistance : edgeScrollDistance,
                ]
              : [
                  (idx - 1) * scrollItemWidth + edgeScrollDistance,
                  idx * scrollItemWidth + edgeScrollDistance,
                ],
          );
        setScrollPoints(scrollPoints);
      });
      setIsFirstRun(false);
    }

    const [activeIndex, setActiveIndex] = context.useState<number>(0);
    const [scrollPoints, setScrollPoints] = context.useState<[number, number][]>([]);
    const [indexFraction, setIndexFraction] = context.useState<number>(0);
    const [childrenCount, setChildrenCount] = context.useState<number>(0);

    const handleToggle = (e: any) => {
      const container = e.currentTarget;
      const { scrollLeft } = container;

      const idx = scrollPoints.findIndex(
        ([start, end]) => start <= scrollLeft && scrollLeft <= end,
      );
      setActiveIndex(idx);

      const [start, end] = scrollPoints[idx];
      const fraction = (scrollLeft - start) / (end - start);
      setIndexFraction(fraction);
    };

    return (
      <div>
        <div
          className={`mx-[${margin}px] px-[${padding}px] overflow-auto flex gap-3.5 horizontal-list no-scrollbar ${className}`}
          role="list"
          onScroll={handleToggle}
          data-hash={randomHash}
        >
          {children}
        </div>
        {showDots && (
          <div className="flex gap-2 mx-auto mt-[22px] w-fit">
            {childrenCount
              ? new Array(childrenCount)
                  .fill(0)
                  .map((_, idx) => (
                    <div
                      key={String(idx)}
                      className={`${DOT_STYLES}`}
                      style={getDotStyles(idx, activeIndex, indexFraction)}
                    />
                  ))
              : null}
          </div>
        )}
      </div>
    );
  },
);

const getDotStyles = (
  currentIdx: number,
  activeIndex: number,
  indexFraction: number,
): CSSProperties | undefined => {
  if (currentIdx < activeIndex || currentIdx > activeIndex + 1) return undefined;

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
