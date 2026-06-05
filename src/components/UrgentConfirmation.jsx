import { useLocation, Link } from "react-router-dom";

const UrgentConfirmation = () => {
    const location = useLocation();
    const { petName } = location.state || { petName: "Your Pet" };

    return (
        <div className="container py-5 text-center triage-pass-container" style={{ maxWidth: '700px' }}>
            <div className="alert alert-primary bg-primary-subtle text-primary border-0 p-3 mb-5 text-start d-flex align-items-center rounded-3 shadow-sm triage-alert-banner">
                <i className="bi bi-info-circle-fill me-3 fs-4"></i>
                <span className="small fw-medium" style={{ lineHeight: '1.5' }}>
                    Your triage position is securely locked into our clinic network. It is <strong>100% safe to close this window</strong>, lock your device, or return to the homepage while you travel to the hospital.
                </span>
            </div>
            <h1 className="display-6 fw-bold text-dark mb-3">Triage Check-In Confirmed</h1>
            <p className="text-muted mb-5">Please check in with the clinic front desk immediately upon arrival.</p>
            <div className="card border-primary border-2 shadow-sm rounded-4 p-4 mb-5 mx-auto bg-white triage-ticket-card" style={{ maxWidth: '480px' }}>
                <h2 className="h5 fw-bold mb-4 text-secondary border-bottom pb-3 text-center">
                    Active Patient: <span className="text-primary fw-bold">{petName}</span>
                </h2>
                <div className="row text-center py-2">
                    <div className="col-6 border-end">
                        <p className="text-muted small text-uppercase fw-semibold mb-2">Queue Position</p>
                        <p className="display-4 fw-extrabold text-primary mb-0 mt-2 triage-number">#3</p>
                    </div>
                    <div className="col-6">
                        <p className="text-muted small text-uppercase fw-semibold mb-2">Est. Wait Time</p>
                        <p className="display-4 fw-extrabold text-dark mb-0 mt-2 triage-number">12m</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Link to="/" className="btn btn-link text-muted text-decoration-none fw-semibold icon-link icon-link-hover return-home-link">
                    <i className="bi bi-arrow-left me-1"></i> Return to Homepage
                </Link>
            </div>
        </div>
    );
};

export default UrgentConfirmation;