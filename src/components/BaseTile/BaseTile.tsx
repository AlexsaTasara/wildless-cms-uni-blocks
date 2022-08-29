import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { BaseTileCommonProps } from './BaseTileProps';

export interface BaseTileProps extends BaseTileCommonProps, UniBlockProps {}

export const BaseTile = JSX<BaseTileProps>(
  ({ className = '', title, children, buttons, image, anchor = null }) => {
    return (
      <div className={`font-sans flex flex-col grow h-full items-start ${className}`} id={anchor}>
        {title}
        <div className="flex grow w-full justify-between">
          <div className="flex flex-col justify-between w-full">
            <div>{children}</div>
            {buttons ? <div>{buttons}</div> : null}
          </div>
          {image}
        </div>
      </div>
    );
  },
);
