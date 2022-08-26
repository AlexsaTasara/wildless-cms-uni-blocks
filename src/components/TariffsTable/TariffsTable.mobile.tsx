import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type {
  TariffsTableCellData,
  TariffsTableColumn,
  TariffsTableContent,
  TariffsTableRowHeader,
} from './TariffsTableContent';
import { Heading } from '../../ui-kit/Heading/Heading';
import { TariffsTableVertical } from './TariffsTableVertical';
import { TariffsTableHorizontal } from './TariffsTableHorizontal';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

export const TariffsTable = JSX<TariffsTableProps>(
  ({ className, context, title, description, columns, rowHeaders, orientation = 'vertical' }) => {
    const colData = getColData(columns);
    const tiles = getTiles(rowHeaders, colData);

    return (
      <section
        className={`px-4 py-6 bg-white font-sans text-primary-text overflow-x-hidden ${className}`}
      >
        {title ? (
          <Heading
            headingType="h2"
            className={`text-center ${description ? 'mb-2' : 'mb-5'}`}
            title={title}
          />
        ) : null}
        {description ? <div className="mb-5 text-center text-m-md">{description}</div> : null}
        {tiles?.length ? renderOrientationTable(orientation, tiles, context) : null}
      </section>
    );
  },
);

function renderOrientationTable(orientation, tiles, context) {
  return orientation === 'vertical' ? (
    <TariffsTableVertical tiles={tiles} />
  ) : (
    <TariffsTableHorizontal context={context} tiles={tiles} />
  );
}

const getColData = (columns: TariffsTableColumn[] | undefined) =>
  columns?.[0].data ? columns[0].data : [];

const getTiles = (
  rowHeaders: TariffsTableRowHeader[] | undefined,
  colData: TariffsTableCellData[][],
) =>
  rowHeaders?.map((header, i) => ({
    header,
    data: colData?.[i] || [{}],
  }));
