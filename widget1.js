<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.strpst.com/assets/plugin-lib.js"></script>
    <style>html {
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, "Roboto", "Arial", sans-serif;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body,
ul,
li,
button {
  margin: 0;
  padding: 0;
}

.lottie-container,
.canvas-test-container {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
}

.username {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0px 6px 6px 0px;
  bottom: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
  font-size: 17px;
  font-weight: 500;
  left: 0;
  padding: 10px 20px;
  pointer-events: none;
  position: absolute;
  transform: translateX(-100%);
  transition: transform 0.35s;
}
@media screen and (min-width: 480px) {
  .username {
    border-radius: 0px 6px 6px 0px;
    bottom: 3%;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
    font-size: 22px;
    font-weight: 500;
    padding: 12px 22px;
  }
}
.username.username-color-chat-owner {
  color: #fff;
}
.username.username-color-admin {
  color: #69a8e0;
}
.username.username-color-guest {
  color: #b3b3b3;
}
.username.username-color-ex {
  color: #b3b3b3;
}
.username.username-color-league-default {
  color: #f8f8f8;
}
.username.username-color-league-blue {
  color: #69a8e0;
}
.username.username-color-league-ultimate {
  color: #e54500;
}
.username.username-color-league-grey {
  color: #9f9f9f;
}
.username.username-color-league-bronze {
  color: #de884a;
}
.username.username-color-league-silver {
  color: #c9e7fe;
}
.username.username-color-league-gold {
  color: #ffad22;
}
.username.username-color-league-diamond {
  color: #d424ff;
}
.username.username-color-league-royal {
  color: #ff1a1a;
}
.username.username-color-league-legend {
  color: #ff1a1a;
}
.username.visible {
  transform: translateX(0);
}
.username svg {
  display: none;
  height: 15px;
  margin-right: 5px;
  transform: translateY(2px);
  width: 23px;
}
@media screen and (min-width: 480px) {
  .username svg {
    height: 17px;
    transform: translateY(1px);
    width: 26px;
  }
}</style>
  </head>
  <body>
    <div class="canvas-test-container"></div>

    <div class="lottie-container">
      <!-- <canvas width="1024" height="576" id="skottie-canvas">Your browser does not support the canvas tag.</canvas> -->
    </div>
    <script>!function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},e.apply(this,arguments)},t=[{prices:["50","75","100","150","200"],defaultValue:"50"},{prices:["50","75","100","150","200"],defaultValue:"100"},{prices:["100","150","200","250","300","350","400"],defaultValue:"200"},{prices:["100","150","200","250","300","400","500","600"],defaultValue:"300"},{prices:["250","350","500","650","750","900","1000"],defaultValue:"500"},{prices:["500","700","800","1000","1250","1500","1750","2000"],defaultValue:"1000"},{prices:["500","1000","1500","2000","2500","3000","3500","4000"],defaultValue:"2000"}].map((function(e){return e})),a=[e(e({id:"hearts",label:"Love you"},t[1]),{image:"https://cdn.strpst.com/assets/reactions-plugin/hearts.png",animations:[{aspectRatio:4/3,path:"https://cdn.strpst.com/assets/reactions-plugin/hearts_4x3.json?v=10062021"},{aspectRatio:16/9,path:"https://cdn.strpst.com/assets/reactions-plugin/hearts_16x9.json?v=10062021"},{aspectRatio:9/16,path:"https://cdn.strpst.com/assets/reactions-plugin/hearts_9x16.json?v=10062021"}]}),e(e({id:"wow",label:"Wow"},t[1]),{image:"https://cdn.strpst.com/assets/reactions-plugin/wow.svg",animations:[{aspectRatio:4/3,path:"https://cdn.strpst.com/assets/reactions-plugin/wow_4x3.json?v=2"},{aspectRatio:16/9,path:"https://cdn.strpst.com/assets/reactions-plugin/wow_16x9.json?v=2"},{aspectRatio:9/16,path:"https://cdn.strpst.com/assets/reactions-plugin/wow_9x16.json?v=2"}]}),e(e({id:"rainbow",label:"Rainbow"},t[1]),{image:"https://cdn.strpst.com/assets/reactions-plugin/rainbow.png?v=08062021",animations:[{aspectRatio:4/3,path:"https://cdn.strpst.com/assets/reactions-plugin/rainbow_4x3.json?v=16062021"},{aspectRatio:16/9,path:"https://cdn.strpst.com/assets/reactions-plugin/rainbow_16x9.json?v=16062021"},{aspectRatio:9/16,path:"https://cdn.strpst.com/assets/reactions-plugin/rainbow_9x16.json?v=16062021"}]}),e(e({id:"lol",label:"Ha-ha-ha"},t[1]),{image:"https://cdn.strpst.com/assets/reactions-plugin/lol.png",animations:[{aspectRatio:4/3,path:"https://cdn.strpst.com/assets/reactions-plugin/lol_4x3.json?v=16062021"},{aspectRatio:16/9,path:"https://cdn.strpst.com/assets/reactions-plugin/lol_16x9.json?v=16062021"},{aspectRatio:9/16,path:"https://cdn.strpst.com/assets/reactions-plugin/lol_9x16.json?v=16062021"}]}),e(e({id:"flowers",label:"Flowers"},t[2]),{image:"https://cdn.strpst.com/assets/reactions-plugin/flowers.png?v=08062021",animations:[{aspectRatio:4/3,path:"https://cdn.strpst.com/assets/reactions-plugin/flowers_4x3.json?v=16062021_2"},{aspectRatio:16/9,path:"https://cdn.strpst.com/assets/reactions-plugin/flowers_16x9.json?v=16062021_2"},{aspectRatio:9/16,path:"https://cdn.strpst.com/assets/reactions-plugin/flowers_9x16.json?v=16062021_2"}]}),e(e({id:"fire",label:"This is hot!"},t[3]),{image:"https://cdn.strpst.com/assets/reactions-plugin/fire.png",animations:[{aspectRatio:4/3,path:"https://cdn.strpst.com/assets/reactions-plugin/fire_4x3.json?v=03062021"},{aspectRatio:16/9,path:"https://cdn.strpst.com/assets/reactions-plugin/fire_16x9.json?v=03062021"},{aspectRatio:9/16,path:"https://cdn.strpst.com/assets/reactions-plugin/fire_9x16.json?v=03062021"}]}),e(e({id:"diamond",label:"Diamond"},t[6]),{image:"https://cdn.strpst.com/assets/reactions-plugin/diamond.png?v=15062021",animations:[{aspectRatio:4/3,path:"https://cdn.strpst.com/assets/reactions-plugin/diamond_4x3.json?v=16062021"},{aspectRatio:16/9,path:"https://cdn.strpst.com/assets/reactions-plugin/diamond_16x9.json?v=16062021"},{aspectRatio:9/16,path:"https://cdn.strpst.com/assets/reactions-plugin/diamond_9x16.json?v=16062021"}]})];function n(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}var i,r,o=function(e,t){return Math.floor(Math.random()*(e-t)+t)},s=function(e){e.style.background="#000";var t=e.getContext("2d"),a=t.createRadialGradient(e.width/2,3*e.height,e.height,e.width/2,e.height,4*e.height);a.addColorStop(0,"#32465E"),a.addColorStop(.4,"#000814"),a.addColorStop(.8,"#000814"),a.addColorStop(1,"#000"),t.fillStyle=a,t.fillRect(0,0,e.width,e.height)},c=function(e,t){for(var a=e.getContext("2d"),n=0;n<1e3;n++){if(t())return;var i=["rgba(23, 106, 182, ".concat(Math.random(),")"),"rgba(251, 155, 57, ".concat(Math.random(),")"),"rgba(255, 255, 255, ".concat(Math.random(),")")],r=o(0,e.width),s=o(0,e.height),c=15*Math.random(),l=i[o(0,i.length)];a.beginPath(),a.arc(r,s,c,0,2*Math.PI),a.shadowBlur=o(3,150),a.shadowColor=l,a.strokeStyle=l,a.fillStyle=l,a.fill(),a.stroke(),a.closePath()}},l=function(e){i||((i=document.createElement("div")).style.cssText="position: absolute; top: 0; left: 0; font-size: 20px; color: #000; background-color: #fff;z-index:999;",document.body.appendChild(i)),i.innerHTML="".concat(e,"ms")},u=function(e){var t=e.isCanvasVisible,a=e.isDurationVisible,n=e.maxFastDeviceDuration;r&&r.remove();var i=Date.now(),o=i+1*n,u=(r=function(e){var t=document.createElement("canvas");return t.width=1e3,t.height=1e3,t.style.cssText="position: absolute; top: 0; left: 0; width: 1000px; height: 1000px;",e||(t.style.opacity="0"),document.querySelector(".canvas-test-container").append(t),t}(t)).getContext("2d");s(r),c(r,(function(){return Date.now()>o})),u.clearRect(0,0,r.width,r.height);var d=Date.now()-i;if(a&&l(Date.now()>o?">".concat(d):d),t){var p=Date.now()+1*n;s(r),c(r,(function(){return Date.now()>p}))}else r.remove(),r=null;return d},d=function(e){var t=e.isCanvasVisible,a=e.isDurationVisible,n=e.maxFastDeviceDuration,i=e.retryCheckIntervalMinutes,r=function(e){try{return!!localStorage.getItem("reactionsPluginIsFastDevice_".concat(e))}catch(e){return!1}}(n),o=function(e,t){try{var a=localStorage.getItem("reactionsPluginIsSlowDevice_".concat(e));if(!a)return!1;if(Date.now()-Number(a)<6e4*t*.9)return!0}catch(e){}return!1}(n,i);if(r||o)return(t||a)&&u({isCanvasVisible:t,isDurationVisible:a,maxFastDeviceDuration:n}),!!r;var s=u({isCanvasVisible:t,isDurationVisible:a,maxFastDeviceDuration:n})<=n;return s?function(e){try{localStorage.setItem("reactionsPluginIsFastDevice_".concat(e),"true")}catch(e){}}(n):function(e){try{localStorage.setItem("reactionsPluginIsSlowDevice_".concat(e),String(Date.now()))}catch(e){}}(n),s};function p(e,t){var a,n;return e?null!==(n=null===(a=t.settings.reactionPrices)||void 0===a?void 0:a[e.id])&&void 0!==n?n:e.defaultValue:""}function v(e,t){return!!t[e]}function f(){return document.documentElement.clientWidth/document.documentElement.clientHeight}function h(e,t){var a=t[e],n=f();return a.animations.reduce((function(e,t){var a=Math.abs(t.aspectRatio-n);return(!e.animation||a<e.aspectRatioDifference)&&(e.animation=t,e.aspectRatioDifference=a),e}),{animation:null,aspectRatioDifference:null}).animation}function m(e){return f()>e?"slice":"meet"}var g=function(){return a.some((function(e){return e.isSvgRenderer}))?"lottie.min.js":"lottie_canvas.min.js"},S=function(e){var t,a;if(!(null===(t=e.params.additionalData)||void 0===t?void 0:t.canvasTest.isEnabled)||e.params.additionalData.canvasTest.isAfterUserAgentTest){var n=navigator,i=n.platform,r=n.userAgent,o=n.hardwareConcurrency,s=n.deviceMemory,c=/^(Win32|Win64|MacIntel|MacPPC|Linux x86_64|Linux x86_32|Linux i686)/g.test(i);if(c){var l=/Safari/.test(r)&&!/Chrome/.test(r)&&!/CriOS/.test(r),u=/Macintosh/.test(r),p=s&&s>=8,v=o&&o>=4,f=/Trident\/7.0/.test(r)||/([MS]?IE) (\d+)\.(\d+)/g.test(r);if(l||u)return!0;if(f)return!1;if(p&&v)return!0}if(!c){var h=/(iPad)/.test(r)||/(iPad)/.test(i),m=/(Macintosh)/.test(r),g=/(iPhone|iPod)/.test(r)||/(iPhone|iPod)/.test(i);if(h||m||g)return!0;var S={pixel30OrHigher:/pixel [3-9]/i,honor30ProPlus:/EBG-AN10/i,honorV30Pro:/OXF-AN10/i,huaweiP30Pro:/VOG-L29|VOG-L09|VOG-L04|VOG-AL00|VOG-AL10|VOG-TL00|; p ?30 ?pro/i,huaweiP40:/;( huawei)? p40( ?pro)?\b|ELS-AN00|ELS-TN00|ELS-NX9|ELS-N04|ELS-N39|ELS-AN10|ANA-AN00|ANA-TN00|ANA-NX9|ANA-LX4|ANA-AL00/i,huaweiMate40Pro:/mate ?40 ?pro|NOH-AL00|NOH-NX9|NOH-AN00|NOP-AN00/i,surfaceDuo:/Surface Duo/i,motorolaRazr5G:/motorola razr 5g|motorola razr \(2020\)/i,reno3ProOrHigher:/; reno ?[3-9] ?pro|CPH2009|PCRM00|PCRT00|CPH2035|CPH2037|CPH2036|PDRM00|PDRT00|PDNM00|PDNT00|CPH2089|CPH2109|PDSM00|PDST00|CPH2201|PENM00|PEPM00|CPH2249/i,galaxyA71:/; SM-(A71\b|A71[^\d]|A715|A716)/i,galaxyS9Plus:/SM-G965|SCV39|SC-03K/i,galaxyS10:/SCV41|SM-G770|SM-G97[0357]/i,galaxyNote10:/SCV45|SM-N770|SM-N97[0156]/i,galaxyS20OrS21:/SM-G78[01]|SM-G98[01568]|SM-G99[0168]|SC-51A/i,galaxyNote20:/SM-N98[0156]/i,galaxyFold1OrHigher:/SM-F9\d\d/i,galaxyFlip:/SM-F70[07]/i,highEndGalaxy:/SM-G7[7-9]\d|SM-G9[6-9]\d|SM-F7\d\d|SM-N7[7-9]\d|SM-N9[7-9]\d/i,highEndXperia:/XQ-AT\d\d|XQ-AS\d\d|XQBC\d\d|XQBQ\d\d|SO-52A|SO-51B|SOG03|A101SO/i,hiEndMi:/; mi \d\d/i,pocoF2ProOrHight:/poco f[2-9] pro/i,zteRedMagic5Or6:/NX6[56]9J/i,galaxyTabS5e:/SM-T720|SM-T725/i,galaxyA40:/SM-A405/i,xperiaXZ1:/G8341|G8342|F8341|F8342|G8343|SOV36|SO-01K|G8441|D5503|SO-02K/i,xperia1:/J8110|J8170|J9110|J9150|SOV40|SO-03L|XQ-AT51|XQ-AT52|XQ-?BC62|XQ-?BC52V|SO-51B|SOG03|A101SO|XQ-BC62|XQ-BC72|XQ-BC52|XQ-BC01|XQ-BC11|XQ-BC21/i,galaxyTabS6:/SM-P610N|SM-P615|SM-P610|SM-T860|SM-T865|SM-T866N/i,galaxyTabS7:/SM-T730|SM-T736B|SM-T870|SM-T875|SM-T876B|SM-T970|SM-T976B/i};for(var M in S)if(S[M].test(r))return!0}}if(null===(a=e.params.additionalData)||void 0===a?void 0:a.canvasTest.isEnabled){var A=e.params.additionalData.canvasTest,D=A.isCanvasVisible,x=A.isDurationVisible,w=A.maxFastDeviceDuration,P=A.retryCheckIntervalMinutes;return d({isCanvasVisible:D,isDurationVisible:x,maxFastDeviceDuration:w,retryCheckIntervalMinutes:P})}return!1};Element.prototype.remove||(Element.prototype.remove=function(){var e;null===(e=this.parentNode)||void 0===e||e.removeChild(this)});function M(e){var t=function(e,t){return e.filter((function(e){return-1!==e.prices.indexOf(p(e,t))}))}(a,e),n=function(e){return e.reduce((function(e,t){return e[t.id]=t,e}),{})}(t);return{activeReactions:t,activeReactionsMap:n,isActiveAnimations:!1,animationsQueue:[]}}stripchatPlugin.onAppInit((function(e){var t,a=!S(e);e.callMethod("setPluginMenuVisibility",{isVisible:!a});var i=M(e),r={lottieContainer:document.querySelector(".lottie-container")},o={renderLottiePrefetchLink:function(){var e=n('<link rel="prefetch" as="script" href="https://cdn.strpst.com/assets/reactions-plugin/'.concat(g(),'" />'));document.head.appendChild(e)},updateAnimationPrefetchLinks:function(){i.activeReactions.forEach((function(e){var t="reaction-prefetch-".concat(e.id),a=h(e.id,i.activeReactionsMap).path,r=document.getElementById(t);if(!r||r.getAttribute("href")!==a){r&&r.remove();var o=n('<link rel="prefetch" as="fetch" href="'.concat(a,'" id="').concat(t,'" />'));document.head.appendChild(o)}}))},renderLottieScript:function(){var e=document.createElement("script");return e.src="https://cdn.strpst.com/assets/reactions-plugin/".concat(g()),document.head.appendChild(e),e},renderUsername:function(t,a,i){var r=function(e,t){if(e.params.modelId===t.id)return"chat-owner";var a=t.userRanking,n=t.hasAdminBadge,i=t.isGuest;return n?"admin":i?"guest":a?a.isEx?"ex":"league-".concat(a.league):"league-default"}(e,t),o=n('\n        <div class="username username-color-'.concat(r,'">\n          ').concat("chat-owner"===r?'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 13"><path d="M19.2 1l-4.5 2.6v-1a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v7.9c0 1 1 2 2 2h10a2 2 0 0 0 2-2v-1l4.5 2.6V.9z" fill="currentColor"/></svg>':"","\n          ").concat(t.username,"\n        </div>\n      ")),s=requestAnimationFrame((function(){document.body.appendChild(o),requestAnimationFrame((function(){o.classList.add("visible"),setTimeout((function(){o.classList.remove("visible"),setTimeout((function(){return o.remove()}),1e3)}),a-1e3)}))}));i.unshift((function(){return cancelAnimationFrame(s)}))},renderReactionMessage:function(t){var n=t.userData,r=i.activeReactionsMap[t.reactionId],o=a||function(e){return Boolean(e.params.currentUser&&e.params.currentUser.id===e.params.modelId)}(e)?"%pluginNameText%":"%pluginName%";e.callMethod("sendChatMessage",{message:"%username% sent {#accent}".concat(r.label,"{/accent} from ").concat(o),userData:n,additionalData:{reactionId:r.id}})},renderLottie:function(t,n){if(a){return o.renderReactionMessage(t),void setTimeout(n,5e3)}var s=t.reactionId,c=t.userData,l=i.activeReactionsMap[s],u=h(s,i.activeReactionsMap);if("undefined"!=typeof lottie)p();else{var d=o.renderLottieScript();d.onload=function(){lottie.setQuality(50),p()},d.onerror=function(){d.remove(),n()}}function p(){var a=[function(){return lottie.destroy()},n],i=function(){a.forEach((function(e){return e()})),a=[]},s=lottie.loadAnimation({container:r.lottieContainer,renderer:l.isSvgRenderer?"svg":"canvas",loop:!1,autoplay:!0,path:u.path,rendererSettings:{progressiveLoad:!0,hideOnTransparent:!0,preserveAspectRatio:"xMinYMax ".concat(m(u.aspectRatio)),dpr:1}});a.unshift(s.addEventListener("data_ready",(function(){var n=1e3*s.getDuration();o.renderReactionMessage(t),e.callMethod("requestActivity",{activityTimeInMilliseconds:n}),o.renderUsername(c,4e3,a);var i=function(){s.renderer.renderConfig.preserveAspectRatio="xMinYMax ".concat(m(u.aspectRatio)),s.resize()};window.addEventListener("resize",i),a.unshift((function(){return window.removeEventListener("resize",i)}))}))),a.unshift(s.addEventListener("DOMLoaded",(function(){var e=Date.now(),t=1e3*s.getDuration(),n=window.setTimeout(i,t);a.unshift((function(){return clearTimeout(n)}));var r=function(){"hidden"===document.visibilityState||"unloaded"===document.visibilityState?s.pause():requestAnimationFrame((function(){return s.goToAndPlay(Date.now()-e)}))};document.addEventListener("visibilitychange",r),a.unshift((function(){return document.removeEventListener("visibilitychange",r)}))}))),a.unshift(s.addEventListener("data_failed",i)),a.unshift(s.addEventListener("complete",i))}},renderLottieOrQueue:function(t){i.isActiveAnimations?i.animationsQueue.push(t):(i.isActiveAnimations=!0,e.callMethod("broadcastToLocalPluginInstances",{type:"isActiveAnimationsChange",isActiveAnimations:!0}),o.renderLottie(t,(function t(){i.animationsQueue.length?o.renderLottie(i.animationsQueue.shift(),t):(i.isActiveAnimations=!1,e.callMethod("broadcastToLocalPluginInstances",{type:"isActiveAnimationsChange",isActiveAnimations:!1}))})))}},s=function(){o.renderLottiePrefetchLink(),o.updateAnimationPrefetchLinks(),window.addEventListener("resize",o.updateAnimationPrefetchLinks)};if(a){if(null===(t=e.params.additionalData)||void 0===t?void 0:t.canvasTest.isEnabled){var c=6e4*e.params.additionalData.canvasTest.retryCheckIntervalMinutes;setTimeout((function t(){(a=!S(e))?setTimeout(t,c):(e.callMethod("setPluginMenuVisibility",{isVisible:!0}),s())}),c)}}else s();e.addListener("remotePluginMessageBroadcast",(function(t){var a=function(e,t,a){return"reaction"===(null==e?void 0:e.type)&&e.userData&&e.userData.id===t.params.modelId&&v(e.reactionId,a)}(t,e,i.activeReactionsMap);a&&o.renderLottieOrQueue({userData:t.userData,reactionId:t.reactionId})})),e.addListener("currentPluginTipped",(function(t){var a=function(e,t,a){return(null==e?void 0:e.userData)&&e.tipData&&v(e.tipData.reactionId,t)&&p(t[e.tipData.reactionId],a)==e.amount}(t,i.activeReactionsMap,e);a&&o.renderLottieOrQueue({userData:t.userData,reactionId:t.tipData.reactionId})}))}))}();
</script>
  </body>
</html>
