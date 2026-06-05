import { useNavigate, Link, useLocation } from "react-router-dom";

const Confirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { serviceName, price, time, date } = location.state || {
        serviceName: "Not Selected",
        price: "$0.00",
        time: "N/A",
        date: "N/A"
    };

    return (
        <div className="container py-5 text-center">
            <h1 className="display-5 fw-bold mb-3">Booking Confirmed</h1>
            <p className="lead text-muted mb-5">Your spot is reserved. Please review your appointment details below.</p>
            <div className="d-flex justify-content-center mb-5">
                <div className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-check-lg fs-1 fw-bold"></i>
                </div>
            </div>
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-5 text-start mx-auto" style={{ maxWidth: '600px' }}>
                <h2 className="h4 pb-3 mb-4 border-bottom text-secondary">Appointment Summary</h2>
                <div className="row g-3">
                    <div className="col-sm-7">
                        <p className="mb-1 text-muted small text-uppercase fw-semibold">Selected Service</p>
                        <h3 className="h5 fw-bold text-dark mb-3">{serviceName}</h3>
                        <p className="mb-1 text-muted small text-uppercase fw-semibold">Date</p>
                        <p className="fw-bold text-dark mb-0">{date}</p>
                    </div>
                    <div className="col-sm-5 text-sm-end">
                        <p className="mb-1 text-muted small text-uppercase fw-semibold">Time</p>
                        <p className="fw-bold text-dark mb-3">{time}</p>
                        <p className="mb-1 text-muted small text-uppercase fw-semibold">Total Price</p>
                        <p className="h4 fw-extrabold text-primary mb-0">{price}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate('/')} className="btn btn-primary btn-lg px-5 py-3 rounded-3 shadow-sm">
                Back to Home
            </button>
        </div>
    );
}

export default Confirmation;