import defaultImg from '@/assets/imgs/example.png';
import Brand from '@/components/icons/FooterLogo';
import Container from '@/components/layout/Container';
import StyledButton from '@/components/shared/StyledButton';
import Image from 'next/image';
import BannerMarquee from '../components/BannerMarquee';
import Overview from '../components/Overview';

const CourseHeader = () => {
  return (
    <header className="relative bg-gradient-to-b from-white to-[#ebfeff]">
      <Container
        as="div"
        className="flex flex-col max-md:gap-10 sm:!py-10 md:!py-20 justify-between !min-hit-fit md:!min-h-[calc(100dvh-64px)] z-10 relative overflow-hidden"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <section className="max-md:order-last relative flex flex-col max-md:gap-5 max-md:text-center max-md:items-center justify-between pr-[5%]">
            <Brand className="max-md:hidden h-6 w-fit" />
            <h1 className="text-[40px] sm:text-[48px] font-[500] font-sans leading-[1]">
              Lập trình{' '}
              <span className="bg-gradient-to-br bg-clip-text text-transparent from-blue-600 to-green-500 italic font-[600]">
                Javascript
              </span>{' '}
              cơ bản
            </h1>
            <p className="leading-[1.2] text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos temporibus
              itaque praesentium veritatis, est ducimus at laudantium, unde exercitationem, deserunt
              fugit dicta beatae blanditiis quae! Nihil delectus quidem labore nobis.
            </p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-[600] tracking-tight">+300</span>
              <span>học viên đã tham gia</span>
            </div>
            <StyledButton
              variant="primary"
              className="w-fit px-12 md:px-8 py-6 rounded-full text-lg sm:text-xl"
            >
              Đăng ký
            </StyledButton>
          </section>
          <section className="flex justify-center md:justify-end">
            <div className="relative p-5">
              <span className="h-full w-full absolute top-0 right-0 pr-5 pb-5 rounded-[29px] border-2 border-[#1bd0f5]">
                <div className="h-full w-full -translate-5 rounded-[29px] border-2 pr-5 pb-5 border-[#a2f2ff]">
                  <div className="h-full w-full -translate-5 rounded-[29px] border-2 pr-5 pb-5 border-[#cdf9ff]"></div>
                </div>
              </span>
              <figure className="relative rounded-xl relative max-lg:w-full md:max-h-[35dvh] aspect-[16/9] flex items-center justify-center overflow-hidden rounded-[9px]">
                <Image
                  src={defaultImg}
                  className="h-full w-auto object-cover"
                  alt="banner course"
                  priority
                  quality={80}
                ></Image>
              </figure>
            </div>
          </section>
        </div>
        <Overview />
      </Container>
      <BannerMarquee />
    </header>
  );
};

export default CourseHeader;
