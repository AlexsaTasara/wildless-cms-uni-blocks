import type { DayOfWeek } from './OfficeCardContent';
import { TEXT_COLORS } from './textColors';

export function renderDates(currentDate: DayOfWeek, i: number) {
  const textCol = currentDate.status === 'Без перерыва' ? 'green' : 'red';

  return (
    <div key={String(i)} className="flex gap-1 flex-col h-full max-w-[490px]">
      {currentDate?.dayOfWeek ? (
        <div className="font-normal text-sm text-secondary-text">{currentDate.dayOfWeek}</div>
      ) : null}
      {currentDate?.time ? (
        <div className="font-medium text-l text-primary-text">{currentDate.time}</div>
      ) : null}
      {currentDate?.status ? (
        <div className={`font-normal text-sm text-secondary-text ${TEXT_COLORS[textCol]}`}>
          {currentDate.status}
        </div>
      ) : null}
    </div>
  );
}
