<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <div class="d-flex align-center">
        <h1>
          VueJS Assignment
        </h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}
.v-application {
  background: #f9f9f9 !important;
}
</style>
