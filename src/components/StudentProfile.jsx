import { useParams } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";


const StudentProfile = () => {
    const [studentInfo, setStudentInfo] = useState([]);
    const id = useParams();
    const rollNumber = id?.rollNumber;

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`https://first-task-server-side.vercel.app/allStudents/${rollNumber}`);

                if (response.status === 200) {
                    console.log(response.data);
                    setStudentInfo(response.data);
                }
            } catch (error) {
                console.error("Error:", error.response?.status);
            }
        };

        if (rollNumber) {
            fetchStudent();
        }
    }, [rollNumber]);

    return (
        <div>
            <Navbar />
            <div style={{ maxWidth: "", margin: "auto", padding: "20px" }}>
                {studentInfo && (
                    <>

                        <div className="md:flex justify-center items-center gap-8 my-10">
                            <div>
                                <div className="flex justify-center items-center border-2 rounded-xl border-blue-950 p-2 max-w-[200px] md:w-full mx-auto">
                                    <img
                                        src={studentInfo.image || "https://i.ibb.co.com/SXkpFX6D/blue-circle-with-white-user-78370-4707.jpg"}
                                        alt="studentInfo"
                                        style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                                    />
                                </div>
                                <h1 className="text-center mt-2"><strong>CGPA:</strong> {studentInfo.cgpa}</h1>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300">
                                    <tbody>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">Name</th>
                                            <td className="p-2">{studentInfo.name}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">NID/Birth Certificate</th>
                                            <td className="p-2">{studentInfo.nid}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">Date of Birth</th>
                                            <td className="p-2">{studentInfo.dob}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">Father&apos;s Name</th>
                                            <td className="p-2">{studentInfo.fatherName}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">Mother&apos;s Name</th>
                                            <td className="p-2">{studentInfo.motherName}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">Roll Number</th>
                                            <td className="p-2">{studentInfo.rollNumber}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">Program</th>
                                            <td className="p-2">{studentInfo.program}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">Major</th>
                                            <td className="p-2">{studentInfo.major}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="text-left p-2 font-semibold bg-gray-300">Session</th>
                                            <td className="p-2">{studentInfo.session}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left p-2 font-semibold bg-gray-300">Passing Year</th>
                                            <td className="p-2">{studentInfo.passingYear}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default StudentProfile;