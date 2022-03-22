<template>
  <div>
    {{data}}
  </div>
</template>

<script>

export default {
  name: "Test",
  data(){
    return{
      data:null
    }
  },
  beforeMount(){
    this.getToList(1)

  }

}
</script>

<style scoped>

</style>