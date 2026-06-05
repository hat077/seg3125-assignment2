import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold text-white fs-4" to="/">
                    Paws & Claws Vet Hospital
                </Link>
                <ul className="navbar-nav ms-auto gap-2">
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-medium" to="/services">
                            Services & Pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-medium" to="/about">
                            About us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-medium" to="/contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;