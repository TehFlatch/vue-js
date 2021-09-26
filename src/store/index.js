import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewMode: 'grid',
    users: [],
  },
  mutations: {
    changeViewMode(state, mode) {
      state.viewMode = mode;
    },
    updateUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    async getUsers({commit}, values) {
      console.log(values);
      let sortBy = values?.sortBy || 'name';
      let order = values?.order || 'asc';
      let page = values?.page || '1';
      let limit = values?.limit || '12';
      
      let url = `https://614e6c45b4f6d30017b4820f.mockapi.io/users?sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`;

      if (values?.name) url = url.concat(`&name=${values.name}`);
      
      await axios(url).then(res => {
        // console.log(res.data);
        commit('updateUsers', res.data);
      });
    }
  },
  modules: {
  }
})
