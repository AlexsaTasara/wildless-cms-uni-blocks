import type { LinkProps } from '../../model/LinkProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

/**
 * @title Отображение списка
 * @enumNames [
 *    "Одна колонка",
 *    "Две колонки",
 *    ]
 */
export type LinkColumnsMode = 'single' | 'double';

/**
 * @title Отображение списка (моб.)
 * @enumNames [
 *    "Вертикально",
 *    "Горизонтально",
 *    ]
 */
export type LinkListMode = 'vertical' | 'horizontal';

/**
 * @title Элемент списка
 */
export interface LinkDocsItem extends LinkProps {
  /** @title размер файла */
  fileSize?: string;
}

/**
 * @title Список документов
 */
export interface LinkDocsContent extends Pick<BaseTileCommonProps, 'title' | 'align'> {
  /** @title Подзаголовок */
  subtitle?: string;
  /** @title Название иконки */
  icon?: IconName;
  /** @title Список */
  documents?: LinkDocsItem[];
  columnsMode?: LinkColumnsMode;
  listMode?: LinkListMode;
  /** @title Рамка элементов (моб.) */
  hasBorder?: boolean;
}
