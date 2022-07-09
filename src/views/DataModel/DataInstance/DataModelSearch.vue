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
import SearchEnumerationType, {stateOptions, entityTypeOptions, modelTypeOptions, selectFunctionOptions} from '@/components/SearchForm/EnumerationType.js'

export default {
  name: 'DataInstanceSearch',
  data () {
    return {
      searchField: {},
      condition: [
        {
          type: SearchEnumerationType.input,
          name: 'code',
          label: '编码',
          placeholder: '请输入编码'
        },
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
          type: SearchEnumerationType.select,
          name: 'state',
          multiple: true,
          defaultValue: [ 'isWrok', 'preRelease', 'release' ],
          label: '状态',
          placeholder: '请选择状态',
          options: stateOptions
        },
        {
          type: SearchEnumerationType.multipleSelect,
          name: 'parentId',
          label: '父模型',
          placeholder: '请选择父模型',
          options: this.getParentOptions()
        },
        {
          type: SearchEnumerationType.select,
          name: 'entityType',
          label: '实体类型',
          placeholder: '请选择实体类型',
          options: entityTypeOptions
        },
        {
          type: SearchEnumerationType.input,
          name: 'version',
          label: '版本',
          placeholder: '请输入版本'
        },
        {
          type: SearchEnumerationType.select,
          name: 'modeType',
          label: '模型类型',
          placeholder: '请选择模型类型',
          options: modelTypeOptions
        },
        {
          type: SearchEnumerationType.select,
          name: 'selectFunction',
          multiple: true,
          defaultValue: [],
          label: '可选功能',
          placeholder: '请选择可选功能',
          options: selectFunctionOptions
        },
        {
          type: SearchEnumerationType.user,
          name: 'user',
          label: '创建者',
          placeholder: '请输入用户'
        },
        {
          type: SearchEnumerationType.time,
          name: 'eos',
          label: 'EOS时间',
          placeholder: '请选择时间'
        },
        {
          type: SearchEnumerationType.cascader,
          name: 'tags',
          label: '标签类型',
          placeholder: '请选择标签类型',
          options: [
            {
              label: 'XDM',
              value: 'XDM'
            },
            {
              label: 'SYS',
              value: 'SYS'
            },
            {
              label: 'GENERE',
              value: 'GENERE'
            }
          ]
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
