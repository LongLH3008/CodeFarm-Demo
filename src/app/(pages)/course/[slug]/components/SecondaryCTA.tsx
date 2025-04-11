import Logo from '@/assets/imgs/footer-logo.svg';
import StyledButton from '@/components/shared/StyledButton';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SecondaryCTA = () => {
  return (
    <div className="sticky duration-200 w-fit layout_responsive bottom-0 md:border-t md:border-t-zinc-100 md:bg-white max-md:pb-[6px]">
      <div className="max-md:border max-md:border-zinc-100 max-md:shadow-md max-md:rounded-md max-md:px-3 max-md:flex-col max-md:gap-3 md:items-center flex justify-between py-3 md:py-5 bg-white">
        <div className="flex max-md:flex-wrap gap-3 md:gap-10">
          <Image src={Logo} alt="Logo" className="max-lg:hidden w-28"></Image>
          <div className="flex flex-col">
            <h3 className="text-lg font-[500] text-zinc-800">Lập trình Javascript cơ bản</h3>
            <div className="flex max-sm:flex-col sm:items-center sm:gap-4 text-sm">
              <span>30 - 35 buổi học thực tế trên lớp</span>
              <span>Còn lại 2/30 ghế đăng ký</span>
            </div>
          </div>
        </div>
        <div className="justify-end flex max-md:w-full gap-3 max-md:grid max-md:grid-cols-2">
          <Link href={'to:+84...'}>
            <Button className="max-md:w-full hover:text-white bg-zinc-100 text-zinc-600 cursor-pointer w-fit p-5 text-[17px] flex items-center gap-1 active:scale-[0.9] md:rounded-full duration-200">
              <PhoneCall />
              Tư vấn
            </Button>
          </Link>
          <StyledButton
            variant="primary"
            className="max-md:w-full w-fit p-5 text-[17px] md:rounded-full"
          >
            Đăng ký ngay
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCTA;
