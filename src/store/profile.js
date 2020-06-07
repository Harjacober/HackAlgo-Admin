import axios from 'axios';
import { RequestStatus } from '../utils/constants';

export default {
  namespaced: true,
  state: {
    status: null,
    errorMessage: '',
    profile: {},
  },
  mutations: {
    getProfileRequest(state) {
      state.status = RequestStatus.Loading;
      state.errorMessage = '';
      state.profile = {};
    },
    getProfileRequestSuccess(state, { profile }) {
      state.status = RequestStatus.Success;
      state.profile = profile;
    },
    getProfileRequestFailure(state, { message }) {
      state.status = RequestStatus.Failure;
      state.errorMessage = message;
    },
  },
  actions: {
    async getProfile({ commit }) {
      commit('getProfileRequest');
      try {
        const response = await axios.get('/admin/profile/');
        const { code, data, message } = response.data;
        if (code !== 200) {
          commit('getProfileRequestFailure', { message });
        } else {
          commit('getProfileRequestSuccess', { profile: data });
        }
      } catch (error) {
        commit('getProfileRequestFailure', { message: error.message });
      }
    },
  },
  getters: {
    isFetching(state) {
      return state.status === RequestStatus.Loading;
    },
    hasError(state) {
      return state.status === RequestStatus.Failure;
    },
  },
};
