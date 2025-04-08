import Container from '@/components/layout/Container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CircleDashed } from 'lucide-react';

export function Chapter() {
  return (
    <Container
      as="section"
      className="flex gap-5 sm:gap-10 max-sm:flex-col justify-between !min-h-fit"
    >
      <h3 className="text-3xl sm:text-4xl font-[800] uppercase font-mono leading-none tracking-tight italic">
        Tóm tắt nội dung
      </h3>
      <Accordion
        type="single"
        collapsible
        className="sm:w-[50%] outline-none border rounded-lg p-5"
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
    </Container>
  );
}
