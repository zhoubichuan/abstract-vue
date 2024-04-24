<template>
  <!-- 搜索组件 -->
  <web-search
    class="search-part"
    :condition="condition"
    :value="searchField"
    @input="(val) => updateField(val)"
    @handleSearch="handleSearch"
  >
  </web-search>
</template>
<script>
import { condition } from 'static/EnumerationType.js'
export default {
  name: 'DataEntitySearch',
  data () {
    return {
      searchField: {},
      condition
    }
  },
  watch: {},
  methods: {
    updateField (val) {
      this.searchField = val
      this.$emit('input', this.searchField)
    },
    handleSearch (condition) {
      this.$emit('handleSearch', condition)
    },
    getParentOptions () {
      return []
    }
  }
}
</script>
