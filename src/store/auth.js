import axios from 'axios';
import { jsonToFormData } from '../utils/api';
import { setAuthToken } from '../utils/auth';
import { RequestStatus } from '../utils/constants';

export default {
  namespaced: true,
  state: {
    status: null,
    errorMessage: '',
  },
  mutations: {
    authRequest(state) {
      state.status = RequestStatus.Loading;
      state.errorMessage = '';
    },
    authRequestSuccess(state) {
      state.status = RequestStatus.Success;
    },
    authRequestFailure(state, { message }) {
      state.status = RequestStatus.Failure;
      state.errorMessage = message;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      commit('authRequest');
      return axios
        .post(
          '/admin/login',
          jsonToFormData({
            username,
            pswd: password,
          }),
        )
        .then(({ data }) => {
          if (data.code !== 200) {
            commit('authRequestFailure', {
              message: data.msg,
            });
          } else {
            commit('authRequestSuccess');
          }
        })
        .catch((error) => {
          commit('authRequestFailure', {
            message: error.msg,
          });
        });
    },
    register({ commit }, { username, email, password }) {
      commit('authRequest');
      return new Promise((resolve, reject) => {
        axios
        .post(
          '/admin/registration/',
          jsonToFormData({
            username,
            email,
            pswd: password,
          }),
        )
        .then(({ data }) => {
          if (data.code !== 200 || data.msg === 'Invalid email') {
            commit('authRequestFailure', {
              message: data.msg,
            });
          } else {
            // setAuthToken(data.access_token);
            commit('authRequestSuccess');
            resolve(data);
          }
        })
        .catch((error) => {
          commit('authRequestFailure', {
            message: error.msg,
          });
        });
      });
    },
    verifyCode({ commit }, { code }) {
      commit('authRequest');
      return new Promise((resolve, reject) => {
        axios
        .get(`/admin/registration/?id=${code}`)
        .then(({ data }) => {
          if (data.code !== 200) {
            commit('authRequestFailure', {
              message: data.msg,
            });
          } else {
            setAuthToken(data.access_token);
            commit('authRequestSuccess');
            resolve(data);
          }
        })
        .catch((error) => {
          commit('authRequestFailure', {
            message: error.msg,
          });
        });
      });
    },
  },
  getters: {
    isLoading(state) {
      return state.status === RequestStatus.Loading;
    },
    hasError(state) {
      return state.status === RequestStatus.Failure;
    },
  },
};
