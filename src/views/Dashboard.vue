<template>
  <div class="container">
    <user-item />
  </div>
</template>

<script>
import UserItem from '../components/UserItem.vue';
import axios from 'axios';
console.log(axios);
export default {
  components: { UserItem },
  name: 'Dashboard',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
