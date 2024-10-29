import axios from 'axios';

const BASE_URL = 'http://your-api-url/api';

export const saveBook = async (bookData) => {
  try {
    const response = await axios.post(`${BASE_URL}/books`, bookData);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 