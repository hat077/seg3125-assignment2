import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

const IntakeForm = () => {
    const [formData, setFormData] = useState({
        ownerName: "",
        petName: "",
        emergencyDetails: ""
    });
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.ownerName || !formData.petName || !formData.emergencyDetails) {
            setShowError(true);
        } else {
            setShowError(false);
            navigate('/urgent-confirmation', { state: { petName: formData.petName } });
        }
    };

    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h1 className="text-center mb-5 fw-bold">Emergency Intake & Virtual Triage Queue</h1>
                {showError && (
                    <div className="alert alert-danger text-center mb-4" role="alert">
                        Please fill out all check-in fields to secure your virtual triage position.
                    </div>
                )}
                <div className="row g-5 mt-2">
                    <div className="col-md-5">
                        <div className="bg-light p-4 rounded shadow-sm text-start border">
                            <div className="d-flex align-items-center text-success fw-bold mb-4">
                                <i className="bi bi-circle-fill me-2 animate-pulse small"></i>
                                <span>Current Wait: 15 Mins | 2 Veterinarians on Duty</span>
                            </div>
                            <h3 className="h5 fw-bold text-dark mb-3">What Happens Next?</h3>
                            <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                                Submitting this form immediately secures your pet's placement in our live triage stream. 
                                Our veterinary team will prepare for your arrival based on the symptoms provided. 
                                Please proceed directly to the clinic entrance upon receiving confirmation.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-semibold">Owner's Full Name</label>
                                <input
                                    type="text"
                                    name="ownerName"
                                    className="form-control form-control-lg triage-input"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                    placeholder="e.g., John Doe"
                                    required
                            />
                            </div>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-semibold">Pet's Name</label>
                                <input
                                    type="text"
                                    name="petName"
                                    className="form-control form-control-lg triage-input"
                                    value={formData.petName}
                                    onChange={handleChange}
                                    placeholder="e.g., Rocky"
                                    required
                                />
                            </div>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-semibold">Nature of Emergency & Symptoms</label>
                                <textarea
                                    name="emergencyDetails"
                                    className="form-control form-control-lg triage-input"
                                    rows="4"
                                    value={formData.emergencyDetails}
                                    onChange={handleChange}
                                    placeholder="Please briefly describe what is happening (e.g., Limping heavily on front paw, whimpering, rapid breathing)."
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-danger btn-lg w-100 py-3 mt-2 fw-bold shadow-sm urgent-submit-btn">
                                Submit Intake Form & Join Queue
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default IntakeForm;