import img1 from "../assets/R.jpeg"
import img2 from "../assets/UIP.jpeg"

const FacilitiesAndActivities = () => {
    return (
        <div className="flex justify-center items-center bg-[#316B9B] p-4 lg:p-8">
            <div className="flex flex-col gap-8 lg:flex-row">
                {/* Facilities Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-700 lg:w-1/2">
                    <div className="relative mb-4 group">
                        <img
                            src={img1}
                            alt="Facilities"
                            className="w-full h-72 object-cover rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 transition-all duration-200 group-hover:bg-opacity-0 flex items-center justify-center text-white text-2xl font-bold rounded-lg">
                            FACILITIES
                        </div>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                        {[
                            { name: "Wiley Online Library", link: "https://example.com/wiley" },
                            { name: "AC Classrooms", link: "https://example.com/ac-classrooms" },
                            { name: "15 Laboratories", link: "https://example.com/labs" },
                            { name: "3 Libraries", link: "https://example.com/libraries" },
                            { name: "Multimedia", link: "https://example.com/multimedia" },
                            { name: "Wi-Fi Connections", link: "https://example.com/wifi" },
                        ].map((item, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <a href={item.link} className="text-blue-700 font-semibold text-lg hover:underline">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Extra Curricular Activities Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-700 lg:w-1/2 h-fit">
                    <div className="relative mb-4 group">
                        <img
                            src={img2}
                            alt="Extracurricular Activities"
                            className="w-full h-72 object-cover rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 transition-all duration-200 group-hover:bg-opacity-0 flex items-center justify-center text-white text-2xl font-bold rounded-lg">
                            EXTRA CURRICULAR ACTIVITIES
                        </div>
                    </div>

                    <ul className="space-y-2 text-gray-700">
                        {[
                            { name: "Study Tour", link: "https://example.com/study-tour" },
                            { name: "Seminars", link: "https://example.com/seminars" },
                            { name: "Debates and Contests", link: "https://example.com/debates" },
                            { name: "Participation in National and International Competitions", link: "https://example.com/competitions" },
                            { name: "Career Center for Students", link: "https://example.com/career-center" },
                            { name: "Parent’s Day", link: "https://example.com/parents-day" },
                        ].map((item, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <span className="text-blue-600">■</span>
                                <a href={item.link} className="text-blue-700 font-semibold text-lg hover:underline">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesAndActivities;