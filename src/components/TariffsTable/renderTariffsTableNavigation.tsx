import { ArrowButton } from '../../ui-kit/Button/ArrowButton';
export interface TariffsTableNavigationProps {
  showNextButton: boolean | 0;
  showPrevButton: boolean | 0;
  nextClick: () => void;
  prevClick: () => void;
}

export function TariffsTableNavigation(props: TariffsTableNavigationProps) {
  const { showNextButton, showPrevButton, nextClick, prevClick } = props;
  return (
    <div>
      <div className="absolute top-7 right-7 z-10">
        <ArrowButton onClick={nextClick} disabled={!showNextButton} ariaLabel="Пролистать вправо" />
        <ArrowButton
          className="mt-4 rotate-180"
          onClick={prevClick}
          disabled={!showPrevButton}
          ariaLabel="Пролистать влево"
        />
      </div>
    </div>
  );
}
