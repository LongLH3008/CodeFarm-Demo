import demoWidget from '@/assets/imgs/example.png';
import Image from 'next/image';
import Link from 'next/link';

const AsideWidget = () => {
  return (
    <Link
      href={'/'}
      className="h-48 w-full flex items-center justify-center overflow-hidden rounded-lg shadow-sm"
    >
      <Image
        src={demoWidget}
        width={1}
        height={1}
        className="h-full w-full object-cover"
        alt="Ads"
      />
    </Link>
  );
};

export default AsideWidget;
