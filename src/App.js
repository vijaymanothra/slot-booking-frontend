import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookSlotPage from './pages/BookSlotPage';
import AdminPage from './pages/AdminPage';
import UpdateEmployeePage from './pages/UpdateEmployeePage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/book-slot" element={<BookSlotPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/update-employee" element={<UpdateEmployeePage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;