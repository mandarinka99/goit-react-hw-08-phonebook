(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{105:function(t,e,n){},106:function(t,e,n){"use strict";n.r(e);var c,r,a,u=n(0),i=n(26),o=n.n(i),s=n(19),b=n(10),l=n(47),d=n(25),j=n(4),f=n(17),O=n(48),h=n.n(O),p=n(49),g=n.n(p),v=n(2),x=n(8),m=Object(j.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetching:!1,loading:!1},extraReducers:(c={},Object(v.a)(c,x.d.pending,(function(t){t.loading=!0})),Object(v.a)(c,x.d.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0,t.loading=!1})),Object(v.a)(c,x.d.rejected,(function(t){t.loading=!1})),Object(v.a)(c,x.b.pending,(function(t){t.loading=!0})),Object(v.a)(c,x.b.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0,t.loading=!1})),Object(v.a)(c,x.b.rejected,(function(t){t.loading=!1})),Object(v.a)(c,x.c.pending,(function(t){t.loading=!0})),Object(v.a)(c,x.c.fulfilled,(function(t){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1,t.loading=!1})),Object(v.a)(c,x.c.rejected,(function(t){t.loading=!1})),Object(v.a)(c,x.a.pending,(function(t){t.isFetching=!0,t.loading=!0})),Object(v.a)(c,x.a.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isFetching=!1,t.loading=!1})),Object(v.a)(c,x.a.rejected,(function(t){t.isFetching=!1,t.loading=!1})),c)}).reducer,k=n(9),_=n(7),y=Object(j.d)([],(r={},Object(v.a)(r,_.c,(function(t,e){var n=e.payload;return[].concat(Object(d.a)(t),[n])})),Object(v.a)(r,_.i,(function(t,e){var n=e.payload;return t.map((function(t){return t.id===n.id?n:t}))})),Object(v.a)(r,_.m,(function(t,e){var n=e.payload;return Object(d.a)(n)})),Object(v.a)(r,_.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),L=Object(j.d)("",Object(v.a)({},_.j,(function(t,e){return e.payload}))),C=Object(j.d)(!1,(a={},Object(v.a)(a,_.l,(function(){return!0})),Object(v.a)(a,_.m,(function(){return!1})),Object(v.a)(a,_.k,(function(){return!1})),Object(v.a)(a,_.b,(function(){return!0})),Object(v.a)(a,_.c,(function(){return!1})),Object(v.a)(a,_.a,(function(){return!1})),Object(v.a)(a,_.e,(function(){return!0})),Object(v.a)(a,_.f,(function(){return!1})),Object(v.a)(a,_.d,(function(){return!1})),Object(v.a)(a,_.h,(function(){return!0})),Object(v.a)(a,_.i,(function(){return!1})),Object(v.a)(a,_.g,(function(){return!1})),a)),w=Object(k.b)({items:y,filter:L,loading:C}),N=[].concat(Object(d.a)(Object(j.f)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[g.a]),S={key:"auth",storage:h.a,whitelist:["token"]},z=Object(j.a)({reducer:{auth:Object(f.g)(S,m),contacts:w},middleware:N,devTools:!1}),A=Object(f.h)(z),I=n(6),R=n(21),T=n.n(R),B=n(1),E=function(){return Object(B.jsxs)("nav",{className:T.a.nav,children:[Object(B.jsx)(s.b,{to:"/register",className:T.a.navLink,activeClassName:T.a.activeLink,children:"Register"}),Object(B.jsx)(s.b,{to:"/login",className:T.a.navLink,activeClassName:T.a.activeLink,children:"Login"})]})},F=function(t){return t.auth.isLoggedIn},V=function(t){return t.auth.user.email},W=function(t){return t.auth.isFetching},q=n(34),M=n.n(q),P=function(){var t=Object(b.b)(),e=Object(b.c)(V);return Object(B.jsxs)("div",{className:M.a.userMenu,children:[Object(B.jsxs)("h2",{children:["Welcome, ",e,"!"]}),Object(B.jsx)("button",{type:"button",onClick:function(){return t(Object(x.c)())},className:M.a.menuBut,children:"Logout"})]})},U=n(46),H=n(53),J=n.n(H),X=function(){var t=Object(b.c)(F);return Object(B.jsx)("header",{className:J.a.header,children:Object(B.jsx)(U.a,{children:t?Object(B.jsx)(P,{}):Object(B.jsx)(E,{})})})},G=n(20),Z=n(29),D=["children","redirectTo"],K=function(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n,r=Object(Z.a)(t,D),a=Object(b.c)(F);return console.log("isLoggedIn",a,e),Object(B.jsx)(I.b,Object(G.a)(Object(G.a)({},r),{},{children:a?e:Object(B.jsx)(I.a,{to:c})}))},Q=["children","restricted","redirectTo"],Y=function(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,a=void 0===r?"/":r,u=Object(Z.a)(t,Q),i=Object(b.c)(F)&&c;return console.log("shouldRedirect",i),Object(B.jsx)(I.b,Object(G.a)(Object(G.a)({},u),{},{children:i?Object(B.jsx)(I.a,{to:a}):e}))},$=n(54),tt=n.n($),et=n(55),nt=n.n(et),ct=function(){return Object(B.jsx)("div",{className:nt.a.spiner,children:Object(B.jsx)(tt.a,{type:"Puff",color:"#3f51b5",height:100,width:100,timeout:3e3})})},rt=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,200))})),at=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,188))})),ut=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(4)]).then(n.bind(null,196))})),it=function(){var t=Object(b.b)(),e=Object(b.c)(W);return Object(u.useEffect)((function(){t(Object(x.a)())}),[t]),!e&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(X,{}),Object(B.jsx)(I.d,{children:Object(B.jsxs)(u.Suspense,{fallback:Object(B.jsx)(ct,{}),children:[Object(B.jsx)(Y,{exact:!0,path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(B.jsx)(rt,{})}),Object(B.jsx)(Y,{exact:!0,path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(B.jsx)(at,{})}),Object(B.jsx)(K,{path:"/contacts",redirectTo:"/login",children:Object(B.jsx)(ut,{})})]})})]})};n(105);o.a.render(Object(B.jsx)(b.a,{store:z,children:Object(B.jsx)(l.a,{loading:null,persistor:A,children:Object(B.jsx)(s.a,{children:Object(B.jsx)(it,{})})})}),document.getElementById("root"))},21:function(t,e,n){t.exports={nav:"AuthNavigation_nav__2SeZX",navLink:"AuthNavigation_navLink__3UqOa",activeLink:"AuthNavigation_activeLink__2SrAL"}},34:function(t,e,n){t.exports={userMenu:"UserMenu_userMenu__2s9oi",menuBut:"UserMenu_menuBut__1gzzH"}},46:function(t,e,n){"use strict";var c=n(52),r=n.n(c),a=n(1);e.a=function(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.container,children:e})}},52:function(t,e,n){t.exports={container:"Container_container__2nGXs"}},53:function(t,e,n){t.exports={header:"AppBar_header__wVuH6"}},55:function(t,e,n){t.exports={spiner:"Spiner_spiner__3LHO5"}},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u})),n.d(e,"l",(function(){return i})),n.d(e,"m",(function(){return o})),n.d(e,"k",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return f})),n.d(e,"g",(function(){return O})),n.d(e,"j",(function(){return h}));var c=n(4),r=Object(c.b)("contacts/createContactsRequest"),a=Object(c.b)("contacts/createContactsSuccess"),u=Object(c.b)("contacts/createContactsError"),i=Object(c.b)("contacts/getContactsRequest"),o=Object(c.b)("contacts/getContactsSuccess"),s=Object(c.b)("contacts/getContactsError"),b=Object(c.b)("contacts/deleteContactsRequest"),l=Object(c.b)("contacts/deleteContactsSuccess"),d=Object(c.b)("contacts/deleteContactsError"),j=Object(c.b)("contacts/editContactsRequest"),f=Object(c.b)("contacts/editContactsSuccess"),O=Object(c.b)("contacts/editContactsError"),h=Object(c.b)("contacts/filter")},8:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return f}));var c=n(16),r=n.n(c),a=n(24),u=n(4),i=n(18),o=n.n(i);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){o.a.defaults.headers.common.Authorization=""},l=Object(u.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,o.a.post("/users/signup",e);case 4:return a=t.sent,u=a.data,s(u.token),t.abrupt("return",u);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",c(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(u.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,o.a.post("/users/login",e);case 4:return a=t.sent,u=a.data,s(u.token),t.abrupt("return",u);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",c(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(u.c)("auth/logout",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,o.a.post("/users/logout");case 4:b(),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(u.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return s(a),t.prev=5,t.next=8,o.a.get("/users/current");case 8:return u=t.sent,i=u.data,t.abrupt("return",i);case 13:return t.prev=13,t.t0=t.catch(5),t.abrupt("return",n.rejectWithValue(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())}},[[106,2,3]]]);
//# sourceMappingURL=main.dfff6b58.chunk.js.map