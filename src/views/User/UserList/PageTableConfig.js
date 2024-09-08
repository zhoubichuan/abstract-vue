export default {
  inject: {
    config: {
      type: Object
    }
  },
  data () {
    return {
      tableRows: []
    }
  },
  methods: {
    showViewModal (row) {
      this.$emit('showViewModal', row)
    },
    showEditModal (row) {
      this.$emit('showEditModal', row)
    },
    async getConfig (condition = {}) {
      this.loadingFlag = true
      let { result } = await this.$api[this.config.interface.list]({
        ...condition
      })
      if (result) {
        let {
          data
        } = result
        const config = [
          [
            {
              attrs: { fixed: 'left', type: 'selection', width: '55' }
            },
            {
              label: '序号',
              attrs: { fixed: 'left', type: 'index', width: '55' }
            },
            {
              prop: '_id',
              label: '用户编码',
              attrs: { 'show-overflow-tooltip': true, width: '100' },
              render: (
                h,
                ctx
              ) => {
                let {
                  data: {
                    attrs: { item, scope: { row } }
                  }
                } = ctx
                return (
                  <el-link
                    size={'mini'}
                    type={'primary'}
                    title={row._id || '-'}
                    onClick={() => this.showViewModal(row)}
                  >
                    {row.code}
                  </el-link>
                )
              }
            },
            {
              prop: 'username',
              label: '用户名称',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'descript',
              label: '中文描述',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'access',
              label: '权限',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'phone',
              label: '电话',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'email',
              label: '邮箱',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'creater',
              label: '创建者',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'creatTime',
              label: '创建时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'modifier',
              label: '更新者',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'modifyTime',
              label: '更新时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              label: '操作',
              attrs: { fixed: 'right', 'show-overflow-tooltip': true },
              render: (
                h,
                ctx
              ) => {
                let {
                  data: {
                    attrs: { item, scope: { row } }
                  }
                } = ctx
                return (
                  [(
                    <el-link
                      icon={'el-icon-edit'}
                      title={'编辑'}
                      onClick={() => this.showEditModal(row)}
                    ></el-link>
                  ),
                  (
                    <el-link
                      icon={'el-icon-collection'}
                      title={'修订'}
                      onClick={() => this.showRemoveModal(row)}
                    ></el-link>
                  ),
                  (
                    <el-link
                      icon={'el-icon-delete'}
                      title={'删除'}
                      onClick={() => this.deleteModal(row)}
                    ></el-link>
                  )]
                )
              }
            }
          ],
          [
            {
              attrs: { fixed: 'left', type: 'selection', width: '55' }
            },
            {
              label: '序号',
              attrs: { fixed: 'left', type: 'index', width: '55' }
            },
            {
              prop: 'code',
              label: '编码',
              attrs: { 'show-overflow-tooltip': true, width: '55' },
              render: (
                h,
                {
                  data: {
                    attrs: { item, scope: { row } }
                  }
                }
              ) => {
                return (
                  <el-link
                    size={'mini'}
                    type={'primary'}
                    title={row._id || '-'}
                    onClick={() => this.showViewModal(row._id)}
                  >
                    {row.code}
                  </el-link>
                )
              }
            },
            {
              prop: 'name',
              label: '中文名称',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'nameEn',
              label: '英文名称',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'descript',
              label: '中文描述',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'descriptEn',
              label: '英文描述',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'version',
              label: '版本',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'state',
              label: '状态',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'eos',
              label: 'EOS时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'modeType',
              label: '模型类型',
              attrs: { 'show-overflow-tooltip': true }
            },
            // {
            //   prop: 'creater',
            //   label: '创建者',
            //   attrs: { 'show-overflow-tooltip': true }
            // },
            {
              prop: 'creatTime',
              label: '创建时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            // {
            //   prop: 'modifier',
            //   label: '更新者',
            //   attrs: { 'show-overflow-tooltip': true }
            // },
            {
              prop: 'modifyTime',
              label: '更新时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'tags',
              label: '标签',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              label: '操作',
              attrs: { fixed: 'right', 'show-overflow-tooltip': true },
              render: (
                h,
                {
                  data: {
                    attrs: { item, row }
                  }
                }
              ) => {
                return (
                  [(
                    <el-link
                      icon={'el-icon-edit'}
                      title={'编辑'}
                      onClick={() => this.showEditModal(row._id)}
                    ></el-link>
                  ),
                  (
                    <el-link
                      icon={'el-icon-collection'}
                      title={'修订'}
                      onClick={() => this.showRemoveModal(row._id)}
                    ></el-link>
                  ),
                  (
                    <el-link
                      icon={'el-icon-delete'}
                      title={'删除'}
                      onClick={() => this.deleteModal(row._id)}
                    ></el-link>
                  )]
                )
              }
            }
          ],
          [
            {
              attrs: { fixed: 'left', type: 'selection', width: '55' }
            },
            {
              label: '序号2',
              attrs: { fixed: 'left', type: 'index', width: '55' }
            },
            {
              prop: 'code',
              label: '编码2',
              attrs: { 'show-overflow-tooltip': true, width: '55' },
              render: (
                h,
                {
                  data: {
                    attrs: { item, scope: { row } }
                  }
                }
              ) => {
                return (
                  <el-link
                    size={'mini'}
                    type={'primary'}
                    title={row._id || '-'}
                    onClick={() => this.showViewModal(row._id)}
                  >
                    {row.code}
                  </el-link>
                )
              }
            },
            {
              prop: 'name',
              label: '中文名称',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'nameEn',
              label: '英文名称',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'descript',
              label: '中文描述',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'descriptEn',
              label: '英文描述',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'version',
              label: '版本',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'state',
              label: '状态',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'eos',
              label: 'EOS时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'modeType',
              label: '模型类型',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'creater',
              label: '创建者',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'creatTime',
              label: '创建时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'modifier',
              label: '更新者',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'modifyTime',
              label: '更新时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'tags',
              label: '标签',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              label: '操作',
              attrs: { fixed: 'right', 'show-overflow-tooltip': true },
              render: (
                h,
                {
                  data: {
                    attrs: { item, row }
                  }
                }
              ) => {
                return (
                  [(
                    <el-link
                      icon={'el-icon-edit'}
                      title={'编辑'}
                      onClick={() => this.showEditModal(row._id)}
                    ></el-link>
                  ),
                  (
                    <el-link
                      icon={'el-icon-collection'}
                      title={'修订'}
                      onClick={() => this.showRemoveModal(row._id)}
                    ></el-link>
                  ),
                  (
                    <el-link
                      icon={'el-icon-delete'}
                      title={'删除'}
                      onClick={() => this.deleteModal(row._id)}
                    ></el-link>
                  )]
                )
              }
            }
          ],
          [
            {
              attrs: { fixed: 'left', type: 'selection', width: '55' }
            },
            {
              label: '序号3',
              attrs: { fixed: 'left', type: 'index', width: '55' }
            },
            {
              prop: 'code',
              label: '编码3',
              attrs: { 'show-overflow-tooltip': true, width: '55' },
              render: (
                h,
                {
                  data: {
                    attrs: { item, scope: { row } }
                  }
                }
              ) => {
                return (
                  <el-link
                    size={'mini'}
                    type={'primary'}
                    title={row._id || '-'}
                    onClick={() => this.showViewModal(row._id)}
                  >
                    {row.code}
                  </el-link>
                )
              }
            },
            {
              prop: 'type',
              label: '表单类型',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'name',
              label: '字段名称',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'label',
              label: '中文名称',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'placeholder',
              label: '文本显示',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'options',
              label: '选项',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'creater',
              label: '创建者',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'createTime',
              label: '创建时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'modifier',
              label: '更新者',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              prop: 'modifyTime',
              label: '更新时间',
              attrs: { 'show-overflow-tooltip': true }
            },
            {
              label: '操作',
              attrs: { fixed: 'right', 'show-overflow-tooltip': true },
              render: (
                h,
                {
                  data: {
                    attrs: { item, row }
                  }
                }
              ) => {
                return (
                  [(
                    <el-link
                      icon={'el-icon-edit'}
                      title={'编辑'}
                      onClick={() => this.showEditModal(row._id)}
                    ></el-link>
                  ),
                  (
                    <el-link
                      icon={'el-icon-collection'}
                      title={'修订'}
                      onClick={() => this.showRemoveModal(row._id)}
                    ></el-link>
                  ),
                  (
                    <el-link
                      icon={'el-icon-delete'}
                      title={'删除'}
                      onClick={() => this.deleteModal(row._id)}
                    ></el-link>
                  )]
                )
              }
            }
          ]
        ]
        this.tableRows = Object.freeze(config[this.config.template - 1])
      } else {
        this.tableRows = []
      }
    }
  },
  created () {
    this.getConfig({ template: this.config.template })
  }
}
