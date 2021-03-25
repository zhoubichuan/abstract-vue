<template>
  <!-- 搜索组件 -->
  <search-form
    class="search-part"
    :condition="condition"
    :value="searchField"
    @input="val => updateField(val)"
    @handleSearch="handleSearch">
  </search-form>
</template>
<script>
import SearchEnumerationType from '@/components/SearchForm/EnumerationType.js'

export default {
  name: 'TagSearch',
  data () {
    return {
      searchField: {},
      condition: [
        {
          type: SearchEnumerationType.input,
          name: 'name',
          label: '中文名称',
          placeholder: '请输入中文名称'
        },
        {
          type: SearchEnumerationType.input,
          name: 'nameEn',
          label: '英文名称',
          placeholder: '请输入英文名称'
        },
        {
          type: SearchEnumerationType.user,
          name: 'user',
          label: '创建者',
          placeholder: '请输入用户'
        }
      ]
    }
  },
  watch: {
  },
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
