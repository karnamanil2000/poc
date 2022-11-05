<template>
  <div>
    <button @click="toggleBox">Toggle box</button>
    <div v-if="isVisible">
      <!-- <p >Life Cycle Hooks</p>
      <div v-for="h in arHooks" :key="h">
        {{ h }}
      </div> -->
      <LifeCycleHooks @arrayHooks="getArrayHooks" />
    </div>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
      ></BlogPost>
  </div><br>
  <ButtonCounter>Something bad happened.</ButtonCounter>
  </div>
</template>

<script>
import LifeCycleHooks from '@/components/LifeCycleHooks.vue'
import BlogPost from '@/components/BlogPost.vue'
import ButtonCounter from '@/components/ButtonCounter.vue'
import { exampleMixin } from '@/mixins/exampleMixin'

export default {
  name: 'AboutView',
  mixins: [exampleMixin],
  components: {
    LifeCycleHooks,
    BlogPost,
    ButtonCounter
  },
  data () {
    return {
      isVisible: false,
      hooks: '',
      arHooks: [],
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1
      // message: 'I take priority.'
    }
  },
  methods: {
    toggleBox () {
      this.isVisible = !this.isVisible
      console.log('mixin toggle box')
    },
    // hello () {
    //   console.log('Hello from the component. Component method takes priority then mixin method')
    // },
    getArrayHooks (arrayHooks) {
      // console.log(arrayHooks)
      // this.arHooks.push(arrayHooks)
      arrayHooks.forEach((element, index) => {
        this.arHooks.push(element)
      })
    }
  },
  // watch: {
  //   hooks (newValue, oldValue) {
  //     // console.log('hooksNewValue: ', newValue, 'hooksOldValue', oldValue)
  //     this.arHooks.push(newValue)
  //   }
  // },
  created () {
    console.log('created from About View')
    console.log(this.message, 'this from component or view as priority while conflicting with mixins')
    this.hello()
  },
  beforeUpdate () {
    // debugger
    console.log('before update')
    this.hooks = 'before update'
    // this.arHooks.push(this.hooks)
  },
  updated () {
    // debugger
    console.log('updated')
    this.hooks = 'updated'
    // this.arHooks.push(this.hooks)
  }
}
</script>

<style>
.box {
  background-color: purple;
  height: 200px;
  width: 200px;
}

.box.two {
  background-color: red;
}

.box.three {
  background-color: blue;
}
</style>
