import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleContinue = (e) => {
        e.preventDefault();
        if (!selectedService) {
            setShowError(true);
        } else {
            setShowError(false);
            const serviceTitles = {
                'kitten-package': 'Kitten Health Package',
                'wellness-exam': 'Routine Wellness Exam',
                'grooming-bath': 'Kitten Grooming & Bath',
                'rabies-vaccination': 'Rabies Vaccination Only'
            };
            navigate('/calendar', {
                state: {
                    serviceName: serviceTitles[selectedService],
                    price: getPrice(selectedService)
                }
            });
        }
    }

    const getPrice = (service) => {
        switch (service) {
            case 'kitten-package':
                return "$85.00";
            case 'wellness-exam':
                return "$60.00";
            case 'grooming-bath':
                return "$45.00";
            case 'rabies-vaccination':
                return "$35.00";
            default:
                return "";
        }
    }

    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h1 className="mb-4 fw-bold">Select a Service</h1>
                <p className="text-muted mb-4">Choose a health package below to proceed with reserving an appointment spot.</p>
                {showError && (
                    <div className="alert alert-danger text-center mt-3" role="alert">
                        Please select a service package before continuing with your booking.
                    </div>
                )}
                <div className="row g-4 mt-2">
                    <div className="col-md-6" id="kitten-package">
                        <div className={`card h-100 p-4 shadow-sm cursor-pointer service-package-card ${selectedService === 'kitten-package' ? 'border-primary border-2 active-package' : 'border-1'}`} onClick={() => setSelectedService('kitten-package')}>
                            <h3 className="h5 fw-bold mb-3">Kitten Health Package</h3>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <p className="text-muted mb-0 pe-3 small">Core vaccinations, deworming, and physical exam.</p>
                                <strong className="text-primary fs-5">{getPrice('kitten-package')}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" id="wellness-exam">
                        <div className={`card h-100 p-4 shadow-sm cursor-pointer service-package-card ${selectedService === 'wellness-exam' ? 'border-primary border-2 active-package' : 'border-1'}`} onClick={() => setSelectedService('kitten-package')}>
                            <h3 className="h5 fw-bold mb-3">Routine Wellness Exam</h3>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <p className="text-muted mb-0 pe-3 small">Annual health check-up and weight monitoring.</p>
                                <strong className="text-primary fs-5">{getPrice('wellness-exam')}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" id="grooming-bath">
                        <div className={`card h-100 p-4 shadow-sm cursor-pointer service-package-card ${selectedService === 'grooming-bath' ? 'border-primary border-2 active-package' : 'border-1'}`} onClick={() => setSelectedService('grooming-bath')}>
                            <h3 className="h5 fw-bold mb-3">Kitten Grooming & Bath</h3>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <p className="text-muted mb-0 pe-3 small">Gentle brush-out, nail trim, and ear cleaning.</p>
                                <strong className="text-primary fs-5">{getPrice('grooming-bath')}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" id="rabies-vaccination">
                        <div className={`card h-100 p-4 shadow-sm cursor-pointer service-package-card ${selectedService === 'rabies-vaccination' ? 'border-primary border-2 active-package' : 'border-1'}`} onClick={() => setSelectedService('rabies-vaccination')}>
                            <h3 className="h5 fw-bold mb-3">Rabies Vaccination Only</h3>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <p className="text-muted mb-0 pe-3 small">Single dose booster update for cats & dogs.</p>
                                <strong className="text-primary fs-5">{getPrice('rabies-vaccination')}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-3 mt-5 pt-4 border-top">
                    <button type="button" onClick={() => navigate('/')} className="btn btn-light btn-lg px-4 border text-muted fw-semibold">
                        ← Return to Home
                    </button>
                    <button type="button" onClick={handleContinue} className="btn btn-primary btn-lg flex-grow-1 py-3 fw-bold shadow-sm">
                        Continue Booking
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Services;