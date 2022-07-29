import type { HeadlineContent } from '../Headline/HeadlineContent';
import type { LinkDocsContent } from '../LinkDocs/LinkDocsContent';
import type { PictureTextContent } from '../PictureText/PictureTextContent';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { TileContent } from '../Tile/TileContent';
import type { ProductTileContent } from '../ProductTile/ProductTileContent';
import type { GalleryContent } from '../Gallery/GalleryContent';
import type { MiniGalleryContent } from '../MiniGallery/MiniGalleryContent';

/**
 * @title Тип блока
 */
export type AccordionTypeBlock =
  | 'Headline'
  | 'LinkDocs'
  | 'PictureText'
  | 'TextBlock'
  | 'Tile'
  | 'ProductTile'
  | 'Gallery'
  | 'MiniGallery';

/**
 * @title Заголовок
 */
export interface HeadlineAccordionBlock extends HeadlineContent {
  /** @default Headline */
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Список документов
 */
export interface LinkDocsAccordionBlock extends LinkDocsContent {
  /** @default LinkDocs */
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Текстовый блок
 */
export interface TextBlockAccordionBlock extends TextBlockContent {
  /** @default TextBlock */
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Картинка с текстом
 */
export interface PictureTextAccordionBlock extends PictureTextContent {
  /** @default PictureText */
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Плитка
 */
export interface TileAccordionBlock extends TileContent {
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Продуктовая плитка
 */
export interface ProductTileAccordionBlock extends ProductTileContent {
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Галлерея
 */
export interface GalleryAccordionBlock extends GalleryContent {
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Мини-галлерея
 */
export interface MiniGalleryAccordionBlock extends MiniGalleryContent {
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Выберите блок
 */
export type EmptyOption = null;

/**
 * @title Содержимое аккордеона
 */
export type AccordionBlockProps =
  | EmptyOption
  | HeadlineAccordionBlock
  | LinkDocsAccordionBlock
  | TextBlockAccordionBlock
  | PictureTextAccordionBlock
  | TileAccordionBlock
  | ProductTileAccordionBlock
  | GalleryAccordionBlock
  | MiniGalleryAccordionBlock;

/**
 * @title Элемент списка
 */
export interface AccordionItemCommonProps {
  /**
   * @title Название
   * @default Список
   */
  label?: string;
  /** @title Блоки */
  blocks?: AccordionBlockProps[];
  /**
   * @title Отображать/скрывать обводку элемента
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
}

/**
 * @title Аккордеон
 */
export interface AccordionContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список */
  accordionItems?: AccordionItemCommonProps[];
  /** @title Подзаголовок */
  description?: string; // TODO: только для мобильной версии
  /**
   * @title Отображать/скрывать обводку у элемента списка
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
}
