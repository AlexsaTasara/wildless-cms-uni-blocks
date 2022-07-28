export const getScrollPoints = (
  gap: number,
  padding: number,
  containerProps: {
    clientWidth: number;
    scrollWidth: number;
    children: HTMLCollection;
  },
) => {
  const { clientWidth, scrollWidth, children } = containerProps;

  const itemWidth = (children[0] as HTMLElement).offsetWidth;
  const scrollItemWidth = itemWidth + gap;
  const scrollableDistance = scrollWidth - clientWidth;
  const edgeScrollDistance = (3 * itemWidth - clientWidth) / 2 + gap + padding;

  const scrollableItemsCount = children.length - 1;
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
