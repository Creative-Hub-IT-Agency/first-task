const Navbar = () => {
  return (
    <div className='bg-[#002742] min-h-40 py-4'>
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
        <li className="lowercase">
          <>
            <a href='#'>webmail</a>
          </>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
