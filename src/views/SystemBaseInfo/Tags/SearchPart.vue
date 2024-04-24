<template>
  <!-- 搜索组件 -->
  <web-search
    class="search-part"
    :condition="condition"
    :value="searchField"
    @input="val => updateField(val)"
    @handleSearch="handleSearch">
  </web-search>
</template>
<script>
export default {
  name: 'TagSearch',
  data () {
    return {
      searchField: {},
      condition: [
        {
          type: 'searchInput',
          name: 'name',
          label: '中文名称',
          placeholder: '请输入中文名称'
        },
        {
          type: 'searchInput',
          name: 'nameEn',
          label: '英文名称',
          placeholder: '请输入英文名称'
        },
        {
          type: 'searchUser',
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
