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
            </section>
            <section id="our-process" className="py-5 bg-white">
                <div className="container py-4">
                    <h2 className="text-center display-5 mb-2 fw-bold">Getting Care is Simple</h2>
                    <p className="text-center text-muted lead mb-5">Three easy steps to peace of mind for you and your pet.</p>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4 text-center process-step">
                            <div className="process-number-badge mb-3">1</div>
                            <h3 className="h5 fw-bold mb-2">Select Your Path</h3>
                            <p className="text-muted small px-3 mb-0">
                                Choose standard booking for routine wellness, or join our live virtual waitlist if you need immediate urgent triage.
                            </p>
                        </div>
                        <div className="col-md-4 text-center process-step">
                            <div className="process-number-badge mb-3">2</div>
                            <h3 className="h5 fw-bold mb-2">Visit the Clinic</h3>
                            <p className="text-muted small px-3 mb-0">
                                Bring your companion to our facility. Our care team will be fully prepared with your intake files pre-loaded.
                            </p>
                        </div>
                        <div className="col-md-4 text-center process-step">
                            <div className="process-number-badge mb-3">3</div>
                            <h3 className="h5 fw-bold mb-2">Healthy & Happy Return</h3>
                            <p className="text-muted small px-3 mb-0">
                                Receive expert clinical treatment, clear treatment summaries, and transparent pricing scripts right at checkout.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="py-5 bg-white">
                <div className="container py-4">
                    <h2 className="text-center display-5 mb-2 fw-bold">Loved by Pets & Owners</h2>
                    <p className="text-center text-muted lead mb-5">See what our community in the region has to say about our care.</p>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm bg-light text-start">
                                <div className="text-warning mb-2">
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p className="card-text text-secondary small italic mb-3">
                                    "The virtual waitlist form was an absolute lifesaver when Luna got sick late at night. We tracked our wait time on the way, and the team was ready to triage her the second we arrived!"
                                </p>
                                <div className="fw-bold text-dark small">— Sarah M. (with Luna)</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm bg-light text-start">
                                <div className="text-warning mb-2">
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p className="card-text text-secondary small italic mb-3">
                                    "I highly recommend the Kitten Health Package. The transparent pricing upfront made it easy to plan, and the doctors were incredibly patient and gentle answering all my questions."
                                </p>
                                <div className="fw-bold text-dark small">— David K. (with Milo)</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm bg-light text-start">
                                <div className="text-warning mb-2">
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p className="card-text text-secondary small italic mb-3">
                                    "Incredibly clean clinic and amazing staff. They truly treat your pets like family. Booking regular exams through the client services portal is fast, simple, and totally stress-free."
                                </p>
                                <div className="fw-bold text-dark small">— Elena R. (with Bailey)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;