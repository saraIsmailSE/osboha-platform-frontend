if(!self.define){let l,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const l=document.createElement("script");l.src=i,l.onload=s,document.head.appendChild(l)}else l=i,importScripts(i),s()})).then((()=>{let l=s[i];if(!l)throw new Error(`Module ${i} didn’t register its module`);return l})));self.define=(n,r)=>{const u=l||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let e={};const o=l=>i(l,u),v={module:{uri:u},exports:e,require:o};s[u]=Promise.all(n.map((l=>v[l]||o(l)))).then((l=>(r(...l),e)))}}define(["./workbox-5b385ed2"],(function(l){"use strict";l.setCacheNameDetails({prefix:"Osboha180"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/css/1527.26ef4335.css",revision:null},{url:"/css/2020.aded94f2.css",revision:null},{url:"/css/2170.41ee576f.css",revision:null},{url:"/css/2240.7bb443d6.css",revision:null},{url:"/css/2303.210b3093.css",revision:null},{url:"/css/2384.0dd6f4c4.css",revision:null},{url:"/css/2612.d1fd40ad.css",revision:null},{url:"/css/3066.da4770e6.css",revision:null},{url:"/css/3138.c3b9dc94.css",revision:null},{url:"/css/3481.fa388098.css",revision:null},{url:"/css/3550.fc033391.css",revision:null},{url:"/css/3868.7ba3c3e6.css",revision:null},{url:"/css/4499.8a2a77f6.css",revision:null},{url:"/css/4538.3080a61a.css",revision:null},{url:"/css/455.6527503c.css",revision:null},{url:"/css/4608.f57ea955.css",revision:null},{url:"/css/5136.4ca474d1.css",revision:null},{url:"/css/5230.3d52302b.css",revision:null},{url:"/css/5508.a249414b.css",revision:null},{url:"/css/5616.9ee04b2e.css",revision:null},{url:"/css/5741.ee75a3cb.css",revision:null},{url:"/css/5754.91e966c2.css",revision:null},{url:"/css/657.f6038899.css",revision:null},{url:"/css/6850.8999847d.css",revision:null},{url:"/css/714.0593e096.css",revision:null},{url:"/css/7294.d1fd40ad.css",revision:null},{url:"/css/761.d1fd40ad.css",revision:null},{url:"/css/7720.187f8221.css",revision:null},{url:"/css/7934.bdf0aba2.css",revision:null},{url:"/css/801.abfd3ddc.css",revision:null},{url:"/css/8126.8999847d.css",revision:null},{url:"/css/8469.bc97aa41.css",revision:null},{url:"/css/890.ebd6b48d.css",revision:null},{url:"/css/8910.e73fb7a8.css",revision:null},{url:"/css/8990.99b68516.css",revision:null},{url:"/css/9096.c0837134.css",revision:null},{url:"/css/9241.99b68516.css",revision:null},{url:"/css/9379.e149b592.css",revision:null},{url:"/css/app.5b745d64.css",revision:null},{url:"/css/chunk-vendors.c569704c.css",revision:null},{url:"/img/1.7afa917d.png",revision:null},{url:"/img/1260x954-2.ecc01852.jpg",revision:null},{url:"/img/1260x954-3.12f5f0b4.jpg",revision:null},{url:"/img/1260x954.f14936d7.jpg",revision:null},{url:"/img/150x150-3.ab8f8b4c.jpg",revision:null},{url:"/img/1900-475.fec4b75c.jpg",revision:null},{url:"/img/2-900x900.bdd69630.jpg",revision:null},{url:"/img/2.7afa917d.png",revision:null},{url:"/img/200x200-book.5a0360f9.png",revision:null},{url:"/img/3.7afa917d.png",revision:null},{url:"/img/401.210e5cfc.png",revision:null},{url:"/img/404.51b567d5.png",revision:null},{url:"/img/42.d8992d66.png",revision:null},{url:"/img/500-server.49c4bc5e.png",revision:null},{url:"/img/600x600-2.fe4f8a8c.jpg",revision:null},{url:"/img/600x600.0909d72c.jpg",revision:null},{url:"/img/710-450-2.30b62736.jpg",revision:null},{url:"/img/710-450.256f276e.jpg",revision:null},{url:"/img/710-950.0061c5df.jpg",revision:null},{url:"/img/800x533-2.52ab6741.jpg",revision:null},{url:"/img/800x533.900a36a1.jpg",revision:null},{url:"/img/900x900.c787c84d.jpg",revision:null},{url:"/img/add-user.14c9ca49.gif",revision:null},{url:"/img/add-user.df7b2fcd.png",revision:null},{url:"/img/alertMsg.a9d62d53.jpg",revision:null},{url:"/img/applause.a96d6c84.gif",revision:null},{url:"/img/approve-post.13e0fb77.png",revision:null},{url:"/img/assign-administrator.46bdcb01.png",revision:null},{url:"/img/audit_timer.f220f728.gif",revision:null},{url:"/img/avatar-01.304828cc.jpg",revision:null},{url:"/img/avatar-04.f7603e1d.jpg",revision:null},{url:"/img/avatar-05.5d33d3c7.jpg",revision:null},{url:"/img/b66a01924d385d285f271054a82686ed.3f852117.jpg",revision:null},{url:"/img/bg.ba309077.jpg",revision:null},{url:"/img/book-banner-2.d7cc109e.png",revision:null},{url:"/img/book-banner.6a2a5a9c.png",revision:null},{url:"/img/book.a6c2938f.gif",revision:null},{url:"/img/bruce-mars.2a5b92f1.jpg",revision:null},{url:"/img/change-advising-team.ed9456fa.png",revision:null},{url:"/img/chart.d628d913.gif",revision:null},{url:"/img/chatBG.0c19ea5a.png",revision:null},{url:"/img/chatBG.c7d4d8d3.jpg",revision:null},{url:"/img/confirm_mail.5ae6eebd.png",revision:null},{url:"/img/current_book.4d2ae03c.png",revision:null},{url:"/img/dark-100.6d45ecf2.jpg",revision:null},{url:"/img/excluded-ambassador.14b725d2.png",revision:null},{url:"/img/forgot-password.f2bbd80d.png",revision:null},{url:"/img/know-about-osboha-0.e6562748.png",revision:null},{url:"/img/know-about-osboha-1.7615247c.png",revision:null},{url:"/img/know-about-osboha-2.efa03904.png",revision:null},{url:"/img/latest-announcement.25b756cd.png",revision:null},{url:"/img/left-timer.96b16054.png",revision:null},{url:"/img/loader-3.208ab985.gif",revision:null},{url:"/img/loader-dark.d0a0c446.png",revision:null},{url:"/img/loader.d0a0c446.png",revision:null},{url:"/img/login.9d4e8a60.png",revision:null},{url:"/img/logo-full.0748829a.png",revision:null},{url:"/img/logo-full2.0748829a.png",revision:null},{url:"/img/main_timer.460c34b9.gif",revision:null},{url:"/img/minus-circle.8b42e7f7.gif",revision:null},{url:"/img/modify_timer.624d83f0.gif",revision:null},{url:"/img/more_users.58a2ee71.png",revision:null},{url:"/img/no-entry.87f51e86.gif",revision:null},{url:"/img/no-friend-req.36ea3495.png",revision:null},{url:"/img/no-friends.2bab3c44.png",revision:null},{url:"/img/no-team.67c02d1a.png",revision:null},{url:"/img/p1.fb5a8f84.jpg",revision:null},{url:"/img/p2.65c5c7c4.jpg",revision:null},{url:"/img/person.3ba65e4e.gif",revision:null},{url:"/img/profile-bg.154b76eb.jpg",revision:null},{url:"/img/profile-bg2.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg3.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg4.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg5.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg6.4269bb1f.jpg",revision:null},{url:"/img/profile-bg7.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg8.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg9.04f5a0c3.jpg",revision:null},{url:"/img/profile-img.31f713f7.jpg",revision:null},{url:"/img/reader.b5157672.png",revision:null},{url:"/img/reading_list.1a92b0ea.png",revision:null},{url:"/img/request_amb.aa8e9207.png",revision:null},{url:"/img/reset-password.a4e75e8c.png",revision:null},{url:"/img/screen.a761ac6f.gif",revision:null},{url:"/img/signup.28672785.png",revision:null},{url:"/img/social-media.1d521c05.png",revision:null},{url:"/img/supervisors-swap.676723a2.png",revision:null},{url:"/img/team.77797c9b.png",revision:null},{url:"/img/thesis.c7da1f8b.gif",revision:null},{url:"/img/thumb-down.eb061721.gif",revision:null},{url:"/img/top-users.8a71392f.png",revision:null},{url:"/img/transfer-ambassador.5fd9129b.png",revision:null},{url:"/img/update-forms.03f6433b.png",revision:null},{url:"/img/update-profile-info.63fb2ea0.png",revision:null},{url:"/img/upgrade-user.6fc5a363.png",revision:null},{url:"/index.html",revision:"8717e53ae71a8de48fb51805652a28f4"},{url:"/js/1123.79f39c58.js",revision:null},{url:"/js/1191.806a5918.js",revision:null},{url:"/js/141.a2d23a18.js",revision:null},{url:"/js/1492.11bacfa7.js",revision:null},{url:"/js/1513.a6cf2e9a.js",revision:null},{url:"/js/1527.440c2a10.js",revision:null},{url:"/js/1568.89782f72.js",revision:null},{url:"/js/16.0c5903ec.js",revision:null},{url:"/js/1886.2ef27d80.js",revision:null},{url:"/js/1929.828c3a91.js",revision:null},{url:"/js/2005.c3159b11.js",revision:null},{url:"/js/2020.89de7e7a.js",revision:null},{url:"/js/2170.b547e8e0.js",revision:null},{url:"/js/2240.40db4961.js",revision:null},{url:"/js/2303.df4fc93e.js",revision:null},{url:"/js/2384.03d2ca35.js",revision:null},{url:"/js/2406.26c89fc3.js",revision:null},{url:"/js/2612.530065b9.js",revision:null},{url:"/js/2989.cbf831ef.js",revision:null},{url:"/js/3048.eb0fe50f.js",revision:null},{url:"/js/3066.06a77796.js",revision:null},{url:"/js/3138.3e825403.js",revision:null},{url:"/js/3166.6ebd4319.js",revision:null},{url:"/js/3210.da2b7e20.js",revision:null},{url:"/js/331.cf20cc7a.js",revision:null},{url:"/js/3334.ece900c2.js",revision:null},{url:"/js/3481.49d1ffdc.js",revision:null},{url:"/js/3550.db3a8285.js",revision:null},{url:"/js/3683.1f55ed88.js",revision:null},{url:"/js/3749.7368f502.js",revision:null},{url:"/js/3759.ef107b14.js",revision:null},{url:"/js/381.cd37d55e.js",revision:null},{url:"/js/3813.240457ba.js",revision:null},{url:"/js/3868.a25ce8b3.js",revision:null},{url:"/js/398.b4438f9f.js",revision:null},{url:"/js/4023.d57ef355.js",revision:null},{url:"/js/4499.8453c356.js",revision:null},{url:"/js/4538.59e21ba7.js",revision:null},{url:"/js/455.8ea11833.js",revision:null},{url:"/js/4608.38b13d55.js",revision:null},{url:"/js/464.b9ef2b4e.js",revision:null},{url:"/js/4809.e97aa40e.js",revision:null},{url:"/js/502.0aec62f3.js",revision:null},{url:"/js/513.0287901c.js",revision:null},{url:"/js/5136.95fc947d.js",revision:null},{url:"/js/5230.e4b4f860.js",revision:null},{url:"/js/5307.0f9f076e.js",revision:null},{url:"/js/5461.204b0fd7.js",revision:null},{url:"/js/5508.05f30c6e.js",revision:null},{url:"/js/5579.7095ef48.js",revision:null},{url:"/js/5616.d541d713.js",revision:null},{url:"/js/5647.9fe8a21f.js",revision:null},{url:"/js/5741.c7c29d36.js",revision:null},{url:"/js/5754.fedf466c.js",revision:null},{url:"/js/6045.7888bcb6.js",revision:null},{url:"/js/6195.bbd2879d.js",revision:null},{url:"/js/636.bb3453d8.js",revision:null},{url:"/js/64.3442a3ed.js",revision:null},{url:"/js/6443.a47a5c91.js",revision:null},{url:"/js/6492.e213cdf7.js",revision:null},{url:"/js/657.6e1f8c54.js",revision:null},{url:"/js/6600.8fb58166.js",revision:null},{url:"/js/6780.cff385ac.js",revision:null},{url:"/js/6850.82a3094f.js",revision:null},{url:"/js/714.df5abdf7.js",revision:null},{url:"/js/7294.45ef7764.js",revision:null},{url:"/js/7390.45f0df08.js",revision:null},{url:"/js/761.b5f9a926.js",revision:null},{url:"/js/7707.b89fc2e2.js",revision:null},{url:"/js/7720.33ae1d55.js",revision:null},{url:"/js/775.ad5f078c.js",revision:null},{url:"/js/7765.8c80ed52.js",revision:null},{url:"/js/7867.c2ef0d99.js",revision:null},{url:"/js/7934.cd2105f1.js",revision:null},{url:"/js/801.56c0085d.js",revision:null},{url:"/js/8048.539c985c.js",revision:null},{url:"/js/8126.36a1c85e.js",revision:null},{url:"/js/8176.74ff330f.js",revision:null},{url:"/js/8209.68425d41.js",revision:null},{url:"/js/8362.64212348.js",revision:null},{url:"/js/842.5d1a4a36.js",revision:null},{url:"/js/8466.37e8ad09.js",revision:null},{url:"/js/8469.637fbd83.js",revision:null},{url:"/js/8483.2e77a23e.js",revision:null},{url:"/js/8656.7173e3ce.js",revision:null},{url:"/js/867.d0b982e2.js",revision:null},{url:"/js/8704.25152ab4.js",revision:null},{url:"/js/8833.bc4960b6.js",revision:null},{url:"/js/890.ab7ccd75.js",revision:null},{url:"/js/8910.e251c8f5.js",revision:null},{url:"/js/8976.705b7f1e.js",revision:null},{url:"/js/8990.43ed47f1.js",revision:null},{url:"/js/9096.eb0d516d.js",revision:null},{url:"/js/9241.025fd805.js",revision:null},{url:"/js/9327.be4af4d8.js",revision:null},{url:"/js/9343.b670c087.js",revision:null},{url:"/js/9379.41959afa.js",revision:null},{url:"/js/9414.16d51e25.js",revision:null},{url:"/js/9577.59ed9e40.js",revision:null},{url:"/js/9591.11916c39.js",revision:null},{url:"/js/9786.86caacea.js",revision:null},{url:"/js/981.0d8d06b8.js",revision:null},{url:"/js/app.ee188651.js",revision:null},{url:"/js/chunk-vendors.08c6fad8.js",revision:null},{url:"/js/safari-nomodule-fix.js",revision:"cd7a34e714de94d5c29b8ac5acdde24b"},{url:"/manifest.json",revision:"2bc839d4c60060cfcfc8bb470de0b978"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
