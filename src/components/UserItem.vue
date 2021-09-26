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
        <h3>
          {{user.name}}
        </h3>
        <div>
          <a class="email" v-bind:href="'mailto:'+user.email">{{user.email}}</a>
        </div>
        <div>
          <a class="phone" v-bind:href="'tel:'+user.phone">{{user.phone}}</a>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'UserItem',
  props: ['user'],
  methods: {
    showDetails: function(userId) {
      console.log("Clicked:",userId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
    .v-avatar {
      box-shadow: #000000d4 0px 1px 9px 0px;
      margin-bottom: 20px;
    }
  }
  .list {
    
  }
</style>
