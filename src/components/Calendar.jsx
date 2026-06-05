import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Calendar = () => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const navigate = useNavigate();
    const timeSlots = ["10:00AM", "11:00AM", "11:30AM", "01:00PM", "02:00PM", "02:30PM", "04:00PM"];
    const location = useLocation();
    const { serviceName, price } = location.state || { serviceName: "Routine Appointment", price: "$50.00" };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        setSelectedDay(null);
    }

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        setSelectedDay(null);
    }

    const currentYear = currentDate.getFullYear();
    const monthName = currentDate.toLocaleString('default', { month: 'long'});

    const totalDays = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();

    let startDayIndex = new Date(currentYear, currentDate.getMonth(), 1).getDay();

    if (startDayIndex === 0) startDayIndex = 7;
    const blanksCount = startDayIndex - 1;

    const gridCells = [];
    for (let i = 0; i < blanksCount; i++) {
        gridCells.push(null);
    }
    for (let day = 1; day <= totalDays; day++) {
        gridCells.push(day);
    }

    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h1 className="text-center mb-5">Book Appointment</h1>
                <div className="row g-5">
                    <div className="col-md-5">
                        <div className="border p-4 rounded bg-white shadow-sm">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <button className="btn btn-sm btn-outline-secondary" onClick={handlePrevMonth}>&lt;</button>
                                <h3 className="h5 mb-0 text-capitalize fw-bold">{monthName} {currentYear}</h3>
                                <button className="btn btn-sm btn-outline-secondary" onClick={handleNextMonth}>&gt;</button>
                            </div>
                            <div className="d-flex text-center fw-bold text-muted mb-2 g-0 text-uppercase small">
                                <div style={{ width: '14.28%'}}>Mo</div>
                                <div style={{ width: '14.28%'}}>T</div>
                                <div style={{ width: '14.28%'}}>W</div>
                                <div style={{ width: '14.28%'}}>T</div>
                                <div style={{ width: '14.28%'}}>F</div>
                                <div style={{ width: '14.28%'}}>S</div>
                                <div style={{ width: '14.28%'}}>S</div>
                            </div>
                            <div className="d-flex flex-wrap text-center align-items-center g-0">
                                {gridCells.map((day, index) => (
                                    <div key={index} style={{ width: '14.28%', height: '45px', padding: '2px' }} className="d-flex align-items-center justify-content-center">
                                        {day ? (
                                            <button
                                                type="button"
                                                onClick={() => setSelectedDay(day)}
                                                className={`btn p-0 d-flex align-items-center justify-content-center ${selectedDay === day ? 'btn-primary rounded-circle fw-bold' : 'btn-link text-dark text-decoration-none'}`}
                                                style={selectedDay === day ? { width: '35px', height: '35px' } : { width: '100%', height: '100%' }}
                                            >
                                                {day}
                                            </button>
                                        ) : (
                                            <span className="d-block w-100"></span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="bg-light text-center p-3 fw-bold mb-4 rounded text-uppercase tracking-wider text-secondary">
                            Available Time Slots
                        </div>
                        <div className="row g-3">
                            {timeSlots.map((time) => (
                                <div className="col-6" key={time}>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        className={`btn w-100 py-3 fw-bold transition-all shadow-sm ${selectedTime === time ? 'btn-primary' : 'btn-outline-dark bg-white text-dark border'}`}
                                    >
                                        {time}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
                    <button type="button" onClick={() => navigate('/services')} className="btn btn-light btn-lg px-4 border">
                        Change Service
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            const bookedDate = `${monthName} ${selectedDay}, ${currentYear}`;
                            navigate('/confirmation', {
                                state: {
                                    serviceName,
                                    price,
                                    time: selectedTime,
                                    date: bookedDate
                                }
                            });
                        }}
                        disabled={!selectedDay || !selectedTime}
                        className="btn btn-primary btn-lg px-5 shadow"
                    >
                        Confirm Appointment
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Calendar;