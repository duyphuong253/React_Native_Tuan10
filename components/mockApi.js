import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Mock API endpoint for demonstration

export const addBikeApi = async (bike) => {
  try {
    const response = await axios.post(apiUrl, bike);
    return response.data; 
  } catch (error) {
    console.error('Error adding bike:', error);
    throw error; 
  }
};
