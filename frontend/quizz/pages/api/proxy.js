import axios from 'axios';

// Log để kiểm tra biến môi trường trên server-side
console.log('Server-side Environment Variables:', process.env);

// Xác định baseUrl dựa trên biến môi trường
const baseUrl = process.env.BUILD_MODE === 'production'
    ? process.env.CLIENT_URL
    : 'http://localhost:4000';
console.log('Server-side Base URL:', baseUrl);

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

// Xử lý yêu cầu từ client-side
export default async function handler(req, res) {
    try {
        // Chuyển tiếp yêu cầu từ client-side đến API thực tế
        const response = await api.request({
            url: req.url.replace('/api/proxy', ''), // Loại bỏ phần "/api/proxy" khỏi URL
            method: req.method, // GET, POST, v.v.
            data: req.body, // Dữ liệu từ client (nếu có)
            headers: {
                ...req.headers,
                host: undefined, // Loại bỏ host để tránh lỗi
            },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
}