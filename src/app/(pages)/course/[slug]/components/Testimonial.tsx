import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="flex flex-col gap-8 overflow-hidden">
      <h3 className="text-3xl sm:text-4xl font-[700] italic leading-none tracking-tight md:max-w-1/3">
        Đánh giá từ <br /> các học viên đã tham gia
      </h3>
      <div className="relative">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full px-2"
        >
          <div className="max-md:hidden absolute -top-10 right-16 *:cursor-pointer flex items-center gap-1">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[75%] md:basis-1/2 lg:basis-1/3">
                <div className="px-5 w-full rounded-md cursor-pointer select-none flex flex-col gap-2 border border-zinc-200 p-5">
                  <div className="flex justify-between">
                    <figure className="size-10 bg-zinc-100 rounded-full"></figure>
                    <Quote className="stroke-none fill-blue-200" />
                  </div>
                  <span className="font-[500]">Tên học viên</span>
                  <span className="text-sm text-zinc-500 tracking-tight mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate omnis illo
                    quae maiores, incidunt debitis modi commodi ipsam asperiores esse natus illum
                    similique? At voluptates dolor, architecto perferendis fugit atque.
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
