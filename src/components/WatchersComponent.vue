<!-- <template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>

  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <h2>Computed Example:</h2>
  {{ name }}
  <input v-model="name" />
  <p>Computed : {{ name != null && name != undefined && this.name != '' ? titleCase : '' }}</p>
  <p>{{ name != null && name != undefined && this.name != '' ? name.toUpperCase() : '' }}</p>
  <p>Method : {{ name != null && name != undefined && this.name != '' ? tcase(name) : '' }}</p>
</template>

<script setup>
import { reactive, computed, ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const name = ref('anil kumar')
const names = 'anil kumar karnam shiva'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
  // books: []
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const titleCase = computed(() => {
  const sentence = name.value !== undefined && name.value !== null && name.value !== '' ? name.value.toString().toLowerCase().split(' ') : ''
  console.log('sentence', sentence)
  console.log('name', names)
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i] !== undefined && sentence[i] !== null && sentence[i] !== '' ? sentence[i][0].toUpperCase() + sentence[i].slice(1) : ''
  }
  const updatedName = name.value !== undefined && name.value !== null && name.value !== '' ? sentence.join(' ') : ''
  return updatedName
})

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

watch(titleCase, (newValue) => {
  alert(`yes, computed property changed: ${newValue}`)
})

function tcase (name) {
  const sentence = name !== undefined && name !== null && name !== '' ? this.name.toString().toLowerCase().split(' ') : ''
  console.log(sentence)
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i] !== undefined && sentence[i] !== null && sentence[i] !== '' ? sentence[i][0].toUpperCase() + sentence[i].slice(1) : ''
  }
  return sentence.join(' ')
}
</script> -->

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <h2>Computed Example:</h2>
  {{ name }}
  <input v-model="name" />
  <p>Computed : {{ name != null && name != undefined && this.name != '' ? titleCase : '' }}</p>
  <p>{{ name != null && name != undefined && this.name != '' ? name.toUpperCase() : '' }}</p>
  <p>Method : {{ name != null && name != undefined && this.name != '' ? tcase(name) : '' }}</p>
</template>

<script>
import { exampleMixin } from '@/mixins/exampleMixin'

export default {
  name: 'WatchersComponent',
  mixins: [exampleMixin],
  data () {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      name: ''
    }
  },
  watch: {
    // whenever question changes, this function will run
    question (newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    },
    titleCase (newValue) {
      alert(`yes, computed property changed: ${newValue}`)
    }
  },
  computed: {
    titleCase () {
      const sentence = this.name !== undefined && this.name !== null && this.name !== '' ? this.name.toString().toLowerCase().split(' ') : ''
      console.log(sentence)
      for (let i = 0; i < sentence.length; i++) {
        // if (sentence[i] !== undefined && sentence[i] !== null && sentence[i] !== '') {
        //   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
        // } else {
        //   sentence[i] = ''
        // }
        sentence[i] = sentence[i] !== undefined && sentence[i] !== null && sentence[i] !== '' ? sentence[i][0].toUpperCase() + sentence[i].slice(1) : ''
      }
      const updatedName = this.name !== undefined && this.name !== null && this.name !== '' ? sentence.join(' ') : ''
      return updatedName
    }
  },
  methods: {
    async getAnswer () {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    },
    tcase (name) {
      const sentence = name !== undefined && name !== null && name !== '' ? this.name.toString().toLowerCase().split(' ') : ''
      console.log(sentence)
      for (let i = 0; i < sentence.length; i++) {
        // if (sentence[i] !== undefined && sentence[i] !== null && sentence[i] !== '') {
        //   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
        // } else {
        //   sentence[i] = ''
        // }
        sentence[i] = sentence[i] !== undefined && sentence[i] !== null && sentence[i] !== '' ? sentence[i][0].toUpperCase() + sentence[i].slice(1) : ''
      }
      return sentence.join(' ')
    }
  },
  beforeMount () {
    this.name = 'anil kumar karnam siva'
  }
}
</script>
