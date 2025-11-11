/**
 * API Configuration
 * 
 * Central configuration for all API endpoints and base URLs
 */

// Use your production API URL
export const API_BASE_URL = 'https://smartsolutionfl.com/api';

// Alternative: Use local development URL
// export const API_BASE_URL = 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  products: `${API_BASE_URL}/products`,
  clients: `${API_BASE_URL}/clients`,
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
  },
  health: `${API_BASE_URL}/health`,
};
