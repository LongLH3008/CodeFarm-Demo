import Container from '@/components/layout/Container';
import ListByGenres from '../../(list)/components/ListByGenres';

type Props = {};

const RelatedCourse = (props: Props) => {
  return (
    <Container as="section" className="!min-h-fit">
      <ListByGenres titleGenres="Khóa học liên quan" />
    </Container>
  );
};

export default RelatedCourse;
