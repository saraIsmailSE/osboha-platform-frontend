"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[981],{22658:function(t,a,e){var r=e(66252),s=e(24150),o=e(79940);class n{async createGroup(t){try{const a=await s.hi.post("/group/create",t,{headers:{"Content-type":"multipart/form-data"}});return a.data.data}catch(a){(0,r.S3)(a)}}async getAll(t,a){try{const e=await s.hi.get(`/group?page=${a}&name=${t}`);return await e.data}catch(e){return e}}async searchGroupByName(t){try{const a=await s.hi.get(`group/search-group-by-name/${t}`);return await a.data}catch(a){return a}}async getById(t){try{const a=await s.hi.get(`group/show/${t}`);return a.data.data}catch(a){return a}}async showBasicInfo(t){try{const a=await s.hi.get(`group/show-basic-info/${t}`);return a.data.data}catch(a){return a}}async getBooks(t){try{const a=await s.hi.get(`group/books/${t}`);return a.data.data}catch(a){(0,r.S3)(a)}}async getAllGroupExceptions(t){try{const a=await s.hi.get(`group/group-exceptions/${t}`);return a.data.data}catch(a){return a}}async exceptionsFilter(t,a){try{const e=await s.hi.get(`group/exceptions-filter/${t}/${a}`);return e.data.data}catch(e){return e}}async BasicMarksView(t,a){try{const e=await s.hi.get(`group/basic-mark-view/${t}/${a}`);return e.data.data}catch(e){return e}}async AllAchievements(t,a){try{const e=await s.hi.get(`group/all-achievements/${t}/${a}`);return e.data.data}catch(e){return e}}async AchievementAsPages(t,a){try{const e=await s.hi.get(`group/achievement-as-pages/${t}/${a}`);return e.data.data}catch(e){return e}}async searchForAmbassadorAchievement(t,a,e){try{const r=await s.hi.get(`group/search-for-ambassador-achievement/${t}/${a}/${e}`);return r.data.data}catch(r){return r}}async searchForAmbassador(t,a){try{const e=await s.hi.get(`group/search-for-ambassador/${t}/${a}`);return e.data.data}catch(e){return e}}async createLeaderRequest(t){try{const a=await s.hi.post("/group/create-leader-request",t,{headers:{"Content-type":"multipart/form-data"}});return a.data.data}catch(a){return a}}async lastLeaderRequest(t){try{const a=await s.hi.get(`group/last-leader-request/${t}`);return a.data.data}catch(a){return a}}async deleteById(t){try{return await s.hi.delete(`/group/delete/${t}`)}catch(a){return a}}async update(t){try{const a=await s.hi.post("/group/update",t,{headers:{"Content-type":"multipart/form-data"}});return a.data.data}catch(a){(0,r.S3)(a)}}async getGroupByType(t){try{const a=await s.hi.get(`/group/group-by-type/${t}`);return a.data.data}catch(a){return a}}async userGroups(t,a){try{const e=await s.hi.get(`/group/user-groups?page=${a}&name=${t}`);return e.data}catch(e){return e}}async statistics(t){try{const a=await s.hi.get(`group/statistics/${t}`);return a.data.data}catch(a){(0,o.F)(a,"statistics")}}async thesesAndScreensByWeek(t,a){try{const e=await s.hi.get(`group/theses-and-screens-by-week/${t}/${a}`);return e.data.data}catch(e){(0,r.S3)(e)}}async monthAchievement(t,a){try{const e=await s.hi.get(`group/month-achievement/${t}/${a}`);return e.data.data}catch(e){(0,r.S3)(e)}}async assignAdministrator(t){try{const a=await s.hi.post("/group/assign-administrator",t,{headers:{"Content-type":"multipart/form-data"}});return a.data.data}catch(a){(0,r.S3)(a)}}}a.Z=new n},79940:function(t,a,e){e.d(a,{F:function(){return s}});e(70560);var r=e(1120);function s(t,a=""){throw console.log(`[ERROR] ${a} =>`,t.response.data),404===t.response.data.statusCode?r.Z.push({name:"NotFound"}):403===t.response.data.statusCode&&r.Z.push({name:"NotAuthorized"}),t}},70981:function(t,a,e){e.r(a),e.d(a,{default:function(){return P}});var r=e(66252),s=e(49963),o=e(3577),n=e(42922),i=e(79885);const c={class:"col-sm-12 mt-3"},u=(0,r._)("div",{class:"iq-card-header-toolbar d-flex text-center align-items-center mx-auto"},[(0,r._)("h1",{class:"text-center mt-3 mb-3"},"اضافة مسؤول")],-1),d=(0,r._)("div",{class:"iq-card-body p-4"},[(0,r._)("div",{class:"image-block text-center"},[(0,r._)("img",{src:n,class:"img-fluid rounded w-75",alt:"blog-img"})])],-1),l={class:"col-12 bg-white pt-2"},m={class:"sign-in-from"},p={class:"form-group"},g=(0,r._)("label",{for:"user"},"المستخدم",-1),h={key:0,style:{color:"red"}},y={key:1,style:{color:"red"}},$={class:"form-group"},w=(0,r._)("label",{for:"head_user"}," التوجيه المسؤول عنه",-1),v=(0,r._)("option",{value:"",selected:""},"اختر التوجيه",-1),f=["value"],_={key:0,style:{color:"red"}},b={class:"form-group"},k=(0,r._)("label",{for:"role"},"دور المسؤول",-1),q=(0,r._)("option",{value:"",selected:""},"اختر دور المسؤول",-1),A=(0,r._)("option",{value:"advisor"},"موجه",-1),x=(0,r._)("option",{value:"consultant"},"مستشار",-1),D=(0,r._)("option",{value:"admin"},"ادارة",-1),C=[q,A,x,D],S={key:0,style:{color:"red"}},B={key:0,class:"form-group text-center"},Z={style:{color:"red"}},F={key:1,class:"col-sm-12 text-center"},G=(0,r._)("p",{class:"text-center"},"جاري الاضافة",-1),R=(0,r._)("img",{src:i,alt:"loader",style:{height:"100px"}},null,-1),V=[G,R],M={key:2,class:"d-inline-block w-100"},z=["disabled"];function I(t,a,e,n,i,q){const A=(0,r.up)("iq-card");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(A,{class:"iq-card"},{default:(0,r.w5)((()=>[u,d,(0,r._)("div",l,[(0,r._)("div",m,[(0,r._)("form",{class:"mt-2",onSubmit:a[3]||(a[3]=(0,s.iM)((t=>q.onSubmit()),["prevent"]))},[(0,r._)("div",p,[g,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>n.v$.form.user.$model=t),type:"email",class:"form-control mb-0",id:"user",placeholder:"ادخل بريد المستخدم"},null,512),[[s.nr,n.v$.form.user.$model]]),n.v$.form.user.$error?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[n.v$.form.user.required.$invalid?((0,r.wg)(),(0,r.iD)("small",h,"البريد الالكتروني للمستخدم مطلوب")):(0,r.kq)("",!0),n.v$.form.user.email.$invalid?((0,r.wg)(),(0,r.iD)("small",y,"البريد الالكتروني للمستخدم غير صحيح")):(0,r.kq)("",!0)],64)):(0,r.kq)("",!0)]),(0,r._)("div",$,[w,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":a[1]||(a[1]=t=>n.v$.form.group_id.$model=t),class:"form-select","data-trigger":"",name:"group_id",id:"group_id"},[v,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.groups,((t,a)=>((0,r.wg)(),(0,r.iD)("option",{key:a,value:t.id},(0,o.zw)(t.name),9,f)))),128))],512),[[s.bM,n.v$.form.group_id.$model]]),n.v$.form.group_id.$error?((0,r.wg)(),(0,r.iD)("small",_," يرجى اختيار التوجيه ")):(0,r.kq)("",!0)]),(0,r._)("div",b,[k,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":a[2]||(a[2]=t=>n.v$.form.user_type.$model=t),class:"form-select","data-trigger":"",name:"user_type",id:"user_type"},C,512),[[s.bM,n.v$.form.user_type.$model]]),n.v$.form.user_type.$error?((0,r.wg)(),(0,r.iD)("small",S," يرجى اختيار نوع الترقية ")):(0,r.kq)("",!0)]),i.message?((0,r.wg)(),(0,r.iD)("div",B,[(0,r._)("small",Z,(0,o.zw)(i.message),1)])):(0,r.kq)("",!0),i.loader?((0,r.wg)(),(0,r.iD)("div",F,V)):((0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("button",{type:"submit",class:"btn btn-primary float-end",disabled:i.loader}," اضافة ",8,z)]))],32)])])])),_:1})])}var N=e(5705),O=e(10760),T=e(22658);const U=t=>t>0;var E={name:"Assign Administrator",setup(){return{v$:(0,N.ZP)()}},async created(){this.groups=await T.Z.getGroupByType("advising")},data(){return{loader:!1,groups:[],form:{user:"",group_id:"",user_type:""},message:""}},validations(){return{form:{user:{required:O.C1,email:O.Do},group_id:{required:O.C1,maxValue:U},user_type:{required:O.C1}}}},methods:{async onSubmit(){if(this.v$.$validate(),!this.v$.$error){this.loader=!0;try{this.message="";const t=await T.Z.assignAdministrator(this.form);this.message=t,this.v$.form.$reset(),this.form={user:"",user_type:""},setTimeout((()=>{this.message=""}),1800)}catch(t){this.message="حدث خطأ, يرجى المحاولة لاحقاً"}finally{this.loader=!1}}}}},H=e(83744);const L=(0,H.Z)(E,[["render",I]]);var P=L},42922:function(t,a,e){t.exports=e.p+"img/assign-administrator.46bdcb01.png"}}]);
//# sourceMappingURL=981.0d8d06b8.js.map