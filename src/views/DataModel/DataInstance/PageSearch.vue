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
let { result } = require('@/assets/data/search.json')
export default {
  name: 'DataEntitySearch',
  data () {
    return {
      searchField: {},
      condition: result
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
    }
  }
}
</script>
