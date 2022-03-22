<template>
  <div>
  <li>
    <div
        :class="{bold: isFolder}"
        @click="toggle"
        @dblclick="makeFolder">
      {{ item.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
          class="item"
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
          @make-folder="$emit('make-folder', $event)"
          @add-item="$emit('add-item', $event)"
      ></tree-item>
      <li class="add" @click="$emit('add-item', item)">+</li>
    </ul>
  </li>
  <ul id="demo">
    <tree-item
        class="item"
        :item="treeData"
        @make-folder="makeFolder"
        @add-item="addItem"
    ></tree-item>
  </ul>
  </div>
</template>

<script>
export default {
  name: "TreeData",
  data(){
    return{
      treeData:[

          { text: 'Social', state: { expanded: true }, children: [
              { text: 'Twitter', data: { icon: 'ion-social-twitter' }},
              { text: 'Facebook', data: { icon: 'ion-social-facebook' }},
              { text: 'Google+', data: { icon: 'ion-social-googleplus' }}
            ]},

          { text: 'Currencies', children: [
              { text: 'Dollar', data: { icon: 'ion-social-usd' } },
              { text: 'Bitcoin', data: { icon: 'ion-social-bitcoin' } },
              { text: 'Yen', data: { icon: 'ion-social-yen' } },
              { text: 'Euro', data: { icon: 'ion-social-euro' } }
            ]}

      ]

    }
  },

}
</script>

<style scoped>

</style>