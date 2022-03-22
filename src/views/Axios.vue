<template>
  <div>
    {{data}}
  </div>
</template>

<script>
import { getTodo } from '../api/todo'
export default {
  name: "Axios",
  data(){
    return{
       data: {}
    }
  },
  beforeMount() {
    //const response = this.getTodo(1)
    this.TodoT(1)

    //console.log(response)

    // Promise.all([getTodo(1),getTodo(2)]) //2,3
        // .then(function (results){
    //       this.data = results[0].data
           //console.log("string")
        //   console.log(results[0])
       //    console.log(results[1])
      //  })
  },
  methods:{
    async TodoT(id){
      // const response = await getTodo(id)
      // this.data = response.data

      // const { data } = await getTodo(id)
      // this.data = data

     // await getTodo(id).then(response => this.data = response.data)

      await getTodo(id).then(({data}) => this.data = data)

    }
  }
}
</script>

<style scoped>

</style>