import { JSX } from '@redneckz/uni-jsx';
import type { SwipeListControlProps } from './SwipeListControlProps';
import { getScrollPoints } from './utils/getScrollPoints';
import { getIndexParts } from './utils/getIndexParts';
import { SwipeListControlList } from './SwipeListControlList';
import { SwipeListControlDots } from './SwipeListControlDots';
import { DEFAULT_GAP, DEFAULT_PADDING } from './constants';

export const SwipeListControl = JSX<SwipeListControlProps>(
  ({
    className = '',
    context,
    children,
    gap = DEFAULT_GAP,
    padding = DEFAULT_PADDING,
    showDots = true,
  }) => {
    const [scrollPoints, setScrollPoints] = context.useState<[number, number][] | undefined>(
      undefined,
    );
    const [activeIndex, setActiveIndex] = context.useState<number>(0);
    const [indexFraction, setIndexFraction] = context.useState<number>(0);

    const handleScroll = (e: UIEvent) => {
      const container = e.currentTarget as HTMLElement;

      if (!scrollPoints) {
        const { clientWidth, childElementCount, scrollWidth, children } = container;

        // horizontal PADDING / 2 to compensate padding-margin combo of child container
        // without CSS calc function, as wrapper element gets bigger in the DOM, remaining same visually
        const itemWidth = (children[0] as HTMLElement).offsetWidth - padding / 2;

        setScrollPoints(
          getScrollPoints({ gap, padding, clientWidth, scrollWidth, childElementCount, itemWidth }),
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
        <SwipeListControlList gap={gap} padding={padding} onScroll={handleScroll}>
          {children}
        </SwipeListControlList>
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
