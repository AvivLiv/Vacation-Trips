(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{188:function(e,t,a){},189:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},347:function(e,t,a){"use strict";a.r(t);var n,i=a(0),r=a.n(i),c=a(13),o=a.n(c),s=(a(188),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,398)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))}),l=(a(189),a(395)),u=a(393),d=a(108),p=a.n(d),j=a(63),m=a.n(j),b=a(14),h=a(15),v=a(7),f=a.n(v),x=a(11),g=a(22),O=a(45),y=a(167),w=a(166),S=a(16),k=a.n(S),I=a(56),V=a(152),D=function e(){Object(g.a)(this,e),this.vacation=[]};function L(e){return{type:n.VacationDownloaded,payload:e}}function E(e){return{type:n.VacationEdited,payload:e}}function R(e){return{type:n.VacationDeletedFollow,payload:e}}!function(e){e.VacationDownloaded="vacationDownloaded",e.VacationAdded="VacationAdded",e.VacationEdited="VacationEdited",e.VacationDeleted="VacationDeleted",e.VacationAddedFollow="VacationAddedFollow",e.VacationDeletedFollow="VacationDeletedFollow",e.VacationClean="VacationClean"}(n||(n={}));var N=function(){function e(){Object(g.a)(this,e)}return Object(O.a)(e,null,[{key:"init",value:function(){e.vacationsUrl="https://vacation-trips.herokuapp.com/api/vacations/",e.authUrl="https://vacation-trips.herokuapp.com/api/auth/",e.usersUrl="https://vacation-trips.herokuapp.com/api/users/",e.followsUrl="https://vacation-trips.herokuapp.com/api/follows/",e.socketIoUrl="https://vacation-trips.herokuapp.com/"}}]),e}();N.productsUrl=void 0,N.vacationsUrl=void 0,N.authUrl=void 0,N.usersUrl=void 0,N.followsUrl=void 0,N.socketIoUrl=void 0,N.init();var F,C=function(){function e(){Object(g.a)(this,e),this.socket=void 0}return Object(O.a)(e,[{key:"connect",value:function(){this.socket=Object(V.io)(N.socketIoUrl),this.socket.on("msg-from-server-vacation-added",(function(e){var t;$.dispatch((t=e,{type:n.VacationAdded,payload:t}))})),this.socket.on("msg-from-server-vacation-updated",(function(e){$.dispatch(E(e))})),this.socket.on("msg-from-server-vacation-deleted",(function(e){$.dispatch(function(e){return{type:n.VacationDeleted,payload:e}}(e))}))}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),e}(),U=new C,W=function e(){Object(g.a)(this,e),this.EditVacationId=0;var t=JSON.parse(sessionStorage.getItem("EditVacationId"));t&&(this.EditVacationId=t)};function P(e){return{type:F.EditVacationId,payload:e}}function A(e){k.a.defaults.headers.authorization="Bearer ".concat(e.token)}function T(){sessionStorage.clear(),$.dispatch({type:z.UserLogout}),$.dispatch({type:n.VacationClean}),$.dispatch({type:F.EditVacationClean}),delete k.a.defaults.headers.authorization,U.disconnect()}!function(e){e.EditVacationId="VacationId",e.EditVacationClean="EditVacationClean"}(F||(F={}));var z,q=function e(){Object(g.a)(this,e),this.user=null;var t=JSON.parse(sessionStorage.getItem("user"));t&&(A(t),this.user=t)};function J(e){return{type:z.UserLogin,payload:e}}function H(e){return{type:z.UserEdited,payload:e}}!function(e){e.UserLogin="userLogin",e.UserLogout="userLogout",e.UserEdited="userEdited"}(z||(z={}));var B=a(104),M=Object(B.a)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new q,t=arguments.length>1?arguments[1]:void 0,a=Object(I.a)({},e);switch(t.type){case z.UserLogin:case z.UserEdited:a.user=t.payload;break;case z.UserLogout:a.user=null}return a},vacationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new D,t=arguments.length>1?arguments[1]:void 0,a=Object(I.a)({},e);switch(t.type){case n.VacationDownloaded:a.vacation=t.payload,a.vacation.sort((function(e){return e.userFollow?-1:1}));break;case n.VacationAdded:a.vacation.push(t.payload),a.vacation.sort((function(e){return e.userFollow?-1:1}));break;case n.VacationEdited:var i=a.vacation.findIndex((function(e){return e.vacationId===t.payload.vacationId}));a.vacation[i]=t.payload,a.vacation.sort((function(e){return e.userFollow?-1:1}));break;case n.VacationDeleted:var r=a.vacation.findIndex((function(e){return e.vacationId===t.payload}));a.vacation.splice(r,1),a.vacation.sort((function(e){return e.userFollow?-1:1}));break;case n.VacationAddedFollow:var c=a.vacation.findIndex((function(e){return e.vacationId===t.payload.vacationId}));a.vacation[c].userFollow=!0,a.vacation[c].follows=a.vacation[c].follows+1,a.vacation.sort((function(e){return e.userFollow?-1:1}));break;case n.VacationDeletedFollow:var o=a.vacation.findIndex((function(e){return e.vacationId===t.payload.vacationId}));a.vacation[o].userFollow=!1,a.vacation[o].follows=a.vacation[o].follows-1,a.vacation.sort((function(e){return e.userFollow?-1:1}));break;case n.VacationClean:a.vacation=[]}return a},editVacationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new W,t=arguments.length>1?arguments[1]:void 0,a=Object(I.a)({},e);switch(t.type){case F.EditVacationId:a.EditVacationId=t.payload;break;case F.EditVacationClean:a.EditVacationId=0}return a}}),$=Object(B.b)(M),G=(a(238),a(25)),Z=a(23),K=(a(239),a(379)),Q=a(396),X=a(4),Y=a(382),_=a(384),ee=a(385),te=a(386),ae=a(387),ne=a(349),ie=a(85),re=a(158),ce=a.n(re),oe=a(27),se=new(function(){function e(){Object(g.a)(this,e)}return Object(O.a)(e,[{key:"getError",value:function(e){var t;if("string"===typeof e)return e;if("string"===typeof e.error)return e.error;if(Array.isArray(e.error)){var a,n="",i=Object(oe.a)(e.error);try{for(i.s();!(a=i.n()).done;){n+=a.value+"<br>"}}catch(e){i.e(e)}finally{i.f()}return n}return(null===(t=e.response)||void 0===t?void 0:t.data)?e.response.data:"string"===typeof e.message?e.message.startsWith("Network Error")?"The server is down or your network. \n please try again.":e.message:"Some error occurred, please try again later."}}]),e}()),le=a(2),ue=Object(K.a)((function(e){return Object(Q.a)({root:{maxWidth:300,maxHeight:540,display:"inline-block"},media:{paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{color:"red"},avatar:{backgroundColor:ie.a[500]},playIcon:{right:10,color:"red"}})}));function de(e){var t=ue(),a=Object(h.g)(),r=Object(i.useState)(!1),c=Object(Z.a)(r,2),o=c[0],s=c[1],l=!0;Object(i.useEffect)((function(){Object(x.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("".concat(N.followsUrl).concat(e.vacation.vacationId));case 2:a=t.sent,a.data.find((function(e){return e.userId===$.getState().userReducer.user.userId}))&&(l&&s(!o),e.vacation.userFollow=!0,$.dispatch(E(e.vacation)));case 5:case"end":return t.stop()}}),t)})))();var t=$.subscribe(j);return function(){l=!1,t()}}),[]);var u=Object(i.useState)(e.vacation.follows?e.vacation.follows:0),d=u[0],p=u[1],j=function(){var t=$.getState().vacationReducer.vacation.find((function(t){return t.vacationId===e.vacation.vacationId})),a=0;(null===t||void 0===t?void 0:t.follows)&&(a=t.follows),p(a)},m=function(){var t=Object(x.a)(f.a.mark((function t(){var i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o){t.next=7;break}return t.next=4,k.a.post("".concat(N.followsUrl,"add-follow/").concat(e.vacation.vacationId,"/").concat($.getState().userReducer.user.userId));case 4:$.dispatch((r=e.vacation,{type:n.VacationAddedFollow,payload:r})),t.next=10;break;case 7:return t.next=9,k.a.delete("".concat(N.followsUrl,"delete-follow/").concat(e.vacation.vacationId,"/").concat($.getState().userReducer.user.userId));case 9:$.dispatch(R(e.vacation));case 10:s(!o),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),403===(null===(i=t.t0.response)||void 0===i?void 0:i.status)?(a.push("/home"),T(),alert(se.getError(t.t0))):alert(se.getError(t.t0));case 16:case"end":return t.stop()}var r}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();return Object(le.jsx)("div",{className:"VacationUserCard",style:{display:"inline-block",marginLeft:"30px",marginTop:"10px"},children:Object(le.jsxs)(Y.a,{className:t.root,children:[Object(le.jsx)(_.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:"".concat(N.vacationsUrl,"/image/").concat(e.vacation.imageFileName),title:"Contemplative Reptile"}),Object(le.jsx)(ee.a,{children:Object(le.jsx)(ne.a,{variant:"h5",component:"p",children:e.vacation.destination})}),Object(le.jsx)(ee.a,{children:Object(le.jsx)(ne.a,{className:"description",component:"p",children:e.vacation.description})}),Object(le.jsxs)(ee.a,{children:[Object(le.jsxs)(ne.a,{component:"p",children:["From: ",new Date(e.vacation.fromDate).toDateString()]}),Object(le.jsxs)(ne.a,{component:"p",children:["To:",new Date(e.vacation.toDate).toDateString()]}),Object(le.jsxs)(ne.a,{component:"p",children:["Price:",e.vacation.price+"$"]})]}),Object(le.jsx)(te.a,{disableSpacing:!0,children:Object(le.jsxs)(ne.a,{component:"span",children:[Object(le.jsx)(ae.a,{"aria-label":"add to favorites",className:Object(X.a)(t.expand,Object(G.a)({},t.expandOpen,o)),onClick:m,"aria-expanded":!o,children:Object(le.jsx)(ce.a,{})}),"Follows: ",d||0]})})]})})}a(246);var pe=a(159),je=a.n(pe),me=a(84),be=a.n(me),he=Object(K.a)((function(e){return Object(Q.a)({root:{maxWidth:300,maxHeight:5400,display:"inline-block"},media:{paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{color:"red"},avatar:{backgroundColor:ie.a[500]},playIcon:{right:10,color:"red"}})}));function ve(e){var t=he(),a=Object(h.g)(),n=function(){var t=Object(x.a)(f.a.mark((function t(){var n,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,window.confirm("Are you suer?")){t.next=6;break}return t.abrupt("return");case 6:return n=e.vacation.vacationId,t.next=9,k.a.delete("".concat(N.vacationsUrl).concat(n));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),403===(null===(i=t.t0.response)||void 0===i?void 0:i.status)?(T(),alert(se.getError(t.t0)),a.push("/home")):alert(se.getError(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(le.jsx)("div",{className:"VacationAdminCard",style:{display:"inline-block",marginLeft:"30px",marginTop:"10px"},children:Object(le.jsxs)(Y.a,{className:t.root,children:[Object(le.jsx)(_.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:"".concat(N.vacationsUrl,"image/").concat(e.vacation.imageFileName),title:"Contemplative Reptile"}),Object(le.jsx)(ee.a,{children:Object(le.jsx)(ne.a,{variant:"h5",component:"p",children:e.vacation.destination})}),Object(le.jsx)(ee.a,{children:Object(le.jsx)(ne.a,{className:"description",component:"p",children:e.vacation.description})}),Object(le.jsxs)(ee.a,{children:[Object(le.jsxs)(ne.a,{component:"p",children:["From: ",new Date(e.vacation.fromDate).toDateString()]}),Object(le.jsxs)(ne.a,{component:"p",children:["To:",new Date(e.vacation.toDate).toDateString()]}),Object(le.jsxs)(ne.a,{component:"p",children:["Price:",e.vacation.price+"$"]})]}),Object(le.jsx)(te.a,{disableSpacing:!0,children:Object(le.jsxs)(ne.a,{children:[Object(le.jsx)(ae.a,{"aria-label":"delete vacation",onClick:n,children:Object(le.jsx)(je.a,{})}),Object(le.jsx)(b.c,{onClick:function(){sessionStorage.setItem("EditVacationId",JSON.stringify(e.vacation.vacationId)),$.dispatch(P(e.vacation.vacationId))},to:"/edit-vacation/".concat(e.vacation.vacationId),children:Object(le.jsx)(ae.a,{"aria-label":"edit vacation",children:Object(le.jsx)(be.a,{})})})]})})]},e.vacation.vacationId)})}var fe=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).unsubscribeFromStore=void 0,n.state={vacations:$.getState().vacationReducer.vacation,userLogin:$.getState().userReducer.user},n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(f.a.mark((function e(){var t,a,n,i=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.unsubscribeFromStore=$.subscribe((function(){var e=$.getState().vacationReducer.vacation;i.setState({vacations:e})})),0!==$.getState().vacationReducer.vacation.length){e.next=8;break}return e.next=5,k.a.get(N.vacationsUrl);case 5:t=e.sent,a=t.data,$.dispatch(L(a));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),403===(null===(n=e.t0.response)||void 0===n?void 0:n.status)?(T(),this.props.history.push("/home"),alert(se.getError(e.t0))):alert(se.getError(e.t0));case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(le.jsxs)("div",{className:"VacationsList",children:[Object(le.jsx)("h2",{children:"Our Vacations"}),this.state.userLogin&&1===this.state.userLogin.isAdmin?this.state.vacations.map((function(e){return Object(le.jsx)(ve,{vacation:e},e.vacationId)})):this.state.vacations.map((function(e){return Object(le.jsx)(de,{vacation:e},e.vacationId)}))]})}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromStore()}}]),a}(i.Component),xe=a(164),ge=a.n(xe),Oe=a(392),ye=a(388),we=a(389),Se=a(169),ke=a(397),Ie=a(394),Ve=a(390),De=a(391),Le=(a(247),a(35)),Ee=function(){var e=Object(h.g)(),t=Object(Le.a)(),a=t.handleSubmit,n=t.register,i=a(function(){var t=Object(x.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.post("".concat(N.authUrl,"register"),a);case 3:e.push("/home"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert(se.getError(t.t0));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}());return Object(le.jsx)("div",{children:Object(le.jsx)(ye.a,{style:{marginTop:"5%"},children:Object(le.jsx)("form",{onSubmit:i,children:Object(le.jsx)(we.a,{children:Object(le.jsxs)(Se.a,{elevation:10,style:{padding:20,height:370,width:280,margin:"20px auto"},children:[Object(le.jsxs)(we.a,{children:[Object(le.jsx)(ke.a,{style:{backgroundColor:"#1bbd7e",align:"center",margin:"auto",marginTop:"10px"},children:Object(le.jsx)(m.a,{})}),Object(le.jsx)("h2",{children:"Sign up"})]}),Object(le.jsx)(Ie.a,{inputProps:{minLength:2,maxLength:25},fullWidth:!0,required:!0,inputRef:n,label:"First name",name:"firstName",size:"small"}),Object(le.jsx)(Ie.a,{inputProps:{minLength:2,maxLength:25},fullWidth:!0,required:!0,inputRef:n,label:"Last name",name:"lastName",size:"small"}),Object(le.jsx)(Ie.a,{inputProps:{minLength:2,maxLength:25},fullWidth:!0,required:!0,inputRef:n,label:"Username",name:"userName",size:"small"}),Object(le.jsx)(Ie.a,{inputProps:{minLength:4,maxLength:250},fullWidth:!0,required:!0,inputRef:n,label:"Password",name:"password",size:"small",type:"password"}),Object(le.jsx)(Ve.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0",marginTop:"10px"},fullWidth:!0,children:"Sign up"}),Object(le.jsxs)(ne.a,{children:[" Do you have an account?",Object(le.jsx)(De.a,{href:"/home",children:"Sing in"})]})]})})})})})},Re=a(160),Ne=a.n(Re),Fe=(a(248),function(){var e=Object(Le.a)(),t=e.handleSubmit,a=e.register,n=Object(h.g)(),i=t(function(){var e=Object(x.a)(f.a.mark((function e(t){var a,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("".concat(N.authUrl,"login"),t);case 3:a=e.sent,i=a.data,sessionStorage.setItem("user",JSON.stringify(i)),$.dispatch(J(i)),U.connect(),A(i),n.push("/vacations"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(se.getError(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}());return Object(le.jsx)("form",{onSubmit:i,style:{marginTop:"5%"},children:Object(le.jsx)(we.a,{children:Object(le.jsxs)(Se.a,{elevation:10,style:{padding:20,height:300,width:280,margin:"20px auto"},children:[Object(le.jsxs)(we.a,{children:[Object(le.jsx)(ke.a,{style:{backgroundColor:"#1bbd7e",align:"center",margin:"auto",marginTop:"10px"},children:Object(le.jsx)(Ne.a,{})}),Object(le.jsx)("h2",{children:"Sign in"})]}),Object(le.jsx)(Ie.a,{inputProps:{minLength:2,maxLength:25},fullWidth:!0,required:!0,inputRef:a,label:"Username",name:"userName",size:"small"}),Object(le.jsx)(Ie.a,{inputProps:{minLength:2,maxLength:25},fullWidth:!0,required:!0,inputRef:a,label:"Password",name:"password",size:"small",type:"password"}),Object(le.jsx)(Ve.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0",marginTop:"10px"},fullWidth:!0,children:"Sign in"}),Object(le.jsxs)(ne.a,{children:[" Do you have an account?",Object(le.jsx)(De.a,{href:"/register",children:"Sign up"})]})]})})})}),Ce=Object(K.a)((function(e){return{container:{padding:e.spacing(3)}}})),Ue=function(){var e=Object(Le.a)(),t=e.handleSubmit,a=e.register,n=Object(i.useState)((new Date).toISOString().slice(0,10)),r=Object(Z.a)(n,2),c=r[0],o=r[1],s=Ce(),l=Object(h.g)(),u=t(function(){var e=Object(x.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new FormData).append("destination",t.destination),a.append("description",t.description),a.append("fromDate",t.fromDate.toString()),a.append("toDate",t.toDate.toString()),a.append("price",t.price.toString()),a.append("imageFileName",t.imageFileName.item(0)),e.next=10,k.a.post(N.vacationsUrl,a);case 10:l.push("/vacations"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),403===(null===(n=e.t0.response)||void 0===n?void 0:n.status)?(l.push("/home"),T(),alert(se.getError(e.t0))):alert(se.getError(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}());return Object(le.jsxs)("form",{onSubmit:u,action:"/upload-image",method:"POST",encType:"multipart/form-data",children:[Object(le.jsx)("h2",{children:"Add vacation"}),Object(le.jsx)(ye.a,{className:s.container,maxWidth:"xs",children:Object(le.jsx)(Se.a,{elevation:10,style:{padding:20,maxHeight:"fitContent",maxWidth:400,margin:"20px auto"},children:Object(le.jsxs)(we.a,{container:!0,spacing:3,children:[Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsxs)(we.a,{container:!0,spacing:2,children:[Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{inputProps:{minLength:3,maxLength:30},fullWidth:!0,required:!0,inputRef:a,label:"Destination",name:"destination",size:"small",variant:"outlined"})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{inputProps:{minLength:5,maxLength:1e3},fullWidth:!0,required:!0,multiline:!0,inputRef:a,label:"Description",name:"description",size:"small",type:"textarea",variant:"outlined"})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{InputLabelProps:{shrink:!0},inputProps:{min:(new Date).toISOString().slice(0,10),max:"2050-01-01"},fullWidth:!0,required:!0,inputRef:a,label:"From date",name:"fromDate",size:"small",type:"date",variant:"outlined",onChange:function(e){return o(e.target.value)}})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{InputLabelProps:{shrink:!0},inputProps:{min:c,max:"2050-01-01"},fullWidth:!0,required:!0,inputRef:a,label:"To date",name:"toDate",size:"small",type:"date",variant:"outlined"})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{inputProps:{min:300,max:1e4},fullWidth:!0,required:!0,inputRef:a,label:"Price",name:"price",size:"small",type:"number",variant:"outlined"})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{inputProps:{accept:"image/*"},fullWidth:!0,required:!0,inputRef:a,name:"imageFileName",size:"small",type:"file",variant:"outlined"})})]})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ve.a,{type:"submit",color:"primary",fullWidth:!0,variant:"contained",children:"Add vacation"})})]})})})]})},We=a(109),Pe=a.n(We),Ae=(a(249),a(250),a(161)),Te=a.n(Ae);var ze=function(){var e=Object(h.g)(),t=JSON.parse(sessionStorage.getItem("user"));return Object(le.jsx)("div",{className:"Logout",children:t?Object(le.jsxs)(Ve.a,{color:"secondary",variant:"contained",style:{margin:"8px 0",marginTop:"10px"},fullWidth:!0,onClick:function(){T(),e.push("/home")},children:["Logout ",Object(le.jsx)(Te.a,{fontSize:"small"})]}):null})},qe=a(162),Je=a.n(qe),He=function(){var e=Object(h.g)(),t=Object(Le.a)(),a=t.handleSubmit,n=t.register,r=Object(i.useState)($.getState().userReducer.user),c=r[0],o=r[1];Object(i.useEffect)((function(){return $.subscribe((function(){var e=$.getState().userReducer.user;o(e)}))}));var s=a(function(){var t=Object(x.a)(f.a.mark((function t(a){var n,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.patch("".concat(N.usersUrl,"update/")+c.userId,a);case 3:n=t.sent,sessionStorage.setItem("user",JSON.stringify(n.data)),$.dispatch(H(n.data)),e.push("/vacations"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),403===(null===(i=t.t0.response)||void 0===i?void 0:i.status)?(T(),e.push("/home"),alert(se.getError(t.t0))):alert(se.getError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}());return Object(le.jsx)("div",{children:Object(le.jsx)(ye.a,{style:{marginTop:"5%"},children:Object(le.jsx)("form",{onSubmit:s,children:Object(le.jsx)(we.a,{children:Object(le.jsxs)(Se.a,{elevation:10,style:{padding:20,height:350,width:280,margin:"20px auto"},children:[Object(le.jsxs)(we.a,{children:[Object(le.jsx)(ke.a,{style:{backgroundColor:"#1bbd7e",align:"center",margin:"auto",marginTop:"10px"},children:Object(le.jsx)(be.a,{})}),Object(le.jsx)("h2",{children:"Edit user"})]}),Object(le.jsx)(Ie.a,{defaultValue:c.firstName,inputProps:{minLength:2,maxLength:25},fullWidth:!0,required:!0,inputRef:n,label:"First name",name:"firstName",size:"small"}),Object(le.jsx)(Ie.a,{defaultValue:c.lastName,inputProps:{minLength:2,maxLength:25},fullWidth:!0,required:!0,inputRef:n,label:"Last name",name:"lastName",size:"small"}),Object(le.jsx)(Ie.a,{defaultValue:c.userName,inputProps:{minLength:2,maxLength:25},fullWidth:!0,required:!0,inputRef:n,label:"Username",name:"userName",size:"small"}),Object(le.jsxs)(Ve.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0",marginTop:"10px"},fullWidth:!0,children:["Update details  ",Object(le.jsx)(Je.a,{fontSize:"small"})]}),Object(le.jsx)(ze,{})]})})})})})};a(251);var Be=function(){return Object(le.jsx)("div",{className:"Home",children:$.getState().userReducer.user?Object(le.jsxs)("h2",{children:["Welcome back ",$.getState().userReducer.user.firstName," ",$.getState().userReducer.user.lastName]}):Object(le.jsx)(Fe,{})})},Me=Object(K.a)((function(e){return{container:{padding:e.spacing(3)}}}));var $e=function(e){var t=Object(h.g)(),a=Object(i.useState)((new Date).toISOString().slice(0,10)),n=Object(Z.a)(a,2),r=n[0],c=n[1],o=$.getState().vacationReducer.vacation.find((function(t){return t.vacationId===+e.match.params.vacationId}));Object(i.useEffect)((function(){if(!o)return $.dispatch(P(0)),void e.history.push("/vacations")})),o&&(o.fromDate=new Date(o.fromDate).toISOString().slice(0,10),o.toDate=new Date(o.toDate).toISOString().slice(0,10));var s=Object(Le.a)({defaultValues:o}),l=s.handleSubmit,u=s.register,d=Me(),p=l(function(){var a=Object(x.a)(f.a.mark((function a(n){var i,r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n.vacationId=+e.match.params.vacationId,(i=new FormData).append("vacationId",n.vacationId.toString()),i.append("destination",n.destination),i.append("description",n.description),i.append("fromDate",n.fromDate.toString()),i.append("toDate",n.toDate.toString()),i.append("price",n.price.toString()),i.append("imageFileName",o.imageFileName),null!==n.newImageFileName.item(0)&&i.append("newImageFileName",n.newImageFileName.item(0)),a.next=13,k.a.put("".concat(N.vacationsUrl)+o.vacationId,i);case 13:t.push("/vacations"),$.dispatch(P(0)),a.next=26;break;case 17:if(a.prev=17,a.t0=a.catch(0),403!==(null===(r=a.t0.response)||void 0===r?void 0:r.status)){a.next=25;break}return t.push("/home"),T(),a.abrupt("return",alert(se.getError(a.t0)));case 25:alert(se.getError(a.t0));case 26:case"end":return a.stop()}}),a,null,[[0,17]])})));return function(e){return a.apply(this,arguments)}}());return Object(le.jsxs)("form",{onSubmit:p,action:"/upload-image",method:"POST",encType:"multipart/form-data",children:[Object(le.jsx)("h2",{children:"Edit vacation"}),Object(le.jsx)(ye.a,{className:d.container,maxWidth:"xs",children:Object(le.jsx)(Se.a,{elevation:10,style:{padding:20,maxHeight:"fitContent",maxWidth:400,margin:"20px auto"},children:Object(le.jsxs)(we.a,{container:!0,spacing:3,children:[Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsxs)(we.a,{container:!0,spacing:2,children:[Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{fullWidth:!0,required:!0,inputProps:{minLength:3,maxLength:30},inputRef:u,label:"Destination",name:"destination",size:"small",variant:"outlined"})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{fullWidth:!0,required:!0,inputProps:{minLength:5,maxLength:1e3},multiline:!0,inputRef:u,label:"Description",name:"description",size:"small",variant:"outlined"})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{InputLabelProps:{shrink:!0},inputProps:{min:(new Date).toISOString().slice(0,10),max:"2050-01-01"},fullWidth:!0,required:!0,inputRef:u,label:"From date",name:"fromDate",size:"small",type:"date",variant:"outlined",onChange:function(e){return c(e.target.value)}})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{InputLabelProps:{shrink:!0},inputProps:{min:r,max:"2050-01-01"},fullWidth:!0,required:!0,inputRef:u,label:"To date",name:"toDate",size:"small",type:"date",variant:"outlined"})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{inputProps:{minLength:300,maxLength:1e4},fullWidth:!0,required:!0,inputRef:u,label:"Price",name:"price",size:"small",type:"number",variant:"outlined"})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ie.a,{inputProps:{accept:"image/*"},inputRef:u,name:"newImageFileName",size:"small",type:"file",variant:"outlined"})})]})}),Object(le.jsx)(we.a,{item:!0,xs:12,children:Object(le.jsx)(Ve.a,{type:"submit",color:"primary",fullWidth:!0,variant:"contained",children:"Edit vacation"})})]})})})]})},Ge=(a(252),a(163));function Ze(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}var Ke=function(){var e=Object(h.g)(),t=[];$.getState().vacationReducer.vacation.map((function(e){return e.follows?t.push({follows:e.follows,destination:e.destination,color:Ze()}):null}));var a=Object(i.useState)(t),n=Object(Z.a)(a,2),r=n[0],c=n[1];return Object(i.useEffect)((function(){if($.getState().userReducer.user.isAdmin&&0!==t.length)return $.subscribe((function(){var e=[];$.getState().vacationReducer.vacation.map((function(t){return t.follows?e.push({follows:t.follows,destination:t.destination,color:Ze()}):null})),c(e)}));e.push("/vacations")}),[]),Object(le.jsx)("div",{className:"AdminPage",children:Object(le.jsx)(Ge.Bar,{data:{labels:r.map((function(e){return e.destination})),datasets:[{label:"# of Vacation",data:r.map((function(e){return e.follows})),backgroundColor:r.map((function(e){return e.color})),borderColor:r.map((function(e){return e.color})),borderWidth:1,color:"black"}]},height:300,width:400,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1}}]}}})})},Qe=a(165),Xe=a.n(Qe);function Ye(){var e=Object(i.useState)($.getState().editVacationReducer.EditVacationId),t=e[0],a=e[1],n=Object(i.useState)($.getState().userReducer.user),r=n[0],c=n[1];Object(i.useEffect)((function(){return $.subscribe((function(){var e=$.getState().userReducer.user,t=$.getState().editVacationReducer.EditVacationId;c(e),a(t)}))}));var o=function(){sessionStorage.setItem("EditVacationId",JSON.stringify(0)),$.dispatch(P(0))},s=["/home","/vacations","/register","/add-vacation","/edit-user",0!==t?"/edit-vacation/".concat(t):null,"/admin-page"];return Object(le.jsxs)(b.a,{children:[Object(le.jsx)(h.b,{path:"/",render:function(e){return Object(le.jsx)(Oe.a,{children:Object(le.jsxs)(l.a,{value:"/"!==e.location.pathname&&e.location.pathname,variant:"fullWidth",scrollButtons:"on",children:[Object(le.jsx)(u.a,{icon:Object(le.jsx)(ge.a,{}),label:"Home",onClick:o,value:s[0],component:b.b,to:s[0]}),r?Object(le.jsx)(u.a,{onClick:o,icon:Object(le.jsx)(p.a,{}),label:"Vacations",value:s[1],component:b.b,to:s[1]}):Object(le.jsx)(u.a,{onClick:o,icon:Object(le.jsx)(p.a,{}),label:"Vacations",value:s[1],component:b.b,to:s[0]}),r?null:Object(le.jsx)(u.a,{icon:Object(le.jsx)(m.a,{}),label:"Register",value:s[2],component:b.b,to:s[2]}),r&&1===r.isAdmin?Object(le.jsx)(u.a,{onClick:o,icon:Object(le.jsx)(Xe.a,{}),label:"Add vacation ",value:s[3],component:b.b,to:s[3]}):null,0!==t&&r&&1===r.isAdmin?Object(le.jsx)(u.a,{icon:Object(le.jsx)(m.a,{}),label:"Edit vacation",value:s[5],component:b.b,to:s[5]}):null,r&&1===r.isAdmin?Object(le.jsx)(u.a,{onClick:o,icon:Object(le.jsx)(m.a,{}),label:"Admin page",value:s[6],component:b.b,to:s[6]}):null,r?Object(le.jsx)(u.a,{onClick:o,icon:Object(le.jsx)(Pe.a,{}),label:"Hello ".concat(r.firstName," ").concat(r.lastName),value:s[4],component:b.b,to:s[4]}):Object(le.jsx)(u.a,{icon:Object(le.jsx)(Pe.a,{}),label:"Hello Guest",value:s[4],component:b.b,to:s[0]}),s.includes(e.location.pathname)?null:Object(le.jsx)(u.a,{value:e.location.pathname})]})})}}),Object(le.jsxs)(h.d,{children:[Object(le.jsx)(h.b,{path:"/home",component:Be,exact:!0}),Object(le.jsx)(h.b,{path:"/vacations",component:fe,exact:!0}),Object(le.jsx)(h.b,{path:"/login",component:Fe,exact:!0}),Object(le.jsx)(h.b,{path:"/logout",component:ze,exact:!0}),Object(le.jsx)(h.b,{path:"/register",component:Ee,exact:!0}),Object(le.jsx)(h.b,{path:"/add-vacation",component:Ue,exact:!0}),Object(le.jsx)(h.b,{path:"/edit-vacation/:vacationId",component:$e,exact:!0}),Object(le.jsx)(h.b,{path:"/edit-user",component:He,exact:!0}),Object(le.jsx)(h.b,{path:"/admin-page",component:Ke,exact:!0}),Object(le.jsx)(h.a,{from:"*",to:"/home",exact:!0})]})]})}var _e=function(){return Object(i.useEffect)((function(){$.getState().userReducer.user&&U.connect()})),Object(le.jsxs)("div",{className:"App",children:[Object(le.jsx)("h1",{style:{marginTop:"15vh"},children:"Vacation Trips"}),Object(le.jsx)(Ye,{})]})};o.a.render(Object(le.jsx)(r.a.StrictMode,{children:Object(le.jsx)(_e,{})}),document.getElementById("root")),s()}},[[347,1,2]]]);
//# sourceMappingURL=main.45a0c0bd.chunk.js.map