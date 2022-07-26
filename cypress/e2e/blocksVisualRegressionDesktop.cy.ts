/// <reference types="cypress" />
import * as blockURLWrapper from '../pages/blockURLWrapper';
import * as blockWrapper from '../pages/blockWrapper';

describe('Desktop. Регресс отображения блоков', () => {
  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.Accordion}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.Accordion));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.Accordion);
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.BenefitsBlock}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.BenefitsBlock));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.BenefitsBlock);
  });

  (
    [
      [blockWrapper.blockType.ComparisonTable_with_images],
      [blockWrapper.blockType.ComparisonTable_with_images_and_hidden_rows],
      [blockWrapper.blockType.ComparisonTable_with_images_and_colored_first_column],
      [blockWrapper.blockType.ComparisonTable_with_icons],
      [blockWrapper.blockType.ComparisonTable_with_icons_and_two_cols],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.CreditCalculator}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.CreditCalculator));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.CreditCalculator);
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.ExchangeRateTile_default}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.ExchangeRateTile_default));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.ExchangeRateTile_default);
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.Footer}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.Footer));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.Footer);

    const secondStateName = `${blockWrapper.blockType.Footer}_activeSearchBar`;
    blockWrapper.activeSearchBar();
    blockWrapper.getBlock().matchImageSnapshot(secondStateName);
  });

  (
    [
      [blockWrapper.blockType.Gallery_default],
      [blockWrapper.blockType.Gallery_text_and_button],
      [blockWrapper.blockType.Gallery_list_and_button],
      [blockWrapper.blockType.Gallery_text_and_no_button],
      [blockWrapper.blockType.Gallery_only_title],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);

      const secondStateName = `${blockType}_scrolledRight`;
      blockWrapper.galleryScrollRight();
      blockWrapper.getBlock().matchImageSnapshot(secondStateName);
    });
  });

  (
    [[blockWrapper.blockType.Header_default], [blockWrapper.blockType.Header_transparent]] as Array<
      [blockWrapper.blockType]
    >
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  (
    [
      [blockWrapper.blockType.Headline_default],
      [blockWrapper.blockType.Headline_left_white],
      [blockWrapper.blockType.Headline_right_transparent],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.LikeControl}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.LikeControl));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.LikeControl);
  });

  (
    [
      [blockWrapper.blockType.LinkDocs_two_columns_default],
      [blockWrapper.blockType.LinkDocs_one_column],
      [blockWrapper.blockType.LinkDocs_another_icon],
      [blockWrapper.blockType.LinkDocs_no_icon_and_title],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  (
    [
      [blockWrapper.blockType.MiniGallery_default],
      [blockWrapper.blockType.MiniGallery_only_title],
      [blockWrapper.blockType.MobileAppTile_default],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.Navigation}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.Navigation));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.Navigation);
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.Placeholder}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.Placeholder));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.Placeholder);
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.PictureText_default}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.PictureText_default));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.PictureText_default);
  });

  (
    [
      [blockWrapper.blockType.ProductBlock_default],
      [blockWrapper.blockType.ProductBlock_secondary],
      [blockWrapper.blockType.ProductBlock_with_items],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.ProductGallery}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.ProductGallery));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.ProductGallery);
  });

  (
    [
      [blockWrapper.blockType.ProductTile_credit],
      [blockWrapper.blockType.ProductTile_pension],
      [blockWrapper.blockType.ProductTile_credit_card],
      [blockWrapper.blockType.ProductTile_pension_credit],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  (
    [
      [blockWrapper.blockType.ProductTile_credit],
      [blockWrapper.blockType.ProductTile_pension],
      [blockWrapper.blockType.ProductTile_credit_card],
      [blockWrapper.blockType.ProductTile_pension_credit],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.PromoTile_default}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.PromoTile_default));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.PromoTile_default);
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.StepsBlock}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.StepsBlock));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.StepsBlock);
  });

  (
    [
      [blockWrapper.blockType.TariffsTable_default],
      [blockWrapper.blockType.TariffsTable_1_column],
      [blockWrapper.blockType.TariffsTable_2_columns],
      [blockWrapper.blockType.TariffsTable_3_columns],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockWrapper.blockType.TextBlock}"`, () => {
    cy.visit(blockURLWrapper.getURL(blockWrapper.blockType.TextBlock));
    blockWrapper.getBlock().matchImageSnapshot(blockWrapper.blockType.TextBlock);
  });

  (
    [
      [blockWrapper.blockType.Tile_credit],
      [blockWrapper.blockType.Tile_mortgage],
      [blockWrapper.blockType.Tile_credit_card],
      [blockWrapper.blockType.Tile_premium],
      [blockWrapper.blockType.Tile_ecosystem],
    ] as Array<[blockWrapper.blockType]>
  ).forEach(([blockType]) => {
    it(`Desktop. Регресс отображения блока "${blockType}"`, () => {
      cy.visit(blockURLWrapper.getURL(blockType));
      blockWrapper.getBlock().matchImageSnapshot(blockType);
    });
  });
});
