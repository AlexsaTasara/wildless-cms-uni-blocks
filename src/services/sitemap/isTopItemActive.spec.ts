import type { Router } from '../../components/ContentPage/ContentPageContext';
import { isTopItemActive } from './isTopItemActive';

const router: Router = {
  href: 'https://foo.ru/natural/credits',
  pathname: '/natural',
  push: () => undefined,
  query: {},
};

describe('isTopItemActive', () => {
  it('should check is top item active', () => {
    const menuItem = {
      href: 'https://foo.ru/natural',
      items: [
        {
          href: 'https://bar.ru/credits',
        },
      ],
    };
    expect(isTopItemActive(router)(menuItem)).toEqual(true);
  });

  it('should check is sub item active', () => {
    const menuItem = {
      href: 'https://bar.ru/natural',
      items: [
        {
          href: 'https://foo.ru/natural/credits',
        },
      ],
    };
    expect(isTopItemActive(router)(menuItem)).toEqual(true);
  });

  it('should check is same origin', () => {
    const menuItem = {
      href: 'https://foo.ru/svoe',
      items: [
        {
          href: 'https://bar.ru/credits',
        },
      ],
    };
    expect(isTopItemActive(router)(menuItem)).toEqual(true);
  });
});
