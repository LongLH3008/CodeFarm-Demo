import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import CourseItem from './Course';

type Props = {
  title: string;
  theme: 'blue' | 'green';
};

type Themes = {
  [key: string]: { background: string; title: string };
};

const themes: Themes = {
  green: {
    background: 'bg-gradient-to-br from-green-200 to-green-300',
    title: 'bg-clip-text bg-gradient-to-b from-emerald-600 to-emerald-50',
  },
  blue: {
    background: 'bg-gradient-to-br from-blue-100 to-blue-400',
    title: 'bg-clip-text bg-gradient-to-b from-cyan-600 to-cyan-50',
  },
};

const ListBySpecial = ({ title, theme }: Props) => {
  return (
    <section
      className={`w-full relative p-2 pr-0 flex items-center max-md:flex-col gap-1 sm:gap-5 rounded-2xl ${themes[theme].background}`}
    >
      <div className="md:w-1/4 w-full h-full flex items-start p-2">
        <h3
          className={`w-[80%] drop-shadow-md md:w-[90%] font-[800] text-4xl sm:text-[40px] leading-[1.1] uppercase text-[rgba(0,0,0,0.3)] ${themes[theme].title}`}
        >
          {title}
        </h3>
      </div>
      <div className="w-full md:w-3/4 p-5 overflow-hidden">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent className="flex">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-1 max-[420px]:basis-[100%] basis-[70%]"
              >
                <CourseItem />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ListBySpecial;
