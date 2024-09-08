
export default {
  inject: {
    config: {
      type: Object
    }
  },
  data () {
    return {
      rules: [{
        username: [
          { required: true, message: '请输入用户名称', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'change' }
        ],
        passowrd: [
          { required: true, message: '请输入用户密码', trigger: 'change' }
        ],
        access: [
          { required: true, message: '请输入用户权限', trigger: 'change' }
        ]
      }, {
        nameEn: [
          { required: true, message: '请输入英文名称', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入中文名称', trigger: 'change' }
        ],
        descriptEn: [],
        descript: [
          { required: true, message: '请输入中文描述', trigger: 'change' }
        ],
        parentId: [
          { required: true, message: '请选择父模型', trigger: 'change' }
        ],
        storeType: [],
        modelType: [
          { required: true, message: '请选择模型类型', trigger: 'change' }
        ],
        inherit: [],
        tableName: [
          { required: true, message: '请输入表名称', trigger: 'change' }
        ]
      }, {
        nameEn: [
          { required: true, message: '请输入英文名称', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入中文名称', trigger: 'change' }
        ],
        descriptEn: [],
        descript: [
          { required: true, message: '请输入中文描述', trigger: 'change' }
        ],
        parentId: [
          { required: true, message: '请选择父模型', trigger: 'change' }
        ],
        storeType: [],
        modelType: [
          { required: true, message: '请选择模型类型', trigger: 'change' }
        ],
        inherit: [],
        tableName: [
          { required: true, message: '请输入表名称', trigger: 'change' }
        ]
      }, {
        nameEn: [
          { required: true, message: '请输入英文名称', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入中文名称', trigger: 'change' }
        ],
        descriptEn: [],
        descript: [
          { required: true, message: '请输入中文描述', trigger: 'change' }
        ],
        parentId: [
          { required: true, message: '请选择父模型', trigger: 'change' }
        ],
        storeType: [],
        modelType: [
          { required: true, message: '请选择模型类型', trigger: 'change' }
        ],
        inherit: [],
        tableName: [
          { required: true, message: '请输入表名称', trigger: 'change' }
        ]
      }][this.config.template - 1]
    }
  },
  methods: {
    async handleAdd () {
      let keys = [
        'username',
        'password',
        'phone',
        'email',
        'access'
      ]
      let params = this.$filterObj(this.baseInfoForm, keys)
      try {
        let res = await this.$api[this.config.interface.add](params)
        if (res.statusCode === 200) {
          this.$message({
            message: '数据创建成功',
            type: 'success'
          })
          this.$findComponentUpward(this, 'DataEntity').$emit('handleSearch')
        } else {
          this.$message.error(res.msg)
          this.loading = false
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    async handleEdit () {
      let keys = [
        '_id',
        'username',
        'password',
        'phone',
        'email',
        'access'
      ]
      let params = this.$filterObj(this.baseInfoForm, keys)
      let id = this.rootPage.tabsData.data._id
      let res = await this.$api[this.config.interface.edit](id, params)
      try {
        if (res.statusCode === 200) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.baseInfoForm = res.result
          let parent = this.$findComponentUpward(this, 'DataEntity')
          parent.$emit('handleSearch')
        } else {
          this.$message.error(res.msg)
          this.loading = false
        }
      } catch (e) {
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    disableds () {
      let result = {
        code: false,
        state: false,
        nameEn: false,
        name: false,
        descriptEn: false,
        descript: false,
        parentId: false,
        storeType: false,
        modelType: false,
        inherit: false,
        tableName: false,
        version: false,
        creater: false,
        creatTime: false,
        modifier: false,
        modifyTime: false
      }
      if (this.pageSate !== 'show') {
        if (this.pageSate === 'edit') {
          result.code = true
          result.state = true
          result.version = true
          result.creater = true
          result.creatTime = true
          result.modifier = true
          result.modifyTime = true
        } else {
          result.historyRecord = false
        }
        let oldFormData = this.rootPage.tabsData.data
        let newFormData = this.baseInfoForm
        result.saveButton = window._.isEqual(oldFormData, newFormData)
        console.log(result.saveButton)
      }

      return result
    },
    shows () {
      let result = {
        saveButton: false,
        historyRecord: true
      }
      if (this.pageSate !== 'show') {
        result.saveButton = true
        result._id = false
        result.state = false
        if (this.pageSate === 'edit') {
        } else {
          result.historyRecord = false
        }
      }
      return result
    },
    baseFormData () {
      let result = {
        username: {
          label: '用户名称',
          render: this.baseInfoForm.username
        },
        password: {
          label: '用户密码',
          render: this.baseInfoForm.password
        },
        email: {
          label: '用户邮箱',
          render: this.baseInfoForm.email
        },
        phone: {
          label: '用户手机',
          render: this.baseInfoForm.phone
        },
        access: {
          label: '用户权限',
          render: this.baseInfoForm.access
        },
        space: {}
      }

      if (['edit', 'add'].includes(this.pageSate)) {
        result = {
          _id: {
            label: '编码',
            disabled: this.disableds._id,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          username: {
            label: '用户名称',
            placeholder: '请输入用户名称',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          password: {
            label: '用户密码',
            placeholder: '请输入用户密码',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          email: {
            label: '用户邮箱',
            placeholder: '请输入用户邮箱',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          phone: {
            label: '用户手机',
            placeholder: '请输入用户手机',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          access: {
            label: '用户权限',
            placeholder: '请输入用户权限',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              !formItem.options &&
                (formItem.options = [
                  { label: '是', value: true },
                  { label: '否', value: false }
                ])
              return (
                <el-radio-group
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  {formItem.options.map((item) => (
                    <el-radio
                      key={item.value}
                      label={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </el-radio>
                  ))}
                </el-radio-group>
              )
            }
          },
          space: {}
        }
      }
      Object.keys(this.shows).forEach((key) => {
        if (this.shows[key] === false) {
          Reflect.deleteProperty(result, key)
        }
      })
      Object.keys(result).forEach((key) => {
        result[key]['formKey'] = 'baseInfoForm'
        result[key]['prop'] = key
      })
      return this.$devideArr(Object.values(result), 2)
    },
    historyFormData () {
      let result = {
        // creater: {
        //   label: '创建者',
        //   render: this.baseInfoForm.creater
        // },
        creatTime: {
          label: '创建时间',
          render: this.baseInfoForm.creatTime
        },
        // modifier: {
        //   label: '更新者',
        //   render: this.baseInfoForm.modifier
        // },
        modifyTime: {
          label: '更新时间',
          render: this.baseInfoForm.modifyTime
        }
      }
      if (['edit', 'add'].includes(this.pageSate)) {
        result = {
          creater: {
            label: '创建者',
            disabled: this.disableds.creater,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          creatTime: {
            label: '创建时间',
            disabled: this.disableds.creatTime,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          modifier: {
            label: '更新者',
            disabled: this.disableds.modifier,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          modifyTime: {
            label: '更新时间',
            disabled: this.disableds.modifyTime,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              !formItem.options &&
                (formItem.options = [
                  { label: '是', value: true },
                  { label: '否', value: false }
                ])
              return (
                <el-select
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  {formItem.options.map((item) => (
                    <el-option
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    >
                      {item.label}
                    </el-option>
                  ))}
                </el-select>
              )
            }
          }
        }
      }
      Object.keys(result).forEach((key) => {
        result[key]['formKey'] = 'baseInfoForm'
        result[key]['prop'] = key
      })
      console.log(this.$devideArr(Object.values(result), 2))
      return this.$devideArr(Object.values(result), 2)
    }
  }
}
