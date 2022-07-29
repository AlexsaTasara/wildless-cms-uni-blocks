import { getScrollPoints } from './getScrollPoints';

const props = {
  gap: 14,
  padding: 16,
  clientWidth: 375,
  scrollWidth: 3508,
  childElementCount: 10,
  itemWidth: 335,
};

// pre-baked array containing accurate [start, end] boundary scrollLeft values for scrollableElements
const scrollPointsToExpect = [
  [0, 345],
  [345, 694],
  [694, 1043],
  [1043, 1392],
  [1392, 1741],
  [1741, 2090],
  [2090, 2439],
  [2439, 2788],
  [2788, 3133],
];

describe('getScrollPoints', () => {
  it('should return array of scroll breakpoints delimiting each child', () => {
    expect(getScrollPoints(props)).toEqual(scrollPointsToExpect);
  });
});
