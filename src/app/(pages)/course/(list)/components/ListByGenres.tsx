import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ReactNode } from 'react';
import CourseItem from './Course';

type Props = {
  titleGenres: string | ReactNode;
  data?: ICourseItem[];
};

const ListByGenres = ({ titleGenres }: Props) => {
  return (
    <section className="flex flex-col gap-5">
      {typeof titleGenres == 'string' ? (
        <h3 className="text-xl sm:text-2xl font-semibold">{titleGenres}</h3>
      ) : (
        titleGenres
      )}
      <div className="max-md:hidden grid md:grid-cols-2 xl:grid-cols-4 gap-7">
        {Array.from({ length: 4 }).map((_, index: number) => (
          <CourseItem key={index} />
        ))}
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent className="flex md:hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 max-[380px]:basis-[90%] basis-[75%] sm:basis-[70%]"
            >
              <CourseItem />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ListByGenres;
