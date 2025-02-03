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
        <h2 className='text-4xl uppercase py-5 px-4 bg-[#002643] font-bold inline-block rounded-md text-white w-full'>
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
              <option className='text-slate-950 font-medium'>Han Solo</option>
              <option className='text-slate-950 font-medium'>Greedo</option>
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
