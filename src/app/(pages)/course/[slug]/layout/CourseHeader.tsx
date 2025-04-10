import defaultImg from '@/assets/imgs/default.png';
import Container from '@/components/layout/Container';
import StyledButton from '@/components/shared/StyledButton';
import Image from 'next/image';
import Overview from '../components/Overview';

const CourseHeader = () => {
  return (
    <header>
      <Container as="div" className="flex flex-col justify-between !min-h-[calc(100dvh-64px)] z-10">
        <div className="grid gap-5 md:grid-cols-2 relative">
          <section className="max-md:order-last relative flex flex-col max-md:gap-5 justify-between pr-5">
            <h1 className="text-[32px] sm:text-[40px] font-bold tracking-tight leading-[1]">
              Lập trình Javascript cơ bản
            </h1>
            <p className="leading-[1.2] text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos temporibus
              itaque praesentium veritatis, est ducimus at laudantium, unde exercitationem, deserunt
              fugit dicta beatae blanditiis quae! Nihil delectus quidem labore nobis.
            </p>
            <StyledButton
              variant="primary"
              className="max-lg:hidden w-fit px-8 py-6 rounded-full text-lg sm:text-xl"
            >
              Đăng ký
            </StyledButton>
          </section>
          <section className="relative flex justify-center md:justify-end">
            <figure className="max-md:w-full md:max-h-[40dvh] aspect-[16/9] flex items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={defaultImg}
                className="h-full w-auto object-cover"
                alt="banner course"
                priority
                quality={80}
              ></Image>
            </figure>
          </section>
        </div>
        <Overview />
      </Container>
    </header>
  );
};

export default CourseHeader;
