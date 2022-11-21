import type { DayStatus } from './OfficeCardContent';
import { TEXT_COLORS } from './textColors';

export function renderCurrentDay(openTime: DayStatus) {
  return (
    <div className="flex flex-col gap-2 flex-grow-0 items-end ">
      {openTime?.open ? (
        <div
          className={`${TEXT_COLORS['green']} mr-7 border border-opacity-50 py-2.5 px-3.5 border-green-700`}
        >
          {openTime.open}
        </div>
      ) : null}
      {openTime?.break ? (
        <div
          className={`${TEXT_COLORS['yellow']} mr-7 border border-opacity-50 py-2.5 px-3.5 border-yellow-500`}
        >
          {openTime.break}
        </div>
      ) : null}
      {openTime?.close ? (
        <div
          className={`${TEXT_COLORS['red']} mr-7 border border-opacity-50 py-2.5 px-3.5 border-red-500`}
        >
          {openTime.close}
        </div>
      ) : null}
    </div>
  );
}
