import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! Our team will get back to you shortly.");
    };

    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h1 className="display-4 fw-bold mb-3 text-center text-md-start">Contact Us</h1>
                <p className="lead text-muted mb-5 text-center text-md-start">
                    Have a question or need to visit? Get in touch with our team today.
                </p>
                <div className="row g-5">
                    <div className="col-md-5">
                        <div className="bg-light p-4 rounded shadow-sm text-start mb-4">
                            <h3 className="h5 fw-bold text-dark mb-4">Clinic Info</h3>
                            <div className="d-flex align-items-start mb-4">
                                <i className="bi bi-geo-alt text-primary fs-4 me-3"></i>
                                <div>
                                    <p className="fw-semibold mb-1">Location</p>
                                    <p className="text-muted small mb-0">123 Laurier Ave E, Ottawa, ON K1N 6N5</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start mb-4">
                                <i className="bi bi-telephone text-primary fs-4 me-3"></i>
                                <div>
                                    <p className="fw-semibold mb-1">Phone Number</p>
                                    <p className="text-muted small mb-0">(613) 555-0199</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start">
                                <i className="bi bi-envelope text-primary fs-4 me-3"></i>
                                <div>
                                    <p className="fw-semibold mb-1">Email Address</p>
                                    <p className="text-muted small mb-0">support@pawsandclaws.ca</p>
                                </div>
                            </div>
                        </div>
                        <div className="card border-primary border-2 shadow-sm p-4 text-start cursor-pointer">
                            <div className="d-flex align-items-center text-primary fw-bold mb-2">
                                <i className="bi bi-exclamation-triangle-fill me-2 fs-5"></i>
                                <span>Urgent Emergency?</span>
                            </div>
                            <p className="text-muted small mb-0">
                                Do not use this contact form if your pet requires immediate triage. Please use our 
                                active virtual waitlist route or drive directly to our entryway.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form onSubmit={handleFormSubmit} className="card p-4 shadow-sm border-0 bg-white">
                            <h3 className="h4 fw-bold mb-4 text-dark text-start">Send a Message</h3>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-semibold">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="e.g., John Doe" 
                                    required 
                                />
                            </div>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-semibold">Email Address</label>
                                <input 
                                    type="email" 
                                    className="form-control form-control-lg" 
                                    placeholder="e.g., john@example.com" 
                                    required 
                                />
                            </div>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-semibold">Your Message</label>
                                <textarea 
                                    className="form-control form-control-lg" 
                                    rows="4" 
                                    placeholder="How can our clinical team help you?" 
                                    required 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-sm">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;