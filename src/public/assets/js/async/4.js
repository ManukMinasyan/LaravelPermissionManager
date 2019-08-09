(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10,11],{48:function(t,e,s){"use strict";s.r(e);var a=s(8).a.get("group"),o={name:"AddGroupComponent",data:function(){return{group:{name:"",comment:""},error:""}},methods:{storeGroup:function(t){var e=this;t.preventDefault();var s=this;s.error="",a.create(this.group).then(function(t){s.$parent.groups.push(t.data.data),s.group={},$("#modal-add-group").modal("toggle"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove()}).catch(function(t){var s=t.response.data.errors;e.error=s[Object.keys(s)[0]][0]})}}},i=s(7),n=Object(i.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"modal-add-group",tabindex:"-1",role:"dialog","aria-labelledby":"modal-popout","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-popout",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("form",{attrs:{method:"post"},on:{submit:t.storeGroup}},[s("div",{staticClass:"block block-themed block-transparent mb-0"},[t._m(0),t._v(" "),s("div",{staticClass:"block-content"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"group-name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.group.name,expression:"group.name"}],staticClass:"form-control",attrs:{type:"text",id:"group-name",placeholder:"Enter Title.."},domProps:{value:t.group.name},on:{input:function(e){e.target.composing||t.$set(t.group,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"group-comment"}},[t._v("Comment")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.group.comment,expression:"group.comment"}],staticClass:"form-control",attrs:{id:"group-comment",cols:"30",rows:"5"},domProps:{value:t.group.comment},on:{input:function(e){e.target.composing||t.$set(t.group,"comment",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"w-100 text-danger"},[t._v(t._s(t.error))]),t._v(" "),s("button",{staticClass:"btn btn-alt-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),t._m(1)])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-header bg-primary-dark"},[e("h3",{staticClass:"block-title"},[this._v("Create new group")]),this._v(" "),e("div",{staticClass:"block-options"},[e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("i",{staticClass:"si si-close"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-alt-success",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-check"}),this._v(" Create\n                    ")])}],!1,null,"65bb6c6d",null);e.default=n.exports},50:function(t,e,s){"use strict";s.r(e);var a=s(2),o=s.n(a),i=s(8),n=s(60),r=s.n(n);function l(t,e,s,a,o,i,n){try{var r=t[i](n),l=r.value}catch(t){return void s(t)}r.done?e(l):Promise.resolve(l).then(a,o)}function c(t){return function(){var e=this,s=arguments;return new Promise(function(a,o){var i=t.apply(e,s);function n(t){l(i,a,o,n,r,"next",t)}function r(t){l(i,a,o,n,r,"throw",t)}n(void 0)})}}var d=i.a.get("role"),u=i.a.get("group"),m=i.a.get("permission"),p={name:"AddPermissionComponent",data:function(){return{roles:[],groups:[],permission:{},error:""}},components:{vSelect:r.a},created:function(){this.getRoles(),this.getGroups()},methods:{getRoles:function(){var t=c(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get();case 2:e=t.sent,this.roles=e.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getGroups:function(){var t=c(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get();case 2:e=t.sent,this.groups=e.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),storePermission:function(t){t.preventDefault();var e=this;e.error="",m.create(this.permission).then(function(t){e.$parent.permissions.push(t.data.data),e.permission={},$("#modal-add-permission").modal("hide"),$(".modal-backdrop").remove()}).catch(function(t){var s=t.response.data.errors;e.error=s[Object.keys(s)[0]][0]})}}},v=s(7),b=Object(v.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"modal-add-permission",tabindex:"-1",role:"dialog","aria-labelledby":"modal-popout","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-popout modal-md",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"block block-themed block-transparent mb-0"},[t._m(0),t._v(" "),s("div",{staticClass:"block-content tab-content"},[s("div",{staticClass:"tab-pane active",attrs:{id:"btabs-static-home",role:"tabpanel"}},[s("form",{attrs:{method:"post"},on:{submit:t.storePermission}},[s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-material"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.permission.title,expression:"permission.title"}],staticClass:"form-control",attrs:{type:"text",id:"material-title",placeholder:"Please enter title"},domProps:{value:t.permission.title},on:{input:function(e){e.target.composing||t.$set(t.permission,"title",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"material-title"}},[t._v("Title")])])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-material"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.permission.name,expression:"permission.name"}],staticClass:"form-control",attrs:{type:"text",id:"material-name",placeholder:"Please enter name"},domProps:{value:t.permission.name},on:{input:function(e){e.target.composing||t.$set(t.permission,"name",e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"material-name"}},[t._v("Name")])])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-material"},[s("v-select",{attrs:{id:"inputRoles",options:t.roles,label:"title",multiple:!0},model:{value:t.permission.roles,callback:function(e){t.$set(t.permission,"roles",e)},expression:"permission.roles"}}),t._v(" "),s("label",{attrs:{for:"inputRoles"}},[t._v("Roles")])],1)]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-material"},[s("v-select",{attrs:{id:"inputGroup",options:t.groups,label:"name"},model:{value:t.permission.group,callback:function(e){t.$set(t.permission,"group",e)},expression:"permission.group"}}),t._v(" "),s("label",{attrs:{for:"inputGroup"}},[t._v("Group")])],1)])]),t._v(" "),t._m(1)])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"w-100 text-danger"},[t._v(t._s(t.error))]),t._v(" "),s("button",{staticClass:"btn btn-alt-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-header bg-primary-dark"},[e("h3",{staticClass:"block-title"},[this._v("\n                        Add new permission\n                    ")]),this._v(" "),e("div",{staticClass:"block-options"},[e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("i",{staticClass:"si si-close"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-9"},[e("button",{staticClass:"btn btn-alt-primary",attrs:{type:"submit"}},[this._v("Create")])])])}],!1,null,"1408a413",null);e.default=b.exports},51:function(t,e,s){"use strict";s.r(e);var a=s(8).a.get("role"),o={name:"AddRoleComponent",data:function(){return{role:{title:"",name:""},error:""}},methods:{storeRole:function(t){var e=this;t.preventDefault();var s=this;s.error="",a.create(this.role).then(function(t){s.$parent.roles.push(t.data.data),s.role={},$("#modal-add-role").modal("hide"),$(".modal-backdrop").remove()}).catch(function(t){var s=t.response.data.errors;e.error=s[Object.keys(s)[0]][0]})}}},i=s(7),n=Object(i.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"modal-add-role",tabindex:"-1",role:"dialog","aria-labelledby":"modal-popout","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-popout",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("form",{attrs:{method:"post"},on:{submit:t.storeRole}},[s("div",{staticClass:"block block-themed block-transparent mb-0"},[t._m(0),t._v(" "),s("div",{staticClass:"block-content"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"role-title"}},[t._v("Title")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.role.title,expression:"role.title"}],staticClass:"form-control",attrs:{type:"text",id:"role-title",placeholder:"Enter Title.."},domProps:{value:t.role.title},on:{input:function(e){e.target.composing||t.$set(t.role,"title",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"role-name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.role.name,expression:"role.name"}],staticClass:"form-control",attrs:{type:"text",id:"role-name",placeholder:"Enter Name.."},domProps:{value:t.role.name},on:{input:function(e){e.target.composing||t.$set(t.role,"name",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"w-100 text-danger"},[t._v(t._s(t.error))]),t._v(" "),s("button",{staticClass:"btn btn-alt-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),t._m(1)])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-header bg-primary-dark"},[e("h3",{staticClass:"block-title"},[this._v("Create new role")]),this._v(" "),e("div",{staticClass:"block-options"},[e("button",{staticClass:"btn-block-option",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("i",{staticClass:"si si-close"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-alt-success",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-check"}),this._v(" Create\n                    ")])}],!1,null,"79b2192c",null);e.default=n.exports},55:function(t,e,s){"use strict";s.r(e);var a=s(2),o=s.n(a),i=(s(64),s(60)),n=s.n(i),r=s(8),l=s(51),c=s(50),d=s(68),u=s(67),m=s(48);function p(t,e,s,a,o,i,n){try{var r=t[i](n),l=r.value}catch(t){return void s(t)}r.done?e(l):Promise.resolve(l).then(a,o)}function v(t){return function(){var e=this,s=arguments;return new Promise(function(a,o){var i=t.apply(e,s);function n(t){p(i,a,o,n,r,"next",t)}function r(t){p(i,a,o,n,r,"throw",t)}n(void 0)})}}var b=r.a.get("role"),f=r.a.get("group"),h=r.a.get("permission"),g={name:"RolesPermissionsComponent",components:{AddGroupComponent:m.default,vSelect:n.a,AddPermissionComponent:c.default,AddRoleComponent:l.default,TabsComponent:d.a,TabComponent:u.a},data:function(){return{permissions:[],roles:[],groups:[],selectedRoleFilter:{title:"All",name:"all"},selectedGroupFilter:{name:"All"},newPermission:{},error:""}},created:function(){this.getPermissions(),this.getRoles(),this.getGroups()},computed:{filteredPermissions:function(){var t=this.selectedRoleFilter,e=this.selectedGroupFilter;return"all"===t.name&&"All"===e.name?this.permissions:this.permissions.filter(function(s){return(null!==s.group&&s.group.name===e.name||"All"===e.name)&&("all"===t.name||s.roles.some(function(e){return e.name===t.name}))})}},methods:{getRoles:function(){var t=v(o.a.mark(function t(){var e,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,b.get();case 3:e=t.sent,s=e.data,this.isLoading=!1,this.roles=s;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getGroups:function(){var t=v(o.a.mark(function t(){var e,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,f.get();case 3:e=t.sent,s=e.data,this.isLoading=!1,this.groups=s;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getPermissions:function(){var t=v(o.a.mark(function t(){var e,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,h.get();case 3:e=t.sent,s=e.data,this.isLoading=!1,this.permissions=s;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),updatePermission:function(t){var e,s;(this.$set(t,"edittable",!1),Array.isArray(t.group))?t.group=null!==(e=t.group[0])&&void 0!==e?e:null:t.group=null!==(s=t.group)&&void 0!==s?s:null;h.update(t.id,t)},removePermission:function(t,e){h.delete(e),this.permissions.splice(t,1)},updateRole:function(t){this.$set(t,"edittable",!1),b.update(t.id,t)},removeRole:function(t,e){b.delete(e),this.roles.splice(t,1)},updateGroup:function(t){this.$set(t,"edittable",!1),f.update(t.id,t)},removeGroup:function(t,e){f.delete(e),this.groups.splice(t,1)},filterByRole:function(t){this.filteredPermissions=null===t?this.permissions:this.permissions.filter(function(e){return e.roles.some(function(e){return e.name===t.name})})},filterByGroup:function(t){this.filteredPermissions=null===t?this.permissions:this.permissions.filter(function(e){return e.group.name===t.name})}}},_=s(7),C=Object(_.a)(g,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"block"},[s("tabs-component",[s("tab-component",{attrs:{name:"Permissions",selected:!0}},[s("div",{staticClass:"row border-bottom pb-1"},[s("div",{staticClass:"col-md-12"},[s("h6",[t._v("Filter")])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("v-select",{attrs:{options:[{title:"All",name:"all"}].concat(t.roles),label:"title"},model:{value:t.selectedRoleFilter,callback:function(e){t.selectedRoleFilter=e},expression:"selectedRoleFilter"}})],1),t._v(" "),s("div",{staticClass:"col-md-3"},[s("v-select",{attrs:{options:[{name:"All"}].concat(t.groups),label:"name"},model:{value:t.selectedGroupFilter,callback:function(e){t.selectedGroupFilter=e},expression:"selectedGroupFilter"}})],1),t._v(" "),s("div",{staticClass:"col-md-1 offset-md-5"},[s("button",{staticClass:"btn btn-sm btn-primary",attrs:{title:"Add new permission","data-toggle":"modal","data-target":"#modal-add-permission"}},[s("i",{staticClass:"si si-plus"})])])]),t._v(" "),s("table",{staticClass:"table table-striped table-vcenter mt-5"},[s("thead",[s("tr",[s("th",{staticClass:"text-center",staticStyle:{width:"50px"}},[t._v("#")]),t._v(" "),s("th",[t._v("Title")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",{staticStyle:{width:"25%"}},[t._v("Roles")]),t._v(" "),s("th",{staticStyle:{width:"25%"}},[t._v("Group")]),t._v(" "),s("th",{staticClass:"text-center",staticStyle:{width:"100px"}},[t._v("Actions")])])]),t._v(" "),s("tbody",t._l(t.filteredPermissions,function(e,a){return s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),s("td",[e.edittable?[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"permission.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}})]:[t._v("\n                                "+t._s(e.title)+"\n                            ")]],2),t._v(" "),s("td",[e.edittable?[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"permission.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})]:[t._v("\n                                "+t._s(e.name)+"\n                            ")]],2),t._v(" "),s("td",{staticStyle:{width:"25%"}},[s("v-select",{attrs:{options:t.roles,label:"title",multiple:!0},on:{input:function(s){return t.updatePermission(e)}},model:{value:e.roles,callback:function(s){t.$set(e,"roles",s)},expression:"permission.roles"}})],1),t._v(" "),s("td",{staticStyle:{width:"25%"}},[s("v-select",{attrs:{options:t.groups,label:"name",multiple:!0},on:{input:function(s){return t.updatePermission(e)}},model:{value:e.group,callback:function(s){t.$set(e,"group",s)},expression:"permission.group"}})],1),t._v(" "),s("td",{staticClass:"text-center"},[s("div",{staticClass:"btn-group"},[e.edittable?s("a",{staticClass:"btn btn-sm btn-secondary",attrs:{"data-toggle":"tooltip",title:"Update permission"},on:{click:function(s){return t.updatePermission(e)}}},[s("i",{staticClass:"fa fa-save"})]):s("a",{staticClass:"btn btn-sm btn-secondary",attrs:{"data-toggle":"tooltip",title:"Edit permission"},on:{click:function(s){return t.$set(e,"edittable",!0)}}},[s("i",{staticClass:"fa fa-pencil"})]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button","data-toggle":"tooltip",title:"Delete role"},on:{click:function(s){return t.removePermission(a,e.id)}}},[s("i",{staticClass:"fa fa-times"})])])])])}),0)])]),t._v(" "),s("tab-component",{attrs:{name:"Roles"}},[s("div",{staticClass:"row border-bottom pb-1"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#","data-toggle":"modal","data-target":"#modal-add-role"}},[s("i",{staticClass:"si si-plus"})])])])]),t._v(" "),s("table",{staticClass:"table table-striped table-vcenter"},[s("thead",[s("tr",[s("th",{staticClass:"text-center",staticStyle:{width:"50px"}},[t._v("#")]),t._v(" "),s("th",[t._v("Title")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Level")]),t._v(" "),s("th",{staticClass:"d-none d-sm-table-cell",staticStyle:{width:"15%"}},[t._v("Scope")]),t._v(" "),s("th",{staticClass:"text-center",staticStyle:{width:"100px"}},[t._v("Actions")])])]),t._v(" "),s("tbody",t._l(t.roles,function(e,a){return s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),s("td",[e.edittable?[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"role.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}})]:[t._v("\n                                "+t._s(e.title)+"\n                            ")]],2),t._v(" "),s("td",[e.edittable?[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"role.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})]:[t._v("\n                                "+t._s(e.name)+"\n                            ")]],2),t._v(" "),s("td",[t._v(t._s(e.level))]),t._v(" "),s("td",[t._v(t._s(e.scope))]),t._v(" "),s("td",{staticClass:"text-center"},[s("div",{staticClass:"btn-group"},[e.edittable?s("a",{staticClass:"btn btn-sm btn-secondary",attrs:{"data-toggle":"tooltip",title:"Update role"},on:{click:function(s){return t.updateRole(e)}}},[s("i",{staticClass:"fa fa-save"})]):s("a",{staticClass:"btn btn-sm btn-secondary",attrs:{"data-toggle":"tooltip",title:"Edit role"},on:{click:function(s){return t.$set(e,"edittable",!0)}}},[s("i",{staticClass:"fa fa-pencil"})]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button","data-toggle":"tooltip",title:"Delete role"},on:{click:function(s){return t.removeRole(a,e.id)}}},[s("i",{staticClass:"fa fa-times"})])])])])}),0)])]),t._v(" "),s("tab-component",{attrs:{name:"Groups"}},[s("div",{staticClass:"row border-bottom pb-1"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#","data-toggle":"modal","data-target":"#modal-add-group"}},[s("i",{staticClass:"si si-plus"})])])])]),t._v(" "),s("table",{staticClass:"table table-striped table-vcenter"},[s("thead",[s("tr",[s("th",{staticClass:"text-center",staticStyle:{width:"50px"}},[t._v("#")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Comment")]),t._v(" "),s("th",{staticClass:"text-center",staticStyle:{width:"100px"}},[t._v("Actions")])])]),t._v(" "),s("tbody",t._l(t.groups,function(e,a){return s("tr",[s("th",{staticClass:"text-center",attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),s("td",[e.edittable?[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"group.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})]:[t._v("\n                                "+t._s(e.name)+"\n                            ")]],2),t._v(" "),s("td",[e.edittable?[s("input",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"group.comment"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.comment},on:{input:function(s){s.target.composing||t.$set(e,"comment",s.target.value)}}})]:[t._v("\n                                "+t._s(e.comment)+"\n                            ")]],2),t._v(" "),s("td",{staticClass:"text-center"},[s("div",{staticClass:"btn-group"},[e.edittable?s("a",{staticClass:"btn btn-sm btn-secondary",attrs:{"data-toggle":"tooltip",title:"Update group"},on:{click:function(s){return t.updateGroup(e)}}},[s("i",{staticClass:"fa fa-save"})]):s("a",{staticClass:"btn btn-sm btn-secondary",attrs:{"data-toggle":"tooltip",title:"Edit group"},on:{click:function(s){return t.$set(e,"edittable",!0)}}},[s("i",{staticClass:"fa fa-pencil"})]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button","data-toggle":"tooltip",title:"Delete group"},on:{click:function(s){return t.removeGroup(a,e.id)}}},[s("i",{staticClass:"fa fa-times"})])])])])}),0)])])],1)],1),t._v(" "),s("add-role-component"),t._v(" "),s("add-group-component"),t._v(" "),s("add-permission-component")],1)},[],!1,null,"8e75df96",null);e.default=C.exports},59:function(t,e,s){var a=s(66);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(58)(a,o);a.locals&&(t.exports=a.locals)},65:function(t,e,s){"use strict";var a=s(59);s.n(a).a},66:function(t,e,s){(t.exports=s(57)(!1)).push([t.i,"\n.nav-item .nav-link[data-v-a09e4dde] {\n    cursor: pointer;\n}\n.nav-tabs-block .nav-link[data-v-a09e4dde]:focus, .nav-tabs-block .nav-link[data-v-a09e4dde]:hover {\n    cursor: pointer;\n    color: #42a5f5;\n    background-color: transparent;\n    border-color: transparent;\n}\n",""])},67:function(t,e,s){"use strict";var a={name:"TabComponent",props:{name:{required:!0},selected:{default:!1},setMlAuto:{default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}},o=s(7),i=Object(o.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}]},[this._t("default")],2)},[],!1,null,"ce7583b8",null);e.a=i.exports},68:function(t,e,s){"use strict";var a={name:"TabsComponent",data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t){this.tabs.forEach(function(e){e.isActive=e.name===t.name})}}},o=(s(65),s(7)),i=Object(o.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"nav nav-tabs nav-tabs-block",attrs:{"data-toggle":"tabs",role:"tablist"}},t._l(t.tabs,function(e){return s("li",{staticClass:"nav-item",class:{"ml-auto":e.setMlAuto}},[s("a",{staticClass:"nav-link",class:{active:e.isActive},attrs:{"data-href":e.href},domProps:{innerHTML:t._s(e.name)},on:{click:function(s){return t.selectTab(e)}}})])}),0),t._v(" "),s("div",{staticClass:"block-content tab-content"},[s("div",{staticClass:"tab-pane active",attrs:{id:"btabs-static-home",role:"tabpanel"}},[t._t("default")],2)])])},[],!1,null,"a09e4dde",null);e.a=i.exports}}]);