"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[9096],{41304:function(t,e,s){s.r(e),s.d(e,{default:function(){return H}});var n=s(66252),i=s.p+"img/approve-post.13e0fb77.png";const o={key:0,ref:"listContainer"},a={key:1,class:"col-sm-12"},c=(0,n._)("div",{class:"iq-card-body p-0"},[(0,n._)("div",{class:"image-block text-center"},[(0,n._)("img",{src:i,class:"img-fluid rounded w-50",alt:"blog-img"})]),(0,n._)("h4",{class:"text-center mt-3 mb-3"},"لا يوجد منشورات معلقة")],-1);function d(t,e,s,i,d,l){const r=(0,n.up)("PendingPost"),p=(0,n.up)("iq-card");return d.posts.length>0?((0,n.wg)(),(0,n.iD)("div",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.posts,(t=>((0,n.wg)(),(0,n.j4)(r,{key:t.id,post:t},null,8,["post"])))),128))],512)):((0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(p,{class:"iq-card"},{default:(0,n.w5)((()=>[c])),_:1})]))}var l=s(8417);const r={class:"col-sm-12"},p={class:"card card-block card-stretch card-height"},u={class:"card-body"},m=(0,n._)("hr",null,null,-1);function h(t,e,s,i,o,a){const c=(0,n.up)("PostHeader"),d=(0,n.up)("PostBody"),l=(0,n.up)("PostMedia"),h=(0,n.up)("AcceptReject");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",p,[(0,n._)("div",u,[(0,n.Wm)(c),(0,n.Wm)(d),(0,n.Wm)(l),m,(0,n.Wm)(h)])])])}var g=s(34932),b=s(66107),f=(s(76265),s(49963));const _=t=>((0,n.dD)("data-v-03d417f1"),t=t(),(0,n.Cn)(),t),w={class:"d-flex justify-content-between align-items-center mt-1"},P=["disabled"],y=_((()=>(0,n._)("span",{class:"material-symbols-outlined"}," check ",-1))),v=_((()=>(0,n._)("span",{class:"ms-1 bold-600"}," قبول ",-1))),x=[y,v],C=["disabled"],k=_((()=>(0,n._)("span",{class:"material-symbols-outlined"}," close ",-1))),B=_((()=>(0,n._)("span",{class:"ms-1 bold-600"}," رفض ",-1))),q=[k,B];function Z(t,e,s,i,o,a){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("button",{type:"button",class:"btn flex-grow-1 d-flex align-items-center justify-content-center text-success hover-bold",onClick:e[0]||(e[0]=(0,f.iM)(((...t)=>a.acceptPost&&a.acceptPost(...t)),["prevent"])),disabled:o.pendingRequest},x,8,P),(0,n._)("button",{type:"button",class:"btn flex-grow-1 d-flex align-items-center justify-content-center text-danger hover-bold",onClick:e[1]||(e[1]=(0,f.iM)(((...t)=>a.declinePost&&a.declinePost(...t)),["prevent"])),disabled:o.pendingRequest},q,8,C)])}s(70560);var R=s(8209),j={name:"AcceptReject",inject:{post:{required:!0},postAction:{default:()=>{}}},data(){return{pendingRequest:!1}},methods:{async acceptPost(){if(this.pendingRequest)return;const t=this.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-danger btn-lg ms-2"},buttonsStyling:!1});t.fire({title:"هل أنت متأكد؟",text:"هل تريد قبول هذا المنشور؟",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم!",cancelButtonText:"تراجع",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((async t=>{if(t.isConfirmed){this.pendingRequest=!0;try{await l.Z.acceptPost(this.post.id),this.postAction(this.post.id),R.Z.handleSuccessSwal("تم قبول المنشور بنجاح"),setTimeout((()=>this.goBack()),1800)}catch(e){R.Z.handleErrorSwal("حدث خطأ أثناء القبول, يرجى المحاولة مرة أخرى!")}finally{this.pendingRequest=!1}}}))},async declinePost(){if(this.pendingRequest)return;const t=this.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-danger btn-lg ms-2"},buttonsStyling:!1});t.fire({title:"هل أنت متأكد؟",text:"هل تريد رفض هذا المنشور؟",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم!",cancelButtonText:"تراجع",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((async t=>{if(t.isConfirmed){this.pendingRequest=!0;try{await l.Z.declinePost(this.post.id),this.postAction(this.post.id),R.Z.handleSuccessSwal("تم رفض المنشور بنجاح"),setTimeout((()=>this.goBack()),1800)}catch(e){R.Z.handleErrorSwal("حدث خطأ أثناء الرفض, يرجى المحاولة مرة أخرى!")}finally{this.pendingRequest=!1}}}))},goBack(){this.$route.params.post_id&&this.$router.push({name:"osboha.pendingPosts",params:{timeline_id:this.$route.params.timeline_id}})}}},A=s(83744);const S=(0,A.Z)(j,[["render",Z],["__scopeId","data-v-03d417f1"]]);var $=S,D=s(11035),T={name:"PendingPost",components:{PostHeader:g.Z,PostBody:b.Z,PostMedia:D.Z,AcceptReject:$},provide(){return{post:this.post}},props:{post:{type:Object,required:!0}}};const O=(0,A.Z)(T,[["render",h]]);var W=O,z={name:"PendingPostsView",components:{PendingPost:W},provide(){return{postAction:this.postAction}},data(){return{posts:[],page:1,totalPages:1,loading:!1}},created(){this.loadPosts()},watch:{$route(t,e){this.loadPosts()}},methods:{async loadPosts(){var t;if(this.loading)return;this.loading=!0;const e=await l.Z.getPendingPosts(this.$route.params.timeline_id,null!==(t=this.$route.params.post_id)&&void 0!==t?t:"");this.posts=e.data?e.data.posts:[],this.loading=!1},postAction(t){this.posts=this.posts.filter((e=>e.id!==t))}}};const M=(0,A.Z)(z,[["render",d]]);var H=M}}]);
//# sourceMappingURL=9096.eb0d516d.js.map