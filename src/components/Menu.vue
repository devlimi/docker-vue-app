<template>
  <div class="first-menu">
<!--    <div class ="page-head">-->
<!--      페이지 헤드-->
<!--      <button id="menu-button">-</button>-->
<!--    </div>-->
    <div id ="left">
      <div class ="menu-header">
        <button id="menu-button">=</button>
        <div>
         MEGAZONE
        </div>
      </div>

      <ul>
        <li>카테고리</li>
        <li>IT</li>
        <li>회계</li>
        <li>전사공지</li>
      </ul>
    </div>

  </div>


</template>

<script>
export default {
name: "Menu"
}
</script>

<style scoped>
.first-menu {
}
#menu-button{
 float: left;
}
#left{
  position:fixed;
  top:0px;
  left:0px;
  width:250px;
  height:1000px;
  background:rgba(255,255,200,1.6);
  padding:40px 0;
  overflow: hidden
}

</style>