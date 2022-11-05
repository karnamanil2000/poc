<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Life Cycle Hooks</router-link> |
    <router-link to="/event-handling">Event Handling</router-link> |
    <router-link to="/dynamic-component">Dynamic Components</router-link>
    <button @click="increment">count inc</button>
    <button @click="decrement">count dec</button>
    <button @click="actionsIncrement">+</button>
    <button @click="actionsDecrement">-</button>
  </nav>
  <main>
    <p>This is vuex state counter {{this.$store.state.count}}</p>
  </main>
  <router-view/>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  // methods: mapMutations([
  //   'increment'
  // ])
  computed: mapState(['value']),
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    actionsIncrement () {
      this.$store.dispatch('actionsIncrementAsync')
    },
    actionsDecrement () {
      this.$store.commit('actionsDecrement')
    }
  },
  updated () {
    console.log('Vue counter using store', this.$store.state.count)
  }
  // methods: {
  //   increment () {
  //     this.$store.commit('increment')
  //     console.log('App Vue counter using store', this.$store.state.count)
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  text-align: center;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
