(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{377:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(375),o=n.n(r);n(378),n(245),n(379);if(!o.a.apps.length){o.a.initializeApp({apiKey:"AIzaSyCIC7I7pmRTYHlti6NG6WQsFqtItGtcLfw",authDomain:"coffee-c6d4c.firebaseapp.com",databaseURL:"https://coffee-c6d4c.firebaseio.com",projectId:"coffee-c6d4c",storageBucket:"coffee-c6d4c.appspot.com",messagingSenderId:"644211890125",appId:"1:644211890125:web:5a9c581ceef3c193265684",measurementId:"G-8HSX7Z480Y"})}var l=o.a.firestore()},482:function(e,t,n){"use strict";n.r(t);n(30);var r=n(375),o=n.n(r),l=n(377),c=(n(245),{data:function(){return{show1:!1,email:"",password:"",error:"",name:"",lastname:"",date:"",ID:""}},methods:{singup:function(){var e=this;o.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){console.log(t),e.$router.push("/")})).catch((function(t){e.error=t,alert(t),e.$router.push("/")}));var data={email:this.email,name:this.name,lastname:this.lastname,date:this.date,ID:this.ID};l.a.collection("User").doc(this.email).set(data).then((function(){alert("DONE")}))}}}),d=n(81),m=n(112),f=n.n(m),v=n(190),h=n(385),w=n(395),x=n(374),k=n(477),I=n(410),_=n(388),y=n(469),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{width:"500",height:"700",outlined:""}},[n("h1",{attrs:{align:"center"}},[e._v("SignUp")]),e._v(" "),n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{name:"input-10-1",label:"ชื่อ",rules:[function(e){return!!e||"Name is required"},function(e){return e&&e.replace(/[^0-9/*-+.!@#$%&*():}{}<>,]/g,"")<1||"Please enter only characters."}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{name:"input-10-1",label:"นามสกุล",rules:[function(e){return!!e||"Lastname is required"},function(e){return e&&e.replace(/[^0-9/*-+.!@#$%&*():}{}<>,]/g,"")<1||"Please enter only characters."}]},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1)],1),e._v(" "),n("v-row",[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"วัน/เดือน/ปีเกิด","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{ref:"picker",attrs:{max:(new Date).toISOString().substr(0,10),min:"1950-01-01"},on:{change:e.save},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),e._v(" "),n("v-row",[n("v-col",[n("v-text-field",{attrs:{name:"input-13",label:"เลขประจำตัวประชาชน 13 หลัก",rules:[function(e){return!!e||"ID Card is required"}]},model:{value:e.ID,callback:function(t){e.ID=t},expression:"ID"}})],1)],1),e._v(" "),n("v-row",[n("v-col",[n("v-text-field",{attrs:{name:"input-10-1",label:"Email",rules:[function(e){return/.+@.+\..+/.test(e)||"Types must be valid"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),e._v(" "),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",name:"input-10-1",label:"Password"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),n("v-row",[n("v-col",[n("v-btn",{attrs:{block:"",elevation:"2",large:"","x-small":"",color:"brown darken-4"},on:{click:e.singup}},[e._v("SUBMIT")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:v.a,VCard:h.a,VCol:w.a,VContainer:x.a,VDatePicker:k.a,VMenu:I.a,VRow:_.a,VTextField:y.a})}}]);