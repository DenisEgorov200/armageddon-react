import ky from 'ky';
import { formatDate } from './date.js';

const BASE_URL = `https://api.nasa.gov/neo/rest/v1/feed?`;

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchDataFromApi = async (params) => {
  const date = new Date(params);
  date.setDate(date.getDate() - 7);

  try {
    return await ky
      .get(`${BASE_URL}start_date=${formatDate(date)}end_date=${params}&api_key=${API_KEY}`)
      .json();
  } catch (error) {
    console.log(error.message);
  }
};
