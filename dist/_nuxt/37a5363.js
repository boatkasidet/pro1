(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{483:function(t,e,d){"use strict";d.r(e);d(114),d(173);var n={data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Product",align:"start",sortable:!1,value:"name"},{text:"Production Date",value:"Pro"},{text:"Expiration Date",value:"Exp"},{text:"Quantity",value:"Quantity"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",Pro:"",Exp:"",Quantity:""},defaultItem:{name:"",Pro:"",Exp:"",Quantity:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Product":"Edit Product"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.desserts=[]},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}},l=d(81),o=d(112),c=d.n(o),r=d(190),v=d(385),m=d(382),x=d(395),f=d(374),h=d(476),I=d(475),_=d(406),k=d(164),D=d(388),y=d(372),C=d(469),V=d(42),P=d(189),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[d("v-toolbar",{attrs:{flat:""}},[d("v-toolbar-title",[t._v("Stock Product")]),t._v(" "),d("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),d("v-spacer"),t._v(" "),d("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[d("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",l,!1),n),[t._v("\n              New Product\n            ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),d("v-card",[d("v-card-title",[d("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),d("v-card-text",[d("v-container",[d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[d("v-text-field",{attrs:{label:"Product"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[d("v-text-field",{attrs:{label:"Production Date"},model:{value:t.editedItem.Pro,callback:function(e){t.$set(t.editedItem,"Pro",e)},expression:"editedItem.Pro"}})],1),t._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[d("v-text-field",{attrs:{label:"Expiration Date"},model:{value:t.editedItem.Exp,callback:function(e){t.$set(t.editedItem,"Exp",e)},expression:"editedItem.Exp"}})],1),t._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[d("v-text-field",{attrs:{label:"Quantity"},model:{value:t.editedItem.Quantity,callback:function(e){t.$set(t.editedItem,"Quantity",e)},expression:"editedItem.Quantity"}})],1)],1)],1)],1),t._v(" "),d("v-card-actions",[d("v-spacer"),t._v(" "),d("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("\n                Cancel\n              ")]),t._v(" "),d("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),t._v(" "),d("v-dialog",{attrs:{"max-width":"550px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[d("v-card",[d("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this Product?")]),t._v(" "),d("v-card-actions",[d("v-spacer"),t._v(" "),d("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),d("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),d("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[d("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v(" mdi-pencil ")]),t._v(" "),d("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:r.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:x.a,VContainer:f.a,VDataTable:h.a,VDialog:I.a,VDivider:_.a,VIcon:k.a,VRow:D.a,VSpacer:y.a,VTextField:C.a,VToolbar:V.a,VToolbarTitle:P.a})}}]);