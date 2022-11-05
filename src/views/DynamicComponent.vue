<template>
  <div class="demo">
    <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="currentTab" :message="message" @home-component="captureMessage" class="tab"></component>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import PostsComponent from '@/components/PostsComponent.vue'
import ArchiveComponent from '@/components/ArchiveComponent.vue'

export default {
  name: 'DynamicComponent',
  provide () {
    return { dc: 'provided from dynamic component' }
  },
  components: {
    HomeComponent,
    PostsComponent,
    ArchiveComponent
  },
  data () {
    return {
      currentTab: 'HomeComponent',
      tabs: ['HomeComponent', 'PostsComponent', 'ArchiveComponent'],
      message: 'I am in dynamic component view',
      msg: ''
    }
  },
  methods: {
    captureMessage (msg) {
      console.log(msg)
      this.msg = msg
    }
  }
  // mounted () {
  // Event bus this.$root.$on removed from vue 3 and we can achieve this by using third party library
  // as while this project set I selected vue 3.x
  //   this.$root.$on('home-msg', (res) => {
  //     console.log(res)
  //   })
  // }
}
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #e0e0e0;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
