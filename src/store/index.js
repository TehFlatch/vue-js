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
    },
    searchParams: {
      name: '',
      sortBy: 'name',
      order: 'asc',
      page: 1,
      page_count: 9, // Hardcoded page_count to simulate pagination for demo purposes, since mockapi.io doesn't provide page_count.
      limit: 12
    },
    sortingValue: 'name-asc',
    sortingOptions: [
      {text: 'Name, ascending', value: 'name-asc'},
      {text: 'Name, descending', value: 'name-desc'},
      {text: 'ID, ascending', value: 'id-asc'},
      {text: 'ID, descending', value: 'id-desc'},
    ]
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
    },
    updateSearch(state, name) {
      state.searchParams.name = name;
    },
    updateSorting(state, newValues) {
      state.searchParams = newValues.newSort;
      state.sortingValue = newValues.newSortingValue;
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
