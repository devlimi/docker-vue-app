<template>
<div>
  <h1>리스트</h1>
  <ul>
    <li v-for="(list,k) in listArray" v-bind:key ="k" >
      {{list.name}}
    </li>
  </ul>

</div>
</template>

<script>
export default {
  name: "list",
  data(){
    return {
    }
  },
  props : {
    listArray :{
      type: Array
    }
  }


}
</script>

<style scoped>

</style>