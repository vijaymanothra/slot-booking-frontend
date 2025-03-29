import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const authorize = (employeeCode) => {
    return axios.post(`${API_BASE_URL}/authorize`, { employee_code: employeeCode });
};

export const bookSlot = (data) => {
    return axios.post(`${API_BASE_URL}/book_slot`, data);
};

export const setSlots = (data) => {
    return axios.post(`${API_BASE_URL}/set_slots`, data);
};