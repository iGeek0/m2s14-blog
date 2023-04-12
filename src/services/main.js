import axios from 'axios';

const API_URL = 'https://animales-api.onrender.com';


export const getAnimales = async () => {
    const response = await axios.get(`${API_URL}/animales`);
    return response;
}

// implementar delete

