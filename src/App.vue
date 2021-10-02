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
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath"/>
      </transition>
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
.fade-leave-active,
.fade-enter-active {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
