<template>
  <div class="tab">
    Posts component
    <p> {{ message }} </p>
    <P> {{ dc}} </P>
  </div>
</template>

<script>
export default {
  name: 'PostsComponent',
  inject: ['dc'],
  data () {
    return {
      msg: 'I am comming from Posts Component'
    }
  },
  props: ['message'],
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
  },
  beforeUnmount () {
    console.log('before unmount')
  },
  unmounted () {
    console.log('unmounted')
  }
}
</script>
