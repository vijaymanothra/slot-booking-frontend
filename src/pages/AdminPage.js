import React, { useState } from 'react';
import { setSlots } from '../services/api';

const AdminPage = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [message, setMessage] = useState('');

    const timezones = Intl.supportedValuesOf('timeZone');

    const handleSetSlots = async () => {
        try {
            const response = await setSlots({ start_time: startTime, end_time: endTime, timezone });
            setMessage(response.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error setting slots');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Admin Panel</h1>
            <div className="card p-4 shadow">
                <div className="mb-3">
                    <label className="form-label">Start Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">End Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
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
                <button className="btn btn-success w-100" onClick={handleSetSlots}>
                    Set Slots
                </button>
                {message && <p className="text-center text-danger mt-3">{message}</p>}
            </div>
        </div>
    );
};

export default AdminPage;