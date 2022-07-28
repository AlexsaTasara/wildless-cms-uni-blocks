import { getIndexParts } from './getIndexParts';

const scrollPoints: [number, number][] = [
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

describe('getIndexParts', () => {
  it('should return index and fraction part of an index for given scroll breakpoints', () => {
    expect(getIndexParts(0, scrollPoints)).toEqual({ index: 0, fraction: 0 });
    expect(getIndexParts(694, scrollPoints)).toEqual({ index: 1, fraction: 1 });
    expect(getIndexParts(868.5, scrollPoints)).toEqual({ index: 2, fraction: 0.5 });
  });
});
