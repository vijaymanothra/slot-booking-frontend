import React, { useState } from 'react';
import { authorize, bookSlot } from '../services/api';

const BookSlotPage = () => {
    const [employeeCode, setEmployeeCode] = useState('');
    const [otp, setOtp] = useState('');
    const [slotTime, setSlotTime] = useState('');
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const timezones = Intl.supportedValuesOf('timeZone');

    const handleAuthorize = async () => {
        try {
            const response = await authorize(employeeCode);
            setMessage(response.data.message);
            setIsSuccess(true);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error authorizing');
            setIsSuccess(false);
        }
    };

    const handleBookSlot = async () => {
        try {
            const response = await bookSlot({
                employee_code: employeeCode,
                otp: Number(otp),
                slot_time: slotTime,
                timezone,
            });
            setMessage(response.data.message);
            setIsSuccess(true);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error booking slot');
            setIsSuccess(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h1 className="text-center text-primary mb-4">Book a Slot</h1>
                <div className="mb-3">
                    <label className="form-label">Employee Code</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Employee Code"
                        value={employeeCode}
                        onChange={(e) => setEmployeeCode(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary w-100 mb-3" onClick={handleAuthorize}>
                    Get OTP
                </button>
                <div className="mb-3">
                    <label className="form-label">OTP</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Slot Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={slotTime}
                        onChange={(e) => setSlotTime(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Timezone</label>
                    <select
                        className="form-select"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                    >
                        {timezones.map((tz) => (
                            <option key={tz} value={tz}>
                                {tz}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-success w-100" onClick={handleBookSlot}>
                    Book Slot
                </button>
                {message && (
                    <p
                        className={`text-center mt-3 ${
                            isSuccess ? 'text-success' : 'text-danger'
                        }`}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default BookSlotPage;