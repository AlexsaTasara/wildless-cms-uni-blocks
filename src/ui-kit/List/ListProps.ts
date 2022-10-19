import type { ListContent } from './ListContent';

/**
 * @title Размер пунктов списка
 * @enumNames ["Средний", "Большой"]
 */
export type ListItemSize = 'M' | 'L';

/**
 * @title Версия списка
 * @enumNames ["Основной", "Второстепенный", "Серый"]
 */
export type ListItemVersion = 'primary' | 'secondary' | 'gray' | 'tile' | 'tile-white';

/**
 * @title Содержимое списка
 */
export interface ListProps extends ListContent {
  /** @hidden */
  className?: string;
  /** @hidden */
  itemClassName?: string;
  /** @title Буллиты */
  isDotted?: boolean;
  listItemSize?: ListItemSize;
  version?: ListItemVersion;
}
