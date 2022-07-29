import { context } from '../../setup-fixture';
import { HEADLINE } from '../Headline/Headline.fixture';
import { LINK_DOCS } from '../LinkDocs/LinkDocs.fixture';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import { TILE } from '../Tile/Tile.fixture';
import { PRODUCT_TILE } from '../ProductTile/ProductTile.fixture';
import { defaultProps as GALLERY } from '../Gallery/Gallery.fixture';
import { defaultProps as MINI_GALLERY } from '../MiniGallery/MiniGallery.fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import type {
  HeadlineAccordionBlock,
  LinkDocsAccordionBlock,
  PictureTextAccordionBlock,
  TextBlockAccordionBlock,
  TileAccordionBlock,
  ProductTileAccordionBlock,
  GalleryAccordionBlock,
  MiniGalleryAccordionBlock,
} from './AccordionContent';

const TEXT_BLOCK_ACCORDION_BLOCK: TextBlockAccordionBlock = {
  accordionBlockType: 'TextBlock',
  ...TEXT_BLOCK,
};

const HEADLINE_ACCORDION_BLOCK: HeadlineAccordionBlock = {
  accordionBlockType: 'Headline',
  ...HEADLINE,
};

const PICTURE_TEXT_ACCORDION_BLOCK: PictureTextAccordionBlock = {
  accordionBlockType: 'PictureText',
  ...PICTURE_TEXT,
};

const LINK_DOCS_ACCORDION_BLOCK: LinkDocsAccordionBlock = {
  accordionBlockType: 'LinkDocs',
  ...LINK_DOCS,
  title: '',
};

const TILES_ACCORDION_BLOCK: TileAccordionBlock = {
  accordionBlockType: 'Tile',
  ...TILE,
};

const PRODUCT_TILES_ACCORDION_BLOCK: ProductTileAccordionBlock = {
  accordionBlockType: 'ProductTile',
  ...PRODUCT_TILE,
};

const GALLERY_ACCORDION_BLOCK: GalleryAccordionBlock = {
  accordionBlockType: 'Gallery',
  ...GALLERY,
};

const MINI_GALLERY_ACCORDION_BLOCK: MiniGalleryAccordionBlock = {
  accordionBlockType: 'MiniGallery',
  ...MINI_GALLERY,
};

const propsTextBlock: AccordionProps = {
  title: 'Accordion title',
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      blocks: [TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 2',
      blocks: [PICTURE_TEXT_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 3',
      blocks: [HEADLINE_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 4',
      blocks: [LINK_DOCS_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 5',
      blocks: [TILES_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 6',
      blocks: [PRODUCT_TILES_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 7',
      blocks: [GALLERY_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 8',
      blocks: [MINI_GALLERY_ACCORDION_BLOCK],
    },
  ],
};

export default (
  <div className="container grid grid-cols-12">
    <Accordion className="col-span-12" {...propsTextBlock} />
  </div>
);
