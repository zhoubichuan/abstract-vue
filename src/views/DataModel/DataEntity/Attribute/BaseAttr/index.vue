<template>
  <div>
    <dialog-form ref="dialogForm" name="基本属性" @create="create">
      <el-form
        ref="form"
        :model="baseInfoForm"
        label-width="80px"
        size="mini"
        :rules="rules"
      >
        <form-item
          v-for="(formItem, formItemIndex) in baseFormData"
          :formData="formItem"
          :key="formItemIndex"
        >
        </form-item>
      </el-form>
    </dialog-form>
    基本属性
    <button-group justify="start">
      <me-button type="primary" @click="handleCreate">创建</me-button>
      <me-button>删除</me-button>
      <me-button>生效</me-button>
      <me-button>失效</me-button>
      <me-button type="primary">导入导出</me-button>
    </button-group>
    <table-page
      :value="page"
      @input="(val) => handleInput(val)"
      border
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
      <el-table-column fixed="left" type="selection" width="55">
      </el-table-column>
      <el-table-column
        sortable
        fixed="left"
        show-overflow-tooltip
        prop="code"
        label="编码"
      >
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showViewModal(scope.$index, scope.row)"
            >{{ scope.row.code }}</el-link
          >
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableRows"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        v-bind="item.attrs"
      >
      </el-table-column>
    </table-page>
  </div>
