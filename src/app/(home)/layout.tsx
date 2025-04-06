import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
