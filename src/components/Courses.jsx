import Circular from './ui/Circular';
import Degrees from './Degrees';
import Calendar from './ui/Calendar';
import Notice2 from './ui/Notice2';

const Courses = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-2'>
      <div className='lg:w-2/3'>
        <Degrees />
      </div>
      <div className='lg:w-1/3 p-5 space-y-10 bg-white'>
        <Circular />
        <Notice2/>
        <Calendar />
      </div>
    </div>
  );
};
export default Courses;
