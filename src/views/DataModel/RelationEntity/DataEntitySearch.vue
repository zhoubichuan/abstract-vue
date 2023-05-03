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
import SearchEnumerationType, {stateOptions, relationEntityTypeOptions} from 'static/EnumerationType.js'
export default {
  name: 'DataEntitySearch',
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
          type: SearchEnumerationType.input,
          name: 'sourceDataEntity',
          label: '源模型项',
          placeholder: '请输入源模型项名称'
        },
        {
          type: SearchEnumerationType.input,
          name: 'targetDataEntity',
          label: '目标模型项',
          placeholder: '请输入目标模型项名称'
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
          label: '关系类型',
          placeholder: '请选择模型类型',
          options: relationEntityTypeOptions
        },
        {
          type: SearchEnumerationType.user,
          name: 'modifier',
          label: '更新者',
          placeholder: '请输入用户'
        },
        {
          type: SearchEnumerationType.user,
          name: 'creater',
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
