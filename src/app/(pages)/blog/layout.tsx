import Main from '@/components/layout/Container';
import { ReactNode } from 'react';
import Aside from './Aside';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Main className="relative flex items-start max-xl:flex-col gap-5">
      {children}
      <Aside />
    </Main>
  );
};

export default Layout;
