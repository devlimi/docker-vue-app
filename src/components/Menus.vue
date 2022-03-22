<template>
  <div>
    <div class='top'>
      <ul>
        <div id='menu'>
          <div class ="button-loc">
          <transition name='state'>
            <button v-if="fade == false" @click='enter' id="open">
              &#9636;
            </button>
          </transition>

          <transition name='state'>
            <button v-if="fade == true" @click='enter' id="close">
              &#9636;
            </button>

          </transition>
          </div>
          <div class = "logo">MEGAZONE</div>
        </div>
      </ul>
    </div>
    <transition name='toggle'>

      <div class='left' v-if='fade'>
        <ul>
          <TreeBrowser :node="menu"/>
        </ul>
      </div>
    </transition>

  </div>
</template>

<script>
import TreeBrowser from "./TreeBrowser";
export default {
  name: 'Menus',
  components: {TreeBrowser},
  data () {
    return {
      fade: false,
      menu:{
        name:'카테고리',
        children:[
          {
            name: 'IT',
            children:[
              { name: 'IT 지식 게시판'}, { name: '소프트웨어 신청'}
            ]
          },
          {
            name: '회계',
            children:[
              { name:'회계 게시판'}, {name:'회계 자유 게시판'}
            ]
          },
          {
            name: '전사공지'
          },
        ]
      }
    }
  },
  methods: {
    enter: function () {
      this.fade = !this.fade
    }
  },
  created () {
  }
}
</script>
<style>

.top {
  width:100%;
  min-width:1200px;
  height:50px;
  position:relative;
  background:#ffffff;
  border-bottom:4px solid black;
  z-index: 99
}
.top ul div {float:left;}
.logo{
  font-weight: bold;
  font-size: 25px;
  margin-left: 5px;
}
.button-loc{
  margin-left: -5px;
  margin-top: 2px;
}



.left{
  float:left;
  position:relative;
  width:250px;
  height:750px;
  background:#1E90FF;
  padding:40px 0;
  border-bottom-right-radius: 25px;
  z-index: 9;
  color : white;
  font-weight: bold;

}

.toggle-enter-active, .toggle-leave-active {
  transition: all 1s
}

.toggle-enter , .toggle-leave-to{
  left:-250px;
  opacity: 0;
}

.toggle-enter-to , .toggle-leave {
  left:0px;
  opacity: 1;
}



@keyframes leftbtn {
  100%{
    left: 0px
  }50%{
     left: 25px
   }0%{
      left: -100px
    }
}
</style>
