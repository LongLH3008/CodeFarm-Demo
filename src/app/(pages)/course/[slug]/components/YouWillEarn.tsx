import Container from '@/components/layout/Container';
import { Check } from 'lucide-react';

const YouWillEarn = () => {
  return (
    <Container
      as="section"
      className="flex gap-5 sm:gap-10 max-sm:flex-col justify-between !min-h-fit"
    >
      <h3 className="text-3xl sm:text-4xl font-[800] uppercase font-mono tracking-tight italic sm:max-w-1/3">
        Bạn sẽ nhận được gì <br /> sau khóa học ?
      </h3>
      <div className="sm:w-[50%] flex flex-col gap-3 max-sm:text-[17px] *:flex sm:*:items-center *:gap-3">
        <span>
          <Check className="text-green-600 size-8 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
      </div>
    </Container>
  );
};

export default YouWillEarn;
