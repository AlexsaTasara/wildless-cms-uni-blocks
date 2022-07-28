import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Title } from '../../ui-kit/Title/Title';
import type { AlignType } from '../BaseTile/BaseTileProps';
import type { LinkColumnsMode, LinkDocsContent } from './LinkDocsContent';
import { formatSuffix } from './formatSuffix';
import { getExtFromHref } from './getExtFromHref';

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
  double: 'gap-x-5 gap-y-[26px] flex-wrap',
  single: 'gap-3.5 flex-col',
};

export interface LinkDocsProps extends LinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({ className, title, subtitle, align, documents, icon, columnsMode = 'double' }) => {
    const containerClasses = linkColumnsModeStyleMap[columnsMode];

    return (
      <section className={`font-sans p-[50px] bg-white ${className}`}>
        {title ? (
          <Title
            className={`font-medium mt-0 ${subtitle ? 'mb-2' : titleMarginsStyleMap[columnsMode]} ${
              titleAlignStyleMap[align ?? 'center']
            }`}
          >
            {title}
          </Title>
        ) : null}
        {subtitle ? (
          <h3
            className={`text-base ${title ? 'mt-2.5' : 'mt-0'} ${
              titleMarginsStyleMap[columnsMode]
            } ${titleAlignStyleMap[align ?? 'center']}`}
          >
            {subtitle}
          </h3>
        ) : null}
        <div className={`flex ${containerClasses}`} role="list">
          {documents?.length
            ? documents.map(({ text, fileSize, ...linkProps }, i) => (
                <a
                  key={String(i)}
                  className={`group flex text-sm align-middle h-fit
                   text-primary-text no-underline hover:text-primary-main
                   ${columnsMode === 'double' ? 'basis-[calc(50%-20px)]' : ''}`}
                  role="listitem"
                  {...linkProps}
                >
                  {icon ? (
                    <Icon className="mr-2.5 h-fit" name={icon} width="24px" height="24px" />
                  ) : null}
                  <span className="self-center">
                    {text}
                    <span className="text-secondary-text group-hover:text-primary-main">
                      {linkProps?.href && formatSuffix(getExtFromHref(linkProps.href), fileSize)}
                    </span>
                  </span>
                </a>
              ))
            : null}
        </div>
      </section>
    );
  },
);
