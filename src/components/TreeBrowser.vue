<template>
  <div style="position: relative">
    <div @click="menutext" :style="{'margin-left':`${depth * 10}px`}"
         @mousedown.right ="mouseright($event)"
         @contextmenu.prevent
         class=" node">
      <span class="type">{{expanded ?'&#9660;' : '&#9658;'}}</span>
     {{node.name}}
    </div>
    <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
    <TreeBrowser
        v-if="expanded"
    v-for="child in node.children" :key="child.name" :node="child" :depth="depth+1"
    />
    <div v-show="menushow" class="menuchoice" :style="{left:xPosition, top:yPosition}" @contextmenu.prevent>
      <ul class ="contextmenu">
        <li>카테고리추가</li>
        <li>이름변경</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
name: "TreeBrowser",
  props:{
  node:Object,
    depth:{
    type:Number,
      default:0,
    }
  },
  data(){
  return{
    expanded:false,
    xPosition: '0px',
    yPosition: '0px',
    menushow: false
   }
  },
  computed:{

  },
  methods:{
    mouseright(event) {
      if (!this.node.children){
        this.menushow = true
        console.log(event.clientX)
        this.xPosition=(event.clientX+0)+'px'
        this.yPosition=(event.clientY-170)+'px'
        console.log(event.clientY)
      }

    },
    menutext(){
      if(this.node.children){
       this.expanded = !this.expanded
      }
    }
  }

}
</script>

<style scoped>
.node{
  text-align: left;
  font-size: 18px;
  padding: 10px;

}
.menuchoice{
  max-width: 300px;
  position: absolute;
  display: block;
  border: black solid 1px;
  background-color: black;

}
.contextmenu {
  border: #0000 solid 5px;
  list-style: none;
  padding: 0px;
  text-align: left;
}
</style>