import { Check } from 'lucide-react';

const YouWillEarn = () => {
  return (
    <section className="flex gap-5 md:gap-10 max-md:flex-col justify-between">
      <h3 className="text-3xl sm:text-4xl font-[700] leading-none italic tracking-tight md:max-w-1/3">
        Bạn sẽ nhận được gì <br /> sau khóa học ?
      </h3>
      <div className="md:w-[50%] text-zinc-600 tracking-tight flex flex-col gap-3 max-sm:text-[17px] *:flex sm:*:items-center *:gap-3">
        <span>
          <Check className="text-green-600 size-8 sm:size-5" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-5" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-5" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-5" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-5" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span>
          <Check className="text-green-600 size-8 sm:size-5" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
      </div>
    </section>
  );
};

export default YouWillEarn;
