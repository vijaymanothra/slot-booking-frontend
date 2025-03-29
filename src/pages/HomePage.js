import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="bg-light vh-100 d-flex align-items-center">
            <div className="container text-center">
                <h1 className="display-4 fw-bold text-primary">Welcome to the Slot Booking Application</h1>
                <p className="lead text-secondary">
                    Book your slots for office sports or recreational activities with ease.
                </p>
                <div className="mt-4">
                    <Link to="/book-slot" className="btn btn-primary btn-lg me-3 shadow">
                        Book a Slot
                    </Link>
                    <Link to="/admin" className="btn btn-success btn-lg shadow">
                        Admin Panel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;