</template>
<script>
import FormMixin from "@/mixin/FormMixin.js";
export default {
  mixins: [FormMixin],
  inject: {
    $DataEntity: {
      type: Object,
    },
  },
  data() {
    return {
      conditon: {},
      page: {
        curPage: 1,
        pageSize: 20,
        total: 0,
      },
      visibleDialog: false,
      baseInfoForm: {
        storeType: false,
        inherit: false,
      },
      rules: {
        code: [],
        state: [],
        nameEn: [
          { required: true, message: "请输入英文名称", trigger: "change" },
        ],
        name: [
          { required: true, message: "请输入中文名称", trigger: "change" },
        ],
        descriptEn: [],
        descript: [
          { required: true, message: "请输入中文描述", trigger: "change" },
        ],
        parentId: [
          { required: true, message: "请选择父模型", trigger: "change" },
        ],
        storeType: [],
        modelType: [
          { required: true, message: "请选择模型类型", trigger: "change" },
        ],
        inherit: [],
        tableName: [
          { required: true, message: "请输入表名称", trigger: "change" },
        ],
        version: [],
        creater: [],
        creatTime: [],
        modifier: [],
        modifyTime: [],
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      loadingFlag: false,
      tableData: [],
      tableRows: [
        {
          prop: "name",
          label: "中文名称",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "nameEn",
          label: "英文名称",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "descript",
          label: "中文描述",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "descriptEn",
          label: "英文描述",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "version",
          label: "版本",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "state",
          label: "状态",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "eos",
          label: "EOS时间",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "modeType",
          label: "模型类型",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "creater",
          label: "创建者",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "modifier",
          label: "更新者",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "modifyTime",
          label: "更新时间",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "tags",
          label: "标签",
          attrs: { "show-overflow-tooltip": true },
        },
      ],
    };
  },
  computed: {
    pageSate() {
      return this.$DataEntity.tabsData.state;
    },
    disableds() {
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
        modifyTime: false,
      };
      if (this.pageSate !== "show") {
        if (this.pageSate === "edit") {
          result.code = true;
          result.state = true;
          result.version = true;
          result.creater = true;
          result.creatTime = true;
          result.modifier = true;
          result.modifyTime = true;
        } else {
          result.historyRecord = false;
        }
        let oldFormData = this.$DataEntity.tabsData.data.data;
        let newFormData = this.baseInfoForm;
        result.saveButton = window._.isEqual(oldFormData, newFormData);
        console.log(result.saveButton);
      }

      return result;
    },
    shows() {
      let result = {
        saveButton: false,
        historyRecord: true,
      };
      if (this.pageSate !== "show") {
        result.saveButton = true;
        result.code = false;
        result.state = false;
        if (this.pageSate === "edit") {
        } else {
          result.historyRecord = false;
        }
      }
      console.log(result);
      return result;
    },
    baseFormData() {
      let result = {
        code: {
          label: "编码",
          render: this.baseInfoForm.code,
        },
        state: {
          label: "状态",
          render: this.baseInfoForm.state,
        },
        nameEn: {
          label: "英文名称",
          render: this.baseInfoForm.nameEn,
        },
        name: {
          label: "中文名称",
          render: this.baseInfoForm.name,
        },
        descriptEn: {
          label: "英文描述",
          singleFormItem: true,
          render: this.baseInfoForm.descriptEn,
        },
        descript: {
          label: "中文描述",
          singleFormItem: true,
          render: this.baseInfoForm.descript,
        },
        parentId: {
          label: "父模型",
          placeholder: "请选择父模型",
          render: this.baseInfoForm.parentId,
        },
        modelType: {
          label: "模型类型",
          render: this.baseInfoForm.modelType,
        },
        storeType: {
          label: "存储类型",
          render: this.baseInfoForm.storeType,
        },
        inherit: {
          label: "是否继承",
          render: this.baseInfoForm.inherit,
        },
        tableName: {
          label: "表名称",
          render: this.baseInfoForm.tableName,
        },
      };

      if (["edit", "add"].includes(this.pageSate)) {
        result = {
          code: {
            label: "编码",
            disabled: this.disableds.code,
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinInput(formItem);
            },
          },
          state: {
            label: "状态",
            disabled: this.disableds.state,
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinSelect(formItem);
            },
          },
          nameEn: {
            label: "英文名称",
            disabled: this.disableds.nameEn,
            placeholder: "请输入英文名称",
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinInput(formItem);
            },
          },
          name: {
            label: "中文名称",
            placeholder: "请输入中文名称",
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinInput(formItem);
            },
          },
          descriptEn: {
            label: "英文描述",
            disabled: this.disableds.descriptEn,
            placeholder: "请输入英文描述",
            singleFormItem: true,
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinTextarea(formItem);
            },
          },
          descript: {
            label: "中文描述",
            placeholder: "请输入中文描述",
            singleFormItem: true,
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinTextarea(formItem);
            },
          },
          parentId: {
            label: "父模型",
            disabled: this.disableds.parentId,
            placeholder: "请选择父模型",
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinSelect(formItem);
            },
          },
          modelType: {
            label: "模型类型",
            disabled: this.disableds.modelType,
            options: [
              {
                label: "XDM",
                value: "XDM",
              },
              {
                label: "SYS",
                value: "SYS",
              },
              {
                label: "GENERE",
                value: "GENERE",
              },
            ],
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinSelect(formItem);
            },
          },
          storeType: {
            label: "存储类型",
            disabled: this.disableds.storeType,
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinRadio(formItem);
            },
          },
          inherit: {
            label: "是否继承",
            disabled: this.disableds.inherit,
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinRadio(formItem);
            },
          },
          tableName: {
            label: "表名称",
            disabled: this.disableds.tableName,
            placeholder: "请输入表名称",
            render: ({
              data: {
                attrs: { formItem },
              },
            }) => {
              return this.mixinInput(formItem);
            },
          },
        };
      }
      Object.keys(this.shows).forEach((key) => {
        if (this.shows[key] === false) {
          Reflect.deleteProperty(result, key);
        }
      });
      Object.keys(result).forEach((key) => {
        result[key]["formKey"] = "baseInfoForm";
        result[key]["prop"] = key;
      });
      return this.$devideArr(Object.values(result), 2);
    },
  },
  methods: {
    handleSelectionChange(condition = {}) {
      this.loadingFlag = true;
      let { curPage, pageSize } = this.page;
      this.$api
        .getAttributeList({
          curPage,
          pageSize,
          ...condition,
        })
        .then((res) => {
          if (res.status === 200) {
            let {
              result,
              page: { curPage, total, pageSize },
            } = res;
            this.loadingFlag = false;
            this.page.total = total;
            this.page.curPage = curPage;
            this.page.pageSize = pageSize;
            this.tableData = result;
          } else {
            this.tableData = [];
            this.loadingFlag = false;
          }
        });
    },
    handleCreate() {
      this.visibleDialog = true;
      this.$refs.dialogForm.handleCreate();
    },
    create() {
      let keys = [
        "nameEn",
        "name",
        "descriptEn",
        "descript",
        "parentId",
        "storeType",
        "modelType",
        "inherit",
        "tableName",
      ];
      let params = this.$filterObj(this.baseInfoForm, keys);
      this.$api.createAttribute(params).then((res) => {
        if (res.status === 200) {
          this.$message({
            message: res.msg,
            type: "success",
          });
          this.handleSelectionChange(this.condition);
        } else {
          this.$message.error(res.msg);
        }
        this.loading = false;
      });
    },
    showViewModal(index,row) {
      debugger
    },
  },
  mounted() {
    this.handleSelectionChange();
  },
};
</script>