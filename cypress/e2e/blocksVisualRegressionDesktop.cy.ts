/// <reference types="cypress" />
import * as blockFixture from '../pages/blockFixture';
import * as blockFixtureURLDesktop from '../pages/blockFixtureURLDesktop';

describe('Desktop. Регресс отображения блоков', () => {
  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.Accordion}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.Accordion));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.Accordion);
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.BenefitsBlock}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.BenefitsBlock));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.BenefitsBlock);
  });

  (
    [
      [blockFixture.BlockFixture.ComparisonTable_with_images],
      [blockFixture.BlockFixture.ComparisonTable_with_images_and_hidden_rows],
      [blockFixture.BlockFixture.ComparisonTable_with_images_and_colored_first_column],
      [blockFixture.BlockFixture.ComparisonTable_with_icons],
      [blockFixture.BlockFixture.ComparisonTable_with_icons_and_two_cols],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.CreditCalculator}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.CreditCalculator));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.CreditCalculator);
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.ExchangeRateTile_default}"`, () => {
    cy.visit(
      blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.ExchangeRateTile_default),
    );
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.ExchangeRateTile_default);
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.Footer}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.Footer));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.Footer);

    const secondStateName = `${blockFixture.BlockFixture.Footer}_activeSearchBar`;
    blockFixture.activeSearchBar();
    blockFixture.getBlock().compareSnapshot(secondStateName);
  });

  (
    [
      [blockFixture.BlockFixture.Gallery_default],
      [blockFixture.BlockFixture.Gallery_text_and_button],
      [blockFixture.BlockFixture.Gallery_list_and_button],
      [blockFixture.BlockFixture.Gallery_text_and_no_button],
      [blockFixture.BlockFixture.Gallery_only_title],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);

      const secondStateName = `${BlockFixture}_scrolledRight`;
      blockFixture.galleryScrollRight();
      blockFixture.getBlock().compareSnapshot(secondStateName);
    });
  });

  (
    [
      [blockFixture.BlockFixture.Header_default],
      [blockFixture.BlockFixture.Header_transparent],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  (
    [
      [blockFixture.BlockFixture.Headline_default],
      [blockFixture.BlockFixture.Headline_left_white],
      [blockFixture.BlockFixture.Headline_right_transparent],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.LikeControl}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.LikeControl));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.LikeControl);
  });

  (
    [
      [blockFixture.BlockFixture.LinkDocs_two_columns_default],
      [blockFixture.BlockFixture.LinkDocs_one_column],
      [blockFixture.BlockFixture.LinkDocs_another_icon],
      [blockFixture.BlockFixture.LinkDocs_no_icon_and_title],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  (
    [
      [blockFixture.BlockFixture.MiniGallery_default],
      [blockFixture.BlockFixture.MiniGallery_only_title],
      [blockFixture.BlockFixture.MobileAppTile_default],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.Navigation}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.Navigation));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.Navigation);
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.Placeholder}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.Placeholder));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.Placeholder);
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.PictureText_default}"`, () => {
    cy.visit(
      blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.PictureText_default),
    );
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.PictureText_default);
  });

  (
    [
      [blockFixture.BlockFixture.ProductBlock_default],
      [blockFixture.BlockFixture.ProductBlock_secondary],
      [blockFixture.BlockFixture.ProductBlock_with_items],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.ProductGallery}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.ProductGallery));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.ProductGallery);
  });

  (
    [
      [blockFixture.BlockFixture.ProductTile_credit],
      [blockFixture.BlockFixture.ProductTile_pension],
      [blockFixture.BlockFixture.ProductTile_credit_card],
      [blockFixture.BlockFixture.ProductTile_pension_credit],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  (
    [
      [blockFixture.BlockFixture.ProductTile_credit],
      [blockFixture.BlockFixture.ProductTile_pension],
      [blockFixture.BlockFixture.ProductTile_credit_card],
      [blockFixture.BlockFixture.ProductTile_pension_credit],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.PromoTile_default}"`, () => {
    cy.visit(
      blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.PromoTile_default),
    );
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.PromoTile_default);
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.StepsBlock}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.StepsBlock));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.StepsBlock);
  });

  (
    [
      [blockFixture.BlockFixture.TariffsTable_default],
      [blockFixture.BlockFixture.TariffsTable_1_column],
      [blockFixture.BlockFixture.TariffsTable_2_columns],
      [blockFixture.BlockFixture.TariffsTable_3_columns],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });

  it(`Desktop. Регресс отображения блока "${blockFixture.BlockFixture.TextBlock}"`, () => {
    cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(blockFixture.BlockFixture.TextBlock));
    blockFixture.getBlock().compareSnapshot(blockFixture.BlockFixture.TextBlock);
  });

  (
    [
      [blockFixture.BlockFixture.Tile_credit],
      [blockFixture.BlockFixture.Tile_mortgage],
      [blockFixture.BlockFixture.Tile_credit_card],
      [blockFixture.BlockFixture.Tile_premium],
      [blockFixture.BlockFixture.Tile_ecosystem],
    ] as Array<[blockFixture.BlockFixture]>
  ).forEach(([BlockFixture]) => {
    it(`Desktop. Регресс отображения блока "${BlockFixture}"`, () => {
      cy.visit(blockFixtureURLDesktop.getBlockFixtureURL(BlockFixture));
      blockFixture.getBlock().compareSnapshot(BlockFixture);
    });
  });
});
