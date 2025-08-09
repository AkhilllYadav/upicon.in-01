// Placeholder for apiConfig.js
// This file is created to resolve import errors.
// You may need to replace this with actual API configuration.

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Replace with your actual API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;