import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h1 className="display-4 fw-bold mb-3 text-center text-md-start">Our Story</h1>
                <p className="lead text-muted mb-5 text-center text-md-start">
                    Dedicated to providing exceptional, world-class veterinary care for the Ottawa and Gatineau community.
                </p>
                <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                        <h2 className="h3 fw-bold mb-3">Compassion in Every Treatment</h2>
                        <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
                            Founded with a simple mission, Paws & Claws Vet Hospital blends cutting-edge medical technology 
                            with old-fashioned veterinary love. We understand that your pets aren't just animals—they are 
                            cherished family members who deserve patient, thorough, and gentle care.
                        </p>
                        <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                            Whether it is a routine first check-up for a new kitten or a highly critical midnight emergency triage, 
                            our certified team of professionals works around the clock to give you absolute peace of mind.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-4">
                            <div className="col-12 col-sm-6">
                                <div className="card h-100 p-4 border-0 shadow-sm text-center bg-light about-metric-card cursor-pointer">
                                    <i className="bi bi-award text-primary fs-1 mb-2"></i>
                                    <h3 className="h5 fw-bold text-dark mb-1">15+ Years</h3>
                                    <p className="text-muted small mb-0">Combined Clinical Expertise</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="card h-100 p-4 border-0 shadow-sm text-center bg-light about-metric-card cursor-pointer">
                                    <i className="bi bi-people text-primary fs-1 mb-2"></i>
                                    <h3 className="h5 fw-bold text-dark mb-1">10k+ Pets</h3>
                                    <p className="text-muted small mb-0">Happy, Healthy Alumni</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card p-4 border-primary border-2 shadow-sm text-center bg-white about-metric-card cursor-pointer">
                                    <i className="bi bi-activity text-primary fs-1 mb-2"></i>
                                    <h3 className="h4 fw-bold text-primary mb-1">AAHA Accredited</h3>
                                    <p className="text-muted small mb-0">Meeting the highest rigorous standard of veterinary excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;