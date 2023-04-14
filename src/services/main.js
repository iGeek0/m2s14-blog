import axios from 'axios';

const API_URL = 'https://animales-api.onrender.com';


export const getAnimales = async () => {
    const response = await axios.get(`${API_URL}/animales`);
    return response;
}

export const createAnimal = async (data) => {
    const response = await axios.post(`${API_URL}/animales`, data);
    return response.data;
}


export const deleteAnimal = async (id) => {
    const response = await axios.delete(`${API_URL}/animales/${id}`);
    return response.data;
}

