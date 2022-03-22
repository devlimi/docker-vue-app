<template>
  <div class="home">
    <Menus/>
    <List :listArray ="listName"/>

  </div>
</template>

<script>
import Menus from '@/components/Menus.vue'
import List from '@/components/list.vue'


export default {
  name: 'Home',
  data(){
    return{
      listName: [
        {name: '존1', value: '1'},
        {name: '존2', value: '2'},
        {name: '존3', value: '3'},
      ]
    }
  },
  components: {
    List,
    Menus
  }
}
</script>
