import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import { SOME_MUTATION } from './mutation-types'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      value: 0,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ],
      obj: [],
      some: 'anil'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    incrementBy (state, payload) {
      state.count += payload.amount
    },
    [SOME_MUTATION] (state) {
      state.some = 'ANIL'
    },
    actionsIncrement (state) {
      state.value++
    },
    actionsDecrement (state) {
      state.value--
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
    actionsIncrementAsync ({ commit }) {
      setTimeout(() => {
        commit('actionsIncrement')
      }, 1000)
    }
  }
})

const app = createApp(App)
app.mixin({
  mounted () {
    console.log('I am mixed into every component.')
  }
})
app.use(router)
app.use(store)
app.mount('#app')

// store.commit('increment')
console.log('main.js count increment of store', store.state.count) // -> 1
// store.commit('incrementBy', { amount: 29 })
// store.commit({
//   type: 'incrementBy',
//   amount: 29
// })
// console.log('main.js count increment of store', store.state.count) // -> 8
console.log('main.js todos list of store', store.state.todos)
console.log('main.js todos values of store', store.getters.doneTodos)
console.log('main.js todos length of store', store.getters.doneTodosCount)
console.log('main.js todos by id of store', store.getters.getTodoById(1))
store.state.obj = { ...store.state.obj, 0: { newProp: 123, red: 123 } }
store.state.obj = { ...store.state.obj, 1: { newProp: 124, red: 124 } }
console.log('obj', store.state.obj)
store.state.obj = { ...store.state.obj, 2: { newProp: 125, red: 125 } }
console.log('obj', store.state.obj)
console.log('some', store.state.some)
store.commit('SOME_MUTATION')
console.log('some', store.state.some)
