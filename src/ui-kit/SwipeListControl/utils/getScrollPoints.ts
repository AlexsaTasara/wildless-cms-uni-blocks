/*
 Calculates array of breakpoints for each scrollable element in container.
 Returns array of tuples consisting of [start, end] boundary scrollLeft values.
*/
export const getScrollPoints = ({
  gap,
  padding,
  clientWidth,
  scrollWidth,
  childElementCount,
  itemWidth,
}: {
  gap: number;
  padding: number;
  clientWidth: number;
  scrollWidth: number;
  childElementCount: number;
  itemWidth: number;
}) => {
  const scrollItemWidth = itemWidth + gap;
  const scrollableDistance = scrollWidth - clientWidth;
  const edgeScrollDistance = clientWidth - gap - padding;

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

  return scrollPoints;
};
