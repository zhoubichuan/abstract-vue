<template>
  <table-page
    :value="page"
    @input="val => handleInput(val)"
    border
    v-loading="loadingFlag"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    :data="tableData"
    stripe
    style="width: 100%"
    @selection-change="handleSelectionChange"
    class="table-part">
    <el-table-column
      fixed="left"
      type="index"
      width="55">
    </el-table-column>
    <el-table-column
      fixed="left"
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="name"
      label="中文名称">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="nameEn"
      label="英文名称">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="descript"
      label="中文描述">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="descriptEn"
      label="英文描述">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="creater"
      label="创建者">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="createTime"
      label="创建时间">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="modifier"
      label="更新者">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="modifyTime"
      label="更新时间">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      prop="tags"
      label="标签">
    </el-table-column>
    <el-table-column
      fixed="right"
      show-overflow-tooltip
      label="操作">
      <template slot-scope="{row}">
        <el-link icon="el-icon-edit" title="编辑" 
        @click="showEditModal(row)"></el-link>
      </template>
    </el-table-column>
  </table-page>
</template>
<script>

export default {
    props: {
      searchConditon: {
        type: Object,
        default: () => {}
      }
    },
    components: {

    },
    data () {
      return {
        sliderRightIndex: 0,
        sliderPage: {

        },
        conditon: this.searchConditon,
        page: {
          curPage: 1,
          pageSize: 20,
          total: 0
        },
        loadingFlag: false,
        addModalFlag: false,
        editModalFlag: false,
        removeModalFlag: false,
        drawer: false,
        tableData: [],
        productId: ''
      }
    },
    methods: {
      showViewModal (row) {
        this.$emit('showViewModal', row)
      },
      showEditModal (row) {
        this.$emit('showEditModal', row)
      },
      handleInput (val) {
        this.page = val
        this.$emit('pageChange', this.page)
      },
      handleSearch (condition) {
        this.queryTagList(condition)
      },
      handleChange (val) {
        console.log(val)
      },
      handleClick (tab, event) {
        console.log(tab, event)
      },
      clickpageNum (index) {
          console.log('pageCount  ' + index)
      },
      handleSelectionChange (val) {
        this.$emit('input', val)
      },
      modalChange () {
          this.addModalFlag = false
          this.removeModalFlag = false
          this.editModalFlag = false
      },
      showRemoveModal (index, row) {
          this.removeModalFlag = true
          this.productId = row._id
      },
      queryTagList (condition = {}) {
        this.loadingFlag = true
        let {curPage, pageSize} = this.page
        this.$api.getTagList({
          curPage,
          pageSize,
          ...condition
        }).then(res => {
          if (res.status === '1') {
            let {result, page: {curPage, total, pageSize}} = res
            this.loadingFlag = false
            this.page.total = total
            this.page.curPage = curPage
            this.page.pageSize = pageSize
            this.tableData = result
          } else {
            this.tableData = []
            this.loadingFlag = false
          }
        })
      }
    }
}
</script>

<style scoped lang="stylus">
.content {
  height:100%;
  display:flex;
  flex-direction: column;
}
.search-part{
  flex-basis: 20px;
}
.button-part{
  flex-basis: 20px;
}
.table-part{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>