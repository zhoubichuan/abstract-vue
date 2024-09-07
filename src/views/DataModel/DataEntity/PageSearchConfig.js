const formType = {
  input: 'searchInput',
  select: 'searchSelect',
  multipleSelect: 'searchSelect',
  user: 'searchUser',
  radio: 'searchRadio',
  time: 'searchTime',
  cascader: 'searchCascader'
}

export const stateOptions = [{
  label: '正在工作',
  value: 'isWrok'
},
{
  label: '预发布',
  value: 'preRelease'
},
{
  label: '已发布',
  value: 'release'
},
{
  label: '已修订',
  value: 'revised'
},
{
  label: '已作废',
  value: 'invalid'
}
]
export const entityTypeOptions = [{
  label: '单实体',
  value: 'singleEntity'
},
{
  label: 'master-Version',
  value: 'masterVersion'
}
]
export const modelTypeOptions = [{
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
export const relationEntityTypeOptions = [{
  label: '主外键',
  value: 'PrimaryForeignKey'
},
{
  label: '多对多',
  value: 'ManyToMany'
},
{
  label: '单边不确定',
  value: 'UnilateralUncertainty'
}
]
export const selectFunctionOptions = [{
  label: '组合关系',
  value: 'XDM'
},
{
  label: '树形关系',
  value: 'SYS'
},
{
  label: '权限管理',
  value: 'GENERE'
}
]
const config = [
  [
    {
      type: 'searchInput',
      name: 'code',
      label: '编码',
      placeholder: '请输入编码'
    },
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
      type: 'searchSelect',
      name: 'state',
      multiple: true,
      defaultValue: [
        'isWrok',
        'preRelease',
        'release'
      ],
      label: '状态',
      placeholder: '请选择状态',
      options: [
        {
          label: '正在工作',
          value: 'isWrok'
        },
        {
          label: '预发布',
          value: 'preRelease'
        },
        {
          label: '已发布',
          value: 'release'
        },
        {
          label: '已修订',
          value: 'revised'
        },
        {
          label: '已作废',
          value: 'invalid'
        }
      ]
    },
    {
      type: 'searchSelect',
      name: 'parentId',
      label: '父模型',
      placeholder: '请选择父模型',
      options: [
        {
          label: 'sss',
          value: 'singleEntity'
        },
        {
          label: 'eeee',
          value: 'masterVersion'
        }
      ]
    },
    {
      type: 'searchSelect',
      name: 'entityType',
      label: '实体类型',
      placeholder: '请选择实体类型',
      options: [
        {
          label: '单实体',
          value: 'singleEntity'
        },
        {
          label: 'master-Version',
          value: 'masterVersion'
        }
      ]
    },
    {
      type: 'searchInput',
      name: 'version',
      label: '版本',
      placeholder: '请输入版本'
    },
    {
      type: 'searchSelect',
      name: 'modeType',
      label: '模型类型',
      placeholder: '请选择模型类型',
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
    },
    {
      type: 'searchSelect',
      name: 'selectFunction',
      multiple: true,
      defaultValue: [
        'sss'
      ],
      label: '可选功能',
      placeholder: '请选择可选功能',
      options: [
        {
          label: '组合关系',
          value: 'XDM'
        },
        {
          label: '树形关系',
          value: 'SYS'
        },
        {
          label: '权限管理',
          value: 'GENERE'
        }
      ]
    },
    {
      type: 'searchUser',
      name: 'user',
      label: '创建者',
      placeholder: '请输入用户'
    },
    {
      type: 'searchTime',
      name: 'eos',
      label: 'EOS时间',
      placeholder: '请选择时间'
    },
    {
      type: 'searchCascader',
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
  ],
  [
    {
      type: 'searchInput',
      name: 'code',
      label: '编码1',
      placeholder: '请输入编码'
    },
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
      type: 'searchSelect',
      name: 'state',
      multiple: true,
      defaultValue: [
        'isWrok',
        'preRelease',
        'release'
      ],
      label: '状态',
      placeholder: '请选择状态',
      options: [
        {
          label: '正在工作',
          value: 'isWrok'
        },
        {
          label: '预发布',
          value: 'preRelease'
        },
        {
          label: '已发布',
          value: 'release'
        },
        {
          label: '已修订',
          value: 'revised'
        },
        {
          label: '已作废',
          value: 'invalid'
        }
      ]
    },
    {
      type: 'searchSelect',
      name: 'parentId',
      label: '父模型',
      placeholder: '请选择父模型',
      options: [
        {
          label: 'sss',
          value: 'singleEntity'
        },
        {
          label: 'eeee',
          value: 'masterVersion'
        }
      ]
    },
    {
      type: 'searchSelect',
      name: 'entityType',
      label: '实体类型',
      placeholder: '请选择实体类型',
      options: [
        {
          label: '单实体',
          value: 'singleEntity'
        },
        {
          label: 'master-Version',
          value: 'masterVersion'
        }
      ]
    },
    {
      type: 'searchInput',
      name: 'version',
      label: '版本',
      placeholder: '请输入版本'
    },
    {
      type: 'searchSelect',
      name: 'modeType',
      label: '模型类型',
      placeholder: '请选择模型类型',
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
    },
    {
      type: 'searchSelect',
      name: 'selectFunction',
      multiple: true,
      defaultValue: [
        'sss'
      ],
      label: '可选功能',
      placeholder: '请选择可选功能',
      options: [
        {
          label: '组合关系',
          value: 'XDM'
        },
        {
          label: '树形关系',
          value: 'SYS'
        },
        {
          label: '权限管理',
          value: 'GENERE'
        }
      ]
    },
    {
      type: 'searchUser',
      name: 'user',
      label: '创建者',
      placeholder: '请输入用户'
    },
    {
      type: 'searchTime',
      name: 'eos',
      label: 'EOS时间',
      placeholder: '请选择时间'
    },
    {
      type: 'searchCascader',
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
  ],
  [
    {
      type: formType.input,
      name: 'code',
      label: '编码',
      placeholder: '请输入编码'
    },
    {
      type: formType.input,
      name: 'name',
      label: '中文名称',
      placeholder: '请输入中文名称'
    },
    {
      type: formType.input,
      name: 'nameEn',
      label: '英文名称',
      placeholder: '请输入英文名称'
    },
    {
      type: formType.select,
      name: 'state',
      multiple: true,
      defaultValue: ['isWrok', 'preRelease', 'release'],
      label: '状态',
      placeholder: '请选择状态',
      options: stateOptions
    },
    {
      type: formType.input,
      name: 'sourceDataEntity',
      label: '源模型项',
      placeholder: '请输入源模型项名称'
    },
    {
      type: formType.input,
      name: 'targetDataEntity',
      label: '目标模型项',
      placeholder: '请输入目标模型项名称'
    },
    {
      type: formType.input,
      name: 'version',
      label: '版本',
      placeholder: '请输入版本'
    },
    {
      type: formType.select,
      name: 'modeType',
      label: '关系类型',
      placeholder: '请选择模型类型',
      options: relationEntityTypeOptions
    },
    {
      type: formType.user,
      name: 'modifier',
      label: '更新者',
      placeholder: '请输入用户'
    },
    {
      type: formType.user,
      name: 'creater',
      label: '创建者',
      placeholder: '请输入用户'
    },
    {
      type: formType.time,
      name: 'eos',
      label: 'EOS时间',
      placeholder: '请选择时间'
    },
    {
      type: formType.cascader,
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
  ],
  [
    {
      type: formType.input,
      name: 'code',
      label: '编码',
      placeholder: '请输入编码'
    },
    {
      type: formType.input,
      name: 'name',
      label: '中文名称',
      placeholder: '请输入中文名称'
    },
    {
      type: formType.input,
      name: 'nameEn',
      label: '英文名称',
      placeholder: '请输入英文名称'
    },
    {
      type: formType.select,
      name: 'state',
      multiple: true,
      defaultValue: ['isWrok', 'preRelease', 'release'],
      label: '状态',
      placeholder: '请选择状态',
      options: stateOptions
    },
    {
      type: formType.input,
      name: 'sourceDataEntity',
      label: '源模型项',
      placeholder: '请输入源模型项名称'
    },
    {
      type: formType.input,
      name: 'targetDataEntity',
      label: '目标模型项',
      placeholder: '请输入目标模型项名称'
    },
    {
      type: formType.input,
      name: 'version',
      label: '版本',
      placeholder: '请输入版本'
    },
    {
      type: formType.select,
      name: 'modeType',
      label: '关系类型',
      placeholder: '请选择模型类型',
      options: relationEntityTypeOptions
    },
    {
      type: formType.user,
      name: 'modifier',
      label: '更新者',
      placeholder: '请输入用户'
    },
    {
      type: formType.user,
      name: 'creater',
      label: '创建者',
      placeholder: '请输入用户'
    },
    {
      type: formType.time,
      name: 'eos',
      label: 'EOS时间',
      placeholder: '请选择时间'
    },
    {
      type: formType.cascader,
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
]
export default {
  inject: {
    config: {
      type: Object
    }
  },
  data () {
    return {
      condition: []
    }
  },
  methods: {
    async getConfig (condition = {}) {
      this.loadingFlag = true
      let { result } = await this.$api.getDataEntityList({
        ...condition
      })
      if (result) {
        let {
          data
        } = result
      } else {
        this.condition = []
      }
    }
  },
  created () {
    this.condition = Object.freeze(config[this.config.template - 1])
    this.getConfig({ template: this.config.template })
  }
}
