import axios from 'axios';

const BASE_URL: string = 'https://localhost:7161/';

export default axios.create({
  baseURL: BASE_URL
});
