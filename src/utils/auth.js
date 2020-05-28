import axios from 'axios';

const AUTH_TOKEN_FIELD = 'access_token';

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_FIELD);
}

export function setAuthToken(token) {
  localStorage.setItem(AUTH_TOKEN_FIELD, token || '');
  axios.defaults.headers.common.Authorization = token ? `Bearer ${getAuthToken()}` : '';
}

export function isUserLoggedIn() {
  return !!getAuthToken();
}

export function logUserOut() {
  setAuthToken(null);
}
