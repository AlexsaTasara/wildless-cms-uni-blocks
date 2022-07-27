import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type {
  TariffsTableContent,
  TariffsTableCellData,
  TariffsTableRowData,
} from './TariffsTableContent';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Img } from '../../ui-kit/Img';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Title } from '../../ui-kit/Title/Title.mobile';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

// TODO: получить ответ как задействуется swipe и как перестраивается таблица при количестве колонок описания > 1
export const TariffsTable = JSX<TariffsTableProps>(
  ({ className, context, title, rowHeaders, columns }) => {
    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders?.map((header, i) => ({
      header,
      data: colData.map((col) => col?.[i] || [{}]),
    }));

    return (
      <section className={`px-4 py-6 bg-white font-sans text-primary-text ${className}`}>
        <div className="flex flex-col gap-3.5">
          {rowData?.length ? rowData.map((row, i) => <TableRow row={row} />) : null}
        </div>
      </section>
    );
  },
);

const renderCellInner = (
  { label, description, list, image, buttons }: TariffsTableCellData,
  i: number,
) => (
  <div key={String(i)}>
    {i > 0 && (
      <div className="border-main-divider border border-solid border-t-0 border-x-0 my-2" />
    )}
    {label && <div className="text-m-sm m-0">{label}</div>}
    {description && <div className="text-m-sm text-secondary-text mt-[3px]">{description}</div>}
    {list?.items?.length ? (
      <div className="flex flex-col justify-between items-start">
        <div role="list">
          {list.items.map((text, idx) => (
            <BlockItem
              key={String(idx)}
              text={text}
              version={list.version ?? 'secondary'}
              isDotted={list.isDotted ?? true}
            />
          ))}
        </div>
      </div>
    ) : null}
    {image && <Img image={image} />}
    {buttons?.length
      ? buttons.map(({ icon, ...buttonProps }, idx) => (
          <Button
            className={`${idx > 0 ? 'ml-3' : ''} w-12 h-12`}
            key={String(idx)}
            appendLeft={icon && <Icon name={icon} width="24px" height="24px" />}
            {...buttonProps}
          />
        ))
      : null}
  </div>
);

interface RowProps {
  className?: string;
  row: TariffsTableRowData;
}

const TableRow = JSX<RowProps>(({ className, row }) => {
  const { header, data } = row;
  return (
    <div className="rounded-md border-main-stroke border p-4">
      <div className="flex gap-2.5">
        {header?.title && (
          <Title className="font-medium" size="S">
            {header?.title}
          </Title>
        )}
        {header?.icon && (
          <Icon className="ml-auto max-w-6 max-h-6" name={header.icon} width="24px" height="24px" />
        )}
      </div>
      <div className="mt-2">
        <div>{data[0].map((cell, i) => renderCellInner(cell, i))}</div>
      </div>
    </div>
  );
});
