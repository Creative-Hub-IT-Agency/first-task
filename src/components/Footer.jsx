export default function Footer() {
  return (
    <footer className='bg-[#002643] text-white py-12 px-4 md:px-8 lg:px-12 xl:px-16'>
      <div className='container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10'>
        {/* University Info */}
        <div>
          <h3 className='text-2xl font-bold text-yellow-400 mb-3'>
            THE UNIVERSITY OF CUMILLA UNIC
          </h3>
          <p className='text-base leading-relaxed max-w-md'>
            Academic, Trust & Administrative Bhaban: 13, Road-35, Sector-7,
            Uttara, Dhaka-1230 & 9B Polwel Carnation, Sector-8, Uttara,
            Dhaka-1230
          </p>
          <div className='mt-4 text-sm space-y-1'>
            <p>
              Tel:{' '}
              <a href='tel:025509386' className='hover:text-blue-500'>
                02 550-9386
              </a>
            </p>
            <p>Mobile:</p>
            <p>
              <a href='tel:+8801906147415' className='hover:text-blue-500'>
                +88 01906 147415
              </a>
            </p>
            <p>
              <a href='tel:+8801531532540' className='hover:text-blue-500'>
                +88 01531 532540
              </a>
            </p>
            <p>
              <a href='tel:+8801747211340' className='hover:text-blue-500'>
                +88 01747 211340
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href='mailto:totalsolution3401@gmail.com'
                className='hover:text-blue-500'
              >
                totalsolution3401@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Annex Bhaban Info */}
        <div>
          <h3 className='text-2xl font-bold text-purple-400 mb-3'>
            ANNEX BHABAN -2
          </h3>
          <p className='text-base leading-relaxed'>
            House No. 13, Road-35, Sector-07, Uttara, Dhaka-1230
          </p>
          <div className='mt-4 text-sm space-y-1'>
            <p>
              Tel:{' '}
              <a href='tel:0248955382' className='hover:text-purple-300'>
                02 489-55382
              </a>
            </p>
            <p>Mobile:</p>
            <p>
              <a href='tel:+8801728279464' className='hover:text-purple-300'>
                +88 01728 279464
              </a>
            </p>
            <p>
              <a href='tel:+8801920646998' className='hover:text-purple-300'>
                +88 01920 646998
              </a>
            </p>
            <p>
              <a href='tel:+8801837332452' className='hover:text-purple-300'>
                +88 01837 332452
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href='mailto:totalsolution3401@gmail.com'
                className='hover:text-purple-300'
              >
                totalsolution3401@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links & Visitors */}
        <div>
          <h3 className='text-2xl font-bold mb-3'>Quick Links</h3>
          <ul className='text-base space-y-2'>
            <li>
              <a href='#' className='hover:text-blue-300'>
                Academic Calendar
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-300'>
                Convocation
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-300'>
                Procurement
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-300'>
                E-Tender
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-300'>
                Why UNIC?
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-300'>
                Admission Query
              </a>
            </li>
          </ul>

          <h3 className='text-base font-bold mt-6'>Visitors</h3>
          <div className='text-sm space-y-1'>
            <p>Users Today: 129</p>
            <p>Users Yesterday: 178</p>
            <p>This Month: 3704</p>
            <p>This Year: 32460</p>
            <p>Total Users: 54189</p>
            <p>Total Views: 202049</p>
            <p>Your IP Address: 118.179.50.119</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='mt-10 text-center text-sm border-t border-white/40 pt-4'>
        <p>
          © {new Date().getFullYear()} THE UNIVERSITY OF CUMILLA UNIC. All
          Rights Reserved.
        </p>
        <div className='flex justify-center space-x-4 mt-2'>
          <a href='#' className='hover:text-gray-300'>
            Terms of Use
          </a>
          <a href='#' className='hover:text-gray-300'>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
