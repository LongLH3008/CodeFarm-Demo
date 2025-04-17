import { ReactNode } from 'react';
import ListChapter from './components/ListChapter';
import { ListChapterResponsive } from './components/ListChapterResponsive';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <ListChapterResponsive>{children}</ListChapterResponsive>
      <ListChapter>{children}</ListChapter>
    </>
  );
};

export default Layout;
