import { JSX } from '@redneckz/uni-jsx';
import type { SwipeListControlProps } from './SwipeListControlProps';
import { getScrollPoints } from './utils/getScrollPoints';
import { getIndexParts } from './utils/getIndexParts';
import { SwipeListControlChildren } from './SwipeListControlChildren';
import { SwipeListControlDots } from './SwipeListControlDots';

const GAP = 14;
const PADDING = 16;

export const SwipeListControl = JSX<SwipeListControlProps>(
  ({ className = '', context, children, showDots = true }) => {
    const [scrollPoints, setScrollPoints] = context.useState<[number, number][] | undefined>(
      undefined,
    );
    const [activeIndex, setActiveIndex] = context.useState<number>(0);
    const [indexFraction, setIndexFraction] = context.useState<number>(0);

    const scrollHandler = (e: UIEvent) => {
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
      <div className={className}>
        <SwipeListControlChildren onScroll={scrollHandler}>{children}</SwipeListControlChildren>
        <SwipeListControlDots
          activeIndex={activeIndex}
          indexFraction={indexFraction}
          showDots={showDots}
        >
          {children}
        </SwipeListControlDots>
      </div>
    );
  },
);
