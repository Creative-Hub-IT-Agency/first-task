const Degrees = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200 px-8 pb-8">
      <div className="overflow-hidden w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* Bachelor's Degree Column */}
        <div className="border border-gray-300 bg-white rounded-lg">
          <h2 className="bg-blue-800 text-white text-center text-lg font-semibold py-3 rounded-t-lg">BACHELOR’S DEGREE</h2>
          <ul className="divide-y divide-gray-300">
            {[
              "BBA",
              "B.Sc (Hon’s) in Physics",
              "B.Sc (Hon’s) in Chemistry",
              "B.Sc in Food Science And Technology",
              "B.Sc (Hon’s) in Mathematics",
              "B.Sc (Hon’s) in Statistics",
              "B.Sc in Electrical and Electronics Engineering",
              "B.Sc in Computer Science and Information Technology",
              "B.Sc in Civil Engineering",
              "B.Sc in Fashion Design and Technology",
              "B.Sc Engr.in Architecture",
              "B.Sc in Textile Engineering",
              "B.Sc in Mechanical Engineering",
              "B.A(Hon’s) in Bengali",
              "B.A (Hon’s) in English",
              "B.Ed",
              "L.L.B (Hon’s)",
              "L.L.M",
              "BSS (Hon’s) in Sociology and Anthropology",
              "B.PEd",
              "BSS (Hon’s) in Mass Media and Journalism",
              "B.A Hon’s in Islamic Studies",
              "B.A Hon’s in Islamic History",
              "Post Graduate Diploma in Library and Information Science",
              "BSS in Hotel Management & Tourism",
              "BSS (Hon’s) in Social Welfare",
              "B.A (Hon’s) in Public Administration & Policy Implementation",
              "BA (Hon’s) in Economics"
            ].map((course, index) => (
              <li key={index} className="text-center p-3 text-gray-800">{course}</li>
            ))}
          </ul>
        </div>

        {/* Master's Degree Column */}
        <div className="bg-white border rounded-lg h-fit pb-4">
          <h2 className="bg-blue-800 text-white text-center text-lg font-semibold py-3 rounded-t-lg">MASTER’S DEGREE</h2>
          <ul className="divide-y divide-gray-300">
            {[
              "MBA",
              "EMBA",
              "Master in Computer Application",
              "M.A in Bengali",
              "M.A in English",
              "M.Ed",
              "M.PEd",
              "MSS in Government and Politics",
              "Masters of Public Health",
              "Masters of Disability Management & Rehabilitation",
              "Masters of Environment Science",
              "M.A in Islamic Studies",
              "M.A in Islamic History",
              "MSS in Social Welfare",
              "Master of Library and Information Science"
            ].map((course, index) => (
              <li key={index} className="text-center p-3 text-gray-800">{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Degrees;
