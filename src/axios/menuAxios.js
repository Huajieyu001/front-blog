import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
})

http.interceptors.request.use(config => {
    const token = localStorage.getItem('blog_auth')
    if(token) {
        config.headers.Authorization = token
    }
    return config
})

http.interceptors.response.use(
    response => response.data,
    error => {
        const message = error.response?.data?.message || error.message;
        console.error('API Error:', message);
        return Promise.reject(error);
    }
)

export default http