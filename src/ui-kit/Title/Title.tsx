import { JSX } from '@redneckz/uni-jsx';
import { TitleSize, TitleProps } from './TitleProps';

export const SizeTableClass: Record<TitleSize, string> = {
  XL: 'text-title-lg',
  L: 'text-title',
  M: 'text-title-sm',
  S: 'text-title-xs',
  '2XS': 'text-title-2xs',
  '3XS': 'text-title-2xs',
};

export const Title = JSX<TitleProps>(({ size = 'L', className, children, ...rest }) => {
  const Tag = size === 'XL' ? 'h1' : 'h2';
  return (
    <Tag className={getClasses(SizeTableClass[size], className)} {...rest}>
      {children}
    </Tag>
  );
});

const getClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');
