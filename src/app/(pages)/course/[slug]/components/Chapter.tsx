import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CircleDashed, Diamond, TextSelect } from 'lucide-react';

export function Chapter() {
  return (
    <section className="flex max-md:flex-col max-md:gap-10 justify-between !min-h-fit">
      <div className="flex flex-col md:max-w-1/2 gap-5 md:gap-10 md:pr-[10%]">
        <h3 className="text-3xl sm:text-4xl font-[500] tracking-tight">Nội dung khóa học</h3>
        <div className="flex flex-col gap-3 text-zinc-600 *:leading-[1.4] *:tracking-tight">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <span className="flex items-center gap-4 text-lg" key={index}>
              <Diamond size={16} className="fill-cyan-500 stroke-none" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam dignissimos
              explicabo velit nemo at nisi eaque est
            </span>
          ))}
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="md:w-[50%] bg-white outline-none shadow-md rounded-lg p-5 relative overflow-hidden"
      >
        <span className="h-1 w-full bg-gradient-to-r from-[#11ccf5] to-[#7ed276] absolute top-0 left-0"></span>
        <div className="flex items-center gap-2 mb-3">
          <TextSelect className="text-zinc-400" size={18} />
          <span className="text-zinc-400 font-[500] md:text-sm">Chapters</span>
        </div>
        <hr />
        {Array.from({ length: 6 }).map((_, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="cursor-pointer outline-none border-none ring-none">
              <span className="flex items-start gap-5 max-md:text-lg">
                <CircleDashed size={13} />
                Chương {index + 1}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-[17px] md:text-[15px]">
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
