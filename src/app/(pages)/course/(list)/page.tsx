import Container from '@/components/layout/Container';
import { Metadata } from 'next';
import ListByGenres from './components/ListByGenres';
import ListBySpecial from './components/ListBySpecial';
import SearchAndFilter from './components/SearchAndFilter';
import SearchAndFilterMobile from './components/SearchAndFilterMobile';

export const metadata: Metadata = {
  title: 'Khóa học',
};

const ListCourse = () => {
  return (
    <Container className="relative w-full flex flex-col gap-10">
      <SearchAndFilter />
      <SearchAndFilterMobile />
      <ListBySpecial title="Dành cho người mới bắt đầu" theme="green" />
      <ListByGenres titleGenres="Lập trình Web" />
      <ListByGenres titleGenres="Lập trình Mobile" />
      <ListByGenres titleGenres="Lập trình AI" />
      <ListBySpecial title="Sắp ra mắt thời gian tới ..." theme="blue" />
    </Container>
  );
};

export default ListCourse;
