/*
  Returns object containing whole index part, and it's decimal part for a given
  scrollLeft value of a container and an array of tuple containing values of a
  start and end boundaries of a scrollable child.
 */
export const getIndexParts = (
  scrollLeft: number,
  scrollPoints: [number, number][],
): {
  index: number;
  fraction: number;
} => {
  const index = scrollPoints.findIndex(([start, end]) => start <= scrollLeft && scrollLeft <= end);

  const [start, end] = scrollPoints[index];
  const fraction = (scrollLeft - start) / (end - start);
  return { index, fraction };
};
