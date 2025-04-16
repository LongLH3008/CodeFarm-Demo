import Container from '@/components/layout/Container';
import Benefits from '../components/Benefits';
import { Chapter } from '../components/Chapter';
import Requirements from '../components/Requirements';
import Testimonial from '../components/Testimonial';
import YouWillEarn from '../components/YouWillEarn';

const CourseBody = () => {
  return (
    <Container
      as="div"
      className="!min-h-fit relative flex flex-col gap-20 md:gap-32 bg-gradient-to-b from-70% from-[#ebfeff] to-white overflow-x-hidden"
    >
      <YouWillEarn />
      <Chapter />
      <Benefits />
      <Requirements />
      <Testimonial />
    </Container>
  );
};

export default CourseBody;
