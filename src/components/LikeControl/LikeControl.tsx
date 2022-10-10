import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { LikeButton } from '../../ui-kit/Button/LikeButton';

export const LikeControl = JSX<UniBlockProps>(({ className, context, ...rest }) => {
  const likeService = context.useLikeService();

  return (
    <BlockWrapper
      tag="div"
      context={context}
      className={`border-main border-2 border-solid bg-white flex w-[125px] items-center justify-center gap-3 p-2 font-sans ${
        className || ''
      }`}
      {...rest}
    >
      <LikeButton onClick={likeService.like} ariaLabel="Поставить отметку «лайк»" />
      <LikeButton
        onClick={likeService.dislike}
        className="rotate-180"
        ariaLabel="Поставить отметку «дизлайк»"
      />
      <span className="select-none">{likeService.likeCount}</span>
    </BlockWrapper>
  );
});
