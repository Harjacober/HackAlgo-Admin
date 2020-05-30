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
    loginRequest(state) {
      state.status = RequestStatus.Loading;
      state.errorMessage = '';
    },
    loginRequestSuccess(state) {
      state.status = RequestStatus.Success;
    },
    loginRequestFailure(state, { message }) {
      state.status = RequestStatus.Failure;
      state.errorMessage = message;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      commit('loginRequest');
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
            commit('loginRequestFailure', {
              message: data.msg,
            });
          } else {
            setAuthToken(data.access_token);
            commit('loginRequestSuccess');
          }
        })
        .catch((error) => {
          commit('loginRequestFailure', {
            message: error.message,
          });
        });
    },
  },
  getters: {
    isLoggingIn(state) {
      return state.status === RequestStatus.Loading;
    },
    hasError(state) {
      return state.status === RequestStatus.Failure;
    },
  },
};
