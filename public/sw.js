if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let c={};const r=e=>s(e,t),d={module:{uri:t},exports:c,require:r};a[t]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/UNDANGAN-GRADUATION-2024.pdf",revision:"7af10e2b58649ba67300b499da0bfc7c"},{url:"/_next/static/chunks/173-b52b7a02e85614b9.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/190-a9a2c76b95577202.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/231-bfab6aeaf4690caa.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/354-9cfd621ba18fec94.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/39aecf79-cdb639169b71c92f.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/41ade5dc-00b3355356d4d9a6.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/446-8fafb2439706f66a.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/527-055057fb70f03253.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/808-72fea4ae4fc424b7.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/9081a741-16ff97381b21656c.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/_not-found/page-0fb8fb56a9e87382.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/contact/page-dcfa3e064dd6c288.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/gallery/page-972afee33da31d78.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/graduation/page-101dd1c57c7a77cd.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/layout-590023c27c19718c.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/page-fef80f31e3c832c3.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/the-fam/%5Bid%5D/page-f24aefe85b2d37c7.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/the-fam/page-cdc52932779e1bde.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/app/the-team/page-458abf0854aca842.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/fd9d1056-b15c156d800dba83.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/main-app-73df896da314ccd0.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/main-c563b00cce9314be.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/reactPlayerDailyMotion.eab7e81d1700c7df.js",revision:"eab7e81d1700c7df"},{url:"/_next/static/chunks/reactPlayerFacebook.76b812a41626f05a.js",revision:"76b812a41626f05a"},{url:"/_next/static/chunks/reactPlayerFilePlayer.e9d0f21a6763aee1.js",revision:"e9d0f21a6763aee1"},{url:"/_next/static/chunks/reactPlayerKaltura.d541e7ebd0134de6.js",revision:"d541e7ebd0134de6"},{url:"/_next/static/chunks/reactPlayerMixcloud.a14ae1a67635d054.js",revision:"a14ae1a67635d054"},{url:"/_next/static/chunks/reactPlayerMux.77d2a14d1b4ac1e1.js",revision:"77d2a14d1b4ac1e1"},{url:"/_next/static/chunks/reactPlayerPreview.e0c281c9ca8c1fc4.js",revision:"e0c281c9ca8c1fc4"},{url:"/_next/static/chunks/reactPlayerSoundCloud.8346653d519ea407.js",revision:"8346653d519ea407"},{url:"/_next/static/chunks/reactPlayerStreamable.c7d97bb976867f9e.js",revision:"c7d97bb976867f9e"},{url:"/_next/static/chunks/reactPlayerTwitch.e59659c9577d30ca.js",revision:"e59659c9577d30ca"},{url:"/_next/static/chunks/reactPlayerVidyard.eac5620fe07de0dc.js",revision:"eac5620fe07de0dc"},{url:"/_next/static/chunks/reactPlayerVimeo.bc04a0a958879706.js",revision:"bc04a0a958879706"},{url:"/_next/static/chunks/reactPlayerWistia.072f2d5ee09e5027.js",revision:"072f2d5ee09e5027"},{url:"/_next/static/chunks/reactPlayerYouTube.58d1641600ffadff.js",revision:"58d1641600ffadff"},{url:"/_next/static/chunks/webpack-96e5f203bddfa145.js",revision:"yXETzQtxKiLmnXuW8oajd"},{url:"/_next/static/css/33d8e9d87b9dcc50.css",revision:"33d8e9d87b9dcc50"},{url:"/_next/static/css/94ef60fc9d1e4ad5.css",revision:"94ef60fc9d1e4ad5"},{url:"/_next/static/css/9ca6b6059e60be4b.css",revision:"9ca6b6059e60be4b"},{url:"/_next/static/media/086a70ddba625929-s.p.woff2",revision:"b94bd658459625ee92cffaf00bb38548"},{url:"/_next/static/media/2d141e1a38819612-s.p.woff2",revision:"acb6ad8efbc88ce55fcc0639a5d0a211"},{url:"/_next/static/media/62328fecf9e80426-s.woff2",revision:"138c8f78129c50d2783bf0fe261d32af"},{url:"/_next/static/media/c7eb187887c48af6-s.woff2",revision:"361fa9642b5371651338f1af9f725f7e"},{url:"/_next/static/yXETzQtxKiLmnXuW8oajd/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/yXETzQtxKiLmnXuW8oajd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/elements/the-fam/1.png",revision:"c8b40ec5a48463827642cd41e68d8f1d"},{url:"/assets/elements/the-fam/2.png",revision:"affa8800aa5c30026625cc48d6309478"},{url:"/assets/elements/the-fam/3.png",revision:"a9726899fb3364939ffdd419601a088f"},{url:"/assets/elements/the-fam/4.png",revision:"3d79ad8fc7ab2cdd4d8f6d97a8ac71c7"},{url:"/assets/elements/the-fam/5.png",revision:"b7a314cfbda5f293e4578bd1b95fb310"},{url:"/assets/elements/the-fam/6.png",revision:"547a5c175f9193bcd87b11f12b04b571"},{url:"/assets/images/gallery/black-white/1.jpg",revision:"31a4c2cc9fbc7b6bc2cd8b6e3e5ec88b"},{url:"/assets/images/gallery/black-white/2.jpg",revision:"718d5c366b4ef79eb6a61242fa4d3cb2"},{url:"/assets/images/gallery/black-white/3.jpg",revision:"0fc78568a554d9eff1f788e0fc0ccdf1"},{url:"/assets/images/gallery/black-white/4.jpg",revision:"d64835d9fb9dbbafa0aca0bad3abc9f3"},{url:"/assets/images/gallery/black-white/5.jpg",revision:"2e688fff913f6eccd582a6887c94a868"},{url:"/assets/images/gallery/fotbar-angkatan/1.JPG",revision:"cff0884df899c52003b4da9ea85befb0"},{url:"/assets/images/gallery/fotbar-angkatan/10.jpg",revision:"4dcee14fbb2c601c0e10ade968d6d7d1"},{url:"/assets/images/gallery/fotbar-angkatan/11.jpg",revision:"dca437e34d37ba4abf81389bea0ad11d"},{url:"/assets/images/gallery/fotbar-angkatan/12.jpg",revision:"6a6812b7ba1078a7ebe7b7232cfb0edb"},{url:"/assets/images/gallery/fotbar-angkatan/2.JPG",revision:"3b7f6a1a81173585194f5e6831d9ccd6"},{url:"/assets/images/gallery/fotbar-angkatan/3.JPG",revision:"6fedb57b8cb6f464a5744d78107c4c2e"},{url:"/assets/images/gallery/fotbar-angkatan/4.JPG",revision:"c3fefc756d5341eb026f0eb73f3fe721"},{url:"/assets/images/gallery/fotbar-angkatan/5.JPG",revision:"adb4b88b20ce64d52a5a273976aa6f58"},{url:"/assets/images/gallery/fotbar-angkatan/6.JPG",revision:"4cf37b5e03423d2b035446df7c635c45"},{url:"/assets/images/gallery/fotbar-angkatan/7.jpg",revision:"7de67fd09585fbf7034b88711a6c722d"},{url:"/assets/images/gallery/fotbar-angkatan/8.jpg",revision:"9430dff0e1fc88bbeff58b2b725c4a65"},{url:"/assets/images/gallery/fotbar-angkatan/9.jpg",revision:"2829a111ed08dfe141264ef4a9935114"},{url:"/assets/images/gallery/fotbar-guru/1.jpg",revision:"f99eea9116765d72b5bfb7b969db56a3"},{url:"/assets/images/gallery/fotbar-guru/2.jpg",revision:"1d153f2055582af8f8b9373714cdfbcb"},{url:"/assets/images/gallery/fotbar-guru/3.jpg",revision:"856d1baab939a846e8d6ce86111f98ef"},{url:"/assets/images/gallery/fotbar-guru/4.jpg",revision:"eee16d357aabb18732303530c2653969"},{url:"/assets/images/gallery/random-kegiatan/1.jpg",revision:"63cf37a4a0e55a636e4795e106fa9562"},{url:"/assets/images/gallery/random-kegiatan/10.jpg",revision:"4802f5f5653999cfb8f095714fbe73d9"},{url:"/assets/images/gallery/random-kegiatan/2.jpg",revision:"c500ba51e91a5cbdabceb86fe62be6a5"},{url:"/assets/images/gallery/random-kegiatan/3.jpg",revision:"23cd4b24b71cd221f82d5d81520459e8"},{url:"/assets/images/gallery/random-kegiatan/4.jpg",revision:"dfa60c12d1c7f8b24910ce2ba5f8d56b"},{url:"/assets/images/gallery/random-kegiatan/5.jpg",revision:"7e1b374a1ab4e67b220d08be27224fd7"},{url:"/assets/images/gallery/random-kegiatan/6.jpg",revision:"0962d589f24852b68e5c74084161fc6b"},{url:"/assets/images/gallery/random-kegiatan/7.jpg",revision:"1edb3820ca64e8cf633e7cdb79308c30"},{url:"/assets/images/gallery/random-kegiatan/8.jpg",revision:"176ae62ba7157572f7a70be6766cfb10"},{url:"/assets/images/gallery/random-kegiatan/9.jpg",revision:"52da4a3e8d5821510b3372c6dc272f35"},{url:"/assets/images/hero-background.JPG",revision:"4dcee14fbb2c601c0e10ade968d6d7d1"},{url:"/assets/videos/gallery/dragonoir-gathering/1/video.mp4",revision:"36f89bad05822b98cdc8c32e5107b818"},{url:"/assets/videos/gallery/dragonoir-gathering/1/video_1.mp4",revision:"555f10e214050f96c53257137f0657b1"},{url:"/assets/videos/gallery/dragonoir-gathering/1/video_2.mp4",revision:"579222679b05ec14e79c22bfa903ce20"},{url:"/favicon.ico",revision:"c6a1b1fe3457c48547069dc324632803"},{url:"/graduation-image-2.jpg",revision:"026dda4c33d224265e12582243af7aa7"},{url:"/graduation-image-3.jpg",revision:"8b84917ab2d274d7469575cf8044bfd4"},{url:"/graduation-image.jpg",revision:"60863640736d222b96a22329e2bf7141"},{url:"/icon-192x192.png",revision:"0a045537fbb7e90c7e008ebd8d11f1f8"},{url:"/icon-256x256.png",revision:"7ce89181902f2f23a9363825a2a4eeaa"},{url:"/icon-384x384.png",revision:"e54df2d9f3bc13d4e2363f576504d548"},{url:"/icon-512x512.png",revision:"205d7692980c9c3c1cc00f6a68ff08b4"},{url:"/logo.png",revision:"c6a1b1fe3457c48547069dc324632803"},{url:"/manifest.json",revision:"f2c3e6567fdb29b4be3856b883705978"},{url:"/pfp/adam-averroes-jaslim.jpg",revision:"5380e471a26442e6f95c3aef7af61c9d"},{url:"/pfp/dimas-prasetyo.jpg",revision:"6540c33ea73db9e4bfb0ff9ed496faa4"},{url:"/pfp/fais-hamdani.jpg",revision:"f78b2033e483e0c0a93fe1ec19e41870"},{url:"/pfp/joseph-farrel.jpg",revision:"b8de4b5c577e473a1e3a070355322786"},{url:"/pfp/wishnutama-putera-ilham.jpg",revision:"ff368d973ec72d0cad562c8203fe1331"},{url:"/service-worker.js",revision:"001371f3521ed0d306a1ac7cb0637975"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
