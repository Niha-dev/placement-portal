import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend URL

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/students`);
    return response.data;
  } catch (error) {
    console.error("Error fetching students", error);
    throw error;
  }
};

export const getCompanies = async () => {
  try {
    const response = await axios.get(`${API_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching companies", error);
    throw error;
  }
};
