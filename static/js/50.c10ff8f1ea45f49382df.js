webpackJsonp([50],{Byni:function(t,e){},ilfz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("aA9S"),s=a.n(n),i={components:{BaseInfo:function(){return a.e(30).then(a.bind(null,"1CBn"))},Attribute:function(){return a.e(86).then(a.bind(null,"MG9V"))},FunctionConfig:function(){return a.e(85).then(a.bind(null,"D5/s"))},Relation:function(){return a.e(77).then(a.bind(null,"OyjK"))},Permission:function(){return a.e(82).then(a.bind(null,"yFz3"))},InstanceLayout:function(){return a.e(83).then(a.bind(null,"EPUC"))},UserInfo:function(){return a.e(72).then(a.bind(null,"SLmd"))},HistoryRecord:function(){return a.e(84).then(a.bind(null,"w4LL"))}},provide:function(){return{$DataInstance:this}},props:{pageData:{type:Object}},data:function(){return{activeName:"baseInfo",tabsData:this.pageData}},computed:{pageState:function(){return this.tabsData.state},shows:function(){var t={groupButton:!0,editButton:!0,preReleaseButton:!0,releaseButton:!0,reviseButton:!0,invalidButton:!0};return"show"===this.pageState?(t.preReleaseButton=!1,t.releaseButton=!1,t.reviseButton=!1,t.invalidButton=!1):"edit"===this.pageState?t.editButton=!1:"add"===this.pageState&&(t.groupButton=!1),t}},watch:{pageData:function(t){this.tabsData=t}},created:function(){this.handleInit()},methods:{handleEdit:function(){this.tabsData.state="edit"},handleClick:function(t,e){console.log(t,e)},handleInit:function(){var t=this;if("add"===this.pageState)return!1;this.$api.getDataInstanceDetail(this.pageData.data.id).then(function(e){t.tabsData.data=s()(t.tabsData.data,e.result)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-entity"},[a("el-tabs",{staticClass:"content-tabs",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{staticClass:"content-tabs-pane",attrs:{label:"基本信息",name:"baseInfo"}},["baseInfo"===t.activeName?a("base-info"):t._e()],1),t._v(" "),a("el-tab-pane",{staticClass:"content-tabs-pane",attrs:{label:"属性",name:"attribute"}},["attribute"===t.activeName?a("attribute"):t._e()],1),t._v(" "),a("el-tab-pane",{staticClass:"content-tabs-pane",attrs:{label:"功能配置",name:"functionConfig"}},["functionConfig"===t.activeName?a("function-config"):t._e()],1),t._v(" "),a("el-tab-pane",{staticClass:"content-tabs-pane",attrs:{label:"关系",name:"relation"}},["relation"===t.activeName?a("relation"):t._e()],1),t._v(" "),a("el-tab-pane",{staticClass:"content-tabs-pane",attrs:{label:"权限",name:"permission"}},["permission"===t.activeName?a("permission"):t._e()],1),t._v(" "),a("el-tab-pane",{staticClass:"content-tabs-pane",attrs:{label:"实例布局设置",name:"instance"}},["instance"===t.activeName?a("instance-layout"):t._e()],1),t._v(" "),a("el-tab-pane",{staticClass:"content-tabs-pane",attrs:{label:"使用情况",name:"userInfo"}},["userInfo"===t.activeName?a("user-info"):t._e()],1),t._v(" "),a("el-tab-pane",{staticClass:"content-tabs-pane",attrs:{label:"历史记录",name:"historyRecord"}},["historyRecord"===t.activeName?a("history-record"):t._e()],1)],1),t._v(" "),t.shows.groupButton?a("button-group",{staticClass:"slider-button"},[a("me-button",{directives:[{name:"show",rawName:"v-show",value:t.shows.editButton,expression:"shows.editButton"}],attrs:{type:"primary"},on:{click:t.handleEdit}},[t._v("编辑")]),t._v(" "),a("me-button",{directives:[{name:"show",rawName:"v-show",value:t.shows.preReleaseButton,expression:"shows.preReleaseButton"}]},[t._v("预发布")]),t._v(" "),a("me-button",{directives:[{name:"show",rawName:"v-show",value:t.shows.releaseButton,expression:"shows.releaseButton"}]},[t._v("发布")]),t._v(" "),a("me-button",{directives:[{name:"show",rawName:"v-show",value:t.shows.reviseButton,expression:"shows.reviseButton"}]},[t._v("修订")]),t._v(" "),a("me-button",{directives:[{name:"show",rawName:"v-show",value:t.shows.invalidButton,expression:"shows.invalidButton"}]},[t._v("作废")])],1):t._e()],1)},staticRenderFns:[]};var r=a("46Yf")(i,o,!1,function(t){a("Byni")},"data-v-4594a026",null);e.default=r.exports}});
//# sourceMappingURL=50.c10ff8f1ea45f49382df.js.map