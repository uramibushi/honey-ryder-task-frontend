import axios from 'axios';

const BASE_URL = 'https://localhost:7161/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
});
