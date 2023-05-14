<template>
  <div v-loading="loading">
    <web-collapse v-model="activeName">
      <el-form
        ref="form"
        :model="baseInfoForm"
        label-width="80px"
        size="mini"
        :rules="rules"
      >
        <web-collapse-item title="基本信息" name="base-info">
          <web-form-item
            v-for="(formItem, formItemIndex) in baseFormData"
            :formData="formItem"
            :key="formItemIndex"
          >
          </web-form-item>
        </web-collapse-item>
        <web-collapse-item
          title="历史记录"
          name="history-record"
          v-if="shows.historyRecord"
        >
          <web-form-item
            v-for="(formItem, formItemIndex) in historyFormData"
            :formData="formItem"
            :key="formItemIndex"
          >
          </web-form-item>
        </web-collapse-item>
      </el-form>
    </web-collapse>
    <web-button-group v-if="shows.saveButton">
      <web-button
        :disabled="disableds.saveButton"
        type="primary"
        @click="
          checkValidate(['add'].includes(pageSate) ? handleAdd : handleEdit)
        "
      >
        保存
      </web-button>
    </web-button-group>
  </div>
</template>
<script>
import FormMixin from '@/mixin/FormMixin.js'
export default {
  mixins: [FormMixin],
  data () {
    return {
      loading: false,
      activeName: ['base-info', 'history-record'],
      rules: {
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
      },
      baseInfoForm: {
        storeType: false,
        inherit: false
      }
    }
  },
  inject: {
    $DataEntity: {
      type: Object
    }
  },
  created () {
    this.handleInit()
  },
  methods: {
    handleInit () {
      this.baseInfoForm = this.$set(
        this,
        'baseInfoForm',
        window._.cloneDeep(this.$DataEntity.tabsData.data)
      )
    },
    async checkValidate (handleFn) {
      this.loading = true
      let { rej, err } = await this.$awaitWarp(this.$refs.form.validate())
      if (rej === false || err) {
        this.loading = false
        return false
      }
      handleFn()
    },
    async handleAdd () {
      let keys = [
        'nameEn',
        'name',
        'descriptEn',
        'descript',
        'parentId',
        'storeType',
        'modelType',
        'inherit',
        'tableName'
      ]
      let params = this.$filterObj(this.baseInfoForm, keys)
      let res = await this.$api.createDataEntity(params)
      try {
        if (res) {
          this.$message({
            message: '数据创建成功',
            type: 'success'
          })
          this.$findComponentUpward(this, 'DataEntity').$emit('handleSearch')
        } else {
          this.$message.error(res.msg)
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    handleEdit () {
      let keys = [
        'id',
        'nameEn',
        'name',
        'descriptEn',
        'descript',
        'parentId',
        'storeType',
        'modelType',
        'inherit',
        'tableName'
      ]
      let params = this.$filterObj(this.baseInfoForm, keys)
      this.$api.updateDataEntity(params).then((res) => {
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
        }
        this.loading = false
      })
    }
  },
  computed: {
    pageSate () {
      return this.$DataEntity.tabsData.state
    },
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
        let oldFormData = this.$DataEntity.tabsData.data
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
        result.code = false
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
        code: {
          label: '编码',
          render: this.baseInfoForm.code
        },
        state: {
          label: '状态',
          render: this.baseInfoForm.state
        },
        nameEn: {
          label: '英文名称',
          render: this.baseInfoForm.nameEn
        },
        name: {
          label: '中文名称',
          render: this.baseInfoForm.name
        },
        descriptEn: {
          label: '英文描述',
          singleFormItem: true,
          render: this.baseInfoForm.descriptEn
        },
        descript: {
          label: '中文描述',
          singleFormItem: true,
          render: this.baseInfoForm.descript
        },
        parentId: {
          label: '父模型',
          placeholder: '请选择父模型',
          render: this.baseInfoForm.parentId
        },
        modelType: {
          label: '模型类型',
          render: this.baseInfoForm.modelType
        },
        storeType: {
          label: '存储类型',
          render: this.baseInfoForm.storeType
        },
        inherit: {
          label: '是否继承',
          render: this.baseInfoForm.inherit
        },
        tableName: {
          label: '表名称',
          render: this.baseInfoForm.tableName
        },
        space: {}
      }

      if (['edit', 'add'].includes(this.pageSate)) {
        result = {
          code: {
            label: '编码',
            disabled: this.disableds.code,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinInput(formItem)
            }
          },
          state: {
            label: '状态',
            disabled: this.disableds.state,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinSelect(formItem)
            }
          },
          nameEn: {
            label: '英文名称',
            disabled: this.disableds.nameEn,
            placeholder: '请输入英文名称',
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinInput(formItem)
            }
          },
          name: {
            label: '中文名称',
            placeholder: '请输入中文名称',
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinInput(formItem)
            }
          },
          descriptEn: {
            label: '英文描述',
            disabled: this.disableds.descriptEn,
            placeholder: '请输入英文描述',
            singleFormItem: true,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinTextarea(formItem)
            }
          },
          descript: {
            label: '中文描述',
            placeholder: '请输入中文描述',
            singleFormItem: true,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinTextarea(formItem)
            }
          },
          parentId: {
            label: '父模型',
            disabled: this.disableds.parentId,
            placeholder: '请选择父模型',
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinSelect(formItem)
            }
          },
          modelType: {
            label: '模型类型',
            disabled: this.disableds.modelType,
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
            ],
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinSelect(formItem)
            }
          },
          storeType: {
            label: '存储类型',
            disabled: this.disableds.storeType,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinRadio(formItem)
            }
          },
          inherit: {
            label: '是否继承',
            disabled: this.disableds.inherit,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinRadio(formItem)
            }
          },
          tableName: {
            label: '表名称',
            disabled: this.disableds.tableName,
            placeholder: '请输入表名称',
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  <span slot="prepend">General</span>
                </el-input>
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
        version: {
          label: '版本',
          render: this.baseInfoForm.version
        },
        space: {},
        creater: {
          label: '创建者',
          render: this.baseInfoForm.creater
        },
        creatTime: {
          label: '创建时间',
          render: this.baseInfoForm.creatTime
        },
        modifier: {
          label: '更新者',
          render: this.baseInfoForm.modifier
        },
        modifyTime: {
          label: '更新时间',
          render: this.baseInfoForm.modifyTime
        }
      }
      if (['edit', 'add'].includes(this.pageSate)) {
        result = {
          version: {
            label: '版本',
            disabled: this.disableds.version,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinInput(formItem)
            }
          },
          space: {},
          creater: {
            label: '创建者',
            disabled: this.disableds.creater,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinInput(formItem)
            }
          },
          creatTime: {
            label: '创建时间',
            disabled: this.disableds.creatTime,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinInput(formItem)
            }
          },
          modifier: {
            label: '更新者',
            disabled: this.disableds.modifier,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinInput(formItem)
            }
          },
          modifyTime: {
            label: '更新时间',
            disabled: this.disableds.modifyTime,
            render: ({
              data: {
                attrs: { formItem }
              }
            }) => {
              return this.mixinSelect(formItem)
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
</script>