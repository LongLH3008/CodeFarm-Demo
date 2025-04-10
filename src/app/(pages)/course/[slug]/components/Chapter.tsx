import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CircleDashed } from 'lucide-react';

export function Chapter() {
  return (
    <section className="flex max-md:flex-col max-md:gap-5 justify-between !min-h-fit">
      <div className="flex flex-col md:max-w-1/2 gap-5 md:gap-10 md:pr-[10%]">
        <h3 className="text-3xl sm:text-4xl font-[700] tracking-tight italic">Nội dung khóa học</h3>
        <p className="text-justify text-zinc-600 leading-[1.4] tracking-tight">
          Khóa học JavaScript cơ bản là bước khởi đầu lý tưởng dành cho những ai muốn tiếp cận lập
          trình web hiện đại. Trong khóa học này, bạn sẽ được trang bị nền tảng vững chắc về
          JavaScript – ngôn ngữ lập trình phổ biến nhất hiện nay dùng để xây dựng các website tương
          tác và động. Bạn sẽ học cách khai báo biến, sử dụng các kiểu dữ liệu, cấu trúc điều kiện,
          vòng lặp, hàm, mảng và đối tượng. Không chỉ dừng lại ở lý thuyết, khóa học còn cung cấp
          nhiều ví dụ thực tế và bài tập giúp bạn hiểu sâu, nhớ lâu và có thể áp dụng ngay vào các
          dự án đơn giản.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="md:w-[50%] outline-none border rounded-lg max-md:py-0 p-5"
      >
        {Array.from({ length: 6 }).map((_, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg cursor-pointer">
              <span className="flex items-center gap-5">
                <CircleDashed size={13} />
                Chương {index + 1}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[17px] sm:text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro, voluptas ipsam
              eaque, expedita quis sit distinctio nobis voluptate beatae, totam inventore.
              Distinctio aliquam impedit tenetur eligendi eaque illum ad.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
