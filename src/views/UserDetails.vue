<template>
  <v-container>
    <v-row>
      <v-col v-if="loading" cols="12">
        <h1>Please wait...</h1>
      </v-col>
      <v-col v-if="!loading && $store.state.userData" cols="12">
        <div class="user-details">
          <div v-on:click="goBack" class="go-back">
            <v-icon class="go-back-icon">mdi-arrow-left</v-icon>
            <span class="go-back-text">Go Back</span>
          </div>
          <v-card>
            <v-row>
              <v-col sm="12" md="4" lg="4" class="main-info text-center">
                <v-avatar size="150px">
                  <img
                    v-if="$store.state.userData.avatar"
                    alt="Avatar"
                    v-bind:src="$store.state.userData.avatar"
                  >
                </v-avatar>
                <div class="name">
                  <span>{{$store.state.userData.name}}</span>
                </div>
              </v-col>
              <v-col sm="12" md="8" lg="8" class="additional-info">
                <div class="additional-info-item email">
                  <v-icon>mdi-email</v-icon>
                  <div>{{$store.state.userData.email}}</div>
                </div>
                <div class="additional-info-item phone">
                  <v-icon>mdi-phone</v-icon>
                  <div>{{$store.state.userData.phone}}</div>
                </div>
                <div class="additional-info-item company">
                  <v-icon>mdi-domain</v-icon>
                  <div>{{$store.state.userData.company}}</div>
                </div>
                <div class="additional-info-item birthday">
                  <v-icon>mdi-cake</v-icon>
                  <div>{{$store.state.userData.birthdate | formatDate}}</div>
                </div>
                <div class="additional-info-item cc">
                  <v-icon>mdi-credit-card</v-icon>
                  <div>{{$store.state.userData.creditcard}}</div>
                </div>
                <hr/>
                <div class="additional-info-item bio">
                  <div>{{$store.state.userData.bio}}</div>
                </div>
              </v-col>  
            </v-row>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import moment from 'moment';
import router from '../router';

export default {
  mounted: async function() {
    await this.initUser(this.$route.params.userId);
  },
  components: {  },
  name: 'UserDetails',
  data: ()=> {
    return {
      loading: false,
    }
  },
  props: {},
  methods: {
    ...mapActions({
      getUser: 'getUser'
    }),
    initUser: async function(userId) {
      this.loading = true;
      await this.getUser(userId);
      this.loading = false;
    },
    goBack: function() {
      router.go(-1);
    }
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format('DD MMMM')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.user-details{
  .go-back {
    .go-back-icon {
      color: #1976d2;
    }
    .go-back-text {
      position: relative;
      top: 2px;
      left: 8px;
      color: #1976d2;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .v-card {
    margin-top: 20px;
    padding: 20px;
    min-height: 250px;
    .name {
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      margin-top: 10px;
    }
    .additional-info {
      .additional-info-item {
        margin-bottom: 10px;
        .v-icon {
          color: #1976d2;
        }
        div {
          display: inline-block;
          position: relative;
          left: 10px;
          top: 2px;
        }
        hr {
          border-top: #1976d2 solid 1px;
          position: relative;
          top: 10px;
        }
        &.bio {
          margin-top: 10px;
          div {
            top: 0;
            left: 0;
            text-align: justify;
          }
        }
      }
    }
  }
}
</style>
