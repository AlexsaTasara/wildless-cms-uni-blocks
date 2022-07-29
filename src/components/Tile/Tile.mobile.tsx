import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { BaseTile } from '../BaseTile/BaseTile';
import type { TileContent } from '../Tile/TileContent';

export interface TileProps extends TileContent, UniBlockProps {
  role?: string;
}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const Tile = JSX<TileProps>((props) => {
  const { children, className = '', version = 'primary', role } = props;

  return (
    <section
      className={`col-span-12 font-sans px-4 py-6 box-border ${className} ${tileStyleMap[version]}`}
      role={role}
    >
      <BaseTile {...props}>{children}</BaseTile>
    </section>
  );
});
