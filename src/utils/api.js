import axios from 'axios';
import { isUserLoggedIn, getAuthToken } from './auth';

export default function setupAxios() {
  axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  if (isUserLoggedIn()) {
    axios.defaults.headers.common.Authorization = `Bearer ${getAuthToken()}`;
  }
}

export function jsonToFormData(object) {
  const entries = Object.entries(object);
  const fd = new FormData();

  entries.forEach(([key, value]) => {
    if (Array.isArray(value)) {
      const arrKey = `${key}[]`;
      value.forEach((item) => {
        fd.append(arrKey, item);
      });
    } else {
      fd.set(key, value);
    }
  });

  return fd;
}
