<template>
  <div class="about">
    <TreeBrowser
    :node="root"/>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import TreeBrowser from "../components/TreeBrowser";
export default {
  name: 'About',
  components: {
    TreeBrowser
  },
  data() {
    return {
      root:{
        name:'카테고리',
        children:[
          {
            name: 'IT'
          },
          {
            name: '회계',
            children:[
                {
              name:'회계 게시판'
            },
              {name:'회계 자유 게시판'}
            ]
          },
          {
            name: '전사공지'
          },
        ]
      }
    }
  }
}
</script>


