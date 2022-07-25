/**
 * @title Отображение списка
 * @enumNames [
 *    "Вертикально",
 *    "Горизонтально",
 *    ]
 */
export type ListControlMode = 'vertical' | 'horizontal';

export interface ListControlContent {
  listMode?: ListControlMode;
  /** @title Расстояние между элементами */
  gap?: number;
  /** @title Внутренние отступы контейнера */
  paddingX?: number;
}
