import{r as v,j as P,R as Co,W as xe,c as Ze,_ as j}from"./index-CpWP6ay7.js";let or={data:""},nr=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||or,rr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ir=/\/\*[^]*?\*\/|  +/g,to=/\n+/g,ge=(e,t)=>{let o="",n="",i="";for(let r in e){let a=e[r];r[0]=="@"?r[1]=="i"?o=r+" "+a+";":n+=r[1]=="f"?ge(a,r):r+"{"+ge(a,r[1]=="k"?"":t)+"}":typeof a=="object"?n+=ge(a,t?t.replace(/([^,])+/g,s=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):r):a!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ge.p?ge.p(r,a):r+":"+a+";")}return o+(t&&i?t+"{"+i+"}":i)+n},me={},ko=e=>{if(typeof e=="object"){let t="";for(let o in e)t+=o+ko(e[o]);return t}return e},ar=(e,t,o,n,i)=>{let r=ko(e),a=me[r]||(me[r]=(l=>{let d=0,b=11;for(;d<l.length;)b=101*b+l.charCodeAt(d++)>>>0;return"go"+b})(r));if(!me[a]){let l=r!==e?e:(d=>{let b,f,c=[{}];for(;b=rr.exec(d.replace(ir,""));)b[4]?c.shift():b[3]?(f=b[3].replace(to," ").trim(),c.unshift(c[0][f]=c[0][f]||{})):c[0][b[1]]=b[2].replace(to," ").trim();return c[0]})(e);me[a]=ge(i?{["@keyframes "+a]:l}:l,o?"":"."+a)}let s=o&&me.g?me.g:null;return o&&(me.g=me[a]),((l,d,b,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=b?l+d.data:d.data+l)})(me[a],t,n,s),a},sr=(e,t,o)=>e.reduce((n,i,r)=>{let a=t[r];if(a&&a.call){let s=a(o),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;a=l?"."+l:s&&typeof s=="object"?s.props?"":ge(s,""):s===!1?"":s}return n+i+(a??"")},"");function ht(e){let t=this||{},o=e.call?e(t.p):e;return ar(o.unshift?o.raw?sr(o,[].slice.call(arguments,1),t.p):o.reduce((n,i)=>Object.assign(n,i&&i.call?i(t.p):i),{}):o,nr(t.target),t.g,t.o,t.k)}let Mo,Mt,Ot;ht.bind({g:1});let fe=ht.bind({k:1});function lr(e,t,o,n){ge.p=t,Mo=e,Mt=o,Ot=n}function be(e,t){let o=this||{};return function(){let n=arguments;function i(r,a){let s=Object.assign({},r),l=s.className||i.className;o.p=Object.assign({theme:Mt&&Mt()},s),o.o=/ *go\d+/.test(l),s.className=ht.apply(o,n)+(l?" "+l:"");let d=e;return e[0]&&(d=s.as||e,delete s.as),Ot&&d[0]&&Ot(s),Mo(d,s)}return t?t(i):i}}var cr=e=>typeof e=="function",at=(e,t)=>cr(e)?e(t):e,ur=(()=>{let e=0;return()=>(++e).toString()})(),Oo=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),dr=20,Lo=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,dr)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return Lo(e,{type:e.toasts.find(r=>r.id===o.id)?1:0,toast:o});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},it=[],Ee={toasts:[],pausedAt:void 0},Te=e=>{Ee=Lo(Ee,e),it.forEach(t=>{t(Ee)})},mr={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},hr=(e={})=>{let[t,o]=v.useState(Ee),n=v.useRef(Ee);v.useEffect(()=>(n.current!==Ee&&o(Ee),it.push(o),()=>{let r=it.indexOf(o);r>-1&&it.splice(r,1)}),[]);let i=t.toasts.map(r=>{var a,s,l;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((a=e[r.type])==null?void 0:a.removeDelay)||(e==null?void 0:e.removeDelay),duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||mr[r.type],style:{...e.style,...(l=e[r.type])==null?void 0:l.style,...r.style}}});return{...t,toasts:i}},fr=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||ur()}),Ke=e=>(t,o)=>{let n=fr(t,e,o);return Te({type:2,toast:n}),n.id},ee=(e,t)=>Ke("blank")(e,t);ee.error=Ke("error");ee.success=Ke("success");ee.loading=Ke("loading");ee.custom=Ke("custom");ee.dismiss=e=>{Te({type:3,toastId:e})};ee.remove=e=>Te({type:4,toastId:e});ee.promise=(e,t,o)=>{let n=ee.loading(t.loading,{...o,...o==null?void 0:o.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let r=t.success?at(t.success,i):void 0;return r?ee.success(r,{id:n,...o,...o==null?void 0:o.success}):ee.dismiss(n),i}).catch(i=>{let r=t.error?at(t.error,i):void 0;r?ee.error(r,{id:n,...o,...o==null?void 0:o.error}):ee.dismiss(n)}),e};var pr=(e,t)=>{Te({type:1,toast:{id:e,height:t}})},gr=()=>{Te({type:5,time:Date.now()})},He=new Map,yr=1e3,vr=(e,t=yr)=>{if(He.has(e))return;let o=setTimeout(()=>{He.delete(e),Te({type:4,toastId:e})},t);He.set(e,o)},br=e=>{let{toasts:t,pausedAt:o}=hr(e);v.useEffect(()=>{if(o)return;let r=Date.now(),a=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(r-s.createdAt);if(l<0){s.visible&&ee.dismiss(s.id);return}return setTimeout(()=>ee.dismiss(s.id),l)});return()=>{a.forEach(s=>s&&clearTimeout(s))}},[t,o]);let n=v.useCallback(()=>{o&&Te({type:6,time:Date.now()})},[o]),i=v.useCallback((r,a)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:d}=a||{},b=t.filter(p=>(p.position||d)===(r.position||d)&&p.height),f=b.findIndex(p=>p.id===r.id),c=b.filter((p,w)=>w<f&&p.visible).length;return b.filter(p=>p.visible).slice(...s?[c+1]:[0,c]).reduce((p,w)=>p+(w.height||0)+l,0)},[t]);return v.useEffect(()=>{t.forEach(r=>{if(r.dismissed)vr(r.id,r.removeDelay);else{let a=He.get(r.id);a&&(clearTimeout(a),He.delete(r.id))}})},[t]),{toasts:t,handlers:{updateHeight:pr,startPause:gr,endPause:n,calculateOffset:i}}},wr=fe`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Er=fe`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_r=fe`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xr=be("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Er} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${_r} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Sr=fe`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ar=be("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Sr} 1s linear infinite;
`,Rr=fe`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Tr=fe`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ir=be("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Rr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Tr} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Pr=be("div")`
  position: absolute;
`,Dr=be("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,jr=fe`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Cr=be("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${jr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,kr=({toast:e})=>{let{icon:t,type:o,iconTheme:n}=e;return t!==void 0?typeof t=="string"?v.createElement(Cr,null,t):t:o==="blank"?null:v.createElement(Dr,null,v.createElement(Ar,{...n}),o!=="loading"&&v.createElement(Pr,null,o==="error"?v.createElement(xr,{...n}):v.createElement(Ir,{...n})))},Mr=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Or=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Lr="0%{opacity:0;} 100%{opacity:1;}",Nr="0%{opacity:1;} 100%{opacity:0;}",zr=be("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Vr=be("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$r=(e,t)=>{let o=e.includes("top")?1:-1,[n,i]=Oo()?[Lr,Nr]:[Mr(o),Or(o)];return{animation:t?`${fe(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${fe(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Br=v.memo(({toast:e,position:t,style:o,children:n})=>{let i=e.height?$r(e.position||t||"top-center",e.visible):{opacity:0},r=v.createElement(kr,{toast:e}),a=v.createElement(Vr,{...e.ariaProps},at(e.message,e));return v.createElement(zr,{className:e.className,style:{...i,...o,...e.style}},typeof n=="function"?n({icon:r,message:a}):v.createElement(v.Fragment,null,r,a))});lr(v.createElement);var Ur=({id:e,className:t,style:o,onHeightUpdate:n,children:i})=>{let r=v.useCallback(a=>{if(a){let s=()=>{let l=a.getBoundingClientRect().height;n(e,l)};s(),new MutationObserver(s).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return v.createElement("div",{ref:r,className:t,style:o},i)},Fr=(e,t)=>{let o=e.includes("top"),n=o?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Oo()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...n,...i}},Hr=ht`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,et=16,Gr=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:n,children:i,containerStyle:r,containerClassName:a})=>{let{toasts:s,handlers:l}=br(o);return v.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:et,left:et,right:et,bottom:et,pointerEvents:"none",...r},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(d=>{let b=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:n,defaultPosition:t}),c=Fr(b,f);return v.createElement(Ur,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Hr:"",style:c},d.type==="custom"?at(d.message,d):i?i(d):v.createElement(Br,{toast:d,position:b}))}))},oo=ee;const No="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%2324292f'/%3e%3c/svg%3e",Wr="/assets/logo.svg";/**
  * @pigment-css/react v0.0.30
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */var qr=Object.defineProperty,Yr=Object.defineProperties,Xr=Object.getOwnPropertyDescriptors,st=Object.getOwnPropertySymbols,zo=Object.prototype.hasOwnProperty,Vo=Object.prototype.propertyIsEnumerable,no=(e,t,o)=>t in e?qr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,de=(e,t)=>{for(var o in t||(t={}))zo.call(t,o)&&no(e,o,t[o]);if(st)for(var o of st(t))Vo.call(t,o)&&no(e,o,t[o]);return e},$o=(e,t)=>Yr(e,Xr(t)),Bo=(e,t)=>{var o={};for(var n in e)zo.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&st)for(var n of st(e))t.indexOf(n)<0&&Vo.call(e,n)&&(o[n]=e[n]);return o};function Uo(e){var t,o,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(o=Uo(e[t]))&&(n&&(n+=" "),n+=o)}else for(o in e)e[o]&&(n&&(n+=" "),n+=o);return n}function Kr(){for(var e,t,o=0,n="",i=arguments.length;o<i;o++)(e=arguments[o])&&(t=Uo(e))&&(n&&(n+=" "),n+=t);return n}function Jr(e){var t=Object.create(null);return function(o){return t[o]===void 0&&(t[o]=e(o)),t[o]}}var Qr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Zr=Jr(function(e){return Qr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});/**
  * @pigment-css/react v0.0.30
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */function ei(e,t){var o=e,{ownerState:n={}}=o,i=Bo(o,["ownerState"]);return t.filter(({props:a})=>typeof a=="function"?a($o(de(de({},i),n),{ownerState:n})):Object.entries(a).every(([s,l])=>n[s]===l||i[s]===l)).map(({className:a})=>a)}function ro(e){return typeof e=="string"&&e.charCodeAt(0)>96}var Lt=e=>e!=="as"&&e!=="ownerState",io=e=>Lt(e)&&e!=="classes";function Q(e,t={}){const{name:o,slot:n,shouldForwardProp:i}=t;let r=i;i||(ro(e)?r=Zr:n==="Root"||n==="root"?r=io:r=Lt);let a=!r("as");typeof e!="string"&&e.__styled_by_pigment_css&&(a=!1);function s(l={}){const{displayName:d,classes:b=[],vars:f={},variants:c=[]}=l,p=v.forwardRef(function(O,C){const z=O,{className:G,sx:q,style:_,ownerState:A}=z,u=Bo(z,["className","sx","style","ownerState"]),x=a&&O.as||e,R=Object.entries(f).reduce((h,[$,[M,E]])=>{const D=M(O);return typeof D>"u"||(typeof D=="string"||E?h[`--${$}`]=D:h[`--${$}`]=`${D}px`),h},{}),m=Kr(b,G,ei(O,c));O.as&&!i&&(ro(x)||(n==="Root"||n==="root"?r=io:r=Lt));const y={};for(const h in u)a&&h==="as"||(r(h)||!a&&h==="as")&&(y[h]=u[h]);return P.jsx(x,$o(de(de({},y),x.__styled_by_pigment_css&&{ownerState:A}),{ref:C,className:m,style:de(de({},R),_)}))});let w=d;return!w&&o&&(w=`${o}${n?`-${n}`:""}`),p.displayName=`Styled(${w})`,p.__styled_by_pigment_css=!0,p}return s}/**
  * @pigment-css/react v0.0.30
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */function Nt(e,{className:t,style:o}){let n="",i={};function r(s){s&&(n+=`${typeof s=="string"?s:s.className} `,i=de(de({},i),s&&typeof s!="string"?s.vars:void 0))}Array.isArray(e)?e.forEach(s=>{r(s)}):r(e);const a={};return i&&Object.entries(i).forEach(([s,[l,d]])=>{typeof l=="string"||d?a[`--${s}`]=l:a[`--${s}`]=`${l}px`}),{className:`${n.trim()}${t?` ${t}`:""}`,style:de(de({},a),o)}}const{createElement:Le,createContext:ti,forwardRef:Fo,useCallback:oe,useContext:Ho,useEffect:Se,useImperativeHandle:Go,useLayoutEffect:oi,useMemo:ni,useRef:ne,useState:Me}=Co,ao=Co[`useId${Math.random()}`.slice(0,5)],ri=oi,ft=ti(null);ft.displayName="PanelGroupContext";const Ae=ri,ii=typeof ao=="function"?ao:()=>null;let ai=0;function Ut(e=null){const t=ii(),o=ne(e||t||null);return o.current===null&&(o.current=""+ai++),e??o.current}function Wo({children:e,className:t="",collapsedSize:o,collapsible:n,defaultSize:i,forwardedRef:r,id:a,maxSize:s,minSize:l,onCollapse:d,onExpand:b,onResize:f,order:c,style:p,tagName:w="div",...L}){const O=Ho(ft);if(O===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:C,expandPanel:z,getPanelSize:G,getPanelStyle:q,groupId:_,isPanelCollapsed:A,reevaluatePanelConstraints:u,registerPanel:x,resizePanel:R,unregisterPanel:m}=O,y=Ut(a),h=ne({callbacks:{onCollapse:d,onExpand:b,onResize:f},constraints:{collapsedSize:o,collapsible:n,defaultSize:i,maxSize:s,minSize:l},id:y,idIsFromProps:a!==void 0,order:c});ne({didLogMissingDefaultSizeWarning:!1}),Ae(()=>{const{callbacks:M,constraints:E}=h.current,D={...E};h.current.id=y,h.current.idIsFromProps=a!==void 0,h.current.order=c,M.onCollapse=d,M.onExpand=b,M.onResize=f,E.collapsedSize=o,E.collapsible=n,E.defaultSize=i,E.maxSize=s,E.minSize=l,(D.collapsedSize!==E.collapsedSize||D.collapsible!==E.collapsible||D.maxSize!==E.maxSize||D.minSize!==E.minSize)&&u(h.current,D)}),Ae(()=>{const M=h.current;return x(M),()=>{m(M)}},[c,y,x,m]),Go(r,()=>({collapse:()=>{C(h.current)},expand:M=>{z(h.current,M)},getId(){return y},getSize(){return G(h.current)},isCollapsed(){return A(h.current)},isExpanded(){return!A(h.current)},resize:M=>{R(h.current,M)}}),[C,z,G,A,y,R]);const $=q(h.current,i);return Le(w,{...L,children:e,className:t,id:a,style:{...$,...p},"data-panel":"","data-panel-collapsible":n||void 0,"data-panel-group-id":_,"data-panel-id":y,"data-panel-size":parseFloat(""+$.flexGrow).toFixed(1)})}const zt=Fo((e,t)=>Le(Wo,{...e,forwardedRef:t}));Wo.displayName="Panel";zt.displayName="forwardRef(Panel)";let Vt=null,_e=null;function si(e,t){if(t){const o=(t&Jo)!==0,n=(t&Qo)!==0,i=(t&Zo)!==0,r=(t&en)!==0;if(o)return i?"se-resize":r?"ne-resize":"e-resize";if(n)return i?"sw-resize":r?"nw-resize":"w-resize";if(i)return"s-resize";if(r)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function li(){_e!==null&&(document.head.removeChild(_e),Vt=null,_e=null)}function wt(e,t){const o=si(e,t);Vt!==o&&(Vt=o,_e===null&&(_e=document.createElement("style"),document.head.appendChild(_e)),_e.innerHTML=`*{cursor: ${o}!important;}`)}function qo(e){return e.type==="keydown"}function Yo(e){return e.type.startsWith("pointer")}function Xo(e){return e.type.startsWith("mouse")}function pt(e){if(Yo(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Xo(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function ci(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function ui(e,t,o){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function di(e,t){if(e===t)throw new Error("Cannot compare node with itself");const o={a:co(e),b:co(t)};let n;for(;o.a.at(-1)===o.b.at(-1);)e=o.a.pop(),t=o.b.pop(),n=e;F(n,"Stacking order can only be calculated for elements with a common ancestor");const i={a:lo(so(o.a)),b:lo(so(o.b))};if(i.a===i.b){const r=n.childNodes,a={a:o.a.at(-1),b:o.b.at(-1)};let s=r.length;for(;s--;){const l=r[s];if(l===a.a)return 1;if(l===a.b)return-1}}return Math.sign(i.a-i.b)}const mi=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function hi(e){var t;const o=getComputedStyle((t=Ko(e))!==null&&t!==void 0?t:e).display;return o==="flex"||o==="inline-flex"}function fi(e){const t=getComputedStyle(e);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||hi(e))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||mi.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function so(e){let t=e.length;for(;t--;){const o=e[t];if(F(o,"Missing node"),fi(o))return o}return null}function lo(e){return e&&Number(getComputedStyle(e).zIndex)||0}function co(e){const t=[];for(;e;)t.push(e),e=Ko(e);return t}function Ko(e){const{parentNode:t}=e;return t&&t instanceof ShadowRoot?t.host:t}const Jo=1,Qo=2,Zo=4,en=8,pi=ci()==="coarse";let le=[],Oe=!1,ye=new Map,gt=new Map;const qe=new Set;function gi(e,t,o,n,i){var r;const{ownerDocument:a}=t,s={direction:o,element:t,hitAreaMargins:n,setResizeHandlerState:i},l=(r=ye.get(a))!==null&&r!==void 0?r:0;return ye.set(a,l+1),qe.add(s),lt(),function(){var b;gt.delete(e),qe.delete(s);const f=(b=ye.get(a))!==null&&b!==void 0?b:1;if(ye.set(a,f-1),lt(),f===1&&ye.delete(a),le.includes(s)){const c=le.indexOf(s);c>=0&&le.splice(c,1),Ht(),i("up",!0,null)}}}function uo(e){const{target:t}=e,{x:o,y:n}=pt(e);Oe=!0,Ft({target:t,x:o,y:n}),lt(),le.length>0&&(ct("down",e),e.preventDefault(),e.stopPropagation())}function Ve(e){const{x:t,y:o}=pt(e);if(Oe&&e.buttons===0&&(Oe=!1,ct("up",e)),!Oe){const{target:n}=e;Ft({target:n,x:t,y:o})}ct("move",e),Ht(),le.length>0&&e.preventDefault()}function Ie(e){const{target:t}=e,{x:o,y:n}=pt(e);gt.clear(),Oe=!1,le.length>0&&e.preventDefault(),ct("up",e),Ft({target:t,x:o,y:n}),Ht(),lt()}function Ft({target:e,x:t,y:o}){le.splice(0);let n=null;(e instanceof HTMLElement||e instanceof SVGElement)&&(n=e),qe.forEach(i=>{const{element:r,hitAreaMargins:a}=i,s=r.getBoundingClientRect(),{bottom:l,left:d,right:b,top:f}=s,c=pi?a.coarse:a.fine;if(t>=d-c&&t<=b+c&&o>=f-c&&o<=l+c){if(n!==null&&document.contains(n)&&r!==n&&!r.contains(n)&&!n.contains(r)&&di(n,r)>0){let w=n,L=!1;for(;w&&!w.contains(r);){if(ui(w.getBoundingClientRect(),s)){L=!0;break}w=w.parentElement}if(L)return}le.push(i)}})}function Et(e,t){gt.set(e,t)}function Ht(){let e=!1,t=!1;le.forEach(n=>{const{direction:i}=n;i==="horizontal"?e=!0:t=!0});let o=0;gt.forEach(n=>{o|=n}),e&&t?wt("intersection",o):e?wt("horizontal",o):t?wt("vertical",o):li()}function lt(){ye.forEach((e,t)=>{const{body:o}=t;o.removeEventListener("contextmenu",Ie),o.removeEventListener("pointerdown",uo),o.removeEventListener("pointerleave",Ve),o.removeEventListener("pointermove",Ve)}),window.removeEventListener("pointerup",Ie),window.removeEventListener("pointercancel",Ie),qe.size>0&&(Oe?(le.length>0&&ye.forEach((e,t)=>{const{body:o}=t;e>0&&(o.addEventListener("contextmenu",Ie),o.addEventListener("pointerleave",Ve),o.addEventListener("pointermove",Ve))}),window.addEventListener("pointerup",Ie),window.addEventListener("pointercancel",Ie)):ye.forEach((e,t)=>{const{body:o}=t;e>0&&(o.addEventListener("pointerdown",uo,{capture:!0}),o.addEventListener("pointermove",Ve))}))}function ct(e,t){qe.forEach(o=>{const{setResizeHandlerState:n}=o,i=le.includes(o);n(e,i,t)})}function yi(){const[e,t]=Me(0);return oe(()=>t(o=>o+1),[])}function F(e,t){if(!e)throw console.error(t),Error(t)}const Gt=10;function Re(e,t,o=Gt){return e.toFixed(o)===t.toFixed(o)?0:e>t?1:-1}function he(e,t,o=Gt){return Re(e,t,o)===0}function re(e,t,o){return Re(e,t,o)===0}function vi(e,t,o){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(!re(i,r,o))return!1}return!0}function je({panelConstraints:e,panelIndex:t,size:o}){const n=e[t];F(n!=null,`Panel constraints not found for index ${t}`);let{collapsedSize:i=0,collapsible:r,maxSize:a=100,minSize:s=0}=n;if(Re(o,s)<0)if(r){const l=(i+s)/2;Re(o,l)<0?o=i:o=s}else o=s;return o=Math.min(a,o),o=parseFloat(o.toFixed(Gt)),o}function Be({delta:e,initialLayout:t,panelConstraints:o,pivotIndices:n,prevLayout:i,trigger:r}){if(re(e,0))return t;const a=[...t],[s,l]=n;F(s!=null,"Invalid first pivot index"),F(l!=null,"Invalid second pivot index");let d=0;if(r==="keyboard"){{const f=e<0?l:s,c=o[f];F(c,`Panel constraints not found for index ${f}`);const{collapsedSize:p=0,collapsible:w,minSize:L=0}=c;if(w){const O=t[f];if(F(O!=null,`Previous layout not found for panel index ${f}`),re(O,p)){const C=L-O;Re(C,Math.abs(e))>0&&(e=e<0?0-C:C)}}}{const f=e<0?s:l,c=o[f];F(c,`No panel constraints found for index ${f}`);const{collapsedSize:p=0,collapsible:w,minSize:L=0}=c;if(w){const O=t[f];if(F(O!=null,`Previous layout not found for panel index ${f}`),re(O,L)){const C=O-p;Re(C,Math.abs(e))>0&&(e=e<0?0-C:C)}}}}{const f=e<0?1:-1;let c=e<0?l:s,p=0;for(;;){const L=t[c];F(L!=null,`Previous layout not found for panel index ${c}`);const C=je({panelConstraints:o,panelIndex:c,size:100})-L;if(p+=C,c+=f,c<0||c>=o.length)break}const w=Math.min(Math.abs(e),Math.abs(p));e=e<0?0-w:w}{let c=e<0?s:l;for(;c>=0&&c<o.length;){const p=Math.abs(e)-Math.abs(d),w=t[c];F(w!=null,`Previous layout not found for panel index ${c}`);const L=w-p,O=je({panelConstraints:o,panelIndex:c,size:L});if(!re(w,O)&&(d+=w-O,a[c]=O,d.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?c--:c++}}if(vi(i,a))return i;{const f=e<0?l:s,c=t[f];F(c!=null,`Previous layout not found for panel index ${f}`);const p=c+d,w=je({panelConstraints:o,panelIndex:f,size:p});if(a[f]=w,!re(w,p)){let L=p-w,C=e<0?l:s;for(;C>=0&&C<o.length;){const z=a[C];F(z!=null,`Previous layout not found for panel index ${C}`);const G=z+L,q=je({panelConstraints:o,panelIndex:C,size:G});if(re(z,q)||(L-=q-z,a[C]=q),re(L,0))break;e>0?C--:C++}}}const b=a.reduce((f,c)=>c+f,0);return re(b,100)?a:i}function bi({layout:e,panelsArray:t,pivotIndices:o}){let n=0,i=100,r=0,a=0;const s=o[0];F(s!=null,"No pivot index found"),t.forEach((f,c)=>{const{constraints:p}=f,{maxSize:w=100,minSize:L=0}=p;c===s?(n=L,i=w):(r+=L,a+=w)});const l=Math.min(i,100-r),d=Math.max(n,100-a),b=e[s];return{valueMax:l,valueMin:d,valueNow:b}}function Ye(e,t=document){return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function tn(e,t,o=document){const i=Ye(e,o).findIndex(r=>r.getAttribute("data-panel-resize-handle-id")===t);return i??null}function on(e,t,o){const n=tn(e,t,o);return n!=null?[n,n+1]:[-1,-1]}function nn(e,t=document){var o;if(t instanceof HTMLElement&&(t==null||(o=t.dataset)===null||o===void 0?void 0:o.panelGroupId)==e)return t;const n=t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return n||null}function yt(e,t=document){const o=t.querySelector(`[data-panel-resize-handle-id="${e}"]`);return o||null}function wi(e,t,o,n=document){var i,r,a,s;const l=yt(t,n),d=Ye(e,n),b=l?d.indexOf(l):-1,f=(i=(r=o[b])===null||r===void 0?void 0:r.id)!==null&&i!==void 0?i:null,c=(a=(s=o[b+1])===null||s===void 0?void 0:s.id)!==null&&a!==void 0?a:null;return[f,c]}function Ei({committedValuesRef:e,eagerValuesRef:t,groupId:o,layout:n,panelDataArray:i,panelGroupElement:r,setLayout:a}){ne({didWarnAboutMissingResizeHandle:!1}),Ae(()=>{if(!r)return;const s=Ye(o,r);for(let l=0;l<i.length-1;l++){const{valueMax:d,valueMin:b,valueNow:f}=bi({layout:n,panelsArray:i,pivotIndices:[l,l+1]}),c=s[l];if(c!=null){const p=i[l];F(p,`No panel data found for index "${l}"`),c.setAttribute("aria-controls",p.id),c.setAttribute("aria-valuemax",""+Math.round(d)),c.setAttribute("aria-valuemin",""+Math.round(b)),c.setAttribute("aria-valuenow",f!=null?""+Math.round(f):"")}}return()=>{s.forEach((l,d)=>{l.removeAttribute("aria-controls"),l.removeAttribute("aria-valuemax"),l.removeAttribute("aria-valuemin"),l.removeAttribute("aria-valuenow")})}},[o,n,i,r]),Se(()=>{if(!r)return;const s=t.current;F(s,"Eager values not found");const{panelDataArray:l}=s,d=nn(o,r);F(d!=null,`No group found for id "${o}"`);const b=Ye(o,r);F(b,`No resize handles found for group id "${o}"`);const f=b.map(c=>{const p=c.getAttribute("data-panel-resize-handle-id");F(p,"Resize handle element has no handle id attribute");const[w,L]=wi(o,p,l,r);if(w==null||L==null)return()=>{};const O=C=>{if(!C.defaultPrevented)switch(C.key){case"Enter":{C.preventDefault();const z=l.findIndex(G=>G.id===w);if(z>=0){const G=l[z];F(G,`No panel data found for index ${z}`);const q=n[z],{collapsedSize:_=0,collapsible:A,minSize:u=0}=G.constraints;if(q!=null&&A){const x=Be({delta:re(q,_)?u-_:_-q,initialLayout:n,panelConstraints:l.map(R=>R.constraints),pivotIndices:on(o,p,r),prevLayout:n,trigger:"keyboard"});n!==x&&a(x)}}break}}};return c.addEventListener("keydown",O),()=>{c.removeEventListener("keydown",O)}});return()=>{f.forEach(c=>c())}},[r,e,t,o,n,i,a])}function mo(e,t){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}function rn(e,t){const o=e==="horizontal",{x:n,y:i}=pt(t);return o?n:i}function _i(e,t,o,n,i){const r=o==="horizontal",a=yt(t,i);F(a,`No resize handle element found for id "${t}"`);const s=a.getAttribute("data-panel-group-id");F(s,"Resize handle element has no group id attribute");let{initialCursorPosition:l}=n;const d=rn(o,e),b=nn(s,i);F(b,`No group element found for id "${s}"`);const f=b.getBoundingClientRect(),c=r?f.width:f.height;return(d-l)/c*100}function xi(e,t,o,n,i,r){if(qo(e)){const a=o==="horizontal";let s=0;e.shiftKey?s=100:i!=null?s=i:s=10;let l=0;switch(e.key){case"ArrowDown":l=a?0:s;break;case"ArrowLeft":l=a?-s:0;break;case"ArrowRight":l=a?s:0;break;case"ArrowUp":l=a?0:-s;break;case"End":l=100;break;case"Home":l=-100;break}return l}else return n==null?0:_i(e,t,o,n,r)}function Si({panelDataArray:e}){const t=Array(e.length),o=e.map(r=>r.constraints);let n=0,i=100;for(let r=0;r<e.length;r++){const a=o[r];F(a,`Panel constraints not found for index ${r}`);const{defaultSize:s}=a;s!=null&&(n++,t[r]=s,i-=s)}for(let r=0;r<e.length;r++){const a=o[r];F(a,`Panel constraints not found for index ${r}`);const{defaultSize:s}=a;if(s!=null)continue;const l=e.length-n,d=i/l;n++,t[r]=d,i-=d}return t}function Pe(e,t,o){t.forEach((n,i)=>{const r=e[i];F(r,`Panel data not found for index ${i}`);const{callbacks:a,constraints:s,id:l}=r,{collapsedSize:d=0,collapsible:b}=s,f=o[l];if(f==null||n!==f){o[l]=n;const{onCollapse:c,onExpand:p,onResize:w}=a;w&&w(n,f),b&&(c||p)&&(p&&(f==null||he(f,d))&&!he(n,d)&&p(),c&&(f==null||!he(f,d))&&he(n,d)&&c())}})}function tt(e,t){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!=t[o])return!1;return!0}function Ai({defaultSize:e,dragState:t,layout:o,panelData:n,panelIndex:i,precision:r=3}){const a=o[i];let s;return a==null?s=e!=null?e.toPrecision(r):"1":n.length===1?s="1":s=a.toPrecision(r),{flexBasis:0,flexGrow:s,flexShrink:1,overflow:"hidden",pointerEvents:t!==null?"none":void 0}}function Ri(e,t=10){let o=null;return(...i)=>{o!==null&&clearTimeout(o),o=setTimeout(()=>{e(...i)},t)}}function ho(e){try{if(typeof localStorage<"u")e.getItem=t=>localStorage.getItem(t),e.setItem=(t,o)=>{localStorage.setItem(t,o)};else throw new Error("localStorage not supported in this environment")}catch(t){console.error(t),e.getItem=()=>null,e.setItem=()=>{}}}function an(e){return`react-resizable-panels:${e}`}function sn(e){return e.map(t=>{const{constraints:o,id:n,idIsFromProps:i,order:r}=t;return i?n:r?`${r}:${JSON.stringify(o)}`:JSON.stringify(o)}).sort((t,o)=>t.localeCompare(o)).join(",")}function ln(e,t){try{const o=an(e),n=t.getItem(o);if(n){const i=JSON.parse(n);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Ti(e,t,o){var n,i;const r=(n=ln(e,o))!==null&&n!==void 0?n:{},a=sn(t);return(i=r[a])!==null&&i!==void 0?i:null}function Ii(e,t,o,n,i){var r;const a=an(e),s=sn(t),l=(r=ln(e,i))!==null&&r!==void 0?r:{};l[s]={expandToSizes:Object.fromEntries(o.entries()),layout:n};try{i.setItem(a,JSON.stringify(l))}catch(d){console.error(d)}}function fo({layout:e,panelConstraints:t}){const o=[...e],n=o.reduce((r,a)=>r+a,0);if(o.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${o.map(r=>`${r}%`).join(", ")}`);if(!re(n,100)&&o.length>0)for(let r=0;r<t.length;r++){const a=o[r];F(a!=null,`No layout data found for index ${r}`);const s=100/n*a;o[r]=s}let i=0;for(let r=0;r<t.length;r++){const a=o[r];F(a!=null,`No layout data found for index ${r}`);const s=je({panelConstraints:t,panelIndex:r,size:a});a!=s&&(i+=a-s,o[r]=s)}if(!re(i,0))for(let r=0;r<t.length;r++){const a=o[r];F(a!=null,`No layout data found for index ${r}`);const s=a+i,l=je({panelConstraints:t,panelIndex:r,size:s});if(a!==l&&(i-=l-a,o[r]=l,re(i,0)))break}return o}const Pi=100,Ue={getItem:e=>(ho(Ue),Ue.getItem(e)),setItem:(e,t)=>{ho(Ue),Ue.setItem(e,t)}},po={};function cn({autoSaveId:e=null,children:t,className:o="",direction:n,forwardedRef:i,id:r=null,onLayout:a=null,keyboardResizeBy:s=null,storage:l=Ue,style:d,tagName:b="div",...f}){const c=Ut(r),p=ne(null),[w,L]=Me(null),[O,C]=Me([]),z=yi(),G=ne({}),q=ne(new Map),_=ne(0),A=ne({autoSaveId:e,direction:n,dragState:w,id:c,keyboardResizeBy:s,onLayout:a,storage:l}),u=ne({layout:O,panelDataArray:[],panelDataArrayChanged:!1});ne({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Go(i,()=>({getId:()=>A.current.id,getLayout:()=>{const{layout:g}=u.current;return g},setLayout:g=>{const{onLayout:k}=A.current,{layout:N,panelDataArray:V}=u.current,S=fo({layout:g,panelConstraints:V.map(B=>B.constraints)});mo(N,S)||(C(S),u.current.layout=S,k&&k(S),Pe(V,S,G.current))}}),[]),Ae(()=>{A.current.autoSaveId=e,A.current.direction=n,A.current.dragState=w,A.current.id=c,A.current.onLayout=a,A.current.storage=l}),Ei({committedValuesRef:A,eagerValuesRef:u,groupId:c,layout:O,panelDataArray:u.current.panelDataArray,setLayout:C,panelGroupElement:p.current}),Se(()=>{const{panelDataArray:g}=u.current;if(e){if(O.length===0||O.length!==g.length)return;let k=po[e];k==null&&(k=Ri(Ii,Pi),po[e]=k);const N=[...g],V=new Map(q.current);k(e,N,V,O,l)}},[e,O,l]),Se(()=>{});const x=oe(g=>{const{onLayout:k}=A.current,{layout:N,panelDataArray:V}=u.current;if(g.constraints.collapsible){const S=V.map(ce=>ce.constraints),{collapsedSize:B=0,panelSize:Y,pivotIndices:X}=we(V,g,N);if(F(Y!=null,`Panel size not found for panel "${g.id}"`),!he(Y,B)){q.current.set(g.id,Y);const ue=De(V,g)===V.length-1?Y-B:B-Y,K=Be({delta:ue,initialLayout:N,panelConstraints:S,pivotIndices:X,prevLayout:N,trigger:"imperative-api"});tt(N,K)||(C(K),u.current.layout=K,k&&k(K),Pe(V,K,G.current))}}},[]),R=oe((g,k)=>{const{onLayout:N}=A.current,{layout:V,panelDataArray:S}=u.current;if(g.constraints.collapsible){const B=S.map(se=>se.constraints),{collapsedSize:Y=0,panelSize:X=0,minSize:ce=0,pivotIndices:ue}=we(S,g,V),K=k??ce;if(he(X,Y)){const se=q.current.get(g.id),Ne=se!=null&&se>=K?se:K,bt=De(S,g)===S.length-1?X-Ne:Ne-X,te=Be({delta:bt,initialLayout:V,panelConstraints:B,pivotIndices:ue,prevLayout:V,trigger:"imperative-api"});tt(V,te)||(C(te),u.current.layout=te,N&&N(te),Pe(S,te,G.current))}}},[]),m=oe(g=>{const{layout:k,panelDataArray:N}=u.current,{panelSize:V}=we(N,g,k);return F(V!=null,`Panel size not found for panel "${g.id}"`),V},[]),y=oe((g,k)=>{const{panelDataArray:N}=u.current,V=De(N,g);return Ai({defaultSize:k,dragState:w,layout:O,panelData:N,panelIndex:V})},[w,O]),h=oe(g=>{const{layout:k,panelDataArray:N}=u.current,{collapsedSize:V=0,collapsible:S,panelSize:B}=we(N,g,k);return F(B!=null,`Panel size not found for panel "${g.id}"`),S===!0&&he(B,V)},[]),$=oe(g=>{const{layout:k,panelDataArray:N}=u.current,{collapsedSize:V=0,collapsible:S,panelSize:B}=we(N,g,k);return F(B!=null,`Panel size not found for panel "${g.id}"`),!S||Re(B,V)>0},[]),M=oe(g=>{const{panelDataArray:k}=u.current;k.push(g),k.sort((N,V)=>{const S=N.order,B=V.order;return S==null&&B==null?0:S==null?-1:B==null?1:S-B}),u.current.panelDataArrayChanged=!0,z()},[z]);Ae(()=>{if(u.current.panelDataArrayChanged){u.current.panelDataArrayChanged=!1;const{autoSaveId:g,onLayout:k,storage:N}=A.current,{layout:V,panelDataArray:S}=u.current;let B=null;if(g){const X=Ti(g,S,N);X&&(q.current=new Map(Object.entries(X.expandToSizes)),B=X.layout)}B==null&&(B=Si({panelDataArray:S}));const Y=fo({layout:B,panelConstraints:S.map(X=>X.constraints)});mo(V,Y)||(C(Y),u.current.layout=Y,k&&k(Y),Pe(S,Y,G.current))}}),Ae(()=>{const g=u.current;return()=>{g.layout=[]}},[]);const E=oe(g=>{let k=!1;const N=p.current;return N&&window.getComputedStyle(N,null).getPropertyValue("direction")==="rtl"&&(k=!0),function(S){S.preventDefault();const B=p.current;if(!B)return()=>null;const{direction:Y,dragState:X,id:ce,keyboardResizeBy:ue,onLayout:K}=A.current,{layout:se,panelDataArray:Ne}=u.current,{initialLayout:Qe}=X??{},bt=on(ce,g,B);let te=xi(S,g,Y,X,ue,B);const Zt=Y==="horizontal";Zt&&k&&(te=-te);const er=Ne.map(tr=>tr.constraints),ze=Be({delta:te,initialLayout:Qe??se,panelConstraints:er,pivotIndices:bt,prevLayout:se,trigger:qo(S)?"keyboard":"mouse-or-touch"}),eo=!tt(se,ze);(Yo(S)||Xo(S))&&_.current!=te&&(_.current=te,!eo&&te!==0?Zt?Et(g,te<0?Jo:Qo):Et(g,te<0?Zo:en):Et(g,0)),eo&&(C(ze),u.current.layout=ze,K&&K(ze),Pe(Ne,ze,G.current))}},[]),D=oe((g,k)=>{const{onLayout:N}=A.current,{layout:V,panelDataArray:S}=u.current,B=S.map(se=>se.constraints),{panelSize:Y,pivotIndices:X}=we(S,g,V);F(Y!=null,`Panel size not found for panel "${g.id}"`);const ue=De(S,g)===S.length-1?Y-k:k-Y,K=Be({delta:ue,initialLayout:V,panelConstraints:B,pivotIndices:X,prevLayout:V,trigger:"imperative-api"});tt(V,K)||(C(K),u.current.layout=K,N&&N(K),Pe(S,K,G.current))},[]),J=oe((g,k)=>{const{layout:N,panelDataArray:V}=u.current,{collapsedSize:S=0,collapsible:B}=k,{collapsedSize:Y=0,collapsible:X,maxSize:ce=100,minSize:ue=0}=g.constraints,{panelSize:K}=we(V,g,N);K!=null&&(B&&X&&he(K,S)?he(S,Y)||D(g,Y):K<ue?D(g,ue):K>ce&&D(g,ce))},[D]),H=oe((g,k)=>{const{direction:N}=A.current,{layout:V}=u.current;if(!p.current)return;const S=yt(g,p.current);F(S,`Drag handle element not found for id "${g}"`);const B=rn(N,k);L({dragHandleId:g,dragHandleRect:S.getBoundingClientRect(),initialCursorPosition:B,initialLayout:V})},[]),Z=oe(()=>{L(null)},[]),ae=oe(g=>{const{panelDataArray:k}=u.current,N=De(k,g);N>=0&&(k.splice(N,1),delete G.current[g.id],u.current.panelDataArrayChanged=!0,z())},[z]),U=ni(()=>({collapsePanel:x,direction:n,dragState:w,expandPanel:R,getPanelSize:m,getPanelStyle:y,groupId:c,isPanelCollapsed:h,isPanelExpanded:$,reevaluatePanelConstraints:J,registerPanel:M,registerResizeHandle:E,resizePanel:D,startDragging:H,stopDragging:Z,unregisterPanel:ae,panelGroupElement:p.current}),[x,w,n,R,m,y,c,h,$,J,M,E,D,H,Z,ae]),W={display:"flex",flexDirection:n==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return Le(ft.Provider,{value:U},Le(b,{...f,children:t,className:o,id:r,ref:p,style:{...W,...d},"data-panel-group":"","data-panel-group-direction":n,"data-panel-group-id":c}))}const un=Fo((e,t)=>Le(cn,{...e,forwardedRef:t}));cn.displayName="PanelGroup";un.displayName="forwardRef(PanelGroup)";function De(e,t){return e.findIndex(o=>o===t||o.id===t.id)}function we(e,t,o){const n=De(e,t),r=n===e.length-1?[n-1,n]:[n,n+1],a=o[n];return{...t.constraints,panelSize:a,pivotIndices:r}}function Di({disabled:e,handleId:t,resizeHandler:o,panelGroupElement:n}){Se(()=>{if(e||o==null||n==null)return;const i=yt(t,n);if(i==null)return;const r=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),o(a);break}case"F6":{a.preventDefault();const s=i.getAttribute("data-panel-group-id");F(s,`No group element found for id "${s}"`);const l=Ye(s,n),d=tn(s,t,n);F(d!==null,`No resize element found for id "${t}"`);const b=a.shiftKey?d>0?d-1:l.length-1:d+1<l.length?d+1:0;l[b].focus();break}}};return i.addEventListener("keydown",r),()=>{i.removeEventListener("keydown",r)}},[n,e,t,o])}function dn({children:e=null,className:t="",disabled:o=!1,hitAreaMargins:n,id:i,onBlur:r,onDragging:a,onFocus:s,style:l={},tabIndex:d=0,tagName:b="div",...f}){var c,p;const w=ne(null),L=ne({onDragging:a});Se(()=>{L.current.onDragging=a});const O=Ho(ft);if(O===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:C,groupId:z,registerResizeHandle:G,startDragging:q,stopDragging:_,panelGroupElement:A}=O,u=Ut(i),[x,R]=Me("inactive"),[m,y]=Me(!1),[h,$]=Me(null),M=ne({state:x});Ae(()=>{M.current.state=x}),Se(()=>{if(o)$(null);else{const H=G(u);$(()=>H)}},[o,u,G]);const E=(c=n==null?void 0:n.coarse)!==null&&c!==void 0?c:15,D=(p=n==null?void 0:n.fine)!==null&&p!==void 0?p:5;return Se(()=>{if(o||h==null)return;const H=w.current;return F(H,"Element ref not attached"),gi(u,H,C,{coarse:E,fine:D},(ae,U,W)=>{if(U)switch(ae){case"down":{R("drag"),F(W,'Expected event to be defined for "down" action'),q(u,W);const{onDragging:g}=L.current;g&&g(!0);break}case"move":{const{state:g}=M.current;g!=="drag"&&R("hover"),F(W,'Expected event to be defined for "move" action'),h(W);break}case"up":{R("hover"),_();const{onDragging:g}=L.current;g&&g(!1);break}}else R("inactive")})},[E,C,o,D,G,u,h,q,_]),Di({disabled:o,handleId:u,resizeHandler:h,panelGroupElement:A}),Le(b,{...f,children:e,className:t,id:i,onBlur:()=>{y(!1),r==null||r()},onFocus:()=>{y(!0),s==null||s()},ref:w,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...l},tabIndex:d,"data-panel-group-direction":C,"data-panel-group-id":z,"data-resize-handle":"","data-resize-handle-active":x==="drag"?"pointer":m?"keyboard":void 0,"data-resize-handle-state":x,"data-panel-resize-handle-enabled":!o,"data-panel-resize-handle-id":u})}dn.displayName="PanelResizeHandle";const Ce={},go=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,yo=e=>"init"in e,_t=e=>!!e.write,vo=e=>"v"in e||"e"in e,ot=e=>{if("e"in e)throw e.e;if((Ce?"production":void 0)!=="production"&&!("v"in e))throw new Error("[Bug] atom state is not initialized");return e.v},mn=Symbol(),Wt=e=>e[mn],$t=e=>{var t;return qt(e)&&!((t=Wt(e))!=null&&t[1])},ji=(e,t)=>{const o=Wt(e);if(o)o[1]=!0,o[0].forEach(n=>n(t));else if((Ce?"production":void 0)!=="production")throw new Error("[Bug] cancelable promise not found")},Ci=e=>{if(Wt(e))return;const t=[new Set,!1];e[mn]=t;const o=()=>{t[1]=!0};e.then(o,o),e.onCancel=n=>{t[0].add(n)}},qt=e=>typeof(e==null?void 0:e.then)=="function",hn=(e,t,o)=>{o.p.has(e)||(o.p.add(e),t.then(()=>{o.p.delete(e)},()=>{o.p.delete(e)}))},xt=(e,t,o)=>{const n=o(e),i="v"in n,r=n.v,a=$t(n.v)?n.v:null;if(qt(t)){Ci(t);for(const s of n.d.keys())hn(e,t,o(s))}n.v=t,delete n.e,(!i||!Object.is(r,n.v))&&(++n.n,a&&ji(a,t))},bo=(e,t,o)=>{var n;const i=new Set;for(const r of((n=o.get(e))==null?void 0:n.t)||[])o.has(r)&&i.add(r);for(const r of t.p)i.add(r);return i},ki=()=>{const e=new Set,t=()=>{e.forEach(o=>o())};return t.add=o=>(e.add(o),()=>{e.delete(o)}),t},St=()=>{const e={},t=new WeakMap,o=n=>{var i,r;(i=t.get(e))==null||i.forEach(a=>a(n)),(r=t.get(n))==null||r.forEach(a=>a())};return o.add=(n,i)=>{const r=n||e,a=(t.has(r)?t:t.set(r,new Set)).get(r);return a.add(i),()=>{a==null||a.delete(i),a.size||t.delete(r)}},o},Mi=e=>(e.c||(e.c=St()),e.m||(e.m=St()),e.u||(e.u=St()),e.f||(e.f=ki()),e),Oi=Symbol(),Li=(e=new WeakMap,t=new WeakMap,o=new WeakMap,n=new Set,i=new Set,r=new Set,a={},s=(c,...p)=>c.read(...p),l=(c,...p)=>c.write(...p),d=(c,p)=>{var w;return(w=c.unstable_onInit)==null?void 0:w.call(c,p)},b=(c,p)=>{var w;return(w=c.onMount)==null?void 0:w.call(c,p)},...f)=>{const c=f[0]||(u=>{if((Ce?"production":void 0)!=="production"&&!u)throw new Error("Atom is undefined or null");let x=e.get(u);return x||(x={d:new Map,p:new Set,n:0},e.set(u,x),d==null||d(u,A)),x}),p=f[1]||(()=>{let u,x;const R=m=>{try{m()}catch(y){u||(u=!0,x=y)}};do{a.f&&R(a.f);const m=new Set,y=m.add.bind(m);n.forEach(h=>{var $;return($=t.get(h))==null?void 0:$.l.forEach(y)}),n.clear(),r.forEach(y),r.clear(),i.forEach(y),i.clear(),m.forEach(R),n.size&&w()}while(n.size||r.size||i.size);if(u)throw x}),w=f[2]||(()=>{const u=[],x=new WeakSet,R=new WeakSet,m=Array.from(n);for(;m.length;){const y=m[m.length-1],h=c(y);if(R.has(y)){m.pop();continue}if(x.has(y)){if(o.get(y)===h.n)u.push([y,h]);else if((Ce?"production":void 0)!=="production"&&o.has(y))throw new Error("[Bug] invalidated atom exists");R.add(y),m.pop();continue}x.add(y);for(const $ of bo(y,h,t))x.has($)||m.push($)}for(let y=u.length-1;y>=0;--y){const[h,$]=u[y];let M=!1;for(const E of $.d.keys())if(E!==h&&n.has(E)){M=!0;break}M&&(L(h),z(h)),o.delete(h)}}),L=f[3]||(u=>{var x,R;const m=c(u);if(vo(m)&&(t.has(u)&&o.get(u)!==m.n||Array.from(m.d).every(([H,Z])=>L(H).n===Z)))return m;m.d.clear();let y=!0;const h=()=>{t.has(u)&&(z(u),w(),p())},$=H=>{var Z;if(go(u,H)){const U=c(H);if(!vo(U))if(yo(H))xt(H,H.init,c);else throw new Error("no atom init");return ot(U)}const ae=L(H);try{return ot(ae)}finally{m.d.set(H,ae.n),$t(m.v)&&hn(u,m.v,ae),(Z=t.get(H))==null||Z.t.add(u),y||h()}};let M,E;const D={get signal(){return M||(M=new AbortController),M.signal},get setSelf(){return(Ce?"production":void 0)!=="production"&&!_t(u)&&console.warn("setSelf function cannot be used with read-only atom"),!E&&_t(u)&&(E=(...H)=>{if((Ce?"production":void 0)!=="production"&&y&&console.warn("setSelf function cannot be called in sync"),!y)try{return C(u,...H)}finally{w(),p()}}),E}},J=m.n;try{const H=s(u,$,D);return xt(u,H,c),qt(H)&&((x=H.onCancel)==null||x.call(H,()=>M==null?void 0:M.abort()),H.then(h,h)),m}catch(H){return delete m.v,m.e=H,++m.n,m}finally{y=!1,J!==m.n&&o.get(u)===J&&(o.set(u,m.n),n.add(u),(R=a.c)==null||R.call(a,u))}}),O=f[4]||(u=>{const x=[u];for(;x.length;){const R=x.pop(),m=c(R);for(const y of bo(R,m,t)){const h=c(y);o.set(y,h.n),x.push(y)}}}),C=f[5]||((u,...x)=>{let R=!0;const m=h=>ot(L(h)),y=(h,...$)=>{var M;const E=c(h);try{if(go(u,h)){if(!yo(h))throw new Error("atom not writable");const D=E.n,J=$[0];xt(h,J,c),z(h),D!==E.n&&(n.add(h),(M=a.c)==null||M.call(a,h),O(h));return}else return C(h,...$)}finally{R||(w(),p())}};try{return l(u,m,y,...x)}finally{R=!1}}),z=f[6]||(u=>{var x;const R=c(u),m=t.get(u);if(m&&!$t(R.v)){for(const[y,h]of R.d)if(!m.d.has(y)){const $=c(y);G(y).t.add(u),m.d.add(y),h!==$.n&&(n.add(y),(x=a.c)==null||x.call(a,y),O(y))}for(const y of m.d||[])if(!R.d.has(y)){m.d.delete(y);const h=q(y);h==null||h.t.delete(u)}}}),G=f[7]||(u=>{var x;const R=c(u);let m=t.get(u);if(!m){L(u);for(const y of R.d.keys())G(y).t.add(u);if(m={l:new Set,d:new Set(R.d.keys()),t:new Set},t.set(u,m),(x=a.m)==null||x.call(a,u),_t(u)){const y=()=>{let h=!0;const $=(...M)=>{try{return C(u,...M)}finally{h||(w(),p())}};try{const M=b(u,$);M&&(m.u=()=>{h=!0;try{M()}finally{h=!1}})}finally{h=!1}};i.add(y)}}return m}),q=f[8]||(u=>{var x;const R=c(u);let m=t.get(u);if(m&&!m.l.size&&!Array.from(m.t).some(y=>{var h;return(h=t.get(y))==null?void 0:h.d.has(u)})){m.u&&r.add(m.u),m=void 0,t.delete(u),(x=a.u)==null||x.call(a,u);for(const y of R.d.keys()){const h=q(y);h==null||h.t.delete(u)}return}return m}),_=[e,t,o,n,i,r,a,s,l,d,b,c,p,w,L,O,C,z,G,q],A={get:u=>ot(L(u)),set:(u,...x)=>{try{return C(u,...x)}finally{w(),p()}},sub:(u,x)=>{const m=G(u).l;return m.add(x),p(),()=>{m.delete(x),q(u),p()}}};return Object.defineProperty(A,Oi,{value:_}),A},fn=Li,Ni=Mi,Yt={};let zi=0;function Xt(e,t){const o=`atom${++zi}`,n={toString(){return(Yt?"production":void 0)!=="production"&&this.debugLabel?o+":"+this.debugLabel:o}};return typeof e=="function"?n.read=e:(n.init=e,n.read=Vi,n.write=$i),n}function Vi(e){return e(this)}function $i(e,t,o){return t(this,typeof o=="function"?o(e(this)):o)}const Bi=()=>{let e=0;const t=Ni({}),o=new WeakMap,n=new WeakMap,i=fn(o,n,void 0,void 0,void 0,void 0,t,void 0,(s,l,d,...b)=>e?d(s,...b):s.write(l,d,...b)),r=new Set;return t.m.add(void 0,s=>{r.add(s);const l=o.get(s);l.m=n.get(s)}),t.u.add(void 0,s=>{r.delete(s);const l=o.get(s);delete l.m}),Object.assign(i,{dev4_get_internal_weak_map:()=>o,dev4_get_mounted_atoms:()=>r,dev4_restore_atoms:s=>{const l={read:()=>null,write:(d,b)=>{++e;try{for(const[f,c]of s)"init"in f&&b(f,c)}finally{--e}}};i.set(l)}})},Ui=()=>(Yt?"production":void 0)!=="production"?Bi():fn();let $e;const Fi=()=>($e||($e=Ui(),(Yt?"production":void 0)!=="production"&&(globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=$e),globalThis.__JOTAI_DEFAULT_STORE__!==$e&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),$e),pn={},Hi=v.createContext(void 0),gn=e=>v.useContext(Hi)||Fi(),yn=e=>typeof(e==null?void 0:e.then)=="function",Gi=e=>{e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t})},Wi=xe.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(Gi(e),e)}),At=new WeakMap,qi=e=>{let t=At.get(e);return t||(t=new Promise((o,n)=>{let i=e;const r=l=>d=>{i===l&&o(d)},a=l=>d=>{i===l&&n(d)},s=l=>{"onCancel"in l&&typeof l.onCancel=="function"&&l.onCancel(d=>{if((pn?"production":void 0)!=="production"&&d===l)throw new Error("[Bug] p is not updated even after cancelation");yn(d)?(At.set(d,t),i=d,d.then(r(d),a(d)),s(d)):o(d)})};e.then(r(e),a(e)),s(e)}),At.set(e,t)),t};function Ge(e,t){const o=gn(),[[n,i,r],a]=v.useReducer(d=>{const b=o.get(e);return Object.is(d[0],b)&&d[1]===o&&d[2]===e?d:[b,o,e]},void 0,()=>[o.get(e),o,e]);let s=n;if((i!==o||r!==e)&&(a(),s=o.get(e)),v.useEffect(()=>{const d=o.sub(e,()=>{a()});return a(),d},[o,e,void 0]),v.useDebugValue(s),yn(s)){const d=qi(s);return Wi(d)}return s}function Yi(e,t){const o=gn();return v.useCallback((...i)=>{if((pn?"production":void 0)!=="production"&&!("write"in e))throw new Error("not writable atom");return o.set(e,...i)},[o,e])}function Rt(e,t){return[Ge(e),Yi(e)]}var Tt,wo;function Xi(){if(wo)return Tt;wo=1;var e="Expected a function",t=NaN,o="[object Symbol]",n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l=typeof Ze=="object"&&Ze&&Ze.Object===Object&&Ze,d=typeof self=="object"&&self&&self.Object===Object&&self,b=l||d||Function("return this")(),f=Object.prototype,c=f.toString,p=Math.max,w=Math.min,L=function(){return b.Date.now()};function O(_,A,u){var x,R,m,y,h,$,M=0,E=!1,D=!1,J=!0;if(typeof _!="function")throw new TypeError(e);A=q(A)||0,C(u)&&(E=!!u.leading,D="maxWait"in u,m=D?p(q(u.maxWait)||0,A):m,J="trailing"in u?!!u.trailing:J);function H(S){var B=x,Y=R;return x=R=void 0,M=S,y=_.apply(Y,B),y}function Z(S){return M=S,h=setTimeout(W,A),E?H(S):y}function ae(S){var B=S-$,Y=S-M,X=A-B;return D?w(X,m-Y):X}function U(S){var B=S-$,Y=S-M;return $===void 0||B>=A||B<0||D&&Y>=m}function W(){var S=L();if(U(S))return g(S);h=setTimeout(W,ae(S))}function g(S){return h=void 0,J&&x?H(S):(x=R=void 0,y)}function k(){h!==void 0&&clearTimeout(h),M=0,x=$=R=h=void 0}function N(){return h===void 0?y:g(L())}function V(){var S=L(),B=U(S);if(x=arguments,R=this,$=S,B){if(h===void 0)return Z($);if(D)return h=setTimeout(W,A),H($)}return h===void 0&&(h=setTimeout(W,A)),y}return V.cancel=k,V.flush=N,V}function C(_){var A=typeof _;return!!_&&(A=="object"||A=="function")}function z(_){return!!_&&typeof _=="object"}function G(_){return typeof _=="symbol"||z(_)&&c.call(_)==o}function q(_){if(typeof _=="number")return _;if(G(_))return t;if(C(_)){var A=typeof _.valueOf=="function"?_.valueOf():_;_=C(A)?A+"":A}if(typeof _!="string")return _===0?_:+_;_=_.replace(n,"");var u=r.test(_);return u||a.test(_)?s(_.slice(2),u?2:8):i.test(_)?t:+_}return Tt=O,Tt}Xi();var Ki=typeof window<"u"?v.useLayoutEffect:v.useEffect,Ji=typeof window>"u";function Qi(e,{defaultValue:t=!1,initializeWithValue:o=!0}={}){const n=s=>Ji?t:window.matchMedia(s).matches,[i,r]=v.useState(()=>o?n(e):t);function a(){r(n(e))}return Ki(()=>{const s=window.matchMedia(e);return a(),s.addListener?s.addListener(a):s.addEventListener("change",a),()=>{s.removeListener?s.removeListener(a):s.removeEventListener("change",a)}},[e]),i}function Zi(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Eo(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function _o(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Eo(Object(o),!0).forEach(function(n){Zi(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Eo(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function ea(e,t){if(e==null)return{};var o={},n=Object.keys(e),i,r;for(r=0;r<n.length;r++)i=n[r],!(t.indexOf(i)>=0)&&(o[i]=e[i]);return o}function ta(e,t){if(e==null)return{};var o=ea(e,t),n,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function oa(e,t){return na(e)||ra(e,t)||ia(e,t)||aa()}function na(e){if(Array.isArray(e))return e}function ra(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var o=[],n=!0,i=!1,r=void 0;try{for(var a=e[Symbol.iterator](),s;!(n=(s=a.next()).done)&&(o.push(s.value),!(t&&o.length===t));n=!0);}catch(l){i=!0,r=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw r}}return o}}function ia(e,t){if(e){if(typeof e=="string")return xo(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return xo(e,t)}}function xo(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function aa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sa(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function So(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function Ao(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?So(Object(o),!0).forEach(function(n){sa(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):So(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function la(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(n){return t.reduceRight(function(i,r){return r(i)},n)}}function Fe(e){return function t(){for(var o=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return t.apply(o,[].concat(i,s))}}}function ut(e){return{}.toString.call(e).includes("Object")}function ca(e){return!Object.keys(e).length}function Xe(e){return typeof e=="function"}function ua(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function da(e,t){return ut(t)||ve("changeType"),Object.keys(t).some(function(o){return!ua(e,o)})&&ve("changeField"),t}function ma(e){Xe(e)||ve("selectorType")}function ha(e){Xe(e)||ut(e)||ve("handlerType"),ut(e)&&Object.values(e).some(function(t){return!Xe(t)})&&ve("handlersType")}function fa(e){e||ve("initialIsRequired"),ut(e)||ve("initialType"),ca(e)&&ve("initialContent")}function pa(e,t){throw new Error(e[t]||e.default)}var ga={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ve=Fe(pa)(ga),nt={changes:da,selector:ma,handler:ha,initial:fa};function ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};nt.initial(e),nt.handler(t);var o={current:e},n=Fe(wa)(o,t),i=Fe(ba)(o),r=Fe(nt.changes)(e),a=Fe(va)(o);function s(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(b){return b};return nt.selector(d),d(o.current)}function l(d){la(n,i,r,a)(d)}return[s,l]}function va(e,t){return Xe(t)?t(e.current):t}function ba(e,t){return e.current=Ao(Ao({},e.current),t),t}function wa(e,t,o){return Xe(t)?t(e.current):Object.keys(o).forEach(function(n){var i;return(i=t[n])===null||i===void 0?void 0:i.call(t,e.current[n])}),o}var Ea={create:ya},_a={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function xa(e){return function t(){for(var o=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return t.apply(o,[].concat(i,s))}}}function Sa(e){return{}.toString.call(e).includes("Object")}function Aa(e){return e||Ro("configIsRequired"),Sa(e)||Ro("configType"),e.urls?(Ra(),{paths:{vs:e.urls.monacoBase}}):e}function Ra(){console.warn(vn.deprecation)}function Ta(e,t){throw new Error(e[t]||e.default)}var vn={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Ro=xa(Ta)(vn),Ia={config:Aa},Pa=function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return function(i){return o.reduceRight(function(r,a){return a(r)},i)}};function bn(e,t){return Object.keys(t).forEach(function(o){t[o]instanceof Object&&e[o]&&Object.assign(t[o],bn(e[o],t[o]))}),_o(_o({},e),t)}var Da={type:"cancelation",msg:"operation is manually canceled"};function It(e){var t=!1,o=new Promise(function(n,i){e.then(function(r){return t?i(Da):n(r)}),e.catch(i)});return o.cancel=function(){return t=!0},o}var ja=Ea.create({config:_a,isInitialized:!1,resolve:null,reject:null,monaco:null}),wn=oa(ja,2),Je=wn[0],vt=wn[1];function Ca(e){var t=Ia.config(e),o=t.monaco,n=ta(t,["monaco"]);vt(function(i){return{config:bn(i.config,n),monaco:o}})}function ka(){var e=Je(function(t){var o=t.monaco,n=t.isInitialized,i=t.resolve;return{monaco:o,isInitialized:n,resolve:i}});if(!e.isInitialized){if(vt({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),It(Pt);if(window.monaco&&window.monaco.editor)return En(window.monaco),e.resolve(window.monaco),It(Pt);Pa(Ma,La)(Na)}return It(Pt)}function Ma(e){return document.body.appendChild(e)}function Oa(e){var t=document.createElement("script");return e&&(t.src=e),t}function La(e){var t=Je(function(n){var i=n.config,r=n.reject;return{config:i,reject:r}}),o=Oa("".concat(t.config.paths.vs,"/loader.js"));return o.onload=function(){return e()},o.onerror=t.reject,o}function Na(){var e=Je(function(o){var n=o.config,i=o.resolve,r=o.reject;return{config:n,resolve:i,reject:r}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(o){En(o),e.resolve(o)},function(o){e.reject(o)})}function En(e){Je().monaco||vt({monaco:e})}function za(){return Je(function(e){var t=e.monaco;return t})}var Pt=new Promise(function(e,t){return vt({resolve:e,reject:t})}),Kt={config:Ca,init:ka,__getMonacoInstance:za},Va={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Dt=Va,$a={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Ba=$a;function Ua({children:e}){return xe.createElement("div",{style:Ba.container},e)}var Fa=Ua,Ha=Fa;function Ga({width:e,height:t,isEditorReady:o,loading:n,_ref:i,className:r,wrapperProps:a}){return xe.createElement("section",{style:{...Dt.wrapper,width:e,height:t},...a},!o&&xe.createElement(Ha,null,n),xe.createElement("div",{ref:i,style:{...Dt.fullWidth,...!o&&Dt.hide},className:r}))}var Wa=Ga,_n=v.memo(Wa);function qa(e){v.useEffect(e,[])}var xn=qa;function Ya(e,t,o=!0){let n=v.useRef(!0);v.useEffect(n.current||!o?()=>{n.current=!1}:e,t)}var ie=Ya;function We(){}function ke(e,t,o,n){return Xa(e,n)||Ka(e,t,o,n)}function Xa(e,t){return e.editor.getModel(Sn(e,t))}function Ka(e,t,o,n){return e.editor.createModel(t,o,n?Sn(e,n):void 0)}function Sn(e,t){return e.Uri.parse(t)}function Ja({original:e,modified:t,language:o,originalLanguage:n,modifiedLanguage:i,originalModelPath:r,modifiedModelPath:a,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:l=!1,theme:d="light",loading:b="Loading...",options:f={},height:c="100%",width:p="100%",className:w,wrapperProps:L={},beforeMount:O=We,onMount:C=We}){let[z,G]=v.useState(!1),[q,_]=v.useState(!0),A=v.useRef(null),u=v.useRef(null),x=v.useRef(null),R=v.useRef(C),m=v.useRef(O),y=v.useRef(!1);xn(()=>{let E=Kt.init();return E.then(D=>(u.current=D)&&_(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>A.current?M():E.cancel()}),ie(()=>{if(A.current&&u.current){let E=A.current.getOriginalEditor(),D=ke(u.current,e||"",n||o||"text",r||"");D!==E.getModel()&&E.setModel(D)}},[r],z),ie(()=>{if(A.current&&u.current){let E=A.current.getModifiedEditor(),D=ke(u.current,t||"",i||o||"text",a||"");D!==E.getModel()&&E.setModel(D)}},[a],z),ie(()=>{let E=A.current.getModifiedEditor();E.getOption(u.current.editor.EditorOption.readOnly)?E.setValue(t||""):t!==E.getValue()&&(E.executeEdits("",[{range:E.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),E.pushUndoStop())},[t],z),ie(()=>{var E,D;(D=(E=A.current)==null?void 0:E.getModel())==null||D.original.setValue(e||"")},[e],z),ie(()=>{let{original:E,modified:D}=A.current.getModel();u.current.editor.setModelLanguage(E,n||o||"text"),u.current.editor.setModelLanguage(D,i||o||"text")},[o,n,i],z),ie(()=>{var E;(E=u.current)==null||E.editor.setTheme(d)},[d],z),ie(()=>{var E;(E=A.current)==null||E.updateOptions(f)},[f],z);let h=v.useCallback(()=>{var J;if(!u.current)return;m.current(u.current);let E=ke(u.current,e||"",n||o||"text",r||""),D=ke(u.current,t||"",i||o||"text",a||"");(J=A.current)==null||J.setModel({original:E,modified:D})},[o,t,i,e,n,r,a]),$=v.useCallback(()=>{var E;!y.current&&x.current&&(A.current=u.current.editor.createDiffEditor(x.current,{automaticLayout:!0,...f}),h(),(E=u.current)==null||E.editor.setTheme(d),G(!0),y.current=!0)},[f,d,h]);v.useEffect(()=>{z&&R.current(A.current,u.current)},[z]),v.useEffect(()=>{!q&&!z&&$()},[q,z,$]);function M(){var D,J,H,Z;let E=(D=A.current)==null?void 0:D.getModel();s||((J=E==null?void 0:E.original)==null||J.dispose()),l||((H=E==null?void 0:E.modified)==null||H.dispose()),(Z=A.current)==null||Z.dispose()}return xe.createElement(_n,{width:p,height:c,isEditorReady:z,loading:b,_ref:x,className:w,wrapperProps:L})}var Qa=Ja,Za=v.memo(Qa);function es(e){let t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}var ts=es,rt=new Map;function os({defaultValue:e,defaultLanguage:t,defaultPath:o,value:n,language:i,path:r,theme:a="light",line:s,loading:l="Loading...",options:d={},overrideServices:b={},saveViewState:f=!0,keepCurrentModel:c=!1,width:p="100%",height:w="100%",className:L,wrapperProps:O={},beforeMount:C=We,onMount:z=We,onChange:G,onValidate:q=We}){let[_,A]=v.useState(!1),[u,x]=v.useState(!0),R=v.useRef(null),m=v.useRef(null),y=v.useRef(null),h=v.useRef(z),$=v.useRef(C),M=v.useRef(),E=v.useRef(n),D=ts(r),J=v.useRef(!1),H=v.useRef(!1);xn(()=>{let U=Kt.init();return U.then(W=>(R.current=W)&&x(!1)).catch(W=>(W==null?void 0:W.type)!=="cancelation"&&console.error("Monaco initialization: error:",W)),()=>m.current?ae():U.cancel()}),ie(()=>{var W,g,k,N;let U=ke(R.current,e||n||"",t||i||"",r||o||"");U!==((W=m.current)==null?void 0:W.getModel())&&(f&&rt.set(D,(g=m.current)==null?void 0:g.saveViewState()),(k=m.current)==null||k.setModel(U),f&&((N=m.current)==null||N.restoreViewState(rt.get(r))))},[r],_),ie(()=>{var U;(U=m.current)==null||U.updateOptions(d)},[d],_),ie(()=>{!m.current||n===void 0||(m.current.getOption(R.current.editor.EditorOption.readOnly)?m.current.setValue(n):n!==m.current.getValue()&&(H.current=!0,m.current.executeEdits("",[{range:m.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),m.current.pushUndoStop(),H.current=!1))},[n],_),ie(()=>{var W,g;let U=(W=m.current)==null?void 0:W.getModel();U&&i&&((g=R.current)==null||g.editor.setModelLanguage(U,i))},[i],_),ie(()=>{var U;s!==void 0&&((U=m.current)==null||U.revealLine(s))},[s],_),ie(()=>{var U;(U=R.current)==null||U.editor.setTheme(a)},[a],_);let Z=v.useCallback(()=>{var U;if(!(!y.current||!R.current)&&!J.current){$.current(R.current);let W=r||o,g=ke(R.current,n||e||"",t||i||"",W||"");m.current=(U=R.current)==null?void 0:U.editor.create(y.current,{model:g,automaticLayout:!0,...d},b),f&&m.current.restoreViewState(rt.get(W)),R.current.editor.setTheme(a),s!==void 0&&m.current.revealLine(s),A(!0),J.current=!0}},[e,t,o,n,i,r,d,b,f,a,s]);v.useEffect(()=>{_&&h.current(m.current,R.current)},[_]),v.useEffect(()=>{!u&&!_&&Z()},[u,_,Z]),E.current=n,v.useEffect(()=>{var U,W;_&&G&&((U=M.current)==null||U.dispose(),M.current=(W=m.current)==null?void 0:W.onDidChangeModelContent(g=>{H.current||G(m.current.getValue(),g)}))},[_,G]),v.useEffect(()=>{if(_){let U=R.current.editor.onDidChangeMarkers(W=>{var k;let g=(k=m.current.getModel())==null?void 0:k.uri;if(g&&W.find(N=>N.path===g.path)){let N=R.current.editor.getModelMarkers({resource:g});q==null||q(N)}});return()=>{U==null||U.dispose()}}return()=>{}},[_,q]);function ae(){var U,W;(U=M.current)==null||U.dispose(),c?f&&rt.set(r,m.current.saveViewState()):(W=m.current.getModel())==null||W.dispose(),m.current.dispose()}return xe.createElement(_n,{width:p,height:w,isEditorReady:_,loading:l,_ref:y,className:L,wrapperProps:O})}var ns=os,rs=v.memo(ns),Bt=rs;const pe=Q("div")({classes:["f1d4g07z"]}),is=()=>pe,as=Q(is())({classes:["c133f230"]}),ss=()=>pe,ls=Q(ss())({classes:["hwb5q7y"]}),cs=()=>pe,us=Q(cs())({classes:["bsof9gl"]}),dt=Q("button")({classes:["b5bkz07"]}),ds=()=>pe,ms=Q(ds())({classes:["a1oj62b7"]}),hs=()=>dt,An=Q(hs())({classes:["g18nw4js"]}),fs=()=>pe,mt=Q(fs())({classes:["e8uy567"]}),ps=()=>pe,To=Q(ps())({classes:["cbupwus"]}),Rn="Active4D",Tn="Amy",In="Blackboard",Pn="Clouds",Dn="Cobalt",jn="Cobalt2",Cn="Dawn",kn="Dracula",Mn="Dreamweaver",On="Eiffel",Ln="GitHub",Nn="IDLE",zn="Katzenmilch",Vn="LAZY",$n="Merbivore",Bn="Monokai",Un="Nord",Fn="SpaceCadet",Hn="Sunburst",Gn="Tomorrow",Wn="Twilight",qn="Zenburnesque",Yn="iPlastic",Xn="idleFingers",Kn="krTheme",Jn="monoindustrial",Jt={active4d:Rn,"all-hallows-eve":"All Hallows Eve",amy:Tn,"birds-of-paradise":"Birds of Paradise",blackboard:In,"brilliance-black":"Brilliance Black","brilliance-dull":"Brilliance Dull","chrome-devtools":"Chrome DevTools","clouds-midnight":"Clouds Midnight",clouds:Pn,cobalt:Dn,cobalt2:jn,dawn:Cn,dracula:kn,dreamweaver:Mn,eiffel:On,"espresso-libre":"Espresso Libre","github-dark":"GitHub Dark","github-light":"GitHub Light",github:Ln,idle:Nn,katzenmilch:zn,"kuroir-theme":"Kuroir Theme",lazy:Vn,"magicwb--amiga-":"MagicWB (Amiga)","merbivore-soft":"Merbivore Soft",merbivore:$n,"monokai-bright":"Monokai Bright",monokai:Bn,"night-owl":"Night Owl",nord:Un,"oceanic-next":"Oceanic Next","pastels-on-dark":"Pastels on Dark","slush-and-poppies":"Slush and Poppies","solarized-dark":"Solarized-dark","solarized-light":"Solarized-light",spacecadet:Fn,sunburst:Hn,"textmate--mac-classic-":"Textmate (Mac Classic)","tomorrow-night-blue":"Tomorrow-Night-Blue","tomorrow-night-bright":"Tomorrow-Night-Bright","tomorrow-night-eighties":"Tomorrow-Night-Eighties","tomorrow-night":"Tomorrow-Night",tomorrow:Gn,twilight:Wn,"upstream-sunburst":"Upstream Sunburst","vibrant-ink":"Vibrant Ink","xcode-default":"Xcode_default",zenburnesque:qn,iplastic:Yn,idlefingers:Xn,krtheme:Kn,monoindustrial:Jn},gs=Object.freeze(Object.defineProperty({__proto__:null,active4d:Rn,amy:Tn,blackboard:In,clouds:Pn,cobalt:Dn,cobalt2:jn,dawn:Cn,default:Jt,dracula:kn,dreamweaver:Mn,eiffel:On,github:Ln,idle:Nn,idlefingers:Xn,iplastic:Yn,katzenmilch:zn,krtheme:Kn,lazy:Vn,merbivore:$n,monoindustrial:Jn,monokai:Bn,nord:Un,spacecadet:Fn,sunburst:Hn,tomorrow:Gn,twilight:Wn,zenburnesque:qn},Symbol.toStringTag,{value:"Module"})),ys=()=>pe,vs=Q(ys())({classes:["c1gyine9"]}),bs=()=>pe,jt=Q(bs())({classes:["s1lnalas"]}),ws=Q("h2")({classes:["t1umuuqz"]}),Ct=Q("h3")({classes:["s179h0gq"]}),Io=Q("select")({classes:["s8w6gc3"]}),Es=Q("p")({classes:["d10dj0u9"]});var T=(e=>(e.APEX="apex",e.AZCLI="azcli",e.BAT="bat",e.C="c",e.CLOJURE="clojure",e.COFFEESCRIPT="coffeescript",e.CPP="cpp",e.CSHARP="csharp",e.CSP="csp",e.CSS="css",e.DOCKERFILE="dockerfile",e.FSHARP="fsharp",e.GO="go",e.GRAPHQL="graphql",e.HANDLEBARS="handlebars",e.HTML="html",e.INI="ini",e.JAVA="java",e.JAVASCRIPT="javascript",e.JSON="json",e.KOTLIN="kotlin",e.LESS="less",e.LUA="lua",e.MARKDOWN="markdown",e.MSDAX="msdax",e.MYSQL="mysql",e.OBJECTIVE_C="objective-c",e.PASCAL="pascal",e.PERL="perl",e.PGSQL="pgsql",e.PHP="php",e.PLAINTEXT="plaintext",e.POSTIATS="postiats",e.POWERQUERY="powerquery",e.POWERSHELL="powershell",e.PUG="pug",e.PYTHON="python",e.R="r",e.RAZOR="razor",e.REDIS="redis",e.REDSHIFT="redshift",e.RUBY="ruby",e.RUST="rust",e.SB="sb",e.SCHEME="scheme",e.SCSS="scss",e.SHELL="shell",e.SOL="sol",e.SQL="sql",e.ST="st",e.SWIFT="swift",e.TCL="tcl",e.TYPESCRIPT="typescript",e.VB="vb",e.XML="xml",e.YAML="yaml",e))(T||{});const Po=["vs-dark","light","hc-black"],Qn=Xt(T.JAVASCRIPT),Qt=Xt("vs-dark"),Zn=Xt({}),_s=(e,t,o)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})};function xs(e){return new Promise(t=>{Promise.all([Kt.init(),_s(Object.assign({"../../../node_modules/monaco-themes/themes/Active4D.json":()=>j(()=>import("./Active4D-DCMaBw04.js"),[]),"../../../node_modules/monaco-themes/themes/All Hallows Eve.json":()=>j(()=>import("./All Hallows Eve-7vaAaitg.js"),[]),"../../../node_modules/monaco-themes/themes/Amy.json":()=>j(()=>import("./Amy-Dh5QREKo.js"),[]),"../../../node_modules/monaco-themes/themes/Birds of Paradise.json":()=>j(()=>import("./Birds of Paradise-oCXBP02r.js"),[]),"../../../node_modules/monaco-themes/themes/Blackboard.json":()=>j(()=>import("./Blackboard-CFXNeI-o.js"),[]),"../../../node_modules/monaco-themes/themes/Brilliance Black.json":()=>j(()=>import("./Brilliance Black-CB4Vh9Nj.js"),[]),"../../../node_modules/monaco-themes/themes/Brilliance Dull.json":()=>j(()=>import("./Brilliance Dull-CoXJ9oE7.js"),[]),"../../../node_modules/monaco-themes/themes/Chrome DevTools.json":()=>j(()=>import("./Chrome DevTools-CGWZGI7O.js"),[]),"../../../node_modules/monaco-themes/themes/Clouds Midnight.json":()=>j(()=>import("./Clouds Midnight-2ths_mE7.js"),[]),"../../../node_modules/monaco-themes/themes/Clouds.json":()=>j(()=>import("./Clouds-Bibh36ez.js"),[]),"../../../node_modules/monaco-themes/themes/Cobalt.json":()=>j(()=>import("./Cobalt-DNAqQlSJ.js"),[]),"../../../node_modules/monaco-themes/themes/Cobalt2.json":()=>j(()=>import("./Cobalt2-B4DyEI1J.js"),[]),"../../../node_modules/monaco-themes/themes/Dawn.json":()=>j(()=>import("./Dawn-EKPPaCMI.js"),[]),"../../../node_modules/monaco-themes/themes/Dominion Day.json":()=>j(()=>import("./Dominion Day-C9A9NfeL.js"),[]),"../../../node_modules/monaco-themes/themes/Dracula.json":()=>j(()=>import("./Dracula-C3rd88UQ.js"),[]),"../../../node_modules/monaco-themes/themes/Dreamweaver.json":()=>j(()=>import("./Dreamweaver-CJxjPY1p.js"),[]),"../../../node_modules/monaco-themes/themes/Eiffel.json":()=>j(()=>import("./Eiffel-DxR6xVtZ.js"),[]),"../../../node_modules/monaco-themes/themes/Espresso Libre.json":()=>j(()=>import("./Espresso Libre-C4Twn5kD.js"),[]),"../../../node_modules/monaco-themes/themes/GitHub Dark.json":()=>j(()=>import("./GitHub Dark-sp1UhCqD.js"),[]),"../../../node_modules/monaco-themes/themes/GitHub Light.json":()=>j(()=>import("./GitHub Light-Vgw1L57b.js"),[]),"../../../node_modules/monaco-themes/themes/GitHub.json":()=>j(()=>import("./GitHub-CnB5fA5j.js"),[]),"../../../node_modules/monaco-themes/themes/IDLE.json":()=>j(()=>import("./IDLE-DPjUkObu.js"),[]),"../../../node_modules/monaco-themes/themes/Katzenmilch.json":()=>j(()=>import("./Katzenmilch-Cq-Qfo4h.js"),[]),"../../../node_modules/monaco-themes/themes/Kuroir Theme.json":()=>j(()=>import("./Kuroir Theme-Cq-Qfo4h.js"),[]),"../../../node_modules/monaco-themes/themes/LAZY.json":()=>j(()=>import("./LAZY-C9qbDqdv.js"),[]),"../../../node_modules/monaco-themes/themes/MagicWB (Amiga).json":()=>j(()=>import("./MagicWB (Amiga)-Cx9JqgkA.js"),[]),"../../../node_modules/monaco-themes/themes/Merbivore Soft.json":()=>j(()=>import("./Merbivore Soft-CdjjCMk3.js"),[]),"../../../node_modules/monaco-themes/themes/Merbivore.json":()=>j(()=>import("./Merbivore-CdjjCMk3.js"),[]),"../../../node_modules/monaco-themes/themes/Monokai Bright.json":()=>j(()=>import("./Monokai Bright-yk4Ykd6D.js"),[]),"../../../node_modules/monaco-themes/themes/Monokai.json":()=>j(()=>import("./Monokai-Ci587x6O.js"),[]),"../../../node_modules/monaco-themes/themes/Night Owl.json":()=>j(()=>import("./Night Owl-BdmhJRfO.js"),[]),"../../../node_modules/monaco-themes/themes/Nord.json":()=>j(()=>import("./Nord-Bj50XztE.js"),[]),"../../../node_modules/monaco-themes/themes/Oceanic Next.json":()=>j(()=>import("./Oceanic Next-BUu7Pa-n.js"),[]),"../../../node_modules/monaco-themes/themes/Pastels on Dark.json":()=>j(()=>import("./Pastels on Dark-uBz5MCvn.js"),[]),"../../../node_modules/monaco-themes/themes/Slush and Poppies.json":()=>j(()=>import("./Slush and Poppies-YSW8CL5m.js"),[]),"../../../node_modules/monaco-themes/themes/Solarized-dark.json":()=>j(()=>import("./Solarized-dark-CYWqIfaP.js"),[]),"../../../node_modules/monaco-themes/themes/Solarized-light.json":()=>j(()=>import("./Solarized-light-BvLRi89Y.js"),[]),"../../../node_modules/monaco-themes/themes/SpaceCadet.json":()=>j(()=>import("./SpaceCadet-DD1mkU1q.js"),[]),"../../../node_modules/monaco-themes/themes/Sunburst.json":()=>j(()=>import("./Sunburst-BVWzxNUV.js"),[]),"../../../node_modules/monaco-themes/themes/Textmate (Mac Classic).json":()=>j(()=>import("./Textmate (Mac Classic)-KgIAXcFy.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow-Night-Blue.json":()=>j(()=>import("./Tomorrow-Night-Blue-Rs0JKAWH.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow-Night-Bright.json":()=>j(()=>import("./Tomorrow-Night-Bright-C8ujZbWN.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow-Night-Eighties.json":()=>j(()=>import("./Tomorrow-Night-Eighties-BpK0hqlP.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow-Night.json":()=>j(()=>import("./Tomorrow-Night-_pJfbC1f.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow.json":()=>j(()=>import("./Tomorrow-BRJ0LMx5.js"),[]),"../../../node_modules/monaco-themes/themes/Twilight.json":()=>j(()=>import("./Twilight-D14EW1Tv.js"),[]),"../../../node_modules/monaco-themes/themes/Upstream Sunburst.json":()=>j(()=>import("./Upstream Sunburst-DCp8CPcP.js"),[]),"../../../node_modules/monaco-themes/themes/Vibrant Ink.json":()=>j(()=>import("./Vibrant Ink-BxaY3Ba1.js"),[]),"../../../node_modules/monaco-themes/themes/Xcode_default.json":()=>j(()=>import("./Xcode_default-1YyPzZGu.js"),[]),"../../../node_modules/monaco-themes/themes/Zenburnesque.json":()=>j(()=>import("./Zenburnesque-VD2wTOvW.js"),[]),"../../../node_modules/monaco-themes/themes/iPlastic.json":()=>j(()=>import("./iPlastic-Ch4VfpOd.js"),[]),"../../../node_modules/monaco-themes/themes/idleFingers.json":()=>j(()=>import("./idleFingers-5ndTPyr4.js"),[]),"../../../node_modules/monaco-themes/themes/krTheme.json":()=>j(()=>import("./krTheme-CUmmZeAm.js"),[]),"../../../node_modules/monaco-themes/themes/monoindustrial.json":()=>j(()=>import("./monoindustrial-BS0iMKKa.js"),[]),"../../../node_modules/monaco-themes/themes/themelist.json":()=>j(()=>Promise.resolve().then(()=>gs),void 0)}),`../../../node_modules/monaco-themes/themes/${Jt[e]}.json`,7)]).then(([o,n])=>{o.editor.defineTheme(e,n),t(void 0)})})}function Ss(e){const t={};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const n=e[o],i=n.schema;if(i){let r=!1;for(const a in i)if(a.includes(".")){r=!0;break}if(r){t[o]={};for(const a in i)if(Object.prototype.hasOwnProperty.call(i,a)){const s=i[a],l=a.split(".").pop()||"";t[o][l]=s.default}}else t[o]=i.default??n.defaultValue}else t[o]=n.defaultValue}return delete t.automaticLayout,t}function As(e){const t={type:"object",properties:{},definitions:{}};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const n=e[o],i=n.schema;if(i){const r={};let a=!1;for(const s in i)if(s.includes(".")){a=!0;break}if(a){r.type="object",r.properties={};for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s)){const l=i[s];if(l){const d=s.split(".").pop()||"";r.properties[d]={type:l.type,markdownDescription:l.markdownDescription||l.description||"No description available",default:l.default},l.enum&&(r.properties[d].enum=l.enum),l.enumDescriptions&&(r.properties[d]["x-enumDescriptions"]=l.enumDescriptions),l.markdownEnumDescriptions&&(r.properties[d]["x-enumDescriptions"]=l.markdownEnumDescriptions),l.minimum!==void 0&&(r.properties[d].minimum=l.minimum),l.maximum!==void 0&&(r.properties[d].maximum=l.maximum)}}}else r.markdownDescription=i.markdownDescription||i.description||"No description available",i.type&&(r.type=i.type),i.enum&&(r.enum=i.enum),i.enumDescriptions&&(r["x-enumDescriptions"]=i.enumDescriptions),i.markdownEnumDescriptions&&(r["x-enumDescriptions"]=i.markdownEnumDescriptions),i.default!==void 0&&(r.default=i.default),i.minimum!==void 0&&(r.minimum=i.minimum),i.maximum!==void 0&&(r.maximum=i.maximum);t.properties[o]=r}else t.properties[o]={type:typeof n.defaultValue,default:n.defaultValue,description:"No description available"}}return t}function Do(){const[e,t]=Rt(Qn),[o,n]=Rt(Qt),[i,r]=Rt(Zn),a=v.useRef(null);function s(){var c;try{r(JSON.parse(((c=a.current)==null?void 0:c.getValue())||"")),oo("Options applied",{icon:"🚀",style:{background:"#333",color:"#fff"}})}catch{oo("Options are not valid JSON",{icon:"❌",style:{background:"#333",color:"#fff"}})}}function l(c){t(c.target.value)}async function d(c){const p=c.target.value;Po.includes(p)||await xs(p),n(p)}function b(c,p){a.current=c,c.addCommand(p.KeyMod.CtrlCmd|p.KeyCode.KeyS,s)}function f(c){const p=Ss(c.editor.EditorOptions);r(p);const w=As(c.editor.EditorOptions);c.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:"monaco-editor-options-schema.json",fileMatch:["monaco-editor-options.json"],schema:w}]})}return P.jsxs(vs,{children:[P.jsx(ws,{children:"Settings"}),P.jsxs(jt,{children:[P.jsx("label",{htmlFor:"language-select",children:P.jsx(Ct,{children:"Language"})}),P.jsx(Io,{id:"language-select",value:e,onChange:l,children:Object.values(T).map(c=>P.jsx("option",{children:c},c))})]}),P.jsxs(jt,{children:[P.jsx("label",{htmlFor:"theme-select",children:P.jsx(Ct,{children:"Themes"})}),P.jsxs(Io,{id:"theme-select",value:o,onChange:d,children:[P.jsx("option",{disabled:!0,children:"Default Themes"}),Po.map(c=>P.jsx("option",{children:c},c)),P.jsx("option",{disabled:!0,children:"Custom Themes"}),Object.entries(Jt).map(([c,p])=>P.jsx("option",{children:c},p))]})]}),P.jsxs(jt,{children:[P.jsx(Ct,{children:"Options"}),P.jsxs(Es,{children:["For more information on options, visit the"," ",P.jsx("a",{href:"https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html",target:"_blank",rel:"noreferrer",children:"Monaco Editor documentation"})]}),P.jsx(mt,{children:P.jsx(Bt,{height:450,value:JSON.stringify(i,null,2),options:{automaticLayout:!0,scrollbar:{alwaysConsumeMouseWheel:!1}},language:"json",theme:o,path:"monaco-editor-options.json",onMount:b,beforeMount:f})}),P.jsx(dt,{onClick:s,children:"Apply",...Nt("s1ct51q0",{})})]})]})}const I=e=>e.trim().replace(/^ {4}/gm,""),Rs={[T.APEX]:I(`
    /* Using a single database query, find all the leads in
    the database that have the same email address as any
    of the leads being inserted or updated. */
    for (Lead lead : [SELECT Email FROM Lead WHERE Email IN :leadMap.KeySet()]) {
      Lead newLead = leadMap.get(lead.Email);
      newLead.Email.addError('A lead with this email address already exists.');
    }
  `),[T.AZCLI]:I(`
    # Create a resource group.
    az group create --name myResourceGroup --location westeurope

    # Create a new virtual machine, this creates SSH keys if not present.
    az vm create --resource-group myResourceGroup --name myVM --image UbuntuLTS --generate-ssh-keys
  `),[T.BAT]:I(`
    rem *******Begin Comment**************
    rem This program starts the superapp batch program on the network,
    rem directs the output to a file, and displays the file
    rem in Notepad.
    rem *******End Comment**************
    @echo off
    if exist C:output.txt goto EMPTYEXISTS
    setlocal
      path=g:programssuperapp;%path%
      call superapp>C:output.txt
    endlocal
    :EMPTYEXISTS
    start notepad c:output.txt
  `),[T.C]:I(`
    /* guuid.c - UUID functions
     *
     * Copyright (C) 2013-2015, 2017 Red Hat, Inc.
     *
     * This library is free software; you can redistribute it and/or modify
     * it under the terms of the GNU Lesser General Public License as
     * published by the Free Software Foundation; either version 2.1 of the
     * licence, or (at your option) any later version.
     *
     * This is distributed in the hope that it will be useful, but WITHOUT
     * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
     * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public
     * License for more details.
     *
     * You should have received a copy of the GNU Lesser General Public
     * License along with this library; if not, write to the Free Software
     * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301
     * USA.
     *
     * Authors: Marc-André Lureau <marcandre.lureau@redhat.com>
     */

    #include "config.h"
    #include <string.h>

    #include "gi18n.h"
    #include "gstrfuncs.h"
    #include "grand.h"
    #include "gmessages.h"
    #include "gchecksum.h"

    #include "guuid.h"

    typedef struct {
      guint8 bytes[16];
    } GUuid;

    /**
     * SECTION:uuid
     * @title: GUuid
     * @short_description: a universally unique identifier
     *
     * A UUID, or Universally unique identifier, is intended to uniquely
     * identify information in a distributed environment. For the
     * definition of UUID, see [RFC 4122](https://tools.ietf.org/html/rfc4122.html).
     *
     * The creation of UUIDs does not require a centralized authority.
     *
     * UUIDs are of relatively small size (128 bits, or 16 bytes). The
     * common string representation (ex:
     * 1d6c0810-2bd6-45f3-9890-0268422a6f14) needs 37 bytes.
     *
     * The UUID specification defines 5 versions, and calling
     * g_uuid_string_random() will generate a unique (or rather random)
     * UUID of the most common version, version 4.
     *
     * Since: 2.52
     */

    /*
     * g_uuid_to_string:
     * @uuid: a #GUuid
     *
     * Creates a string representation of @uuid, of the form
     * 06e023d5-86d8-420e-8103-383e4566087a (no braces nor urn:uuid:
     * prefix).
     *
     * Returns: (transfer full): A string that should be freed with g_free().
     * Since: STATIC
     */
    static gchar *
    g_uuid_to_string (const GUuid *uuid)
    {
      const guint8 *bytes;

      g_return_val_if_fail (uuid != NULL, NULL);

      bytes = uuid->bytes;

      return g_strdup_printf ("%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x"
                              "-%02x%02x%02x%02x%02x%02x",
                              bytes[0], bytes[1], bytes[2], bytes[3],
                              bytes[4], bytes[5], bytes[6], bytes[7],
                              bytes[8], bytes[9], bytes[10], bytes[11],
                              bytes[12], bytes[13], bytes[14], bytes[15]);
    }

    static gboolean
    uuid_parse_string (const gchar *str,
                       GUuid       *uuid)
    {
      GUuid tmp;
      guint8 *bytes = tmp.bytes;
      gint i, j, hi, lo;
      guint expected_len = 36;

      if (strlen (str) != expected_len)
        return FALSE;

      for (i = 0, j = 0; i < 16;)
        {
          if (j == 8 || j == 13 || j == 18 || j == 23)
            {
              if (str[j++] != '-')
                return FALSE;

              continue;
            }

          hi = g_ascii_xdigit_value (str[j++]);
          lo = g_ascii_xdigit_value (str[j++]);

          if (hi == -1 || lo == -1)
            return FALSE;

          bytes[i++] = hi << 8 | lo;
        }

      if (uuid != NULL)
        *uuid = tmp;

      return TRUE;
    }

    /**
     * g_uuid_string_is_valid:
     * @str: a string representing a UUID
     *
     * Parses the string @str and verify if it is a UUID.
     *
     * The function accepts the following syntax:
     *
     * - simple forms (e.g. \`f81d4fae-7dec-11d0-a765-00a0c91e6bf6\`)
     *
     * Note that hyphens are required within the UUID string itself,
     * as per the aforementioned RFC.
     *
     * Returns: %TRUE if @str is a valid UUID, %FALSE otherwise.
     * Since: 2.52
     */
    gboolean
    g_uuid_string_is_valid (const gchar *str)
    {
      g_return_val_if_fail (str != NULL, FALSE);

      return uuid_parse_string (str, NULL);
    }

    static void
    uuid_set_version (GUuid *uuid, guint version)
    {
      guint8 *bytes = uuid->bytes;

      /*
       * Set the four most significant bits (bits 12 through 15) of the
       * time_hi_and_version field to the 4-bit version number from
       * Section 4.1.3.
       */
      bytes[6] &= 0x0f;
      bytes[6] |= version << 4;
      /*
       * Set the two most significant bits (bits 6 and 7) of the
       * clock_seq_hi_and_reserved to zero and one, respectively.
       */
      bytes[8] &= 0x3f;
      bytes[8] |= 0x80;
    }

    /*
     * g_uuid_generate_v4:
     * @uuid: a #GUuid
     *
     * Generates a random UUID (RFC 4122 version 4).
     * Since: STATIC
     */
    static void
    g_uuid_generate_v4 (GUuid *uuid)
    {
      int i;
      guint8 *bytes;
      guint32 *ints;

      g_return_if_fail (uuid != NULL);

      bytes = uuid->bytes;
      ints = (guint32 *) bytes;
      for (i = 0; i < 4; i++)
        ints[i] = g_random_int ();

      uuid_set_version (uuid, 4);
    }

    /**
     * g_uuid_string_random:
     *
     * Generates a random UUID (RFC 4122 version 4) as a string.
     *
     * Returns: (transfer full): A string that should be freed with g_free().
     * Since: 2.52
     */
    gchar *
    g_uuid_string_random (void)
    {
      GUuid uuid;

      g_uuid_generate_v4 (&uuid);

      return g_uuid_to_string (&uuid);
    }
  `),[T.CLOJURE]:I(`
    (ns game-of-life
      "Conway's Game of Life, based on the work of
      Christophe Grand (http://clj-me.cgrand.net/2011/08/19/conways-game-of-life)
      and Laurent Petit (https://gist.github.com/1200343).")

    ;;; Core game of life's algorithm functions

    (defn neighbors
      "Given a cell's coordinates \`[x y]\`, returns the coordinates of its
      neighbors."
      [[x y]]
      (for [dx [-1 0 1]
            dy (if (zero? dx)
                 [-1 1]
                 [-1 0 1])]
        [(+ dx x) (+ dy y)]))

    (defn step
      "Given a set of living \`cells\`, computes the new set of living cells."
      [cells]
      (set (for [[cell n] (frequencies (mapcat neighbors cells))
                 :when (or (= n 3)
                           (and (= n 2)
                                (cells cell)))]
             cell)))

    ;;; Utility methods for displaying game on a text terminal

    (defn print-grid
      "Prints a \`grid\` of \`w\` columns and \`h\` rows, on *out*, representing a
      step in the game."
      [grid w h]
      (doseq [x (range (inc w))
              y (range (inc h))]
        (when (= y 0) (println))
        (print (if (grid [x y])
                 "[X]"
                 " . "))))

    (defn print-grids
      "Prints a sequence of \`grids\` of \`w\` columns and \`h\` rows on *out*,
      representing several steps."
      [grids w h]
      (doseq [grid grids]
        (print-grid grid w h)
        (println)))

    ;;; Launches an example grid

    (def grid
      "\`grid\` represents the initial set of living cells"
      #{[2 1] [2 2] [2 3]})

    (print-grids (take 3 (iterate step grid)) 5 5)
  `),[T.COFFEESCRIPT]:I(`
    """
    A CoffeeScript sample.
    """

    class Vehicle
      constructor: (@name) =>
      
      drive: () =>
        alert "Conducting #{@name}"

    class Car extends Vehicle
      drive: () =>
        alert "Driving #{@name}"

    c = new Car "Brandie"

    while notAtDestination()
      c.drive()

    raceVehicles = (new Car for i in [1..100])

    startRace = (vehicles) -> [vehicle.drive() for vehicle in vehicles]

    fancyRegExp = ///
      (d+) # numbers
      (w*) # letters
      $   # the end
    ///
  `),[T.CPP]:I(`
    #include <iostream>
    #include <vector>

    std::vector<int> find_prime_factors(int n)
    {
      std::vector<int> result;
      for (int i = 2; i <= n; i++)
      {
        while (n % i == 0)
        {
          result.push_back(i);
          n = n/i;
        }
      }
      return result;
    }

    int main()
    {
      int n;
      std::cout << "Enter number
";
      std::cin >> n;
      std::vector<int> prime_factors;
      prime_factors = find_prime_factors(n);
      std::cout << "Prime Factors of " << n << ":
";
      for (int i = 0; i < prime_factors.size(); i++)
      {
        std::cout << prime_factors[i] << " ";
      }
      std::cout << "
";
    }
  `),[T.CSHARP]:I(`
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace VS
    {
      class Program
      {
        static void Main(string[] args)
        {
          ProcessStartInfo si = new ProcessStartInfo();
          float load= 3.2e02f;

          si.FileName = @"tools\\node.exe";
          si.Arguments = "tools\\simpleserver.js";

          Process.Start(si);
        }
      }
    }
  `),[T.CSP]:I("Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com"),[T.CSS]:I(`
    @keyframes flip {
      from {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
        animation-timing-function: ease-out;
      }

      40% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -190deg);
        animation-timing-function: ease-out;
      }

      50% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -170deg);
        animation-timing-function: ease-in;
      }

      80% {
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
          rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
      }

      to {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
      }
    }

    .animated.flip {
      backface-visibility: visible;
      animation-name: flip;
    }
  `),[T.DOCKERFILE]:I(`
    FROM ubuntu:18.04
    COPY . /app
    RUN make /app
    CMD python /app/app.py
  `),[T.FSHARP]:I(`
    (* Sample F# application *)
    [<EntryPoint>]
    let main argv = 
        printfn "%A" argv
        System.Console.WriteLine("Hello from F#")
        0 // return an integer exit code

    //--------------------------------------------------------
  `),[T.GO]:I(`
    package main

    import (
      "fmt"
      "time"
    )

    func readword(ch chan string) {
      fmt.Println("Type a word, then hit Enter.")
      var word string
      fmt.Scanf("%s", &word)
      ch <- word
    }

    func timeout(t chan bool) {
      time.Sleep(5 * time.Second)
      t <- false
    }

    func main() {
      t := make(chan bool)
      go timeout(t)

      ch := make(chan string)
      go readword(ch)

      select {
      case word := <-ch:
          fmt.Println("Received", word)
      case <-t:
          fmt.Println("Timeout.")
      }
    }
  `),[T.GRAPHQL]:I(`
    type Query {
      me: User!
      searchForLocation(byGPS: GPSInput, byAddress: AddressInput): LocationPagingConnection
    }

    type Mutation {
      addLocation(location: LocationInput): Location
      addReview(review: ReviewInput): Review
      addFavorite(locationId: ID!): Location
    }
  `),[T.HANDLEBARS]:I(`
    <div class="entry">
      <h1>{{title}}</h1>
      {{#if author}}
      <h2>{{author.firstName}} {{author.lastName}}</h2>
      {{else}}
      <h2>Unknown Author</h2>
      {{/if}}
      {{contentBody}}
    </div>

    {{#unless license}}
      <h3 class="warning">WARNING: This entry does not have a license!</h3>
    {{/unless}}

    <div class="footnotes">
      <ul>
        {{#each footnotes}}
        <li>{{this}}</li>
        {{/each}}
      </ul>
    </div>

    <h1>Comments</h1>

    <div id="comments">
      {{#each comments}}
      <h2><a href="/posts/{{../permalink}}#{{id}}">{{title}}</a></h2>
      <div>{{body}}</div>
      {{/each}}
    </div>
  `),[T.HTML]:I(`
    <html>
      <head>
        <title>HTML Sample</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <style type="text/css">
          h1 {
            color: #CCA3A3;
          }
        </style>
        <script type="text/javascript">
          alert("I am a sample...");
        <\/script>
      </head>
      <body>
        <h1>Heading No.1</h1>
        <input disabled type="button" value="Click me" />
      </body>
    </html>
  `),[T.INI]:I(`
    # Example of a .gitconfig file

    [core]
      repositoryformatversion = 0
      filemode = false
      bare = false
      logallrefupdates = true
      symlinks = false
      ignorecase = true
      hideDotFiles = dotGitOnly

    # Defines the master branch
    [branch "master"]
      remote = origin
      merge = refs/heads/master
  `),[T.JAVA]:I(`
    import java.util.ArrayList;
    import org.junit.Test;

    public class Example {
      @Test 
      public void method() {
        org.junit.Assert.assertTrue( "isEmpty", new ArrayList<Integer>().isEmpty());
      }
    
      @Test(timeout=100) public void infinity() {
        while(true);
      }
     }
  `),[T.JAVASCRIPT]:I(`
    import { compose, curry, isFunction } from '../utils';
    import validators from '../validators';
    
    function create(initial, handler = {}) {
      validators.initial(initial);
      validators.handler(handler);
    
      const state = { current: initial };
    
      const didUpdate = curry(didStateUpdate)(state, handler);
      const update = curry(updateState)(state);
      const validate = curry(validators.changes)(initial);
      const getChanges = curry(extractChanges)(state);
    
      function getState(selector = state => state) {
        validators.selector(selector);
        return selector(state.current);
      }
    
      function setState(causedChanges) {
        compose(
          didUpdate,
          update,
          validate,
          getChanges,
        )(causedChanges);
      }
    
      return [getState, setState];
    }
    
    function extractChanges(state, causedChanges) {
      return isFunction(causedChanges)
        ? causedChanges(state.current)
        : causedChanges;
    }
    
    function updateState(state, changes) {
      state.current = { ...state.current, ...changes };
    
      return changes;
    }
    
    function didStateUpdate(state, handler, changes) {
      isFunction(handler)
        ? handler(state.current)
        : Object.keys(changes)
            .forEach(field => handler[field]?.(state.current[field]));
    
      return changes;
    }
    
    export { create };   
  `),[T.JSON]:I(`
    {
      "port": 8080,
      "exclude_from_auth": [
        "/login",
        "/check_token",
        "/battles:get",
        "/team"
      ],
      "db": {
        "default_data": {
          "battles": [],
          "active_battle_id": null,
          "admin": {},
          "secret": "",
          "active_tokens": []
        },
        "path": ".db.json"
      },
      "default_salt_rounds": 10,
      "default_admin_password": "adminonaly",
      "uws_server": {
        "port": 9000,
        "action_types": {
          "BROADCAST": "BROADCAST",
          "CREATE_BATTLE": "CREATE_BATTLE",
          "SEND_CHALLENGE_ANSWER": "SEND_CHALLENGE_ANSWER",
          "CREATE_TEAM": "CREATE_TEAM",
          "DELETE_TEAM": "DELETE_TEAM",
          "START_BATTLE": "START_BATTLE",
          "FINISH_BATTLE": "FINISH_BATTLE",
          "DELETE_BATTLE": "DELETE_BATTLE"
        },
        "child_process_parameters": []
      },
      "http_error_messages": {
        "400": "Your request is bad, and you should feel bad.",
        "401": "I don't know who you are, but I'll find you and login you.",
        "403": "Here we store NASA top secret files, Forbidden.",
        "404": "Oops! You tried to get something that does not exist in this universe.",
        "406": "It's unacceptable!!! It's all over between us.",
        "408": "This request took a century to process and didn't even finished.",
        "500": "Our server is a little bit sad now, try again later.",
        "503": "Our server is too tired now, try again after a short break."
      },
      "general_error_messages": {
        "no_active": "No active battle.",
        "not_started": "Battle hasn't started yet.",
        "started": "Battle has already started.",
        "finished": "Battle has already finished.",
        "invalid_data": "Invalid Data.",
        "no_data": "Data is not passed.",
        "not_admin": "Our admin has all possible, 4 incredible and 2 impossible rights, but you aren't our admin.",
        "challenge_not_started": "Can't submit unbegun battle challenges.",
        "admin_challenge": "Admin can't solve challenges.",
        "already_solved": "This challenge has already been solved by your team.",
        "better_solution": "The previous vesrion of your team is better.",
        "no_challenge": "There is no challenge mentioned by you!",
        "auth_fail": "Authentication failed.",
        "short_password": "Password should be at least 6 chars long."
      }
    }
  `),[T.KOTLIN]:I(`
    class MutableStack<E>(vararg items: E) {              // 1

      private val elements = items.toMutableList()

      fun push(element: E) = elements.add(element)        // 2

      fun peek(): E = elements.last()                     // 3

      fun pop(): E = elements.removeAt(elements.size - 1)

      fun isEmpty() = elements.isEmpty()

      fun size() = elements.size

      override fun toString() = "MutableStack(\${elements.joinToString()})"
    }
  `),[T.LESS]:I(`
    @base: #f938ab;

    .box-shadow(@style, @c) when (iscolor(@c)) {
      border-radius: @style @c;
    }

    .box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
      .box-shadow(@style, rgba(0, 0, 0, @alpha));
    }

    .box { 
      color: saturate(@base, 5%);
      border-color: lighten(@base, 30%);
      
      div {
        .box-shadow((0 0 5px), 30%);
      }
    }

    #header {
      h1 {
        font-size: 26px;
        font-weight: bold;
      }
      
      p { font-size: 12px;
        a { text-decoration: none;
          &:hover { border-width: 1px }
        }
      }
    }
  `),[T.LUA]:I(`
    -- defines a factorial function
    function fact (n)
      if n == 0 then
        return 1
      else
        return n * fact(n-1)
      end
    end
    
    print("enter a number:")
    a = io.read("*number")        -- read a number
    print(fact(a))
  `),[T.MARKDOWN]:I(`
    ## Primes

    It's a playground for examining and playing with prime numbers. It also gives an opportunity to write custom formulas and visualize the results.

    ### Demo

    You can try it simply by opening this [link](https://primes.surenatoyan.com/)

    ### Development

    You also can set up it on your local machine for development (or other) purposes. For that you need:

     - [Nodejs](https://nodejs.org/en/)
     - npm (it comes with nodejs) - or [yarn](https://yarnpkg.com/en/)

    Run these commands to clone the repository, install dependencies and run the application.

    1) \`git clone https://github.com/SurenAt93/primes.git\`
    2) \`cd primes\`
    3) \`npm install\` (or if you are using yarn, just \`yarn\`)
    4) \`npm run start\` (or \`yarn start\` in case of yarn)

    That's it. After, open \`localhost:3000\` in your browser.
    Note that by these steps you run the application in development mode. So, you can open the source of it in your preferred text editor and do whatever you want.

    To make a production build after the third step run - \`npm run build\` (or \`yarn build\` in case of yarn). After a successful build, you will have a production ready app in the build folder.

    ## License

    [MIT](./LICENSE)
  `),[T.MSDAX]:" = CALCULATE(SUM(Sales[SalesAmount]), PREVIOUSQUARTER(Calendar[DateKey]))",[T.MYSQL]:I(`
    CREATE TABLE shop (
      article INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL,
      dealer  CHAR(20)                 DEFAULT ''     NOT NULL,
      price   DOUBLE(16,2)             DEFAULT '0.00' NOT NULL,
      PRIMARY KEY(article, dealer));
    INSERT INTO shop VALUES
      (1,'A',3.45),(1,'B',3.99),(2,'A',10.99),(3,'B',1.45),
      (3,'C',1.69),(3,'D',1.25),(4,'D',19.95);
  `),[T.OBJECTIVE_C]:I(`
    #import 

    int foo() {
      int a = 3 // exists in this function only
      int b = 2 // exists in this function only
      return c + d;
    }

    int main (int argc, const char * argv[]) {
      NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

      result = foo();
      NSLog(@"a = %i", b); // illegal code
      
      [pool drain];

      return 0;
    }
  `),[T.PASCAL]:I(`
    program factorial;

    function fact(n: integer): longint;
    begin
      if (n = 0) then
        fact := 1
      else
        fact := n * fact(n - 1);
    end;

    var
      n: integer;

    begin
      for n := 0 to 16 do
          writeln(n, '! = ', fact(n));
    end.
  `),[T.PERL]:I(`
    #!/usr/bin/perl
    use strict;
    use warnings;

    use Path::Tiny;

    my $dir = path('foo','bar'); # foo/bar

    # Iterate over the content of foo/bar
    my $iter = $dir->iterator;
    while (my $file = $iter->()) {

      # See if it is a directory and skip
      next if $file->is_dir();

      # Print out the file name and path
      print "$file
";
    }
  `),[T.PGSQL]:I(`
    BEGIN
      SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
      EXCEPTION
        WHEN NO_DATA_FOUND THEN
          RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
          RAISE EXCEPTION 'employee % not unique', myname;
    END;
  `),[T.PHP]:I(`
    <!DOCTYPE html>
    <html>
    <body>

    <h1>PHP example</h1>

    <?php
      echo "Hello World!";
    ?>

    </body>
    </html>
  `),[T.PLAINTEXT]:I(`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus aliquet sapien, sed rhoncus leo ullamcorper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus feugiat eleifend nisl, aliquet rhoncus quam scelerisque vel. Morbi eu pellentesque ex. Nam suscipit maximus leo blandit cursus. Aenean sollicitudin nisi luctus, ornare nibh viverra, laoreet ex. Donec eget nibh sit amet dolor ornare elementum. Morbi sollicitudin enim vitae risus pretium vestibulum. Ut pretium hendrerit libero, non vulputate ante volutpat et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam malesuada turpis vitae est porttitor, id tincidunt neque dignissim. Integer rhoncus vestibulum justo in iaculis. Praesent nec augue ut dui scelerisque gravida vel id velit. Donec vehicula feugiat mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

    Praesent diam lorem, luctus quis ullamcorper non, consequat quis orci. Ut vel massa vel nunc sagittis porttitor a vitae ante. Quisque euismod lobortis imperdiet. Vestibulum tincidunt vehicula posuere. Nulla facilisi. Donec sodales imperdiet risus id ullamcorper. Nulla luctus orci tortor, vitae tincidunt urna aliquet nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat dapibus massa. Sed ac pharetra magna, in imperdiet neque. Nullam nunc nisi, consequat vel nunc et, sagittis aliquam arcu. Aliquam non orci magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id sem ut sem pulvinar rhoncus. Aenean venenatis nunc eget mi ornare, vitae maximus lacus varius. Quisque quis vestibulum justo.

    Donec euismod luctus volutpat. Donec sed lacinia enim. Vivamus aliquam elit cursus, convallis diam at, volutpat turpis. Sed lacinia nisl in auctor dapibus. Nunc turpis mi, mattis ut rhoncus id, lacinia sed lectus. Donec sodales tellus quis libero gravida pretium et quis magna. Etiam ultricies mollis purus, eget consequat velit. Duis vitae nibh vitae arcu tincidunt congue. Maecenas ut velit in ipsum condimentum dictum quis eget urna. Sed mattis nulla arcu, vitae mattis ligula dictum at.
  `),[T.POSTIATS]:I(`
    // http://www.ats-lang.org/
    (* Say Hello! once *)
    val () = print"Hello!
"
    //
    (* Say Hello! 3 times *)
    val () = 3*delay(print"Hello!")
    val () = print_newline((*void*))
    //

    //
    (* Build a list of 3 *)
    val xs = $list{int}(0, 1, 2)
    //
    val x0 = xs[0] // legal
    val x1 = xs[1] // legal
    val x2 = xs[2] // legal
    val x3 = xs[3] // illegal
  `),[T.POWERQUERY]:I(`
    let
      Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],
      SplitColumnDelimiter = Table.SplitColumn(Source,"Input",Splitter.SplitTextByDelimiter(","),13),
      Unpivot = Table.Unpivot(SplitColumnDelimiter,{"Input.1", "Input.2", "Input.3", "Input.4",
      "Input.5", "Input.6",    "Input.7", "Input.8", "Input.9", "Input.10", "Input.11", "Input.12"
      ,  "Input.13"},"Attribute","Value"),
      RemovedColumns = Table.RemoveColumns(Unpivot,{"Attribute"}),
      DuplicatesRemoved = Table.Distinct(RemovedColumns),
      GroupedRows = Table.Group(DuplicatesRemoved, {"RowID"}, {{"Count of Distinct Values"
      , each Table.RowCount(_), type number}})
    in
      GroupedRows
  `),[T.POWERSHELL]:I(`
    # Convert any text file to ASCII
 
    param( [string] $infile = $(throw "Please specify a filename.") )
     
    $outfile = "$infile.ascii"
     
    get-content -path $infile | out-file $outfile -encoding ascii
  `),[T.PUG]:I(`
    doctype 5
    html(lang="en")
      head
        title= pageTitle
        script(type='text/javascript')
          if (foo) {
            bar()
          }
      body
        // Disclaimer: You will need to turn insertSpaces to true in order for the
          syntax highlighting to kick in properly (especially for comments)
          Enjoy :)
        h1 Pug - node template engine
        #container
          if youAreUsingPug
            p You are amazing
          else
            p Get on it!
  `),[T.PYTHON]:I(`
    # Python program to check if the number provided by the user is an Armstrong number or not
    # take input from the user
    num = int(input("Enter a number: "))
    # initialize sum
    sum = 0
    # find the sum of the cube of each digit
    temp = num
    while temp > 0:
       digit = temp % 10
       sum += digit ** 3
       temp //= 10
    # display the result
    if num == sum:
       print(num,"is an Armstrong number")
    else:
       print(num,"is not an Armstrong number")
  `),[T.R]:I(`
    # Program to convert decimal number into binary number using recursive function
    convert_to_binary <- function(n) {
      if(n > 1) {
        convert_to_binary(as.integer(n/2))
      }
      cat(n %% 2)
    }
  `),[T.RAZOR]:I(`
    @{
      var total = 0;
      var totalMessage = "";
      @* a multiline
        razor comment embedded in csharp *@
      if (IsPost) {
        // Retrieve the numbers that the user entered.
        var num1 = Request["text1"];
        var num2 = Request["text2"];

        // Convert the entered strings into integers numbers and add.
        total = num1.AsInt() + num2.AsInt();
      <italic><bold>totalMessage = "Total = " + total;</bold></italic>
      }
    }

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Add Numbers</title>
        <meta charset="utf-8" />
      </head>
    <body>
      <p>Enter two whole numbers and then click <strong>Add</strong>.</p>
      <form action="" method="post">
        <p><label for="text1">First Number:</label>
          <input type="text" name="text1" />
        </p>
        <p><label for="text2">Second Number:</label>
          <input type="text" name="text2" />
        </p>
        <p><input type="submit" value="Add" /></p>
      </form>

      @* now we call the totalMessage method 
         (a multi line razor comment outside code) *@

      <p>@totalMessage</p>
      
      <p>@(totalMessage+"!")</p>
      
      An email address (with escaped at character): name@@domain.com
     
    </body>
    </html>
  `),[T.REDIS]:I(`
    EXISTS xkey
    APPEND xkey "Hello"
    APPEND xkey " World"
    GET xkey
  `),[T.REDSHIFT]:I(`
    create view tables_vw as
    select distinct(id) table_id
    ,trim(datname)   db_name
    ,trim(nspname)   schema_name
    ,trim(relname)   table_name
    from stv_tbl_perm
    join pg_class on pg_class.oid = stv_tbl_perm.id
    join pg_namespace on pg_namespace.oid = relnamespace
    join pg_database on pg_database.oid = stv_tbl_perm.db_id;
  `),[T.RUBY]:I(`
    def find_missing(sequence)
      consecutive     = sequence.each_cons(2)
      differences     = consecutive.map { |a,b| b - a }
      sequence        = differences.max_by { |n| differences.count(n) }
      missing_between = consecutive.find { |a,b| (b - a) != sequence }
      missing_between.first + sequence
    end
    find_missing([2,4,6,10])
    # 8
  `),[T.RUST]:I(`
    struct Sheep { naked: bool, name: &'static str }

    trait Animal {
      // Static method signature; \`Self\` refers to the implementor type.
      fn new(name: &'static str) -> Self;

      // Instance method signatures; these will return a string.
      fn name(&self) -> &'static str;
      fn noise(&self) -> &'static str;

      // Traits can provide default method definitions.
      fn talk(&self) {
        println!("{} says {}", self.name(), self.noise());
      }
    }

    impl Sheep {
      fn is_naked(&self) -> bool {
        self.naked
      }

      fn shear(&mut self) {
        if self.is_naked() {
          // Implementor methods can use the implementor's trait methods.
          println!("{} is already naked...", self.name());
        } else {
          println!("{} gets a haircut!", self.name);

          self.naked = true;
        }
      }
    }

    // Implement the \`Animal\` trait for \`Sheep\`.
    impl Animal for Sheep {
      // \`Self\` is the implementor type: \`Sheep\`.
      fn new(name: &'static str) -> Sheep {
        Sheep { name: name, naked: false }
      }

      fn name(&self) -> &'static str {
        self.name
      }

      fn noise(&self) -> &'static str {
        if self.is_naked() {
          "baaaaah?"
        } else {
          "baaaaah!"
        }
      }
      
      // Default trait methods can be overridden.
      fn talk(&self) {
        // For example, we can add some quiet contemplation.
        println!("{} pauses briefly... {}", self.name, self.noise());
      }
    }

    fn main() {
      // Type annotation is necessary in this case.
      let mut dolly: Sheep = Animal::new("Dolly");
      // TODO ^ Try removing the type annotations.

      dolly.talk();
      dolly.shear();
      dolly.talk();
    }
  `),[T.SB]:I(`
    begin:
    TextWindow.Write("Enter a number: ")
    num = TextWindow.ReadNumber()
    remainder = Math.Remainder(num, 2)
    If (remainder = 0) Then
     TextWindow.WriteLine("The number is Even")
    Else
     TextWindow.WriteLine("The number is Odd")
    EndIf
    Goto begin
  `),[T.SCHEME]:I(`
    ;;; make-matrix creates a matrix (a vector of vectors).
    (define make-matrix
      (lambda (rows columns)
        (do ((m (make-vector rows))
             (i 0 (+ i 1)))
            ((= i rows) m)
            (vector-set! m i (make-vector columns)))))

    ;;; matrix? checks to see if its argument is a matrix.
    ;;; It isn't foolproof, but it's generally good enough.
    (define matrix?
      (lambda (x)
        (and (vector? x)
             (> (vector-length x) 0)
             (vector? (vector-ref x 0)))))

    ;; matrix-rows returns the number of rows in a matrix.
    (define matrix-rows
       (lambda (x)
          (vector-length x)))

    ;; matrix-columns returns the number of columns in a matrix.
    (define matrix-columns
       (lambda (x)
          (vector-length (vector-ref x 0))))

    ;;; matrix-ref returns the jth element of the ith row.
    (define matrix-ref
      (lambda (m i j)
        (vector-ref (vector-ref m i) j)))

    ;;; matrix-set! changes the jth element of the ith row.
    (define matrix-set!
      (lambda (m i j x)
        (vector-set! (vector-ref m i) j x)))

    ;;; mul is the generic matrix/scalar multiplication procedure
    (define mul
      (lambda (x y)
        ;; mat-sca-mul multiplies a matrix by a scalar.
        (define mat-sca-mul
           (lambda (m x)
              (let* ((nr (matrix-rows m))
                     (nc (matrix-columns m))
                     (r  (make-matrix nr nc)))
                 (do ((i 0 (+ i 1)))
                     ((= i nr) r)
                     (do ((j 0 (+ j 1)))
                         ((= j nc))
                         (matrix-set! r i j
                            (* x (matrix-ref m i j))))))))

        ;; mat-mat-mul multiplies one matrix by another, after verifying
        ;; that the first matrix has as many columns as the second
        ;; matrix has rows.
        (define mat-mat-mul
           (lambda (m1 m2)
              (let* ((nr1 (matrix-rows m1))
                     (nr2 (matrix-rows m2))
                     (nc2 (matrix-columns m2))
                     (r   (make-matrix nr1 nc2)))
                 (if (not (= (matrix-columns m1) nr2))
                     (match-error m1 m2))
                 (do ((i 0 (+ i 1)))
                     ((= i nr1) r)
                     (do ((j 0 (+ j 1)))
                         ((= j nc2))
                         (do ((k 0 (+ k 1))
                              (a 0
                                 (+ a
                                    (* (matrix-ref m1 i k)
                                       (matrix-ref m2 k j)))))
                             ((= k nr2)
                              (matrix-set! r i j a))))))))

       ;; type-error is called to complain when mul receives an invalid
       ;; type of argument.
        (define type-error
           (lambda (what)
              (error 'mul
                 "~s is not a number or matrix"
                 what)))

        ;; match-error is called to complain when mul receives a pair of
        ;; incompatible arguments.
        (define match-error
           (lambda (what1 what2)
              (error 'mul
                 "~s and ~s are incompatible operands"
                 what1
                 what2)))

        ;; body of mul; dispatch based on input types
        (cond
          ((number? x)
           (cond
             ((number? y) (* x y))
             ((matrix? y) (mat-sca-mul y x))
             (else (type-error y))))
          ((matrix? x)
           (cond
             ((number? y) (mat-sca-mul x y))
             ((matrix? y) (mat-mat-mul x y))
             (else (type-error y))))
          (else (type-error x)))))
  `),[T.SCSS]:I(`
    $baseFontSizeInPixels: 14;

    @function px2em ($font_size, $base_font_size: $baseFontSizeInPixels) {  
      @return ($font_size / $base_font_size) + em; 
    }

    h1 {
      font-size: px2em(36, $baseFontSizeInPixels);
    }
    h2  {
      font-size: px2em(28, $baseFontSizeInPixels);
    }
    .class {
      font-size: px2em(14, $baseFontSizeInPixels);
    }

    nav {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li { display: inline-block; }

      a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }
      
      @each $animal in puma, sea-slug, egret, salamander {
        .#{$animal}-icon {
          background-image: url('/images/#{$animal}.png');
        }
      }
    }
  `),[T.SHELL]:I(`
    #!/usr/bin/env bash
    #
    # Turn the single document bible into a book separated by chapters.

    main() {
        rm -rf manuscript
        mkdir -p manuscript

        # Split the README.md into chapters based on markers.
        while IFS=$'
' read -r line; do
            [[ "$chap" ]] && chapter[$i]+="$line"$'
'
            [[ "$line" == "<!-- CHAPTER START -->" ]] && chap=1
            [[ "$line" == "<!-- CHAPTER END -->" ]]   && { chap=; ((i++)); }
        done < README.md

        # Write the chapters to separate files.
        for i in "\${!chapter[@]}"; do
            : "\${chapter[$i]/$'
'*}"; : "\${_/# }"; : "\${_,,}"
            printf '%s
' "\${chapter[$i]}" > "manuscript/chapter\${i}.txt"
            printf '%s
' "chapter\${i}.txt" >> "manuscript/Book.txt"
        done
    }

    main
  `),[T.SOL]:I(`
    #ifndef EXAMPLES_ASSERT_HPP
    #define EXAMPLES_ASSERT_HPP

    # define m_assert(condition, message)
      do {
        if (! (condition)) {
          std::cerr << "Assertion \`" #condition "\` failed in " << __FILE__
                    << " line " << __LINE__ << ": " << message << std::endl;
          std::terminate();
        }
      } while (false)

    # define c_assert(condition)
        do {
          if (! (condition)) {
            std::cerr << "Assertion \`" #condition "\` failed in " << __FILE__
                      << " line " << __LINE__ << std::endl;
            std::terminate();
          }
        } while (false)
    #else
    #   define m_assert(condition, message) do { if (false) { (void)(condition); (void)sizeof(message); } } while (false)
    #   define c_assert(condition) do { if (false) { (void)(condition); } } while (false)
    #endif

    #endif // EXAMPLES_ASSERT_HPP
  `),[T.SQL]:I(`
    CREATE VIEW Failing_Students AS
    SELECT S_NAME, Student_ID
    FROM STUDENT
    WHERE GPA > 40;
  `),[T.ST]:I(`
    FUNCTION_BLOCK SubFB
    VAR_INPUT
    TimeIN : BOOL; (* Boolean input variable *)
    TimeQ : BOOL; (* Boolean input variable *)
    END_VAR
    VAR_IN_OUT
    Timer : TON; (* pointer to instance Time1 of TON – input/output variable *)
    END_VAR
    VAR_OUTPUT
    Time3 : TON; (* 3rd instance of TON *)
    END_VAR
    VAR
    Start : BOOL := TRUE; (* local Boolean variable *)
    END_VAR
  `),[T.SWIFT]:I(`
    if let bestPlayer = players.highestScoringPlayer() {
      recordHolder = """
        The record holder is (bestPlayer.name),        with a high score of (bestPlayer.highScore)!
      """
    } else {
      recordHolder = "No games have been played yet.")
    }
    print(recordHolder)
    // The record holder is Erin, with a high score of 271!

    let highestScore = players.highestScoringPlayer()?.highScore ?? 0
    // highestScore == 271
  `),[T.TCL]:I(`
    #!/usr/bin/tclsh

    set variableA 10
    set {variable B} test
    puts $variableA
    puts \${variable B}
  `),[T.TYPESCRIPT]:I(`
    import * as React from 'react';
    import { StandardProps } from '..';
    import { TypographyProps } from '../Typography';

    export interface ListItemTextProps
      extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ListItemTextClassKey> {
      disableTypography?: boolean;
      inset?: boolean;
      primary?: React.ReactNode;
      primaryTypographyProps?: Partial<TypographyProps>;
      secondary?: React.ReactNode;
      secondaryTypographyProps?: Partial<TypographyProps>;
    }

    export type ListItemTextClassKey =
      | 'root'
      | 'multiline'
      | 'dense'
      | 'inset'
      | 'primary'
      | 'secondary';

    declare const ListItemText: React.ComponentType<ListItemTextProps>;

    export default ListItemText;
  `),[T.VB]:I(`
    Imports System
    Imports System.Collections.Generic

    Module Module1

        Sub Main()
            Dim a As New M8Ball

            Do While True

                Dim q As String = ""
                Console.Write("ask me about the future... ")
                q = Console.ReadLine()

                If q.Trim <> "" Then
                    Console.WriteLine("the answer is... {0}", a.getAnswer(q))
                Else
                    Exit Do
                End If
            Loop

        End Sub

    End Module
  `),[T.XML]:I(`
    <?xml version="1.0" encoding="ISO-8859-1"?>  
    <note>  
      <to>Tove</to>  
      <from>Jani</from>  
      <heading>Reminder</heading>  
      <body>Don't forget me this weekend!</body>  
    </note>
  `),[T.YAML]:I(`
    %TAG ! tag:clarkevans.com,2002:
    --- !shape
      # Use the ! handle for presenting
      # tag:clarkevans.com,2002:circle
    - !circle
      center: &ORIGIN {x: 73, y: 129}
      radius: 7
    - !line
      start: *ORIGIN
      finish: { x: 89, y: 102 }
    - !label
      start: *ORIGIN
      color: 0xFFEEBB
      text: Pretty vector drawing.
  `)};function Ts(){const e=Qi("(min-width: 1024px)"),t=Ge(Qn),o=Ge(Qt),n=Ge(Zn),i={value:Rs[t],language:t,theme:o,path:`${t}-example`,options:{automaticLayout:!0,...n,scrollbar:{alwaysConsumeMouseWheel:!1,...(n==null?void 0:n.scrollbar)||{}}}};return e?P.jsx(To,{children:P.jsxs(un,{direction:"horizontal",children:[P.jsx(zt,{minSize:20,children:P.jsx(mt,{children:P.jsx(Bt,{height:"100%",...i})})}),P.jsx(dn,{className:"resize-handle",hitAreaMargins:{fine:5,coarse:5}}),P.jsx(zt,{defaultSize:30,minSize:20,children:P.jsx(Do,{})})]})}):P.jsxs(To,{children:[P.jsx(Do,{}),P.jsx(mt,{children:P.jsx(Bt,{height:"100%",...i}),...Nt("sdwsyg3",{})})],...Nt("s1kizbhm",{})})}const jo={original:I(`
    # @monaco-editor/react &middot; [![monthly downloads](https://img.shields.io/npm/dm/@monaco-editor/react)](https://www.npmjs.com/package/@monaco-editor/react) [![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/suren-atoyan/monaco-react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@monaco-editor/react.svg?style=flat)](https://www.npmjs.com/package/@monaco-editor/react) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/suren-atoyan/monaco-react/pulls)
    Monaco Editor for React
    
    :tada: the new section [Development / Playground](#development-playground) has been created - now you can run the playground and play with the internals of the library
    <br />
    :tada: &middot; version **v3.8.2** is here and it's already integrated with [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader)
    
    ## Synopsis
    
    Monaco editor wrapper for easy/one-line integration with React applications without needing to use webpack's (or any other module bundler's) configuration files.
    
    ## Motivation
    There is a well-known web technology based code editor called [Monaco Editor](https://microsoft.github.io/monaco-editor/) that powers [VS Code](https://code.visualstudio.com/). [There are also many ways to integrate](https://github.com/Microsoft/monaco-editor-samples/) it provided by monaco creators. But there were tons of problems with the integration of monaco with modern technologies; e.g React.
    
    There do already exist solutions for integration with React; e.g [this one](https://github.com/react-monaco-editor/react-monaco-editor) and [this one](https://github.com/jaywcjlove/react-monacoeditor). But they need custom webpack configuration for Monaco to fully work, which is not the "best" solution for things like create-react-app - [CRA](https://facebook.github.io/create-react-app/).
    
    **With this solution, you don't need webpack configuration files and it works great with React apps created by CRA or anything else.**
    
    #### Demo
    [Check it out!](https://monaco-react.surenatoyan.com/)
    
    ## Documentation
    
    #### Contents
    
    * [Installation](#installation)
    * [Introduction](#introduction)
    * [Usage](#usage)
      * [Simple Usage](#simple-usage)
      * [Get Value](#get-value)
      * [Monaco Instance](#monaco-instance)
        * [Config](#config)
      * [Editor Instance](#editor-instance)
      * [Controlled Editor](#controlled-editor)
      * [Notes](#notes)
        * [For \`electron\` users](#for-electron-users)
        * [For \`Next.js\` users](#for-nextjs-users)
      * [Create your own editor!](#create-your-own-editor)
    * [Development / Playground](#development-playground)
    * [Props](#props)
      * [Editor](#editor)
      * [Diff Editor](#diffeditor)
      * [Controlled Editor](#controlled-editor) 
    
    ### Installation
    
    \`\`\`bash
    npm install @monaco-editor/react 
    \`\`\`
    
    or
    
    \`\`\`bash
    yarn add @monaco-editor/react
    \`\`\`
    
    NOTE: For TypeScript type definitions, this package uses the [monaco-editor](https://www.npmjs.com/package/monaco-editor) package as a peer dependency. So, if you need types and don't already have the [monaco-editor](https://www.npmjs.com/package/monaco-editor) package installed, you will need to do so.
    
    ### Introduction
    
    Besides types, three main components are also exported from the package:
    
    * Editor
    * DiffEditor
    * ControlledEditor
    
    As well as the utility which gives you the ability to access the monaco instance (simply called "monaco")
    
    ### Usage
    
    #### Simple Usage
    
    Here is an example of a simple integration of monaco editor with a react project.
    You just need to import and render the Editor component.
    You can play with it [here](https://codesandbox.io/s/dreamy-lumiere-c8pib?fontsize=14)
    
    \`\`\`js
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from '@monaco-editor/react';
    
    const App = () => <Editor height="90vh" language="javascript" />;
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    <details><summary>Extended example</summary>
    
    \`\`\`js
    import React, { useState } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    import { FillSpinner as Loader } from "react-spinners-kit";
    
    import examples from "./examples";
    
    function App() {
      const [theme, setTheme] = useState("light");
      const [language, setLanguage] = useState("javascript");
      const [isEditorReady, setIsEditorReady] = useState(false);
    
      function handleEditorDidMount() {
        setIsEditorReady(true);
      }
    
      function toggleTheme() {
        setTheme(theme === "light" ? "vs-dark" : "light");
      }
    
      function toggleLanguage() {
        setLanguage(language === "javascript" ? "python" : "javascript");
      }
    
      return (
        <>
          <button onClick={toggleTheme} disabled={!isEditorReady}>
            Toggle theme
          </button>
          <button onClick={toggleLanguage} disabled={!isEditorReady}>
            Toggle language
          </button>
    
          <Editor
            height="90vh" // By default, it fully fits with its parent
            theme={theme}
            language={language}
            loading={<Loader />}
            value={examples[language]}
            editorDidMount={handleEditorDidMount}
            options={{ lineNumbers: "off" }}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    You can play with it [here](https://codesandbox.io/s/monaco-editor-react-u0fyv?fontsize=14)
    
    </details>
    
    #### Get Value
    
    You may ask, "how can we get the value of the editor". There is a prop called \`editorDidMount\`. It gets two arguments: the first is a function to get the editor value, the second is the editor instance.
    Here is an example of how you can implement it:
    You can play with it [here](https://codesandbox.io/s/example-for-issue-2-1hzz8?fontsize=14)
    
    \`\`\`js
    import React, { useRef, useState } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const [isEditorReady, setIsEditorReady] = useState(false);
      const valueGetter = useRef();
    
      function handleEditorDidMount(_valueGetter) {
        setIsEditorReady(true);
        valueGetter.current = _valueGetter;
      }
    
      function handleShowValue() {
        alert(valueGetter.current());
      }
    
      return (
        <>
          <button onClick={handleShowValue} disabled={!isEditorReady}>
            Show value
          </button>
    
          <Editor
            height="90vh"
            language="javascript"
            value="// write your code here"
            editorDidMount={handleEditorDidMount}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    #### Monaco Instance
    
    If you want to create your own language or theme, or modify existing ones you may need to access to the monaco instance. So, to that purpose, there is a utility called "monaco" exported from library and you can use it like this:
    
    \`\`\`js
    import { monaco } from '@monaco-editor/react';
    
    monaco
      .init()
      .then(monaco => {/* here is the instance of monaco, so you can use the \`monaco.languages\` or whatever you want */})
      .catch(error => console.error('An error occurred during initialization of Monaco: ', error));
    \`\`\`
    
    You can play with it [here](https://codesandbox.io/s/monaco-editorreact---monaco-instance-5pbmx?fontsize=14&hidenavigation=1&theme=dark)
    
    #### Config
    
    By default, monaco files are being downloaded from CDN. There is an ability to change this behavior, and other things concerning the AMD loader. We have a default [config file](./src/config/index.js) you can modify it by the shown way.
    
    \`\`\`js
    import { monaco } from '@monaco-editor/react';
    
    // you can change the source of the monaco files
    monaco.config({ paths: { vs: '...' } });
    
    // you can configure the locales
    monaco.config({ 'vs/nls': { availableLanguages: { '*': 'de' } } });
    
    // or
    monaco.config({
      paths: {
        vs: '...',
      },
      'vs/nls' : {
        availableLanguages: {
          '*': 'de',
        },
      },
    });
    \`\`\`
    
    NOTE: your passed object will be deeply merged with the [default one](./src/config/index.js).
    
    #### Editor Instance
    
    It's handy to have access to the editor instance for some reason.
    
    As we have already mentioned, the \`editorDidMount\` prop gets the editor instance as a second argument.
    Here is an example of how you can use the editor instance.
    You can play with it [here](https://codesandbox.io/s/monaco-editorreact---editor-instance-zgh90)
    
    \`\`\`js
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const editorRef = useRef();
    
      function handleEditorDidMount(_, editor) {
        editorRef.current = editor;
        // Now you can use the instance of monaco editor
        // in this component whenever you want
      }
    
      function listenEditorChanges() {
        editorRef.current.onDidChangeModelContent(ev => {
          console.log(editorRef.current.getValue());
        });
      }
    
      return (
        <>
          <button onClick={listenEditorChanges} disabled={!!editorRef.current}>
            Press to listen editor changes (see console)
          </button>
          <Editor
            height="90vh"
            editorDidMount={handleEditorDidMount}
            language="javascript"
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    #### Controlled Editor
    
    The default export of the library is uncontrolled react component:
    
    \`\`\`import Editor from '@monaco-editor/react' \`\`\`
    
    We make it by default uncontrolled to keep the nature of the monaco editor as much as it is possible. And based on our experience we can say that in most cases it will cover your needs, as you can see in the examples above. And we highly recommend using that one.
    
    But in any case, if you want a controlled one, there is an option for that. The library exports \`ControlledEditor\` (as named export). It is the same as the default one (\`Editor\`), plus it has \`onChange\` method. It is working a little bit different comparing with, for example, the controlled \`input\` field.
    
    Here is \`onChange\` prop, it will be called each time when the content of the editor is changed. It gets two arguments, first one is the "event" object of monaco, the second one is the current value of the editor.
    
    You can use it without circulating the data, and just by returning it from \`onChange\` simple setting the new value; see the example (You can play with it [here](https://codesandbox.io/s/monaco-editorreact---controlled-editor-2-7iqpv?fontsize=14))
    
    \`\`\`js
    import React from "react";
    import ReactDOM from "react-dom";
    
    import { ControlledEditor } from "@monaco-editor/react";
    
    const BAD_WORD = "eval";
    const WARNING_MESSAGE = " <- hey man, what's this?";
    
    function App() {
      const handleEditorChange = (ev, value) => {
        return value.includes(BAD_WORD) && !value.includes(WARNING_MESSAGE)
          ? value.replace(BAD_WORD, BAD_WORD + WARNING_MESSAGE)
          : value.includes(WARNING_MESSAGE) && !value.includes(BAD_WORD)
            ? value.replace(WARNING_MESSAGE, "")
            : value;
      };
    
      return (
        <ControlledEditor
          height="90vh"
          value="// try to write e%v%a%l somewhere 😈 
"
          onChange={handleEditorChange}
          language="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    Or like in usual controlled components; see the example (You can play with it [here](https://codesandbox.io/s/monaco-editorreact---controlled-editor-yg5il?fontsize=14))
    
    \`\`\`js
    import React, { useState } from "react";
    import ReactDOM from "react-dom";
    
    import { ControlledEditor } from "@monaco-editor/react";
    
    const BAD_WORD = "eval";
    const WARNING_MESSAGE = " <- hey man, what's this?";
    
    function App() {
      const [value, setValue] = useState("// try to write e%v%a%l somewhere 😈 
");
    
      const handleEditorChange = (ev, value) => {
        setValue(
          value.includes(BAD_WORD) && !value.includes(WARNING_MESSAGE)
            ? value.replace(BAD_WORD, BAD_WORD + WARNING_MESSAGE)
            : value.includes(WARNING_MESSAGE) && !value.includes(BAD_WORD)
              ? value.replace(WARNING_MESSAGE, "")
              : value
        );
      };
    
      return (
        <ControlledEditor
          height="90vh"
          value={value}
          onChange={handleEditorChange}
          language="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    <details><summary>Another example</summary>
    
    \`\`\`js
    import React from "react";
    import ReactDOM from "react-dom";
    
    import { ControlledEditor } from "@monaco-editor/react";
    
    function App() {
      const handleEditorChange = (ev, value) => {
        return \`"it doesn't matter what you are writing, I am staying here!!!"\`;
      };
    
      return (
        <ControlledEditor
          height="90vh"
          onChange={handleEditorChange}
          language="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    You can play with it [here](https://codesandbox.io/s/monaco-editorreact---controlled-editor-3-h0uro?fontsize=14)
    
    </details>
    
    #### Notes
    
    ##### For \`electron\` users
    
    As a usual React component, this one also works fine with an electron-react environment, without need to have a webpack configuration or other extra things. But there are several cases that developers usually face to and sometimes it can be confusing. Here they are:
    
    1) **You see loading screen stuck**
    Usually, it's because your environment doesn't allow you to load external sources. By default, it loads monaco sources from CDN. You can see the [default configuration](https://github.com/suren-atoyan/monaco-react/blob/master/src/config/index.js#L3). But sure you can change that behavior; the library is fully configurable. Read about it [here](https://github.com/suren-atoyan/monaco-react#config). So, if you want to download it from your local files, you can do it like this:
    
    \`\`\`javascript
    import { monaco } from '@monaco-editor/react';
    
    monaco.config({ paths: { vs: '../path-to-monaco' } });
    \`\`\`
    
    2) **Based on your electron environment it can be required to have an absolute URL**
    The utility function taken from [here](https://github.com/microsoft/monaco-editor-samples/blob/master/electron-amd-nodeIntegration/electron-index.html) can help you to achieve that. Let's imagine you have \`monaco-editor\` package installed and you want to load monaco from the \`node_modules\` rather than from CDN: in that case, you can write something like this:
    
    \`\`\`javascript
    function ensureFirstBackSlash(str) {
        return str.length > 0 && str.charAt(0) !== '/'
            ? '/' + str
            : str;
    }
    
    function uriFromPath(_path) {
        const pathName = path.resolve(_path).replace(/\\/g, '/');
        return encodeURI('file://' + ensureFirstBackSlash(pathName));
    }
    
    monaco.config({
      paths: {
        vs: uriFromPath(
          path.join(__dirname, '../node_modules/monaco-editor/min/vs')
        )
      }
    });
    \`\`\`
    
    There were several issues about this topic that can be helpful too - [1](https://github.com/suren-atoyan/monaco-react/issues/48) [2](https://github.com/suren-atoyan/monaco-react/issues/12) [3](https://github.com/suren-atoyan/monaco-react/issues/58) [4](https://github.com/suren-atoyan/monaco-react/issues/87)
    
    And if you use \`electron\` with \`monaco\` and \`react\` and have faced an issue different than the above-discribed ones, please let us know to make this section more helpful.
    
    ##### For \`Next.js\` users
    
    Like other React components, this one also works with \`Next.js\` without a hitch. The part of the source that should be pre-parsed is optimized for server-side rendering, so, in usual cases, it will work fine, but if you want to have access, for example, to [\`monacoInstance\`](https://github.com/suren-atoyan/monaco-react#monaco-instance) you should be aware that it wants to access the \`document\` object, and it requires browser environment. Basically you just need to avoid running that part out of browser environment, there are several ways to do that. The one is described [here](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr).
    
    And if you use \`monaco\` with \`Next.js\` and have faced an issue different than the above-described one, please let us know to make this section more helpful.
    
    #### Create your own editor
    
    First, let's understand what exactly the library provides us. There are two major parts exported from the library: the \`Editor\` component and the \`monaco\` utility.
    
    The \`Editor\` is a React component; it's a logic of bindings between monaco editor and the React environment. It receives props and organizes their appliance to the monaco.
    
    The \`monaco\` utility is a collection of functions that are being used to setup monaco editor into your browser. \`monaco.init()\`  handles the whole initialization process and returns to you the instance of the monaco editor - \`monaco.init().then(monacoInstance => ...)\`. The \`Editor\` component uses this utility, gains access to \`monacoInstance\`, and creates the editor. Here is the implementation of the \`Editor\` component. You can use the same technique to create your own \`Editor\`. You can just import the \`monaco\` utility, access to \`monacoInstance\`, and create your own editor with your own custom logic. The shortest way to do it:
    
    \`\`\`javascript
    import { monaco } from '@monaco-editor/react';
    
    monaco.init().then(monacoInstance => {
      const wrapper = document.getElementById("root");
      const properties = {
        value: "function hello() {
	alert('Hello world!');
}",
      language:  "javascript",
      }
      
      monacoInstance.editor.create(wrapper,  properties);
    });
    \`\`\`
    
    That's all. You can wrap it into a React component, or Vue, or Angular or leave it as vanilla one or whatever you want; it's written in pure js.
    
    You can play with the example [here](https://codesandbox.io/s/create-your-own-editor-fvi5x?file=/src/index.js)
    
    ### Development-Playground
    
    It's always important to have a place, where you can play with the internals of the library. The \`playground\` is a minimal \`React\` app that directly uses the sources of the library. So, if you are going to open a PR, or want to check something, or just want to try the freshest state of the library, you can run the playground and enjoy it
    
    - clone the repository
    
    \`\`\`bash
    git clone https://github.com/suren-atoyan/monaco-react.git
    \`\`\`
    
    - go to the library folder
    
    \`\`\`bash
    cd monaco-react
    \`\`\`
    
    - install the library's dependencies
    
    \`\`\`bash
    npm install # yarn
    \`\`\`
    
    - go to the playground
    
    \`\`\`bash
    cd playground
    \`\`\`
    
    - install the playground's dependencies
    
    \`\`\`bash
    npm install # yarn
    \`\`\`
    
    - and run the playground
    
    \`\`\`bash
    npm run dev # yarn dev
    \`\`\`
    
        monaco-react
        ├── playground
        │   ├── src/      # playground sources
        ├── src/          # library sources
        └── ...
    
    If you want to change something in the library, go to \`monaco-react/src/...\`, the library will be automatically re-built and the playground will use the latest build
    
    ### Props
    
    #### Editor
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | value | string || The editor value |
    | language | enum: ... | | All languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor |
    | editorDidMount | func | noop | **Signature: function(getEditorValue: func, monaco: object) => void** <br/> This function will be called right after monaco editor is mounted and is ready to work. It will get the editor instance as a second argument |
    | theme | enum: 'light' | 'vs-dark' | 'light' | Default themes of monaco |
    | line | number |  | The line to jump on it |
    | width | union: number | string | '100%' | The width of the editor wrapper |
    | height | union: number | string | '100%' | The height of the editor wrapper |
    | loading | union: React element | string | 'Loading...' | The loading screen before the editor is loaded |
    | options | object | {} | [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html) |
    | className | string || monaco container className |
    | wrapperClassName | string || monaco container wrapper className |
    
    #### DiffEditor
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | original | string || The original source (left one) value |
    | modified | string || The modified source (right one) value |
    | language | enum: ... | | All languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor |
    | originalLanguage | enum: ... | *language | This prop gives you the opportunity to specify the language of the \`original\` source separately, otherwise, it will get the value of \`language\` property. (Possible values are the same as \`language\`) |
    | modifiedLanguage | enum: ... | *language | This prop gives you the opportunity to specify the language of the \`modified\` source separately, otherwise, it will get the value of \`language\` property. (Possible values are the same as \`language\`) |
    | editorDidMount | func | noop | **Signature: function(getModifiedEditorValue: func, getOriginalEditorValue: func, monaco: object) => void** <br/> This function will be called right after monaco editor is mounted and is ready to work. It will get the editor instance as a third argument |
    | theme | enum: 'light' | 'vs-dark' | 'light' | Default themes of monaco |
    | width | union: number | string | '100%' | The width of the editor wrapper |
    | height | union: number | string | '100%' | The height of the editor wrapper |
    | loading | union: React element | string | 'Loading...' | The loading screen before the editor is loaded |
    | options | object | {} | [IDiffEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffeditorconstructionoptions.html) |
    | className | string || monaco container className |
    | wrapperClassName | string || monaco container wrapper className |
    
    #### Controlled Editor
    
    Extended from Editor (the same props as in Editor plus onChange introduced below)
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | onChange | func | noop | **Signature: function(ev: any, value: string | undefined) => string | undefined** onChange method of monaco editor. It will be called right after the content of the current model is changed. It gets two arguments: first one is the "event" object of monaco, second one is the current value. NOTE: onChange can return the new value, which will be inserted to editor |
    
    ## License
    
    [MIT](./LICENSE)
  `),modified:I(`
    # @monaco-editor/react &middot; [![monthly downloads](https://img.shields.io/npm/dm/@monaco-editor/react)](https://www.npmjs.com/package/@monaco-editor/react) [![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/suren-atoyan/monaco-react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@monaco-editor/react.svg?style=flat)](https://www.npmjs.com/package/@monaco-editor/react) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/suren-atoyan/monaco-react/pulls)
    Monaco Editor for React &middot; use the [monaco-editor](https://microsoft.github.io/monaco-editor/) in **any** [React](https://reactjs.org/) application without needing to use \`webpack\` (or \`rollup\`/\`parcel\`/etc) configuration files / plugins
    
    <hr />
    
    :zap: [multi-model editor](#multi-model-editor) is already supported; enjoy it :tada:
    <br />
    :tada: version \`v4\` is here - to see what's new in the new version and how to migrate from \`v3\`, please read this [doc](./v4.changes.md) (also, if you need the old version \`README\`, it's [here](https://github.com/suren-atoyan/monaco-react/blob/v3.8.3/README.md))
    <br />
    :tada: the new section [Development / Playground](#development-playground) has been created - now you can run the playground and play with the internals of the library
    <br />
    :tada: it's already integrated with [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader)
    
    <hr />
    
    ## Synopsis
    
    \`Monaco\` editor wrapper for easy/one-line integration with any \`React\` application without needing to use \`webpack\` (or any other module bundler) configuration files / plugins. It can be used with apps generated by \`create-react-app\`, \`create-snowpack-app\`, \`vite\`, \`Next.js\` or any other app generators - **you don't need to eject or rewire them**. [You can use it even from CDN without bundlers](https://codesandbox.io/s/cdn-example-fnhfr?file=/index.html)
    
    ## Motivation
    
    The [monaco-editor](https://microsoft.github.io/monaco-editor/) is a well-known web technology based code editor that powers [VS Code](https://code.visualstudio.com/). This library handles the setup process of the \`monaco-editor\` and provides a clean \`API\` to interact with \`monaco\` from any \`React\` environment
    
    #### Demo
    [Check it out!](https://monaco-react.surenatoyan.com/)
    
    ## Documentation
    
    * [Installation](#installation)
    * [Introduction](#introduction)
    * [Usage](#usage)
      * [Simple usage](#simple-usage)
      * [Get value](#get-value)
      * [\`editor instance\`](#editor-instance)
      * [\`monaco instance\`](#monaco-instance)
      * [\`useMonaco\`](#usemonaco)
      * [\`loader/config\`](#loader-config)
      * [Multi-model editor](#multi-model-editor)
      * [\`onValidate\`](#onvalidate)
      * [Notes](#notes)
        * [For \`electron\` users](#for-electron-users)
        * [For \`Next.js\` users](#for-nextjs-users)
      * [Create your own editor!](#create-your-own-editor)
    * [Development / Playground](#development-playground)
    * [Props](#props)
      * [\`Editor\`](#editor)
      * [\`Diff Editor\`](#diffeditor)
    
    ### Installation
    
    \`\`\`bash
    npm install @monaco-editor/react 
    \`\`\`
    
    or
    
    \`\`\`bash
    yarn add @monaco-editor/react
    \`\`\`
    
    or you can use \`CDN\`. [Here is an example](https://codesandbox.io/s/cdn-example-fnhfr?file=/index.html)
    
    **NOTE**: For \`TypeScript\` type definitions, this package uses the [monaco-editor](https://www.npmjs.com/package/monaco-editor) package as a peer dependency. So, if you need types and don't already have the [monaco-editor](https://www.npmjs.com/package/monaco-editor) package installed, you will need to do so
    
    ### Introduction
    
    Besides types, the library exports \`Editor\`and \`DiffEditor\` components, as well as the \`loader\` utility and the \`useMonaco\` hook:
    
    \`\`\`javascript
    import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
    \`\`\`
    
    ### Usage
    
    #### Simple usage
    
    Here is an example of a simple integration of \`monaco\` editor with a \`React\` project.
    <br />
    You just need to import and render the \`Editor\` component:
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      return (
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/simple-usage-uyf5n?file=/src/App.js)
    
    <details><summary>Extended example</summary>
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      function handleEditorChange(value, event) {
        // here is the current value
      }
    
      function handleEditorDidMount(editor, monaco) {
        console.log("onMount: the editor instance:", editor);
        console.log("onMount: the monaco instance:", monaco)
      }
    
      function handleEditorWillMount(monaco) {
        console.log("beforeMount: the monaco instance:", monaco);
      }
    
      function handleEditorValidation(markers) {
        // model markers
        // markers.forEach(marker => console.log('onValidate:', marker.message));
      }
    
      return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          onValidate={handleEditorValidation}
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/simple-usage-extended-3ivw2?file=/src/App.js)
    
    </details>
    
    #### Get value
    
    There are two options to get the current value:
    
    1) get the current model value from the \`editor\` instance
    
    \`\`\`javascript
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const editorRef = useRef(null);
    
      function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor; 
      }
      
      function showValue() {
        alert(editorRef.current.getValue());
      }
    
      return (
      <>
        <button onClick={showValue}>Show value</button>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={handleEditorDidMount}
        />
      </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/get-value-r9be5?file=/src/App.js)
    
    2) get the current model value via \`onChange\` prop
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      function handleEditorChange(value, event) {
        console.log("here is the current model value:", value);
      }
    
      return (
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/onchange-4nf6g?file=/src/App.js)
    
    <details><summary>(get the \`DiffEditor\` values via \`editor\` instance)</summary>
    
    \`\`\`javascript
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import { DiffEditor } from "@monaco-editor/react";
    
    function App() {
      const diffEditorRef = useRef(null);
    
      function handleEditorDidMount(editor, monaco) {
        diffEditorRef.current = editor;
      }
    
      function showOriginalValue() {
        alert(diffEditorRef.current.getOriginalEditor().getValue());
      }
    
      function showModifiedValue() {
        alert(diffEditorRef.current.getModifiedEditor().getValue());
      }
    
      return (
        <>
          <button onClick={showOriginalValue}>show original value</button>
          <button onClick={showModifiedValue}>show modified value</button>
          <DiffEditor
            height="90vh"
            defaultLanguage="javascript"
            original="// the original code"
            modified="// the modified code"
            onMount={handleEditorDidMount}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/get-values-diffeditor-c6xrg?file=/src/App.js)
    
    </details>
    
    #### \`editor instance\`
    
    The \`editor\` instance is exposed from the \`onMount\` prop as a first parameter, the second is the \`monaco\` instance
    
    \`\`\`javascript
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const editorRef = useRef(null);
    
      function handleEditorDidMount(editor, monaco) {
        // here is the editor instance
        // you can store it in \`useRef\` for further usage
        editorRef.current = editor; 
      }
    
      return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={handleEditorDidMount}
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/editor-instance-354cr?file=/src/App.js)
    
    #### \`monaco instance\`
    
    There are three options to get the \`monaco\` instance:
    
    1) via \`onMount/beforeMount\`
    
    \`\`\`javascript
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const monacoRef = useRef(null);
    
      function handleEditorWillMount(monaco) {
        // here is the monaco instance
        // do something before editor is mounted
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      }
    
      function handleEditorDidMount(editor, monaco) {
        // here is another way to get monaco instance
        // you can also store it in \`useRef\` for further usage
        monacoRef.current = editor; 
      }
    
      return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/simple-usage-forked-il8kt?file=/src/App.js)
    
    2) via \`loader\` utility
    
    \`\`\`javascript
    import { loader } from "@monaco-editor/react";
    
    loader.init().then(monaco => console.log("here is the monaco isntance:", monaco));
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/monaco-instance-loader-ndzu9?file=/src/App.js)
    
    3) via \`useMonaco\` hook
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor, { useMonaco } from "@monaco-editor/react";
    
    function App() {
      const monaco = useMonaco();
      
      useEffect(() => {
        if (monaco) {
          console.log("here is the monaco isntance:", monaco);
        }
      }, [monaco]);
    
      return (
        <Editor
          height="90vh"
          defaultValue="// some comment"
          defaultLanguage="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/monaco-instance-usemonaco-88eml?file=/src/App.js)
    
    #### \`useMonaco\`
    
    \`useMonaco\` is a \`React\` hook that returns the instance of the \`monaco\`. But there is an important note that should be considered: the initialization process is being handled by the \`loader\` utility (the reference of [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader)): that process is being done asynchronously and only once. So, if the first initiator of the initialization is \`useMonaco\` hook, the first returned value will be null, due to its asynchronous installation. Just check the returned value of \`useMonaco\`
    
    \`\`\`javascript
    import React, { useEffect } from "react";
    import ReactDOM from "react-dom";
    
    import Editor, { useMonaco } from "@monaco-editor/react";
    
    function App() {
      const monaco = useMonaco();
      
      useEffect(() => {
        // do conditional chaining
        monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        // or make sure that it exists by other ways
        if (monaco) {
          console.log("here is the monaco instance:", monaco);
        }
      }, [monaco]);
    
      return (
        <Editor
          height="90vh"
          defaultValue="// some comment"
          defaultLanguage="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/usemonaco-9rpc4)
    
    #### \`loader-config\`
    
    The library exports (named) the utility called \`loader\`. Basically, it's the reference of [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader). By default, \`monaco\` files are being downloaded from \`CDN\`. There is an ability to change this behavior, and other things concerning the \`AMD\` loader of \`monaco\`. We have a default [config file](https://github.com/suren-atoyan/monaco-loader/blob/master/src/config/index.js) that you can modify by the way shown below:
    
    \`\`\`js
    import { loader } from "@monaco-editor/react";
    
    // you can change the source of the monaco files
    loader.config({ paths: { vs: "..." } });
    
    // you can configure the locales
    loader.config({ "vs/nls": { availableLanguages: { "*": "de" } } });
    
    // or
    loader.config({
      paths: {
        vs: "...",
      },
      "vs/nls" : {
        availableLanguages: {
          "*": "de",
        },
      },
    });
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/loader-ry1bb?file=/src/App.js)
    
    **NOTE**: your passed object will be deeply merged with the [default one](https://github.com/suren-atoyan/monaco-loader/blob/master/src/config/index.js)
    
    #### Multi-model editor
    
    When you render the \`Editor\` component, a default model is being created. It's important to mention that when you change the \`language\` or \`value\` props, they affect the same model that has been auto-created at the mount of the component. In most cases it's okay, but the developers face problems when they want to implement a multi-model editor to support tabs/files like in \`IDE\`s. And previously to handle multiple models they had to do it manually and out of the component. Now, the multi-model \`API\` is supported :tada: Let's check how it works. There are three parameters to create a model - \`value\`, \`language\` and \`path\` (\`monaco.editor.createModel(value, language, monaco.Uri.parse(path))\`). You can consider last one (\`path\`) as an identifier for the model. The \`Editor\` component, now, has a \`path\` prop. When you specify a \`path\` prop, the \`Editor\` component checks if it has a model by that path or not. If yes, the existing model will be shown, otherwise, a new one will be created (and stored). Using this technique you can correspond your files with paths, and create a fully multi-model editor. You can open your file, do some changes, choose another file, and when you come back to the first one the previous model will be shown with the whole view state, text selection, undo stack, scroll position, etc. ([simple demo](https://codesandbox.io/s/multi-model-editor-kugi6?file=/src/App.js))
    
    Here is a simple example: let's imagine we have a \`JSON\` like representation of some file structure, something like this:
    
    \`\`\`javascript
    const files = {
      "script.js": {
        name: "script.js",
        language: "javascript",
        value: someJSCodeExample,
      },
      "style.css": {
        name: "style.css",
        language: "css",
        value: someCSSCodeExample,
      },
      "index.html": {
        name: "index.html",
        language: "html",
        value: someHTMLCodeExample,
      },
    }
    \`\`\`
    
    And here is our simple multi-model editor implementation:
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const [fileName, setFileName] = useState("script.js");
    
      const file = files[fileName];
    
      return (
        <>
          <button disabled={fileName === "script.js"} onClick={() => setFileName("script.js")}>script.js</button>
          <button disabled={fileName === "style.css"} onClick={() => setFileName("style.css")}>style.css</button>
          <button disabled={fileName === "index.html"} onClick={() => setFileName("index.html")}>index.html</button>
          <Editor
            height="80vh"
            theme="vs-dark"
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    The properties:
    
    - \`defaultValue\`
    - \`defaultLanguage\`
    - \`defaultPath\`
    - \`value\`
    - \`language\`
    - \`path\`
    - \`saveViewState\`
    
    will give you more flexibility in working with a multi-model editor.
    
    **NOTE**
    
    \`defaultValue\`, \`defaultLanguage\`, and \`defaultPath\` are being considered **only** during a new model creation
    <br />
    \`value\`, \`language\`, and \`path\` are being tracked the **whole time**
    <br />
    \`saveViewState\` is an indicator whether to save the models' view states between model changes or not
    
    [codesandbox](https://codesandbox.io/s/multi-model-editor-kugi6?file=/src/App.js)
    
    #### \`onValidate\`
    
    \`onValidate\` is an additional property. An event is emitted when the content of the current model is changed and the current model markers are ready. It will be fired with the current model markers
    
    \`\`\`js
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      function handleEditorValidation(markers) {
        // model markers
        markers.forEach(marker => console.log("onValidate:", marker.message));
      }
    
      return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// let's write some broken code 😈"
          onValidate={handleEditorValidation}
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/onvalidate-4t5c2?file=/src/App.js)
    
    It's important to mention that according to [monaco-editor](https://microsoft.github.io/monaco-editor/), the whole supported languages are divided into two groups:
    
    1) languages that have rich \`IntelliSense\` and validation
    
    - \`TypeScript\`
    - \`JavaScript\`
    - \`CSS\`
    - \`LESS\`
    - \`SCSS\`
    - \`JSON\`
    - \`HTML\`
    
    2) languages with only basic syntax colorization
    
    - \`XML\`
    - \`PHP\`
    - \`C#\`
    - \`C++\`
    - \`Razor\`
    - \`Markdown\`
    - \`Diff\`
    - \`Java\`
    - \`VB\`
    - \`CoffeeScript\`
    - \`Handlebars\`
    - \`Batch\`
    - \`Pug\`
    - \`F#\`
    - \`Lua\`
    - \`Powershell\`
    - \`Python\`
    - \`Ruby\`
    - \`SASS\`
    - \`R\`
    - \`Objective-C\`
    
    **As you can guess, \`onValidate\` prop will work only with the languages from the first group**
    
    #### Notes
    
    ##### For \`electron\` users
    
    As a usual \`React\` component, this one also works fine with an electron-react environment, without need to have a \`webpack\` configuration or other extra things. But there are several cases that developers usually face to and sometimes it can be confusing. Here they are:
    
    1) **You see loading screen stuck**
    Usually, it's because your environment doesn't allow you to load external sources. By default, it loads \`monaco\` sources from \`CDN\`. You can see the [default configuration](https://github.com/suren-atoyan/monaco-loader/blob/master/src/config/index.js). But sure you can change that behavior; the library is fully configurable. Read about it [here](https://github.com/suren-atoyan/monaco-react#config). So, if you want to download it from your local files, you can do it like this:
    
    \`\`\`javascript
    import { loader } from "@monaco-editor/react";
    
    loader.config({ paths: { vs: "../path-to-monaco" } });
    \`\`\`
    
    2) **Based on your electron environment it can be required to have an absolute URL**
    The utility function taken from [here](https://github.com/microsoft/monaco-editor-samples/blob/master/electron-amd-nodeIntegration/electron-index.html) can help you to achieve that. Let's imagine you have \`monaco-editor\` package installed and you want to load monaco from the \`node_modules\` rather than from CDN: in that case, you can write something like this:
    
    \`\`\`javascript
    function ensureFirstBackSlash(str) {
        return str.length > 0 && str.charAt(0) !== "/"
            ? "/" + str
            : str;
    }
    
    function uriFromPath(_path) {
        const pathName = path.resolve(_path).replace(/\\/g, "/");
        return encodeURI("file://" + ensureFirstBackSlash(pathName));
    }
    
    loader.config({
      paths: {
        vs: uriFromPath(
          path.join(__dirname, "../node_modules/monaco-editor/min/vs")
        )
      }
    });
    \`\`\`
    
    There were several issues about this topic that can be helpful too - [1](https://github.com/suren-atoyan/monaco-react/issues/48) [2](https://github.com/suren-atoyan/monaco-react/issues/12) [3](https://github.com/suren-atoyan/monaco-react/issues/58) [4](https://github.com/suren-atoyan/monaco-react/issues/87)
    
    And if you use \`electron\` with \`monaco\` and \`react\` and have faced an issue different than the above-discribed ones, please let us know to make this section more helpful
    
    ##### For \`Next.js\` users
    
    Like other React components, this one also works with \`Next.js\` without a hitch. The part of the source that should be pre-parsed is optimized for server-side rendering, so, in usual cases, it will work fine, but if you want to have access, for example, to [\`monaco instance\`](https://github.com/suren-atoyan/monaco-react#monaco-instance) you should be aware that it wants to access the \`document\` object, and it requires browser environment. Basically you just need to avoid running that part out of browser environment, there are several ways to do that. The one is described [here](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr)
    
    And if you use \`monaco\` with \`Next.js\` and have faced an issue different than the above-described one, please let us know to make this section more helpful
    
    #### Create your own editor
    
    Under the hood this library uses [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader) that provides a utility called \`loader\`. The \`loader\` utility is a collection of functions that are being used to setup \`monaco\` editor into your browser. \`loader.init()\`  handles the whole initialization process and returns the instance of the \`monaco\` - \`loader.init().then(monaco => console.log("here is the monaco isntance:", monaco))\`. The \`Editor\` component uses this utility, gains access to \`monaco instance\` and creates the editor. [Here](https://github.com/suren-atoyan/monaco-react/blob/master/src/Editor/Editor.js) is the implementation of the \`Editor\` component. You can use the same technique to create your own \`Editor\`. You can just import the \`loader\` utility, access to \`monaco instance\`, and create your own editor with your own custom logic. The shortest way to do it:
    
    \`\`\`javascript
    import loader from "@monaco-editor/loader";
    
    loader.init().then(monaco => {
      const wrapper = document.getElementById("root");
      wrapper.style.height = "100vh";
      const properties = {
        value: "function hello() {
	alert("Hello world!");
}",
        language:  "javascript",
      }
      
      monaco.editor.create(wrapper,  properties);
    });
    \`\`\`
    
    That's all. You can wrap it into a \`React\` component, or \`Vue\`, or \`Angular\` or leave it as vanilla one or whatever you want; it's written in pure \`js\`
    
    [codesandbox](https://codesandbox.io/s/create-your-own-editor-pd01u?file=/src/index.js)
    
    ### Development-Playground
    
    It's always important to have a place, where you can play with the internals of the library. The \`playground\` is a minimal \`React\` app that directly uses the sources of the library. So, if you are going to open a \`PR\`, or want to check something, or just want to try the freshest state of the library, you can run the playground and enjoy it
    
    - clone the repository
    
    \`\`\`bash
    git clone https://github.com/suren-atoyan/monaco-react.git
    \`\`\`
    
    - go to the library folder
    
    \`\`\`bash
    cd monaco-react
    \`\`\`
    
    - install the library's dependencies
    
    \`\`\`bash
    npm install # yarn
    \`\`\`
    
    - go to the playground
    
    \`\`\`bash
    cd playground
    \`\`\`
    
    - install the playground's dependencies
    
    \`\`\`bash
    npm install # yarn
    \`\`\`
    
    - and run the playground
    
    \`\`\`bash
    npm run dev # yarn dev
    \`\`\`
    
        monaco-react
        ├── playground
        │   ├── src/      # playground sources
        ├── src/          # library sources
        └── ...
    
    If you want to change something in the library, go to \`monaco-react/src/...\`, the library will be automatically re-built and the playground will use the latest build
    
    ### Props
    
    #### \`Editor\`
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | defaultValue | string || Default value of the current model |
    | defaultLanguage | string || Default language of the current model |
    | defaultPath | string || Default path of the current model. Will be passed as the third argument to \`.createModel\` method - \`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))\` |
    | value | string || Value of the current model |
    | language | enum: ... | | Language of the current model (all languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor) |
    | path | string || Path of the current model. Will be passed as the third argument to \`.createModel\` method - \`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))\` |
    | theme | enum: "light" | "vs-dark" | "light" | The theme for the monaco. Available options "vs-dark" | "light". Define new themes by \`monaco.editor.defineTheme\` |
    | line | number |  | The line to jump on it |
    | loading | React Node | "Loading..." | The loading screen before the editor will be mounted
    | options | object | {} | [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html) |
    | overrideServices | object | {} | [IEditorOverrideServices ](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroverrideservices.html) |
    | saveViewState | boolean | true | Indicator whether to save the models' view states between model changes or not |
    | keepCurrentModel | boolean | false | Indicator whether to dispose the current model when the Editor is unmounted or not |
    | width | union: number | string | "100%" | Width of the editor wrapper |
    | height | union: number | string | "100%" | Height of the editor wrapper |
    | className | string || Class name for the editor container |
    | wrapperClassName | string || Class name for the editor container wrapper |
    | beforeMount | func | noop | **Signature: function(monaco: Monaco) => void** <br/> An event is emitted before the editor is mounted. It gets the \`monaco\` instance as a first argument|
    | onMount | func | noop | **Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void** <br/> An event is emitted when the editor is mounted. It gets the \`editor\` instance as a first argument and the \`monaco\` instance as a second|
    | onChange | func || **Signature: function(value: string | undefined, ev: monaco.editor.IModelContentChangedEvent) => void** <br/> An event is emitted when the content of the current model is changed|
    | onValidate | func | noop | **Signature: function(markers: monaco.editor.IMarker[]) => void** <br/> An event is emitted when the content of the current model is changed and the current model markers are ready|
    
    #### \`DiffEditor\`
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | original | string || The original source (left one) value |
    | modified | string || The modified source (right one) value |
    | language | enum: ... | | Language for the both models - original and modified (all languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor) |
    | originalLanguage | enum: ... | | This prop gives you the opportunity to specify the language of the original source separately, otherwise, it will get the value of the language property |
    | modifiedLanguage | enum: ... | | This prop gives you the opportunity to specify the language of the modified source separately, otherwise, it will get the value of language property |
    | originalModelPath | string || Path for the "original" model. Will be passed as a third argument to \`.createModel\` method - \`monaco.editor.createModel(..., ..., monaco.Uri.parse(originalModelPath))\` |
    | modifiedModelPath | string || Path for the "modified" model. Will be passed as a third argument to \`.createModel\` method - \`monaco.editor.createModel(..., ..., monaco.Uri.parse(modifiedModelPath))\` |
    | keepCurrentOriginalModel | boolean | false | Indicator whether to dispose the current original model when the DiffEditor is unmounted or not |
    | keepCurrentModifiedModel | boolean | false | Indicator whether to dispose the current modified model when the DiffEditor is unmounted or not |
    | theme | enum: "light" | "vs-dark" | "light" | The theme for the monaco. Available options "vs-dark" | "light". Define new themes by \`monaco.editor.defineTheme\` |
    | line | number |  | The line to jump on it |
    | loading | React Node | "Loading..." | The loading screen before the editor will be mounted
    | options | object | {} | [IDiffEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffeditorconstructionoptions.html) |
    | width | union: number | string | "100%" | Width of the editor wrapper |
    | height | union: number | string | "100%" | Height of the editor wrapper |
    | className | string || Class name for the editor container |
    | wrapperClassName | string || Class name for the editor container wrapper |
    | beforeMount | func | noop | **Signature: function(monaco: Monaco) => void** <br/> An event is emitted before the editor mounted. It gets the \`monaco\` instance as a first argument|
    | onMount | func | noop | **Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void** <br/> An event is emitted when the editor is mounted. It gets the \`editor\` instance as a first argument and the \`monaco\` instance as a second|
    
    ## License
    
    [MIT](./LICENSE)
  `)};function Is(){const e=Ge(Qt);return P.jsx(mt,{children:P.jsx(Za,{height:"100vh",theme:e,original:jo.original,modified:jo.modified,language:"markdown"})})}const Ps=v.createContext(null),kt={didCatch:!1,error:null};let Ds=class extends v.Component{constructor(t){super(t),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=kt}static getDerivedStateFromError(t){return{didCatch:!0,error:t}}resetErrorBoundary(){const{error:t}=this.state;if(t!==null){for(var o,n,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];(o=(n=this.props).onReset)===null||o===void 0||o.call(n,{args:r,reason:"imperative-api"}),this.setState(kt)}}componentDidCatch(t,o){var n,i;(n=(i=this.props).onError)===null||n===void 0||n.call(i,t,o)}componentDidUpdate(t,o){const{didCatch:n}=this.state,{resetKeys:i}=this.props;if(n&&o.error!==null&&js(t.resetKeys,i)){var r,a;(r=(a=this.props).onReset)===null||r===void 0||r.call(a,{next:i,prev:t.resetKeys,reason:"keys"}),this.setState(kt)}}render(){const{children:t,fallbackRender:o,FallbackComponent:n,fallback:i}=this.props,{didCatch:r,error:a}=this.state;let s=t;if(r){const l={error:a,resetErrorBoundary:this.resetErrorBoundary};if(typeof o=="function")s=o(l);else if(n)s=v.createElement(n,l);else if(i!==void 0)s=i;else throw a}return v.createElement(Ps.Provider,{value:{didCatch:r,error:a,resetErrorBoundary:this.resetErrorBoundary}},s)}};function js(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.length!==t.length||e.some((o,n)=>!Object.is(o,t[n]))}const Cs=()=>pe,ks=Q(Cs())({classes:["c9hvsya"]}),Ms=Q("h1")({classes:["t1kmd2rq"]}),Os=Q("h3")({classes:["drvpjco"]});function Ls({children:e}){return P.jsx(Ds,{fallback:P.jsxs(ks,{children:[P.jsx(Ms,{children:"Something went wrong..."}),P.jsx(Os,{children:"Try to refresh the page or open an issue on the GitHub repository."}),P.jsxs(An,{onClick:()=>window.open("https://github.com/suren-atoyan/monaco-react/issues","_blank"),children:[P.jsx("img",{src:No,alt:"GitHub"}),"Open an issue"]})]}),children:e})}function Vs(){const[e,t]=v.useState("editor");return P.jsxs(Ls,{children:[P.jsxs(as,{children:[P.jsxs(ls,{children:[P.jsx("img",{src:Wr,alt:"Monaco React",height:32}),P.jsxs(ms,{children:[P.jsx(dt,{onClick:()=>t("editor"),disabled:e==="editor",children:"Editor"}),P.jsx(dt,{onClick:()=>t("diff-editor"),disabled:e==="diff-editor",children:"Diff Editor"}),P.jsx(An,{onClick:()=>window.open("https://github.com/suren-atoyan/monaco-react","_blank"),children:P.jsx("img",{src:No,alt:"GitHub"})})]})]}),P.jsx(us,{children:e==="editor"?P.jsx(Ts,{}):P.jsx(Is,{})})]}),P.jsx(Gr,{})]})}export{Vs as default};
