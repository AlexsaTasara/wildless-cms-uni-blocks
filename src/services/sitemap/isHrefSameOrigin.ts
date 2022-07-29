import { getOrigin } from '../../utils/url';

export const isHrefSameOrigin = (
  href: string | undefined,
  router: { pathname?: string; href?: string },
) => getOrigin(href) === getOrigin(router.href);
