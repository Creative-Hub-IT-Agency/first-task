import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='bg-[#002742] min-h-40 py-4'>
      {/* upper part */}
      <ul className='flex justify-end gap-2 font-semibold text-white pr-12 uppercase text-[13px] brightness-150 border-b-[1px] pb-2'>
        <li>
          <>
            <a href='#'>Students</a>
            <span className='font-extralight ml-1'>〡</span>
          </>
        </li>
        <li>
          <>
            <a href='#'>Alumny</a>
            <span className='font-extralight ml-1'>〡</span>
          </>
        </li>
        <li>
          <>
            <a href='#'>E-Library</a>
            <span className='font-extralight ml-1'>〡</span>
          </>
        </li>
        <li>
          <>
            <a href='#'>Career</a>
            <span className='font-extralight ml-1'>〡</span>
          </>
        </li>
        <li>
          <>
            <a href='#'>Contact</a>
            <span className='font-extralight ml-1'>〡</span>
          </>
        </li>
        <li>
          <>
            <a href='#'>Login</a>
            <span className='font-extralight ml-1'>〡</span>
          </>
        </li>
        <li className='lowercase'>
          <>
            <a href='#'>webmail</a>
          </>
        </li>
      </ul>
      {/* middle part */}
      <div className='flex justify-between items-center px-20 py-4 border-b-[1px] pb-2'>
        <div className=''>
          <img src={logo} alt='logo' className='h-36' />
        </div>
        <div className='flex gap-2'>
          <div className='w-12 h-12 rounded-full flex justify-center items-center p-1 bg-[#5284E8] transition-all duration-100 ease-linear cursor-pointer hover:scale-105'>
            <FaFacebookF size={30} color='white' />
          </div>
          <div className='w-12 h-12 rounded-full flex justify-center items-center p-1 bg-[#46D4FE] transition-all duration-100 ease-linear cursor-pointer hover:scale-105'>
            <FaTwitter size={30} color='white' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
