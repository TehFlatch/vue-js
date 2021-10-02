<template>
  <v-container>
    <v-row>
      <v-col v-if="loading" cols="12">
        <h1>Please wait...</h1>
      </v-col>
      <v-col v-if="!loading && $store.state.userData" cols="12">
        <div class="user-details">
          <div class="navigation">
            <div v-on:click="goBack" class="go-back">
              <v-icon class="go-back-icon">mdi-arrow-left</v-icon>
              <span class="go-back-text">Go Back</span>
            </div>
            <div v-if="$store.state.users.length" class="user-navigation">
              <div v-on:click="changeUser('prev')" v-bind:class="{disabled:userIndex <= 0}" class="previous">
                <v-icon class="previous-icon">mdi-arrow-left</v-icon>
                <span class="previous-text">Previous User</span>
              </div>
              <div v-on:click="changeUser('next')" v-bind:class="{disabled:userIndex >= $store.state.users.length - 1}" class="next">
                <span class="next-text">Next User</span>
                <v-icon class="next-icon">mdi-arrow-right</v-icon>
              </div>
            </div>
          </div>
          <v-card>
            <v-row>
              <v-col cols="12" sm="12" md="4" lg="4" class="main-info text-center">
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
              <v-col cols="12" sm="12" md="8" lg="8" class="additional-info">
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
// import Vue from 'vue';
import moment from 'moment';
import router from '../router';
// Vue.forceUpdate();

export default {
  mounted: async function() {
    await this.initUser(this.$route.params.userId);
    this.userIndex = this.$store.state.users.findIndex(user => user.id == this.$route.params.userId);
  },
  components: {  },
  name: 'UserDetails',
  data: ()=> {
    return {
      loading: false,
      userIndex: 0,
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
      router.push('/');
    },
    changeUser: function(direction) {
      switch(direction) {
        case 'prev': {
          if (this.userIndex > 0) {
            console.log(this.$store.state.users);
            let prevId = this.$store.state.users[this.userIndex - 1].id;
            console.log(prevId);
            router.replace({ path: `/user/${prevId}`});
          }
        }
        break;
        case 'next': {
          console.log(this.$store.state.users);
          let nextId = this.$store.state.users[this.userIndex + 1].id;
          console.log(nextId);
          router.push({ path: `/user/${nextId}`});
        }
        break;
      }
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
  .v-avatar {
    box-shadow: #00000033 3px 5px 9px 0px, #82b1ffbf -3px -3px 7px 0px;
    margin-bottom: 20px;
  }
  .navigation {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .v-icon,
    span {
        color: #1976d2;
    }
    span {
      position: relative;
      top: 2px;
    }
    div {
      &:hover {
        cursor: pointer;
      }
    }
    .go-back {
      .span {
        left: 8px;
      }
      
    }
    .user-navigation {
      text-align: right;
      display: flex;
      justify-content: flex-end;
      .disabled {
        opacity: 0.5;
      }
      .next {
        margin-left: 30px;
        span {
          right: 8px;
        }
      }
      .previous {
        span {
          left: 8px;
        }
      }
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
