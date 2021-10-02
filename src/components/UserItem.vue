<template>
  <v-card class="user-card" v-on:click="showDetails(user.id)">
    <v-row>
      <v-col cols="12">
        <v-avatar size="70px">
          <img
            v-if="user.avatar"
            alt="Avatar"
            v-bind:src="user.avatar"
          >
        </v-avatar>
        <div class="user-details">
          <h3>
            {{user.name}}
          </h3>
          <div>
            <a class="email" target="_blank" v-bind:href="'mailto:'+user.email" v-on:click.stop>{{user.email}}</a>
          </div>
          <div>
            <a class="phone" v-bind:href="'tel:'+user.phone" v-on:click.stop>{{user.phone}}</a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import router from '../router';
export default {
  name: 'UserItem',
  props: ['user'],
  methods: {
    showDetails: function(userId) {
      router.push({ path: `/user/${userId}`});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .v-avatar {
    box-shadow: #00000033 3px 5px 9px 0px, #82b1ffbf -3px -3px 7px 0px;
    margin-bottom: 20px;
  }
  .grid {
    .user-card {
      margin: 10px;
      padding: 20px;
      transition: background-color 0.2s ease;
      .email,
      .phone {
        font-size: 14px;
      }
      &:hover {
        background-color: #1976d233;
      }
    }
  }
  .list {
    .user-card {
      margin-bottom: 10px;
      padding: 20px;
      .v-avatar {
        float:left;
      }
      .user-details {
        margin-left: 90px;
        @media (max-width: 767px) {
          a {
            font-size: 13px;
          }
        }
        
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
</style>
