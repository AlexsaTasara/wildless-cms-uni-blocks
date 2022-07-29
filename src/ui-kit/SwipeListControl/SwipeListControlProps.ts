import type { UniBlockProps } from '../../types';
import type { CSSProperties } from 'react';

/**
 * @title Контейнер
 */
export interface SwipeContainer {
  /** @title Расстояние между элементами */
  gap?: number;
  /** @title Отступы */
  padding?: number;
}

/**
 * @title Swipe-контроллер
 */
export interface SwipeListControlProps extends SwipeContainer, UniBlockProps {
  /** @title Точки-индикаторы */
  showDots?: boolean;
}

/**
 * @title Элемент списка
 */
export interface SwipeListControlItemProps {
  className?: string;
  style?: CSSProperties;
}

/**
 * @title Список
 */
export interface SwipeListControlListProps extends SwipeContainer {
  className?: string;
  onScroll?: (e: UIEvent) => void;
}
