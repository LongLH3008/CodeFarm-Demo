import defaultImg from '@/assets/imgs/example.png';
import Logo from '@/assets/imgs/footer-logo.svg';
import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Chapter } from './components/Chapter';
import RelatedCourse from './components/RelatedCourse';
import YouWillEarn from './components/YouWillEarn';

const CourseDetail = () => {
  return (
    <article>
      <header>
        <Container
          as="section"
          className="grid gap-5 md:grid-cols-2 !min-h-fit relative overflow-hidden relative"
        >
          <div className="max-md:order-last relative flex flex-col max-md:gap-5 justify-between pr-5">
            <h1 className="text-[32px] sm:text-[40px] font-bold tracking-tight leading-[1]">
              Lập trình Javascript cơ bản
            </h1>
            <p className="leading-[1.2] text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos temporibus
              itaque praesentium veritatis, est ducimus at laudantium, unde exercitationem, deserunt
              fugit dicta beatae blanditiis quae! Nihil delectus quidem labore nobis.
            </p>
            <Button className="w-fit px-8 py-6 text-lg sm:text-xl">Đăng ký</Button>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <figure className="max-h-[35dvh] aspect-[16/9] flex items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={defaultImg}
                className="h-full w-auto object-cover"
                alt="banner course"
              ></Image>
            </figure>
          </div>
        </Container>
        <Container as="section" className="!min-h-fit">
          <div className="rounded-md p-4 w-full border grid sm:grid-cols-2 lg:grid-cols-4 bg-white">
            <div className="flex flex-col py-2 px-5 border-r max-lg:border-b max-sm:border-r-0">
              <h3 className="font-[600] text-lg">8 chương kiến thức</h3>
              <span className="md:text-sm">Mỗi chương khoảng 5 - 7 bài giảng</span>
            </div>
            <div className="flex flex-col py-2 px-5 border-r max-lg:border-b max-sm:border-r-0">
              <h3 className="font-[600] text-lg">Độ khó kiến thức</h3>
              <span className="md:text-sm">Lượng kiến thức đáp ứng ở mức dễ</span>
            </div>
            <div className="flex flex-col py-2 px-5 border-r max-sm:border-r-0 max-sm:border-b">
              <h3 className="font-[600] text-lg">Thời gian học 3 tháng</h3>
              <span className="md:text-sm">Mỗi tuần 2 - 3 buổi / 2 tiếng</span>
            </div>
            <div className="flex flex-col py-2 px-5">
              <h3 className="font-[600] text-lg">Lịch trình</h3>
              <span className="md:text-sm">8h - 18h các ngày trong tuần</span>
            </div>
          </div>
        </Container>
      </header>
      <Chapter />
      <YouWillEarn />
      <RelatedCourse />
      <div className="sticky bottom-0 w-fit layout_responsive bottom-0 border-t max-md:flex-col max-md:gap-3 flex justify-between items-center py-5 bg-white">
        <div className="flex max-md:flex-wrap items-center gap-3 md:gap-10">
          <Image src={Logo} alt="Logo" className="max-lg:hidden w-28"></Image>
          <h3 className="text-lg font-[500] text-zinc-800">Lập trình Javascript cơ bản</h3>
          <div className="flex max-sm:flex-col sm:items-center sm:gap-4 md:text-sm">
            <span>30 - 35 buổi học thực tế trên lớp</span>
            <span>Còn lại 2/30 ghế đăng ký</span>
          </div>
        </div>
        <div className="justify-end flex max-md:w-full">
          <Button className="max-md:w-full w-fit p-5 text-lg">Đăng ký ngay</Button>
        </div>
      </div>
    </article>
  );
};

export default CourseDetail;
