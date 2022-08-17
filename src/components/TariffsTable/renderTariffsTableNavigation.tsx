import { ArrowButton } from '../../ui-kit/Button/ArrowButton';
export interface TariffsTableNavigationProps {
  showNextButton: boolean;
  showPrevButton: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
}

export function renderTariffsTableNavigation(props: TariffsTableNavigationProps) {
  const { showNextButton, showPrevButton, onNextClick, onPrevClick } = props;
  return (
    <div>
      <div className="absolute top-7 right-7 z-10">
        <ArrowButton
          onClick={onNextClick}
          disabled={!showNextButton}
          ariaLabel="Пролистать вправо"
        />
        <ArrowButton
          className="mt-4 rotate-180"
          onClick={onPrevClick}
          disabled={!showPrevButton}
          ariaLabel="Пролистать влево"
        />
      </div>
    </div>
  );
}
