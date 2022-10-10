import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import util from 'util';
import type { ImgSource, Picture } from '../model/Picture';
import type { TransformationOptions } from './TransformationOptions';

const mkdir = util.promisify(fs.mkdir);

export async function transformPicture(
  pagePath: string,
  picture: Picture,
  options: TransformationOptions,
): Promise<Picture> {
  const sources = picture.sources || [];
  const src = picture?.src || '';
  const [transformedPicture, ...transformedSources] = await Promise.all(
    [picture].concat(sources).map((_) => transformImg(pagePath, src, { ...options, ..._ })),
  );

  return {
    ...picture,
    src: transformedPicture,
    sources: transformedSources.map((_, i) => ({
      ...sources[i],
      src: _,
    })),
  };
}

async function transformImg(
  pagePath: string,
  src: string,
  transformationOptions: TransformationOptions & ImgSource,
): Promise<string> {
  const { contentDir, publicDir, format, options, size } = transformationOptions;

  const pageDir = path.dirname(pagePath);
  const imgPath = `${pageDir}/${src}`;
  let chain = sharp(imgPath);
  if (size) {
    chain = chain.resize(size?.width, size?.height, {
      fit: sharp.fit.contain,
      background: [0, 0, 0, 0],
    });
  }
  if (format) {
    chain = chain.toFormat(format, options);
  }

  const transformedSrc = transformSrc(src, transformationOptions);
  const transformedImgPath = `${publicDir}/${path.relative(
    contentDir,
    `${path.dirname(pagePath)}/${transformedSrc}`,
  )}`;

  await mkdir(path.dirname(transformedImgPath), { recursive: true });

  try {
    await chain.toFile(transformedImgPath);
  } catch (e) {
    console.error(e);
  }

  return transformedSrc;
}

function transformSrc(src: string, { format, size }: TransformationOptions & ImgSource): string {
  const noTransform = !format && !size;
  if (noTransform) {
    return src;
  }

  const fileName = path.basename(src, path.extname(src));
  const fileSizes = [size?.width, size?.height].filter(Boolean);
  const suffix = fileSizes.length ? `-${fileSizes.join('-')}` : '';
  const ext = String(format) || path.extname(src);

  return `${fileName}${suffix}.${ext}`;
}
