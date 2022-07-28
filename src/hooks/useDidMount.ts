import type { ContentPageContext } from '../components/ContentPage/ContentPageContext';

export const useDidMount = (context: ContentPageContext, callback?: () => void) => {
  const [isFirstRun, setIsFirstRun] = context.useState(true);

  if (isFirstRun) {
    callback?.();
    setIsFirstRun(false);
  }
};
