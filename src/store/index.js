import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewMode: 'grid',
    users: [],
    userData: {
      name: '',
      avatar: '',
      birthdate: '',
      email: '',
      phone: '',
      company: '',
      creditcard: ''
    }
  },
  mutations: {
    changeViewMode(state, mode) {
      state.viewMode = mode;
    },
    updateUsers(state, users) {
      state.users = users;
    },
    updateUserData(state, user) {
      state.userData = user;
    }
  },
  actions: {
    async getUsers({commit}, values) {
      let sortBy = values?.sortBy || 'name';
      let order = values?.order || 'asc';
      let page = values?.page || '1';
      let limit = values?.limit || '12';
      
      let url = `https://614e6c45b4f6d30017b4820f.mockapi.io/users?sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`;

      if (values?.name) url = url.concat(`&name=${values.name}`);
      
      await axios(url).then(res => {
        commit('updateUsers', res.data);
      });
    },
    async getUser({commit}, userId) {
      
      let url = `https://614e6c45b4f6d30017b4820f.mockapi.io/users/${userId}`;
      
      await axios(url).then(res => {
        commit('updateUserData', res.data);
      });
    }
  },
  modules: {
  }
})
