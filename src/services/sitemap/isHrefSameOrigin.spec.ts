import { isHrefSameOrigin } from './isHrefSameOrigin';

describe('isHrefSameOrigin', () => {
  it('should check is URLs same origin', () => {
    const items = [{ href: '/' }];
    expect(
      isHrefSameOrigin('http://foo.ru/other/path', {
        pathname: '/some/path',
        href: 'http://foo.ru/some/path',
      }),
    ).toEqual(true);
  });
});
