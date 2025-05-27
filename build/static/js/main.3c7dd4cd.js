/*! For license information please see main.3c7dd4cd.js.LICENSE.txt */
(()=>{var t={43:(e,t,r)=>{"use strict";e.exports=r(202)},123:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var c=0;c<a.length;c++)n.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}},153:(e,t,r)=>{"use strict";var n=r(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},161:(e,t,r)=>{"use strict";var n,o=r(43),i=(n=o)&&"object"===typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function c(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),c()},a.componentDidUpdate=function(){c()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(d,"canUseDOM",s),d}}},173:(e,t,r)=>{e.exports=r(497)()},175:(t,r)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,l=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function u(e,t,r){do{const r=e.charCodeAt(t);if(32!==r&&9!==r)return t}while(++t<r);return r}function c(e,t,r){for(;t>r;){const r=e.charCodeAt(--t);if(32!==r&&9!==r)return t+1}return r}function d(t){if(-1===t.indexOf("%"))return t;try{return decodeURIComponent(t)}catch(e){return t}}},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function y(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:_.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return a=a(l=e),e=""===i?"."+T(l,0):i,w(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),O(a,t,o,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+T(s=e[u],u);l+=O(s,t,o,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=O(s=s.value,t,o,c=i+T(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function R(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},L={transition:null},N={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:L,ReactCurrentOwner:_};t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)k.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(!(0<i(o,t)))break e;e[n]=t,e[r]=o,r=n}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,a=o>>>1;n<a;){var s=2*(n+1)-1,l=e[s],u=s+1,c=e[u];if(0>i(l,r))u<o&&0>i(c,l)?(e[n]=c,e[u]=r,n=u):(e[n]=l,e[s]=r,n=s);else{if(!(u<o&&0>i(c,r)))break e;e[n]=c,e[u]=r,n=u}}}return t}function i(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=n(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,r(u,t)}t=n(c)}}function w(e){if(g=!1,x(e),!m)if(null!==n(u))m=!0,L(k);else{var t=n(c);null!==t&&N(w,t.startTime-e)}}function k(e,r){m=!1,g&&(g=!1,y(j),j=-1),h=!0;var i=p;try{for(x(r),f=n(u);null!==f&&(!(f.expirationTime>r)||e&&!O());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var s=a(f.expirationTime<=r);r=t.unstable_now(),"function"===typeof s?f.callback=s:f===n(u)&&o(u),x(r)}else o(u);f=n(u)}if(null!==f)var l=!0;else{var d=n(c);null!==d&&N(w,d.startTime-r),l=!1}return l}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var _,S=!1,E=null,j=-1,C=5,T=-1;function O(){return!(t.unstable_now()-T<C)}function R(){if(null!==E){var e=t.unstable_now();T=e;var r=!0;try{r=E(!0,e)}finally{r?_():(S=!1,E=null)}}else S=!1}if("function"===typeof b)_=function(){b(R)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,A=P.port2;P.port1.onmessage=R,_=function(){A.postMessage(null)}}else _=function(){v(R,0)};function L(e){E=e,S||(S=!0,_())}function N(e,r){j=v((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,L(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var r=p;p=t;try{return e()}finally{p=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=p;p=e;try{return t()}finally{p=r}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,r(c,e),null===n(u)&&e===n(c)&&(g?(y(j),j=-1):g=!0,N(w,i-a))):(e.sortIndex=s,r(u,e),m||h||(m=!0,L(k))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=p;return function(){var r=p;p=t;try{return e.apply(this,arguments)}finally{p=r}}}},324:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(o=r?r.call(n,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},366:e=>{var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},391:(e,t,r)=>{"use strict";var n=r(950);t.H=n.createRoot,n.hydrateRoot},403:(e,t,r)=>{"use strict";var n;r.d(t,{E_:()=>l,F3:()=>s,Ii:()=>a}),function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(n||(n={}));class o extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const i=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},i=r.Plugins=r.Plugins||{},a=()=>null!==t?t.name:(e=>{var t,r;return(null===e||void 0===e?void 0:e.androidBridge)?"android":(null===(r=null===(t=null===e||void 0===e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===r?void 0:r.bridge)?"ios":"web"})(e),s=e=>{var t;return null===(t=r.PluginHeaders)||void 0===t?void 0:t.find((t=>t.name===e))},l=new Map;return r.convertFileSrc||(r.convertFileSrc=e=>e),r.getPlatform=a,r.handleError=t=>e.console.error(t),r.isNativePlatform=()=>"web"!==a(),r.isPluginAvailable=e=>{const t=l.get(e);return!!(null===t||void 0===t?void 0:t.platforms.has(a()))||!!s(e)},r.registerPlugin=function(e){let u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const c=l.get(e);if(c)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),c.proxy;const d=a(),f=s(e);let p;const h=i=>{let a;const s=function(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];const h=(async()=>(!p&&d in u?p=p="function"===typeof u[d]?await u[d]():u[d]:null!==t&&!p&&"web"in u&&(p=p="function"===typeof u.web?await u.web():u.web),p))().then((t=>{const s=((t,i)=>{var a,s;if(!f){if(t)return null===(s=t[i])||void 0===s?void 0:s.bind(t);throw new o(`"${e}" plugin is not implemented on ${d}`,n.Unimplemented)}{const n=null===f||void 0===f?void 0:f.methods.find((e=>i===e.name));if(n)return"promise"===n.rtype?t=>r.nativePromise(e,i.toString(),t):(t,n)=>r.nativeCallback(e,i.toString(),t,n);if(t)return null===(a=t[i])||void 0===a?void 0:a.bind(t)}})(t,i);if(s){const e=s(...l);return a=null===e||void 0===e?void 0:e.remove,e}throw new o(`"${e}.${i}()" is not implemented on ${d}`,n.Unimplemented)}));return"addListener"===i&&(h.remove=async()=>a()),h};return s.toString=()=>`${i.toString()}() { [capacitor code] }`,Object.defineProperty(s,"name",{value:i,writable:!1,configurable:!1}),s},m=h("addListener"),g=h("removeListener"),v=(e,t)=>{const r=m({eventName:e},t),n=async()=>{const n=await r;g({eventName:e,callbackId:n},t)},o=new Promise((e=>r.then((()=>e({remove:n})))));return o.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await n()},o},y=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return f?v:m;case"removeListener":return g;default:return h(t)}}});return i[e]=y,l.set(e,{name:e,proxy:y,platforms:new Set([...Object.keys(u),...f?[d]:[]])}),y},r.Exception=o,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},a=(e=>e.Capacitor=i(e))("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{}),s=a.registerPlugin;class l{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n),r&&this.sendRetainedArgumentsForEvent(e);return Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const n=this.listeners[e];if(n)n.forEach((e=>e(t)));else if(r){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not implemented";return new a.Exception(e,n.Unimplemented)}unavailable(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not available";return new a.Exception(e,n.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const n=r.indexOf(t);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach((t=>{this.notifyListeners(e,t)})))}}const u=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),c=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class d extends l{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach((e=>{if(e.length<=0)return;let[r,n]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=c(r).trim(),n=c(n).trim(),t[r]=n})),t}async setCookie(e){try{const t=u(e.key),r=u(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),i=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${n}; path=${o}; ${i};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}s("CapacitorCookies",{web:()=>new d});const f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=Object.assign({method:e.method||"GET",headers:e.headers},t),n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e);return Object.keys(e).map((e=>e.toLocaleLowerCase())).reduce(((r,n,o)=>(r[n]=e[t[o]],r)),{})}(e.headers),o=n["content-type"]||"";if("string"===typeof e.data)r.body=e.data;else if(o.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[r,n]of Object.entries(e.data||{}))t.set(r,n);r.body=t.toString()}else if(o.includes("multipart/form-data")||e.data instanceof FormData){const t=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,r)=>{t.append(r,e)}));else for(const r of Object.keys(e.data))t.append(r,e.data[r]);r.body=t;const n=new Headers(r.headers);n.delete("content-type"),r.headers=n}else(o.includes("application/json")||"object"===typeof e.data)&&(r.body=JSON.stringify(e.data));return r};class p extends l{async request(e){const t=f(e,e.webFetchExtra),r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?Object.entries(e).reduce(((e,r)=>{const[n,o]=r;let i,a;return Array.isArray(o)?(a="",o.forEach((e=>{i=t?encodeURIComponent(e):e,a+=`${n}=${i}&`})),a.slice(0,-1)):(i=t?encodeURIComponent(o):o,a=`${n}=${i}`),`${e}&${a}`}),"").substr(1):null}(e.params,e.shouldEncodeUrlParams),n=r?`${e.url}?${r}`:e.url,o=await fetch(n,t),i=o.headers.get("content-type")||"";let a,s,{responseType:l="text"}=o.ok?e:{};switch(i.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":s=await o.blob(),a=await(async e=>new Promise(((t,r)=>{const n=new FileReader;n.onload=()=>{const e=n.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},n.onerror=e=>r(e),n.readAsDataURL(e)})))(s);break;case"json":a=await o.json();break;default:a=await o.text()}const u={};return o.headers.forEach(((e,t)=>{u[t]=e})),{data:a,headers:u,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}s("CapacitorHttp",{web:()=>new p})},497:(e,t,r)=>{"use strict";var n=r(218);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},536:function(t,r,n){var o;t=n.nmd(t),function(){var i,a="Expected a function",s="__lodash_hash_undefined__",l="__lodash_placeholder__",u=16,c=32,d=64,f=128,p=256,h=1/0,m=9007199254740991,g=NaN,v=4294967295,y=[["ary",f],["bind",1],["bindKey",2],["curry",8],["curryRight",u],["flip",512],["partial",c],["partialRight",d],["rearg",p]],b="[object Arguments]",x="[object Array]",w="[object Boolean]",k="[object Date]",_="[object Error]",S="[object Function]",E="[object GeneratorFunction]",j="[object Map]",C="[object Number]",T="[object Object]",O="[object Promise]",R="[object RegExp]",P="[object Set]",A="[object String]",L="[object Symbol]",N="[object WeakMap]",z="[object ArrayBuffer]",$="[object DataView]",M="[object Float32Array]",I="[object Float64Array]",D="[object Int8Array]",F="[object Int16Array]",U="[object Int32Array]",B="[object Uint8Array]",W="[object Uint8ClampedArray]",H="[object Uint16Array]",q="[object Uint32Array]",V=/\b__p \+= '';/g,K=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Q=/&(?:amp|lt|gt|quot|#39);/g,X=/[&<>"']/g,J=RegExp(Q.source),G=RegExp(X.source),Z=/<%-([\s\S]+?)%>/g,ee=/<%([\s\S]+?)%>/g,te=/<%=([\s\S]+?)%>/g,re=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ne=/^\w*$/,oe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ie=/[\\^$.*+?()[\]{}|]/g,ae=RegExp(ie.source),se=/^\s+/,le=/\s/,ue=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ce=/\{\n\/\* \[wrapped with (.+)\] \*/,de=/,? & /,fe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pe=/[()=,{}\[\]\/\s]/,he=/\\(\\)?/g,me=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ge=/\w*$/,ve=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,be=/^\[object .+?Constructor\]$/,xe=/^0o[0-7]+$/i,we=/^(?:0|[1-9]\d*)$/,ke=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_e=/($^)/,Se=/['\n\r\u2028\u2029\\]/g,Ee="\\ud800-\\udfff",je="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ce="\\u2700-\\u27bf",Te="a-z\\xdf-\\xf6\\xf8-\\xff",Oe="A-Z\\xc0-\\xd6\\xd8-\\xde",Re="\\ufe0e\\ufe0f",Pe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ae="['\u2019]",Le="["+Ee+"]",Ne="["+Pe+"]",ze="["+je+"]",$e="\\d+",Me="["+Ce+"]",Ie="["+Te+"]",De="[^"+Ee+Pe+$e+Ce+Te+Oe+"]",Fe="\\ud83c[\\udffb-\\udfff]",Ue="[^"+Ee+"]",Be="(?:\\ud83c[\\udde6-\\uddff]){2}",We="[\\ud800-\\udbff][\\udc00-\\udfff]",He="["+Oe+"]",qe="\\u200d",Ve="(?:"+Ie+"|"+De+")",Ke="(?:"+He+"|"+De+")",Ye="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",Qe="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",Xe="(?:"+ze+"|"+Fe+")"+"?",Je="["+Re+"]?",Ge=Je+Xe+("(?:"+qe+"(?:"+[Ue,Be,We].join("|")+")"+Je+Xe+")*"),Ze="(?:"+[Me,Be,We].join("|")+")"+Ge,et="(?:"+[Ue+ze+"?",ze,Be,We,Le].join("|")+")",tt=RegExp(Ae,"g"),rt=RegExp(ze,"g"),nt=RegExp(Fe+"(?="+Fe+")|"+et+Ge,"g"),ot=RegExp([He+"?"+Ie+"+"+Ye+"(?="+[Ne,He,"$"].join("|")+")",Ke+"+"+Qe+"(?="+[Ne,He+Ve,"$"].join("|")+")",He+"?"+Ve+"+"+Ye,He+"+"+Qe,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$e,Ze].join("|"),"g"),it=RegExp("["+qe+Ee+je+Re+"]"),at=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,st=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],lt=-1,ut={};ut[M]=ut[I]=ut[D]=ut[F]=ut[U]=ut[B]=ut[W]=ut[H]=ut[q]=!0,ut[b]=ut[x]=ut[z]=ut[w]=ut[$]=ut[k]=ut[_]=ut[S]=ut[j]=ut[C]=ut[T]=ut[R]=ut[P]=ut[A]=ut[N]=!1;var ct={};ct[b]=ct[x]=ct[z]=ct[$]=ct[w]=ct[k]=ct[M]=ct[I]=ct[D]=ct[F]=ct[U]=ct[j]=ct[C]=ct[T]=ct[R]=ct[P]=ct[A]=ct[L]=ct[B]=ct[W]=ct[H]=ct[q]=!0,ct[_]=ct[S]=ct[N]=!1;var dt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ft=parseFloat,pt=parseInt,ht="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,mt="object"==typeof self&&self&&self.Object===Object&&self,gt=ht||mt||Function("return this")(),vt=r&&!r.nodeType&&r,yt=vt&&t&&!t.nodeType&&t,bt=yt&&yt.exports===vt,xt=bt&&ht.process,wt=function(){try{var t=yt&&yt.require&&yt.require("util").types;return t||xt&&xt.binding&&xt.binding("util")}catch(e){}}(),kt=wt&&wt.isArrayBuffer,_t=wt&&wt.isDate,St=wt&&wt.isMap,Et=wt&&wt.isRegExp,jt=wt&&wt.isSet,Ct=wt&&wt.isTypedArray;function Tt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Ot(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Pt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function At(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Lt(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Nt(e,t){return!!(null==e?0:e.length)&&Ht(e,t,0)>-1}function zt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function $t(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function It(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function Dt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function Ft(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Ut=Yt("length");function Bt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Wt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Ht(e,t,r){return t===t?function(e,t,r){var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Wt(e,Vt,r)}function qt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Vt(e){return e!==e}function Kt(e,t){var r=null==e?0:e.length;return r?Jt(e,t)/r:g}function Yt(e){return function(t){return null==t?i:t[e]}}function Qt(e){return function(t){return null==e?i:e[t]}}function Xt(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Jt(e,t){for(var r,n=-1,o=e.length;++n<o;){var a=t(e[n]);a!==i&&(r=r===i?a:r+a)}return r}function Gt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Zt(e){return e?e.slice(0,gr(e)+1).replace(se,""):e}function er(e){return function(t){return e(t)}}function tr(e,t){return $t(t,(function(t){return e[t]}))}function rr(e,t){return e.has(t)}function nr(e,t){for(var r=-1,n=e.length;++r<n&&Ht(t,e[r],0)>-1;);return r}function or(e,t){for(var r=e.length;r--&&Ht(t,e[r],0)>-1;);return r}var ir=Qt({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),ar=Qt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function sr(e){return"\\"+dt[e]}function lr(e){return it.test(e)}function ur(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function cr(e,t){return function(r){return e(t(r))}}function dr(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r];a!==t&&a!==l||(e[r]=l,i[o++]=r)}return i}function fr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function pr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function hr(e){return lr(e)?function(e){var t=nt.lastIndex=0;for(;nt.test(e);)++t;return t}(e):Ut(e)}function mr(e){return lr(e)?function(e){return e.match(nt)||[]}(e):function(e){return e.split("")}(e)}function gr(e){for(var t=e.length;t--&&le.test(e.charAt(t)););return t}var vr=Qt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var yr=function t(r){var n=(r=null==r?gt:yr.defaults(gt.Object(),r,yr.pick(gt,st))).Array,o=r.Date,le=r.Error,Ee=r.Function,je=r.Math,Ce=r.Object,Te=r.RegExp,Oe=r.String,Re=r.TypeError,Pe=n.prototype,Ae=Ee.prototype,Le=Ce.prototype,Ne=r["__core-js_shared__"],ze=Ae.toString,$e=Le.hasOwnProperty,Me=0,Ie=function(){var e=/[^.]+$/.exec(Ne&&Ne.keys&&Ne.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),De=Le.toString,Fe=ze.call(Ce),Ue=gt._,Be=Te("^"+ze.call($e).replace(ie,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=bt?r.Buffer:i,He=r.Symbol,qe=r.Uint8Array,Ve=We?We.allocUnsafe:i,Ke=cr(Ce.getPrototypeOf,Ce),Ye=Ce.create,Qe=Le.propertyIsEnumerable,Xe=Pe.splice,Je=He?He.isConcatSpreadable:i,Ge=He?He.iterator:i,Ze=He?He.toStringTag:i,et=function(){try{var t=pi(Ce,"defineProperty");return t({},"",{}),t}catch(e){}}(),nt=r.clearTimeout!==gt.clearTimeout&&r.clearTimeout,it=o&&o.now!==gt.Date.now&&o.now,dt=r.setTimeout!==gt.setTimeout&&r.setTimeout,ht=je.ceil,mt=je.floor,vt=Ce.getOwnPropertySymbols,yt=We?We.isBuffer:i,xt=r.isFinite,wt=Pe.join,Ut=cr(Ce.keys,Ce),Qt=je.max,br=je.min,xr=o.now,wr=r.parseInt,kr=je.random,_r=Pe.reverse,Sr=pi(r,"DataView"),Er=pi(r,"Map"),jr=pi(r,"Promise"),Cr=pi(r,"Set"),Tr=pi(r,"WeakMap"),Or=pi(Ce,"create"),Rr=Tr&&new Tr,Pr={},Ar=Di(Sr),Lr=Di(Er),Nr=Di(jr),zr=Di(Cr),$r=Di(Tr),Mr=He?He.prototype:i,Ir=Mr?Mr.valueOf:i,Dr=Mr?Mr.toString:i;function Fr(e){if(rs(e)&&!qa(e)&&!(e instanceof Hr)){if(e instanceof Wr)return e;if($e.call(e,"__wrapped__"))return Fi(e)}return new Wr(e)}var Ur=function(){function e(){}return function(t){if(!ts(t))return{};if(Ye)return Ye(t);e.prototype=t;var r=new e;return e.prototype=i,r}}();function Br(){}function Wr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function Hr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=v,this.__views__=[]}function qr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Kr;++t<r;)this.add(e[t])}function Qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Xr(e,t){var r=qa(e),n=!r&&Ha(e),o=!r&&!n&&Qa(e),i=!r&&!n&&!o&&cs(e),a=r||n||o||i,s=a?Gt(e.length,Oe):[],l=s.length;for(var u in e)!t&&!$e.call(e,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||xi(u,l))||s.push(u);return s}function Jr(e){var t=e.length;return t?e[Qn(0,t-1)]:i}function Gr(e,t){return $i(Po(e),ln(t,0,e.length))}function Zr(e){return $i(Po(e))}function en(e,t,r){(r!==i&&!Ua(e[t],r)||r===i&&!(t in e))&&an(e,t,r)}function tn(e,t,r){var n=e[t];$e.call(e,t)&&Ua(n,r)&&(r!==i||t in e)||an(e,t,r)}function rn(e,t){for(var r=e.length;r--;)if(Ua(e[r][0],t))return r;return-1}function nn(e,t,r,n){return pn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function on(e,t){return e&&Ao(t,As(t),e)}function an(e,t,r){"__proto__"==t&&et?et(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function sn(e,t){for(var r=-1,o=t.length,a=n(o),s=null==e;++r<o;)a[r]=s?i:Cs(e,t[r]);return a}function ln(e,t,r){return e===e&&(r!==i&&(e=e<=r?e:r),t!==i&&(e=e>=t?e:t)),e}function un(e,t,r,n,o,a){var s,l=1&t,u=2&t,c=4&t;if(r&&(s=o?r(e,n,o,a):r(e)),s!==i)return s;if(!ts(e))return e;var d=qa(e);if(d){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&$e.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Po(e,s)}else{var f=gi(e),p=f==S||f==E;if(Qa(e))return Eo(e,l);if(f==T||f==b||p&&!o){if(s=u||p?{}:yi(e),!l)return u?function(e,t){return Ao(e,mi(e),t)}(e,function(e,t){return e&&Ao(t,Ls(t),e)}(s,e)):function(e,t){return Ao(e,hi(e),t)}(e,on(s,e))}else{if(!ct[f])return o?e:{};s=function(e,t,r){var n=e.constructor;switch(t){case z:return jo(e);case w:case k:return new n(+e);case $:return function(e,t){var r=t?jo(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case M:case I:case D:case F:case U:case B:case W:case H:case q:return Co(e,r);case j:return new n;case C:case A:return new n(e);case R:return function(e){var t=new e.constructor(e.source,ge.exec(e));return t.lastIndex=e.lastIndex,t}(e);case P:return new n;case L:return o=e,Ir?Ce(Ir.call(o)):{}}var o}(e,f,l)}}a||(a=new Qr);var h=a.get(e);if(h)return h;a.set(e,s),ss(e)?e.forEach((function(n){s.add(un(n,t,r,n,e,a))})):ns(e)&&e.forEach((function(n,o){s.set(o,un(n,t,r,o,e,a))}));var m=d?i:(c?u?ai:ii:u?Ls:As)(e);return Rt(m||e,(function(n,o){m&&(n=e[o=n]),tn(s,o,un(n,t,r,o,e,a))})),s}function cn(e,t,r){var n=r.length;if(null==e)return!n;for(e=Ce(e);n--;){var o=r[n],a=t[o],s=e[o];if(s===i&&!(o in e)||!a(s))return!1}return!0}function dn(e,t,r){if("function"!=typeof e)throw new Re(a);return Ai((function(){e.apply(i,r)}),t)}function fn(e,t,r,n){var o=-1,i=Nt,a=!0,s=e.length,l=[],u=t.length;if(!s)return l;r&&(t=$t(t,er(r))),n?(i=zt,a=!1):t.length>=200&&(i=rr,a=!1,t=new Yr(t));e:for(;++o<s;){var c=e[o],d=null==r?c:r(c);if(c=n||0!==c?c:0,a&&d===d){for(var f=u;f--;)if(t[f]===d)continue e;l.push(c)}else i(t,d,n)||l.push(c)}return l}Fr.templateSettings={escape:Z,evaluate:ee,interpolate:te,variable:"",imports:{_:Fr}},Fr.prototype=Br.prototype,Fr.prototype.constructor=Fr,Wr.prototype=Ur(Br.prototype),Wr.prototype.constructor=Wr,Hr.prototype=Ur(Br.prototype),Hr.prototype.constructor=Hr,qr.prototype.clear=function(){this.__data__=Or?Or(null):{},this.size=0},qr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},qr.prototype.get=function(e){var t=this.__data__;if(Or){var r=t[e];return r===s?i:r}return $e.call(t,e)?t[e]:i},qr.prototype.has=function(e){var t=this.__data__;return Or?t[e]!==i:$e.call(t,e)},qr.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Or&&t===i?s:t,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=rn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Xe.call(t,r,1),--this.size,!0)},Vr.prototype.get=function(e){var t=this.__data__,r=rn(t,e);return r<0?i:t[r][1]},Vr.prototype.has=function(e){return rn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=rn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Kr.prototype.clear=function(){this.size=0,this.__data__={hash:new qr,map:new(Er||Vr),string:new qr}},Kr.prototype.delete=function(e){var t=di(this,e).delete(e);return this.size-=t?1:0,t},Kr.prototype.get=function(e){return di(this,e).get(e)},Kr.prototype.has=function(e){return di(this,e).has(e)},Kr.prototype.set=function(e,t){var r=di(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Yr.prototype.add=Yr.prototype.push=function(e){return this.__data__.set(e,s),this},Yr.prototype.has=function(e){return this.__data__.has(e)},Qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},Qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Qr.prototype.get=function(e){return this.__data__.get(e)},Qr.prototype.has=function(e){return this.__data__.has(e)},Qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Er||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Kr(n)}return r.set(e,t),this.size=r.size,this};var pn=zo(wn),hn=zo(kn,!0);function mn(e,t){var r=!0;return pn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(e,t,r){for(var n=-1,o=e.length;++n<o;){var a=e[n],s=t(a);if(null!=s&&(l===i?s===s&&!us(s):r(s,l)))var l=s,u=a}return u}function vn(e,t){var r=[];return pn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function yn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=bi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?yn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var bn=$o(),xn=$o(!0);function wn(e,t){return e&&bn(e,t,As)}function kn(e,t){return e&&xn(e,t,As)}function _n(e,t){return Lt(t,(function(t){return Ga(e[t])}))}function Sn(e,t){for(var r=0,n=(t=wo(t,e)).length;null!=e&&r<n;)e=e[Ii(t[r++])];return r&&r==n?e:i}function En(e,t,r){var n=t(e);return qa(e)?n:Mt(n,r(e))}function jn(t){return null==t?t===i?"[object Undefined]":"[object Null]":Ze&&Ze in Ce(t)?function(t){var r=$e.call(t,Ze),n=t[Ze];try{t[Ze]=i;var o=!0}catch(e){}var a=De.call(t);o&&(r?t[Ze]=n:delete t[Ze]);return a}(t):function(e){return De.call(e)}(t)}function Cn(e,t){return e>t}function Tn(e,t){return null!=e&&$e.call(e,t)}function On(e,t){return null!=e&&t in Ce(e)}function Rn(e,t,r){for(var o=r?zt:Nt,a=e[0].length,s=e.length,l=s,u=n(s),c=1/0,d=[];l--;){var f=e[l];l&&t&&(f=$t(f,er(t))),c=br(f.length,c),u[l]=!r&&(t||a>=120&&f.length>=120)?new Yr(l&&f):i}f=e[0];var p=-1,h=u[0];e:for(;++p<a&&d.length<c;){var m=f[p],g=t?t(m):m;if(m=r||0!==m?m:0,!(h?rr(h,g):o(d,g,r))){for(l=s;--l;){var v=u[l];if(!(v?rr(v,g):o(e[l],g,r)))continue e}h&&h.push(g),d.push(m)}}return d}function Pn(e,t,r){var n=null==(e=Oi(e,t=wo(t,e)))?e:e[Ii(Ji(t))];return null==n?i:Tt(n,e,r)}function An(e){return rs(e)&&jn(e)==b}function Ln(e,t,r,n,o){return e===t||(null==e||null==t||!rs(e)&&!rs(t)?e!==e&&t!==t:function(e,t,r,n,o,a){var s=qa(e),l=qa(t),u=s?x:gi(e),c=l?x:gi(t),d=(u=u==b?T:u)==T,f=(c=c==b?T:c)==T,p=u==c;if(p&&Qa(e)){if(!Qa(t))return!1;s=!0,d=!1}if(p&&!d)return a||(a=new Qr),s||cs(e)?ni(e,t,r,n,o,a):function(e,t,r,n,o,i,a){switch(r){case $:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case z:return!(e.byteLength!=t.byteLength||!i(new qe(e),new qe(t)));case w:case k:case C:return Ua(+e,+t);case _:return e.name==t.name&&e.message==t.message;case R:case A:return e==t+"";case j:var s=ur;case P:var l=1&n;if(s||(s=fr),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;n|=2,a.set(e,t);var c=ni(s(e),s(t),n,o,i,a);return a.delete(e),c;case L:if(Ir)return Ir.call(e)==Ir.call(t)}return!1}(e,t,u,r,n,o,a);if(!(1&r)){var h=d&&$e.call(e,"__wrapped__"),m=f&&$e.call(t,"__wrapped__");if(h||m){var g=h?e.value():e,v=m?t.value():t;return a||(a=new Qr),o(g,v,r,n,a)}}if(!p)return!1;return a||(a=new Qr),function(e,t,r,n,o,a){var s=1&r,l=ii(e),u=l.length,c=ii(t),d=c.length;if(u!=d&&!s)return!1;var f=u;for(;f--;){var p=l[f];if(!(s?p in t:$e.call(t,p)))return!1}var h=a.get(e),m=a.get(t);if(h&&m)return h==t&&m==e;var g=!0;a.set(e,t),a.set(t,e);var v=s;for(;++f<u;){var y=e[p=l[f]],b=t[p];if(n)var x=s?n(b,y,p,t,e,a):n(y,b,p,e,t,a);if(!(x===i?y===b||o(y,b,r,n,a):x)){g=!1;break}v||(v="constructor"==p)}if(g&&!v){var w=e.constructor,k=t.constructor;w==k||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof k&&k instanceof k||(g=!1)}return a.delete(e),a.delete(t),g}(e,t,r,n,o,a)}(e,t,r,n,Ln,o))}function Nn(e,t,r,n){var o=r.length,a=o,s=!n;if(null==e)return!a;for(e=Ce(e);o--;){var l=r[o];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){var u=(l=r[o])[0],c=e[u],d=l[1];if(s&&l[2]){if(c===i&&!(u in e))return!1}else{var f=new Qr;if(n)var p=n(c,d,u,e,t,f);if(!(p===i?Ln(d,c,3,n,f):p))return!1}}return!0}function zn(e){return!(!ts(e)||(t=e,Ie&&Ie in t))&&(Ga(e)?Be:be).test(Di(e));var t}function $n(e){return"function"==typeof e?e:null==e?ol:"object"==typeof e?qa(e)?Bn(e[0],e[1]):Un(e):pl(e)}function Mn(e){if(!Ei(e))return Ut(e);var t=[];for(var r in Ce(e))$e.call(e,r)&&"constructor"!=r&&t.push(r);return t}function In(e){if(!ts(e))return function(e){var t=[];if(null!=e)for(var r in Ce(e))t.push(r);return t}(e);var t=Ei(e),r=[];for(var n in e)("constructor"!=n||!t&&$e.call(e,n))&&r.push(n);return r}function Dn(e,t){return e<t}function Fn(e,t){var r=-1,o=Ka(e)?n(e.length):[];return pn(e,(function(e,n,i){o[++r]=t(e,n,i)})),o}function Un(e){var t=fi(e);return 1==t.length&&t[0][2]?Ci(t[0][0],t[0][1]):function(r){return r===e||Nn(r,e,t)}}function Bn(e,t){return ki(e)&&ji(t)?Ci(Ii(e),t):function(r){var n=Cs(r,e);return n===i&&n===t?Ts(r,e):Ln(t,n,3)}}function Wn(e,t,r,n,o){e!==t&&bn(t,(function(a,s){if(o||(o=new Qr),ts(a))!function(e,t,r,n,o,a,s){var l=Ri(e,r),u=Ri(t,r),c=s.get(u);if(c)return void en(e,r,c);var d=a?a(l,u,r+"",e,t,s):i,f=d===i;if(f){var p=qa(u),h=!p&&Qa(u),m=!p&&!h&&cs(u);d=u,p||h||m?qa(l)?d=l:Ya(l)?d=Po(l):h?(f=!1,d=Eo(u,!0)):m?(f=!1,d=Co(u,!0)):d=[]:is(u)||Ha(u)?(d=l,Ha(l)?d=ys(l):ts(l)&&!Ga(l)||(d=yi(u))):f=!1}f&&(s.set(u,d),o(d,u,n,a,s),s.delete(u));en(e,r,d)}(e,t,s,r,Wn,n,o);else{var l=n?n(Ri(e,s),a,s+"",e,t,o):i;l===i&&(l=a),en(e,s,l)}}),Ls)}function Hn(e,t){var r=e.length;if(r)return xi(t+=t<0?r:0,r)?e[t]:i}function qn(e,t,r){t=t.length?$t(t,(function(e){return qa(e)?function(t){return Sn(t,1===e.length?e[0]:e)}:e})):[ol];var n=-1;t=$t(t,er(ci()));var o=Fn(e,(function(e,r,o){var i=$t(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;for(;++n<a;){var l=To(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Sn(e,a);r(s,a)&&eo(i,wo(a,e),s)}return i}function Kn(e,t,r,n){var o=n?qt:Ht,i=-1,a=t.length,s=e;for(e===t&&(t=Po(t)),r&&(s=$t(e,er(r)));++i<a;)for(var l=0,u=t[i],c=r?r(u):u;(l=o(s,c,l,n))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Yn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;xi(o)?Xe.call(e,o,1):po(e,o)}}return e}function Qn(e,t){return e+mt(kr()*(t-e+1))}function Xn(e,t){var r="";if(!e||t<1||t>m)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Jn(e,t){return Li(Ti(e,t,ol),e+"")}function Gn(e){return Jr(Us(e))}function Zn(e,t){var r=Us(e);return $i(r,ln(t,0,r.length))}function eo(e,t,r,n){if(!ts(e))return e;for(var o=-1,a=(t=wo(t,e)).length,s=a-1,l=e;null!=l&&++o<a;){var u=Ii(t[o]),c=r;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(o!=s){var d=l[u];(c=n?n(d,u,l):i)===i&&(c=ts(d)?d:xi(t[o+1])?[]:{})}tn(l,u,c),l=l[u]}return e}var to=Rr?function(e,t){return Rr.set(e,t),e}:ol,ro=et?function(e,t){return et(e,"toString",{configurable:!0,enumerable:!1,value:tl(t),writable:!0})}:ol;function no(e){return $i(Us(e))}function oo(e,t,r){var o=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var a=n(i);++o<i;)a[o]=e[o+t];return a}function io(e,t){var r;return pn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function ao(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t===t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!us(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return so(e,t,ol,r)}function so(e,t,r,n){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=r(t))!==t,l=null===t,u=us(t),c=t===i;o<a;){var d=mt((o+a)/2),f=r(e[d]),p=f!==i,h=null===f,m=f===f,g=us(f);if(s)var v=n||m;else v=c?m&&(n||p):l?m&&p&&(n||!h):u?m&&p&&!h&&(n||!g):!h&&!g&&(n?f<=t:f<t);v?o=d+1:a=d}return br(a,4294967294)}function lo(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Ua(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function uo(e){return"number"==typeof e?e:us(e)?g:+e}function co(e){if("string"==typeof e)return e;if(qa(e))return $t(e,co)+"";if(us(e))return Dr?Dr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function fo(e,t,r){var n=-1,o=Nt,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=zt;else if(i>=200){var u=t?null:Jo(e);if(u)return fr(u);a=!1,o=rr,l=new Yr}else l=t?[]:s;e:for(;++n<i;){var c=e[n],d=t?t(c):c;if(c=r||0!==c?c:0,a&&d===d){for(var f=l.length;f--;)if(l[f]===d)continue e;t&&l.push(d),s.push(c)}else o(l,d,r)||(l!==s&&l.push(d),s.push(c))}return s}function po(e,t){return null==(e=Oi(e,t=wo(t,e)))||delete e[Ii(Ji(t))]}function ho(e,t,r,n){return eo(e,t,r(Sn(e,t)),n)}function mo(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?oo(e,n?0:i,n?i+1:o):oo(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Hr&&(r=r.value()),It(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function vo(e,t,r){var o=e.length;if(o<2)return o?fo(e[0]):[];for(var i=-1,a=n(o);++i<o;)for(var s=e[i],l=-1;++l<o;)l!=i&&(a[i]=fn(a[i]||s,e[l],t,r));return fo(yn(a,1),t,r)}function yo(e,t,r){for(var n=-1,o=e.length,a=t.length,s={};++n<o;){var l=n<a?t[n]:i;r(s,e[n],l)}return s}function bo(e){return Ya(e)?e:[]}function xo(e){return"function"==typeof e?e:ol}function wo(e,t){return qa(e)?e:ki(e,t)?[e]:Mi(bs(e))}var ko=Jn;function _o(e,t,r){var n=e.length;return r=r===i?n:r,!t&&r>=n?e:oo(e,t,r)}var So=nt||function(e){return gt.clearTimeout(e)};function Eo(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function jo(e){var t=new e.constructor(e.byteLength);return new qe(t).set(new qe(e)),t}function Co(e,t){var r=t?jo(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function To(e,t){if(e!==t){var r=e!==i,n=null===e,o=e===e,a=us(e),s=t!==i,l=null===t,u=t===t,c=us(t);if(!l&&!c&&!a&&e>t||a&&s&&u&&!l&&!c||n&&s&&u||!r&&u||!o)return 1;if(!n&&!a&&!c&&e<t||c&&r&&o&&!n&&!a||l&&r&&o||!s&&o||!u)return-1}return 0}function Oo(e,t,r,o){for(var i=-1,a=e.length,s=r.length,l=-1,u=t.length,c=Qt(a-s,0),d=n(u+c),f=!o;++l<u;)d[l]=t[l];for(;++i<s;)(f||i<a)&&(d[r[i]]=e[i]);for(;c--;)d[l++]=e[i++];return d}function Ro(e,t,r,o){for(var i=-1,a=e.length,s=-1,l=r.length,u=-1,c=t.length,d=Qt(a-l,0),f=n(d+c),p=!o;++i<d;)f[i]=e[i];for(var h=i;++u<c;)f[h+u]=t[u];for(;++s<l;)(p||i<a)&&(f[h+r[s]]=e[i++]);return f}function Po(e,t){var r=-1,o=e.length;for(t||(t=n(o));++r<o;)t[r]=e[r];return t}function Ao(e,t,r,n){var o=!r;r||(r={});for(var a=-1,s=t.length;++a<s;){var l=t[a],u=n?n(r[l],e[l],l,r,e):i;u===i&&(u=e[l]),o?an(r,l,u):tn(r,l,u)}return r}function Lo(e,t){return function(r,n){var o=qa(r)?Ot:nn,i=t?t():{};return o(r,e,ci(n,2),i)}}function No(e){return Jn((function(t,r){var n=-1,o=r.length,a=o>1?r[o-1]:i,s=o>2?r[2]:i;for(a=e.length>3&&"function"==typeof a?(o--,a):i,s&&wi(r[0],r[1],s)&&(a=o<3?i:a,o=1),t=Ce(t);++n<o;){var l=r[n];l&&e(t,l,n,a)}return t}))}function zo(e,t){return function(r,n){if(null==r)return r;if(!Ka(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Ce(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function $o(e){return function(t,r,n){for(var o=-1,i=Ce(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function Mo(e){return function(t){var r=lr(t=bs(t))?mr(t):i,n=r?r[0]:t.charAt(0),o=r?_o(r,1).join(""):t.slice(1);return n[e]()+o}}function Io(e){return function(t){return It(Gs(Hs(t).replace(tt,"")),e,"")}}function Do(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Ur(e.prototype),n=e.apply(r,t);return ts(n)?n:r}}function Fo(e){return function(t,r,n){var o=Ce(t);if(!Ka(t)){var a=ci(r,3);t=As(t),r=function(e){return a(o[e],e,o)}}var s=e(t,r,n);return s>-1?o[a?t[s]:s]:i}}function Uo(e){return oi((function(t){var r=t.length,n=r,o=Wr.prototype.thru;for(e&&t.reverse();n--;){var s=t[n];if("function"!=typeof s)throw new Re(a);if(o&&!l&&"wrapper"==li(s))var l=new Wr([],!0)}for(n=l?n:r;++n<r;){var u=li(s=t[n]),c="wrapper"==u?si(s):i;l=c&&_i(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[li(c[0])].apply(l,c[3]):1==s.length&&_i(s)?l[u]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&1==e.length&&qa(n))return l.plant(n).value();for(var o=0,i=r?t[o].apply(this,e):n;++o<r;)i=t[o].call(this,i);return i}}))}function Bo(e,t,r,o,a,s,l,u,c,d){var p=t&f,h=1&t,m=2&t,g=24&t,v=512&t,y=m?i:Do(e);return function f(){for(var b=arguments.length,x=n(b),w=b;w--;)x[w]=arguments[w];if(g)var k=ui(f),_=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(x,k);if(o&&(x=Oo(x,o,a,g)),s&&(x=Ro(x,s,l,g)),b-=_,g&&b<d){var S=dr(x,k);return Qo(e,t,Bo,f.placeholder,r,x,S,u,c,d-b)}var E=h?r:this,j=m?E[e]:e;return b=x.length,u?x=function(e,t){var r=e.length,n=br(t.length,r),o=Po(e);for(;n--;){var a=t[n];e[n]=xi(a,r)?o[a]:i}return e}(x,u):v&&b>1&&x.reverse(),p&&c<b&&(x.length=c),this&&this!==gt&&this instanceof f&&(j=y||Do(j)),j.apply(E,x)}}function Wo(e,t){return function(r,n){return function(e,t,r,n){return wn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Ho(e,t){return function(r,n){var o;if(r===i&&n===i)return t;if(r!==i&&(o=r),n!==i){if(o===i)return n;"string"==typeof r||"string"==typeof n?(r=co(r),n=co(n)):(r=uo(r),n=uo(n)),o=e(r,n)}return o}}function qo(e){return oi((function(t){return t=$t(t,er(ci())),Jn((function(r){var n=this;return e(t,(function(e){return Tt(e,n,r)}))}))}))}function Vo(e,t){var r=(t=t===i?" ":co(t)).length;if(r<2)return r?Xn(t,e):t;var n=Xn(t,ht(e/hr(t)));return lr(t)?_o(mr(n),0,e).join(""):n.slice(0,e)}function Ko(e){return function(t,r,o){return o&&"number"!=typeof o&&wi(t,r,o)&&(r=o=i),t=hs(t),r===i?(r=t,t=0):r=hs(r),function(e,t,r,o){for(var i=-1,a=Qt(ht((t-e)/(r||1)),0),s=n(a);a--;)s[o?a:++i]=e,e+=r;return s}(t,r,o=o===i?t<r?1:-1:hs(o),e)}}function Yo(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=vs(t),r=vs(r)),e(t,r)}}function Qo(e,t,r,n,o,a,s,l,u,f){var p=8&t;t|=p?c:d,4&(t&=~(p?d:c))||(t&=-4);var h=[e,t,o,p?a:i,p?s:i,p?i:a,p?i:s,l,u,f],m=r.apply(i,h);return _i(e)&&Pi(m,h),m.placeholder=n,Ni(m,e,t)}function Xo(e){var t=je[e];return function(e,r){if(e=vs(e),(r=null==r?0:br(ms(r),292))&&xt(e)){var n=(bs(e)+"e").split("e");return+((n=(bs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Jo=Cr&&1/fr(new Cr([,-0]))[1]==h?function(e){return new Cr(e)}:ul;function Go(e){return function(t){var r=gi(t);return r==j?ur(t):r==P?pr(t):function(e,t){return $t(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zo(e,t,r,o,s,h,m,g){var v=2&t;if(!v&&"function"!=typeof e)throw new Re(a);var y=o?o.length:0;if(y||(t&=-97,o=s=i),m=m===i?m:Qt(ms(m),0),g=g===i?g:ms(g),y-=s?s.length:0,t&d){var b=o,x=s;o=s=i}var w=v?i:si(e),k=[e,t,r,o,s,b,x,h,m,g];if(w&&function(e,t){var r=e[1],n=t[1],o=r|n,i=o<131,a=n==f&&8==r||n==f&&r==p&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!i&&!a)return e;1&n&&(e[2]=t[2],o|=1&r?0:4);var s=t[3];if(s){var u=e[3];e[3]=u?Oo(u,s,t[4]):s,e[4]=u?dr(e[3],l):t[4]}(s=t[5])&&(u=e[5],e[5]=u?Ro(u,s,t[6]):s,e[6]=u?dr(e[5],l):t[6]);(s=t[7])&&(e[7]=s);n&f&&(e[8]=null==e[8]?t[8]:br(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=o}(k,w),e=k[0],t=k[1],r=k[2],o=k[3],s=k[4],!(g=k[9]=k[9]===i?v?0:e.length:Qt(k[9]-y,0))&&24&t&&(t&=-25),t&&1!=t)_=8==t||t==u?function(e,t,r){var o=Do(e);return function a(){for(var s=arguments.length,l=n(s),u=s,c=ui(a);u--;)l[u]=arguments[u];var d=s<3&&l[0]!==c&&l[s-1]!==c?[]:dr(l,c);return(s-=d.length)<r?Qo(e,t,Bo,a.placeholder,i,l,d,i,i,r-s):Tt(this&&this!==gt&&this instanceof a?o:e,this,l)}}(e,t,g):t!=c&&33!=t||s.length?Bo.apply(i,k):function(e,t,r,o){var i=1&t,a=Do(e);return function t(){for(var s=-1,l=arguments.length,u=-1,c=o.length,d=n(c+l),f=this&&this!==gt&&this instanceof t?a:e;++u<c;)d[u]=o[u];for(;l--;)d[u++]=arguments[++s];return Tt(f,i?r:this,d)}}(e,t,r,o);else var _=function(e,t,r){var n=1&t,o=Do(e);return function t(){return(this&&this!==gt&&this instanceof t?o:e).apply(n?r:this,arguments)}}(e,t,r);return Ni((w?to:Pi)(_,k),e,t)}function ei(e,t,r,n){return e===i||Ua(e,Le[r])&&!$e.call(n,r)?t:e}function ti(e,t,r,n,o,a){return ts(e)&&ts(t)&&(a.set(t,e),Wn(e,t,i,ti,a),a.delete(t)),e}function ri(e){return is(e)?i:e}function ni(e,t,r,n,o,a){var s=1&r,l=e.length,u=t.length;if(l!=u&&!(s&&u>l))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var f=-1,p=!0,h=2&r?new Yr:i;for(a.set(e,t),a.set(t,e);++f<l;){var m=e[f],g=t[f];if(n)var v=s?n(g,m,f,t,e,a):n(m,g,f,e,t,a);if(v!==i){if(v)continue;p=!1;break}if(h){if(!Ft(t,(function(e,t){if(!rr(h,t)&&(m===e||o(m,e,r,n,a)))return h.push(t)}))){p=!1;break}}else if(m!==g&&!o(m,g,r,n,a)){p=!1;break}}return a.delete(e),a.delete(t),p}function oi(e){return Li(Ti(e,i,Vi),e+"")}function ii(e){return En(e,As,hi)}function ai(e){return En(e,Ls,mi)}var si=Rr?function(e){return Rr.get(e)}:ul;function li(e){for(var t=e.name+"",r=Pr[t],n=$e.call(Pr,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function ui(e){return($e.call(Fr,"placeholder")?Fr:e).placeholder}function ci(){var e=Fr.iteratee||il;return e=e===il?$n:e,arguments.length?e(arguments[0],arguments[1]):e}function di(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map}function fi(e){for(var t=As(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,ji(o)]}return t}function pi(e,t){var r=function(e,t){return null==e?i:e[t]}(e,t);return zn(r)?r:i}var hi=vt?function(e){return null==e?[]:(e=Ce(e),Lt(vt(e),(function(t){return Qe.call(e,t)})))}:gl,mi=vt?function(e){for(var t=[];e;)Mt(t,hi(e)),e=Ke(e);return t}:gl,gi=jn;function vi(e,t,r){for(var n=-1,o=(t=wo(t,e)).length,i=!1;++n<o;){var a=Ii(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&es(o)&&xi(a,o)&&(qa(e)||Ha(e))}function yi(e){return"function"!=typeof e.constructor||Ei(e)?{}:Ur(Ke(e))}function bi(e){return qa(e)||Ha(e)||!!(Je&&e&&e[Je])}function xi(e,t){var r=typeof e;return!!(t=null==t?m:t)&&("number"==r||"symbol"!=r&&we.test(e))&&e>-1&&e%1==0&&e<t}function wi(e,t,r){if(!ts(r))return!1;var n=typeof t;return!!("number"==n?Ka(r)&&xi(t,r.length):"string"==n&&t in r)&&Ua(r[t],e)}function ki(e,t){if(qa(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!us(e))||(ne.test(e)||!re.test(e)||null!=t&&e in Ce(t))}function _i(e){var t=li(e),r=Fr[t];if("function"!=typeof r||!(t in Hr.prototype))return!1;if(e===r)return!0;var n=si(r);return!!n&&e===n[0]}(Sr&&gi(new Sr(new ArrayBuffer(1)))!=$||Er&&gi(new Er)!=j||jr&&gi(jr.resolve())!=O||Cr&&gi(new Cr)!=P||Tr&&gi(new Tr)!=N)&&(gi=function(e){var t=jn(e),r=t==T?e.constructor:i,n=r?Di(r):"";if(n)switch(n){case Ar:return $;case Lr:return j;case Nr:return O;case zr:return P;case $r:return N}return t});var Si=Ne?Ga:vl;function Ei(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Le)}function ji(e){return e===e&&!ts(e)}function Ci(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==i||e in Ce(r)))}}function Ti(e,t,r){return t=Qt(t===i?e.length-1:t,0),function(){for(var o=arguments,i=-1,a=Qt(o.length-t,0),s=n(a);++i<a;)s[i]=o[t+i];i=-1;for(var l=n(t+1);++i<t;)l[i]=o[i];return l[t]=r(s),Tt(e,this,l)}}function Oi(e,t){return t.length<2?e:Sn(e,oo(t,0,-1))}function Ri(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}var Pi=zi(to),Ai=dt||function(e,t){return gt.setTimeout(e,t)},Li=zi(ro);function Ni(e,t,r){var n=t+"";return Li(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ue,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Rt(y,(function(r){var n="_."+r[0];t&r[1]&&!Nt(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ce);return t?t[1].split(de):[]}(n),r)))}function zi(e){var t=0,r=0;return function(){var n=xr(),o=16-(n-r);if(r=n,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(i,arguments)}}function $i(e,t){var r=-1,n=e.length,o=n-1;for(t=t===i?n:t;++r<t;){var a=Qn(r,o),s=e[a];e[a]=e[r],e[r]=s}return e.length=t,e}var Mi=function(e){var t=za(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(oe,(function(e,r,n,o){t.push(n?o.replace(he,"$1"):r||e)})),t}));function Ii(e){if("string"==typeof e||us(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Di(t){if(null!=t){try{return ze.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Fi(e){if(e instanceof Hr)return e.clone();var t=new Wr(e.__wrapped__,e.__chain__);return t.__actions__=Po(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Ui=Jn((function(e,t){return Ya(e)?fn(e,yn(t,1,Ya,!0)):[]})),Bi=Jn((function(e,t){var r=Ji(t);return Ya(r)&&(r=i),Ya(e)?fn(e,yn(t,1,Ya,!0),ci(r,2)):[]})),Wi=Jn((function(e,t){var r=Ji(t);return Ya(r)&&(r=i),Ya(e)?fn(e,yn(t,1,Ya,!0),i,r):[]}));function Hi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ms(r);return o<0&&(o=Qt(n+o,0)),Wt(e,ci(t,3),o)}function qi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=n-1;return r!==i&&(o=ms(r),o=r<0?Qt(n+o,0):br(o,n-1)),Wt(e,ci(t,3),o,!0)}function Vi(e){return(null==e?0:e.length)?yn(e,1):[]}function Ki(e){return e&&e.length?e[0]:i}var Yi=Jn((function(e){var t=$t(e,bo);return t.length&&t[0]===e[0]?Rn(t):[]})),Qi=Jn((function(e){var t=Ji(e),r=$t(e,bo);return t===Ji(r)?t=i:r.pop(),r.length&&r[0]===e[0]?Rn(r,ci(t,2)):[]})),Xi=Jn((function(e){var t=Ji(e),r=$t(e,bo);return(t="function"==typeof t?t:i)&&r.pop(),r.length&&r[0]===e[0]?Rn(r,i,t):[]}));function Ji(e){var t=null==e?0:e.length;return t?e[t-1]:i}var Gi=Jn(Zi);function Zi(e,t){return e&&e.length&&t&&t.length?Kn(e,t):e}var ea=oi((function(e,t){var r=null==e?0:e.length,n=sn(e,t);return Yn(e,$t(t,(function(e){return xi(e,r)?+e:e})).sort(To)),n}));function ta(e){return null==e?e:_r.call(e)}var ra=Jn((function(e){return fo(yn(e,1,Ya,!0))})),na=Jn((function(e){var t=Ji(e);return Ya(t)&&(t=i),fo(yn(e,1,Ya,!0),ci(t,2))})),oa=Jn((function(e){var t=Ji(e);return t="function"==typeof t?t:i,fo(yn(e,1,Ya,!0),i,t)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Lt(e,(function(e){if(Ya(e))return t=Qt(e.length,t),!0})),Gt(t,(function(t){return $t(e,Yt(t))}))}function aa(e,t){if(!e||!e.length)return[];var r=ia(e);return null==t?r:$t(r,(function(e){return Tt(t,i,e)}))}var sa=Jn((function(e,t){return Ya(e)?fn(e,t):[]})),la=Jn((function(e){return vo(Lt(e,Ya))})),ua=Jn((function(e){var t=Ji(e);return Ya(t)&&(t=i),vo(Lt(e,Ya),ci(t,2))})),ca=Jn((function(e){var t=Ji(e);return t="function"==typeof t?t:i,vo(Lt(e,Ya),i,t)})),da=Jn(ia);var fa=Jn((function(e){var t=e.length,r=t>1?e[t-1]:i;return r="function"==typeof r?(e.pop(),r):i,aa(e,r)}));function pa(e){var t=Fr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var ma=oi((function(e){var t=e.length,r=t?e[0]:0,n=this.__wrapped__,o=function(t){return sn(t,e)};return!(t>1||this.__actions__.length)&&n instanceof Hr&&xi(r)?((n=n.slice(r,+r+(t?1:0))).__actions__.push({func:ha,args:[o],thisArg:i}),new Wr(n,this.__chain__).thru((function(e){return t&&!e.length&&e.push(i),e}))):this.thru(o)}));var ga=Lo((function(e,t,r){$e.call(e,r)?++e[r]:an(e,r,1)}));var va=Fo(Hi),ya=Fo(qi);function ba(e,t){return(qa(e)?Rt:pn)(e,ci(t,3))}function xa(e,t){return(qa(e)?Pt:hn)(e,ci(t,3))}var wa=Lo((function(e,t,r){$e.call(e,r)?e[r].push(t):an(e,r,[t])}));var ka=Jn((function(e,t,r){var o=-1,i="function"==typeof t,a=Ka(e)?n(e.length):[];return pn(e,(function(e){a[++o]=i?Tt(t,e,r):Pn(e,t,r)})),a})),_a=Lo((function(e,t,r){an(e,r,t)}));function Sa(e,t){return(qa(e)?$t:Fn)(e,ci(t,3))}var Ea=Lo((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var ja=Jn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&wi(e,t[0],t[1])?t=[]:r>2&&wi(t[0],t[1],t[2])&&(t=[t[0]]),qn(e,yn(t,1),[])})),Ca=it||function(){return gt.Date.now()};function Ta(e,t,r){return t=r?i:t,t=e&&null==t?e.length:t,Zo(e,f,i,i,i,i,t)}function Oa(e,t){var r;if("function"!=typeof t)throw new Re(a);return e=ms(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=i),r}}var Ra=Jn((function(e,t,r){var n=1;if(r.length){var o=dr(r,ui(Ra));n|=c}return Zo(e,n,t,r,o)})),Pa=Jn((function(e,t,r){var n=3;if(r.length){var o=dr(r,ui(Pa));n|=c}return Zo(t,n,e,r,o)}));function Aa(e,t,r){var n,o,s,l,u,c,d=0,f=!1,p=!1,h=!0;if("function"!=typeof e)throw new Re(a);function m(t){var r=n,a=o;return n=o=i,d=t,l=e.apply(a,r)}function g(e){var r=e-c;return c===i||r>=t||r<0||p&&e-d>=s}function v(){var e=Ca();if(g(e))return y(e);u=Ai(v,function(e){var r=t-(e-c);return p?br(r,s-(e-d)):r}(e))}function y(e){return u=i,h&&n?m(e):(n=o=i,l)}function b(){var e=Ca(),r=g(e);if(n=arguments,o=this,c=e,r){if(u===i)return function(e){return d=e,u=Ai(v,t),f?m(e):l}(c);if(p)return So(u),u=Ai(v,t),m(c)}return u===i&&(u=Ai(v,t)),l}return t=vs(t)||0,ts(r)&&(f=!!r.leading,s=(p="maxWait"in r)?Qt(vs(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),b.cancel=function(){u!==i&&So(u),d=0,n=c=o=u=i},b.flush=function(){return u===i?l:y(Ca())},b}var La=Jn((function(e,t){return dn(e,1,t)})),Na=Jn((function(e,t,r){return dn(e,vs(t)||0,r)}));function za(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Re(a);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(za.Cache||Kr),r}function $a(e){if("function"!=typeof e)throw new Re(a);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}za.Cache=Kr;var Ma=ko((function(e,t){var r=(t=1==t.length&&qa(t[0])?$t(t[0],er(ci())):$t(yn(t,1),er(ci()))).length;return Jn((function(n){for(var o=-1,i=br(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return Tt(e,this,n)}))})),Ia=Jn((function(e,t){var r=dr(t,ui(Ia));return Zo(e,c,i,t,r)})),Da=Jn((function(e,t){var r=dr(t,ui(Da));return Zo(e,d,i,t,r)})),Fa=oi((function(e,t){return Zo(e,p,i,i,i,t)}));function Ua(e,t){return e===t||e!==e&&t!==t}var Ba=Yo(Cn),Wa=Yo((function(e,t){return e>=t})),Ha=An(function(){return arguments}())?An:function(e){return rs(e)&&$e.call(e,"callee")&&!Qe.call(e,"callee")},qa=n.isArray,Va=kt?er(kt):function(e){return rs(e)&&jn(e)==z};function Ka(e){return null!=e&&es(e.length)&&!Ga(e)}function Ya(e){return rs(e)&&Ka(e)}var Qa=yt||vl,Xa=_t?er(_t):function(e){return rs(e)&&jn(e)==k};function Ja(e){if(!rs(e))return!1;var t=jn(e);return t==_||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Ga(e){if(!ts(e))return!1;var t=jn(e);return t==S||t==E||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Za(e){return"number"==typeof e&&e==ms(e)}function es(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=m}function ts(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function rs(e){return null!=e&&"object"==typeof e}var ns=St?er(St):function(e){return rs(e)&&gi(e)==j};function os(e){return"number"==typeof e||rs(e)&&jn(e)==C}function is(e){if(!rs(e)||jn(e)!=T)return!1;var t=Ke(e);if(null===t)return!0;var r=$e.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&ze.call(r)==Fe}var as=Et?er(Et):function(e){return rs(e)&&jn(e)==R};var ss=jt?er(jt):function(e){return rs(e)&&gi(e)==P};function ls(e){return"string"==typeof e||!qa(e)&&rs(e)&&jn(e)==A}function us(e){return"symbol"==typeof e||rs(e)&&jn(e)==L}var cs=Ct?er(Ct):function(e){return rs(e)&&es(e.length)&&!!ut[jn(e)]};var ds=Yo(Dn),fs=Yo((function(e,t){return e<=t}));function ps(e){if(!e)return[];if(Ka(e))return ls(e)?mr(e):Po(e);if(Ge&&e[Ge])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Ge]());var t=gi(e);return(t==j?ur:t==P?fr:Us)(e)}function hs(e){return e?(e=vs(e))===h||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}function ms(e){var t=hs(e),r=t%1;return t===t?r?t-r:t:0}function gs(e){return e?ln(ms(e),0,v):0}function vs(e){if("number"==typeof e)return e;if(us(e))return g;if(ts(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ts(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zt(e);var r=ye.test(e);return r||xe.test(e)?pt(e.slice(2),r?2:8):ve.test(e)?g:+e}function ys(e){return Ao(e,Ls(e))}function bs(e){return null==e?"":co(e)}var xs=No((function(e,t){if(Ei(t)||Ka(t))Ao(t,As(t),e);else for(var r in t)$e.call(t,r)&&tn(e,r,t[r])})),ws=No((function(e,t){Ao(t,Ls(t),e)})),ks=No((function(e,t,r,n){Ao(t,Ls(t),e,n)})),_s=No((function(e,t,r,n){Ao(t,As(t),e,n)})),Ss=oi(sn);var Es=Jn((function(e,t){e=Ce(e);var r=-1,n=t.length,o=n>2?t[2]:i;for(o&&wi(t[0],t[1],o)&&(n=1);++r<n;)for(var a=t[r],s=Ls(a),l=-1,u=s.length;++l<u;){var c=s[l],d=e[c];(d===i||Ua(d,Le[c])&&!$e.call(e,c))&&(e[c]=a[c])}return e})),js=Jn((function(e){return e.push(i,ti),Tt(zs,i,e)}));function Cs(e,t,r){var n=null==e?i:Sn(e,t);return n===i?r:n}function Ts(e,t){return null!=e&&vi(e,t,On)}var Os=Wo((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=De.call(t)),e[t]=r}),tl(ol)),Rs=Wo((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=De.call(t)),$e.call(e,t)?e[t].push(r):e[t]=[r]}),ci),Ps=Jn(Pn);function As(e){return Ka(e)?Xr(e):Mn(e)}function Ls(e){return Ka(e)?Xr(e,!0):In(e)}var Ns=No((function(e,t,r){Wn(e,t,r)})),zs=No((function(e,t,r,n){Wn(e,t,r,n)})),$s=oi((function(e,t){var r={};if(null==e)return r;var n=!1;t=$t(t,(function(t){return t=wo(t,e),n||(n=t.length>1),t})),Ao(e,ai(e),r),n&&(r=un(r,7,ri));for(var o=t.length;o--;)po(r,t[o]);return r}));var Ms=oi((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Ts(e,r)}))}(e,t)}));function Is(e,t){if(null==e)return{};var r=$t(ai(e),(function(e){return[e]}));return t=ci(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Ds=Go(As),Fs=Go(Ls);function Us(e){return null==e?[]:tr(e,As(e))}var Bs=Io((function(e,t,r){return t=t.toLowerCase(),e+(r?Ws(t):t)}));function Ws(e){return Js(bs(e).toLowerCase())}function Hs(e){return(e=bs(e))&&e.replace(ke,ir).replace(rt,"")}var qs=Io((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=Io((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Ks=Mo("toLowerCase");var Ys=Io((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var Qs=Io((function(e,t,r){return e+(r?" ":"")+Js(t)}));var Xs=Io((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Js=Mo("toUpperCase");function Gs(e,t,r){return e=bs(e),(t=r?i:t)===i?function(e){return at.test(e)}(e)?function(e){return e.match(ot)||[]}(e):function(e){return e.match(fe)||[]}(e):e.match(t)||[]}var Zs=Jn((function(t,r){try{return Tt(t,i,r)}catch(e){return Ja(e)?e:new le(e)}})),el=oi((function(e,t){return Rt(t,(function(t){t=Ii(t),an(e,t,Ra(e[t],e))})),e}));function tl(e){return function(){return e}}var rl=Uo(),nl=Uo(!0);function ol(e){return e}function il(e){return $n("function"==typeof e?e:un(e,1))}var al=Jn((function(e,t){return function(r){return Pn(r,e,t)}})),sl=Jn((function(e,t){return function(r){return Pn(e,r,t)}}));function ll(e,t,r){var n=As(t),o=_n(t,n);null!=r||ts(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=_n(t,As(t)));var i=!(ts(r)&&"chain"in r)||!!r.chain,a=Ga(e);return Rt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Po(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ul(){}var cl=qo($t),dl=qo(At),fl=qo(Ft);function pl(e){return ki(e)?Yt(Ii(e)):function(e){return function(t){return Sn(t,e)}}(e)}var hl=Ko(),ml=Ko(!0);function gl(){return[]}function vl(){return!1}var yl=Ho((function(e,t){return e+t}),0),bl=Xo("ceil"),xl=Ho((function(e,t){return e/t}),1),wl=Xo("floor");var kl=Ho((function(e,t){return e*t}),1),_l=Xo("round"),Sl=Ho((function(e,t){return e-t}),0);return Fr.after=function(e,t){if("function"!=typeof t)throw new Re(a);return e=ms(e),function(){if(--e<1)return t.apply(this,arguments)}},Fr.ary=Ta,Fr.assign=xs,Fr.assignIn=ws,Fr.assignInWith=ks,Fr.assignWith=_s,Fr.at=Ss,Fr.before=Oa,Fr.bind=Ra,Fr.bindAll=el,Fr.bindKey=Pa,Fr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return qa(e)?e:[e]},Fr.chain=pa,Fr.chunk=function(e,t,r){t=(r?wi(e,t,r):t===i)?1:Qt(ms(t),0);var o=null==e?0:e.length;if(!o||t<1)return[];for(var a=0,s=0,l=n(ht(o/t));a<o;)l[s++]=oo(e,a,a+=t);return l},Fr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Fr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=n(e-1),r=arguments[0],o=e;o--;)t[o-1]=arguments[o];return Mt(qa(r)?Po(r):[r],yn(t,1))},Fr.cond=function(e){var t=null==e?0:e.length,r=ci();return e=t?$t(e,(function(e){if("function"!=typeof e[1])throw new Re(a);return[r(e[0]),e[1]]})):[],Jn((function(r){for(var n=-1;++n<t;){var o=e[n];if(Tt(o[0],this,r))return Tt(o[1],this,r)}}))},Fr.conforms=function(e){return function(e){var t=As(e);return function(r){return cn(r,e,t)}}(un(e,1))},Fr.constant=tl,Fr.countBy=ga,Fr.create=function(e,t){var r=Ur(e);return null==t?r:on(r,t)},Fr.curry=function e(t,r,n){var o=Zo(t,8,i,i,i,i,i,r=n?i:r);return o.placeholder=e.placeholder,o},Fr.curryRight=function e(t,r,n){var o=Zo(t,u,i,i,i,i,i,r=n?i:r);return o.placeholder=e.placeholder,o},Fr.debounce=Aa,Fr.defaults=Es,Fr.defaultsDeep=js,Fr.defer=La,Fr.delay=Na,Fr.difference=Ui,Fr.differenceBy=Bi,Fr.differenceWith=Wi,Fr.drop=function(e,t,r){var n=null==e?0:e.length;return n?oo(e,(t=r||t===i?1:ms(t))<0?0:t,n):[]},Fr.dropRight=function(e,t,r){var n=null==e?0:e.length;return n?oo(e,0,(t=n-(t=r||t===i?1:ms(t)))<0?0:t):[]},Fr.dropRightWhile=function(e,t){return e&&e.length?mo(e,ci(t,3),!0,!0):[]},Fr.dropWhile=function(e,t){return e&&e.length?mo(e,ci(t,3),!0):[]},Fr.fill=function(e,t,r,n){var o=null==e?0:e.length;return o?(r&&"number"!=typeof r&&wi(e,t,r)&&(r=0,n=o),function(e,t,r,n){var o=e.length;for((r=ms(r))<0&&(r=-r>o?0:o+r),(n=n===i||n>o?o:ms(n))<0&&(n+=o),n=r>n?0:gs(n);r<n;)e[r++]=t;return e}(e,t,r,n)):[]},Fr.filter=function(e,t){return(qa(e)?Lt:vn)(e,ci(t,3))},Fr.flatMap=function(e,t){return yn(Sa(e,t),1)},Fr.flatMapDeep=function(e,t){return yn(Sa(e,t),h)},Fr.flatMapDepth=function(e,t,r){return r=r===i?1:ms(r),yn(Sa(e,t),r)},Fr.flatten=Vi,Fr.flattenDeep=function(e){return(null==e?0:e.length)?yn(e,h):[]},Fr.flattenDepth=function(e,t){return(null==e?0:e.length)?yn(e,t=t===i?1:ms(t)):[]},Fr.flip=function(e){return Zo(e,512)},Fr.flow=rl,Fr.flowRight=nl,Fr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Fr.functions=function(e){return null==e?[]:_n(e,As(e))},Fr.functionsIn=function(e){return null==e?[]:_n(e,Ls(e))},Fr.groupBy=wa,Fr.initial=function(e){return(null==e?0:e.length)?oo(e,0,-1):[]},Fr.intersection=Yi,Fr.intersectionBy=Qi,Fr.intersectionWith=Xi,Fr.invert=Os,Fr.invertBy=Rs,Fr.invokeMap=ka,Fr.iteratee=il,Fr.keyBy=_a,Fr.keys=As,Fr.keysIn=Ls,Fr.map=Sa,Fr.mapKeys=function(e,t){var r={};return t=ci(t,3),wn(e,(function(e,n,o){an(r,t(e,n,o),e)})),r},Fr.mapValues=function(e,t){var r={};return t=ci(t,3),wn(e,(function(e,n,o){an(r,n,t(e,n,o))})),r},Fr.matches=function(e){return Un(un(e,1))},Fr.matchesProperty=function(e,t){return Bn(e,un(t,1))},Fr.memoize=za,Fr.merge=Ns,Fr.mergeWith=zs,Fr.method=al,Fr.methodOf=sl,Fr.mixin=ll,Fr.negate=$a,Fr.nthArg=function(e){return e=ms(e),Jn((function(t){return Hn(t,e)}))},Fr.omit=$s,Fr.omitBy=function(e,t){return Is(e,$a(ci(t)))},Fr.once=function(e){return Oa(2,e)},Fr.orderBy=function(e,t,r,n){return null==e?[]:(qa(t)||(t=null==t?[]:[t]),qa(r=n?i:r)||(r=null==r?[]:[r]),qn(e,t,r))},Fr.over=cl,Fr.overArgs=Ma,Fr.overEvery=dl,Fr.overSome=fl,Fr.partial=Ia,Fr.partialRight=Da,Fr.partition=Ea,Fr.pick=Ms,Fr.pickBy=Is,Fr.property=pl,Fr.propertyOf=function(e){return function(t){return null==e?i:Sn(e,t)}},Fr.pull=Gi,Fr.pullAll=Zi,Fr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Kn(e,t,ci(r,2)):e},Fr.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Kn(e,t,i,r):e},Fr.pullAt=ea,Fr.range=hl,Fr.rangeRight=ml,Fr.rearg=Fa,Fr.reject=function(e,t){return(qa(e)?Lt:vn)(e,$a(ci(t,3)))},Fr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ci(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Yn(e,o),r},Fr.rest=function(e,t){if("function"!=typeof e)throw new Re(a);return Jn(e,t=t===i?t:ms(t))},Fr.reverse=ta,Fr.sampleSize=function(e,t,r){return t=(r?wi(e,t,r):t===i)?1:ms(t),(qa(e)?Gr:Zn)(e,t)},Fr.set=function(e,t,r){return null==e?e:eo(e,t,r)},Fr.setWith=function(e,t,r,n){return n="function"==typeof n?n:i,null==e?e:eo(e,t,r,n)},Fr.shuffle=function(e){return(qa(e)?Zr:no)(e)},Fr.slice=function(e,t,r){var n=null==e?0:e.length;return n?(r&&"number"!=typeof r&&wi(e,t,r)?(t=0,r=n):(t=null==t?0:ms(t),r=r===i?n:ms(r)),oo(e,t,r)):[]},Fr.sortBy=ja,Fr.sortedUniq=function(e){return e&&e.length?lo(e):[]},Fr.sortedUniqBy=function(e,t){return e&&e.length?lo(e,ci(t,2)):[]},Fr.split=function(e,t,r){return r&&"number"!=typeof r&&wi(e,t,r)&&(t=r=i),(r=r===i?v:r>>>0)?(e=bs(e))&&("string"==typeof t||null!=t&&!as(t))&&!(t=co(t))&&lr(e)?_o(mr(e),0,r):e.split(t,r):[]},Fr.spread=function(e,t){if("function"!=typeof e)throw new Re(a);return t=null==t?0:Qt(ms(t),0),Jn((function(r){var n=r[t],o=_o(r,0,t);return n&&Mt(o,n),Tt(e,this,o)}))},Fr.tail=function(e){var t=null==e?0:e.length;return t?oo(e,1,t):[]},Fr.take=function(e,t,r){return e&&e.length?oo(e,0,(t=r||t===i?1:ms(t))<0?0:t):[]},Fr.takeRight=function(e,t,r){var n=null==e?0:e.length;return n?oo(e,(t=n-(t=r||t===i?1:ms(t)))<0?0:t,n):[]},Fr.takeRightWhile=function(e,t){return e&&e.length?mo(e,ci(t,3),!1,!0):[]},Fr.takeWhile=function(e,t){return e&&e.length?mo(e,ci(t,3)):[]},Fr.tap=function(e,t){return t(e),e},Fr.throttle=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new Re(a);return ts(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Aa(e,t,{leading:n,maxWait:t,trailing:o})},Fr.thru=ha,Fr.toArray=ps,Fr.toPairs=Ds,Fr.toPairsIn=Fs,Fr.toPath=function(e){return qa(e)?$t(e,Ii):us(e)?[e]:Po(Mi(bs(e)))},Fr.toPlainObject=ys,Fr.transform=function(e,t,r){var n=qa(e),o=n||Qa(e)||cs(e);if(t=ci(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:ts(e)&&Ga(i)?Ur(Ke(e)):{}}return(o?Rt:wn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Fr.unary=function(e){return Ta(e,1)},Fr.union=ra,Fr.unionBy=na,Fr.unionWith=oa,Fr.uniq=function(e){return e&&e.length?fo(e):[]},Fr.uniqBy=function(e,t){return e&&e.length?fo(e,ci(t,2)):[]},Fr.uniqWith=function(e,t){return t="function"==typeof t?t:i,e&&e.length?fo(e,i,t):[]},Fr.unset=function(e,t){return null==e||po(e,t)},Fr.unzip=ia,Fr.unzipWith=aa,Fr.update=function(e,t,r){return null==e?e:ho(e,t,xo(r))},Fr.updateWith=function(e,t,r,n){return n="function"==typeof n?n:i,null==e?e:ho(e,t,xo(r),n)},Fr.values=Us,Fr.valuesIn=function(e){return null==e?[]:tr(e,Ls(e))},Fr.without=sa,Fr.words=Gs,Fr.wrap=function(e,t){return Ia(xo(t),e)},Fr.xor=la,Fr.xorBy=ua,Fr.xorWith=ca,Fr.zip=da,Fr.zipObject=function(e,t){return yo(e||[],t||[],tn)},Fr.zipObjectDeep=function(e,t){return yo(e||[],t||[],eo)},Fr.zipWith=fa,Fr.entries=Ds,Fr.entriesIn=Fs,Fr.extend=ws,Fr.extendWith=ks,ll(Fr,Fr),Fr.add=yl,Fr.attempt=Zs,Fr.camelCase=Bs,Fr.capitalize=Ws,Fr.ceil=bl,Fr.clamp=function(e,t,r){return r===i&&(r=t,t=i),r!==i&&(r=(r=vs(r))===r?r:0),t!==i&&(t=(t=vs(t))===t?t:0),ln(vs(e),t,r)},Fr.clone=function(e){return un(e,4)},Fr.cloneDeep=function(e){return un(e,5)},Fr.cloneDeepWith=function(e,t){return un(e,5,t="function"==typeof t?t:i)},Fr.cloneWith=function(e,t){return un(e,4,t="function"==typeof t?t:i)},Fr.conformsTo=function(e,t){return null==t||cn(e,t,As(t))},Fr.deburr=Hs,Fr.defaultTo=function(e,t){return null==e||e!==e?t:e},Fr.divide=xl,Fr.endsWith=function(e,t,r){e=bs(e),t=co(t);var n=e.length,o=r=r===i?n:ln(ms(r),0,n);return(r-=t.length)>=0&&e.slice(r,o)==t},Fr.eq=Ua,Fr.escape=function(e){return(e=bs(e))&&G.test(e)?e.replace(X,ar):e},Fr.escapeRegExp=function(e){return(e=bs(e))&&ae.test(e)?e.replace(ie,"\\$&"):e},Fr.every=function(e,t,r){var n=qa(e)?At:mn;return r&&wi(e,t,r)&&(t=i),n(e,ci(t,3))},Fr.find=va,Fr.findIndex=Hi,Fr.findKey=function(e,t){return Bt(e,ci(t,3),wn)},Fr.findLast=ya,Fr.findLastIndex=qi,Fr.findLastKey=function(e,t){return Bt(e,ci(t,3),kn)},Fr.floor=wl,Fr.forEach=ba,Fr.forEachRight=xa,Fr.forIn=function(e,t){return null==e?e:bn(e,ci(t,3),Ls)},Fr.forInRight=function(e,t){return null==e?e:xn(e,ci(t,3),Ls)},Fr.forOwn=function(e,t){return e&&wn(e,ci(t,3))},Fr.forOwnRight=function(e,t){return e&&kn(e,ci(t,3))},Fr.get=Cs,Fr.gt=Ba,Fr.gte=Wa,Fr.has=function(e,t){return null!=e&&vi(e,t,Tn)},Fr.hasIn=Ts,Fr.head=Ki,Fr.identity=ol,Fr.includes=function(e,t,r,n){e=Ka(e)?e:Us(e),r=r&&!n?ms(r):0;var o=e.length;return r<0&&(r=Qt(o+r,0)),ls(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Ht(e,t,r)>-1},Fr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ms(r);return o<0&&(o=Qt(n+o,0)),Ht(e,t,o)},Fr.inRange=function(e,t,r){return t=hs(t),r===i?(r=t,t=0):r=hs(r),function(e,t,r){return e>=br(t,r)&&e<Qt(t,r)}(e=vs(e),t,r)},Fr.invoke=Ps,Fr.isArguments=Ha,Fr.isArray=qa,Fr.isArrayBuffer=Va,Fr.isArrayLike=Ka,Fr.isArrayLikeObject=Ya,Fr.isBoolean=function(e){return!0===e||!1===e||rs(e)&&jn(e)==w},Fr.isBuffer=Qa,Fr.isDate=Xa,Fr.isElement=function(e){return rs(e)&&1===e.nodeType&&!is(e)},Fr.isEmpty=function(e){if(null==e)return!0;if(Ka(e)&&(qa(e)||"string"==typeof e||"function"==typeof e.splice||Qa(e)||cs(e)||Ha(e)))return!e.length;var t=gi(e);if(t==j||t==P)return!e.size;if(Ei(e))return!Mn(e).length;for(var r in e)if($e.call(e,r))return!1;return!0},Fr.isEqual=function(e,t){return Ln(e,t)},Fr.isEqualWith=function(e,t,r){var n=(r="function"==typeof r?r:i)?r(e,t):i;return n===i?Ln(e,t,i,r):!!n},Fr.isError=Ja,Fr.isFinite=function(e){return"number"==typeof e&&xt(e)},Fr.isFunction=Ga,Fr.isInteger=Za,Fr.isLength=es,Fr.isMap=ns,Fr.isMatch=function(e,t){return e===t||Nn(e,t,fi(t))},Fr.isMatchWith=function(e,t,r){return r="function"==typeof r?r:i,Nn(e,t,fi(t),r)},Fr.isNaN=function(e){return os(e)&&e!=+e},Fr.isNative=function(e){if(Si(e))throw new le("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return zn(e)},Fr.isNil=function(e){return null==e},Fr.isNull=function(e){return null===e},Fr.isNumber=os,Fr.isObject=ts,Fr.isObjectLike=rs,Fr.isPlainObject=is,Fr.isRegExp=as,Fr.isSafeInteger=function(e){return Za(e)&&e>=-9007199254740991&&e<=m},Fr.isSet=ss,Fr.isString=ls,Fr.isSymbol=us,Fr.isTypedArray=cs,Fr.isUndefined=function(e){return e===i},Fr.isWeakMap=function(e){return rs(e)&&gi(e)==N},Fr.isWeakSet=function(e){return rs(e)&&"[object WeakSet]"==jn(e)},Fr.join=function(e,t){return null==e?"":wt.call(e,t)},Fr.kebabCase=qs,Fr.last=Ji,Fr.lastIndexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=n;return r!==i&&(o=(o=ms(r))<0?Qt(n+o,0):br(o,n-1)),t===t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,o):Wt(e,Vt,o,!0)},Fr.lowerCase=Vs,Fr.lowerFirst=Ks,Fr.lt=ds,Fr.lte=fs,Fr.max=function(e){return e&&e.length?gn(e,ol,Cn):i},Fr.maxBy=function(e,t){return e&&e.length?gn(e,ci(t,2),Cn):i},Fr.mean=function(e){return Kt(e,ol)},Fr.meanBy=function(e,t){return Kt(e,ci(t,2))},Fr.min=function(e){return e&&e.length?gn(e,ol,Dn):i},Fr.minBy=function(e,t){return e&&e.length?gn(e,ci(t,2),Dn):i},Fr.stubArray=gl,Fr.stubFalse=vl,Fr.stubObject=function(){return{}},Fr.stubString=function(){return""},Fr.stubTrue=function(){return!0},Fr.multiply=kl,Fr.nth=function(e,t){return e&&e.length?Hn(e,ms(t)):i},Fr.noConflict=function(){return gt._===this&&(gt._=Ue),this},Fr.noop=ul,Fr.now=Ca,Fr.pad=function(e,t,r){e=bs(e);var n=(t=ms(t))?hr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(mt(o),r)+e+Vo(ht(o),r)},Fr.padEnd=function(e,t,r){e=bs(e);var n=(t=ms(t))?hr(e):0;return t&&n<t?e+Vo(t-n,r):e},Fr.padStart=function(e,t,r){e=bs(e);var n=(t=ms(t))?hr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Fr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),wr(bs(e).replace(se,""),t||0)},Fr.random=function(e,t,r){if(r&&"boolean"!=typeof r&&wi(e,t,r)&&(t=r=i),r===i&&("boolean"==typeof t?(r=t,t=i):"boolean"==typeof e&&(r=e,e=i)),e===i&&t===i?(e=0,t=1):(e=hs(e),t===i?(t=e,e=0):t=hs(t)),e>t){var n=e;e=t,t=n}if(r||e%1||t%1){var o=kr();return br(e+o*(t-e+ft("1e-"+((o+"").length-1))),t)}return Qn(e,t)},Fr.reduce=function(e,t,r){var n=qa(e)?It:Xt,o=arguments.length<3;return n(e,ci(t,4),r,o,pn)},Fr.reduceRight=function(e,t,r){var n=qa(e)?Dt:Xt,o=arguments.length<3;return n(e,ci(t,4),r,o,hn)},Fr.repeat=function(e,t,r){return t=(r?wi(e,t,r):t===i)?1:ms(t),Xn(bs(e),t)},Fr.replace=function(){var e=arguments,t=bs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Fr.result=function(e,t,r){var n=-1,o=(t=wo(t,e)).length;for(o||(o=1,e=i);++n<o;){var a=null==e?i:e[Ii(t[n])];a===i&&(n=o,a=r),e=Ga(a)?a.call(e):a}return e},Fr.round=_l,Fr.runInContext=t,Fr.sample=function(e){return(qa(e)?Jr:Gn)(e)},Fr.size=function(e){if(null==e)return 0;if(Ka(e))return ls(e)?hr(e):e.length;var t=gi(e);return t==j||t==P?e.size:Mn(e).length},Fr.snakeCase=Ys,Fr.some=function(e,t,r){var n=qa(e)?Ft:io;return r&&wi(e,t,r)&&(t=i),n(e,ci(t,3))},Fr.sortedIndex=function(e,t){return ao(e,t)},Fr.sortedIndexBy=function(e,t,r){return so(e,t,ci(r,2))},Fr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=ao(e,t);if(n<r&&Ua(e[n],t))return n}return-1},Fr.sortedLastIndex=function(e,t){return ao(e,t,!0)},Fr.sortedLastIndexBy=function(e,t,r){return so(e,t,ci(r,2),!0)},Fr.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=ao(e,t,!0)-1;if(Ua(e[r],t))return r}return-1},Fr.startCase=Qs,Fr.startsWith=function(e,t,r){return e=bs(e),r=null==r?0:ln(ms(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Fr.subtract=Sl,Fr.sum=function(e){return e&&e.length?Jt(e,ol):0},Fr.sumBy=function(e,t){return e&&e.length?Jt(e,ci(t,2)):0},Fr.template=function(e,t,r){var n=Fr.templateSettings;r&&wi(e,t,r)&&(t=i),e=bs(e),t=ks({},t,n,ei);var o,a,s=ks({},t.imports,n.imports,ei),l=As(s),u=tr(s,l),c=0,d=t.interpolate||_e,f="__p += '",p=Te((t.escape||_e).source+"|"+d.source+"|"+(d===te?me:_e).source+"|"+(t.evaluate||_e).source+"|$","g"),h="//# sourceURL="+($e.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++lt+"]")+"\n";e.replace(p,(function(t,r,n,i,s,l){return n||(n=i),f+=e.slice(c,l).replace(Se,sr),r&&(o=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+t.length,t})),f+="';\n";var m=$e.call(t,"variable")&&t.variable;if(m){if(pe.test(m))throw new le("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(V,""):f).replace(K,"$1").replace(Y,"$1;"),f="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var g=Zs((function(){return Ee(l,h+"return "+f).apply(i,u)}));if(g.source=f,Ja(g))throw g;return g},Fr.times=function(e,t){if((e=ms(e))<1||e>m)return[];var r=v,n=br(e,v);t=ci(t),e-=v;for(var o=Gt(n,t);++r<e;)t(r);return o},Fr.toFinite=hs,Fr.toInteger=ms,Fr.toLength=gs,Fr.toLower=function(e){return bs(e).toLowerCase()},Fr.toNumber=vs,Fr.toSafeInteger=function(e){return e?ln(ms(e),-9007199254740991,m):0===e?e:0},Fr.toString=bs,Fr.toUpper=function(e){return bs(e).toUpperCase()},Fr.trim=function(e,t,r){if((e=bs(e))&&(r||t===i))return Zt(e);if(!e||!(t=co(t)))return e;var n=mr(e),o=mr(t);return _o(n,nr(n,o),or(n,o)+1).join("")},Fr.trimEnd=function(e,t,r){if((e=bs(e))&&(r||t===i))return e.slice(0,gr(e)+1);if(!e||!(t=co(t)))return e;var n=mr(e);return _o(n,0,or(n,mr(t))+1).join("")},Fr.trimStart=function(e,t,r){if((e=bs(e))&&(r||t===i))return e.replace(se,"");if(!e||!(t=co(t)))return e;var n=mr(e);return _o(n,nr(n,mr(t))).join("")},Fr.truncate=function(e,t){var r=30,n="...";if(ts(t)){var o="separator"in t?t.separator:o;r="length"in t?ms(t.length):r,n="omission"in t?co(t.omission):n}var a=(e=bs(e)).length;if(lr(e)){var s=mr(e);a=s.length}if(r>=a)return e;var l=r-hr(n);if(l<1)return n;var u=s?_o(s,0,l).join(""):e.slice(0,l);if(o===i)return u+n;if(s&&(l+=u.length-l),as(o)){if(e.slice(l).search(o)){var c,d=u;for(o.global||(o=Te(o.source,bs(ge.exec(o))+"g")),o.lastIndex=0;c=o.exec(d);)var f=c.index;u=u.slice(0,f===i?l:f)}}else if(e.indexOf(co(o),l)!=l){var p=u.lastIndexOf(o);p>-1&&(u=u.slice(0,p))}return u+n},Fr.unescape=function(e){return(e=bs(e))&&J.test(e)?e.replace(Q,vr):e},Fr.uniqueId=function(e){var t=++Me;return bs(e)+t},Fr.upperCase=Xs,Fr.upperFirst=Js,Fr.each=ba,Fr.eachRight=xa,Fr.first=Ki,ll(Fr,function(){var e={};return wn(Fr,(function(t,r){$e.call(Fr.prototype,r)||(e[r]=t)})),e}(),{chain:!1}),Fr.VERSION="4.17.21",Rt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Fr[e].placeholder=Fr})),Rt(["drop","take"],(function(e,t){Hr.prototype[e]=function(r){r=r===i?1:Qt(ms(r),0);var n=this.__filtered__&&!t?new Hr(this):this.clone();return n.__filtered__?n.__takeCount__=br(r,n.__takeCount__):n.__views__.push({size:br(r,v),type:e+(n.__dir__<0?"Right":"")}),n},Hr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Rt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Hr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ci(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Rt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Hr.prototype[e]=function(){return this[r](1).value()[0]}})),Rt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Hr.prototype[e]=function(){return this.__filtered__?new Hr(this):this[r](1)}})),Hr.prototype.compact=function(){return this.filter(ol)},Hr.prototype.find=function(e){return this.filter(e).head()},Hr.prototype.findLast=function(e){return this.reverse().find(e)},Hr.prototype.invokeMap=Jn((function(e,t){return"function"==typeof e?new Hr(this):this.map((function(r){return Pn(r,e,t)}))})),Hr.prototype.reject=function(e){return this.filter($a(ci(e)))},Hr.prototype.slice=function(e,t){e=ms(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Hr(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==i&&(r=(t=ms(t))<0?r.dropRight(-t):r.take(t-e)),r)},Hr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Hr.prototype.toArray=function(){return this.take(v)},wn(Hr.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),n=/^(?:head|last)$/.test(t),o=Fr[n?"take"+("last"==t?"Right":""):t],a=n||/^find/.test(t);o&&(Fr.prototype[t]=function(){var t=this.__wrapped__,s=n?[1]:arguments,l=t instanceof Hr,u=s[0],c=l||qa(t),d=function(e){var t=o.apply(Fr,Mt([e],s));return n&&f?t[0]:t};c&&r&&"function"==typeof u&&1!=u.length&&(l=c=!1);var f=this.__chain__,p=!!this.__actions__.length,h=a&&!f,m=l&&!p;if(!a&&c){t=m?t:new Hr(this);var g=e.apply(t,s);return g.__actions__.push({func:ha,args:[d],thisArg:i}),new Wr(g,f)}return h&&m?e.apply(this,s):(g=this.thru(d),h?n?g.value()[0]:g.value():g)})})),Rt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Pe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Fr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(qa(o)?o:[],e)}return this[r]((function(r){return t.apply(qa(r)?r:[],e)}))}})),wn(Hr.prototype,(function(e,t){var r=Fr[t];if(r){var n=r.name+"";$e.call(Pr,n)||(Pr[n]=[]),Pr[n].push({name:t,func:r})}})),Pr[Bo(i,2).name]=[{name:"wrapper",func:i}],Hr.prototype.clone=function(){var e=new Hr(this.__wrapped__);return e.__actions__=Po(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Po(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Po(this.__views__),e},Hr.prototype.reverse=function(){if(this.__filtered__){var e=new Hr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Hr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=qa(e),n=t<0,o=r?e.length:0,i=function(e,t,r){var n=-1,o=r.length;for(;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=br(t,e+a);break;case"takeRight":e=Qt(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,u=n?s:a-1,c=this.__iteratees__,d=c.length,f=0,p=br(l,this.__takeCount__);if(!r||!n&&o==l&&p==l)return go(e,this.__actions__);var h=[];e:for(;l--&&f<p;){for(var m=-1,g=e[u+=t];++m<d;){var v=c[m],y=v.iteratee,b=v.type,x=y(g);if(2==b)g=x;else if(!x){if(1==b)continue e;break e}}h[f++]=g}return h},Fr.prototype.at=ma,Fr.prototype.chain=function(){return pa(this)},Fr.prototype.commit=function(){return new Wr(this.value(),this.__chain__)},Fr.prototype.next=function(){this.__values__===i&&(this.__values__=ps(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?i:this.__values__[this.__index__++]}},Fr.prototype.plant=function(e){for(var t,r=this;r instanceof Br;){var n=Fi(r);n.__index__=0,n.__values__=i,t?o.__wrapped__=n:t=n;var o=n;r=r.__wrapped__}return o.__wrapped__=e,t},Fr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Hr){var t=e;return this.__actions__.length&&(t=new Hr(this)),(t=t.reverse()).__actions__.push({func:ha,args:[ta],thisArg:i}),new Wr(t,this.__chain__)}return this.thru(ta)},Fr.prototype.toJSON=Fr.prototype.valueOf=Fr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Fr.prototype.first=Fr.prototype.head,Ge&&(Fr.prototype[Ge]=function(){return this}),Fr}();gt._=yr,(o=function(){return yr}.call(r,n,r,t))===i||(t.exports=o)}.call(this)},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(t,r,n)=>{"use strict";var o=n(43),i=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},m={};function g(e,t,r,n,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){v[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];v[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){v[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){v[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){v[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){v[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){v[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){v[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){v[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function x(e,t,r,n){var o=v.hasOwnProperty(t)?v[t]:null;(null!==o?0!==o.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!f.call(m,e)||!f.call(h,e)&&(p.test(e)?m[e]=!0:(h[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,b);v[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,b);v[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,b);v[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){v[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),v.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){v[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),_=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),T=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),L=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function $(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var M,I=Object.assign;function D(e){if(void 0===M)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return"\n"+M+e}var F=!1;function U(e,t){if(!e||F)return"";F=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),i=n.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?D(e):""}function B(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1);case 11:return e=U(e.type.render,!1);case 1:return e=U(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case _:return"Portal";case j:return"Profiler";case E:return"StrictMode";case R:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return W(e(t))}catch(r){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=V(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function J(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=q(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function Z(e,t){G(e,t);var r=q(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?te(e,t.type,r):t.hasOwnProperty("defaultValue")&&te(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ee(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function te(e,t,r){"number"===t&&Q(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var re=Array.isArray;function ne(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+q(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function oe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(a(92));if(re(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:q(r)}}function ae(e,t){var r=q(t.value),n=q(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ue(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,fe=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return de(e,t)}))}:de);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function ge(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ve(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=ge(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(he).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var ye=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,Se=null,Ee=null;function je(e){if(e=wo(e)){if("function"!==typeof _e)throw Error(a(280));var t=e.stateNode;t&&(t=_o(t),_e(e.stateNode,e.type,t))}}function Ce(e){Se?Ee?Ee.push(e):Ee=[e]:Se=e}function Te(){if(Se){var e=Se,t=Ee;if(Ee=Se=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Oe(e,t){return e(t)}function Re(){}var Pe=!1;function Ae(e,t,r){if(Pe)return e(t,r);Pe=!0;try{return Oe(e,t,r)}finally{Pe=!1,(null!==Se||null!==Ee)&&(Re(),Te())}}function Le(e,t){var r=e.stateNode;if(null===r)return null;var n=_o(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(a(231,t,typeof r));return r}var Ne=!1;if(d)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(de){Ne=!1}function $e(e,t,r,n,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var Me=!1,Ie=null,De=!1,Fe=null,Ue={onError:function(e){Me=!0,Ie=e}};function Be(e,t,r,n,o,i,a,s,l){Me=!1,Ie=null,$e.apply(Ue,arguments)}function We(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(We(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(a(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(n=o.return)){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return qe(o),e;if(i===n)return qe(o),t;i=i.sibling}throw Error(a(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s)throw Error(a(189))}}if(r.alternate!==n)throw Error(a(190))}if(3!==r.tag)throw Error(a(188));return r.stateNode.current===r?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,Qe=i.unstable_cancelCallback,Xe=i.unstable_shouldYield,Je=i.unstable_requestPaint,Ge=i.unstable_now,Ze=i.unstable_getCurrentPriorityLevel,et=i.unstable_ImmediatePriority,tt=i.unstable_UserBlockingPriority,rt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,ot=i.unstable_IdlePriority,it=null,at=null;var st=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/ut|0)|0},lt=Math.log,ut=Math.LN2;var ct=64,dt=4194304;function ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&r;if(0!==a){var s=a&~o;0!==s?n=ft(s):0!==(i&=a)&&(n=ft(i))}else 0!==(a=r&~o)?n=ft(a):0!==i&&(n=ft(i));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&o)&&((o=n&-n)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-st(t)),n|=e[r],t&=~o;return n}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function vt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function yt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-st(t)]=r}function bt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-st(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var xt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,_t,St,Et,jt,Ct=!1,Tt=[],Ot=null,Rt=null,Pt=null,At=new Map,Lt=new Map,Nt=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $t(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":At.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lt.delete(t.pointerId)}}function Mt(e,t,r,n,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=wo(t))&&_t(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function It(e){var t=xo(e.target);if(null!==t){var r=We(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=He(r)))return e.blockedOn=t,void jt(e.priority,(function(){St(r)}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=wo(r))&&_t(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);we=n,r.target.dispatchEvent(n),we=null,t.shift()}return!0}function Ft(e,t,r){Dt(e)&&r.delete(t)}function Ut(){Ct=!1,null!==Ot&&Dt(Ot)&&(Ot=null),null!==Rt&&Dt(Rt)&&(Rt=null),null!==Pt&&Dt(Pt)&&(Pt=null),At.forEach(Ft),Lt.forEach(Ft)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ut)))}function Wt(e){function t(t){return Bt(t,e)}if(0<Tt.length){Bt(Tt[0],e);for(var r=1;r<Tt.length;r++){var n=Tt[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==Ot&&Bt(Ot,e),null!==Rt&&Bt(Rt,e),null!==Pt&&Bt(Pt,e),At.forEach(t),Lt.forEach(t),r=0;r<Nt.length;r++)(n=Nt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&null===(r=Nt[0]).blockedOn;)It(r),null===r.blockedOn&&Nt.shift()}var Ht=w.ReactCurrentBatchConfig,qt=!0;function Vt(e,t,r,n){var o=xt,i=Ht.transition;Ht.transition=null;try{xt=1,Yt(e,t,r,n)}finally{xt=o,Ht.transition=i}}function Kt(e,t,r,n){var o=xt,i=Ht.transition;Ht.transition=null;try{xt=4,Yt(e,t,r,n)}finally{xt=o,Ht.transition=i}}function Yt(e,t,r,n){if(qt){var o=Xt(e,t,r,n);if(null===o)qn(e,t,n,Qt,r),$t(e,n);else if(function(e,t,r,n,o){switch(t){case"focusin":return Ot=Mt(Ot,e,t,r,n,o),!0;case"dragenter":return Rt=Mt(Rt,e,t,r,n,o),!0;case"mouseover":return Pt=Mt(Pt,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return At.set(i,Mt(At.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Lt.set(i,Mt(Lt.get(i)||null,e,t,r,n,o)),!0}return!1}(o,e,t,r,n))n.stopPropagation();else if($t(e,n),4&t&&-1<zt.indexOf(e)){for(;null!==o;){var i=wo(o);if(null!==i&&kt(i),null===(i=Xt(e,t,r,n))&&qn(e,t,n,Qt,r),i===o)break;o=i}null!==o&&n.stopPropagation()}else qn(e,t,n,null,r)}}var Qt=null;function Xt(e,t,r,n){if(Qt=null,null!==(e=xo(e=ke(n))))if(null===(t=We(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Jt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case et:return 1;case tt:return 4;case rt:case nt:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Gt=null,Zt=null,er=null;function tr(){if(er)return er;var e,t,r=Zt,n=r.length,o="value"in Gt?Gt.value:Gt.textContent,i=o.length;for(e=0;e<n&&r[e]===o[e];e++);var a=n-e;for(t=1;t<=a&&r[n-t]===o[i-t];t++);return er=o.slice(e,1<t?1-t:void 0)}function rr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nr(){return!0}function or(){return!1}function ir(e){function t(t,r,n,o,i){for(var a in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nr:or,this.isPropagationStopped=or,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),t}var ar,sr,lr,ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=ir(ur),dr=I({},ur,{view:0,detail:0}),fr=ir(dr),pr=I({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Er,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(ar=e.screenX-lr.screenX,sr=e.screenY-lr.screenY):sr=ar=0,lr=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:sr}}),hr=ir(pr),mr=ir(I({},pr,{dataTransfer:0})),gr=ir(I({},dr,{relatedTarget:0})),vr=ir(I({},ur,{animationName:0,elapsedTime:0,pseudoElement:0})),yr=I({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),br=ir(yr),xr=ir(I({},ur,{data:0})),wr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=_r[e])&&!!t[e]}function Er(){return Sr}var jr=I({},dr,{key:function(e){if(e.key){var t=wr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=rr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Er,charCode:function(e){return"keypress"===e.type?rr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?rr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cr=ir(jr),Tr=ir(I({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Or=ir(I({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Er})),Rr=ir(I({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0})),Pr=I({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ar=ir(Pr),Lr=[9,13,27,32],Nr=d&&"CompositionEvent"in window,zr=null;d&&"documentMode"in document&&(zr=document.documentMode);var $r=d&&"TextEvent"in window&&!zr,Mr=d&&(!Nr||zr&&8<zr&&11>=zr),Ir=String.fromCharCode(32),Dr=!1;function Fr(e,t){switch(e){case"keyup":return-1!==Lr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ur(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var Wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wr[e.type]:"textarea"===t}function qr(e,t,r,n){Ce(n),0<(t=Kn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Vr=null,Kr=null;function Yr(e){Dn(e,0)}function Qr(e){if(Y(ko(e)))return e}function Xr(e,t){if("change"===e)return t}var Jr=!1;if(d){var Gr;if(d){var Zr="oninput"in document;if(!Zr){var en=document.createElement("div");en.setAttribute("oninput","return;"),Zr="function"===typeof en.oninput}Gr=Zr}else Gr=!1;Jr=Gr&&(!document.documentMode||9<document.documentMode)}function tn(){Vr&&(Vr.detachEvent("onpropertychange",rn),Kr=Vr=null)}function rn(e){if("value"===e.propertyName&&Qr(Kr)){var t=[];qr(t,Kr,e,ke(e)),Ae(Yr,t)}}function nn(e,t,r){"focusin"===e?(tn(),Kr=r,(Vr=t).attachEvent("onpropertychange",rn)):"focusout"===e&&tn()}function on(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qr(Kr)}function an(e,t){if("click"===e)return Qr(t)}function sn(e,t){if("input"===e||"change"===e)return Qr(t)}var ln="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function un(e,t){if(ln(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!f.call(t,o)||!ln(e[o],t[o]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dn(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function fn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?fn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=Q((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fn(r.ownerDocument.documentElement,r)){if(null!==n&&hn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=void 0===n.end?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=dn(r,i);var a=dn(r,n);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gn=d&&"documentMode"in document&&11>=document.documentMode,vn=null,yn=null,bn=null,xn=!1;function wn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;xn||null==vn||vn!==Q(n)||("selectionStart"in(n=vn)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},bn&&un(bn,n)||(bn=n,0<(n=Kn(yn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=vn)))}function kn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var _n={animationend:kn("Animation","AnimationEnd"),animationiteration:kn("Animation","AnimationIteration"),animationstart:kn("Animation","AnimationStart"),transitionend:kn("Transition","TransitionEnd")},Sn={},En={};function jn(e){if(Sn[e])return Sn[e];if(!_n[e])return e;var t,r=_n[e];for(t in r)if(r.hasOwnProperty(t)&&t in En)return Sn[e]=r[t];return e}d&&(En=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);var Cn=jn("animationend"),Tn=jn("animationiteration"),On=jn("animationstart"),Rn=jn("transitionend"),Pn=new Map,An="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){Pn.set(e,t),u(t,[e])}for(var Nn=0;Nn<An.length;Nn++){var zn=An[Nn];Ln(zn.toLowerCase(),"on"+(zn[0].toUpperCase()+zn.slice(1)))}Ln(Cn,"onAnimationEnd"),Ln(Tn,"onAnimationIteration"),Ln(On,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Rn,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mn=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function In(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,i,s,l,u){if(Be.apply(this,arguments),Me){if(!Me)throw Error(a(198));var c=Ie;Me=!1,Ie=null,De||(De=!0,Fe=c)}}(n,t,void 0,e),e.currentTarget=null}function Dn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;In(o,s,u),i=l}else for(a=0;a<n.length;a++){if(l=(s=n[a]).instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;In(o,s,u),i=l}}}if(De)throw e=Fe,De=!1,Fe=null,e}function Fn(e,t){var r=t[vo];void 0===r&&(r=t[vo]=new Set);var n=e+"__bubble";r.has(n)||(Hn(t,e,2,!1),r.add(n))}function Un(e,t,r){var n=0;t&&(n|=4),Hn(r,e,n,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[Bn]){e[Bn]=!0,s.forEach((function(t){"selectionchange"!==t&&(Mn.has(t)||Un(t,!1,e),Un(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bn]||(t[Bn]=!0,Un("selectionchange",!1,t))}}function Hn(e,t,r,n){switch(Jt(t)){case 1:var o=Vt;break;case 4:o=Kt;break;default:o=Yt}r=o.bind(null,t,r,e),o=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function qn(e,t,r,n,o){var i=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var a=n.tag;if(3===a||4===a){var s=n.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=n.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=xo(s)))return;if(5===(l=a.tag)||6===l){n=i=a;continue e}s=s.parentNode}}n=n.return}Ae((function(){var n=i,o=ke(r),a=[];e:{var s=Pn.get(e);if(void 0!==s){var l=cr,u=e;switch(e){case"keypress":if(0===rr(r))break e;case"keydown":case"keyup":l=Cr;break;case"focusin":u="focus",l=gr;break;case"focusout":u="blur",l=gr;break;case"beforeblur":case"afterblur":l=gr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Or;break;case Cn:case Tn:case On:l=vr;break;case Rn:l=Rr;break;case"scroll":l=fr;break;case"wheel":l=Ar;break;case"copy":case"cut":case"paste":l=br;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tr}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=n;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Le(h,f))&&c.push(Vn(h,m,p)))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,r,o),a.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||r===we||!(u=r.relatedTarget||r.fromElement)||!xo(u)&&!u[go])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=n,null!==(u=(u=r.relatedTarget||r.toElement)?xo(u):null)&&(u!==(d=We(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=n),l!==u)){if(c=hr,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tr,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:ko(l),p=null==u?s:ko(u),(s=new c(m,h+"leave",l,r,o)).target=d,s.relatedTarget=p,m=null,xo(o)===n&&((c=new c(f,h+"enter",u,r,o)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,h=0,p=c=l;p;p=Yn(p))h++;for(p=0,m=f;m;m=Yn(m))p++;for(;0<h-p;)c=Yn(c),h--;for(;0<p-h;)f=Yn(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Yn(c),f=Yn(f)}c=null}else c=null;null!==l&&Qn(a,s,l,c,!1),null!==u&&null!==d&&Qn(a,d,u,c,!0)}if("select"===(l=(s=n?ko(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Xr;else if(Hr(s))if(Jr)g=sn;else{g=on;var v=nn}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=an);switch(g&&(g=g(e,n))?qr(a,g,r,o):(v&&v(e,s,n),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&te(s,"number",s.value)),v=n?ko(n):window,e){case"focusin":(Hr(v)||"true"===v.contentEditable)&&(vn=v,yn=n,bn=null);break;case"focusout":bn=yn=vn=null;break;case"mousedown":xn=!0;break;case"contextmenu":case"mouseup":case"dragend":xn=!1,wn(a,r,o);break;case"selectionchange":if(gn)break;case"keydown":case"keyup":wn(a,r,o)}var y;if(Nr)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Br?Fr(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(Mr&&"ko"!==r.locale&&(Br||"onCompositionStart"!==b?"onCompositionEnd"===b&&Br&&(y=tr()):(Zt="value"in(Gt=o)?Gt.value:Gt.textContent,Br=!0)),0<(v=Kn(n,b)).length&&(b=new xr(b,e,null,r,o),a.push({event:b,listeners:v}),y?b.data=y:null!==(y=Ur(r))&&(b.data=y))),(y=$r?function(e,t){switch(e){case"compositionend":return Ur(t);case"keypress":return 32!==t.which?null:(Dr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Dr?null:e;default:return null}}(e,r):function(e,t){if(Br)return"compositionend"===e||!Nr&&Fr(e,t)?(e=tr(),er=Zt=Gt=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=Kn(n,"onBeforeInput")).length&&(o=new xr("onBeforeInput","beforeinput",null,r,o),a.push({event:o,listeners:n}),o.data=y))}Dn(a,t)}))}function Vn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Kn(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Le(e,r))&&n.unshift(Vn(e,i,o)),null!=(i=Le(e,t))&&n.push(Vn(e,i,o))),e=e.return}return n}function Yn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qn(e,t,r,n,o){for(var i=t._reactName,a=[];null!==r&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(null!==l&&l===n)break;5===s.tag&&null!==u&&(s=u,o?null!=(l=Le(r,i))&&a.unshift(Vn(r,l,s)):o||null!=(l=Le(r,i))&&a.push(Vn(r,l,s))),r=r.return}0!==a.length&&e.push({event:t,listeners:a})}var Xn=/\r\n?/g,Jn=/\u0000|\uFFFD/g;function Gn(e){return("string"===typeof e?e:""+e).replace(Xn,"\n").replace(Jn,"")}function Zn(e,t,r){if(t=Gn(t),Gn(e)!==t&&r)throw Error(a(425))}function eo(){}var to=null,ro=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var oo="function"===typeof setTimeout?setTimeout:void 0,io="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,so="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:oo;function lo(e){setTimeout((function(){throw e}))}function uo(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType)if("/$"===(r=o.data)){if(0===n)return e.removeChild(o),void Wt(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=o}while(r);Wt(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function fo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),ho="__reactFiber$"+po,mo="__reactProps$"+po,go="__reactContainer$"+po,vo="__reactEvents$"+po,yo="__reactListeners$"+po,bo="__reactHandles$"+po;function xo(e){var t=e[ho];if(t)return t;for(var r=e.parentNode;r;){if(t=r[go]||r[ho]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=fo(e);null!==e;){if(r=e[ho])return r;e=fo(e)}return t}r=(e=r).parentNode}return null}function wo(e){return!(e=e[ho]||e[go])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ko(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function _o(e){return e[mo]||null}var So=[],Eo=-1;function jo(e){return{current:e}}function Co(e){0>Eo||(e.current=So[Eo],So[Eo]=null,Eo--)}function To(e,t){Eo++,So[Eo]=e.current,e.current=t}var Oo={},Ro=jo(Oo),Po=jo(!1),Ao=Oo;function Lo(e,t){var r=e.type.contextTypes;if(!r)return Oo;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in r)i[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function No(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zo(){Co(Po),Co(Ro)}function $o(e,t,r){if(Ro.current!==Oo)throw Error(a(168));To(Ro,t),To(Po,r)}function Mo(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var o in n=n.getChildContext())if(!(o in t))throw Error(a(108,H(e)||"Unknown",o));return I({},r,n)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Oo,Ao=Ro.current,To(Ro,e),To(Po,Po.current),!0}function Do(e,t,r){var n=e.stateNode;if(!n)throw Error(a(169));r?(e=Mo(e,t,Ao),n.__reactInternalMemoizedMergedChildContext=e,Co(Po),Co(Ro),To(Ro,e)):Co(Po),To(Po,r)}var Fo=null,Uo=!1,Bo=!1;function Wo(e){null===Fo?Fo=[e]:Fo.push(e)}function Ho(){if(!Bo&&null!==Fo){Bo=!0;var t=0,r=xt;try{var n=Fo;for(xt=1;t<n.length;t++){var o=n[t];do{o=o(!0)}while(null!==o)}Fo=null,Uo=!1}catch(e){throw null!==Fo&&(Fo=Fo.slice(t+1)),Ye(et,Ho),e}finally{xt=r,Bo=!1}}return null}var qo=[],Vo=0,Ko=null,Yo=0,Qo=[],Xo=0,Jo=null,Go=1,Zo="";function ei(e,t){qo[Vo++]=Yo,qo[Vo++]=Ko,Ko=e,Yo=t}function ti(e,t,r){Qo[Xo++]=Go,Qo[Xo++]=Zo,Qo[Xo++]=Jo,Jo=e;var n=Go;e=Zo;var o=32-st(n)-1;n&=~(1<<o),r+=1;var i=32-st(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,Go=1<<32-st(t)+o|r<<o|n,Zo=i+e}else Go=1<<i|r<<o|n,Zo=e}function ri(e){null!==e.return&&(ei(e,1),ti(e,1,0))}function ni(e){for(;e===Ko;)Ko=qo[--Vo],qo[Vo]=null,Yo=qo[--Vo],qo[Vo]=null;for(;e===Jo;)Jo=Qo[--Xo],Qo[Xo]=null,Zo=Qo[--Xo],Qo[Xo]=null,Go=Qo[--Xo],Qo[Xo]=null}var oi=null,ii=null,ai=!1,si=null;function li(e,t){var r=Lu(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function ui(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,oi=e,ii=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,oi=e,ii=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Jo?{id:Go,overflow:Zo}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=Lu(18,null,null,0)).stateNode=t,r.return=e,e.child=r,oi=e,ii=null,!0);default:return!1}}function ci(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function di(e){if(ai){var t=ii;if(t){var r=t;if(!ui(e,t)){if(ci(e))throw Error(a(418));t=co(r.nextSibling);var n=oi;t&&ui(e,t)?li(n,r):(e.flags=-4097&e.flags|2,ai=!1,oi=e)}}else{if(ci(e))throw Error(a(418));e.flags=-4097&e.flags|2,ai=!1,oi=e}}}function fi(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;oi=e}function pi(e){if(e!==oi)return!1;if(!ai)return fi(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=ii)){if(ci(e))throw hi(),Error(a(418));for(;t;)li(e,t),t=co(t.nextSibling)}if(fi(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){ii=co(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}ii=null}}else ii=oi?co(e.stateNode.nextSibling):null;return!0}function hi(){for(var e=ii;e;)e=co(e.nextSibling)}function mi(){ii=oi=null,ai=!1}function gi(e){null===si?si=[e]:si.push(e)}var vi=w.ReactCurrentBatchConfig;function yi(e,t){if(e&&e.defaultProps){for(var r in t=I({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}var bi=jo(null),xi=null,wi=null,ki=null;function _i(){ki=wi=xi=null}function Si(e){var t=bi.current;Co(bi),e._currentValue=t}function Ei(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ji(e,t){xi=e,ki=wi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ws=!0),e.firstContext=null)}function Ci(e){var t=e._currentValue;if(ki!==e)if(e={context:e,memoizedValue:t,next:null},null===wi){if(null===xi)throw Error(a(308));wi=e,xi.dependencies={lanes:0,firstContext:e}}else wi=wi.next=e;return t}var Ti=null;function Oi(e){null===Ti?Ti=[e]:Ti.push(e)}function Ri(e,t,r,n){var o=t.interleaved;return null===o?(r.next=r,Oi(t)):(r.next=o.next,o.next=r),t.interleaved=r,Pi(e,n)}function Pi(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var Ai=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ni(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $i(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&Rl)){var o=n.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Pi(e,r)}return null===(o=n.interleaved)?(t.next=t,Oi(n)):(t.next=o.next,o.next=t),n.interleaved=t,Pi(e,r)}function Mi(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,bt(e,r)}}function Ii(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,i=null;if(null!==(r=r.firstBaseUpdate)){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===i?o=i=a:i=i.next=a,r=r.next}while(null!==r);null===i?o=i=t:i=i.next=t}else o=i=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Di(e,t,r,n){var o=e.updateQueue;Ai=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?i=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,c=u=l=null,s=i;;){var f=s.lane,p=s.eventTime;if((n&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(f=t,p=r,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=I({},d,f);break e;case 2:Ai=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,a|=f;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(f=s).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Il|=a,e.lanes=a,e.memoizedState=d}}function Fi(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(a(191,o));o.call(n)}}}var Ui=(new o.Component).refs;function Bi(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:I({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var Wi={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ru(),o=nu(e),i=zi(n,o);i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=$i(e,i,o))&&(ou(t,e,o,n),Mi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ru(),o=nu(e),i=zi(n,o);i.tag=1,i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=$i(e,i,o))&&(ou(t,e,o,n),Mi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ru(),n=nu(e),o=zi(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=$i(e,o,n))&&(ou(t,e,n,r),Mi(t,e,n))}};function Hi(e,t,r,n,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!un(r,n)||!un(o,i))}function qi(e,t,r){var n=!1,o=Oo,i=t.contextType;return"object"===typeof i&&null!==i?i=Ci(i):(o=No(t)?Ao:Ro.current,i=(n=null!==(n=t.contextTypes)&&void 0!==n)?Lo(e,o):Oo),t=new t(r,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Wi,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vi(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Wi.enqueueReplaceState(t,t.state,null)}function Ki(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=Ui,Li(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ci(i):(i=No(t)?Ao:Ro.current,o.context=Lo(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(Bi(e,t,i,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&Wi.enqueueReplaceState(o,o.state,null),Di(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function Yi(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(a(309));var n=r.stateNode}if(!n)throw Error(a(147,e));var o=n,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;t===Ui&&(t=o.refs={}),null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xi(e){return(0,e._init)(e._payload)}function Ji(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=zu(e,t)).index=0,e.sibling=null,e}function i(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,r,n){return null===t||6!==t.tag?((t=Du(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function u(e,t,r,n){var i=r.type;return i===S?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===L&&Xi(i)===t.type)?((n=o(t,r.props)).ref=Yi(e,t,r),n.return=e,n):((n=$u(r.type,r.key,r.props,null,e.mode,n)).ref=Yi(e,t,r),n.return=e,n)}function c(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Fu(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function d(e,t,r,n,i){return null===t||7!==t.tag?((t=Mu(r,e.mode,n,i)).return=e,t):((t=o(t,r)).return=e,t)}function f(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(r=$u(t.type,t.key,t.props,null,e.mode,r)).ref=Yi(e,null,t),r.return=e,r;case _:return(t=Fu(t,e.mode,r)).return=e,t;case L:return f(e,(0,t._init)(t._payload),r)}if(re(t)||$(t))return(t=Mu(t,e.mode,r,null)).return=e,t;Qi(e,t)}return null}function p(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==o?null:l(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return r.key===o?u(e,t,r,n):null;case _:return r.key===o?c(e,t,r,n):null;case L:return p(e,t,(o=r._init)(r._payload),n)}if(re(r)||$(r))return null!==o?null:d(e,t,r,n,null);Qi(e,r)}return null}function h(e,t,r,n,o){if("string"===typeof n&&""!==n||"number"===typeof n)return l(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return u(t,e=e.get(null===n.key?r:n.key)||null,n,o);case _:return c(t,e=e.get(null===n.key?r:n.key)||null,n,o);case L:return h(e,t,r,(0,n._init)(n._payload),o)}if(re(n)||$(n))return d(t,e=e.get(r)||null,n,o,null);Qi(t,n)}return null}function m(o,a,s,l){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return r(o,d),ai&&ei(o,m),u;if(null===d){for(;m<s.length;m++)null!==(d=f(o,s[m],l))&&(a=i(d,a,m),null===c?u=d:c.sibling=d,c=d);return ai&&ei(o,m),u}for(d=n(o,d);m<s.length;m++)null!==(g=h(d,o,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(o,e)})),ai&&ei(o,m),u}function g(o,s,l,u){var c=$(l);if("function"!==typeof c)throw Error(a(150));if(null==(l=c.call(l)))throw Error(a(151));for(var d=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),s=i(b,s,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return r(o,m),ai&&ei(o,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(o,y.value,u))&&(s=i(y,s,g),null===d?c=y:d.sibling=y,d=y);return ai&&ei(o,g),c}for(m=n(o,m);!y.done;g++,y=l.next())null!==(y=h(m,o,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=i(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(o,e)})),ai&&ei(o,g),c}return function e(n,i,a,l){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case k:e:{for(var u=a.key,c=i;null!==c;){if(c.key===u){if((u=a.type)===S){if(7===c.tag){r(n,c.sibling),(i=o(c,a.props.children)).return=n,n=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===L&&Xi(u)===c.type){r(n,c.sibling),(i=o(c,a.props)).ref=Yi(n,c,a),i.return=n,n=i;break e}r(n,c);break}t(n,c),c=c.sibling}a.type===S?((i=Mu(a.props.children,n.mode,l,a.key)).return=n,n=i):((l=$u(a.type,a.key,a.props,null,n.mode,l)).ref=Yi(n,i,a),l.return=n,n=l)}return s(n);case _:e:{for(c=a.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){r(n,i.sibling),(i=o(i,a.children||[])).return=n,n=i;break e}r(n,i);break}t(n,i),i=i.sibling}(i=Fu(a,n.mode,l)).return=n,n=i}return s(n);case L:return e(n,i,(c=a._init)(a._payload),l)}if(re(a))return m(n,i,a,l);if($(a))return g(n,i,a,l);Qi(n,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(r(n,i.sibling),(i=o(i,a)).return=n,n=i):(r(n,i),(i=Du(a,n.mode,l)).return=n,n=i),s(n)):r(n,i)}}var Gi=Ji(!0),Zi=Ji(!1),ea={},ta=jo(ea),ra=jo(ea),na=jo(ea);function oa(e){if(e===ea)throw Error(a(174));return e}function ia(e,t){switch(To(na,t),To(ra,e),To(ta,ea),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ue(null,"");break;default:t=ue(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Co(ta),To(ta,t)}function aa(){Co(ta),Co(ra),Co(na)}function sa(e){oa(na.current);var t=oa(ta.current),r=ue(t,e.type);t!==r&&(To(ra,e),To(ta,r))}function la(e){ra.current===e&&(Co(ta),Co(ra))}var ua=jo(0);function ca(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function fa(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var pa=w.ReactCurrentDispatcher,ha=w.ReactCurrentBatchConfig,ma=0,ga=null,va=null,ya=null,ba=!1,xa=!1,wa=0,ka=0;function _a(){throw Error(a(321))}function Sa(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ln(e[r],t[r]))return!1;return!0}function Ea(e,t,r,n,o,i){if(ma=i,ga=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pa.current=null===e||null===e.memoizedState?ls:us,e=r(n,o),xa){i=0;do{if(xa=!1,wa=0,25<=i)throw Error(a(301));i+=1,ya=va=null,t.updateQueue=null,pa.current=cs,e=r(n,o)}while(xa)}if(pa.current=ss,t=null!==va&&null!==va.next,ma=0,ya=va=ga=null,ba=!1,t)throw Error(a(300));return e}function ja(){var e=0!==wa;return wa=0,e}function Ca(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ya?ga.memoizedState=ya=e:ya=ya.next=e,ya}function Ta(){if(null===va){var e=ga.alternate;e=null!==e?e.memoizedState:null}else e=va.next;var t=null===ya?ga.memoizedState:ya.next;if(null!==t)ya=t,va=e;else{if(null===e)throw Error(a(310));e={memoizedState:(va=e).memoizedState,baseState:va.baseState,baseQueue:va.baseQueue,queue:va.queue,next:null},null===ya?ga.memoizedState=ya=e:ya=ya.next=e}return ya}function Oa(e,t){return"function"===typeof t?t(e):t}function Ra(e){var t=Ta(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=va,o=n.baseQueue,i=r.pending;if(null!==i){if(null!==o){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(null!==o){i=o.next,n=n.baseState;var l=s=null,u=null,c=i;do{var d=c.lane;if((ma&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=f,s=n):u=u.next=f,ga.lanes|=d,Il|=d}c=c.next}while(null!==c&&c!==i);null===u?s=n:u.next=l,ln(n,t.memoizedState)||(ws=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=u,r.lastRenderedState=n}if(null!==(e=r.interleaved)){o=e;do{i=o.lane,ga.lanes|=i,Il|=i,o=o.next}while(o!==e)}else null===o&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Pa(e){var t=Ta(),r=t.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(null!==o){r.pending=null;var s=o=o.next;do{i=e(i,s.action),s=s.next}while(s!==o);ln(i,t.memoizedState)||(ws=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Aa(){}function La(e,t){var r=ga,n=Ta(),o=t(),i=!ln(n.memoizedState,o);if(i&&(n.memoizedState=o,ws=!0),n=n.queue,qa($a.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||null!==ya&&1&ya.memoizedState.tag){if(r.flags|=2048,Fa(9,za.bind(null,r,n,o,t),void 0,null),null===Pl)throw Error(a(349));0!==(30&ma)||Na(r,t,o)}return o}function Na(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=ga.updateQueue)?(t={lastEffect:null,stores:null},ga.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function za(e,t,r,n){t.value=r,t.getSnapshot=n,Ma(t)&&Ia(e)}function $a(e,t,r){return r((function(){Ma(t)&&Ia(e)}))}function Ma(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ln(e,r)}catch(n){return!0}}function Ia(e){var t=Pi(e,1);null!==t&&ou(t,e,1,-1)}function Da(e){var t=Ca();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:e},t.queue=e,e=e.dispatch=ns.bind(null,ga,e),[t.memoizedState,e]}function Fa(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=ga.updateQueue)?(t={lastEffect:null,stores:null},ga.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Ua(){return Ta().memoizedState}function Ba(e,t,r,n){var o=Ca();ga.flags|=e,o.memoizedState=Fa(1|t,r,void 0,void 0===n?null:n)}function Wa(e,t,r,n){var o=Ta();n=void 0===n?null:n;var i=void 0;if(null!==va){var a=va.memoizedState;if(i=a.destroy,null!==n&&Sa(n,a.deps))return void(o.memoizedState=Fa(t,r,i,n))}ga.flags|=e,o.memoizedState=Fa(1|t,r,i,n)}function Ha(e,t){return Ba(8390656,8,e,t)}function qa(e,t){return Wa(2048,8,e,t)}function Va(e,t){return Wa(4,2,e,t)}function Ka(e,t){return Wa(4,4,e,t)}function Ya(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Qa(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Wa(4,4,Ya.bind(null,t,e),r)}function Xa(){}function Ja(e,t){var r=Ta();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&Sa(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ga(e,t){var r=Ta();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&Sa(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Za(e,t,r){return 0===(21&ma)?(e.baseState&&(e.baseState=!1,ws=!0),e.memoizedState=r):(ln(r,t)||(r=gt(),ga.lanes|=r,Il|=r,e.baseState=!0),t)}function es(e,t){var r=xt;xt=0!==r&&4>r?r:4,e(!0);var n=ha.transition;ha.transition={};try{e(!1),t()}finally{xt=r,ha.transition=n}}function ts(){return Ta().memoizedState}function rs(e,t,r){var n=nu(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},os(e))is(t,r);else if(null!==(r=Ri(e,t,r,n))){ou(r,e,n,ru()),as(r,t,n)}}function ns(e,t,r){var n=nu(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(os(e))is(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,r);if(o.hasEagerState=!0,o.eagerState=s,ln(s,a)){var l=t.interleaved;return null===l?(o.next=o,Oi(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(u){}null!==(r=Ri(e,t,o,n))&&(ou(r,e,n,o=ru()),as(r,t,n))}}function os(e){var t=e.alternate;return e===ga||null!==t&&t===ga}function is(e,t){xa=ba=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function as(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,bt(e,r)}}var ss={readContext:Ci,useCallback:_a,useContext:_a,useEffect:_a,useImperativeHandle:_a,useInsertionEffect:_a,useLayoutEffect:_a,useMemo:_a,useReducer:_a,useRef:_a,useState:_a,useDebugValue:_a,useDeferredValue:_a,useTransition:_a,useMutableSource:_a,useSyncExternalStore:_a,useId:_a,unstable_isNewReconciler:!1},ls={readContext:Ci,useCallback:function(e,t){return Ca().memoizedState=[e,void 0===t?null:t],e},useContext:Ci,useEffect:Ha,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Ba(4194308,4,Ya.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ba(4,2,e,t)},useMemo:function(e,t){var r=Ca();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ca();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=rs.bind(null,ga,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},Ca().memoizedState=e},useState:Da,useDebugValue:Xa,useDeferredValue:function(e){return Ca().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=es.bind(null,e[1]),Ca().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ga,o=Ca();if(ai){if(void 0===r)throw Error(a(407));r=r()}else{if(r=t(),null===Pl)throw Error(a(349));0!==(30&ma)||Na(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Ha($a.bind(null,n,i,e),[e]),n.flags|=2048,Fa(9,za.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Ca(),t=Pl.identifierPrefix;if(ai){var r=Zo;t=":"+t+"R"+(r=(Go&~(1<<32-st(Go)-1)).toString(32)+r),0<(r=wa++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=ka++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},us={readContext:Ci,useCallback:Ja,useContext:Ci,useEffect:qa,useImperativeHandle:Qa,useInsertionEffect:Va,useLayoutEffect:Ka,useMemo:Ga,useReducer:Ra,useRef:Ua,useState:function(){return Ra(Oa)},useDebugValue:Xa,useDeferredValue:function(e){return Za(Ta(),va.memoizedState,e)},useTransition:function(){return[Ra(Oa)[0],Ta().memoizedState]},useMutableSource:Aa,useSyncExternalStore:La,useId:ts,unstable_isNewReconciler:!1},cs={readContext:Ci,useCallback:Ja,useContext:Ci,useEffect:qa,useImperativeHandle:Qa,useInsertionEffect:Va,useLayoutEffect:Ka,useMemo:Ga,useReducer:Pa,useRef:Ua,useState:function(){return Pa(Oa)},useDebugValue:Xa,useDeferredValue:function(e){var t=Ta();return null===va?t.memoizedState=e:Za(t,va.memoizedState,e)},useTransition:function(){return[Pa(Oa)[0],Ta().memoizedState]},useMutableSource:Aa,useSyncExternalStore:La,useId:ts,unstable_isNewReconciler:!1};function ds(e,t){try{var r="",n=t;do{r+=B(n),n=n.return}while(n);var o=r}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function fs(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function ps(e,t){try{console.error(t.value)}catch(r){setTimeout((function(){throw r}))}}var hs="function"===typeof WeakMap?WeakMap:Map;function ms(e,t,r){(r=zi(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Vl||(Vl=!0,Kl=n),ps(0,t)},r}function gs(e,t,r){(r=zi(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){ps(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(r.callback=function(){ps(0,t),"function"!==typeof n&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function vs(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new hs;var o=new Set;n.set(t,o)}else void 0===(o=n.get(t))&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Cu.bind(null,e,t,r),t.then(e,e))}function ys(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bs(e,t,r,n,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=zi(-1,1)).tag=2,$i(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var xs=w.ReactCurrentOwner,ws=!1;function ks(e,t,r,n){t.child=null===e?Zi(t,null,r,n):Gi(t,e.child,r,n)}function _s(e,t,r,n,o){r=r.render;var i=t.ref;return ji(t,o),n=Ea(e,t,r,n,i,o),r=ja(),null===e||ws?(ai&&r&&ri(t),t.flags|=1,ks(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vs(e,t,o))}function Ss(e,t,r,n,o){if(null===e){var i=r.type;return"function"!==typeof i||Nu(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=$u(r.type,null,n,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Es(e,t,i,n,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((r=null!==(r=r.compare)?r:un)(a,n)&&e.ref===t.ref)return Vs(e,t,o)}return t.flags|=1,(e=zu(i,n)).ref=t.ref,e.return=t,t.child=e}function Es(e,t,r,n,o){if(null!==e){var i=e.memoizedProps;if(un(i,n)&&e.ref===t.ref){if(ws=!1,t.pendingProps=n=i,0===(e.lanes&o))return t.lanes=e.lanes,Vs(e,t,o);0!==(131072&e.flags)&&(ws=!0)}}return Ts(e,t,r,n,o)}function js(e,t,r){var n=t.pendingProps,o=n.children,i=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},To(zl,Nl),Nl|=r;else{if(0===(1073741824&r))return e=null!==i?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,To(zl,Nl),Nl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==i?i.baseLanes:r,To(zl,Nl),Nl|=n}else null!==i?(n=i.baseLanes|r,t.memoizedState=null):n=r,To(zl,Nl),Nl|=n;return ks(e,t,o,r),t.child}function Cs(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ts(e,t,r,n,o){var i=No(r)?Ao:Ro.current;return i=Lo(t,i),ji(t,o),r=Ea(e,t,r,n,i,o),n=ja(),null===e||ws?(ai&&n&&ri(t),t.flags|=1,ks(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vs(e,t,o))}function Os(e,t,r,n,o){if(No(r)){var i=!0;Io(t)}else i=!1;if(ji(t,o),null===t.stateNode)qs(e,t),qi(t,r,n),Ki(t,r,n,o),n=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=r.contextType;"object"===typeof u&&null!==u?u=Ci(u):u=Lo(t,u=No(r)?Ao:Ro.current);var c=r.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==n||l!==u)&&Vi(t,a,n,u),Ai=!1;var f=t.memoizedState;a.state=f,Di(t,n,a,o),l=t.memoizedState,s!==n||f!==l||Po.current||Ai?("function"===typeof c&&(Bi(t,r,c,n),l=t.memoizedState),(s=Ai||Hi(t,r,s,n,f,l,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=u,n=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Ni(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:yi(t.type,s),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(l=r.contextType)&&null!==l?l=Ci(l):l=Lo(t,l=No(r)?Ao:Ro.current);var p=r.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||f!==l)&&Vi(t,a,n,l),Ai=!1,f=t.memoizedState,a.state=f,Di(t,n,a,o);var h=t.memoizedState;s!==d||f!==h||Po.current||Ai?("function"===typeof p&&(Bi(t,r,p,n),h=t.memoizedState),(u=Ai||Hi(t,r,u,n,f,h,l)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(n,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(n,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=h),a.props=n,a.state=h,a.context=l,n=u):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return Rs(e,t,r,n,i,o)}function Rs(e,t,r,n,o,i){Cs(e,t);var a=0!==(128&t.flags);if(!n&&!a)return o&&Do(t,r,!1),Vs(e,t,i);n=t.stateNode,xs.current=t;var s=a&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&a?(t.child=Gi(t,e.child,null,i),t.child=Gi(t,null,s,i)):ks(e,t,s,i),t.memoizedState=n.state,o&&Do(t,r,!0),t.child}function Ps(e){var t=e.stateNode;t.pendingContext?$o(0,t.pendingContext,t.pendingContext!==t.context):t.context&&$o(0,t.context,!1),ia(e,t.containerInfo)}function As(e,t,r,n,o){return mi(),gi(o),t.flags|=256,ks(e,t,r,n),t.child}var Ls,Ns,zs,$s,Ms={dehydrated:null,treeContext:null,retryLane:0};function Is(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,r){var n,o=t.pendingProps,i=ua.current,s=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&i)),n?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),To(ua,1&i),null===e)return di(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&o)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Iu(l,o,0,null),e=Mu(e,o,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Is(r),t.memoizedState=Ms,e):Fs(t,l));if(null!==(i=e.memoizedState)&&null!==(n=i.dehydrated))return function(e,t,r,n,o,i,s){if(r)return 256&t.flags?(t.flags&=-257,Us(e,t,s,n=fs(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Iu({mode:"visible",children:n.children},o,0,null),(i=Mu(i,o,s,null)).flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,0!==(1&t.mode)&&Gi(t,e.child,null,s),t.child.memoizedState=Is(s),t.memoizedState=Ms,i);if(0===(1&t.mode))return Us(e,t,s,null);if("$!"===o.data){if(n=o.nextSibling&&o.nextSibling.dataset)var l=n.dgst;return n=l,Us(e,t,s,n=fs(i=Error(a(419)),n,void 0))}if(l=0!==(s&e.childLanes),ws||l){if(null!==(n=Pl)){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(n.suspendedLanes|s))?0:o)&&o!==i.retryLane&&(i.retryLane=o,Pi(e,o),ou(n,e,o,-1))}return vu(),Us(e,t,s,n=fs(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Ou.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ii=co(o.nextSibling),oi=t,ai=!0,si=null,null!==e&&(Qo[Xo++]=Go,Qo[Xo++]=Zo,Qo[Xo++]=Jo,Go=e.id,Zo=e.overflow,Jo=t),t=Fs(t,n.children),t.flags|=4096,t)}(e,t,l,o,n,i,r);if(s){s=o.fallback,l=t.mode,n=(i=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&l)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=zu(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==n?s=zu(n,s):(s=Mu(s,l,r,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=null===(l=e.child.memoizedState)?Is(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Ms,o}return e=(s=e.child).sibling,o=zu(s,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=r),o.return=t,o.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Fs(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Us(e,t,r,n){return null!==n&&gi(n),Gi(t,e.child,null,r),(e=Fs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bs(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Ei(e.return,t,r)}function Ws(e,t,r,n,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Hs(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(ks(e,t,n.children,r),0!==(2&(n=ua.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bs(e,r,t);else if(19===e.tag)Bs(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(To(ua,n),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===ca(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ws(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ca(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ws(t,!0,r,null,i);break;case"together":Ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vs(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Il|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(r=zu(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=zu(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Ks(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=14680064&o.subtreeFlags,n|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Qs(e,t,r){var n=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return No(t.type)&&zo(),Ys(t),null;case 3:return n=t.stateNode,aa(),Co(Po),Co(Ro),fa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==si&&(lu(si),si=null))),Ns(e,t),Ys(t),null;case 5:la(t);var o=oa(na.current);if(r=t.type,null!==e&&null!=t.stateNode)zs(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(a(166));return Ys(t),null}if(e=oa(ta.current),pi(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[ho]=t,n[mo]=i,e=0!==(1&t.mode),r){case"dialog":Fn("cancel",n),Fn("close",n);break;case"iframe":case"object":case"embed":Fn("load",n);break;case"video":case"audio":for(o=0;o<$n.length;o++)Fn($n[o],n);break;case"source":Fn("error",n);break;case"img":case"image":case"link":Fn("error",n),Fn("load",n);break;case"details":Fn("toggle",n);break;case"input":J(n,i),Fn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Fn("invalid",n);break;case"textarea":ie(n,i),Fn("invalid",n)}for(var s in be(r,i),o=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?n.textContent!==u&&(!0!==i.suppressHydrationWarning&&Zn(n.textContent,u,e),o=["children",u]):"number"===typeof u&&n.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Zn(n.textContent,u,e),o=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Fn("scroll",n)}switch(r){case"input":K(n),ee(n,i,!0);break;case"textarea":K(n),se(n);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(n.onclick=eo)}n=o,t.updateQueue=n,null!==n&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),"select"===r&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[ho]=t,e[mo]=n,Ls(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(r,n),r){case"dialog":Fn("cancel",e),Fn("close",e),o=n;break;case"iframe":case"object":case"embed":Fn("load",e),o=n;break;case"video":case"audio":for(o=0;o<$n.length;o++)Fn($n[o],e);o=n;break;case"source":Fn("error",e),o=n;break;case"img":case"image":case"link":Fn("error",e),Fn("load",e),o=n;break;case"details":Fn("toggle",e),o=n;break;case"input":J(e,n),o=X(e,n),Fn("invalid",e);break;case"option":default:o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=I({},n,{value:void 0}),Fn("invalid",e);break;case"textarea":ie(e,n),o=oe(e,n),Fn("invalid",e)}for(i in be(r,o),u=o)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ve(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&fe(e,c):"children"===i?"string"===typeof c?("textarea"!==r||""!==c)&&pe(e,c):"number"===typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Fn("scroll",e):null!=c&&x(e,i,c,s))}switch(r){case"input":K(e),ee(e,n,!1);break;case"textarea":K(e),se(e);break;case"option":null!=n.value&&e.setAttribute("value",""+q(n.value));break;case"select":e.multiple=!!n.multiple,null!=(i=n.value)?ne(e,!!n.multiple,i,!1):null!=n.defaultValue&&ne(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=eo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)$s(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(a(166));if(r=oa(na.current),oa(ta.current),pi(t)){if(n=t.stateNode,r=t.memoizedProps,n[ho]=t,(i=n.nodeValue!==r)&&null!==(e=oi))switch(e.tag){case 3:Zn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zn(n.nodeValue,r,0!==(1&e.mode))}i&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[ho]=t,t.stateNode=n}return Ys(t),null;case 13:if(Co(ua),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ii&&0!==(1&t.mode)&&0===(128&t.flags))hi(),mi(),t.flags|=98560,i=!1;else if(i=pi(t),null!==n&&null!==n.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[ho]=t}else mi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),i=!1}else null!==si&&(lu(si),si=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ua.current)?0===$l&&($l=3):vu())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return aa(),Ns(e,t),null===e&&Wn(t.stateNode.containerInfo),Ys(t),null;case 10:return Si(t.type._context),Ys(t),null;case 19:if(Co(ua),null===(i=t.memoizedState))return Ys(t),null;if(n=0!==(128&t.flags),null===(s=i.rendering))if(n)Ks(i,!1);else{if(0!==$l||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ca(e))){for(t.flags|=128,Ks(i,!1),null!==(n=s.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(i=r).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return To(ua,1&ua.current|2),t.child}e=e.sibling}null!==i.tail&&Ge()>Hl&&(t.flags|=128,n=!0,Ks(i,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=ca(s))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Ks(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ai)return Ys(t),null}else 2*Ge()-i.renderingStartTime>Hl&&1073741824!==r&&(t.flags|=128,n=!0,Ks(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(r=i.last)?r.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ge(),t.sibling=null,r=ua.current,To(ua,n?1&r|2:1&r),t):(Ys(t),null);case 22:case 23:return pu(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Nl)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Xs(e,t){switch(ni(t),t.tag){case 1:return No(t.type)&&zo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return aa(),Co(Po),Co(Ro),fa(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return la(t),null;case 13:if(Co(ua),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));mi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Co(ua),null;case 4:return aa(),null;case 10:return Si(t.type._context),null;case 22:case 23:return pu(),null;default:return null}}Ls=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ns=function(){},zs=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,oa(ta.current);var i,a=null;switch(r){case"input":o=X(e,o),n=X(e,n),a=[];break;case"select":o=I({},o,{value:void 0}),n=I({},n,{value:void 0}),a=[];break;case"textarea":o=oe(e,o),n=oe(e,n),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof n.onClick&&(e.onclick=eo)}for(c in be(r,n),r=null,o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var u=n[c];if(s=null!=o?o[c]:void 0,n.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(a||(a=[]),a.push(c,r)),r=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fn("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},$s=function(e,t,r,n){r!==n&&(t.flags|=4)};var Js=!1,Gs=!1,Zs="function"===typeof WeakSet?WeakSet:Set,el=null;function tl(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){ju(e,t,n)}else r.current=null}function rl(e,t,r){try{r()}catch(n){ju(e,t,n)}}var nl=!1;function ol(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&rl(t,r,i)}o=o.next}while(o!==n)}}function il(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function al(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function sl(e){var t=e.alternate;null!==t&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ho],delete t[mo],delete t[vo],delete t[yo],delete t[bo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ll(e){return 5===e.tag||3===e.tag||4===e.tag}function ul(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function cl(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=eo));else if(4!==n&&null!==(e=e.child))for(cl(e,t,r),e=e.sibling;null!==e;)cl(e,t,r),e=e.sibling}function dl(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(dl(e,t,r),e=e.sibling;null!==e;)dl(e,t,r),e=e.sibling}var fl=null,pl=!1;function hl(e,t,r){for(r=r.child;null!==r;)ml(e,t,r),r=r.sibling}function ml(e,t,r){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,r)}catch(s){}switch(r.tag){case 5:Gs||tl(r,t);case 6:var n=fl,o=pl;fl=null,hl(e,t,r),pl=o,null!==(fl=n)&&(pl?(e=fl,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):fl.removeChild(r.stateNode));break;case 18:null!==fl&&(pl?(e=fl,r=r.stateNode,8===e.nodeType?uo(e.parentNode,r):1===e.nodeType&&uo(e,r),Wt(e)):uo(fl,r.stateNode));break;case 4:n=fl,o=pl,fl=r.stateNode.containerInfo,pl=!0,hl(e,t,r),fl=n,pl=o;break;case 0:case 11:case 14:case 15:if(!Gs&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&rl(r,t,a),o=o.next}while(o!==n)}hl(e,t,r);break;case 1:if(!Gs&&(tl(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){ju(r,t,s)}hl(e,t,r);break;case 21:hl(e,t,r);break;case 22:1&r.mode?(Gs=(n=Gs)||null!==r.memoizedState,hl(e,t,r),Gs=n):hl(e,t,r);break;default:hl(e,t,r)}}function gl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Zs),t.forEach((function(t){var n=Ru.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function vl(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:fl=l.stateNode,pl=!1;break e;case 3:case 4:fl=l.stateNode.containerInfo,pl=!0;break e}l=l.return}if(null===fl)throw Error(a(160));ml(i,s,o),fl=null,pl=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){ju(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)yl(t,e),t=t.sibling}function yl(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vl(t,e),bl(e),4&n){try{ol(3,e,e.return),il(3,e)}catch(g){ju(e,e.return,g)}try{ol(5,e,e.return)}catch(g){ju(e,e.return,g)}}break;case 1:vl(t,e),bl(e),512&n&&null!==r&&tl(r,r.return);break;case 5:if(vl(t,e),bl(e),512&n&&null!==r&&tl(r,r.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){ju(e,e.return,g)}}if(4&n&&null!=(o=e.stateNode)){var i=e.memoizedProps,s=null!==r?r.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===i.type&&null!=i.name&&G(o,i),xe(l,s);var c=xe(l,i);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];"style"===d?ve(o,f):"dangerouslySetInnerHTML"===d?fe(o,f):"children"===d?pe(o,f):x(o,d,f,c)}switch(l){case"input":Z(o,i);break;case"textarea":ae(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(o,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(o,!!i.multiple,i.defaultValue,!0):ne(o,!!i.multiple,i.multiple?[]:"",!1))}o[mo]=i}catch(g){ju(e,e.return,g)}}break;case 6:if(vl(t,e),bl(e),4&n){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){ju(e,e.return,g)}}break;case 3:if(vl(t,e),bl(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){ju(e,e.return,g)}break;case 4:default:vl(t,e),bl(e);break;case 13:vl(t,e),bl(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||(Wl=Ge())),4&n&&gl(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Gs=(c=Gs)||d,vl(t,e),Gs=c):vl(t,e),bl(e),8192&n){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(el=e,d=e.child;null!==d;){for(f=el=d;null!==el;){switch(h=(p=el).child,p.tag){case 0:case 11:case 14:case 15:ol(4,p,p.return);break;case 1:tl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){n=p,r=p.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){ju(n,r,g)}}break;case 5:tl(p,p.return);break;case 22:if(null!==p.memoizedState){_l(f);continue}}null!==h?(h.return=p,el=h):_l(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,c?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(l=f.stateNode,s=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=ge("display",s))}catch(g){ju(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){ju(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vl(t,e),bl(e),4&n&&gl(e);case 21:}}function bl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(ll(r)){var n=r;break e}r=r.return}throw Error(a(160))}switch(n.tag){case 5:var o=n.stateNode;32&n.flags&&(pe(o,""),n.flags&=-33),dl(e,ul(e),o);break;case 3:case 4:var i=n.stateNode.containerInfo;cl(e,ul(e),i);break;default:throw Error(a(161))}}catch(s){ju(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xl(e,t,r){el=e,wl(e,t,r)}function wl(e,t,r){for(var n=0!==(1&e.mode);null!==el;){var o=el,i=o.child;if(22===o.tag&&n){var a=null!==o.memoizedState||Js;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||Gs;s=Js;var u=Gs;if(Js=a,(Gs=l)&&!u)for(el=o;null!==el;)l=(a=el).child,22===a.tag&&null!==a.memoizedState?Sl(o):null!==l?(l.return=a,el=l):Sl(o);for(;null!==i;)el=i,wl(i,t,r),i=i.sibling;el=o,Js=s,Gs=u}kl(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,el=i):kl(e)}}function kl(e){for(;null!==el;){var t=el;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gs||il(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Gs)if(null===r)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:yi(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Fi(t,i,n);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Fi(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Wt(f)}}}break;default:throw Error(a(163))}Gs||512&t.flags&&al(t)}catch(p){ju(t,t.return,p)}}if(t===e){el=null;break}if(null!==(r=t.sibling)){r.return=t.return,el=r;break}el=t.return}}function _l(e){for(;null!==el;){var t=el;if(t===e){el=null;break}var r=t.sibling;if(null!==r){r.return=t.return,el=r;break}el=t.return}}function Sl(e){for(;null!==el;){var t=el;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{il(4,t)}catch(l){ju(t,r,l)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var o=t.return;try{n.componentDidMount()}catch(l){ju(t,o,l)}}var i=t.return;try{al(t)}catch(l){ju(t,i,l)}break;case 5:var a=t.return;try{al(t)}catch(l){ju(t,a,l)}}}catch(l){ju(t,t.return,l)}if(t===e){el=null;break}var s=t.sibling;if(null!==s){s.return=t.return,el=s;break}el=t.return}}var El,jl=Math.ceil,Cl=w.ReactCurrentDispatcher,Tl=w.ReactCurrentOwner,Ol=w.ReactCurrentBatchConfig,Rl=0,Pl=null,Al=null,Ll=0,Nl=0,zl=jo(0),$l=0,Ml=null,Il=0,Dl=0,Fl=0,Ul=null,Bl=null,Wl=0,Hl=1/0,ql=null,Vl=!1,Kl=null,Yl=null,Ql=!1,Xl=null,Jl=0,Gl=0,Zl=null,eu=-1,tu=0;function ru(){return 0!==(6&Rl)?Ge():-1!==eu?eu:eu=Ge()}function nu(e){return 0===(1&e.mode)?1:0!==(2&Rl)&&0!==Ll?Ll&-Ll:null!==vi.transition?(0===tu&&(tu=gt()),tu):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Jt(e.type)}function ou(e,t,r,n){if(50<Gl)throw Gl=0,Zl=null,Error(a(185));yt(e,r,n),0!==(2&Rl)&&e===Pl||(e===Pl&&(0===(2&Rl)&&(Dl|=r),4===$l&&uu(e,Ll)),iu(e,n),1===r&&0===Rl&&0===(1&t.mode)&&(Hl=Ge()+500,Uo&&Ho()))}function iu(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-st(i),s=1<<a,l=o[a];-1===l?0!==(s&r)&&0===(s&n)||(o[a]=ht(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var n=pt(e,e===Pl?Ll:0);if(0===n)null!==r&&Qe(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Qe(r),1===t)0===e.tag?function(e){Uo=!0,Wo(e)}(cu.bind(null,e)):Wo(cu.bind(null,e)),so((function(){0===(6&Rl)&&Ho()})),r=null;else{switch(wt(n)){case 1:r=et;break;case 4:r=tt;break;case 16:default:r=rt;break;case 536870912:r=ot}r=Pu(r,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function au(e,t){if(eu=-1,tu=0,0!==(6&Rl))throw Error(a(327));var r=e.callbackNode;if(Su()&&e.callbackNode!==r)return null;var n=pt(e,e===Pl?Ll:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=yu(e,n);else{t=n;var o=Rl;Rl|=2;var i=gu();for(Pl===e&&Ll===t||(ql=null,Hl=Ge()+500,hu(e,t));;)try{xu();break}catch(l){mu(e,l)}_i(),Cl.current=i,Rl=o,null!==Al?t=0:(Pl=null,Ll=0,t=$l)}if(0!==t){if(2===t&&(0!==(o=mt(e))&&(n=o,t=su(e,o))),1===t)throw r=Ml,hu(e,0),uu(e,n),iu(e,Ge()),r;if(6===t)uu(e,n);else{if(o=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!ln(i(),o))return!1}catch(s){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=yu(e,n))&&(0!==(i=mt(e))&&(n=i,t=su(e,i))),1===t))throw r=Ml,hu(e,0),uu(e,n),iu(e,Ge()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(a(345));case 2:case 5:_u(e,Bl,ql);break;case 3:if(uu(e,n),(130023424&n)===n&&10<(t=Wl+500-Ge())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&n)!==n){ru(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=oo(_u.bind(null,e,Bl,ql),t);break}_u(e,Bl,ql);break;case 4:if(uu(e,n),(4194240&n)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-st(n);i=1<<s,(s=t[s])>o&&(o=s),n&=~i}if(n=o,10<(n=(120>(n=Ge()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*jl(n/1960))-n)){e.timeoutHandle=oo(_u.bind(null,e,Bl,ql),n);break}_u(e,Bl,ql);break;default:throw Error(a(329))}}}return iu(e,Ge()),e.callbackNode===r?au.bind(null,e):null}function su(e,t){var r=Ul;return e.current.memoizedState.isDehydrated&&(hu(e,t).flags|=256),2!==(e=yu(e,t))&&(t=Bl,Bl=r,null!==t&&lu(t)),e}function lu(e){null===Bl?Bl=e:Bl.push.apply(Bl,e)}function uu(e,t){for(t&=~Fl,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-st(t),n=1<<r;e[r]=-1,t&=~n}}function cu(e){if(0!==(6&Rl))throw Error(a(327));Su();var t=pt(e,0);if(0===(1&t))return iu(e,Ge()),null;var r=yu(e,t);if(0!==e.tag&&2===r){var n=mt(e);0!==n&&(t=n,r=su(e,n))}if(1===r)throw r=Ml,hu(e,0),uu(e,t),iu(e,Ge()),r;if(6===r)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_u(e,Bl,ql),iu(e,Ge()),null}function du(e,t){var r=Rl;Rl|=1;try{return e(t)}finally{0===(Rl=r)&&(Hl=Ge()+500,Uo&&Ho())}}function fu(e){null!==Xl&&0===Xl.tag&&0===(6&Rl)&&Su();var t=Rl;Rl|=1;var r=Ol.transition,n=xt;try{if(Ol.transition=null,xt=1,e)return e()}finally{xt=n,Ol.transition=r,0===(6&(Rl=t))&&Ho()}}function pu(){Nl=zl.current,Co(zl)}function hu(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,io(r)),null!==Al)for(r=Al.return;null!==r;){var n=r;switch(ni(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&zo();break;case 3:aa(),Co(Po),Co(Ro),fa();break;case 5:la(n);break;case 4:aa();break;case 13:case 19:Co(ua);break;case 10:Si(n.type._context);break;case 22:case 23:pu()}r=r.return}if(Pl=e,Al=e=zu(e.current,null),Ll=Nl=t,$l=0,Ml=null,Fl=Dl=Il=0,Bl=Ul=null,null!==Ti){for(t=0;t<Ti.length;t++)if(null!==(n=(r=Ti[t]).interleaved)){r.interleaved=null;var o=n.next,i=r.pending;if(null!==i){var a=i.next;i.next=o,n.next=a}r.pending=n}Ti=null}return e}function mu(e,t){for(;;){var r=Al;try{if(_i(),pa.current=ss,ba){for(var n=ga.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ba=!1}if(ma=0,ya=va=ga=null,xa=!1,wa=0,Tl.current=null,null===r||null===r.return){$l=1,Ml=t,Al=null;break}e:{var i=e,s=r.return,l=r,u=t;if(t=Ll,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ys(s);if(null!==h){h.flags&=-257,bs(h,s,l,0,t),1&h.mode&&vs(i,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){vs(i,c,t),vu();break e}u=Error(a(426))}else if(ai&&1&l.mode){var v=ys(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),bs(v,s,l,0,t),gi(ds(u,l));break e}}i=u=ds(u,l),4!==$l&&($l=2),null===Ul?Ul=[i]:Ul.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ii(i,ms(0,u,t));break e;case 1:l=u;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Yl||!Yl.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Ii(i,gs(i,l,t));break e}}i=i.return}while(null!==i)}ku(r)}catch(x){t=x,Al===r&&null!==r&&(Al=r=r.return);continue}break}}function gu(){var e=Cl.current;return Cl.current=ss,null===e?ss:e}function vu(){0!==$l&&3!==$l&&2!==$l||($l=4),null===Pl||0===(268435455&Il)&&0===(268435455&Dl)||uu(Pl,Ll)}function yu(t,r){var n=Rl;Rl|=2;var o=gu();for(Pl===t&&Ll===r||(ql=null,hu(t,r));;)try{bu();break}catch(e){mu(t,e)}if(_i(),Rl=n,Cl.current=o,null!==Al)throw Error(a(261));return Pl=null,Ll=0,$l}function bu(){for(;null!==Al;)wu(Al)}function xu(){for(;null!==Al&&!Xe();)wu(Al)}function wu(e){var t=El(e.alternate,e,Nl);e.memoizedProps=e.pendingProps,null===t?ku(e):Al=t,Tl.current=null}function ku(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Qs(r,t,Nl)))return void(Al=r)}else{if(null!==(r=Xs(r,t)))return r.flags&=32767,void(Al=r);if(null===e)return $l=6,void(Al=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Al=t);Al=t=e}while(null!==t);0===$l&&($l=5)}function _u(e,t,r){var n=xt,o=Ol.transition;try{Ol.transition=null,xt=1,function(e,t,r,n){do{Su()}while(null!==Xl);if(0!==(6&Rl))throw Error(a(327));r=e.finishedWork;var o=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-st(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}(e,i),e===Pl&&(Al=Pl=null,Ll=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Ql||(Ql=!0,Pu(rt,(function(){return Su(),null}))),i=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||i){i=Ol.transition,Ol.transition=null;var s=xt;xt=1;var l=Rl;Rl|=4,Tl.current=null,function(e,t){if(to=qt,hn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch(w){r=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==r||0!==o&&3!==f.nodeType||(l=s+o),f!==i||0!==n&&3!==f.nodeType||(u=s+n),3===f.nodeType&&(s+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===r&&++c===o&&(l=s),p===i&&++d===n&&(u=s),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(ro={focusedElem:e,selectionRange:r},qt=!1,el=t;null!==el;)if(e=(t=el).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,el=e;else for(;null!==el;){t=el;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:yi(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){ju(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,el=e;break}el=t.return}m=nl,nl=!1}(e,r),yl(r,e),mn(ro),qt=!!to,ro=to=null,e.current=r,xl(r,e,o),Je(),Rl=l,xt=s,Ol.transition=i}else e.current=r;if(Ql&&(Ql=!1,Xl=e,Jl=o),i=e.pendingLanes,0===i&&(Yl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),iu(e,Ge()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Vl)throw Vl=!1,e=Kl,Kl=null,e;0!==(1&Jl)&&0!==e.tag&&Su(),i=e.pendingLanes,0!==(1&i)?e===Zl?Gl++:(Gl=0,Zl=e):Gl=0,Ho()}(e,t,r,n)}finally{Ol.transition=o,xt=n}return null}function Su(){if(null!==Xl){var e=wt(Jl),t=Ol.transition,r=xt;try{if(Ol.transition=null,xt=16>e?16:e,null===Xl)var n=!1;else{if(e=Xl,Xl=null,Jl=0,0!==(6&Rl))throw Error(a(331));var o=Rl;for(Rl|=4,el=e.current;null!==el;){var i=el,s=i.child;if(0!==(16&el.flags)){var l=i.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(el=c;null!==el;){var d=el;switch(d.tag){case 0:case 11:case 15:ol(8,d,i)}var f=d.child;if(null!==f)f.return=d,el=f;else for(;null!==el;){var p=(d=el).sibling,h=d.return;if(sl(d),d===c){el=null;break}if(null!==p){p.return=h,el=p;break}el=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}el=i}}if(0!==(2064&i.subtreeFlags)&&null!==s)s.return=i,el=s;else e:for(;null!==el;){if(0!==(2048&(i=el).flags))switch(i.tag){case 0:case 11:case 15:ol(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,el=y;break e}el=i.return}}var b=e.current;for(el=b;null!==el;){var x=(s=el).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,el=x;else e:for(s=b;null!==el;){if(0!==(2048&(l=el).flags))try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(k){ju(l,l.return,k)}if(l===s){el=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,el=w;break e}el=l.return}}if(Rl=o,Ho(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(k){}n=!0}return n}finally{xt=r,Ol.transition=t}}return!1}function Eu(e,t,r){e=$i(e,t=ms(0,t=ds(r,t),1),1),t=ru(),null!==e&&(yt(e,1,t),iu(e,t))}function ju(e,t,r){if(3===e.tag)Eu(e,e,r);else for(;null!==t;){if(3===t.tag){Eu(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Yl||!Yl.has(n))){t=$i(t,e=gs(t,e=ds(r,e),1),1),e=ru(),null!==t&&(yt(t,1,e),iu(t,e));break}}t=t.return}}function Cu(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ru(),e.pingedLanes|=e.suspendedLanes&r,Pl===e&&(Ll&r)===r&&(4===$l||3===$l&&(130023424&Ll)===Ll&&500>Ge()-Wl?hu(e,0):Fl|=r),iu(e,t)}function Tu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var r=ru();null!==(e=Pi(e,t))&&(yt(e,t,r),iu(e,r))}function Ou(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Tu(e,r)}function Ru(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;null!==o&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(a(314))}null!==n&&n.delete(t),Tu(e,r)}function Pu(e,t){return Ye(e,t)}function Au(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lu(e,t,r,n){return new Au(e,t,r,n)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zu(e,t){var r=e.alternate;return null===r?((r=Lu(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function $u(e,t,r,n,o,i){var s=2;if(n=e,"function"===typeof e)Nu(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Mu(r.children,o,i,t);case E:s=8,o|=8;break;case j:return(e=Lu(12,r,t,2|o)).elementType=j,e.lanes=i,e;case R:return(e=Lu(13,r,t,o)).elementType=R,e.lanes=i,e;case P:return(e=Lu(19,r,t,o)).elementType=P,e.lanes=i,e;case N:return Iu(r,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case T:s=9;break e;case O:s=11;break e;case A:s=14;break e;case L:s=16,n=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Lu(s,r,t,o)).elementType=e,t.type=n,t.lanes=i,t}function Mu(e,t,r,n){return(e=Lu(7,e,n,t)).lanes=r,e}function Iu(e,t,r,n){return(e=Lu(22,e,n,t)).elementType=N,e.lanes=r,e.stateNode={isHidden:!1},e}function Du(e,t,r){return(e=Lu(6,e,null,t)).lanes=r,e}function Fu(e,t,r){return(t=Lu(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uu(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vt(0),this.expirationTimes=vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bu(e,t,r,n,o,i,a,s,l){return e=new Uu(e,t,r,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Lu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Li(i),e}function Wu(e){if(!e)return Oo;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(No(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var r=e.type;if(No(r))return Mo(e,r,t)}return t}function Hu(e,t,r,n,o,i,a,s,l){return(e=Bu(r,n,!0,e,0,i,0,s,l)).context=Wu(null),r=e.current,(i=zi(n=ru(),o=nu(r))).callback=void 0!==t&&null!==t?t:null,$i(r,i,o),e.current.lanes=o,yt(e,o,n),iu(e,n),e}function qu(e,t,r,n){var o=t.current,i=ru(),a=nu(o);return r=Wu(r),null===t.context?t.context=r:t.pendingContext=r,(t=zi(i,a)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=$i(o,t,a))&&(ou(e,o,a,i),Mi(e,o,a)),a}function Vu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Ku(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Yu(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}El=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Po.current)ws=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return ws=!1,function(e,t,r){switch(t.tag){case 3:Ps(t),mi();break;case 5:sa(t);break;case 1:No(t.type)&&Io(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;To(bi,n._currentValue),n._currentValue=o;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(To(ua,1&ua.current),t.flags|=128,null):0!==(r&t.child.childLanes)?Ds(e,t,r):(To(ua,1&ua.current),null!==(e=Vs(e,t,r))?e.sibling:null);To(ua,1&ua.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return Hs(e,t,r);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),To(ua,ua.current),n)break;return null;case 22:case 23:return t.lanes=0,js(e,t,r)}return Vs(e,t,r)}(e,t,r);ws=0!==(131072&e.flags)}else ws=!1,ai&&0!==(1048576&t.flags)&&ti(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;qs(e,t),e=t.pendingProps;var o=Lo(t,Ro.current);ji(t,r),o=Ea(null,t,n,e,o,r);var i=ja();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,No(n)?(i=!0,Io(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Li(t),o.updater=Wi,t.stateNode=o,o._reactInternals=t,Ki(t,n,e,r),t=Rs(null,t,n,!0,i,r)):(t.tag=0,ai&&i&&ri(t),ks(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(qs(e,t),e=t.pendingProps,n=(o=n._init)(n._payload),t.type=n,o=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===A)return 14}return 2}(n),e=yi(n,e),o){case 0:t=Ts(null,t,n,e,r);break e;case 1:t=Os(null,t,n,e,r);break e;case 11:t=_s(null,t,n,e,r);break e;case 14:t=Ss(null,t,n,yi(n.type,e),r);break e}throw Error(a(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,Ts(e,t,n,o=t.elementType===n?o:yi(n,o),r);case 1:return n=t.type,o=t.pendingProps,Os(e,t,n,o=t.elementType===n?o:yi(n,o),r);case 3:e:{if(Ps(t),null===e)throw Error(a(387));n=t.pendingProps,o=(i=t.memoizedState).element,Ni(e,t),Di(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated){if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=As(e,t,n,r,o=ds(Error(a(423)),t));break e}if(n!==o){t=As(e,t,n,r,o=ds(Error(a(424)),t));break e}for(ii=co(t.stateNode.containerInfo.firstChild),oi=t,ai=!0,si=null,r=Zi(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(mi(),n===o){t=Vs(e,t,r);break e}ks(e,t,n,r)}t=t.child}return t;case 5:return sa(t),null===e&&di(t),n=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,s=o.children,no(n,o)?s=null:null!==i&&no(n,i)&&(t.flags|=32),Cs(e,t),ks(e,t,s,r),t.child;case 6:return null===e&&di(t),null;case 13:return Ds(e,t,r);case 4:return ia(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=Gi(t,null,n,r):ks(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,_s(e,t,n,o=t.elementType===n?o:yi(n,o),r);case 7:return ks(e,t,t.pendingProps,r),t.child;case 8:case 12:return ks(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,To(bi,n._currentValue),n._currentValue=s,null!==i)if(ln(i.value,s)){if(i.children===o.children&&!Po.current){t=Vs(e,t,r);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var l=i.dependencies;if(null!==l){s=i.child;for(var u=l.firstContext;null!==u;){if(u.context===n){if(1===i.tag){(u=zi(-1,r&-r)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=r,null!==(u=i.alternate)&&(u.lanes|=r),Ei(i.return,r,t),l.lanes|=r;break}u=u.next}}else if(10===i.tag)s=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(s=i.return))throw Error(a(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),Ei(s,r,t),s=i.sibling}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===t){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}ks(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,ji(t,r),n=n(o=Ci(o)),t.flags|=1,ks(e,t,n,r),t.child;case 14:return o=yi(n=t.type,t.pendingProps),Ss(e,t,n,o=yi(n.type,o),r);case 15:return Es(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:yi(n,o),qs(e,t),t.tag=1,No(n)?(e=!0,Io(t)):e=!1,ji(t,r),qi(t,n,o),Ki(t,n,o,r),Rs(null,t,n,!0,e,r);case 19:return Hs(e,t,r);case 22:return js(e,t,r)}throw Error(a(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Xu(e){this._internalRoot=e}function Ju(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function ec(){}function tc(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if("function"===typeof o){var s=o;o=function(){var e=Vu(a);s.call(e)}}qu(t,a,e,o)}else a=function(e,t,r,n,o){if(o){if("function"===typeof n){var i=n;n=function(){var e=Vu(a);i.call(e)}}var a=Hu(t,n,e,0,null,!1,0,"",ec);return e._reactRootContainer=a,e[go]=a.current,Wn(8===e.nodeType?e.parentNode:e),fu(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof n){var s=n;n=function(){var e=Vu(l);s.call(e)}}var l=Bu(e,0,!1,null,0,!1,0,"",ec);return e._reactRootContainer=l,e[go]=l.current,Wn(8===e.nodeType?e.parentNode:e),fu((function(){qu(t,l,r,n)})),l}(r,t,e,o,n);return Vu(a)}Ju.prototype.render=Xu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));qu(e,t,null,null)},Ju.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;fu((function(){qu(null,e,null,null)})),t[go]=null}},Ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nt.length&&0!==t&&t<Nt[r].priority;r++);Nt.splice(r,0,e),0===r&&It(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ft(t.pendingLanes);0!==r&&(bt(t,1|r),iu(t,Ge()),0===(6&Rl)&&(Hl=Ge()+500,Ho()))}break;case 13:fu((function(){var t=Pi(e,1);if(null!==t){var r=ru();ou(t,e,1,r)}})),Yu(e,1)}},_t=function(e){if(13===e.tag){var t=Pi(e,134217728);if(null!==t)ou(t,e,134217728,ru());Yu(e,134217728)}},St=function(e){if(13===e.tag){var t=nu(e),r=Pi(e,t);if(null!==r)ou(r,e,t,ru());Yu(e,t)}},Et=function(){return xt},jt=function(e,t){var r=xt;try{return xt=e,t()}finally{xt=r}},_e=function(e,t,r){switch(t){case"input":if(Z(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=_o(n);if(!o)throw Error(a(90));Y(n),Z(n,o)}}}break;case"textarea":ae(e,r);break;case"select":null!=(t=r.value)&&ne(e,!!r.multiple,t,!1)}},Oe=du,Re=fu;var rc={usingClientEntryPoint:!1,Events:[wo,ko,_o,Ce,Te,du]},nc={findFiberByHostInstance:xo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{it=ic.inject(oc),at=ic}catch(de){}}r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rc,r.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(a(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:_,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},r.createRoot=function(e,t){if(!Gu(e))throw Error(a(299));var r=!1,n="",o=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Bu(e,1,!1,null,0,r,0,n,o),e[go]=t.current,Wn(8===e.nodeType?e.parentNode:e),new Xu(t)},r.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},r.flushSync=function(e){return fu(e)},r.hydrate=function(e,t,r){if(!Zu(t))throw Error(a(200));return tc(null,e,t,!0,r)},r.hydrateRoot=function(e,t,r){if(!Gu(e))throw Error(a(405));var n=null!=r&&r.hydratedSources||null,o=!1,i="",s=Qu;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(o=!0),void 0!==r.identifierPrefix&&(i=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=Hu(t,null,e,1,null!=r?r:null,o,0,i,s),e[go]=t.current,Wn(e),n)for(e=0;e<n.length;e++)o=(o=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ju(t)},r.render=function(e,t,r){if(!Zu(t))throw Error(a(200));return tc(null,e,t,!1,r)},r.unmountComponentAtNode=function(e){if(!Zu(e))throw Error(a(40));return!!e._reactRootContainer&&(fu((function(){tc(null,null,e,!1,(function(){e._reactRootContainer=null,e[go]=null}))})),!0)},r.unstable_batchedUpdates=du,r.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Zu(r))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return tc(e,t,r,!1,n)},r.version="18.2.0-next-9e3b772b8-20220608"},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+"."+{551:"1adcc008",640:"1c778d14"}[e]+".chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={};n.l=(t,r,o,i)=>{if(e[t])e[t].push(r);else{var a,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==t){a=c;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=t),e[t]=[r];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],s=r[1],l=r[2],u=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)l(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var t={};n.r(t),n.d(t,{hasBrowserEnv:()=>ci,hasStandardBrowserEnv:()=>fi,hasStandardBrowserWebWorkerEnv:()=>pi,navigator:()=>di,origin:()=>hi});var r={};n.r(r),n.d(r,{Decoder:()=>Us,Encoder:()=>Ds,PacketType:()=>Is,protocol:()=>Ms});var o=n(43),i=n(391),a=(n(175),"popstate");function s(){return h((function(e,t){let{pathname:r,search:n,hash:o}=e.location;return d("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:f(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(t,r){if(!t){"undefined"!==typeof console&&console.warn(r);try{throw new Error(r)}catch(e){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?p(t):t,state:r,key:t&&t.key||n||Math.random().toString(36).substring(2,10)}}function f(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function p(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function h(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:i=!1}=n,s=o.history,u="POP",p=null,h=m();function m(){return(s.state||{idx:null}).idx}function g(){u="POP";let e=m(),t=null==e?null:e-h;h=e,p&&p({action:u,location:y.location,delta:t})}function v(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,r="string"===typeof e?e:f(e);return r=r.replace(/ $/,"%20"),l(t,`No window.location.(origin|href) available to create URL for href: ${r}`),new URL(r,t)}null==h&&(h=0,s.replaceState({...s.state,idx:h},""));let y={get action(){return u},get location(){return e(o,s)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(a,g),p=e,()=>{o.removeEventListener(a,g),p=null}},createHref:e=>t(o,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){u="PUSH";let n=d(y.location,e,t);r&&r(n,e),h=m()+1;let a=c(n,h),l=y.createHref(n);try{s.pushState(a,"",l)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;o.location.assign(l)}i&&p&&p({action:u,location:y.location,delta:1})},replace:function(e,t){u="REPLACE";let n=d(y.location,e,t);r&&r(n,e),h=m();let o=c(n,h),a=y.createHref(n);s.replaceState(o,"",a),i&&p&&p({action:u,location:y.location,delta:0})},go:e=>s.go(e)};return y}new WeakMap;function m(e,t){return g(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function g(e,t,r,n){let o=P(("string"===typeof t?p(t):t).pathname||"/",r);if(null==o)return null;let i=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=R(o);a=C(i[s],e,n)}return a}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(l(a.relativePath.startsWith(n),`Absolute route path "${a.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(n.length));let s=$([n,a.relativePath]),u=r.concat(a);e.children&&e.children.length>0&&(l(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),v(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:j(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let r of y(e.path))o(e,t,r);else o(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(0===n.length)return o?[i,""]:[i];let a=y(n.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var b=/^:[\w-]+$/,x=3,w=2,k=1,_=10,S=-2,E=e=>"*"===e;function j(e,t){let r=e.split("/"),n=r.length;return r.some(E)&&(n+=S),t&&(n+=w),r.filter((e=>!E(e))).reduce(((e,t)=>e+(b.test(t)?x:""===t?k:_)),n)}function C(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:n}=e,o={},i="/",a=[];for(let s=0;s<n.length;++s){let e=n[s],l=s===n.length-1,u="/"===i?t:t.slice(i.length)||"/",c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&r&&!n[n.length-1].route.index&&(c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:$([i,c.pathname]),pathnameBase:M($([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=$([i,c.pathnameBase]))}return a}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=O(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1),l=n.reduce(((e,t,r)=>{let{paramName:n,isOptional:o}=t;if("*"===n){let e=s[r]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[r];return e[n]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:i,pathnameBase:a,pattern:e}}function O(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];u("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(n.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function R(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return u(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function A(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function L(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function N(e){let t=L(e);return t.map(((e,r)=>r===t.length-1?e.pathname:e.pathnameBase))}function z(e,t,r){let n,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?n=p(e):(n={...e},l(!n.pathname||!n.pathname.includes("?"),A("?","pathname","search",n)),l(!n.pathname||!n.pathname.includes("#"),A("#","pathname","hash",n)),l(!n.search||!n.search.includes("#"),A("#","search","hash",n)));let i,a=""===e||""===n.pathname,s=a?"/":n.pathname;if(null==s)i=r;else{let e=t.length-1;if(!o&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;n.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:n="",hash:o=""}="string"===typeof e?p(e):e,i=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:i,search:I(n),hash:D(o)}}(n,i),c=s&&"/"!==s&&s.endsWith("/"),d=(a||"."===s)&&r.endsWith("/");return u.pathname.endsWith("/")||!c&&!d||(u.pathname+="/"),u}var $=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",D=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var U=["POST","PUT","PATCH","DELETE"],B=(new Set(U),["GET",...U]);new Set(B),Symbol("ResetLoaderData");var W=o.createContext(null);W.displayName="DataRouter";var H=o.createContext(null);H.displayName="DataRouterState";var q=o.createContext({isTransitioning:!1});q.displayName="ViewTransition";var V=o.createContext(new Map);V.displayName="Fetchers";var K=o.createContext(null);K.displayName="Await";var Y=o.createContext(null);Y.displayName="Navigation";var Q=o.createContext(null);Q.displayName="Location";var X=o.createContext({outlet:null,matches:[],isDataRoute:!1});X.displayName="Route";var J=o.createContext(null);J.displayName="RouteError";function G(){return null!=o.useContext(Q)}function Z(){return l(G(),"useLocation() may be used only in the context of a <Router> component."),o.useContext(Q).location}var ee="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function te(e){o.useContext(Y).static||o.useLayoutEffect(e)}function re(){let{isDataRoute:e}=o.useContext(X);return e?function(){let{router:e}=fe("useNavigate"),t=he("useNavigate"),r=o.useRef(!1);te((()=>{r.current=!0}));let n=o.useCallback((async function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(r.current,ee),r.current&&("number"===typeof n?e.navigate(n):await e.navigate(n,{fromRouteId:t,...o}))}),[e,t]);return n}():function(){l(G(),"useNavigate() may be used only in the context of a <Router> component.");let e=o.useContext(W),{basename:t,navigator:r}=o.useContext(Y),{matches:n}=o.useContext(X),{pathname:i}=Z(),a=JSON.stringify(N(n)),s=o.useRef(!1);te((()=>{s.current=!0}));let c=o.useCallback((function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(s.current,ee),!s.current)return;if("number"===typeof n)return void r.go(n);let l=z(n,JSON.parse(a),i,"path"===o.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:$([t,l.pathname])),(o.replace?r.replace:r.push)(l,o.state,o)}),[t,r,a,i,e]);return c}()}o.createContext(null);function ne(){let{matches:e}=o.useContext(X),t=e[e.length-1];return t?t.params:{}}function oe(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=o.useContext(X),{pathname:n}=Z(),i=JSON.stringify(N(r));return o.useMemo((()=>z(e,JSON.parse(i),n,"path"===t)),[e,i,n,t])}function ie(e,t,r,n){l(G(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:a}=o.useContext(Y),{matches:s}=o.useContext(X),c=s[s.length-1],d=c?c.params:{},f=c?c.pathname:"/",h=c?c.pathnameBase:"/",g=c&&c.route;{let e=g&&g.path||"";ve(f,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=Z();if(t){let e="string"===typeof t?p(t):t;l("/"===h||e.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let b=v.pathname||"/",x=b;if("/"!==h){let e=h.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!a&&r&&r.matches&&r.matches.length>0?r.matches:m(e,{pathname:x});u(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),u(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=ce(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:$([h,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:$([h,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,r,n);return t&&k?o.createElement(Q.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},k):k}function ae(){let e=me(),t=F(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=o.createElement(o.Fragment,null,o.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),o.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",o.createElement("code",{style:a},"ErrorBoundary")," or"," ",o.createElement("code",{style:a},"errorElement")," prop on your route.")),o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:i},r):null,s)}var se=o.createElement(ae,null),le=class extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?o.createElement(X.Provider,{value:this.props.routeContext},o.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ue(e){let{routeContext:t,match:r,children:n}=e,i=o.useContext(W);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(X.Provider,{value:t},n)}function ce(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let n=e,i=r?.errors;if(null!=i){let e=n.findIndex((e=>e.route.id&&void 0!==i?.[e.route.id]));l(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),n=n.slice(0,Math.min(n.length,e+1))}let a=!1,s=-1;if(r)for(let o=0;o<n.length;o++){let e=n[o];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=o),e.route.id){let{loaderData:t,errors:o}=r,i=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!o||void 0===o[e.route.id]);if(e.route.lazy||i){a=!0,n=s>=0?n.slice(0,s+1):[n[0]];break}}}return n.reduceRight(((e,l,u)=>{let c,d=!1,f=null,p=null;r&&(c=i&&l.route.id?i[l.route.id]:void 0,f=l.route.errorElement||se,a&&(s<0&&0===u?(ve("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===u&&(d=!0,p=l.route.hydrateFallbackElement||null)));let h=t.concat(n.slice(0,u+1)),m=()=>{let t;return t=c?f:d?p:l.route.Component?o.createElement(l.route.Component,null):l.route.element?l.route.element:e,o.createElement(ue,{match:l,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:t})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===u)?o.createElement(le,{location:r.location,revalidation:r.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function de(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fe(e){let t=o.useContext(W);return l(t,de(e)),t}function pe(e){let t=o.useContext(H);return l(t,de(e)),t}function he(e){let t=function(e){let t=o.useContext(X);return l(t,de(e)),t}(e),r=t.matches[t.matches.length-1];return l(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function me(){let e=o.useContext(J),t=pe("useRouteError"),r=he("useRouteError");return void 0!==e?e:t.errors?.[r]}var ge={};function ve(e,t,r){t||ge[e]||(ge[e]=!0,u(!1,r))}o.memo((function(e){let{routes:t,future:r,state:n}=e;return ie(t,void 0,n,r)}));function ye(e){let{to:t,replace:r,state:n,relative:i}=e;l(G(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=o.useContext(Y);u(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=o.useContext(X),{pathname:c}=Z(),d=re(),f=z(t,N(s),c,"path"===i),p=JSON.stringify(f);return o.useEffect((()=>{d(JSON.parse(p),{replace:r,state:n,relative:i})}),[d,p,i,r,n]),null}function be(e){l(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function xe(e){let{basename:t="/",children:r=null,location:n,navigationType:i="POP",navigator:a,static:s=!1}=e;l(!G(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=o.useMemo((()=>({basename:c,navigator:a,static:s,future:{}})),[c,a,s]);"string"===typeof n&&(n=p(n));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:v="default"}=n,y=o.useMemo((()=>{let e=P(f,c);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:i}}),[c,f,h,m,g,v,i]);return u(null!=y,`<Router basename="${c}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:o.createElement(Y.Provider,{value:d},o.createElement(Q.Provider,{children:r,value:y}))}function we(e){let{children:t,location:r}=e;return ie(ke(t),r)}o.Component;function ke(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return o.Children.forEach(e,((e,n)=>{if(!o.isValidElement(e))return;let i=[...t,n];if(e.type===o.Fragment)return void r.push.apply(r,ke(e.props.children,i));l(e.type===be,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),l(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ke(e.props.children,i)),r.push(a)})),r}var _e="get",Se="application/x-www-form-urlencoded";function Ee(e){return null!=e&&"string"===typeof e.tagName}var je=null;var Ce=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Te(e){return null==e||Ce.has(e)?e:(u(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Se}"`),null)}function Oe(t,r){let n,o,i,a,s;if(Ee(l=t)&&"form"===l.tagName.toLowerCase()){let e=t.getAttribute("action");o=e?P(e,r):null,n=t.getAttribute("method")||_e,i=Te(t.getAttribute("enctype"))||Se,a=new FormData(t)}else if(function(e){return Ee(e)&&"button"===e.tagName.toLowerCase()}(t)||function(e){return Ee(e)&&"input"===e.tagName.toLowerCase()}(t)&&("submit"===t.type||"image"===t.type)){let s=t.form;if(null==s)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||s.getAttribute("action");if(o=l?P(l,r):null,n=t.getAttribute("formmethod")||s.getAttribute("method")||_e,i=Te(t.getAttribute("formenctype"))||Te(s.getAttribute("enctype"))||Se,a=new FormData(s,t),!function(){if(null===je)try{new FormData(document.createElement("form"),0),je=!1}catch(e){je=!0}return je}()){let{name:e,type:r,value:n}=t;if("image"===r){let t=e?`${e}.`:"";a.append(`${t}x`,"0"),a.append(`${t}y`,"0")}else e&&a.append(e,n)}}else{if(Ee(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=_e,o=null,i=Se,s=t}var l;return a&&"text/plain"===i&&(s=a,a=void 0),{action:o,method:n.toLowerCase(),encType:i,formData:a,body:s}}function Re(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Pe(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ae(e){return null!=e&&"string"===typeof e.page}function Le(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Ne(e,t,r,n,o,i){let a=(e,t)=>!r[t]||e.route.id!==r[t].route.id,s=(e,t)=>r[t].pathname!==e.pathname||r[t].route.path?.endsWith("*")&&r[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>a(e,t)||s(e,t))):"data"===i?t.filter(((t,i)=>{let l=n.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof n)return n}return!0})):[]}function ze(e,t){let{includeHydrateFallback:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=e.map((e=>{let n=t.routes[e.route.id];if(!n)return[];let o=[n.module];return n.clientActionModule&&(o=o.concat(n.clientActionModule)),n.clientLoaderModule&&(o=o.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(o=o.concat(n.hydrateFallbackModule)),n.imports&&(o=o.concat(n.imports)),o})).flat(1),[...new Set(n)];var n}function $e(e,t){let r=new Set,n=new Set(t);return e.reduce(((e,o)=>{if(t&&!Ae(o)&&"script"===o.as&&o.href&&n.has(o.href))return e;let i=JSON.stringify(function(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}(o));return r.has(i)||(r.add(i),e.push({key:i,link:o})),e}),[])}function Me(e){return{__html:e}}Symbol("SingleFetchRedirect");var Ie=new Set([100,101,204,205]);function De(e,t){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname="_root.data":t&&"/"===P(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}o.Component;function Fe(e){let{error:t,isOutsideRemixApp:r}=e;console.error(t);let n,i=o.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(F(t))return o.createElement(Ue,{title:"Unhandled Thrown Response!"},o.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),i);if(t instanceof Error)0;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);new Error(e)}return o.createElement(Ue,{title:"Application Error!",isOutsideRemixApp:r},o.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),o.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},n.stack),i)}function Ue(e){let{title:t,renderScripts:r,isOutsideRemixApp:n,children:i}=e,{routeModules:a}=Ve();return a.root?.Layout&&!n?i:o.createElement("html",{lang:"en"},o.createElement("head",null,o.createElement("meta",{charSet:"utf-8"}),o.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),o.createElement("title",null,t)),o.createElement("body",null,o.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?o.createElement(Ze,null):null)))}function Be(e){return!0===e}function We(){let e=o.useContext(W);return Re(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function He(){let e=o.useContext(H);return Re(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var qe=o.createContext(void 0);function Ve(){let e=o.useContext(qe);return Re(e,"You must render this element inside a <HydratedRouter> element"),e}function Ke(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ye(e,t,r){if(r&&!Ge)return[e[0]];if(t){let r=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,r+1)}return e}function Qe(e){let{page:t,...r}=e,{router:n}=We(),i=o.useMemo((()=>m(n.routes,t,n.basename)),[n.routes,t,n.basename]);return i?o.createElement(Je,{page:t,matches:i,...r}):null}function Xe(e){let{manifest:t,routeModules:r}=Ve(),[n,i]=o.useState([]);return o.useEffect((()=>{let n=!1;return async function(e,t,r){let n=await Promise.all(e.map((async e=>{let n=t.routes[e.route.id];if(n){let e=await Pe(n,r);return e.links?e.links():[]}return[]})));return $e(n.flat(1).filter(Le).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(e,t,r).then((e=>{n||i(e)})),()=>{n=!0}}),[e,t,r]),n}function Je(e){let{page:t,matches:r,...n}=e,i=Z(),{manifest:a,routeModules:s}=Ve(),{basename:l}=We(),{loaderData:u,matches:c}=He(),d=o.useMemo((()=>Ne(t,r,c,a,i,"data")),[t,r,c,a,i]),f=o.useMemo((()=>Ne(t,r,c,a,i,"assets")),[t,r,c,a,i]),p=o.useMemo((()=>{if(t===i.pathname+i.search+i.hash)return[];let e=new Set,n=!1;if(r.forEach((t=>{let r=a.routes[t.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===t.route.id))&&t.route.id in u&&s[t.route.id]?.shouldRevalidate||r.hasClientLoader?n=!0:e.add(t.route.id))})),0===e.size)return[];let o=De(t,l);return n&&e.size>0&&o.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[o.pathname+o.search]}),[l,u,i,a,d,r,t,s]),h=o.useMemo((()=>ze(f,a)),[f,a]),m=Xe(f);return o.createElement(o.Fragment,null,p.map((e=>o.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n}))),h.map((e=>o.createElement("link",{key:e,rel:"modulepreload",href:e,...n}))),m.map((e=>{let{key:t,link:r}=e;return o.createElement("link",{key:t,...r})})))}qe.displayName="FrameworkContext";var Ge=!1;function Ze(e){let{manifest:t,serverHandoffString:r,isSpaMode:n,ssr:i,renderMeta:a}=Ve(),{router:s,static:l,staticContext:u}=We(),{matches:c}=He(),d=Be(i);a&&(a.didRenderScripts=!0);let f=Ye(c,null,n);o.useEffect((()=>{0}),[]);let p=o.useMemo((()=>{let n=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=l?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(t.url)}`};\n${f.map(((e,r)=>{let n=`route${r}`,o=t.routes[e.route.id];Re(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:u}=o,c=[...i?[{module:i,varName:`${n}_clientAction`}]:[],...a?[{module:a,varName:`${n}_clientLoader`}]:[],...s?[{module:s,varName:`${n}_clientMiddleware`}]:[],...l?[{module:l,varName:`${n}_HydrateFallback`}]:[],{module:u,varName:`${n}_main`}];return 1===c.length?`import * as ${n} from ${JSON.stringify(u)};`:[c.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${n} = {${c.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:r,...n}=e,o=new Set(t.state.matches.map((e=>e.route.id))),i=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(i.pop();i.length>0;)a.push(`/${i.join("/")}`),i.pop();a.forEach((e=>{let r=m(t.routes,e,t.basename);r&&r.forEach((e=>o.add(e.route.id)))}));let s=[...o].reduce(((e,t)=>Object.assign(e,{[t]:n.routes[t]})),{});return{...n,routes:s,sri:!!r||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return o.createElement(o.Fragment,null,o.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Me(n),type:void 0}),o.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Me(i),type:"module",async:!0}))}),[]),h=Ge?[]:(t.entry.imports.concat(ze(f,t,{includeHydrateFallback:!0})),[...new Set(g)]);var g;let v="object"===typeof t.sri?t.sri:{};return Ge?null:o.createElement(o.Fragment,null,"object"===typeof t.sri?o.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,d?null:o.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:v[t.url],suppressHydrationWarning:!0}),o.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:v[t.entry.module],suppressHydrationWarning:!0}),h.map((t=>o.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:v[t],suppressHydrationWarning:!0}))),p)}function et(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var tt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{tt&&(window.__reactRouterVersion="7.5.3")}catch(e){}function rt(e){let{basename:t,children:r,window:n}=e,i=o.useRef();null==i.current&&(i.current=s({window:n,v5Compat:!0}));let a=i.current,[l,u]=o.useState({action:a.action,location:a.location}),c=o.useCallback((e=>{o.startTransition((()=>u(e)))}),[u]);return o.useLayoutEffect((()=>a.listen(c)),[a,c]),o.createElement(xe,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:a})}var nt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ot=o.forwardRef((function(t,r){let n,{onClick:i,discover:a="render",prefetch:s="none",relative:c,reloadDocument:d,replace:p,state:h,target:m,to:g,preventScrollReset:v,viewTransition:y,...b}=t,{basename:x}=o.useContext(Y),w="string"===typeof g&&nt.test(g),k=!1;if("string"===typeof g&&w&&(n=g,tt))try{let e=new URL(window.location.href),t=g.startsWith("//")?new URL(e.protocol+g):new URL(g),r=P(t.pathname,x);t.origin===e.origin&&null!=r?g=r+t.search+t.hash:k=!0}catch(e){u(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(G(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=o.useContext(Y),{hash:i,pathname:a,search:s}=oe(e,{relative:t}),u=a;return"/"!==r&&(u="/"===a?r:$([r,a])),n.createHref({pathname:u,search:s,hash:i})}(g,{relative:c}),[S,E,j]=function(e,t){let r=o.useContext(qe),[n,i]=o.useState(!1),[a,s]=o.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=t,p=o.useRef(null);o.useEffect((()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[e]),o.useEffect((()=>{if(n){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[n]);let h=()=>{i(!0)},m=()=>{i(!1),s(!1)};return r?"intent"!==e?[a,p,{}]:[a,p,{onFocus:Ke(l,h),onBlur:Ke(u,m),onMouseEnter:Ke(c,h),onMouseLeave:Ke(d,m),onTouchStart:Ke(f,h)}]:[!1,p,{}]}(s,b),C=function(e){let{target:t,replace:r,state:n,preventScrollReset:i,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=re(),u=Z(),c=oe(e,{relative:a});return o.useCallback((o=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(o,t)){o.preventDefault();let t=void 0!==r?r:f(u)===f(c);l(e,{replace:t,state:n,preventScrollReset:i,relative:a,viewTransition:s})}}),[u,l,c,r,n,t,e,i,a,s])}(g,{replace:p,state:h,target:m,preventScrollReset:v,relative:c,viewTransition:y});let T=o.createElement("a",{...b,...j,href:n||_,onClick:k||d?i:function(e){i&&i(e),e.defaultPrevented||C(e)},ref:et(r,E),target:m,"data-discover":w||"render"!==a?void 0:"true"});return S&&!w?o.createElement(o.Fragment,null,T,o.createElement(Qe,{page:_})):T}));ot.displayName="Link",o.forwardRef((function(e,t){let{"aria-current":r="page",caseSensitive:n=!1,className:i="",end:a=!1,style:s,to:u,viewTransition:c,children:d,...f}=e,p=oe(u,{relative:f.relative}),h=Z(),m=o.useContext(H),{navigator:g,basename:v}=o.useContext(Y),y=null!=m&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=o.useContext(q);l(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=st("useViewTransitionState"),i=oe(e,{relative:t.relative});if(!r.isTransitioning)return!1;let a=P(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=P(r.nextLocation.pathname,n)||r.nextLocation.pathname;return null!=T(i.pathname,s)||null!=T(i.pathname,a)}(p)&&!0===c,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=P(w,v)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let _,S=x===b||!a&&x.startsWith(b)&&"/"===x.charAt(k),E=null!=w&&(w===b||!a&&w.startsWith(b)&&"/"===w.charAt(b.length)),j={isActive:S,isPending:E,isTransitioning:y},C=S?r:void 0;_="function"===typeof i?i(j):[i,S?"active":null,E?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let O="function"===typeof s?s(j):s;return o.createElement(ot,{...f,"aria-current":C,className:_,ref:t,style:O,to:u,viewTransition:c},"function"===typeof d?d(j):d)})).displayName="NavLink";var it=o.forwardRef(((e,t)=>{let{discover:r="render",fetcherKey:n,navigate:i,reloadDocument:a,replace:s,state:u,method:c=_e,action:d,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,...v}=e,y=ct(),b=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=o.useContext(Y),n=o.useContext(X);l(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),a={...oe(e||".",{relative:t})},s=Z();if(null==e){a.search=s.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),r=t.some((e=>""===e));if(r){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let r=e.toString();a.search=r?`?${r}`:""}}e&&"."!==e||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:$([r,a.pathname]));return f(a)}(d,{relative:h}),x="get"===c.toLowerCase()?"get":"post",w="string"===typeof d&&nt.test(d);return o.createElement("form",{ref:t,method:x,action:b,onSubmit:a?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,r=t?.getAttribute("formmethod")||c;y(t||e.currentTarget,{fetcherKey:n,method:r,navigate:i,replace:s,state:u,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function at(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function st(e){let t=o.useContext(W);return l(t,at(e)),t}it.displayName="Form";var lt=0,ut=()=>`__${String(++lt)}__`;function ct(){let{router:e}=st("useSubmit"),{basename:t}=o.useContext(Y),r=he("useRouteId");return o.useCallback((async function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:s,formData:l,body:u}=Oe(n,t);if(!1===o.navigate){let t=o.fetcherKey||ut();await e.fetch(t,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[e,t,r])}new TextEncoder;var dt=function(){return dt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},dt.apply(this,arguments)};Object.create;function ft(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var pt=n(324),ht=n.n(pt),mt="-ms-",gt="-moz-",vt="-webkit-",yt="comm",bt="rule",xt="decl",wt="@keyframes",kt=Math.abs,_t=String.fromCharCode,St=Object.assign;function Et(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function Ct(e,t,r){return e.replace(t,r)}function Tt(e,t,r){return e.indexOf(t,r)}function Ot(e,t){return 0|e.charCodeAt(t)}function Rt(e,t,r){return e.slice(t,r)}function Pt(e){return e.length}function At(e){return e.length}function Lt(e,t){return t.push(e),e}function Nt(e,t){return e.filter((function(e){return!jt(e,t)}))}var zt=1,$t=1,Mt=0,It=0,Dt=0,Ft="";function Ut(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:zt,column:$t,length:a,return:"",siblings:s}}function Bt(e,t){return St(Ut("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Wt(e){for(;e.root;)e=Bt(e.root,{children:[e]});Lt(e,e.siblings)}function Ht(){return Dt=It>0?Ot(Ft,--It):0,$t--,10===Dt&&($t=1,zt--),Dt}function qt(){return Dt=It<Mt?Ot(Ft,It++):0,$t++,10===Dt&&($t=1,zt++),Dt}function Vt(){return Ot(Ft,It)}function Kt(){return It}function Yt(e,t){return Rt(Ft,e,t)}function Qt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xt(e){return zt=$t=1,Mt=Pt(Ft=e),It=0,[]}function Jt(e){return Ft="",e}function Gt(e){return Et(Yt(It-1,tr(91===e?e+2:40===e?e+1:e)))}function Zt(e){for(;(Dt=Vt())&&Dt<33;)qt();return Qt(e)>2||Qt(Dt)>3?"":" "}function er(e,t){for(;--t&&qt()&&!(Dt<48||Dt>102||Dt>57&&Dt<65||Dt>70&&Dt<97););return Yt(e,Kt()+(t<6&&32==Vt()&&32==qt()))}function tr(e){for(;qt();)switch(Dt){case e:return It;case 34:case 39:34!==e&&39!==e&&tr(Dt);break;case 40:41===e&&tr(e);break;case 92:qt()}return It}function rr(e,t){for(;qt()&&e+Dt!==57&&(e+Dt!==84||47!==Vt()););return"/*"+Yt(t,It-1)+"*"+_t(47===e?e:qt())}function nr(e){for(;!Qt(Vt());)qt();return Yt(e,It)}function or(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ir(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case xt:return e.return=e.return||e.value;case yt:return"";case wt:return e.return=e.value+"{"+or(e.children,n)+"}";case bt:if(!Pt(e.value=e.props.join(",")))return""}return Pt(r=or(e.children,n))?e.return=e.value+"{"+r+"}":""}function ar(e,t,r){switch(function(e,t){return 45^Ot(e,0)?(((t<<2^Ot(e,0))<<2^Ot(e,1))<<2^Ot(e,2))<<2^Ot(e,3):0}(e,t)){case 5103:return vt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return vt+e+e;case 4789:return gt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return vt+e+gt+e+mt+e+e;case 5936:switch(Ot(e,t+11)){case 114:return vt+e+mt+Ct(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return vt+e+mt+Ct(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return vt+e+mt+Ct(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return vt+e+mt+e+e;case 6165:return vt+e+mt+"flex-"+e+e;case 5187:return vt+e+Ct(e,/(\w+).+(:[^]+)/,vt+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return vt+e+mt+"flex-item-"+Ct(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":mt+"grid-row-"+Ct(e,/flex-|-self/g,""))+e;case 4675:return vt+e+mt+"flex-line-pack"+Ct(e,/align-content|flex-|-self/g,"")+e;case 5548:return vt+e+mt+Ct(e,"shrink","negative")+e;case 5292:return vt+e+mt+Ct(e,"basis","preferred-size")+e;case 6060:return vt+"box-"+Ct(e,"-grow","")+vt+e+mt+Ct(e,"grow","positive")+e;case 4554:return vt+Ct(e,/([^-])(transform)/g,"$1"+vt+"$2")+e;case 6187:return Ct(Ct(Ct(e,/(zoom-|grab)/,vt+"$1"),/(image-set)/,vt+"$1"),e,"")+e;case 5495:case 3959:return Ct(e,/(image-set\([^]*)/,vt+"$1$`$1");case 4968:return Ct(Ct(e,/(.+:)(flex-)?(.*)/,vt+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+vt+e+e;case 4200:if(!jt(e,/flex-|baseline/))return mt+"grid-column-align"+Rt(e,t)+e;break;case 2592:case 3360:return mt+Ct(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,jt(e.props,/grid-\w+-end/)}))?~Tt(e+(r=r[t].value),"span",0)?e:mt+Ct(e,"-start","")+e+mt+"grid-row-span:"+(~Tt(r,"span",0)?jt(r,/\d+/):+jt(r,/\d+/)-+jt(e,/\d+/))+";":mt+Ct(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return jt(e.props,/grid-\w+-start/)}))?e:mt+Ct(Ct(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ct(e,/(.+)-inline(.+)/,vt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pt(e)-1-t>6)switch(Ot(e,t+1)){case 109:if(45!==Ot(e,t+4))break;case 102:return Ct(e,/(.+:)(.+)-([^]+)/,"$1"+vt+"$2-$3$1"+gt+(108==Ot(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Tt(e,"stretch",0)?ar(Ct(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Ct(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,i,a,s){return mt+r+":"+n+s+(o?mt+r+"-span:"+(i?a:+a-+n)+s:"")+e}));case 4949:if(121===Ot(e,t+6))return Ct(e,":",":"+vt)+e;break;case 6444:switch(Ot(e,45===Ot(e,14)?18:11)){case 120:return Ct(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+vt+(45===Ot(e,14)?"inline-":"")+"box$3$1"+vt+"$2$3$1"+mt+"$2box$3")+e;case 100:return Ct(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ct(e,"scroll-","scroll-snap-")+e}return e}function sr(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case xt:return void(e.return=ar(e.value,e.length,r));case wt:return or([Bt(e,{value:Ct(e.value,"@","@"+vt)})],n);case bt:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(jt(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wt(Bt(e,{props:[Ct(t,/:(read-\w+)/,":-moz-$1")]})),Wt(Bt(e,{props:[t]})),St(e,{props:Nt(r,n)});break;case"::placeholder":Wt(Bt(e,{props:[Ct(t,/:(plac\w+)/,":"+vt+"input-$1")]})),Wt(Bt(e,{props:[Ct(t,/:(plac\w+)/,":-moz-$1")]})),Wt(Bt(e,{props:[Ct(t,/:(plac\w+)/,mt+"input-$1")]})),Wt(Bt(e,{props:[t]})),St(e,{props:Nt(r,n)})}return""}))}}function lr(e){return Jt(ur("",null,null,null,[""],e=Xt(e),0,[0],e))}function ur(e,t,r,n,o,i,a,s,l){for(var u=0,c=0,d=a,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=i,k=n,_=b;g;)switch(h=y,y=qt()){case 40:if(108!=h&&58==Ot(_,d-1)){-1!=Tt(_+=Ct(Gt(y),"&","&\f"),"&\f",kt(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:_+=Gt(y);break;case 9:case 10:case 13:case 32:_+=Zt(h);break;case 92:_+=er(Kt()-1,7);continue;case 47:switch(Vt()){case 42:case 47:Lt(dr(rr(qt(),Kt()),t,r,l),l);break;default:_+="/"}break;case 123*m:s[u++]=Pt(_)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(_=Ct(_,/\f/g,"")),p>0&&Pt(_)-d&&Lt(p>32?fr(_+";",n,r,d-1,l):fr(Ct(_," ","")+";",n,r,d-2,l),l);break;case 59:_+=";";default:if(Lt(k=cr(_,t,r,u,c,o,s,b,x=[],w=[],d,i),i),123===y)if(0===c)ur(_,t,k,k,x,i,d,s,w);else switch(99===f&&110===Ot(_,3)?100:f){case 100:case 108:case 109:case 115:ur(e,k,k,n&&Lt(cr(e,k,k,0,0,o,s,b,o,x=[],d,w),w),o,w,d,s,n?x:w);break;default:ur(_,k,k,k,[""],w,0,s,w)}}u=c=p=0,m=v=1,b=_="",d=a;break;case 58:d=1+Pt(_),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Ht())continue;switch(_+=_t(y),y*m){case 38:v=c>0?1:(_+="\f",-1);break;case 44:s[u++]=(Pt(_)-1)*v,v=1;break;case 64:45===Vt()&&(_+=Gt(qt())),f=Vt(),c=d=Pt(b=_+=nr(Kt())),y++;break;case 45:45===h&&2==Pt(_)&&(m=0)}}return i}function cr(e,t,r,n,o,i,a,s,l,u,c,d){for(var f=o-1,p=0===o?i:[""],h=At(p),m=0,g=0,v=0;m<n;++m)for(var y=0,b=Rt(e,f+1,f=kt(g=a[m])),x=e;y<h;++y)(x=Et(g>0?p[y]+" "+b:Ct(b,/&\f/g,p[y])))&&(l[v++]=x);return Ut(e,t,r,0===o?bt:s,l,u,c,d)}function dr(e,t,r,n){return Ut(e,t,r,yt,_t(Dt),Rt(e,2,-2),0,n)}function fr(e,t,r,n,o){return Ut(e,t,r,xt,Rt(e,0,n),Rt(e,n+1,-1),n,o)}var pr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",mr="active",gr="data-styled-version",vr="6.1.17",yr="/*!sc*/\n",br="undefined"!=typeof window&&"HTMLElement"in window,xr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),wr={},kr=(new Set,Object.freeze([])),_r=Object.freeze({});function Sr(e,t,r){return void 0===r&&(r=_r),e.theme!==r.theme&&e.theme||t||r.theme}var Er=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cr=/(^-|-$)/g;function Tr(e){return e.replace(jr,"-").replace(Cr,"")}var Or=/(a)(d)/gi,Rr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Rr(t%52)+r;return(Rr(t%52)+r).replace(Or,"$1-$2")}var Ar,Lr=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Nr=function(e){return Lr(5381,e)};function zr(e){return Pr(Nr(e)>>>0)}function $r(e){return e.displayName||e.name||"Component"}function Mr(e){return"string"==typeof e&&!0}var Ir="function"==typeof Symbol&&Symbol.for,Dr=Ir?Symbol.for("react.memo"):60115,Fr=Ir?Symbol.for("react.forward_ref"):60112,Ur={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Br={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hr=((Ar={})[Fr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ar[Dr]=Wr,Ar);function qr(e){return("type"in(t=e)&&t.type.$$typeof)===Dr?Wr:"$$typeof"in e?Hr[e.$$typeof]:Ur;var t}var Vr=Object.defineProperty,Kr=Object.getOwnPropertyNames,Yr=Object.getOwnPropertySymbols,Qr=Object.getOwnPropertyDescriptor,Xr=Object.getPrototypeOf,Jr=Object.prototype;function Gr(e,t,r){if("string"!=typeof t){if(Jr){var n=Xr(t);n&&n!==Jr&&Gr(e,n,r)}var o=Kr(t);Yr&&(o=o.concat(Yr(t)));for(var i=qr(e),a=qr(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Br||r&&r[l]||a&&l in a||i&&l in i)){var u=Qr(t,l);try{Vr(e,l,u)}catch(e){}}}}return e}function Zr(e){return"function"==typeof e}function en(e){return"object"==typeof e&&"styledComponentId"in e}function tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function rn(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function nn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function on(e,t,r){if(void 0===r&&(r=!1),!r&&!nn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=on(e[n],t[n]);else if(nn(t))for(var n in t)e[n]=on(e[n],t[n]);return e}function an(e,t){Object.defineProperty(e,"toString",{value:t})}function sn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ln=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw sn(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(yr);return t},e}(),un=new Map,cn=new Map,dn=1,fn=function(e){if(un.has(e))return un.get(e);for(;cn.has(dn);)dn++;var t=dn++;return un.set(e,t),cn.set(t,e),t},pn=function(e,t){dn=t+1,un.set(e,t),cn.set(t,e)},hn="style[".concat(hr,"][").concat(gr,'="').concat(vr,'"]'),mn=new RegExp("^".concat(hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gn=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},vn=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(yr),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var l=s.match(mn);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(pn(c,u),gn(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},yn=function(e){for(var t=document.querySelectorAll(hn),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(hr)!==mr&&(vn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function bn(){return n.nc}var xn=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(hr,"]")));return t[t.length-1]}(r),i=void 0!==o?o.nextSibling:null;n.setAttribute(hr,mr),n.setAttribute(gr,vr);var a=bn();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},wn=function(){function e(e){this.element=xn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw sn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),kn=function(){function e(e){this.element=xn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),_n=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Sn=br,En={isServer:!br,useCSSOMInjection:!xr},jn=function(){function e(e,t,r){void 0===e&&(e=_r),void 0===t&&(t={});var n=this;this.options=dt(dt({},En),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&br&&Sn&&(Sn=!1,yn(this)),an(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return cn.get(e)}(r);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(r);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(hr,".g").concat(r,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),n+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(yr)},i=0;i<r;i++)o(i);return n}(n)}))}return e.registerId=function(e){return fn(e)},e.prototype.rehydrate=function(){!this.server&&br&&yn(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(dt(dt({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new _n(r):t?new wn(r):new kn(r)}(this.options),new ln(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(fn(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(fn(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(fn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Cn=/&/g,Tn=/^\s*\/\/.*$/gm;function On(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=On(e.children,t)),e}))}function Rn(e){var t,r,n,o=void 0===e?_r:e,i=o.options,a=void 0===i?_r:i,s=o.plugins,l=void 0===s?kr:s,u=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===bt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Cn,r).replace(n,u))})),a.prefix&&c.push(sr),c.push(ir);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(Tn,""),u=lr(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(u=On(u,a.namespace));var d,f=[];return or(u,function(e){var t=At(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce((function(e,t){return t.name||sn(15),Lr(e,t.name)}),5381).toString():"",d}var Pn=new jn,An=Rn(),Ln=o.createContext({shouldForwardProp:void 0,styleSheet:Pn,stylis:An}),Nn=(Ln.Consumer,o.createContext(void 0));function zn(){return(0,o.useContext)(Ln)}function $n(e){var t=(0,o.useState)(e.stylisPlugins),r=t[0],n=t[1],i=zn().styleSheet,a=(0,o.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),s=(0,o.useMemo)((function(){return Rn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,o.useEffect)((function(){ht()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,o.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return o.createElement(Ln.Provider,{value:l},o.createElement(Nn.Provider,{value:s},e.children))}var Mn=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=An);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,an(this,(function(){throw sn(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=An),this.name+e.hash},e}(),In=function(e){return e>="A"&&e<="Z"};function Dn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;In(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Fn=function(e){return null==e||!1===e||""===e},Un=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Fn(i)&&(Array.isArray(i)&&i.isCss||Zr(i)?n.push("".concat(Dn(o),":"),i,";"):nn(i)?n.push.apply(n,ft(ft(["".concat(o," {")],Un(i),!1),["}"],!1)):n.push("".concat(Dn(o),": ").concat((t=o,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in pr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Bn(e,t,r,n){return Fn(e)?[]:en(e)?[".".concat(e.styledComponentId)]:Zr(e)?!Zr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Bn(e(t),t,r,n):e instanceof Mn?r?(e.inject(r,n),[e.getName(n)]):[e]:nn(e)?Un(e):Array.isArray(e)?Array.prototype.concat.apply(kr,e.map((function(e){return Bn(e,t,r,n)}))):[e.toString()];var o}function Wn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Zr(r)&&!en(r))return!1}return!0}var Hn=Nr(vr),qn=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Wn(e),this.componentId=t,this.baseHash=Lr(Hn,t),this.baseStyle=r,jn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=tn(n,this.staticRulesId);else{var o=rn(Bn(this.rules,e,t,r)),i=Pr(Lr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=tn(n,i),this.staticRulesId=i}else{for(var s=Lr(this.baseHash,r.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=rn(Bn(c,e,t,r));s=Lr(s,d+u),l+=d}}if(l){var f=Pr(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=tn(n,f)}}return n},e}(),Vn=o.createContext(void 0);Vn.Consumer;var Kn={};new Set;function Yn(e,t,r){var n=en(e),i=e,a=!Mr(e),s=t.attrs,l=void 0===s?kr:s,u=t.componentId,c=void 0===u?function(e,t){var r="string"!=typeof e?"sc":Tr(e);Kn[r]=(Kn[r]||0)+1;var n="".concat(r,"-").concat(zr(vr+r+Kn[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return Mr(e)?"styled.".concat(e):"Styled(".concat($r(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Tr(t.displayName),"-").concat(t.componentId):t.componentId||c,h=n&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(n&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new qn(r,p,n?i.componentStyle:void 0);function b(e,t){return function(e,t,r){var n=e.attrs,i=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=o.useContext(Vn),d=zn(),f=e.shouldForwardProp||d.shouldForwardProp,p=Sr(t,c,a)||_r,h=function(e,t,r){for(var n,o=dt(dt({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=Zr(n=e[i])?n(o):n;for(var s in a)o[s]="className"===s?tn(o[s],a[s]):"style"===s?dt(dt({},o[s]),a[s]):a[s]}return t.className&&(o.className=tn(o.className,t.className)),o}(n,t,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var r=zn();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,h),b=tn(s,l);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[Mr(m)&&!Er.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,o.createElement)(m,g)}(x,e,t)}b.displayName=f;var x=o.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=n?tn(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=n?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=n?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)on(e,o[n],!0);return e}({},i.defaultProps,e):e}}),an(x,(function(){return".".concat(x.styledComponentId)})),a&&Gr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Qn(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Xn=function(e){return Object.assign(e,{isCss:!0})};function Jn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Zr(e)||nn(e))return Xn(Bn(Qn(kr,ft([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Bn(n):Xn(Bn(Qn(n,t)))}function Gn(e,t,r){if(void 0===r&&(r=_r),!t)throw sn(1,t);var n=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,Jn.apply(void 0,ft([n],o,!1)))};return n.attrs=function(n){return Gn(e,t,dt(dt({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Gn(e,t,dt(dt({},r),n))},n}var Zn=function(e){return Gn(Yn,e)},eo=Zn;Er.forEach((function(e){eo[e]=Zn(e)}));var to=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Wn(e),jn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(rn(Bn(this.rules,t,r,n)),""),i=this.componentId+e;r.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&jn.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function ro(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=rn(Jn.apply(void 0,ft([e],t,!1))),o=zr(n);return new Mn(o,n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=bn(),n=rn([r&&'nonce="'.concat(r,'"'),"".concat(hr,'="true"'),"".concat(gr,'="').concat(vr,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw sn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw sn(2);var r=e.instance.toString();if(!r)return[];var n=((t={})[hr]="",t[gr]=vr,t.dangerouslySetInnerHTML={__html:r},t),i=bn();return i&&(n.nonce=i),[o.createElement("style",dt({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new jn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw sn(2);return o.createElement($n,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw sn(3)}})(),"__sc-".concat(hr,"__");const no=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Jn.apply(void 0,ft([e],t,!1)),i="sc-global-".concat(zr(JSON.stringify(n))),a=new to(n,i),s=function(e){var t=zn(),r=o.useContext(Vn),n=o.useRef(t.styleSheet.allocateGSInstance(i)).current;return t.styleSheet.server&&l(n,e,t.styleSheet,r,t.stylis),o.useLayoutEffect((function(){if(!t.styleSheet.server)return l(n,e,t.styleSheet,r,t.stylis),function(){return a.removeStyles(n,t.styleSheet)}}),[n,e,t.styleSheet,r,t.stylis]),null};function l(e,t,r,n,o){if(a.isStatic)a.renderStyles(e,wr,r,o);else{var i=dt(dt({},t),{theme:Sr(t,n,s.defaultProps)});a.renderStyles(e,i,r,o)}}return o.memo(s)})`
  :root {
    /* Cores base que não mudam com o tema */
    --danger: #ff4444;
    --danger-hover: #cc0000;
    --success: #00C851;
    --background-light: #f8f9fa;
    --like-color: #FF9500;
    --like-rgb: 255, 149, 0;
    --dislike-color: #FF3B30;
    --dislike-rgb: 255, 59, 48;
    --background-light: #f9f9f9;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
    --text-inverse: #fff;
    --radius-lg: 24px;
    --success: #10b981;
    --success-hover: #059669;
    --primary-rgb: 255, 69, 0;
    --primary: #FF4500;       
    --primary-hover: #e03d00;
    --secondary: #1DA1F2;
    --secondary-hover: #0D91E2;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
    --comment-bg: #fff;
    --comment-bg-dark: #2a2a2a;
    --reply-bg: #f5f5f5;
    --reply-bg-dark: #333;
    --input-bg: #fff;
    --input-bg-dark: #383838;
    --input-text: #333;
    --input-text-dark: #eee;
  }

  /* Tema escuro (agora padrão) */
  [data-theme="dark"] {
    --comment-bg: var(--comment-bg-dark);
    --reply-bg: var(--reply-bg-dark);
    --input-bg: var(--input-bg-dark);
    --input-text: var(--input-text-dark);
    --background: #121212;
    --card-bg: #1E1E1E;
    --text: #FFFFFF;
    --text-light: #CCCCCC;
    --text-lighter: #999999;
    --border: #333333;
    --border-light: #444444;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    --shadow-hover: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  /* Tema claro */
  [data-theme="light"] {
    --background: #FAFAFA;
    --card-bg: #FFFFFF;
    --text: #333333;
    --text-light: #666666;
    --text-lighter: #999999;
    --border: #E1E1E1;
    --border-light: #F0F0F0;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    --shadow-hover: 0 4px 15px rgba(0, 0, 0, 0.12);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Tipografia */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-hover);
      text-decoration: underline;
    }
  }

  /* Componentes globais */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Estilos para menções */
  .mention {
    color: var(--primary);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    padding: 0 2px;
    border-radius: 3px;
    background: rgba(255, 69, 0, 0.1);
    
    &:hover {
      background: rgba(255, 69, 0, 0.2);
      text-decoration: none;
    }
  }

  /* Spinner animation */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    vertical-align: middle;
    margin-right: 8px;
  }

  /* Estilos para o dropdown de sugestões de menções */
  .mention-suggestions {
    position: absolute;
    z-index: 1000;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow);
    max-height: 200px;
    overflow-y: auto;
    width: 100%;
    margin-top: 5px;
  }

  .mention-suggestion {
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);

    &:hover {
      background: rgba(255, 69, 0, 0.1);
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  /* Estilo para o textarea com menções */
  .mention-textarea {
    width: 100%;
    min-height: 100px;
    padding: 12px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
    background: var(--input-bg);
    color: var(--text);
    resize: vertical;
    transition: var(--transition);

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.2);
    }
  }


  /* Botões */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: var(--radius-sm);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    gap: 8px;
    
    &-primary {
      background: var(--primary);
      color: white;
      
      &:hover {
        background: var(--primary-hover);
        transform: translateY(-1px);
        box-shadow: var(--shadow-hover);
      }
    }
    
    &-secondary {
      background: var(--secondary);
      color: white;
      
      &:hover {
        background: var(--secondary-hover);
      }
    }
    
    &-outline {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text);
      
      &:hover {
        border-color: var(--primary);
        color: var(--primary);
      }
    }
    
    &-icon {
      padding: 8px;
      border-radius: 50%;
    }
  }

  /* Cards */
  .card {
    background: var(--card-bg);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: var(--transition);
    
    &:hover {
      box-shadow: var(--shadow-hover);
    }
  }

  /* Feed específico */
  .feed-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    
    @media (max-width: 768px) {
      padding: 15px;
    }
  }

  /* MemeCard aprimorado */
  .meme-card {
    background: var(--card-bg);
    border-radius: var(--radius-md);
    margin-bottom: 24px;
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: var(--transition);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-hover);
    }
  }

  .meme-header {
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
    
    img {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--border-light);
    }
    
    .user-info {
      flex: 1;
      
      .username {
        font-weight: 600;
        color: var(--text);
        display: block;
        
        &:hover {
          color: var(--primary);
        }
      }
      
      .timestamp {
        font-size: 13px;
        color: var(--text-lighter);
      }
    }
    
    .menu-btn {
      color: var(--text-light);
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .meme-content {
    img, video {
      width: 100%;
      max-height: 600px;
      object-fit: contain;
      display: block;
      background: #f5f5f5;
    }
    
    .caption {
      padding: 12px 16px;
      font-size: 15px;
      line-height: 1.4;
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0 16px 12px;
      
      .tag {
        color: var(--primary);
        font-size: 13px;
        font-weight: 500;
      }
    }
  }

  .meme-actions {
    display: flex;
    padding: 8px 16px;
    border-top: 1px solid var(--border-light);
    
    .action-btn {
      background: none;
      border: none;
      margin-right: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: var(--text-light);
      transition: var(--transition);
      padding: 8px;
      border-radius: var(--radius-sm);
      
      &:hover {
        color: var(--primary);
        background: rgba(255, 69, 0, 0.1);
      }
      
      &.active {
        color: var(--primary);
      }
      
      svg {
        margin-right: 6px;
        font-size: 20px;
      }
    }
  }

  /* Estados */
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 20px;
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(255, 69, 0, 0.2);
      border-radius: 50%;
      border-top-color: var(--primary);
      animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  }

  .error-message {
    background: #FFEBEE;
    color: #C62828;
    padding: 16px;
    border-radius: var(--radius-sm);
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  /* Modal e overlays */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    :root {
      --radius-sm: 6px;
      --radius-md: 10px;
    }
    
    .meme-card {
      margin-bottom: 16px;
    }
    
    .upload-button {
      bottom: 20px;
      right: 20px;
      width: 56px;
      height: 56px;
    }
  }
  /* Mobile-specific styles */
  @media (max-width: 768px) {
    :root {
      --keyboard-height: 0px;
    }

    /* Prevent zoom on input focus in iOS */
    input, textarea, select {
      font-size: 16px !important;
    }

    /* Better touch handling */
    body {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
      touch-action: manipulation;
      overscroll-behavior-y: contain;
    }

    /* Hide scrollbars but keep functionality */
    ::-webkit-scrollbar {
      display: none;
    }
  }

  /* Safe area handling */
  @supports (padding: max(0px)) {
    body {
      padding-left: max(12px, env(safe-area-inset-left));
      padding-right: max(12px, env(safe-area-inset-right));
    }
  }
  `;function oo(e,t){return function(){return e.apply(t,arguments)}}const{toString:io}=Object.prototype,{getPrototypeOf:ao}=Object,{iterator:so,toStringTag:lo}=Symbol,uo=(e=>t=>{const r=io.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),co=e=>(e=e.toLowerCase(),t=>uo(t)===e),fo=e=>t=>typeof t===e,{isArray:po}=Array,ho=fo("undefined");const mo=co("ArrayBuffer");const go=fo("string"),vo=fo("function"),yo=fo("number"),bo=e=>null!==e&&"object"===typeof e,xo=e=>{if("object"!==uo(e))return!1;const t=ao(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(lo in e)&&!(so in e)},wo=co("Date"),ko=co("File"),_o=co("Blob"),So=co("FileList"),Eo=co("URLSearchParams"),[jo,Co,To,Oo]=["ReadableStream","Request","Response","Headers"].map(co);function Ro(e,t){let r,n,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),po(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{const n=o?Object.getOwnPropertyNames(e):Object.keys(e),i=n.length;let a;for(r=0;r<i;r++)a=n[r],t.call(null,e[a],a,e)}}function Po(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const Ao="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Lo=e=>!ho(e)&&e!==Ao;const No=(zo="undefined"!==typeof Uint8Array&&ao(Uint8Array),e=>zo&&e instanceof zo);var zo;const $o=co("HTMLFormElement"),Mo=(e=>{let{hasOwnProperty:t}=e;return(e,r)=>t.call(e,r)})(Object.prototype),Io=co("RegExp"),Do=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Ro(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)};const Fo=co("AsyncFunction"),Uo=(Bo="function"===typeof setImmediate,Wo=vo(Ao.postMessage),Bo?setImmediate:Wo?((e,t)=>(Ao.addEventListener("message",(r=>{let{source:n,data:o}=r;n===Ao&&o===e&&t.length&&t.shift()()}),!1),r=>{t.push(r),Ao.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Bo,Wo;const Ho="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Ao):"undefined"!==typeof process&&process.nextTick||Uo,qo={isArray:po,isArrayBuffer:mo,isBuffer:function(e){return null!==e&&!ho(e)&&null!==e.constructor&&!ho(e.constructor)&&vo(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||vo(e.append)&&("formdata"===(t=uo(e))||"object"===t&&vo(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&mo(e.buffer),t},isString:go,isNumber:yo,isBoolean:e=>!0===e||!1===e,isObject:bo,isPlainObject:xo,isReadableStream:jo,isRequest:Co,isResponse:To,isHeaders:Oo,isUndefined:ho,isDate:wo,isFile:ko,isBlob:_o,isRegExp:Io,isFunction:vo,isStream:e=>bo(e)&&vo(e.pipe),isURLSearchParams:Eo,isTypedArray:No,isFileList:So,forEach:Ro,merge:function e(){const{caseless:t}=Lo(this)&&this||{},r={},n=(n,o)=>{const i=t&&Po(r,o)||o;xo(r[i])&&xo(n)?r[i]=e(r[i],n):xo(n)?r[i]=e({},n):po(n)?r[i]=n.slice():r[i]=n};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Ro(arguments[o],n);return r},extend:function(e,t,r){let{allOwnKeys:n}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Ro(t,((t,n)=>{r&&vo(t)?e[n]=oo(t,r):e[n]=t}),{allOwnKeys:n}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&ao(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:uo,kindOfTest:co,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(po(e))return e;let t=e.length;if(!yo(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[so]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:$o,hasOwnProperty:Mo,hasOwnProp:Mo,reduceDescriptors:Do,freezeMethods:e=>{Do(e,((t,r)=>{if(vo(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];vo(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return po(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Po,global:Ao,isContextDefined:Lo,isSpecCompliantForm:function(e){return!!(e&&vo(e.append)&&"FormData"===e[lo]&&e[so])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(bo(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=po(e)?[]:{};return Ro(e,((e,t)=>{const i=r(e,n+1);!ho(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:Fo,isThenable:e=>e&&(bo(e)||vo(e))&&vo(e.then)&&vo(e.catch),setImmediate:Uo,asap:Ho,isIterable:e=>null!=e&&vo(e[so])};function Vo(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}qo.inherits(Vo,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:qo.toJSONObject(this.config),code:this.code,status:this.status}}});const Ko=Vo.prototype,Yo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Yo[e]={value:e}})),Object.defineProperties(Vo,Yo),Object.defineProperty(Ko,"isAxiosError",{value:!0}),Vo.from=(e,t,r,n,o,i)=>{const a=Object.create(Ko);return qo.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Vo.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Qo=Vo;function Xo(e){return qo.isPlainObject(e)||qo.isArray(e)}function Jo(e){return qo.endsWith(e,"[]")?e.slice(0,-2):e}function Go(e,t,r){return e?e.concat(t).map((function(e,t){return e=Jo(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const Zo=qo.toFlatObject(qo,{},null,(function(e){return/^is[A-Z]/.test(e)}));const ei=function(e,t,r){if(!qo.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=qo.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!qo.isUndefined(t[e])}))).metaTokens,o=r.visitor||u,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!==typeof Blob&&Blob)&&qo.isSpecCompliantForm(t);if(!qo.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(qo.isDate(e))return e.toISOString();if(!s&&qo.isBlob(e))throw new Qo("Blob is not supported. Use a Buffer instead.");return qo.isArrayBuffer(e)||qo.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,r,o){let s=e;if(e&&!o&&"object"===typeof e)if(qo.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(qo.isArray(e)&&function(e){return qo.isArray(e)&&!e.some(Xo)}(e)||(qo.isFileList(e)||qo.endsWith(r,"[]"))&&(s=qo.toArray(e)))return r=Jo(r),s.forEach((function(e,n){!qo.isUndefined(e)&&null!==e&&t.append(!0===a?Go([r],n,i):null===a?r:r+"[]",l(e))})),!1;return!!Xo(e)||(t.append(Go(o,r,i),l(e)),!1)}const c=[],d=Object.assign(Zo,{defaultVisitor:u,convertValue:l,isVisitable:Xo});if(!qo.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!qo.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),qo.forEach(r,(function(r,i){!0===(!(qo.isUndefined(r)||null===r)&&o.call(t,r,qo.isString(i)?i.trim():i,n,d))&&e(r,n?n.concat(i):[i])})),c.pop()}}(e),t};function ti(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ri(e,t){this._pairs=[],e&&ei(e,this,t)}const ni=ri.prototype;ni.append=function(e,t){this._pairs.push([e,t])},ni.toString=function(e){const t=e?function(t){return e.call(this,t,ti)}:ti;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const oi=ri;function ii(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ai(e,t,r){if(!t)return e;const n=r&&r.encode||ii;qo.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(i=o?o(t,r):qo.isURLSearchParams(t)?t.toString():new oi(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const si=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){qo.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},li={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ui={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:oi,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ci="undefined"!==typeof window&&"undefined"!==typeof document,di="object"===typeof navigator&&navigator||void 0,fi=ci&&(!di||["ReactNative","NativeScript","NS"].indexOf(di.product)<0),pi="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,hi=ci&&window.location.href||"http://localhost",mi={...t,...ui};const gi=function(e){function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&qo.isArray(n)?n.length:i,s)return qo.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a;n[i]&&qo.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],o)&&qo.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!a}if(qo.isFormData(e)&&qo.isFunction(e.entries)){const r={};return qo.forEachEntry(e,((e,n)=>{t(function(e){return qo.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null};const vi={transitional:li,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=qo.isObject(t);i&&qo.isHTMLForm(t)&&(t=new FormData(t));if(qo.isFormData(t))return o?JSON.stringify(gi(t)):t;if(qo.isArrayBuffer(t)||qo.isBuffer(t)||qo.isStream(t)||qo.isFile(t)||qo.isBlob(t)||qo.isReadableStream(t))return t;if(qo.isArrayBufferView(t))return t.buffer;if(qo.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ei(e,new mi.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return mi.isNode&&qo.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(t,this.formSerializer).toString();if((a=qo.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return ei(a?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),function(t,r,n){if(qo.isString(t))try{return(r||JSON.parse)(t),qo.trim(t)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const r=this.transitional||vi.transitional,n=r&&r.forcedJSONParsing,o="json"===this.responseType;if(qo.isResponse(t)||qo.isReadableStream(t))return t;if(t&&qo.isString(t)&&(n&&!this.responseType||o)){const n=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(e){if(n){if("SyntaxError"===e.name)throw Qo.from(e,Qo.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mi.classes.FormData,Blob:mi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};qo.forEach(["delete","get","head","post","put","patch"],(e=>{vi.headers[e]={}}));const yi=vi,bi=qo.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xi=Symbol("internals");function wi(e){return e&&String(e).trim().toLowerCase()}function ki(e){return!1===e||null==e?e:qo.isArray(e)?e.map(ki):String(e)}function _i(e,t,r,n,o){return qo.isFunction(n)?n.call(this,t,r):(o&&(t=r),qo.isString(t)?qo.isString(n)?-1!==t.indexOf(n):qo.isRegExp(n)?n.test(t):void 0:void 0)}class Si{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=wi(t);if(!o)throw new Error("header name must be a non-empty string");const i=qo.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=ki(e))}const i=(e,t)=>qo.forEach(e,((e,r)=>o(e,r,t)));if(qo.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(qo.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&bi[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(qo.isObject(e)&&qo.isIterable(e)){let r,n,o={};for(const t of e){if(!qo.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[n=t[0]]=(r=o[n])?qo.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}i(o,t)}else null!=e&&o(t,e,r);return this}get(e,t){if(e=wi(e)){const r=qo.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(qo.isFunction(t))return t.call(this,e,r);if(qo.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=wi(e)){const r=qo.findKey(this,e);return!(!r||void 0===this[r]||t&&!_i(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=wi(e)){const o=qo.findKey(r,e);!o||t&&!_i(0,r[o],o,t)||(delete r[o],n=!0)}}return qo.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!_i(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return qo.forEach(this,((n,o)=>{const i=qo.findKey(r,o);if(i)return t[i]=ki(n),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();a!==o&&delete t[o],t[a]=ki(n),r[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return qo.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&qo.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,r]=e;return t+": "+r})).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[xi]=this[xi]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=wi(e);t[n]||(!function(e,t){const r=qo.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return qo.isArray(e)?e.forEach(n):n(e),this}}Si.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),qo.reduceDescriptors(Si.prototype,((e,t)=>{let{value:r}=e,n=t[0].toUpperCase()+t.slice(1);return{get:()=>r,set(e){this[n]=e}}})),qo.freezeMethods(Si);const Ei=Si;function ji(e,t){const r=this||yi,n=t||r,o=Ei.from(n.headers);let i=n.data;return qo.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Ci(e){return!(!e||!e.__CANCEL__)}function Ti(e,t,r){Qo.call(this,null==e?"canceled":e,Qo.ERR_CANCELED,t,r),this.name="CanceledError"}qo.inherits(Ti,Qo,{__CANCEL__:!0});const Oi=Ti;function Ri(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Qo("Request failed with status code "+r.status,[Qo.ERR_BAD_REQUEST,Qo.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}const Pi=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),u=n[a];o||(o=l),r[i]=s,n[i]=l;let c=a,d=0;for(;c!==i;)d+=r[c++],c%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const f=u&&l-u;return f?Math.round(1e3*d/f):void 0}};const Ai=function(e,t){let r,n,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];t>=i?a(l,e):(r=l,n||(n=setTimeout((()=>{n=null,a(r)}),i-t)))},()=>r&&a(r)]},Li=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=0;const o=Pi(50,250);return Ai((r=>{const i=r.loaded,a=r.lengthComputable?r.total:void 0,s=i-n,l=o(s);n=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),r)},Ni=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},zi=e=>function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return qo.asap((()=>e(...r)))},$i=mi.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,mi.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(mi.origin),mi.navigator&&/(msie|trident)/i.test(mi.navigator.userAgent)):()=>!0,Mi=mi.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const a=[e+"="+encodeURIComponent(t)];qo.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),qo.isString(n)&&a.push("path="+n),qo.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ii(e,t,r){let n=!function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Di=e=>e instanceof Ei?{...e}:e;function Fi(e,t){t=t||{};const r={};function n(e,t,r,n){return qo.isPlainObject(e)&&qo.isPlainObject(t)?qo.merge.call({caseless:n},e,t):qo.isPlainObject(t)?qo.merge({},t):qo.isArray(t)?t.slice():t}function o(e,t,r,o){return qo.isUndefined(t)?qo.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function i(e,t){if(!qo.isUndefined(t))return n(void 0,t)}function a(e,t){return qo.isUndefined(t)?qo.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,r)=>o(Di(e),Di(t),0,!0)};return qo.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=l[n]||o,a=i(e[n],t[n],n);qo.isUndefined(a)&&i!==s||(r[n]=a)})),r}const Ui=e=>{const t=Fi({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=Ei.from(s),t.url=ai(Ii(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),qo.isFormData(n))if(mi.hasStandardBrowserEnv||mi.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(r=s.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(mi.hasStandardBrowserEnv&&(o&&qo.isFunction(o)&&(o=o(t)),o||!1!==o&&$i(t.url))){const e=i&&a&&Mi.read(a);e&&s.set(i,e)}return t},Bi="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=Ui(e);let o=n.data;const i=Ei.from(n.headers).normalize();let a,s,l,u,c,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=n;function h(){u&&u(),c&&c(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const n=Ei.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Ri((function(e){t(e),h()}),(function(e){r(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(r(new Qo("Request aborted",Qo.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new Qo("Network Error",Qo.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||li;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Qo(t,o.clarifyTimeoutError?Qo.ETIMEDOUT:Qo.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&qo.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),qo.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),d&&"json"!==d&&(m.responseType=n.responseType),p&&([l,c]=Li(p,!0),m.addEventListener("progress",l)),f&&m.upload&&([s,u]=Li(f),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",u)),(n.cancelToken||n.signal)&&(a=t=>{m&&(r(!t||t.type?new Oi(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const v=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);v&&-1===mi.protocols.indexOf(v)?r(new Qo("Unsupported protocol "+v+":",Qo.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Wi=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Qo?t:new Oi(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new Qo(`timeout ${t} of ms exceeded`,Qo.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=n;return s.unsubscribe=()=>qo.asap(a),s}},Hi=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},qi=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Vi=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of qi(e))yield*Hi(r,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return s(),void e.close();let i=n.byteLength;if(r){let e=a+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},Ki="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Yi=Ki&&"function"===typeof ReadableStream,Qi=Ki&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Xi=function(t){try{for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return!!t(...n)}catch(e){return!1}},Ji=Yi&&Xi((()=>{let e=!1;const t=new Request(mi.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Gi=Yi&&Xi((()=>qo.isReadableStream(new Response("").body))),Zi={stream:Gi&&(e=>e.body)};var ea;Ki&&(ea=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Zi[e]&&(Zi[e]=qo.isFunction(ea[e])?t=>t[e]():(t,r)=>{throw new Qo(`Response type '${e}' is not supported`,Qo.ERR_NOT_SUPPORT,r)})})));const ta=async(e,t)=>{const r=qo.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(qo.isBlob(e))return e.size;if(qo.isSpecCompliantForm(e)){const t=new Request(mi.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return qo.isArrayBufferView(e)||qo.isArrayBuffer(e)?e.byteLength:(qo.isURLSearchParams(e)&&(e+=""),qo.isString(e)?(await Qi(e)).byteLength:void 0)})(t):r},ra=Ki&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=Ui(e);u=u?(u+"").toLowerCase():"text";let p,h=Wi([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&Ji&&"get"!==r&&"head"!==r&&0!==(g=await ta(c,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(qo.isFormData(n)&&(e=r.headers.get("content-type"))&&c.setContentType(e),r.body){const[e,t]=Ni(g,Li(zi(l)));n=Vi(r.body,65536,e,t)}}qo.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:r.toUpperCase(),headers:c.normalize().toJSON(),body:n,duplex:"half",credentials:o?d:void 0});let i=await fetch(p);const a=Gi&&("stream"===u||"response"===u);if(Gi&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=qo.toFiniteNumber(i.headers.get("content-length")),[r,n]=s&&Ni(t,Li(zi(s),!0))||[];i=new Response(Vi(i.body,65536,r,(()=>{n&&n(),m&&m()})),e)}u=u||"text";let v=await Zi[qo.findKey(Zi,u)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,r)=>{Ri(t,r,{data:v,headers:Ei.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:p})}))}catch(v){if(m&&m(),v&&"TypeError"===v.name&&/Load failed|fetch/i.test(v.message))throw Object.assign(new Qo("Network Error",Qo.ERR_NETWORK,e,p),{cause:v.cause||v});throw Qo.from(v,v&&v.code,e,p)}}),na={http:null,xhr:Bi,fetch:ra};qo.forEach(na,((t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch(e){}Object.defineProperty(t,"adapterName",{value:r})}}));const oa=e=>`- ${e}`,ia=e=>qo.isFunction(e)||null===e||!1===e,aa=e=>{e=qo.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){let t;if(r=e[i],n=r,!ia(r)&&(n=na[(t=String(r)).toLowerCase()],void 0===n))throw new Qo(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+i]=n}if(!n){const e=Object.entries(o).map((e=>{let[t,r]=e;return`adapter ${t} `+(!1===r?"is not supported by the environment":"is not available in the build")}));let r=t?e.length>1?"since :\n"+e.map(oa).join("\n"):" "+oa(e[0]):"as no adapter specified";throw new Qo("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n};function sa(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Oi(null,e)}function la(e){sa(e),e.headers=Ei.from(e.headers),e.data=ji.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return aa(e.adapter||yi.adapter)(e).then((function(t){return sa(e),t.data=ji.call(e,e.transformResponse,t),t.headers=Ei.from(t.headers),t}),(function(t){return Ci(t)||(sa(e),t&&t.response&&(t.response.data=ji.call(e,e.transformResponse,t.response),t.response.headers=Ei.from(t.response.headers))),Promise.reject(t)}))}const ua="1.9.0",ca={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ca[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const da={};ca.transitional=function(e,t,r){function n(e,t){return"[Axios v1.9.0] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new Qo(n(o," has been removed"+(t?" in "+t:"")),Qo.ERR_DEPRECATED);return t&&!da[o]&&(da[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}},ca.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const fa={assertOptions:function(e,t,r){if("object"!==typeof e)throw new Qo("options must be an object",Qo.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const t=e[i],r=void 0===t||a(t,i,e);if(!0!==r)throw new Qo("option "+i+" must be "+r,Qo.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Qo("Unknown option "+i,Qo.ERR_BAD_OPTION)}},validators:ca},pa=fa.validators;class ha{constructor(e){this.defaults=e||{},this.interceptors={request:new si,response:new si}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const r=t.stack?t.stack.replace(/^.+\n/,""):"";try{n.stack?r&&!String(n.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+r):n.stack=r}catch(e){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Fi(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&fa.assertOptions(r,{silentJSONParsing:pa.transitional(pa.boolean),forcedJSONParsing:pa.transitional(pa.boolean),clarifyTimeoutError:pa.transitional(pa.boolean)},!1),null!=n&&(qo.isFunction(n)?t.paramsSerializer={serialize:n}:fa.assertOptions(n,{encode:pa.function,serialize:pa.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),fa.assertOptions(t,{baseUrl:pa.spelling("baseURL"),withXsrfToken:pa.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&qo.merge(o.common,o[t.method]);o&&qo.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ei.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let u;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let c,d=0;if(!s){const e=[la.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),c=e.length,u=Promise.resolve(t);d<c;)u=u.then(e[d++],e[d++]);return u}c=a.length;let f=t;for(d=0;d<c;){const e=a[d++],t=a[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{u=la.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,c=l.length;d<c;)u=u.then(l[d++],l[d++]);return u}getUri(e){return ai(Ii((e=Fi(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}qo.forEach(["delete","get","head","options"],(function(e){ha.prototype[e]=function(t,r){return this.request(Fi(r||{},{method:e,url:t,data:(r||{}).data}))}})),qo.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Fi(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ha.prototype[e]=t(),ha.prototype[e+"Form"]=t(!0)}));const ma=ha;class ga{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new Oi(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new ga((function(t){e=t})),cancel:e}}}const va=ga;const ya={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ya).forEach((e=>{let[t,r]=e;ya[r]=t}));const ba=ya;const xa=function e(t){const r=new ma(t),n=oo(ma.prototype.request,r);return qo.extend(n,ma.prototype,r,{allOwnKeys:!0}),qo.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Fi(t,r))},n}(yi);xa.Axios=ma,xa.CanceledError=Oi,xa.CancelToken=va,xa.isCancel=Ci,xa.VERSION=ua,xa.toFormData=ei,xa.AxiosError=Qo,xa.Cancel=xa.CanceledError,xa.all=function(e){return Promise.all(e)},xa.spread=function(e){return function(t){return e.apply(null,t)}},xa.isAxiosError=function(e){return qo.isObject(e)&&!0===e.isAxiosError},xa.mergeConfig=Fi,xa.AxiosHeaders=Ei,xa.formToJSON=e=>gi(qo.isHTMLForm(e)?new FormData(e):e),xa.getAdapter=aa,xa.HttpStatusCode=ba,xa.default=xa;const wa=xa.create({baseURL:"https://api.jokesteronline.org/api",timeout:6e4});wa.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e))),wa.interceptors.response.use((e=>e.data?e:(console.warn("Empty response data",e),{...e,data:{data:[]}})),(async e=>{var t,r,n,o,i;401===(null===(t=e.response)||void 0===t?void 0:t.status)&&(localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.pathname.includes("/login")||(window.location.href="/login"));const a={message:(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Erro na requisi\xe7\xe3o",status:(null===(o=e.response)||void 0===o?void 0:o.status)||500,data:(null===(i=e.response)||void 0===i?void 0:i.data)||null};return Promise.reject(a)}));wa.getArray=async(e,t)=>(e=>Array.isArray(e)?e:e&&Array.isArray(e.data)?e.data:e&&e.items&&Array.isArray(e.items)?e.items:[])((await wa.get(e,t)).data);const ka=wa,_a={CONFLICT:"CONFLICT",AUTH_ERROR:"AUTH_ERROR",SESSION_EXPIRED:"SESSION_EXPIRED",NETWORK_ERROR:"NETWORK_ERROR",VALIDATION_ERROR:"VALIDATION_ERROR",UNKNOWN_ERROR:"UNKNOWN_ERROR"},Sa=async e=>{var t;try{const{data:t}=await ka.post("/auth/register",e);return t.token&&localStorage.setItem("token",t.token),t}catch(r){if(console.error("[Auth Service] Register Error:",r),!r.response)throw r.request?{type:_a.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:_a.UNKNOWN_ERROR,message:"Erro desconhecido ao registrar"};switch(r.response.status){case 400:throw{type:_a.VALIDATION_ERROR,message:"Dados inv\xe1lidos",details:r.response.data.errors};case 409:throw{type:_a.CONFLICT,message:r.response.data.message||"Conflito no registro",conflicts:r.response.data.conflicts};default:throw{type:_a.UNKNOWN_ERROR,message:(null===(t=r.response.data)||void 0===t?void 0:t.message)||"Erro ao registrar usu\xe1rio"}}}},Ea=async e=>{var t,r,n;try{const{data:t}=await ka.post("/auth/login",e);return localStorage.setItem("token",t.token),t}catch(o){if(console.error("[Auth Service] Login Error:",o),!o.response)throw o.request?{type:_a.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:_a.UNKNOWN_ERROR,message:"Erro desconhecido ao fazer login"};switch(o.response.status){case 400:throw{type:_a.VALIDATION_ERROR,message:"Credenciais inv\xe1lidas",details:o.response.data.errors};case 401:throw{type:_a.AUTH_ERROR,message:(null===(t=o.response.data)||void 0===t?void 0:t.message)||"Credenciais inv\xe1lidas"};case 403:throw{type:_a.AUTH_ERROR,message:(null===(r=o.response.data)||void 0===r?void 0:r.message)||"Conta desativada ou bloqueada"};default:throw{type:_a.UNKNOWN_ERROR,message:(null===(n=o.response.data)||void 0===n?void 0:n.message)||"Erro ao fazer login"}}}},ja=async()=>{try{const e=localStorage.getItem("token");if(!e)throw{type:_a.AUTH_ERROR,message:"Nenhum token encontrado"};const{data:t}=await ka.get("/auth/check",{headers:{Authorization:`Bearer ${e}`}});return t}catch(r){var e,t;if(console.error("[Auth Service] Check Auth Error:",r),401===(null===(e=r.response)||void 0===e?void 0:e.status))throw localStorage.removeItem("token"),{type:_a.SESSION_EXPIRED,message:"Sess\xe3o expirada"};if(r.response)throw{type:_a.UNKNOWN_ERROR,message:(null===(t=r.response.data)||void 0===t?void 0:t.message)||"Erro ao verificar autentica\xe7\xe3o"};throw r.request?{type:_a.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:_a.UNKNOWN_ERROR,message:r.message||"Erro desconhecido ao verificar autentica\xe7\xe3o"}}},Ca=async()=>{try{return await ka.post("/auth/logout"),localStorage.removeItem("token"),localStorage.removeItem("user"),{success:!0}}catch(t){var e;if(console.error("[Auth Service] Logout Error:",t),localStorage.removeItem("token"),localStorage.removeItem("user"),t.response)throw{type:_a.UNKNOWN_ERROR,message:(null===(e=t.response.data)||void 0===e?void 0:e.message)||"Erro ao fazer logout"};throw t.request?{type:_a.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:_a.UNKNOWN_ERROR,message:"Erro desconhecido ao fazer logout"}}},Ta=Object.create(null);Ta.open="0",Ta.close="1",Ta.ping="2",Ta.pong="3",Ta.message="4",Ta.upgrade="5",Ta.noop="6";const Oa=Object.create(null);Object.keys(Ta).forEach((e=>{Oa[Ta[e]]=e}));const Ra={type:"error",data:"parser error"},Pa="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),Aa="function"===typeof ArrayBuffer,La=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Na=(e,t,r)=>{let{type:n,data:o}=e;return Pa&&o instanceof Blob?t?r(o):za(o,r):Aa&&(o instanceof ArrayBuffer||La(o))?t?r(o):za(new Blob([o]),r):r(Ta[n]+(o||""))},za=(e,t)=>{const r=new FileReader;return r.onload=function(){const e=r.result.split(",")[1];t("b"+(e||""))},r.readAsDataURL(e)};function $a(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Ma;const Ia="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Da="undefined"===typeof Uint8Array?[]:new Uint8Array(256);for(let e=0;e<64;e++)Da[Ia.charCodeAt(e)]=e;const Fa="function"===typeof ArrayBuffer,Ua=(e,t)=>{if("string"!==typeof e)return{type:"message",data:Wa(e,t)};const r=e.charAt(0);if("b"===r)return{type:"message",data:Ba(e.substring(1),t)};return Oa[r]?e.length>1?{type:Oa[r],data:e.substring(1)}:{type:Oa[r]}:Ra},Ba=(e,t)=>{if(Fa){const r=(e=>{let t,r,n,o,i,a=.75*e.length,s=e.length,l=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);const u=new ArrayBuffer(a),c=new Uint8Array(u);for(t=0;t<s;t+=4)r=Da[e.charCodeAt(t)],n=Da[e.charCodeAt(t+1)],o=Da[e.charCodeAt(t+2)],i=Da[e.charCodeAt(t+3)],c[l++]=r<<2|n>>4,c[l++]=(15&n)<<4|o>>2,c[l++]=(3&o)<<6|63&i;return u})(e);return Wa(r,t)}return{base64:!0,data:e}},Wa=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,Ha=String.fromCharCode(30);function qa(){return new TransformStream({transform(e,t){!function(e,t){Pa&&e.data instanceof Blob?e.data.arrayBuffer().then($a).then(t):Aa&&(e.data instanceof ArrayBuffer||La(e.data))?t($a(e.data)):Na(e,!1,(e=>{Ma||(Ma=new TextEncoder),t(Ma.encode(e))}))}(e,(r=>{const n=r.length;let o;if(n<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,n);else if(n<65536){o=new Uint8Array(3);const e=new DataView(o.buffer);e.setUint8(0,126),e.setUint16(1,n)}else{o=new Uint8Array(9);const e=new DataView(o.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(n))}e.data&&"string"!==typeof e.data&&(o[0]|=128),t.enqueue(o),t.enqueue(r)}))}})}let Va;function Ka(e){return e.reduce(((e,t)=>e+t.length),0)}function Ya(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let o=0;o<t;o++)r[o]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Qa(e){if(e)return function(e){for(var t in Qa.prototype)e[t]=Qa.prototype[t];return e}(e)}Qa.prototype.on=Qa.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},Qa.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this},Qa.prototype.off=Qa.prototype.removeListener=Qa.prototype.removeAllListeners=Qa.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var o=0;o<n.length;o++)if((r=n[o])===t||r.fn===t){n.splice(o,1);break}return 0===n.length&&delete this._callbacks["$"+e],this},Qa.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){n=0;for(var o=(r=r.slice(0)).length;n<o;++n)r[n].apply(this,t)}return this},Qa.prototype.emitReserved=Qa.prototype.emit,Qa.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},Qa.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Xa="function"===typeof Promise&&"function"===typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Ja="undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")();function Ga(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.reduce(((t,r)=>(e.hasOwnProperty(r)&&(t[r]=e[r]),t)),{})}const Za=Ja.setTimeout,es=Ja.clearTimeout;function ts(e,t){t.useNativeTimers?(e.setTimeoutFn=Za.bind(Ja),e.clearTimeoutFn=es.bind(Ja)):(e.setTimeoutFn=Ja.setTimeout.bind(Ja),e.clearTimeoutFn=Ja.clearTimeout.bind(Ja))}function rs(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}class ns extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class os extends Qa{constructor(e){super(),this.writable=!1,ts(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new ns(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ua(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}(e);return t.length?"?"+t:""}}class is extends os{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",(function(){--e||t()}))),this.writable||(e++,this.once("drain",(function(){--e||t()})))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const r=e.split(Ha),n=[];for(let o=0;o<r.length;o++){const e=Ua(r[o],t);if(n.push(e),"error"===e.type)break}return n})(e,this.socket.binaryType).forEach((e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)})),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const r=e.length,n=new Array(r);let o=0;e.forEach(((e,i)=>{Na(e,!1,(e=>{n[i]=e,++o===r&&t(n.join(Ha))}))}))})(e,(e=>{this.doWrite(e,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=rs()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}}let as=!1;try{as="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(Vv){}const ss=as;function ls(){}class us extends is{constructor(e){if(super(e),"undefined"!==typeof location){const t="https:"===location.protocol;let r=location.port;r||(r=t?"443":"80"),this.xd="undefined"!==typeof location&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",((e,t)=>{this.onError("xhr post error",e,t)}))}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",((e,t)=>{this.onError("xhr poll error",e,t)})),this.pollXhr=e}}class cs extends Qa{constructor(e,t,r){super(),this.createRequest=e,ts(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=void 0!==r.data?r.data:null,this._create()}_create(){var t;const r=Ga(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(r);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&n.setRequestHeader(e,this._opts.extraHeaders[e])}}catch(e){}if("POST"===this._method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{n.setRequestHeader("Accept","*/*")}catch(e){}null===(t=this._opts.cookieJar)||void 0===t||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var e;3===n.readyState&&(null===(e=this._opts.cookieJar)||void 0===e||e.parseCookies(n.getResponseHeader("set-cookie"))),4===n.readyState&&(200===n.status||1223===n.status?this._onLoad():this.setTimeoutFn((()=>{this._onError("number"===typeof n.status?n.status:0)}),0))},n.send(this._data)}catch(e){return void this.setTimeoutFn((()=>{this._onError(e)}),0)}"undefined"!==typeof document&&(this._index=cs.requestsCount++,cs.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(t){if("undefined"!==typeof this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=ls,t)try{this._xhr.abort()}catch(e){}"undefined"!==typeof document&&delete cs.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(cs.requestsCount=0,cs.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",ds);else if("function"===typeof addEventListener){addEventListener("onpagehide"in Ja?"pagehide":"unload",ds,!1)}function ds(){for(let e in cs.requests)cs.requests.hasOwnProperty(e)&&cs.requests[e].abort()}const fs=function(){const e=ps({xdomain:!1});return e&&null!==e.responseType}();function ps(t){const r=t.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!r||ss))return new XMLHttpRequest}catch(e){}if(!r)try{return new(Ja[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(e){}}const hs="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class ms extends os{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=hs?{}:Ga(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(Vv){return this.emitReserved("error",Vv)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const n=t[r],o=r===t.length-1;Na(n,this.supportsBinary,(t=>{try{this.doWrite(n,t)}catch(e){}o&&Xa((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){"undefined"!==typeof this.ws&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=rs()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const gs=Ja.WebSocket||Ja.MozWebSocket;const vs={websocket:class extends ms{createSocket(e,t,r){return hs?new gs(e,t,r):t?new gs(e,t):new gs(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends os{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(Vv){return this.emitReserved("error",Vv)}this._transport.closed.then((()=>{this.onClose()})).catch((e=>{this.onError("webtransport error",e)})),this._transport.ready.then((()=>{this._transport.createBidirectionalStream().then((e=>{const t=function(e,t){Va||(Va=new TextDecoder);const r=[];let n=0,o=-1,i=!1;return new TransformStream({transform(a,s){for(r.push(a);;){if(0===n){if(Ka(r)<1)break;const e=Ya(r,1);i=128===(128&e[0]),o=127&e[0],n=o<126?3:126===o?1:2}else if(1===n){if(Ka(r)<2)break;const e=Ya(r,2);o=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),n=3}else if(2===n){if(Ka(r)<8)break;const e=Ya(r,8),t=new DataView(e.buffer,e.byteOffset,e.length),i=t.getUint32(0);if(i>Math.pow(2,21)-1){s.enqueue(Ra);break}o=i*Math.pow(2,32)+t.getUint32(4),n=3}else{if(Ka(r)<o)break;const e=Ya(r,o);s.enqueue(Ua(i?e:Va.decode(e),t)),n=0}if(0===o||o>e){s.enqueue(Ra);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),n=qa();n.readable.pipeTo(e.writable),this._writer=n.writable.getWriter();const o=()=>{r.read().then((e=>{let{done:t,value:r}=e;t||(this.onPacket(r),o())})).catch((e=>{}))};o();const i={type:"open"};this.query.sid&&(i.data=`{"sid":"${this.query.sid}"}`),this._writer.write(i).then((()=>this.onOpen()))}))}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],n=t===e.length-1;this._writer.write(r).then((()=>{n&&Xa((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){var e;null===(e=this._transport)||void 0===e||e.close()}},polling:class extends us{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=fs&&!t}request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(e,{xd:this.xd},this.opts),new cs(ps,this.uri(),e)}}},ys=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,bs=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function xs(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");-1!=r&&-1!=n&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let o=ys.exec(e||""),i={},a=14;for(;a--;)i[bs[a]]=o[a]||"";return-1!=r&&-1!=n&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=function(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||n.splice(0,1);"/"==t.slice(-1)&&n.splice(n.length-1,1);return n}(0,i.path),i.queryKey=function(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(e,t,n){t&&(r[t]=n)})),r}(0,i.query),i}const ws="function"===typeof addEventListener&&"function"===typeof removeEventListener,ks=[];ws&&addEventListener("offline",(()=>{ks.forEach((e=>e()))}),!1);class _s extends Qa{constructor(e,t){if(super(),this.binaryType="arraybuffer",this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&"object"===typeof e&&(t=e,e=null),e){const r=xs(e);t.hostname=r.host,t.secure="https"===r.protocol||"wss"===r.protocol,t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=xs(t.host).host);ts(this,t),this.secure=null!=t.secure?t.secure:"undefined"!==typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach((e=>{const t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e})),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"===typeof this.opts.query&&(this.opts.query=function(e){let t={},r=e.split("&");for(let n=0,o=r.length;n<o;n++){let e=r[n].split("=");t[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}return t}(this.opts.query)),ws&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ks.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);const e=this.opts.rememberUpgrade&&_s.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",(e=>this._onClose("transport close",e)))}onOpen(){this.readyState="open",_s.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()}_onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn((()=>{this._onClose("ping timeout")}),e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let r=0;r<this.writeBuffer.length;r++){const n=this.writeBuffer[r].data;if(n&&(e+="string"===typeof(t=n)?function(e){let t=0,r=0;for(let n=0,o=e.length;n<o;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}(t):Math.ceil(1.33*(t.byteLength||t.size))),r>0&&e>this._maxPayload)return this.writeBuffer.slice(0,r);e+=2}var t;return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Xa((()=>{this._onClose("ping timeout")}),this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,n){if("function"===typeof t&&(n=t,t=void 0),"function"===typeof r&&(n=r,r=null),"closing"===this.readyState||"closed"===this.readyState)return;(r=r||{}).compress=!1!==r.compress;const o={type:e,data:t,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?r():e()})):this.upgrading?r():e()),this}_onError(e){if(_s.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),ws&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const e=ks.indexOf(this._offlineEventListener);-1!==e&&ks.splice(e,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}_s.protocol=4;class Ss extends _s{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),"open"===this.readyState&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),r=!1;_s.priorWebsocketSuccess=!1;const n=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",(e=>{if(!r)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;_s.priorWebsocketSuccess="websocket"===t.name,this.transport.pause((()=>{r||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())}))}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}})))};function o(){r||(r=!0,u(),t.close(),t=null)}const i=e=>{const r=new Error("probe error: "+e);r.transport=t.name,o(),this.emitReserved("upgradeError",r)};function a(){i("transport closed")}function s(){i("socket closed")}function l(e){t&&e.name!==t.name&&o()}const u=()=>{t.removeListener("open",n),t.removeListener("error",i),t.removeListener("close",a),this.off("close",s),this.off("upgrading",l)};t.once("open",n),t.once("error",i),t.once("close",a),this.once("close",s),this.once("upgrading",l),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn((()=>{r||t.open()}),200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}}class Es extends Ss{constructor(e){const t="object"===typeof e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!t.transports||t.transports&&"string"===typeof t.transports[0])&&(t.transports=(t.transports||["polling","websocket","webtransport"]).map((e=>vs[e])).filter((e=>!!e))),super(e,t)}}const js="function"===typeof ArrayBuffer,Cs=Object.prototype.toString,Ts="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Cs.call(Blob),Os="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===Cs.call(File);function Rs(e){return js&&(e instanceof ArrayBuffer||(e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer)(e))||Ts&&e instanceof Blob||Os&&e instanceof File}function Ps(e,t){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e)){for(let t=0,r=e.length;t<r;t++)if(Ps(e[t]))return!0;return!1}if(Rs(e))return!0;if(e.toJSON&&"function"===typeof e.toJSON&&1===arguments.length)return Ps(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&Ps(e[r]))return!0;return!1}function As(e){const t=[],r=e.data,n=e;return n.data=Ls(r,t),n.attachments=t.length,{packet:n,buffers:t}}function Ls(e,t){if(!e)return e;if(Rs(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=Ls(e[n],t);return r}if("object"===typeof e&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=Ls(e[n],t));return r}return e}function Ns(e,t){return e.data=zs(e.data,t),delete e.attachments,e}function zs(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"===typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=zs(e[r],t);else if("object"===typeof e)for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=zs(e[r],t));return e}const $s=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Ms=5;var Is;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(Is||(Is={}));class Ds{constructor(e){this.replacer=e}encode(e){return e.type!==Is.EVENT&&e.type!==Is.ACK||!Ps(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===Is.EVENT?Is.BINARY_EVENT:Is.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==Is.BINARY_EVENT&&e.type!==Is.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=As(e),r=this.encodeAsString(t.packet),n=t.buffers;return n.unshift(r),n}}function Fs(e){return"[object Object]"===Object.prototype.toString.call(e)}class Us extends Qa{constructor(e){super(),this.reviver=e}add(e){let t;if("string"===typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===Is.BINARY_EVENT;r||t.type===Is.BINARY_ACK?(t.type=r?Is.EVENT:Is.ACK,this.reconstructor=new Bs(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!Rs(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(void 0===Is[r.type])throw new Error("unknown packet type "+r.type);if(r.type===Is.BINARY_EVENT||r.type===Is.BINARY_ACK){const n=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const o=e.substring(n,t);if(o!=Number(o)||"-"!==e.charAt(t))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===e.charAt(t+1)){const n=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}r.nsp=e.substring(n,t)}else r.nsp="/";const n=e.charAt(t+1);if(""!==n&&Number(n)==n){const n=t+1;for(;++t;){const r=e.charAt(t);if(null==r||Number(r)!=r){--t;break}if(t===e.length)break}r.id=Number(e.substring(n,t+1))}if(e.charAt(++t)){const n=this.tryParse(e.substr(t));if(!Us.isPayloadValid(r.type,n))throw new Error("invalid payload");r.data=n}return r}tryParse(t){try{return JSON.parse(t,this.reviver)}catch(e){return!1}}static isPayloadValid(e,t){switch(e){case Is.CONNECT:return Fs(t);case Is.DISCONNECT:return void 0===t;case Is.CONNECT_ERROR:return"string"===typeof t||Fs(t);case Is.EVENT:case Is.BINARY_EVENT:return Array.isArray(t)&&("number"===typeof t[0]||"string"===typeof t[0]&&-1===$s.indexOf(t[0]));case Is.ACK:case Is.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Bs{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=Ns(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ws(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Hs=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class qs extends Qa{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ws(e,"open",this.onopen.bind(this)),Ws(e,"packet",this.onpacket.bind(this)),Ws(e,"error",this.onerror.bind(this)),Ws(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.unshift("message"),this.emit.apply(this,t),this}emit(e){var t,r,n;if(Hs.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];if(i.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const s={type:Is.EVENT,data:i,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"===typeof i[i.length-1]){const e=this.ids++,t=i.pop();this._registerAckCallback(e,t),s.id=e}const l=null===(r=null===(t=this.io.engine)||void 0===t?void 0:t.transport)||void 0===r?void 0:r.writable,u=this.connected&&!(null===(n=this.io.engine)||void 0===n?void 0:n._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var r,n=this;const o=null!==(r=this.flags.timeout)&&void 0!==r?r:this._opts.ackTimeout;if(void 0===o)return void(this.acks[e]=t);const i=this.io.setTimeoutFn((()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))}),o),a=function(){n.io.clearTimeoutFn(i);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];t.apply(n,r)};a.withError=!0,this.acks[e]=a}emitWithAck(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return new Promise(((t,n)=>{const o=(e,r)=>e?n(e):t(r);o.withError=!0,r.push(o),this.emit(e,...r)}))}_addToQueue(e){var t=this;let r;"function"===typeof e[e.length-1]&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((function(e){if(n!==t._queue[0])return;if(null!==e)n.tryCount>t._opts.retries&&(t._queue.shift(),r&&r(e));else if(t._queue.shift(),r){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];r(null,...i)}return n.pending=!1,t._drainQueue()})),this._queue.push(n),this._drainQueue()}_drainQueue(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth((e=>{this._sendConnectPacket(e)})):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Is.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach((e=>{if(!this.sendBuffer.some((t=>String(t.id)===e))){const t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,new Error("socket has been disconnected"))}}))}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Is.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Is.EVENT:case Is.BINARY_EVENT:this.onevent(e);break;case Is.ACK:case Is.BINARY_ACK:this.onack(e);break;case Is.DISCONNECT:this.ondisconnect();break;case Is.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"===typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(){if(!r){r=!0;for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];t.packet({type:Is.ACK,id:e,data:o})}}}onack(e){const t=this.acks[e.id];"function"===typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach((e=>this.emitEvent(e))),this.receiveBuffer=[],this.sendBuffer.forEach((e=>{this.notifyOutgoingListeners(e),this.packet(e)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((e=>e())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Is.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function Vs(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Vs.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-r:e+r}return 0|Math.min(e,this.max)},Vs.prototype.reset=function(){this.attempts=0},Vs.prototype.setMin=function(e){this.ms=e},Vs.prototype.setMax=function(e){this.max=e},Vs.prototype.setJitter=function(e){this.jitter=e};class Ks extends Qa{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&"object"===typeof e&&(t=e,e=void 0),(t=t||{}).path=t.path||"/socket.io",this.opts=t,ts(this,t),this.reconnection(!1!==t.reconnection),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(n=t.randomizationFactor)&&void 0!==n?n:.5),this.backoff=new Vs({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==t.timeout?2e4:t.timeout),this._readyState="closed",this.uri=e;const o=t.parser||r;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=!1!==t.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Es(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const n=Ws(t,"open",(function(){r.onopen(),e&&e()})),o=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},i=Ws(t,"error",o);if(!1!==this._timeout){const e=this._timeout,r=this.setTimeoutFn((()=>{n(),o(new Error("timeout")),t.close()}),e);this.opts.autoUnref&&r.unref(),this.subs.push((()=>{this.clearTimeoutFn(r)}))}return this.subs.push(n),this.subs.push(i),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ws(e,"ping",this.onping.bind(this)),Ws(e,"data",this.ondata.bind(this)),Ws(e,"error",this.onerror.bind(this)),Ws(e,"close",this.onclose.bind(this)),Ws(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(e){Xa((()=>{this.emitReserved("packet",e)}),this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new qs(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t){if(this.nsps[r].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach((e=>e())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),null===(r=this.engine)||void 0===r||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn((()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()})))}),t);this.opts.autoUnref&&r.unref(),this.subs.push((()=>{this.clearTimeoutFn(r)}))}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ys={};function Qs(e,t){"object"===typeof e&&(t=e,e=void 0);const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n=e;r=r||"undefined"!==typeof location&&location,null==e&&(e=r.protocol+"//"+r.host),"string"===typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?r.protocol+e:r.host+e),/^(https?|wss?):\/\//.test(e)||(e="undefined"!==typeof r?r.protocol+"//"+e:"https://"+e),n=xs(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}(e,(t=t||{}).path||"/socket.io"),n=r.source,o=r.id,i=r.path,a=Ys[o]&&i in Ys[o].nsps;let s;return t.forceNew||t["force new connection"]||!1===t.multiplex||a?s=new Ks(n,t):(Ys[o]||(Ys[o]=new Ks(n,t)),s=Ys[o]),r.query&&!t.query&&(t.query=r.queryKey),s.socket(r.path,t)}Object.assign(Qs,{Manager:Ks,Socket:qs,io:Qs,connect:Qs});const Xs={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org";let Js;const Gs=e=>(Js||(console.log("Inicializando socket com token:",e?"presente":"ausente"),Js=Qs(Xs,{auth:{token:e},transports:["websocket"],reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3,withCredentials:!0}),Js.on("connect",(()=>{console.log("Socket conectado:",Js.id)})),Js.on("disconnect",(e=>{console.log("Socket desconectado. Raz\xe3o:",e),"io server disconnect"===e&&Js.connect()})),Js.on("connect_error",(e=>{console.error("Erro de conex\xe3o:",e.message),console.error("Detalhes do erro:",e),setTimeout((()=>{Js.connect()}),1e3)}))),Js),Zs=e=>Js&&Js.connected?Js:Js&&!Js.connected?(Js.connect(),Js):Gs(e);var el=n(579);const tl=(0,o.createContext)(),rl=e=>{let{children:t}=e;const[r,n]=(0,o.useState)(null),[i,a]=(0,o.useState)(!0),[s,l]=(0,o.useState)(!1),u=(0,o.useCallback)((async()=>{try{if(!("Notification"in window))return console.warn("Este navegador n\xe3o suporta notifica\xe7\xf5es desktop"),!1;if("granted"===Notification.permission)return!0;if("denied"!==Notification.permission){if("granted"===await Notification.requestPermission())return console.log("Permiss\xe3o para notifica\xe7\xf5es concedida"),!0}return console.log("Permiss\xe3o para notifica\xe7\xf5es n\xe3o concedida"),!1}catch(e){return console.error("Erro ao solicitar permiss\xe3o de notifica\xe7\xf5es:",e),!1}}),[]),c=(0,o.useCallback)((async()=>{if(!localStorage.getItem("token"))return a(!1),void l(!0);try{var e,t;a(!0);const r=await ja();n((null===r||void 0===r?void 0:r.user)||null),!1!==(null===r||void 0===r||null===(e=r.user)||void 0===e||null===(t=e.settings)||void 0===t?void 0:t.notificationsEnabled)&&await u()}catch(r){console.error("Falha na verifica\xe7\xe3o de autentica\xe7\xe3o:",r),localStorage.removeItem("token"),n(null)}finally{a(!1),l(!0)}}),[u]),d=(0,o.useCallback)((async e=>{try{var t,r;a(!0);const o=await apiLogin(e);return localStorage.setItem("token",o.token),n(o.user),!1!==(null===(t=o.user)||void 0===t||null===(r=t.settings)||void 0===r?void 0:r.notificationsEnabled)&&await u(),o}catch(o){throw o}finally{a(!1)}}),[u]),f=(0,o.useCallback)((async()=>{try{await Ca(),localStorage.removeItem("token"),n(null),Js&&(Js.disconnect(),Js=null)}catch(e){console.error("Logout error:",e)}}),[]),p=(0,o.useCallback)((async function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{n((t=>({...t,...e}))),t&&await c()}catch(r){throw console.error("Falha ao atualizar usu\xe1rio:",r),r}}),[c]),h=(0,o.useCallback)((async e=>{try{const t=new FormData;t.append("avatar",e);const{data:r}=await ka.put("/users/profile",t,{headers:{"Content-Type":"multipart/form-data"}});return await p(r),r}catch(t){throw console.error("Falha ao atualizar avatar:",t),t}}),[p]),m=(0,o.useCallback)((async e=>{try{return await ka.patch("/users/settings",{notificationsEnabled:e}),await p({settings:{...r.settings,notificationsEnabled:e}},!1),e&&await u(),!0}catch(t){throw console.error("Falha ao atualizar prefer\xeancias:",t),t}}),[r,p,u]);return(0,o.useEffect)((()=>{c()}),[c]),(0,el.jsx)(tl.Provider,{value:{user:r,loading:i,initialCheckDone:s,verifyAuth:c,login:d,logout:f,updateUser:p,updateAvatar:h,updateNotificationPreferences:m,requestNotificationPermission:u},children:t})},nl=()=>{const e=(0,o.useContext)(tl);if(!e)throw new Error("useAuth deve ser usado dentro de um AuthProvider");return e};var ol,il,al=n(403);!function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(ol||(ol={})),function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"}(il||(il={}));const sl=(0,al.F3)("StatusBar"),ll=(0,o.createContext)(),ul=e=>{let{children:t}=e;const[r,n]=(0,o.useState)((()=>{if(al.Ii.isNativePlatform())return"dark";const e=localStorage.getItem("theme"),t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return e||(t?"dark":"light")}));return(0,o.useEffect)((()=>{document.body.setAttribute("data-theme",r),al.Ii.isNativePlatform()&&(sl.setBackgroundColor({color:"dark"===r?"#121212":"#ffffff"}),sl.setStyle({style:"dark"===r?ol.Dark:ol.Light}))}),[r]),(0,el.jsx)(ll.Provider,{value:{theme:r,toggleTheme:()=>{n((e=>{const t="light"===e?"dark":"light";return localStorage.setItem("theme",t),al.Ii.isNativePlatform()&&sl.setStyle({style:"dark"===t?ol.Dark:ol.Light}),t}))}},children:t})},cl=()=>{const e=(0,o.useContext)(ll);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e};var dl;n(536);!function(e){e[e.Sunday=1]="Sunday",e[e.Monday=2]="Monday",e[e.Tuesday=3]="Tuesday",e[e.Wednesday=4]="Wednesday",e[e.Thursday=5]="Thursday",e[e.Friday=6]="Friday",e[e.Saturday=7]="Saturday"}(dl||(dl={}));const fl=(0,al.F3)("LocalNotifications",{web:()=>n.e(640).then(n.bind(n,640)).then((e=>new e.LocalNotificationsWeb))}),pl=(0,o.createContext)(),hl=e=>{let{children:t}=e;const[r,n]=(0,o.useState)([]),[i,a]=(0,o.useState)(0),[s,l]=(0,o.useState)(!0),{user:u}=nl(),[c,d]=(0,o.useState)(null),f=(0,o.useCallback)((e=>{n(e)}),[]),p=(0,o.useCallback)((async()=>{try{var e;l(!0);const t=await ka.get("/notifications",{params:{limit:20,skip:0,sort:"-createdAt"}}),r=Array.isArray(null===(e=t.data)||void 0===e?void 0:e.data)?t.data.data:[];f(r)}catch(t){console.error("Failed to load notifications:",t),f([])}finally{l(!1)}}),[f]),h=(0,o.useCallback)((async()=>{if(u)try{const e=await ka.get("/notifications/unread-count");a(e.data.count||0)}catch(e){console.error("Failed to load unread count:",e),a(0)}}),[u]),m=(0,o.useCallback)((async e=>{if(e&&0!==e.length)try{await ka.post("/notifications/mark-read",{notificationIds:e}),a((t=>Math.max(0,t-e.length))),n((t=>t.map((t=>e.includes(t._id)?{...t,read:!0}:t))))}catch(t){console.error("Failed to mark as read:",t)}}),[]),g=(0,o.useCallback)((async()=>{try{return await ka.delete("/notifications"),n([]),a(0),!0}catch(e){return console.error("Failed to clear notifications:",e),!1}}),[]),v=(0,o.useCallback)((e=>{if("Notification"in window&&"granted"===Notification.permission){var t,r;const n=b(e),o={body:x(e),icon:(null===(t=e.sender)||void 0===t||null===(r=t.profile)||void 0===r?void 0:r.avatar)||"/logo192.png",badge:"/logo192.png"};window.lastNotification&&window.lastNotification.close(),window.lastNotification=new Notification(n,o),window.lastNotification.onclick=()=>{window.focus(),e.meme?window.location.href=`/memes/${e.meme._id}`:e.comment?window.location.href=`/comments/${e.comment._id}`:e.reply&&(window.location.href=`/replies/${e.reply._id}`)}}}),[]),y=(0,o.useCallback)((e=>{console.log("Nova notifica\xe7\xe3o recebida (antes do estado):",e),n((t=>{const r=[e,...t].slice(0,100);return console.log("Notifica\xe7\xf5es ap\xf3s atualiza\xe7\xe3o:",r),r})),a((e=>e+1)),"visible"!==document.visibilityState&&v(e)}),[v]);(0,o.useEffect)((()=>{if(!u)return n([]),a(0),void(c&&(c.disconnect(),d(null)));(async()=>{if(Capacitor.isNativePlatform())try{await(async()=>{if(!al.Ii.isNativePlatform())return void("Notification"in window&&"denied"!==Notification.permission&&await Notification.requestPermission());if("granted"!==(await fl.requestPermissions()).display)throw new Error("Permiss\xe3o negada para notifica\xe7\xf5es");fl.addListener("localNotificationActionPerformed",(e=>{var t;console.log("Notifica\xe7\xe3o local clicada:",e),null!==(t=e.notification.extra)&&void 0!==t&&t.memeId&&(window.location.href=`/memes/${e.notification.extra.memeId}`)}))})()}catch(e){console.error("Notification initialization error:",e)}else"Notification"in window&&"denied"!==Notification.permission&&Notification.requestPermission().catch(console.error)})();const e=(()=>{const e=localStorage.getItem("token");if(!e)return null;const t=Gs(e);return t.on("connect",(()=>{console.log("WebSocket connected"),t.emit("authenticate",e)})),t.on("connect_error",(e=>{console.error("WebSocket connection error:",e.message),setTimeout((()=>{console.log("Attempting to reconnect WebSocket..."),t.connect()}),5e3)})),t.on("disconnect",(e=>{console.log("WebSocket disconnected:",e),"io client disconnect"!==e&&setTimeout((()=>{console.log("Reconnecting after disconnect..."),t.connect()}),3e3)})),t.on("reconnect_failed",(()=>{console.error("WebSocket reconnection failed")})),t.on("new-notification",y),t.on("notifications-read",(e=>{n((t=>t.map((t=>e.includes(t._id)?{...t,read:!0}:t))))})),t})();d(e);(async()=>{try{l(!0),await Promise.all([p(),h()])}catch(e){console.error("Error loading initial data:",e)}finally{l(!1)}})();const t=setInterval((()=>{e&&!e.connected&&(console.log("WebSocket not connected, attempting to reconnect..."),e.connect())}),3e4);return()=>{clearInterval(t),e&&(e.off("connect"),e.off("connect_error"),e.off("disconnect"),e.off("reconnect_failed"),e.off("new-notification"),e.off("notifications-read"),e.disconnect())}}),[u,y,p,h]);const b=e=>{var t,r,n,o,i,a;switch(e.type){case"like":return`${(null===(t=e.sender)||void 0===t?void 0:t.username)||"Algu\xe9m"} curtiu seu meme`;case"like_grouped":return`Seu meme tem ${(null===(r=e.metadata)||void 0===r?void 0:r.count)||"muitas"} curtidas`;case"comment":return`${(null===(n=e.sender)||void 0===n?void 0:n.username)||"Algu\xe9m"} comentou no seu meme`;case"comment_grouped":return`Seu meme tem ${(null===(o=e.metadata)||void 0===o?void 0:o.count)||"muitos"} coment\xe1rios`;case"reply":return`${(null===(i=e.sender)||void 0===i?void 0:i.username)||"Algu\xe9m"} respondeu seu coment\xe1rio`;case"mention":return`${(null===(a=e.sender)||void 0===a?void 0:a.username)||"Algu\xe9m"} te mencionou`;default:return"Nova notifica\xe7\xe3o"}},x=e=>{var t,r,n,o;switch(e.type){case"like":case"comment":return null!==(t=e.meme)&&void 0!==t&&t.caption?w(e.meme.caption,50):"Veja agora";case"like_grouped":case"comment_grouped":return null!==(r=e.meme)&&void 0!==r&&r.caption?w(e.meme.caption,50):"Veja todas as intera\xe7\xf5es";case"reply":return null!==(n=e.reply)&&void 0!==n&&n.text?w(e.reply.text,50):"Veja a resposta";case"mention":return null!==(o=e.comment)&&void 0!==o&&o.text?w(e.comment.text,50):"Veja a men\xe7\xe3o";default:return""}},w=(e,t)=>(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e;return(0,el.jsx)(pl.Provider,{value:{notifications:r,unreadCount:i,loading:s,markAsRead:m,clearAllNotifications:g,loadNotifications:p,loadUnreadCount:h},children:t})};var ml={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gl=o.createContext&&o.createContext(ml),vl=["attr","size","title"];function yl(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bl.apply(this,arguments)}function xl(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function wl(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xl(Object(r),!0).forEach((function(t){kl(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xl(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function kl(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _l(e){return e&&e.map(((e,t)=>o.createElement(e.tag,wl({key:t},e.attr),_l(e.child))))}function Sl(e){return t=>o.createElement(El,bl({attr:wl({},e.attr)},t),_l(e.child))}function El(e){var t=t=>{var r,{attr:n,size:i,title:a}=e,s=yl(e,vl),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",bl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:wl(wl({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&o.createElement("title",null,a),e.children)};return void 0!==gl?o.createElement(gl.Consumer,null,(e=>t(e))):t(ml)}function jl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 240c0-9.3 4.1-17.5 10.5-23.4l-31-9.3c-8.5-2.5-13.3-11.5-10.7-19.9 2.5-8.5 11.4-13.2 19.9-10.7l80 24c8.5 2.5 13.3 11.5 10.7 19.9-2.1 6.9-8.4 11.4-15.3 11.4-.5 0-1.1-.2-1.7-.2.7 2.7 1.7 5.3 1.7 8.2 0 17.7-14.3 32-32 32S136 257.7 136 240zm168 154.2c-27.8-33.4-84.2-33.4-112.1 0-13.5 16.3-38.2-4.2-24.6-20.5 20-24 49.4-37.8 80.6-37.8s60.6 13.8 80.6 37.8c13.8 16.5-11.1 36.6-24.5 20.5zm76.6-186.9l-31 9.3c6.3 5.8 10.5 14.1 10.5 23.4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.9.9-5.6 1.7-8.2-.6.1-1.1.2-1.7.2-6.9 0-13.2-4.5-15.3-11.4-2.5-8.5 2.3-17.4 10.7-19.9l80-24c8.4-2.5 17.4 2.3 19.9 10.7 2.5 8.5-2.3 17.4-10.8 19.9z"},child:[]}]})(e)}function Cl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Tl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(e)}function Ol(e){return Sl({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(e)}function Rl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(e)}function Pl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z"},child:[]}]})(e)}function Al(e){return Sl({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M0 256c0 137 111 248 248 248s248-111 248-248S385 8 248 8 0 119 0 256zm200-48c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm158.5 16.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.7 11.1-11.4 18.3-19.8 10.8l-9.7-8.5zM157.8 325.8C180.2 352.7 213 368 248 368s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.2 24.6 20.5C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11.2-36.7 24.6-20.4z"},child:[]}]})(e)}function Ll(e){return Sl({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"},child:[]}]})(e)}function Nl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}const zl=eo.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${e=>e.$fullPage&&"\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.8);\n    z-index: 1000;\n  "}
`,$l=eo((function(e){return Sl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(e)}))`
  animation: spin 1s linear infinite;
  font-size: 2rem;
  color: #ff4500;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,Ml=e=>{let{fullPage:t=!1}=e;return(0,el.jsx)(zl,{$fullPage:t,children:(0,el.jsx)($l,{})})},Il=e=>{let{children:t}=e;const{user:r,loading:n,initialCheckDone:i}=nl(),a=Z();return(0,o.useEffect)((()=>{al.Ii.isNativePlatform()&&sl.setBackgroundColor({color:"#121212"})}),[]),n||!i?(0,el.jsx)(Ml,{fullPage:!0}):r?al.Ii.isNativePlatform()?(0,el.jsx)("div",{style:{paddingTop:"env(safe-area-inset-top)",paddingBottom:"env(safe-area-inset-bottom)",minHeight:"calc(100vh - 60px)"},children:t}):t:(0,el.jsx)(ye,{to:"/login",replace:!0,state:{from:a,message:"Por favor fa\xe7a login para acessar esta p\xe1gina",isMobile:al.Ii.isNativePlatform()}})};function Dl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(e)}function Fl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(e)}function Ul(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function Bl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(e)}function Wl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function Hl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(e)}function ql(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function Vl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(e)}function Kl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(e)}function Yl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(e)}function Ql(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function Xl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(e)}function Jl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"6"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12",y2:"22"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"6",y2:"12"},child:[]},{tag:"line",attr:{x1:"18",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"},child:[]}]})(e)}function Gl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(e)}function Zl(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function eu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(e)}function tu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(e)}function ru(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(e)}function nu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(e)}function ou(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"},child:[]}]})(e)}function iu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}function au(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}function su(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(e)}function lu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(e)}function uu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}function cu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function du(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(e)}function fu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(e)}function pu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(e)}function hu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(e)}function mu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(e)}function gu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(e)}function vu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(e)}function yu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"},child:[]},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"},child:[]}]})(e)}function bu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function xu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function wu(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function ku(e){return Sl({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(e)}const _u={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},Su={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Eu="mousemove",ju="mouseup";function Cu(e,t){if(0===t)return e;const r=Math.PI/180*t;return[e[0]*Math.cos(r)+e[1]*Math.sin(r),e[1]*Math.cos(r)-e[0]*Math.sin(r)]}function Tu(e,t){const r=t=>{const r="touches"in t;r&&t.touches.length>1||e(((e,o)=>{o.trackMouse&&!r&&(document.addEventListener(Eu,n),document.addEventListener(ju,i));const{clientX:a,clientY:s}=r?t.touches[0]:t,l=Cu([a,s],o.rotationAngle);return o.onTouchStartOrOnMouseDown&&o.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),Su),{initial:l.slice(),xy:l,start:t.timeStamp||0})}))},n=t=>{e(((e,r)=>{const n="touches"in t;if(n&&t.touches.length>1)return e;if(t.timeStamp-e.start>r.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;const{clientX:o,clientY:i}=n?t.touches[0]:t,[a,s]=Cu([o,i],r.rotationAngle),l=a-e.xy[0],u=s-e.xy[1],c=Math.abs(l),d=Math.abs(u),f=(t.timeStamp||0)-e.start,p=Math.sqrt(c*c+d*d)/(f||1),h=[l/(f||1),u/(f||1)],m=function(e,t,r,n){return e>t?r>0?"Right":"Left":n>0?"Down":"Up"}(c,d,l,u),g="number"===typeof r.delta?r.delta:r.delta[m.toLowerCase()]||_u.delta;if(c<g&&d<g&&!e.swiping)return e;const v={absX:c,absY:d,deltaX:l,deltaY:u,dir:m,event:t,first:e.first,initial:e.initial,velocity:p,vxvy:h};v.first&&r.onSwipeStart&&r.onSwipeStart(v),r.onSwiping&&r.onSwiping(v);let y=!1;return(r.onSwiping||r.onSwiped||r[`onSwiped${m}`])&&(y=!0),y&&r.preventScrollOnSwipe&&r.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:v,swiping:!0})}))},o=t=>{e(((e,r)=>{let n;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<r.swipeDuration){n=Object.assign(Object.assign({},e.eventData),{event:t}),r.onSwiped&&r.onSwiped(n);const o=r[`onSwiped${n.dir}`];o&&o(n)}}else r.onTap&&r.onTap({event:t});return r.onTouchEndOrOnMouseUp&&r.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),Su),{eventData:n})}))},i=e=>{document.removeEventListener(Eu,n),document.removeEventListener(ju,i),o(e)},a=(e,t)=>{let i=()=>{};if(e&&e.addEventListener){const a=Object.assign(Object.assign({},_u.touchEventOptions),t.touchEventOptions),s=[["touchstart",r,a],["touchmove",n,Object.assign(Object.assign({},a),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",o,a]];s.forEach((t=>{let[r,n,o]=t;return e.addEventListener(r,n,o)})),i=()=>s.forEach((t=>{let[r,n]=t;return e.removeEventListener(r,n)}))}return i},s={ref:t=>{null!==t&&e(((e,r)=>{if(e.el===t)return e;const n={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),n.cleanUpTouch=void 0),r.trackTouch&&t&&(n.cleanUpTouch=a(t,r)),Object.assign(Object.assign(Object.assign({},e),{el:t}),n)}))}};return t.trackMouse&&(s.onMouseDown=r),[s,a]}function Ou(e){const{trackMouse:t}=e,r=o.useRef(Object.assign({},Su)),n=o.useRef(Object.assign({},_u)),i=o.useRef(Object.assign({},n.current));let a;for(a in i.current=Object.assign({},n.current),n.current=Object.assign(Object.assign({},_u),e),_u)void 0===n.current[a]&&(n.current[a]=_u[a]);const[s,l]=o.useMemo((()=>Tu((e=>r.current=e(r.current,n.current)),{trackMouse:t})),[t]);return r.current=function(e,t,r,n){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==r.preventScrollOnSwipe||t.touchEventOptions.passive!==r.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:n(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:n(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(r.current,n.current,i.current,l),s}Math.pow(10,8);const Ru=43200,Pu=Symbol.for("constructDateFrom");function Au(e,t){return"function"===typeof e?e(t):e&&"object"===typeof e&&Pu in e?e[Pu](t):e instanceof Date?new e.constructor(t):new Date(t)}function Lu(e){return Au(e,Date.now())}const Nu={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function zu(e){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const $u={date:zu({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:zu({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:zu({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Mu={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Iu(e){return(t,r)=>{let n;if("formatting"===(r?.context?String(r.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,o=r?.width?String(r.width):t;n=e.formattingValues[o]||e.formattingValues[t]}else{const t=e.defaultWidth,o=r?.width?String(r.width):e.defaultWidth;n=e.values[o]||e.values[t]}return n[e.argumentCallback?e.argumentCallback(t):t]}}const Du={ordinalNumber:(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:Iu({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Iu({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:Iu({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Iu({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Iu({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function Fu(e){return function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=r.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?function(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r;return}(s,(e=>e.test(a))):function(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r;return}(s,(e=>e.test(a)));let u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;return{value:u,rest:t.slice(a.length)}}}function Uu(e){return function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=t.match(e.matchPattern);if(!n)return null;const o=n[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=r.valueCallback?r.valueCallback(a):a;return{value:a,rest:t.slice(o.length)}}}const Bu={ordinalNumber:Uu({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:Fu({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Fu({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:Fu({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Fu({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Fu({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},Wu={code:"en-US",formatDistance:(e,t,r)=>{let n;const o=Nu[e];return n="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},formatLong:$u,formatRelative:(e,t,r,n)=>Mu[e],localize:Du,match:Bu,options:{weekStartsOn:0,firstWeekContainsDate:1}};let Hu={};function qu(){return Hu}function Vu(e,t){return Au(t||e,e)}function Ku(e){const t=Vu(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Yu(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];const o=Au.bind(null,e||r.find((e=>"object"===typeof e)));return r.map(o)}function Qu(e,t){const r=+Vu(e)-+Vu(t);return r<0?-1:r>0?1:r}function Xu(e,t,r){const[n,o]=Yu(r?.in,e,t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}function Ju(e,t){const r=Vu(e,t?.in);return r.setHours(23,59,59,999),r}function Gu(e,t){const r=Vu(e,t?.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function Zu(e,t){const r=Vu(e,t?.in);return+Ju(r,t)===+Gu(r,t)}function ec(e,t,r){const[n,o,i]=Yu(r?.in,e,e,t),a=Qu(o,i),s=Math.abs(Xu(o,i));if(s<1)return 0;1===o.getMonth()&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-a*s);let l=Qu(o,i)===-a;Zu(n)&&1===s&&1===Qu(n,i)&&(l=!1);const u=a*(s-+l);return 0===u?0:u}function tc(e,t){return+Vu(e)-+Vu(t)}function rc(e,t,r){const n=tc(e,t)/1e3;return(o=r?.roundingMethod,e=>{const t=(o?Math[o]:Math.trunc)(e);return 0===t?0:t})(n);var o}function nc(e,t,r){const n=qu(),o=r?.locale??n.locale??Wu,i=Qu(e,t);if(isNaN(i))throw new RangeError("Invalid time value");const a=Object.assign({},r,{addSuffix:r?.addSuffix,comparison:i}),[s,l]=Yu(r?.in,...i>0?[t,e]:[e,t]),u=rc(l,s),c=(Ku(l)-Ku(s))/1e3,d=Math.round((u-c)/60);let f;if(d<2)return r?.includeSeconds?u<5?o.formatDistance("lessThanXSeconds",5,a):u<10?o.formatDistance("lessThanXSeconds",10,a):u<20?o.formatDistance("lessThanXSeconds",20,a):u<40?o.formatDistance("halfAMinute",0,a):u<60?o.formatDistance("lessThanXMinutes",1,a):o.formatDistance("xMinutes",1,a):0===d?o.formatDistance("lessThanXMinutes",1,a):o.formatDistance("xMinutes",d,a);if(d<45)return o.formatDistance("xMinutes",d,a);if(d<90)return o.formatDistance("aboutXHours",1,a);if(d<1440){const e=Math.round(d/60);return o.formatDistance("aboutXHours",e,a)}if(d<2520)return o.formatDistance("xDays",1,a);if(d<Ru){const e=Math.round(d/1440);return o.formatDistance("xDays",e,a)}if(d<86400)return f=Math.round(d/Ru),o.formatDistance("aboutXMonths",f,a);if(f=ec(l,s),f<12){const e=Math.round(d/Ru);return o.formatDistance("xMonths",e,a)}{const e=f%12,t=Math.trunc(f/12);return e<3?o.formatDistance("aboutXYears",t,a):e<9?o.formatDistance("overXYears",t,a):o.formatDistance("almostXYears",t+1,a)}}function oc(e,t){return nc(e,Lu(e),t)}const ic={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},ac={date:zu({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:zu({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:zu({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},sc={lastWeek:e=>{const t=e.getDay();return"'"+(0===t||6===t?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"},lc={ordinalNumber:(e,t)=>{const r=Number(e);return"week"===t?.unit?r+"\xaa":r+"\xba"},era:Iu({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:Iu({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:Iu({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:Iu({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:Iu({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})},uc={ordinalNumber:Uu({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:Fu({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:Fu({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:Fu({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:Fu({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:Fu({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},cc={code:"pt-BR",formatDistance:(e,t,r)=>{let n;const o=ic[e];return n="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",String(t)),r?.addSuffix?r.comparison&&r.comparison>0?"em "+n:"h\xe1 "+n:n},formatLong:ac,formatRelative:(e,t,r,n)=>{const o=sc[e];return"function"===typeof o?o(t):o},localize:lc,match:uc,options:{weekStartsOn:0,firstWeekContainsDate:1}},dc=ro`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,fc=ro`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`,pc=eo.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--danger);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`,hc=eo.button`
  position: relative;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`,mc=eo.div`
  position: fixed;
  top: ${al.Ii.isNativePlatform()?"60px":"calc(100% + 10px)"};
  right: 10px;
  width: ${al.Ii.isNativePlatform()?"calc(100% - 20px)":"380px"};
  max-height: ${al.Ii.isNativePlatform()?"70vh":"500px"};
  overflow: hidden;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: ${e=>{let{$isOpen:t}=e;return t?"block":"none"}};
  z-index: 1001;
  animation: ${dc} 0.2s ease-out;
  border: 1px solid var(--border-light);
`,gc=eo.div`
  padding: 16px;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  position: sticky;
  top: 0;
  background: var(--card-bg);
  z-index: 1;
`,vc=eo.div`
  display: flex;
  gap: 10px;
`,yc=eo.button`
  background: none;
  border: none;
  color: ${e=>{let{$danger:t}=e;return t?"var(--danger)":"var(--primary)"}};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  border-radius: 6px;
  
  &:active {
    background: ${e=>{let{$danger:t}=e;return t?"rgba(255, 69, 0, 0.1)":"rgba(0, 123, 255, 0.1)"}};
  }
`,bc=eo.div`
  max-height: calc(${al.Ii.isNativePlatform()?"70vh":"400px"} - 60px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 2px;
  }
`,xc=eo.div`
  padding: 16px;
  border-bottom: 1px solid var(--border-light);
  cursor: pointer;
  display: flex;
  gap: 12px;
  position: relative;
  background: ${e=>{let{$unread:t}=e;return t?"rgba(255, 69, 0, 0.05)":"transparent"}};
  border-left: 3px solid
    ${e=>{let{$type:t}=e;return"like"===t?"var(--like-color)":"comment"===t?"var(--comment-color)":"reply"===t?"var(--reply-color)":"var(--primary)"}};
  
  &:active {
    background: rgba(255, 69, 0, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`,wc=eo.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-light);
  flex-shrink: 0;
`,kc=eo.div`
  flex: 1;
  min-width: 0;
`,_c=eo.div`
  font-size: 15px;
  line-height: 1.4;
`,Sc=eo.span`
  color: var(--primary);
  font-weight: 500;
`,Ec=eo.div`
  font-style: italic;
  margin-top: 6px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border-left: 2px solid var(--border-light);
  color: var(--text-light);
  font-size: 14px;
`,jc=eo.div`
  font-size: 13px;
  color: var(--text-lighter);
  margin-top: 6px;
`,Cc=eo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  
  svg {
    color: var(--primary);
    opacity: ${e=>{let{$unread:t}=e;return t?0:1}};
  }
`,Tc=eo.div`
  padding: 32px 16px;
  text-align: center;
  color: var(--text-lighter);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Oc=eo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: ${dc} 0.2s ease-out;
`,Rc=eo.div`
  background: var(--card-bg);
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${fc} 0.3s ease-out;
`,Pc=eo.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
`,Ac=eo.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`,Lc=eo.button`
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  flex: 1;
  
  &:first-child {
    background: var(--danger);
    color: white;
  }

  &:last-child {
    background: var(--border-light);
    color: var(--text);
  }
`,Nc=()=>{const{notifications:e,unreadCount:t,markAsRead:r,clearAllNotifications:n,loading:i}=(()=>{const e=(0,o.useContext)(pl);if(!e)throw new Error("useNotifications must be used within a NotificationProvider");return e})(),[a,s]=(0,o.useState)(!1),[l,u]=(0,o.useState)(!1),c=(0,o.useRef)(null),d=re();(0,o.useEffect)((()=>{const e=e=>{c.current&&!c.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[]),(0,o.useEffect)((()=>{al.Ii.isNativePlatform()&&(a?(sl.setBackgroundColor({color:"#1E1E1E"}),sl.setStyle({style:"dark"})):(sl.setBackgroundColor({color:"#00000000"}),sl.setStyle({style:"light"})))}),[a]),(0,o.useEffect)((()=>{if(a&&t>0){const t=e.filter((e=>!e.read)).map((e=>e._id));t.length>0&&r(t)}}),[a,e,t,r]);const f=e=>{var t,r,n,o,i,a,s,l,u,c,d,f,p,h;switch(e.type){case"mention":return(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(Sc,{children:null===(t=e.sender)||void 0===t?void 0:t.username})," te mencionou em um"," ","comment"===(null===(r=e.metadata)||void 0===r?void 0:r.context)?"coment\xe1rio":"meme",(null===(n=e.metadata)||void 0===n?void 0:n.text)&&(0,el.jsxs)(Ec,{children:['"',e.metadata.text.length>50?e.metadata.text.substring(0,47)+"...":e.metadata.text,'"']})]});case"like":return(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(Sc,{children:(null===(o=e.sender)||void 0===o?void 0:o.username)||"Algu\xe9m"})," curtiu seu meme",(null===(i=e.meme)||void 0===i?void 0:i.caption)&&(0,el.jsxs)(Ec,{children:['"',e.meme.caption.length>50?e.meme.caption.substring(0,47)+"...":e.meme.caption,'"']})]});case"like_grouped":return(0,el.jsxs)(el.Fragment,{children:["Seu meme tem ",(0,el.jsxs)(Sc,{children:[(null===(a=e.metadata)||void 0===a?void 0:a.count)||"muitas"," curtidas"]}),(null===(s=e.meme)||void 0===s?void 0:s.caption)&&(0,el.jsxs)(Ec,{children:['"',e.meme.caption.length>50?e.meme.caption.substring(0,47)+"...":e.meme.caption,'"']})]});case"comment":return(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(Sc,{children:(null===(l=e.sender)||void 0===l?void 0:l.username)||"Algu\xe9m"})," comentou no seu meme:",null!==(u=e.comment)&&void 0!==u&&u.text?(0,el.jsxs)(Ec,{children:['"',e.comment.text.length>60?e.comment.text.substring(0,57)+"...":e.comment.text,'"']}):(0,el.jsx)(Ec,{children:"Novo coment\xe1rio"})]});case"comment_grouped":return(0,el.jsxs)(el.Fragment,{children:["Seu meme tem ",(0,el.jsxs)(Sc,{children:[(null===(c=e.metadata)||void 0===c?void 0:c.count)||"muitos"," coment\xe1rios"]}),(null===(d=e.meme)||void 0===d?void 0:d.caption)&&(0,el.jsxs)(Ec,{children:['"',e.meme.caption.length>50?e.meme.caption.substring(0,47)+"...":e.meme.caption,'"']})]});case"reply":return(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(Sc,{children:null===(f=e.sender)||void 0===f?void 0:f.username})," respondeu seu coment\xe1rio:",(0,el.jsxs)(Ec,{children:['"',null===(p=e.metadata)||void 0===p?void 0:p.text,'"']}),e.comment&&(0,el.jsxs)("div",{style:{marginTop:4,fontSize:12},children:['Em resposta a: "',null===(h=e.comment.text)||void 0===h?void 0:h.substring(0,40),'..."']})]});default:return"Nova notifica\xe7\xe3o"}};return(0,el.jsxs)("div",{ref:c,style:{position:"relative"},children:[(0,el.jsxs)(hc,{onClick:()=>s(!a),"aria-label":"Notifica\xe7\xf5es",children:[(0,el.jsx)(Bl,{size:24}),t>0&&(0,el.jsx)(pc,{"aria-hidden":"true",children:t>9?"9+":t})]}),(0,el.jsxs)(mc,{$isOpen:a,children:[(0,el.jsxs)(gc,{children:[(0,el.jsx)("span",{children:"Notifica\xe7\xf5es"}),(0,el.jsxs)(vc,{children:[e.length>0&&(0,el.jsxs)(yc,{$danger:!0,onClick:()=>u(!0),"aria-label":"Limpar notifica\xe7\xf5es",children:[(0,el.jsx)(hu,{size:16})," Limpar"]}),e.some((e=>!e.read))&&(0,el.jsxs)(yc,{onClick:async()=>{const t=e.filter((e=>!e.read)).map((e=>e._id));t.length>0&&await r(t)},"aria-label":"Marcar todas como lidas",children:[(0,el.jsx)(Hl,{size:16})," Lidas"]})]})]}),(0,el.jsx)(bc,{children:i?(0,el.jsxs)(Tc,{children:[(0,el.jsx)(Bl,{size:24}),"Carregando notifica\xe7\xf5es..."]}):0===e.length?(0,el.jsxs)(Tc,{children:[(0,el.jsx)(Bl,{size:24}),"Nenhuma notifica\xe7\xe3o"]}):e.map((e=>{var t,r,n;return(0,el.jsxs)(xc,{$unread:!e.read,$type:e.type,onClick:()=>(e=>{s(!1),e.meme?d(`/memes/${e.meme._id}`):e.comment?d(`/memes/${e.comment.meme}`,{state:{highlightComment:e.comment._id}}):e.reply&&d(`/memes/${e.reply.meme}`,{state:{highlightReply:e.reply._id}})})(e),"aria-label":`Notifica\xe7\xe3o de ${e.type}`,children:[(0,el.jsx)(wc,{src:null!==(t=e.sender)&&void 0!==t&&null!==(r=t.profile)&&void 0!==r&&r.avatar?e.sender.profile.avatar.startsWith("https")?e.sender.profile.avatar:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${e.sender.profile.avatar}`:"https://i.pravatar.cc/150?img=3",alt:null===(n=e.sender)||void 0===n?void 0:n.username,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3",e.target.onerror=null}}),(0,el.jsxs)(kc,{children:[(0,el.jsx)(_c,{children:f(e)}),(0,el.jsx)(jc,{children:oc(new Date(e.createdAt),{addSuffix:!0,locale:cc})})]}),(0,el.jsx)(Cc,{$unread:!e.read,children:(0,el.jsx)(Hl,{size:18})})]},e._id)}))})]}),l&&(0,el.jsx)(Oc,{children:(0,el.jsxs)(Rc,{children:[(0,el.jsxs)(Pc,{children:["Tem certeza que deseja limpar todas as notifica\xe7\xf5es?",(0,el.jsx)("br",{}),"Esta a\xe7\xe3o n\xe3o pode ser desfeita."]}),(0,el.jsxs)(Ac,{children:[(0,el.jsx)(Lc,{onClick:async()=>{await n(),u(!1),s(!1)},"aria-label":"Confirmar limpar notifica\xe7\xf5es",children:"Limpar"}),(0,el.jsx)(Lc,{onClick:()=>u(!1),"aria-label":"Cancelar",children:"Cancelar"})]})]})})]})},zc=(ro`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,ro`
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,eo.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  padding-top: env(safe-area-inset-top);
  box-sizing: content-box;
  background: var(--navbar-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  z-index: 1000;
  border-bottom: 1px solid var(--border);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${e=>{let{$visible:t}=e;return t?"translateY(0)":"translateY(-100%)"}};
  will-change: transform;
`),$c=eo.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Mc=eo.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  border-radius: 20px;
  transition: var(--transition);

  &:active {
    transform: scale(0.95);
  }
`,Ic=eo.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.5px;
`,Dc=eo.button`
  background: none;
  border: none;
  padding: 8px;
  color: var(--text);
  border-radius: 50%;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: var(--hover-bg);
    transform: scale(0.9);
  }
`,Fc=eo(Dc)`
  background: var(--input-bg);
  border-radius: 20px;
  padding: 8px 12px;
  flex: 1;
  max-width: 200px;
  justify-content: flex-start;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-light);

  &:active {
    background: var(--input-bg-hover);
  }
`,Uc=eo.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition);

  &:active {
    transform: scale(0.9);
  }
`,Bc=eo.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`,Wc=eo.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: var(--text-inverse);
  border-radius: 50%;
  font-size: 16px;
`,Hc=eo.div`
  position: fixed;
  top: 0;
  left: ${e=>{let{$isOpen:t}=e;return t?"0":"-100%"}};
  width: 280px;
  height: 100vh;
  padding-top: env(safe-area-inset-top);
  background: var(--card-bg);
  z-index: 1002;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
`,qc=eo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  opacity: ${e=>{let{$isOpen:t}=e;return t?"1":"0"}};
  pointer-events: ${e=>{let{$isOpen:t}=e;return t?"all":"none"}};
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
`,Vc=eo.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
`,Kc=eo.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--background-light);
`,Yc=eo.div`
  flex: 1;
`,Qc=eo.div`
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
`,Xc=eo.div`
  font-size: 0.85rem;
  color: var(--text-light);
  padding: 0;
  background: none;
  border-radius: 0;
  font-weight: 500;
`,Jc=eo(ot)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  color: ${e=>{let{$active:t}=e;return t?"var(--primary)":"var(--text)"}};
  text-decoration: none;
  font-size: 0.95rem;
  transition: var(--transition);
  position: relative;

  &:hover {
    background: var(--hover-bg);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${e=>{let{$active:t}=e;return t?"var(--primary)":"var(--text-light)"}};
  }
`,Gc=eo.div`
  margin-top: auto;
  padding: 8px 0;
  border-top: 1px solid var(--border);
  margin-bottom: env(safe-area-inset-bottom);
`,Zc=eo.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  width: 100%;
  border: none;
  background: none;
  color: var(--text);
  text-align: left;
  font-size: 0.95rem;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: var(--hover-bg);
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--text-light);
  }
`,ed={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org",td=e=>{if(!e)return null;if(e.startsWith("http://"))return"https://"+e.substring(7);if(e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${ed}${t}`},rd=e=>{var t,r;let{navbarVisible:n}=e;const{theme:i,toggleTheme:a}=cl(),{user:s,logout:l}=nl(),u=re(),c=Z(),[d,f]=(0,o.useState)(!1),[p,h]=(0,o.useState)(c.pathname);(0,o.useEffect)((()=>{h(c.pathname),f(!1)}),[c]);const m=Ou({onSwipedLeft:()=>f(!1),trackMouse:!0}),g=s?(e=>{if(!e)return 1;const t=new Date(e),r=new Date;return Math.max(1,Math.floor((r-t)/864e5))})(s.createdAt):0;return(0,el.jsxs)(el.Fragment,{children:[(0,el.jsxs)(zc,{$visible:n,children:[(0,el.jsxs)($c,{children:[(0,el.jsx)(Dc,{onClick:()=>f(!0),"aria-label":"Open menu",children:(0,el.jsx)(Zl,{size:24})}),(0,el.jsxs)(Fc,{"aria-label":"Search",children:[(0,el.jsx)(uu,{size:18}),(0,el.jsx)("span",{children:"Search"})]})]}),(0,el.jsx)(ot,{to:"/",style:{textDecoration:"none"},children:(0,el.jsx)(Mc,{children:(0,el.jsx)(Ic,{children:"iFunny"})})}),(0,el.jsxs)($c,{children:[s&&(0,el.jsx)(Nc,{}),(0,el.jsx)(Uc,{onClick:()=>u(s?`/users/${s._id}`:"/login"),"aria-label":s?"Your profile":"Login",children:s&&null!==(t=s.profile)&&void 0!==t&&t.avatar?(0,el.jsx)(Bc,{src:td(s.profile.avatar),alt:"User avatar",crossOrigin:"anonymous",onError:e=>{e.target.style.display="none"}}):(0,el.jsx)(Wc,{children:(0,el.jsx)(bu,{})})})]})]}),(0,el.jsx)(qc,{$isOpen:d,onClick:()=>f(!1),...m}),(0,el.jsxs)(Hc,{$isOpen:d,...m,children:[s&&(0,el.jsxs)(Vc,{children:[(0,el.jsx)(Kc,{children:null!==(r=s.profile)&&void 0!==r&&r.avatar?(0,el.jsx)(Bc,{src:td(s.profile.avatar),alt:"User avatar",crossOrigin:"anonymous",onError:e=>{e.target.style.display="none",e.target.parentNode.innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--background-light);color:var(--text-light);"><FiUser /></div>'}}):(0,el.jsx)(Wc,{children:(0,el.jsx)(bu,{})})}),(0,el.jsxs)(Yc,{children:[(0,el.jsx)(Qc,{children:s.username}),(0,el.jsxs)(Xc,{children:["parabens vc est\xe1 aqui h\xe1 ",g," dias"]})]})]}),(0,el.jsx)("div",{style:{padding:"8px 0",flex:1},children:s?(0,el.jsxs)(el.Fragment,{children:[(0,el.jsxs)(Jc,{to:"/",$active:"/"===p,children:[(0,el.jsx)(Ql,{}),"Destaques"]}),(0,el.jsxs)(Jc,{to:"/feed",$active:"/feed"===p,children:[(0,el.jsx)(mu,{}),"Coletivo"]}),(0,el.jsxs)(Jc,{to:"/upload",$active:"/upload"===p,children:[(0,el.jsx)(au,{}),"Criar"]}),(0,el.jsxs)(Jc,{to:`/users/${s._id}`,$active:p===`/users/${s._id}`,children:[(0,el.jsx)(bu,{}),"Perfil"]})]}):(0,el.jsxs)(el.Fragment,{children:[(0,el.jsxs)(Jc,{to:"/login",$active:"/login"===p,children:[(0,el.jsx)(bu,{}),"Login"]}),(0,el.jsxs)(Jc,{to:"/register",$active:"/register"===p,children:[(0,el.jsx)(bu,{}),"Register"]})]})}),(0,el.jsxs)(Gc,{children:[(0,el.jsxs)(Zc,{onClick:a,children:["light"===i?(0,el.jsx)(ru,{}):(0,el.jsx)(pu,{}),"light"===i?"Dark Mode":"Light Mode"]}),s&&(0,el.jsxs)(Zc,{onClick:async()=>{try{await l(),u("/")}catch(e){console.error("Logout error:",e)}},children:[(0,el.jsx)(Gl,{}),"Sair"]})]})]})]})};var nd,od;!function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(nd||(nd={})),function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"}(od||(od={}));const id=(0,al.F3)("Keyboard"),ad=((0,al.F3)("App",{web:()=>n.e(551).then(n.bind(n,551)).then((e=>new e.AppWeb))}),e=>{if(!e)return console.warn("URL is empty or undefined"),"";if(e.startsWith("http://")||e.startsWith("https://")||e.startsWith("blob:"))return e.replace(/^http:\/\//i,"https://");const t=e.startsWith("/")?e.substring(1):e;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}/${t}`}),sd=ro`
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(5deg); }
  50% { transform: scale(1.3) rotate(0deg); }
  75% { transform: scale(1.2) rotate(-5deg); }
`,ld=ro`
  0%, 100% { transform: scale(1) rotate(0deg); }
  20% { transform: scale(1.2) rotate(-10deg); }
  40% { transform: scale(1.3) rotate(10deg); }
  60% { transform: scale(1.2) rotate(-10deg); }
  80% { transform: scale(1.1) rotate(5deg); }
`,ud=ro`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,cd=eo.div`
  position: relative;
  padding: 16px;
  background: var(--card-bg);
  height: 100%;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  
  /* Adiciona padding para a área segura */
  padding-bottom: calc(env(safe-area-inset-bottom, 0) + 16px);
  padding-bottom: calc(constant(safe-area-inset-bottom, 0) + 16px);
  
  @media (max-width: 768px) {
    padding: 8px;
    padding-bottom: calc(${e=>e.$keyboardActive?"300px":"60px"} + env(safe-area-inset-bottom, 0));
    padding-bottom: calc(${e=>e.$keyboardActive?"300px":"60px"} + constant(safe-area-inset-bottom, 0));
  }
`,dd=(eo.button`
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  padding: 4px 8px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  border-radius: 12px;
  transition: all 0.2s;

  &:hover {
    background: rgba(var(--primary-rgb), 0.1);
  }

  svg {
    transition: transform 0.2s;
  }

  ${e=>e.$expanded&&Jn`
    svg {
      transform: rotate(180deg);
    }
  `}
`,eo.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding-right: 0.5rem;
  scroll-behavior: smooth;
  
  /* Estilos de scrollbar */
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
    border-radius: 0.625rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 0.625rem;
    
    &:hover {
      background: var(--primary);
    }
  }

  @media (max-width: 768px) {
    max-height: none;
    margin-bottom: 0;
  }
`),fd=eo.div`
  display: flex;
  margin-bottom: 0.75rem;
  position: relative;
  transition: var(--transition);

  ${e=>e.$depth>0&&Jn`
    margin-left: ${16*e.$depth}px;
    padding-left: 8px;
    border-left: 2px solid var(--primary);
  `}

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    ${e=>e.$depth>0&&Jn`
      margin-left: ${12*e.$depth}px;
      padding-left: 6px;
    `}
  }

  &:hover {
    transform: none;
  }

  ${e=>e.$isPopular&&Jn`
    order: -1;
    border: 2px solid var(--primary);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, rgba(var(--primary-rgb), 0.05), transparent);

    &::before {
      content: "🔥";
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      animation: ${ud} 1.5s infinite;
    }
  `}
`,pd=eo.img`
  width: ${e=>e.$isReply?"28px":"32px"};
  height: ${e=>e.$isReply?"28px":"32px"};
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  border: 2px solid var(--avatar-border);
  transition: all 0.2s;

  &:hover {
    border-color: var(--primary);
    transform: scale(1.05);
  }
`,hd=eo.div`
  flex: 1;
  background: var(--comment-bg);
  padding: 12px;
  border-radius: var(--radius-md);
  position: relative;
  box-shadow: var(--shadow-sm);
  overflow: visible;
  color: var(--text);
  transition: background 0.3s ease;
  
  ${e=>e.$isReply&&Jn`
    background: var(--reply-bg);
    border-left: 3px solid var(--primary);
    margin-left: 12px;
    padding: 10px;
  `}

  @media (max-width: 768px) {
    padding: 10px;
    ${e=>e.$isReply&&Jn`
      margin-left: 8px;
    `}
  }
`,md=(eo.div`
  display: flex;
  flex-direction: column; /* Muda para coluna */
  gap: 2px; /* Espaço entre linhas */
  margin-bottom: 6px;
`,eo.div`
  font-weight: 700;
  font-size: 1.5 rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
`),gd=eo.span`
  font-size: 0.65rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2px 6px;
  border-radius: 12px;
  font-weight: 500;
`,vd=eo.p`
  margin: 6px 0 10px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text);
  white-space: pre-wrap;
  word-break: break-word;
  padding: 0 4px;
  ${e=>e.$isDeleted&&"font-style: italic; color: var(--text-muted);"}
`,yd=eo.small`
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 400;
`,bd=eo.form`
  display: flex;
  align-items: center;
  background: var(--input-bg);
  border-radius: var(--radius-lg);
  padding: 0.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border: 1px solid var(--border-light);
  position: sticky;
  bottom: 0;
  z-index: 100;
  
  /* Adiciona margem para a área segura */
  margin-bottom: env(safe-area-inset-bottom, 0);
  margin-bottom: constant(safe-area-inset-bottom, 0);

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: ${e=>e.$keyboardActive?`${e.$keyboardHeight}px`:"env(safe-area-inset-bottom, 0)"};
    bottom: ${e=>e.$keyboardActive?`${e.$keyboardHeight}px`:"constant(safe-area-inset-bottom, 0)"};
    margin: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    background: var(--card-bg);
    padding: 0.5rem;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
    transform: ${e=>e.$keyboardActive?"translateY(0)":"none"};
    transition: transform 0.3s ease, bottom 0.3s ease;
  }
`,xd=eo.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  outline: none;
  background: var(--input-bg);
  color: var(--input-text);
  transition: var(--transition);

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 16px;
    min-height: 40px;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`,wd=eo.button`
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-xs);

  &:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,kd=eo.form`
  display: flex;
  margin: 12px 0 16px 52px;
  background: var(--reply-form-bg, var(--reply-bg));
  border-radius: var(--radius-lg);
  padding: 0.5rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid var(--border-light);

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
  }

  @media (max-width: 768px) {
    margin-left: 44px;
    padding: 8px;
  }
`,_d=eo.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  justify-content: flex-start;
`,Sd=(eo.div`
  font-size: 0.8rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary);
  }
`,eo.div`
  position: absolute;
  left: -12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary);
  border-radius: 2px;
`),Ed=eo.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  transition: var(--transition);
  
  &:active, &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${e=>"like"===e.$type&&Jn`
    color: ${e.$active?"var(--like-color)":"var(--text-muted)"};
    &:hover {
      background: rgba(var(--like-rgb), 0.1);
    }
    ${e.$active&&Jn`
      animation: ${sd} 0.6s;
    `}
  `}

  ${e=>"dislike"===e.$type&&Jn`
    color: ${e.$active?"var(--dislike-color)":"var(--text-muted)"};
    &:hover {
      background: rgba(var(--dislike-rgb), 0.1);
    }
    ${e.$active&&Jn`
      animation: ${ld} 0.6s;
    `}
  `}
`,jd=eo.span`
  font-size: 0.8rem;
  color: inherit;
  margin-left: 4px;
  font-weight: 500;
`,Cd=eo.button`
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    color: var(--primary);
    background: var(--hover-bg);
  }
`,Td=eo.div`
  position: absolute;
  right: 0;
  top: 40px;
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  z-index: 100;
  min-width: 140px;
  overflow: hidden;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,Od=eo.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem;
  background: none;
  border: none;
  text-align: left;
  color: var(--text);
  cursor: pointer;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    background: var(--hover-bg);
    color: var(--primary);
  }
`,Rd=eo.div`
  margin-top: 8px;
`,Pd=eo.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  resize: none;
  font-family: inherit;
  font-size: 0.95rem;
  min-height: 100px;
  margin-bottom: 0.75rem;
  background: var(--input-bg);
  color: var(--input-text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`,Ad=eo.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,Ld=eo.button`
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-xs);
  font-weight: 500;

  &:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary-darker));
    transform: translateY(-1px);
  }
`,Nd=eo.button`
  background: var(--button-secondary-bg);
  color: var(--button-secondary-text);
  border: 1px solid var(--border-light);
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    background: var(--button-secondary-hover);
    transform: translateY(-1px);
  }
`,zd=eo.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`,$d=eo.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`,Md=eo.div`
  text-align: center;
  padding: 1rem;
  color: var(--error);
  font-size: 0.9rem;
  background: var(--error-bg);
  border-radius: var(--radius-sm);
  margin: 0.5rem 0;
`,Id=eo.span`
  font-style: italic;
  color: var(--text-muted);
`,Dd=eo.div`
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  padding: 0 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--text-muted);
  }
`,Fd=eo.span`
  font-size: 0.7rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
`,Ud=eo.div`
  margin-top: 12px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
  max-width: 100%;
  position: relative;
  background: var(--media-bg);
`,Bd=eo.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  display: block;
  background: var(--media-bg);
`,Wd=eo.p`
  padding: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
  background: var(--media-caption-bg);
  border-top: 1px solid var(--border-light);
`,Hd=eo.video`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: var(--radius-md);
  cursor: pointer;
  background: var(--media-bg);
  transition: all 0.2s ease;
  position: relative;
  
  /* Estilo quando não tem controles */
  &:not([controls]) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
    }

    &:hover::before {
      background: rgba(0, 0, 0, 0.1);
    }

    &::after {
      content: '▶';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      opacity: 0.8;
      transition: all 0.2s ease;
    }

    &:hover::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.05);
    }
  }

  /* Estilo quando tem controles */
  &[controls] {
    &::before, &::after {
      display: none;
    }
  }
`,qd=eo.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  
  &::after {
    content: '';
    width: 30px;
    height: 30px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Vd=eo.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
`,Kd=eo.button`
  background: var(--button-secondary-bg);
  color: var(--button-secondary-text);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--button-secondary-hover);
    color: var(--primary);
    transform: scale(1.05);
  }
`,Yd=eo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Qd=eo.div`
  background: var(--card-bg);
  border-radius: ${e=>e.$isMobile?"0":"12px"};
  width: ${e=>e.$isMobile?"100%":"80%"};
  max-width: 800px;
  max-height: ${e=>e.$isMobile?"90vh":"80vh"};
  height: ${e=>e.$isMobile?"90vh":"auto"};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: ${e=>e.$isMobile?"fixed":"relative"};
  bottom: ${e=>e.$isMobile?"0":"auto"};
`,Xd=eo.div`
  padding: ${e=>e.$isMobile?"1rem":"1.25rem"};
  border-bottom: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: var(--card-bg);
  z-index: 10;
`,Jd=eo.h3`
  font-size: ${e=>e.$isMobile?"1.1rem":"1.25rem"};
  margin: 0;
  color: var(--text-primary);
  font-weight: 600;
`,Gd=eo.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: var(--hover-bg);
    color: var(--text);
  }
`,Zd=eo.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${e=>e.$isMobile?"120px":"150px"}, 1fr));
  gap: ${e=>e.$isMobile?"8px":"12px"};
  padding: ${e=>e.$isMobile?"1rem":"1.25rem"};
  overflow-y: auto;
`,ef=eo.div`
  position: relative;
  aspect-ratio: 1;
`,tf=eo.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-sm);
  cursor: pointer;
  border: 2px solid ${e=>e.$selected?"var(--primary)":"transparent"};
  transition: all 0.2s;
  background: var(--media-bg);

  &:hover {
    transform: ${e=>e.$isMobile?"none":"scale(1.05)"};
  }
`,rf=eo.div`
  padding: ${e=>e.$isMobile?"1rem":"1.25rem"};
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.$isMobile?"8px":"12px"};
  position: sticky;
  bottom: 0;
  background: var(--card-bg);
`,nf=eo.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-sm);
  cursor: pointer;
  border: 2px solid ${e=>e.$selected?"var(--primary)":"transparent"};
  transition: all 0.2s;
  background: var(--media-bg);

  &:hover {
    transform: ${e=>e.$isMobile?"none":"scale(1.05)"};
  }
`,of=eo.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: ${e=>e.$isMobile?"4px 6px":"6px 8px"};
  font-size: ${e=>e.$isMobile?"0.65rem":"0.75rem"};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,af=eo.button`
  padding: ${e=>e.$isMobile?"0.75rem 1rem":"0.75rem 1.25rem"};
  font-size: ${e=>e.$isMobile?"0.9rem":"1rem"};
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  background: ${e=>e.$primary?"var(--primary)":"var(--button-secondary-bg)"};
  color: ${e=>e.$primary?"white":"var(--button-secondary-text)"};
  transition: all 0.2s;
  font-weight: 500;
  min-width: ${e=>e.$isMobile?"100px":"120px"};

  &:hover {
    background: ${e=>e.$primary?"var(--primary-dark)":"var(--button-secondary-hover)"};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,sf=e=>{let{file:t,meme:r,onRemove:n}=e;const i=(0,o.useMemo)((()=>window.innerWidth<=768),[]),a={position:"absolute",top:i?"8px":"5px",right:i?"8px":"5px",background:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"50%",width:i?"32px":"24px",height:i?"32px":"24px",cursor:"pointer",fontSize:i?"18px":"16px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,transition:"transform 0.2s",":hover":{transform:"scale(1.1)"},":active":{transform:"scale(0.95)"}},s=eo(Ud)`
    max-width: 100%;
    margin: ${i?"8px 0":"12px 0"};
    border-radius: ${i?"8px":"12px"};
    overflow: hidden;
    position: relative;
    
    video, img {
      width: 100%;
      max-height: ${i?"50vh":"60vh"};
      object-fit: contain;
      background: #f0f0f0;
    }
  `,l=eo(Wd)`
    padding: ${i?"10px":"8px"};
    font-size: ${i?"0.9rem":"0.8rem"};
    background: ${i?"rgba(0,0,0,0.7)":"#f9f9f9"};
    color: ${i?"white":"var(--text-light)"};
  `;if(r){var u,c;const e=(null===(u=r.mediaUrl)||void 0===u?void 0:u.endsWith(".mp4"))||(null===(c=r.mediaUrl)||void 0===c?void 0:c.includes("video/"));return(0,el.jsxs)(s,{children:[e?(0,el.jsxs)("video",{controls:!0,playsInline:!0,style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},crossOrigin:"anonymous",children:[(0,el.jsx)("source",{src:ad(r.mediaUrl),type:"video/mp4"}),"Seu navegador n\xe3o suporta v\xeddeos HTML5."]}):(0,el.jsx)(Bd,{src:ad(r.mediaUrl),alt:r.caption||"Meme compartilhado",crossOrigin:"anonymous",style:{maxHeight:i?"50vh":"60vh"},onError:e=>{e.target.style.display="none"}}),r.caption&&(0,el.jsx)(l,{children:r.caption}),(0,el.jsx)("button",{onClick:n,style:a,"aria-label":"Remover m\xeddia",children:"\xd7"})]})}if(t){const e=t.type.startsWith("video/"),r=URL.createObjectURL(t);return(0,el.jsxs)(s,{children:[e?(0,el.jsxs)("video",{controls:!0,playsInline:!0,style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},children:[(0,el.jsx)("source",{src:r,type:t.type}),"Seu navegador n\xe3o suporta v\xeddeos HTML5."]}):(0,el.jsx)("img",{src:r,alt:"Preview",style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},onError:e=>{e.target.style.display="none"}}),(0,el.jsx)("button",{onClick:()=>{n(),URL.revokeObjectURL(r)},style:a,"aria-label":"Remover m\xeddia",children:"\xd7"})]})}return null},lf=(0,o.memo)((t=>{var r,n,i,a,s,l;let{comment:u,depth:c=0,parentCommentId:d=null,currentUser:f,onEdit:p,onDelete:h,onReply:m,onReaction:g,editingId:v,editText:y,onEditChange:b,onSaveEdit:x,replyingTo:w,replyText:k,onReplyChange:_,onReplySubmit:S,showOptions:E,onToggleOptions:j,isPopular:C,replyTexts:T,onReplyMediaChange:O,onReplyMemeChange:R,replyMedia:P,replySelectedMeme:A,onOpenMemeSelector:L,userMemes:N,loadMoreReplies:z,loadingReplies:$,expandedReplies:M,setExpandedReplies:I}=t;console.log("--- Comment Debug ---"),console.log("Comment ID:",u._id),console.log("Has sharedMeme:",!!u.sharedMeme),u.sharedMeme&&console.log("sharedMeme details:",{mediaUrl:u.sharedMeme.mediaUrl,mediaType:u.sharedMeme.mediaType,caption:u.sharedMeme.caption,builtUrl:ad(u.sharedMeme.mediaUrl)});const D=re(),F=v===u._id,U=w===u._id,B=c>0,W=u.isDeleted,H=u.user||{_id:"deleted",username:"[Removido]",profile:{avatar:"https://i.pravatar.cc/150?img=3"}},q=!W&&f&&(H._id===f._id||f.isAdmin),V=(0,o.useCallback)((e=>{const t=new Date(e),r=new Date,n=Math.floor((r-t)/1e3);return n<60?"Agora":n<3600?`${Math.floor(n/60)}m`:n<86400?`${Math.floor(n/3600)}h`:`${Math.floor(n/86400)}d`}),[]),K=u.repliesCount>((null===(r=u.replies)||void 0===r?void 0:r.length)||0),Y=(0,o.useCallback)((e=>{I((t=>{const r={...t},n=!t[e];return r[e]=n,u.replies&&u.replies.forEach((e=>{r[e._id]=n})),r}))}),[u.replies]);return(0,el.jsxs)(o.Fragment,{children:[(0,el.jsxs)(fd,{$depth:c,$isPopular:C,"data-testid":`comment-${u._id}`,children:[B&&(0,el.jsx)(Sd,{}),(0,el.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",width:"100%"},children:[(0,el.jsx)(pd,{src:null!==(n=H.profile)&&void 0!==n&&n.avatar?H.profile.avatar.startsWith("https")?H.profile.avatar:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${H.profile.avatar}`:"https://i.pravatar.cc/150?img=3",alt:H.username,$isReply:B,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"},onClick:()=>D(`/users/${H._id}`),style:{cursor:"pointer",flexShrink:0,marginRight:"12px"}}),(0,el.jsxs)(hd,{$isReply:B,style:{flex:1},children:[E===u._id&&(0,el.jsxs)(Td,{style:{right:"0",left:"auto",top:"40px"},children:[(0,el.jsxs)(Od,{onClick:()=>p(u),children:[(0,el.jsx)(Kl,{size:14})," Editar"]}),(0,el.jsxs)(Od,{onClick:()=>h(u._id,B,d),children:[(0,el.jsx)(hu,{size:14})," Excluir"]}),(0,el.jsxs)(Od,{onClick:()=>j(null),children:[(0,el.jsx)(wu,{size:14})," Cancelar"]})]}),F?(0,el.jsxs)(Rd,{children:[(0,el.jsx)(Pd,{value:y,onChange:e=>b(e.target.value),autoFocus:!0,"aria-label":"Editar coment\xe1rio"}),(0,el.jsxs)(Ad,{children:[(0,el.jsx)(Nd,{onClick:()=>p(null),children:"Cancelar"}),(0,el.jsx)(Ld,{onClick:()=>x(u._id,B,d),children:"Salvar"})]})]}):(0,el.jsxs)(el.Fragment,{children:[(0,el.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"4px",position:"relative"},children:[(0,el.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,el.jsx)(md,{onClick:()=>D(`/users/${H._id}`),style:{cursor:"pointer",fontSize:"15px",fontWeight:"700",color:"var(--text-primary)",marginRight:"8px"},children:H.username}),(0,el.jsxs)(yd,{style:{position:"absolute",right:q?"30px":"0",top:"2px",fontSize:"11px",color:"var(--text-muted)",opacity:"0.7"},children:[V(u.createdAt),u.isEdited&&" \xb7 editado"]})]}),q&&(0,el.jsx)(Cd,{onClick:()=>j(u._id),"aria-label":"Mais op\xe7\xf5es",style:{marginLeft:"auto"},children:(0,el.jsx)(nu,{size:16})})]}),(0,el.jsxs)("div",{style:{display:"flex",gap:"6px",marginBottom:"8px"},children:[H.isVerified&&(0,el.jsx)(gd,{style:{fontSize:"10px",padding:"2px 6px"},children:"Verificado"}),C&&(0,el.jsx)(Fd,{style:{fontSize:"10px",padding:"2px 6px"},children:"\ud83d\udd25 Popular"})]}),(0,el.jsx)(vd,{$isDeleted:W,style:{fontSize:"14px",lineHeight:"1.5",marginBottom:"8px"},children:W?(0,el.jsx)(Id,{children:u.text}):u.text}),u.sharedMeme&&u.sharedMeme.mediaUrl&&(console.log("Rendering shared media for comment:",u._id,{url:u.sharedMeme.mediaUrl,builtUrl:ad(u.sharedMeme.mediaUrl),type:u.sharedMeme.mediaType||"unknown"}),(0,el.jsxs)(Ud,{style:{marginTop:"8px",maxWidth:"100%"},children:["video"===u.sharedMeme.mediaType||u.sharedMeme.mediaUrl.endsWith(".mp4")?(0,el.jsxs)("div",{style:{position:"relative"},children:[(0,el.jsx)(Hd,{onClick:e=>{const t=e.currentTarget;t.paused?(t.play(),t.setAttribute("controls","controls")):(t.pause(),t.removeAttribute("controls"))},onWaiting:()=>{e.currentTarget.nextElementSibling.style.display="flex"},onPlaying:()=>{e.currentTarget.nextElementSibling.style.display="none"},crossOrigin:"anonymous",children:(0,el.jsx)("source",{src:ad(u.sharedMeme.mediaUrl),type:"video/mp4"})}),(0,el.jsx)(qd,{style:{display:"none"}})]}):(0,el.jsx)(Bd,{src:ad(u.sharedMeme.mediaUrl),alt:u.sharedMeme.caption||"Meme compartilhado",crossOrigin:"anonymous",onError:e=>{console.error("FAILED TO LOAD MEDIA:",{commentId:u._id,src:e.target.src,builtUrl:ad(u.sharedMeme.mediaUrl),error:e}),e.target.style.display="none"}}),u.sharedMeme.caption&&(0,el.jsx)(Wd,{style:{fontSize:"12px",padding:"8px"},children:u.sharedMeme.caption})]}))]}),!W&&(0,el.jsx)(_d,{style:{marginTop:"12px",paddingTop:"8px",borderTop:"1px solid #eee"},children:(0,el.jsxs)("div",{style:{display:"flex",gap:"16px"},children:[(0,el.jsxs)(Ed,{onClick:()=>g(u._id,"like",B,d),$active:"like"===u.userReaction,$type:"like","aria-label":"Curtir","data-testid":"like-button",style:{padding:"4px 8px",backgroundColor:"like"===u.userReaction?"rgba(0, 200, 83, 0.1)":"transparent"},children:[(0,el.jsx)(Ll,{size:14,color:"like"===u.userReaction?"#00C853":"#757575"}),(0,el.jsx)(jd,{style:{fontSize:"12px",marginLeft:"4px",color:"like"===u.userReaction?"#00C853":"#757575"},children:null!==(i=u.likesCount)&&void 0!==i?i:(null===(a=u.likes)||void 0===a?void 0:a.length)||0})]}),(0,el.jsxs)(Ed,{onClick:()=>g(u._id,"dislike",B,d),$active:"dislike"===u.userReaction,$type:"dislike","aria-label":"N\xe3o curtir","data-testid":"dislike-button",style:{padding:"4px 8px",backgroundColor:"dislike"===u.userReaction?"rgba(255, 82, 82, 0.1)":"transparent"},children:[(0,el.jsx)(jl,{size:14,color:"dislike"===u.userReaction?"#FF5252":"#757575"}),(0,el.jsx)(jd,{style:{fontSize:"12px",marginLeft:"4px",color:"dislike"===u.userReaction?"#FF5252":"#757575"},children:null!==(s=u.dislikesCount)&&void 0!==s?s:(null===(l=u.dislikes)||void 0===l?void 0:l.length)||0})]}),f&&c<10&&(0,el.jsxs)(Ed,{onClick:()=>m(u._id,d),"aria-label":"Responder","data-testid":"reply-button",style:{padding:"4px 8px",color:"#666"},children:[(0,el.jsx)(eu,{size:12}),u.repliesCount>0&&(0,el.jsx)(jd,{style:{fontSize:"12px",marginLeft:"4px"},children:u.repliesCount})]})]})})]})]})]}),U&&c<10&&(0,el.jsx)(kd,{onSubmit:e=>{e.preventDefault(),S(u._id)},style:{marginTop:"12px",marginLeft:"44px",padding:"8px",backgroundColor:"#f5f5f5",borderRadius:"12px"},children:(0,el.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,el.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,el.jsx)(xd,{type:"text",id:`reply-input-${u._id}`,name:`replyTo${u._id}`,value:T[u._id]||"",onChange:e=>_(u._id,e.target.value),placeholder:"Escreva uma resposta...","aria-label":"Responder coment\xe1rio",style:{flex:1,padding:"8px 12px",fontSize:"14px"}}),(0,el.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[(0,el.jsx)(Kd,{type:"button",onClick:()=>document.getElementById(`reply-file-${u._id}`).click(),"aria-label":"Anexar m\xeddia",style:{width:"32px",height:"32px"},children:(0,el.jsx)(ou,{size:16})}),(0,el.jsx)("input",{type:"file",id:`reply-file-${u._id}`,style:{display:"none"},onChange:e=>{const t=e.target.files[0];t&&(O(t,u._id),R(null,u._id))},accept:"image/*, video/*"}),(0,el.jsx)(Kd,{type:"button",onClick:()=>L(u._id),"aria-label":"Compartilhar meme",style:{width:"32px",height:"32px"},children:(0,el.jsx)(Xl,{size:16})}),(0,el.jsx)(wd,{type:"submit","aria-label":"Enviar resposta",style:{width:"32px",height:"32px"},children:(0,el.jsx)(cu,{size:16})})]})]}),(P[u._id]||A[u._id])&&(0,el.jsx)(sf,{file:P[u._id],meme:A[u._id]?N.find((e=>e._id===A[u._id])):null,onRemove:()=>{O(null,u._id),R(null,u._id)}})]})}),u.replies&&Array.isArray(u.replies)&&u.replies.length>0&&(0,el.jsxs)("div",{style:{marginLeft:c>0?"1.25rem":"0",marginTop:"8px"},children:[(M[u._id]?u.replies:[u.replies[0]]).map((e=>(0,el.jsx)(lf,{comment:e,depth:c+1,parentCommentId:u._id,currentUser:f,onEdit:p,onDelete:h,onReply:m,onReaction:g,editingId:v,editText:y,onEditChange:b,onSaveEdit:x,replyingTo:w,replyTexts:T,onReplyChange:_,onReplySubmit:S,showOptions:E,onToggleOptions:j,isPopular:!1,onReplyMediaChange:O,onReplyMemeChange:R,replyMedia:P,replySelectedMeme:A,onOpenMemeSelector:L,userMemes:N,loadMoreReplies:z,loadingReplies:$,expandedReplies:M,setExpandedReplies:I},e._id))),u.replies.length>1&&(0,el.jsx)("div",{style:{textAlign:"left",marginTop:"8px",paddingLeft:c>0?"1rem":"0"},children:(0,el.jsx)("button",{onClick:()=>Y(u._id),disabled:$[u._id],style:{background:"rgba(var(--primary-rgb), 0.08)",border:"1px solid rgba(var(--primary-rgb), 0.2)",color:"var(--primary)",cursor:"pointer",padding:"8px 16px",fontSize:"0.8rem",borderRadius:"20px",display:"inline-flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease",fontWeight:"500",":hover":{background:"rgba(var(--primary-rgb), 0.15)"},":disabled":{opacity:"0.7",cursor:"not-allowed"}},children:$[u._id]?(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(Jl,{size:14,style:{animation:"spin 1s linear infinite"}}),"Carregando..."]}):M[u._id]?(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(Vl,{size:14}),"Ocultar todas as respostas"]}):(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(ql,{size:14}),"Mostrar todas as respostas (",u.replies.length-1,")"]})})}),K&&!M[u._id]&&(0,el.jsx)("div",{style:{textAlign:"left",marginTop:"8px",paddingLeft:c>0?"1rem":"0"},children:(0,el.jsx)("button",{onClick:()=>z(u._id),disabled:$[u._id],style:{background:"rgba(var(--primary-rgb), 0.08)",border:"1px solid rgba(var(--primary-rgb), 0.2)",color:"var(--primary)",cursor:"pointer",padding:"8px 16px",fontSize:"0.8rem",borderRadius:"20px",display:"inline-flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease",fontWeight:"500",":hover":{background:"rgba(var(--primary-rgb), 0.15)"},":disabled":{opacity:"0.7",cursor:"not-allowed"}},children:$[u._id]?(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(Jl,{size:14,style:{animation:"spin 1s linear infinite"}}),"Carregando..."]}):(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(iu,{size:14}),"Carregar mais respostas (",u.repliesCount-u.replies.length,")"]})})})]})]})})),uf=e=>{let{memes:t,selectedMeme:r,onSelect:n,onClose:i,isForReply:a=!1}=e;const s=(0,o.useMemo)((()=>window.innerWidth<=768),[]);return(0,el.jsx)(Yd,{children:(0,el.jsxs)(Qd,{$isMobile:s,children:[(0,el.jsxs)(Xd,{$isMobile:s,children:[(0,el.jsx)(Jd,{$isMobile:s,children:"Selecione um meme para compartilhar"}),(0,el.jsx)(Gd,{onClick:i,"aria-label":"Fechar",$isMobile:s,children:(0,el.jsx)(wu,{size:s?20:24})})]}),(0,el.jsx)(Zd,{$isMobile:s,children:t.map((e=>{var t;const o="video"===e.mediaType||(null===(t=e.mediaUrl)||void 0===t?void 0:t.endsWith(".mp4"));return(0,el.jsxs)(ef,{$isMobile:s,children:[o?(0,el.jsx)(nf,{$isMobile:s,$selected:r===e._id,onClick:()=>n(e._id,a),crossOrigin:"anonymous",children:(0,el.jsx)("source",{src:ad(e.mediaUrl),type:"video/mp4"})}):(0,el.jsx)(tf,{src:ad(e.mediaUrl),onClick:()=>n(e._id,a),$selected:r===e._id,$isMobile:s,crossOrigin:"anonymous",alt:e.caption||"Meme"}),e.caption&&(0,el.jsx)(of,{$isMobile:s,children:e.caption})]},e._id)}))}),(0,el.jsxs)(rf,{$isMobile:s,children:[(0,el.jsx)(af,{onClick:i,$isMobile:s,children:"Cancelar"}),(0,el.jsx)(af,{$primary:!0,onClick:()=>{n(r,a),i()},disabled:!r,$isMobile:s,children:a?"Compartilhar na Resposta":"Compartilhar"})]})]})})},cf=e=>{let{memeId:t,onCommentSubmit:r,onCommentCountChange:n,setCommentOpen:i}=e;const{user:a}=nl(),[s,l]=(0,o.useState)([]),[u,c]=(0,o.useState)(!0),[d,f]=(0,o.useState)(null),[p,h]=(0,o.useState)(""),[m,g]=(0,o.useState)(null),[v,y]=(0,o.useState)(""),[b,x]=(0,o.useState)(null),[w,k]=(0,o.useState)(null),[_,S]=(0,o.useState)(!1),[E,j]=(0,o.useState)([]),[C,T]=(0,o.useState)(null),[O,R]=(0,o.useState)(null),[P,A]=(0,o.useState)(null),[L,N]=(0,o.useState)({}),[z,$]=(0,o.useState)({}),[M,I]=(0,o.useState)({}),[D,F]=(0,o.useState)(null),[U,B]=(0,o.useState)({}),[W,H]=(0,o.useState)({}),[q,V]=(0,o.useState)({}),K=(0,o.useRef)(null),[Y,Q]=(0,o.useState)({}),X=(0,o.useRef)(null),[J,G]=(0,o.useState)(!1),[Z,ee]=(0,o.useState)(0),te=(0,o.useCallback)(((e,t)=>{for(const r of e){if(r._id===t)return r;if(r.replies){const e=te(r.replies,t);if(e)return e}}return null}),[]),[re,ne]=(0,o.useState)(!1),oe=(((e,t)=>{const r=(0,o.useRef)(0),n=(0,o.useRef)(!1),i=(0,o.useRef)();(0,o.useCallback)((function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];i.current=a;const l=Date.now(),u=l-r.current;n.current||(u>=t?(r.current=l,e(...a)):(n.current=!0,setTimeout((()=>{r.current=Date.now(),e(...i.current),n.current=!1}),t-u)))}),[e,t])})((()=>{setIsScrolling(!0),clearTimeout(scrollTimeout.current),scrollTimeout.current=setTimeout((()=>{setIsScrolling(!1)}),100)}),100),async e=>{if(!U[e]){V((t=>({...t,[e]:!0})));try{var r,n;const o=(null===(n=(await ka.get(`/memes/${t}/comments/${e}/replies`,{params:{page:((null===(r=W[e])||void 0===r?void 0:r.page)||0)+1,limit:5}})).data)||void 0===n?void 0:n.data)||[];l((t=>{const r=t=>t.map((t=>t._id===e?{...t,replies:[...t.replies||[],...o]}:t.replies?{...t,replies:r(t.replies)}:t));return r(t)}))}catch(d){console.error("Erro ao carregar respostas:",d)}finally{V((t=>({...t,[e]:!1})))}}}),ie=(0,o.useCallback)((e=>[...e].sort(((e,t)=>{var r,n,o,i;const a=((null===(r=e.likes)||void 0===r?void 0:r.length)||0)-((null===(n=e.dislikes)||void 0===n?void 0:n.length)||0);return((null===(o=t.likes)||void 0===o?void 0:o.length)||0)-((null===(i=t.dislikes)||void 0===i?void 0:i.length)||0)-a}))),[]),ae=(0,o.useCallback)((e=>{var t,r;if(!Array.isArray(e)||e.length<10)return e||[];const n=[...e].sort(((e,t)=>{var r,n,o,i;const a=(e.likesCount||(null===(r=e.likes)||void 0===r?void 0:r.length)||0)-(e.dislikesCount||(null===(n=e.dislikes)||void 0===n?void 0:n.length)||0);return(t.likesCount||(null===(o=t.likes)||void 0===o?void 0:o.length)||0)-(t.dislikesCount||(null===(i=t.dislikes)||void 0===i?void 0:i.length)||0)-a})),o=n[0];return(o.likesCount||(null===(t=o.likes)||void 0===t?void 0:t.length)||0)-(o.dislikesCount||(null===(r=o.dislikes)||void 0===r?void 0:r.length)||0)<5?e:n.map(((e,t)=>({...e,isPopular:0===t})))}),[ie]),se=(0,o.useCallback)((async()=>{if(a)try{const e=await ka.get(`/users/${a._id}/memes`);j(e.data||[])}catch(d){console.error("Erro ao buscar memes do usu\xe1rio:",d)}}),[a]),le=(0,o.useCallback)((async()=>{try{c(!0),f(null);const e=await ka.get(`/memes/${t}/comments`);console.log("API Response:",e);const r=e=>{if(Array.isArray(e))return e;if(Array.isArray(null===e||void 0===e?void 0:e.data))return e.data;if(Array.isArray(null===e||void 0===e?void 0:e.comments))return e.comments;throw new Error("Formato de dados inesperado da API")},n=r(e.data);console.log("Comments data:",n);const o=n.map((e=>e.sharedMeme&&"string"===typeof e.sharedMeme?{...e,sharedMeme:{_id:e.sharedMeme,mediaUrl:"",caption:""}}:e)),i=ve(t);console.log("First comment with sharedMeme:",o.find((e=>e.sharedMeme))),l([...i,...o])}catch(Vv){0,console.error("Erro ao buscar coment\xe1rios:",Vv),f(Vv.message||"Falha ao carregar coment\xe1rios"),l([])}finally{c(!1)}}),[t]);(0,o.useEffect)((()=>{if(!t)return;const e=Zs(null===a||void 0===a?void 0:a.token);let r;const n=e=>{e.meme===t&&l((t=>t.some((t=>t._id===e._id))?t:e.parentComment?o(t,e):[e,...t]))},o=(e,t)=>e.map((e=>e._id===t.parentComment?{...e,replies:[...e.replies||[],t],repliesCount:(e.repliesCount||0)+1}:e.replies?{...e,replies:o(e.replies,t)}:e));e.on("new-comment",n),e.on("new-reply",n),e.emit("joinMemeRoom",t);const i=setTimeout((()=>{e.connected||(r=setInterval(le,15e3))}),2e3);return()=>{clearTimeout(i),clearInterval(r),e.off("new-comment",n),e.emit("leaveMemeRoom",t)}}),[t,null===a||void 0===a?void 0:a.token,le]),(0,o.useEffect)((()=>{console.log("Loading state:",u),console.log("Comments:",s)}),[u,s]),(0,o.useEffect)((()=>{let e=!0;return(async()=>{e&&await le()})(),()=>{e=!1}}),[le]);const ue=(0,o.useCallback)((e=>{const t=e.target.files[0];t&&(R(t),T(null))}),[]),ce=(0,o.useCallback)(((e,t)=>{$((r=>({...r||{},[t]:e}))),I((e=>({...e||{},[t]:null})))}),[]),de=(0,o.useCallback)(((e,t)=>{I((r=>({...r||{},[t]:e}))),$((e=>({...e||{},[t]:null})))}),[]),fe=(0,o.useCallback)((e=>{F(e),S(!0),se()}),[se]),pe=(0,o.useCallback)((function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&D?I((t=>({...t,[D]:e}))):(T(e),R(null))}),[D]),he=(0,o.useCallback)((async e=>{var r,o;e.preventDefault();const i=`temp-${Date.now()}`,u={_id:i,text:p,user:a,createdAt:(new Date).toISOString(),likes:[],dislikes:[],likesCount:0,dislikesCount:0,replies:[],repliesCount:0,userReaction:null,isOptimistic:!0,sharedMeme:C?{_id:C,mediaUrl:(null===E||void 0===E||null===(r=E.find((e=>e._id===C)))||void 0===r?void 0:r.mediaUrl)||"",caption:(null===E||void 0===E||null===(o=E.find((e=>e._id===C)))||void 0===o?void 0:o.caption)||""}:null};l((e=>[u,...e])),ye(t,[u,...ve(t)]),n&&n(s.length+1),h(""),R(null),T(null);const c=new FormData;c.append("text",p||""),O&&c.append("media",O),C&&c.append("sharedMeme",C);try{f(null);const e=await ka.post(`/memes/${t}/comments`,c,{headers:{"Content-Type":"multipart/form-data"}});l((t=>t.map((t=>t._id===i?e.data:t)))),be(t,i),n&&n((e=>e+0))}catch(d){var m,g;l((e=>e.filter((e=>e._id!==i)))),be(t,i),f((null===(m=d.response)||void 0===m||null===(g=m.data)||void 0===g?void 0:g.message)||"Erro ao enviar coment\xe1rio")}}),[p,O,C,t,n,a,E,s]),me=(0,o.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;A((t=>t===e?null:e)),k(t),N((t=>({...t,[e]:t[e]||""}))),i((t=>t===e?null:e))}),[i]),ge=(0,o.useCallback)(((e,t)=>{N((r=>({...r,[e]:t})))}),[]),ve=e=>{try{const t=localStorage.getItem(`optimistic-comments-${e}`);return t?JSON.parse(t):[]}catch{return[]}},ye=(e,t)=>{localStorage.setItem(`optimistic-comments-${e}`,JSON.stringify(t))},be=(e,t)=>{const r=ve(e).filter((e=>e._id!==t));ye(e,r)},xe=(0,o.useCallback)((async e=>{var r,o;const i=L[e]||"",s=M[e],u=z[e];if(!i.trim()&&!s&&!u)return void f("Por favor, adicione texto ou um meme");const c=`temp-${Date.now()}`,p={_id:c,text:i,user:a,createdAt:(new Date).toISOString(),likes:[],dislikes:[],likesCount:0,dislikesCount:0,replies:[],repliesCount:0,userReaction:null,isOptimistic:!0,sharedMeme:s?{_id:s,mediaUrl:(null===(r=E.find((e=>e._id===s)))||void 0===r?void 0:r.mediaUrl)||"",caption:(null===(o=E.find((e=>e._id===s)))||void 0===o?void 0:o.caption)||""}:null};l((t=>{const r=t=>t.map((t=>t._id===e?{...t,replies:[...t.replies||[],p],repliesCount:(t.repliesCount||0)+1}:t.replies?{...t,replies:r(t.replies)}:t));return r(t)}));try{const r=new FormData;r.append("text",i),r.append("parentId",e),s?r.append("sharedMeme",s):u&&r.append("media",u);const o=await ka.post(`/memes/${t}/comments`,r,{headers:{"Content-Type":"multipart/form-data"}});if(l((t=>{const r=t=>t.map((t=>t._id===e?{...t,replies:(t.replies||[]).map((e=>e._id===c?o.data:e))}:t.replies?{...t,replies:r(t.replies)}:t));return r(t)})),n){const e=await ka.get(`/memes/${t}`);n(e.data.commentCount||0)}N((t=>{const r={...t};return delete r[e],r})),I((t=>{const r={...t};return delete r[e],r})),$((t=>{const r={...t};return delete r[e],r})),A(null)}catch(d){var h,m;console.error("Erro ao enviar resposta:",d),l((t=>{const r=t=>t.map((t=>t._id===e?{...t,replies:(t.replies||[]).filter((e=>e._id!==c)),repliesCount:(t.repliesCount||0)-1}:t.replies?{...t,replies:r(t.replies)}:t));return r(t)})),f((null===(h=d.response)||void 0===h||null===(m=h.data)||void 0===m?void 0:m.message)||"Erro ao enviar resposta")}}),[t,L,M,z,a,E,n]),we=(0,o.useCallback)((e=>{g((null===e||void 0===e?void 0:e._id)||null),y((null===e||void 0===e?void 0:e.text)||""),x(null)}),[]),ke=(0,o.useCallback)((async e=>{try{f(null);const r=await ka.put(`/memes/${t}/comments/${e}`,{text:v}),n=t=>t.map((t=>t._id===e?{...t,...r.data}:t.replies?{...t,replies:n(t.replies)}:t));l(n(s)),g(null),y("")}catch(d){f("Erro ao editar coment\xe1rio"),console.error("Erro ao editar coment\xe1rio:",d)}}),[v,t,s]),_e=(0,o.useCallback)((async e=>{try{f(null);const r=await ka.delete(`/memes/${t}/comments/${e}`),n=t=>t.map((t=>t._id===e?{...r.data,replies:t.replies}:t.replies?{...t,replies:n(t.replies)}:t));l(n(s))}catch(d){f("Erro ao excluir coment\xe1rio"),console.error("Erro ao excluir coment\xe1rio:",d)}}),[t,s]),Se=(0,o.useCallback)((async function(e,r){try{const n=te(s,e),o=(null===n||void 0===n?void 0:n.userReaction)===r?"none":r,i=`/memes/${t}/comments/${e}/reaction`,a=await ka.post(i,{reaction:o});l((t=>{const r=t=>t.map((t=>{if(t._id===e){const e={...t,userReaction:"none"===o?null:o};return a.data&&(e.likes=a.data.likes||[],e.dislikes=a.data.dislikes||[],e.likesCount=a.data.likesCount||0,e.dislikesCount=a.data.dislikesCount||0),e}return t.replies?{...t,replies:r(t.replies)}:t}));return r(t)}))}catch(d){console.error("Erro ao reagir ao coment\xe1rio:",d)}}),[t,s,te]),Ee=(0,o.useMemo)((()=>Array.isArray(s)?ae(s):[]),[s,ae]),je=(0,o.useMemo)((()=>"undefined"!==typeof window&&window.innerWidth<=768),[]);(0,o.useEffect)((()=>{if("undefined"===typeof window||window.innerWidth>768)return;const e=()=>{const e=window.visualViewport;if(e){const t=e.height,r=window.innerHeight-t;ee(Math.max(r,300)),G(r>50),X.current&&r>50&&setTimeout((()=>{X.current.scrollIntoView({behavior:"smooth",block:"end"})}),300)}},t=window.visualViewport;return t&&t.addEventListener("resize",e),()=>{t&&t.removeEventListener("resize",e)}}),[]),(0,o.useEffect)((()=>{if(J){const e=document.getElementById("main-comment-input");e&&e.focus()}}),[J]),(0,o.useEffect)((()=>{if("undefined"===typeof window)return;let e=[];const t=al.Ii.isNativePlatform(),r=al.Ii.isPluginAvailable("Keyboard");if(t&&r)try{const t=id.addListener("keyboardWillShow",(e=>{ee(e.keyboardHeight),G(!0),setTimeout((()=>{X.current&&X.current.scrollIntoView({behavior:"smooth",block:"end"})}),300)})),r=id.addListener("keyboardWillHide",(()=>{G(!1),ee(0)}));e=[t,r]}catch(d){console.warn("Keyboard plugin not available:",d)}let n=()=>{};if(window.innerWidth<=768){const e=window.visualViewport;if(e){const t=()=>{const t=e.height,r=window.innerHeight-t;ee(Math.max(r,250)),G(r>50),r>50&&X.current&&setTimeout((()=>{X.current.scrollIntoView({behavior:"smooth",block:"end"})}),100)};e.addEventListener("resize",t),n=()=>{e.removeEventListener("resize",t)}}}return()=>{e.forEach((e=>e.remove())),n()}}),[]),(0,o.useEffect)((()=>{if(!je)return;const e=()=>{const e=window.visualViewport;if(e){const t=e.height;if(window.innerHeight-t>50){const e=document.getElementById("main-comment-input");e&&e.scrollIntoView({behavior:"smooth",block:"end"})}}},t=window.visualViewport;return t&&t.addEventListener("resize",e),()=>{t&&t.removeEventListener("resize",e)}}),[je]),(0,o.useEffect)((()=>{if(!je)return;const e=document.getElementById("main-comment-input"),t=()=>{G(!0),setTimeout((()=>{X.current&&X.current.scrollIntoView({behavior:"smooth",block:"center"})}),300)},r=()=>{G(!1)};return e&&(e.addEventListener("focus",t),e.addEventListener("blur",r)),()=>{e&&(e.removeEventListener("focus",t),e.removeEventListener("blur",r))}}),[je]),(0,o.useEffect)((()=>{if(!je)return;const e=()=>{const e=window.visualViewport;if(e){const t=e.height,r=window.innerHeight-t;ee(Math.max(r,250)),G(r>50)}},t=window.visualViewport;return t&&t.addEventListener("resize",e),()=>{t&&t.removeEventListener("resize",e)}}),[je]);const Ce=eo.button`
  margin-left: 10px;
  background: var(--primary);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`,Te=eo.div`
  text-align: center;
  padding: 10px;
  color: var(--text-light);
  font-size: 0.9rem;
`;return(0,el.jsxs)(cd,{"data-testid":"comment-section","aria-live":"polite","aria-atomic":"true",$keyboardActive:J,children:[(0,el.jsxs)(Dd,{"aria-live":"polite",children:[s.length," ",1===s.length?"coment\xe1rio":"coment\xe1rios"]}),d&&(0,el.jsxs)(Md,{role:"alert",children:[d,(0,el.jsx)(Ce,{onClick:le,"aria-label":"Tentar carregar coment\xe1rios novamente",children:"Tentar novamente"})]}),(0,el.jsx)(dd,{ref:K,children:u?(0,el.jsxs)(zd,{"aria-busy":"true",children:[(0,el.jsx)("div",{className:"spinner","aria-hidden":"true"}),"Carregando coment\xe1rios..."]}):Array.isArray(s)&&0!==s.length?(0,el.jsxs)("div",{role:"list",children:[Ee.map((e=>(0,el.jsx)(lf,{comment:e,depth:0,currentUser:a,onEdit:we,onDelete:_e,onReply:me,onReaction:Se,editingId:m,editText:v,onEditChange:y,onSaveEdit:ke,replyingTo:P,replyTexts:L,onReplyChange:ge,onReplySubmit:xe,showOptions:b,onToggleOptions:x,isPopular:e.isPopular||!1,onReplyMediaChange:ce,onReplyMemeChange:de,replyMedia:z,replySelectedMeme:M,onOpenMemeSelector:fe,userMemes:E,loadMoreReplies:oe,loadingReplies:q,expandedReplies:U,setExpandedReplies:B,findComment:te},e._id))),je&&s.length>3&&(0,el.jsx)(Te,{children:"Voc\xea chegou ao fim. Role para cima \u2191"})]}):(0,el.jsxs)($d,{children:["Nenhum coment\xe1rio ainda. Seja o primeiro!",je&&(0,el.jsx)("div",{style:{marginTop:"10px"},children:"Role para baixo para comentar \u2193"})]})}),a&&(0,el.jsxs)(el.Fragment,{children:[(0,el.jsxs)(bd,{onSubmit:he,role:"form",ref:X,$keyboardActive:J,$keyboardHeight:Z,children:[(0,el.jsx)(xd,{type:"text",id:"main-comment-input",name:"mainComment",value:p,onChange:e=>h(e.target.value),placeholder:"Escreva um coment\xe1rio...","aria-label":"Escrever coment\xe1rio","data-testid":"comment-input","aria-required":"true"}),(0,el.jsxs)(Vd,{children:[(0,el.jsx)(Kd,{type:"button",onClick:()=>document.getElementById("comment-file-input").click(),"aria-label":"Anexar m\xeddia","data-testid":"attach-media-button",children:(0,el.jsx)(ou,{size:18,"aria-hidden":"true"})}),(0,el.jsx)("input",{type:"file",id:"comment-file-input",style:{display:"none"},onChange:ue,accept:"image/*, video/*","data-testid":"media-input","aria-label":"Selecionar arquivo de m\xeddia"}),(0,el.jsx)(Kd,{type:"button",onClick:()=>{S(!0),se()},"aria-label":"Compartilhar meme","data-testid":"meme-selector-button",children:(0,el.jsx)(Xl,{size:18,"aria-hidden":"true"})}),(0,el.jsx)(wd,{type:"submit","aria-label":"Enviar coment\xe1rio",disabled:!p.trim()&&!O&&!C,"data-testid":"submit-comment-button","aria-disabled":!p.trim()&&!O&&!C,children:(0,el.jsx)(cu,{size:18,"aria-hidden":"true"})})]})]}),(O||C)&&(0,el.jsx)("div",{style:{marginTop:je?"8px":"0",padding:je?"0 16px":"0",marginBottom:je?"60px":"0"},children:(0,el.jsx)(sf,{file:O,meme:C?E.find((e=>e._id===C)):null,onRemove:()=>{R(null),T(null)},"data-testid":"media-preview"})}),_&&(0,el.jsx)(uf,{memes:E,selectedMeme:D?M[D]:C,onSelect:pe,onClose:()=>{S(!1),F(null)},isForReply:!!D,"data-testid":"meme-selector-modal"})]})]})},df=(e,t,r)=>{if(!e)return null;return e.split(/(@\w+)/g).map(((e,n)=>{if(e.startsWith("@")){const o=e.substring(1),i=t[o];return i?(0,el.jsx)("span",{className:"mention",onClick:e=>{e.preventDefault(),e.stopPropagation(),r(`/users/${i}`)},children:e},`${o}-${n}`):e}return e}))},ff=async e=>{if(!e)return[];const t=[...e.matchAll(/@([a-zA-Z0-9_]+)/g)],r=[...new Set(t.map((e=>e[1])))];if(0===r.length)return[];try{const e=await ka.post("/users/validate-mentions",{usernames:r}),t={};return e.data.validUsers.forEach((e=>{t[e.username]=e.userId})),{mentions:e.data.validUsers,mentionMap:t}}catch(n){return console.error("Error validating mentions:",n),{mentions:[],mentionMap:{}}}},pf=ro`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`,hf=ro`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,mf=ro`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,gf=ro`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,vf=ro`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,yf=ro`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,bf=(ro`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(100%); opacity: 0; }
`,eo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.$visible?"auto":"none"};
`),xf=eo.div`
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    max-height: 100vh;
    background: var(--card-bg);
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: translateY(${e=>e.$isOpen?"0":"100%"});
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    z-index: 1000;
    touch-action: none;

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 4px;
      background: var(--text-light);
      border-radius: 2px;
      opacity: 0.5;
    }
  }
`,wf=eo(xf)`
  transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateY(calc(${e=>e.$offset}px + ${e=>e.$isOpen?"0%":"100%"}));
  opacity: ${e=>1-e.$offset/200};
  border-radius: 16px 16px 0 0;
  background: var(--card-bg);
  height: 80vh;
  max-height: 80vh;
  pointer-events: auto;
  touch-action: none;
  
  /* Adiciona padding para a área segura */
  padding-bottom: env(safe-area-inset-bottom, 0);
  padding-bottom: constant(safe-area-inset-bottom, 0); /* Para versões mais antigas */
  
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: var(--text-light);
    border-radius: 3px;
    opacity: ${e=>1-e.$offset/100};
  }
`,kf=eo.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48px; /* Área maior para arraste */
  z-index: 1;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:active {
    cursor: grabbing;
  }
`,_f=eo.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  position: relative;
  padding-bottom: 0;
`,Sf=(eo.div`
  position: sticky;
  bottom: 0;
  padding: 12px;
  background: var(--card-bg);
  border-top: 1px solid var(--border-light);
`,eo.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: var(--text-light);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(0,0,0,0.1);
  }
`),Ef=(eo.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  color: ${e=>e.$active?"var(--primary)":"var(--text-light)"};
  display: flex;
  align-items: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: var(--primary);
    opacity: ${e=>{let{$active:t}=e;return t?1:0}};
    transition: opacity 0.3s ease;
  }
`,eo.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`),jf=eo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${vf} 0.3s ease-out;
`,Cf=eo.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: var(--radius-md);
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: ${yf} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,Tf=eo.h3`
  margin: 0 0 1.5rem;
  color: var(--text);
  font-size: 1.2rem;
  text-align: center;
`,Of=eo.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`,Rf=eo.button`
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:first-child {
    background: var(--danger);
    color: white;
    
    &:hover {
      background: var(--danger-hover);
      transform: translateY(-2px);
    }
  }
  
  &:last-child {
    background: var(--background);
    color: var(--text);
    border: 1px solid var(--border);
    
    &:hover {
      background: var(--background-light);
      transform: translateY(-2px);
    }
  }
`,Pf=eo.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${pf} 0.5s forwards;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  svg {
    color: var(--success);
  }
`,Af=eo.div`
  position: absolute;
  top: 40px;
  right: 5px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 10;
  min-width: 150px;
`,Lf=eo.button`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #ff4500;
  }
`,Nf=eo.div`
  background: var(--card-bg);
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: var(--transition);
  position: relative;
  border: 1px solid var(--border);
  transform: ${e=>{let{$deleting:t}=e;return t?"scale(0.98)":"scale(1)"}};
  opacity: ${e=>{let{$deleting:t}=e;return t?.8:1}};
  
  &:hover {
    box-shadow: var(--shadow-hover);
  }
`,zf=eo.div`
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  background: linear-gradient(45deg, var(--primary), var(--primary-hover));
  color: var(--card-bg);
  padding: 0.375rem 0.75rem;
  border-radius: 1.25rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.3);
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  animation: ${mf} 3s ease-in-out infinite;
  
  svg {
    margin-right: 0.25rem;
  }
`,$f=eo.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--background);
  position: relative;
  border-bottom: 1px solid var(--border-light);
`,Mf=eo.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  object-fit: cover;
  border: 3px solid var(--primary);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.8), transparent);
    transform: rotate(45deg);
    animation: ${gf} 3s infinite linear;
  }
  
  &:hover {
    transform: rotate(15deg) scale(1.1);
    border-color: var(--primary-hover);
  }
`,If=eo.span`
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s;
  }
  
  &:hover {
    color: var(--primary);
    
    &::after {
      width: 100%;
    }
  }
`,Df=eo.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: var(--transition);
  border-radius: var(--radius-md);
  
  @media (max-width: 768px) {
    object-fit: cover; /* Preenche o espaço quadrado sem distorcer */
    width: 100%;
    height: 100vw; /* Quadrado baseado na largura da tela */
    max-height: 80vh; /* Limite máximo opcional */
  }
  
  &:hover {
    transform: scale(1.03);
    filter: saturate(1.2) brightness(1.05);
  }
`,Ff=eo.video`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-md);
  z-index: 1;
  transition: var(--transition);
  
  @media (max-width: 768px) {
    object-fit: cover; /* Preenche o espaço quadrado sem distorcer */
    width: 100%;
    height: 100vw; /* Quadrado baseado na largura da tela */
    max-height: 80vh; /* Limite máximo opcional */
  }
  
  &:hover {
    transform: scale(1.03);
    filter: saturate(1.2) brightness(1.05);
  }
`,Uf=eo.div`
  width: 100%;
  height: 60vh;
  max-height: 43.75rem;
  min-height: 18.75rem;
  background: var(--background);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vw; /* Quadrado baseado na largura da tela */
    max-height: 80vh; /* Limite máximo opcional */
  }
`,Bf=eo.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: var(--radius-md);
`,Wf=eo.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  background: rgba(var(--primary-rgb), 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: var(--transition);
  backdrop-filter: blur(2px);
  box-shadow: var(--shadow);
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0.9375rem solid transparent;
    border-bottom: 0.9375rem solid transparent;
    border-left: 1.5625rem solid var(--card-bg);
    margin-left: 0.3125rem;
  }
  
  &:hover {
    background: rgba(var(--primary-rgb), 0.9);
    transform: translate(-50%, -50%) scale(1.1);
  }
`,Hf=eo.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  padding: 0.625rem;
  display: flex;
  align-items: center;
  z-index: 3;
  opacity: 0;
  transition: var(--transition);
  
  &:hover {
    opacity: 1;
    animation: ${vf} 0.3s forwards;
  }
`,qf=eo.button`
  background: none;
  border: none;
  color: var(--card-bg);
  font-size: 1.2rem;
  margin: 0 0.3125rem;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: scale(1.2);
  }
`,Vf=eo.div`
  flex-grow: 1;
  height: 0.25rem;
  background: rgba(255,255,255,0.3);
  border-radius: 0.125rem;
  margin: 0 0.625rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`,Kf=eo.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.$progress||"0%"};
  background: var(--primary);
  border-radius: 0.125rem;
`,Yf=eo.span`
  color: var(--card-bg);
  font-size: 0.8rem;
  min-width: 5rem;
  text-align: center;
`,Qf=eo.p`
  padding: 1rem;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text);
  background: var(--card-bg);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.25rem;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--primary-hover));
  }
`,Xf=eo.div`
  padding: 0 1rem 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background: var(--card-bg);
`,Jf=eo.span`
  color: var(--card-bg);
  font-size: 0.85rem;
  background: linear-gradient(45deg, var(--primary), var(--primary-hover));
  padding: 0.375rem 0.75rem;
  border-radius: 1.25rem;
  transition: var(--transition);
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);
  }
`,Gf=eo.div`
  display: flex;
  padding: 12px;
  border-top: 1px solid var(--border-light);
  background: var(--card-bg);
  justify-content: space-between;
  position: sticky;
  bottom: 0;
`,Zf=eo.div`
  display: flex;
  gap: 0.5rem;
`,ep=eo.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${e=>e.$active?e.$color||"var(--primary)":"var(--text-light)"};
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  svg {
    margin-right: 0.375rem;
    font-size: 1.2rem;
    transition: var(--transition);
  }

  &:hover {
    background: rgba(var(--primary-rgb), 0.05);
    color: ${e=>e.$color||"var(--primary)"};
    transform: translateY(-2px);
    
    svg {
      transform: scale(1.2);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
  }
  
  &:hover::after {
    width: 120%;
    height: 120%;
  }
  
  &:active {
    transform: scale(0.95) translateY(-2px);
  }
`,tp=eo(ep)`
  color: ${e=>e.$active?"var(--success)":"var(--text-light)"};
  
  &:hover {
    color: var(--success);
  }
`,rp=eo.div`
  position: absolute;
  animation: ${pf} 0.5s forwards, ${hf} 0.5s 0.5s forwards;
  font-size: 2.5rem;
  opacity: 0;
  pointer-events: none;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  z-index: 10;
`,np=e=>{var t,r,n,i,a,s,l,u,c,d,f;let{meme:p,isRepost:h=!1,onDelete:m,onCommentCountChange:g,isFullScreen:v=!1,setCommentOpen:y=()=>{},autoPlay:b=!1}=e;const x=re(),{user:w}=nl(),[k,_]=(0,o.useState)(!1),[S,E]=(0,o.useState)((null===(t=p.likes)||void 0===t?void 0:t.length)||0),[j,C]=(0,o.useState)(!1),T=p.commentCount||0,[O,R]=(0,o.useState)(null),[P,A]=(0,o.useState)(!1),[L,N]=(0,o.useState)(p.repostCount||0),[z,$]=(0,o.useState)(!0),[M,I]=(0,o.useState)(!1),[D,F]=(0,o.useState)(!1),[U,B]=(0,o.useState)(!1),[W,H]=(0,o.useState)(!1),[q,V]=(0,o.useState)(0),[K,Y]=(0,o.useState)({}),[Q,X]=(0,o.useState)(!1),[J,G]=(0,o.useState)(0),[Z,ee]=(0,o.useState)(0),[te,ne]=(0,o.useState)(0),oe=(0,o.useRef)(null),ie=(0,o.useRef)(null),ae=(0,o.useRef)(null),[se,le]=(0,o.useState)(0),[ue,ce]=(0,o.useState)(!1);(0,o.useEffect)((()=>{var e;(async()=>{if(p.caption)try{const e=await ff(p.caption);Y(e.mentionMap||{})}catch(e){console.error("Error processing mentions:",e),Y({})}})(),w&&p.likes&&_(p.likes.some((e=>e.toString()===w._id))),E((null===(e=p.likes)||void 0===e?void 0:e.length)||0),N(p.repostCount||0),w?pe():$(!1)}),[p,w]),(0,o.useEffect)((()=>{const e=oe.current;if(!e)return;const t=()=>X(!0),r=()=>X(!1);return e.addEventListener("play",t),e.addEventListener("pause",r),X(!e.paused&&!e.ended),()=>{e.removeEventListener("play",t),e.removeEventListener("pause",r)}}),[b,p.mediaType]);const de=()=>{oe.current&&(Q?oe.current.pause():oe.current.play(),X(!Q))},fe=e=>{const t=Math.floor(e/60),r=Math.floor(e%60);return`${t}:${r<10?"0":""}${r}`},pe=async()=>{try{var e;if(p.originalMeme&&p.author._id===w._id)A(!0);else A(null===(e=p.reposts)||void 0===e?void 0:e.some((e=>e.toString()===w._id)))}catch(t){console.error("Erro ao verificar repost:",t)}finally{$(!1)}},he=e=>{if(!e)return console.warn("URL is empty or undefined"),"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`},me=()=>{C(!j),y(!j)};(0,o.useEffect)((()=>()=>{"function"===typeof y&&y(!1)}),[y]),(0,o.useEffect)((()=>{"video"===p.mediaType&&oe.current&&(b?oe.current.play().catch((()=>{})):oe.current.pause())}),[b,p.mediaType]);return(0,el.jsxs)(el.Fragment,{children:[(0,el.jsxs)(Nf,{$deleting:D,style:v?{width:"100%",height:"100%",marginBottom:0,borderRadius:0,border:"none",boxShadow:"none"}:{},children:[D&&(0,el.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,el.jsx)("div",{style:{width:"80%",background:"rgba(255,255,255,0.2)",borderRadius:"10px",overflow:"hidden"},children:(0,el.jsx)("div",{style:{width:`${q}%`,height:"6px",background:"var(--primary)",transition:"width 0.3s ease"}})})}),U&&(0,el.jsxs)(Pf,{children:[(0,el.jsx)(Cl,{size:18}),(0,el.jsx)("span",{children:"Meme deletado com sucesso!"})]}),(null===w||void 0===w?void 0:w._id)===(null===(r=p.author)||void 0===r?void 0:r._id)&&(0,el.jsxs)("div",{style:{position:"relative"},children:[(0,el.jsx)(Ef,{onClick:e=>{e.stopPropagation(),I(!M)},children:(0,el.jsx)(Tl,{size:14})}),M&&(0,el.jsx)(Af,{onClick:e=>e.stopPropagation(),children:(0,el.jsxs)(Lf,{onClick:()=>{I(!1),H(!0)},children:[(0,el.jsx)(hu,{size:14}),(0,el.jsx)("span",{children:"Deletar"})]})})]}),h&&(0,el.jsxs)(zf,{children:[(0,el.jsx)(lu,{})," Repostado por @",(null===(n=p.repostedBy)||void 0===n?void 0:n.username)||"usu\xe1rio"]}),O&&(0,el.jsx)(rp,{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"like"===O?"var(--primary)":"dislike"===O?"#f00":"repost"===O?"#10b981":"var(--primary)"},children:"like"===O?(0,el.jsx)(Ll,{}):"dislike"===O?(0,el.jsx)(jl,{}):"repost"===O?(0,el.jsx)(Cl,{}):(0,el.jsx)("span",{style:{fontSize:"1rem"},children:"Voc\xea \xe9 o autor!"})}),(0,el.jsxs)($f,{children:[(0,el.jsx)(Mf,{src:null!==(i=p.author)&&void 0!==i&&null!==(a=i.profile)&&void 0!==a&&a.avatar?he(p.author.profile.avatar):"https://i.pravatar.cc/150?img=3",alt:null===(s=p.author)||void 0===s?void 0:s.username,onClick:()=>p.author&&x(`/users/${p.author._id}`),crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"}}),(0,el.jsxs)(If,{onClick:()=>p.author&&x(`/users/${p.author._id}`),children:["@",(null===(l=p.author)||void 0===l?void 0:l.username)||"usu\xe1rio desconhecido"]})]}),(0,el.jsx)(Uf,{children:"image"===p.mediaType?(0,el.jsx)(Df,{src:he(p.mediaUrl),alt:p.caption||"Meme image",style:{transform:j?"scale(0.98)":"scale(1)",filter:j?"brightness(0.95)":"none"},crossOrigin:"anonymous",onError:e=>{e.target.src="https://placehold.co/600x400?text=Imagem+n\xe3o+carregada",e.target.onerror=null}}):(0,el.jsxs)(Bf,{onClick:de,children:[(0,el.jsx)(Ff,{ref:oe,src:he(p.mediaUrl),preload:"metadata",onTimeUpdate:()=>{if(oe.current){const e=oe.current.currentTime/oe.current.duration*100;G(e),ne(oe.current.currentTime)}},onLoadedMetadata:()=>{oe.current&&ee(oe.current.duration)},onEnded:()=>X(!1),crossOrigin:"anonymous"}),!Q&&(0,el.jsx)(Wf,{onClick:e=>{e.stopPropagation(),de()}}),(0,el.jsxs)(Hf,{onClick:e=>e.stopPropagation(),children:[(0,el.jsx)(qf,{onClick:de,children:Q?"\u275a\u275a":"\u25b6"}),(0,el.jsx)(Vf,{onClick:e=>{if(oe.current){const t=e.target.getBoundingClientRect(),r=(e.clientX-t.left)/t.width;oe.current.currentTime=r*oe.current.duration}},children:(0,el.jsx)(Kf,{$progress:`${J}%`})}),(0,el.jsxs)(Yf,{children:[fe(te)," / ",fe(Z)]}),(0,el.jsx)(qf,{onClick:()=>{oe.current&&(oe.current.muted=!oe.current.muted)},children:null!==(u=oe.current)&&void 0!==u&&u.muted?"\ud83d\udd07":"\ud83d\udd08"})]}),(0,el.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, \n                  rgba(255,255,255,0.1), \n                  rgba(255,69,0,0.05))",pointerEvents:"none"}})]})}),p.caption&&(0,el.jsx)(Qf,{children:o.Children.toArray(df(p.caption,K,x))}),(null===(c=p.tags)||void 0===c?void 0:c.length)>0&&(0,el.jsx)(Xf,{children:p.tags.map((e=>(0,el.jsxs)(Jf,{onClick:()=>x(`/explore?tag=${e}`),children:["#",e]},e)))}),(0,el.jsxs)(Gf,{children:[(0,el.jsxs)(Zf,{children:[(0,el.jsxs)(ep,{onClick:async()=>{if(w)try{const e=await ka.post(`/memes/${p._id}/like`);_(e.data.isLiked),E(e.data.likeCount),R(e.data.isLiked?"like":"dislike"),setTimeout((()=>R(null)),1500)}catch(e){console.error("Erro ao curtir:",e)}},$active:k,$color:"var(--primary)",children:[(0,el.jsx)(Ll,{})," ",S]}),(0,el.jsx)(ep,{onClick:async()=>{if(w&&k)try{const e=await ka.post(`/memes/${p._id}/like`);_(!1),E(e.data.likeCount),R("dislike"),setTimeout((()=>R(null)),1500)}catch(e){console.error("Erro ao remover curtida:",e)}},$active:!k&&S>0,$color:"var(--text)",children:(0,el.jsx)(jl,{})}),(0,el.jsxs)(ep,{onClick:me,$active:j,$color:"#f000",children:[(0,el.jsx)(tu,{})," ",T]})]}),(0,el.jsxs)(Zf,{children:[(0,el.jsxs)(tp,{onClick:async()=>{var e;if(w){if((null===(e=p.author)||void 0===e?void 0:e._id)===w._id)return R("self-repost"),void setTimeout((()=>R(null)),1500);if(!P&&!h)try{const e=await ka.post(`/memes/${p._id}/repost`);A(!0),N(e.data.repostCount),R("repost"),setTimeout((()=>R(null)),1500)}catch(t){console.error("Erro ao repostar:",t),t.response&&409===t.response.status&&A(!0)}}},$active:P,disabled:P||z||h||(null===(d=p.author)||void 0===d?void 0:d._id)===(null===w||void 0===w?void 0:w._id),title:(null===(f=p.author)||void 0===f?void 0:f._id)===(null===w||void 0===w?void 0:w._id)?"Voc\xea n\xe3o pode repostar seu pr\xf3prio conte\xfado":"",children:[z?(0,el.jsx)(lu,{}):P?(0,el.jsx)(Cl,{}):(0,el.jsx)(lu,{})," ",L]}),(0,el.jsx)(ep,{children:(0,el.jsx)(du,{})})]})]})]}),j&&(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(bf,{$visible:j,onClick:me}),(0,el.jsxs)(wf,{$isOpen:j,$offset:se,children:[(0,el.jsx)(kf,{className:"drag-handle",onTouchStart:e=>{e.target.closest(".drag-handle")&&(ae.current=e.touches[0].clientY,ce(!0),le(0))},onTouchMove:e=>{if(!ue)return;const t=e.touches[0].clientY-ae.current;t>0&&le(Math.min(.7*t,180))},onTouchEnd:()=>{ue&&(ce(!1),se>100&&(C(!1),y(!1)),le(0))}}),(0,el.jsxs)(_f,{style:{touchAction:ue?"none":"auto",pointerEvents:ue?"none":"auto"},ref:ie,onScroll:()=>ce(!1),onClick:e=>e.stopPropagation(),children:[(0,el.jsx)(Sf,{onClick:me,children:(0,el.jsx)(ql,{size:24})}),(0,el.jsx)(cf,{memeId:p._id,onCommentSubmit:async e=>{try{const t=await ka.post(`/memes/${p._id}/comments`,e,{headers:{"Content-Type":"multipart/form-data"}});if(g){const e=await ka.get(`/memes/${p._id}`);g(e.data.commentCount||0)}await ka.get(`/memes/${p._id}`),p.commentCount;return t.data}catch(i){var t,r,n,o;throw console.error("Erro detalhado:",{message:i.message,response:null===(t=i.response)||void 0===t?void 0:t.data,status:null===(r=i.response)||void 0===r?void 0:r.status,config:i.config}),new Error((null===(n=i.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||i.message||"Erro ao enviar coment\xe1rio")}},onCommentCountChange:g,setCommentOpen:y})]})]})]}),W&&(0,el.jsx)(jf,{children:(0,el.jsxs)(Cf,{children:[(0,el.jsx)(Tf,{children:"Tem certeza que deseja deletar este meme?"}),(0,el.jsx)("p",{style:{textAlign:"center",color:"var(--text-light)"},children:"Esta a\xe7\xe3o \xe9 irrevers\xedvel e remover\xe1 o meme permanentemente."}),(0,el.jsxs)(Of,{children:[(0,el.jsxs)(Rf,{onClick:async()=>{H(!1),F(!0);try{var e;const r=setInterval((()=>{V((e=>e>=90?(clearInterval(r),e):e+10))}),100),n=localStorage.getItem("token"),o=await ka.delete(`/memes/${p._id}`,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"}});var t;if(clearInterval(r),V(100),null===(e=o.data)||void 0===e||!e.success)throw new Error((null===(t=o.data)||void 0===t?void 0:t.message)||"Falha ao deletar");B(!0),setTimeout((()=>{m&&m(p._id),B(!1)}),1500)}catch(Vv){var r,n,o;if(console.error("Erro ao deletar meme:",Vv),410===(null===(r=Vv.response)||void 0===r?void 0:r.status))m&&m(p._id),alert("Este meme j\xe1 foi deletado anteriormente");else alert((null===(n=Vv.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||"Erro ao deletar meme")}finally{F(!1),V(0)}},children:[(0,el.jsx)(Hl,{size:16}),"Confirmar"]}),(0,el.jsxs)(Rf,{onClick:()=>H(!1),children:[(0,el.jsx)(wu,{size:16}),"Cancelar"]})]})]})})]})},op=eo.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ff4500;
  color: white;
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    background-color: #e03d00;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,ip=()=>{const{user:e,loading:t,initialCheckDone:r}=nl(),n=re();return t||!r?null:(0,el.jsx)(op,{onClick:()=>{!t&&r&&(e?n("/upload"):n("/login",{state:{from:"/upload"}}))},disabled:t,"aria-label":"Bot\xe3o de upload",children:(0,el.jsx)(au,{})})},ap=eo.div`
  width: 100%;
  background-color: var(--background);
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  margin: 0;
`,sp=eo.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0;
  margin: 0;
  padding: 0;
`,lp=eo.div`
  width: 100%;
  position: relative;
  background: var(--background);
  margin: 0;
  padding: 0;
`,up=eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  text-align: center;
  color: var(--text);
  background: var(--card-bg);
  padding: 16px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  p {
    color: var(--text-light);
    margin-bottom: 24px;
  }
`,cp=eo.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  color: var(--text-light);
`,dp=eo.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  color: var(--danger);
  padding: 20px;

  button {
    margin-top: 20px;
    padding: 12px 24px;
    border-radius: 24px;
    background: var(--primary);
    color: white;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
  }
`,fp=eo.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  z-index: 10;
  transition: all 0.2s ease;
  
  &:active {
    transform: scale(0.95);
    background: rgba(0, 0, 0, 0.9);
  }
`,pp=()=>{const[e,t]=(0,o.useState)([]),[r,n]=(0,o.useState)(!0),[i,a]=(0,o.useState)(null),{user:s,logout:l}=nl(),u=re(),c=(0,o.useCallback)((async()=>{try{n(!0),a(null);const{data:e}=await ka.get("/feed/trending?limit=50");t(e.data)}catch(i){var e;console.error("Error fetching trending memes:",i),a("Erro ao carregar os memes em destaque. Tente novamente mais tarde."),401===(null===(e=i.response)||void 0===e?void 0:e.status)&&(await l(),u("/login"))}finally{n(!1)}}),[l,u]),d=(0,o.useCallback)((()=>{c()}),[c]);return(0,o.useEffect)((()=>{c()}),[c]),r?(0,el.jsx)(ap,{children:(0,el.jsx)(cp,{children:"Carregando memes em destaque..."})}):i?(0,el.jsx)(ap,{children:(0,el.jsxs)(dp,{children:[i,(0,el.jsxs)("button",{onClick:d,children:[(0,el.jsx)(su,{})," Tentar novamente"]})]})}):(0,el.jsx)(el.Fragment,{children:(0,el.jsx)(ap,{children:(0,el.jsx)(sp,{children:0===e.length?(0,el.jsxs)(up,{children:[(0,el.jsx)("h3",{children:"Nenhum meme em destaque encontrado"}),(0,el.jsx)("p",{children:"Que tal criar o primeiro?"}),(0,el.jsx)(ip,{size:"large"})]}):e.map((e=>{var t;return(0,el.jsxs)(lp,{children:[(0,el.jsx)(np,{meme:e,isSquareView:!1,style:{width:"100%",height:"100%"}}),s&&s._id!==(null===(t=e.author)||void 0===t?void 0:t._id)&&(0,el.jsxs)(fp,{onClick:()=>(async e=>{try{await ka.post(`/memes/${e}/repost`),c()}catch(i){var t;console.error("Erro ao repostar:",i),a("Erro ao repostar"),401===(null===(t=i.response)||void 0===t?void 0:t.status)&&(await l(),u("/login"))}})(e._id),children:[(0,el.jsx)("span",{children:"\ud83d\udd01"})," Repostar (",e.repostCount||0,")"]})]},e._id)}))})})})},hp=()=>{const{user:e}=nl();return e?(0,el.jsx)(pp,{}):(0,el.jsxs)("div",{children:[(0,el.jsx)("h1",{children:"Bem-vindo ao iFunny Clone"}),(0,el.jsx)("p",{children:"Fa\xe7a login para ver o conte\xfado"})]})},mp=eo.div`
  display: flex;
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
  padding: ${al.Ii.isNativePlatform()?"env(safe-area-inset-top) 16px env(safe-area-inset-bottom)":"0"};
`,gp=eo.div`
  width: 100%;
  max-width: ${al.Ii.isNativePlatform()?"100%":"400px"};
  margin: auto;
  padding: ${al.Ii.isNativePlatform()?"2rem 1rem":"2rem"};
  background: var(--card-bg);
  border-radius: ${al.Ii.isNativePlatform()?"0":"16px"};
  box-shadow: ${al.Ii.isNativePlatform()?"none":"0 10px 25px rgba(0, 0, 0, 0.1)"};
`,vp=eo.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 1rem;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-size: 16px;
  background: var(--input-bg);
  color: var(--text);
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 14px;
  }
`,yp=eo.button`
  width: 100%;
  padding: 16px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 0.5rem;
  
  &:active {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,bp=eo.div`
  color: var(--danger);
  background-color: rgba(231, 76, 60, 0.1);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
`,xp=eo.h1`
  color: var(--text);
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${al.Ii.isNativePlatform()?"24px":"28px"};
`,wp=eo.p`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-lighter);

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
  }
`,kp=()=>{const[e,t]=(0,o.useState)({usernameOrEmail:"",password:""}),[r,n]=(0,o.useState)(""),[i,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)("0px"),{user:u,initialCheckDone:c,verifyAuth:d}=nl(),f=re(),p=Z(),h=al.Ii.isNativePlatform();(0,o.useEffect)((()=>{if(h)return id.addListener("keyboardWillShow",(e=>{l(`${e.keyboardHeight}px`)})),id.addListener("keyboardWillHide",(()=>{l("0px")})),()=>{id.removeAllListeners()}}),[h]),(0,o.useEffect)((()=>{var e,t;c&&(u&&f((null===(e=p.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname)||"/feed",{replace:!0,state:{...p.state,isMobile:h}}))}),[u,c,f,p,h]);return(0,el.jsx)(mp,{style:{paddingBottom:s,transition:"padding-bottom 0.3s ease"},children:(0,el.jsxs)(gp,{children:[(0,el.jsx)(xp,{children:"Bem-vindo de volta"}),r&&(0,el.jsx)(bp,{children:r}),(0,el.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),a(!0),n("");try{var r,o;const t=await Ea(e);localStorage.setItem("token",t.token),Gs(t.token),await d(),f((null===(r=p.state)||void 0===r||null===(o=r.from)||void 0===o?void 0:o.pathname)||"/trending",{replace:!0,state:{...p.state,isMobile:h}})}catch(Vv){n(Vv.message||"Credenciais inv\xe1lidas. Por favor, tente novamente."),localStorage.removeItem("token")}finally{a(!1)}},children:[(0,el.jsx)(vp,{type:"text",placeholder:"Usu\xe1rio ou Email",value:e.usernameOrEmail,onChange:r=>t({...e,usernameOrEmail:r.target.value}),required:!0,autoCapitalize:"none"}),(0,el.jsx)(vp,{type:"password",placeholder:"Senha",value:e.password,onChange:r=>t({...e,password:r.target.value}),required:!0}),(0,el.jsx)(yp,{type:"submit",disabled:i,children:i?"Entrando...":"Entrar"})]}),(0,el.jsxs)(wp,{children:["N\xe3o tem conta? ",(0,el.jsx)(ot,{to:"/register",state:{isMobile:h},children:"Cadastre-se"})]})]})})},_p=eo.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`,Sp=eo.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`,Ep=eo.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.3s ease;

  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`,jp=eo.button`
  width: 100%;
  padding: 14px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0c4f7;
    cursor: not-allowed;
  }
`,Cp=eo.div`
  color: #e74c3c;
  background-color: #fdecea;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
`,Tp=eo.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 28px;
`,Op=eo.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #7f8c8d;

  a {
    color: #4a90e2;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,Rp=eo.small`
  display: block;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  color: #7f8c8d;
  font-size: 0.8rem;
`,Pp=()=>{const[e,t]=(0,o.useState)({username:"",email:"",password:""}),[r,n]=(0,o.useState)(""),[i,a]=(0,o.useState)(!1),s=re();return(0,el.jsx)(_p,{children:(0,el.jsxs)(Sp,{children:[(0,el.jsx)(Tp,{children:"Crie sua conta"}),r&&(0,el.jsx)(Cp,{children:r}),(0,el.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),a(!0),n("");try{const t=await Sa(e);localStorage.setItem("token",t.token),s("/feed",{replace:!0})}catch(Vv){n("CONFLICT"===Vv.type?Vv.message:"Erro ao cadastrar. Por favor, tente novamente.")}finally{a(!1)}},children:[(0,el.jsx)(Ep,{type:"text",placeholder:"Nome de usu\xe1rio",value:e.username,onChange:r=>t({...e,username:r.target.value}),required:!0,minLength:3}),(0,el.jsx)(Ep,{type:"email",placeholder:"Email",value:e.email,onChange:r=>t({...e,email:r.target.value}),required:!0}),(0,el.jsx)(Ep,{type:"password",placeholder:"Senha",value:e.password,onChange:r=>t({...e,password:r.target.value}),required:!0,minLength:6}),(0,el.jsx)(Rp,{children:"M\xednimo de 8 caracteres e numeros"}),(0,el.jsx)(jp,{type:"submit",disabled:i,children:i?"Cadastrando...":"Criar conta"})]}),(0,el.jsxs)(Op,{children:["J\xe1 tem conta? ",(0,el.jsx)(ot,{to:"/login",children:"Fa\xe7a login"})]})]})})},Ap=eo.div`
  width: 100%;
  background-color: var(--background);
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  margin: 0;
`,Lp=eo.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0;
  margin: 0;
  padding: 0;
`,Np=eo.div`
  width: 100%;
  /* Removido min-height para não forçar espaçamento */
  position: relative;
  background: var(--background);
  margin: 0;
  padding: 0;
  /* Nenhum border, shadow, radius */
`,zp=eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  text-align: center;
  color: var(--text);
  scroll-snap-align: start;
  background: var(--card-bg);
  padding: 16px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  p {
    color: var(--text-light);
    margin-bottom: 24px;
  }
`,$p=eo.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  color: var(--text-light);
  scroll-snap-align: start;
`,Mp=eo.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  color: var(--danger);
  padding: 20px;
  scroll-snap-align: start;

  button {
    margin-top: 20px;
    padding: 12px 24px;
    border-radius: 24px;
    background: var(--primary);
    color: white;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
  }
`,Ip=()=>{const[e,t]=(0,o.useState)([]),[r,n]=(0,o.useState)(!0),[i,a]=(0,o.useState)(null),{logout:s}=nl(),l=re(),[u,c]=(0,o.useState)(!1),[d,f]=(0,o.useState)(null),p=(0,o.useRef)({});(0,o.useEffect)((()=>{const e=new window.IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&f(e.target.dataset.id)}))}),{threshold:.6});return Object.values(p.current).forEach((t=>{t&&e.observe(t)})),()=>{e.disconnect()}}),[e]);const h=async()=>{try{n(!0),a(null);const{data:e}=await ka.get("/memes"),r=Array.isArray(null===e||void 0===e?void 0:e.data)?e.data.filter((e=>!e.isDeleted)):[];t(r)}catch(i){var e;console.error("Erro ao carregar feed:",i),a("Erro ao carregar o feed. Tente novamente mais tarde."),401===(null===(e=i.response)||void 0===e?void 0:e.status)&&(await s(),l("/login"))}finally{n(!1)}},m=e=>{t((t=>t.filter((t=>t._id!==e))))};return(0,o.useEffect)((()=>{h()}),[]),r?(0,el.jsx)(Ap,{children:(0,el.jsx)($p,{children:"Carregando..."})}):i?(0,el.jsx)(Ap,{children:(0,el.jsxs)(Mp,{children:[i,(0,el.jsxs)("button",{onClick:h,children:[(0,el.jsx)(su,{})," Tentar novamente"]})]})}):(0,el.jsx)(Ap,{children:(0,el.jsx)(Lp,{children:0===e.length?(0,el.jsxs)(zp,{children:[(0,el.jsx)("h3",{children:"Nenhum meme encontrado"}),(0,el.jsx)("p",{children:"Seja o primeiro a compartilhar sua cria\xe7\xe3o!"}),(0,el.jsx)(ip,{size:"large"})]}):e.map((e=>(0,el.jsx)(Np,{ref:t=>p.current[e._id]=t,"data-id":e._id,children:(0,el.jsx)(np,{meme:e,onDelete:m,onCommentCountChange:r=>{t((t=>t.map((t=>t._id===e._id?{...t,commentCount:r}:t))))},isSquareView:!1,isActive:!0,style:{width:"100%",height:"100%"},setCommentOpen:c,autoPlay:d===e._id})},e._id)))})})},Dp=eo.div`
  position: relative;
  width: 100%;
`,Fp=eo.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--input-bg);
  color: var(--text);
  resize: vertical;
  transition: var(--transition);
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.2);
  }
`,Up=eo.ul`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
  z-index: 100;
`,Bp=eo.li`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);

  &:hover {
    background: rgba(255, 69, 0, 0.1);
  }
`,Wp=eo.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`,Hp=e=>{let{value:t,onChange:r,placeholder:n}=e;const[i,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)([]),[u,c]=(0,o.useState)(""),[d,f]=(0,o.useState)(0),p=(0,o.useRef)(null),h=async e=>{if(!e||e.length<1)a(!1);else try{const t=await ka.get("/users/search",{params:{q:e}});t.data&&t.data.success&&Array.isArray(t.data.data)?(l(t.data.data),a(t.data.data.length>0)):(l([]),a(!1))}catch(t){console.error("Error fetching mentions:",t),l([]),a(!1)}};return(0,o.useEffect)((()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,o.useEffect)((()=>{const e=e=>{"Escape"===e.key&&a(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),(0,el.jsxs)(Dp,{children:[(0,el.jsx)(Fp,{ref:p,value:t,onChange:e=>{const t=e.target.value;r(t);const n=e.target.selectionStart,o=t.substring(0,n),i=o.lastIndexOf("@");if(i>=0){const e=o.substring(i+1);if(/\w/.test(e)&&!/\s/.test(e)){const e=t.substring(i+1,n);return c(e),f(i),void(e.length>=1?(h(e),a(!0)):a(!1))}}a(!1)},placeholder:n,onClick:()=>a(!1)}),i&&s.length>0&&(0,el.jsx)(Up,{children:s.map((e=>{var n,o;return(0,el.jsxs)(Bp,{onClick:()=>(e=>{console.log("Selecionando:",e,"Posi\xe7\xe3o:",d,"Query:",u);const n=t,o=n.substring(0,d),i=n.substring(d+u.length+1);r(`${o}@${e} ${i}`),a(!1),setTimeout((()=>{if(p.current){p.current.focus();const t=d+e.length+2;p.current.setSelectionRange(t,t)}}),0)})(e.username),children:[(0,el.jsx)(Wp,{src:null!==(n=e.profile)&&void 0!==n&&n.avatar?e.profile.avatar.startsWith("http")?e.profile.avatar:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${e.profile.avatar}`:"https://i.pravatar.cc/150?img=3",alt:e.username,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"}}),(0,el.jsxs)("span",{children:["@",e.username]}),(null===(o=e.profile)||void 0===o?void 0:o.displayName)&&(0,el.jsxs)("span",{style:{color:"var(--text-light)",fontSize:"0.9em"},children:["(",e.profile.displayName,")"]})]},e._id)}))})]})},qp=eo.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem;
  }
`,Vp=eo.h2`
  color: var(--text);
  margin-bottom: 1.5rem;
  text-align: center;
`,Kp=eo.div`
  color: var(--text-light);
  text-align: center;
  padding: 1rem;
`,Yp=eo.div`
  color: var(--success);
  text-align: center;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-sm);
  margin: 1rem 0;
`,Qp=eo.div`
  color: var(--danger);
  text-align: center;
  padding: 1rem;
  background: rgba(255, 68, 68, 0.1);
  border-radius: var(--radius-sm);
  margin: 1rem 0;
`,Xp=eo.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  
  &:hover {
    background: var(--primary-hover);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Jp=eo.div`
  margin: 1.5rem 0;
`,Gp=eo.label`
  display: block;
  padding: 1.5rem;
  border: 2px dashed var(--border);
  border-radius: var(--radius-md);
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--primary);
    background: rgba(255, 69, 0, 0.05);
  }
`,Zp=eo.div`
  margin-top: 1rem;
  text-align: center;
  
  img, video {
    max-width: 100%;
    max-height: 300px;
    border-radius: var(--radius-sm);
  }
`,eh=eo.p`
  margin-top: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
`,th=eo.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
`,rh=eo.p`
  margin-bottom: 0.5rem;
  color: var(--text-light);
`,nh=()=>{const{user:e,loading:t,initialCheckDone:r}=nl(),n=re(),[i,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)(!1),[u,c]=(0,o.useState)(null),[d,f]=(0,o.useState)(""),[p,h]=(0,o.useState)(null),[m,g]=(0,o.useState)(null);o.useEffect((()=>{!r||e||t||n("/login",{state:{from:"/upload"}})}),[e,t,r,n]);return t||!r?(0,el.jsx)(qp,{children:(0,el.jsx)(Kp,{children:"Carregando..."})}):(0,el.jsxs)(qp,{children:[(0,el.jsx)(Vp,{children:"Criar Nova Postagem"}),i?(0,el.jsx)(Yp,{children:"Postagem criada com sucesso! Redirecionando..."}):(0,el.jsxs)(el.Fragment,{children:[(0,el.jsxs)(Jp,{children:[(0,el.jsxs)(Gp,{children:[(0,el.jsx)("input",{type:"file",onChange:e=>{const t=e.target.files[0];if(t)if(h(t),c(null),t.type.startsWith("image/")){const e=new FileReader;e.onload=()=>g(e.result),e.readAsDataURL(t)}else t.type.startsWith("video/")&&g(URL.createObjectURL(t))},accept:"image/*,video/*",style:{display:"none"}}),p?"Arquivo selecionado":"Clique para selecionar imagem ou v\xeddeo"]}),m&&(0,el.jsxs)(Zp,{children:[p.type.startsWith("image/")?(0,el.jsx)("img",{src:m,alt:"Preview",crossOrigin:"anonymous"}):(0,el.jsx)("video",{controls:!0,src:m,crossOrigin:"anonymous"}),(0,el.jsx)(eh,{children:p.name})]})]}),(0,el.jsx)(Hp,{value:d,onChange:f,placeholder:"Adicione uma legenda... mencione usu\xe1rios com @"}),d&&(0,el.jsxs)(th,{children:[(0,el.jsx)(rh,{children:"Pr\xe9-visualiza\xe7\xe3o:"}),(0,el.jsx)("div",{style:{lineHeight:1.5},children:df(d,n)})]}),u&&(0,el.jsx)(Qp,{children:u}),(0,el.jsx)(Xp,{onClick:async()=>{if(p)if(d.length>500)c("A legenda n\xe3o pode ter mais de 500 caracteres");else{l(!0),c(null);try{const e=await ff(d);if(e.length>5)throw new Error("Voc\xea pode mencionar no m\xe1ximo 5 pessoas");const t=new FormData;t.append("media",p),t.append("caption",d),t.append("mentions",JSON.stringify(e));const r=await ka.post("/memes",t,{headers:{"Content-Type":"multipart/form-data"}});a(!0),setTimeout((()=>n(`/memes/${r.data._id}`)),2e3)}catch(Vv){var e,t;console.error("Upload failed:",Vv),c((null===(e=Vv.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||Vv.message||"Erro ao fazer upload")}finally{l(!1)}}else c("Selecione um arquivo para upload")},disabled:s||!p,children:s?(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)("span",{className:"spinner"}),"Enviando..."]}):"Publicar"})]})]})},oh=ro`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,ih=eo.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: var(--radius-md);
  background: var(--card-bg);
  box-shadow: var(--shadow-sm);
  position: relative;
  transition: var(--transition);
  margin-bottom: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`,ah=eo.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid var(--border-light);
  transition: var(--transition);

  ${ih}:hover & {
    transform: scale(1.05);
    border-color: var(--border);
  }
`,sh=eo.div`
  flex: 1;
  min-width: 0;
`,lh=eo(ot)`
  font-weight: 700;
  text-decoration: none;
  color: var(--text);
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: var(--transition);

  &:hover {
    color: var(--primary);
    text-decoration: none;
  }
`,uh=eo.p`
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ch=eo.button`
  padding: 6px 16px;
  border-radius: 20px;
  border: none;
  background: ${e=>e.$isFollowing?"var(--reply-bg)":"var(--secondary)"};
  color: ${e=>e.$isFollowing?"var(--text)":"var(--text-inverse)"};
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: ${e=>e.$isFollowing?"var(--input-bg)":"var(--secondary-hover)"};
    transform: translateY(-1px);
  }
`,dh=eo.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${e=>e.days>=365?"linear-gradient(135deg, #f39c12, #e67e22)":e.days>=180?"linear-gradient(135deg, #2ecc71, #27ae60)":e.days>=30?"linear-gradient(135deg, var(--secondary), var(--secondary-hover))":"linear-gradient(135deg, #9b59b6, #8e44ad)"};
  color: var(--text-inverse);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: var(--shadow-sm);
  z-index: 1;
  animation: ${oh} 2s infinite;
  border: 2px solid var(--card-bg);

  & > svg {
    font-size: 12px;
  }
`,fh=eo.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--card-bg);
  color: var(--text);
  padding: 10px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  width: 200px;
  box-shadow: var(--shadow-hover);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  z-index: 10;
  text-align: center;

  ${dh}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }
`,ph=e=>{var t,r;let{user:n,showFollowButton:i=!1}=e;const[a,s]=(0,o.useState)(!1),l=(()=>{if(null===n||void 0===n||!n.createdAt)return 0;try{const e=new Date(n.createdAt),t=new Date-e;return Math.max(1,Math.floor(t/864e5))}catch(e){return 1}})();return(0,el.jsxs)(ih,{children:[(0,el.jsxs)(dh,{days:l,children:[l>=365?(0,el.jsx)(Ul,{}):l>=180?(0,el.jsx)(fu,{}):l>=30?(0,el.jsx)(ku,{}):(0,el.jsx)(Wl,{}),l,"d",(0,el.jsxs)(fh,{children:[(0,el.jsx)("div",{style:{fontWeight:"bold",marginBottom:"3px"},children:l>=365?"Veterano":l>=180?"Experiente":l>=30?"Membro Ativo":"Novato"}),(0,el.jsxs)("div",{style:{fontSize:"11px",color:"var(--text-light)"},children:["Na plataforma h\xe1 ",l," dia",1!==l?"s":""]}),(0,el.jsxs)("div",{style:{fontSize:"10px",marginTop:"5px",color:"var(--text-lighter)",borderTop:"1px solid var(--border)",paddingTop:"5px"},children:["Desde ",new Date(n.createdAt).toLocaleDateString()]})]})]}),(0,el.jsx)(ah,{src:null!==(t=n.profile)&&void 0!==t&&t.avatar?(e=>{if(!e)return"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`})(n.profile.avatar):"https://i.pravatar.cc/150?img=3",alt:n.username,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3",e.target.onerror=null}}),(0,el.jsxs)(sh,{children:[(0,el.jsxs)(lh,{to:`/users/${n._id}`,children:["@",n.username]}),(0,el.jsx)(uh,{children:(null===(r=n.profile)||void 0===r?void 0:r.bio)||"Sem biografia ainda..."})]}),i&&(0,el.jsx)(ch,{$isFollowing:a,onClick:()=>s(!a),children:a?"Seguindo":"Seguir"})]})},hh=eo.div`
  margin-top: 20px;
`,mh=eo.h3`
  margin-bottom: 15px;
  color: var(--text);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,gh=eo.span`
  background: var(--primary);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
`,vh=e=>{let{userId:t}=e;const[r,n]=(0,o.useState)([]),[i,a]=(0,o.useState)(!0),[s,l]=(0,o.useState)(null);return(0,o.useEffect)((()=>{(async()=>{try{a(!0);const{data:e}=await ka.get(`/users/${t}/followers`);n(e.data)}catch(s){var e,r;l((null===(e=s.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message)||"Erro ao carregar seguidores")}finally{a(!1)}})()}),[t]),i?(0,el.jsx)("div",{children:"Carregando..."}):s?(0,el.jsx)("div",{children:s}):(0,el.jsxs)(hh,{children:[(0,el.jsxs)(mh,{children:["Seguidores",(0,el.jsx)(gh,{children:r.length})]}),r.length>0?r.map((e=>(0,el.jsx)(ph,{user:e.follower,showFollowButton:!0},e.follower._id))):(0,el.jsx)("p",{children:"Nenhum seguidor encontrado"})]})},yh=eo.div`
  margin-top: 20px;
`,bh=eo.h3`
  margin-bottom: 15px;
  color: var(--text);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,xh=eo.span`
  background: var(--secondary);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
`,wh=e=>{let{userId:t}=e;const[r,n]=(0,o.useState)([]),[i,a]=(0,o.useState)(!0),[s,l]=(0,o.useState)(null);return(0,o.useEffect)((()=>{(async()=>{try{a(!0);const{data:e}=await ka.get(`/users/${t}/following`);n(e.data)}catch(s){var e,r;l((null===(e=s.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message)||"Erro ao carregar pessoas seguidas")}finally{a(!1)}})()}),[t]),i?(0,el.jsx)("div",{children:"Carregando..."}):s?(0,el.jsx)("div",{children:s}):(0,el.jsxs)(yh,{children:[(0,el.jsxs)(bh,{children:["Seguindo",(0,el.jsx)(xh,{children:r.length})]}),r.length>0?r.map((e=>(0,el.jsx)(ph,{user:e.following,showFollowButton:!0},e.following._id))):(0,el.jsx)("p",{children:"N\xe3o est\xe1 seguindo ningu\xe9m"})]})},kh=ro`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,_h=ro`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Sh=ro`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,Eh=eo.div`
  position: relative;
  margin: 0 auto 20px auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--card-bg);
  box-shadow: var(--shadow);
  animation: ${kh} 0.6s ease-out;
  transition: var(--transition);
  max-width: 400px; // deixa mais estreito

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    border-radius: 0;
    margin-bottom: 10px;
    box-shadow: none;
    max-width: 100%;
  }
`,jh=eo.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${Sh} 1.5s infinite;
  border-radius: var(--radius-md);
`,Ch=eo.div`
  height: 180px;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  background-color: var(--background-light);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5));
  }

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`,Th=eo.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${e=>{let{$loaded:t}=e;return t?1:0}};

  @media (max-width: 768px) {
    object-position: center;
  }
`,Oh=eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -70px;
  position: relative;
  z-index: 2;
  padding: 0 15px 20px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: -60px;
    padding-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-top: -50px;
  }
`,Rh=eo.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid var(--card-bg);
  background: linear-gradient(135deg, var(--secondary), #9b59b6);
  box-shadow: var(--shadow);
  margin-bottom: 12px;
  transition: var(--transition);
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`,Ph=eo.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: var(--transition);
  opacity: ${e=>{let{$loaded:t}=e;return t?1:0}};

  @media (max-width: 768px) {
    object-position: center top;
  }
`,Ah=eo(jh)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,Lh=eo.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-inverse);
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`,Nh=eo.h1`
  margin: 8px 0 4px;
  font-size: 24px;
  font-weight: 800;
  color: var(--text); // Removido gradiente, cor padrão do texto
  letter-spacing: -0.5px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,zh=eo.p`
  margin: 0 auto;
  color: var(--text-light);
  max-width: 100%;
  line-height: 1.5;
  font-size: 14px;
  padding: 0 15px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0 10px;
  }
`,$h=eo.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
    margin: 15px 0;
  }
`,Mh=eo.div`
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  min-width: 70px;
  padding: 8px 10px;
  border-radius: var(--radius-md);
  background: var(--reply-bg);
  backdrop-filter: blur(5px);
  flex: 1;

  &:hover {
    transform: translateY(-3px);
    background: var(--input-bg);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    min-width: 60px;
    padding: 6px 8px;
  }

  @media (max-width: 480px) {
    min-width: 50px;
    padding: 5px;
  }
`,Ih=eo.div`
  font-weight: 800;
  font-size: 18px;
  color: var(--text);
  margin-bottom: 2px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Dh=eo.div`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-lighter);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`,Fh=eo.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${e=>e.days>=365?"linear-gradient(135deg, #f39c12, #e67e22)":e.days>=180?"linear-gradient(135deg, #2ecc71, #27ae60)":e.days>=30?"linear-gradient(135deg, var(--secondary), #2980b9)":"linear-gradient(135deg, #9b59b6, #8e44ad)"};
  color: var(--text-inverse);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: var(--shadow);
  z-index: 3;
  animation: ${_h} 2s infinite;
  border: 2px solid var(--card-bg);
  backdrop-filter: blur(5px);
  
  & > svg {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    top: 8px;
    left: 8px;
    font-size: 11px;
    padding: 4px 8px;
  }
`,Uh=eo.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--card-bg);
  color: var(--text);
  padding: 10px;
  border-radius: var(--radius-md);
  font-size: 12px;
  width: 180px;
  box-shadow: var(--shadow-hover);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  z-index: 10;
  text-align: center;

  ${Fh}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }
`,Bh=eo.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--input-bg);
  color: var(--text);
  border: none;
  padding: 10px 20px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  box-shadow: var(--shadow);
  font-size: 14px;
  
  &:hover {
    background: var(--comment-bg);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 13px;
    top: 10px;
    right: 10px;
    min-width: 120px;
    min-height: 44px;
  }
`,Wh=eo.button`
  margin-top: 15px;
  padding: 12px 25px;
  background: ${e=>e.$isFollowing?"linear-gradient(135deg, #e74c3c, #c0392b)":"linear-gradient(135deg, var(--secondary), var(--secondary-hover))"};
  color: var(--text-inverse);
  border: none;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  box-shadow: ${e=>e.$isFollowing?"0 4px 15px rgba(231, 76, 60, 0.3)":"var(--shadow)"};
  font-size: 14px;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.$isFollowing?"0 6px 20px rgba(231, 76, 60, 0.4)":"var(--shadow-hover)"};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0));
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
    min-width: 120px;
    min-height: 44px;
  }
`,Hh=eo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: ${kh} 0.3s ease-out;
`,qh=eo.div`
  background: var(--card-bg);
  color: var(--text);
  padding: 24px 12px;
  border-radius: var(--radius-lg);
  width: 95%;
  max-width: 00px; // menor largura máxima
  max-height: 70vh; // altura máxima menor
  overflow-y: auto; // scroll interno
  box-shadow: var(--shadow-hover);
  position: relative;
  animation: ${kh} 0.4s ease-out;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 85vh;
    border-radius: 0;
    padding: 16px 6px;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }
`,Vh=eo.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--reply-bg);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  font-size: 16px;
  color: var(--text);
  
  &:hover {
    background: var(--dislike-color);
    color: var(--text-inverse);
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`,Kh=eo.div`
  display: inline-block;
  animation: ${_h} 1.5s infinite ease-in-out;
  margin-left: 8px;
`,Yh=eo.div`
  @media (max-width: 768px) {
    padding: 10px;
    margin: -10px;
  }
`,Qh={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org",Xh=e=>{var t,r,n;let{user:i,isOwnProfile:a}=e;const[s,l]=(0,o.useState)(!1),[u,c]=(0,o.useState)(!1),[d,f]=(0,o.useState)(!1),[p,h]=(0,o.useState)(!1),[m,g]=(0,o.useState)(!1),{stats:v,loading:y,setStats:b}=(e=>{const[t,r]=(0,o.useState)({posts:0,followers:0,following:0}),[n,i]=(0,o.useState)(!0),[a,s]=(0,o.useState)(null);return(0,o.useEffect)((()=>{(async()=>{try{const{data:t}=await ka.get(`/users/${e}/stats`);r(t)}catch(Vv){var t,n;s((null===(t=Vv.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Erro ao carregar estat\xedsticas")}finally{i(!1)}})()}),[e]),{stats:t,loading:n,error:a,setStats:r}})(i._id),{isFollowing:x,loading:w,toggleFollow:k}=((e,t)=>{const[r,n]=(0,o.useState)(!1),[i,a]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{if(!t){const t=async()=>{try{const{data:t}=await ka.get(`/users/${e}/follow-status`);n(t.isFollowing)}catch(t){console.error("Erro ao verificar follow:",t)}};t()}}),[e,t]),{isFollowing:r,loading:i,toggleFollow:async()=>{a(!0);try{r?await ka.delete(`/users/${e}/unfollow`):await ka.post(`/users/${e}/follow`),n(!r)}catch(t){throw console.error("Erro ao alternar follow:",t),t}finally{a(!1)}}}})(i._id,a);(0,o.useEffect)((()=>{const e=()=>{g(window.innerWidth<=768||"ontouchstart"in window||navigator.maxTouchPoints)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const _=e=>{if(!e)return null;if(e.startsWith("http://"))return"https://"+e.substring(7);if(e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${Qh}${t}`},S=(()=>{if(null===i||void 0===i||!i.createdAt)return 1;const e=new Date(i.createdAt),t=new Date;return Math.max(1,Math.floor((t-e)/864e5))})(),E=()=>S>=365?"Veterano":S>=180?"Experiente":S>=30?"Membro Ativo":"conta_de_poucos_dias kkkkkkk",j=eo.div`
    margin: 6px 0 0 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-light);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    letter-spacing: 0.1px;

    @media (max-width: 768px) {
      font-size: 13px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  `;return(0,el.jsxs)(Eh,{children:[(0,el.jsxs)(Fh,{days:S,children:[S>=365?(0,el.jsx)(Ul,{}):S>=180?(0,el.jsx)(fu,{}):S>=30?(0,el.jsx)(ku,{}):(0,el.jsx)(Wl,{}),S," dias",(0,el.jsxs)(Uh,{children:[(0,el.jsx)("div",{style:{fontWeight:"bold",marginBottom:"5px",fontSize:"13px"},children:E()}),(0,el.jsxs)("div",{style:{fontSize:"11px",color:"var(--text-light)"},children:["Na plataforma h\xe1 ",S," dia",1!==S?"s":""]}),(0,el.jsxs)("div",{style:{fontSize:"10px",marginTop:"6px",color:"var(--text-lighter)",borderTop:"1px solid var(--border)",paddingTop:"6px"},children:["Desde ",new Date(i.createdAt).toLocaleDateString()]})]})]}),(0,el.jsxs)(Ch,{children:[!s&&(0,el.jsx)(jh,{style:{position:"absolute",width:"100%",height:"100%"}}),(0,el.jsx)(Th,{src:_(null===(t=i.profile)||void 0===t?void 0:t.coverPhoto)||`${Qh}/default-cover.jpg`,alt:"Capa do perfil",crossOrigin:"anonymous",$loaded:s,onLoad:()=>l(!0),onError:e=>{e.target.src=`${Qh}/default-cover.jpg`,l(!0)}})]}),(0,el.jsxs)(Oh,{children:[(0,el.jsxs)(Rh,{children:[!u&&(0,el.jsx)(Ah,{}),null!==(r=i.profile)&&void 0!==r&&r.avatar?(0,el.jsx)(Ph,{src:_(i.profile.avatar),alt:`Avatar de ${i.username}`,crossOrigin:"anonymous",$loaded:u,onLoad:()=>c(!0),onError:e=>{e.target.src="",e.target.parentNode.querySelector("div").style.display="flex",c(!0)}}):(0,el.jsx)(Lh,{children:(0,el.jsx)(bu,{})})]}),(0,el.jsx)(Nh,{children:i.username}),(0,el.jsxs)(j,{children:[E()," ",S>=365?"\ud83d\udc7f":S>=180?"\u2620\ufe0f":S>=30?"\ud83e\udd13":"\ud83d\ude02"]}),(0,el.jsx)(zh,{children:(null===(n=i.profile)||void 0===n?void 0:n.bio)||"Sem biografia ainda..."}),y?(0,el.jsx)($h,{children:[1,2,3].map((e=>(0,el.jsxs)(Mh,{children:[(0,el.jsx)(Ih,{as:jh,style:{width:"30px",height:"18px",margin:"0 auto"}}),(0,el.jsx)(Dh,{as:jh,style:{width:"50px",height:"12px",margin:"0 auto"}})]},e)))}):(0,el.jsxs)($h,{children:[(0,el.jsx)(Mh,{children:(0,el.jsxs)(Yh,{children:[(0,el.jsx)(Ih,{children:v.posts}),(0,el.jsx)(Dh,{children:"Posts"})]})}),(0,el.jsx)(Mh,{onClick:()=>f(!0),"aria-label":`Ver seguidores (${v.followers})`,children:(0,el.jsxs)(Yh,{children:[(0,el.jsx)(Ih,{children:v.followers}),(0,el.jsx)(Dh,{children:"Seguidores"})]})}),(0,el.jsx)(Mh,{onClick:()=>h(!0),"aria-label":`Ver seguindo (${v.following})`,children:(0,el.jsxs)(Yh,{children:[(0,el.jsx)(Ih,{children:v.following}),(0,el.jsx)(Dh,{children:"Seguindo"})]})})]}),!a&&(0,el.jsx)(Wh,{onClick:async()=>{try{const e=x;await k(),b((t=>({...t,followers:e?t.followers-1:t.followers+1})))}catch(e){console.error("Erro ao alternar follow:",e)}},disabled:w,$isFollowing:x,"aria-label":x?"Deixar de seguir":"Seguir usu\xe1rio",children:x?(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(vu,{})," Seguindo",w&&(0,el.jsx)(Kh,{children:(0,el.jsx)(su,{})})]}):(0,el.jsxs)(el.Fragment,{children:[(0,el.jsx)(yu,{})," Seguir",w&&(0,el.jsx)(Kh,{children:(0,el.jsx)(su,{})})]})})]}),a&&(0,el.jsxs)(Bh,{"aria-label":"Editar perfil",children:[(0,el.jsx)(Yl,{})," Editar Perfil"]}),d&&(0,el.jsx)(Hh,{onClick:()=>f(!1),children:(0,el.jsxs)(qh,{onClick:e=>e.stopPropagation(),children:[(0,el.jsx)(Vh,{onClick:()=>f(!1),"aria-label":"Fechar modal",children:"\xd7"}),(0,el.jsxs)("h2",{style:{marginBottom:"16px",color:"var(--text)",display:"flex",alignItems:"center",gap:"8px",fontSize:"1.1rem",fontWeight:700},children:[(0,el.jsx)(xu,{size:18})," Seguidores"]}),(0,el.jsx)(vh,{userId:i._id})]})}),p&&(0,el.jsx)(Hh,{onClick:()=>h(!1),children:(0,el.jsxs)(qh,{onClick:e=>e.stopPropagation(),children:[(0,el.jsx)(Vh,{onClick:()=>h(!1),"aria-label":"Fechar modal",children:"\xd7"}),(0,el.jsxs)("h2",{style:{marginBottom:"16px",color:"var(--text)",display:"flex",alignItems:"center",gap:"8px",fontSize:"1.1rem",fontWeight:700},children:[(0,el.jsx)(xu,{size:18})," Seguindo"]}),(0,el.jsx)(wh,{userId:i._id})]})})]})},Jh=eo.div`
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    padding-bottom: 2px; /* Space for scroll */
  }
`,Gh=eo.button`
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 2px solid ${e=>e.$active?"var(--primary)":"transparent"};
  color: ${e=>e.$active?"var(--primary)":"var(--text-light)"};
  font-weight: ${e=>e.$active?"600":"500"};
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
  flex-shrink: 0;
  position: relative;
  min-height: 44px; /* Minimum touch target size */

  &:hover {
    color: var(--primary);
    background: rgba(var(--primary-rgb), 0.05);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`,Zh=eo.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary);
  transform: scaleX(${e=>e.$active?1:0});
  transform-origin: left;
  transition: transform 0.3s ease;
`,em=e=>{let{activeTab:t,setActiveTab:r,showSettings:n=!1}=e;const o=[{id:"memes",label:"Posts"},{id:"likes",label:"seus Likes"},{id:"activity",label:"visitas"},...n?[{id:"settings",label:"configura\xe7oes"}]:[]];return(0,el.jsx)(Jh,{children:o.map((e=>(0,el.jsxs)(Gh,{$active:t===e.id,onClick:()=>r(e.id),"aria-label":e.label,"aria-selected":t===e.id,children:[e.label,(0,el.jsx)(Zh,{$active:t===e.id})]},e.id)))})};var tm={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function rm(e){var t=function(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return tm[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var nm=function(){return nm=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},nm.apply(this,arguments)},om=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},im=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,a="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(a,0),n}("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");const am=function(e){var t=e.loading,r=void 0===t||t,n=e.color,i=void 0===n?"#000000":n,a=e.speedMultiplier,s=void 0===a?1:a,l=e.cssOverride,u=void 0===l?{}:l,c=e.size,d=void 0===c?15:c,f=e.margin,p=void 0===f?2:f,h=om(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),m=nm({display:"inherit"},u),g=function(e){return{backgroundColor:i,width:rm(d),height:rm(d),margin:rm(p),borderRadius:"100%",display:"inline-block",animation:"".concat(im," ").concat(.75/s,"s ").concat(.12*e/s,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return r?o.createElement("span",nm({style:m},h),o.createElement("span",{style:g(1)}),o.createElement("span",{style:g(2)}),o.createElement("span",{style:g(3)})):null},sm=eo.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
`,lm=eo.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
  gap: 16px;
  padding: 0;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
`,um=eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 24px;
  background: ${e=>{let{theme:t}=e;return t.cardBg||"#f8f9fa"}};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 16px;

  svg {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
    color: ${e=>{let{theme:t}=e;return t.text||"#333"}};
  }

  p {
    font-size: 0.9rem;
    color: ${e=>{let{theme:t}=e;return t.textLight||"#666"}};
  }
`,cm=eo.h2`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t}=e;return t.text||"#333"}};
  margin: 0 16px 20px;
  padding-left: 12px;
  position: relative;
  font-weight: 600;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 3px;
    background: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    border-radius: 2px;
  }
`,dm=eo.div`
  .meme-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:active {
      transform: scale(0.98);
    }

    img {
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    .card-footer {
      padding: 12px;
      background: ${e=>{let{theme:t}=e;return t.cardBg||"#fff"}};

      h3 {
        font-size: 0.95rem;
        line-height: 1.3;
        margin-bottom: 8px;
      }

      .stats {
        font-size: 0.8rem;
      }
    }
  }
`,fm=()=>{const{userId:e}=ne(),{user:t}=nl(),[r,n]=(0,o.useState)([]),[i,a]=(0,o.useState)(!0),[s,l]=(0,o.useState)(null),u=e=>{n((t=>t.filter((t=>t._id!==e))))};(0,o.useEffect)((()=>{(async()=>{try{a(!0),l(null);const{data:t}=await ka.get(`/users/${e}/memes`),r=t.filter((e=>{const t=!e.isDeleted,r=e.author&&!e.author.isDeleted;return t&&r}));n(r)}catch(Vv){l("Falha ao carregar memes"),console.error("Erro ao buscar memes:",Vv)}finally{a(!1)}})()}),[e]);const c=async e=>{try{await ka.delete(`/memes/${e}`),u(e)}catch(s){var t,r,n;console.error("Erro ao deletar meme:",s),410===(null===(t=s.response)||void 0===t?void 0:t.status)&&u(e),alert((null===(r=s.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Erro ao deletar meme")}};return i?(0,el.jsx)(sm,{children:(0,el.jsxs)(um,{children:[(0,el.jsx)(am,{color:"#6c5ce7",size:15}),(0,el.jsx)("h3",{children:"Carregando memes..."}),(0,el.jsx)("p",{children:"Preparando as melhores piadas pra voc\xea"})]})}):s?(0,el.jsx)(sm,{children:(0,el.jsxs)(um,{children:[(0,el.jsx)(Pl,{}),(0,el.jsx)("h3",{children:"Oops! Algo deu errado"}),(0,el.jsx)("p",{children:s}),(0,el.jsx)("p",{children:"Tente recarregar a p\xe1gina"})]})}):0===r.length?(0,el.jsx)(sm,{children:(0,el.jsxs)(um,{children:[(0,el.jsx)(Al,{}),(0,el.jsx)("h3",{children:"Nenhum meme encontrado"}),(0,el.jsx)("p",{children:"Parece que este usu\xe1rio ainda n\xe3o criou memes"})]})}):(0,el.jsxs)(sm,{children:[(0,el.jsx)(cm,{children:"Posts"}),(0,el.jsx)(lm,{children:r.map((e=>{var r;return(0,el.jsx)(dm,{children:(0,el.jsx)(np,{meme:e,onDelete:c,isOwner:(null===t||void 0===t?void 0:t._id)===(null===(r=e.author)||void 0===r?void 0:r._id),className:"meme-card"})},e._id)}))})]})},pm=eo.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`,hm=eo.div`
  position: absolute;
  top: 40px;
  right: 5px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 3;
  min-width: 150px;
  transform-origin: top right;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`,mm=eo.button`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #ff4500;
  }

  svg {
    font-size: 14px;
  }
`,gm=e=>{let{memeId:t,onDelete:r}=e;const[n,i]=(0,o.useState)(!1);return(0,el.jsxs)("div",{style:{position:"relative"},children:[(0,el.jsx)(pm,{onClick:()=>i(!n),children:(0,el.jsx)(Tl,{size:14})}),n&&(0,el.jsx)(hm,{children:(0,el.jsxs)(mm,{onClick:async()=>{try{await ka.delete(`/memes/${t}`),r(t)}catch(Vv){console.error("Erro ao deletar meme:",Vv)}i(!1)},children:[(0,el.jsx)(Nl,{}),(0,el.jsx)("span",{children:"Deletar"})]})})]})},vm=eo(ot)`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
  background: #f5f5f5;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`,ym=eo.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`,bm=eo.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  border: none;
  background: #eee;
  display: block;
`,xm=eo.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  
  ${vm}:hover & {
    opacity: 1;
  }
`,wm=eo.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 69, 0, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`,km=eo.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
`,_m=e=>{let{meme:t,isOwner:r,onDelete:n}=e;const o=()=>{if(!t.mediaUrl)return"https://placehold.co/600x400?text=Imagem+n\xe3o+carregada";if(t.mediaUrl.startsWith("http"))return t.mediaUrl.replace(/^http:\/\//i,"https://");return`https://api.jokesteronline.org${t.mediaUrl.startsWith("/")?t.mediaUrl:`/${t.mediaUrl}`}`};return(0,el.jsxs)(vm,{to:`/memes/${t._id}`,children:[r&&(0,el.jsx)(gm,{memeId:t._id,onDelete:n,onClick:e=>e.preventDefault()}),"video"===t.mediaType?(0,el.jsx)(bm,{src:o(),alt:t.caption||"Meme video thumbnail",crossOrigin:"anonymous",preload:"metadata",muted:!0,playsInline:!0,onError:e=>{e.target.poster="https://placehold.co/600x400?text=Sem+thumbnail"}}):(0,el.jsx)(ym,{src:o(),alt:t.caption||"Meme thumbnail",crossOrigin:"anonymous",onError:e=>{e.target.src="https://placehold.co/600x400?text=Imagem+n\xe3o+carregada",e.target.onerror=null}}),"video"===t.mediaType&&(0,el.jsx)(xm,{children:(0,el.jsx)(wm,{children:(0,el.jsx)(Ol,{size:14})})}),t.isRepost&&(0,el.jsx)(km,{children:"Repost"})]})},Sm=eo.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Em=eo.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: var(--text-light);
  font-size: 1.1rem;
`,jm=e=>{let{userId:t}=e;const[r,n]=(0,o.useState)([]),[i,a]=(0,o.useState)(!0),[s,l]=(0,o.useState)(null),{user:u}=nl();(0,o.useEffect)((()=>{(async()=>{try{a(!0),l(null);const{data:e}=await ka.get(`/users/${t}/liked-memes`),r=Array.isArray(e)?e.filter((e=>{const t=!e.isDeleted,r=e.author&&!e.author.isDeleted;return t&&r})):[];n(r)}catch(s){var e;console.error("Error fetching liked memes:",s),l("Failed to load liked memes"),null===(e=s.response)||void 0===e||e.status}finally{a(!1)}})()}),[t,u]);const c=e=>{n((t=>t.filter((t=>t._id!==e))))};return i?(0,el.jsx)(Em,{children:"Loading liked memes..."}):s?(0,el.jsx)(Em,{children:s}):(0,el.jsx)(el.Fragment,{children:0===r.length?(0,el.jsx)(Em,{children:t===(null===u||void 0===u?void 0:u._id)?"You haven't liked any memes yet":"This user hasn't liked any memes"}):(0,el.jsx)(Sm,{children:r.map((e=>(0,el.jsx)(_m,{meme:e,onDelete:c},e._id)))})})},Cm=eo.div`
  margin-top: 20px;
`,Tm=eo.div`
  padding: 15px;
  border-bottom: 1px solid #eee;
`,Om=e=>{let{userId:t}=e;const[r,n]=(0,o.useState)([]),[i,a]=(0,o.useState)(!0);return(0,o.useEffect)((()=>{(async()=>{try{const{data:e}=await ka.get(`/users/${t}/activity`);n(e)}catch(e){console.error("Error fetching activities:",e)}finally{a(!1)}})()}),[t]),i?(0,el.jsx)("div",{children:"Loading activity..."}):(0,el.jsx)(Cm,{children:r.map((e=>(0,el.jsxs)(Tm,{children:[e.type,": ",e.content]},e._id)))})},Rm=(eo.div`
  margin-top: 25px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,eo.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`,eo.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`,eo(ot)`
  display: flex;
  align-items: center;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: all 0.2s;
  
  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,eo.div`
  position: relative;
  margin-right: 15px;
`,eo.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,eo.div`
  flex: 1;
`,eo.div`
  font-weight: 600;
  margin-bottom: 5px;
`,eo.div`
  font-size: 0.8rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
`,eo.div`
  text-align: center;
  padding: 30px;
  color: #666;
`,eo.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 0;
    min-height: 100vh;
    box-shadow: none;
  }
`),Pm=eo.h2`
  color: var(--primary);
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`,Am=eo.div`
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Lm=eo.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--text);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,Nm=eo.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  background: var(--input-bg);
  color: var(--text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 16px; // Evita zoom no iOS
  }
`,zm=eo.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  min-height: 120px;
  resize: vertical;
  font-size: 1rem;
  background: var(--input-bg);
  color: var(--text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }

  @media (max-width: 768px) {
    min-height: 100px;
    padding: 10px 12px;
    font-size: 16px; // Evita zoom no iOS
  }
`,$m=eo.div`
  position: relative;
  margin-bottom: 15px;
`,Mm=eo.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 2px dashed var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition);
  background: var(--reply-bg);

  &:hover {
    border-color: var(--primary);
    background: rgba(var(--primary-rgb), 0.05);
  }

  svg {
    margin-right: 8px;
    color: var(--primary);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`,Im=eo.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`,Dm=eo.div`
  position: relative;
  width: ${e=>e.$isAvatar?"120px":"100%"};
  height: ${e=>e.$isAvatar?"120px":"200px"};
  border-radius: ${e=>e.$isAvatar?"50%":"var(--radius-sm)"};
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    width: ${e=>e.$isAvatar?"100px":"100%"};
    height: ${e=>e.$isAvatar?"100px":"150px"};
  }
`,Fm=eo.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Um=eo.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(var(--primary-rgb), 0.9);
  border: none;
  color: var(--text-inverse);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: var(--transition);

  &:hover {
    background: var(--primary-hover);
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`,Bm=eo.button`
  width: 100%;
  padding: 14px;
  background: ${e=>e.disabled?"var(--border)":"var(--primary)"};
  color: var(--text-inverse);
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: var(--radius-sm);
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: var(--transition);
  margin-top: 10px;

  &:hover {
    background: ${e=>e.disabled?"var(--border)":"var(--primary-hover)"};
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 1rem;
    position: sticky;
    bottom: 20px;
  }
`,Wm=eo.div`
  color: var(--dislike-color);
  margin-top: 10px;
  font-size: 0.9rem;
`,Hm=eo.div`
  color: var(--success);
  margin-top: 10px;
  font-size: 0.9rem;
`,qm=e=>{var t,r,n,i,a,s,l;let{user:u}=e;const[c,d]=(0,o.useState)({bio:(null===(t=u.profile)||void 0===t?void 0:t.bio)||""}),[f,p]=(0,o.useState)(null),[h,m]=(0,o.useState)(null),[g,v]=(0,o.useState)((null===(r=u.profile)||void 0===r?void 0:r.avatar)||""),[y,b]=(0,o.useState)((null===(n=u.profile)||void 0===n?void 0:n.coverPhoto)||""),[x,w]=(0,o.useState)(!1),[k,_]=(0,o.useState)(""),[S,E]=(0,o.useState)(""),{updateUser:j}=nl();(0,o.useEffect)((()=>()=>{g&&g.startsWith("blob:")&&URL.revokeObjectURL(g),y&&y.startsWith("blob:")&&URL.revokeObjectURL(y)}),[g,y]);return(0,el.jsxs)(Rm,{children:[(0,el.jsx)(Pm,{children:"Configura\xe7\xf5es do Perfil"}),(0,el.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),w(!0),_(""),E("");try{const e=new FormData;f&&e.append("avatar",f),h&&e.append("coverPhoto",h),e.append("bio",c.bio);const{data:t}=await ka.put("/users/profile",e,{headers:{"Content-Type":"multipart/form-data"}});j(t),E("Perfil atualizado com sucesso!"),setTimeout((()=>E("")),3e3)}catch(k){var t,r;console.error("Error updating profile:",k),_((null===(t=k.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Falha ao atualizar o perfil")}finally{w(!1)}},children:[(0,el.jsxs)(Am,{children:[(0,el.jsx)(Lm,{children:"Biografia"}),(0,el.jsx)(zm,{value:c.bio,onChange:e=>d({...c,bio:e.target.value}),placeholder:"Conte um pouco sobre voc\xea..."})]}),(0,el.jsxs)(Am,{children:[(0,el.jsx)(Lm,{children:"Foto de Perfil"}),(0,el.jsx)($m,{children:(0,el.jsxs)(Mm,{children:[(0,el.jsx)(gu,{size:18}),f?"Imagem selecionada":"Selecionar imagem",(0,el.jsx)(Nm,{type:"file",accept:"image/*",onChange:e=>{const t=e.target.files[0];t&&(t.type.startsWith("image/")?t.size>2097152?_("A imagem de perfil deve ter menos de 2MB"):(p(t),v(URL.createObjectURL(t)),_("")):_("Por favor, selecione um arquivo de imagem v\xe1lido"))},style:{display:"none"}})]})}),(g||(null===(i=u.profile)||void 0===i?void 0:i.avatar))&&(0,el.jsx)(Im,{children:(0,el.jsxs)(Dm,{$isAvatar:!0,children:[(0,el.jsx)(Fm,{src:g||(null===(a=u.profile)||void 0===a?void 0:a.avatar),alt:"Preview da foto de perfil",crossOrigin:"anonymous"}),f&&(0,el.jsx)(Um,{onClick:()=>{var e;p(null),v((null===(e=u.profile)||void 0===e?void 0:e.avatar)||"")},children:(0,el.jsx)(wu,{size:16})})]})})]}),(0,el.jsxs)(Am,{children:[(0,el.jsx)(Lm,{children:"Foto de Capa"}),(0,el.jsx)($m,{children:(0,el.jsxs)(Mm,{children:[(0,el.jsx)(gu,{size:18}),h?"Imagem selecionada":"Selecionar imagem",(0,el.jsx)(Nm,{type:"file",accept:"image/*",onChange:e=>{const t=e.target.files[0];t&&(t.type.startsWith("image/")?t.size>5242880?_("A imagem de capa deve ter menos de 5MB"):(m(t),b(URL.createObjectURL(t)),_("")):_("Por favor, selecione um arquivo de imagem v\xe1lido"))},style:{display:"none"},crossOrigin:"anonymous"})]})}),(y||(null===(s=u.profile)||void 0===s?void 0:s.coverPhoto))&&(0,el.jsx)(Im,{children:(0,el.jsxs)(Dm,{children:[(0,el.jsx)(Fm,{src:y||(null===(l=u.profile)||void 0===l?void 0:l.coverPhoto),alt:"Preview da foto de capa"}),h&&(0,el.jsx)(Um,{onClick:()=>{var e;m(null),b((null===(e=u.profile)||void 0===e?void 0:e.coverPhoto)||"")},children:(0,el.jsx)(wu,{size:16})})]})})]}),k&&(0,el.jsx)(Wm,{children:k}),S&&(0,el.jsx)(Hm,{children:S}),(0,el.jsx)(Bm,{type:"submit",disabled:x,children:x?"Salvando...":"Salvar Altera\xe7\xf5es"})]})]})},Vm=ro`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Km=ro`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Ym=eo.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px; // Reduzido de 20px
  animation: ${Vm} 0.5s ease-out;
  background-color: var(--background);
  min-height: calc(100vh - 50px); // Ajustado para altura do navbar

  @media (max-width: 768px) {
    padding: 0;
    max-width: 100%;
  }
`,Qm=eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;

  @media (max-width: 768px) {
    height: 70vh;
  }
`,Xm=eo.div`
  animation: ${Km} 1s linear infinite;
  font-size: 40px;
  color: var(--primary);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`,Jm=eo.p`
  font-size: 18px;
  color: var(--text-light);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Gm=eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
  text-align: center;

  @media (max-width: 768px) {
    height: 70vh;
    padding: 0 20px;
  }
`,Zm=eo.p`
  font-size: 18px;
  color: var(--dislike-color);
  font-weight: 500;
  max-width: 80%;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 90%;
  }
`,eg=eo.button`
  padding: 12px 25px;
  background: var(--primary);
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`,tg=eo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;

  @media (max-width: 768px) {
    height: 70vh;
    padding: 0 20px;
  }
`,rg=eo.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`,ng=eo.div`
  margin-top: 15px; // Reduzido de 30px
  animation: ${Vm} 0.6s ease-out;
  padding-bottom: 20px; // Reduzido de 60px

  @media (max-width: 768px) {
    margin-top: 10px;
    padding: 0 10px 20px; // Reduzido padding
  }
`,og=()=>{const{userId:e}=ne(),{user:t}=nl(),{theme:r}=cl(),[n,i]=(0,o.useState)({user:null,stats:{posts:0,followers:0,following:0},isFollowing:!1}),[a,s]=(0,o.useState)("memes"),[l,u]=(0,o.useState)(!0),[c,d]=(0,o.useState)(null),[f,p]=(0,o.useState)(0);(0,o.useEffect)((()=>{(async()=>{try{u(!0),d(null);const[r,n,o]=await Promise.all([ka.get(`/users/${e}`),ka.get(`/users/${e}/stats`),t?ka.get(`/users/${e}/follow-status`):Promise.resolve({data:{isFollowing:!1}})]);i({user:r.data,stats:n.data.data,isFollowing:o.data.isFollowing})}catch(c){console.error("Error fetching profile data:",c),d(c)}finally{u(!1)}})()}),[e,t,f]);const h=()=>{p((e=>e+1))};return l?(0,el.jsxs)(Qm,{children:[(0,el.jsx)(Xm,{children:(0,el.jsx)(Jl,{})}),(0,el.jsx)(Jm,{children:"Loading profile..."})]}):c?(0,el.jsxs)(Gm,{children:[(0,el.jsxs)(Zm,{children:["Error loading profile. ",c.message||"Please try again."]}),(0,el.jsxs)(eg,{onClick:h,children:[(0,el.jsx)(Jl,{})," Retry"]})]}):n.user||l?(0,el.jsxs)(Ym,{children:[(0,el.jsx)(Xh,{user:n.user,stats:n.stats,isFollowing:n.isFollowing,onFollowToggle:async()=>{try{n.isFollowing?await ka.delete(`/users/${e}/unfollow`):await ka.post(`/users/${e}/follow`);const[t,r]=await Promise.all([ka.get(`/users/${e}/stats`),ka.get(`/users/${e}/follow-status`)]);i((e=>({...e,stats:t.data.data,isFollowing:r.data.isFollowing})))}catch(c){console.error("Error updating follow status:",c)}},isCurrentUser:(null===t||void 0===t?void 0:t._id)===e}),(0,el.jsxs)(ng,{children:[(0,el.jsx)(em,{activeTab:a,setActiveTab:s,showSettings:(null===t||void 0===t?void 0:t._id)===e}),"memes"===a&&(0,el.jsx)(fm,{userId:e}),"likes"===a&&(0,el.jsx)(jm,{userId:e}),"activity"===a&&(0,el.jsx)(Om,{userId:e}),"followers"===a&&(0,el.jsx)(UserFollowers,{userId:e,followersCount:n.stats.followers}),"following"===a&&(0,el.jsx)(UserFollowing,{userId:e,followingCount:n.stats.following}),"settings"===a&&(null===t||void 0===t?void 0:t._id)===e&&(0,el.jsx)(qm,{user:n.user})]})]}):(0,el.jsx)(tg,{children:(0,el.jsx)(rg,{children:"User not found"})})};var ig=n(173),ag=n.n(ig),sg=n(161),lg=n.n(sg),ug=n(366),cg=n.n(ug),dg=n(123),fg=n.n(dg),pg="bodyAttributes",hg="htmlAttributes",mg="titleAttributes",gg={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},vg=(Object.keys(gg).map((function(e){return gg[e]})),"charset"),yg="cssText",bg="href",xg="http-equiv",wg="innerHTML",kg="itemprop",_g="name",Sg="property",Eg="rel",jg="src",Cg="target",Tg={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Og="defaultTitle",Rg="defer",Pg="encodeSpecialCharacters",Ag="onChangeClientState",Lg="titleTemplate",Ng=Object.keys(Tg).reduce((function(e,t){return e[Tg[t]]=t,e}),{}),zg=[gg.NOSCRIPT,gg.SCRIPT,gg.STYLE],$g="data-react-helmet",Mg="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ig=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Dg=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fg=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Ug=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Bg=function(e){var t=Kg(e,gg.TITLE),r=Kg(e,Lg);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Kg(e,Og);return t||n||void 0},Wg=function(e){return Kg(e,Ag)||function(){}},Hg=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Dg({},e,t)}),{})},qg=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[gg.BASE]})).map((function(e){return e[gg.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Vg=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&Gg("Helmet: "+e+' should be of type "Array". Instead found type "'+Mg(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();-1===t.indexOf(l)||r===Eg&&"canonical"===e[r].toLowerCase()||l===Eg&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==wg&&s!==yg&&s!==kg||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=fg()({},n[s],o[s]);n[s]=l}return e}),[]).reverse()},Kg=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Yg=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){Yg(t)}),0)}}(),Qg=function(e){return clearTimeout(e)},Xg="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Yg:n.g.requestAnimationFrame||Yg,Jg="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Qg:n.g.cancelAnimationFrame||Qg,Gg=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},Zg=null,ev=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,d=e.title,f=e.titleAttributes;nv(gg.BODY,n),nv(gg.HTML,o),rv(d,f);var p={baseTag:ov(gg.BASE,r),linkTags:ov(gg.LINK,i),metaTags:ov(gg.META,a),noscriptTags:ov(gg.NOSCRIPT,s),scriptTags:ov(gg.SCRIPT,u),styleTags:ov(gg.STYLE,c)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,h,m)},tv=function(e){return Array.isArray(e)?e.join(""):e},rv=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=tv(e)),nv(gg.TITLE,t)},nv=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute($g),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var c=i.indexOf(l);-1!==c&&i.splice(c,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);o.length===i.length?r.removeAttribute($g):r.getAttribute($g)!==a.join(",")&&r.setAttribute($g,a.join(","))}},ov=function(e,t){var r=document.head||document.querySelector(gg.HEAD),n=r.querySelectorAll(e+"["+$g+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===wg)r.innerHTML=t.innerHTML;else if(n===yg)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute($g,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},iv=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},av=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Tg[r]||r]=e[r],t}),t)},sv=function(e,t,r){switch(e){case gg.TITLE:return{toComponent:function(){return function(e,t,r){var n,i=((n={key:t})[$g]=!0,n),a=av(r,i);return[o.createElement(gg.TITLE,a,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=iv(r),i=tv(t);return o?"<"+e+" "+$g+'="true" '+o+">"+Ug(i,n)+"</"+e+">":"<"+e+" "+$g+'="true">'+Ug(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case pg:case hg:return{toComponent:function(){return av(t)},toString:function(){return iv(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[$g]=!0,n);return Object.keys(t).forEach((function(e){var r=Tg[e]||e;if(r===wg||r===yg){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),o.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===wg||e===yg)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+Ug(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===zg.indexOf(e);return t+"<"+e+" "+$g+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},lv=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,c=e.title,d=void 0===c?"":c,f=e.titleAttributes;return{base:sv(gg.BASE,t,n),bodyAttributes:sv(pg,r,n),htmlAttributes:sv(hg,o,n),link:sv(gg.LINK,i,n),meta:sv(gg.META,a,n),noscript:sv(gg.NOSCRIPT,s,n),script:sv(gg.SCRIPT,l,n),style:sv(gg.STYLE,u,n),title:sv(gg.TITLE,{title:d,titleAttributes:f},n)}},uv=function(e){var t,r;return r=t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!cg()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case gg.SCRIPT:case gg.NOSCRIPT:return{innerHTML:t};case gg.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Dg({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Dg({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case gg.TITLE:return Dg({},o,((t={})[n.type]=a,t.titleAttributes=Dg({},i),t));case gg.BODY:return Dg({},o,{bodyAttributes:Dg({},i)});case gg.HTML:return Dg({},o,{htmlAttributes:Dg({},i)})}return Dg({},o,((r={})[n.type]=Dg({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Dg({},t);return Object.keys(e).forEach((function(t){var n;r=Dg({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Ng[r]||r]=e[r],t}),t)}(Fg(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case gg.LINK:case gg.META:case gg.NOSCRIPT:case gg.SCRIPT:case gg.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=Fg(t,["children"]),i=Dg({},n);return r&&(i=this.mapChildrenToProps(r,i)),o.createElement(e,i)},Ig(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(o.Component),t.propTypes={base:ag().object,bodyAttributes:ag().object,children:ag().oneOfType([ag().arrayOf(ag().node),ag().node]),defaultTitle:ag().string,defer:ag().bool,encodeSpecialCharacters:ag().bool,htmlAttributes:ag().object,link:ag().arrayOf(ag().object),meta:ag().arrayOf(ag().object),noscript:ag().arrayOf(ag().object),onChangeClientState:ag().func,script:ag().arrayOf(ag().object),style:ag().arrayOf(ag().object),title:ag().string,titleAttributes:ag().object,titleTemplate:ag().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=lv({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(lg()((function(e){return{baseTag:qg([bg,Cg],e),bodyAttributes:Hg(pg,e),defer:Kg(e,Rg),encode:Kg(e,Pg),htmlAttributes:Hg(hg,e),linkTags:Vg(gg.LINK,[Eg,bg],e),metaTags:Vg(gg.META,[_g,vg,xg,Sg,kg],e),noscriptTags:Vg(gg.NOSCRIPT,[wg],e),onChangeClientState:Wg(e),scriptTags:Vg(gg.SCRIPT,[jg,wg],e),styleTags:Vg(gg.STYLE,[yg],e),title:Bg(e),titleAttributes:Hg(mg,e)}}),(function(e){Zg&&Jg(Zg),e.defer?Zg=Xg((function(){ev(e,(function(){Zg=null}))})):(ev(e),Zg=null)}),lv)((function(){return null})));uv.renderStatic=uv.rewind;!function(e){if(!e||"undefined"==typeof document)return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n');var cv=e=>"number"==typeof e&&!isNaN(e),dv=e=>"string"==typeof e,fv=e=>"function"==typeof e,pv=e=>(0,o.isValidElement)(e)||dv(e)||fv(e)||cv(e);function hv(e){let{enter:t,exit:r,appendPosition:n=!1,collapse:i=!0,collapseDuration:a=300}=e;return function(e){let{children:s,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f,playToast:p}=e,h=n?`${t}--${l}`:t,m=n?`${r}--${l}`:r,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)((()=>{let e=d.current,t=h.split(" "),r=n=>{n.target===d.current&&(p(),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,{scrollHeight:n,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)}))}))}(e,c,a):c()};f||(u?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))}),[f]),o.createElement(o.Fragment,null,s)}}var mv=1,gv=()=>""+mv++;var vv=new Map,yv=[],bv=new Set,xv=()=>vv.size>0;function wv(e,t){var r;if(t)return!(null==(r=vv.get(t))||!r.isToastActive(e));let n=!1;return vv.forEach((t=>{t.isToastActive(e)&&(n=!0)})),n}function kv(e){if(xv()){if(null==e||(e=>dv(e)||cv(e))(e))vv.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){let t=vv.get(e.containerId);t?t.removeToast(e.id):vv.forEach((t=>{t.removeToast(e.id)}))}}else yv=yv.filter((t=>null!=e&&t.options.toastId!==e))}function _v(e,t){pv(e)&&(xv()||yv.push({content:e,options:t}),vv.forEach((r=>{r.buildToast(e,t)})))}function Sv(e,t){vv.forEach((r=>{(null==t||null==t||!t.containerId||(null==t?void 0:t.containerId)===r.id)&&r.toggle(e,null==t?void 0:t.id)}))}function Ev(e){return e&&(dv(e.toastId)||cv(e.toastId))?e.toastId:gv()}function jv(e,t){return _v(e,t),t.toastId}function Cv(e,t){return{...t,type:t&&t.type||e,toastId:Ev(t)}}function Tv(e){return(t,r)=>jv(t,Cv(e,r))}function Ov(e,t){return jv(e,Cv("default",t))}Ov.loading=(e,t)=>jv(e,Cv("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Ov.promise=function(e,t,r){let n,{pending:o,error:i,success:a}=t;o&&(n=dv(o)?Ov.loading(o,r):Ov.loading(o.render,{...r,...o}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void Ov.dismiss(n);let i={type:e,...s,...r,data:o},a=dv(t)?{render:t}:t;return n?Ov.update(n,{...i,...a}):Ov(a.render,{...i,...a}),o},u=fv(e)?e():e;return u.then((e=>l("success",a,e))).catch((e=>l("error",i,e))),u},Ov.success=Tv("success"),Ov.info=Tv("info"),Ov.error=Tv("error"),Ov.warning=Tv("warning"),Ov.warn=Ov.warning,Ov.dark=(e,t)=>jv(e,Cv("default",{theme:"dark",...t})),Ov.dismiss=function(e){kv(e)},Ov.clearWaitingQueue=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};vv.forEach((t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()}))},Ov.isActive=wv,Ov.update=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=((e,t)=>{let{containerId:r}=t;var n;return null==(n=vv.get(r||1))?void 0:n.toasts.get(e)})(e,t);if(r){let{props:n,content:o}=r,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:gv()};i.toastId!==e&&(i.staleId=e);let a=i.render||o;delete i.render,jv(a,i)}},Ov.done=e=>{Ov.update(e,{progress:1})},Ov.onChange=function(e){return bv.add(e),()=>{bv.delete(e)}},Ov.play=e=>Sv(!0,e),Ov.pause=e=>Sv(!1,e);"undefined"!=typeof window?o.useLayoutEffect:o.useEffect;var Rv=function(e){return{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}};hv(Rv("bounce",!0)),hv(Rv("slide",!0)),hv(Rv("zoom")),hv(Rv("flip"));const Pv=e=>{if(!e)return console.warn("URL is empty or undefined"),"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`},Av=eo.div`
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 4px solid var(--danger);
  color: var(--danger);
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Lv=eo.p`
  margin: 0;
  flex: 1;
`,Nv=eo.button`
  background: none;
  border: none;
  color: var(--danger);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);

  &:hover {
    background: rgba(255, 0, 0, 0.1);
  }
`,zv=e=>{let{message:t,onRetry:r}=e;return(0,el.jsxs)(Av,{children:[(0,el.jsx)(Dl,{size:20}),(0,el.jsx)(Lv,{children:t||"Ocorreu um erro inesperado"}),r&&(0,el.jsxs)(Nv,{onClick:r,children:[(0,el.jsx)(Rl,{size:14}),"Tentar novamente"]})]})},$v=eo.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--background);
  color: var(--text);
`,Mv=eo.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  background: var(--background);
  z-index: 10;
  padding-top: 10px;
`,Iv=eo.button`
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  margin-right: 15px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 69, 0, 0.1);
  }
`,Dv=()=>{var e,t;const{id:r}=ne(),n=re(),{user:i}=nl(),[a,s]=(0,o.useState)(null),[l,u]=(0,o.useState)(!0),[c,d]=(0,o.useState)(null),[f,p]=(0,o.useState)(!1),[h,m]=(0,o.useState)(!1),g=(0,o.useCallback)((async()=>{try{u(!0);const e=await ka.get(`/memes/${r}`);s(e.data)}catch(Vv){var e,t,n,o;console.error("Erro ao carregar meme:",Vv),d((null===(e=Vv.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Meme n\xe3o encontrado"),Ov.error((null===(n=Vv.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||"Erro ao carregar meme")}finally{u(!1)}}),[r]),v=(0,o.useCallback)((async()=>{try{m(!0),await ka.delete(`/memes/${r}`),Ov.success("Meme deletado com sucesso!"),n("/")}catch(Vv){var e,t;console.error("Erro ao deletar meme:",Vv),Ov.error((null===(e=Vv.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Erro ao deletar meme")}finally{m(!1),p(!1)}}),[r,n]);return(0,o.useEffect)((()=>{g()}),[g]),l?(0,el.jsx)($v,{children:(0,el.jsx)(Ml,{})}):c?(0,el.jsx)($v,{children:(0,el.jsx)(zv,{message:c,onRetry:g})}):a?(0,el.jsxs)(el.Fragment,{children:[(0,el.jsxs)(uv,{children:[(0,el.jsxs)("title",{children:[a.caption?`${a.caption.substring(0,60)}...`:"Visualizar Meme"," | iFunny Clone"]}),(0,el.jsx)("meta",{name:"description",content:`Meme postado por @${null===(e=a.author)||void 0===e?void 0:e.username}`}),(0,el.jsx)("meta",{property:"og:title",content:a.caption||"Meme interessante"}),(0,el.jsx)("meta",{property:"og:description",content:`Meme postado por @${null===(t=a.author)||void 0===t?void 0:t.username}`}),(0,el.jsx)("meta",{property:"og:image",content:Pv(a.mediaUrl)}),(0,el.jsx)("meta",{property:"og:url",content:`${window.location.origin}/memes/${a._id}`})]}),(0,el.jsxs)($v,{children:[(0,el.jsx)(Mv,{children:(0,el.jsx)(Iv,{onClick:()=>n(-1),"aria-label":"Voltar",children:(0,el.jsx)(Fl,{})})}),(0,el.jsx)(np,{meme:a,onDelete:v,showCommentsInitially:!0})]})]}):(0,el.jsx)($v,{children:(0,el.jsx)(zv,{message:"Meme n\xe3o encontrado"})})},Fv=eo.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--background);
`,Uv=eo.main`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: calc(60px + env(safe-area-inset-top)); // Navbar + status bar
  padding-bottom: env(safe-area-inset-bottom);
  scroll-behavior: smooth;
`,Bv=eo.div`
  height: var(--keyboard-height, 0px);
  transition: height 0.3s ease;
`,Wv=eo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-top: env(safe-area-inset-top);
  background: var(--navbar-bg); // Usa a mesma variável que o Navbar
`;const Hv=function(){const[e,t]=(0,o.useState)(!0),r=(0,o.useRef)(0),n=(0,o.useRef)(),i=(0,o.useRef)(null),a=(0,o.useCallback)((()=>{var e;const o=(null===(e=n.current)||void 0===e?void 0:e.scrollTop)||0,a=o>r.current?"down":"up",s=Math.abs(o-r.current);i.current&&clearTimeout(i.current),s>5&&("down"===a&&o>60?t(!1):"up"===a&&t(!0)),r.current=o,i.current=setTimeout((()=>{i.current=null}),100)}),[]);return(0,o.useEffect)((()=>{const e=n.current;if(e)return e.addEventListener("scroll",a,{passive:!0}),()=>e.removeEventListener("scroll",a)}),[a]),(0,o.useEffect)((()=>(al.Ii.isNativePlatform()&&(sl.setBackgroundColor({color:"#FF6B00"}).catch(console.error),sl.setStyle({style:ol.Light}).catch(console.error),sl.setOverlaysWebView({overlay:!1}).catch(console.error),"web"!==al.Ii.getPlatform()&&(id.setAccessoryBarVisible({isVisible:!0}),id.addListener("keyboardWillShow",(e=>{document.documentElement.style.setProperty("--keyboard-height",`${e.keyboardHeight}px`)})),id.addListener("keyboardWillHide",(()=>{document.documentElement.style.setProperty("--keyboard-height","0px")})))),()=>{"web"!==al.Ii.getPlatform()&&id.removeAllListeners()})),[]),(0,el.jsx)(rl,{children:(0,el.jsx)(hl,{children:(0,el.jsx)(rt,{children:(0,el.jsxs)(ul,{children:[(0,el.jsx)(no,{}),(0,el.jsxs)(Fv,{children:[(0,el.jsx)(Wv,{children:(0,el.jsx)(rd,{navbarVisible:e})}),(0,el.jsx)(Uv,{ref:n,children:(0,el.jsxs)(we,{children:[(0,el.jsx)(be,{path:"/",element:(0,el.jsx)(hp,{})}),(0,el.jsx)(be,{path:"/memes/:id",element:(0,el.jsx)(Dv,{})}),(0,el.jsx)(be,{path:"/login",element:(0,el.jsx)(kp,{})}),(0,el.jsx)(be,{path:"/register",element:(0,el.jsx)(Pp,{})}),(0,el.jsx)(be,{path:"/users/:userId",element:(0,el.jsx)(og,{})}),(0,el.jsx)(be,{path:"/trending",element:(0,el.jsx)(pp,{})}),(0,el.jsx)(be,{path:"/feed",element:(0,el.jsx)(Il,{children:(0,el.jsx)(Ip,{})})}),(0,el.jsx)(be,{path:"/upload",element:(0,el.jsx)(Il,{children:(0,el.jsx)(nh,{})})}),(0,el.jsx)(be,{path:"*",element:(0,el.jsx)(ye,{to:"/"})})]})}),al.Ii.isNativePlatform()&&(0,el.jsx)(Bv,{})]})]})})})})},qv=document.getElementById("root");(0,i.H)(qv).render((0,el.jsx)(o.StrictMode,{children:(0,el.jsx)(Hv,{})}))})()})();
//# sourceMappingURL=main.3c7dd4cd.js.map