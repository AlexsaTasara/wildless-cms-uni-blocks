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
