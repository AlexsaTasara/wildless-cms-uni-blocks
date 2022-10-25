import type { LinkProps } from '../../model/LinkProps';

/**
 * @title Группа
 */
export interface GroupTab {
  type: 'group';
  /** @title Тег */
  ref?: string;
  /** @title Название */
  title?: string;
}

/**
 * @title Ссылка
 */
export type LinkTab = LinkProps & {
  type: 'link';
};

/**
 * @title Таб
 * @default {"type": "group"}
 */
export type Tab = GroupTab | LinkTab;

/**
 * @title Вкладки
 */
export interface TabsContent {
  /** @title Табы */
  tabs?: Tab[];
  /** @title Показывать счетчик блоков во вкладках */
  showCounter?: boolean;
}
