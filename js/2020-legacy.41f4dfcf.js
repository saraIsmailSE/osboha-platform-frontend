"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[2020],{60351:function(e,t,n){n.d(t,{So:function(){return r},Wx:function(){return o},b5:function(){return i},gg:function(){return s},jx:function(){return a}});var r={ambassador:"سفير",leader:"قائد",supervisor:"مراقب",advisor:"موجه",consultant:"مستشار",admin:"ادارة",book_quality_team:"جودة الكتب"},a={arabic:"اللغة العربية",english:"اللغة الانجليزية"},o={normal:"منهج",ramadan:"رمضان",young:"يافعين",kids:"أطفال",tafseer:"تفسير",free:"كتاب حر"},s={January:"يناير",February:"فبراير",March:"مارس",April:"ابريل",May:"مايو",June:"يونيو",July:"يوليو",August:"أغسطس",September:"سبتمبر",October:"أكتوبر",November:"نوفمبر",December:"ديسمبر"},i={"01":"يناير","02":"فبراير","03":"مارس","04":"ابريل","05":"مايو","06":"يونيو","07":"يوليو","08":"أغسطس","09":"سبتمبر",10:"أكتوبر",11:"نوفمبر",12:"ديسمبر"}},92020:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(66252),a=n(3577),o=n(49963),s=function(e){return(0,r.dD)("data-v-514965c0"),e=e(),(0,r.Cn)(),e},i={ref:"listContainer"},u={class:"row"},l={class:"col-sm-12"},c={key:0,class:"card-title"},d={key:1,class:"card-title"},p={class:"mt-3 inputs mb-3"},m=s((function(){return(0,r._)("i",{class:"material-symbols-outlined"}," search ",-1)})),g={key:0,class:"table-responsive"},f={id:"datatable",class:"table table-striped table-bordered"},h=s((function(){return(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"اسم المجموعة"),(0,r._)("th",null,"نوع المجموعة"),(0,r._)("th",null,"عدد الاعضاء")])],-1)})),b=["onClick"],v={key:1},y=s((function(){return(0,r._)("span",{class:"material-symbols-outlined align-middle"}," info ",-1)})),_={key:2,class:"col-sm-12 text-center"},w=["src"];function k(e,t,s,k,Z,x){var A=(0,r.up)("router-link"),M=(0,r.up)("iq-card");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",u,[(0,r._)("div",l,[(0,r.Wm)(M,null,{headerTitle:(0,r.w5)((function(){return[Z.groups&&Z.groups.length>0?((0,r.wg)(),(0,r.iD)("h4",c,"قائمة المجموعات - "+(0,a.zw)(Z.groups.length),1)):((0,r.wg)(),(0,r.iD)("h4",d,"قائمة المجموعات - 0"))]})),body:(0,r.w5)((function(){return[(0,r._)("div",p,[m,(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:" ... ابحث عن مجموعة","onUpdate:modelValue":t[0]||(t[0]=function(e){return Z.searchModel=e}),onKeyup:t[1]||(t[1]=function(){return e.debouncedSearch&&e.debouncedSearch.apply(e,arguments)})},null,544),[[o.nr,Z.searchModel,void 0,{trim:!0}]])]),(0,r.Wm)(A,{class:"mb-3 btn btn-primary float-end",to:{name:"group.addGroup"}},{default:(0,r.w5)((function(){return[(0,r.Uk)(" اضافة مجموعة ")]})),_:1},8,["to"]),Z.groups&&Z.groups.length>0?((0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("table",f,[h,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Z.groups,(function(e,t){return(0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("td",null,[(0,r.Wm)(A,{class:"text-center",to:{name:"group.group-detail",params:{group_id:e.id}}},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.name),1)]})),_:2},1032,["to"])]),(0,r._)("td",null,(0,a.zw)(Z.group_type[e.type.type]),1),(0,r._)("td",null,(0,a.zw)(e.users_count),1),(0,r._)("td",null,[(0,r._)("span",{role:"button",onClick:function(t){return x.groupAdministrators(e.group_administrators,e.name)},class:"text-danger material-symbols-outlined ms-1 me-1"}," shield_person ",8,b)])])})),128))])])])):((0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("h4",null,[(0,r.Uk)((0,a.zw)(Z.emptyMessage)+" ",1),y])])),Z.loading?((0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("img",{src:n(79885),alt:"loader",style:{height:"100px"}},null,8,w)])):(0,r.kq)("",!0)]})),_:1})])])],512)}var Z=n(89584),x=n(50124),A=n(48534),M=(n(60228),n(47522),n(34338),n(22658)),C=n(31025),S=n(49579),T=n(9669),D=n.n(T),R=n(60351),q={name:"Groups List",created:function(){this.debouncedSearch=this.debounce(this.loadGroups,300)},mounted:function(){var e=this;return(0,A.Z)((0,x.Z)().mark((function t(){return(0,x.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadGroups(),window.addEventListener("scroll",e.handleScroll);case 2:case"end":return t.stop()}}),t)})))()},beforeUnmount:function(){window.removeEventListener("scroll",this.handleScroll),this.cancelToken.cancel()},data:function(){return{groups:[],group_type:{followup:"فريق متابعة",supervising:"فريق رقابة",advising:"فريق توجيه",consultation:"فريق الاستشارة",Administration:"الإدارة العليا"},searchModel:"",page:1,totalPages:1,loading:!1,pendingRequest:!1,hasMore:!0,emptyMessage:"",ARABIC_ROLES:R.So,cancelToken:D().CancelToken.source()}},methods:{groupAdministrators:function(e,t){var n=this;return(0,A.Z)((0,x.Z)().mark((function r(){var a,o;return(0,x.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=n.createAdminTable(e),o=n.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1}),o.fire({title:t,html:a,icon:"info",confirmButtonText:"اغلاق",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}});case 3:case"end":return r.stop()}}),r)})))()},createAdminTable:function(e){var t='<table  class="table table-striped table-bordered">';return t+='<tr><th colspan="2">المسؤولين في المجموعة</th></tr>',e.forEach((function(e){t+="<tr>",t+="<td>".concat(R.So[e.pivot.user_type],"</td>"),t+="<td>".concat(e.name,"</td>"),t+="</tr>"})),t+="</table>",t},loadGroups:function(){var e=this;return(0,A.Z)((0,x.Z)().mark((function t(){var n,r,a;return(0,x.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.pendingRequest){t.next=2;break}return t.abrupt("return");case 2:return""==e.searchModel&&0==e.groups.length&&(e.page=1),""!=e.searchModel&&(e.page=1,e.groups=[]),e.pendingRequest=!0,e.loading=!0,e.emptyMessage="",t.prev=7,t.next=10,M.Z.getAll(e.searchModel,e.page,e.cancelToken);case 10:if(a=t.sent,200===a.statusCode){t.next=14;break}return C.Z.toggleToast("حدث خطأ أثناء تحميل المجموعات, حاول مرة أخرى","error"),t.abrupt("return");case 14:if(200!==a.statusCode||a.data){t.next=18;break}return e.emptyMessage="لا يوجد مجموعات",e.hasMore=!1,t.abrupt("return");case 18:e.groups=[].concat((0,Z.Z)(e.groups),(0,Z.Z)(a.data.groups.data)),e.totalPages=null!==(n=null===(r=a.data)||void 0===r?void 0:r.last_page)&&void 0!==n?n:1,e.page++,t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](7),console.log(t.t0),C.Z.toggleToast("حدث خطأ أثناء تحميل المجموعات, حاول مرة أخرى","error");case 27:return t.prev=27,e.loading=!1,e.pendingRequest=!1,t.finish(27);case 31:case"end":return t.stop()}}),t,null,[[7,23,27,31]])})))()},isAtBottomOfPage:function(){var e=this.$refs.listContainer.getBoundingClientRect(),t=e.bottom,n=window.innerHeight;return t>=n},handleScroll:function(){this.hasMoreToLoad&&this.isAtBottomOfPage()&&this.loadGroups()},debounce:function(e,t){var n;return function(){for(var r=this,a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];clearTimeout(n),n=setTimeout((function(){e.apply(r,o)}),t)}}},computed:{user:function(){return this.$store.getters.getUser},isAdmin:function(){return S.Z.hasRole(this.user,"admin")},hasMoreToLoad:function(){return this.page<=this.totalPages&&this.hasMore}}},z=n(83744);const B=(0,z.Z)(q,[["render",k],["__scopeId","data-v-514965c0"]]);var O=B},89584:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(49227);function a(e){if(Array.isArray(e))return(0,r.Z)(e)}n(59749),n(86544),n(60228),n(84254),n(21694),n(76265),n(77049);function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=n(12780);n(21057);function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return a(e)||o(e)||(0,s.Z)(e)||i()}}}]);
//# sourceMappingURL=2020-legacy.41f4dfcf.js.map