import { useDidMount } from './useDidMount';
import type { ContentPageContext } from '../components/ContentPage/ContentPageContext';

export const useDOMContentLoaded = (
  context: ContentPageContext,
  callback?: (windowEvent?: Event) => void,
) => {
  useDidMount(context, () => {
    window.addEventListener('DOMContentLoaded', (e: Event) => {
      callback?.(e);
    });
  });
};
