import Calendar from './ui/Calendar';
import Circular from './ui/Circular';
import Notice from './Notice';

const RightSidebar = () => {
  return (
    <div>
      <Circular />
      <Notice />
      <Calendar />
    </div>
  );
};
export default RightSidebar;
