(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{139:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),u=n(21),o=n(15),s=n(8),l=function(e){return e.auth.isAuthenticated},j=function(e){return e.auth.user.name},b=n(2);var d=function(){var e=Object(s.c)(l);return Object(b.jsxs)("nav",{children:[Object(b.jsx)(u.c,{className:"navLink",to:"/",exact:!0,children:"Home"}),e&&Object(b.jsx)(u.c,{className:"navLink",to:"/contacts",exact:!0,children:"Contacts"})]})},O=n(18),m=n.n(O),f=n(32),p=n(13),h=n(26),v=n.n(h);v.a.defaults.baseURL="https://connections-api.herokuapp.com";var x=function(e){v.a.defaults.headers.common.Authorization="Bearer ".concat(e)},_=function(){v.a.defaults.headers.common.Authorization=""},g=Object(p.c)("auth/register",function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,v.a.post("/users/signup",t);case 4:return r=e.sent,x(r.data.token),e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),y=Object(p.c)("auth/login",function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,v.a.post("/users/login",t);case 4:return r=e.sent,x(r.data.token),e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),k=Object(p.c)("auth/logout",function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,v.a.post("/users/logout");case 4:_(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),w=Object(p.c)("auth/getCurrentUser",function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),null!==(r=a.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return x(r),e.prev=5,e.next=8,v.a.get("/users/current");case 8:return c=e.sent,i=c.data,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",e.t0.rejectWithValue());case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),C=n(66),N=n.n(C),S=n(172);var W=function(){var e=Object(s.c)(j),t=Object(s.b)();return Object(b.jsxs)("div",{className:N.a.container__menu,children:[Object(b.jsx)("span",{className:N.a.avatar__menu,children:" "}),Object(b.jsxs)("span",{className:N.a.name__menu,children:[" ",e]}),Object(b.jsx)(S.a,{variant:"contained",color:"primary",size:"small",type:"submit",onClick:function(){return t(k())},children:"Logout"})]})},F=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.c,{to:"/register",exact:!0,className:"navLink",children:"Sign Up"}),Object(b.jsx)(u.c,{to:"/login",exact:!0,className:"navLink",children:"Sign In"})]})};var L=function(){var e=Object(s.c)(l);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{className:"heder__styles",children:[Object(b.jsx)(d,{}),e?Object(b.jsx)(W,{}):Object(b.jsx)(F,{})]})})},V=n(24),z=(n(86),n(182)),I=n(181),T=n(61),U=n.n(T),A=n(67),E=n(176);var D=function(){var e=Object(a.useState)(""),t=Object(V.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(V.a)(c,2),u=i[0],o=i[1],l=Object(a.useState)(""),j=Object(V.a)(l,2),d=j[0],O=j[1],m=Object(s.b)(),f=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"email":o(a);break;case"password":O(a);break;default:return}},p=function(){r(""),o(""),O("")};return Object(b.jsx)(E.a,{component:"main",maxWidth:"xs",children:Object(b.jsxs)("div",{className:"container__login",children:[Object(b.jsx)("div",{className:"avatar__class",children:Object(b.jsx)(z.a,{children:Object(b.jsx)(U.a,{})})}),Object(b.jsx)(A.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(g({name:n,email:u,password:d})),p()},noValidate:!0,children:[Object(b.jsx)("div",{className:"input__reg",children:Object(b.jsx)(I.a,{type:"text",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Name",name:"name",value:n,autoComplete:"fname",autoFocus:!0,onChange:f})}),Object(b.jsx)("div",{className:"input__reg",children:Object(b.jsx)(I.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Email Address",name:"email",value:u,autoComplete:"email",onChange:f})}),Object(b.jsx)("div",{className:"input__reg",children:Object(b.jsx)(I.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Password",name:"password",type:"password",value:d,autoComplete:"current-password",onChange:f})}),Object(b.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Sign Up"})]})]})})};var q=function(){var e=Object(a.useState)(""),t=Object(V.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(V.a)(c,2),u=i[0],o=i[1],l=Object(s.b)(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":r(a);break;case"password":o(a);break;default:return}},d=function(){r(""),o("")};return Object(b.jsx)(E.a,{component:"main",maxWidth:"xs",children:Object(b.jsxs)("div",{className:"container__login",children:[Object(b.jsx)("div",{className:"avatar__class",children:Object(b.jsx)(z.a,{children:Object(b.jsx)(U.a,{})})}),Object(b.jsx)(A.a,{component:"h1",variant:"h5",children:"Sign In"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(y({email:n,password:u})),d()},noValidate:!0,children:[Object(b.jsx)(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email",type:"email",name:"email",value:n,autoComplete:"email",autoFocus:!0,onChange:j}),Object(b.jsx)(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",name:"password",value:u,autoComplete:"current-password",onChange:j}),Object(b.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Sign In"})]})]})})},M=n(28),P=function(e){return e.contacts.contact},J=function(e){return e.contacts.filter},B=function(e){var t=P(e),n=J(e);return function(e){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(t)},H=Object(p.c)("contact/fetchContact",function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,v.a.get("/contacts");case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),G=Object(p.c)("contact/addContact",function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a,r,c,i,u,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,r=t.number,c=n.rejectWithValue,i={name:a,number:r},e.prev=3,e.next=6,v.a.post("/contacts",i);case 6:return u=e.sent,o=u.data,e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",c(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,n){return e.apply(this,arguments)}}()),R=Object(p.c)("contact/deleteContact",function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,v.a.delete("/contacts/".concat(t));case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),K=Object(p.c)("contact/updateContact",function(){var e=Object(f.a)(m.a.mark((function e(t,n){var a,r,c,i,u,o,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.contactId,r=t.name,c=t.number,i=n.rejectWithValue,u={name:r,number:c},e.prev=3,e.next=6,v.a.patch("/contacts/".concat(a),u);case 6:return o=e.sent,s=o.data,console.log(s),e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",i(e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,n){return e.apply(this,arguments)}}()),Q=n(52),X=n.n(Q),Y=n(89),Z=n.n(Y),$=n(62),ee=n.n($);var te=function(){var e=Object(a.useState)(""),t=Object(V.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(V.a)(c,2),u=i[0],o=i[1],l=Object(s.c)(P),j=Object(s.b)(),d=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":o(a);break;default:return}},O=function(){r(""),o("")};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(n," \u0437 \u0442\u0430\u043a\u0438\u043c \u0456\u043c\u0435\u043d\u0435\u043c \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454.")),void O();j(G({name:n,number:u})),O()},className:X.a.item__form,autoComplete:"off",noValidate:!0,children:[Object(b.jsx)("div",{className:X.a.item__input,children:Object(b.jsx)(I.a,{size:"small",label:"Name",variant:"outlined",type:"text",name:"name",placeholder:"Jack Sparrow",value:n,onChange:d})}),Object(b.jsx)("div",{className:X.a.item__input,children:Object(b.jsx)(ee.a,{mask:"(999)999-99-99",maskChar:null,size:"small",label:"Phone",variant:"outlined",type:"text",name:"number",value:u,onChange:d,children:function(e){return Object(b.jsx)(I.a,Object(M.a)(Object(M.a)({},e),{},{type:" number ",variant:"outlined"}))}})}),Object(b.jsx)("div",{className:X.a.item__input,children:Object(b.jsx)(S.a,{variant:"contained",type:"submit",color:"primary",disabled:""===n||""===u,startIcon:Object(b.jsx)(Z.a,{}),children:"Save"})})]})})},ne=n(41),ae=n.n(ne),re=n(91),ce=n.n(re),ie=n(90),ue=n.n(ie),oe=n(177),se=n(178),le=n(180),je=n(179);var be=function(){var e=Object(s.c)(B),t=Object(s.b)(),n=Object(o.h)();return Object(b.jsxs)(b.Fragment,{children:[!e.length&&Object(b.jsx)("div",{children:"Contacts not found."}),Object(b.jsx)(oe.a,{children:e.map((function(e){var a=e.id,r=e.name,c=e.number;return Object(b.jsxs)(se.a,{children:[Object(b.jsx)(je.a,{children:Object(b.jsx)(z.a,{})}),Object(b.jsx)(le.a,{primary:r,secondary:c}),Object(b.jsx)(u.b,{className:ae.a.button__mardg,to:{pathname:"/contacts/".concat(a),state:{from:n},name:r,number:c},children:Object(b.jsx)(S.a,{variant:"contained",color:"primary",size:"small",startIcon:Object(b.jsx)(ue.a,{}),children:"Edit"})}),Object(b.jsx)(S.a,{variant:"contained",color:"primary",size:"small",startIcon:Object(b.jsx)(ce.a,{}),onClick:function(){return function(e){return t(R(e))}(a)},children:"Delete"})]},a)}))})]})},de={changeFilter:Object(p.b)("contact/changeFilter")};var Oe=function(){var e=Object(s.c)(J),t=Object(s.b)();return Object(b.jsx)(I.a,{size:"small",label:"Search",variant:"outlined",type:"text",value:e,onChange:function(e){return t(de.changeFilter(e.target.value))}})};var me=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){return e(H())}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(te,{}),Object(b.jsx)(Oe,{}),Object(b.jsx)(be,{})]})},fe=n(65),pe=["redirectTo","children"];var he=function(e){var t=e.redirectTo,n=e.children,a=Object(fe.a)(e,pe),r=Object(s.c)(l);return Object(b.jsx)(o.b,Object(M.a)(Object(M.a)({},a),{},{children:r?n:Object(b.jsx)(o.a,{to:t})}))},ve=["redirectTo","children"];var xe=function(e){var t=e.redirectTo,n=e.children,a=Object(fe.a)(e,ve),r=Object(s.c)(l);return Object(b.jsx)(o.b,Object(M.a)(Object(M.a)({},a),{},{children:r&&a.restricted?Object(b.jsx)(o.a,{to:t}):n}))},_e=function(){return Object(b.jsx)("div",{className:"container__home",children:Object(b.jsx)("h1",{className:"title__home",children:"Hello"})})};var ge=function(){var e=Object(o.i)().contactId,t=Object(o.h)(),n=Object(a.useState)(t.name),r=Object(V.a)(n,2),c=r[0],i=r[1],u=Object(a.useState)(t.number),l=Object(V.a)(u,2),j=l[0],d=l[1],O=Object(o.g)(),m=Object(s.b)(),f=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":d(a);break;default:return}};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(n){var a,r;n.preventDefault(),m(K({contactId:e,name:c,number:j})),O.push(null!==(a=null===t||void 0===t||null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==a?a:"/")},className:ae.a.item__form_edit,children:[Object(b.jsx)("div",{className:ae.a.item__input_edit,children:Object(b.jsx)(I.a,{size:"small",label:"Name",variant:"outlined",type:"text",name:"name",placeholder:"Jack Sparrow",value:c,onChange:f})}),Object(b.jsx)("div",{className:ae.a.item__input_edit,children:Object(b.jsx)(ee.a,{mask:"(999)999-99-99",maskChar:null,size:"small",label:"Phone",variant:"outlined",type:"text",name:"number",value:j,onChange:f,children:function(e){return Object(b.jsx)(I.a,Object(M.a)(Object(M.a)({},e),{},{type:" number ",variant:"outlined"}))}})}),Object(b.jsx)("div",{className:ae.a.item__input,children:Object(b.jsx)(S.a,{variant:"contained",color:"primary",type:"submit",disabled:""===c||""===j,children:"Update contact"})})]})})};n(139);var ye,ke,we,Ce,Ne,Se,We,Fe=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){return e(w())}),[e]),Object(b.jsxs)("div",{className:"Container",children:[Object(b.jsx)(L,{}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(xe,{exact:!0,path:"/",children:Object(b.jsx)(_e,{})}),Object(b.jsx)(xe,{path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(b.jsx)(D,{})}),Object(b.jsx)(xe,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(b.jsx)(q,{})}),Object(b.jsx)(he,{exact:!0,path:"/contacts",redirectTo:"/login",children:Object(b.jsx)(me,{})}),Object(b.jsx)(he,{path:"/contacts/:contactId",redirectTo:"/login",children:Object(b.jsx)(ge,{})})]})]})},Le=n(64),Ve=n(7),ze=n(19),Ie={name:null,email:null},Te=Object(p.d)(Ie,(ye={},Object(Ve.a)(ye,g.fulfilled,(function(e,t){return t.payload.user})),Object(Ve.a)(ye,y.fulfilled,(function(e,t){return t.payload.user})),Object(Ve.a)(ye,k.fulfilled,(function(){return Ie})),Object(Ve.a)(ye,w.fulfilled,(function(e,t){return t.payload})),ye)),Ue=Object(p.d)(null,(ke={},Object(Ve.a)(ke,g.fulfilled,(function(e,t){return t.payload.token})),Object(Ve.a)(ke,y.fulfilled,(function(e,t){return t.payload.token})),Object(Ve.a)(ke,k.fulfilled,(function(){return null})),ke)),Ae=function(e,t){return t.payload},Ee=Object(p.d)(null,(we={},Object(Ve.a)(we,g.rejected,Ae),Object(Ve.a)(we,y.rejected,Ae),Object(Ve.a)(we,k.rejected,Ae),Object(Ve.a)(we,w.rejected,Ae),we)),De=Object(p.d)(!1,(Ce={},Object(Ve.a)(Ce,g.fulfilled,(function(){return!0})),Object(Ve.a)(Ce,g.rejected,(function(){return!1})),Object(Ve.a)(Ce,y.fulfilled,(function(){return!0})),Object(Ve.a)(Ce,y.rejected,(function(){return!1})),Object(Ve.a)(Ce,k.fulfilled,(function(){return!1})),Object(Ve.a)(Ce,w.fulfilled,(function(){return!0})),Object(Ve.a)(Ce,w.rejected,(function(){return!1})),Ce)),qe=Object(ze.b)({user:Te,token:Ue,error:Ee,isAuthenticated:De}),Me=Object(p.d)([],(Ne={},Object(Ve.a)(Ne,H.fulfilled,(function(e,t){return t.payload})),Object(Ve.a)(Ne,G.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(Le.a)(e),[n])})),Object(Ve.a)(Ne,R.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(Ve.a)(Ne,K.fulfilled,(function(e,t){var n=t.payload;return e.map((function(e){return e.id===n.id?n:e}))})),Ne)),Pe=Object(p.d)("",Object(Ve.a)({},de.changeFilter,(function(e,t){return t.payload}))),Je=Object(p.d)(null,(Se={},Object(Ve.a)(Se,H.rejected,(function(e,t){return t.payload})),Object(Ve.a)(Se,H.pending,(function(){return null})),Se)),Be=Object(p.d)(!1,(We={},Object(Ve.a)(We,H.pending,(function(){return!0})),Object(Ve.a)(We,H.fulfilled,(function(){return!1})),Object(Ve.a)(We,H.rejected,(function(){return!1})),Object(Ve.a)(We,G.pending,(function(){return!0})),Object(Ve.a)(We,G.fulfilled,(function(){return!1})),Object(Ve.a)(We,G.rejected,(function(){return!1})),Object(Ve.a)(We,R.pending,(function(){return!0})),Object(Ve.a)(We,R.fulfilled,(function(){return!1})),Object(Ve.a)(We,R.rejected,(function(){return!1})),Object(Ve.a)(We,K.pending,(function(){return!0})),Object(Ve.a)(We,K.fulfilled,(function(){return!1})),Object(Ve.a)(We,K.rejected,(function(){return!1})),We)),He=Object(ze.b)({contact:Me,loading:Be,filter:Pe,error:Je}),Ge=n(34),Re=n(92),Ke=n.n(Re),Qe=n(93),Xe=n.n(Qe),Ye=[].concat(Object(Le.a)(Object(p.e)({serializableCheck:{ignoredActions:[Ge.a,Ge.f,Ge.b,Ge.c,Ge.d,Ge.e]}})),[Ke.a]),Ze={key:"auth",storage:Xe.a,whitelist:["token"]},$e=Object(p.a)({reducer:{auth:Object(Ge.g)(Ze,qe),contacts:He},devTools:!1,middleware:Ye}),et=Object(Ge.h)($e),tt=n(94);n(142);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(s.a,{store:$e,children:Object(b.jsx)(tt.a,{loading:null,persistor:et,children:Object(b.jsx)(u.a,{children:Object(b.jsx)(Fe,{})})})})}),document.getElementById("root"))},41:function(e,t,n){e.exports={item__contact:"ContactList_item__contact__2MFwC",item__form_edit:"ContactList_item__form_edit__3BWEG",item__input_edit:"ContactList_item__input_edit__3z_1D",button__mardg:"ContactList_button__mardg__2Wp9N"}},52:function(e,t,n){e.exports={item__form:"ContactForm_item__form__8nPCm",item__input:"ContactForm_item__input__3rUS5"}},66:function(e,t,n){e.exports={container__menu:"UserMenu_container__menu__2d8fm",avatar__menu:"UserMenu_avatar__menu__Nsr-k",name__menu:"UserMenu_name__menu__3iAlt"}},86:function(e,t,n){}},[[143,1,2]]]);
//# sourceMappingURL=main.c4003377.chunk.js.map