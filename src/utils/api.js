import ky from 'ky';
import { formatDate } from './date.js';

const BASE_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${formatDate(
  new Date(),
)}&api_key=`;

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchDataFromApi = async (params) => {
  try {
    return await ky.get(`${BASE_URL}${API_KEY}`).json();
  } catch (error) {
    console.log(error.message);
  }
};
