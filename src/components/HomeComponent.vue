<template>
  <div class="tab">
    Home component
    <p> {{ message }} </p>
    <p> {{ dc }} </p>
    <p> {{ posts }} </p>
  </div>
  <PostsComponent ref="posts"></PostsComponent>
</template>

<script>
import PostsComponent from '@/components/PostsComponent.vue'
export default {
  name: 'HomeComponent',
  props: ['message'],
  data () {
    return {
      msg: 'I am from Home Component',
      posts: ''
    }
  },
  components: {
    PostsComponent
  },
  inject: ['dc'],
  methods: {
    sendToDynamicComponent () {
      this.$emit('home-component', this.msg)
      // this.$root.$emit('home-msg', 'I am comming from home component')
    }
  },
  beforeCreate () {
    console.log('before create')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('before mount')
  },
  mounted () {
    console.log('mounted')
    this.sendToDynamicComponent()
    this.posts = this.$refs.posts.msg
  },
  beforeUnmount () {
    console.log('before unmount')
  },
  unmounted () {
    console.log('unmounted')
  }
}
</script>
