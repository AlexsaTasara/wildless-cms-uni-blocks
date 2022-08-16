export const useComparisonTableScroll = <ColData>({
  colData,
  colsLengthForScroll,
  activeCardIndex,
  setActiveCardIndex,
}: {
  colData: ColData[];
  colsLengthForScroll: number;
  activeCardIndex: number;
  setActiveCardIndex: (_: number) => void;
}) => {
  const onNextClick = () => setActiveCardIndex(activeCardIndex + 1);
  const onPrevClick = () => setActiveCardIndex(activeCardIndex - 1);

  const isScrollAvailable = Boolean(colData?.length && colData.length > colsLengthForScroll);
  const showNextButton =
    isScrollAvailable && colData?.length - activeCardIndex > colsLengthForScroll;
  const showPrevButton = isScrollAvailable && activeCardIndex > 0;

  return { onNextClick, onPrevClick, isScrollAvailable, showNextButton, showPrevButton };
};
