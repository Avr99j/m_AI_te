import axios from 'axios';

const apiEndpoint = 'https://cloud.leonardo.ai/api/rest/v1'; 
const apiKey = 'd15b052a-06ed-4ea8-ba31-68a4cdc1dc11'; 

const instance = axios.create({
  baseURL: apiEndpoint,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});

export default instance;