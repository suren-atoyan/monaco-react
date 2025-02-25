function cv(i,u){for(var r=0;r<u.length;r++){const c=u[r];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in i)){const f=Object.getOwnPropertyDescriptor(c,d);f&&Object.defineProperty(i,d,f.get?f:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function r(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=r(d);fetch(d.href,f)}})();var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var dc={exports:{}},di={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function fv(){if(Um)return di;Um=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function r(c,d,f){var h=null;if(f!==void 0&&(h=""+f),d.key!==void 0&&(h=""+d.key),"key"in d){f={};for(var g in d)g!=="key"&&(f[g]=d[g])}else f=d;return d=f.ref,{$$typeof:i,type:c,key:h,ref:d!==void 0?d:null,props:f}}return di.Fragment=u,di.jsx=r,di.jsxs=r,di}var Lm;function dv(){return Lm||(Lm=1,dc.exports=fv()),dc.exports}var fe=dv(),mc={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function mv(){if(Hm)return Se;Hm=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),z=Symbol.iterator;function A(b){return b===null||typeof b!="object"?null:(b=z&&b[z]||b["@@iterator"],typeof b=="function"?b:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,ie={};function ae(b,D,Z){this.props=b,this.context=D,this.refs=ie,this.updater=Z||U}ae.prototype.isReactComponent={},ae.prototype.setState=function(b,D){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,D,"setState")},ae.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ne(){}ne.prototype=ae.prototype;function le(b,D,Z){this.props=b,this.context=D,this.refs=ie,this.updater=Z||U}var ge=le.prototype=new ne;ge.constructor=le,k(ge,ae.prototype),ge.isPureReactComponent=!0;var be=Array.isArray,G={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function x(b,D,Z,R,N,$){return Z=$.ref,{$$typeof:i,type:b,key:D,ref:Z!==void 0?Z:null,props:$}}function W(b,D){return x(b.type,D,void 0,void 0,void 0,b.props)}function H(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function O(b){var D={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Z){return D[Z]})}var Y=/\/+/g;function q(b,D){return typeof b=="object"&&b!==null&&b.key!=null?O(""+b.key):D.toString(36)}function me(){}function re(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(me,me):(b.status="pending",b.then(function(D){b.status==="pending"&&(b.status="fulfilled",b.value=D)},function(D){b.status==="pending"&&(b.status="rejected",b.reason=D)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Q(b,D,Z,R,N){var $=typeof b;($==="undefined"||$==="boolean")&&(b=null);var K=!1;if(b===null)K=!0;else switch($){case"bigint":case"string":case"number":K=!0;break;case"object":switch(b.$$typeof){case i:case u:K=!0;break;case B:return K=b._init,Q(K(b._payload),D,Z,R,N)}}if(K)return N=N(b),K=R===""?"."+q(b,0):R,be(N)?(Z="",K!=null&&(Z=K.replace(Y,"$&/")+"/"),Q(N,D,Z,"",function(he){return he})):N!=null&&(H(N)&&(N=W(N,Z+(N.key==null||b&&b.key===N.key?"":(""+N.key).replace(Y,"$&/")+"/")+K)),D.push(N)),1;K=0;var J=R===""?".":R+":";if(be(b))for(var F=0;F<b.length;F++)R=b[F],$=J+q(R,F),K+=Q(R,D,Z,$,N);else if(F=A(b),typeof F=="function")for(b=F.call(b),F=0;!(R=b.next()).done;)R=R.value,$=J+q(R,F++),K+=Q(R,D,Z,$,N);else if($==="object"){if(typeof b.then=="function")return Q(re(b),D,Z,R,N);throw D=String(b),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return K}function M(b,D,Z){if(b==null)return b;var R=[],N=0;return Q(b,R,"","",function($){return D.call(Z,$,N++)}),R}function ee(b){if(b._status===-1){var D=b._result;D=D(),D.then(function(Z){(b._status===0||b._status===-1)&&(b._status=1,b._result=Z)},function(Z){(b._status===0||b._status===-1)&&(b._status=2,b._result=Z)}),b._status===-1&&(b._status=0,b._result=D)}if(b._status===1)return b._result.default;throw b._result}var X=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function Ee(){}return Se.Children={map:M,forEach:function(b,D,Z){M(b,function(){D.apply(this,arguments)},Z)},count:function(b){var D=0;return M(b,function(){D++}),D},toArray:function(b){return M(b,function(D){return D})||[]},only:function(b){if(!H(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Se.Component=ae,Se.Fragment=r,Se.Profiler=d,Se.PureComponent=le,Se.StrictMode=c,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,Se.act=function(){throw Error("act(...) is not supported in production builds of React.")},Se.cache=function(b){return function(){return b.apply(null,arguments)}},Se.cloneElement=function(b,D,Z){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var R=k({},b.props),N=b.key,$=void 0;if(D!=null)for(K in D.ref!==void 0&&($=void 0),D.key!==void 0&&(N=""+D.key),D)!I.call(D,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&D.ref===void 0||(R[K]=D[K]);var K=arguments.length-2;if(K===1)R.children=Z;else if(1<K){for(var J=Array(K),F=0;F<K;F++)J[F]=arguments[F+2];R.children=J}return x(b.type,N,void 0,void 0,$,R)},Se.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:f,_context:b},b},Se.createElement=function(b,D,Z){var R,N={},$=null;if(D!=null)for(R in D.key!==void 0&&($=""+D.key),D)I.call(D,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(N[R]=D[R]);var K=arguments.length-2;if(K===1)N.children=Z;else if(1<K){for(var J=Array(K),F=0;F<K;F++)J[F]=arguments[F+2];N.children=J}if(b&&b.defaultProps)for(R in K=b.defaultProps,K)N[R]===void 0&&(N[R]=K[R]);return x(b,$,void 0,void 0,null,N)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(b){return{$$typeof:g,render:b}},Se.isValidElement=H,Se.lazy=function(b){return{$$typeof:B,_payload:{_status:-1,_result:b},_init:ee}},Se.memo=function(b,D){return{$$typeof:v,type:b,compare:D===void 0?null:D}},Se.startTransition=function(b){var D=G.T,Z={};G.T=Z;try{var R=b(),N=G.S;N!==null&&N(Z,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Ee,X)}catch($){X($)}finally{G.T=D}},Se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},Se.use=function(b){return G.H.use(b)},Se.useActionState=function(b,D,Z){return G.H.useActionState(b,D,Z)},Se.useCallback=function(b,D){return G.H.useCallback(b,D)},Se.useContext=function(b){return G.H.useContext(b)},Se.useDebugValue=function(){},Se.useDeferredValue=function(b,D){return G.H.useDeferredValue(b,D)},Se.useEffect=function(b,D){return G.H.useEffect(b,D)},Se.useId=function(){return G.H.useId()},Se.useImperativeHandle=function(b,D,Z){return G.H.useImperativeHandle(b,D,Z)},Se.useInsertionEffect=function(b,D){return G.H.useInsertionEffect(b,D)},Se.useLayoutEffect=function(b,D){return G.H.useLayoutEffect(b,D)},Se.useMemo=function(b,D){return G.H.useMemo(b,D)},Se.useOptimistic=function(b,D){return G.H.useOptimistic(b,D)},Se.useReducer=function(b,D,Z){return G.H.useReducer(b,D,Z)},Se.useRef=function(b){return G.H.useRef(b)},Se.useState=function(b){return G.H.useState(b)},Se.useSyncExternalStore=function(b,D,Z){return G.H.useSyncExternalStore(b,D,Z)},Se.useTransition=function(){return G.H.useTransition()},Se.version="19.0.0",Se}var Bm;function Vc(){return Bm||(Bm=1,mc.exports=mv()),mc.exports}var P=Vc();const Qn=sv(P),_h=cv({__proto__:null,default:Qn},[P]);var hc={exports:{}},mi={},pc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function hv(){return qm||(qm=1,function(i){function u(M,ee){var X=M.length;M.push(ee);e:for(;0<X;){var Ee=X-1>>>1,b=M[Ee];if(0<d(b,ee))M[Ee]=ee,M[X]=b,X=Ee;else break e}}function r(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var ee=M[0],X=M.pop();if(X!==ee){M[0]=X;e:for(var Ee=0,b=M.length,D=b>>>1;Ee<D;){var Z=2*(Ee+1)-1,R=M[Z],N=Z+1,$=M[N];if(0>d(R,X))N<b&&0>d($,R)?(M[Ee]=$,M[N]=X,Ee=N):(M[Ee]=R,M[Z]=X,Ee=Z);else if(N<b&&0>d($,X))M[Ee]=$,M[N]=X,Ee=N;else break e}}return ee}function d(M,ee){var X=M.sortIndex-ee.sortIndex;return X!==0?X:M.id-ee.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,g=h.now();i.unstable_now=function(){return h.now()-g}}var p=[],v=[],B=1,z=null,A=3,U=!1,k=!1,ie=!1,ae=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function ge(M){for(var ee=r(v);ee!==null;){if(ee.callback===null)c(v);else if(ee.startTime<=M)c(v),ee.sortIndex=ee.expirationTime,u(p,ee);else break;ee=r(v)}}function be(M){if(ie=!1,ge(M),!k)if(r(p)!==null)k=!0,re();else{var ee=r(v);ee!==null&&Q(be,ee.startTime-M)}}var G=!1,I=-1,x=5,W=-1;function H(){return!(i.unstable_now()-W<x)}function O(){if(G){var M=i.unstable_now();W=M;var ee=!0;try{e:{k=!1,ie&&(ie=!1,ne(I),I=-1),U=!0;var X=A;try{t:{for(ge(M),z=r(p);z!==null&&!(z.expirationTime>M&&H());){var Ee=z.callback;if(typeof Ee=="function"){z.callback=null,A=z.priorityLevel;var b=Ee(z.expirationTime<=M);if(M=i.unstable_now(),typeof b=="function"){z.callback=b,ge(M),ee=!0;break t}z===r(p)&&c(p),ge(M)}else c(p);z=r(p)}if(z!==null)ee=!0;else{var D=r(v);D!==null&&Q(be,D.startTime-M),ee=!1}}break e}finally{z=null,A=X,U=!1}ee=void 0}}finally{ee?Y():G=!1}}}var Y;if(typeof le=="function")Y=function(){le(O)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,me=q.port2;q.port1.onmessage=O,Y=function(){me.postMessage(null)}}else Y=function(){ae(O,0)};function re(){G||(G=!0,Y())}function Q(M,ee){I=ae(function(){M(i.unstable_now())},ee)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_continueExecution=function(){k||U||(k=!0,re())},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_getFirstCallbackNode=function(){return r(p)},i.unstable_next=function(M){switch(A){case 1:case 2:case 3:var ee=3;break;default:ee=A}var X=A;A=ee;try{return M()}finally{A=X}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(M,ee){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var X=A;A=M;try{return ee()}finally{A=X}},i.unstable_scheduleCallback=function(M,ee,X){var Ee=i.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Ee+X:Ee):X=Ee,M){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=X+b,M={id:B++,callback:ee,priorityLevel:M,startTime:X,expirationTime:b,sortIndex:-1},X>Ee?(M.sortIndex=X,u(v,M),r(p)===null&&M===r(v)&&(ie?(ne(I),I=-1):ie=!0,Q(be,X-Ee))):(M.sortIndex=b,u(p,M),k||U||(k=!0,re())),M},i.unstable_shouldYield=H,i.unstable_wrapCallback=function(M){var ee=A;return function(){var X=A;A=ee;try{return M.apply(this,arguments)}finally{A=X}}}}(gc)),gc}var Vm;function pv(){return Vm||(Vm=1,pc.exports=hv()),pc.exports}var yc={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function gv(){if(Gm)return ut;Gm=1;var i=Vc();function u(p){var v="https://react.dev/errors/"+p;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)v+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+p+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var c={d:{f:r,r:function(){throw Error(u(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(p,v,B){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:z==null?null:""+z,children:p,containerInfo:v,implementation:B}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,v){if(p==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ut.createPortal=function(p,v){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(u(299));return f(p,v,null,B)},ut.flushSync=function(p){var v=h.T,B=c.p;try{if(h.T=null,c.p=2,p)return p()}finally{h.T=v,c.p=B,c.d.f()}},ut.preconnect=function(p,v){typeof p=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(p,v))},ut.prefetchDNS=function(p){typeof p=="string"&&c.d.D(p)},ut.preinit=function(p,v){if(typeof p=="string"&&v&&typeof v.as=="string"){var B=v.as,z=g(B,v.crossOrigin),A=typeof v.integrity=="string"?v.integrity:void 0,U=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;B==="style"?c.d.S(p,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:z,integrity:A,fetchPriority:U}):B==="script"&&c.d.X(p,{crossOrigin:z,integrity:A,fetchPriority:U,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ut.preinitModule=function(p,v){if(typeof p=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var B=g(v.as,v.crossOrigin);c.d.M(p,{crossOrigin:B,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(p)},ut.preload=function(p,v){if(typeof p=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var B=v.as,z=g(B,v.crossOrigin);c.d.L(p,B,{crossOrigin:z,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ut.preloadModule=function(p,v){if(typeof p=="string")if(v){var B=g(v.as,v.crossOrigin);c.d.m(p,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:B,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(p)},ut.requestFormReset=function(p){c.d.r(p)},ut.unstable_batchedUpdates=function(p,v){return p(v)},ut.useFormState=function(p,v,B){return h.H.useFormState(p,v,B)},ut.useFormStatus=function(){return h.H.useHostTransitionStatus()},ut.version="19.0.0",ut}var Ym;function yv(){if(Ym)return yc.exports;Ym=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),yc.exports=gv(),yc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function vv(){if(km)return mi;km=1;var i=pv(),u=Vc(),r=yv();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var f=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),U=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),be=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var x=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===x?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case g:return"Portal";case B:return"Profiler";case v:return"StrictMode";case ie:return"Suspense";case ae:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case U:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}var H=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=Object.assign,Y,q;function me(e){if(Y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Y=t&&t[1]||"",q=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Y+e+q}var re=!1;function Q(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(j){var w=j}Reflect.construct(e,[],V)}else{try{V.call()}catch(j){w=j}e.call(V.prototype)}}else{try{throw Error()}catch(j){w=j}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(j){if(j&&w&&typeof j.stack=="string")return[j.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),s=o[0],m=o[1];if(s&&m){var y=s.split(`
`),S=m.split(`
`);for(l=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;if(a===y.length||l===S.length)for(a=y.length-1,l=S.length-1;1<=a&&0<=l&&y[a]!==S[l];)l--;for(;1<=a&&0<=l;a--,l--)if(y[a]!==S[l]){if(a!==1||l!==1)do if(a--,l--,0>l||y[a]!==S[l]){var C=`
`+y[a].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=a&&0<=l);break}}}finally{re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?me(n):""}function M(e){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function ee(e){try{var t="";do t+=M(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function X(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ee(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(X(e)!==e)throw Error(c(188))}function D(e){var t=e.alternate;if(!t){if(t=X(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return b(l),e;if(o===a)return b(l),t;o=o.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=o;else{for(var s=!1,m=l.child;m;){if(m===n){s=!0,n=l,a=o;break}if(m===a){s=!0,a=l,n=o;break}m=m.sibling}if(!s){for(m=o.child;m;){if(m===n){s=!0,n=o,a=l;break}if(m===a){s=!0,a=o,n=l;break}m=m.sibling}if(!s)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function Z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Z(e),t!==null)return t;e=e.sibling}return null}var R=Array.isArray,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},K=[],J=-1;function F(e){return{current:e}}function he(e){0>J||(e.current=K[J],K[J]=null,J--)}function ye(e,t){J++,K[J]=e.current,e.current=t}var Ge=F(null),at=F(null),Me=F(null),lt=F(null);function kt(e,t){switch(ye(Me,t),ye(at,e),ye(Ge,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?sm(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=sm(e),t=fm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}he(Ge),ye(Ge,t)}function Ht(){he(Ge),he(at),he(Me)}function $n(e){e.memoizedState!==null&&ye(lt,e);var t=Ge.current,n=fm(t,e.type);t!==n&&(ye(at,e),ye(Ge,n))}function Ze(e){at.current===e&&(he(Ge),he(at)),lt.current===e&&(he(lt),ui._currentValue=$)}var Ta=Object.prototype.hasOwnProperty,pl=i.unstable_scheduleCallback,It=i.unstable_cancelCallback,Ri=i.unstable_shouldYield,ou=i.unstable_requestPaint,Xt=i.unstable_now,kp=i.unstable_getCurrentPriorityLevel,Wc=i.unstable_ImmediatePriority,Fc=i.unstable_UserBlockingPriority,Di=i.unstable_NormalPriority,Xp=i.unstable_LowPriority,es=i.unstable_IdlePriority,Qp=i.log,Zp=i.unstable_setDisableYieldValue,gl=null,gt=null;function Kp(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}function En(e){if(typeof Qp=="function"&&Zp(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(gl,e)}catch{}}var yt=Math.clz32?Math.clz32:Pp,$p=Math.log,Jp=Math.LN2;function Pp(e){return e>>>=0,e===0?32:31-($p(e)/Jp|0)|0}var Oi=128,Mi=4194304;function Jn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes,s=e.warmLanes;e=e.finishedLanes!==0;var m=n&134217727;return m!==0?(n=m&~l,n!==0?a=Jn(n):(o&=m,o!==0?a=Jn(o):e||(s=m&~s,s!==0&&(a=Jn(s))))):(m=n&~l,m!==0?a=Jn(m):o!==0?a=Jn(o):e||(s=n&~s,s!==0&&(a=Jn(s)))),a===0?0:t!==0&&t!==a&&!(t&l)&&(l=a&-a,s=t&-t,l>=s||l===32&&(s&4194176)!==0)?t:a}function yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ip(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ts(){var e=Oi;return Oi<<=1,!(Oi&4194176)&&(Oi=128),e}function ns(){var e=Mi;return Mi<<=1,!(Mi&62914560)&&(Mi=4194304),e}function uu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wp(e,t,n,a,l,o){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,y=e.expirationTimes,S=e.hiddenUpdates;for(n=s&~n;0<n;){var C=31-yt(n),V=1<<C;m[C]=0,y[C]=-1;var w=S[C];if(w!==null)for(S[C]=null,C=0;C<w.length;C++){var j=w[C];j!==null&&(j.lane&=-536870913)}n&=~V}a!==0&&as(e,a,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function as(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-yt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194218}function ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-yt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function is(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function os(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:Om(e.type))}function Fp(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var Sn=Math.random().toString(36).slice(2),it="__reactFiber$"+Sn,ft="__reactProps$"+Sn,wa="__reactContainer$"+Sn,ru="__reactEvents$"+Sn,eg="__reactListeners$"+Sn,tg="__reactHandles$"+Sn,us="__reactResources$"+Sn,bl="__reactMarker$"+Sn;function cu(e){delete e[it],delete e[ft],delete e[ru],delete e[eg],delete e[tg]}function Pn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wa]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hm(e);e!==null;){if(n=e[it])return n;e=hm(e)}return t}e=n,n=e.parentNode}return null}function xa(e){if(e=e[it]||e[wa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function El(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ra(e){var t=e[us];return t||(t=e[us]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[bl]=!0}var rs=new Set,cs={};function In(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(cs[e]=t,e=0;e<t.length;e++)rs.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ng=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ss={},fs={};function ag(e){return Ta.call(fs,e)?!0:Ta.call(ss,e)?!1:ng.test(e)?fs[e]=!0:(ss[e]=!0,!1)}function ji(e,t,n){if(ag(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ft(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lg(e){var t=ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ni(e){e._valueTracker||(e._valueTracker=lg(e))}function ms(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ds(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ig=/[\n"\\]/g;function xt(e){return e.replace(ig,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function su(e,t,n,a,l,o,s,m){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?fu(e,s,wt(t)):n!=null?fu(e,s,wt(n)):a!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+wt(m):e.removeAttribute("name")}function hs(e,t,n,a,l,o,s,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+wt(n):"",t=t!=null?""+wt(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=m?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function fu(e,t,n){t==="number"&&Ui(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Oa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ps(e,t,n){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+wt(n):""}function gs(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(R(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=wt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ys(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||og.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vs(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ys(e,l,a)}else for(var o in t)t.hasOwnProperty(o)&&ys(e,o,t[o])}function du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ug=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Li(e){return rg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var mu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,ja=null;function bs(e){var t=xa(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(su(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[ft]||null;if(!l)throw Error(c(90));su(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&ms(a)}break e;case"textarea":ps(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Oa(e,!!n.multiple,t,!1)}}}var pu=!1;function Es(e,t,n){if(pu)return e(t,n);pu=!0;try{var a=e(t);return a}finally{if(pu=!1,(za!==null||ja!==null)&&(Eo(),za&&(t=za,e=ja,ja=za=null,bs(t),e)))for(t=0;t<e.length;t++)bs(e[t])}}function Sl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ft]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var gu=!1;if(Wt)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){gu=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{gu=!1}var _n=null,yu=null,Hi=null;function Ss(){if(Hi)return Hi;var e,t=yu,n=t.length,a,l="value"in _n?_n.value:_n.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===l[o-a];a++);return Hi=l.slice(e,1<a?1-a:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function _s(){return!1}function dt(e){function t(n,a,l,o,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qi:_s,this.isPropagationStopped=_s,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=dt(Wn),Al=O({},Wn,{view:0,detail:0}),cg=dt(Al),vu,bu,Tl,Gi=O({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tl&&(Tl&&e.type==="mousemove"?(vu=e.screenX-Tl.screenX,bu=e.screenY-Tl.screenY):bu=vu=0,Tl=e),vu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),As=dt(Gi),sg=O({},Gi,{dataTransfer:0}),fg=dt(sg),dg=O({},Al,{relatedTarget:0}),Eu=dt(dg),mg=O({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=dt(mg),pg=O({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gg=dt(pg),yg=O({},Wn,{data:0}),Ts=dt(yg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eg[e])?!!t[e]:!1}function Su(){return Sg}var _g=O({},Al,{key:function(e){if(e.key){var t=vg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ag=dt(_g),Tg=O({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=dt(Tg),wg=O({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),xg=dt(wg),Rg=O({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=dt(Rg),Og=O({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=dt(Og),zg=O({},Wn,{newState:0,oldState:0}),jg=dt(zg),Cg=[9,13,27,32],_u=Wt&&"CompositionEvent"in window,wl=null;Wt&&"documentMode"in document&&(wl=document.documentMode);var Ng=Wt&&"TextEvent"in window&&!wl,xs=Wt&&(!_u||wl&&8<wl&&11>=wl),Rs=" ",Ds=!1;function Os(e,t){switch(e){case"keyup":return Cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ms(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ca=!1;function Ug(e,t){switch(e){case"compositionend":return Ms(t);case"keypress":return t.which!==32?null:(Ds=!0,Rs);case"textInput":return e=t.data,e===Rs&&Ds?null:e;default:return null}}function Lg(e,t){if(Ca)return e==="compositionend"||!_u&&Os(e,t)?(e=Ss(),Hi=yu=_n=null,Ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xs&&t.locale!=="ko"?null:t.data;default:return null}}var Hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hg[e.type]:t==="textarea"}function js(e,t,n,a){za?ja?ja.push(a):ja=[a]:za=a,t=wo(t,"onChange"),0<t.length&&(n=new Vi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var xl=null,Rl=null;function Bg(e){im(e,0)}function Yi(e){var t=El(e);if(ms(t))return e}function Cs(e,t){if(e==="change")return t}var Ns=!1;if(Wt){var Au;if(Wt){var Tu="oninput"in document;if(!Tu){var Us=document.createElement("div");Us.setAttribute("oninput","return;"),Tu=typeof Us.oninput=="function"}Au=Tu}else Au=!1;Ns=Au&&(!document.documentMode||9<document.documentMode)}function Ls(){xl&&(xl.detachEvent("onpropertychange",Hs),Rl=xl=null)}function Hs(e){if(e.propertyName==="value"&&Yi(Rl)){var t=[];js(t,Rl,e,hu(e)),Es(Bg,t)}}function qg(e,t,n){e==="focusin"?(Ls(),xl=t,Rl=n,xl.attachEvent("onpropertychange",Hs)):e==="focusout"&&Ls()}function Vg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Rl)}function Gg(e,t){if(e==="click")return Yi(t)}function Yg(e,t){if(e==="input"||e==="change")return Yi(t)}function kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:kg;function Dl(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Ta.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function Bs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qs(e,t){var n=Bs(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bs(n)}}function Vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ui(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xg(e,t){var n=Gs(t);t=e.focusedElem;var a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vs(t.ownerDocument.documentElement,t)){if(a!==null&&wu(t)){if(e=a.start,n=a.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=t.textContent.length,o=Math.min(a.start,l);a=a.end===void 0?o:Math.min(a.end,l),!n.extend&&o>a&&(l=a,a=o,o=l),l=qs(t,o);var s=qs(t,a);l&&s&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),o>a?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qg=Wt&&"documentMode"in document&&11>=document.documentMode,Na=null,xu=null,Ol=null,Ru=!1;function Ys(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||Na==null||Na!==Ui(a)||(a=Na,"selectionStart"in a&&wu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ol&&Dl(Ol,a)||(Ol=a,a=wo(xu,"onSelect"),0<a.length&&(t=new Vi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Na)))}function Fn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ua={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionrun:Fn("Transition","TransitionRun"),transitionstart:Fn("Transition","TransitionStart"),transitioncancel:Fn("Transition","TransitionCancel"),transitionend:Fn("Transition","TransitionEnd")},Du={},ks={};Wt&&(ks=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function ea(e){if(Du[e])return Du[e];if(!Ua[e])return e;var t=Ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ks)return Du[e]=t[n];return e}var Xs=ea("animationend"),Qs=ea("animationiteration"),Zs=ea("animationstart"),Zg=ea("transitionrun"),Kg=ea("transitionstart"),$g=ea("transitioncancel"),Ks=ea("transitionend"),$s=new Map,Js="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Bt(e,t){$s.set(e,t),In(t,[e])}var Rt=[],La=0,Ou=0;function ki(){for(var e=La,t=Ou=La=0;t<e;){var n=Rt[t];Rt[t++]=null;var a=Rt[t];Rt[t++]=null;var l=Rt[t];Rt[t++]=null;var o=Rt[t];if(Rt[t++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}o!==0&&Ps(n,l,o)}}function Xi(e,t,n,a){Rt[La++]=e,Rt[La++]=t,Rt[La++]=n,Rt[La++]=a,Ou|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Mu(e,t,n,a){return Xi(e,t,n,a),Qi(e)}function An(e,t){return Xi(e,null,null,t),Qi(e)}function Ps(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;l&&t!==null&&e.tag===3&&(o=e.stateNode,l=31-yt(n),o=o.hiddenUpdates,e=o[l],e===null?o[l]=[t]:e.push(t),t.lane=n|536870912)}function Qi(e){if(50<ei)throw ei=0,Lr=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ha={},Is=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var n=Is.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ee(t)},Is.set(e,t),t)}return{value:e,source:t,stack:ee(t)}}var Ba=[],qa=0,Zi=null,Ki=0,Ot=[],Mt=0,ta=null,en=1,tn="";function na(e,t){Ba[qa++]=Ki,Ba[qa++]=Zi,Zi=e,Ki=t}function Ws(e,t,n){Ot[Mt++]=en,Ot[Mt++]=tn,Ot[Mt++]=ta,ta=e;var a=en;e=tn;var l=32-yt(a)-1;a&=~(1<<l),n+=1;var o=32-yt(t)+l;if(30<o){var s=l-l%5;o=(a&(1<<s)-1).toString(32),a>>=s,l-=s,en=1<<32-yt(t)+l|n<<l|a,tn=o+e}else en=1<<o|n<<l|a,tn=e}function zu(e){e.return!==null&&(na(e,1),Ws(e,1,0))}function ju(e){for(;e===Zi;)Zi=Ba[--qa],Ba[qa]=null,Ki=Ba[--qa],Ba[qa]=null;for(;e===ta;)ta=Ot[--Mt],Ot[Mt]=null,tn=Ot[--Mt],Ot[Mt]=null,en=Ot[--Mt],Ot[Mt]=null}var rt=null,et=null,De=!1,qt=null,Qt=!1,Cu=Error(c(519));function aa(e){var t=Error(c(418,""));throw jl(Dt(t,e)),Cu}function Fs(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[it]=e,t[ft]=a,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<ni.length;n++)xe(ni[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),hs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ni(t);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),gs(t,a.value,a.defaultValue,a.children),Ni(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||cm(t.textContent,n)?(a.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),a.onScroll!=null&&xe("scroll",t),a.onScrollEnd!=null&&xe("scrollend",t),a.onClick!=null&&(t.onclick=xo),t=!0):t=!1,t||aa(e)}function ef(e){for(rt=e.return;rt;)switch(rt.tag){case 3:case 27:Qt=!0;return;case 5:case 13:Qt=!1;return;default:rt=rt.return}}function Ml(e){if(e!==rt)return!1;if(!De)return ef(e),De=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Fr(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&et&&aa(e),ef(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){et=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}et=null}}else et=rt?Gt(e.stateNode.nextSibling):null;return!0}function zl(){et=rt=null,De=!1}function jl(e){qt===null?qt=[e]:qt.push(e)}var Cl=Error(c(460)),tf=Error(c(474)),Nu={then:function(){}};function nf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $i(){}function af(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($i,$i),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Cl?Error(c(483)):e;default:if(typeof t.status=="string")t.then($i,$i);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Cl?Error(c(483)):e}throw Nl=t,Cl}}var Nl=null;function lf(){if(Nl===null)throw Error(c(459));var e=Nl;return Nl=null,e}var Va=null,Ul=0;function Ji(e){var t=Ul;return Ul+=1,Va===null&&(Va=[]),af(Va,e,t)}function Ll(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pi(e,t){throw t.$$typeof===f?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function of(e){var t=e._init;return t(e._payload)}function uf(e){function t(_,E){if(e){var T=_.deletions;T===null?(_.deletions=[E],_.flags|=16):T.push(E)}}function n(_,E){if(!e)return null;for(;E!==null;)t(_,E),E=E.sibling;return null}function a(_){for(var E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function l(_,E){return _=Un(_,E),_.index=0,_.sibling=null,_}function o(_,E,T){return _.index=T,e?(T=_.alternate,T!==null?(T=T.index,T<E?(_.flags|=33554434,E):T):(_.flags|=33554434,E)):(_.flags|=1048576,E)}function s(_){return e&&_.alternate===null&&(_.flags|=33554434),_}function m(_,E,T,L){return E===null||E.tag!==6?(E=Dr(T,_.mode,L),E.return=_,E):(E=l(E,T),E.return=_,E)}function y(_,E,T,L){var te=T.type;return te===p?C(_,E,T.props.children,L,T.key):E!==null&&(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===le&&of(te)===E.type)?(E=l(E,T.props),Ll(E,T),E.return=_,E):(E=po(T.type,T.key,T.props,null,_.mode,L),Ll(E,T),E.return=_,E)}function S(_,E,T,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Or(T,_.mode,L),E.return=_,E):(E=l(E,T.children||[]),E.return=_,E)}function C(_,E,T,L,te){return E===null||E.tag!==7?(E=ma(T,_.mode,L,te),E.return=_,E):(E=l(E,T),E.return=_,E)}function V(_,E,T){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Dr(""+E,_.mode,T),E.return=_,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case h:return T=po(E.type,E.key,E.props,null,_.mode,T),Ll(T,E),T.return=_,T;case g:return E=Or(E,_.mode,T),E.return=_,E;case le:var L=E._init;return E=L(E._payload),V(_,E,T)}if(R(E)||I(E))return E=ma(E,_.mode,T,null),E.return=_,E;if(typeof E.then=="function")return V(_,Ji(E),T);if(E.$$typeof===U)return V(_,fo(_,E),T);Pi(_,E)}return null}function w(_,E,T,L){var te=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return te!==null?null:m(_,E,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case h:return T.key===te?y(_,E,T,L):null;case g:return T.key===te?S(_,E,T,L):null;case le:return te=T._init,T=te(T._payload),w(_,E,T,L)}if(R(T)||I(T))return te!==null?null:C(_,E,T,L,null);if(typeof T.then=="function")return w(_,E,Ji(T),L);if(T.$$typeof===U)return w(_,E,fo(_,T),L);Pi(_,T)}return null}function j(_,E,T,L,te){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return _=_.get(T)||null,m(E,_,""+L,te);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case h:return _=_.get(L.key===null?T:L.key)||null,y(E,_,L,te);case g:return _=_.get(L.key===null?T:L.key)||null,S(E,_,L,te);case le:var Te=L._init;return L=Te(L._payload),j(_,E,T,L,te)}if(R(L)||I(L))return _=_.get(T)||null,C(E,_,L,te,null);if(typeof L.then=="function")return j(_,E,T,Ji(L),te);if(L.$$typeof===U)return j(_,E,T,fo(E,L),te);Pi(E,L)}return null}function oe(_,E,T,L){for(var te=null,Te=null,se=E,pe=E=0,We=null;se!==null&&pe<T.length;pe++){se.index>pe?(We=se,se=null):We=se.sibling;var Oe=w(_,se,T[pe],L);if(Oe===null){se===null&&(se=We);break}e&&se&&Oe.alternate===null&&t(_,se),E=o(Oe,E,pe),Te===null?te=Oe:Te.sibling=Oe,Te=Oe,se=We}if(pe===T.length)return n(_,se),De&&na(_,pe),te;if(se===null){for(;pe<T.length;pe++)se=V(_,T[pe],L),se!==null&&(E=o(se,E,pe),Te===null?te=se:Te.sibling=se,Te=se);return De&&na(_,pe),te}for(se=a(se);pe<T.length;pe++)We=j(se,_,pe,T[pe],L),We!==null&&(e&&We.alternate!==null&&se.delete(We.key===null?pe:We.key),E=o(We,E,pe),Te===null?te=We:Te.sibling=We,Te=We);return e&&se.forEach(function(Yn){return t(_,Yn)}),De&&na(_,pe),te}function ve(_,E,T,L){if(T==null)throw Error(c(151));for(var te=null,Te=null,se=E,pe=E=0,We=null,Oe=T.next();se!==null&&!Oe.done;pe++,Oe=T.next()){se.index>pe?(We=se,se=null):We=se.sibling;var Yn=w(_,se,Oe.value,L);if(Yn===null){se===null&&(se=We);break}e&&se&&Yn.alternate===null&&t(_,se),E=o(Yn,E,pe),Te===null?te=Yn:Te.sibling=Yn,Te=Yn,se=We}if(Oe.done)return n(_,se),De&&na(_,pe),te;if(se===null){for(;!Oe.done;pe++,Oe=T.next())Oe=V(_,Oe.value,L),Oe!==null&&(E=o(Oe,E,pe),Te===null?te=Oe:Te.sibling=Oe,Te=Oe);return De&&na(_,pe),te}for(se=a(se);!Oe.done;pe++,Oe=T.next())Oe=j(se,_,pe,Oe.value,L),Oe!==null&&(e&&Oe.alternate!==null&&se.delete(Oe.key===null?pe:Oe.key),E=o(Oe,E,pe),Te===null?te=Oe:Te.sibling=Oe,Te=Oe);return e&&se.forEach(function(rv){return t(_,rv)}),De&&na(_,pe),te}function Ve(_,E,T,L){if(typeof T=="object"&&T!==null&&T.type===p&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case h:e:{for(var te=T.key;E!==null;){if(E.key===te){if(te=T.type,te===p){if(E.tag===7){n(_,E.sibling),L=l(E,T.props.children),L.return=_,_=L;break e}}else if(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===le&&of(te)===E.type){n(_,E.sibling),L=l(E,T.props),Ll(L,T),L.return=_,_=L;break e}n(_,E);break}else t(_,E);E=E.sibling}T.type===p?(L=ma(T.props.children,_.mode,L,T.key),L.return=_,_=L):(L=po(T.type,T.key,T.props,null,_.mode,L),Ll(L,T),L.return=_,_=L)}return s(_);case g:e:{for(te=T.key;E!==null;){if(E.key===te)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){n(_,E.sibling),L=l(E,T.children||[]),L.return=_,_=L;break e}else{n(_,E);break}else t(_,E);E=E.sibling}L=Or(T,_.mode,L),L.return=_,_=L}return s(_);case le:return te=T._init,T=te(T._payload),Ve(_,E,T,L)}if(R(T))return oe(_,E,T,L);if(I(T)){if(te=I(T),typeof te!="function")throw Error(c(150));return T=te.call(T),ve(_,E,T,L)}if(typeof T.then=="function")return Ve(_,E,Ji(T),L);if(T.$$typeof===U)return Ve(_,E,fo(_,T),L);Pi(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,E!==null&&E.tag===6?(n(_,E.sibling),L=l(E,T),L.return=_,_=L):(n(_,E),L=Dr(T,_.mode,L),L.return=_,_=L),s(_)):n(_,E)}return function(_,E,T,L){try{Ul=0;var te=Ve(_,E,T,L);return Va=null,te}catch(se){if(se===Cl)throw se;var Te=Nt(29,se,null,_.mode);return Te.lanes=L,Te.return=_,Te}finally{}}}var la=uf(!0),rf=uf(!1),Ga=F(null),Ii=F(0);function cf(e,t){e=mn,ye(Ii,e),ye(Ga,t),mn=e|t.baseLanes}function Uu(){ye(Ii,mn),ye(Ga,Ga.current)}function Lu(){mn=Ii.current,he(Ga),he(Ii)}var zt=F(null),Zt=null;function Tn(e){var t=e.alternate;ye(Ke,Ke.current&1),ye(zt,e),Zt===null&&(t===null||Ga.current!==null||t.memoizedState!==null)&&(Zt=e)}function sf(e){if(e.tag===22){if(ye(Ke,Ke.current),ye(zt,e),Zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Zt=e)}}else wn()}function wn(){ye(Ke,Ke.current),ye(zt,zt.current)}function nn(e){he(zt),Zt===e&&(Zt=null),he(Ke)}var Ke=F(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Pg=i.unstable_scheduleCallback,Ig=i.unstable_NormalPriority,$e={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Jg,data:new Map,refCount:0}}function Hl(e){e.refCount--,e.refCount===0&&Pg(Ig,function(){e.controller.abort()})}var Bl=null,Bu=0,Ya=0,ka=null;function Wg(e,t){if(Bl===null){var n=Bl=[];Bu=0,Ya=Xr(),ka={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Bu++,t.then(ff,ff),t}function ff(){if(--Bu===0&&Bl!==null){ka!==null&&(ka.status="fulfilled");var e=Bl;Bl=null,Ya=0,ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Fg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var df=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wg(e,t),df!==null&&df(e,t)};var ia=F(null);function qu(){var e=ia.current;return e!==null?e:Ne.pooledCache}function Fi(e,t){t===null?ye(ia,ia.current):ye(ia,t.pool)}function mf(){var e=qu();return e===null?null:{parent:$e._currentValue,pool:e}}var xn=0,Ae=null,ze=null,ke=null,eo=!1,Xa=!1,oa=!1,to=0,ql=0,Qa=null,ey=0;function Ye(){throw Error(c(321))}function Vu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Gu(e,t,n,a,l,o){return xn=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?ua:Rn,oa=!1,o=n(a,l),oa=!1,Xa&&(o=pf(t,n,a,l)),hf(e),o}function hf(e){H.H=Kt;var t=ze!==null&&ze.next!==null;if(xn=0,ke=ze=Ae=null,eo=!1,ql=0,Qa=null,t)throw Error(c(300));e===null||Pe||(e=e.dependencies,e!==null&&so(e)&&(Pe=!0))}function pf(e,t,n,a){Ae=e;var l=0;do{if(Xa&&(Qa=null),ql=0,Xa=!1,25<=l)throw Error(c(301));if(l+=1,ke=ze=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H.H=ra,o=t(n,a)}while(Xa);return o}function ty(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?Vl(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(Ae.flags|=1024),t}function Yu(){var e=to!==0;return to=0,e}function ku(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xu(e){if(eo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}eo=!1}xn=0,ke=ze=Ae=null,Xa=!1,ql=to=0,Qa=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?Ae.memoizedState=ke=e:ke=ke.next=e,ke}function Xe(){if(ze===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=ke===null?Ae.memoizedState:ke.next;if(t!==null)ke=t,ze=e;else{if(e===null)throw Ae.alternate===null?Error(c(467)):Error(c(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ke===null?Ae.memoizedState=ke=e:ke=ke.next=e}return ke}var no;no=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Vl(e){var t=ql;return ql+=1,Qa===null&&(Qa=[]),e=af(Qa,e,t),t=Ae,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?ua:Rn),e}function ao(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vl(e);if(e.$$typeof===U)return ot(e)}throw Error(c(438,String(e)))}function Qu(e){var t=null,n=Ae.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Ae.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=no(),Ae.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=be;return t.index++,n}function an(e,t){return typeof t=="function"?t(e):t}function lo(e){var t=Xe();return Zu(t,ze,e)}function Zu(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,o=a.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}t.baseQueue=l=o,a.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var m=s=null,y=null,S=t,C=!1;do{var V=S.lane&-536870913;if(V!==S.lane?(Re&V)===V:(xn&V)===V){var w=S.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),V===Ya&&(C=!0);else if((xn&w)===w){S=S.next,w===Ya&&(C=!0);continue}else V={lane:0,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},y===null?(m=y=V,s=o):y=y.next=V,Ae.lanes|=w,Ln|=w;V=S.action,oa&&n(o,V),o=S.hasEagerState?S.eagerState:n(o,V)}else w={lane:V,revertLane:S.revertLane,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},y===null?(m=y=w,s=o):y=y.next=w,Ae.lanes|=V,Ln|=V;S=S.next}while(S!==null&&S!==t);if(y===null?s=o:y.next=m,!vt(o,e.memoizedState)&&(Pe=!0,C&&(n=ka,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=y,a.lastRenderedState=o}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ku(e){var t=Xe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);vt(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function gf(e,t,n){var a=Ae,l=Xe(),o=De;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var s=!vt((ze||l).memoizedState,n);if(s&&(l.memoizedState=n,Pe=!0),l=l.queue,Pu(bf.bind(null,a,l,e),[e]),l.getSnapshot!==t||s||ke!==null&&ke.memoizedState.tag&1){if(a.flags|=2048,Za(9,vf.bind(null,a,l,n,t),{destroy:void 0},null),Ne===null)throw Error(c(349));o||xn&60||yf(a,t,n)}return n}function yf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t=no(),Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vf(e,t,n,a){t.value=n,t.getSnapshot=a,Ef(t)&&Sf(e)}function bf(e,t,n){return n(function(){Ef(t)&&Sf(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Sf(e){var t=An(e,2);t!==null&&ct(t,e,2)}function $u(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),oa){En(!0);try{n()}finally{En(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:e},t}function _f(e,t,n,a){return e.baseState=n,Zu(e,ze,typeof a=="function"?a:an)}function ny(e,t,n,a,l){if(uo(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};H.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,Af(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Af(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var o=H.T,s={};H.T=s;try{var m=n(l,a),y=H.S;y!==null&&y(s,m),Tf(e,t,m)}catch(S){Ju(e,t,S)}finally{H.T=o}}else try{o=n(l,a),Tf(e,t,o)}catch(S){Ju(e,t,S)}}function Tf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){wf(e,t,a)},function(a){return Ju(e,t,a)}):wf(e,t,n)}function wf(e,t,n){t.status="fulfilled",t.value=n,xf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Af(e,n)))}function Ju(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,xf(t),t=t.next;while(t!==a)}e.action=null}function xf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rf(e,t){return t}function Df(e,t){if(De){var n=Ne.formState;if(n!==null){e:{var a=Ae;if(De){if(et){t:{for(var l=et,o=Qt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Gt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){et=Gt(l.nextSibling),a=l.data==="F!";break e}}aa(a)}a=!1}a&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rf,lastRenderedState:t},n.queue=a,n=Zf.bind(null,Ae,a),a.dispatch=n,a=$u(!1),o=tr.bind(null,Ae,!1,a.queue),a=mt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=ny.bind(null,Ae,l,o,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Of(e){var t=Xe();return Mf(t,ze,e)}function Mf(e,t,n){t=Zu(e,t,Rf)[0],e=lo(an)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Vl(t):t;var a=Xe(),l=a.queue,o=l.dispatch;return n!==a.memoizedState&&(Ae.flags|=2048,Za(9,ay.bind(null,l,n),{destroy:void 0},null)),[t,o,e]}function ay(e,t){e.action=t}function zf(e){var t=Xe(),n=ze;if(n!==null)return Mf(t,n,e);Xe(),t=t.memoizedState,n=Xe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Za(e,t,n,a){return e={tag:e,create:t,inst:n,deps:a,next:null},t=Ae.updateQueue,t===null&&(t=no(),Ae.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function jf(){return Xe().memoizedState}function io(e,t,n,a){var l=mt();Ae.flags|=e,l.memoizedState=Za(1|t,n,{destroy:void 0},a===void 0?null:a)}function oo(e,t,n,a){var l=Xe();a=a===void 0?null:a;var o=l.memoizedState.inst;ze!==null&&a!==null&&Vu(a,ze.memoizedState.deps)?l.memoizedState=Za(t,n,o,a):(Ae.flags|=e,l.memoizedState=Za(1|t,n,o,a))}function Cf(e,t){io(8390656,8,e,t)}function Pu(e,t){oo(2048,8,e,t)}function Nf(e,t){return oo(4,2,e,t)}function Uf(e,t){return oo(4,4,e,t)}function Lf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hf(e,t,n){n=n!=null?n.concat([e]):null,oo(4,4,Lf.bind(null,t,e),n)}function Iu(){}function Bf(e,t){var n=Xe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Vu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function qf(e,t){var n=Xe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Vu(t,a[1]))return a[0];if(a=e(),oa){En(!0);try{e()}finally{En(!1)}}return n.memoizedState=[a,t],a}function Wu(e,t,n){return n===void 0||xn&1073741824?e.memoizedState=t:(e.memoizedState=n,e=Gd(),Ae.lanes|=e,Ln|=e,n)}function Vf(e,t,n,a){return vt(n,t)?n:Ga.current!==null?(e=Wu(e,n,a),vt(e,t)||(Pe=!0),e):xn&42?(e=Gd(),Ae.lanes|=e,Ln|=e,t):(Pe=!0,e.memoizedState=n)}function Gf(e,t,n,a,l){var o=N.p;N.p=o!==0&&8>o?o:8;var s=H.T,m={};H.T=m,tr(e,!1,t,n);try{var y=l(),S=H.S;if(S!==null&&S(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var C=Fg(y,a);Gl(e,t,C,_t(e))}else Gl(e,t,a,_t(e))}catch(V){Gl(e,t,{then:function(){},status:"rejected",reason:V},_t())}finally{N.p=o,H.T=s}}function ly(){}function Fu(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=Yf(e).queue;Gf(e,l,t,$,n===null?ly:function(){return kf(e),n(a)})}function Yf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kf(e){var t=Yf(e).next.queue;Gl(e,t,{},_t())}function er(){return ot(ui)}function Xf(){return Xe().memoizedState}function Qf(){return Xe().memoizedState}function iy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_t();e=Mn(n);var a=zn(t,e,n);a!==null&&(ct(a,t,n),Xl(a,t,n)),t={cache:Hu()},e.payload=t;return}t=t.return}}function oy(e,t,n){var a=_t();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},uo(e)?Kf(t,n):(n=Mu(e,t,n,a),n!==null&&(ct(n,e,a),$f(n,t,a)))}function Zf(e,t,n){var a=_t();Gl(e,t,n,a)}function Gl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(uo(e))Kf(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,m=o(s,n);if(l.hasEagerState=!0,l.eagerState=m,vt(m,s))return Xi(e,t,l,0),Ne===null&&ki(),!1}catch{}finally{}if(n=Mu(e,t,l,a),n!==null)return ct(n,e,a),$f(n,t,a),!0}return!1}function tr(e,t,n,a){if(a={lane:2,revertLane:Xr(),action:a,hasEagerState:!1,eagerState:null,next:null},uo(e)){if(t)throw Error(c(479))}else t=Mu(e,n,a,2),t!==null&&ct(t,e,2)}function uo(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Kf(e,t){Xa=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $f(e,t,n){if(n&4194176){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ls(e,n)}}var Kt={readContext:ot,use:ao,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};Kt.useCacheRefresh=Ye,Kt.useMemoCache=Ye,Kt.useHostTransitionStatus=Ye,Kt.useFormState=Ye,Kt.useActionState=Ye,Kt.useOptimistic=Ye;var ua={readContext:ot,use:ao,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Cf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,io(4194308,4,Lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){io(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var a=e();if(oa){En(!0);try{e()}finally{En(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=mt();if(n!==void 0){var l=n(t);if(oa){En(!0);try{n(t)}finally{En(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=oy.bind(null,Ae,e),[a.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=$u(e);var t=e.queue,n=Zf.bind(null,Ae,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Iu,useDeferredValue:function(e,t){var n=mt();return Wu(n,e,t)},useTransition:function(){var e=$u(!1);return e=Gf.bind(null,Ae,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Ae,l=mt();if(De){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ne===null)throw Error(c(349));Re&60||yf(a,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Cf(bf.bind(null,a,o,e),[e]),a.flags|=2048,Za(9,vf.bind(null,a,o,n,t),{destroy:void 0},null),n},useId:function(){var e=mt(),t=Ne.identifierPrefix;if(De){var n=tn,a=en;n=(a&~(1<<32-yt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ey++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return mt().memoizedState=iy.bind(null,Ae)}};ua.useMemoCache=Qu,ua.useHostTransitionStatus=er,ua.useFormState=Df,ua.useActionState=Df,ua.useOptimistic=function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=tr.bind(null,Ae,!0,n),n.dispatch=t,[e,t]};var Rn={readContext:ot,use:ao,useCallback:Bf,useContext:ot,useEffect:Pu,useImperativeHandle:Hf,useInsertionEffect:Nf,useLayoutEffect:Uf,useMemo:qf,useReducer:lo,useRef:jf,useState:function(){return lo(an)},useDebugValue:Iu,useDeferredValue:function(e,t){var n=Xe();return Vf(n,ze.memoizedState,e,t)},useTransition:function(){var e=lo(an)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:gf,useId:Xf};Rn.useCacheRefresh=Qf,Rn.useMemoCache=Qu,Rn.useHostTransitionStatus=er,Rn.useFormState=Of,Rn.useActionState=Of,Rn.useOptimistic=function(e,t){var n=Xe();return _f(n,ze,e,t)};var ra={readContext:ot,use:ao,useCallback:Bf,useContext:ot,useEffect:Pu,useImperativeHandle:Hf,useInsertionEffect:Nf,useLayoutEffect:Uf,useMemo:qf,useReducer:Ku,useRef:jf,useState:function(){return Ku(an)},useDebugValue:Iu,useDeferredValue:function(e,t){var n=Xe();return ze===null?Wu(n,e,t):Vf(n,ze.memoizedState,e,t)},useTransition:function(){var e=Ku(an)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:Vl(e),t]},useSyncExternalStore:gf,useId:Xf};ra.useCacheRefresh=Qf,ra.useMemoCache=Qu,ra.useHostTransitionStatus=er,ra.useFormState=zf,ra.useActionState=zf,ra.useOptimistic=function(e,t){var n=Xe();return ze!==null?_f(n,ze,e,t):(n.baseState=e,[e,n.queue.dispatch])};function nr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ar={isMounted:function(e){return(e=e._reactInternals)?X(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=_t(),l=Mn(a);l.payload=t,n!=null&&(l.callback=n),t=zn(e,l,a),t!==null&&(ct(t,e,a),Xl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=_t(),l=Mn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=zn(e,l,a),t!==null&&(ct(t,e,a),Xl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),a=Mn(n);a.tag=2,t!=null&&(a.callback=t),t=zn(e,a,n),t!==null&&(ct(t,e,n),Xl(t,e,n))}};function Jf(e,t,n,a,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):t.prototype&&t.prototype.isPureReactComponent?!Dl(n,a)||!Dl(l,o):!0}function Pf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ar.enqueueReplaceState(t,t.state,null)}function ca(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var ro=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function If(e){ro(e)}function Wf(e){console.error(e)}function Ff(e){ro(e)}function co(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function ed(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function lr(e,t,n){return n=Mn(n),n.tag=3,n.payload={element:null},n.callback=function(){co(e,t)},n}function td(e){return e=Mn(e),e.tag=3,e}function nd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=a.value;e.payload=function(){return l(o)},e.callback=function(){ed(t,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){ed(t,n,a),typeof l!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var m=a.stack;this.componentDidCatch(a.value,{componentStack:m!==null?m:""})})}function uy(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&kl(t,n,l,!0),n=zt.current,n!==null){switch(n.tag){case 13:return Zt===null?qr():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Nu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Gr(e,a,l)),!1;case 22:return n.flags|=65536,a===Nu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Gr(e,a,l)),!1}throw Error(c(435,n.tag))}return Gr(e,a,l),qr(),!1}if(De)return t=zt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Cu&&(e=Error(c(422),{cause:a}),jl(Dt(e,n)))):(a!==Cu&&(t=Error(c(423),{cause:a}),jl(Dt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Dt(a,n),l=lr(e.stateNode,a,l),br(e,l),qe!==4&&(qe=2)),!1;var o=Error(c(520),{cause:a});if(o=Dt(o,n),Wl===null?Wl=[o]:Wl.push(o),qe!==4&&(qe=2),t===null)return!0;a=Dt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=lr(n.stateNode,a,e),br(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Hn===null||!Hn.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=td(l),nd(l,e,n,a),br(n,l),!1}n=n.return}while(n!==null);return!1}var ad=Error(c(461)),Pe=!1;function tt(e,t,n,a){t.child=e===null?rf(t,null,n,a):la(t,e.child,n,a)}function ld(e,t,n,a,l){n=n.render;var o=t.ref;if("ref"in a){var s={};for(var m in a)m!=="ref"&&(s[m]=a[m])}else s=a;return fa(t),a=Gu(e,t,n,s,o,l),m=Yu(),e!==null&&!Pe?(ku(e,t,l),ln(e,t,l)):(De&&m&&zu(t),t.flags|=1,tt(e,t,a,l),t.child)}function id(e,t,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!Rr(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,od(e,t,o,a,l)):(e=po(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!mr(e,l)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Dl,n(s,a)&&e.ref===t.ref)return ln(e,t,l)}return t.flags|=1,e=Un(o,a),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,a,l){if(e!==null){var o=e.memoizedProps;if(Dl(o,a)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=a=o,mr(e,l))e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,ln(e,t,l)}return ir(e,t,n,a,l)}function ud(e,t,n){var a=t.pendingProps,l=a.children,o=(t.stateNode._pendingVisibility&2)!==0,s=e!==null?e.memoizedState:null;if(Yl(e,t),a.mode==="hidden"||o){if(t.flags&128){if(a=s!==null?s.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~a}else t.childLanes=0,t.child=null;return rd(e,t,a,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,s!==null?s.cachePool:null),s!==null?cf(t,s):Uu(),sf(t);else return t.lanes=t.childLanes=536870912,rd(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(Fi(t,s.cachePool),cf(t,s),wn(),t.memoizedState=null):(e!==null&&Fi(t,null),Uu(),wn());return tt(e,t,l,n),t.child}function rd(e,t,n,a){var l=qu();return l=l===null?null:{parent:$e._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Fi(t,null),Uu(),sf(t),e!==null&&kl(e,t,a,!0),null}function Yl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function ir(e,t,n,a,l){return fa(t),n=Gu(e,t,n,a,void 0,l),a=Yu(),e!==null&&!Pe?(ku(e,t,l),ln(e,t,l)):(De&&a&&zu(t),t.flags|=1,tt(e,t,n,l),t.child)}function cd(e,t,n,a,l,o){return fa(t),t.updateQueue=null,n=pf(t,a,n,l),hf(e),a=Yu(),e!==null&&!Pe?(ku(e,t,o),ln(e,t,o)):(De&&a&&zu(t),t.flags|=1,tt(e,t,n,o),t.child)}function sd(e,t,n,a,l){if(fa(t),t.stateNode===null){var o=Ha,s=n.contextType;typeof s=="object"&&s!==null&&(o=ot(s)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ar,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},yr(t),s=n.contextType,o.context=typeof s=="object"&&s!==null?ot(s):Ha,o.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(nr(t,n,s,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&ar.enqueueReplaceState(o,o.state,null),Zl(t,a,o,l),Ql(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var m=t.memoizedProps,y=ca(n,m);o.props=y;var S=o.context,C=n.contextType;s=Ha,typeof C=="object"&&C!==null&&(s=ot(C));var V=n.getDerivedStateFromProps;C=typeof V=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,C||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||S!==s)&&Pf(t,o,a,s),On=!1;var w=t.memoizedState;o.state=w,Zl(t,a,o,l),Ql(),S=t.memoizedState,m||w!==S||On?(typeof V=="function"&&(nr(t,n,V,a),S=t.memoizedState),(y=On||Jf(t,n,y,a,w,S,s))?(C||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=S),o.props=a,o.state=S,o.context=s,a=y):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,vr(e,t),s=t.memoizedProps,C=ca(n,s),o.props=C,V=t.pendingProps,w=o.context,S=n.contextType,y=Ha,typeof S=="object"&&S!==null&&(y=ot(S)),m=n.getDerivedStateFromProps,(S=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==V||w!==y)&&Pf(t,o,a,y),On=!1,w=t.memoizedState,o.state=w,Zl(t,a,o,l),Ql();var j=t.memoizedState;s!==V||w!==j||On||e!==null&&e.dependencies!==null&&so(e.dependencies)?(typeof m=="function"&&(nr(t,n,m,a),j=t.memoizedState),(C=On||Jf(t,n,C,a,w,j,y)||e!==null&&e.dependencies!==null&&so(e.dependencies))?(S||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,j,y),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,j,y)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=j),o.props=a,o.state=j,o.context=y,a=C):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Yl(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=la(t,e.child,null,l),t.child=la(t,null,n,l)):tt(e,t,n,l),t.memoizedState=o.state,e=t.child):e=ln(e,t,l),e}function fd(e,t,n,a){return zl(),t.flags|=256,tt(e,t,n,a),t.child}var or={dehydrated:null,treeContext:null,retryLane:0};function ur(e){return{baseLanes:e,cachePool:mf()}}function rr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ut),e}function dd(e,t,n){var a=t.pendingProps,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(l?Tn(t):wn(),De){var m=et,y;if(y=m){e:{for(y=m,m=Qt;y.nodeType!==8;){if(!m){m=null;break e}if(y=Gt(y.nextSibling),y===null){m=null;break e}}m=y}m!==null?(t.memoizedState={dehydrated:m,treeContext:ta!==null?{id:en,overflow:tn}:null,retryLane:536870912},y=Nt(18,null,null,0),y.stateNode=m,y.return=t,t.child=y,rt=t,et=null,y=!0):y=!1}y||aa(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return m.data==="$!"?t.lanes=16:t.lanes=536870912,null;nn(t)}return m=a.children,a=a.fallback,l?(wn(),l=t.mode,m=sr({mode:"hidden",children:m},l),a=ma(a,l,n,null),m.return=t,a.return=t,m.sibling=a,t.child=m,l=t.child,l.memoizedState=ur(n),l.childLanes=rr(e,s,n),t.memoizedState=or,a):(Tn(t),cr(t,m))}if(y=e.memoizedState,y!==null&&(m=y.dehydrated,m!==null)){if(o)t.flags&256?(Tn(t),t.flags&=-257,t=fr(e,t,n)):t.memoizedState!==null?(wn(),t.child=e.child,t.flags|=128,t=null):(wn(),l=a.fallback,m=t.mode,a=sr({mode:"visible",children:a.children},m),l=ma(l,m,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,la(t,e.child,null,n),a=t.child,a.memoizedState=ur(n),a.childLanes=rr(e,s,n),t.memoizedState=or,t=l);else if(Tn(t),m.data==="$!"){if(s=m.nextSibling&&m.nextSibling.dataset,s)var S=s.dgst;s=S,a=Error(c(419)),a.stack="",a.digest=s,jl({value:a,source:null,stack:null}),t=fr(e,t,n)}else if(Pe||kl(e,t,n,!1),s=(n&e.childLanes)!==0,Pe||s){if(s=Ne,s!==null){if(a=n&-n,a&42)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=a&(s.suspendedLanes|n)?0:a,a!==0&&a!==y.retryLane)throw y.retryLane=a,An(e,a),ct(s,e,a),ad}m.data==="$?"||qr(),t=fr(e,t,n)}else m.data==="$?"?(t.flags|=128,t.child=e.child,t=_y.bind(null,e),m._reactRetry=t,t=null):(e=y.treeContext,et=Gt(m.nextSibling),rt=t,De=!0,qt=null,Qt=!1,e!==null&&(Ot[Mt++]=en,Ot[Mt++]=tn,Ot[Mt++]=ta,en=e.id,tn=e.overflow,ta=t),t=cr(t,a.children),t.flags|=4096);return t}return l?(wn(),l=a.fallback,m=t.mode,y=e.child,S=y.sibling,a=Un(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&31457280,S!==null?l=Un(S,l):(l=ma(l,m,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,m=e.child.memoizedState,m===null?m=ur(n):(y=m.cachePool,y!==null?(S=$e._currentValue,y=y.parent!==S?{parent:S,pool:S}:y):y=mf(),m={baseLanes:m.baseLanes|n,cachePool:y}),l.memoizedState=m,l.childLanes=rr(e,s,n),t.memoizedState=or,a):(Tn(t),n=e.child,e=n.sibling,n=Un(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function cr(e,t){return t=sr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function sr(e,t){return Bd(e,t,0,null)}function fr(e,t,n){return la(t,e.child,null,n),e=cr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function md(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),pr(e.return,t,n)}function dr(e,t,n,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l)}function hd(e,t,n){var a=t.pendingProps,l=a.revealOrder,o=a.tail;if(tt(e,t,a.children,n),a=Ke.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,n,t);else if(e.tag===19)md(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(ye(Ke,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Wi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),dr(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Wi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}dr(t,!0,n,null,o);break;case"together":dr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))if(e!==null){if(kl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mr(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&so(e)))}function ry(e,t,n){switch(t.tag){case 3:kt(t,t.stateNode.containerInfo),Dn(t,$e,e.memoizedState.cache),zl();break;case 27:case 5:$n(t);break;case 4:kt(t,t.stateNode.containerInfo);break;case 10:Dn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Tn(t),t.flags|=128,null):n&t.child.childLanes?dd(e,t,n):(Tn(t),e=ln(e,t,n),e!==null?e.sibling:null);Tn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(kl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return hd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye(Ke,Ke.current),a)break;return null;case 22:case 23:return t.lanes=0,ud(e,t,n);case 24:Dn(t,$e,e.memoizedState.cache)}return ln(e,t,n)}function pd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!mr(e,n)&&!(t.flags&128))return Pe=!1,ry(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,De&&t.flags&1048576&&Ws(t,Ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")Rr(a)?(e=ca(a,e),t.tag=1,t=sd(null,t,a,e,n)):(t.tag=0,t=ir(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===k){t.tag=11,t=ld(null,t,a,e,n);break e}else if(l===ne){t.tag=14,t=id(null,t,a,e,n);break e}}throw t=W(a)||a,Error(c(306,t,""))}}return t;case 0:return ir(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ca(a,t.pendingProps),sd(e,t,a,l,n);case 3:e:{if(kt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));var o=t.pendingProps;l=t.memoizedState,a=l.element,vr(e,t),Zl(t,o,null,n);var s=t.memoizedState;if(o=s.cache,Dn(t,$e,o),o!==l.cache&&gr(t,[$e],n,!0),Ql(),o=s.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=fd(e,t,o,n);break e}else if(o!==a){a=Dt(Error(c(424)),t),jl(a),t=fd(e,t,o,n);break e}else for(et=Gt(t.stateNode.containerInfo.firstChild),rt=t,De=!0,qt=null,Qt=!0,n=rf(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zl(),o===a){t=ln(e,t,n);break e}tt(e,t,o,n)}t=t.child}return t;case 26:return Yl(e,t),e===null?(n=vm(t.type,null,t.pendingProps,null))?t.memoizedState=n:De||(n=t.type,e=t.pendingProps,a=Ro(Me.current).createElement(n),a[it]=t,a[ft]=e,nt(a,n,e),Je(a),t.stateNode=a):t.memoizedState=vm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $n(t),e===null&&De&&(a=t.stateNode=pm(t.type,t.pendingProps,Me.current),rt=t,Qt=!0,et=Gt(a.firstChild)),a=t.pendingProps.children,e!==null||De?tt(e,t,a,n):t.child=la(t,null,a,n),Yl(e,t),t.child;case 5:return e===null&&De&&((l=a=et)&&(a=By(a,t.type,t.pendingProps,Qt),a!==null?(t.stateNode=a,rt=t,et=Gt(a.firstChild),Qt=!1,l=!0):l=!1),l||aa(t)),$n(t),l=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,Fr(l,o)?a=null:s!==null&&Fr(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Gu(e,t,ty,null,null,n),ui._currentValue=l),Yl(e,t),tt(e,t,a,n),t.child;case 6:return e===null&&De&&((e=n=et)&&(n=qy(n,t.pendingProps,Qt),n!==null?(t.stateNode=n,rt=t,et=null,e=!0):e=!1),e||aa(t)),null;case 13:return dd(e,t,n);case 4:return kt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=la(t,null,a,n):tt(e,t,a,n),t.child;case 11:return ld(e,t,t.type,t.pendingProps,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Dn(t,t.type,a.value),tt(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,fa(t),l=ot(l),a=a(l),t.flags|=1,tt(e,t,a,n),t.child;case 14:return id(e,t,t.type,t.pendingProps,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 19:return hd(e,t,n);case 22:return ud(e,t,n);case 24:return fa(t),a=ot($e),e===null?(l=qu(),l===null&&(l=Ne,o=Hu(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:a,cache:l},yr(t),Dn(t,$e,l)):(e.lanes&n&&(vr(e,t),Zl(t,null,null,n),Ql()),l=e.memoizedState,o=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Dn(t,$e,a)):(a=o.cache,Dn(t,$e,a),a!==l.cache&&gr(t,[$e],n,!0))),tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}var hr=F(null),sa=null,on=null;function Dn(e,t,n){ye(hr,t._currentValue),t._currentValue=n}function un(e){e._currentValue=hr.current,he(hr)}function pr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function gr(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=l;for(var y=0;y<t.length;y++)if(m.context===t[y]){o.lanes|=n,m=o.alternate,m!==null&&(m.lanes|=n),pr(o.return,n,e),a||(s=null);break e}o=m.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),pr(s,n,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function kl(e,t,n,a){e=null;for(var l=t,o=!1;l!==null;){if(!o){if(l.flags&524288)o=!0;else if(l.flags&262144)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var m=l.type;vt(l.pendingProps.value,s.value)||(e!==null?e.push(m):e=[m])}}else if(l===lt.current){if(s=l.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}l=l.return}e!==null&&gr(t,e,n,a),t.flags|=262144}function so(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fa(e){sa=e,on=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return gd(sa,e)}function fo(e,t){return sa===null&&fa(e),gd(e,t)}function gd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},on===null){if(e===null)throw Error(c(308));on=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else on=on.next=t;return n}var On=!1;function yr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Mn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,He&2){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Qi(e),Ps(e,null,n),t}return Xi(e,a,t,n),Qi(e)}function Xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ls(e,n)}}function br(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Er=!1;function Ql(){if(Er){var e=ka;if(e!==null)throw e}}function Zl(e,t,n,a){Er=!1;var l=e.updateQueue;On=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var y=m,S=y.next;y.next=null,s===null?o=S:s.next=S,s=y;var C=e.alternate;C!==null&&(C=C.updateQueue,m=C.lastBaseUpdate,m!==s&&(m===null?C.firstBaseUpdate=S:m.next=S,C.lastBaseUpdate=y))}if(o!==null){var V=l.baseState;s=0,C=S=y=null,m=o;do{var w=m.lane&-536870913,j=w!==m.lane;if(j?(Re&w)===w:(a&w)===w){w!==0&&w===Ya&&(Er=!0),C!==null&&(C=C.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var oe=e,ve=m;w=t;var Ve=n;switch(ve.tag){case 1:if(oe=ve.payload,typeof oe=="function"){V=oe.call(Ve,V,w);break e}V=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ve.payload,w=typeof oe=="function"?oe.call(Ve,V,w):oe,w==null)break e;V=O({},V,w);break e;case 2:On=!0}}w=m.callback,w!==null&&(e.flags|=64,j&&(e.flags|=8192),j=l.callbacks,j===null?l.callbacks=[w]:j.push(w))}else j={lane:w,tag:m.tag,payload:m.payload,callback:m.callback,next:null},C===null?(S=C=j,y=V):C=C.next=j,s|=w;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;j=m,m=j.next,j.next=null,l.lastBaseUpdate=j,l.shared.pending=null}}while(!0);C===null&&(y=V),l.baseState=y,l.firstBaseUpdate=S,l.lastBaseUpdate=C,o===null&&(l.shared.lanes=0),Ln|=s,e.lanes=s,e.memoizedState=V}}function yd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function vd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yd(n[e],t)}function Kl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var o=n.create,s=n.inst;a=o(),s.destroy=a}n=n.next}while(n!==l)}}catch(m){Ce(t,t.return,m)}}function jn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){var s=a.inst,m=s.destroy;if(m!==void 0){s.destroy=void 0,l=t;var y=n;try{m()}catch(S){Ce(l,y,S)}}}a=a.next}while(a!==o)}}catch(S){Ce(t,t.return,S)}}function bd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{vd(t,n)}catch(a){Ce(e,e.return,a)}}}function Ed(e,t,n){n.props=ca(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ce(e,t,a)}}function da(e,t){try{var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(o){Ce(e,t,o)}}function bt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Ce(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ce(e,t,l)}else n.current=null}function Sd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Ce(e,e.return,l)}}function _d(e,t,n){try{var a=e.stateNode;Cy(a,e.type,n,t),a[ft]=t}catch(l){Ce(e,e.return,l)}}function Ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Sr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _r(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(a!==4&&a!==27&&(e=e.child,e!==null))for(_r(e,t,n),e=e.sibling;e!==null;)_r(e,t,n),e=e.sibling}function mo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&a!==27&&(e=e.child,e!==null))for(mo(e,t,n),e=e.sibling;e!==null;)mo(e,t,n),e=e.sibling}var rn=!1,Be=!1,Ar=!1,Td=typeof WeakSet=="function"?WeakSet:Set,Ie=null,wd=!1;function cy(e,t){if(e=e.containerInfo,Ir=Co,e=Gs(e),wu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,m=-1,y=-1,S=0,C=0,V=e,w=null;t:for(;;){for(var j;V!==n||l!==0&&V.nodeType!==3||(m=s+l),V!==o||a!==0&&V.nodeType!==3||(y=s+a),V.nodeType===3&&(s+=V.nodeValue.length),(j=V.firstChild)!==null;)w=V,V=j;for(;;){if(V===e)break t;if(w===n&&++S===l&&(m=s),w===o&&++C===a&&(y=s),(j=V.nextSibling)!==null)break;V=w,w=V.parentNode}V=j}n=m===-1||y===-1?null:{start:m,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wr={focusedElem:e,selectionRange:n},Co=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var oe=ca(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(oe,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(ve){Ce(n,n.return,ve)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}return oe=wd,wd=!1,oe}function xd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:sn(e,n),a&4&&Kl(5,n);break;case 1:if(sn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ce(n,n.return,m)}else{var l=ca(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ce(n,n.return,m)}}a&64&&bd(n),a&512&&da(n,n.return);break;case 3:if(sn(e,n),a&64&&(a=n.updateQueue,a!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{vd(a,e)}catch(m){Ce(n,n.return,m)}}break;case 26:sn(e,n),a&512&&da(n,n.return);break;case 27:case 5:sn(e,n),t===null&&a&4&&Sd(n),a&512&&da(n,n.return);break;case 12:sn(e,n);break;case 13:sn(e,n),a&4&&Od(e,n);break;case 22:if(l=n.memoizedState!==null||rn,!l){t=t!==null&&t.memoizedState!==null||Be;var o=rn,s=Be;rn=l,(Be=t)&&!s?Cn(e,n,(n.subtreeFlags&8772)!==0):sn(e,n),rn=o,Be=s}a&512&&(n.memoizedProps.mode==="manual"?da(n,n.return):bt(n,n.return));break;default:sn(e,n)}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&cu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Et=!1;function cn(e,t,n){for(n=n.child;n!==null;)Dd(e,t,n),n=n.sibling}function Dd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 26:Be||bt(n,t),cn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Be||bt(n,t);var a=Qe,l=Et;for(Qe=n.stateNode,cn(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);cu(n),Qe=a,Et=l;break;case 5:Be||bt(n,t);case 6:l=Qe;var o=Et;if(Qe=null,cn(e,t,n),Qe=l,Et=o,Qe!==null)if(Et)try{e=Qe,a=n.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)}catch(s){Ce(n,t,s)}else try{Qe.removeChild(n.stateNode)}catch(s){Ce(n,t,s)}break;case 18:Qe!==null&&(Et?(t=Qe,n=n.stateNode,t.nodeType===8?tc(t.parentNode,n):t.nodeType===1&&tc(t,n),fi(t)):tc(Qe,n.stateNode));break;case 4:a=Qe,l=Et,Qe=n.stateNode.containerInfo,Et=!0,cn(e,t,n),Qe=a,Et=l;break;case 0:case 11:case 14:case 15:Be||jn(2,n,t),Be||jn(4,n,t),cn(e,t,n);break;case 1:Be||(bt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Ed(n,t,a)),cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:Be||bt(n,t),Be=(a=Be)||n.memoizedState!==null,cn(e,t,n),Be=a;break;default:cn(e,t,n)}}function Od(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fi(e)}catch(n){Ce(t,t.return,n)}}function sy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Td),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Td),t;default:throw Error(c(435,e.tag))}}function Tr(e,t){var n=sy(e);t.forEach(function(a){var l=Ay.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function jt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],o=e,s=t,m=s;e:for(;m!==null;){switch(m.tag){case 27:case 5:Qe=m.stateNode,Et=!1;break e;case 3:Qe=m.stateNode.containerInfo,Et=!0;break e;case 4:Qe=m.stateNode.containerInfo,Et=!0;break e}m=m.return}if(Qe===null)throw Error(c(160));Dd(o,s,l),Qe=null,Et=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}var Vt=null;function Md(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),Ct(e),a&4&&(jn(3,e,e.return),Kl(3,e),jn(5,e,e.return));break;case 1:jt(t,e),Ct(e),a&512&&(Be||n===null||bt(n,n.return)),a&64&&rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Vt;if(jt(t,e),Ct(e),a&512&&(Be||n===null||bt(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":o=l.getElementsByTagName("title")[0],(!o||o[bl]||o[it]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(a),l.head.insertBefore(o,l.querySelector("head > title"))),nt(o,a,n),o[it]=e,Je(o),a=o;break e;case"link":var s=Sm("link","href",l).get(a+(n.href||""));if(s){for(var m=0;m<s.length;m++)if(o=s[m],o.getAttribute("href")===(n.href==null?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(m,1);break t}}o=l.createElement(a),nt(o,a,n),l.head.appendChild(o);break;case"meta":if(s=Sm("meta","content",l).get(a+(n.content||""))){for(m=0;m<s.length;m++)if(o=s[m],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(m,1);break t}}o=l.createElement(a),nt(o,a,n),l.head.appendChild(o);break;default:throw Error(c(468,a))}o[it]=e,Je(o),a=o}e.stateNode=a}else _m(l,e.type,e.stateNode);else e.stateNode=Em(l,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?_m(l,e.type,e.stateNode):Em(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&_d(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&e.alternate===null){l=e.stateNode,o=e.memoizedProps;try{for(var y=l.firstChild;y;){var S=y.nextSibling,C=y.nodeName;y[bl]||C==="HEAD"||C==="BODY"||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&y.rel.toLowerCase()==="stylesheet"||l.removeChild(y),y=S}for(var V=e.type,w=l.attributes;w.length;)l.removeAttributeNode(w[0]);nt(l,V,o),l[it]=e,l[ft]=o}catch(oe){Ce(e,e.return,oe)}}case 5:if(jt(t,e),Ct(e),a&512&&(Be||n===null||bt(n,n.return)),e.flags&32){l=e.stateNode;try{Ma(l,"")}catch(oe){Ce(e,e.return,oe)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,_d(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Ar=!0);break;case 6:if(jt(t,e),Ct(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(oe){Ce(e,e.return,oe)}}break;case 3:if(Mo=null,l=Vt,Vt=Do(t.containerInfo),jt(t,e),Vt=l,Ct(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(oe){Ce(e,e.return,oe)}Ar&&(Ar=!1,zd(e));break;case 4:a=Vt,Vt=Do(e.stateNode.containerInfo),jt(t,e),Ct(e),Vt=a;break;case 12:jt(t,e),Ct(e);break;case 13:jt(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Cr=Xt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tr(e,a)));break;case 22:if(a&512&&(Be||n===null||bt(n,n.return)),y=e.memoizedState!==null,S=n!==null&&n.memoizedState!==null,C=rn,V=Be,rn=C||y,Be=V||S,jt(t,e),Be=V,rn=C,Ct(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,a&8192&&(t._visibility=y?t._visibility&-2:t._visibility|1,y&&(t=rn||Be,n===null||S||t||Ka(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){S=n=t;try{if(l=S.stateNode,y)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=S.stateNode,m=S.memoizedProps.style;var j=m!=null&&m.hasOwnProperty("display")?m.display:null;s.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(oe){Ce(S,S.return,oe)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(oe){Ce(S,S.return,oe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Tr(e,n))));break;case 19:jt(t,e),Ct(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tr(e,a)));break;case 21:break;default:jt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(Ad(n)){var a=n;break e}n=n.return}throw Error(c(160))}switch(a.tag){case 27:var l=a.stateNode,o=Sr(e);mo(e,o,l);break;case 5:var s=a.stateNode;a.flags&32&&(Ma(s,""),a.flags&=-33);var m=Sr(e);mo(e,m,s);break;case 3:case 4:var y=a.stateNode.containerInfo,S=Sr(e);_r(e,S,y);break;default:throw Error(c(161))}}}catch(C){Ce(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xd(e,t.alternate,t),t=t.sibling}function Ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:jn(4,t,t.return),Ka(t);break;case 1:bt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ed(t,t.return,n),Ka(t);break;case 26:case 27:case 5:bt(t,t.return),Ka(t);break;case 22:bt(t,t.return),t.memoizedState===null&&Ka(t);break;default:Ka(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:Cn(l,o,n),Kl(4,o);break;case 1:if(Cn(l,o,n),a=o,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(S){Ce(a,a.return,S)}if(a=o,l=a.updateQueue,l!==null){var m=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)yd(y[l],m)}catch(S){Ce(a,a.return,S)}}n&&s&64&&bd(o),da(o,o.return);break;case 26:case 27:case 5:Cn(l,o,n),n&&a===null&&s&4&&Sd(o),da(o,o.return);break;case 12:Cn(l,o,n);break;case 13:Cn(l,o,n),n&&s&4&&Od(l,o);break;case 22:o.memoizedState===null&&Cn(l,o,n),da(o,o.return);break;default:Cn(l,o,n)}t=t.sibling}}function wr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Hl(n))}function xr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e))}function Nn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jd(e,t,n,a),t=t.sibling}function jd(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Nn(e,t,n,a),l&2048&&Kl(9,t);break;case 3:Nn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hl(e)));break;case 12:if(l&2048){Nn(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,m=o.onPostCommit;typeof m=="function"&&m(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ce(t,t.return,y)}}else Nn(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,t.memoizedState!==null?o._visibility&4?Nn(e,t,n,a):$l(e,t):o._visibility&4?Nn(e,t,n,a):(o._visibility|=4,$a(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&wr(t.alternate,t);break;case 24:Nn(e,t,n,a),l&2048&&xr(t.alternate,t);break;default:Nn(e,t,n,a)}}function $a(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,s=t,m=n,y=a,S=s.flags;switch(s.tag){case 0:case 11:case 15:$a(o,s,m,y,l),Kl(8,s);break;case 23:break;case 22:var C=s.stateNode;s.memoizedState!==null?C._visibility&4?$a(o,s,m,y,l):$l(o,s):(C._visibility|=4,$a(o,s,m,y,l)),l&&S&2048&&wr(s.alternate,s);break;case 24:$a(o,s,m,y,l),l&&S&2048&&xr(s.alternate,s);break;default:$a(o,s,m,y,l)}t=t.sibling}}function $l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:$l(n,a),l&2048&&wr(a.alternate,a);break;case 24:$l(n,a),l&2048&&xr(a.alternate,a);break;default:$l(n,a)}t=t.sibling}}var Jl=8192;function Ja(e){if(e.subtreeFlags&Jl)for(e=e.child;e!==null;)Cd(e),e=e.sibling}function Cd(e){switch(e.tag){case 26:Ja(e),e.flags&Jl&&e.memoizedState!==null&&Wy(Vt,e.memoizedState,e.memoizedProps);break;case 5:Ja(e);break;case 3:case 4:var t=Vt;Vt=Do(e.stateNode.containerInfo),Ja(e),Vt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Jl,Jl=16777216,Ja(e),Jl=t):Ja(e));break;default:Ja(e)}}function Nd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ie=a,Ld(a,e)}Nd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ud(e),e=e.sibling}function Ud(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&jn(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,ho(e)):Pl(e);break;default:Pl(e)}}function ho(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ie=a,Ld(a,e)}Nd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:jn(8,t,t.return),ho(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,ho(t));break;default:ho(t)}e=e.sibling}}function Ld(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:jn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Hl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ie=a;else e:for(n=e;Ie!==null;){a=Ie;var l=a.sibling,o=a.return;if(Rd(a),a===n){Ie=null;break e}if(l!==null){l.return=o,Ie=l;break e}Ie=o}}}function fy(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,a){return new fy(e,t,n,a)}function Rr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Un(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hd(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function po(e,t,n,a,l,o){var s=0;if(a=e,typeof e=="function")Rr(e)&&(s=1);else if(typeof e=="string")s=Py(e,n,Ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case p:return ma(n.children,l,o,t);case v:s=8,l|=24;break;case B:return e=Nt(12,n,t,l|2),e.elementType=B,e.lanes=o,e;case ie:return e=Nt(13,n,t,l),e.elementType=ie,e.lanes=o,e;case ae:return e=Nt(19,n,t,l),e.elementType=ae,e.lanes=o,e;case ge:return Bd(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:case U:s=10;break e;case A:s=9;break e;case k:s=11;break e;case ne:s=14;break e;case le:s=16,a=null;break e}s=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Nt(s,n,t,l),t.elementType=e,t.type=a,t.lanes=o,t}function ma(e,t,n,a){return e=Nt(7,e,a,t),e.lanes=n,e}function Bd(e,t,n,a){e=Nt(22,e,a,t),e.elementType=ge,e.lanes=n;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var o=l._current;if(o===null)throw Error(c(456));if(!(l._pendingVisibility&2)){var s=An(o,2);s!==null&&(l._pendingVisibility|=2,ct(s,o,2))}},attach:function(){var o=l._current;if(o===null)throw Error(c(456));if(l._pendingVisibility&2){var s=An(o,2);s!==null&&(l._pendingVisibility&=-3,ct(s,o,2))}}};return e.stateNode=l,e}function Dr(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function Or(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fn(e){e.flags|=4}function qd(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Am(t)){if(t=zt.current,t!==null&&((Re&4194176)===Re?Zt!==null:(Re&62914560)!==Re&&!(Re&536870912)||t!==Zt))throw Nl=Nu,tf;e.flags|=8192}}function go(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ns():536870912,e.lanes|=t,Ia|=t)}function Il(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function dy(e,t,n){var a=t.pendingProps;switch(ju(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),un($e),Ht(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?fn(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(Hr(qt),qt=null))),Le(t),null;case 26:return n=t.memoizedState,e===null?(fn(t),n!==null?(Le(t),qd(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(fn(t),Le(t),qd(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==a&&fn(t),Le(t),t.flags&=-16777217),null;case 27:Ze(t),n=Me.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Le(t),null}e=Ge.current,Ml(t)?Fs(t):(e=pm(l,a,n),t.stateNode=e,fn(t))}return Le(t),null;case 5:if(Ze(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(e=Ge.current,Ml(t))Fs(t);else{switch(l=Ro(Me.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[it]=t,e[ft]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(nt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&fn(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=Me.current,Ml(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=rt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||cm(e.nodeValue,n)),e||aa(t)}else e=Ro(e).createTextNode(a),e[it]=t,t.stateNode=e}return Le(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ml(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[it]=t}else zl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),l=!1}else qt!==null&&(Hr(qt),qt=null),l=!0;if(!l)return t.flags&256?(nn(t),t):(nn(t),null)}if(nn(t),t.flags&128)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),go(t,t.updateQueue),Le(t),null;case 4:return Ht(),e===null&&$r(t.stateNode.containerInfo),Le(t),null;case 10:return un(t.type),Le(t),null;case 19:if(he(Ke),l=t.memoizedState,l===null)return Le(t),null;if(a=(t.flags&128)!==0,o=l.rendering,o===null)if(a)Il(l,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Wi(e),o!==null){for(t.flags|=128,Il(l,!1),e=o.updateQueue,t.updateQueue=e,go(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hd(n,e),n=n.sibling;return ye(Ke,Ke.current&1|2),t.child}e=e.sibling}l.tail!==null&&Xt()>yo&&(t.flags|=128,a=!0,Il(l,!1),t.lanes=4194304)}else{if(!a)if(e=Wi(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,go(t,e),Il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!De)return Le(t),null}else 2*Xt()-l.renderingStartTime>yo&&n!==536870912&&(t.flags|=128,a=!0,Il(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Xt(),t.sibling=null,e=Ke.current,ye(Ke,a?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return nn(t),Lu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?n&536870912&&!(t.flags&128)&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&go(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&he(ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),un($e),Le(t),null;case 25:return null}throw Error(c(156,t.tag))}function my(e,t){switch(ju(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un($e),Ht(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ze(t),null;case 13:if(nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(Ke),null;case 4:return Ht(),null;case 10:return un(t.type),null;case 22:case 23:return nn(t),Lu(),e!==null&&he(ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return un($e),null;case 25:return null;default:return null}}function Vd(e,t){switch(ju(t),t.tag){case 3:un($e),Ht();break;case 26:case 27:case 5:Ze(t);break;case 4:Ht();break;case 13:nn(t);break;case 19:he(Ke);break;case 10:un(t.type);break;case 22:case 23:nn(t),Lu(),e!==null&&he(ia);break;case 24:un($e)}}var hy={getCacheForType:function(e){var t=ot($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},py=typeof WeakMap=="function"?WeakMap:Map,He=0,Ne=null,we=null,Re=0,Ue=0,St=null,dn=!1,Pa=!1,Mr=!1,mn=0,qe=0,Ln=0,ha=0,zr=0,Ut=0,Ia=0,Wl=null,$t=null,jr=!1,Cr=0,yo=1/0,vo=null,Hn=null,bo=!1,pa=null,Fl=0,Nr=0,Ur=null,ei=0,Lr=null;function _t(){if(He&2&&Re!==0)return Re&-Re;if(H.T!==null){var e=Ya;return e!==0?e:Xr()}return os()}function Gd(){Ut===0&&(Ut=!(Re&536870912)||De?ts():536870912);var e=zt.current;return e!==null&&(e.flags|=32),Ut}function ct(e,t,n){(e===Ne&&Ue===2||e.cancelPendingCommit!==null)&&(Wa(e,0),hn(e,Re,Ut,!1)),vl(e,n),(!(He&2)||e!==Ne)&&(e===Ne&&(!(He&2)&&(ha|=n),qe===4&&hn(e,Re,Ut,!1)),Jt(e))}function Yd(e,t,n){if(He&6)throw Error(c(327));var a=!n&&(t&60)===0&&(t&e.expiredLanes)===0||yl(e,t),l=a?vy(e,t):Vr(e,t,!0),o=a;do{if(l===0){Pa&&!a&&hn(e,t,0,!1);break}else if(l===6)hn(e,t,0,!dn);else{if(n=e.current.alternate,o&&!gy(n)){l=Vr(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var m=e;l=Wl;var y=m.current.memoizedState.isDehydrated;if(y&&(Wa(m,s).flags|=256),s=Vr(m,s,!1),s!==2){if(Mr&&!y){m.errorRecoveryDisabledLanes|=o,ha|=o,l=4;break e}o=$t,$t=l,o!==null&&Hr(o)}l=s}if(o=!1,l!==2)continue}}if(l===1){Wa(e,0),hn(e,t,0,!0);break}e:{switch(a=e,l){case 0:case 1:throw Error(c(345));case 4:if((t&4194176)===t){hn(a,t,Ut,!dn);break e}break;case 2:$t=null;break;case 3:case 5:break;default:throw Error(c(329))}if(a.finishedWork=n,a.finishedLanes=t,(t&62914560)===t&&(o=Cr+300-Xt(),10<o)){if(hn(a,t,Ut,!dn),zi(a,0)!==0)break e;a.timeoutHandle=dm(kd.bind(null,a,n,$t,vo,jr,t,Ut,ha,Ia,dn,2,-0,0),o);break e}kd(a,n,$t,vo,jr,t,Ut,ha,Ia,dn,0,-0,0)}}break}while(!0);Jt(e)}function Hr(e){$t===null?$t=e:$t.push.apply($t,e)}function kd(e,t,n,a,l,o,s,m,y,S,C,V,w){var j=t.subtreeFlags;if((j&8192||(j&16785408)===16785408)&&(oi={stylesheets:null,count:0,unsuspend:Iy},Cd(t),t=Fy(),t!==null)){e.cancelPendingCommit=t(Pd.bind(null,e,n,a,l,s,m,y,1,V,w)),hn(e,o,s,!S);return}Pd(e,n,a,l,s,m,y,C,V,w)}function gy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!vt(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t,n,a){t&=~zr,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var o=31-yt(l),s=1<<o;a[o]=-1,l&=~s}n!==0&&as(e,n,t)}function Eo(){return He&6?!0:(ti(0),!1)}function Br(){if(we!==null){if(Ue===0)var e=we.return;else e=we,on=sa=null,Xu(e),Va=null,Ul=0,e=we;for(;e!==null;)Vd(e.alternate,e),e=e.return;we=null}}function Wa(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Uy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Br(),Ne=e,we=n=Un(e.current,null),Re=t,Ue=0,St=null,dn=!1,Pa=yl(e,t),Mr=!1,Ia=Ut=zr=ha=Ln=qe=0,$t=Wl=null,jr=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-yt(a),o=1<<l;t|=e[l],a&=~o}return mn=t,ki(),n}function Xd(e,t){Ae=null,H.H=Kt,t===Cl?(t=lf(),Ue=3):t===tf?(t=lf(),Ue=4):Ue=t===ad?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,St=t,we===null&&(qe=1,co(e,Dt(t,e.current)))}function Qd(){var e=H.H;return H.H=Kt,e===null?Kt:e}function Zd(){var e=H.A;return H.A=hy,e}function qr(){qe=4,dn||(Re&4194176)!==Re&&zt.current!==null||(Pa=!0),!(Ln&134217727)&&!(ha&134217727)||Ne===null||hn(Ne,Re,Ut,!1)}function Vr(e,t,n){var a=He;He|=2;var l=Qd(),o=Zd();(Ne!==e||Re!==t)&&(vo=null,Wa(e,t)),t=!1;var s=qe;e:do try{if(Ue!==0&&we!==null){var m=we,y=St;switch(Ue){case 8:Br(),s=6;break e;case 3:case 2:case 6:zt.current===null&&(t=!0);var S=Ue;if(Ue=0,St=null,Fa(e,m,y,S),n&&Pa){s=0;break e}break;default:S=Ue,Ue=0,St=null,Fa(e,m,y,S)}}yy(),s=qe;break}catch(C){Xd(e,C)}while(!0);return t&&e.shellSuspendCounter++,on=sa=null,He=a,H.H=l,H.A=o,we===null&&(Ne=null,Re=0,ki()),s}function yy(){for(;we!==null;)Kd(we)}function vy(e,t){var n=He;He|=2;var a=Qd(),l=Zd();Ne!==e||Re!==t?(vo=null,yo=Xt()+500,Wa(e,t)):Pa=yl(e,t);e:do try{if(Ue!==0&&we!==null){t=we;var o=St;t:switch(Ue){case 1:Ue=0,St=null,Fa(e,t,o,1);break;case 2:if(nf(o)){Ue=0,St=null,$d(t);break}t=function(){Ue===2&&Ne===e&&(Ue=7),Jt(e)},o.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:nf(o)?(Ue=0,St=null,$d(t)):(Ue=0,St=null,Fa(e,t,o,7));break;case 5:var s=null;switch(we.tag){case 26:s=we.memoizedState;case 5:case 27:var m=we;if(!s||Am(s)){Ue=0,St=null;var y=m.sibling;if(y!==null)we=y;else{var S=m.return;S!==null?(we=S,So(S)):we=null}break t}}Ue=0,St=null,Fa(e,t,o,5);break;case 6:Ue=0,St=null,Fa(e,t,o,6);break;case 8:Br(),qe=6;break e;default:throw Error(c(462))}}by();break}catch(C){Xd(e,C)}while(!0);return on=sa=null,H.H=a,H.A=l,He=n,we!==null?0:(Ne=null,Re=0,ki(),qe)}function by(){for(;we!==null&&!Ri();)Kd(we)}function Kd(e){var t=pd(e.alternate,e,mn);e.memoizedProps=e.pendingProps,t===null?So(e):we=t}function $d(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=cd(n,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=cd(n,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:Xu(t);default:Vd(n,t),t=we=Hd(t,mn),t=pd(n,t,mn)}e.memoizedProps=e.pendingProps,t===null?So(e):we=t}function Fa(e,t,n,a){on=sa=null,Xu(t),Va=null,Ul=0;var l=t.return;try{if(uy(e,l,t,n,Re)){qe=1,co(e,Dt(n,e.current)),we=null;return}}catch(o){if(l!==null)throw we=l,o;qe=1,co(e,Dt(n,e.current)),we=null;return}t.flags&32768?(De||a===1?e=!0:Pa||Re&536870912?e=!1:(dn=e=!0,(a===2||a===3||a===6)&&(a=zt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Jd(t,e)):So(t)}function So(e){var t=e;do{if(t.flags&32768){Jd(t,dn);return}e=t.return;var n=dy(t.alternate,t,mn);if(n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);qe===0&&(qe=5)}function Jd(e,t){do{var n=my(e.alternate,e);if(n!==null){n.flags&=32767,we=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){we=e;return}we=e=n}while(e!==null);qe=6,we=null}function Pd(e,t,n,a,l,o,s,m,y,S){var C=H.T,V=N.p;try{N.p=2,H.T=null,Ey(e,t,n,a,V,l,o,s,m,y,S)}finally{H.T=C,N.p=V}}function Ey(e,t,n,a,l,o,s,m){do el();while(pa!==null);if(He&6)throw Error(c(327));var y=e.finishedWork;if(a=e.finishedLanes,y===null)return null;if(e.finishedWork=null,e.finishedLanes=0,y===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var S=y.lanes|y.childLanes;if(S|=Ou,Wp(e,a,S,o,s,m),e===Ne&&(we=Ne=null,Re=0),!(y.subtreeFlags&10256)&&!(y.flags&10256)||bo||(bo=!0,Nr=S,Ur=n,Ty(Di,function(){return el(),null})),n=(y.flags&15990)!==0,y.subtreeFlags&15990||n?(n=H.T,H.T=null,o=N.p,N.p=2,s=He,He|=4,cy(e,y),Md(y,e),Xg(Wr,e.containerInfo),Co=!!Ir,Wr=Ir=null,e.current=y,xd(e,y.alternate,y),ou(),He=s,N.p=o,H.T=n):e.current=y,bo?(bo=!1,pa=e,Fl=a):Id(e,S),S=e.pendingLanes,S===0&&(Hn=null),Kp(y.stateNode),Jt(e),t!==null)for(l=e.onRecoverableError,y=0;y<t.length;y++)S=t[y],l(S.value,{componentStack:S.stack});return Fl&3&&el(),S=e.pendingLanes,a&4194218&&S&42?e===Lr?ei++:(ei=0,Lr=e):ei=0,ti(0),null}function Id(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hl(t)))}function el(){if(pa!==null){var e=pa,t=Nr;Nr=0;var n=is(Fl),a=H.T,l=N.p;try{if(N.p=32>n?32:n,H.T=null,pa===null)var o=!1;else{n=Ur,Ur=null;var s=pa,m=Fl;if(pa=null,Fl=0,He&6)throw Error(c(331));var y=He;if(He|=4,Ud(s.current),jd(s,s.current,m,n),He=y,ti(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(gl,s)}catch{}o=!0}return o}finally{N.p=l,H.T=a,Id(e,t)}}return!1}function Wd(e,t,n){t=Dt(n,t),t=lr(e.stateNode,t,2),e=zn(e,t,2),e!==null&&(vl(e,2),Jt(e))}function Ce(e,t,n){if(e.tag===3)Wd(e,e,n);else for(;t!==null;){if(t.tag===3){Wd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Hn===null||!Hn.has(a))){e=Dt(n,e),n=td(2),a=zn(t,n,2),a!==null&&(nd(n,a,t,e),vl(a,2),Jt(a));break}}t=t.return}}function Gr(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new py;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Mr=!0,l.add(n),e=Sy.bind(null,e,t,n),t.then(e,e))}function Sy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ne===e&&(Re&n)===n&&(qe===4||qe===3&&(Re&62914560)===Re&&300>Xt()-Cr?!(He&2)&&Wa(e,0):zr|=n,Ia===Re&&(Ia=0)),Jt(e)}function Fd(e,t){t===0&&(t=ns()),e=An(e,t),e!==null&&(vl(e,t),Jt(e))}function _y(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fd(e,n)}function Ay(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Fd(e,n)}function Ty(e,t){return pl(e,t)}var _o=null,tl=null,Yr=!1,Ao=!1,kr=!1,ga=0;function Jt(e){e!==tl&&e.next===null&&(tl===null?_o=tl=e:tl=tl.next=e),Ao=!0,Yr||(Yr=!0,xy(wy))}function ti(e,t){if(!kr&&Ao){kr=!0;do for(var n=!1,a=_o;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var o=0;else{var s=a.suspendedLanes,m=a.pingedLanes;o=(1<<31-yt(42|e)+1)-1,o&=l&~(s&~m),o=o&201326677?o&201326677|1:o?o|2:0}o!==0&&(n=!0,nm(a,o))}else o=Re,o=zi(a,a===Ne?o:0),!(o&3)||yl(a,o)||(n=!0,nm(a,o));a=a.next}while(n);kr=!1}}function wy(){Ao=Yr=!1;var e=0;ga!==0&&(Ny()&&(e=ga),ga=0);for(var t=Xt(),n=null,a=_o;a!==null;){var l=a.next,o=em(a,t);o===0?(a.next=null,n===null?_o=l:n.next=l,l===null&&(tl=n)):(n=a,(e!==0||o&3)&&(Ao=!0)),a=l}ti(e)}function em(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-yt(o),m=1<<s,y=l[s];y===-1?(!(m&n)||m&a)&&(l[s]=Ip(m,t)):y<=t&&(e.expiredLanes|=m),o&=~m}if(t=Ne,n=Re,n=zi(e,e===t?n:0),a=e.callbackNode,n===0||e===t&&Ue===2||e.cancelPendingCommit!==null)return a!==null&&a!==null&&It(a),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||yl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&It(a),is(n)){case 2:case 8:n=Fc;break;case 32:n=Di;break;case 268435456:n=es;break;default:n=Di}return a=tm.bind(null,e),n=pl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&It(a),e.callbackPriority=2,e.callbackNode=null,2}function tm(e,t){var n=e.callbackNode;if(el()&&e.callbackNode!==n)return null;var a=Re;return a=zi(e,e===Ne?a:0),a===0?null:(Yd(e,a,t),em(e,Xt()),e.callbackNode!=null&&e.callbackNode===n?tm.bind(null,e):null)}function nm(e,t){if(el())return null;Yd(e,t,!0)}function xy(e){Ly(function(){He&6?pl(Wc,e):e()})}function Xr(){return ga===0&&(ga=ts()),ga}function am(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Li(""+e)}function lm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ry(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var o=am((l[ft]||null).action),s=a.submitter;s&&(t=(t=s[ft]||null)?am(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var m=new Vi("action","action",null,a,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ga!==0){var y=s?lm(l,s):new FormData(l);Fu(n,{pending:!0,data:y,method:l.method,action:o},null,y)}}else typeof o=="function"&&(m.preventDefault(),y=s?lm(l,s):new FormData(l),Fu(n,{pending:!0,data:y,method:l.method,action:o},o,y))},currentTarget:l}]})}}for(var Qr=0;Qr<Js.length;Qr++){var Zr=Js[Qr],Dy=Zr.toLowerCase(),Oy=Zr[0].toUpperCase()+Zr.slice(1);Bt(Dy,"on"+Oy)}Bt(Xs,"onAnimationEnd"),Bt(Qs,"onAnimationIteration"),Bt(Zs,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Zg,"onTransitionRun"),Bt(Kg,"onTransitionStart"),Bt($g,"onTransitionCancel"),Bt(Ks,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),My=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function im(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var s=a.length-1;0<=s;s--){var m=a[s],y=m.instance,S=m.currentTarget;if(m=m.listener,y!==o&&l.isPropagationStopped())break e;o=m,l.currentTarget=S;try{o(l)}catch(C){ro(C)}l.currentTarget=null,o=y}else for(s=0;s<a.length;s++){if(m=a[s],y=m.instance,S=m.currentTarget,m=m.listener,y!==o&&l.isPropagationStopped())break e;o=m,l.currentTarget=S;try{o(l)}catch(C){ro(C)}l.currentTarget=null,o=y}}}}function xe(e,t){var n=t[ru];n===void 0&&(n=t[ru]=new Set);var a=e+"__bubble";n.has(a)||(om(t,e,2,!1),n.add(a))}function Kr(e,t,n){var a=0;t&&(a|=4),om(n,e,a,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[To]){e[To]=!0,rs.forEach(function(n){n!=="selectionchange"&&(My.has(n)||Kr(n,!1,e),Kr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,Kr("selectionchange",!1,t))}}function om(e,t,n,a){switch(Om(t)){case 2:var l=nv;break;case 8:l=av;break;default:l=uc}n=l.bind(null,t,n,e),l=void 0,!gu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Jr(e,t,n,a,l){var o=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var m=a.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(s===4)for(s=a.return;s!==null;){var y=s.tag;if((y===3||y===4)&&(y=s.stateNode.containerInfo,y===l||y.nodeType===8&&y.parentNode===l))return;s=s.return}for(;m!==null;){if(s=Pn(m),s===null)return;if(y=s.tag,y===5||y===6||y===26||y===27){a=o=s;continue e}m=m.parentNode}}a=a.return}Es(function(){var S=o,C=hu(n),V=[];e:{var w=$s.get(e);if(w!==void 0){var j=Vi,oe=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":j=Ag;break;case"focusin":oe="focus",j=Eu;break;case"focusout":oe="blur",j=Eu;break;case"beforeblur":case"afterblur":j=Eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=As;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=xg;break;case Xs:case Qs:case Zs:j=hg;break;case Ks:j=Dg;break;case"scroll":case"scrollend":j=cg;break;case"wheel":j=Mg;break;case"copy":case"cut":case"paste":j=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=ws;break;case"toggle":case"beforetoggle":j=jg}var ve=(t&4)!==0,Ve=!ve&&(e==="scroll"||e==="scrollend"),_=ve?w!==null?w+"Capture":null:w;ve=[];for(var E=S,T;E!==null;){var L=E;if(T=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||T===null||_===null||(L=Sl(E,_),L!=null&&ve.push(ai(E,L,T))),Ve)break;E=E.return}0<ve.length&&(w=new j(w,oe,null,n,C),V.push({event:w,listeners:ve}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",w&&n!==mu&&(oe=n.relatedTarget||n.fromElement)&&(Pn(oe)||oe[wa]))break e;if((j||w)&&(w=C.window===C?C:(w=C.ownerDocument)?w.defaultView||w.parentWindow:window,j?(oe=n.relatedTarget||n.toElement,j=S,oe=oe?Pn(oe):null,oe!==null&&(Ve=X(oe),ve=oe.tag,oe!==Ve||ve!==5&&ve!==27&&ve!==6)&&(oe=null)):(j=null,oe=S),j!==oe)){if(ve=As,L="onMouseLeave",_="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ve=ws,L="onPointerLeave",_="onPointerEnter",E="pointer"),Ve=j==null?w:El(j),T=oe==null?w:El(oe),w=new ve(L,E+"leave",j,n,C),w.target=Ve,w.relatedTarget=T,L=null,Pn(C)===S&&(ve=new ve(_,E+"enter",oe,n,C),ve.target=T,ve.relatedTarget=Ve,L=ve),Ve=L,j&&oe)t:{for(ve=j,_=oe,E=0,T=ve;T;T=nl(T))E++;for(T=0,L=_;L;L=nl(L))T++;for(;0<E-T;)ve=nl(ve),E--;for(;0<T-E;)_=nl(_),T--;for(;E--;){if(ve===_||_!==null&&ve===_.alternate)break t;ve=nl(ve),_=nl(_)}ve=null}else ve=null;j!==null&&um(V,w,j,ve,!1),oe!==null&&Ve!==null&&um(V,Ve,oe,ve,!0)}}e:{if(w=S?El(S):window,j=w.nodeName&&w.nodeName.toLowerCase(),j==="select"||j==="input"&&w.type==="file")var te=Cs;else if(zs(w))if(Ns)te=Yg;else{te=Vg;var Te=qg}else j=w.nodeName,!j||j.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?S&&du(S.elementType)&&(te=Cs):te=Gg;if(te&&(te=te(e,S))){js(V,te,n,C);break e}Te&&Te(e,w,S),e==="focusout"&&S&&w.type==="number"&&S.memoizedProps.value!=null&&fu(w,"number",w.value)}switch(Te=S?El(S):window,e){case"focusin":(zs(Te)||Te.contentEditable==="true")&&(Na=Te,xu=S,Ol=null);break;case"focusout":Ol=xu=Na=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Ys(V,n,C);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":Ys(V,n,C)}var se;if(_u)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Ca?Os(e,n)&&(pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(pe="onCompositionStart");pe&&(xs&&n.locale!=="ko"&&(Ca||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Ca&&(se=Ss()):(_n=C,yu="value"in _n?_n.value:_n.textContent,Ca=!0)),Te=wo(S,pe),0<Te.length&&(pe=new Ts(pe,e,null,n,C),V.push({event:pe,listeners:Te}),se?pe.data=se:(se=Ms(n),se!==null&&(pe.data=se)))),(se=Ng?Ug(e,n):Lg(e,n))&&(pe=wo(S,"onBeforeInput"),0<pe.length&&(Te=new Ts("onBeforeInput","beforeinput",null,n,C),V.push({event:Te,listeners:pe}),Te.data=se)),Ry(V,e,S,n,C)}im(V,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wo(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Sl(e,n),l!=null&&a.unshift(ai(e,l,o)),l=Sl(e,t),l!=null&&a.push(ai(e,l,o))),e=e.return}return a}function nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function um(e,t,n,a,l){for(var o=t._reactName,s=[];n!==null&&n!==a;){var m=n,y=m.alternate,S=m.stateNode;if(m=m.tag,y!==null&&y===a)break;m!==5&&m!==26&&m!==27||S===null||(y=S,l?(S=Sl(n,o),S!=null&&s.unshift(ai(n,S,y))):l||(S=Sl(n,o),S!=null&&s.push(ai(n,S,y)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var zy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function rm(e){return(typeof e=="string"?e:""+e).replace(zy,`
`).replace(jy,"")}function cm(e,t){return t=rm(t),rm(e)===t}function xo(){}function je(e,t,n,a,l,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ma(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ma(e,""+a);break;case"className":Ci(e,"class",a);break;case"tabIndex":Ci(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,n,a);break;case"style":vs(e,a,o);break;case"data":if(t!=="object"){Ci(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Li(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&je(e,t,"name",l.name,l,null),je(e,t,"formEncType",l.formEncType,l,null),je(e,t,"formMethod",l.formMethod,l,null),je(e,t,"formTarget",l.formTarget,l,null)):(je(e,t,"encType",l.encType,l,null),je(e,t,"method",l.method,l,null),je(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Li(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=xo);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Li(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ji(e,"popover",a);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ji(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ug.get(n)||n,ji(e,n,a))}}function Pr(e,t,n,a,l,o){switch(n){case"style":vs(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ma(e,a):(typeof a=="number"||typeof a=="bigint")&&Ma(e,""+a);break;case"onScroll":a!=null&&xe("scroll",e);break;case"onScrollEnd":a!=null&&xe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=xo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=e[ft]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ji(e,n,a)}}}function nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var a=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:je(e,t,o,s,n,null)}}l&&je(e,t,"srcSet",n.srcSet,n,null),a&&je(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var m=o=s=l=null,y=null,S=null;for(a in n)if(n.hasOwnProperty(a)){var C=n[a];if(C!=null)switch(a){case"name":l=C;break;case"type":s=C;break;case"checked":y=C;break;case"defaultChecked":S=C;break;case"value":o=C;break;case"defaultValue":m=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:je(e,t,a,C,n,null)}}hs(e,o,m,y,S,s,l,!1),Ni(e);return;case"select":xe("invalid",e),a=s=o=null;for(l in n)if(n.hasOwnProperty(l)&&(m=n[l],m!=null))switch(l){case"value":o=m;break;case"defaultValue":s=m;break;case"multiple":a=m;default:je(e,t,l,m,n,null)}t=o,n=s,e.multiple=!!a,t!=null?Oa(e,!!a,t,!1):n!=null&&Oa(e,!!a,n,!0);return;case"textarea":xe("invalid",e),o=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(m=n[s],m!=null))switch(s){case"value":a=m;break;case"defaultValue":l=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:je(e,t,s,m,n,null)}gs(e,a,l,o),Ni(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:je(e,t,y,a,n,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(a=0;a<ni.length;a++)xe(ni[a],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in n)if(n.hasOwnProperty(S)&&(a=n[S],a!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:je(e,t,S,a,n,null)}return;default:if(du(t)){for(C in n)n.hasOwnProperty(C)&&(a=n[C],a!==void 0&&Pr(e,t,C,a,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(a=n[m],a!=null&&je(e,t,m,a,n,null))}function Cy(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,m=null,y=null,S=null,C=null;for(j in n){var V=n[j];if(n.hasOwnProperty(j)&&V!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":y=V;default:a.hasOwnProperty(j)||je(e,t,j,null,a,V)}}for(var w in a){var j=a[w];if(V=n[w],a.hasOwnProperty(w)&&(j!=null||V!=null))switch(w){case"type":o=j;break;case"name":l=j;break;case"checked":S=j;break;case"defaultChecked":C=j;break;case"value":s=j;break;case"defaultValue":m=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:j!==V&&je(e,t,w,j,a,V)}}su(e,s,m,y,S,C,o,l);return;case"select":j=s=m=w=null;for(o in n)if(y=n[o],n.hasOwnProperty(o)&&y!=null)switch(o){case"value":break;case"multiple":j=y;default:a.hasOwnProperty(o)||je(e,t,o,null,a,y)}for(l in a)if(o=a[l],y=n[l],a.hasOwnProperty(l)&&(o!=null||y!=null))switch(l){case"value":w=o;break;case"defaultValue":m=o;break;case"multiple":s=o;default:o!==y&&je(e,t,l,o,a,y)}t=m,n=s,a=j,w!=null?Oa(e,!!n,w,!1):!!a!=!!n&&(t!=null?Oa(e,!!n,t,!0):Oa(e,!!n,n?[]:"",!1));return;case"textarea":j=w=null;for(m in n)if(l=n[m],n.hasOwnProperty(m)&&l!=null&&!a.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:je(e,t,m,null,a,l)}for(s in a)if(l=a[s],o=n[s],a.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":w=l;break;case"defaultValue":j=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&je(e,t,s,l,a,o)}ps(e,w,j);return;case"option":for(var oe in n)if(w=n[oe],n.hasOwnProperty(oe)&&w!=null&&!a.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:je(e,t,oe,null,a,w)}for(y in a)if(w=a[y],j=n[y],a.hasOwnProperty(y)&&w!==j&&(w!=null||j!=null))switch(y){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:je(e,t,y,w,a,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in n)w=n[ve],n.hasOwnProperty(ve)&&w!=null&&!a.hasOwnProperty(ve)&&je(e,t,ve,null,a,w);for(S in a)if(w=a[S],j=n[S],a.hasOwnProperty(S)&&w!==j&&(w!=null||j!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:je(e,t,S,w,a,j)}return;default:if(du(t)){for(var Ve in n)w=n[Ve],n.hasOwnProperty(Ve)&&w!==void 0&&!a.hasOwnProperty(Ve)&&Pr(e,t,Ve,void 0,a,w);for(C in a)w=a[C],j=n[C],!a.hasOwnProperty(C)||w===j||w===void 0&&j===void 0||Pr(e,t,C,w,a,j);return}}for(var _ in n)w=n[_],n.hasOwnProperty(_)&&w!=null&&!a.hasOwnProperty(_)&&je(e,t,_,null,a,w);for(V in a)w=a[V],j=n[V],!a.hasOwnProperty(V)||w===j||w==null&&j==null||je(e,t,V,w,a,j)}var Ir=null,Wr=null;function Ro(e){return e.nodeType===9?e:e.ownerDocument}function sm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Fr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ec=null;function Ny(){var e=window.event;return e&&e.type==="popstate"?e===ec?!1:(ec=e,!0):(ec=null,!1)}var dm=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,mm=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof mm<"u"?function(e){return mm.resolve(null).then(e).catch(Hy)}:dm;function Hy(e){setTimeout(function(){throw e})}function tc(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),fi(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);fi(t)}function nc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":nc(n),cu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function By(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[bl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function qy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gt(e.nextSibling),e===null))return null;return e}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function pm(e,t,n){switch(t=Ro(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}var Lt=new Map,gm=new Set;function Do(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var pn=N.d;N.d={f:Vy,r:Gy,D:Yy,C:ky,L:Xy,m:Qy,X:Ky,S:Zy,M:$y};function Vy(){var e=pn.f(),t=Eo();return e||t}function Gy(e){var t=xa(e);t!==null&&t.tag===5&&t.type==="form"?kf(t):pn.r(e)}var al=typeof document>"u"?null:document;function ym(e,t,n){var a=al;if(a&&typeof t=="string"&&t){var l=xt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),gm.has(l)||(gm.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),nt(t,"link",e),Je(t),a.head.appendChild(t)))}}function Yy(e){pn.D(e),ym("dns-prefetch",e,null)}function ky(e,t){pn.C(e,t),ym("preconnect",e,t)}function Xy(e,t,n){pn.L(e,t,n);var a=al;if(a&&e&&t){var l='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+xt(n.imageSizes)+'"]')):l+='[href="'+xt(e)+'"]';var o=l;switch(t){case"style":o=ll(e);break;case"script":o=il(e)}Lt.has(o)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(o,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(li(o))||t==="script"&&a.querySelector(ii(o))||(t=a.createElement("link"),nt(t,"link",e),Je(t),a.head.appendChild(t)))}}function Qy(e,t){pn.m(e,t);var n=al;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+xt(a)+'"][href="'+xt(e)+'"]',o=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=il(e)}if(!Lt.has(o)&&(e=O({rel:"modulepreload",href:e},t),Lt.set(o,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ii(o)))return}a=n.createElement("link"),nt(a,"link",e),Je(a),n.head.appendChild(a)}}}function Zy(e,t,n){pn.S(e,t,n);var a=al;if(a&&e){var l=Ra(a).hoistableStyles,o=ll(e);t=t||"default";var s=l.get(o);if(!s){var m={loading:0,preload:null};if(s=a.querySelector(li(o)))m.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(o))&&ac(e,n);var y=s=a.createElement("link");Je(y),nt(y,"link",e),y._p=new Promise(function(S,C){y.onload=S,y.onerror=C}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Oo(s,t,a)}s={type:"stylesheet",instance:s,count:1,state:m},l.set(o,s)}}}function Ky(e,t){pn.X(e,t);var n=al;if(n&&e){var a=Ra(n).hoistableScripts,l=il(e),o=a.get(l);o||(o=n.querySelector(ii(l)),o||(e=O({src:e,async:!0},t),(t=Lt.get(l))&&lc(e,t),o=n.createElement("script"),Je(o),nt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function $y(e,t){pn.M(e,t);var n=al;if(n&&e){var a=Ra(n).hoistableScripts,l=il(e),o=a.get(l);o||(o=n.querySelector(ii(l)),o||(e=O({src:e,async:!0,type:"module"},t),(t=Lt.get(l))&&lc(e,t),o=n.createElement("script"),Je(o),nt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function vm(e,t,n,a){var l=(l=Me.current)?Do(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ll(n.href),n=Ra(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ll(n.href);var o=Ra(l).hoistableStyles,s=o.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=l.querySelector(li(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),o||Jy(l,e,n,s.state))),t&&a===null)throw Error(c(528,""));return s}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=il(n),n=Ra(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ll(e){return'href="'+xt(e)+'"'}function li(e){return'link[rel="stylesheet"]['+e+"]"}function bm(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Jy(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),nt(t,"link",n),Je(t),e.head.appendChild(t))}function il(e){return'[src="'+xt(e)+'"]'}function ii(e){return"script[async]"+e}function Em(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+xt(n.href)+'"]');if(a)return t.instance=a,Je(a),a;var l=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),nt(a,"style",l),Oo(a,n.precedence,e),t.instance=a;case"stylesheet":l=ll(n.href);var o=e.querySelector(li(l));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;a=bm(n),(l=Lt.get(l))&&ac(a,l),o=(e.ownerDocument||e).createElement("link"),Je(o);var s=o;return s._p=new Promise(function(m,y){s.onload=m,s.onerror=y}),nt(o,"link",a),t.state.loading|=4,Oo(o,n.precedence,e),t.instance=o;case"script":return o=il(n.src),(l=e.querySelector(ii(o)))?(t.instance=l,Je(l),l):(a=n,(l=Lt.get(o))&&(a=O({},n),lc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),nt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,Oo(a,n.precedence,e));return t.instance}function Oo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,o=l,s=0;s<a.length;s++){var m=a[s];if(m.dataset.precedence===t)o=m;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mo=null;function Sm(e,t,n){if(Mo===null){var a=new Map,l=Mo=new Map;l.set(n,a)}else l=Mo,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[bl]||o[it]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var m=a.get(s);m?m.push(o):a.set(s,[o])}}return a}function _m(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Py(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Am(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var oi=null;function Iy(){}function Wy(e,t,n){if(oi===null)throw Error(c(475));var a=oi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var l=ll(n.href),o=e.querySelector(li(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=zo.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=o,Je(o);return}o=e.ownerDocument||e,n=bm(n),(l=Lt.get(l))&&ac(n,l),o=o.createElement("link"),Je(o);var s=o;s._p=new Promise(function(m,y){s.onload=m,s.onerror=y}),nt(o,"link",n),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(a.count++,t=zo.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Fy(){if(oi===null)throw Error(c(475));var e=oi;return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function zo(){if(this.count--,this.count===0){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jo=null;function ic(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jo=new Map,t.forEach(ev,e),jo=null,zo.call(e))}function ev(e,t){if(!(t.state.loading&4)){var n=jo.get(e);if(n)var a=n.get(null);else{n=new Map,jo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=t.instance,s=l.getAttribute("data-precedence"),o=n.get(s)||a,o===a&&n.set(null,l),n.set(s,l),this.count++,a=zo.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:U,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function tv(e,t,n,a,l,o,s,m){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.hiddenUpdates=uu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Tm(e,t,n,a,l,o,s,m,y,S,C,V){return e=new tv(e,t,n,s,m,y,S,V),t=1,o===!0&&(t|=24),o=Nt(3,null,null,t),e.current=o,o.stateNode=e,t=Hu(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},yr(o),e}function wm(e){return e?(e=Ha,e):Ha}function xm(e,t,n,a,l,o){l=wm(l),a.context===null?a.context=l:a.pendingContext=l,a=Mn(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=zn(e,a,t),n!==null&&(ct(n,e,t),Xl(n,e,t))}function Rm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oc(e,t){Rm(e,t),(e=e.alternate)&&Rm(e,t)}function Dm(e){if(e.tag===13){var t=An(e,67108864);t!==null&&ct(t,e,67108864),oc(e,67108864)}}var Co=!0;function nv(e,t,n,a){var l=H.T;H.T=null;var o=N.p;try{N.p=2,uc(e,t,n,a)}finally{N.p=o,H.T=l}}function av(e,t,n,a){var l=H.T;H.T=null;var o=N.p;try{N.p=8,uc(e,t,n,a)}finally{N.p=o,H.T=l}}function uc(e,t,n,a){if(Co){var l=rc(a);if(l===null)Jr(e,t,a,No,n),Mm(e,a);else if(iv(l,e,t,n,a))a.stopPropagation();else if(Mm(e,a),t&4&&-1<lv.indexOf(e)){for(;l!==null;){var o=xa(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Jn(o.pendingLanes);if(s!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;s;){var y=1<<31-yt(s);m.entanglements[1]|=y,s&=~y}Jt(o),!(He&6)&&(yo=Xt()+500,ti(0))}}break;case 13:m=An(o,2),m!==null&&ct(m,o,2),Eo(),oc(o,2)}if(o=rc(a),o===null&&Jr(e,t,a,No,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else Jr(e,t,a,null,n)}}function rc(e){return e=hu(e),cc(e)}var No=null;function cc(e){if(No=null,e=Pn(e),e!==null){var t=X(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Ee(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return No=e,null}function Om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kp()){case Wc:return 2;case Fc:return 8;case Di:case Xp:return 32;case es:return 268435456;default:return 32}default:return 32}}var sc=!1,Bn=null,qn=null,Vn=null,ri=new Map,ci=new Map,Gn=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mm(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function si(e,t,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},t!==null&&(t=xa(t),t!==null&&Dm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function iv(e,t,n,a,l){switch(t){case"focusin":return Bn=si(Bn,e,t,n,a,l),!0;case"dragenter":return qn=si(qn,e,t,n,a,l),!0;case"mouseover":return Vn=si(Vn,e,t,n,a,l),!0;case"pointerover":var o=l.pointerId;return ri.set(o,si(ri.get(o)||null,e,t,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,ci.set(o,si(ci.get(o)||null,e,t,n,a,l)),!0}return!1}function zm(e){var t=Pn(e.target);if(t!==null){var n=X(t);if(n!==null){if(t=n.tag,t===13){if(t=Ee(n),t!==null){e.blockedOn=t,Fp(e.priority,function(){if(n.tag===13){var a=_t(),l=An(n,a);l!==null&&ct(l,n,a),oc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);mu=a,n.target.dispatchEvent(a),mu=null}else return t=xa(n),t!==null&&Dm(t),e.blockedOn=n,!1;t.shift()}return!0}function jm(e,t,n){Uo(e)&&n.delete(t)}function ov(){sc=!1,Bn!==null&&Uo(Bn)&&(Bn=null),qn!==null&&Uo(qn)&&(qn=null),Vn!==null&&Uo(Vn)&&(Vn=null),ri.forEach(jm),ci.forEach(jm)}function Lo(e,t){e.blockedOn===t&&(e.blockedOn=null,sc||(sc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,ov)))}var Ho=null;function Cm(e){Ho!==e&&(Ho=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Ho===e&&(Ho=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(cc(a||n)===null)continue;break}var o=xa(n);o!==null&&(e.splice(t,3),t-=3,Fu(o,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function fi(e){function t(y){return Lo(y,e)}Bn!==null&&Lo(Bn,e),qn!==null&&Lo(qn,e),Vn!==null&&Lo(Vn,e),ri.forEach(t),ci.forEach(t);for(var n=0;n<Gn.length;n++){var a=Gn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)zm(n),n.blockedOn===null&&Gn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],o=n[a+1],s=l[ft]||null;if(typeof o=="function")s||Cm(n);else if(s){var m=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[ft]||null)m=s.formAction;else if(cc(l)!==null)continue}else m=s.action;typeof m=="function"?n[a+1]=m:(n.splice(a,3),a-=3),Cm(n)}}}function fc(e){this._internalRoot=e}Bo.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=_t();xm(n,a,e,t,null,null)},Bo.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&el(),xm(e.current,2,null,e,null,null),Eo(),t[wa]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=os();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gn.length&&t!==0&&t<Gn[n].priority;n++);Gn.splice(n,0,e),n===0&&zm(e)}};var Nm=u.version;if(Nm!=="19.0.0")throw Error(c(527,Nm,"19.0.0"));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=D(t),e=e!==null?Z(e):null,e=e===null?null:e.stateNode,e};var uv={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:H,findFiberByHostInstance:Pn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{gl=qo.inject(uv),gt=qo}catch{}}return mi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",l=If,o=Wf,s=Ff,m=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Tm(e,1,!1,null,null,n,a,l,o,s,m,null),e[wa]=t.current,$r(e.nodeType===8?e.parentNode:e),new fc(t)},mi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,l="",o=If,s=Wf,m=Ff,y=null,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(S=n.formState)),t=Tm(e,1,!0,t,n??null,a,l,o,s,m,y,S),t.context=wm(null),n=t.current,a=_t(),l=Mn(a),l.callback=null,zn(n,l,a),t.current.lanes=a,vl(t,a),Jt(t),e[wa]=t.current,$r(e),new Bo(t)},mi.version="19.0.0",mi}var Xm;function bv(){if(Xm)return hc.exports;Xm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),hc.exports=vv(),hc.exports}var Ev=bv();let Sv={data:""},_v=i=>typeof window=="object"?((i?i.querySelector("#_goober"):window._goober)||Object.assign((i||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:i||Sv,Av=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Tv=/\/\*[^]*?\*\/|  +/g,Qm=/\n+/g,kn=(i,u)=>{let r="",c="",d="";for(let f in i){let h=i[f];f[0]=="@"?f[1]=="i"?r=f+" "+h+";":c+=f[1]=="f"?kn(h,f):f+"{"+kn(h,f[1]=="k"?"":u)+"}":typeof h=="object"?c+=kn(h,u?u.replace(/([^,])+/g,g=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,g):g?g+" "+p:p)):f):h!=null&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=kn.p?kn.p(f,h):f+":"+h+";")}return r+(u&&d?u+"{"+d+"}":d)+c},gn={},Ah=i=>{if(typeof i=="object"){let u="";for(let r in i)u+=r+Ah(i[r]);return u}return i},wv=(i,u,r,c,d)=>{let f=Ah(i),h=gn[f]||(gn[f]=(p=>{let v=0,B=11;for(;v<p.length;)B=101*B+p.charCodeAt(v++)>>>0;return"go"+B})(f));if(!gn[h]){let p=f!==i?i:(v=>{let B,z,A=[{}];for(;B=Av.exec(v.replace(Tv,""));)B[4]?A.shift():B[3]?(z=B[3].replace(Qm," ").trim(),A.unshift(A[0][z]=A[0][z]||{})):A[0][B[1]]=B[2].replace(Qm," ").trim();return A[0]})(i);gn[h]=kn(d?{["@keyframes "+h]:p}:p,r?"":"."+h)}let g=r&&gn.g?gn.g:null;return r&&(gn.g=gn[h]),((p,v,B,z)=>{z?v.data=v.data.replace(z,p):v.data.indexOf(p)===-1&&(v.data=B?p+v.data:v.data+p)})(gn[h],u,c,g),h},xv=(i,u,r)=>i.reduce((c,d,f)=>{let h=u[f];if(h&&h.call){let g=h(r),p=g&&g.props&&g.props.className||/^go/.test(g)&&g;h=p?"."+p:g&&typeof g=="object"?g.props?"":kn(g,""):g===!1?"":g}return c+d+(h??"")},"");function eu(i){let u=this||{},r=i.call?i(u.p):i;return wv(r.unshift?r.raw?xv(r,[].slice.call(arguments,1),u.p):r.reduce((c,d)=>Object.assign(c,d&&d.call?d(u.p):d),{}):r,_v(u.target),u.g,u.o,u.k)}let Th,jc,Cc;eu.bind({g:1});let vn=eu.bind({k:1});function Rv(i,u,r,c){kn.p=u,Th=i,jc=r,Cc=c}function Kn(i,u){let r=this||{};return function(){let c=arguments;function d(f,h){let g=Object.assign({},f),p=g.className||d.className;r.p=Object.assign({theme:jc&&jc()},g),r.o=/ *go\d+/.test(p),g.className=eu.apply(r,c)+(p?" "+p:"");let v=i;return i[0]&&(v=g.as||i,delete g.as),Cc&&v[0]&&Cc(g),Th(v,g)}return d}}var Dv=i=>typeof i=="function",Ko=(i,u)=>Dv(i)?i(u):i,Ov=(()=>{let i=0;return()=>(++i).toString()})(),wh=(()=>{let i;return()=>{if(i===void 0&&typeof window<"u"){let u=matchMedia("(prefers-reduced-motion: reduce)");i=!u||u.matches}return i}})(),Mv=20,xh=(i,u)=>{switch(u.type){case 0:return{...i,toasts:[u.toast,...i.toasts].slice(0,Mv)};case 1:return{...i,toasts:i.toasts.map(f=>f.id===u.toast.id?{...f,...u.toast}:f)};case 2:let{toast:r}=u;return xh(i,{type:i.toasts.find(f=>f.id===r.id)?1:0,toast:r});case 3:let{toastId:c}=u;return{...i,toasts:i.toasts.map(f=>f.id===c||c===void 0?{...f,dismissed:!0,visible:!1}:f)};case 4:return u.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(f=>f.id!==u.toastId)};case 5:return{...i,pausedAt:u.time};case 6:let d=u.time-(i.pausedAt||0);return{...i,pausedAt:void 0,toasts:i.toasts.map(f=>({...f,pauseDuration:f.pauseDuration+d}))}}},Zo=[],va={toasts:[],pausedAt:void 0},Aa=i=>{va=xh(va,i),Zo.forEach(u=>{u(va)})},zv={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jv=(i={})=>{let[u,r]=P.useState(va),c=P.useRef(va);P.useEffect(()=>(c.current!==va&&r(va),Zo.push(r),()=>{let f=Zo.indexOf(r);f>-1&&Zo.splice(f,1)}),[]);let d=u.toasts.map(f=>{var h,g,p;return{...i,...i[f.type],...f,removeDelay:f.removeDelay||((h=i[f.type])==null?void 0:h.removeDelay)||(i==null?void 0:i.removeDelay),duration:f.duration||((g=i[f.type])==null?void 0:g.duration)||(i==null?void 0:i.duration)||zv[f.type],style:{...i.style,...(p=i[f.type])==null?void 0:p.style,...f.style}}});return{...u,toasts:d}},Cv=(i,u="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:u,ariaProps:{role:"status","aria-live":"polite"},message:i,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Ov()}),wi=i=>(u,r)=>{let c=Cv(u,i,r);return Aa({type:2,toast:c}),c.id},st=(i,u)=>wi("blank")(i,u);st.error=wi("error");st.success=wi("success");st.loading=wi("loading");st.custom=wi("custom");st.dismiss=i=>{Aa({type:3,toastId:i})};st.remove=i=>Aa({type:4,toastId:i});st.promise=(i,u,r)=>{let c=st.loading(u.loading,{...r,...r==null?void 0:r.loading});return typeof i=="function"&&(i=i()),i.then(d=>{let f=u.success?Ko(u.success,d):void 0;return f?st.success(f,{id:c,...r,...r==null?void 0:r.success}):st.dismiss(c),d}).catch(d=>{let f=u.error?Ko(u.error,d):void 0;f?st.error(f,{id:c,...r,...r==null?void 0:r.error}):st.dismiss(c)}),i};var Nv=(i,u)=>{Aa({type:1,toast:{id:i,height:u}})},Uv=()=>{Aa({type:5,time:Date.now()})},bi=new Map,Lv=1e3,Hv=(i,u=Lv)=>{if(bi.has(i))return;let r=setTimeout(()=>{bi.delete(i),Aa({type:4,toastId:i})},u);bi.set(i,r)},Bv=i=>{let{toasts:u,pausedAt:r}=jv(i);P.useEffect(()=>{if(r)return;let f=Date.now(),h=u.map(g=>{if(g.duration===1/0)return;let p=(g.duration||0)+g.pauseDuration-(f-g.createdAt);if(p<0){g.visible&&st.dismiss(g.id);return}return setTimeout(()=>st.dismiss(g.id),p)});return()=>{h.forEach(g=>g&&clearTimeout(g))}},[u,r]);let c=P.useCallback(()=>{r&&Aa({type:6,time:Date.now()})},[r]),d=P.useCallback((f,h)=>{let{reverseOrder:g=!1,gutter:p=8,defaultPosition:v}=h||{},B=u.filter(U=>(U.position||v)===(f.position||v)&&U.height),z=B.findIndex(U=>U.id===f.id),A=B.filter((U,k)=>k<z&&U.visible).length;return B.filter(U=>U.visible).slice(...g?[A+1]:[0,A]).reduce((U,k)=>U+(k.height||0)+p,0)},[u]);return P.useEffect(()=>{u.forEach(f=>{if(f.dismissed)Hv(f.id,f.removeDelay);else{let h=bi.get(f.id);h&&(clearTimeout(h),bi.delete(f.id))}})},[u]),{toasts:u,handlers:{updateHeight:Nv,startPause:Uv,endPause:c,calculateOffset:d}}},qv=vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Vv=vn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Gv=vn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Yv=Kn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Vv} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${i=>i.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Gv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,kv=vn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Xv=Kn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${i=>i.secondary||"#e0e0e0"};
  border-right-color: ${i=>i.primary||"#616161"};
  animation: ${kv} 1s linear infinite;
`,Qv=vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Zv=vn`
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
}`,Kv=Kn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Zv} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${i=>i.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,$v=Kn("div")`
  position: absolute;
`,Jv=Kn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Pv=vn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Iv=Kn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Pv} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Wv=({toast:i})=>{let{icon:u,type:r,iconTheme:c}=i;return u!==void 0?typeof u=="string"?P.createElement(Iv,null,u):u:r==="blank"?null:P.createElement(Jv,null,P.createElement(Xv,{...c}),r!=="loading"&&P.createElement($v,null,r==="error"?P.createElement(Yv,{...c}):P.createElement(Kv,{...c})))},Fv=i=>`
0% {transform: translate3d(0,${i*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,e0=i=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i*-150}%,-1px) scale(.6); opacity:0;}
`,t0="0%{opacity:0;} 100%{opacity:1;}",n0="0%{opacity:1;} 100%{opacity:0;}",a0=Kn("div")`
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
`,l0=Kn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,i0=(i,u)=>{let r=i.includes("top")?1:-1,[c,d]=wh()?[t0,n0]:[Fv(r),e0(r)];return{animation:u?`${vn(c)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${vn(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},o0=P.memo(({toast:i,position:u,style:r,children:c})=>{let d=i.height?i0(i.position||u||"top-center",i.visible):{opacity:0},f=P.createElement(Wv,{toast:i}),h=P.createElement(l0,{...i.ariaProps},Ko(i.message,i));return P.createElement(a0,{className:i.className,style:{...d,...r,...i.style}},typeof c=="function"?c({icon:f,message:h}):P.createElement(P.Fragment,null,f,h))});Rv(P.createElement);var u0=({id:i,className:u,style:r,onHeightUpdate:c,children:d})=>{let f=P.useCallback(h=>{if(h){let g=()=>{let p=h.getBoundingClientRect().height;c(i,p)};g(),new MutationObserver(g).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[i,c]);return P.createElement("div",{ref:f,className:u,style:r},d)},r0=(i,u)=>{let r=i.includes("top"),c=r?{top:0}:{bottom:0},d=i.includes("center")?{justifyContent:"center"}:i.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:wh()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${u*(r?1:-1)}px)`,...c,...d}},c0=eu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Go=16,s0=({reverseOrder:i,position:u="top-center",toastOptions:r,gutter:c,children:d,containerStyle:f,containerClassName:h})=>{let{toasts:g,handlers:p}=Bv(r);return P.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Go,left:Go,right:Go,bottom:Go,pointerEvents:"none",...f},className:h,onMouseEnter:p.startPause,onMouseLeave:p.endPause},g.map(v=>{let B=v.position||u,z=p.calculateOffset(v,{reverseOrder:i,gutter:c,defaultPosition:u}),A=r0(B,z);return P.createElement(u0,{id:v.id,key:v.id,onHeightUpdate:p.updateHeight,className:v.visible?c0:"",style:A},v.type==="custom"?Ko(v.message,v):d?d(v):P.createElement(o0,{toast:v,position:B}))}))},Zm=st;const Rh="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%2324292f'/%3e%3c/svg%3e";/**
  * @pigment-css/react v0.0.30
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */var f0=Object.defineProperty,d0=Object.defineProperties,m0=Object.getOwnPropertyDescriptors,$o=Object.getOwnPropertySymbols,Dh=Object.prototype.hasOwnProperty,Oh=Object.prototype.propertyIsEnumerable,Km=(i,u,r)=>u in i?f0(i,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[u]=r,Pt=(i,u)=>{for(var r in u||(u={}))Dh.call(u,r)&&Km(i,r,u[r]);if($o)for(var r of $o(u))Oh.call(u,r)&&Km(i,r,u[r]);return i},Mh=(i,u)=>d0(i,m0(u)),zh=(i,u)=>{var r={};for(var c in i)Dh.call(i,c)&&u.indexOf(c)<0&&(r[c]=i[c]);if(i!=null&&$o)for(var c of $o(i))u.indexOf(c)<0&&Oh.call(i,c)&&(r[c]=i[c]);return r};function jh(i){var u,r,c="";if(typeof i=="string"||typeof i=="number")c+=i;else if(typeof i=="object")if(Array.isArray(i)){var d=i.length;for(u=0;u<d;u++)i[u]&&(r=jh(i[u]))&&(c&&(c+=" "),c+=r)}else for(r in i)i[r]&&(c&&(c+=" "),c+=r);return c}function h0(){for(var i,u,r=0,c="",d=arguments.length;r<d;r++)(i=arguments[r])&&(u=jh(i))&&(c&&(c+=" "),c+=u);return c}function p0(i){var u=Object.create(null);return function(r){return u[r]===void 0&&(u[r]=i(r)),u[r]}}var g0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,y0=p0(function(i){return g0.test(i)||i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)<91});/**
  * @pigment-css/react v0.0.30
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */function v0(i,u){var r=i,{ownerState:c={}}=r,d=zh(r,["ownerState"]);return u.filter(({props:h})=>typeof h=="function"?h(Mh(Pt(Pt({},d),c),{ownerState:c})):Object.entries(h).every(([g,p])=>c[g]===p||d[g]===p)).map(({className:h})=>h)}function $m(i){return typeof i=="string"&&i.charCodeAt(0)>96}var Nc=i=>i!=="as"&&i!=="ownerState",Jm=i=>Nc(i)&&i!=="classes";function Fe(i,u={}){const{name:r,slot:c,shouldForwardProp:d}=u;let f=d;d||($m(i)?f=y0:c==="Root"||c==="root"?f=Jm:f=Nc);let h=!f("as");typeof i!="string"&&i.__styled_by_pigment_css&&(h=!1);function g(p={}){const{displayName:v,classes:B=[],vars:z={},variants:A=[]}=p,U=P.forwardRef(function(ae,ne){const le=ae,{className:ge,sx:be,style:G,ownerState:I}=le,x=zh(le,["className","sx","style","ownerState"]),W=h&&ae.as||i,H=Object.entries(z).reduce((q,[me,[re,Q]])=>{const M=re(ae);return typeof M>"u"||(typeof M=="string"||Q?q[`--${me}`]=M:q[`--${me}`]=`${M}px`),q},{}),O=h0(B,ge,v0(ae,A));ae.as&&!d&&($m(W)||(c==="Root"||c==="root"?f=Jm:f=Nc));const Y={};for(const q in x)h&&q==="as"||(f(q)||!h&&q==="as")&&(Y[q]=x[q]);return fe.jsx(W,Mh(Pt(Pt({},Y),W.__styled_by_pigment_css&&{ownerState:I}),{ref:ne,className:O,style:Pt(Pt({},H),G)}))});let k=v;return!k&&r&&(k=`${r}${c?`-${c}`:""}`),U.displayName=`Styled(${k})`,U.__styled_by_pigment_css=!0,U}return g}/**
  * @pigment-css/react v0.0.30
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */function Uc(i,{className:u,style:r}){let c="",d={};function f(g){g&&(c+=`${typeof g=="string"?g:g.className} `,d=Pt(Pt({},d),g&&typeof g!="string"?g.vars:void 0))}Array.isArray(i)?i.forEach(g=>{f(g)}):f(i);const h={};return d&&Object.entries(d).forEach(([g,[p,v]])=>{typeof p=="string"||v?h[`--${g}`]=p:h[`--${g}`]=`${p}px`}),{className:`${c.trim()}${u?` ${u}`:""}`,style:Pt(Pt({},h),r)}}const{createElement:hl,createContext:b0,forwardRef:Ch,useCallback:ht,useContext:Nh,useEffect:Ea,useImperativeHandle:Uh,useLayoutEffect:E0,useMemo:S0,useRef:pt,useState:dl}=_h,Pm=_h[`useId${Math.random()}`.slice(0,5)],_0=E0,tu=b0(null);tu.displayName="PanelGroupContext";const Sa=_0,A0=typeof Pm=="function"?Pm:()=>null;let T0=0;function Gc(i=null){const u=A0(),r=pt(i||u||null);return r.current===null&&(r.current=""+T0++),i??r.current}function Lh({children:i,className:u="",collapsedSize:r,collapsible:c,defaultSize:d,forwardedRef:f,id:h,maxSize:g,minSize:p,onCollapse:v,onExpand:B,onResize:z,order:A,style:U,tagName:k="div",...ie}){const ae=Nh(tu);if(ae===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:ne,expandPanel:le,getPanelSize:ge,getPanelStyle:be,groupId:G,isPanelCollapsed:I,reevaluatePanelConstraints:x,registerPanel:W,resizePanel:H,unregisterPanel:O}=ae,Y=Gc(h),q=pt({callbacks:{onCollapse:v,onExpand:B,onResize:z},constraints:{collapsedSize:r,collapsible:c,defaultSize:d,maxSize:g,minSize:p},id:Y,idIsFromProps:h!==void 0,order:A});pt({didLogMissingDefaultSizeWarning:!1}),Sa(()=>{const{callbacks:re,constraints:Q}=q.current,M={...Q};q.current.id=Y,q.current.idIsFromProps=h!==void 0,q.current.order=A,re.onCollapse=v,re.onExpand=B,re.onResize=z,Q.collapsedSize=r,Q.collapsible=c,Q.defaultSize=d,Q.maxSize=g,Q.minSize=p,(M.collapsedSize!==Q.collapsedSize||M.collapsible!==Q.collapsible||M.maxSize!==Q.maxSize||M.minSize!==Q.minSize)&&x(q.current,M)}),Sa(()=>{const re=q.current;return W(re),()=>{O(re)}},[A,Y,W,O]),Uh(f,()=>({collapse:()=>{ne(q.current)},expand:re=>{le(q.current,re)},getId(){return Y},getSize(){return ge(q.current)},isCollapsed(){return I(q.current)},isExpanded(){return!I(q.current)},resize:re=>{H(q.current,re)}}),[ne,le,ge,I,Y,H]);const me=be(q.current,d);return hl(k,{...ie,children:i,className:u,id:h,style:{...me,...U},"data-panel":"","data-panel-collapsible":c||void 0,"data-panel-group-id":G,"data-panel-id":Y,"data-panel-size":parseFloat(""+me.flexGrow).toFixed(1)})}const Lc=Ch((i,u)=>hl(Lh,{...i,forwardedRef:u}));Lh.displayName="Panel";Lc.displayName="forwardRef(Panel)";let Hc=null,ba=null;function w0(i,u){if(u){const r=(u&Gh)!==0,c=(u&Yh)!==0,d=(u&kh)!==0,f=(u&Xh)!==0;if(r)return d?"se-resize":f?"ne-resize":"e-resize";if(c)return d?"sw-resize":f?"nw-resize":"w-resize";if(d)return"s-resize";if(f)return"n-resize"}switch(i){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function x0(){ba!==null&&(document.head.removeChild(ba),Hc=null,ba=null)}function vc(i,u){const r=w0(i,u);Hc!==r&&(Hc=r,ba===null&&(ba=document.createElement("style"),document.head.appendChild(ba)),ba.innerHTML=`*{cursor: ${r}!important;}`)}function Hh(i){return i.type==="keydown"}function Bh(i){return i.type.startsWith("pointer")}function qh(i){return i.type.startsWith("mouse")}function nu(i){if(Bh(i)){if(i.isPrimary)return{x:i.clientX,y:i.clientY}}else if(qh(i))return{x:i.clientX,y:i.clientY};return{x:1/0,y:1/0}}function R0(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function D0(i,u,r){return i.x<u.x+u.width&&i.x+i.width>u.x&&i.y<u.y+u.height&&i.y+i.height>u.y}function O0(i,u){if(i===u)throw new Error("Cannot compare node with itself");const r={a:Fm(i),b:Fm(u)};let c;for(;r.a.at(-1)===r.b.at(-1);)i=r.a.pop(),u=r.b.pop(),c=i;_e(c,"Stacking order can only be calculated for elements with a common ancestor");const d={a:Wm(Im(r.a)),b:Wm(Im(r.b))};if(d.a===d.b){const f=c.childNodes,h={a:r.a.at(-1),b:r.b.at(-1)};let g=f.length;for(;g--;){const p=f[g];if(p===h.a)return 1;if(p===h.b)return-1}}return Math.sign(d.a-d.b)}const M0=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function z0(i){var u;const r=getComputedStyle((u=Vh(i))!==null&&u!==void 0?u:i).display;return r==="flex"||r==="inline-flex"}function j0(i){const u=getComputedStyle(i);return!!(u.position==="fixed"||u.zIndex!=="auto"&&(u.position!=="static"||z0(i))||+u.opacity<1||"transform"in u&&u.transform!=="none"||"webkitTransform"in u&&u.webkitTransform!=="none"||"mixBlendMode"in u&&u.mixBlendMode!=="normal"||"filter"in u&&u.filter!=="none"||"webkitFilter"in u&&u.webkitFilter!=="none"||"isolation"in u&&u.isolation==="isolate"||M0.test(u.willChange)||u.webkitOverflowScrolling==="touch")}function Im(i){let u=i.length;for(;u--;){const r=i[u];if(_e(r,"Missing node"),j0(r))return r}return null}function Wm(i){return i&&Number(getComputedStyle(i).zIndex)||0}function Fm(i){const u=[];for(;i;)u.push(i),i=Vh(i);return u}function Vh(i){const{parentNode:u}=i;return u&&u instanceof ShadowRoot?u.host:u}const Gh=1,Yh=2,kh=4,Xh=8,C0=R0()==="coarse";let Yt=[],ml=!1,Xn=new Map,au=new Map;const _i=new Set;function N0(i,u,r,c,d){var f;const{ownerDocument:h}=u,g={direction:r,element:u,hitAreaMargins:c,setResizeHandlerState:d},p=(f=Xn.get(h))!==null&&f!==void 0?f:0;return Xn.set(h,p+1),_i.add(g),Jo(),function(){var B;au.delete(i),_i.delete(g);const z=(B=Xn.get(h))!==null&&B!==void 0?B:1;if(Xn.set(h,z-1),Jo(),z===1&&Xn.delete(h),Yt.includes(g)){const A=Yt.indexOf(g);A>=0&&Yt.splice(A,1),kc(),d("up",!0,null)}}}function eh(i){const{target:u}=i,{x:r,y:c}=nu(i);ml=!0,Yc({target:u,x:r,y:c}),Jo(),Yt.length>0&&(Po("down",i),i.preventDefault(),i.stopPropagation())}function hi(i){const{x:u,y:r}=nu(i);if(ml&&i.buttons===0&&(ml=!1,Po("up",i)),!ml){const{target:c}=i;Yc({target:c,x:u,y:r})}Po("move",i),kc(),Yt.length>0&&i.preventDefault()}function ol(i){const{target:u}=i,{x:r,y:c}=nu(i);au.clear(),ml=!1,Yt.length>0&&i.preventDefault(),Po("up",i),Yc({target:u,x:r,y:c}),kc(),Jo()}function Yc({target:i,x:u,y:r}){Yt.splice(0);let c=null;(i instanceof HTMLElement||i instanceof SVGElement)&&(c=i),_i.forEach(d=>{const{element:f,hitAreaMargins:h}=d,g=f.getBoundingClientRect(),{bottom:p,left:v,right:B,top:z}=g,A=C0?h.coarse:h.fine;if(u>=v-A&&u<=B+A&&r>=z-A&&r<=p+A){if(c!==null&&document.contains(c)&&f!==c&&!f.contains(c)&&!c.contains(f)&&O0(c,f)>0){let k=c,ie=!1;for(;k&&!k.contains(f);){if(D0(k.getBoundingClientRect(),g)){ie=!0;break}k=k.parentElement}if(ie)return}Yt.push(d)}})}function bc(i,u){au.set(i,u)}function kc(){let i=!1,u=!1;Yt.forEach(c=>{const{direction:d}=c;d==="horizontal"?i=!0:u=!0});let r=0;au.forEach(c=>{r|=c}),i&&u?vc("intersection",r):i?vc("horizontal",r):u?vc("vertical",r):x0()}function Jo(){Xn.forEach((i,u)=>{const{body:r}=u;r.removeEventListener("contextmenu",ol),r.removeEventListener("pointerdown",eh),r.removeEventListener("pointerleave",hi),r.removeEventListener("pointermove",hi)}),window.removeEventListener("pointerup",ol),window.removeEventListener("pointercancel",ol),_i.size>0&&(ml?(Yt.length>0&&Xn.forEach((i,u)=>{const{body:r}=u;i>0&&(r.addEventListener("contextmenu",ol),r.addEventListener("pointerleave",hi),r.addEventListener("pointermove",hi))}),window.addEventListener("pointerup",ol),window.addEventListener("pointercancel",ol)):Xn.forEach((i,u)=>{const{body:r}=u;i>0&&(r.addEventListener("pointerdown",eh,{capture:!0}),r.addEventListener("pointermove",hi))}))}function Po(i,u){_i.forEach(r=>{const{setResizeHandlerState:c}=r,d=Yt.includes(r);c(i,d,u)})}function U0(){const[i,u]=dl(0);return ht(()=>u(r=>r+1),[])}function _e(i,u){if(!i)throw console.error(u),Error(u)}const Xc=10;function _a(i,u,r=Xc){return i.toFixed(r)===u.toFixed(r)?0:i>u?1:-1}function yn(i,u,r=Xc){return _a(i,u,r)===0}function At(i,u,r){return _a(i,u,r)===0}function L0(i,u,r){if(i.length!==u.length)return!1;for(let c=0;c<i.length;c++){const d=i[c],f=u[c];if(!At(d,f,r))return!1}return!0}function cl({panelConstraints:i,panelIndex:u,size:r}){const c=i[u];_e(c!=null,`Panel constraints not found for index ${u}`);let{collapsedSize:d=0,collapsible:f,maxSize:h=100,minSize:g=0}=c;if(_a(r,g)<0)if(f){const p=(d+g)/2;_a(r,p)<0?r=d:r=g}else r=g;return r=Math.min(h,r),r=parseFloat(r.toFixed(Xc)),r}function gi({delta:i,initialLayout:u,panelConstraints:r,pivotIndices:c,prevLayout:d,trigger:f}){if(At(i,0))return u;const h=[...u],[g,p]=c;_e(g!=null,"Invalid first pivot index"),_e(p!=null,"Invalid second pivot index");let v=0;if(f==="keyboard"){{const z=i<0?p:g,A=r[z];_e(A,`Panel constraints not found for index ${z}`);const{collapsedSize:U=0,collapsible:k,minSize:ie=0}=A;if(k){const ae=u[z];if(_e(ae!=null,`Previous layout not found for panel index ${z}`),At(ae,U)){const ne=ie-ae;_a(ne,Math.abs(i))>0&&(i=i<0?0-ne:ne)}}}{const z=i<0?g:p,A=r[z];_e(A,`No panel constraints found for index ${z}`);const{collapsedSize:U=0,collapsible:k,minSize:ie=0}=A;if(k){const ae=u[z];if(_e(ae!=null,`Previous layout not found for panel index ${z}`),At(ae,ie)){const ne=ae-U;_a(ne,Math.abs(i))>0&&(i=i<0?0-ne:ne)}}}}{const z=i<0?1:-1;let A=i<0?p:g,U=0;for(;;){const ie=u[A];_e(ie!=null,`Previous layout not found for panel index ${A}`);const ne=cl({panelConstraints:r,panelIndex:A,size:100})-ie;if(U+=ne,A+=z,A<0||A>=r.length)break}const k=Math.min(Math.abs(i),Math.abs(U));i=i<0?0-k:k}{let A=i<0?g:p;for(;A>=0&&A<r.length;){const U=Math.abs(i)-Math.abs(v),k=u[A];_e(k!=null,`Previous layout not found for panel index ${A}`);const ie=k-U,ae=cl({panelConstraints:r,panelIndex:A,size:ie});if(!At(k,ae)&&(v+=k-ae,h[A]=ae,v.toPrecision(3).localeCompare(Math.abs(i).toPrecision(3),void 0,{numeric:!0})>=0))break;i<0?A--:A++}}if(L0(d,h))return d;{const z=i<0?p:g,A=u[z];_e(A!=null,`Previous layout not found for panel index ${z}`);const U=A+v,k=cl({panelConstraints:r,panelIndex:z,size:U});if(h[z]=k,!At(k,U)){let ie=U-k,ne=i<0?p:g;for(;ne>=0&&ne<r.length;){const le=h[ne];_e(le!=null,`Previous layout not found for panel index ${ne}`);const ge=le+ie,be=cl({panelConstraints:r,panelIndex:ne,size:ge});if(At(le,be)||(ie-=be-le,h[ne]=be),At(ie,0))break;i>0?ne--:ne++}}}const B=h.reduce((z,A)=>A+z,0);return At(B,100)?h:d}function H0({layout:i,panelsArray:u,pivotIndices:r}){let c=0,d=100,f=0,h=0;const g=r[0];_e(g!=null,"No pivot index found"),u.forEach((z,A)=>{const{constraints:U}=z,{maxSize:k=100,minSize:ie=0}=U;A===g?(c=ie,d=k):(f+=ie,h+=k)});const p=Math.min(d,100-f),v=Math.max(c,100-h),B=i[g];return{valueMax:p,valueMin:v,valueNow:B}}function Ai(i,u=document){return Array.from(u.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${i}"]`))}function Qh(i,u,r=document){const d=Ai(i,r).findIndex(f=>f.getAttribute("data-panel-resize-handle-id")===u);return d??null}function Zh(i,u,r){const c=Qh(i,u,r);return c!=null?[c,c+1]:[-1,-1]}function Kh(i,u=document){var r;if(u instanceof HTMLElement&&(u==null||(r=u.dataset)===null||r===void 0?void 0:r.panelGroupId)==i)return u;const c=u.querySelector(`[data-panel-group][data-panel-group-id="${i}"]`);return c||null}function lu(i,u=document){const r=u.querySelector(`[data-panel-resize-handle-id="${i}"]`);return r||null}function B0(i,u,r,c=document){var d,f,h,g;const p=lu(u,c),v=Ai(i,c),B=p?v.indexOf(p):-1,z=(d=(f=r[B])===null||f===void 0?void 0:f.id)!==null&&d!==void 0?d:null,A=(h=(g=r[B+1])===null||g===void 0?void 0:g.id)!==null&&h!==void 0?h:null;return[z,A]}function q0({committedValuesRef:i,eagerValuesRef:u,groupId:r,layout:c,panelDataArray:d,panelGroupElement:f,setLayout:h}){pt({didWarnAboutMissingResizeHandle:!1}),Sa(()=>{if(!f)return;const g=Ai(r,f);for(let p=0;p<d.length-1;p++){const{valueMax:v,valueMin:B,valueNow:z}=H0({layout:c,panelsArray:d,pivotIndices:[p,p+1]}),A=g[p];if(A!=null){const U=d[p];_e(U,`No panel data found for index "${p}"`),A.setAttribute("aria-controls",U.id),A.setAttribute("aria-valuemax",""+Math.round(v)),A.setAttribute("aria-valuemin",""+Math.round(B)),A.setAttribute("aria-valuenow",z!=null?""+Math.round(z):"")}}return()=>{g.forEach((p,v)=>{p.removeAttribute("aria-controls"),p.removeAttribute("aria-valuemax"),p.removeAttribute("aria-valuemin"),p.removeAttribute("aria-valuenow")})}},[r,c,d,f]),Ea(()=>{if(!f)return;const g=u.current;_e(g,"Eager values not found");const{panelDataArray:p}=g,v=Kh(r,f);_e(v!=null,`No group found for id "${r}"`);const B=Ai(r,f);_e(B,`No resize handles found for group id "${r}"`);const z=B.map(A=>{const U=A.getAttribute("data-panel-resize-handle-id");_e(U,"Resize handle element has no handle id attribute");const[k,ie]=B0(r,U,p,f);if(k==null||ie==null)return()=>{};const ae=ne=>{if(!ne.defaultPrevented)switch(ne.key){case"Enter":{ne.preventDefault();const le=p.findIndex(ge=>ge.id===k);if(le>=0){const ge=p[le];_e(ge,`No panel data found for index ${le}`);const be=c[le],{collapsedSize:G=0,collapsible:I,minSize:x=0}=ge.constraints;if(be!=null&&I){const W=gi({delta:At(be,G)?x-G:G-be,initialLayout:c,panelConstraints:p.map(H=>H.constraints),pivotIndices:Zh(r,U,f),prevLayout:c,trigger:"keyboard"});c!==W&&h(W)}}break}}};return A.addEventListener("keydown",ae),()=>{A.removeEventListener("keydown",ae)}});return()=>{z.forEach(A=>A())}},[f,i,u,r,c,d,h])}function th(i,u){if(i.length!==u.length)return!1;for(let r=0;r<i.length;r++)if(i[r]!==u[r])return!1;return!0}function $h(i,u){const r=i==="horizontal",{x:c,y:d}=nu(u);return r?c:d}function V0(i,u,r,c,d){const f=r==="horizontal",h=lu(u,d);_e(h,`No resize handle element found for id "${u}"`);const g=h.getAttribute("data-panel-group-id");_e(g,"Resize handle element has no group id attribute");let{initialCursorPosition:p}=c;const v=$h(r,i),B=Kh(g,d);_e(B,`No group element found for id "${g}"`);const z=B.getBoundingClientRect(),A=f?z.width:z.height;return(v-p)/A*100}function G0(i,u,r,c,d,f){if(Hh(i)){const h=r==="horizontal";let g=0;i.shiftKey?g=100:d!=null?g=d:g=10;let p=0;switch(i.key){case"ArrowDown":p=h?0:g;break;case"ArrowLeft":p=h?-g:0;break;case"ArrowRight":p=h?g:0;break;case"ArrowUp":p=h?0:-g;break;case"End":p=100;break;case"Home":p=-100;break}return p}else return c==null?0:V0(i,u,r,c,f)}function Y0({panelDataArray:i}){const u=Array(i.length),r=i.map(f=>f.constraints);let c=0,d=100;for(let f=0;f<i.length;f++){const h=r[f];_e(h,`Panel constraints not found for index ${f}`);const{defaultSize:g}=h;g!=null&&(c++,u[f]=g,d-=g)}for(let f=0;f<i.length;f++){const h=r[f];_e(h,`Panel constraints not found for index ${f}`);const{defaultSize:g}=h;if(g!=null)continue;const p=i.length-c,v=d/p;c++,u[f]=v,d-=v}return u}function ul(i,u,r){u.forEach((c,d)=>{const f=i[d];_e(f,`Panel data not found for index ${d}`);const{callbacks:h,constraints:g,id:p}=f,{collapsedSize:v=0,collapsible:B}=g,z=r[p];if(z==null||c!==z){r[p]=c;const{onCollapse:A,onExpand:U,onResize:k}=h;k&&k(c,z),B&&(A||U)&&(U&&(z==null||yn(z,v))&&!yn(c,v)&&U(),A&&(z==null||!yn(z,v))&&yn(c,v)&&A())}})}function Yo(i,u){if(i.length!==u.length)return!1;for(let r=0;r<i.length;r++)if(i[r]!=u[r])return!1;return!0}function k0({defaultSize:i,dragState:u,layout:r,panelData:c,panelIndex:d,precision:f=3}){const h=r[d];let g;return h==null?g=i!=null?i.toPrecision(f):"1":c.length===1?g="1":g=h.toPrecision(f),{flexBasis:0,flexGrow:g,flexShrink:1,overflow:"hidden",pointerEvents:u!==null?"none":void 0}}function X0(i,u=10){let r=null;return(...d)=>{r!==null&&clearTimeout(r),r=setTimeout(()=>{i(...d)},u)}}function nh(i){try{if(typeof localStorage<"u")i.getItem=u=>localStorage.getItem(u),i.setItem=(u,r)=>{localStorage.setItem(u,r)};else throw new Error("localStorage not supported in this environment")}catch(u){console.error(u),i.getItem=()=>null,i.setItem=()=>{}}}function Jh(i){return`react-resizable-panels:${i}`}function Ph(i){return i.map(u=>{const{constraints:r,id:c,idIsFromProps:d,order:f}=u;return d?c:f?`${f}:${JSON.stringify(r)}`:JSON.stringify(r)}).sort((u,r)=>u.localeCompare(r)).join(",")}function Ih(i,u){try{const r=Jh(i),c=u.getItem(r);if(c){const d=JSON.parse(c);if(typeof d=="object"&&d!=null)return d}}catch{}return null}function Q0(i,u,r){var c,d;const f=(c=Ih(i,r))!==null&&c!==void 0?c:{},h=Ph(u);return(d=f[h])!==null&&d!==void 0?d:null}function Z0(i,u,r,c,d){var f;const h=Jh(i),g=Ph(u),p=(f=Ih(i,d))!==null&&f!==void 0?f:{};p[g]={expandToSizes:Object.fromEntries(r.entries()),layout:c};try{d.setItem(h,JSON.stringify(p))}catch(v){console.error(v)}}function ah({layout:i,panelConstraints:u}){const r=[...i],c=r.reduce((f,h)=>f+h,0);if(r.length!==u.length)throw Error(`Invalid ${u.length} panel layout: ${r.map(f=>`${f}%`).join(", ")}`);if(!At(c,100)&&r.length>0)for(let f=0;f<u.length;f++){const h=r[f];_e(h!=null,`No layout data found for index ${f}`);const g=100/c*h;r[f]=g}let d=0;for(let f=0;f<u.length;f++){const h=r[f];_e(h!=null,`No layout data found for index ${f}`);const g=cl({panelConstraints:u,panelIndex:f,size:h});h!=g&&(d+=h-g,r[f]=g)}if(!At(d,0))for(let f=0;f<u.length;f++){const h=r[f];_e(h!=null,`No layout data found for index ${f}`);const g=h+d,p=cl({panelConstraints:u,panelIndex:f,size:g});if(h!==p&&(d-=p-h,r[f]=p,At(d,0)))break}return r}const K0=100,yi={getItem:i=>(nh(yi),yi.getItem(i)),setItem:(i,u)=>{nh(yi),yi.setItem(i,u)}},lh={};function Wh({autoSaveId:i=null,children:u,className:r="",direction:c,forwardedRef:d,id:f=null,onLayout:h=null,keyboardResizeBy:g=null,storage:p=yi,style:v,tagName:B="div",...z}){const A=Gc(f),U=pt(null),[k,ie]=dl(null),[ae,ne]=dl([]),le=U0(),ge=pt({}),be=pt(new Map),G=pt(0),I=pt({autoSaveId:i,direction:c,dragState:k,id:A,keyboardResizeBy:g,onLayout:h,storage:p}),x=pt({layout:ae,panelDataArray:[],panelDataArrayChanged:!1});pt({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Uh(d,()=>({getId:()=>I.current.id,getLayout:()=>{const{layout:R}=x.current;return R},setLayout:R=>{const{onLayout:N}=I.current,{layout:$,panelDataArray:K}=x.current,J=ah({layout:R,panelConstraints:K.map(F=>F.constraints)});th($,J)||(ne(J),x.current.layout=J,N&&N(J),ul(K,J,ge.current))}}),[]),Sa(()=>{I.current.autoSaveId=i,I.current.direction=c,I.current.dragState=k,I.current.id=A,I.current.onLayout=h,I.current.storage=p}),q0({committedValuesRef:I,eagerValuesRef:x,groupId:A,layout:ae,panelDataArray:x.current.panelDataArray,setLayout:ne,panelGroupElement:U.current}),Ea(()=>{const{panelDataArray:R}=x.current;if(i){if(ae.length===0||ae.length!==R.length)return;let N=lh[i];N==null&&(N=X0(Z0,K0),lh[i]=N);const $=[...R],K=new Map(be.current);N(i,$,K,ae,p)}},[i,ae,p]),Ea(()=>{});const W=ht(R=>{const{onLayout:N}=I.current,{layout:$,panelDataArray:K}=x.current;if(R.constraints.collapsible){const J=K.map(Ge=>Ge.constraints),{collapsedSize:F=0,panelSize:he,pivotIndices:ye}=ya(K,R,$);if(_e(he!=null,`Panel size not found for panel "${R.id}"`),!yn(he,F)){be.current.set(R.id,he);const at=rl(K,R)===K.length-1?he-F:F-he,Me=gi({delta:at,initialLayout:$,panelConstraints:J,pivotIndices:ye,prevLayout:$,trigger:"imperative-api"});Yo($,Me)||(ne(Me),x.current.layout=Me,N&&N(Me),ul(K,Me,ge.current))}}},[]),H=ht((R,N)=>{const{onLayout:$}=I.current,{layout:K,panelDataArray:J}=x.current;if(R.constraints.collapsible){const F=J.map(lt=>lt.constraints),{collapsedSize:he=0,panelSize:ye=0,minSize:Ge=0,pivotIndices:at}=ya(J,R,K),Me=N??Ge;if(yn(ye,he)){const lt=be.current.get(R.id),kt=lt!=null&&lt>=Me?lt:Me,$n=rl(J,R)===J.length-1?ye-kt:kt-ye,Ze=gi({delta:$n,initialLayout:K,panelConstraints:F,pivotIndices:at,prevLayout:K,trigger:"imperative-api"});Yo(K,Ze)||(ne(Ze),x.current.layout=Ze,$&&$(Ze),ul(J,Ze,ge.current))}}},[]),O=ht(R=>{const{layout:N,panelDataArray:$}=x.current,{panelSize:K}=ya($,R,N);return _e(K!=null,`Panel size not found for panel "${R.id}"`),K},[]),Y=ht((R,N)=>{const{panelDataArray:$}=x.current,K=rl($,R);return k0({defaultSize:N,dragState:k,layout:ae,panelData:$,panelIndex:K})},[k,ae]),q=ht(R=>{const{layout:N,panelDataArray:$}=x.current,{collapsedSize:K=0,collapsible:J,panelSize:F}=ya($,R,N);return _e(F!=null,`Panel size not found for panel "${R.id}"`),J===!0&&yn(F,K)},[]),me=ht(R=>{const{layout:N,panelDataArray:$}=x.current,{collapsedSize:K=0,collapsible:J,panelSize:F}=ya($,R,N);return _e(F!=null,`Panel size not found for panel "${R.id}"`),!J||_a(F,K)>0},[]),re=ht(R=>{const{panelDataArray:N}=x.current;N.push(R),N.sort(($,K)=>{const J=$.order,F=K.order;return J==null&&F==null?0:J==null?-1:F==null?1:J-F}),x.current.panelDataArrayChanged=!0,le()},[le]);Sa(()=>{if(x.current.panelDataArrayChanged){x.current.panelDataArrayChanged=!1;const{autoSaveId:R,onLayout:N,storage:$}=I.current,{layout:K,panelDataArray:J}=x.current;let F=null;if(R){const ye=Q0(R,J,$);ye&&(be.current=new Map(Object.entries(ye.expandToSizes)),F=ye.layout)}F==null&&(F=Y0({panelDataArray:J}));const he=ah({layout:F,panelConstraints:J.map(ye=>ye.constraints)});th(K,he)||(ne(he),x.current.layout=he,N&&N(he),ul(J,he,ge.current))}}),Sa(()=>{const R=x.current;return()=>{R.layout=[]}},[]);const Q=ht(R=>{let N=!1;const $=U.current;return $&&window.getComputedStyle($,null).getPropertyValue("direction")==="rtl"&&(N=!0),function(J){J.preventDefault();const F=U.current;if(!F)return()=>null;const{direction:he,dragState:ye,id:Ge,keyboardResizeBy:at,onLayout:Me}=I.current,{layout:lt,panelDataArray:kt}=x.current,{initialLayout:Ht}=ye??{},$n=Zh(Ge,R,F);let Ze=G0(J,R,he,ye,at,F);const Ta=he==="horizontal";Ta&&N&&(Ze=-Ze);const pl=kt.map(ou=>ou.constraints),It=gi({delta:Ze,initialLayout:Ht??lt,panelConstraints:pl,pivotIndices:$n,prevLayout:lt,trigger:Hh(J)?"keyboard":"mouse-or-touch"}),Ri=!Yo(lt,It);(Bh(J)||qh(J))&&G.current!=Ze&&(G.current=Ze,!Ri&&Ze!==0?Ta?bc(R,Ze<0?Gh:Yh):bc(R,Ze<0?kh:Xh):bc(R,0)),Ri&&(ne(It),x.current.layout=It,Me&&Me(It),ul(kt,It,ge.current))}},[]),M=ht((R,N)=>{const{onLayout:$}=I.current,{layout:K,panelDataArray:J}=x.current,F=J.map(lt=>lt.constraints),{panelSize:he,pivotIndices:ye}=ya(J,R,K);_e(he!=null,`Panel size not found for panel "${R.id}"`);const at=rl(J,R)===J.length-1?he-N:N-he,Me=gi({delta:at,initialLayout:K,panelConstraints:F,pivotIndices:ye,prevLayout:K,trigger:"imperative-api"});Yo(K,Me)||(ne(Me),x.current.layout=Me,$&&$(Me),ul(J,Me,ge.current))},[]),ee=ht((R,N)=>{const{layout:$,panelDataArray:K}=x.current,{collapsedSize:J=0,collapsible:F}=N,{collapsedSize:he=0,collapsible:ye,maxSize:Ge=100,minSize:at=0}=R.constraints,{panelSize:Me}=ya(K,R,$);Me!=null&&(F&&ye&&yn(Me,J)?yn(J,he)||M(R,he):Me<at?M(R,at):Me>Ge&&M(R,Ge))},[M]),X=ht((R,N)=>{const{direction:$}=I.current,{layout:K}=x.current;if(!U.current)return;const J=lu(R,U.current);_e(J,`Drag handle element not found for id "${R}"`);const F=$h($,N);ie({dragHandleId:R,dragHandleRect:J.getBoundingClientRect(),initialCursorPosition:F,initialLayout:K})},[]),Ee=ht(()=>{ie(null)},[]),b=ht(R=>{const{panelDataArray:N}=x.current,$=rl(N,R);$>=0&&(N.splice($,1),delete ge.current[R.id],x.current.panelDataArrayChanged=!0,le())},[le]),D=S0(()=>({collapsePanel:W,direction:c,dragState:k,expandPanel:H,getPanelSize:O,getPanelStyle:Y,groupId:A,isPanelCollapsed:q,isPanelExpanded:me,reevaluatePanelConstraints:ee,registerPanel:re,registerResizeHandle:Q,resizePanel:M,startDragging:X,stopDragging:Ee,unregisterPanel:b,panelGroupElement:U.current}),[W,k,c,H,O,Y,A,q,me,ee,re,Q,M,X,Ee,b]),Z={display:"flex",flexDirection:c==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return hl(tu.Provider,{value:D},hl(B,{...z,children:u,className:r,id:f,ref:U,style:{...Z,...v},"data-panel-group":"","data-panel-group-direction":c,"data-panel-group-id":A}))}const Fh=Ch((i,u)=>hl(Wh,{...i,forwardedRef:u}));Wh.displayName="PanelGroup";Fh.displayName="forwardRef(PanelGroup)";function rl(i,u){return i.findIndex(r=>r===u||r.id===u.id)}function ya(i,u,r){const c=rl(i,u),f=c===i.length-1?[c-1,c]:[c,c+1],h=r[c];return{...u.constraints,panelSize:h,pivotIndices:f}}function $0({disabled:i,handleId:u,resizeHandler:r,panelGroupElement:c}){Ea(()=>{if(i||r==null||c==null)return;const d=lu(u,c);if(d==null)return;const f=h=>{if(!h.defaultPrevented)switch(h.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{h.preventDefault(),r(h);break}case"F6":{h.preventDefault();const g=d.getAttribute("data-panel-group-id");_e(g,`No group element found for id "${g}"`);const p=Ai(g,c),v=Qh(g,u,c);_e(v!==null,`No resize element found for id "${u}"`);const B=h.shiftKey?v>0?v-1:p.length-1:v+1<p.length?v+1:0;p[B].focus();break}}};return d.addEventListener("keydown",f),()=>{d.removeEventListener("keydown",f)}},[c,i,u,r])}function ep({children:i=null,className:u="",disabled:r=!1,hitAreaMargins:c,id:d,onBlur:f,onDragging:h,onFocus:g,style:p={},tabIndex:v=0,tagName:B="div",...z}){var A,U;const k=pt(null),ie=pt({onDragging:h});Ea(()=>{ie.current.onDragging=h});const ae=Nh(tu);if(ae===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:ne,groupId:le,registerResizeHandle:ge,startDragging:be,stopDragging:G,panelGroupElement:I}=ae,x=Gc(d),[W,H]=dl("inactive"),[O,Y]=dl(!1),[q,me]=dl(null),re=pt({state:W});Sa(()=>{re.current.state=W}),Ea(()=>{if(r)me(null);else{const X=ge(x);me(()=>X)}},[r,x,ge]);const Q=(A=c==null?void 0:c.coarse)!==null&&A!==void 0?A:15,M=(U=c==null?void 0:c.fine)!==null&&U!==void 0?U:5;return Ea(()=>{if(r||q==null)return;const X=k.current;return _e(X,"Element ref not attached"),N0(x,X,ne,{coarse:Q,fine:M},(b,D,Z)=>{if(D)switch(b){case"down":{H("drag"),_e(Z,'Expected event to be defined for "down" action'),be(x,Z);const{onDragging:R}=ie.current;R&&R(!0);break}case"move":{const{state:R}=re.current;R!=="drag"&&H("hover"),_e(Z,'Expected event to be defined for "move" action'),q(Z);break}case"up":{H("hover"),G();const{onDragging:R}=ie.current;R&&R(!1);break}}else H("inactive")})},[Q,ne,r,M,ge,x,q,be,G]),$0({disabled:r,handleId:x,resizeHandler:q,panelGroupElement:I}),hl(B,{...z,children:i,className:u,id:d,onBlur:()=>{Y(!1),f==null||f()},onFocus:()=>{Y(!0),g==null||g()},ref:k,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...p},tabIndex:v,"data-panel-group-direction":ne,"data-panel-group-id":le,"data-resize-handle":"","data-resize-handle-active":W==="drag"?"pointer":O?"keyboard":void 0,"data-resize-handle-state":W,"data-panel-resize-handle-enabled":!r,"data-panel-resize-handle-id":x})}ep.displayName="PanelResizeHandle";const sl={},ih=(i,u)=>i.unstable_is?i.unstable_is(u):u===i,oh=i=>"init"in i,Ec=i=>!!i.write,uh=i=>"v"in i||"e"in i,ko=i=>{if("e"in i)throw i.e;if((sl?"production":void 0)!=="production"&&!("v"in i))throw new Error("[Bug] atom state is not initialized");return i.v},tp=Symbol(),Qc=i=>i[tp],Bc=i=>{var u;return Zc(i)&&!((u=Qc(i))!=null&&u[1])},J0=(i,u)=>{const r=Qc(i);if(r)r[1]=!0,r[0].forEach(c=>c(u));else if((sl?"production":void 0)!=="production")throw new Error("[Bug] cancelable promise not found")},P0=i=>{if(Qc(i))return;const u=[new Set,!1];i[tp]=u;const r=()=>{u[1]=!0};i.then(r,r),i.onCancel=c=>{u[0].add(c)}},Zc=i=>typeof(i==null?void 0:i.then)=="function",np=(i,u,r)=>{r.p.has(i)||(r.p.add(i),u.then(()=>{r.p.delete(i)},()=>{r.p.delete(i)}))},Sc=(i,u,r)=>{const c=r(i),d="v"in c,f=c.v,h=Bc(c.v)?c.v:null;if(Zc(u)){P0(u);for(const g of c.d.keys())np(i,u,r(g))}c.v=u,delete c.e,(!d||!Object.is(f,c.v))&&(++c.n,h&&J0(h,u))},rh=(i,u,r)=>{var c;const d=new Set;for(const f of((c=r.get(i))==null?void 0:c.t)||[])r.has(f)&&d.add(f);for(const f of u.p)d.add(f);return d},I0=()=>{const i=new Set,u=()=>{i.forEach(r=>r())};return u.add=r=>(i.add(r),()=>{i.delete(r)}),u},_c=()=>{const i={},u=new WeakMap,r=c=>{var d,f;(d=u.get(i))==null||d.forEach(h=>h(c)),(f=u.get(c))==null||f.forEach(h=>h())};return r.add=(c,d)=>{const f=c||i,h=(u.has(f)?u:u.set(f,new Set)).get(f);return h.add(d),()=>{h==null||h.delete(d),h.size||u.delete(f)}},r},W0=i=>(i.c||(i.c=_c()),i.m||(i.m=_c()),i.u||(i.u=_c()),i.f||(i.f=I0()),i),F0=Symbol(),eb=(i=new WeakMap,u=new WeakMap,r=new WeakMap,c=new Set,d=new Set,f=new Set,h={},g=(A,...U)=>A.read(...U),p=(A,...U)=>A.write(...U),v=(A,U)=>{var k;return(k=A.unstable_onInit)==null?void 0:k.call(A,U)},B=(A,U)=>{var k;return(k=A.onMount)==null?void 0:k.call(A,U)},...z)=>{const A=z[0]||(x=>{if((sl?"production":void 0)!=="production"&&!x)throw new Error("Atom is undefined or null");let W=i.get(x);return W||(W={d:new Map,p:new Set,n:0},i.set(x,W),v==null||v(x,I)),W}),U=z[1]||(()=>{let x,W;const H=O=>{try{O()}catch(Y){x||(x=!0,W=Y)}};do{h.f&&H(h.f);const O=new Set,Y=O.add.bind(O);c.forEach(q=>{var me;return(me=u.get(q))==null?void 0:me.l.forEach(Y)}),c.clear(),f.forEach(Y),f.clear(),d.forEach(Y),d.clear(),O.forEach(H),c.size&&k()}while(c.size||f.size||d.size);if(x)throw W}),k=z[2]||(()=>{const x=[],W=new WeakSet,H=new WeakSet,O=Array.from(c);for(;O.length;){const Y=O[O.length-1],q=A(Y);if(H.has(Y)){O.pop();continue}if(W.has(Y)){if(r.get(Y)===q.n)x.push([Y,q]);else if((sl?"production":void 0)!=="production"&&r.has(Y))throw new Error("[Bug] invalidated atom exists");H.add(Y),O.pop();continue}W.add(Y);for(const me of rh(Y,q,u))W.has(me)||O.push(me)}for(let Y=x.length-1;Y>=0;--Y){const[q,me]=x[Y];let re=!1;for(const Q of me.d.keys())if(Q!==q&&c.has(Q)){re=!0;break}re&&(ie(q),le(q)),r.delete(q)}}),ie=z[3]||(x=>{var W,H;const O=A(x);if(uh(O)&&(u.has(x)&&r.get(x)!==O.n||Array.from(O.d).every(([X,Ee])=>ie(X).n===Ee)))return O;O.d.clear();let Y=!0;const q=()=>{u.has(x)&&(le(x),k(),U())},me=X=>{var Ee;if(ih(x,X)){const D=A(X);if(!uh(D))if(oh(X))Sc(X,X.init,A);else throw new Error("no atom init");return ko(D)}const b=ie(X);try{return ko(b)}finally{O.d.set(X,b.n),Bc(O.v)&&np(x,O.v,b),(Ee=u.get(X))==null||Ee.t.add(x),Y||q()}};let re,Q;const M={get signal(){return re||(re=new AbortController),re.signal},get setSelf(){return(sl?"production":void 0)!=="production"&&!Ec(x)&&console.warn("setSelf function cannot be used with read-only atom"),!Q&&Ec(x)&&(Q=(...X)=>{if((sl?"production":void 0)!=="production"&&Y&&console.warn("setSelf function cannot be called in sync"),!Y)try{return ne(x,...X)}finally{k(),U()}}),Q}},ee=O.n;try{const X=g(x,me,M);return Sc(x,X,A),Zc(X)&&((W=X.onCancel)==null||W.call(X,()=>re==null?void 0:re.abort()),X.then(q,q)),O}catch(X){return delete O.v,O.e=X,++O.n,O}finally{Y=!1,ee!==O.n&&r.get(x)===ee&&(r.set(x,O.n),c.add(x),(H=h.c)==null||H.call(h,x))}}),ae=z[4]||(x=>{const W=[x];for(;W.length;){const H=W.pop(),O=A(H);for(const Y of rh(H,O,u)){const q=A(Y);r.set(Y,q.n),W.push(Y)}}}),ne=z[5]||((x,...W)=>{let H=!0;const O=q=>ko(ie(q)),Y=(q,...me)=>{var re;const Q=A(q);try{if(ih(x,q)){if(!oh(q))throw new Error("atom not writable");const M=Q.n,ee=me[0];Sc(q,ee,A),le(q),M!==Q.n&&(c.add(q),(re=h.c)==null||re.call(h,q),ae(q));return}else return ne(q,...me)}finally{H||(k(),U())}};try{return p(x,O,Y,...W)}finally{H=!1}}),le=z[6]||(x=>{var W;const H=A(x),O=u.get(x);if(O&&!Bc(H.v)){for(const[Y,q]of H.d)if(!O.d.has(Y)){const me=A(Y);ge(Y).t.add(x),O.d.add(Y),q!==me.n&&(c.add(Y),(W=h.c)==null||W.call(h,Y),ae(Y))}for(const Y of O.d||[])if(!H.d.has(Y)){O.d.delete(Y);const q=be(Y);q==null||q.t.delete(x)}}}),ge=z[7]||(x=>{var W;const H=A(x);let O=u.get(x);if(!O){ie(x);for(const Y of H.d.keys())ge(Y).t.add(x);if(O={l:new Set,d:new Set(H.d.keys()),t:new Set},u.set(x,O),(W=h.m)==null||W.call(h,x),Ec(x)){const Y=()=>{let q=!0;const me=(...re)=>{try{return ne(x,...re)}finally{q||(k(),U())}};try{const re=B(x,me);re&&(O.u=()=>{q=!0;try{re()}finally{q=!1}})}finally{q=!1}};d.add(Y)}}return O}),be=z[8]||(x=>{var W;const H=A(x);let O=u.get(x);if(O&&!O.l.size&&!Array.from(O.t).some(Y=>{var q;return(q=u.get(Y))==null?void 0:q.d.has(x)})){O.u&&f.add(O.u),O=void 0,u.delete(x),(W=h.u)==null||W.call(h,x);for(const Y of H.d.keys()){const q=be(Y);q==null||q.t.delete(x)}return}return O}),G=[i,u,r,c,d,f,h,g,p,v,B,A,U,k,ie,ae,ne,le,ge,be],I={get:x=>ko(ie(x)),set:(x,...W)=>{try{return ne(x,...W)}finally{k(),U()}},sub:(x,W)=>{const O=ge(x).l;return O.add(W),U(),()=>{O.delete(W),be(x),U()}}};return Object.defineProperty(I,F0,{value:G}),I},ap=eb,tb=W0,Kc={};let nb=0;function $c(i,u){const r=`atom${++nb}`,c={toString(){return(Kc?"production":void 0)!=="production"&&this.debugLabel?r+":"+this.debugLabel:r}};return typeof i=="function"?c.read=i:(c.init=i,c.read=ab,c.write=lb),c}function ab(i){return i(this)}function lb(i,u,r){return u(this,typeof r=="function"?r(i(this)):r)}const ib=()=>{let i=0;const u=tb({}),r=new WeakMap,c=new WeakMap,d=ap(r,c,void 0,void 0,void 0,void 0,u,void 0,(g,p,v,...B)=>i?v(g,...B):g.write(p,v,...B)),f=new Set;return u.m.add(void 0,g=>{f.add(g);const p=r.get(g);p.m=c.get(g)}),u.u.add(void 0,g=>{f.delete(g);const p=r.get(g);delete p.m}),Object.assign(d,{dev4_get_internal_weak_map:()=>r,dev4_get_mounted_atoms:()=>f,dev4_restore_atoms:g=>{const p={read:()=>null,write:(v,B)=>{++i;try{for(const[z,A]of g)"init"in z&&B(z,A)}finally{--i}}};d.set(p)}})},ob=()=>(Kc?"production":void 0)!=="production"?ib():ap();let pi;const ub=()=>(pi||(pi=ob(),(Kc?"production":void 0)!=="production"&&(globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=pi),globalThis.__JOTAI_DEFAULT_STORE__!==pi&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),pi),lp={},rb=P.createContext(void 0),ip=i=>P.useContext(rb)||ub(),op=i=>typeof(i==null?void 0:i.then)=="function",cb=i=>{i.status="pending",i.then(u=>{i.status="fulfilled",i.value=u},u=>{i.status="rejected",i.reason=u})},sb=Qn.use||(i=>{if(i.status==="pending")throw i;if(i.status==="fulfilled")return i.value;throw i.status==="rejected"?i.reason:(cb(i),i)}),Ac=new WeakMap,fb=i=>{let u=Ac.get(i);return u||(u=new Promise((r,c)=>{let d=i;const f=p=>v=>{d===p&&r(v)},h=p=>v=>{d===p&&c(v)},g=p=>{"onCancel"in p&&typeof p.onCancel=="function"&&p.onCancel(v=>{if((lp?"production":void 0)!=="production"&&v===p)throw new Error("[Bug] p is not updated even after cancelation");op(v)?(Ac.set(v,u),d=v,v.then(f(v),h(v)),g(v)):r(v)})};i.then(f(i),h(i)),g(i)}),Ac.set(i,u)),u};function Ei(i,u){const r=ip(),[[c,d,f],h]=P.useReducer(v=>{const B=r.get(i);return Object.is(v[0],B)&&v[1]===r&&v[2]===i?v:[B,r,i]},void 0,()=>[r.get(i),r,i]);let g=c;if((d!==r||f!==i)&&(h(),g=r.get(i)),P.useEffect(()=>{const v=r.sub(i,()=>{h()});return h(),v},[r,i,void 0]),P.useDebugValue(g),op(g)){const v=fb(g);return sb(v)}return g}function db(i,u){const r=ip();return P.useCallback((...d)=>{if((lp?"production":void 0)!=="production"&&!("write"in i))throw new Error("not writable atom");return r.set(i,...d)},[r,i])}function Tc(i,u){return[Ei(i),db(i)]}var wc,ch;function mb(){if(ch)return wc;ch=1;var i="Expected a function",u=NaN,r="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,h=/^0o[0-7]+$/i,g=parseInt,p=typeof Vo=="object"&&Vo&&Vo.Object===Object&&Vo,v=typeof self=="object"&&self&&self.Object===Object&&self,B=p||v||Function("return this")(),z=Object.prototype,A=z.toString,U=Math.max,k=Math.min,ie=function(){return B.Date.now()};function ae(G,I,x){var W,H,O,Y,q,me,re=0,Q=!1,M=!1,ee=!0;if(typeof G!="function")throw new TypeError(i);I=be(I)||0,ne(x)&&(Q=!!x.leading,M="maxWait"in x,O=M?U(be(x.maxWait)||0,I):O,ee="trailing"in x?!!x.trailing:ee);function X(J){var F=W,he=H;return W=H=void 0,re=J,Y=G.apply(he,F),Y}function Ee(J){return re=J,q=setTimeout(Z,I),Q?X(J):Y}function b(J){var F=J-me,he=J-re,ye=I-F;return M?k(ye,O-he):ye}function D(J){var F=J-me,he=J-re;return me===void 0||F>=I||F<0||M&&he>=O}function Z(){var J=ie();if(D(J))return R(J);q=setTimeout(Z,b(J))}function R(J){return q=void 0,ee&&W?X(J):(W=H=void 0,Y)}function N(){q!==void 0&&clearTimeout(q),re=0,W=me=H=q=void 0}function $(){return q===void 0?Y:R(ie())}function K(){var J=ie(),F=D(J);if(W=arguments,H=this,me=J,F){if(q===void 0)return Ee(me);if(M)return q=setTimeout(Z,I),X(me)}return q===void 0&&(q=setTimeout(Z,I)),Y}return K.cancel=N,K.flush=$,K}function ne(G){var I=typeof G;return!!G&&(I=="object"||I=="function")}function le(G){return!!G&&typeof G=="object"}function ge(G){return typeof G=="symbol"||le(G)&&A.call(G)==r}function be(G){if(typeof G=="number")return G;if(ge(G))return u;if(ne(G)){var I=typeof G.valueOf=="function"?G.valueOf():G;G=ne(I)?I+"":I}if(typeof G!="string")return G===0?G:+G;G=G.replace(c,"");var x=f.test(G);return x||h.test(G)?g(G.slice(2),x?2:8):d.test(G)?u:+G}return wc=ae,wc}mb();var hb=typeof window<"u"?P.useLayoutEffect:P.useEffect,pb=typeof window>"u";function gb(i,{defaultValue:u=!1,initializeWithValue:r=!0}={}){const c=g=>pb?u:window.matchMedia(g).matches,[d,f]=P.useState(()=>r?c(i):u);function h(){f(c(i))}return hb(()=>{const g=window.matchMedia(i);return h(),g.addListener?g.addListener(h):g.addEventListener("change",h),()=>{g.removeListener?g.removeListener(h):g.removeEventListener("change",h)}},[i]),d}function yb(i,u,r){return u in i?Object.defineProperty(i,u,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[u]=r,i}function sh(i,u){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);u&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),r.push.apply(r,c)}return r}function fh(i){for(var u=1;u<arguments.length;u++){var r=arguments[u]!=null?arguments[u]:{};u%2?sh(Object(r),!0).forEach(function(c){yb(i,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):sh(Object(r)).forEach(function(c){Object.defineProperty(i,c,Object.getOwnPropertyDescriptor(r,c))})}return i}function vb(i,u){if(i==null)return{};var r={},c=Object.keys(i),d,f;for(f=0;f<c.length;f++)d=c[f],!(u.indexOf(d)>=0)&&(r[d]=i[d]);return r}function bb(i,u){if(i==null)return{};var r=vb(i,u),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(i);for(d=0;d<f.length;d++)c=f[d],!(u.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(i,c)&&(r[c]=i[c])}return r}function Eb(i,u){return Sb(i)||_b(i,u)||Ab(i,u)||Tb()}function Sb(i){if(Array.isArray(i))return i}function _b(i,u){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var r=[],c=!0,d=!1,f=void 0;try{for(var h=i[Symbol.iterator](),g;!(c=(g=h.next()).done)&&(r.push(g.value),!(u&&r.length===u));c=!0);}catch(p){d=!0,f=p}finally{try{!c&&h.return!=null&&h.return()}finally{if(d)throw f}}return r}}function Ab(i,u){if(i){if(typeof i=="string")return dh(i,u);var r=Object.prototype.toString.call(i).slice(8,-1);if(r==="Object"&&i.constructor&&(r=i.constructor.name),r==="Map"||r==="Set")return Array.from(i);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return dh(i,u)}}function dh(i,u){(u==null||u>i.length)&&(u=i.length);for(var r=0,c=new Array(u);r<u;r++)c[r]=i[r];return c}function Tb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wb(i,u,r){return u in i?Object.defineProperty(i,u,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[u]=r,i}function mh(i,u){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);u&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),r.push.apply(r,c)}return r}function hh(i){for(var u=1;u<arguments.length;u++){var r=arguments[u]!=null?arguments[u]:{};u%2?mh(Object(r),!0).forEach(function(c){wb(i,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):mh(Object(r)).forEach(function(c){Object.defineProperty(i,c,Object.getOwnPropertyDescriptor(r,c))})}return i}function xb(){for(var i=arguments.length,u=new Array(i),r=0;r<i;r++)u[r]=arguments[r];return function(c){return u.reduceRight(function(d,f){return f(d)},c)}}function vi(i){return function u(){for(var r=this,c=arguments.length,d=new Array(c),f=0;f<c;f++)d[f]=arguments[f];return d.length>=i.length?i.apply(this,d):function(){for(var h=arguments.length,g=new Array(h),p=0;p<h;p++)g[p]=arguments[p];return u.apply(r,[].concat(d,g))}}}function Io(i){return{}.toString.call(i).includes("Object")}function Rb(i){return!Object.keys(i).length}function Ti(i){return typeof i=="function"}function Db(i,u){return Object.prototype.hasOwnProperty.call(i,u)}function Ob(i,u){return Io(u)||Zn("changeType"),Object.keys(u).some(function(r){return!Db(i,r)})&&Zn("changeField"),u}function Mb(i){Ti(i)||Zn("selectorType")}function zb(i){Ti(i)||Io(i)||Zn("handlerType"),Io(i)&&Object.values(i).some(function(u){return!Ti(u)})&&Zn("handlersType")}function jb(i){i||Zn("initialIsRequired"),Io(i)||Zn("initialType"),Rb(i)&&Zn("initialContent")}function Cb(i,u){throw new Error(i[u]||i.default)}var Nb={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Zn=vi(Cb)(Nb),Xo={changes:Ob,selector:Mb,handler:zb,initial:jb};function Ub(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Xo.initial(i),Xo.handler(u);var r={current:i},c=vi(Bb)(r,u),d=vi(Hb)(r),f=vi(Xo.changes)(i),h=vi(Lb)(r);function g(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(B){return B};return Xo.selector(v),v(r.current)}function p(v){xb(c,d,f,h)(v)}return[g,p]}function Lb(i,u){return Ti(u)?u(i.current):u}function Hb(i,u){return i.current=hh(hh({},i.current),u),u}function Bb(i,u,r){return Ti(u)?u(i.current):Object.keys(r).forEach(function(c){var d;return(d=u[c])===null||d===void 0?void 0:d.call(u,i.current[c])}),r}var qb={create:Ub},Vb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function Gb(i){return function u(){for(var r=this,c=arguments.length,d=new Array(c),f=0;f<c;f++)d[f]=arguments[f];return d.length>=i.length?i.apply(this,d):function(){for(var h=arguments.length,g=new Array(h),p=0;p<h;p++)g[p]=arguments[p];return u.apply(r,[].concat(d,g))}}}function Yb(i){return{}.toString.call(i).includes("Object")}function kb(i){return i||ph("configIsRequired"),Yb(i)||ph("configType"),i.urls?(Xb(),{paths:{vs:i.urls.monacoBase}}):i}function Xb(){console.warn(up.deprecation)}function Qb(i,u){throw new Error(i[u]||i.default)}var up={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ph=Gb(Qb)(up),Zb={config:kb},Kb=function(){for(var u=arguments.length,r=new Array(u),c=0;c<u;c++)r[c]=arguments[c];return function(d){return r.reduceRight(function(f,h){return h(f)},d)}};function rp(i,u){return Object.keys(u).forEach(function(r){u[r]instanceof Object&&i[r]&&Object.assign(u[r],rp(i[r],u[r]))}),fh(fh({},i),u)}var $b={type:"cancelation",msg:"operation is manually canceled"};function xc(i){var u=!1,r=new Promise(function(c,d){i.then(function(f){return u?d($b):c(f)}),i.catch(d)});return r.cancel=function(){return u=!0},r}var Jb=qb.create({config:Vb,isInitialized:!1,resolve:null,reject:null,monaco:null}),cp=Eb(Jb,2),xi=cp[0],iu=cp[1];function Pb(i){var u=Zb.config(i),r=u.monaco,c=bb(u,["monaco"]);iu(function(d){return{config:rp(d.config,c),monaco:r}})}function Ib(){var i=xi(function(u){var r=u.monaco,c=u.isInitialized,d=u.resolve;return{monaco:r,isInitialized:c,resolve:d}});if(!i.isInitialized){if(iu({isInitialized:!0}),i.monaco)return i.resolve(i.monaco),xc(Rc);if(window.monaco&&window.monaco.editor)return sp(window.monaco),i.resolve(window.monaco),xc(Rc);Kb(Wb,e1)(t1)}return xc(Rc)}function Wb(i){return document.body.appendChild(i)}function Fb(i){var u=document.createElement("script");return i&&(u.src=i),u}function e1(i){var u=xi(function(c){var d=c.config,f=c.reject;return{config:d,reject:f}}),r=Fb("".concat(u.config.paths.vs,"/loader.js"));return r.onload=function(){return i()},r.onerror=u.reject,r}function t1(){var i=xi(function(r){var c=r.config,d=r.resolve,f=r.reject;return{config:c,resolve:d,reject:f}}),u=window.require;u.config(i.config),u(["vs/editor/editor.main"],function(r){sp(r),i.resolve(r)},function(r){i.reject(r)})}function sp(i){xi().monaco||iu({monaco:i})}function n1(){return xi(function(i){var u=i.monaco;return u})}var Rc=new Promise(function(i,u){return iu({resolve:i,reject:u})}),Jc={config:Pb,init:Ib,__getMonacoInstance:n1},a1={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Dc=a1,l1={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},i1=l1;function o1({children:i}){return Qn.createElement("div",{style:i1.container},i)}var u1=o1,r1=u1;function c1({width:i,height:u,isEditorReady:r,loading:c,_ref:d,className:f,wrapperProps:h}){return Qn.createElement("section",{style:{...Dc.wrapper,width:i,height:u},...h},!r&&Qn.createElement(r1,null,c),Qn.createElement("div",{ref:d,style:{...Dc.fullWidth,...!r&&Dc.hide},className:f}))}var s1=c1,fp=P.memo(s1);function f1(i){P.useEffect(i,[])}var dp=f1;function d1(i,u,r=!0){let c=P.useRef(!0);P.useEffect(c.current||!r?()=>{c.current=!1}:i,u)}var Tt=d1;function Si(){}function fl(i,u,r,c){return m1(i,c)||h1(i,u,r,c)}function m1(i,u){return i.editor.getModel(mp(i,u))}function h1(i,u,r,c){return i.editor.createModel(u,r,c?mp(i,c):void 0)}function mp(i,u){return i.Uri.parse(u)}function p1({original:i,modified:u,language:r,originalLanguage:c,modifiedLanguage:d,originalModelPath:f,modifiedModelPath:h,keepCurrentOriginalModel:g=!1,keepCurrentModifiedModel:p=!1,theme:v="light",loading:B="Loading...",options:z={},height:A="100%",width:U="100%",className:k,wrapperProps:ie={},beforeMount:ae=Si,onMount:ne=Si}){let[le,ge]=P.useState(!1),[be,G]=P.useState(!0),I=P.useRef(null),x=P.useRef(null),W=P.useRef(null),H=P.useRef(ne),O=P.useRef(ae),Y=P.useRef(!1);dp(()=>{let Q=Jc.init();return Q.then(M=>(x.current=M)&&G(!1)).catch(M=>(M==null?void 0:M.type)!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>I.current?re():Q.cancel()}),Tt(()=>{if(I.current&&x.current){let Q=I.current.getOriginalEditor(),M=fl(x.current,i||"",c||r||"text",f||"");M!==Q.getModel()&&Q.setModel(M)}},[f],le),Tt(()=>{if(I.current&&x.current){let Q=I.current.getModifiedEditor(),M=fl(x.current,u||"",d||r||"text",h||"");M!==Q.getModel()&&Q.setModel(M)}},[h],le),Tt(()=>{let Q=I.current.getModifiedEditor();Q.getOption(x.current.editor.EditorOption.readOnly)?Q.setValue(u||""):u!==Q.getValue()&&(Q.executeEdits("",[{range:Q.getModel().getFullModelRange(),text:u||"",forceMoveMarkers:!0}]),Q.pushUndoStop())},[u],le),Tt(()=>{var Q,M;(M=(Q=I.current)==null?void 0:Q.getModel())==null||M.original.setValue(i||"")},[i],le),Tt(()=>{let{original:Q,modified:M}=I.current.getModel();x.current.editor.setModelLanguage(Q,c||r||"text"),x.current.editor.setModelLanguage(M,d||r||"text")},[r,c,d],le),Tt(()=>{var Q;(Q=x.current)==null||Q.editor.setTheme(v)},[v],le),Tt(()=>{var Q;(Q=I.current)==null||Q.updateOptions(z)},[z],le);let q=P.useCallback(()=>{var ee;if(!x.current)return;O.current(x.current);let Q=fl(x.current,i||"",c||r||"text",f||""),M=fl(x.current,u||"",d||r||"text",h||"");(ee=I.current)==null||ee.setModel({original:Q,modified:M})},[r,u,d,i,c,f,h]),me=P.useCallback(()=>{var Q;!Y.current&&W.current&&(I.current=x.current.editor.createDiffEditor(W.current,{automaticLayout:!0,...z}),q(),(Q=x.current)==null||Q.editor.setTheme(v),ge(!0),Y.current=!0)},[z,v,q]);P.useEffect(()=>{le&&H.current(I.current,x.current)},[le]),P.useEffect(()=>{!be&&!le&&me()},[be,le,me]);function re(){var M,ee,X,Ee;let Q=(M=I.current)==null?void 0:M.getModel();g||((ee=Q==null?void 0:Q.original)==null||ee.dispose()),p||((X=Q==null?void 0:Q.modified)==null||X.dispose()),(Ee=I.current)==null||Ee.dispose()}return Qn.createElement(fp,{width:U,height:A,isEditorReady:le,loading:B,_ref:W,className:k,wrapperProps:ie})}var g1=p1,y1=P.memo(g1);function v1(i){let u=P.useRef();return P.useEffect(()=>{u.current=i},[i]),u.current}var b1=v1,Qo=new Map;function E1({defaultValue:i,defaultLanguage:u,defaultPath:r,value:c,language:d,path:f,theme:h="light",line:g,loading:p="Loading...",options:v={},overrideServices:B={},saveViewState:z=!0,keepCurrentModel:A=!1,width:U="100%",height:k="100%",className:ie,wrapperProps:ae={},beforeMount:ne=Si,onMount:le=Si,onChange:ge,onValidate:be=Si}){let[G,I]=P.useState(!1),[x,W]=P.useState(!0),H=P.useRef(null),O=P.useRef(null),Y=P.useRef(null),q=P.useRef(le),me=P.useRef(ne),re=P.useRef(),Q=P.useRef(c),M=b1(f),ee=P.useRef(!1),X=P.useRef(!1);dp(()=>{let D=Jc.init();return D.then(Z=>(H.current=Z)&&W(!1)).catch(Z=>(Z==null?void 0:Z.type)!=="cancelation"&&console.error("Monaco initialization: error:",Z)),()=>O.current?b():D.cancel()}),Tt(()=>{var Z,R,N,$;let D=fl(H.current,i||c||"",u||d||"",f||r||"");D!==((Z=O.current)==null?void 0:Z.getModel())&&(z&&Qo.set(M,(R=O.current)==null?void 0:R.saveViewState()),(N=O.current)==null||N.setModel(D),z&&(($=O.current)==null||$.restoreViewState(Qo.get(f))))},[f],G),Tt(()=>{var D;(D=O.current)==null||D.updateOptions(v)},[v],G),Tt(()=>{!O.current||c===void 0||(O.current.getOption(H.current.editor.EditorOption.readOnly)?O.current.setValue(c):c!==O.current.getValue()&&(X.current=!0,O.current.executeEdits("",[{range:O.current.getModel().getFullModelRange(),text:c,forceMoveMarkers:!0}]),O.current.pushUndoStop(),X.current=!1))},[c],G),Tt(()=>{var Z,R;let D=(Z=O.current)==null?void 0:Z.getModel();D&&d&&((R=H.current)==null||R.editor.setModelLanguage(D,d))},[d],G),Tt(()=>{var D;g!==void 0&&((D=O.current)==null||D.revealLine(g))},[g],G),Tt(()=>{var D;(D=H.current)==null||D.editor.setTheme(h)},[h],G);let Ee=P.useCallback(()=>{var D;if(!(!Y.current||!H.current)&&!ee.current){me.current(H.current);let Z=f||r,R=fl(H.current,c||i||"",u||d||"",Z||"");O.current=(D=H.current)==null?void 0:D.editor.create(Y.current,{model:R,automaticLayout:!0,...v},B),z&&O.current.restoreViewState(Qo.get(Z)),H.current.editor.setTheme(h),g!==void 0&&O.current.revealLine(g),I(!0),ee.current=!0}},[i,u,r,c,d,f,v,B,z,h,g]);P.useEffect(()=>{G&&q.current(O.current,H.current)},[G]),P.useEffect(()=>{!x&&!G&&Ee()},[x,G,Ee]),Q.current=c,P.useEffect(()=>{var D,Z;G&&ge&&((D=re.current)==null||D.dispose(),re.current=(Z=O.current)==null?void 0:Z.onDidChangeModelContent(R=>{X.current||ge(O.current.getValue(),R)}))},[G,ge]),P.useEffect(()=>{if(G){let D=H.current.editor.onDidChangeMarkers(Z=>{var N;let R=(N=O.current.getModel())==null?void 0:N.uri;if(R&&Z.find($=>$.path===R.path)){let $=H.current.editor.getModelMarkers({resource:R});be==null||be($)}});return()=>{D==null||D.dispose()}}return()=>{}},[G,be]);function b(){var D,Z;(D=re.current)==null||D.dispose(),A?z&&Qo.set(f,O.current.saveViewState()):(Z=O.current.getModel())==null||Z.dispose(),O.current.dispose()}return Qn.createElement(fp,{width:U,height:k,isEditorReady:G,loading:p,_ref:Y,className:ie,wrapperProps:ae})}var S1=E1,_1=P.memo(S1),qc=_1;const bn=Fe("div")({classes:["f1d4g07z"]}),A1=()=>bn,T1=Fe(A1())({classes:["c133f230"]}),w1=()=>bn,x1=Fe(w1())({classes:["hwb5q7y"]}),R1=()=>bn,D1=Fe(R1())({classes:["bsof9gl"]}),Wo=Fe("button")({classes:["b5bkz07"]}),O1=()=>bn,M1=Fe(O1())({classes:["a1oj62b7"]}),z1=()=>Wo,hp=Fe(z1())({classes:["g18nw4js"]}),j1=()=>bn,Fo=Fe(j1())({classes:["e8uy567"]}),C1=()=>bn,gh=Fe(C1())({classes:["cbupwus"]}),pp="Active4D",gp="Amy",yp="Blackboard",vp="Clouds",bp="Cobalt",Ep="Cobalt2",Sp="Dawn",_p="Dracula",Ap="Dreamweaver",Tp="Eiffel",wp="GitHub",xp="IDLE",Rp="Katzenmilch",Dp="LAZY",Op="Merbivore",Mp="Monokai",zp="Nord",jp="SpaceCadet",Cp="Sunburst",Np="Tomorrow",Up="Twilight",Lp="Zenburnesque",Hp="iPlastic",Bp="idleFingers",qp="krTheme",Vp="monoindustrial",Pc={active4d:pp,"all-hallows-eve":"All Hallows Eve",amy:gp,"birds-of-paradise":"Birds of Paradise",blackboard:yp,"brilliance-black":"Brilliance Black","brilliance-dull":"Brilliance Dull","chrome-devtools":"Chrome DevTools","clouds-midnight":"Clouds Midnight",clouds:vp,cobalt:bp,cobalt2:Ep,dawn:Sp,dracula:_p,dreamweaver:Ap,eiffel:Tp,"espresso-libre":"Espresso Libre","github-dark":"GitHub Dark","github-light":"GitHub Light",github:wp,idle:xp,katzenmilch:Rp,"kuroir-theme":"Kuroir Theme",lazy:Dp,"magicwb--amiga-":"MagicWB (Amiga)","merbivore-soft":"Merbivore Soft",merbivore:Op,"monokai-bright":"Monokai Bright",monokai:Mp,"night-owl":"Night Owl",nord:zp,"oceanic-next":"Oceanic Next","pastels-on-dark":"Pastels on Dark","slush-and-poppies":"Slush and Poppies","solarized-dark":"Solarized-dark","solarized-light":"Solarized-light",spacecadet:jp,sunburst:Cp,"textmate--mac-classic-":"Textmate (Mac Classic)","tomorrow-night-blue":"Tomorrow-Night-Blue","tomorrow-night-bright":"Tomorrow-Night-Bright","tomorrow-night-eighties":"Tomorrow-Night-Eighties","tomorrow-night":"Tomorrow-Night",tomorrow:Np,twilight:Up,"upstream-sunburst":"Upstream Sunburst","vibrant-ink":"Vibrant Ink","xcode-default":"Xcode_default",zenburnesque:Lp,iplastic:Hp,idlefingers:Bp,krtheme:qp,monoindustrial:Vp},N1=Object.freeze(Object.defineProperty({__proto__:null,active4d:pp,amy:gp,blackboard:yp,clouds:vp,cobalt:bp,cobalt2:Ep,dawn:Sp,default:Pc,dracula:_p,dreamweaver:Ap,eiffel:Tp,github:wp,idle:xp,idlefingers:Bp,iplastic:Hp,katzenmilch:Rp,krtheme:qp,lazy:Dp,merbivore:Op,monoindustrial:Vp,monokai:Mp,nord:zp,spacecadet:jp,sunburst:Cp,tomorrow:Np,twilight:Up,zenburnesque:Lp},Symbol.toStringTag,{value:"Module"})),U1=()=>bn,L1=Fe(U1())({classes:["c1gyine9"]}),H1=()=>bn,Oc=Fe(H1())({classes:["s1lnalas"]}),B1=Fe("h2")({classes:["t1umuuqz"]}),Mc=Fe("h3")({classes:["s179h0gq"]}),yh=Fe("select")({classes:["s8w6gc3"]}),q1=Fe("p")({classes:["d10dj0u9"]});var ue=(i=>(i.APEX="apex",i.AZCLI="azcli",i.BAT="bat",i.C="c",i.CLOJURE="clojure",i.COFFEESCRIPT="coffeescript",i.CPP="cpp",i.CSHARP="csharp",i.CSP="csp",i.CSS="css",i.DOCKERFILE="dockerfile",i.FSHARP="fsharp",i.GO="go",i.GRAPHQL="graphql",i.HANDLEBARS="handlebars",i.HTML="html",i.INI="ini",i.JAVA="java",i.JAVASCRIPT="javascript",i.JSON="json",i.KOTLIN="kotlin",i.LESS="less",i.LUA="lua",i.MARKDOWN="markdown",i.MSDAX="msdax",i.MYSQL="mysql",i.OBJECTIVE_C="objective-c",i.PASCAL="pascal",i.PERL="perl",i.PGSQL="pgsql",i.PHP="php",i.PLAINTEXT="plaintext",i.POSTIATS="postiats",i.POWERQUERY="powerquery",i.POWERSHELL="powershell",i.PUG="pug",i.PYTHON="python",i.R="r",i.RAZOR="razor",i.REDIS="redis",i.REDSHIFT="redshift",i.RUBY="ruby",i.RUST="rust",i.SB="sb",i.SCHEME="scheme",i.SCSS="scss",i.SHELL="shell",i.SOL="sol",i.SQL="sql",i.ST="st",i.SWIFT="swift",i.TCL="tcl",i.TYPESCRIPT="typescript",i.VB="vb",i.XML="xml",i.YAML="yaml",i))(ue||{});const vh=["vs-dark","light","hc-black"],Gp=$c(ue.JAVASCRIPT),Ic=$c("vs-dark"),Yp=$c({}),V1="modulepreload",G1=function(i){return"/"+i},bh={},de=function(u,r,c){let d=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),g=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));d=Promise.allSettled(r.map(p=>{if(p=G1(p),p in bh)return;bh[p]=!0;const v=p.endsWith(".css"),B=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${B}`))return;const z=document.createElement("link");if(z.rel=v?"stylesheet":V1,v||(z.as="script"),z.crossOrigin="",z.href=p,g&&z.setAttribute("nonce",g),document.head.appendChild(z),v)return new Promise((A,U)=>{z.addEventListener("load",A),z.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${p}`)))})}))}function f(h){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=h,window.dispatchEvent(g),!g.defaultPrevented)throw h}return d.then(h=>{for(const g of h||[])g.status==="rejected"&&f(g.reason);return u().catch(f)})},Y1=(i,u,r)=>{const c=i[u];return c?typeof c=="function"?c():Promise.resolve(c):new Promise((d,f)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(f.bind(null,new Error("Unknown variable dynamic import: "+u+(u.split("/").length!==r?". Note that variables only represent file names one level deep.":""))))})};function k1(i){return new Promise(u=>{Promise.all([Jc.init(),Y1(Object.assign({"../../../node_modules/monaco-themes/themes/Active4D.json":()=>de(()=>import("./Active4D-DCMaBw04.js"),[]),"../../../node_modules/monaco-themes/themes/All Hallows Eve.json":()=>de(()=>import("./All Hallows Eve-7vaAaitg.js"),[]),"../../../node_modules/monaco-themes/themes/Amy.json":()=>de(()=>import("./Amy-Dh5QREKo.js"),[]),"../../../node_modules/monaco-themes/themes/Birds of Paradise.json":()=>de(()=>import("./Birds of Paradise-oCXBP02r.js"),[]),"../../../node_modules/monaco-themes/themes/Blackboard.json":()=>de(()=>import("./Blackboard-CFXNeI-o.js"),[]),"../../../node_modules/monaco-themes/themes/Brilliance Black.json":()=>de(()=>import("./Brilliance Black-CB4Vh9Nj.js"),[]),"../../../node_modules/monaco-themes/themes/Brilliance Dull.json":()=>de(()=>import("./Brilliance Dull-CoXJ9oE7.js"),[]),"../../../node_modules/monaco-themes/themes/Chrome DevTools.json":()=>de(()=>import("./Chrome DevTools-CGWZGI7O.js"),[]),"../../../node_modules/monaco-themes/themes/Clouds Midnight.json":()=>de(()=>import("./Clouds Midnight-2ths_mE7.js"),[]),"../../../node_modules/monaco-themes/themes/Clouds.json":()=>de(()=>import("./Clouds-Bibh36ez.js"),[]),"../../../node_modules/monaco-themes/themes/Cobalt.json":()=>de(()=>import("./Cobalt-DNAqQlSJ.js"),[]),"../../../node_modules/monaco-themes/themes/Cobalt2.json":()=>de(()=>import("./Cobalt2-B4DyEI1J.js"),[]),"../../../node_modules/monaco-themes/themes/Dawn.json":()=>de(()=>import("./Dawn-EKPPaCMI.js"),[]),"../../../node_modules/monaco-themes/themes/Dominion Day.json":()=>de(()=>import("./Dominion Day-C9A9NfeL.js"),[]),"../../../node_modules/monaco-themes/themes/Dracula.json":()=>de(()=>import("./Dracula-C3rd88UQ.js"),[]),"../../../node_modules/monaco-themes/themes/Dreamweaver.json":()=>de(()=>import("./Dreamweaver-CJxjPY1p.js"),[]),"../../../node_modules/monaco-themes/themes/Eiffel.json":()=>de(()=>import("./Eiffel-DxR6xVtZ.js"),[]),"../../../node_modules/monaco-themes/themes/Espresso Libre.json":()=>de(()=>import("./Espresso Libre-C4Twn5kD.js"),[]),"../../../node_modules/monaco-themes/themes/GitHub Dark.json":()=>de(()=>import("./GitHub Dark-sp1UhCqD.js"),[]),"../../../node_modules/monaco-themes/themes/GitHub Light.json":()=>de(()=>import("./GitHub Light-Vgw1L57b.js"),[]),"../../../node_modules/monaco-themes/themes/GitHub.json":()=>de(()=>import("./GitHub-CnB5fA5j.js"),[]),"../../../node_modules/monaco-themes/themes/IDLE.json":()=>de(()=>import("./IDLE-DPjUkObu.js"),[]),"../../../node_modules/monaco-themes/themes/Katzenmilch.json":()=>de(()=>import("./Katzenmilch-Cq-Qfo4h.js"),[]),"../../../node_modules/monaco-themes/themes/Kuroir Theme.json":()=>de(()=>import("./Kuroir Theme-Cq-Qfo4h.js"),[]),"../../../node_modules/monaco-themes/themes/LAZY.json":()=>de(()=>import("./LAZY-C9qbDqdv.js"),[]),"../../../node_modules/monaco-themes/themes/MagicWB (Amiga).json":()=>de(()=>import("./MagicWB (Amiga)-Cx9JqgkA.js"),[]),"../../../node_modules/monaco-themes/themes/Merbivore Soft.json":()=>de(()=>import("./Merbivore Soft-CdjjCMk3.js"),[]),"../../../node_modules/monaco-themes/themes/Merbivore.json":()=>de(()=>import("./Merbivore-CdjjCMk3.js"),[]),"../../../node_modules/monaco-themes/themes/Monokai Bright.json":()=>de(()=>import("./Monokai Bright-yk4Ykd6D.js"),[]),"../../../node_modules/monaco-themes/themes/Monokai.json":()=>de(()=>import("./Monokai-Ci587x6O.js"),[]),"../../../node_modules/monaco-themes/themes/Night Owl.json":()=>de(()=>import("./Night Owl-BdmhJRfO.js"),[]),"../../../node_modules/monaco-themes/themes/Nord.json":()=>de(()=>import("./Nord-Bj50XztE.js"),[]),"../../../node_modules/monaco-themes/themes/Oceanic Next.json":()=>de(()=>import("./Oceanic Next-BUu7Pa-n.js"),[]),"../../../node_modules/monaco-themes/themes/Pastels on Dark.json":()=>de(()=>import("./Pastels on Dark-uBz5MCvn.js"),[]),"../../../node_modules/monaco-themes/themes/Slush and Poppies.json":()=>de(()=>import("./Slush and Poppies-YSW8CL5m.js"),[]),"../../../node_modules/monaco-themes/themes/Solarized-dark.json":()=>de(()=>import("./Solarized-dark-CYWqIfaP.js"),[]),"../../../node_modules/monaco-themes/themes/Solarized-light.json":()=>de(()=>import("./Solarized-light-BvLRi89Y.js"),[]),"../../../node_modules/monaco-themes/themes/SpaceCadet.json":()=>de(()=>import("./SpaceCadet-DD1mkU1q.js"),[]),"../../../node_modules/monaco-themes/themes/Sunburst.json":()=>de(()=>import("./Sunburst-BVWzxNUV.js"),[]),"../../../node_modules/monaco-themes/themes/Textmate (Mac Classic).json":()=>de(()=>import("./Textmate (Mac Classic)-KgIAXcFy.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow-Night-Blue.json":()=>de(()=>import("./Tomorrow-Night-Blue-Rs0JKAWH.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow-Night-Bright.json":()=>de(()=>import("./Tomorrow-Night-Bright-C8ujZbWN.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow-Night-Eighties.json":()=>de(()=>import("./Tomorrow-Night-Eighties-BpK0hqlP.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow-Night.json":()=>de(()=>import("./Tomorrow-Night-_pJfbC1f.js"),[]),"../../../node_modules/monaco-themes/themes/Tomorrow.json":()=>de(()=>import("./Tomorrow-BRJ0LMx5.js"),[]),"../../../node_modules/monaco-themes/themes/Twilight.json":()=>de(()=>import("./Twilight-D14EW1Tv.js"),[]),"../../../node_modules/monaco-themes/themes/Upstream Sunburst.json":()=>de(()=>import("./Upstream Sunburst-DCp8CPcP.js"),[]),"../../../node_modules/monaco-themes/themes/Vibrant Ink.json":()=>de(()=>import("./Vibrant Ink-BxaY3Ba1.js"),[]),"../../../node_modules/monaco-themes/themes/Xcode_default.json":()=>de(()=>import("./Xcode_default-1YyPzZGu.js"),[]),"../../../node_modules/monaco-themes/themes/Zenburnesque.json":()=>de(()=>import("./Zenburnesque-VD2wTOvW.js"),[]),"../../../node_modules/monaco-themes/themes/iPlastic.json":()=>de(()=>import("./iPlastic-Ch4VfpOd.js"),[]),"../../../node_modules/monaco-themes/themes/idleFingers.json":()=>de(()=>import("./idleFingers-5ndTPyr4.js"),[]),"../../../node_modules/monaco-themes/themes/krTheme.json":()=>de(()=>import("./krTheme-CUmmZeAm.js"),[]),"../../../node_modules/monaco-themes/themes/monoindustrial.json":()=>de(()=>import("./monoindustrial-BS0iMKKa.js"),[]),"../../../node_modules/monaco-themes/themes/themelist.json":()=>de(()=>Promise.resolve().then(()=>N1),void 0)}),`../../../node_modules/monaco-themes/themes/${Pc[i]}.json`,7)]).then(([r,c])=>{r.editor.defineTheme(i,c),u(void 0)})})}function X1(i){const u={};for(const r in i)if(Object.prototype.hasOwnProperty.call(i,r)){const c=i[r],d=c.schema;if(d){let f=!1;for(const h in d)if(h.includes(".")){f=!0;break}if(f){u[r]={};for(const h in d)if(Object.prototype.hasOwnProperty.call(d,h)){const g=d[h],p=h.split(".").pop()||"";u[r][p]=g.default}}else u[r]=d.default??c.defaultValue}else u[r]=c.defaultValue}return delete u.automaticLayout,u}function Q1(i){const u={type:"object",properties:{},definitions:{}};for(const r in i)if(Object.prototype.hasOwnProperty.call(i,r)){const c=i[r],d=c.schema;if(d){const f={};let h=!1;for(const g in d)if(g.includes(".")){h=!0;break}if(h){f.type="object",f.properties={};for(const g in d)if(Object.prototype.hasOwnProperty.call(d,g)){const p=d[g];if(p){const v=g.split(".").pop()||"";f.properties[v]={type:p.type,markdownDescription:p.markdownDescription||p.description||"No description available",default:p.default},p.enum&&(f.properties[v].enum=p.enum),p.enumDescriptions&&(f.properties[v]["x-enumDescriptions"]=p.enumDescriptions),p.markdownEnumDescriptions&&(f.properties[v]["x-enumDescriptions"]=p.markdownEnumDescriptions),p.minimum!==void 0&&(f.properties[v].minimum=p.minimum),p.maximum!==void 0&&(f.properties[v].maximum=p.maximum)}}}else f.markdownDescription=d.markdownDescription||d.description||"No description available",d.type&&(f.type=d.type),d.enum&&(f.enum=d.enum),d.enumDescriptions&&(f["x-enumDescriptions"]=d.enumDescriptions),d.markdownEnumDescriptions&&(f["x-enumDescriptions"]=d.markdownEnumDescriptions),d.default!==void 0&&(f.default=d.default),d.minimum!==void 0&&(f.minimum=d.minimum),d.maximum!==void 0&&(f.maximum=d.maximum);u.properties[r]=f}else u.properties[r]={type:typeof c.defaultValue,default:c.defaultValue,description:"No description available"}}return u}function Eh(){const[i,u]=Tc(Gp),[r,c]=Tc(Ic),[d,f]=Tc(Yp),h=P.useRef(null);function g(){var A;try{f(JSON.parse(((A=h.current)==null?void 0:A.getValue())||"")),Zm("Options applied",{icon:"🚀",style:{background:"#333",color:"#fff"}})}catch{Zm("Options are not valid JSON",{icon:"❌",style:{background:"#333",color:"#fff"}})}}function p(A){u(A.target.value)}async function v(A){const U=A.target.value;vh.includes(U)||await k1(U),c(U)}function B(A,U){h.current=A,A.addCommand(U.KeyMod.CtrlCmd|U.KeyCode.KeyS,g)}function z(A){const U=X1(A.editor.EditorOptions);f(U);const k=Q1(A.editor.EditorOptions);A.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:"monaco-editor-options-schema.json",fileMatch:["monaco-editor-options.json"],schema:k}]})}return fe.jsxs(L1,{children:[fe.jsx(B1,{children:"Settings"}),fe.jsxs(Oc,{children:[fe.jsx(Mc,{children:"Languages"}),fe.jsx(yh,{value:i,onChange:p,children:Object.values(ue).map(A=>fe.jsx("option",{children:A},A))})]}),fe.jsxs(Oc,{children:[fe.jsx(Mc,{children:"Themes"}),fe.jsxs(yh,{value:r,onChange:v,children:[fe.jsx("option",{disabled:!0,children:"Default Themes"}),vh.map(A=>fe.jsx("option",{children:A},A)),fe.jsx("option",{disabled:!0,children:"Custom Themes"}),Object.entries(Pc).map(([A,U])=>fe.jsx("option",{children:A},U))]})]}),fe.jsxs(Oc,{children:[fe.jsx(Mc,{children:"Options"}),fe.jsxs(q1,{children:["For more information on options, visit the"," ",fe.jsx("a",{href:"https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html",target:"_blank",rel:"noreferrer",children:"Monaco Editor documentation"})]}),fe.jsx(Fo,{children:fe.jsx(qc,{height:450,value:JSON.stringify(d,null,2),options:{automaticLayout:!0,scrollbar:{alwaysConsumeMouseWheel:!1}},language:"json",theme:r,path:"monaco-editor-options.json",onMount:B,beforeMount:z})}),fe.jsx(Wo,{onClick:g,children:"Apply",...Uc("s1ct51q0",{})})]})]})}const ce=i=>i.trim().replace(/^ {4}/gm,""),Z1={[ue.APEX]:ce(`
    /* Using a single database query, find all the leads in
    the database that have the same email address as any
    of the leads being inserted or updated. */
    for (Lead lead : [SELECT Email FROM Lead WHERE Email IN :leadMap.KeySet()]) {
      Lead newLead = leadMap.get(lead.Email);
      newLead.Email.addError('A lead with this email address already exists.');
    }
  `),[ue.AZCLI]:ce(`
    # Create a resource group.
    az group create --name myResourceGroup --location westeurope

    # Create a new virtual machine, this creates SSH keys if not present.
    az vm create --resource-group myResourceGroup --name myVM --image UbuntuLTS --generate-ssh-keys
  `),[ue.BAT]:ce(`
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
  `),[ue.C]:ce(`
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
  `),[ue.CLOJURE]:ce(`
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
  `),[ue.COFFEESCRIPT]:ce(`
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
  `),[ue.CPP]:ce(`
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
  `),[ue.CSHARP]:ce(`
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
  `),[ue.CSP]:ce("Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com"),[ue.CSS]:ce(`
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
  `),[ue.DOCKERFILE]:ce(`
    FROM ubuntu:18.04
    COPY . /app
    RUN make /app
    CMD python /app/app.py
  `),[ue.FSHARP]:ce(`
    (* Sample F# application *)
    [<EntryPoint>]
    let main argv = 
        printfn "%A" argv
        System.Console.WriteLine("Hello from F#")
        0 // return an integer exit code

    //--------------------------------------------------------
  `),[ue.GO]:ce(`
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
  `),[ue.GRAPHQL]:ce(`
    type Query {
      me: User!
      searchForLocation(byGPS: GPSInput, byAddress: AddressInput): LocationPagingConnection
    }

    type Mutation {
      addLocation(location: LocationInput): Location
      addReview(review: ReviewInput): Review
      addFavorite(locationId: ID!): Location
    }
  `),[ue.HANDLEBARS]:ce(`
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
  `),[ue.HTML]:ce(`
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
  `),[ue.INI]:ce(`
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
  `),[ue.JAVA]:ce(`
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
  `),[ue.JAVASCRIPT]:ce(`
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
  `),[ue.JSON]:ce(`
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
  `),[ue.KOTLIN]:ce(`
    class MutableStack<E>(vararg items: E) {              // 1

      private val elements = items.toMutableList()

      fun push(element: E) = elements.add(element)        // 2

      fun peek(): E = elements.last()                     // 3

      fun pop(): E = elements.removeAt(elements.size - 1)

      fun isEmpty() = elements.isEmpty()

      fun size() = elements.size

      override fun toString() = "MutableStack(\${elements.joinToString()})"
    }
  `),[ue.LESS]:ce(`
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
  `),[ue.LUA]:ce(`
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
  `),[ue.MARKDOWN]:ce(`
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
  `),[ue.MSDAX]:" = CALCULATE(SUM(Sales[SalesAmount]), PREVIOUSQUARTER(Calendar[DateKey]))",[ue.MYSQL]:ce(`
    CREATE TABLE shop (
      article INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL,
      dealer  CHAR(20)                 DEFAULT ''     NOT NULL,
      price   DOUBLE(16,2)             DEFAULT '0.00' NOT NULL,
      PRIMARY KEY(article, dealer));
    INSERT INTO shop VALUES
      (1,'A',3.45),(1,'B',3.99),(2,'A',10.99),(3,'B',1.45),
      (3,'C',1.69),(3,'D',1.25),(4,'D',19.95);
  `),[ue.OBJECTIVE_C]:ce(`
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
  `),[ue.PASCAL]:ce(`
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
  `),[ue.PERL]:ce(`
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
  `),[ue.PGSQL]:ce(`
    BEGIN
      SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
      EXCEPTION
        WHEN NO_DATA_FOUND THEN
          RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
          RAISE EXCEPTION 'employee % not unique', myname;
    END;
  `),[ue.PHP]:ce(`
    <!DOCTYPE html>
    <html>
    <body>

    <h1>PHP example</h1>

    <?php
      echo "Hello World!";
    ?>

    </body>
    </html>
  `),[ue.PLAINTEXT]:ce(`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus aliquet sapien, sed rhoncus leo ullamcorper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus feugiat eleifend nisl, aliquet rhoncus quam scelerisque vel. Morbi eu pellentesque ex. Nam suscipit maximus leo blandit cursus. Aenean sollicitudin nisi luctus, ornare nibh viverra, laoreet ex. Donec eget nibh sit amet dolor ornare elementum. Morbi sollicitudin enim vitae risus pretium vestibulum. Ut pretium hendrerit libero, non vulputate ante volutpat et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam malesuada turpis vitae est porttitor, id tincidunt neque dignissim. Integer rhoncus vestibulum justo in iaculis. Praesent nec augue ut dui scelerisque gravida vel id velit. Donec vehicula feugiat mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

    Praesent diam lorem, luctus quis ullamcorper non, consequat quis orci. Ut vel massa vel nunc sagittis porttitor a vitae ante. Quisque euismod lobortis imperdiet. Vestibulum tincidunt vehicula posuere. Nulla facilisi. Donec sodales imperdiet risus id ullamcorper. Nulla luctus orci tortor, vitae tincidunt urna aliquet nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat dapibus massa. Sed ac pharetra magna, in imperdiet neque. Nullam nunc nisi, consequat vel nunc et, sagittis aliquam arcu. Aliquam non orci magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id sem ut sem pulvinar rhoncus. Aenean venenatis nunc eget mi ornare, vitae maximus lacus varius. Quisque quis vestibulum justo.

    Donec euismod luctus volutpat. Donec sed lacinia enim. Vivamus aliquam elit cursus, convallis diam at, volutpat turpis. Sed lacinia nisl in auctor dapibus. Nunc turpis mi, mattis ut rhoncus id, lacinia sed lectus. Donec sodales tellus quis libero gravida pretium et quis magna. Etiam ultricies mollis purus, eget consequat velit. Duis vitae nibh vitae arcu tincidunt congue. Maecenas ut velit in ipsum condimentum dictum quis eget urna. Sed mattis nulla arcu, vitae mattis ligula dictum at.
  `),[ue.POSTIATS]:ce(`
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
  `),[ue.POWERQUERY]:ce(`
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
  `),[ue.POWERSHELL]:ce(`
    # Convert any text file to ASCII
 
    param( [string] $infile = $(throw "Please specify a filename.") )
     
    $outfile = "$infile.ascii"
     
    get-content -path $infile | out-file $outfile -encoding ascii
  `),[ue.PUG]:ce(`
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
  `),[ue.PYTHON]:ce(`
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
  `),[ue.R]:ce(`
    # Program to convert decimal number into binary number using recursive function
    convert_to_binary <- function(n) {
      if(n > 1) {
        convert_to_binary(as.integer(n/2))
      }
      cat(n %% 2)
    }
  `),[ue.RAZOR]:ce(`
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
  `),[ue.REDIS]:ce(`
    EXISTS xkey
    APPEND xkey "Hello"
    APPEND xkey " World"
    GET xkey
  `),[ue.REDSHIFT]:ce(`
    create view tables_vw as
    select distinct(id) table_id
    ,trim(datname)   db_name
    ,trim(nspname)   schema_name
    ,trim(relname)   table_name
    from stv_tbl_perm
    join pg_class on pg_class.oid = stv_tbl_perm.id
    join pg_namespace on pg_namespace.oid = relnamespace
    join pg_database on pg_database.oid = stv_tbl_perm.db_id;
  `),[ue.RUBY]:ce(`
    def find_missing(sequence)
      consecutive     = sequence.each_cons(2)
      differences     = consecutive.map { |a,b| b - a }
      sequence        = differences.max_by { |n| differences.count(n) }
      missing_between = consecutive.find { |a,b| (b - a) != sequence }
      missing_between.first + sequence
    end
    find_missing([2,4,6,10])
    # 8
  `),[ue.RUST]:ce(`
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
  `),[ue.SB]:ce(`
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
  `),[ue.SCHEME]:ce(`
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
  `),[ue.SCSS]:ce(`
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
  `),[ue.SHELL]:ce(`
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
  `),[ue.SOL]:ce(`
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
  `),[ue.SQL]:ce(`
    CREATE VIEW Failing_Students AS
    SELECT S_NAME, Student_ID
    FROM STUDENT
    WHERE GPA > 40;
  `),[ue.ST]:ce(`
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
  `),[ue.SWIFT]:ce(`
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
  `),[ue.TCL]:ce(`
    #!/usr/bin/tclsh

    set variableA 10
    set {variable B} test
    puts $variableA
    puts \${variable B}
  `),[ue.TYPESCRIPT]:ce(`
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
  `),[ue.VB]:ce(`
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
  `),[ue.XML]:ce(`
    <?xml version="1.0" encoding="ISO-8859-1"?>  
    <note>  
      <to>Tove</to>  
      <from>Jani</from>  
      <heading>Reminder</heading>  
      <body>Don't forget me this weekend!</body>  
    </note>
  `),[ue.YAML]:ce(`
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
  `)};function K1(){const i=gb("(min-width: 1024px)"),u=Ei(Gp),r=Ei(Ic),c=Ei(Yp),d={value:Z1[u],language:u,theme:r,path:`${u}-example`,options:{automaticLayout:!0,...c,scrollbar:{alwaysConsumeMouseWheel:!1,...(c==null?void 0:c.scrollbar)||{}}}};return i?fe.jsx(gh,{children:fe.jsxs(Fh,{direction:"horizontal",children:[fe.jsx(Lc,{minSize:20,children:fe.jsx(Fo,{children:fe.jsx(qc,{height:"100%",...d})})}),fe.jsx(ep,{className:"resize-handle",hitAreaMargins:{fine:5,coarse:5}}),fe.jsx(Lc,{defaultSize:30,minSize:20,children:fe.jsx(Eh,{})})]})}):fe.jsxs(gh,{children:[fe.jsx(Eh,{}),fe.jsx(Fo,{children:fe.jsx(qc,{height:"100%",...d}),...Uc("sdwsyg3",{})})],...Uc("s1kizbhm",{})})}const Sh={original:ce(`
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
  `),modified:ce(`
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
  `)};function $1(){const i=Ei(Ic);return fe.jsx(Fo,{children:fe.jsx(y1,{height:"100vh",theme:i,original:Sh.original,modified:Sh.modified,language:"markdown"})})}const J1=P.createContext(null),zc={didCatch:!1,error:null};let P1=class extends P.Component{constructor(u){super(u),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=zc}static getDerivedStateFromError(u){return{didCatch:!0,error:u}}resetErrorBoundary(){const{error:u}=this.state;if(u!==null){for(var r,c,d=arguments.length,f=new Array(d),h=0;h<d;h++)f[h]=arguments[h];(r=(c=this.props).onReset)===null||r===void 0||r.call(c,{args:f,reason:"imperative-api"}),this.setState(zc)}}componentDidCatch(u,r){var c,d;(c=(d=this.props).onError)===null||c===void 0||c.call(d,u,r)}componentDidUpdate(u,r){const{didCatch:c}=this.state,{resetKeys:d}=this.props;if(c&&r.error!==null&&I1(u.resetKeys,d)){var f,h;(f=(h=this.props).onReset)===null||f===void 0||f.call(h,{next:d,prev:u.resetKeys,reason:"keys"}),this.setState(zc)}}render(){const{children:u,fallbackRender:r,FallbackComponent:c,fallback:d}=this.props,{didCatch:f,error:h}=this.state;let g=u;if(f){const p={error:h,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")g=r(p);else if(c)g=P.createElement(c,p);else if(d!==void 0)g=d;else throw h}return P.createElement(J1.Provider,{value:{didCatch:f,error:h,resetErrorBoundary:this.resetErrorBoundary}},g)}};function I1(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return i.length!==u.length||i.some((r,c)=>!Object.is(r,u[c]))}const W1=()=>bn,F1=Fe(W1())({classes:["c9hvsya"]}),eE=Fe("h1")({classes:["t1kmd2rq"]}),tE=Fe("h3")({classes:["drvpjco"]});function nE({children:i}){return fe.jsx(P1,{fallback:fe.jsxs(F1,{children:[fe.jsx(eE,{children:"Something went wrong..."}),fe.jsx(tE,{children:"Try to refresh the page or open an issue on the GitHub repository."}),fe.jsxs(hp,{onClick:()=>window.open("https://github.com/suren-atoyan/monaco-react/issues","_blank"),children:[fe.jsx("img",{src:Rh,alt:"GitHub"}),"Open an issue"]})]}),children:i})}function aE(){const[i,u]=P.useState("editor");return fe.jsxs(nE,{children:[fe.jsxs(T1,{children:[fe.jsxs(x1,{children:[fe.jsx("h3",{children:"Monaco React"}),fe.jsxs(M1,{children:[fe.jsx(Wo,{onClick:()=>u("editor"),disabled:i==="editor",children:"Editor"}),fe.jsx(Wo,{onClick:()=>u("diff-editor"),disabled:i==="diff-editor",children:"Diff Editor"}),fe.jsx(hp,{onClick:()=>window.open("https://github.com/suren-atoyan/monaco-react","_blank"),children:fe.jsx("img",{src:Rh,alt:"GitHub"})})]})]}),fe.jsx(D1,{children:i==="editor"?fe.jsx(K1,{}):fe.jsx($1,{})})]}),fe.jsx(s0,{})]})}Ev.createRoot(document.getElementById("root")).render(fe.jsx(P.StrictMode,{children:fe.jsx(aE,{})}));
