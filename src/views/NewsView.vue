<template>
<div>
 <div v-for="user in users" v-bind:key ="user.id">{{user}}</div>
</div>
</template>

<script>
import {fetchNewList} from '../api/index.js';
export default {
  name: "NewsView",
  data(){
    return{
      users:[]
    }
  },
  created() {
    var vm = this;
    fetchNewList()
    .then(function(response){
      console.log(response);
      vm.users = response.data;
    })
    .catch(function (error){
      console.log(error);
    });
  }

}
</script>

<style scoped>

</style>