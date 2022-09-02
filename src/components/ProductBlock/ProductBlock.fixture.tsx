import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { ProductBlock } from './ProductBlock';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { ProductBlockContent } from './ProductBlockContent';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  alt: 'Потребительский кредит наличными',
  size: {
    width: 280,
    height: 280,
  },
};

const breadcrumbs = [
  {
    text: 'Главная',
    href: '/',
  },
  {
    text: 'Кредитные карты',
    href: '/credit',
  },
  {
    text: 'Кредитная карта Своя Union Pay',
  },
];

const benefits: Benefit[] = [
  {
    label: 'До 5 млн ₽',
    description: 'Кредитный лимит',
    icon: { icon: 'EmptyWalletIcon' },
  },
  {
    label: 'От 16,9%',
    description: 'Ставка по кредиту',
    icon: { icon: 'PercentageSquareIcon' },
  },
  {
    label: 'До 5 лет',
    description: 'Срок кредитования',
    icon: { icon: 'CalendarIcon' },
  },
];

const buttons: ButtonWithIconProps[] = [
  {
    href: 'https://rshb.ru',
    text: 'Оформить карту',
    target: '_blank',
    version: 'primary',
  },
  {
    href: 'https://rshb.ru',
    text: 'Подробнее',
    target: '_blank',
    version: 'secondary',
  },
];

export const PRODUCT_BLOCK: ProductBlockContent = {
  title: 'Оплата проходит в 180 странах мира',
  headingType: 'h2',
  description:
    'Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт.',
  items: [
    'Совершайте любые личные покупки',
    'Используйте корпоративную карту как обычную дебетовую, если вы ИП',
    'Расходы для бизнеса на УСН 15% позволят снизить налоговую базу',
  ],
  buttons: buttons,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title={'Потребительский кредит наличными'}
        headingType="h2"
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        breadcrumbs={breadcrumbs}
        benefits={benefits}
        buttons={buttons}
        image={image}
      />
    </div>
  ),
  secondary: (
    <div className="container grid grid-cols-12">
      <ProductBlock
        context={context}
        className="col-span-12"
        title={'Потребительский кредит наличными'}
        headingType="h2"
        version={'secondary'}
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        breadcrumbs={breadcrumbs}
        benefits={benefits}
        buttons={buttons}
        image={image}
      />
    </div>
  ),
  'with items': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        breadcrumbs={breadcrumbs}
        {...PRODUCT_BLOCK}
        image={image}
      />
    </div>
  ),
  'without image': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        breadcrumbs={breadcrumbs}
        {...PRODUCT_BLOCK}
      />
    </div>
  ),
};
