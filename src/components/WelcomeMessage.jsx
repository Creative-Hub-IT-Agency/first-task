

const WelcomeMessage = () => {
    return (
        <div className="bg-blue-800 lg:flex gap-14 py-6 px-10">
            <div className="bg-white py-4 px-8 flex-1">
                <h1 className="text-black font-bold text-3xl">Welcome to UNIC</h1>
                <p className="text-blue-900 font-semibold text-lg my-2">Where Education Ignites Enlightenment</p>
                <p className="text-black text-lg">The mission of UNIC is to emerge as one of the leading and premier centre of higher studies in Arts, Social Science, Science, Engineering and technology. The University is providing education of high excellence to our young learners in a congenial and friendly atmosphere, and attracting brilliant students, distinguished scholars, researchers, scientists from home and abroad. Since its commencement  UNIC endeavors to accelerate students’ technological, intellectual, social and personal potentials providing them dynamic guidance and latest information about the new technologies of the world so that they can keep pace with the time and contribute to the advancement of the society.</p>
            </div>
            <div className="flex-1 bg-blue-300 border-[1px] border-yellow-400 rounded-lg p-2 md:p-6">
                <div className="mb-2 md:mb-6">
                    <h1 className="font-bold text-xl text-gray-700 flex items-center">News On Campus <p className="border-b-[1px] border-gray-400 w-1/2 ml-4"></p></h1>
                </div>
                <div>
                    <div className="flex justify-between">
                        <div className="flex-1 border-t-[1px] border-r-[1px] border-white pt-2 md:pt-6 pr-2 md:pr-6">
                            <img src="https://i.postimg.cc/R04kfJdC/400946139-homework-globe-object-studying-learning-earth-planet-710x375.jpg" alt="" className="border-[1px] border-white p-2" />
                            <p className="text-sm my-2">
                                March 18, 2018
                            </p>
                            <p className="font-bold text-gray-700">‘Mind Talks’ session hosted by Language Club</p>
                        </div>
                        <div className="flex-1 border-t-[1px] border-white pt-2 md:pt-6 pl-2 md:pl-6">
                            <div className="md:flex gap-4">
                                <img src="https://i.postimg.cc/MTK8kff3/american-center-0-80x80.jpg" alt="" className="border-[1px] border-white p-2 w-20 h-20" />
                                <div>
                                    <p className="text-sm my-2">March 18, 2018</p>
                                    <p className="font-bold text-gray-700 border-b-[1px] border-white">Lion Club conducted their first workshop</p>
                                </div>
                            </div>
                            <div className="md:flex gap-4 mt-4">
                                <img src="https://i.postimg.cc/ZR7zJYrb/IMG-3605-800x500-80x80.jpg" alt="" className="border-[1px] border-white p-2 w-20 h-20" />
                                <div>
                                    <p className="text-sm my-2">March 18, 2018</p>
                                    <p className="font-bold text-gray-700 border-b-[1px] border-white">CinemaScope holds three-days workshop</p>
                                </div>
                            </div>
                            <div className="md:flex gap-4 mt-4">
                                <img src="https://i.postimg.cc/MTK8kff3/american-center-0-80x80.jpg" alt="" className="border-[1px] border-white p-2 w-20 h-20" />
                                <div>
                                    <p className="text-sm my-2">March 18, 2018</p>
                                    <p className="font-bold text-gray-700 border-b-[1px] border-white">ইউনিক</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeMessage;