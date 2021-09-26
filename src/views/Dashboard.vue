<template>
  <v-container>
    <div class="list-header">
      <div class="search-group">
        <div class="search-input">
          <v-text-field @keyup="updateSearch"
            label="Filter by name"
            outlined
          ></v-text-field>
        </div>
        <div class="sorting-input">
          <v-select
            :items="sortingOptions"
            label="Sort by"
            outlined
            v-bind:value="sortingValue"
            @change="updateSorting"
          ></v-select>
        </div>
      </div>
      <div class="view-modes">
        <v-btn class="btn btn-grid" @click="$store.commit('changeViewMode', 'grid')">Grid</v-btn>
        <v-btn class="btn btn-list" @click="$store.commit('changeViewMode', 'list')">List</v-btn>
      </div>
    </div>
    <v-row class="text-center">
      <v-col v-if="loading" cols="12">
        <h1>Please wait...</h1>
      </v-col>
      <v-col v-if="!loading" cols="12">
        <div v-bind:class="$store.state.viewMode" class="user-list">
          <user-item v-for="user in $store.state.users" :key="user.id" :user="user" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserItem from '../components/UserItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  mounted: async function() {
    await this.initUsers();
  },
  components: { UserItem },
  name: 'Dashboard',
  data: ()=> {
    return {
      loading: false,
      searchParams: {
        name: '',
        sortBy: 'name',
        order: 'asc',
        page: 1,
        limit: 12
      },
      sortingValue: 'name-asc',
      sortingOptions: [
        {text: 'Name, ascending', value: 'name-asc'},
        {text: 'Name, descending', value: 'name-desc'},
        {text: 'ID, ascending', value: 'id-asc'},
        {text: 'ID, descending', value: 'id-desc'},
      ]
    }
  },
  props: {},
  methods: {
    ...mapActions({
      getUsers: 'getUsers'
    }),
    initUsers: async function() {
      if (!this.$store.state.users.length) {
        this.loading = true;
        await this.getUsers();
        this.loading = false;
      }
    },
    updateSearch: function(event) {
      this.searchParams.name = event.target.value;
      if (event.key == "Enter") {
        this.getUsers(this.searchParams);
        console.log(event);
      }
    },
    updateSorting: function(value) {
      const splitValue = value.split('-');
      this.searchParams.sortingValue = value;
      this.searchParams.sortBy = splitValue[0];
      this.searchParams.order = splitValue[1];
      this.getUsers(this.searchParams)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.list-header {
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr;
  }
  justify-content: space-between;
  align-items: center;
  justify-items: stretch;
  padding: 0 12px;
  .search-group {
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
    }
    div {
      margin-right: 0;
      @media (min-width: 768px) {
        margin-right: 5px;
      }
    }
  }
  .view-modes {
    text-align: right;
    .btn {
      margin-left: 5px;
    }
  }
  .v-text-field__details {
    display: none !important;
  }
}
.user-list {
  &.grid {
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 1264px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 768px) and (max-width: 1263px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
