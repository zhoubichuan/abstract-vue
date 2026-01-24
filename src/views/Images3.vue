<template>
  <div>
    <div v-for="(name, index) in items.foldName" :key="index">
      <span>{{ items.path + name }}</span>
      <child :name="name"></child>
    </div>
  </div>
</template>
<script>
import child from './child.vue'

export default {
  components: {
    child
  },
  data () {
    return {
      link: '',
      items: {
        path: '',
        foldName: [],
        fileType: [],
        type: 'edit',
        fileName: []
      }
    }
  },
  mounted () {
    this.link = localStorage.getItem('link')
    this.items.path = localStorage.getItem('path')
    localStorage.getItem('foldName') &&
      this.items.foldName.splice(
        0,
        this.items.foldName.length,
        ...localStorage.getItem('foldName').split(',')
      )
    localStorage.getItem('fileType') &&
      this.items.fileType.splice(
        0,
        this.items.fileType.length,
        ...localStorage.getItem('fileType').split(',')
      )
  }
}
</script>