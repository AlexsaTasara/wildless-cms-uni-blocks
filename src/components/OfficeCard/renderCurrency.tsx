import type { Currency } from './OfficeCardContent';

export function renderCurrency(currency: Currency, i: number) {
  return (
    <div key={String(i)} className="flex gap-1 flex-row h-full max-w-[490px]">
      {currency?.name ? (
        <div className="flex flex-col mr-5">
          <div className="font-normal text-sm text-secondary-text">Валюта</div>
          <div className="font-medium text-base text-primary-text">{currency.name}</div>
        </div>
      ) : null}
      {currency?.buy ? (
        <div className="flex flex-col mr-5 font-normal">
          <div className="text-sm text-secondary-text">Купить</div>
          <div className="text-base text-primary-text">{currency.buy}</div>
        </div>
      ) : null}
      {currency?.sell ? (
        <div className="flex flex-col font-normal">
          <div className="text-sm text-secondary-text">Продать</div>
          <div className="text-base text-primary-text">{currency.sell}</div>
        </div>
      ) : null}
    </div>
  );
}
