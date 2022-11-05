export const exampleMixin = {
  created () {
    this.logMessage()
  },
  data () {
    return {
      message: 'I am such a nice mixin.'
    }
  },
  methods: {
    logMessage () {
      console.log(this.message, 'from mixin secondary')
      console.log(this.posts, 'about view accessing about view component')
      console.log(this.answer, 'about view accessing about watchers component')
      // this.toggleBox()
    },
    hello () {
      console.log('Hello from the mixin!. Mixin method has low priority compared to compoent method')
    }
  }
}
