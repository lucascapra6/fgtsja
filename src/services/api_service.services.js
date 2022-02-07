import axios from 'axios';
import router from '@/routes.js';
import middlewares from '$middlewares';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

api.interceptors.request.use(async (request) => {
  middlewares.requestHandlers(request, router);
  return request;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    error.response.handled = middlewares.responseErrorHandlers(
      error.response,
      router
    );
    throw error.response;
  }
);

export default api;
