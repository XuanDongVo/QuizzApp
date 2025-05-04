import axios from 'axios';

const baseUrl =
    process.env.BUILD_MODE === 'production'
        ? process.env.CLIENT_URL
        : 'http://localhost:4000'

export const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('accessToken');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (typeof window !== 'undefined') {
            if (error.response?.status === 401 || error.response?.status === 403) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('user');
            }
        }
        return Promise.reject(error);
    }
);