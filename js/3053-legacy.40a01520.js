"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[3053],{25435:function(e,r,a){a.d(r,{Z:function(){return g}});var t=a(66252),s=a(3577),o={class:"d-flex align-items-center justify-content-between w-100"},n={class:"ms-3"},i={class:"mb-0"},d={class:"card-header-toolbar d-flex align-items-center"},l=(0,t._)("i",{class:"material-symbols-outlined md-18 me-1 text-primary"}," visibility ",-1);function c(e,r,a,c,u,m){var p,g,_,b=(0,t.up)("BaseAvatar"),v=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(b,{profileImg:null===(p=a.record.user_profile)||void 0===p?void 0:p.profile_picture,profile_id:null===(g=a.record.user_profile)||void 0===g?void 0:g.id,title:a.record.name,gender:a.record.gender,avatarClass:"rounded-circle avatar-40"},null,8,["profileImg","profile_id","title","gender"]),(0,t._)("div",o,[(0,t._)("div",n,[(0,t._)("h6",null,(0,s.zw)(a.record.name),1),(0,t._)("p",i," عدد الصفحات: "+(0,s.zw)((null===(_=a.record.mark)||void 0===_?void 0:_.length)>0?a.record.mark[0].total_pages:0),1)]),(0,t._)("div",d,[(0,t.Wm)(v,{to:{name:"group.listOneAmbassadorReading",params:{ambassador_id:a.record.id,week_id:a.week_id}}},{default:(0,t.w5)((function(){return[l]})),_:1},8,["to"])])])],64)}a(79288);var u={name:"Achievement Pages",props:{record:{type:[Object],required:!0},week_id:{type:[Number],required:!0}},data:function(){return{}}},m=a(83744);const p=(0,m.Z)(u,[["render",c]]);var g=p},52597:function(e,r,a){a.d(r,{Z:function(){return v}});var t=a(66252),s=a(3577),o={class:"d-flex align-items-center w-100 row"},n={class:"col-lg-3 col-md-3 col-sm-12 ms-3"},i={class:"d-inline-block"},d={class:"col-lg-5 col-md-5 col-sm-12 form-check mt-2"},l={class:"d-block w-100"},c={class:"progress"},u={class:"col-lg-3 col-md-3 col-sm-12 text-center"};function m(e,r,a,m,p,g){var _=(0,t.up)("BaseAvatar"),b=(0,t.up)("router-link"),v=(0,t.up)("OtherActions");return a.ambassador?((0,t.wg)(),(0,t.iD)("li",{key:0,class:"d-flex align-items-center p-3",style:(0,s.j5)("cursor: ".concat(g.cursorStyle(a.ambassador.mark)))},[(0,t.Wm)(_,{profileImg:a.ambassador.user_profile.profile_picture,profile_id:a.ambassador.user_profile.id,title:a.ambassador.name,gender:a.ambassador.gender,avatarClass:"rounded-circle avatar-40"},null,8,["profileImg","profile_id","title","gender"]),(0,t._)("div",o,[(0,t._)("div",n,[(0,t._)("h6",i,[(0,t._)("strong",null,(0,s.zw)(a.ambassador.name),1)])]),(0,t._)("div",d,[(0,t._)("div",l,[(0,t._)("div",c,[a.ambassador.mark.length>0&&a.ambassador.mark[0].is_freezed?((0,t.wg)(),(0,t.iD)("div",{key:0,class:(0,s.C_)(["".concat(g.markClass(-1)),"progress-bar progress-bar-striped"]),role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:"width: ".concat(100,"%;")},null,2)):((0,t.wg)(),(0,t.iD)("div",{key:1,class:(0,s.C_)(["".concat(g.markClass(g.getMark(a.ambassador.mark))),"progress-bar progress-bar-striped"]),role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",style:(0,s.j5)("width: ".concat(g.getMark(a.ambassador.mark),"%;"))},null,6))])])]),(0,t._)("div",u,[(0,t.Wm)(b,{to:{name:"group.listOneAmbassadorReading",params:{ambassador_id:a.ambassador.id,week_id:a.week_id}}},{default:(0,t.w5)((function(){return[(0,t._)("button",{class:(0,s.C_)(["badge ms-0 ms-md-3 my-1 my-md-0 w-75 text-center border-0 outline-none",{"bg-primary":a.ambassador.mark.length>0,"d-none":0==a.ambassador.mark.length}]),style:(0,s.j5)("cursor: ".concat(g.cursorStyle(a.ambassador.mark)))}," عرض ",6)]})),_:1},8,["to"]),0==a.ambassador.mark.length?((0,t.wg)(),(0,t.j4)(v,{key:0,user:a.ambassador},null,8,["user"])):(0,t.kq)("",!0)])])],4)):(0,t.kq)("",!0)}a(79288);var p=a(39356),g={name:"Achievement Progress",components:{OtherActions:p.Z},props:{ambassador:{type:[Object],required:!0},week_id:{type:[Number],required:!0}},data:function(){return{}},methods:{markClass:function(e){switch(e){case-1:return"freeze";case 100:return"full-mark";case 0:return"zero-mark";default:return"incomplete"}},getMark:function(e){return(null===e||void 0===e?void 0:e.length)>0?e[0].reading_mark+e[0].writing_mark+e[0].support:0},cursorStyle:function(e){return 0==(null===e||void 0===e?void 0:e.length)?"not-allowed":"pointer"}}},_=a(83744);const b=(0,_.Z)(g,[["render",m],["__scopeId","data-v-28b637a2"]]);var v=b},99260:function(e,r,a){a.d(r,{Z:function(){return m}});var t=a(66252),s=a(3577),o={class:"card position-relative inner-page-bg",style:{direction:"rtl !important","background-color":"#cae0cd",height:"100px"}},n={class:"inner-page-title"},i={class:"text-dark"};function d(e,r,a,d,l,c){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",n,[(0,t._)("h3",i,"فريق المتابعة || "+(0,s.zw)(a.group_name),1),(0,t._)("p",null,[(0,t.Uk)(" عدد السفراء "),(0,t._)("strong",null,(0,s.zw)(a.group_users),1)])])])}a(79288);var l={name:"Group Title",props:{group_name:{type:[String],required:!0},group_users:{type:[Number],required:!0}},data:function(){return[]}},c=a(83744);const u=(0,c.Z)(l,[["render",d]]);var m=u},61222:function(e,r,a){a.r(r),a.d(r,{default:function(){return ue}});var t=a(66252),s=a(84621),o={key:0,class:"row"},n={class:"col-lg-3"},i={class:"col-lg-9"},d={key:1,class:"row"},l={class:"iq-card-body p-0"},c=(0,t._)("div",{class:"image-block text-center"},[(0,t._)("img",{src:s,class:"img-fluid rounded w-75 mt-3",alt:"no-amb"})],-1),u=(0,t._)("h4",{class:"text-center mt-3 mb-3"},"لا يوجد سفراء في هذه المجموعة",-1),m={class:"d-inline-block w-100 text-center col-12"},p=(0,t._)("span",null,"عودة",-1),g=(0,t._)("span",{class:"align-middle material-symbols-outlined"}," keyboard_return ",-1),_=[p,g];function b(e,r,a,s,p,g){var b=(0,t.up)("StatisticsList"),v=(0,t.up)("AmbassadorsAchievement"),h=(0,t.up)("iq-card");return p.group_users>0?((0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",n,[(0,t.Wm)(b,{categoryList:p.categories},null,8,["categoryList"])]),(0,t._)("div",i,[(0,t.Wm)(v,{ambassadorsAchievementList:p.ambassadorsAchievementList,group_id:p.group.id,week_id:p.week_id,group_name:p.group.name,group_users:p.group_users,most_read:p.most_read},null,8,["ambassadorsAchievementList","group_id","week_id","group_name","group_users","most_read"])])])):((0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(h,{class:"iq-card"},{default:(0,t.w5)((function(){return[(0,t._)("div",l,[c,u,(0,t._)("div",m,[(0,t._)("a",{role:"button",onClick:r[0]||(r[0]=function(r){return e.$router.go(-1)}),class:"d-block mt-3 mb-3 w-75 mx-auto"},_)])])]})),_:1})]))}var v=a(50124),h=a(48534),f=a(3577),k={class:"iq-todo-page"},w={class:"todo-task-list p-0 m-0"},y={class:"d-flex align-items-center justify-content-between"},x={class:"d-flex"},A={class:"container mt-3 d-flex align-items-center justify-content-center"},D=(0,t._)("i",{class:"material-symbols-outlined md-18 me-1"},"insights",-1);function q(e,r,a,s,o,n){var i=this,d=(0,t.up)("Doughnut"),l=(0,t.up)("router-link"),c=(0,t.up)("iq-card");return(0,t.wg)(),(0,t.j4)(c,null,{body:(0,t.w5)((function(){return[(0,t._)("div",k,[(0,t._)("ul",w,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.categoryList,(function(e,r){return(0,t.wg)(),(0,t.iD)("li",{key:r},[(0,t._)("a",y,[(0,t._)("div",x,[(0,t._)("i",{class:(0,f.C_)("material-symbols-outlined"),style:(0,f.j5)("color:".concat(e.color))},"bolt",4),(0,t._)("h5",null,(0,f.zw)(e.name),1)]),(0,t._)("div",{class:"d-inline p-2 text-light float-end rounded",style:(0,f.j5)("background-color:".concat(e.color))},(0,f.zw)(e.number),5)])])})),128))]),(0,t._)("div",A,[(0,t.Wm)(d,{id:"my-chart-id",options:o.chartOptions,data:o.chartData},null,8,["options","data"])]),(0,t.Wm)(l,{to:{name:"group.group-statistics",params:{group_id:i.$route.params.group_id}},class:"btn d-flex align-items-center mt-3 text-white",style:{"background-color":"#2e328b"}},{default:(0,t.w5)((function(){return[D,(0,t.Uk)(" احصائيات الأسبوع ")]})),_:1},8,["to"])])]})),_:1})}var L=a(32005),Z=a(65750);Z.kL.register(Z.Dx,Z.u,Z.De,Z.ZL,Z.uw,Z.f$,Z.qi);var j={name:"StatisticsList",created:function(){this.chartData.datasets[0].data[0]=this.categoryList[0].number,this.chartData.datasets[0].data[1]=this.categoryList[1].number,this.chartData.datasets[0].data[2]=this.categoryList[2].number},props:["categoryList"],components:{Doughnut:L.$I},data:function(){return{search:"",project:{id:0,project_name:""},chartData:{labels:["100","90","صفر"],datasets:[{label:"معدل الأسبوع",data:[20,7,3],backgroundColor:["#22803f","#192f36","#831018"],hoverOffset:4}]},chartOptions:{responsive:!0}}}},O=a(83744);const W=(0,O.Z)(j,[["render",q]]);var C=W,z=a(49963),$={class:"row"},S={class:"col-md-8"},I={class:"todo-task-lists m-0 p-0"},M={class:"input-group w-100 m-auto p-2"},N=(0,t._)("button",{type:"button",class:"btn btn-outline-primary"},[(0,t._)("span",{class:"material-symbols-outlined lh-1"}," search ")],-1),P={key:0,class:"d-block text-center text-danger my-3 py-3"},R={class:"d-block text-center mb-0 pb-0"},B=(0,t._)("span",{class:"me-3 btn",role:"button"},"عرض جميع الانجازات",-1);function G(e,r,a,s,o,n){var i=(0,t.up)("GroupTitle"),d=(0,t.up)("AchievementProgress"),l=(0,t.up)("router-link"),c=(0,t.up)("iq-card"),u=(0,t.up)("MostRead");return(0,t.wg)(),(0,t.iD)("div",$,[(0,t._)("div",S,[(0,t.Wm)(c,{"body-class":"p-0"},{body:(0,t.w5)((function(){return[(0,t.Wm)(i,{"group_id:":a.group_id,group_name:a.group_name,group_users:a.group_users},null,8,["group_id:","group_name","group_users"]),(0,t._)("ul",I,[(0,t._)("form",null,[(0,t._)("div",M,[(0,t.wy)((0,t._)("input",{type:"search",class:"form-control rounded",placeholder:"ابحث عن سفير","aria-label":"Search","aria-describedby":"search-addon",onInput:r[0]||(r[0]=function(e){return n.searchForAmbassadorAchievement()}),"onUpdate:modelValue":r[1]||(r[1]=function(e){return o.ambassador_name=e})},null,544),[[z.nr,o.ambassador_name]]),N])]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.achievementList,(function(e,r){return(0,t.wg)(),(0,t.j4)(d,{key:r,ambassador:e,week_id:a.week_id},null,8,["ambassador","week_id"])})),128)),o.achievementList&&0!=o.achievementList.length?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("li",P," لا يوجد انجازات لهذا الاسبوع ")),(0,t._)("li",R,[(0,t.Wm)(l,{to:{name:"group.listAllAmbassadorAchievements",params:{group_id:a.group_id,week_id:a.week_id}}},{default:(0,t.w5)((function(){return[B]})),_:1},8,["to"])])])]})),_:1})]),a.most_read?((0,t.wg)(),(0,t.j4)(u,{key:0,most_read:a.most_read,week_id:a.week_id},null,8,["most_read","week_id"])):(0,t.kq)("",!0)])}a(79288);var H=a(99260),T=a(52597),U=(a(89730),{class:"col-md-4"}),Y={class:"iq-todo-right"},F={key:0,class:"iq-todo-friendlist mt-3"},K={class:"suggestions-lists m-0 p-0"},V={class:"container mt-3 mb-3 d-flex align-items-center justify-content-center",hight:"200px"},Q=(0,t._)("i",{class:"material-symbols-outlined md-18 me-1"}," patient_list ",-1),E={key:1},J=(0,t._)("div",{class:"d-block text-center text-danger my-3 py-3"}," لا يوجد إحصائيات حالياً ",-1),X=[J];function ee(e,r,a,s,o,n){var i=(0,t.up)("AchievementPages"),d=(0,t.up)("Bar"),l=(0,t.up)("router-link"),c=(0,t.up)("iq-card");return(0,t.wg)(),(0,t.iD)("div",U,[(0,t.Wm)(c,null,{body:(0,t.w5)((function(){return[(0,t._)("div",Y,[a.most_read&&a.most_read.length>0?((0,t.wg)(),(0,t.iD)("div",F,[(0,t._)("ul",K,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.most_read.slice(0,2),(function(e,r){return(0,t.wg)(),(0,t.iD)("li",{class:"d-flex mb-4 align-items-center",key:r},[(0,t.Wm)(i,{record:e,week_id:a.week_id},null,8,["record","week_id"])])})),128))]),(0,t._)("div",V,[(0,t.Wm)(d,{id:"my-chart-id",options:o.chartOptions,data:o.chartData,height:500,width:500},null,8,["options","data"])]),(0,t.Wm)(l,{to:{name:"group.achievementAsPages",params:{group_id:o.group_id}},class:"btn text-white d-flex align-items-center",style:{"background-color":"#2e328b"}},{default:(0,t.w5)((function(){return[Q,(0,t.Uk)(" عرض الكل ")]})),_:1},8,["to"])])):((0,t.wg)(),(0,t.iD)("div",E,X))])]})),_:1})])}var re=a(25435);Z.kL.register(Z.Dx,Z.u,Z.De,Z.ZL,Z.uw,Z.f$,Z.qi);var ae={name:"Most Read",components:{Bar:L.$Q,AchievementPages:re.Z},created:function(){if(this.most_read)for(var e=0;e<this.most_read.length;e++)this.chartData.datasets[0].data[e]=this.most_read[e].total_pages,this.chartData.labels[e]=this.most_read[e].user.name},props:{most_read:{type:[Object],required:!0},week_id:{type:[Number],required:!0}},data:function(){return{group_id:this.$route.params.group_id,chartData:{labels:[],datasets:[{label:"قراءة السفراء",backgroundColor:"#1d1a55",data:[],borderWidth:2,borderRadius:5,borderSkipped:!1}]},chartOptions:{responsive:!0}}}};const te=(0,O.Z)(ae,[["render",ee]]);var se=te,oe=a(22658);Z.kL.register(Z.Dx,Z.u,Z.De,Z.ZL,Z.uw,Z.f$,Z.qi);var ne={name:"General Achievment",components:{GroupTitle:H.Z,MostRead:se,AchievementProgress:T.Z},created:function(){this.achievementList=this.ambassadorsAchievementList},props:{ambassadorsAchievementList:{type:[Object],default:function(){}},category:{type:[Object],required:!0},group_id:{type:[Number],required:!0},week_id:{type:[Number],required:!0},group_name:{type:[String],required:!0},group_users:{type:[Number],required:!0},most_read:{type:[Object],required:!0}},data:function(){return{achievementList:[],ambassador_name:"",show:!1}},methods:{searchForAmbassadorAchievement:function(){var e=this;return(0,h.Z)((0,v.Z)().mark((function r(){var a;return(0,v.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,oe.Z.searchForAmbassadorAchievement(e.ambassador_name,e.$route.params.group_id,"current");case 2:a=r.sent,e.achievementList=a.ambassador_achievement;case 4:case"end":return r.stop()}}),r)})))()}}};const ie=(0,O.Z)(ne,[["render",G]]);var de=ie,le={name:"Team Reading Info",created:function(){var e=this;return(0,h.Z)((0,v.Z)().mark((function r(){var a;return(0,v.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,oe.Z.BasicMarksView(e.group_id,e.week_id);case 3:a=r.sent,e.group=a.group,e.group_users=a.group_users,e.categories[0].number=a.full,e.categories[1].number=a.incomplete,e.categories[2].number=a.zero,e.ambassadorsAchievementList=a.random_achievement,e.most_read=a.most_read,r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),console.log(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},components:{StatisticsList:C,AmbassadorsAchievement:de},data:function(){return{group_id:this.$route.params.group_id,week_id:this.$route.params.week_id,group:[],group_users:0,categories:[{id:1,name:"انجاز كامل",color:"#22803f",number:20},{id:2,name:"انجاز ناقص",color:"#192f36",number:7},{id:3,name:"انجاز صفر",color:"#831018",number:3}],ambassadorsAchievementList:null,most_read:null}}};const ce=(0,O.Z)(le,[["render",b]]);var ue=ce},84621:function(e,r,a){e.exports=a.p+"img/reader.b5157672.png"}}]);
//# sourceMappingURL=3053-legacy.40a01520.js.map