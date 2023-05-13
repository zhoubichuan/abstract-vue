<template>
  <web-table-page
    :value="page"
    @input="(val) => handleInput(val)"
    v-loading="loadingFlag"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    :data="tableData"
    stripe
    style="width: 100%"
    @selection-change="handleSelectionChange"
    class="table-part"
  >
    <el-table-column fixed="left" type="index" width="55"> </el-table-column>
    <el-table-column fixed="left" type="selection" width="55"></el-table-column>
    <el-table-column
      v-for="item in tableRows"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      v-bind="item.attrs"
    >
    </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </web-table-page>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      tableRows: [
        {
          prop: 'field',
          label: '描述',
          attrs: { 'show-overflow-tooltip': true }
        },
        {
          prop: 'descript',
          label: '中文描述',
          attrs: { 'show-overflow-tooltip': true }
        }
      ]
    }
  },
  mounted () {
    this.getLocalhostData()
  },
  methods: {
    getLocalhostData () {
      this.tableData = []
      for (let field in localStorage) {
        if (
          field in
          [
            'appVersion',
            'length',
            'clear',
            'getItem',
            'key',
            'removeItem',
            'setItem'
          ]
        ) { return }
        this.tableData.push({
          field,
          descript: localStorage[field].toString()
        })
      }
    },
    setLocalhostData (data) {
      data.forEach((item) => {
        localStorage[item.field] = item.descript
      })
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      localStorage.removeItem([row.field])
      this.getLocalhostData()
    }
  }
}
</script>