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
        // Log để kiểm tra URL gốc
        console.log('Original req.url:', req.url);

        // Loại bỏ phần "/api/proxy" khỏi URL một cách chính xác
        const cleanedUrl = req.url.replace(/^\/api\/proxy\/?/, '/'); // Đảm bảo loại bỏ "/api/proxy" và giữ lại phần còn lại
        console.log('Cleaned URL:', cleanedUrl);

        // Chuyển tiếp yêu cầu từ client-side đến API thực tế
        const response = await api.request({
            url: cleanedUrl, // Sử dụng URL đã được làm sạch
            method: req.method, // GET, POST, v.v.
            data: req.body, // Dữ liệu từ client (nếu có)
            headers: {
                ...req.headers,
                host: undefined, // Loại bỏ host để tránh lỗi
            },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Proxy error:', error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
}