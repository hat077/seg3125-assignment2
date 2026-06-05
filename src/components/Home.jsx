import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import heroImage from '../assets/hero_image.png';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <div className="row align-items-center py-4">
                    <div className="col-md-6">
                        <h1 className="display-4 fw-bold mb-3">Compassionate Care for Your Best Friends</h1>
                        <p className="lead text-muted mb-4">
                            From routine wellness exams to specialized care, Paws & Claws Vet Hospital keeps your pets happy, healthy, and thriving.
                        </p>
                        <div className="d-flex gap-3">
                            <Link to="/services" className="btn btn-primary btn-lg px-4 shadow-sm">Book an Appointment</Link>
                            <Link to="/intake-form" className="btn btn-outline-primary btn-lg px-4">Virtual Waitlist for Urgent Care</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={heroImage} alt="Happy cat with veterinarian" className="img-fluid rounded shadow-sm" />
                    </div>
                </div>
            </div>
            <section id="why-choose-us" className="bg-light py-5 border-top border-bottom">
                <div className="container py-4">
                    <h2 className="text-center display-5 mb-5 fw-bold">Why Choose Us?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 p-4 border-primary border-2 shadow-sm home-feature-card cursor-pointer text-center">
                                <div className="icon-wrapper mb-3">
                                    <i className="bi bi-heart-pulse text-primary display-4"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-2">Urgent Care</h3>
                                <p className="card-text text-muted small mb-0">
                                    Our team is available 24/7 for emergency situations.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 p-4 border-primary border-2 shadow-sm home-feature-card cursor-pointer text-center">
                                <div className="icon-wrapper mb-3">
                                    <i className="bi bi-tags text-primary display-4"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-2">Transparent Pricing</h3>
                                <p className="card-text text-muted small mb-0">
                                    No hidden fees or surprise charges.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 p-4 border-primary border-2 shadow-sm home-feature-card cursor-pointer text-center">
                                <div className="icon-wrapper mb-3">
                                    <i className="bi bi-shield-check text-primary display-4"></i>
                                </div>
                                <h3 className="h4 fw-bold mb-2">Expert Vets</h3>
                                <p className="card-text text-muted small mb-0">
                                    Our experienced veterinarians provide compassionate care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Home;