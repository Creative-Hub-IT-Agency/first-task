const FilterOption = () => {
  const date = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = [2024, 2023, 2022, 2021, 2020, 2019];

  return (
    <div className='py-10 px-4 bg-white flex justify-center items-center flex-col'>
      <div>
        <h2 className='text-4xl uppercase py-5 px-4 bg-[#002643] font-bold inline-block rounded-md text-white w-full text-center'>
          Degree Verification
        </h2>
        <div className='mt-10 space-y-5'>
          <div>
            <label
              className='text-xl text-slate-950'
              htmlFor='student_id_and_roll'
            >
              Student ID / Roll
            </label>
            <input
              type='text'
              name='student_id_and_roll'
              className='input input-bordered rounded-sm w-full text-slate-950 font-medium bg-white border-2 border-slate-600 focus:border-slate-600 text-lg'
            />
          </div>
          <div>
            <label
              className='text-xl text-slate-950'
              htmlFor='student_id_and_roll'
            >
              Department / Program
            </label>
            <select className='select select-bordered rounded-sm w-full bg-white border-2 border-slate-600 focus:border-slate-600 text-slate-950 font-medium text-lg'>
              <option className='text-slate-950 font-medium' disabled selected>
                Select Your Department / Program
              </option>
              <option className="text-slate-950 text-xl font-semibold">BBA</option>
              <option className="text-slate-950 font-medium">B.Sc (Hon’s) in Physics</option>
              <option className="text-slate-950 font-medium">B.Sc (Hon’s) in Chemistry</option>
              <option className="text-slate-950 font-medium">B.Sc in Food Science And Technology</option>
              <option className="text-slate-950 font-medium">B.Sc (Hon’s) in Mathematics</option>
              <option className="text-slate-950 font-medium">B.Sc (Hon’s) in Statistics</option>
              <option className="text-slate-950 font-medium">B.Sc in Electrical and Electronics Engineering</option>
              <option className="text-slate-950 font-medium">B.Sc in Computer Science and Information Technology</option>
              <option className="text-slate-950 font-medium">B.Sc in Civil Engineering</option>
              <option className="text-slate-950 font-medium">B.Sc in Fashion Design and Technology</option>
              <option className="text-slate-950 font-medium">B.Sc Engr. in Architecture</option>
              <option className="text-slate-950 font-medium">B.Sc in Textile Engineering</option>
              <option className="text-slate-950 font-medium">B.Sc in Mechanical Engineering</option>
              <option className="text-slate-950 font-medium">B.A (Hon’s) in Bengali</option>
              <option className="text-slate-950 font-medium">B.A (Hon’s) in English</option>
              <option className="text-slate-950 font-medium">B.Ed</option>
              <option className="text-slate-950 font-medium">L.L.B (Hon’s)</option>
              <option className="text-slate-950 font-medium">L.L.M</option>
              <option className="text-slate-950 font-medium">BSS (Hon’s) in Sociology and Anthropology</option>
              <option className="text-slate-950 font-medium">B.PEd</option>
              <option className="text-slate-950 font-medium">BSS (Hon’s) in Mass Media and Journalism</option>
              <option className="text-slate-950 font-medium">B.A (Hon’s) in Islamic Studies</option>
              <option className="text-slate-950 font-medium">B.A (Hon’s) in Islamic History</option>
              <option className="text-slate-950 font-medium">Post Graduate Diploma in Library and Information Science</option>
              <option className="text-slate-950 font-medium">BSS in Hotel Management & Tourism</option>
              <option className="text-slate-950 font-medium">BSS (Hon’s) in Social Welfare</option>
              <option className="text-slate-950 font-medium">B.A (Hon’s) in Public Administration & Policy Implementation</option>
              <option className="text-slate-950 font-medium">B.A (Hon’s) in Economics</option>
              <option className="text-slate-950 text-xl font-bold">MBA</option>
              <option className="text-slate-950 font-medium">EMBA</option>
              <option className="text-slate-950 font-medium">Master in Computer Application</option>
              <option className="text-slate-950 font-medium">M.A in Bengali</option>
              <option className="text-slate-950 font-medium">M.A in English</option>
              <option className="text-slate-950 font-medium">M.Ed</option>
              <option className="text-slate-950 font-medium">M.PEd</option>
              <option className="text-slate-950 font-medium">MSS in Government and Politics</option>
              <option className="text-slate-950 font-medium">Masters of Public Health</option>
              <option className="text-slate-950 font-medium">Masters of Disability Management & Rehabilitation</option>
              <option className="text-slate-950 font-medium">Masters of Environment Science</option>
              <option className="text-slate-950 font-medium">M.A in Islamic Studies</option>
              <option className="text-slate-950 font-medium">M.A in Islamic History</option>
              <option className="text-slate-950 font-medium">MSS in Social Welfare</option>
              <option className="text-slate-950 font-medium">Master of Library and Information Science</option>
            </select>
          </div>
          <div>
            <label
              className='text-xl text-slate-950'
              htmlFor='student_id_and_roll'
            >
              Student Date of Birth (DD/MM/YYYY)
            </label>
            <div className='flex gap-5'>
              <select className='select select-bordered rounded-sm w-full bg-white border-2 border-slate-600 focus:border-slate-600 text-slate-950 font-medium text-lg'>
                <option
                  className='text-slate-950 font-medium'
                  disabled
                  selected
                ></option>
                {date?.map((num) => (
                  <option
                    key={num}
                    value={num}
                    className='text-slate-950 font-medium'
                  >
                    {num}
                  </option>
                ))}
              </select>
              <select className='select select-bordered rounded-sm w-full bg-white border-2 border-slate-600 focus:border-slate-600 text-slate-950 font-medium text-lg'>
                <option
                  className='text-slate-950 font-medium'
                  disabled
                  selected
                ></option>
                {months?.map((month) => (
                  <option
                    key={month}
                    value={month}
                    className='text-slate-950 font-medium'
                  >
                    {month}
                  </option>
                ))}
              </select>
              <select className='select select-bordered rounded-sm w-full bg-white border-2 border-slate-600 focus:border-slate-600 text-slate-950 font-medium text-lg'>
                <option
                  className='text-slate-950 font-medium'
                  disabled
                  selected
                ></option>
                {years?.map((year) => (
                  <option key={year} className='text-slate-950 font-medium'>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='btn mt-10 bg-blue-600 border-none rounded-md text-xl text-white w-full'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterOption;
