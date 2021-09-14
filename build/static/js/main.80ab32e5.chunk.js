(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f}));var c=n(20),r=n.n(c),a=n(29),o=n(5),i=n(22),u=n.n(i);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(e){u.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){u.a.defaults.headers.common.Authorization=""},j=Object(o.c)("auth/register",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:return a=e.sent,o=a.data,s(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",c(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(o.c)("auth/login",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/login",t);case 4:return a=e.sent,o=a.data,s(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",c(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(o.c)("auth/logout",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/logout");case 4:b(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",c(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(o.c)("auth/refresh",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return s(a),e.prev=5,e.next=8,u.a.get("/users/current");case 8:return o=e.sent,i=o.data,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",n.rejectWithValue(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(0),i=n(32),u=n.n(i),s=n(23),b=n(13),j=n(64),l=n(31),d=n(5),f=n(21),O=n(65),h=n.n(O),g=n(66),p=n.n(g),m=n(3),v=n(10),x=Object(d.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetching:!1,loading:!1},extraReducers:(c={},Object(m.a)(c,v.d.pending,(function(e){e.loading=!0})),Object(m.a)(c,v.d.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.loading=!1})),Object(m.a)(c,v.d.rejected,(function(e){e.loading=!1})),Object(m.a)(c,v.b.pending,(function(e){e.loading=!0})),Object(m.a)(c,v.b.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.loading=!1})),Object(m.a)(c,v.b.rejected,(function(e){e.loading=!1})),Object(m.a)(c,v.c.pending,(function(e){e.loading=!0})),Object(m.a)(c,v.c.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1,e.loading=!1})),Object(m.a)(c,v.c.rejected,(function(e){e.loading=!1})),Object(m.a)(c,v.a.pending,(function(e){e.isFetching=!0,e.loading=!0})),Object(m.a)(c,v.a.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetching=!1,e.loading=!1})),Object(m.a)(c,v.a.rejected,(function(e){e.isFetching=!1,e.loading=!1})),c)}).reducer,_=n(11),k=n(9),y=Object(d.d)([],(r={},Object(m.a)(r,k.c,(function(e,t){var n=t.payload;return[].concat(Object(l.a)(e),[n])})),Object(m.a)(r,k.i,(function(e,t){var n=t.payload;return e.map((function(e){return e.id===n.id?n:e}))})),Object(m.a)(r,k.m,(function(e,t){var n=t.payload;return Object(l.a)(n)})),Object(m.a)(r,k.f,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),L=Object(d.d)("",Object(m.a)({},k.j,(function(e,t){return t.payload}))),C=Object(d.d)(!1,(a={},Object(m.a)(a,k.l,(function(){return!0})),Object(m.a)(a,k.m,(function(){return!1})),Object(m.a)(a,k.k,(function(){return!1})),Object(m.a)(a,k.b,(function(){return!0})),Object(m.a)(a,k.c,(function(){return!1})),Object(m.a)(a,k.a,(function(){return!1})),Object(m.a)(a,k.e,(function(){return!0})),Object(m.a)(a,k.f,(function(){return!1})),Object(m.a)(a,k.d,(function(){return!1})),Object(m.a)(a,k.h,(function(){return!0})),Object(m.a)(a,k.i,(function(){return!1})),Object(m.a)(a,k.g,(function(){return!1})),a)),P=Object(_.b)({items:y,filter:L,loading:C}),w=[].concat(Object(l.a)(Object(d.f)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[p.a]),N={key:"auth",storage:h.a,whitelist:["token"]},I=Object(d.a)({reducer:{auth:Object(f.g)(N,x),contacts:P},middleware:w,devTools:!1}),S=Object(f.h)(I),T=n(6),R=n(26),z=n.n(R),A=n(2),W=function(){return Object(A.jsxs)("nav",{className:z.a.nav,children:[Object(A.jsx)(s.b,{to:"/register",className:z.a.navLink,activeClassName:z.a.activeLink,children:"Register"}),Object(A.jsx)(s.b,{to:"/login",className:z.a.navLink,activeClassName:z.a.activeLink,children:"Login"})]})},B=function(e){return e.auth.isLoggedIn},E=function(e){return e.auth.user.email},V=function(e){return e.auth.isFetching},q=n(45),F=n.n(q),M=function(){var e=Object(b.b)(),t=Object(b.c)(E);return Object(A.jsxs)("div",{className:F.a.userMenu,children:[Object(A.jsxs)("h2",{children:["Welcome, ",t,"!"]}),Object(A.jsx)("button",{type:"button",onClick:function(){return e(Object(v.c)())},className:F.a.menuBut,children:"Logout"})]})},U=n(61),H=n(70),G=n.n(H),J=function(){var e=Object(b.c)(B);return Object(A.jsx)("header",{className:G.a.header,children:Object(A.jsx)(U.a,{children:e?Object(A.jsx)(M,{}):Object(A.jsx)(W,{})})})},X=n(25),K=n(39),Q=["children","redirectTo"],Z=function(e){var t=e.children,n=e.redirectTo,c=void 0===n?"/":n,r=Object(K.a)(e,Q),a=Object(b.c)(B);return console.log("isLoggedIn",a,t),Object(A.jsx)(T.b,Object(X.a)(Object(X.a)({},r),{},{children:a?t:Object(A.jsx)(T.a,{to:c})}))},D=["children","restricted","redirectTo"],Y=function(e){var t=e.children,n=e.restricted,c=void 0!==n&&n,r=e.redirectTo,a=void 0===r?"/":r,o=Object(K.a)(e,D),i=Object(b.c)(B)&&c;return console.log("shouldRedirect",i),Object(A.jsx)(T.b,Object(X.a)(Object(X.a)({},o),{},{children:i?Object(A.jsx)(T.a,{to:a}):t}))},$=n(71),ee=n.n($),te=n(72),ne=n.n(te),ce=function(){return Object(A.jsx)("div",{className:ne.a.spiner,children:Object(A.jsx)(ee.a,{type:"Puff",color:"#3f51b5",height:100,width:100,timeout:3e3})})},re=n(140),ae=n.p+"static/media/sprite.4c7b23e4.svg",oe=n(40),ie=n.n(oe),ue=function(){return Object(A.jsx)(re.a,{children:Object(A.jsxs)("h2",{className:ie.a.homePage,children:["Welcome to Phonebook!"," ",Object(A.jsx)("span",{children:Object(A.jsx)("svg",{className:ie.a.homeIcon,children:Object(A.jsx)("use",{href:ae+"#icon-heart"})})}),"\u2009"]})})},se=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,188))})),be=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,191))})),je=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(4)]).then(n.bind(null,199))})),le=function(){var e=Object(b.b)(),t=Object(b.c)(V);return Object(o.useEffect)((function(){e(Object(v.a)())}),[e]),!t&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(J,{}),Object(A.jsx)(T.d,{children:Object(A.jsxs)(o.Suspense,{fallback:Object(A.jsx)(ce,{}),children:[Object(A.jsx)(Y,{exact:!0,path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(A.jsx)(se,{})}),Object(A.jsx)(Y,{exact:!0,path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(A.jsx)(be,{})}),Object(A.jsx)(Z,{path:"/contacts",redirectTo:"/login",children:Object(A.jsx)(je,{})}),Object(A.jsx)(Y,{exact:!0,path:"/",restricted:!0,redirectTo:"/contacts",children:Object(A.jsx)(ue,{})})]})})]})};n(127);u.a.render(Object(A.jsx)(b.a,{store:I,children:Object(A.jsx)(j.a,{loading:null,persistor:S,children:Object(A.jsx)(s.a,{children:Object(A.jsx)(le,{})})})}),document.getElementById("root"))},26:function(e,t,n){e.exports={nav:"AuthNavigation_nav__2SeZX",navLink:"AuthNavigation_navLink__3UqOa",activeLink:"AuthNavigation_activeLink__2SrAL"}},40:function(e,t,n){e.exports={homePage:"Pages_homePage__VdNb7",homeIcon:"Pages_homeIcon__2clLg",container:"Pages_container__1Qfuh",formTitle:"Pages_formTitle__G4M0S",form:"Pages_form__1W17E",formInp:"Pages_formInp__2uRbq",contactsPage:"Pages_contactsPage__1B9Kn"}},45:function(e,t,n){e.exports={userMenu:"UserMenu_userMenu__2s9oi",menuBut:"UserMenu_menuBut__1gzzH"}},61:function(e,t,n){"use strict";var c=n(69),r=n.n(c),a=n(2);t.a=function(e){var t=e.children;return Object(a.jsx)("div",{className:r.a.container,children:t})}},69:function(e,t,n){e.exports={container:"Container_container__2nGXs"}},70:function(e,t,n){e.exports={header:"AppBar_header__wVuH6"}},72:function(e,t,n){e.exports={spiner:"Spiner_spiner__3LHO5"}},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"l",(function(){return i})),n.d(t,"m",(function(){return u})),n.d(t,"k",(function(){return s})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return j})),n.d(t,"d",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"g",(function(){return O})),n.d(t,"j",(function(){return h}));var c=n(5),r=Object(c.b)("contacts/createContactsRequest"),a=Object(c.b)("contacts/createContactsSuccess"),o=Object(c.b)("contacts/createContactsError"),i=Object(c.b)("contacts/getContactsRequest"),u=Object(c.b)("contacts/getContactsSuccess"),s=Object(c.b)("contacts/getContactsError"),b=Object(c.b)("contacts/deleteContactsRequest"),j=Object(c.b)("contacts/deleteContactsSuccess"),l=Object(c.b)("contacts/deleteContactsError"),d=Object(c.b)("contacts/editContactsRequest"),f=Object(c.b)("contacts/editContactsSuccess"),O=Object(c.b)("contacts/editContactsError"),h=Object(c.b)("contacts/filter")}},[[128,2,3]]]);
//# sourceMappingURL=main.80ab32e5.chunk.js.map