import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    whatsapp?: string;
    telegram?: string;
    insuranceProfileLink?: string;
    governmentId?: string;
    country: string;
    userType: string;
    membershipLevel: string;
    consent: boolean;
  }) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
  
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  
  registerServiceProvider: async (data: {
    companyName: string;
    serviceType: string;
    businessStatus?: string;
    leadership: string;
    ownership: string;
    email: string;
    phone: string;
    whatsapp?: string;
    telegram?: string;
    city: string;
    password: string;
    license?: string;
    tradeRegistration?: string;
    serviceCentrePhotos?: string[];
    introVideo?: string;
    whwCard?: string;
    insuranceProfileLink?: string;
    taxIdentificationNumber?: string;
    location?: string;
    branches?: { city: string; location: string }[];
    bankAccounts?: { bank: string; accountNumber: string }[];
    servicePriceList?: string;
    country: string;
    consent: boolean;
  }) => {
    // Base URL already includes /api, so we just need /auth/register-service-provider
    const response = await api.post('/auth/register-service-provider', data);
    return response.data;
  },
  
  getProfile: async () => {
    const response = await api.get('/profile');
    return response.data;
  },
  
  loginWithGoogle: async (token: string) => {
    const response = await api.post('/auth/google', { token });
    return response.data;
  },
  
  loginWithFacebook: async (token: string) => {
    const response = await api.post('/auth/facebook', { token });
    return response.data;
  },
};

export default api;

