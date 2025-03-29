import React, { useState } from 'react';
import axios from 'axios';

const UpdateEmployeePage = () => {
    const [employeeCode, setEmployeeCode] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await axios.post('http://localhost:3000/update_employee', {
                employee_code: employeeCode,
                updates: {
                    mobile_number: mobileNumber,
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error updating employee details');
        }
    };

    return (
        <div>
            <h1>Update Employee Details</h1>
            <input
                type="text"
                placeholder="Employee Code"
                value={employeeCode}
                onChange={(e) => setEmployeeCode(e.target.value)}
            />
            <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
            />
            <button onClick={handleUpdate}>Update Employee</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateEmployeePage;