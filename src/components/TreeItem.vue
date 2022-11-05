<template>
  <li>
    <!-- {{ tdata.name }} -->
    <div
      :class="{ bold: isFolder }"
      @click="toggle"
      @dblclick="changeType">
      {{ mutableTdata.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
      <TreeItem
        class="item"
        v-for="tdata in mutableTdata.children"
        :tdata="tdata" :key="tdata">
      </TreeItem>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem', // necessary for self-reference
  props: {
    tdata: Object
  },
  data () {
    return {
      isOpen: false,
      mutableTdata: this.tdata
    }
  },
  computed: {
    isFolder () {
      return this.mutableTdata.children && this.mutableTdata.children.length
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    changeType () {
      if (!this.isFolder) {
        this.mutableTdata.children = []
        this.addChild()
        this.isOpen = true
      }
    },
    addChild () {
      this.mutableTdata.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
