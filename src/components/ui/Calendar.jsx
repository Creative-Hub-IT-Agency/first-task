import { useState } from "react";

const Calendar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentDate, setCurrentDate] = useState(new Date());

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const today = new Date();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const daysInMonth = [];
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        daysInMonth.push(new Date(currentYear, currentMonth, i));
    }

    const startDay = firstDayOfMonth.getDay();
    const emptyDays = Array(startDay).fill(null);

    const allDays = [...emptyDays, ...daysInMonth];

    const prevMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1));
    };

    return (
        <section className="border-red-700 bg-slate-50 border-[3px] p-10 rounded-md">
            <div className="rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={prevMonth} className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400">
                        &#8592;
                    </button>
                    <h2 className="text-2xl font-bold text-slate-600">
                        {firstDayOfMonth.toLocaleString('default', { month: 'long' })} {currentYear}
                    </h2>
                    <button onClick={nextMonth} className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400">
                        &#8594;
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-4 text-center">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="font-semibold text-lg">{day}</div>
                    ))}

                    {allDays.map((day, index) => {
                        const isToday =
                            day &&
                            day.getDate() === today.getDate() &&
                            day.getMonth() === today.getMonth() &&
                            day.getFullYear() === today.getFullYear();

                        return (
                            <div
                                key={index}
                                className={`w-10 h-10 rounded-full select-none flex justify-center items-center ${day ? "text-black bg-gray-200" : "text-transparent"} ${isToday ? "!bg-blue-500 text-white font-bold" : ""
                                    }`}
                            >
                                {day ? day.getDate() : ""}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Calendar;