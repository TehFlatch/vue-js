<template>
  <v-container>
    <div class="list-header">
      <div class="search-group">
        <div class="search-input">
          <v-text-field
            @keyup="updateSearch"
            @keyup.enter="doSearch"
            @click:append="doSearch"
            @click:clear="clearSearch"
            v-bind:value="searchParams.name"
            label="Filter by name"
            outlined
            clearable
            append-icon="mdi-magnify"
          ></v-text-field>
        </div>
        <div class="sorting-input">
          <v-select
            :items="sortingOptions"
            :value="sortingValue"
            @change="updateSorting"
            label="Sort by"
            outlined
          ></v-select>
        </div>
      </div>
      <div class="view-modes">
        <v-tabs
        :value="viewMode == 'grid' ? 0 : 1"
        @change="changeViewMode"
        :background-color="'transparent'">
          <v-tab>Grid</v-tab>
          <v-tab>List</v-tab>
        </v-tabs>
      </div>
    </div>
    <v-row>
      <v-col v-if="loading" cols="12">
        <h1>Please wait...</h1>
      </v-col>
      <v-col v-if="!loading && users.length == 0" cols="12">
        <h1 class="no-users">No users have been found with the search criteria</h1>
      </v-col>
      <v-col v-if="!loading && users.length > 0" cols="12">
        <div v-bind:class="viewMode" class="user-list">
          <user-item v-for="user in users" :key="user.id" :user="user" />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-pagination
        v-model="searchParams.page"
        :length="searchParams.page_count"
        @input="updatePage"
      />
    </v-row>
  </v-container>
</template>

<script>
import UserItem from '../components/UserItem.vue';
import { mapActions, mapState } from 'vuex';

export default {
  mounted: function() {
    this.initUsers();
  },
  components: { UserItem },
  name: 'Dashboard',
  data: ()=> {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapState(['viewMode', 'users', 'searchParams', 'sortingValue', 'sortingOptions'])
  },
  props: {},
  methods: {
    ...mapActions({
      getUsers: 'getUsers'
    }),
    initUsers: function() {
      if (!this.$store.state.users.length) {
        this.updateUsers(false);
      }
    },
    updateUsers: async function(useSearchParams) {
      this.loading = true;
      if (useSearchParams) {
        await this.getUsers(this.searchParams);
      } else {
        await this.getUsers();
      }
      this.loading = false;
    },
    doSearch: function() {
      this.updateUsers(true);
    },
    clearSearch: function() {
      this.$store.commit('updateSearch', '');
      this.doSearch();
    },
    updateSearch: function(event) {
      console.log(event.target.value);
      this.$store.commit('updateSearch', event.target.value);
    },
    updateSorting: function(value) {
      const splitValue = value.split('-');
      let newSort = {...this.searchParams};
      newSort.page = 1;
      newSort.sortBy = splitValue[0];
      newSort.order = splitValue[1];
      this.$store.commit('updateSorting', { newSort: newSort, newSortingValue: value });
      this.updateUsers(true);
    },
    updatePage: function(page) {
      this.searchParams.page = page;
      this.updateUsers(true);
    },
    changeViewMode: function(mode) {
      let viewMode = mode == 0 ? 'grid' : 'list';
      this.$store.commit('changeViewMode', viewMode);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.no-users {
  margin-top: 20px;
  margin-bottom: 20px;
}
.view-modes {
  .v-slide-group__content {
    justify-content: flex-end;
  }
  .v-tab {
    width: 50%;
    max-width: 50%;
  }
}
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
    .sorting-input {
      min-width: 250px;
    }
  }
  .v-text-field__details {
    display: none !important;
  }
}
.user-list {
  &.grid {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 1264px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 768px) and (max-width: 1263px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  &.list {
    padding: 20px;
  }
}
</style>
