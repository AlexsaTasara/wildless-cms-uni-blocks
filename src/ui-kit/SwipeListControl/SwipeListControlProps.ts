import type { UniBlockProps } from '../../types';
import type { CSSProperties } from 'react';

export interface SwipeListControlProps extends UniBlockProps {
  showDots?: boolean;
}

export interface SwipeListControlItemProps {
  className?: string;
  style?: CSSProperties;
}
