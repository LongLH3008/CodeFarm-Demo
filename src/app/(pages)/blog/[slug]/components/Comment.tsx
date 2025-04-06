import HoverLabel from '@/components/shared/HoverLabel';
import { Heart, Quote } from 'lucide-react';

type CommentItemProps = {
  level: 'parent' | 'children';
};

const CommentItem = ({ level }: CommentItemProps) => {
  return (
    <div className={`flex gap-3 ${level == 'children' ? 'pl-2' : ''}`}>
      <figure className="min-w-8 h-8 sm:min-w-10 sm:h-10 rounded-full bg-zinc-100"></figure>
      <div className="flex flex-col text-sm min-w-48 w-fit border rounded-lg p-3 relative">
        <div className="absolute top-3 right-3 flex items-center gap-3">
          {level == 'parent' && (
            <HoverLabel label="Xem trả lời / Trả lời bình luận">
              <div className="flex items-center group cursor-pointer text-[13px] gap-1">
                28
                <Quote
                  size={13}
                  className="group-active:scale-[0.8] group-hover:scale-[1.2] duration-200"
                />
              </div>
            </HoverLabel>
          )}
          <HoverLabel label="Nhấn để yêu thích bình luận">
            <div className="flex items-center group cursor-pointer text-[13px] gap-1">
              28
              <Heart
                size={13}
                className="group-hover:text-rose-500 group-active:scale-[0.8] group-hover:scale-[1.2] duration-200"
              />
            </div>
          </HoverLabel>
        </div>
        <span className="font-[500] pr-24">Author</span>
        <span className="flex items-center !text-[10px] text-zinc-500">03/04/2024</span>
        <p className="text-sm leading-[1.1] mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis, quam ad
          doloremque cumque, facilis qui earum ea iure vel tempora, error optio animi molestias.
          Excepturi nulla pariatur facilis labore?
        </p>
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div className="flex flex-col gap-3">
      <CommentItem level="parent" />
      <div className="pl-10 w-full flex flex-col gap-2">
        <CommentItem level="children" />
        <CommentItem level="children" />
      </div>
    </div>
  );
};

export default Comment;
