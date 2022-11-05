<template>
  <div>
    <h1>Event Handling</h1>
    <h4>Inline handlers:</h4>
    <!-- this.$store.state.count++ -->
    <button @click="counter++ & this.$store.commit('increment')">Add 1</button>
    <button @click="increment">Add 1</button>
    <button @click="decrement">Sub 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <p>This is vuex state counter {{count}}</p>
    <p>This is vuex state value {{value}}</p>
    <p> {{ $store.getters.doneTodos }} {{ $store.getters.doneTodosCount }} {{ $store.getters.getTodoById(1) }}</p>
    <p> {{ doneTodos }} {{ doneTodosCount }} {{ getTodoById(1) }}</p>
    <h4>Method handlers</h4>
    <!-- A method handler automatically receives the native DOM Event object that triggers it -->
    <button @click.stop.prevent="greet">Greet</button>

    <h4>Calling Methods in Inline Handlers</h4>
    <button @click.right="say('hello')">Say hello</button>
    <button @click.middle="say('bye')">Say bye</button>

    <h4>Accessing Event Argument in Inline Handlers</h4>
    <!-- using $event special variable -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <!-- using inline arrow function -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>
  </div>
</template>

<!-- <script setup>
import { ref } from 'vue'

const counter = ref(0)
const name = ref('welcome to Vue')

function greet (event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

function say (message) {
  alert(message)
}

function warn (message, event) {
// now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script> -->

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapMutations } from 'vuex'
// import { mapGetters } from 'vuex'
export default {
  name: 'EventHandling',
  data () {
    return {
      counter: 0,
      name: 'welcome to Vue',
      localCount: 4
    }
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   },
  //   doneTodosCount () {
  //     return this.$store.getters.doneTodosCount
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count,
  //   countAlias: 'count',
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // }),
  // computed: mapState([
  //   'count',
  // ]),
  computed: {
    ...mapGetters([
      'doneTodos', 'doneTodosCount', 'getTodoById'
    ]),
    ...mapState([
      'count', 'value'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    greet (event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.name}!`)
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
        console.log(event.target.innerHTML)
      }
    },
    say (message) {
      alert(message)
    },
    warn (message, event) {
    // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
}
</script>
