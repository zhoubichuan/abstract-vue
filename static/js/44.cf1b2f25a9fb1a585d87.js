webpackJsonp([44],{Tbln:function(e,t){},WXxy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("4YfN"),o=a.n(l),n={props:{searchConditon:{type:Object,default:function(){}}},components:{},data:function(){return{sliderRightIndex:0,sliderPage:{},conditon:this.searchConditon,page:{curPage:1,pageSize:20,total:0},loadingFlag:!1,addModalFlag:!1,editModalFlag:!1,removeModalFlag:!1,drawer:!1,tableData:[],productId:""}},methods:{showViewModal:function(e){this.$emit("showViewModal",e)},showEditModal:function(e){this.$emit("showEditModal",e)},handleInput:function(e){this.page=e,this.$emit("pageChange",this.page)},handleSearch:function(e){this.queryTagList(e)},handleChange:function(e){console.log(e)},handleClick:function(e,t){console.log(e,t)},clickpageNum:function(e){console.log("pageCount  "+e)},handleSelectionChange:function(e){this.$emit("input",e)},modalChange:function(){this.addModalFlag=!1,this.removeModalFlag=!1,this.editModalFlag=!1},showRemoveModal:function(e,t){this.removeModalFlag=!0,this.productId=t._id},queryTagList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loadingFlag=!0;var a=this.page,l=a.curPage,n=a.pageSize;this.$api.getTagList(o()({curPage:l,pageSize:n},t)).then(function(t){if(200===t.status){var a=t.result,l=t.page,o=l.curPage,n=l.total,i=l.pageSize;e.loadingFlag=!1,e.page.total=n,e.page.curPage=o,e.page.pageSize=i,e.tableData=a}else e.tableData=[],e.loadingFlag=!1})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table-page",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingFlag,expression:"loadingFlag"}],staticClass:"table-part",staticStyle:{width:"100%"},attrs:{value:e.page,border:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading",data:e.tableData,stripe:""},on:{input:function(t){return e.handleInput(t)},"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{fixed:"left",type:"index",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"left",type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"中文名称1"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"nameEn",label:"英文名称"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"descript",label:"中文描述"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"descriptEn",label:"英文描述"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"creater",label:"创建者"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"createTime",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"modifier",label:"更新者"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"modifyTime",label:"更新时间"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"tags",label:"标签"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","show-overflow-tooltip":"",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("el-link",{attrs:{icon:"el-icon-edit",title:"编辑"},on:{click:function(t){e.showEditModal(l)}}})]}}])})],1)},staticRenderFns:[]};var r=a("46Yf")(n,i,!1,function(e){a("Tbln")},"data-v-7370a35a",null);t.default=r.exports}});
//# sourceMappingURL=44.cf1b2f25a9fb1a585d87.js.map