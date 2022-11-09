import type { Metro } from './OfficeCardContent';
import { Img } from '../../ui-kit/Img/Img';

export function renderMetro(metro: Metro, i: number) {
  return (
    <div key={String(i)} className="flex mb-6 gap-1 flex-row h-full max-w-[490px] mr-5">
      {metro?.icon ? (
        <Img
          className="mr-[10px] max-w-6 max-h-6"
          width="24px"
          height="24px"
          asSVG
          image={metro.icon}
        />
      ) : null}
      {metro?.name ? (
        <div className="font-medium text-sm text-primary-text">{metro.name}</div>
      ) : null}
      {metro?.distance ? (
        <div className="font-normal text-sm text-secondary-text">{metro.distance}</div>
      ) : null}
      {metro?.time ? (
        <div className="font-normal text-sm text-secondary-text">{metro.time}</div>
      ) : null}
    </div>
  );
}
