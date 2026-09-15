import axios from 'axios';

// VITE_API_BASE_URL configurada en docker-compose / .env
// Fallback:
//  - En Docker (Nginx): /api  -> proxy a http://backend:8080 (ver nginx.conf)
//  - En local dev: http://localhost:8080
//  - Vite proxy también redirige /api a http://localhost:8080 durante `npm run dev`
const baseURL =
  import.meta.env.VITE_API_BASE_URL?.trim() ||
  '/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  // con credenciales solo si backend lo requiere; CORS allowCredentials=true
  withCredentials: false,
});

// Interceptor: adjunta JWT automáticamente si existe en localStorage
api.interceptors.request.use(
  (config) => {
    if (config.url && config.url.startsWith('/api/')) {
      config.url = config.url.replace(/^\/api/, '');
    }
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor respuesta: manejo global 401 -> logout opcional
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // opcional: limpiar token y redirigir a login
      // localStorage.removeItem('token');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
