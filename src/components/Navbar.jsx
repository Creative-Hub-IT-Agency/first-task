import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const handleMouseEnter = (dropdownId) => setHoveredDropdown(dropdownId);
  const handleMouseLeave = () => setHoveredDropdown(null);

  return (
    <div className='bg-[#002643] min-h-40 py-4'>
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
      <div className='flex justify-between items-center px-20 py-4 border-b-[1px] pb-4'>
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

      {/* lower part */}
      <div className='uppercase flex pt-2 pl-12'>
        <div>
          <button
            className='text-white rounded-lg px-5 py-2.5 text-center inline-flex items-center uppercase font-bold'
            type='button'
          >
           Home
          </button>
        </div>
        {/* The University Dropdown */}
        <div
          className='relative uppercase'
          onMouseEnter={() => handleMouseEnter('university')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            id='dropdownHoverButton'
            className='text-white rounded-lg font-bold px-5 py-2.5 text-center inline-flex items-center uppercase'
            type='button'
          >
            The University
            <svg
              className='w-2.5 h-2.5 ms-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {hoveredDropdown === 'university' && (
            <div
              id='dropdownHover'
              className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 font-semibold normal-case'
            >
              <ul className='py-2 text-xs text-gray-700 dark:text-gray-200'>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    At a Glance
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Why Us?
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Administration Dropdown */}
        <div
          className='relative uppercase'
          onMouseEnter={() => handleMouseEnter('administration')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            id='dropdownHoverButton'
            className='text-white rounded-lg px-5 py-2.5 text-center inline-flex items-center uppercase font-bold'
            type='button'
          >
            Administration
            <svg
              className='w-2.5 h-2.5 ms-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {hoveredDropdown === 'administration' && (
            <div
              id='dropdownHover'
              className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 font-semibold normal-case'
            >
              <ul className='py-2 text-xs text-gray-700 dark:text-gray-200'>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Admin Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Role Management
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    User Management
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Admission Dropdown */}
        <div
          className='relative uppercase'
          onMouseEnter={() => handleMouseEnter('admission')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            id='dropdownHoverButton'
            className='text-white rounded-lg font-bold px-5 py-2.5 text-center inline-flex items-center uppercase'
            type='button'
          >
            Admission
            <svg
              className='w-2.5 h-2.5 ms-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {hoveredDropdown === 'admission' && (
            <div
              id='dropdownHover'
              className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 font-semibold normal-case'
            >
              <ul className='py-2 text-xs text-gray-700 dark:text-gray-200'>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Apply Now
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Eligibility Criteria
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Scholarship Information
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Admin Dropdown */}
        <div
          className='relative uppercase'
          onMouseEnter={() => handleMouseEnter('admin')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            id='dropdownHoverButton'
            className='text-white rounded-lg font-bold px-5 py-2.5 text-center inline-flex items-center uppercase'
            type='button'
          >
            Admin
            <svg
              className='w-2.5 h-2.5 ms-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {hoveredDropdown === 'admin' && (
            <div
              id='dropdownHover'
              className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 font-semibold normal-case'
            >
              <ul className='py-2 text-xs text-gray-700 dark:text-gray-200'>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Admin Panel
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Permissions
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Activity Logs
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Faculty Dropdown */}
        <div
          className='relative uppercase'
          onMouseEnter={() => handleMouseEnter('faculty')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            id='dropdownHoverButton'
            className='text-white rounded-lg font-bold px-5 py-2.5 text-center inline-flex items-center uppercase'
            type='button'
          >
            Faculty
            <svg
              className='w-2.5 h-2.5 ms-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {hoveredDropdown === 'faculty' && (
            <div
              id='dropdownHover'
              className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 font-semibold normal-case'
            >
              <ul className='py-2 text-xs text-gray-700 dark:text-gray-200'>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Faculty Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Course Management
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Student Records
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:no-underline'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
