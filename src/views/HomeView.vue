<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ul>
      <TreeItem class=".item" :tdata="treeData"></TreeItem>
    </ul>
    <h2>Reactivity, Class and Style bindings, Conditional and List Rendering:</h2>
    <HelloWorld />
    <h2>Watch Example:</h2>
    <WatchersComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import WatchersComponent from '@/components/WatchersComponent.vue'
import TreeItem from '@/components/TreeItem.vue'

var treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        }
      ]
    }
  ]
}

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    WatchersComponent,
    TreeItem
  },
  data () {
    return {
      treeData
    }
  }
}
</script>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>
