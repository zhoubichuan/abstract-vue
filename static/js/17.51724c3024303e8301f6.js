webpackJsonp([17],{kki4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("/o5o"),o=a("cMGX"),n={components:{modal:l.a,pagination:o.a},data:function(){return{total:0,pageCount:1,currentPage:1,pageSize:10,loadingFlag:!1,tableData:[],temId:"",typeId:"",clients:[],addModalFlag:!1,editModalFlag:!1,removeModalFlag:!1,clientTypeForm:{clientType:""},TypeEditForm:{clientType:""},formLabelWidth:"120px",rules:{clientType:[{validator:function(t,e,a){""===e?a(new Error("类型不能为空")):a()},trigger:"blur"}]}}},computed:{},created:function(){this.loadData()},methods:{clickpageNum:function(t){console.log("pageCount  "+t)},handleSelectionChange:function(){},showEditModal:function(t,e){this.editModalFlag=!0,this.TypeEditForm.clientType=e.clientType,this.typeId=e._id},showRemoveModal:function(t,e){this.removeModalFlag=!0,this.typeId=e._id},modalChange:function(){this.addModalFlag=!1,this.removeModalFlag=!1,this.editModalFlag=!1},addClientType:function(){var t=this;""!=this.clientTypeForm.clientType&&this.$ajax.post("/clients/type/add",{clientType:this.clientTypeForm.clientType}).then(function(e){"1"===e.data.status?(t.$message({message:e.data.msg,type:"success"}),t.loadData(),t.addModalFlag=!1,t.resetForm("clientTypeForm")):t.$message.error(e.data.msg)})},editClientType:function(){var t=this;this.$ajax.post("/clients/type/update/"+this.typeId,this.TypeEditForm).then(function(e){"1"===e.data.status?(t.$message({message:"修改成功",type:"success"}),t.loadData(),t.editModalFlag=!1,t.resetForm("TypeEditForm")):t.$message.error(e.data.msg)})},handleDelete:function(){var t=this;this.$ajax.delete("/clients/type/del/"+this.typeId).then(function(e){"1"===e.data.status?(t.$message({message:e.data.msg,type:"success"}),t.loadData(),t.removeModalFlag=!1):(t.$message.error(e.data.msg),t.removeModalFlag=!1)})},loadData:function(){var t=this;this.loadingFlag=!0,this.$ajax.get("/clients/type").then(function(e){t.loadingFlag=!1;var a=e.data.result;t.tableData=a})},totalData:function(){var t=this;this.$ajax.get("/clients/type/total").then(function(e){t.total=e.data.total})},resetForm:function(t){this.$refs[t].resetFields()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"source"},[a("el-col",{attrs:{span:12}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/admin"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("客户类型")])],1)],1),t._v(" "),a("el-col",{attrs:{span:1,offset:10}},[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){t.addModalFlag=!0}}},[t._v("添加")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingFlag,expression:"loadingFlag"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading",data:t.tableData,stripe:""},on:{"selection-change":t.handleSelectionChange}},[t._v(">\n        "),a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"_id",label:"类型id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"clientType",label:"客户类型"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.showEditModal(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.showRemoveModal(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("pagination",{attrs:{total:t.total,pageCount:t.pageCount,currentPage:t.currentPage,pageSize:t.pageSize},on:{clickpageNum:t.clickpageNum}}),t._v(" "),a("modal",{attrs:{dialogFormVisible:t.addModalFlag,title:"新增"},on:{modalToggle:t.modalChange}},[a("el-form",{ref:"clientTypeForm",attrs:{slot:"content",model:t.clientTypeForm,"label-width":t.formLabelWidth},slot:"content"},[a("el-form-item",{attrs:{label:"客户类型",prop:"clientType"}},[a("el-input",{model:{value:t.clientTypeForm.clientType,callback:function(e){t.$set(t.clientTypeForm,"clientType",e)},expression:"clientTypeForm.clientType"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger","native-type":"reset"}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addClientType}},[t._v("保存")])],1)],1),t._v(" "),a("modal",{attrs:{dialogFormVisible:t.editModalFlag,title:"编辑"},on:{modalToggle:t.modalChange}},[a("el-form",{ref:"TypeEditForm",attrs:{slot:"content",model:t.TypeEditForm,"label-width":t.formLabelWidth},slot:"content"},[a("el-form-item",{attrs:{label:"客户类型",prop:"clientType"}},[a("el-input",{model:{value:t.TypeEditForm.clientType,callback:function(e){t.$set(t.TypeEditForm,"clientType",e)},expression:"TypeEditForm.clientType"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger","native-type":"reset"}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.editClientType}},[t._v("保存")])],1)],1),t._v(" "),a("modal",{attrs:{dialogFormVisible:t.removeModalFlag},on:{modalToggle:t.modalChange}},[a("p",{staticStyle:{"text-align":"center","font-size":"20px"},attrs:{slot:"content"},slot:"content"},[t._v("\n                是否删除用户？\n            ")]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.modalChange}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.handleDelete}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]},s=a("46Yf")(n,i,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=17.51724c3024303e8301f6.js.map