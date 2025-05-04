import axios from 'axios';

// Tạo instance axios với baseURL là API route
export const api = axios.create({
    baseURL: '/',
    withCredentials: true,
});

// Giữ nguyên interceptor để xử lý token
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

// Giữ nguyên interceptor để xử lý lỗi 401/403
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