if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const d=e=>s(e,t),r={module:{uri:t},exports:n,require:d};a[t]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Social/youtube.svg",revision:"e9bf6e6fc27d0c992506d118e0949ec8"},{url:"/_next/app-build-manifest.json",revision:"932760fe1bad36711f3335a0b2ee55bd"},{url:"/_next/static/chunks/166-f80381e1d6eac6a2.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/874-f4491ecd2a13541c.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/9081a741-80cea4d3de9402e0.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/935-e0ad2355054ded30.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/938-427427f53ea196dd.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/app/_not-found-b471248bda489014.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/app/blog/articles/%5Bslug%5D/page-0eab79007f2392f7.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/app/blog/page-ea47fc0a30e0aea9.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/app/connect/page-edd1e6e4e340432d.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/app/layout-7c2c033684e62016.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/app/page-ce4f9a6cfc27ef4c.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/app/work/page-733fb14e209b3054.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/fd9d1056-516b58327fb05db5.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/main-9d16bbd57b34e261.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/main-app-270a85698e88c8b9.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5ed97115687a5807.js",revision:"dZLO0TzFTCMvtrQdpShAX"},{url:"/_next/static/css/20fdd6e209510708.css",revision:"20fdd6e209510708"},{url:"/_next/static/dZLO0TzFTCMvtrQdpShAX/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/dZLO0TzFTCMvtrQdpShAX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/01b6d16db7cbd96b-s.woff2",revision:"aa5a44ef72b927d17eac76def8c255cf"},{url:"/_next/static/media/025c5221126e4e89-s.woff2",revision:"1d266eb6756cae89abcd598d56bb063e"},{url:"/_next/static/media/0e5e1c6a8db9e432-s.woff2",revision:"f201ef2b6f1307dd8b1ec0c0deffceea"},{url:"/_next/static/media/120a5a1920781bd0-s.p.woff2",revision:"8c4b05d4371467ba1d0bc60839c6dcb9"},{url:"/_next/static/media/2744aa005c8cf586-s.p.woff2",revision:"105daacb4bc4cf86575fb3136360ff4d"},{url:"/_next/static/media/28aa5118b38b86e4-s.woff2",revision:"db5317b009a0dedd66dab31d7889b5f3"},{url:"/_next/static/media/418bb9d724f84584-s.woff2",revision:"cc9da36658c97547be935851d9d315a8"},{url:"/_next/static/media/483de911b1a0d258-s.woff2",revision:"28502b06e67112e0bf77a784aee917d0"},{url:"/_next/static/media/5693677ef07d9b51-s.woff2",revision:"96b57d1ae0a86dcf7913589b27426343"},{url:"/_next/static/media/6194a65a1b989dc8-s.woff2",revision:"12f0db351de86c05551dfe886ab6ab55"},{url:"/_next/static/media/6a5d8dc148518b96-s.woff2",revision:"b8cd9bd4d2a44124d4f5a74f79bdc1d2"},{url:"/_next/static/media/6ebb97b5c9fa4e03-s.p.woff2",revision:"39aff03d2a35b1c80f210051f35d4b2b"},{url:"/_next/static/media/7a7012758df5a81e-s.woff2",revision:"26024640d95a44fd98f614d6f4372e4b"},{url:"/_next/static/media/7c16c8204ab29534-s.woff2",revision:"eac32b711872911e7e7c107eb7a7901a"},{url:"/_next/static/media/7f5a4bbe7ec7be95-s.p.woff2",revision:"f44317e60bd99ef9140e4156d3ee26db"},{url:"/_next/static/media/80b1a0e600ca6d83-s.woff2",revision:"584ea11fad4f10a879c8530e7575cbbf"},{url:"/_next/static/media/8720059dfa14a1fe-s.woff2",revision:"1254e937b1635a843bc7bdee51de2aeb"},{url:"/_next/static/media/98a28a5430a3cf7f-s.woff2",revision:"7dada9344a370f25dc1d3b7030da67b6"},{url:"/_next/static/media/b5c08a795ae281ca-s.woff2",revision:"5a3ac9809e02d838b15b80e557435268"},{url:"/_next/static/media/b9472d49e3bc18c3-s.woff2",revision:"8d5ccaf24e104a69a676ef5f4f2e95f2"},{url:"/_next/static/media/c898cbfd2f789a8c-s.woff2",revision:"5dcd52bbafd405373cb80552de5f5a96"},{url:"/_next/static/media/d0f96be320385a33-s.woff2",revision:"1a238bfef8b13573198b56363c3bbbb7"},{url:"/_next/static/media/d9e386ae70efc2f0-s.woff2",revision:"5e62d0433ab4fb48f80f72b6a41f07c2"},{url:"/_next/static/media/df2942b6de9d14b5-s.woff2",revision:"47e8ccc33b3dcfbe6d31914569515bf4"},{url:"/_next/static/media/e4f65e35dde2bee1-s.woff2",revision:"d3d2e988fd01f6b60121adc2cba7c541"},{url:"/_next/static/media/e7814bd1d06a39b6-s.woff2",revision:"ee93adb9ee2b722659c8ca1e26db0418"},{url:"/_next/static/media/f1df6186c8d69644-s.woff2",revision:"307c90aaa7d9c628155ee8cb913b8382"},{url:"/_next/static/media/f756da832d8c34d4-s.woff2",revision:"ef6b28a1181a73b788c8669d6ad9adc8"},{url:"/dev2.png",revision:"0eb74dfe49582e0141c3f965193fc804"},{url:"/gallery/2807774956161362974_46421251379.jpg",revision:"9067d21962bccd0e0ead158e7d9c4dde"},{url:"/gallery/2809879195872470808_46421251379.jpg",revision:"cfffcc66cc6d3935527d340021547621"},{url:"/gallery/2851692962791580854_46421251379.jpg",revision:"1299b49d3e9564b0a6997ed5dcda51d9"},{url:"/gallery/2941698281357395498_46421251379.jpg",revision:"5718437164ac0f992aefb8309c5c1fe8"},{url:"/gallery/2941698281399147572_46421251379.jpg",revision:"e71bc702ce2d0f24fc41c2a377bf8b01"},{url:"/gallery/3021788879237494548_46421251379.jpg",revision:"67d4d442142da26d7883a613d6c6ed6d"},{url:"/gallery/3196172944602390205_46421251379.jpg",revision:"9c1463179a46e28c6a0186086ecb0168"},{url:"/gallery/3220779333341435483_46421251379.jpg",revision:"1813699af0fa3318afadcec07c42d39e"},{url:"/icon/arrow.png",revision:"1c5e8f060fb90867c4019905fcd06ca3"},{url:"/icon/icons8-menu.gif",revision:"fb1ef27322bd5a53ba0c09729ccb9a01"},{url:"/loader.gif",revision:"0a8b9a3782f144e4720b8715b3ae5ebc"},{url:"/profile.jpeg",revision:"d435083bd634ac8a610ad75c68c903e8"},{url:"/robots.txt",revision:"fecdb645c0b98f31caac0b5a122528ee"},{url:"/sitemap-0.xml",revision:"a931dffeafb0b16cf525e121ef4bc558"},{url:"/sitemap.xml",revision:"14a3150c9c73cafbbc6f54f34153db1e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
