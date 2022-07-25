export const getExtFromHref = (href: string) => {
  if (!href) return '';

  const lastChunk = href.split('.').pop();
  if (!lastChunk || lastChunk.includes('/')) return '';

  return lastChunk;
};
