import { JSX } from '@redneckz/uni-jsx';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { UniBlockProps } from '../../types';
import type { AlignType } from '../BaseTile/BaseTileProps';
import type { LinkColumnsMode, LinkDocsContent } from './LinkDocsContent';
import { LinkDocsList } from './LinkDocsList';

const titleAlignStyleMap: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const titleMarginsStyleMap: Record<LinkColumnsMode, string> = {
  double: 'mb-8',
  single: 'mb-[26px]',
};

const linkColumnsModeStyleMap: Record<LinkColumnsMode, string> = {
  double: 'flex gap-x-5 gap-y-[26px] flex-wrap',
  single: 'flex gap-3.5 flex-col',
};

export interface LinkDocsProps extends LinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({
    className = '',
    title,
    subtitle,
    align,
    documents,
    icon = 'DocIcon',
    columnsMode = 'double',
  }) => {
    return (
      <section className={`font-sans p-[50px] bg-white ${className}`}>
        {title ? (
          <Heading
            type="h2"
            className={`${subtitle ? 'mb-2' : titleMarginsStyleMap[columnsMode]} ${
              titleAlignStyleMap[align ?? 'center']
            }`}
            text={title}
          />
        ) : null}
        {subtitle ? (
          <Heading
            type="h3"
            className={`text-base ${title ? 'mt-2.5' : ''} ${titleMarginsStyleMap[columnsMode]} ${
              titleAlignStyleMap[align ?? 'center']
            }`}
            text={subtitle}
          />
        ) : null}
        {documents?.length ? (
          <LinkDocsList
            className={linkColumnsModeStyleMap[columnsMode]}
            columnsMode={columnsMode}
            documents={documents}
            icon={icon}
          />
        ) : null}
      </section>
    );
  },
);
