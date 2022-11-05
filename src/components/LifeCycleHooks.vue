<template>
  <div>
    <p>Life Cycle Hooks</p>
    <!-- <div v-for="h in arrayHooks" :key="h">
      {{ h }}
    </div> -->
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'LifeCycleHooks',
  data () {
    return {
      chooks: '',
      arrayHooks: [],
      red: 'red'
    }
  },
  // watch: {
  //   chooks (newValue, oldValue) {
  //     // console.log('chooksNewValue: ', newValue, 'chooksOldValue', oldValue)
  //     this.arrayHooks.push(newValue)
  //   }
  // },
  methods: {
    sendArrayHooksToParent () {
      this.$emit('arrayHooks', this.arrayHooks)
    }
  },
  beforeCreate () {
    // debugger
    console.log('before create')
    // this.chooks = 'before create'
    // this.arrayHooks.push(this.chooks)
    console.log('berforered', this.red)
  },
  created () {
    // debugger
    console.log('created')
    this.chooks = 'created'
    this.arrayHooks.push(this.chooks)
    console.log('red', this.red)
  },
  beforeMount () {
    // debugger
    console.log('before mount')
    this.chooks = 'before mount'
    this.arrayHooks.push(this.chooks)
  },
  mounted () {
    // debugger
    console.log('mounted')
    this.chooks = 'mounted'
    this.arrayHooks.push(this.chooks)
    this.sendArrayHooksToParent()
  },
  // beforeUpdate () {
  //   console.log('before update')
  //   this.chooks = 'before update'
  // },
  // updated () {
  //   console.log('updated')
  // },
  beforeUnmount () {
    // debugger
    console.log('before unmount')
    this.chooks = 'before unmount'
    this.arrayHooks.push(this.chooks)
  },
  unmounted () {
    // debugger
    console.log('unmounted')
    this.chooks = 'unmounted'
    this.arrayHooks.push(this.chooks)
  }
}
</script>
