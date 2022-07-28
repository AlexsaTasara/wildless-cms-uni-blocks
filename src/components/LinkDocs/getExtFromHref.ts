export const getExtFromHref = (href: string) => {
  if (!href) return '';

  const index = href.lastIndexOf('.');
  return index !== -1 ? href.substring(index + 1) : '';
};
