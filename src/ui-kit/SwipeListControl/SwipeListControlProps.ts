import { UniBlockProps } from '../../types';

export interface SwipeListControlProps extends UniBlockProps {
  gap?: number;
  margin?: number;
  padding?: number;
  showDots?: boolean;
}

export interface SwipeListControlItemProps {
  className?: string;
}
