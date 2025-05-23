/*! For license information please see main.79b0803e.js.LICENSE.txt */
(()=>{var e={43:(e,t,r)=>{"use strict";e.exports=r(202)},123:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var c=0;c<a.length;c++)n.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}},153:(e,t,r)=>{"use strict";var n=r(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},161:(e,t,r)=>{"use strict";var n,o=r(43),i=(n=o)&&"object"===typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function c(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),c()},a.componentDidUpdate=function(){c()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(d,"canUseDOM",s),d}}},173:(e,t,r)=>{e.exports=r(497)()},175:(e,t)=>{"use strict";const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,r){do{const r=e.charCodeAt(t);if(32!==r&&9!==r)return t}while(++t<r);return r}function u(e,t,r){for(;t>r;){const r=e.charCodeAt(--t);if(32!==r&&9!==r)return t+1}return r}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function y(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return a=a(l=e),e=""===i?"."+T(l,0):i,w(a)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),O(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+T(s=e[u],u);l+=O(s,t,o,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=O(s=s.value,t,o,c=i+T(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function R(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},L={transition:null},$={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)_.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,o=e[n];if(!(0<i(o,t)))break e;e[n]=t,e[r]=o,r=n}}function n(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length,a=o>>>1;n<a;){var s=2*(n+1)-1,l=e[s],u=s+1,c=e[u];if(0>i(l,r))u<o&&0>i(c,l)?(e[n]=c,e[u]=r,n=u):(e[n]=l,e[s]=r,n=s);else{if(!(u<o&&0>i(c,r)))break e;e[n]=c,e[u]=r,n=u}}}return t}function i(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=n(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,r(u,t)}t=n(c)}}function w(e){if(g=!1,x(e),!m)if(null!==n(u))m=!0,L(_);else{var t=n(c);null!==t&&$(w,t.startTime-e)}}function _(e,r){m=!1,g&&(g=!1,y(C),C=-1),h=!0;var i=p;try{for(x(r),f=n(u);null!==f&&(!(f.expirationTime>r)||e&&!O());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var s=a(f.expirationTime<=r);r=t.unstable_now(),"function"===typeof s?f.callback=s:f===n(u)&&o(u),x(r)}else o(u);f=n(u)}if(null!==f)var l=!0;else{var d=n(c);null!==d&&$(w,d.startTime-r),l=!1}return l}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,S=!1,E=null,C=-1,j=5,T=-1;function O(){return!(t.unstable_now()-T<j)}function R(){if(null!==E){var e=t.unstable_now();T=e;var r=!0;try{r=E(!0,e)}finally{r?k():(S=!1,E=null)}}else S=!1}if("function"===typeof b)k=function(){b(R)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,P=A.port2;A.port1.onmessage=R,k=function(){P.postMessage(null)}}else k=function(){v(R,0)};function L(e){E=e,S||(S=!0,k())}function $(e,r){C=v((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,L(_))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var r=p;p=t;try{return e()}finally{p=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=p;p=e;try{return t()}finally{p=r}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,r(c,e),null===n(u)&&e===n(c)&&(g?(y(C),C=-1):g=!0,$(w,i-a))):(e.sortIndex=s,r(u,e),m||h||(m=!0,L(_))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=p;return function(){var r=p;p=t;try{return e.apply(this,arguments)}finally{p=r}}}},324:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(o=r?r.call(n,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},366:e=>{var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},391:(e,t,r)=>{"use strict";var n=r(950);t.H=n.createRoot,n.hydrateRoot},403:(e,t,r)=>{"use strict";var n;r.d(t,{E_:()=>l,F3:()=>s,Ii:()=>a}),function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(n||(n={}));class o extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const i=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},i=r.Plugins=r.Plugins||{},a=()=>null!==t?t.name:(e=>{var t,r;return(null===e||void 0===e?void 0:e.androidBridge)?"android":(null===(r=null===(t=null===e||void 0===e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===r?void 0:r.bridge)?"ios":"web"})(e),s=e=>{var t;return null===(t=r.PluginHeaders)||void 0===t?void 0:t.find((t=>t.name===e))},l=new Map;return r.convertFileSrc||(r.convertFileSrc=e=>e),r.getPlatform=a,r.handleError=t=>e.console.error(t),r.isNativePlatform=()=>"web"!==a(),r.isPluginAvailable=e=>{const t=l.get(e);return!!(null===t||void 0===t?void 0:t.platforms.has(a()))||!!s(e)},r.registerPlugin=function(e){let u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const c=l.get(e);if(c)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),c.proxy;const d=a(),f=s(e);let p;const h=i=>{let a;const s=function(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];const h=(async()=>(!p&&d in u?p=p="function"===typeof u[d]?await u[d]():u[d]:null!==t&&!p&&"web"in u&&(p=p="function"===typeof u.web?await u.web():u.web),p))().then((t=>{const s=((t,i)=>{var a,s;if(!f){if(t)return null===(s=t[i])||void 0===s?void 0:s.bind(t);throw new o(`"${e}" plugin is not implemented on ${d}`,n.Unimplemented)}{const n=null===f||void 0===f?void 0:f.methods.find((e=>i===e.name));if(n)return"promise"===n.rtype?t=>r.nativePromise(e,i.toString(),t):(t,n)=>r.nativeCallback(e,i.toString(),t,n);if(t)return null===(a=t[i])||void 0===a?void 0:a.bind(t)}})(t,i);if(s){const e=s(...l);return a=null===e||void 0===e?void 0:e.remove,e}throw new o(`"${e}.${i}()" is not implemented on ${d}`,n.Unimplemented)}));return"addListener"===i&&(h.remove=async()=>a()),h};return s.toString=()=>`${i.toString()}() { [capacitor code] }`,Object.defineProperty(s,"name",{value:i,writable:!1,configurable:!1}),s},m=h("addListener"),g=h("removeListener"),v=(e,t)=>{const r=m({eventName:e},t),n=async()=>{const n=await r;g({eventName:e,callbackId:n},t)},o=new Promise((e=>r.then((()=>e({remove:n})))));return o.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await n()},o},y=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return f?v:m;case"removeListener":return g;default:return h(t)}}});return i[e]=y,l.set(e,{name:e,proxy:y,platforms:new Set([...Object.keys(u),...f?[d]:[]])}),y},r.Exception=o,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},a=(e=>e.Capacitor=i(e))("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{}),s=a.registerPlugin;class l{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n),r&&this.sendRetainedArgumentsForEvent(e);return Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const n=this.listeners[e];if(n)n.forEach((e=>e(t)));else if(r){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not implemented";return new a.Exception(e,n.Unimplemented)}unavailable(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not available";return new a.Exception(e,n.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const n=r.indexOf(t);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach((t=>{this.notifyListeners(e,t)})))}}const u=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),c=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class d extends l{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach((e=>{if(e.length<=0)return;let[r,n]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=c(r).trim(),n=c(n).trim(),t[r]=n})),t}async setCookie(e){try{const t=u(e.key),r=u(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),i=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${n}; path=${o}; ${i};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}s("CapacitorCookies",{web:()=>new d});const f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=Object.assign({method:e.method||"GET",headers:e.headers},t),n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e);return Object.keys(e).map((e=>e.toLocaleLowerCase())).reduce(((r,n,o)=>(r[n]=e[t[o]],r)),{})}(e.headers),o=n["content-type"]||"";if("string"===typeof e.data)r.body=e.data;else if(o.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[r,n]of Object.entries(e.data||{}))t.set(r,n);r.body=t.toString()}else if(o.includes("multipart/form-data")||e.data instanceof FormData){const t=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,r)=>{t.append(r,e)}));else for(const r of Object.keys(e.data))t.append(r,e.data[r]);r.body=t;const n=new Headers(r.headers);n.delete("content-type"),r.headers=n}else(o.includes("application/json")||"object"===typeof e.data)&&(r.body=JSON.stringify(e.data));return r};class p extends l{async request(e){const t=f(e,e.webFetchExtra),r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?Object.entries(e).reduce(((e,r)=>{const[n,o]=r;let i,a;return Array.isArray(o)?(a="",o.forEach((e=>{i=t?encodeURIComponent(e):e,a+=`${n}=${i}&`})),a.slice(0,-1)):(i=t?encodeURIComponent(o):o,a=`${n}=${i}`),`${e}&${a}`}),"").substr(1):null}(e.params,e.shouldEncodeUrlParams),n=r?`${e.url}?${r}`:e.url,o=await fetch(n,t),i=o.headers.get("content-type")||"";let a,s,{responseType:l="text"}=o.ok?e:{};switch(i.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":s=await o.blob(),a=await(async e=>new Promise(((t,r)=>{const n=new FileReader;n.onload=()=>{const e=n.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},n.onerror=e=>r(e),n.readAsDataURL(e)})))(s);break;case"json":a=await o.json();break;default:a=await o.text()}const u={};return o.headers.forEach(((e,t)=>{u[t]=e})),{data:a,headers:u,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}s("CapacitorHttp",{web:()=>new p})},497:(e,t,r)=>{"use strict";var n=r(218);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},536:function(e,t,r){var n;e=r.nmd(e),function(){var o,i="Expected a function",a="__lodash_hash_undefined__",s="__lodash_placeholder__",l=16,u=32,c=64,d=128,f=256,p=1/0,h=9007199254740991,m=NaN,g=4294967295,v=[["ary",d],["bind",1],["bindKey",2],["curry",8],["curryRight",l],["flip",512],["partial",u],["partialRight",c],["rearg",f]],y="[object Arguments]",b="[object Array]",x="[object Boolean]",w="[object Date]",_="[object Error]",k="[object Function]",S="[object GeneratorFunction]",E="[object Map]",C="[object Number]",j="[object Object]",T="[object Promise]",O="[object RegExp]",R="[object Set]",A="[object String]",P="[object Symbol]",L="[object WeakMap]",$="[object ArrayBuffer]",N="[object DataView]",z="[object Float32Array]",I="[object Float64Array]",F="[object Int8Array]",D="[object Int16Array]",M="[object Int32Array]",U="[object Uint8Array]",B="[object Uint8ClampedArray]",W="[object Uint16Array]",H="[object Uint32Array]",q=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,K=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,Q=/[&<>"']/g,J=RegExp(Y.source),X=RegExp(Q.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,ee=/<%=([\s\S]+?)%>/g,te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,re=/^\w*$/,ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oe=/[\\^$.*+?()[\]{}|]/g,ie=RegExp(oe.source),ae=/^\s+/,se=/\s/,le=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,de=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fe=/[()=,{}\[\]\/\s]/,pe=/\\(\\)?/g,he=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,me=/\w*$/,ge=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,ye=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,xe=/^(?:0|[1-9]\d*)$/,we=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_e=/($^)/,ke=/['\n\r\u2028\u2029\\]/g,Se="\\ud800-\\udfff",Ee="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ce="\\u2700-\\u27bf",je="a-z\\xdf-\\xf6\\xf8-\\xff",Te="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Re="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ae="['\u2019]",Pe="["+Se+"]",Le="["+Re+"]",$e="["+Ee+"]",Ne="\\d+",ze="["+Ce+"]",Ie="["+je+"]",Fe="[^"+Se+Re+Ne+Ce+je+Te+"]",De="\\ud83c[\\udffb-\\udfff]",Me="[^"+Se+"]",Ue="(?:\\ud83c[\\udde6-\\uddff]){2}",Be="[\\ud800-\\udbff][\\udc00-\\udfff]",We="["+Te+"]",He="\\u200d",qe="(?:"+Ie+"|"+Fe+")",Ve="(?:"+We+"|"+Fe+")",Ke="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",Ye="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",Qe="(?:"+$e+"|"+De+")"+"?",Je="["+Oe+"]?",Xe=Je+Qe+("(?:"+He+"(?:"+[Me,Ue,Be].join("|")+")"+Je+Qe+")*"),Ge="(?:"+[ze,Ue,Be].join("|")+")"+Xe,Ze="(?:"+[Me+$e+"?",$e,Ue,Be,Pe].join("|")+")",et=RegExp(Ae,"g"),tt=RegExp($e,"g"),rt=RegExp(De+"(?="+De+")|"+Ze+Xe,"g"),nt=RegExp([We+"?"+Ie+"+"+Ke+"(?="+[Le,We,"$"].join("|")+")",Ve+"+"+Ye+"(?="+[Le,We+qe,"$"].join("|")+")",We+"?"+qe+"+"+Ke,We+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ne,Ge].join("|"),"g"),ot=RegExp("["+He+Se+Ee+Oe+"]"),it=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,at=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],st=-1,lt={};lt[z]=lt[I]=lt[F]=lt[D]=lt[M]=lt[U]=lt[B]=lt[W]=lt[H]=!0,lt[y]=lt[b]=lt[$]=lt[x]=lt[N]=lt[w]=lt[_]=lt[k]=lt[E]=lt[C]=lt[j]=lt[O]=lt[R]=lt[A]=lt[L]=!1;var ut={};ut[y]=ut[b]=ut[$]=ut[N]=ut[x]=ut[w]=ut[z]=ut[I]=ut[F]=ut[D]=ut[M]=ut[E]=ut[C]=ut[j]=ut[O]=ut[R]=ut[A]=ut[P]=ut[U]=ut[B]=ut[W]=ut[H]=!0,ut[_]=ut[k]=ut[L]=!1;var ct={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dt=parseFloat,ft=parseInt,pt="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,ht="object"==typeof self&&self&&self.Object===Object&&self,mt=pt||ht||Function("return this")(),gt=t&&!t.nodeType&&t,vt=gt&&e&&!e.nodeType&&e,yt=vt&&vt.exports===gt,bt=yt&&pt.process,xt=function(){try{var e=vt&&vt.require&&vt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(t){}}(),wt=xt&&xt.isArrayBuffer,_t=xt&&xt.isDate,kt=xt&&xt.isMap,St=xt&&xt.isRegExp,Et=xt&&xt.isSet,Ct=xt&&xt.isTypedArray;function jt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Tt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function Ot(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Rt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function At(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Pt(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Lt(e,t){return!!(null==e?0:e.length)&&Wt(e,t,0)>-1}function $t(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function Nt(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function zt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function It(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function Ft(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Mt=Kt("length");function Ut(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Bt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Wt(e,t,r){return t===t?function(e,t,r){var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Bt(e,qt,r)}function Ht(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function qt(e){return e!==e}function Vt(e,t){var r=null==e?0:e.length;return r?Jt(e,t)/r:m}function Kt(e){return function(t){return null==t?o:t[e]}}function Yt(e){return function(t){return null==e?o:e[t]}}function Qt(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Jt(e,t){for(var r,n=-1,i=e.length;++n<i;){var a=t(e[n]);a!==o&&(r=r===o?a:r+a)}return r}function Xt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,mr(e)+1).replace(ae,""):e}function Zt(e){return function(t){return e(t)}}function er(e,t){return Nt(t,(function(t){return e[t]}))}function tr(e,t){return e.has(t)}function rr(e,t){for(var r=-1,n=e.length;++r<n&&Wt(t,e[r],0)>-1;);return r}function nr(e,t){for(var r=e.length;r--&&Wt(t,e[r],0)>-1;);return r}var or=Yt({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),ir=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ar(e){return"\\"+ct[e]}function sr(e){return ot.test(e)}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ur(e,t){return function(r){return e(t(r))}}function cr(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r];a!==t&&a!==s||(e[r]=s,i[o++]=r)}return i}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function fr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function pr(e){return sr(e)?function(e){var t=rt.lastIndex=0;for(;rt.test(e);)++t;return t}(e):Mt(e)}function hr(e){return sr(e)?function(e){return e.match(rt)||[]}(e):function(e){return e.split("")}(e)}function mr(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var gr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var vr=function e(t){var r=(t=null==t?mt:vr.defaults(mt.Object(),t,vr.pick(mt,at))).Array,n=t.Date,se=t.Error,Se=t.Function,Ee=t.Math,Ce=t.Object,je=t.RegExp,Te=t.String,Oe=t.TypeError,Re=r.prototype,Ae=Se.prototype,Pe=Ce.prototype,Le=t["__core-js_shared__"],$e=Ae.toString,Ne=Pe.hasOwnProperty,ze=0,Ie=function(){var e=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fe=Pe.toString,De=$e.call(Ce),Me=mt._,Ue=je("^"+$e.call(Ne).replace(oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Be=yt?t.Buffer:o,We=t.Symbol,He=t.Uint8Array,qe=Be?Be.allocUnsafe:o,Ve=ur(Ce.getPrototypeOf,Ce),Ke=Ce.create,Ye=Pe.propertyIsEnumerable,Qe=Re.splice,Je=We?We.isConcatSpreadable:o,Xe=We?We.iterator:o,Ge=We?We.toStringTag:o,Ze=function(){try{var e=fi(Ce,"defineProperty");return e({},"",{}),e}catch(t){}}(),rt=t.clearTimeout!==mt.clearTimeout&&t.clearTimeout,ot=n&&n.now!==mt.Date.now&&n.now,ct=t.setTimeout!==mt.setTimeout&&t.setTimeout,pt=Ee.ceil,ht=Ee.floor,gt=Ce.getOwnPropertySymbols,vt=Be?Be.isBuffer:o,bt=t.isFinite,xt=Re.join,Mt=ur(Ce.keys,Ce),Yt=Ee.max,yr=Ee.min,br=n.now,xr=t.parseInt,wr=Ee.random,_r=Re.reverse,kr=fi(t,"DataView"),Sr=fi(t,"Map"),Er=fi(t,"Promise"),Cr=fi(t,"Set"),jr=fi(t,"WeakMap"),Tr=fi(Ce,"create"),Or=jr&&new jr,Rr={},Ar=Fi(kr),Pr=Fi(Sr),Lr=Fi(Er),$r=Fi(Cr),Nr=Fi(jr),zr=We?We.prototype:o,Ir=zr?zr.valueOf:o,Fr=zr?zr.toString:o;function Dr(e){if(ts(e)&&!Ha(e)&&!(e instanceof Wr)){if(e instanceof Br)return e;if(Ne.call(e,"__wrapped__"))return Di(e)}return new Br(e)}var Mr=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var r=new e;return e.prototype=o,r}}();function Ur(){}function Br(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function Hr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function qr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Vr;++t<r;)this.add(e[t])}function Yr(e){var t=this.__data__=new qr(e);this.size=t.size}function Qr(e,t){var r=Ha(e),n=!r&&Wa(e),o=!r&&!n&&Ya(e),i=!r&&!n&&!o&&us(e),a=r||n||o||i,s=a?Xt(e.length,Te):[],l=s.length;for(var u in e)!t&&!Ne.call(e,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||bi(u,l))||s.push(u);return s}function Jr(e){var t=e.length;return t?e[Yn(0,t-1)]:o}function Xr(e,t){return Ni(Ro(e),sn(t,0,e.length))}function Gr(e){return Ni(Ro(e))}function Zr(e,t,r){(r!==o&&!Ma(e[t],r)||r===o&&!(t in e))&&on(e,t,r)}function en(e,t,r){var n=e[t];Ne.call(e,t)&&Ma(n,r)&&(r!==o||t in e)||on(e,t,r)}function tn(e,t){for(var r=e.length;r--;)if(Ma(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&Ao(t,As(t),e)}function on(e,t,r){"__proto__"==t&&Ze?Ze(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(e,t){for(var n=-1,i=t.length,a=r(i),s=null==e;++n<i;)a[n]=s?o:Cs(e,t[n]);return a}function sn(e,t,r){return e===e&&(r!==o&&(e=e<=r?e:r),t!==o&&(e=e>=t?e:t)),e}function ln(e,t,r,n,i,a){var s,l=1&t,u=2&t,c=4&t;if(r&&(s=i?r(e,n,i,a):r(e)),s!==o)return s;if(!es(e))return e;var d=Ha(e);if(d){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&Ne.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Ro(e,s)}else{var f=mi(e),p=f==k||f==S;if(Ya(e))return So(e,l);if(f==j||f==y||p&&!i){if(s=u||p?{}:vi(e),!l)return u?function(e,t){return Ao(e,hi(e),t)}(e,function(e,t){return e&&Ao(t,Ps(t),e)}(s,e)):function(e,t){return Ao(e,pi(e),t)}(e,nn(s,e))}else{if(!ut[f])return i?e:{};s=function(e,t,r){var n=e.constructor;switch(t){case $:return Eo(e);case x:case w:return new n(+e);case N:return function(e,t){var r=t?Eo(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case z:case I:case F:case D:case M:case U:case B:case W:case H:return Co(e,r);case E:return new n;case C:case A:return new n(e);case O:return function(e){var t=new e.constructor(e.source,me.exec(e));return t.lastIndex=e.lastIndex,t}(e);case R:return new n;case P:return o=e,Ir?Ce(Ir.call(o)):{}}var o}(e,f,l)}}a||(a=new Yr);var h=a.get(e);if(h)return h;a.set(e,s),as(e)?e.forEach((function(n){s.add(ln(n,t,r,n,e,a))})):rs(e)&&e.forEach((function(n,o){s.set(o,ln(n,t,r,o,e,a))}));var m=d?o:(c?u?ii:oi:u?Ps:As)(e);return Ot(m||e,(function(n,o){m&&(n=e[o=n]),en(s,o,ln(n,t,r,o,e,a))})),s}function un(e,t,r){var n=r.length;if(null==e)return!n;for(e=Ce(e);n--;){var i=r[n],a=t[i],s=e[i];if(s===o&&!(i in e)||!a(s))return!1}return!0}function cn(e,t,r){if("function"!=typeof e)throw new Oe(i);return Ai((function(){e.apply(o,r)}),t)}function dn(e,t,r,n){var o=-1,i=Lt,a=!0,s=e.length,l=[],u=t.length;if(!s)return l;r&&(t=Nt(t,Zt(r))),n?(i=$t,a=!1):t.length>=200&&(i=tr,a=!1,t=new Kr(t));e:for(;++o<s;){var c=e[o],d=null==r?c:r(c);if(c=n||0!==c?c:0,a&&d===d){for(var f=u;f--;)if(t[f]===d)continue e;l.push(c)}else i(t,d,n)||l.push(c)}return l}Dr.templateSettings={escape:G,evaluate:Z,interpolate:ee,variable:"",imports:{_:Dr}},Dr.prototype=Ur.prototype,Dr.prototype.constructor=Dr,Br.prototype=Mr(Ur.prototype),Br.prototype.constructor=Br,Wr.prototype=Mr(Ur.prototype),Wr.prototype.constructor=Wr,Hr.prototype.clear=function(){this.__data__=Tr?Tr(null):{},this.size=0},Hr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Hr.prototype.get=function(e){var t=this.__data__;if(Tr){var r=t[e];return r===a?o:r}return Ne.call(t,e)?t[e]:o},Hr.prototype.has=function(e){var t=this.__data__;return Tr?t[e]!==o:Ne.call(t,e)},Hr.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Tr&&t===o?a:t,this},qr.prototype.clear=function(){this.__data__=[],this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Qe.call(t,r,1),--this.size,!0)},qr.prototype.get=function(e){var t=this.__data__,r=tn(t,e);return r<0?o:t[r][1]},qr.prototype.has=function(e){return tn(this.__data__,e)>-1},qr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Vr.prototype.clear=function(){this.size=0,this.__data__={hash:new Hr,map:new(Sr||qr),string:new Hr}},Vr.prototype.delete=function(e){var t=ci(this,e).delete(e);return this.size-=t?1:0,t},Vr.prototype.get=function(e){return ci(this,e).get(e)},Vr.prototype.has=function(e){return ci(this,e).has(e)},Vr.prototype.set=function(e,t){var r=ci(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,a),this},Kr.prototype.has=function(e){return this.__data__.has(e)},Yr.prototype.clear=function(){this.__data__=new qr,this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Yr.prototype.get=function(e){return this.__data__.get(e)},Yr.prototype.has=function(e){return this.__data__.has(e)},Yr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof qr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Vr(n)}return r.set(e,t),this.size=r.size,this};var fn=$o(xn),pn=$o(wn,!0);function hn(e,t){var r=!0;return fn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function mn(e,t,r){for(var n=-1,i=e.length;++n<i;){var a=e[n],s=t(a);if(null!=s&&(l===o?s===s&&!ls(s):r(s,l)))var l=s,u=a}return u}function gn(e,t){var r=[];return fn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function vn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=yi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?vn(s,t-1,r,n,o):zt(o,s):n||(o[o.length]=s)}return o}var yn=No(),bn=No(!0);function xn(e,t){return e&&yn(e,t,As)}function wn(e,t){return e&&bn(e,t,As)}function _n(e,t){return Pt(t,(function(t){return Xa(e[t])}))}function kn(e,t){for(var r=0,n=(t=xo(t,e)).length;null!=e&&r<n;)e=e[Ii(t[r++])];return r&&r==n?e:o}function Sn(e,t,r){var n=t(e);return Ha(e)?n:zt(n,r(e))}function En(e){return null==e?e===o?"[object Undefined]":"[object Null]":Ge&&Ge in Ce(e)?function(e){var t=Ne.call(e,Ge),r=e[Ge];try{e[Ge]=o;var n=!0}catch(a){}var i=Fe.call(e);n&&(t?e[Ge]=r:delete e[Ge]);return i}(e):function(e){return Fe.call(e)}(e)}function Cn(e,t){return e>t}function jn(e,t){return null!=e&&Ne.call(e,t)}function Tn(e,t){return null!=e&&t in Ce(e)}function On(e,t,n){for(var i=n?$t:Lt,a=e[0].length,s=e.length,l=s,u=r(s),c=1/0,d=[];l--;){var f=e[l];l&&t&&(f=Nt(f,Zt(t))),c=yr(f.length,c),u[l]=!n&&(t||a>=120&&f.length>=120)?new Kr(l&&f):o}f=e[0];var p=-1,h=u[0];e:for(;++p<a&&d.length<c;){var m=f[p],g=t?t(m):m;if(m=n||0!==m?m:0,!(h?tr(h,g):i(d,g,n))){for(l=s;--l;){var v=u[l];if(!(v?tr(v,g):i(e[l],g,n)))continue e}h&&h.push(g),d.push(m)}}return d}function Rn(e,t,r){var n=null==(e=Ti(e,t=xo(t,e)))?e:e[Ii(Ji(t))];return null==n?o:jt(n,e,r)}function An(e){return ts(e)&&En(e)==y}function Pn(e,t,r,n,i){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!==e&&t!==t:function(e,t,r,n,i,a){var s=Ha(e),l=Ha(t),u=s?b:mi(e),c=l?b:mi(t),d=(u=u==y?j:u)==j,f=(c=c==y?j:c)==j,p=u==c;if(p&&Ya(e)){if(!Ya(t))return!1;s=!0,d=!1}if(p&&!d)return a||(a=new Yr),s||us(e)?ri(e,t,r,n,i,a):function(e,t,r,n,o,i,a){switch(r){case N:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case $:return!(e.byteLength!=t.byteLength||!i(new He(e),new He(t)));case x:case w:case C:return Ma(+e,+t);case _:return e.name==t.name&&e.message==t.message;case O:case A:return e==t+"";case E:var s=lr;case R:var l=1&n;if(s||(s=dr),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;n|=2,a.set(e,t);var c=ri(s(e),s(t),n,o,i,a);return a.delete(e),c;case P:if(Ir)return Ir.call(e)==Ir.call(t)}return!1}(e,t,u,r,n,i,a);if(!(1&r)){var h=d&&Ne.call(e,"__wrapped__"),m=f&&Ne.call(t,"__wrapped__");if(h||m){var g=h?e.value():e,v=m?t.value():t;return a||(a=new Yr),i(g,v,r,n,a)}}if(!p)return!1;return a||(a=new Yr),function(e,t,r,n,i,a){var s=1&r,l=oi(e),u=l.length,c=oi(t),d=c.length;if(u!=d&&!s)return!1;var f=u;for(;f--;){var p=l[f];if(!(s?p in t:Ne.call(t,p)))return!1}var h=a.get(e),m=a.get(t);if(h&&m)return h==t&&m==e;var g=!0;a.set(e,t),a.set(t,e);var v=s;for(;++f<u;){var y=e[p=l[f]],b=t[p];if(n)var x=s?n(b,y,p,t,e,a):n(y,b,p,e,t,a);if(!(x===o?y===b||i(y,b,r,n,a):x)){g=!1;break}v||(v="constructor"==p)}if(g&&!v){var w=e.constructor,_=t.constructor;w==_||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof _&&_ instanceof _||(g=!1)}return a.delete(e),a.delete(t),g}(e,t,r,n,i,a)}(e,t,r,n,Pn,i))}function Ln(e,t,r,n){var i=r.length,a=i,s=!n;if(null==e)return!a;for(e=Ce(e);i--;){var l=r[i];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<a;){var u=(l=r[i])[0],c=e[u],d=l[1];if(s&&l[2]){if(c===o&&!(u in e))return!1}else{var f=new Yr;if(n)var p=n(c,d,u,e,t,f);if(!(p===o?Pn(d,c,3,n,f):p))return!1}}return!0}function $n(e){return!(!es(e)||(t=e,Ie&&Ie in t))&&(Xa(e)?Ue:ye).test(Fi(e));var t}function Nn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ha(e)?Un(e[0],e[1]):Mn(e):fl(e)}function zn(e){if(!Si(e))return Mt(e);var t=[];for(var r in Ce(e))Ne.call(e,r)&&"constructor"!=r&&t.push(r);return t}function In(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in Ce(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&Ne.call(e,n))&&r.push(n);return r}function Fn(e,t){return e<t}function Dn(e,t){var n=-1,o=Va(e)?r(e.length):[];return fn(e,(function(e,r,i){o[++n]=t(e,r,i)})),o}function Mn(e){var t=di(e);return 1==t.length&&t[0][2]?Ci(t[0][0],t[0][1]):function(r){return r===e||Ln(r,e,t)}}function Un(e,t){return wi(e)&&Ei(t)?Ci(Ii(e),t):function(r){var n=Cs(r,e);return n===o&&n===t?js(r,e):Pn(t,n,3)}}function Bn(e,t,r,n,i){e!==t&&yn(t,(function(a,s){if(i||(i=new Yr),es(a))!function(e,t,r,n,i,a,s){var l=Oi(e,r),u=Oi(t,r),c=s.get(u);if(c)return void Zr(e,r,c);var d=a?a(l,u,r+"",e,t,s):o,f=d===o;if(f){var p=Ha(u),h=!p&&Ya(u),m=!p&&!h&&us(u);d=u,p||h||m?Ha(l)?d=l:Ka(l)?d=Ro(l):h?(f=!1,d=So(u,!0)):m?(f=!1,d=Co(u,!0)):d=[]:os(u)||Wa(u)?(d=l,Wa(l)?d=vs(l):es(l)&&!Xa(l)||(d=vi(u))):f=!1}f&&(s.set(u,d),i(d,u,n,a,s),s.delete(u));Zr(e,r,d)}(e,t,s,r,Bn,n,i);else{var l=n?n(Oi(e,s),a,s+"",e,t,i):o;l===o&&(l=a),Zr(e,s,l)}}),Ps)}function Wn(e,t){var r=e.length;if(r)return bi(t+=t<0?r:0,r)?e[t]:o}function Hn(e,t,r){t=t.length?Nt(t,(function(e){return Ha(e)?function(t){return kn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Nt(t,Zt(ui()));var o=Dn(e,(function(e,r,o){var i=Nt(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;for(;++n<a;){var l=jo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function qn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=kn(e,a);r(s,a)&&Zn(i,xo(a,e),s)}return i}function Vn(e,t,r,n){var o=n?Ht:Wt,i=-1,a=t.length,s=e;for(e===t&&(t=Ro(t)),r&&(s=Nt(e,Zt(r)));++i<a;)for(var l=0,u=t[i],c=r?r(u):u;(l=o(s,c,l,n))>-1;)s!==e&&Qe.call(s,l,1),Qe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;bi(o)?Qe.call(e,o,1):fo(e,o)}}return e}function Yn(e,t){return e+ht(wr()*(t-e+1))}function Qn(e,t){var r="";if(!e||t<1||t>h)return r;do{t%2&&(r+=e),(t=ht(t/2))&&(e+=e)}while(t);return r}function Jn(e,t){return Pi(ji(e,t,nl),e+"")}function Xn(e){return Jr(Ms(e))}function Gn(e,t){var r=Ms(e);return Ni(r,sn(t,0,r.length))}function Zn(e,t,r,n){if(!es(e))return e;for(var i=-1,a=(t=xo(t,e)).length,s=a-1,l=e;null!=l&&++i<a;){var u=Ii(t[i]),c=r;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(i!=s){var d=l[u];(c=n?n(d,u,l):o)===o&&(c=es(d)?d:bi(t[i+1])?[]:{})}en(l,u,c),l=l[u]}return e}var eo=Or?function(e,t){return Or.set(e,t),e}:nl,to=Ze?function(e,t){return Ze(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return Ni(Ms(e))}function no(e,t,n){var o=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=r(i);++o<i;)a[o]=e[o+t];return a}function oo(e,t){var r;return fn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t===t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(e,t,r,n){var i=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=r(t))!==t,l=null===t,u=ls(t),c=t===o;i<a;){var d=ht((i+a)/2),f=r(e[d]),p=f!==o,h=null===f,m=f===f,g=ls(f);if(s)var v=n||m;else v=c?m&&(n||p):l?m&&p&&(n||!h):u?m&&p&&!h&&(n||!g):!h&&!g&&(n?f<=t:f<t);v?i=d+1:a=d}return yr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Ma(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?m:+e}function uo(e){if("string"==typeof e)return e;if(Ha(e))return Nt(e,uo)+"";if(ls(e))return Fr?Fr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function co(e,t,r){var n=-1,o=Lt,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=$t;else if(i>=200){var u=t?null:Jo(e);if(u)return dr(u);a=!1,o=tr,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var c=e[n],d=t?t(c):c;if(c=r||0!==c?c:0,a&&d===d){for(var f=l.length;f--;)if(l[f]===d)continue e;t&&l.push(d),s.push(c)}else o(l,d,r)||(l!==s&&l.push(d),s.push(c))}return s}function fo(e,t){return null==(e=Ti(e,t=xo(t,e)))||delete e[Ii(Ji(t))]}function po(e,t,r,n){return Zn(e,t,r(kn(e,t)),n)}function ho(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function mo(e,t){var r=e;return r instanceof Wr&&(r=r.value()),It(t,(function(e,t){return t.func.apply(t.thisArg,zt([e],t.args))}),r)}function go(e,t,n){var o=e.length;if(o<2)return o?co(e[0]):[];for(var i=-1,a=r(o);++i<o;)for(var s=e[i],l=-1;++l<o;)l!=i&&(a[i]=dn(a[i]||s,e[l],t,n));return co(vn(a,1),t,n)}function vo(e,t,r){for(var n=-1,i=e.length,a=t.length,s={};++n<i;){var l=n<a?t[n]:o;r(s,e[n],l)}return s}function yo(e){return Ka(e)?e:[]}function bo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ha(e)?e:wi(e,t)?[e]:zi(ys(e))}var wo=Jn;function _o(e,t,r){var n=e.length;return r=r===o?n:r,!t&&r>=n?e:no(e,t,r)}var ko=rt||function(e){return mt.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=qe?qe(r):new e.constructor(r);return e.copy(n),n}function Eo(e){var t=new e.constructor(e.byteLength);return new He(t).set(new He(e)),t}function Co(e,t){var r=t?Eo(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function jo(e,t){if(e!==t){var r=e!==o,n=null===e,i=e===e,a=ls(e),s=t!==o,l=null===t,u=t===t,c=ls(t);if(!l&&!c&&!a&&e>t||a&&s&&u&&!l&&!c||n&&s&&u||!r&&u||!i)return 1;if(!n&&!a&&!c&&e<t||c&&r&&i&&!n&&!a||l&&r&&i||!s&&i||!u)return-1}return 0}function To(e,t,n,o){for(var i=-1,a=e.length,s=n.length,l=-1,u=t.length,c=Yt(a-s,0),d=r(u+c),f=!o;++l<u;)d[l]=t[l];for(;++i<s;)(f||i<a)&&(d[n[i]]=e[i]);for(;c--;)d[l++]=e[i++];return d}function Oo(e,t,n,o){for(var i=-1,a=e.length,s=-1,l=n.length,u=-1,c=t.length,d=Yt(a-l,0),f=r(d+c),p=!o;++i<d;)f[i]=e[i];for(var h=i;++u<c;)f[h+u]=t[u];for(;++s<l;)(p||i<a)&&(f[h+n[s]]=e[i++]);return f}function Ro(e,t){var n=-1,o=e.length;for(t||(t=r(o));++n<o;)t[n]=e[n];return t}function Ao(e,t,r,n){var i=!r;r||(r={});for(var a=-1,s=t.length;++a<s;){var l=t[a],u=n?n(r[l],e[l],l,r,e):o;u===o&&(u=e[l]),i?on(r,l,u):en(r,l,u)}return r}function Po(e,t){return function(r,n){var o=Ha(r)?Tt:rn,i=t?t():{};return o(r,e,ui(n,2),i)}}function Lo(e){return Jn((function(t,r){var n=-1,i=r.length,a=i>1?r[i-1]:o,s=i>2?r[2]:o;for(a=e.length>3&&"function"==typeof a?(i--,a):o,s&&xi(r[0],r[1],s)&&(a=i<3?o:a,i=1),t=Ce(t);++n<i;){var l=r[n];l&&e(t,l,n,a)}return t}))}function $o(e,t){return function(r,n){if(null==r)return r;if(!Va(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Ce(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function No(e){return function(t,r,n){for(var o=-1,i=Ce(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function zo(e){return function(t){var r=sr(t=ys(t))?hr(t):o,n=r?r[0]:t.charAt(0),i=r?_o(r,1).join(""):t.slice(1);return n[e]()+i}}function Io(e){return function(t){return It(Xs(Ws(t).replace(et,"")),e,"")}}function Fo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Mr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Do(e){return function(t,r,n){var i=Ce(t);if(!Va(t)){var a=ui(r,3);t=As(t),r=function(e){return a(i[e],e,i)}}var s=e(t,r,n);return s>-1?i[a?t[s]:s]:o}}function Mo(e){return ni((function(t){var r=t.length,n=r,a=Br.prototype.thru;for(e&&t.reverse();n--;){var s=t[n];if("function"!=typeof s)throw new Oe(i);if(a&&!l&&"wrapper"==si(s))var l=new Br([],!0)}for(n=l?n:r;++n<r;){var u=si(s=t[n]),c="wrapper"==u?ai(s):o;l=c&&_i(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[si(c[0])].apply(l,c[3]):1==s.length&&_i(s)?l[u]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&1==e.length&&Ha(n))return l.plant(n).value();for(var o=0,i=r?t[o].apply(this,e):n;++o<r;)i=t[o].call(this,i);return i}}))}function Uo(e,t,n,i,a,s,l,u,c,f){var p=t&d,h=1&t,m=2&t,g=24&t,v=512&t,y=m?o:Fo(e);return function d(){for(var b=arguments.length,x=r(b),w=b;w--;)x[w]=arguments[w];if(g)var _=li(d),k=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(x,_);if(i&&(x=To(x,i,a,g)),s&&(x=Oo(x,s,l,g)),b-=k,g&&b<f){var S=cr(x,_);return Yo(e,t,Uo,d.placeholder,n,x,S,u,c,f-b)}var E=h?n:this,C=m?E[e]:e;return b=x.length,u?x=function(e,t){var r=e.length,n=yr(t.length,r),i=Ro(e);for(;n--;){var a=t[n];e[n]=bi(a,r)?i[a]:o}return e}(x,u):v&&b>1&&x.reverse(),p&&c<b&&(x.length=c),this&&this!==mt&&this instanceof d&&(C=y||Fo(C)),C.apply(E,x)}}function Bo(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(e,t){return function(r,n){var i;if(r===o&&n===o)return t;if(r!==o&&(i=r),n!==o){if(i===o)return n;"string"==typeof r||"string"==typeof n?(r=uo(r),n=uo(n)):(r=lo(r),n=lo(n)),i=e(r,n)}return i}}function Ho(e){return ni((function(t){return t=Nt(t,Zt(ui())),Jn((function(r){var n=this;return e(t,(function(e){return jt(e,n,r)}))}))}))}function qo(e,t){var r=(t=t===o?" ":uo(t)).length;if(r<2)return r?Qn(t,e):t;var n=Qn(t,pt(e/pr(t)));return sr(t)?_o(hr(n),0,e).join(""):n.slice(0,e)}function Vo(e){return function(t,n,i){return i&&"number"!=typeof i&&xi(t,n,i)&&(n=i=o),t=ps(t),n===o?(n=t,t=0):n=ps(n),function(e,t,n,o){for(var i=-1,a=Yt(pt((t-e)/(n||1)),0),s=r(a);a--;)s[o?a:++i]=e,e+=n;return s}(t,n,i=i===o?t<n?1:-1:ps(i),e)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=gs(t),r=gs(r)),e(t,r)}}function Yo(e,t,r,n,i,a,s,l,d,f){var p=8&t;t|=p?u:c,4&(t&=~(p?c:u))||(t&=-4);var h=[e,t,i,p?a:o,p?s:o,p?o:a,p?o:s,l,d,f],m=r.apply(o,h);return _i(e)&&Ri(m,h),m.placeholder=n,Li(m,e,t)}function Qo(e){var t=Ee[e];return function(e,r){if(e=gs(e),(r=null==r?0:yr(hs(r),292))&&bt(e)){var n=(ys(e)+"e").split("e");return+((n=(ys(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Jo=Cr&&1/dr(new Cr([,-0]))[1]==p?function(e){return new Cr(e)}:ll;function Xo(e){return function(t){var r=mi(t);return r==E?lr(t):r==R?fr(t):function(e,t){return Nt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Go(e,t,n,a,p,h,m,g){var v=2&t;if(!v&&"function"!=typeof e)throw new Oe(i);var y=a?a.length:0;if(y||(t&=-97,a=p=o),m=m===o?m:Yt(hs(m),0),g=g===o?g:hs(g),y-=p?p.length:0,t&c){var b=a,x=p;a=p=o}var w=v?o:ai(e),_=[e,t,n,a,p,b,x,h,m,g];if(w&&function(e,t){var r=e[1],n=t[1],o=r|n,i=o<131,a=n==d&&8==r||n==d&&r==f&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!i&&!a)return e;1&n&&(e[2]=t[2],o|=1&r?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?To(u,l,t[4]):l,e[4]=u?cr(e[3],s):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Oo(u,l,t[6]):l,e[6]=u?cr(e[5],s):t[6]);(l=t[7])&&(e[7]=l);n&d&&(e[8]=null==e[8]?t[8]:yr(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=o}(_,w),e=_[0],t=_[1],n=_[2],a=_[3],p=_[4],!(g=_[9]=_[9]===o?v?0:e.length:Yt(_[9]-y,0))&&24&t&&(t&=-25),t&&1!=t)k=8==t||t==l?function(e,t,n){var i=Fo(e);return function a(){for(var s=arguments.length,l=r(s),u=s,c=li(a);u--;)l[u]=arguments[u];var d=s<3&&l[0]!==c&&l[s-1]!==c?[]:cr(l,c);return(s-=d.length)<n?Yo(e,t,Uo,a.placeholder,o,l,d,o,o,n-s):jt(this&&this!==mt&&this instanceof a?i:e,this,l)}}(e,t,g):t!=u&&33!=t||p.length?Uo.apply(o,_):function(e,t,n,o){var i=1&t,a=Fo(e);return function t(){for(var s=-1,l=arguments.length,u=-1,c=o.length,d=r(c+l),f=this&&this!==mt&&this instanceof t?a:e;++u<c;)d[u]=o[u];for(;l--;)d[u++]=arguments[++s];return jt(f,i?n:this,d)}}(e,t,n,a);else var k=function(e,t,r){var n=1&t,o=Fo(e);return function t(){return(this&&this!==mt&&this instanceof t?o:e).apply(n?r:this,arguments)}}(e,t,n);return Li((w?eo:Ri)(k,_),e,t)}function Zo(e,t,r,n){return e===o||Ma(e,Pe[r])&&!Ne.call(n,r)?t:e}function ei(e,t,r,n,i,a){return es(e)&&es(t)&&(a.set(t,e),Bn(e,t,o,ei,a),a.delete(t)),e}function ti(e){return os(e)?o:e}function ri(e,t,r,n,i,a){var s=1&r,l=e.length,u=t.length;if(l!=u&&!(s&&u>l))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var f=-1,p=!0,h=2&r?new Kr:o;for(a.set(e,t),a.set(t,e);++f<l;){var m=e[f],g=t[f];if(n)var v=s?n(g,m,f,t,e,a):n(m,g,f,e,t,a);if(v!==o){if(v)continue;p=!1;break}if(h){if(!Dt(t,(function(e,t){if(!tr(h,t)&&(m===e||i(m,e,r,n,a)))return h.push(t)}))){p=!1;break}}else if(m!==g&&!i(m,g,r,n,a)){p=!1;break}}return a.delete(e),a.delete(t),p}function ni(e){return Pi(ji(e,o,qi),e+"")}function oi(e){return Sn(e,As,pi)}function ii(e){return Sn(e,Ps,hi)}var ai=Or?function(e){return Or.get(e)}:ll;function si(e){for(var t=e.name+"",r=Rr[t],n=Ne.call(Rr,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(Ne.call(Dr,"placeholder")?Dr:e).placeholder}function ui(){var e=Dr.iteratee||ol;return e=e===ol?Nn:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,t){var r=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?r["string"==typeof t?"string":"hash"]:r.map}function di(e){for(var t=As(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Ei(o)]}return t}function fi(e,t){var r=function(e,t){return null==e?o:e[t]}(e,t);return $n(r)?r:o}var pi=gt?function(e){return null==e?[]:(e=Ce(e),Pt(gt(e),(function(t){return Ye.call(e,t)})))}:ml,hi=gt?function(e){for(var t=[];e;)zt(t,pi(e)),e=Ve(e);return t}:ml,mi=En;function gi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=Ii(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Za(o)&&bi(a,o)&&(Ha(e)||Wa(e))}function vi(e){return"function"!=typeof e.constructor||Si(e)?{}:Mr(Ve(e))}function yi(e){return Ha(e)||Wa(e)||!!(Je&&e&&e[Je])}function bi(e,t){var r=typeof e;return!!(t=null==t?h:t)&&("number"==r||"symbol"!=r&&xe.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Va(r)&&bi(t,r.length):"string"==n&&t in r)&&Ma(r[t],e)}function wi(e,t){if(Ha(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||(re.test(e)||!te.test(e)||null!=t&&e in Ce(t))}function _i(e){var t=si(e),r=Dr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(kr&&mi(new kr(new ArrayBuffer(1)))!=N||Sr&&mi(new Sr)!=E||Er&&mi(Er.resolve())!=T||Cr&&mi(new Cr)!=R||jr&&mi(new jr)!=L)&&(mi=function(e){var t=En(e),r=t==j?e.constructor:o,n=r?Fi(r):"";if(n)switch(n){case Ar:return N;case Pr:return E;case Lr:return T;case $r:return R;case Nr:return L}return t});var ki=Le?Xa:gl;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pe)}function Ei(e){return e===e&&!es(e)}function Ci(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==o||e in Ce(r)))}}function ji(e,t,n){return t=Yt(t===o?e.length-1:t,0),function(){for(var o=arguments,i=-1,a=Yt(o.length-t,0),s=r(a);++i<a;)s[i]=o[t+i];i=-1;for(var l=r(t+1);++i<t;)l[i]=o[i];return l[t]=n(s),jt(e,this,l)}}function Ti(e,t){return t.length<2?e:kn(e,no(t,0,-1))}function Oi(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}var Ri=$i(eo),Ai=ct||function(e,t){return mt.setTimeout(e,t)},Pi=$i(to);function Li(e,t,r){var n=t+"";return Pi(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(le,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Ot(v,(function(r){var n="_."+r[0];t&r[1]&&!Lt(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ue);return t?t[1].split(ce):[]}(n),r)))}function $i(e){var t=0,r=0;return function(){var n=br(),i=16-(n-r);if(r=n,i>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(o,arguments)}}function Ni(e,t){var r=-1,n=e.length,i=n-1;for(t=t===o?n:t;++r<t;){var a=Yn(r,i),s=e[a];e[a]=e[r],e[r]=s}return e.length=t,e}var zi=function(e){var t=$a(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ne,(function(e,r,n,o){t.push(n?o.replace(pe,"$1"):r||e)})),t}));function Ii(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Fi(e){if(null!=e){try{return $e.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Di(e){if(e instanceof Wr)return e.clone();var t=new Br(e.__wrapped__,e.__chain__);return t.__actions__=Ro(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Mi=Jn((function(e,t){return Ka(e)?dn(e,vn(t,1,Ka,!0)):[]})),Ui=Jn((function(e,t){var r=Ji(t);return Ka(r)&&(r=o),Ka(e)?dn(e,vn(t,1,Ka,!0),ui(r,2)):[]})),Bi=Jn((function(e,t){var r=Ji(t);return Ka(r)&&(r=o),Ka(e)?dn(e,vn(t,1,Ka,!0),o,r):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:hs(r);return o<0&&(o=Yt(n+o,0)),Bt(e,ui(t,3),o)}function Hi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=n-1;return r!==o&&(i=hs(r),i=r<0?Yt(n+i,0):yr(i,n-1)),Bt(e,ui(t,3),i,!0)}function qi(e){return(null==e?0:e.length)?vn(e,1):[]}function Vi(e){return e&&e.length?e[0]:o}var Ki=Jn((function(e){var t=Nt(e,yo);return t.length&&t[0]===e[0]?On(t):[]})),Yi=Jn((function(e){var t=Ji(e),r=Nt(e,yo);return t===Ji(r)?t=o:r.pop(),r.length&&r[0]===e[0]?On(r,ui(t,2)):[]})),Qi=Jn((function(e){var t=Ji(e),r=Nt(e,yo);return(t="function"==typeof t?t:o)&&r.pop(),r.length&&r[0]===e[0]?On(r,o,t):[]}));function Ji(e){var t=null==e?0:e.length;return t?e[t-1]:o}var Xi=Jn(Gi);function Gi(e,t){return e&&e.length&&t&&t.length?Vn(e,t):e}var Zi=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Nt(t,(function(e){return bi(e,r)?+e:e})).sort(jo)),n}));function ea(e){return null==e?e:_r.call(e)}var ta=Jn((function(e){return co(vn(e,1,Ka,!0))})),ra=Jn((function(e){var t=Ji(e);return Ka(t)&&(t=o),co(vn(e,1,Ka,!0),ui(t,2))})),na=Jn((function(e){var t=Ji(e);return t="function"==typeof t?t:o,co(vn(e,1,Ka,!0),o,t)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Pt(e,(function(e){if(Ka(e))return t=Yt(e.length,t),!0})),Xt(t,(function(t){return Nt(e,Kt(t))}))}function ia(e,t){if(!e||!e.length)return[];var r=oa(e);return null==t?r:Nt(r,(function(e){return jt(t,o,e)}))}var aa=Jn((function(e,t){return Ka(e)?dn(e,t):[]})),sa=Jn((function(e){return go(Pt(e,Ka))})),la=Jn((function(e){var t=Ji(e);return Ka(t)&&(t=o),go(Pt(e,Ka),ui(t,2))})),ua=Jn((function(e){var t=Ji(e);return t="function"==typeof t?t:o,go(Pt(e,Ka),o,t)})),ca=Jn(oa);var da=Jn((function(e){var t=e.length,r=t>1?e[t-1]:o;return r="function"==typeof r?(e.pop(),r):o,ia(e,r)}));function fa(e){var t=Dr(e);return t.__chain__=!0,t}function pa(e,t){return t(e)}var ha=ni((function(e){var t=e.length,r=t?e[0]:0,n=this.__wrapped__,i=function(t){return an(t,e)};return!(t>1||this.__actions__.length)&&n instanceof Wr&&bi(r)?((n=n.slice(r,+r+(t?1:0))).__actions__.push({func:pa,args:[i],thisArg:o}),new Br(n,this.__chain__).thru((function(e){return t&&!e.length&&e.push(o),e}))):this.thru(i)}));var ma=Po((function(e,t,r){Ne.call(e,r)?++e[r]:on(e,r,1)}));var ga=Do(Wi),va=Do(Hi);function ya(e,t){return(Ha(e)?Ot:fn)(e,ui(t,3))}function ba(e,t){return(Ha(e)?Rt:pn)(e,ui(t,3))}var xa=Po((function(e,t,r){Ne.call(e,r)?e[r].push(t):on(e,r,[t])}));var wa=Jn((function(e,t,n){var o=-1,i="function"==typeof t,a=Va(e)?r(e.length):[];return fn(e,(function(e){a[++o]=i?jt(t,e,n):Rn(e,t,n)})),a})),_a=Po((function(e,t,r){on(e,r,t)}));function ka(e,t){return(Ha(e)?Nt:Dn)(e,ui(t,3))}var Sa=Po((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var Ea=Jn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Hn(e,vn(t,1),[])})),Ca=ot||function(){return mt.Date.now()};function ja(e,t,r){return t=r?o:t,t=e&&null==t?e.length:t,Go(e,d,o,o,o,o,t)}function Ta(e,t){var r;if("function"!=typeof t)throw new Oe(i);return e=hs(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=o),r}}var Oa=Jn((function(e,t,r){var n=1;if(r.length){var o=cr(r,li(Oa));n|=u}return Go(e,n,t,r,o)})),Ra=Jn((function(e,t,r){var n=3;if(r.length){var o=cr(r,li(Ra));n|=u}return Go(t,n,e,r,o)}));function Aa(e,t,r){var n,a,s,l,u,c,d=0,f=!1,p=!1,h=!0;if("function"!=typeof e)throw new Oe(i);function m(t){var r=n,i=a;return n=a=o,d=t,l=e.apply(i,r)}function g(e){var r=e-c;return c===o||r>=t||r<0||p&&e-d>=s}function v(){var e=Ca();if(g(e))return y(e);u=Ai(v,function(e){var r=t-(e-c);return p?yr(r,s-(e-d)):r}(e))}function y(e){return u=o,h&&n?m(e):(n=a=o,l)}function b(){var e=Ca(),r=g(e);if(n=arguments,a=this,c=e,r){if(u===o)return function(e){return d=e,u=Ai(v,t),f?m(e):l}(c);if(p)return ko(u),u=Ai(v,t),m(c)}return u===o&&(u=Ai(v,t)),l}return t=gs(t)||0,es(r)&&(f=!!r.leading,s=(p="maxWait"in r)?Yt(gs(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),b.cancel=function(){u!==o&&ko(u),d=0,n=c=a=u=o},b.flush=function(){return u===o?l:y(Ca())},b}var Pa=Jn((function(e,t){return cn(e,1,t)})),La=Jn((function(e,t,r){return cn(e,gs(t)||0,r)}));function $a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Oe(i);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new($a.Cache||Vr),r}function Na(e){if("function"!=typeof e)throw new Oe(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}$a.Cache=Vr;var za=wo((function(e,t){var r=(t=1==t.length&&Ha(t[0])?Nt(t[0],Zt(ui())):Nt(vn(t,1),Zt(ui()))).length;return Jn((function(n){for(var o=-1,i=yr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return jt(e,this,n)}))})),Ia=Jn((function(e,t){var r=cr(t,li(Ia));return Go(e,u,o,t,r)})),Fa=Jn((function(e,t){var r=cr(t,li(Fa));return Go(e,c,o,t,r)})),Da=ni((function(e,t){return Go(e,f,o,o,o,t)}));function Ma(e,t){return e===t||e!==e&&t!==t}var Ua=Ko(Cn),Ba=Ko((function(e,t){return e>=t})),Wa=An(function(){return arguments}())?An:function(e){return ts(e)&&Ne.call(e,"callee")&&!Ye.call(e,"callee")},Ha=r.isArray,qa=wt?Zt(wt):function(e){return ts(e)&&En(e)==$};function Va(e){return null!=e&&Za(e.length)&&!Xa(e)}function Ka(e){return ts(e)&&Va(e)}var Ya=vt||gl,Qa=_t?Zt(_t):function(e){return ts(e)&&En(e)==w};function Ja(e){if(!ts(e))return!1;var t=En(e);return t==_||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Xa(e){if(!es(e))return!1;var t=En(e);return t==k||t==S||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Ga(e){return"number"==typeof e&&e==hs(e)}function Za(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=h}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=kt?Zt(kt):function(e){return ts(e)&&mi(e)==E};function ns(e){return"number"==typeof e||ts(e)&&En(e)==C}function os(e){if(!ts(e)||En(e)!=j)return!1;var t=Ve(e);if(null===t)return!0;var r=Ne.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&$e.call(r)==De}var is=St?Zt(St):function(e){return ts(e)&&En(e)==O};var as=Et?Zt(Et):function(e){return ts(e)&&mi(e)==R};function ss(e){return"string"==typeof e||!Ha(e)&&ts(e)&&En(e)==A}function ls(e){return"symbol"==typeof e||ts(e)&&En(e)==P}var us=Ct?Zt(Ct):function(e){return ts(e)&&Za(e.length)&&!!lt[En(e)]};var cs=Ko(Fn),ds=Ko((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Va(e))return ss(e)?hr(e):Ro(e);if(Xe&&e[Xe])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Xe]());var t=mi(e);return(t==E?lr:t==R?dr:Ms)(e)}function ps(e){return e?(e=gs(e))===p||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}function hs(e){var t=ps(e),r=t%1;return t===t?r?t-r:t:0}function ms(e){return e?sn(hs(e),0,g):0}function gs(e){if("number"==typeof e)return e;if(ls(e))return m;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=ve.test(e);return r||be.test(e)?ft(e.slice(2),r?2:8):ge.test(e)?m:+e}function vs(e){return Ao(e,Ps(e))}function ys(e){return null==e?"":uo(e)}var bs=Lo((function(e,t){if(Si(t)||Va(t))Ao(t,As(t),e);else for(var r in t)Ne.call(t,r)&&en(e,r,t[r])})),xs=Lo((function(e,t){Ao(t,Ps(t),e)})),ws=Lo((function(e,t,r,n){Ao(t,Ps(t),e,n)})),_s=Lo((function(e,t,r,n){Ao(t,As(t),e,n)})),ks=ni(an);var Ss=Jn((function(e,t){e=Ce(e);var r=-1,n=t.length,i=n>2?t[2]:o;for(i&&xi(t[0],t[1],i)&&(n=1);++r<n;)for(var a=t[r],s=Ps(a),l=-1,u=s.length;++l<u;){var c=s[l],d=e[c];(d===o||Ma(d,Pe[c])&&!Ne.call(e,c))&&(e[c]=a[c])}return e})),Es=Jn((function(e){return e.push(o,ei),jt($s,o,e)}));function Cs(e,t,r){var n=null==e?o:kn(e,t);return n===o?r:n}function js(e,t){return null!=e&&gi(e,t,Tn)}var Ts=Bo((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),e[t]=r}),el(nl)),Os=Bo((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),Ne.call(e,t)?e[t].push(r):e[t]=[r]}),ui),Rs=Jn(Rn);function As(e){return Va(e)?Qr(e):zn(e)}function Ps(e){return Va(e)?Qr(e,!0):In(e)}var Ls=Lo((function(e,t,r){Bn(e,t,r)})),$s=Lo((function(e,t,r,n){Bn(e,t,r,n)})),Ns=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=Nt(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),Ao(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)fo(r,t[o]);return r}));var zs=ni((function(e,t){return null==e?{}:function(e,t){return qn(e,t,(function(t,r){return js(e,r)}))}(e,t)}));function Is(e,t){if(null==e)return{};var r=Nt(ii(e),(function(e){return[e]}));return t=ui(t),qn(e,r,(function(e,r){return t(e,r[0])}))}var Fs=Xo(As),Ds=Xo(Ps);function Ms(e){return null==e?[]:er(e,As(e))}var Us=Io((function(e,t,r){return t=t.toLowerCase(),e+(r?Bs(t):t)}));function Bs(e){return Js(ys(e).toLowerCase())}function Ws(e){return(e=ys(e))&&e.replace(we,or).replace(tt,"")}var Hs=Io((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),qs=Io((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Vs=zo("toLowerCase");var Ks=Io((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var Ys=Io((function(e,t,r){return e+(r?" ":"")+Js(t)}));var Qs=Io((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Js=zo("toUpperCase");function Xs(e,t,r){return e=ys(e),(t=r?o:t)===o?function(e){return it.test(e)}(e)?function(e){return e.match(nt)||[]}(e):function(e){return e.match(de)||[]}(e):e.match(t)||[]}var Gs=Jn((function(e,t){try{return jt(e,o,t)}catch(r){return Ja(r)?r:new se(r)}})),Zs=ni((function(e,t){return Ot(t,(function(t){t=Ii(t),on(e,t,Oa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Mo(),rl=Mo(!0);function nl(e){return e}function ol(e){return Nn("function"==typeof e?e:ln(e,1))}var il=Jn((function(e,t){return function(r){return Rn(r,e,t)}})),al=Jn((function(e,t){return function(r){return Rn(e,r,t)}}));function sl(e,t,r){var n=As(t),o=_n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=_n(t,As(t)));var i=!(es(r)&&"chain"in r)||!!r.chain,a=Xa(e);return Ot(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Ro(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,zt([this.value()],arguments))})})),e}function ll(){}var ul=Ho(Nt),cl=Ho(At),dl=Ho(Dt);function fl(e){return wi(e)?Kt(Ii(e)):function(e){return function(t){return kn(t,e)}}(e)}var pl=Vo(),hl=Vo(!0);function ml(){return[]}function gl(){return!1}var vl=Wo((function(e,t){return e+t}),0),yl=Qo("ceil"),bl=Wo((function(e,t){return e/t}),1),xl=Qo("floor");var wl=Wo((function(e,t){return e*t}),1),_l=Qo("round"),kl=Wo((function(e,t){return e-t}),0);return Dr.after=function(e,t){if("function"!=typeof t)throw new Oe(i);return e=hs(e),function(){if(--e<1)return t.apply(this,arguments)}},Dr.ary=ja,Dr.assign=bs,Dr.assignIn=xs,Dr.assignInWith=ws,Dr.assignWith=_s,Dr.at=ks,Dr.before=Ta,Dr.bind=Oa,Dr.bindAll=Zs,Dr.bindKey=Ra,Dr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ha(e)?e:[e]},Dr.chain=fa,Dr.chunk=function(e,t,n){t=(n?xi(e,t,n):t===o)?1:Yt(hs(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var a=0,s=0,l=r(pt(i/t));a<i;)l[s++]=no(e,a,a+=t);return l},Dr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Dr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=r(e-1),n=arguments[0],o=e;o--;)t[o-1]=arguments[o];return zt(Ha(n)?Ro(n):[n],vn(t,1))},Dr.cond=function(e){var t=null==e?0:e.length,r=ui();return e=t?Nt(e,(function(e){if("function"!=typeof e[1])throw new Oe(i);return[r(e[0]),e[1]]})):[],Jn((function(r){for(var n=-1;++n<t;){var o=e[n];if(jt(o[0],this,r))return jt(o[1],this,r)}}))},Dr.conforms=function(e){return function(e){var t=As(e);return function(r){return un(r,e,t)}}(ln(e,1))},Dr.constant=el,Dr.countBy=ma,Dr.create=function(e,t){var r=Mr(e);return null==t?r:nn(r,t)},Dr.curry=function e(t,r,n){var i=Go(t,8,o,o,o,o,o,r=n?o:r);return i.placeholder=e.placeholder,i},Dr.curryRight=function e(t,r,n){var i=Go(t,l,o,o,o,o,o,r=n?o:r);return i.placeholder=e.placeholder,i},Dr.debounce=Aa,Dr.defaults=Ss,Dr.defaultsDeep=Es,Dr.defer=Pa,Dr.delay=La,Dr.difference=Mi,Dr.differenceBy=Ui,Dr.differenceWith=Bi,Dr.drop=function(e,t,r){var n=null==e?0:e.length;return n?no(e,(t=r||t===o?1:hs(t))<0?0:t,n):[]},Dr.dropRight=function(e,t,r){var n=null==e?0:e.length;return n?no(e,0,(t=n-(t=r||t===o?1:hs(t)))<0?0:t):[]},Dr.dropRightWhile=function(e,t){return e&&e.length?ho(e,ui(t,3),!0,!0):[]},Dr.dropWhile=function(e,t){return e&&e.length?ho(e,ui(t,3),!0):[]},Dr.fill=function(e,t,r,n){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&xi(e,t,r)&&(r=0,n=i),function(e,t,r,n){var i=e.length;for((r=hs(r))<0&&(r=-r>i?0:i+r),(n=n===o||n>i?i:hs(n))<0&&(n+=i),n=r>n?0:ms(n);r<n;)e[r++]=t;return e}(e,t,r,n)):[]},Dr.filter=function(e,t){return(Ha(e)?Pt:gn)(e,ui(t,3))},Dr.flatMap=function(e,t){return vn(ka(e,t),1)},Dr.flatMapDeep=function(e,t){return vn(ka(e,t),p)},Dr.flatMapDepth=function(e,t,r){return r=r===o?1:hs(r),vn(ka(e,t),r)},Dr.flatten=qi,Dr.flattenDeep=function(e){return(null==e?0:e.length)?vn(e,p):[]},Dr.flattenDepth=function(e,t){return(null==e?0:e.length)?vn(e,t=t===o?1:hs(t)):[]},Dr.flip=function(e){return Go(e,512)},Dr.flow=tl,Dr.flowRight=rl,Dr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Dr.functions=function(e){return null==e?[]:_n(e,As(e))},Dr.functionsIn=function(e){return null==e?[]:_n(e,Ps(e))},Dr.groupBy=xa,Dr.initial=function(e){return(null==e?0:e.length)?no(e,0,-1):[]},Dr.intersection=Ki,Dr.intersectionBy=Yi,Dr.intersectionWith=Qi,Dr.invert=Ts,Dr.invertBy=Os,Dr.invokeMap=wa,Dr.iteratee=ol,Dr.keyBy=_a,Dr.keys=As,Dr.keysIn=Ps,Dr.map=ka,Dr.mapKeys=function(e,t){var r={};return t=ui(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Dr.mapValues=function(e,t){var r={};return t=ui(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Dr.matches=function(e){return Mn(ln(e,1))},Dr.matchesProperty=function(e,t){return Un(e,ln(t,1))},Dr.memoize=$a,Dr.merge=Ls,Dr.mergeWith=$s,Dr.method=il,Dr.methodOf=al,Dr.mixin=sl,Dr.negate=Na,Dr.nthArg=function(e){return e=hs(e),Jn((function(t){return Wn(t,e)}))},Dr.omit=Ns,Dr.omitBy=function(e,t){return Is(e,Na(ui(t)))},Dr.once=function(e){return Ta(2,e)},Dr.orderBy=function(e,t,r,n){return null==e?[]:(Ha(t)||(t=null==t?[]:[t]),Ha(r=n?o:r)||(r=null==r?[]:[r]),Hn(e,t,r))},Dr.over=ul,Dr.overArgs=za,Dr.overEvery=cl,Dr.overSome=dl,Dr.partial=Ia,Dr.partialRight=Fa,Dr.partition=Sa,Dr.pick=zs,Dr.pickBy=Is,Dr.property=fl,Dr.propertyOf=function(e){return function(t){return null==e?o:kn(e,t)}},Dr.pull=Xi,Dr.pullAll=Gi,Dr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Vn(e,t,ui(r,2)):e},Dr.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Vn(e,t,o,r):e},Dr.pullAt=Zi,Dr.range=pl,Dr.rangeRight=hl,Dr.rearg=Da,Dr.reject=function(e,t){return(Ha(e)?Pt:gn)(e,Na(ui(t,3)))},Dr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=ui(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Dr.rest=function(e,t){if("function"!=typeof e)throw new Oe(i);return Jn(e,t=t===o?t:hs(t))},Dr.reverse=ea,Dr.sampleSize=function(e,t,r){return t=(r?xi(e,t,r):t===o)?1:hs(t),(Ha(e)?Xr:Gn)(e,t)},Dr.set=function(e,t,r){return null==e?e:Zn(e,t,r)},Dr.setWith=function(e,t,r,n){return n="function"==typeof n?n:o,null==e?e:Zn(e,t,r,n)},Dr.shuffle=function(e){return(Ha(e)?Gr:ro)(e)},Dr.slice=function(e,t,r){var n=null==e?0:e.length;return n?(r&&"number"!=typeof r&&xi(e,t,r)?(t=0,r=n):(t=null==t?0:hs(t),r=r===o?n:hs(r)),no(e,t,r)):[]},Dr.sortBy=Ea,Dr.sortedUniq=function(e){return e&&e.length?so(e):[]},Dr.sortedUniqBy=function(e,t){return e&&e.length?so(e,ui(t,2)):[]},Dr.split=function(e,t,r){return r&&"number"!=typeof r&&xi(e,t,r)&&(t=r=o),(r=r===o?g:r>>>0)?(e=ys(e))&&("string"==typeof t||null!=t&&!is(t))&&!(t=uo(t))&&sr(e)?_o(hr(e),0,r):e.split(t,r):[]},Dr.spread=function(e,t){if("function"!=typeof e)throw new Oe(i);return t=null==t?0:Yt(hs(t),0),Jn((function(r){var n=r[t],o=_o(r,0,t);return n&&zt(o,n),jt(e,this,o)}))},Dr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Dr.take=function(e,t,r){return e&&e.length?no(e,0,(t=r||t===o?1:hs(t))<0?0:t):[]},Dr.takeRight=function(e,t,r){var n=null==e?0:e.length;return n?no(e,(t=n-(t=r||t===o?1:hs(t)))<0?0:t,n):[]},Dr.takeRightWhile=function(e,t){return e&&e.length?ho(e,ui(t,3),!1,!0):[]},Dr.takeWhile=function(e,t){return e&&e.length?ho(e,ui(t,3)):[]},Dr.tap=function(e,t){return t(e),e},Dr.throttle=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new Oe(i);return es(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Aa(e,t,{leading:n,maxWait:t,trailing:o})},Dr.thru=pa,Dr.toArray=fs,Dr.toPairs=Fs,Dr.toPairsIn=Ds,Dr.toPath=function(e){return Ha(e)?Nt(e,Ii):ls(e)?[e]:Ro(zi(ys(e)))},Dr.toPlainObject=vs,Dr.transform=function(e,t,r){var n=Ha(e),o=n||Ya(e)||us(e);if(t=ui(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Xa(i)?Mr(Ve(e)):{}}return(o?Ot:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Dr.unary=function(e){return ja(e,1)},Dr.union=ta,Dr.unionBy=ra,Dr.unionWith=na,Dr.uniq=function(e){return e&&e.length?co(e):[]},Dr.uniqBy=function(e,t){return e&&e.length?co(e,ui(t,2)):[]},Dr.uniqWith=function(e,t){return t="function"==typeof t?t:o,e&&e.length?co(e,o,t):[]},Dr.unset=function(e,t){return null==e||fo(e,t)},Dr.unzip=oa,Dr.unzipWith=ia,Dr.update=function(e,t,r){return null==e?e:po(e,t,bo(r))},Dr.updateWith=function(e,t,r,n){return n="function"==typeof n?n:o,null==e?e:po(e,t,bo(r),n)},Dr.values=Ms,Dr.valuesIn=function(e){return null==e?[]:er(e,Ps(e))},Dr.without=aa,Dr.words=Xs,Dr.wrap=function(e,t){return Ia(bo(t),e)},Dr.xor=sa,Dr.xorBy=la,Dr.xorWith=ua,Dr.zip=ca,Dr.zipObject=function(e,t){return vo(e||[],t||[],en)},Dr.zipObjectDeep=function(e,t){return vo(e||[],t||[],Zn)},Dr.zipWith=da,Dr.entries=Fs,Dr.entriesIn=Ds,Dr.extend=xs,Dr.extendWith=ws,sl(Dr,Dr),Dr.add=vl,Dr.attempt=Gs,Dr.camelCase=Us,Dr.capitalize=Bs,Dr.ceil=yl,Dr.clamp=function(e,t,r){return r===o&&(r=t,t=o),r!==o&&(r=(r=gs(r))===r?r:0),t!==o&&(t=(t=gs(t))===t?t:0),sn(gs(e),t,r)},Dr.clone=function(e){return ln(e,4)},Dr.cloneDeep=function(e){return ln(e,5)},Dr.cloneDeepWith=function(e,t){return ln(e,5,t="function"==typeof t?t:o)},Dr.cloneWith=function(e,t){return ln(e,4,t="function"==typeof t?t:o)},Dr.conformsTo=function(e,t){return null==t||un(e,t,As(t))},Dr.deburr=Ws,Dr.defaultTo=function(e,t){return null==e||e!==e?t:e},Dr.divide=bl,Dr.endsWith=function(e,t,r){e=ys(e),t=uo(t);var n=e.length,i=r=r===o?n:sn(hs(r),0,n);return(r-=t.length)>=0&&e.slice(r,i)==t},Dr.eq=Ma,Dr.escape=function(e){return(e=ys(e))&&X.test(e)?e.replace(Q,ir):e},Dr.escapeRegExp=function(e){return(e=ys(e))&&ie.test(e)?e.replace(oe,"\\$&"):e},Dr.every=function(e,t,r){var n=Ha(e)?At:hn;return r&&xi(e,t,r)&&(t=o),n(e,ui(t,3))},Dr.find=ga,Dr.findIndex=Wi,Dr.findKey=function(e,t){return Ut(e,ui(t,3),xn)},Dr.findLast=va,Dr.findLastIndex=Hi,Dr.findLastKey=function(e,t){return Ut(e,ui(t,3),wn)},Dr.floor=xl,Dr.forEach=ya,Dr.forEachRight=ba,Dr.forIn=function(e,t){return null==e?e:yn(e,ui(t,3),Ps)},Dr.forInRight=function(e,t){return null==e?e:bn(e,ui(t,3),Ps)},Dr.forOwn=function(e,t){return e&&xn(e,ui(t,3))},Dr.forOwnRight=function(e,t){return e&&wn(e,ui(t,3))},Dr.get=Cs,Dr.gt=Ua,Dr.gte=Ba,Dr.has=function(e,t){return null!=e&&gi(e,t,jn)},Dr.hasIn=js,Dr.head=Vi,Dr.identity=nl,Dr.includes=function(e,t,r,n){e=Va(e)?e:Ms(e),r=r&&!n?hs(r):0;var o=e.length;return r<0&&(r=Yt(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Wt(e,t,r)>-1},Dr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:hs(r);return o<0&&(o=Yt(n+o,0)),Wt(e,t,o)},Dr.inRange=function(e,t,r){return t=ps(t),r===o?(r=t,t=0):r=ps(r),function(e,t,r){return e>=yr(t,r)&&e<Yt(t,r)}(e=gs(e),t,r)},Dr.invoke=Rs,Dr.isArguments=Wa,Dr.isArray=Ha,Dr.isArrayBuffer=qa,Dr.isArrayLike=Va,Dr.isArrayLikeObject=Ka,Dr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&En(e)==x},Dr.isBuffer=Ya,Dr.isDate=Qa,Dr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Dr.isEmpty=function(e){if(null==e)return!0;if(Va(e)&&(Ha(e)||"string"==typeof e||"function"==typeof e.splice||Ya(e)||us(e)||Wa(e)))return!e.length;var t=mi(e);if(t==E||t==R)return!e.size;if(Si(e))return!zn(e).length;for(var r in e)if(Ne.call(e,r))return!1;return!0},Dr.isEqual=function(e,t){return Pn(e,t)},Dr.isEqualWith=function(e,t,r){var n=(r="function"==typeof r?r:o)?r(e,t):o;return n===o?Pn(e,t,o,r):!!n},Dr.isError=Ja,Dr.isFinite=function(e){return"number"==typeof e&&bt(e)},Dr.isFunction=Xa,Dr.isInteger=Ga,Dr.isLength=Za,Dr.isMap=rs,Dr.isMatch=function(e,t){return e===t||Ln(e,t,di(t))},Dr.isMatchWith=function(e,t,r){return r="function"==typeof r?r:o,Ln(e,t,di(t),r)},Dr.isNaN=function(e){return ns(e)&&e!=+e},Dr.isNative=function(e){if(ki(e))throw new se("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return $n(e)},Dr.isNil=function(e){return null==e},Dr.isNull=function(e){return null===e},Dr.isNumber=ns,Dr.isObject=es,Dr.isObjectLike=ts,Dr.isPlainObject=os,Dr.isRegExp=is,Dr.isSafeInteger=function(e){return Ga(e)&&e>=-9007199254740991&&e<=h},Dr.isSet=as,Dr.isString=ss,Dr.isSymbol=ls,Dr.isTypedArray=us,Dr.isUndefined=function(e){return e===o},Dr.isWeakMap=function(e){return ts(e)&&mi(e)==L},Dr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==En(e)},Dr.join=function(e,t){return null==e?"":xt.call(e,t)},Dr.kebabCase=Hs,Dr.last=Ji,Dr.lastIndexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=n;return r!==o&&(i=(i=hs(r))<0?Yt(n+i,0):yr(i,n-1)),t===t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,i):Bt(e,qt,i,!0)},Dr.lowerCase=qs,Dr.lowerFirst=Vs,Dr.lt=cs,Dr.lte=ds,Dr.max=function(e){return e&&e.length?mn(e,nl,Cn):o},Dr.maxBy=function(e,t){return e&&e.length?mn(e,ui(t,2),Cn):o},Dr.mean=function(e){return Vt(e,nl)},Dr.meanBy=function(e,t){return Vt(e,ui(t,2))},Dr.min=function(e){return e&&e.length?mn(e,nl,Fn):o},Dr.minBy=function(e,t){return e&&e.length?mn(e,ui(t,2),Fn):o},Dr.stubArray=ml,Dr.stubFalse=gl,Dr.stubObject=function(){return{}},Dr.stubString=function(){return""},Dr.stubTrue=function(){return!0},Dr.multiply=wl,Dr.nth=function(e,t){return e&&e.length?Wn(e,hs(t)):o},Dr.noConflict=function(){return mt._===this&&(mt._=Me),this},Dr.noop=ll,Dr.now=Ca,Dr.pad=function(e,t,r){e=ys(e);var n=(t=hs(t))?pr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return qo(ht(o),r)+e+qo(pt(o),r)},Dr.padEnd=function(e,t,r){e=ys(e);var n=(t=hs(t))?pr(e):0;return t&&n<t?e+qo(t-n,r):e},Dr.padStart=function(e,t,r){e=ys(e);var n=(t=hs(t))?pr(e):0;return t&&n<t?qo(t-n,r)+e:e},Dr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(ys(e).replace(ae,""),t||0)},Dr.random=function(e,t,r){if(r&&"boolean"!=typeof r&&xi(e,t,r)&&(t=r=o),r===o&&("boolean"==typeof t?(r=t,t=o):"boolean"==typeof e&&(r=e,e=o)),e===o&&t===o?(e=0,t=1):(e=ps(e),t===o?(t=e,e=0):t=ps(t)),e>t){var n=e;e=t,t=n}if(r||e%1||t%1){var i=wr();return yr(e+i*(t-e+dt("1e-"+((i+"").length-1))),t)}return Yn(e,t)},Dr.reduce=function(e,t,r){var n=Ha(e)?It:Qt,o=arguments.length<3;return n(e,ui(t,4),r,o,fn)},Dr.reduceRight=function(e,t,r){var n=Ha(e)?Ft:Qt,o=arguments.length<3;return n(e,ui(t,4),r,o,pn)},Dr.repeat=function(e,t,r){return t=(r?xi(e,t,r):t===o)?1:hs(t),Qn(ys(e),t)},Dr.replace=function(){var e=arguments,t=ys(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Dr.result=function(e,t,r){var n=-1,i=(t=xo(t,e)).length;for(i||(i=1,e=o);++n<i;){var a=null==e?o:e[Ii(t[n])];a===o&&(n=i,a=r),e=Xa(a)?a.call(e):a}return e},Dr.round=_l,Dr.runInContext=e,Dr.sample=function(e){return(Ha(e)?Jr:Xn)(e)},Dr.size=function(e){if(null==e)return 0;if(Va(e))return ss(e)?pr(e):e.length;var t=mi(e);return t==E||t==R?e.size:zn(e).length},Dr.snakeCase=Ks,Dr.some=function(e,t,r){var n=Ha(e)?Dt:oo;return r&&xi(e,t,r)&&(t=o),n(e,ui(t,3))},Dr.sortedIndex=function(e,t){return io(e,t)},Dr.sortedIndexBy=function(e,t,r){return ao(e,t,ui(r,2))},Dr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Ma(e[n],t))return n}return-1},Dr.sortedLastIndex=function(e,t){return io(e,t,!0)},Dr.sortedLastIndexBy=function(e,t,r){return ao(e,t,ui(r,2),!0)},Dr.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=io(e,t,!0)-1;if(Ma(e[r],t))return r}return-1},Dr.startCase=Ys,Dr.startsWith=function(e,t,r){return e=ys(e),r=null==r?0:sn(hs(r),0,e.length),t=uo(t),e.slice(r,r+t.length)==t},Dr.subtract=kl,Dr.sum=function(e){return e&&e.length?Jt(e,nl):0},Dr.sumBy=function(e,t){return e&&e.length?Jt(e,ui(t,2)):0},Dr.template=function(e,t,r){var n=Dr.templateSettings;r&&xi(e,t,r)&&(t=o),e=ys(e),t=ws({},t,n,Zo);var i,a,s=ws({},t.imports,n.imports,Zo),l=As(s),u=er(s,l),c=0,d=t.interpolate||_e,f="__p += '",p=je((t.escape||_e).source+"|"+d.source+"|"+(d===ee?he:_e).source+"|"+(t.evaluate||_e).source+"|$","g"),h="//# sourceURL="+(Ne.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++st+"]")+"\n";e.replace(p,(function(t,r,n,o,s,l){return n||(n=o),f+=e.slice(c,l).replace(ke,ar),r&&(i=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+t.length,t})),f+="';\n";var m=Ne.call(t,"variable")&&t.variable;if(m){if(fe.test(m))throw new se("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(q,""):f).replace(V,"$1").replace(K,"$1;"),f="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var g=Gs((function(){return Se(l,h+"return "+f).apply(o,u)}));if(g.source=f,Ja(g))throw g;return g},Dr.times=function(e,t){if((e=hs(e))<1||e>h)return[];var r=g,n=yr(e,g);t=ui(t),e-=g;for(var o=Xt(n,t);++r<e;)t(r);return o},Dr.toFinite=ps,Dr.toInteger=hs,Dr.toLength=ms,Dr.toLower=function(e){return ys(e).toLowerCase()},Dr.toNumber=gs,Dr.toSafeInteger=function(e){return e?sn(hs(e),-9007199254740991,h):0===e?e:0},Dr.toString=ys,Dr.toUpper=function(e){return ys(e).toUpperCase()},Dr.trim=function(e,t,r){if((e=ys(e))&&(r||t===o))return Gt(e);if(!e||!(t=uo(t)))return e;var n=hr(e),i=hr(t);return _o(n,rr(n,i),nr(n,i)+1).join("")},Dr.trimEnd=function(e,t,r){if((e=ys(e))&&(r||t===o))return e.slice(0,mr(e)+1);if(!e||!(t=uo(t)))return e;var n=hr(e);return _o(n,0,nr(n,hr(t))+1).join("")},Dr.trimStart=function(e,t,r){if((e=ys(e))&&(r||t===o))return e.replace(ae,"");if(!e||!(t=uo(t)))return e;var n=hr(e);return _o(n,rr(n,hr(t))).join("")},Dr.truncate=function(e,t){var r=30,n="...";if(es(t)){var i="separator"in t?t.separator:i;r="length"in t?hs(t.length):r,n="omission"in t?uo(t.omission):n}var a=(e=ys(e)).length;if(sr(e)){var s=hr(e);a=s.length}if(r>=a)return e;var l=r-pr(n);if(l<1)return n;var u=s?_o(s,0,l).join(""):e.slice(0,l);if(i===o)return u+n;if(s&&(l+=u.length-l),is(i)){if(e.slice(l).search(i)){var c,d=u;for(i.global||(i=je(i.source,ys(me.exec(i))+"g")),i.lastIndex=0;c=i.exec(d);)var f=c.index;u=u.slice(0,f===o?l:f)}}else if(e.indexOf(uo(i),l)!=l){var p=u.lastIndexOf(i);p>-1&&(u=u.slice(0,p))}return u+n},Dr.unescape=function(e){return(e=ys(e))&&J.test(e)?e.replace(Y,gr):e},Dr.uniqueId=function(e){var t=++ze;return ys(e)+t},Dr.upperCase=Qs,Dr.upperFirst=Js,Dr.each=ya,Dr.eachRight=ba,Dr.first=Vi,sl(Dr,function(){var e={};return xn(Dr,(function(t,r){Ne.call(Dr.prototype,r)||(e[r]=t)})),e}(),{chain:!1}),Dr.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Dr[e].placeholder=Dr})),Ot(["drop","take"],(function(e,t){Wr.prototype[e]=function(r){r=r===o?1:Yt(hs(r),0);var n=this.__filtered__&&!t?new Wr(this):this.clone();return n.__filtered__?n.__takeCount__=yr(r,n.__takeCount__):n.__views__.push({size:yr(r,g),type:e+(n.__dir__<0?"Right":"")}),n},Wr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ui(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Ot(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Jn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Rn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Na(ui(e)))},Wr.prototype.slice=function(e,t){e=hs(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Wr(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==o&&(r=(t=hs(t))<0?r.dropRight(-t):r.take(t-e)),r)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(g)},xn(Wr.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),n=/^(?:head|last)$/.test(t),i=Dr[n?"take"+("last"==t?"Right":""):t],a=n||/^find/.test(t);i&&(Dr.prototype[t]=function(){var t=this.__wrapped__,s=n?[1]:arguments,l=t instanceof Wr,u=s[0],c=l||Ha(t),d=function(e){var t=i.apply(Dr,zt([e],s));return n&&f?t[0]:t};c&&r&&"function"==typeof u&&1!=u.length&&(l=c=!1);var f=this.__chain__,p=!!this.__actions__.length,h=a&&!f,m=l&&!p;if(!a&&c){t=m?t:new Wr(this);var g=e.apply(t,s);return g.__actions__.push({func:pa,args:[d],thisArg:o}),new Br(g,f)}return h&&m?e.apply(this,s):(g=this.thru(d),h?n?g.value()[0]:g.value():g)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Re[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Dr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ha(o)?o:[],e)}return this[r]((function(r){return t.apply(Ha(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Dr[t];if(r){var n=r.name+"";Ne.call(Rr,n)||(Rr[n]=[]),Rr[n].push({name:t,func:r})}})),Rr[Uo(o,2).name]=[{name:"wrapper",func:o}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Ro(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ro(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ro(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ha(e),n=t<0,o=r?e.length:0,i=function(e,t,r){var n=-1,o=r.length;for(;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=yr(t,e+a);break;case"takeRight":e=Yt(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,u=n?s:a-1,c=this.__iteratees__,d=c.length,f=0,p=yr(l,this.__takeCount__);if(!r||!n&&o==l&&p==l)return mo(e,this.__actions__);var h=[];e:for(;l--&&f<p;){for(var m=-1,g=e[u+=t];++m<d;){var v=c[m],y=v.iteratee,b=v.type,x=y(g);if(2==b)g=x;else if(!x){if(1==b)continue e;break e}}h[f++]=g}return h},Dr.prototype.at=ha,Dr.prototype.chain=function(){return fa(this)},Dr.prototype.commit=function(){return new Br(this.value(),this.__chain__)},Dr.prototype.next=function(){this.__values__===o&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?o:this.__values__[this.__index__++]}},Dr.prototype.plant=function(e){for(var t,r=this;r instanceof Ur;){var n=Di(r);n.__index__=0,n.__values__=o,t?i.__wrapped__=n:t=n;var i=n;r=r.__wrapped__}return i.__wrapped__=e,t},Dr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Wr){var t=e;return this.__actions__.length&&(t=new Wr(this)),(t=t.reverse()).__actions__.push({func:pa,args:[ea],thisArg:o}),new Br(t,this.__chain__)}return this.thru(ea)},Dr.prototype.toJSON=Dr.prototype.valueOf=Dr.prototype.value=function(){return mo(this.__wrapped__,this.__actions__)},Dr.prototype.first=Dr.prototype.head,Xe&&(Dr.prototype[Xe]=function(){return this}),Dr}();mt._=vr,(n=function(){return vr}.call(t,r,t,e))===o||(e.exports=n)}.call(this)},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(e,t,r)=>{"use strict";var n=r(43),o=r(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,r,n,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,r,n){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),_=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),P=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var $=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=$&&e[$]||e["@@iterator"])?e:null}var z,I=Object.assign;function F(e){if(void 0===z)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);z=t&&t[1]||""}return"\n"+z+e}var D=!1;function M(e,t){if(!e||D)return"";D=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),i=n.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{D=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function U(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case _:return"Portal";case E:return"Profiler";case S:return"StrictMode";case O:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return B(e(t))}catch(r){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function V(e){e._valueTracker||(e._valueTracker=function(e){var t=q(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=q(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function J(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=H(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function G(e,t){X(e,t);var r=H(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&Y(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+H(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:H(r)}}function ie(e,t){var r=H(t.value),n=H(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=me(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,ke=null,Se=null;function Ee(e){if(e=xo(e)){if("function"!==typeof _e)throw Error(i(280));var t=e.stateNode;t&&(t=_o(t),_e(e.stateNode,e.type,t))}}function Ce(e){ke?Se?Se.push(e):Se=[e]:ke=e}function je(){if(ke){var e=ke,t=Se;if(Se=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Te(e,t){return e(t)}function Oe(){}var Re=!1;function Ae(e,t,r){if(Re)return e(t,r);Re=!0;try{return Te(e,t,r)}finally{Re=!1,(null!==ke||null!==Se)&&(Oe(),je())}}function Pe(e,t){var r=e.stateNode;if(null===r)return null;var n=_o(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var Le=!1;if(c)try{var $e={};Object.defineProperty($e,"passive",{get:function(){Le=!0}}),window.addEventListener("test",$e,$e),window.removeEventListener("test",$e,$e)}catch(ce){Le=!1}function Ne(e,t,r,n,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var ze=!1,Ie=null,Fe=!1,De=null,Me={onError:function(e){ze=!0,Ie=e}};function Ue(e,t,r,n,o,i,a,s,l){ze=!1,Ie=null,Ne.apply(Me,arguments)}function Be(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(i(188))}function qe(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(n=o.return)){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return He(o),e;if(a===n)return He(o),t;a=a.sibling}throw Error(i(188))}if(r.return!==n.return)r=o,n=a;else{for(var s=!1,l=o.child;l;){if(l===r){s=!0,r=o,n=a;break}if(l===n){s=!0,n=o,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=o;break}if(l===n){s=!0,n=a,r=o;break}l=l.sibling}if(!s)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(e))?Ve(e):null}function Ve(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ve(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,Je=o.unstable_requestPaint,Xe=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,rt=o.unstable_LowPriority,nt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&r;if(0!==a){var s=a&~o;0!==s?n=dt(s):0!==(i&=a)&&(n=dt(i))}else 0!==(a=r&~o)?n=dt(a):0!==i&&(n=dt(i));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&o)&&((o=n&-n)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-at(t)),n|=e[r],t&=~o;return n}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=r}function yt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-at(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,_t,kt,St,Et,Ct=!1,jt=[],Tt=null,Ot=null,Rt=null,At=new Map,Pt=new Map,Lt=[],$t="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":At.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pt.delete(t.pointerId)}}function zt(e,t,r,n,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&_t(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function It(e){var t=bo(e.target);if(null!==t){var r=Be(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=We(r)))return e.blockedOn=t,void Et(e.priority,(function(){kt(r)}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=xo(r))&&_t(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);xe=n,r.target.dispatchEvent(n),xe=null,t.shift()}return!0}function Dt(e,t,r){Ft(e)&&r.delete(t)}function Mt(){Ct=!1,null!==Tt&&Ft(Tt)&&(Tt=null),null!==Ot&&Ft(Ot)&&(Ot=null),null!==Rt&&Ft(Rt)&&(Rt=null),At.forEach(Dt),Pt.forEach(Dt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mt)))}function Bt(e){function t(t){return Ut(t,e)}if(0<jt.length){Ut(jt[0],e);for(var r=1;r<jt.length;r++){var n=jt[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==Ot&&Ut(Ot,e),null!==Rt&&Ut(Rt,e),At.forEach(t),Pt.forEach(t),r=0;r<Lt.length;r++)(n=Lt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<Lt.length&&null===(r=Lt[0]).blockedOn;)It(r),null===r.blockedOn&&Lt.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function qt(e,t,r,n){var o=bt,i=Wt.transition;Wt.transition=null;try{bt=1,Kt(e,t,r,n)}finally{bt=o,Wt.transition=i}}function Vt(e,t,r,n){var o=bt,i=Wt.transition;Wt.transition=null;try{bt=4,Kt(e,t,r,n)}finally{bt=o,Wt.transition=i}}function Kt(e,t,r,n){if(Ht){var o=Qt(e,t,r,n);if(null===o)Hn(e,t,n,Yt,r),Nt(e,n);else if(function(e,t,r,n,o){switch(t){case"focusin":return Tt=zt(Tt,e,t,r,n,o),!0;case"dragenter":return Ot=zt(Ot,e,t,r,n,o),!0;case"mouseover":return Rt=zt(Rt,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return At.set(i,zt(At.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Pt.set(i,zt(Pt.get(i)||null,e,t,r,n,o)),!0}return!1}(o,e,t,r,n))n.stopPropagation();else if(Nt(e,n),4&t&&-1<$t.indexOf(e)){for(;null!==o;){var i=xo(o);if(null!==i&&wt(i),null===(i=Qt(e,t,r,n))&&Hn(e,t,n,Yt,r),i===o)break;o=i}null!==o&&n.stopPropagation()}else Hn(e,t,n,null,r)}}var Yt=null;function Qt(e,t,r,n){if(Yt=null,null!==(e=bo(e=we(n))))if(null===(t=Be(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Jt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ze:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Xt=null,Gt=null,Zt=null;function er(){if(Zt)return Zt;var e,t,r=Gt,n=r.length,o="value"in Xt?Xt.value:Xt.textContent,i=o.length;for(e=0;e<n&&r[e]===o[e];e++);var a=n-e;for(t=1;t<=a&&r[n-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function or(e){function t(t,r,n,o,i){for(var a in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ir,ar,sr,lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ur=or(lr),cr=I({},lr,{view:0,detail:0}),dr=or(cr),fr=I({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&"mousemove"===e.type?(ir=e.screenX-sr.screenX,ar=e.screenY-sr.screenY):ar=ir=0,sr=e),ir)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),pr=or(fr),hr=or(I({},fr,{dataTransfer:0})),mr=or(I({},cr,{relatedTarget:0})),gr=or(I({},lr,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=I({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yr=or(vr),br=or(I({},lr,{data:0})),xr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=_r[e])&&!!t[e]}function Sr(){return kr}var Er=I({},cr,{key:function(e){if(e.key){var t=xr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cr=or(Er),jr=or(I({},fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tr=or(I({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr})),Or=or(I({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rr=I({},fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ar=or(Rr),Pr=[9,13,27,32],Lr=c&&"CompositionEvent"in window,$r=null;c&&"documentMode"in document&&($r=document.documentMode);var Nr=c&&"TextEvent"in window&&!$r,zr=c&&(!Lr||$r&&8<$r&&11>=$r),Ir=String.fromCharCode(32),Fr=!1;function Dr(e,t){switch(e){case"keyup":return-1!==Pr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Ur=!1;var Br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Br[e.type]:"textarea"===t}function Hr(e,t,r,n){Ce(n),0<(t=Vn(t,"onChange")).length&&(r=new ur("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var qr=null,Vr=null;function Kr(e){Fn(e,0)}function Yr(e){if(K(wo(e)))return e}function Qr(e,t){if("change"===e)return t}var Jr=!1;if(c){var Xr;if(c){var Gr="oninput"in document;if(!Gr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Gr="function"===typeof Zr.oninput}Xr=Gr}else Xr=!1;Jr=Xr&&(!document.documentMode||9<document.documentMode)}function en(){qr&&(qr.detachEvent("onpropertychange",tn),Vr=qr=null)}function tn(e){if("value"===e.propertyName&&Yr(Vr)){var t=[];Hr(t,Vr,e,we(e)),Ae(Kr,t)}}function rn(e,t,r){"focusin"===e?(en(),Vr=r,(qr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yr(Vr)}function on(e,t){if("click"===e)return Yr(t)}function an(e,t){if("input"===e||"change"===e)return Yr(t)}var sn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ln(e,t){if(sn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!d.call(t,o)||!sn(e[o],t[o]))return!1}return!0}function un(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cn(e,t){var r,n=un(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=un(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fn(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=Y((e=t.contentWindow).document)}return t}function pn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hn(e){var t=fn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dn(r.ownerDocument.documentElement,r)){if(null!==n&&pn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=void 0===n.end?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=cn(r,i);var a=cn(r,n);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mn=c&&"documentMode"in document&&11>=document.documentMode,gn=null,vn=null,yn=null,bn=!1;function xn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;bn||null==gn||gn!==Y(n)||("selectionStart"in(n=gn)&&pn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},yn&&ln(yn,n)||(yn=n,0<(n=Vn(vn,"onSelect")).length&&(t=new ur("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var _n={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},kn={},Sn={};function En(e){if(kn[e])return kn[e];if(!_n[e])return e;var t,r=_n[e];for(t in r)if(r.hasOwnProperty(t)&&t in Sn)return kn[e]=r[t];return e}c&&(Sn=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);var Cn=En("animationend"),jn=En("animationiteration"),Tn=En("animationstart"),On=En("transitionend"),Rn=new Map,An="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Rn.set(e,t),l(t,[e])}for(var Ln=0;Ln<An.length;Ln++){var $n=An[Ln];Pn($n.toLowerCase(),"on"+($n[0].toUpperCase()+$n.slice(1)))}Pn(Cn,"onAnimationEnd"),Pn(jn,"onAnimationIteration"),Pn(Tn,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(On,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zn=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function In(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,a,s,l,u){if(Ue.apply(this,arguments),ze){if(!ze)throw Error(i(198));var c=Ie;ze=!1,Ie=null,Fe||(Fe=!0,De=c)}}(n,t,void 0,e),e.currentTarget=null}function Fn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;In(o,s,u),i=l}else for(a=0;a<n.length;a++){if(l=(s=n[a]).instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;In(o,s,u),i=l}}}if(Fe)throw e=De,Fe=!1,De=null,e}function Dn(e,t){var r=t[go];void 0===r&&(r=t[go]=new Set);var n=e+"__bubble";r.has(n)||(Wn(t,e,2,!1),r.add(n))}function Mn(e,t,r){var n=0;t&&(n|=4),Wn(r,e,n,t)}var Un="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[Un]){e[Un]=!0,a.forEach((function(t){"selectionchange"!==t&&(zn.has(t)||Mn(t,!1,e),Mn(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Un]||(t[Un]=!0,Mn("selectionchange",!1,t))}}function Wn(e,t,r,n){switch(Jt(t)){case 1:var o=qt;break;case 4:o=Vt;break;default:o=Kt}r=o.bind(null,t,r,e),o=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Hn(e,t,r,n,o){var i=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var a=n.tag;if(3===a||4===a){var s=n.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=n.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=bo(s)))return;if(5===(l=a.tag)||6===l){n=i=a;continue e}s=s.parentNode}}n=n.return}Ae((function(){var n=i,o=we(r),a=[];e:{var s=Rn.get(e);if(void 0!==s){var l=ur,u=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":l=Cr;break;case"focusin":u="focus",l=mr;break;case"focusout":u="blur",l=mr;break;case"beforeblur":case"afterblur":l=mr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=hr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Tr;break;case Cn:case jn:case Tn:l=gr;break;case On:l=Or;break;case"scroll":l=dr;break;case"wheel":l=Ar;break;case"copy":case"cut":case"paste":l=yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=jr}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=n;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Pe(h,f))&&c.push(qn(h,m,p)))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,r,o),a.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||r===xe||!(u=r.relatedTarget||r.fromElement)||!bo(u)&&!u[mo])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=n,null!==(u=(u=r.relatedTarget||r.toElement)?bo(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=n),l!==u)){if(c=pr,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=jr,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:wo(l),p=null==u?s:wo(u),(s=new c(m,h+"leave",l,r,o)).target=d,s.relatedTarget=p,m=null,bo(o)===n&&((c=new c(f,h+"enter",u,r,o)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,h=0,p=c=l;p;p=Kn(p))h++;for(p=0,m=f;m;m=Kn(m))p++;for(;0<h-p;)c=Kn(c),h--;for(;0<p-h;)f=Kn(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kn(c),f=Kn(f)}c=null}else c=null;null!==l&&Yn(a,s,l,c,!1),null!==u&&null!==d&&Yn(a,d,u,c,!0)}if("select"===(l=(s=n?wo(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qr;else if(Wr(s))if(Jr)g=an;else{g=nn;var v=rn}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=on);switch(g&&(g=g(e,n))?Hr(a,g,r,o):(v&&v(e,s,n),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=n?wo(n):window,e){case"focusin":(Wr(v)||"true"===v.contentEditable)&&(gn=v,vn=n,yn=null);break;case"focusout":yn=vn=gn=null;break;case"mousedown":bn=!0;break;case"contextmenu":case"mouseup":case"dragend":bn=!1,xn(a,r,o);break;case"selectionchange":if(mn)break;case"keydown":case"keyup":xn(a,r,o)}var y;if(Lr)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ur?Dr(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(zr&&"ko"!==r.locale&&(Ur||"onCompositionStart"!==b?"onCompositionEnd"===b&&Ur&&(y=er()):(Gt="value"in(Xt=o)?Xt.value:Xt.textContent,Ur=!0)),0<(v=Vn(n,b)).length&&(b=new br(b,e,null,r,o),a.push({event:b,listeners:v}),y?b.data=y:null!==(y=Mr(r))&&(b.data=y))),(y=Nr?function(e,t){switch(e){case"compositionend":return Mr(t);case"keypress":return 32!==t.which?null:(Fr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Fr?null:e;default:return null}}(e,r):function(e,t){if(Ur)return"compositionend"===e||!Lr&&Dr(e,t)?(e=er(),Zt=Gt=Xt=null,Ur=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=Vn(n,"onBeforeInput")).length&&(o=new br("onBeforeInput","beforeinput",null,r,o),a.push({event:o,listeners:n}),o.data=y))}Fn(a,t)}))}function qn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Vn(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Pe(e,r))&&n.unshift(qn(e,i,o)),null!=(i=Pe(e,t))&&n.push(qn(e,i,o))),e=e.return}return n}function Kn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yn(e,t,r,n,o){for(var i=t._reactName,a=[];null!==r&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(null!==l&&l===n)break;5===s.tag&&null!==u&&(s=u,o?null!=(l=Pe(r,i))&&a.unshift(qn(r,l,s)):o||null!=(l=Pe(r,i))&&a.push(qn(r,l,s))),r=r.return}0!==a.length&&e.push({event:t,listeners:a})}var Qn=/\r\n?/g,Jn=/\u0000|\uFFFD/g;function Xn(e){return("string"===typeof e?e:""+e).replace(Qn,"\n").replace(Jn,"")}function Gn(e,t,r){if(t=Xn(t),Xn(e)!==t&&r)throw Error(i(425))}function Zn(){}var eo=null,to=null;function ro(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var no="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(so)}:no;function so(e){setTimeout((function(){throw e}))}function lo(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType)if("/$"===(r=o.data)){if(0===n)return e.removeChild(o),void Bt(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=o}while(r);Bt(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,vo="__reactListeners$"+fo,yo="__reactHandles$"+fo;function bo(e){var t=e[po];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mo]||r[po]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=co(e);null!==e;){if(r=e[po])return r;e=co(e)}return t}r=(e=r).parentNode}return null}function xo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function _o(e){return e[ho]||null}var ko=[],So=-1;function Eo(e){return{current:e}}function Co(e){0>So||(e.current=ko[So],ko[So]=null,So--)}function jo(e,t){So++,ko[So]=e.current,e.current=t}var To={},Oo=Eo(To),Ro=Eo(!1),Ao=To;function Po(e,t){var r=e.type.contextTypes;if(!r)return To;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in r)i[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Lo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function $o(){Co(Ro),Co(Oo)}function No(e,t,r){if(Oo.current!==To)throw Error(i(168));jo(Oo,t),jo(Ro,r)}function zo(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var o in n=n.getChildContext())if(!(o in t))throw Error(i(108,W(e)||"Unknown",o));return I({},r,n)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||To,Ao=Oo.current,jo(Oo,e),jo(Ro,Ro.current),!0}function Fo(e,t,r){var n=e.stateNode;if(!n)throw Error(i(169));r?(e=zo(e,t,Ao),n.__reactInternalMemoizedMergedChildContext=e,Co(Ro),Co(Oo),jo(Oo,e)):Co(Ro),jo(Ro,r)}var Do=null,Mo=!1,Uo=!1;function Bo(e){null===Do?Do=[e]:Do.push(e)}function Wo(){if(!Uo&&null!==Do){Uo=!0;var e=0,t=bt;try{var r=Do;for(bt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}Do=null,Mo=!1}catch(o){throw null!==Do&&(Do=Do.slice(e+1)),Ke(Ze,Wo),o}finally{bt=t,Uo=!1}}return null}var Ho=[],qo=0,Vo=null,Ko=0,Yo=[],Qo=0,Jo=null,Xo=1,Go="";function Zo(e,t){Ho[qo++]=Ko,Ho[qo++]=Vo,Vo=e,Ko=t}function ei(e,t,r){Yo[Qo++]=Xo,Yo[Qo++]=Go,Yo[Qo++]=Jo,Jo=e;var n=Xo;e=Go;var o=32-at(n)-1;n&=~(1<<o),r+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,Xo=1<<32-at(t)+o|r<<o|n,Go=i+e}else Xo=1<<i|r<<o|n,Go=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ri(e){for(;e===Vo;)Vo=Ho[--qo],Ho[qo]=null,Ko=Ho[--qo],Ho[qo]=null;for(;e===Jo;)Jo=Yo[--Qo],Yo[Qo]=null,Go=Yo[--Qo],Yo[Qo]=null,Xo=Yo[--Qo],Yo[Qo]=null}var ni=null,oi=null,ii=!1,ai=null;function si(e,t){var r=Pu(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function li(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,oi=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Jo?{id:Xo,overflow:Go}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=Pu(18,null,null,0)).stateNode=t,r.return=e,e.child=r,ni=e,oi=null,!0);default:return!1}}function ui(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ii){var t=oi;if(t){var r=t;if(!li(e,t)){if(ui(e))throw Error(i(418));t=uo(r.nextSibling);var n=ni;t&&li(e,t)?si(n,r):(e.flags=-4097&e.flags|2,ii=!1,ni=e)}}else{if(ui(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ni=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function fi(e){if(e!==ni)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ro(e.type,e.memoizedProps)),t&&(t=oi)){if(ui(e))throw pi(),Error(i(418));for(;t;)si(e,t),t=uo(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){oi=uo(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}oi=null}}else oi=ni?uo(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=oi;e;)e=uo(e.nextSibling)}function hi(){oi=ni=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=x.ReactCurrentBatchConfig;function vi(e,t){if(e&&e.defaultProps){for(var r in t=I({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}var yi=Eo(null),bi=null,xi=null,wi=null;function _i(){wi=xi=bi=null}function ki(e){var t=yi.current;Co(yi),e._currentValue=t}function Si(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ei(e,t){bi=e,wi=xi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function Ci(e){var t=e._currentValue;if(wi!==e)if(e={context:e,memoizedValue:t,next:null},null===xi){if(null===bi)throw Error(i(308));xi=e,bi.dependencies={lanes:0,firstContext:e}}else xi=xi.next=e;return t}var ji=null;function Ti(e){null===ji?ji=[e]:ji.push(e)}function Oi(e,t,r,n){var o=t.interleaved;return null===o?(r.next=r,Ti(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ri(e,n)}function Ri(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var Ai=!1;function Pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Li(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $i(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ni(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&Ol)){var o=n.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Ri(e,r)}return null===(o=n.interleaved)?(t.next=t,Ti(n)):(t.next=o.next,o.next=t),n.interleaved=t,Ri(e,r)}function zi(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}function Ii(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,i=null;if(null!==(r=r.firstBaseUpdate)){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===i?o=i=a:i=i.next=a,r=r.next}while(null!==r);null===i?o=i=t:i=i.next=t}else o=i=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Fi(e,t,r,n){var o=e.updateQueue;Ai=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?i=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,c=u=l=null,s=i;;){var f=s.lane,p=s.eventTime;if((n&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(f=t,p=r,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=I({},d,f);break e;case 2:Ai=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,a|=f;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(f=s).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Il|=a,e.lanes=a,e.memoizedState=d}}function Di(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(i(191,o));o.call(n)}}}var Mi=(new n.Component).refs;function Ui(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:I({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var Bi={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=tu(),o=ru(e),i=$i(n,o);i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=Ni(e,i,o))&&(nu(t,e,o,n),zi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=tu(),o=ru(e),i=$i(n,o);i.tag=1,i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=Ni(e,i,o))&&(nu(t,e,o,n),zi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=tu(),n=ru(e),o=$i(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Ni(e,o,n))&&(nu(t,e,n,r),zi(t,e,n))}};function Wi(e,t,r,n,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!ln(r,n)||!ln(o,i))}function Hi(e,t,r){var n=!1,o=To,i=t.contextType;return"object"===typeof i&&null!==i?i=Ci(i):(o=Lo(t)?Ao:Oo.current,i=(n=null!==(n=t.contextTypes)&&void 0!==n)?Po(e,o):To),t=new t(r,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Bi,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qi(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function Vi(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=Mi,Pi(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ci(i):(i=Lo(t)?Ao:Oo.current,o.context=Po(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(Ui(e,t,i,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&Bi.enqueueReplaceState(o,o.state,null),Fi(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function Ki(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(i(309));var n=r.stateNode}if(!n)throw Error(i(147,e));var o=n,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;t===Mi&&(t=o.refs={}),null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qi(e){return(0,e._init)(e._payload)}function Ji(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=$u(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,r,n){return null===t||6!==t.tag?((t=Fu(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function u(e,t,r,n){var i=r.type;return i===k?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===P&&Qi(i)===t.type)?((n=o(t,r.props)).ref=Ki(e,t,r),n.return=e,n):((n=Nu(r.type,r.key,r.props,null,e.mode,n)).ref=Ki(e,t,r),n.return=e,n)}function c(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Du(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function d(e,t,r,n,i){return null===t||7!==t.tag?((t=zu(r,e.mode,n,i)).return=e,t):((t=o(t,r)).return=e,t)}function f(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=Nu(t.type,t.key,t.props,null,e.mode,r)).ref=Ki(e,null,t),r.return=e,r;case _:return(t=Du(t,e.mode,r)).return=e,t;case P:return f(e,(0,t._init)(t._payload),r)}if(te(t)||N(t))return(t=zu(t,e.mode,r,null)).return=e,t;Yi(e,t)}return null}function p(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==o?null:l(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===o?u(e,t,r,n):null;case _:return r.key===o?c(e,t,r,n):null;case P:return p(e,t,(o=r._init)(r._payload),n)}if(te(r)||N(r))return null!==o?null:d(e,t,r,n,null);Yi(e,r)}return null}function h(e,t,r,n,o){if("string"===typeof n&&""!==n||"number"===typeof n)return l(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return u(t,e=e.get(null===n.key?r:n.key)||null,n,o);case _:return c(t,e=e.get(null===n.key?r:n.key)||null,n,o);case P:return h(e,t,r,(0,n._init)(n._payload),o)}if(te(n)||N(n))return d(t,e=e.get(r)||null,n,o,null);Yi(t,n)}return null}function m(o,i,s,l){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),i=a(v,i,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return r(o,d),ii&&Zo(o,m),u;if(null===d){for(;m<s.length;m++)null!==(d=f(o,s[m],l))&&(i=a(d,i,m),null===c?u=d:c.sibling=d,c=d);return ii&&Zo(o,m),u}for(d=n(o,d);m<s.length;m++)null!==(g=h(d,o,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(o,e)})),ii&&Zo(o,m),u}function g(o,s,l,u){var c=N(l);if("function"!==typeof c)throw Error(i(150));if(null==(l=c.call(l)))throw Error(i(151));for(var d=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),s=a(b,s,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return r(o,m),ii&&Zo(o,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(o,y.value,u))&&(s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return ii&&Zo(o,g),c}for(m=n(o,m);!y.done;g++,y=l.next())null!==(y=h(m,o,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(o,e)})),ii&&Zo(o,g),c}return function e(n,i,a,l){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=i;null!==c;){if(c.key===u){if((u=a.type)===k){if(7===c.tag){r(n,c.sibling),(i=o(c,a.props.children)).return=n,n=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===P&&Qi(u)===c.type){r(n,c.sibling),(i=o(c,a.props)).ref=Ki(n,c,a),i.return=n,n=i;break e}r(n,c);break}t(n,c),c=c.sibling}a.type===k?((i=zu(a.props.children,n.mode,l,a.key)).return=n,n=i):((l=Nu(a.type,a.key,a.props,null,n.mode,l)).ref=Ki(n,i,a),l.return=n,n=l)}return s(n);case _:e:{for(c=a.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){r(n,i.sibling),(i=o(i,a.children||[])).return=n,n=i;break e}r(n,i);break}t(n,i),i=i.sibling}(i=Du(a,n.mode,l)).return=n,n=i}return s(n);case P:return e(n,i,(c=a._init)(a._payload),l)}if(te(a))return m(n,i,a,l);if(N(a))return g(n,i,a,l);Yi(n,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(r(n,i.sibling),(i=o(i,a)).return=n,n=i):(r(n,i),(i=Fu(a,n.mode,l)).return=n,n=i),s(n)):r(n,i)}}var Xi=Ji(!0),Gi=Ji(!1),Zi={},ea=Eo(Zi),ta=Eo(Zi),ra=Eo(Zi);function na(e){if(e===Zi)throw Error(i(174));return e}function oa(e,t){switch(jo(ra,t),jo(ta,e),jo(ea,Zi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Co(ea),jo(ea,t)}function ia(){Co(ea),Co(ta),Co(ra)}function aa(e){na(ra.current);var t=na(ea.current),r=le(t,e.type);t!==r&&(jo(ta,e),jo(ea,r))}function sa(e){ta.current===e&&(Co(ea),Co(ta))}var la=Eo(0);function ua(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function da(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var fa=x.ReactCurrentDispatcher,pa=x.ReactCurrentBatchConfig,ha=0,ma=null,ga=null,va=null,ya=!1,ba=!1,xa=0,wa=0;function _a(){throw Error(i(321))}function ka(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!sn(e[r],t[r]))return!1;return!0}function Sa(e,t,r,n,o,a){if(ha=a,ma=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fa.current=null===e||null===e.memoizedState?ss:ls,e=r(n,o),ba){a=0;do{if(ba=!1,xa=0,25<=a)throw Error(i(301));a+=1,va=ga=null,t.updateQueue=null,fa.current=us,e=r(n,o)}while(ba)}if(fa.current=as,t=null!==ga&&null!==ga.next,ha=0,va=ga=ma=null,ya=!1,t)throw Error(i(300));return e}function Ea(){var e=0!==xa;return xa=0,e}function Ca(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===va?ma.memoizedState=va=e:va=va.next=e,va}function ja(){if(null===ga){var e=ma.alternate;e=null!==e?e.memoizedState:null}else e=ga.next;var t=null===va?ma.memoizedState:va.next;if(null!==t)va=t,ga=e;else{if(null===e)throw Error(i(310));e={memoizedState:(ga=e).memoizedState,baseState:ga.baseState,baseQueue:ga.baseQueue,queue:ga.queue,next:null},null===va?ma.memoizedState=va=e:va=va.next=e}return va}function Ta(e,t){return"function"===typeof t?t(e):t}function Oa(e){var t=ja(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=ga,o=n.baseQueue,a=r.pending;if(null!==a){if(null!==o){var s=o.next;o.next=a.next,a.next=s}n.baseQueue=o=a,r.pending=null}if(null!==o){a=o.next,n=n.baseState;var l=s=null,u=null,c=a;do{var d=c.lane;if((ha&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=f,s=n):u=u.next=f,ma.lanes|=d,Il|=d}c=c.next}while(null!==c&&c!==a);null===u?s=n:u.next=l,sn(n,t.memoizedState)||(xs=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=u,r.lastRenderedState=n}if(null!==(e=r.interleaved)){o=e;do{a=o.lane,ma.lanes|=a,Il|=a,o=o.next}while(o!==e)}else null===o&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ra(e){var t=ja(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(null!==o){r.pending=null;var s=o=o.next;do{a=e(a,s.action),s=s.next}while(s!==o);sn(a,t.memoizedState)||(xs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function Aa(){}function Pa(e,t){var r=ma,n=ja(),o=t(),a=!sn(n.memoizedState,o);if(a&&(n.memoizedState=o,xs=!0),n=n.queue,Ha(Na.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||null!==va&&1&va.memoizedState.tag){if(r.flags|=2048,Da(9,$a.bind(null,r,n,o,t),void 0,null),null===Rl)throw Error(i(349));0!==(30&ha)||La(r,t,o)}return o}function La(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=ma.updateQueue)?(t={lastEffect:null,stores:null},ma.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function $a(e,t,r,n){t.value=r,t.getSnapshot=n,za(t)&&Ia(e)}function Na(e,t,r){return r((function(){za(t)&&Ia(e)}))}function za(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sn(e,r)}catch(n){return!0}}function Ia(e){var t=Ri(e,1);null!==t&&nu(t,e,1,-1)}function Fa(e){var t=Ca();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=rs.bind(null,ma,e),[t.memoizedState,e]}function Da(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=ma.updateQueue)?(t={lastEffect:null,stores:null},ma.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Ma(){return ja().memoizedState}function Ua(e,t,r,n){var o=Ca();ma.flags|=e,o.memoizedState=Da(1|t,r,void 0,void 0===n?null:n)}function Ba(e,t,r,n){var o=ja();n=void 0===n?null:n;var i=void 0;if(null!==ga){var a=ga.memoizedState;if(i=a.destroy,null!==n&&ka(n,a.deps))return void(o.memoizedState=Da(t,r,i,n))}ma.flags|=e,o.memoizedState=Da(1|t,r,i,n)}function Wa(e,t){return Ua(8390656,8,e,t)}function Ha(e,t){return Ba(2048,8,e,t)}function qa(e,t){return Ba(4,2,e,t)}function Va(e,t){return Ba(4,4,e,t)}function Ka(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ya(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Ba(4,4,Ka.bind(null,t,e),r)}function Qa(){}function Ja(e,t){var r=ja();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ka(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Xa(e,t){var r=ja();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ka(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ga(e,t,r){return 0===(21&ha)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=r):(sn(r,t)||(r=mt(),ma.lanes|=r,Il|=r,e.baseState=!0),t)}function Za(e,t){var r=bt;bt=0!==r&&4>r?r:4,e(!0);var n=pa.transition;pa.transition={};try{e(!1),t()}finally{bt=r,pa.transition=n}}function es(){return ja().memoizedState}function ts(e,t,r){var n=ru(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ns(e))os(t,r);else if(null!==(r=Oi(e,t,r,n))){nu(r,e,n,tu()),is(r,t,n)}}function rs(e,t,r){var n=ru(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ns(e))os(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,r);if(o.hasEagerState=!0,o.eagerState=s,sn(s,a)){var l=t.interleaved;return null===l?(o.next=o,Ti(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(u){}null!==(r=Oi(e,t,o,n))&&(nu(r,e,n,o=tu()),is(r,t,n))}}function ns(e){var t=e.alternate;return e===ma||null!==t&&t===ma}function os(e,t){ba=ya=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function is(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,yt(e,r)}}var as={readContext:Ci,useCallback:_a,useContext:_a,useEffect:_a,useImperativeHandle:_a,useInsertionEffect:_a,useLayoutEffect:_a,useMemo:_a,useReducer:_a,useRef:_a,useState:_a,useDebugValue:_a,useDeferredValue:_a,useTransition:_a,useMutableSource:_a,useSyncExternalStore:_a,useId:_a,unstable_isNewReconciler:!1},ss={readContext:Ci,useCallback:function(e,t){return Ca().memoizedState=[e,void 0===t?null:t],e},useContext:Ci,useEffect:Wa,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Ua(4194308,4,Ka.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var r=Ca();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ca();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ts.bind(null,ma,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},Ca().memoizedState=e},useState:Fa,useDebugValue:Qa,useDeferredValue:function(e){return Ca().memoizedState=e},useTransition:function(){var e=Fa(!1),t=e[0];return e=Za.bind(null,e[1]),Ca().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ma,o=Ca();if(ii){if(void 0===r)throw Error(i(407));r=r()}else{if(r=t(),null===Rl)throw Error(i(349));0!==(30&ha)||La(n,t,r)}o.memoizedState=r;var a={value:r,getSnapshot:t};return o.queue=a,Wa(Na.bind(null,n,a,e),[e]),n.flags|=2048,Da(9,$a.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Ca(),t=Rl.identifierPrefix;if(ii){var r=Go;t=":"+t+"R"+(r=(Xo&~(1<<32-at(Xo)-1)).toString(32)+r),0<(r=xa++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=wa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ls={readContext:Ci,useCallback:Ja,useContext:Ci,useEffect:Ha,useImperativeHandle:Ya,useInsertionEffect:qa,useLayoutEffect:Va,useMemo:Xa,useReducer:Oa,useRef:Ma,useState:function(){return Oa(Ta)},useDebugValue:Qa,useDeferredValue:function(e){return Ga(ja(),ga.memoizedState,e)},useTransition:function(){return[Oa(Ta)[0],ja().memoizedState]},useMutableSource:Aa,useSyncExternalStore:Pa,useId:es,unstable_isNewReconciler:!1},us={readContext:Ci,useCallback:Ja,useContext:Ci,useEffect:Ha,useImperativeHandle:Ya,useInsertionEffect:qa,useLayoutEffect:Va,useMemo:Xa,useReducer:Ra,useRef:Ma,useState:function(){return Ra(Ta)},useDebugValue:Qa,useDeferredValue:function(e){var t=ja();return null===ga?t.memoizedState=e:Ga(t,ga.memoizedState,e)},useTransition:function(){return[Ra(Ta)[0],ja().memoizedState]},useMutableSource:Aa,useSyncExternalStore:Pa,useId:es,unstable_isNewReconciler:!1};function cs(e,t){try{var r="",n=t;do{r+=U(n),n=n.return}while(n);var o=r}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function ds(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function fs(e,t){try{console.error(t.value)}catch(r){setTimeout((function(){throw r}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,r){(r=$i(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ql||(ql=!0,Vl=n),fs(0,t)},r}function ms(e,t,r){(r=$i(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){fs(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(r.callback=function(){fs(0,t),"function"!==typeof n&&(null===Kl?Kl=new Set([this]):Kl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function gs(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new ps;var o=new Set;n.set(t,o)}else void 0===(o=n.get(t))&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Cu.bind(null,e,t,r),t.then(e,e))}function vs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ys(e,t,r,n,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=$i(-1,1)).tag=2,Ni(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var bs=x.ReactCurrentOwner,xs=!1;function ws(e,t,r,n){t.child=null===e?Gi(t,null,r,n):Xi(t,e.child,r,n)}function _s(e,t,r,n,o){r=r.render;var i=t.ref;return Ei(t,o),n=Sa(e,t,r,n,i,o),r=Ea(),null===e||xs?(ii&&r&&ti(t),t.flags|=1,ws(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qs(e,t,o))}function ks(e,t,r,n,o){if(null===e){var i=r.type;return"function"!==typeof i||Lu(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Nu(r.type,null,n,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ss(e,t,i,n,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((r=null!==(r=r.compare)?r:ln)(a,n)&&e.ref===t.ref)return qs(e,t,o)}return t.flags|=1,(e=$u(i,n)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,r,n,o){if(null!==e){var i=e.memoizedProps;if(ln(i,n)&&e.ref===t.ref){if(xs=!1,t.pendingProps=n=i,0===(e.lanes&o))return t.lanes=e.lanes,qs(e,t,o);0!==(131072&e.flags)&&(xs=!0)}}return js(e,t,r,n,o)}function Es(e,t,r){var n=t.pendingProps,o=n.children,i=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},jo($l,Ll),Ll|=r;else{if(0===(1073741824&r))return e=null!==i?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,jo($l,Ll),Ll|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==i?i.baseLanes:r,jo($l,Ll),Ll|=n}else null!==i?(n=i.baseLanes|r,t.memoizedState=null):n=r,jo($l,Ll),Ll|=n;return ws(e,t,o,r),t.child}function Cs(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,r,n,o){var i=Lo(r)?Ao:Oo.current;return i=Po(t,i),Ei(t,o),r=Sa(e,t,r,n,i,o),n=Ea(),null===e||xs?(ii&&n&&ti(t),t.flags|=1,ws(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qs(e,t,o))}function Ts(e,t,r,n,o){if(Lo(r)){var i=!0;Io(t)}else i=!1;if(Ei(t,o),null===t.stateNode)Hs(e,t),Hi(t,r,n),Vi(t,r,n,o),n=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=r.contextType;"object"===typeof u&&null!==u?u=Ci(u):u=Po(t,u=Lo(r)?Ao:Oo.current);var c=r.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==n||l!==u)&&qi(t,a,n,u),Ai=!1;var f=t.memoizedState;a.state=f,Fi(t,n,a,o),l=t.memoizedState,s!==n||f!==l||Ro.current||Ai?("function"===typeof c&&(Ui(t,r,c,n),l=t.memoizedState),(s=Ai||Wi(t,r,s,n,f,l,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=u,n=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Li(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:vi(t.type,s),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(l=r.contextType)&&null!==l?l=Ci(l):l=Po(t,l=Lo(r)?Ao:Oo.current);var p=r.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||f!==l)&&qi(t,a,n,l),Ai=!1,f=t.memoizedState,a.state=f,Fi(t,n,a,o);var h=t.memoizedState;s!==d||f!==h||Ro.current||Ai?("function"===typeof p&&(Ui(t,r,p,n),h=t.memoizedState),(u=Ai||Wi(t,r,u,n,f,h,l)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(n,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(n,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=h),a.props=n,a.state=h,a.context=l,n=u):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return Os(e,t,r,n,i,o)}function Os(e,t,r,n,o,i){Cs(e,t);var a=0!==(128&t.flags);if(!n&&!a)return o&&Fo(t,r,!1),qs(e,t,i);n=t.stateNode,bs.current=t;var s=a&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&a?(t.child=Xi(t,e.child,null,i),t.child=Xi(t,null,s,i)):ws(e,t,s,i),t.memoizedState=n.state,o&&Fo(t,r,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?No(0,t.pendingContext,t.pendingContext!==t.context):t.context&&No(0,t.context,!1),oa(e,t.containerInfo)}function As(e,t,r,n,o){return hi(),mi(o),t.flags|=256,ws(e,t,r,n),t.child}var Ps,Ls,$s,Ns,zs={dehydrated:null,treeContext:null,retryLane:0};function Is(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fs(e,t,r){var n,o=t.pendingProps,a=la.current,s=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&a)),n?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),jo(la,1&a),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&o)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Iu(l,o,0,null),e=zu(e,o,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Is(r),t.memoizedState=zs,e):Ds(t,l));if(null!==(a=e.memoizedState)&&null!==(n=a.dehydrated))return function(e,t,r,n,o,a,s){if(r)return 256&t.flags?(t.flags&=-257,Ms(e,t,s,n=ds(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=n.fallback,o=t.mode,n=Iu({mode:"visible",children:n.children},o,0,null),(a=zu(a,o,s,null)).flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,0!==(1&t.mode)&&Xi(t,e.child,null,s),t.child.memoizedState=Is(s),t.memoizedState=zs,a);if(0===(1&t.mode))return Ms(e,t,s,null);if("$!"===o.data){if(n=o.nextSibling&&o.nextSibling.dataset)var l=n.dgst;return n=l,Ms(e,t,s,n=ds(a=Error(i(419)),n,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(n=Rl)){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(n.suspendedLanes|s))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Ri(e,o),nu(n,e,o,-1))}return gu(),Ms(e,t,s,n=ds(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Tu.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=uo(o.nextSibling),ni=t,ii=!0,ai=null,null!==e&&(Yo[Qo++]=Xo,Yo[Qo++]=Go,Yo[Qo++]=Jo,Xo=e.id,Go=e.overflow,Jo=t),t=Ds(t,n.children),t.flags|=4096,t)}(e,t,l,o,n,a,r);if(s){s=o.fallback,l=t.mode,n=(a=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&l)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=$u(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==n?s=$u(n,s):(s=zu(s,l,r,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=null===(l=e.child.memoizedState)?Is(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=zs,o}return e=(s=e.child).sibling,o=$u(s,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=r),o.return=t,o.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Ds(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ms(e,t,r,n){return null!==n&&mi(n),Xi(t,e.child,null,r),(e=Ds(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Us(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Si(e.return,t,r)}function Bs(e,t,r,n,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Ws(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(ws(e,t,n.children,r),0!==(2&(n=la.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Us(e,r,t);else if(19===e.tag)Us(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(jo(la,n),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===ua(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Bs(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ua(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Bs(t,!0,r,null,i);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Il|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=$u(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=$u(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Vs(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=14680064&o.subtreeFlags,n|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Ys(e,t,r){var n=t.pendingProps;switch(ri(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ks(t),null;case 1:case 17:return Lo(t.type)&&$o(),Ks(t),null;case 3:return n=t.stateNode,ia(),Co(Ro),Co(Oo),da(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(su(ai),ai=null))),Ls(e,t),Ks(t),null;case 5:sa(t);var o=na(ra.current);if(r=t.type,null!==e&&null!=t.stateNode)$s(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(i(166));return Ks(t),null}if(e=na(ea.current),fi(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[po]=t,n[ho]=a,e=0!==(1&t.mode),r){case"dialog":Dn("cancel",n),Dn("close",n);break;case"iframe":case"object":case"embed":Dn("load",n);break;case"video":case"audio":for(o=0;o<Nn.length;o++)Dn(Nn[o],n);break;case"source":Dn("error",n);break;case"img":case"image":case"link":Dn("error",n),Dn("load",n);break;case"details":Dn("toggle",n);break;case"input":J(n,a),Dn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Dn("invalid",n);break;case"textarea":oe(n,a),Dn("invalid",n)}for(var l in ye(r,a),o=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"===typeof u?n.textContent!==u&&(!0!==a.suppressHydrationWarning&&Gn(n.textContent,u,e),o=["children",u]):"number"===typeof u&&n.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Gn(n.textContent,u,e),o=["children",""+u]):s.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Dn("scroll",n)}switch(r){case"input":V(n),Z(n,a,!0);break;case"textarea":V(n),ae(n);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(n.onclick=Zn)}n=o,t.updateQueue=n,null!==n&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),"select"===r&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[po]=t,e[ho]=n,Ps(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(r,n),r){case"dialog":Dn("cancel",e),Dn("close",e),o=n;break;case"iframe":case"object":case"embed":Dn("load",e),o=n;break;case"video":case"audio":for(o=0;o<Nn.length;o++)Dn(Nn[o],e);o=n;break;case"source":Dn("error",e),o=n;break;case"img":case"image":case"link":Dn("error",e),Dn("load",e),o=n;break;case"details":Dn("toggle",e),o=n;break;case"input":J(e,n),o=Q(e,n),Dn("invalid",e);break;case"option":default:o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=I({},n,{value:void 0}),Dn("invalid",e);break;case"textarea":oe(e,n),o=ne(e,n),Dn("invalid",e)}for(a in ye(r,o),u=o)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==r||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Dn("scroll",e):null!=c&&b(e,a,c,l))}switch(r){case"input":V(e),Z(e,n,!1);break;case"textarea":V(e),ae(e);break;case"option":null!=n.value&&e.setAttribute("value",""+H(n.value));break;case"select":e.multiple=!!n.multiple,null!=(a=n.value)?re(e,!!n.multiple,a,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ks(t),null;case 6:if(e&&null!=t.stateNode)Ns(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));if(r=na(ra.current),na(ea.current),fi(t)){if(n=t.stateNode,r=t.memoizedProps,n[po]=t,(a=n.nodeValue!==r)&&null!==(e=ni))switch(e.tag){case 3:Gn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Gn(n.nodeValue,r,0!==(1&e.mode))}a&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[po]=t,t.stateNode=n}return Ks(t),null;case 13:if(Co(la),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))pi(),hi(),t.flags|=98560,a=!1;else if(a=fi(t),null!==n&&null!==n.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[po]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),a=!1}else null!==ai&&(su(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&la.current)?0===Nl&&(Nl=3):gu())),null!==t.updateQueue&&(t.flags|=4),Ks(t),null);case 4:return ia(),Ls(e,t),null===e&&Bn(t.stateNode.containerInfo),Ks(t),null;case 10:return ki(t.type._context),Ks(t),null;case 19:if(Co(la),null===(a=t.memoizedState))return Ks(t),null;if(n=0!==(128&t.flags),null===(l=a.rendering))if(n)Vs(a,!1);else{if(0!==Nl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ua(e))){for(t.flags|=128,Vs(a,!1),null!==(n=l.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(a=r).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return jo(la,1&la.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Wl&&(t.flags|=128,n=!0,Vs(a,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=ua(l))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Vs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!ii)return Ks(t),null}else 2*Xe()-a.renderingStartTime>Wl&&1073741824!==r&&(t.flags|=128,n=!0,Vs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=a.last)?r.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,r=la.current,jo(la,n?1&r|2:1&r),t):(Ks(t),null);case 22:case 23:return fu(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Ll)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Qs(e,t){switch(ri(t),t.tag){case 1:return Lo(t.type)&&$o(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ia(),Co(Ro),Co(Oo),da(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return sa(t),null;case 13:if(Co(la),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Co(la),null;case 4:return ia(),null;case 10:return ki(t.type._context),null;case 22:case 23:return fu(),null;default:return null}}Ps=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ls=function(){},$s=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,na(ea.current);var i,a=null;switch(r){case"input":o=Q(e,o),n=Q(e,n),a=[];break;case"select":o=I({},o,{value:void 0}),n=I({},n,{value:void 0}),a=[];break;case"textarea":o=ne(e,o),n=ne(e,n),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof n.onClick&&(e.onclick=Zn)}for(c in ye(r,n),r=null,o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var l=o[c];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(s.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var u=n[c];if(l=null!=o?o[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(i in l)!l.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&l[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(a||(a=[]),a.push(c,r)),r=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(s.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Dn("scroll",e),a||l===u||(a=[])):(a=a||[]).push(c,u))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ns=function(e,t,r,n){r!==n&&(t.flags|=4)};var Js=!1,Xs=!1,Gs="function"===typeof WeakSet?WeakSet:Set,Zs=null;function el(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){Eu(e,t,n)}else r.current=null}function tl(e,t,r){try{r()}catch(n){Eu(e,t,n)}}var rl=!1;function nl(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&tl(t,r,i)}o=o.next}while(o!==n)}}function ol(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function il(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function ll(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ul(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Zn));else if(4!==n&&null!==(e=e.child))for(ul(e,t,r),e=e.sibling;null!==e;)ul(e,t,r),e=e.sibling}function cl(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cl(e,t,r),e=e.sibling;null!==e;)cl(e,t,r),e=e.sibling}var dl=null,fl=!1;function pl(e,t,r){for(r=r.child;null!==r;)hl(e,t,r),r=r.sibling}function hl(e,t,r){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,r)}catch(s){}switch(r.tag){case 5:Xs||el(r,t);case 6:var n=dl,o=fl;dl=null,pl(e,t,r),fl=o,null!==(dl=n)&&(fl?(e=dl,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):dl.removeChild(r.stateNode));break;case 18:null!==dl&&(fl?(e=dl,r=r.stateNode,8===e.nodeType?lo(e.parentNode,r):1===e.nodeType&&lo(e,r),Bt(e)):lo(dl,r.stateNode));break;case 4:n=dl,o=fl,dl=r.stateNode.containerInfo,fl=!0,pl(e,t,r),dl=n,fl=o;break;case 0:case 11:case 14:case 15:if(!Xs&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&tl(r,t,a),o=o.next}while(o!==n)}pl(e,t,r);break;case 1:if(!Xs&&(el(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Eu(r,t,s)}pl(e,t,r);break;case 21:pl(e,t,r);break;case 22:1&r.mode?(Xs=(n=Xs)||null!==r.memoizedState,pl(e,t,r),Xs=n):pl(e,t,r);break;default:pl(e,t,r)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Gs),t.forEach((function(t){var n=Ou.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function gl(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var o=r[n];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,fl=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,fl=!0;break e}l=l.return}if(null===dl)throw Error(i(160));hl(a,s,o),dl=null,fl=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){Eu(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vl(t,e),t=t.sibling}function vl(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),yl(e),4&n){try{nl(3,e,e.return),ol(3,e)}catch(g){Eu(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:gl(t,e),yl(e),512&n&&null!==r&&el(r,r.return);break;case 5:if(gl(t,e),yl(e),512&n&&null!==r&&el(r,r.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){Eu(e,e.return,g)}}if(4&n&&null!=(o=e.stateNode)){var a=e.memoizedProps,s=null!==r?r.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===a.type&&null!=a.name&&X(o,a),be(l,s);var c=be(l,a);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):b(o,d,f,c)}switch(l){case"input":G(o,a);break;case"textarea":ie(o,a);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?re(o,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?re(o,!!a.multiple,a.defaultValue,!0):re(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(g){Eu(e,e.return,g)}}break;case 6:if(gl(t,e),yl(e),4&n){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){Eu(e,e.return,g)}}break;case 3:if(gl(t,e),yl(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:gl(t,e),yl(e);break;case 13:gl(t,e),yl(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Bl=Xe())),4&n&&ml(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Xs=(c=Xs)||d,gl(t,e),Xs=c):gl(t,e),yl(e),8192&n){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zs=e,d=e.child;null!==d;){for(f=Zs=d;null!==Zs;){switch(h=(p=Zs).child,p.tag){case 0:case 11:case 14:case 15:nl(4,p,p.return);break;case 1:el(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){n=p,r=p.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(n,r,g)}}break;case 5:el(p,p.return);break;case 22:if(null!==p.memoizedState){_l(f);continue}}null!==h?(h.return=p,Zs=h):_l(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,c?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=f.stateNode,s=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=me("display",s))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gl(t,e),yl(e),4&n&&ml(e);case 21:}}function yl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(sl(r)){var n=r;break e}r=r.return}throw Error(i(160))}switch(n.tag){case 5:var o=n.stateNode;32&n.flags&&(fe(o,""),n.flags&=-33),cl(e,ll(e),o);break;case 3:case 4:var a=n.stateNode.containerInfo;ul(e,ll(e),a);break;default:throw Error(i(161))}}catch(s){Eu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,r){Zs=e,xl(e,t,r)}function xl(e,t,r){for(var n=0!==(1&e.mode);null!==Zs;){var o=Zs,i=o.child;if(22===o.tag&&n){var a=null!==o.memoizedState||Js;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||Xs;s=Js;var u=Xs;if(Js=a,(Xs=l)&&!u)for(Zs=o;null!==Zs;)l=(a=Zs).child,22===a.tag&&null!==a.memoizedState?kl(o):null!==l?(l.return=a,Zs=l):kl(o);for(;null!==i;)Zs=i,xl(i,t,r),i=i.sibling;Zs=o,Js=s,Xs=u}wl(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Zs=i):wl(e)}}function wl(e){for(;null!==Zs;){var t=Zs;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xs||ol(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Xs)if(null===r)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:vi(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Di(t,a,n);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Di(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(i(163))}Xs||512&t.flags&&il(t)}catch(p){Eu(t,t.return,p)}}if(t===e){Zs=null;break}if(null!==(r=t.sibling)){r.return=t.return,Zs=r;break}Zs=t.return}}function _l(e){for(;null!==Zs;){var t=Zs;if(t===e){Zs=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Zs=r;break}Zs=t.return}}function kl(e){for(;null!==Zs;){var t=Zs;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ol(4,t)}catch(l){Eu(t,r,l)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var o=t.return;try{n.componentDidMount()}catch(l){Eu(t,o,l)}}var i=t.return;try{il(t)}catch(l){Eu(t,i,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Eu(t,a,l)}}}catch(l){Eu(t,t.return,l)}if(t===e){Zs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Zs=s;break}Zs=t.return}}var Sl,El=Math.ceil,Cl=x.ReactCurrentDispatcher,jl=x.ReactCurrentOwner,Tl=x.ReactCurrentBatchConfig,Ol=0,Rl=null,Al=null,Pl=0,Ll=0,$l=Eo(0),Nl=0,zl=null,Il=0,Fl=0,Dl=0,Ml=null,Ul=null,Bl=0,Wl=1/0,Hl=null,ql=!1,Vl=null,Kl=null,Yl=!1,Ql=null,Jl=0,Xl=0,Gl=null,Zl=-1,eu=0;function tu(){return 0!==(6&Ol)?Xe():-1!==Zl?Zl:Zl=Xe()}function ru(e){return 0===(1&e.mode)?1:0!==(2&Ol)&&0!==Pl?Pl&-Pl:null!==gi.transition?(0===eu&&(eu=mt()),eu):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Jt(e.type)}function nu(e,t,r,n){if(50<Xl)throw Xl=0,Gl=null,Error(i(185));vt(e,r,n),0!==(2&Ol)&&e===Rl||(e===Rl&&(0===(2&Ol)&&(Fl|=r),4===Nl&&lu(e,Pl)),ou(e,n),1===r&&0===Ol&&0===(1&t.mode)&&(Wl=Xe()+500,Mo&&Wo()))}function ou(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),s=1<<a,l=o[a];-1===l?0!==(s&r)&&0===(s&n)||(o[a]=pt(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var n=ft(e,e===Rl?Pl:0);if(0===n)null!==r&&Ye(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Ye(r),1===t)0===e.tag?function(e){Mo=!0,Bo(e)}(uu.bind(null,e)):Bo(uu.bind(null,e)),ao((function(){0===(6&Ol)&&Wo()})),r=null;else{switch(xt(n)){case 1:r=Ze;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=Ru(r,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function iu(e,t){if(Zl=-1,eu=0,0!==(6&Ol))throw Error(i(327));var r=e.callbackNode;if(ku()&&e.callbackNode!==r)return null;var n=ft(e,e===Rl?Pl:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=vu(e,n);else{t=n;var o=Ol;Ol|=2;var a=mu();for(Rl===e&&Pl===t||(Hl=null,Wl=Xe()+500,pu(e,t));;)try{bu();break}catch(l){hu(e,l)}_i(),Cl.current=a,Ol=o,null!==Al?t=0:(Rl=null,Pl=0,t=Nl)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(n=o,t=au(e,o))),1===t)throw r=zl,pu(e,0),lu(e,n),ou(e,Xe()),r;if(6===t)lu(e,n);else{if(o=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!sn(i(),o))return!1}catch(s){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=vu(e,n))&&(0!==(a=ht(e))&&(n=a,t=au(e,a))),1===t))throw r=zl,pu(e,0),lu(e,n),ou(e,Xe()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(i(345));case 2:case 5:_u(e,Ul,Hl);break;case 3:if(lu(e,n),(130023424&n)===n&&10<(t=Bl+500-Xe())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&n)!==n){tu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=no(_u.bind(null,e,Ul,Hl),t);break}_u(e,Ul,Hl);break;case 4:if(lu(e,n),(4194240&n)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-at(n);a=1<<s,(s=t[s])>o&&(o=s),n&=~a}if(n=o,10<(n=(120>(n=Xe()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*El(n/1960))-n)){e.timeoutHandle=no(_u.bind(null,e,Ul,Hl),n);break}_u(e,Ul,Hl);break;default:throw Error(i(329))}}}return ou(e,Xe()),e.callbackNode===r?iu.bind(null,e):null}function au(e,t){var r=Ml;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=vu(e,t))&&(t=Ul,Ul=r,null!==t&&su(t)),e}function su(e){null===Ul?Ul=e:Ul.push.apply(Ul,e)}function lu(e,t){for(t&=~Dl,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-at(t),n=1<<r;e[r]=-1,t&=~n}}function uu(e){if(0!==(6&Ol))throw Error(i(327));ku();var t=ft(e,0);if(0===(1&t))return ou(e,Xe()),null;var r=vu(e,t);if(0!==e.tag&&2===r){var n=ht(e);0!==n&&(t=n,r=au(e,n))}if(1===r)throw r=zl,pu(e,0),lu(e,t),ou(e,Xe()),r;if(6===r)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_u(e,Ul,Hl),ou(e,Xe()),null}function cu(e,t){var r=Ol;Ol|=1;try{return e(t)}finally{0===(Ol=r)&&(Wl=Xe()+500,Mo&&Wo())}}function du(e){null!==Ql&&0===Ql.tag&&0===(6&Ol)&&ku();var t=Ol;Ol|=1;var r=Tl.transition,n=bt;try{if(Tl.transition=null,bt=1,e)return e()}finally{bt=n,Tl.transition=r,0===(6&(Ol=t))&&Wo()}}function fu(){Ll=$l.current,Co($l)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,oo(r)),null!==Al)for(r=Al.return;null!==r;){var n=r;switch(ri(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&$o();break;case 3:ia(),Co(Ro),Co(Oo),da();break;case 5:sa(n);break;case 4:ia();break;case 13:case 19:Co(la);break;case 10:ki(n.type._context);break;case 22:case 23:fu()}r=r.return}if(Rl=e,Al=e=$u(e.current,null),Pl=Ll=t,Nl=0,zl=null,Dl=Fl=Il=0,Ul=Ml=null,null!==ji){for(t=0;t<ji.length;t++)if(null!==(n=(r=ji[t]).interleaved)){r.interleaved=null;var o=n.next,i=r.pending;if(null!==i){var a=i.next;i.next=o,n.next=a}r.pending=n}ji=null}return e}function hu(e,t){for(;;){var r=Al;try{if(_i(),fa.current=as,ya){for(var n=ma.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ya=!1}if(ha=0,va=ga=ma=null,ba=!1,xa=0,jl.current=null,null===r||null===r.return){Nl=1,zl=t,Al=null;break}e:{var a=e,s=r.return,l=r,u=t;if(t=Pl,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=vs(s);if(null!==h){h.flags&=-257,ys(h,s,l,0,t),1&h.mode&&gs(a,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){gs(a,c,t),gu();break e}u=Error(i(426))}else if(ii&&1&l.mode){var v=vs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),ys(v,s,l,0,t),mi(cs(u,l));break e}}a=u=cs(u,l),4!==Nl&&(Nl=2),null===Ml?Ml=[a]:Ml.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Ii(a,hs(0,u,t));break e;case 1:l=u;var y=a.type,b=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Kl||!Kl.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Ii(a,ms(a,l,t));break e}}a=a.return}while(null!==a)}wu(r)}catch(x){t=x,Al===r&&null!==r&&(Al=r=r.return);continue}break}}function mu(){var e=Cl.current;return Cl.current=as,null===e?as:e}function gu(){0!==Nl&&3!==Nl&&2!==Nl||(Nl=4),null===Rl||0===(268435455&Il)&&0===(268435455&Fl)||lu(Rl,Pl)}function vu(e,t){var r=Ol;Ol|=2;var n=mu();for(Rl===e&&Pl===t||(Hl=null,pu(e,t));;)try{yu();break}catch(o){hu(e,o)}if(_i(),Ol=r,Cl.current=n,null!==Al)throw Error(i(261));return Rl=null,Pl=0,Nl}function yu(){for(;null!==Al;)xu(Al)}function bu(){for(;null!==Al&&!Qe();)xu(Al)}function xu(e){var t=Sl(e.alternate,e,Ll);e.memoizedProps=e.pendingProps,null===t?wu(e):Al=t,jl.current=null}function wu(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Ys(r,t,Ll)))return void(Al=r)}else{if(null!==(r=Qs(r,t)))return r.flags&=32767,void(Al=r);if(null===e)return Nl=6,void(Al=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Al=t);Al=t=e}while(null!==t);0===Nl&&(Nl=5)}function _u(e,t,r){var n=bt,o=Tl.transition;try{Tl.transition=null,bt=1,function(e,t,r,n){do{ku()}while(null!==Ql);if(0!==(6&Ol))throw Error(i(327));r=e.finishedWork;var o=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-at(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}(e,a),e===Rl&&(Al=Rl=null,Pl=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Yl||(Yl=!0,Ru(tt,(function(){return ku(),null}))),a=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||a){a=Tl.transition,Tl.transition=null;var s=bt;bt=1;var l=Ol;Ol|=4,jl.current=null,function(e,t){if(eo=Ht,pn(e=fn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var o=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch(w){r=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==r||0!==o&&3!==f.nodeType||(l=s+o),f!==a||0!==n&&3!==f.nodeType||(u=s+n),3===f.nodeType&&(s+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===r&&++c===o&&(l=s),p===a&&++d===n&&(u=s),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(to={focusedElem:e,selectionRange:r},Ht=!1,Zs=t;null!==Zs;)if(e=(t=Zs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zs=e;else for(;null!==Zs;){t=Zs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:vi(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zs=e;break}Zs=t.return}m=rl,rl=!1}(e,r),vl(r,e),hn(to),Ht=!!eo,to=eo=null,e.current=r,bl(r,e,o),Je(),Ol=l,bt=s,Tl.transition=a}else e.current=r;if(Yl&&(Yl=!1,Ql=e,Jl=o),a=e.pendingLanes,0===a&&(Kl=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),ou(e,Xe()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ql)throw ql=!1,e=Vl,Vl=null,e;0!==(1&Jl)&&0!==e.tag&&ku(),a=e.pendingLanes,0!==(1&a)?e===Gl?Xl++:(Xl=0,Gl=e):Xl=0,Wo()}(e,t,r,n)}finally{Tl.transition=o,bt=n}return null}function ku(){if(null!==Ql){var e=xt(Jl),t=Tl.transition,r=bt;try{if(Tl.transition=null,bt=16>e?16:e,null===Ql)var n=!1;else{if(e=Ql,Ql=null,Jl=0,0!==(6&Ol))throw Error(i(331));var o=Ol;for(Ol|=4,Zs=e.current;null!==Zs;){var a=Zs,s=a.child;if(0!==(16&Zs.flags)){var l=a.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Zs=c;null!==Zs;){var d=Zs;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var f=d.child;if(null!==f)f.return=d,Zs=f;else for(;null!==Zs;){var p=(d=Zs).sibling,h=d.return;if(al(d),d===c){Zs=null;break}if(null!==p){p.return=h,Zs=p;break}Zs=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Zs=s;else e:for(;null!==Zs;){if(0!==(2048&(a=Zs).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Zs=y;break e}Zs=a.return}}var b=e.current;for(Zs=b;null!==Zs;){var x=(s=Zs).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Zs=x;else e:for(s=b;null!==Zs;){if(0!==(2048&(l=Zs).flags))try{switch(l.tag){case 0:case 11:case 15:ol(9,l)}}catch(_){Eu(l,l.return,_)}if(l===s){Zs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Zs=w;break e}Zs=l.return}}if(Ol=o,Wo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(_){}n=!0}return n}finally{bt=r,Tl.transition=t}}return!1}function Su(e,t,r){e=Ni(e,t=hs(0,t=cs(r,t),1),1),t=tu(),null!==e&&(vt(e,1,t),ou(e,t))}function Eu(e,t,r){if(3===e.tag)Su(e,e,r);else for(;null!==t;){if(3===t.tag){Su(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Kl||!Kl.has(n))){t=Ni(t,e=ms(t,e=cs(r,e),1),1),e=tu(),null!==t&&(vt(t,1,e),ou(t,e));break}}t=t.return}}function Cu(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&r,Rl===e&&(Pl&r)===r&&(4===Nl||3===Nl&&(130023424&Pl)===Pl&&500>Xe()-Bl?pu(e,0):Dl|=r),ou(e,t)}function ju(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var r=tu();null!==(e=Ri(e,t))&&(vt(e,t,r),ou(e,r))}function Tu(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),ju(e,r)}function Ou(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;null!==o&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(i(314))}null!==n&&n.delete(t),ju(e,r)}function Ru(e,t){return Ke(e,t)}function Au(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pu(e,t,r,n){return new Au(e,t,r,n)}function Lu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function $u(e,t){var r=e.alternate;return null===r?((r=Pu(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Nu(e,t,r,n,o,a){var s=2;if(n=e,"function"===typeof e)Lu(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case k:return zu(r.children,o,a,t);case S:s=8,o|=8;break;case E:return(e=Pu(12,r,t,2|o)).elementType=E,e.lanes=a,e;case O:return(e=Pu(13,r,t,o)).elementType=O,e.lanes=a,e;case R:return(e=Pu(19,r,t,o)).elementType=R,e.lanes=a,e;case L:return Iu(r,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case j:s=9;break e;case T:s=11;break e;case A:s=14;break e;case P:s=16,n=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Pu(s,r,t,o)).elementType=e,t.type=n,t.lanes=a,t}function zu(e,t,r,n){return(e=Pu(7,e,n,t)).lanes=r,e}function Iu(e,t,r,n){return(e=Pu(22,e,n,t)).elementType=L,e.lanes=r,e.stateNode={isHidden:!1},e}function Fu(e,t,r){return(e=Pu(6,e,null,t)).lanes=r,e}function Du(e,t,r){return(t=Pu(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mu(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Uu(e,t,r,n,o,i,a,s,l){return e=new Mu(e,t,r,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Pu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pi(i),e}function Bu(e){if(!e)return To;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var r=e.type;if(Lo(r))return zo(e,r,t)}return t}function Wu(e,t,r,n,o,i,a,s,l){return(e=Uu(r,n,!0,e,0,i,0,s,l)).context=Bu(null),r=e.current,(i=$i(n=tu(),o=ru(r))).callback=void 0!==t&&null!==t?t:null,Ni(r,i,o),e.current.lanes=o,vt(e,o,n),ou(e,n),e}function Hu(e,t,r,n){var o=t.current,i=tu(),a=ru(o);return r=Bu(r),null===t.context?t.context=r:t.pendingContext=r,(t=$i(i,a)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=Ni(o,t,a))&&(nu(e,o,a,i),zi(e,o,a)),a}function qu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Sl=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ro.current)xs=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return xs=!1,function(e,t,r){switch(t.tag){case 3:Rs(t),hi();break;case 5:aa(t);break;case 1:Lo(t.type)&&Io(t);break;case 4:oa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;jo(yi,n._currentValue),n._currentValue=o;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(jo(la,1&la.current),t.flags|=128,null):0!==(r&t.child.childLanes)?Fs(e,t,r):(jo(la,1&la.current),null!==(e=qs(e,t,r))?e.sibling:null);jo(la,1&la.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return Ws(e,t,r);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),jo(la,la.current),n)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,r)}return qs(e,t,r)}(e,t,r);xs=0!==(131072&e.flags)}else xs=!1,ii&&0!==(1048576&t.flags)&&ei(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Hs(e,t),e=t.pendingProps;var o=Po(t,Oo.current);Ei(t,r),o=Sa(null,t,n,e,o,r);var a=Ea();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lo(n)?(a=!0,Io(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Pi(t),o.updater=Bi,t.stateNode=o,o._reactInternals=t,Vi(t,n,e,r),t=Os(null,t,n,!0,a,r)):(t.tag=0,ii&&a&&ti(t),ws(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,n=(o=n._init)(n._payload),t.type=n,o=t.tag=function(e){if("function"===typeof e)return Lu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===A)return 14}return 2}(n),e=vi(n,e),o){case 0:t=js(null,t,n,e,r);break e;case 1:t=Ts(null,t,n,e,r);break e;case 11:t=_s(null,t,n,e,r);break e;case 14:t=ks(null,t,n,vi(n.type,e),r);break e}throw Error(i(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,js(e,t,n,o=t.elementType===n?o:vi(n,o),r);case 1:return n=t.type,o=t.pendingProps,Ts(e,t,n,o=t.elementType===n?o:vi(n,o),r);case 3:e:{if(Rs(t),null===e)throw Error(i(387));n=t.pendingProps,o=(a=t.memoizedState).element,Li(e,t),Fi(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated){if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=As(e,t,n,r,o=cs(Error(i(423)),t));break e}if(n!==o){t=As(e,t,n,r,o=cs(Error(i(424)),t));break e}for(oi=uo(t.stateNode.containerInfo.firstChild),ni=t,ii=!0,ai=null,r=Gi(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(hi(),n===o){t=qs(e,t,r);break e}ws(e,t,n,r)}t=t.child}return t;case 5:return aa(t),null===e&&ci(t),n=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,s=o.children,ro(n,o)?s=null:null!==a&&ro(n,a)&&(t.flags|=32),Cs(e,t),ws(e,t,s,r),t.child;case 6:return null===e&&ci(t),null;case 13:return Fs(e,t,r);case 4:return oa(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=Xi(t,null,n,r):ws(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,_s(e,t,n,o=t.elementType===n?o:vi(n,o),r);case 7:return ws(e,t,t.pendingProps,r),t.child;case 8:case 12:return ws(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,jo(yi,n._currentValue),n._currentValue=s,null!==a)if(sn(a.value,s)){if(a.children===o.children&&!Ro.current){t=qs(e,t,r);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var u=l.firstContext;null!==u;){if(u.context===n){if(1===a.tag){(u=$i(-1,r&-r)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=r,null!==(u=a.alternate)&&(u.lanes|=r),Si(a.return,r,t),l.lanes|=r;break}u=u.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(i(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),Si(s,r,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}ws(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Ei(t,r),n=n(o=Ci(o)),t.flags|=1,ws(e,t,n,r),t.child;case 14:return o=vi(n=t.type,t.pendingProps),ks(e,t,n,o=vi(n.type,o),r);case 15:return Ss(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:vi(n,o),Hs(e,t),t.tag=1,Lo(n)?(e=!0,Io(t)):e=!1,Ei(t,r),Hi(t,n,o),Vi(t,n,o,r),Os(null,t,n,!0,e,r);case 19:return Ws(e,t,r);case 22:return Es(e,t,r)}throw Error(i(156,t.tag))};var Yu="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Ju(e){this._internalRoot=e}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function ec(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if("function"===typeof o){var s=o;o=function(){var e=qu(a);s.call(e)}}Hu(t,a,e,o)}else a=function(e,t,r,n,o){if(o){if("function"===typeof n){var i=n;n=function(){var e=qu(a);i.call(e)}}var a=Wu(t,n,e,0,null,!1,0,"",Zu);return e._reactRootContainer=a,e[mo]=a.current,Bn(8===e.nodeType?e.parentNode:e),du(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof n){var s=n;n=function(){var e=qu(l);s.call(e)}}var l=Uu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=l,e[mo]=l.current,Bn(8===e.nodeType?e.parentNode:e),du((function(){Hu(t,l,r,n)})),l}(r,t,e,o,n);return qu(a)}Ju.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Hu(e,t,null,null)},Ju.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du((function(){Hu(null,e,null,null)})),t[mo]=null}},Ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Lt.length&&0!==t&&t<Lt[r].priority;r++);Lt.splice(r,0,e),0===r&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dt(t.pendingLanes);0!==r&&(yt(t,1|r),ou(t,Xe()),0===(6&Ol)&&(Wl=Xe()+500,Wo()))}break;case 13:du((function(){var t=Ri(e,1);if(null!==t){var r=tu();nu(t,e,1,r)}})),Ku(e,1)}},_t=function(e){if(13===e.tag){var t=Ri(e,134217728);if(null!==t)nu(t,e,134217728,tu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=ru(e),r=Ri(e,t);if(null!==r)nu(r,e,t,tu());Ku(e,t)}},St=function(){return bt},Et=function(e,t){var r=bt;try{return bt=e,t()}finally{bt=r}},_e=function(e,t,r){switch(t){case"input":if(G(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=_o(n);if(!o)throw Error(i(90));K(n),G(n,o)}}}break;case"textarea":ie(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Te=cu,Oe=du;var tc={usingClientEntryPoint:!1,Events:[xo,wo,_o,Ce,je,cu]},rc={findFiberByHostInstance:bo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nc={bundleType:rc.bundleType,version:rc.version,rendererPackageName:rc.rendererPackageName,rendererConfig:rc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=qe(e))?null:e.stateNode},findFiberByHostInstance:rc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{ot=oc.inject(nc),it=oc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xu(t))throw Error(i(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:_,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!Xu(e))throw Error(i(299));var r=!1,n="",o=Yu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Uu(e,1,!1,null,0,r,0,n,o),e[mo]=t.current,Bn(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=qe(t))?null:e.stateNode},t.flushSync=function(e){return du(e)},t.hydrate=function(e,t,r){if(!Gu(t))throw Error(i(200));return ec(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!Xu(e))throw Error(i(405));var n=null!=r&&r.hydratedSources||null,o=!1,a="",s=Yu;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(o=!0),void 0!==r.identifierPrefix&&(a=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=Wu(t,null,e,1,null!=r?r:null,o,0,a,s),e[mo]=t.current,Bn(e),n)for(e=0;e<n.length;e++)o=(o=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ju(t)},t.render=function(e,t,r){if(!Gu(t))throw Error(i(200));return ec(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(i(40));return!!e._reactRootContainer&&(du((function(){ec(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=cu,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Gu(r))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return ec(e,t,r,!1,n)},t.version="18.2.0-next-9e3b772b8-20220608"},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+"."+{551:"1adcc008",640:"1c778d14"}[e]+".chunk.js",r.miniCssF=e=>{},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={};r.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==t){a=c;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=t),e[t]=[n];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/",(()=>{var e={792:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=i);var a=r.p+r.u(t),s=new Error;r.l(a,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,i,a=n[0],s=n[1],l=n[2],u=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)l(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0,(()=>{"use strict";var e={};r.r(e),r.d(e,{hasBrowserEnv:()=>ui,hasStandardBrowserEnv:()=>di,hasStandardBrowserWebWorkerEnv:()=>fi,navigator:()=>ci,origin:()=>pi});var t={};r.r(t),r.d(t,{Decoder:()=>Ms,Encoder:()=>Fs,PacketType:()=>Is,protocol:()=>zs});var n=r(43),o=r(391),i=(r(175),"popstate");function a(){return p((function(e,t){let{pathname:r,search:n,hash:o}=e.location;return c("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:d(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function s(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function l(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?f(t):t,state:r,key:t&&t.key||n||Math.random().toString(36).substring(2,10)}}function d(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function f(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function p(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:a=!1}=n,l=o.history,f="POP",p=null,h=m();function m(){return(l.state||{idx:null}).idx}function g(){f="POP";let e=m(),t=null==e?null:e-h;h=e,p&&p({action:f,location:y.location,delta:t})}function v(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,r="string"===typeof e?e:d(e);return r=r.replace(/ $/,"%20"),s(t,`No window.location.(origin|href) available to create URL for href: ${r}`),new URL(r,t)}null==h&&(h=0,l.replaceState({...l.state,idx:h},""));let y={get action(){return f},get location(){return e(o,l)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(i,g),p=e,()=>{o.removeEventListener(i,g),p=null}},createHref:e=>t(o,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH";let n=c(y.location,e,t);r&&r(n,e),h=m()+1;let i=u(n,h),s=y.createHref(n);try{l.pushState(i,"",s)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;o.location.assign(s)}a&&p&&p({action:f,location:y.location,delta:1})},replace:function(e,t){f="REPLACE";let n=c(y.location,e,t);r&&r(n,e),h=m();let o=u(n,h),i=y.createHref(n);l.replaceState(o,"",i),a&&p&&p({action:f,location:y.location,delta:0})},go:e=>l.go(e)};return y}new WeakMap;function h(e,t){return m(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function m(e,t,r,n){let o=R(("string"===typeof t?f(t):t).pathname||"/",r);if(null==o)return null;let i=g(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=O(o);a=C(i[s],e,n)}return a}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(s(a.relativePath.startsWith(n),`Absolute route path "${a.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(n.length));let l=N([n,a.relativePath]),u=r.concat(a);e.children&&e.children.length>0&&(s(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),g(e.children,t,u,l)),(null!=e.path||e.index)&&t.push({path:l,score:E(l,e.index),routesMeta:u})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let r of v(e.path))o(e,t,r);else o(e,t)})),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(0===n.length)return o?[i,""]:[i];let a=v(n.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var y=/^:[\w-]+$/,b=3,x=2,w=1,_=10,k=-2,S=e=>"*"===e;function E(e,t){let r=e.split("/"),n=r.length;return r.some(S)&&(n+=k),t&&(n+=x),r.filter((e=>!S(e))).reduce(((e,t)=>e+(y.test(t)?b:""===t?w:_)),n)}function C(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:n}=e,o={},i="/",a=[];for(let s=0;s<n.length;++s){let e=n[s],l=s===n.length-1,u="/"===i?t:t.slice(i.length)||"/",c=j({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&r&&!n[n.length-1].route.index&&(c=j({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:N([i,c.pathname]),pathnameBase:z(N([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=N([i,c.pathnameBase]))}return a}function j(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=T(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1),l=n.reduce(((e,t,r)=>{let{paramName:n,isOptional:o}=t;if("*"===n){let e=s[r]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[r];return e[n]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:i,pathnameBase:a,pattern:e}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];l("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(n.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return l(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function A(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function L(e){let t=P(e);return t.map(((e,r)=>r===t.length-1?e.pathname:e.pathnameBase))}function $(e,t,r){let n,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?n=f(e):(n={...e},s(!n.pathname||!n.pathname.includes("?"),A("?","pathname","search",n)),s(!n.pathname||!n.pathname.includes("#"),A("#","pathname","hash",n)),s(!n.search||!n.search.includes("#"),A("#","search","hash",n)));let i,a=""===e||""===n.pathname,l=a?"/":n.pathname;if(null==l)i=r;else{let e=t.length-1;if(!o&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;n.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:r,search:n="",hash:o=""}="string"===typeof e?f(e):e,i=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:i,search:I(n),hash:F(o)}}(n,i),c=l&&"/"!==l&&l.endsWith("/"),d=(a||"."===l)&&r.endsWith("/");return u.pathname.endsWith("/")||!c&&!d||(u.pathname+="/"),u}var N=e=>e.join("/").replace(/\/\/+/g,"/"),z=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",F=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function D(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var M=["POST","PUT","PATCH","DELETE"],U=(new Set(M),["GET",...M]);new Set(U),Symbol("ResetLoaderData");var B=n.createContext(null);B.displayName="DataRouter";var W=n.createContext(null);W.displayName="DataRouterState";var H=n.createContext({isTransitioning:!1});H.displayName="ViewTransition";var q=n.createContext(new Map);q.displayName="Fetchers";var V=n.createContext(null);V.displayName="Await";var K=n.createContext(null);K.displayName="Navigation";var Y=n.createContext(null);Y.displayName="Location";var Q=n.createContext({outlet:null,matches:[],isDataRoute:!1});Q.displayName="Route";var J=n.createContext(null);J.displayName="RouteError";function X(){return null!=n.useContext(Y)}function G(){return s(X(),"useLocation() may be used only in the context of a <Router> component."),n.useContext(Y).location}var Z="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ee(e){n.useContext(K).static||n.useLayoutEffect(e)}function te(){let{isDataRoute:e}=n.useContext(Q);return e?function(){let{router:e}=de("useNavigate"),t=pe("useNavigate"),r=n.useRef(!1);ee((()=>{r.current=!0}));let o=n.useCallback((async function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(r.current,Z),r.current&&("number"===typeof n?e.navigate(n):await e.navigate(n,{fromRouteId:t,...o}))}),[e,t]);return o}():function(){s(X(),"useNavigate() may be used only in the context of a <Router> component.");let e=n.useContext(B),{basename:t,navigator:r}=n.useContext(K),{matches:o}=n.useContext(Q),{pathname:i}=G(),a=JSON.stringify(L(o)),u=n.useRef(!1);ee((()=>{u.current=!0}));let c=n.useCallback((function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(l(u.current,Z),!u.current)return;if("number"===typeof n)return void r.go(n);let s=$(n,JSON.parse(a),i,"path"===o.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:N([t,s.pathname])),(o.replace?r.replace:r.push)(s,o.state,o)}),[t,r,a,i,e]);return c}()}n.createContext(null);function re(){let{matches:e}=n.useContext(Q),t=e[e.length-1];return t?t.params:{}}function ne(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=n.useContext(Q),{pathname:o}=G(),i=JSON.stringify(L(r));return n.useMemo((()=>$(e,JSON.parse(i),o,"path"===t)),[e,i,o,t])}function oe(e,t,r,o){s(X(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:a}=n.useContext(K),{matches:u}=n.useContext(Q),c=u[u.length-1],d=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",g=c&&c.route;{let e=g&&g.path||"";ge(p,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=G();if(t){let e="string"===typeof t?f(t):t;s("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let b=v.pathname||"/",x=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!a&&r&&r.matches&&r.matches.length>0?r.matches:h(e,{pathname:x});l(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),l(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=ue(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:N([m,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:N([m,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,o);return t&&_?n.createElement(Y.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},_):_}function ie(){let e=he(),t=D(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=n.createElement(n.Fragment,null,n.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),n.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",n.createElement("code",{style:a},"ErrorBoundary")," or"," ",n.createElement("code",{style:a},"errorElement")," prop on your route.")),n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:i},r):null,s)}var ae=n.createElement(ie,null),se=class extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(Q.Provider,{value:this.props.routeContext},n.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function le(e){let{routeContext:t,match:r,children:o}=e,i=n.useContext(B);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(Q.Provider,{value:t},o)}function ue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let o=e,i=r?.errors;if(null!=i){let e=o.findIndex((e=>e.route.id&&void 0!==i?.[e.route.id]));s(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let a=!1,l=-1;if(r)for(let n=0;n<o.length;n++){let e=o[n];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(l=n),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){a=!0,o=l>=0?o.slice(0,l+1):[o[0]];break}}}return o.reduceRight(((e,s,u)=>{let c,d=!1,f=null,p=null;r&&(c=i&&s.route.id?i[s.route.id]:void 0,f=s.route.errorElement||ae,a&&(l<0&&0===u?(ge("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):l===u&&(d=!0,p=s.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,u+1)),m=()=>{let t;return t=c?f:d?p:s.route.Component?n.createElement(s.route.Component,null):s.route.element?s.route.element:e,n.createElement(le,{match:s,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:t})};return r&&(s.route.ErrorBoundary||s.route.errorElement||0===u)?n.createElement(se,{location:r.location,revalidation:r.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function ce(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function de(e){let t=n.useContext(B);return s(t,ce(e)),t}function fe(e){let t=n.useContext(W);return s(t,ce(e)),t}function pe(e){let t=function(e){let t=n.useContext(Q);return s(t,ce(e)),t}(e),r=t.matches[t.matches.length-1];return s(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function he(){let e=n.useContext(J),t=fe("useRouteError"),r=pe("useRouteError");return void 0!==e?e:t.errors?.[r]}var me={};function ge(e,t,r){t||me[e]||(me[e]=!0,l(!1,r))}n.memo((function(e){let{routes:t,future:r,state:n}=e;return oe(t,void 0,n,r)}));function ve(e){let{to:t,replace:r,state:o,relative:i}=e;s(X(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=n.useContext(K);l(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=n.useContext(Q),{pathname:c}=G(),d=te(),f=$(t,L(u),c,"path"===i),p=JSON.stringify(f);return n.useEffect((()=>{d(JSON.parse(p),{replace:r,state:o,relative:i})}),[d,p,i,r,o]),null}function ye(e){s(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function be(e){let{basename:t="/",children:r=null,location:o,navigationType:i="POP",navigator:a,static:u=!1}=e;s(!X(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=n.useMemo((()=>({basename:c,navigator:a,static:u,future:{}})),[c,a,u]);"string"===typeof o&&(o=f(o));let{pathname:p="/",search:h="",hash:m="",state:g=null,key:v="default"}=o,y=n.useMemo((()=>{let e=R(p,c);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:i}}),[c,p,h,m,g,v,i]);return l(null!=y,`<Router basename="${c}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:n.createElement(K.Provider,{value:d},n.createElement(Y.Provider,{children:r,value:y}))}function xe(e){let{children:t,location:r}=e;return oe(we(t),r)}n.Component;function we(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return n.Children.forEach(e,((e,o)=>{if(!n.isValidElement(e))return;let i=[...t,o];if(e.type===n.Fragment)return void r.push.apply(r,we(e.props.children,i));s(e.type===ye,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),s(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=we(e.props.children,i)),r.push(a)})),r}var _e="get",ke="application/x-www-form-urlencoded";function Se(e){return null!=e&&"string"===typeof e.tagName}var Ee=null;var Ce=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function je(e){return null==e||Ce.has(e)?e:(l(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ke}"`),null)}function Te(e,t){let r,n,o,i,a;if(Se(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");n=a?R(a,t):null,r=e.getAttribute("method")||_e,o=je(e.getAttribute("enctype"))||ke,i=new FormData(e)}else if(function(e){return Se(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Se(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(n=s?R(s,t):null,r=e.getAttribute("formmethod")||a.getAttribute("method")||_e,o=je(e.getAttribute("formenctype"))||je(a.getAttribute("enctype"))||ke,i=new FormData(a,e),!function(){if(null===Ee)try{new FormData(document.createElement("form"),0),Ee=!1}catch(e){Ee=!0}return Ee}()){let{name:t,type:r,value:n}=e;if("image"===r){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,n)}}else{if(Se(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=_e,n=null,o=ke,a=e}var s;return i&&"text/plain"===o&&(a=i,i=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:i,body:a}}function Oe(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Re(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ae(e){return null!=e&&"string"===typeof e.page}function Pe(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Le(e,t,r,n,o,i){let a=(e,t)=>!r[t]||e.route.id!==r[t].route.id,s=(e,t)=>r[t].pathname!==e.pathname||r[t].route.path?.endsWith("*")&&r[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>a(e,t)||s(e,t))):"data"===i?t.filter(((t,i)=>{let l=n.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof n)return n}return!0})):[]}function $e(e,t){let{includeHydrateFallback:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=e.map((e=>{let n=t.routes[e.route.id];if(!n)return[];let o=[n.module];return n.clientActionModule&&(o=o.concat(n.clientActionModule)),n.clientLoaderModule&&(o=o.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(o=o.concat(n.hydrateFallbackModule)),n.imports&&(o=o.concat(n.imports)),o})).flat(1),[...new Set(n)];var n}function Ne(e,t){let r=new Set,n=new Set(t);return e.reduce(((e,o)=>{if(t&&!Ae(o)&&"script"===o.as&&o.href&&n.has(o.href))return e;let i=JSON.stringify(function(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}(o));return r.has(i)||(r.add(i),e.push({key:i,link:o})),e}),[])}function ze(e){return{__html:e}}Symbol("SingleFetchRedirect");var Ie=new Set([100,101,204,205]);function Fe(e,t){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname="_root.data":t&&"/"===R(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}n.Component;function De(e){let{error:t,isOutsideRemixApp:r}=e;console.error(t);let o,i=n.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(D(t))return n.createElement(Me,{title:"Unhandled Thrown Response!"},n.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),i);if(t instanceof Error)0;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);new Error(e)}return n.createElement(Me,{title:"Application Error!",isOutsideRemixApp:r},n.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),n.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),i)}function Me(e){let{title:t,renderScripts:r,isOutsideRemixApp:o,children:i}=e,{routeModules:a}=qe();return a.root?.Layout&&!o?i:n.createElement("html",{lang:"en"},n.createElement("head",null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),n.createElement("title",null,t)),n.createElement("body",null,n.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?n.createElement(Ge,null):null)))}function Ue(e){return!0===e}function Be(){let e=n.useContext(B);return Oe(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function We(){let e=n.useContext(W);return Oe(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var He=n.createContext(void 0);function qe(){let e=n.useContext(He);return Oe(e,"You must render this element inside a <HydratedRouter> element"),e}function Ve(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ke(e,t,r){if(r&&!Xe)return[e[0]];if(t){let r=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,r+1)}return e}function Ye(e){let{page:t,...r}=e,{router:o}=Be(),i=n.useMemo((()=>h(o.routes,t,o.basename)),[o.routes,t,o.basename]);return i?n.createElement(Je,{page:t,matches:i,...r}):null}function Qe(e){let{manifest:t,routeModules:r}=qe(),[o,i]=n.useState([]);return n.useEffect((()=>{let n=!1;return async function(e,t,r){let n=await Promise.all(e.map((async e=>{let n=t.routes[e.route.id];if(n){let e=await Re(n,r);return e.links?e.links():[]}return[]})));return Ne(n.flat(1).filter(Pe).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(e,t,r).then((e=>{n||i(e)})),()=>{n=!0}}),[e,t,r]),o}function Je(e){let{page:t,matches:r,...o}=e,i=G(),{manifest:a,routeModules:s}=qe(),{basename:l}=Be(),{loaderData:u,matches:c}=We(),d=n.useMemo((()=>Le(t,r,c,a,i,"data")),[t,r,c,a,i]),f=n.useMemo((()=>Le(t,r,c,a,i,"assets")),[t,r,c,a,i]),p=n.useMemo((()=>{if(t===i.pathname+i.search+i.hash)return[];let e=new Set,n=!1;if(r.forEach((t=>{let r=a.routes[t.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===t.route.id))&&t.route.id in u&&s[t.route.id]?.shouldRevalidate||r.hasClientLoader?n=!0:e.add(t.route.id))})),0===e.size)return[];let o=Fe(t,l);return n&&e.size>0&&o.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[o.pathname+o.search]}),[l,u,i,a,d,r,t,s]),h=n.useMemo((()=>$e(f,a)),[f,a]),m=Qe(f);return n.createElement(n.Fragment,null,p.map((e=>n.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...o}))),h.map((e=>n.createElement("link",{key:e,rel:"modulepreload",href:e,...o}))),m.map((e=>{let{key:t,link:r}=e;return n.createElement("link",{key:t,...r})})))}He.displayName="FrameworkContext";var Xe=!1;function Ge(e){let{manifest:t,serverHandoffString:r,isSpaMode:o,ssr:i,renderMeta:a}=qe(),{router:s,static:l,staticContext:u}=Be(),{matches:c}=We(),d=Ue(i);a&&(a.didRenderScripts=!0);let f=Ke(c,null,o);n.useEffect((()=>{0}),[]);let p=n.useMemo((()=>{let o=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=l?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(t.url)}`};\n${f.map(((e,r)=>{let n=`route${r}`,o=t.routes[e.route.id];Oe(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:u}=o,c=[...i?[{module:i,varName:`${n}_clientAction`}]:[],...a?[{module:a,varName:`${n}_clientLoader`}]:[],...s?[{module:s,varName:`${n}_clientMiddleware`}]:[],...l?[{module:l,varName:`${n}_HydrateFallback`}]:[],{module:u,varName:`${n}_main`}];return 1===c.length?`import * as ${n} from ${JSON.stringify(u)};`:[c.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${n} = {${c.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:r,...n}=e,o=new Set(t.state.matches.map((e=>e.route.id))),i=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(i.pop();i.length>0;)a.push(`/${i.join("/")}`),i.pop();a.forEach((e=>{let r=h(t.routes,e,t.basename);r&&r.forEach((e=>o.add(e.route.id)))}));let s=[...o].reduce(((e,t)=>Object.assign(e,{[t]:n.routes[t]})),{});return{...n,routes:s,sri:!!r||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return n.createElement(n.Fragment,null,n.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(o),type:void 0}),n.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(i),type:"module",async:!0}))}),[]),m=Xe?[]:(t.entry.imports.concat($e(f,t,{includeHydrateFallback:!0})),[...new Set(g)]);var g;let v="object"===typeof t.sri?t.sri:{};return Xe?null:n.createElement(n.Fragment,null,"object"===typeof t.sri?n.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,d?null:n.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:v[t.url],suppressHydrationWarning:!0}),n.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:v[t.entry.module],suppressHydrationWarning:!0}),m.map((t=>n.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:v[t],suppressHydrationWarning:!0}))),p)}function Ze(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var et="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{et&&(window.__reactRouterVersion="7.5.3")}catch(Mg){}function tt(e){let{basename:t,children:r,window:o}=e,i=n.useRef();null==i.current&&(i.current=a({window:o,v5Compat:!0}));let s=i.current,[l,u]=n.useState({action:s.action,location:s.location}),c=n.useCallback((e=>{n.startTransition((()=>u(e)))}),[u]);return n.useLayoutEffect((()=>s.listen(c)),[s,c]),n.createElement(be,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s})}var rt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nt=n.forwardRef((function(e,t){let r,{onClick:o,discover:i="render",prefetch:a="none",relative:u,reloadDocument:c,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:v,...y}=e,{basename:b}=n.useContext(K),x="string"===typeof m&&rt.test(m),w=!1;if("string"===typeof m&&x&&(r=m,et))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),r=R(t.pathname,b);t.origin===e.origin&&null!=r?m=r+t.search+t.hash:w=!0}catch(Mg){l(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(X(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=n.useContext(K),{hash:i,pathname:a,search:l}=ne(e,{relative:t}),u=a;return"/"!==r&&(u="/"===a?r:N([r,a])),o.createHref({pathname:u,search:l,hash:i})}(m,{relative:u}),[k,S,E]=function(e,t){let r=n.useContext(He),[o,i]=n.useState(!1),[a,s]=n.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=t,p=n.useRef(null);n.useEffect((()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[e]),n.useEffect((()=>{if(o){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[o]);let h=()=>{i(!0)},m=()=>{i(!1),s(!1)};return r?"intent"!==e?[a,p,{}]:[a,p,{onFocus:Ve(l,h),onBlur:Ve(u,m),onMouseEnter:Ve(c,h),onMouseLeave:Ve(d,m),onTouchStart:Ve(f,h)}]:[!1,p,{}]}(a,y),C=function(e){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=te(),u=G(),c=ne(e,{relative:a});return n.useCallback((n=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(n,t)){n.preventDefault();let t=void 0!==r?r:d(u)===d(c);l(e,{replace:t,state:o,preventScrollReset:i,relative:a,viewTransition:s})}}),[u,l,c,r,o,t,e,i,a,s])}(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:u,viewTransition:v});let j=n.createElement("a",{...y,...E,href:r||_,onClick:w||c?o:function(e){o&&o(e),e.defaultPrevented||C(e)},ref:Ze(t,S),target:h,"data-discover":x||"render"!==i?void 0:"true"});return k&&!x?n.createElement(n.Fragment,null,j,n.createElement(Ye,{page:_})):j}));nt.displayName="Link",n.forwardRef((function(e,t){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:u,viewTransition:c,children:d,...f}=e,p=ne(u,{relative:f.relative}),h=G(),m=n.useContext(W),{navigator:g,basename:v}=n.useContext(K),y=null!=m&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.useContext(H);s(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=at("useViewTransitionState"),i=ne(e,{relative:t.relative});if(!r.isTransitioning)return!1;let a=R(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=R(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=j(i.pathname,l)||null!=j(i.pathname,a)}(p)&&!0===c,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=R(w,v)||w);const _="/"!==b&&b.endsWith("/")?b.length-1:b.length;let k,S=x===b||!a&&x.startsWith(b)&&"/"===x.charAt(_),E=null!=w&&(w===b||!a&&w.startsWith(b)&&"/"===w.charAt(b.length)),C={isActive:S,isPending:E,isTransitioning:y},T=S?r:void 0;k="function"===typeof i?i(C):[i,S?"active":null,E?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let O="function"===typeof l?l(C):l;return n.createElement(nt,{...f,"aria-current":T,className:k,ref:t,style:O,to:u,viewTransition:c},"function"===typeof d?d(C):d)})).displayName="NavLink";var ot=n.forwardRef(((e,t)=>{let{discover:r="render",fetcherKey:o,navigate:i,reloadDocument:a,replace:l,state:u,method:c=_e,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,...v}=e,y=ut(),b=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=n.useContext(K),o=n.useContext(Q);s(o,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),a={...ne(e||".",{relative:t})},l=G();if(null==e){a.search=l.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),r=t.some((e=>""===e));if(r){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let r=e.toString();a.search=r?`?${r}`:""}}e&&"."!==e||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:N([r,a.pathname]));return d(a)}(f,{relative:h}),x="get"===c.toLowerCase()?"get":"post",w="string"===typeof f&&rt.test(f);return n.createElement("form",{ref:t,method:x,action:b,onSubmit:a?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,r=t?.getAttribute("formmethod")||c;y(t||e.currentTarget,{fetcherKey:o,method:r,navigate:i,replace:l,state:u,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function it(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function at(e){let t=n.useContext(B);return s(t,it(e)),t}ot.displayName="Form";var st=0,lt=()=>`__${String(++st)}__`;function ut(){let{router:e}=at("useSubmit"),{basename:t}=n.useContext(K),r=pe("useRouteId");return n.useCallback((async function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:s,formData:l,body:u}=Te(n,t);if(!1===o.navigate){let t=o.fetcherKey||lt();await e.fetch(t,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[e,t,r])}new TextEncoder;var ct=function(){return ct=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ct.apply(this,arguments)};Object.create;function dt(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ft=r(324),pt=r.n(ft),ht="-ms-",mt="-moz-",gt="-webkit-",vt="comm",yt="rule",bt="decl",xt="@keyframes",wt=Math.abs,_t=String.fromCharCode,kt=Object.assign;function St(e){return e.trim()}function Et(e,t){return(e=t.exec(e))?e[0]:e}function Ct(e,t,r){return e.replace(t,r)}function jt(e,t,r){return e.indexOf(t,r)}function Tt(e,t){return 0|e.charCodeAt(t)}function Ot(e,t,r){return e.slice(t,r)}function Rt(e){return e.length}function At(e){return e.length}function Pt(e,t){return t.push(e),e}function Lt(e,t){return e.filter((function(e){return!Et(e,t)}))}var $t=1,Nt=1,zt=0,It=0,Ft=0,Dt="";function Mt(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:$t,column:Nt,length:a,return:"",siblings:s}}function Ut(e,t){return kt(Mt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bt(e){for(;e.root;)e=Ut(e.root,{children:[e]});Pt(e,e.siblings)}function Wt(){return Ft=It>0?Tt(Dt,--It):0,Nt--,10===Ft&&(Nt=1,$t--),Ft}function Ht(){return Ft=It<zt?Tt(Dt,It++):0,Nt++,10===Ft&&(Nt=1,$t++),Ft}function qt(){return Tt(Dt,It)}function Vt(){return It}function Kt(e,t){return Ot(Dt,e,t)}function Yt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qt(e){return $t=Nt=1,zt=Rt(Dt=e),It=0,[]}function Jt(e){return Dt="",e}function Xt(e){return St(Kt(It-1,er(91===e?e+2:40===e?e+1:e)))}function Gt(e){for(;(Ft=qt())&&Ft<33;)Ht();return Yt(e)>2||Yt(Ft)>3?"":" "}function Zt(e,t){for(;--t&&Ht()&&!(Ft<48||Ft>102||Ft>57&&Ft<65||Ft>70&&Ft<97););return Kt(e,Vt()+(t<6&&32==qt()&&32==Ht()))}function er(e){for(;Ht();)switch(Ft){case e:return It;case 34:case 39:34!==e&&39!==e&&er(Ft);break;case 40:41===e&&er(e);break;case 92:Ht()}return It}function tr(e,t){for(;Ht()&&e+Ft!==57&&(e+Ft!==84||47!==qt()););return"/*"+Kt(t,It-1)+"*"+_t(47===e?e:Ht())}function rr(e){for(;!Yt(qt());)Ht();return Kt(e,It)}function nr(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function or(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case bt:return e.return=e.return||e.value;case vt:return"";case xt:return e.return=e.value+"{"+nr(e.children,n)+"}";case yt:if(!Rt(e.value=e.props.join(",")))return""}return Rt(r=nr(e.children,n))?e.return=e.value+"{"+r+"}":""}function ir(e,t,r){switch(function(e,t){return 45^Tt(e,0)?(((t<<2^Tt(e,0))<<2^Tt(e,1))<<2^Tt(e,2))<<2^Tt(e,3):0}(e,t)){case 5103:return gt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return gt+e+e;case 4789:return mt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return gt+e+mt+e+ht+e+e;case 5936:switch(Tt(e,t+11)){case 114:return gt+e+ht+Ct(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return gt+e+ht+Ct(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return gt+e+ht+Ct(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return gt+e+ht+e+e;case 6165:return gt+e+ht+"flex-"+e+e;case 5187:return gt+e+Ct(e,/(\w+).+(:[^]+)/,gt+"box-$1$2"+ht+"flex-$1$2")+e;case 5443:return gt+e+ht+"flex-item-"+Ct(e,/flex-|-self/g,"")+(Et(e,/flex-|baseline/)?"":ht+"grid-row-"+Ct(e,/flex-|-self/g,""))+e;case 4675:return gt+e+ht+"flex-line-pack"+Ct(e,/align-content|flex-|-self/g,"")+e;case 5548:return gt+e+ht+Ct(e,"shrink","negative")+e;case 5292:return gt+e+ht+Ct(e,"basis","preferred-size")+e;case 6060:return gt+"box-"+Ct(e,"-grow","")+gt+e+ht+Ct(e,"grow","positive")+e;case 4554:return gt+Ct(e,/([^-])(transform)/g,"$1"+gt+"$2")+e;case 6187:return Ct(Ct(Ct(e,/(zoom-|grab)/,gt+"$1"),/(image-set)/,gt+"$1"),e,"")+e;case 5495:case 3959:return Ct(e,/(image-set\([^]*)/,gt+"$1$`$1");case 4968:return Ct(Ct(e,/(.+:)(flex-)?(.*)/,gt+"box-pack:$3"+ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+gt+e+e;case 4200:if(!Et(e,/flex-|baseline/))return ht+"grid-column-align"+Ot(e,t)+e;break;case 2592:case 3360:return ht+Ct(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,Et(e.props,/grid-\w+-end/)}))?~jt(e+(r=r[t].value),"span",0)?e:ht+Ct(e,"-start","")+e+ht+"grid-row-span:"+(~jt(r,"span",0)?Et(r,/\d+/):+Et(r,/\d+/)-+Et(e,/\d+/))+";":ht+Ct(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return Et(e.props,/grid-\w+-start/)}))?e:ht+Ct(Ct(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ct(e,/(.+)-inline(.+)/,gt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rt(e)-1-t>6)switch(Tt(e,t+1)){case 109:if(45!==Tt(e,t+4))break;case 102:return Ct(e,/(.+:)(.+)-([^]+)/,"$1"+gt+"$2-$3$1"+mt+(108==Tt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~jt(e,"stretch",0)?ir(Ct(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Ct(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,i,a,s){return ht+r+":"+n+s+(o?ht+r+"-span:"+(i?a:+a-+n)+s:"")+e}));case 4949:if(121===Tt(e,t+6))return Ct(e,":",":"+gt)+e;break;case 6444:switch(Tt(e,45===Tt(e,14)?18:11)){case 120:return Ct(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+gt+(45===Tt(e,14)?"inline-":"")+"box$3$1"+gt+"$2$3$1"+ht+"$2box$3")+e;case 100:return Ct(e,":",":"+ht)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ct(e,"scroll-","scroll-snap-")+e}return e}function ar(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case bt:return void(e.return=ir(e.value,e.length,r));case xt:return nr([Ut(e,{value:Ct(e.value,"@","@"+gt)})],n);case yt:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(Et(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bt(Ut(e,{props:[Ct(t,/:(read-\w+)/,":-moz-$1")]})),Bt(Ut(e,{props:[t]})),kt(e,{props:Lt(r,n)});break;case"::placeholder":Bt(Ut(e,{props:[Ct(t,/:(plac\w+)/,":"+gt+"input-$1")]})),Bt(Ut(e,{props:[Ct(t,/:(plac\w+)/,":-moz-$1")]})),Bt(Ut(e,{props:[Ct(t,/:(plac\w+)/,ht+"input-$1")]})),Bt(Ut(e,{props:[t]})),kt(e,{props:Lt(r,n)})}return""}))}}function sr(e){return Jt(lr("",null,null,null,[""],e=Qt(e),0,[0],e))}function lr(e,t,r,n,o,i,a,s,l){for(var u=0,c=0,d=a,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=i,_=n,k=b;g;)switch(h=y,y=Ht()){case 40:if(108!=h&&58==Tt(k,d-1)){-1!=jt(k+=Ct(Xt(y),"&","&\f"),"&\f",wt(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Xt(y);break;case 9:case 10:case 13:case 32:k+=Gt(h);break;case 92:k+=Zt(Vt()-1,7);continue;case 47:switch(qt()){case 42:case 47:Pt(cr(tr(Ht(),Vt()),t,r,l),l);break;default:k+="/"}break;case 123*m:s[u++]=Rt(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(k=Ct(k,/\f/g,"")),p>0&&Rt(k)-d&&Pt(p>32?dr(k+";",n,r,d-1,l):dr(Ct(k," ","")+";",n,r,d-2,l),l);break;case 59:k+=";";default:if(Pt(_=ur(k,t,r,u,c,o,s,b,x=[],w=[],d,i),i),123===y)if(0===c)lr(k,t,_,_,x,i,d,s,w);else switch(99===f&&110===Tt(k,3)?100:f){case 100:case 108:case 109:case 115:lr(e,_,_,n&&Pt(ur(e,_,_,0,0,o,s,b,o,x=[],d,w),w),o,w,d,s,n?x:w);break;default:lr(k,_,_,_,[""],w,0,s,w)}}u=c=p=0,m=v=1,b=k="",d=a;break;case 58:d=1+Rt(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Wt())continue;switch(k+=_t(y),y*m){case 38:v=c>0?1:(k+="\f",-1);break;case 44:s[u++]=(Rt(k)-1)*v,v=1;break;case 64:45===qt()&&(k+=Xt(Ht())),f=qt(),c=d=Rt(b=k+=rr(Vt())),y++;break;case 45:45===h&&2==Rt(k)&&(m=0)}}return i}function ur(e,t,r,n,o,i,a,s,l,u,c,d){for(var f=o-1,p=0===o?i:[""],h=At(p),m=0,g=0,v=0;m<n;++m)for(var y=0,b=Ot(e,f+1,f=wt(g=a[m])),x=e;y<h;++y)(x=St(g>0?p[y]+" "+b:Ct(b,/&\f/g,p[y])))&&(l[v++]=x);return Mt(e,t,r,0===o?yt:s,l,u,c,d)}function cr(e,t,r,n){return Mt(e,t,r,vt,_t(Ft),Ot(e,2,-2),0,n)}function dr(e,t,r,n,o){return Mt(e,t,r,bt,Ot(e,0,n),Ot(e,n+1,-1),n,o)}var fr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",hr="active",mr="data-styled-version",gr="6.1.17",vr="/*!sc*/\n",yr="undefined"!=typeof window&&"HTMLElement"in window,br=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),xr={},wr=(new Set,Object.freeze([])),_r=Object.freeze({});function kr(e,t,r){return void 0===r&&(r=_r),e.theme!==r.theme&&e.theme||t||r.theme}var Sr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Er=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cr=/(^-|-$)/g;function jr(e){return e.replace(Er,"-").replace(Cr,"")}var Tr=/(a)(d)/gi,Or=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Or(t%52)+r;return(Or(t%52)+r).replace(Tr,"$1-$2")}var Ar,Pr=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Lr=function(e){return Pr(5381,e)};function $r(e){return Rr(Lr(e)>>>0)}function Nr(e){return e.displayName||e.name||"Component"}function zr(e){return"string"==typeof e&&!0}var Ir="function"==typeof Symbol&&Symbol.for,Fr=Ir?Symbol.for("react.memo"):60115,Dr=Ir?Symbol.for("react.forward_ref"):60112,Mr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ur={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Br={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wr=((Ar={})[Dr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ar[Fr]=Br,Ar);function Hr(e){return("type"in(t=e)&&t.type.$$typeof)===Fr?Br:"$$typeof"in e?Wr[e.$$typeof]:Mr;var t}var qr=Object.defineProperty,Vr=Object.getOwnPropertyNames,Kr=Object.getOwnPropertySymbols,Yr=Object.getOwnPropertyDescriptor,Qr=Object.getPrototypeOf,Jr=Object.prototype;function Xr(e,t,r){if("string"!=typeof t){if(Jr){var n=Qr(t);n&&n!==Jr&&Xr(e,n,r)}var o=Vr(t);Kr&&(o=o.concat(Kr(t)));for(var i=Hr(e),a=Hr(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Ur||r&&r[l]||a&&l in a||i&&l in i)){var u=Yr(t,l);try{qr(e,l,u)}catch(e){}}}}return e}function Gr(e){return"function"==typeof e}function Zr(e){return"object"==typeof e&&"styledComponentId"in e}function en(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function tn(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function rn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nn(e,t,r){if(void 0===r&&(r=!1),!r&&!rn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=nn(e[n],t[n]);else if(rn(t))for(var n in t)e[n]=nn(e[n],t[n]);return e}function on(e,t){Object.defineProperty(e,"toString",{value:t})}function an(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var sn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw an(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(vr);return t},e}(),ln=new Map,un=new Map,cn=1,dn=function(e){if(ln.has(e))return ln.get(e);for(;un.has(cn);)cn++;var t=cn++;return ln.set(e,t),un.set(t,e),t},fn=function(e,t){cn=t+1,ln.set(e,t),un.set(t,e)},pn="style[".concat(pr,"][").concat(mr,'="').concat(gr,'"]'),hn=new RegExp("^".concat(pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mn=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},gn=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(vr),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var l=s.match(hn);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(fn(c,u),mn(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},vn=function(e){for(var t=document.querySelectorAll(pn),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(pr)!==hr&&(gn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function yn(){return r.nc}var bn=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(pr,"]")));return t[t.length-1]}(r),i=void 0!==o?o.nextSibling:null;n.setAttribute(pr,hr),n.setAttribute(mr,gr);var a=yn();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},xn=function(){function e(e){this.element=bn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw an(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),wn=function(){function e(e){this.element=bn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),_n=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),kn=yr,Sn={isServer:!yr,useCSSOMInjection:!br},En=function(){function e(e,t,r){void 0===e&&(e=_r),void 0===t&&(t={});var n=this;this.options=ct(ct({},Sn),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&yr&&kn&&(kn=!1,vn(this)),on(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return un.get(e)}(r);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(r);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(pr,".g").concat(r,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),n+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(vr)},i=0;i<r;i++)o(i);return n}(n)}))}return e.registerId=function(e){return dn(e)},e.prototype.rehydrate=function(){!this.server&&yr&&vn(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(ct(ct({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new _n(r):t?new xn(r):new wn(r)}(this.options),new sn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(dn(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(dn(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(dn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Cn=/&/g,jn=/^\s*\/\/.*$/gm;function Tn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Tn(e.children,t)),e}))}function On(e){var t,r,n,o=void 0===e?_r:e,i=o.options,a=void 0===i?_r:i,s=o.plugins,l=void 0===s?wr:s,u=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===yt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Cn,r).replace(n,u))})),a.prefix&&c.push(ar),c.push(or);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(jn,""),u=sr(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(u=Tn(u,a.namespace));var d,f=[];return nr(u,function(e){var t=At(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce((function(e,t){return t.name||an(15),Pr(e,t.name)}),5381).toString():"",d}var Rn=new En,An=On(),Pn=n.createContext({shouldForwardProp:void 0,styleSheet:Rn,stylis:An}),Ln=(Pn.Consumer,n.createContext(void 0));function $n(){return(0,n.useContext)(Pn)}function Nn(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],o=t[1],i=$n().styleSheet,a=(0,n.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),s=(0,n.useMemo)((function(){return On({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,n.useEffect)((function(){pt()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,n.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return n.createElement(Pn.Provider,{value:l},n.createElement(Ln.Provider,{value:s},e.children))}var zn=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=An);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,on(this,(function(){throw an(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=An),this.name+e.hash},e}(),In=function(e){return e>="A"&&e<="Z"};function Fn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;In(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Dn=function(e){return null==e||!1===e||""===e},Mn=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Dn(i)&&(Array.isArray(i)&&i.isCss||Gr(i)?n.push("".concat(Fn(o),":"),i,";"):rn(i)?n.push.apply(n,dt(dt(["".concat(o," {")],Mn(i),!1),["}"],!1)):n.push("".concat(Fn(o),": ").concat((t=o,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in fr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Un(e,t,r,n){return Dn(e)?[]:Zr(e)?[".".concat(e.styledComponentId)]:Gr(e)?!Gr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Un(e(t),t,r,n):e instanceof zn?r?(e.inject(r,n),[e.getName(n)]):[e]:rn(e)?Mn(e):Array.isArray(e)?Array.prototype.concat.apply(wr,e.map((function(e){return Un(e,t,r,n)}))):[e.toString()];var o}function Bn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Gr(r)&&!Zr(r))return!1}return!0}var Wn=Lr(gr),Hn=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Bn(e),this.componentId=t,this.baseHash=Pr(Wn,t),this.baseStyle=r,En.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=en(n,this.staticRulesId);else{var o=tn(Un(this.rules,e,t,r)),i=Rr(Pr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=en(n,i),this.staticRulesId=i}else{for(var s=Pr(this.baseHash,r.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=tn(Un(c,e,t,r));s=Pr(s,d+u),l+=d}}if(l){var f=Rr(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),n=en(n,f)}}return n},e}(),qn=n.createContext(void 0);qn.Consumer;var Vn={};new Set;function Kn(e,t,r){var o=Zr(e),i=e,a=!zr(e),s=t.attrs,l=void 0===s?wr:s,u=t.componentId,c=void 0===u?function(e,t){var r="string"!=typeof e?"sc":jr(e);Vn[r]=(Vn[r]||0)+1;var n="".concat(r,"-").concat($r(gr+r+Vn[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return zr(e)?"styled.".concat(e):"Styled(".concat(Nr(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(jr(t.displayName),"-").concat(t.componentId):t.componentId||c,h=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Hn(r,p,o?i.componentStyle:void 0);function b(e,t){return function(e,t,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=n.useContext(qn),d=$n(),f=e.shouldForwardProp||d.shouldForwardProp,p=kr(t,c,a)||_r,h=function(e,t,r){for(var n,o=ct(ct({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=Gr(n=e[i])?n(o):n;for(var s in a)o[s]="className"===s?en(o[s],a[s]):"style"===s?ct(ct({},o[s]),a[s]):a[s]}return t.className&&(o.className=en(o.className,t.className)),o}(o,t,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var r=$n();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,h),b=en(s,l);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[zr(m)&&!Sr.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,n.createElement)(m,g)}(x,e,t)}b.displayName=f;var x=n.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=o?en(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=o?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)nn(e,o[n],!0);return e}({},i.defaultProps,e):e}}),on(x,(function(){return".".concat(x.styledComponentId)})),a&&Xr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Yn(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Qn=function(e){return Object.assign(e,{isCss:!0})};function Jn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Gr(e)||rn(e))return Qn(Un(Yn(wr,dt([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Un(n):Qn(Un(Yn(n,t)))}function Xn(e,t,r){if(void 0===r&&(r=_r),!t)throw an(1,t);var n=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,Jn.apply(void 0,dt([n],o,!1)))};return n.attrs=function(n){return Xn(e,t,ct(ct({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Xn(e,t,ct(ct({},r),n))},n}var Gn=function(e){return Xn(Kn,e)},Zn=Gn;Sr.forEach((function(e){Zn[e]=Gn(e)}));var eo=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Bn(e),En.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(tn(Un(this.rules,t,r,n)),""),i=this.componentId+e;r.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&En.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function to(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=tn(Jn.apply(void 0,dt([e],t,!1))),o=$r(n);return new zn(o,n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=yn(),n=tn([r&&'nonce="'.concat(r,'"'),"".concat(pr,'="true"'),"".concat(mr,'="').concat(gr,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw an(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw an(2);var r=e.instance.toString();if(!r)return[];var o=((t={})[pr]="",t[mr]=gr,t.dangerouslySetInnerHTML={__html:r},t),i=yn();return i&&(o.nonce=i),[n.createElement("style",ct({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new En({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw an(2);return n.createElement(Nn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw an(3)}})(),"__sc-".concat(pr,"__");const ro=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=Jn.apply(void 0,dt([e],t,!1)),i="sc-global-".concat($r(JSON.stringify(o))),a=new eo(o,i),s=function(e){var t=$n(),r=n.useContext(qn),o=n.useRef(t.styleSheet.allocateGSInstance(i)).current;return t.styleSheet.server&&l(o,e,t.styleSheet,r,t.stylis),n.useLayoutEffect((function(){if(!t.styleSheet.server)return l(o,e,t.styleSheet,r,t.stylis),function(){return a.removeStyles(o,t.styleSheet)}}),[o,e,t.styleSheet,r,t.stylis]),null};function l(e,t,r,n,o){if(a.isStatic)a.renderStyles(e,xr,r,o);else{var i=ct(ct({},t),{theme:kr(t,n,s.defaultProps)});a.renderStyles(e,i,r,o)}}return n.memo(s)})`
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
  `;function no(e,t){return function(){return e.apply(t,arguments)}}const{toString:oo}=Object.prototype,{getPrototypeOf:io}=Object,{iterator:ao,toStringTag:so}=Symbol,lo=(e=>t=>{const r=oo.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),uo=e=>(e=e.toLowerCase(),t=>lo(t)===e),co=e=>t=>typeof t===e,{isArray:fo}=Array,po=co("undefined");const ho=uo("ArrayBuffer");const mo=co("string"),go=co("function"),vo=co("number"),yo=e=>null!==e&&"object"===typeof e,bo=e=>{if("object"!==lo(e))return!1;const t=io(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(so in e)&&!(ao in e)},xo=uo("Date"),wo=uo("File"),_o=uo("Blob"),ko=uo("FileList"),So=uo("URLSearchParams"),[Eo,Co,jo,To]=["ReadableStream","Request","Response","Headers"].map(uo);function Oo(e,t){let r,n,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),fo(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{const n=o?Object.getOwnPropertyNames(e):Object.keys(e),i=n.length;let a;for(r=0;r<i;r++)a=n[r],t.call(null,e[a],a,e)}}function Ro(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const Ao="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Po=e=>!po(e)&&e!==Ao;const Lo=($o="undefined"!==typeof Uint8Array&&io(Uint8Array),e=>$o&&e instanceof $o);var $o;const No=uo("HTMLFormElement"),zo=(e=>{let{hasOwnProperty:t}=e;return(e,r)=>t.call(e,r)})(Object.prototype),Io=uo("RegExp"),Fo=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Oo(r,((r,o)=>{let i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)};const Do=uo("AsyncFunction"),Mo=(Uo="function"===typeof setImmediate,Bo=go(Ao.postMessage),Uo?setImmediate:Bo?((e,t)=>(Ao.addEventListener("message",(r=>{let{source:n,data:o}=r;n===Ao&&o===e&&t.length&&t.shift()()}),!1),r=>{t.push(r),Ao.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Uo,Bo;const Wo="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Ao):"undefined"!==typeof process&&process.nextTick||Mo,Ho={isArray:fo,isArrayBuffer:ho,isBuffer:function(e){return null!==e&&!po(e)&&null!==e.constructor&&!po(e.constructor)&&go(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||go(e.append)&&("formdata"===(t=lo(e))||"object"===t&&go(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ho(e.buffer),t},isString:mo,isNumber:vo,isBoolean:e=>!0===e||!1===e,isObject:yo,isPlainObject:bo,isReadableStream:Eo,isRequest:Co,isResponse:jo,isHeaders:To,isUndefined:po,isDate:xo,isFile:wo,isBlob:_o,isRegExp:Io,isFunction:go,isStream:e=>yo(e)&&go(e.pipe),isURLSearchParams:So,isTypedArray:Lo,isFileList:ko,forEach:Oo,merge:function e(){const{caseless:t}=Po(this)&&this||{},r={},n=(n,o)=>{const i=t&&Ro(r,o)||o;bo(r[i])&&bo(n)?r[i]=e(r[i],n):bo(n)?r[i]=e({},n):fo(n)?r[i]=n.slice():r[i]=n};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Oo(arguments[o],n);return r},extend:function(e,t,r){let{allOwnKeys:n}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Oo(t,((t,n)=>{r&&go(t)?e[n]=no(t,r):e[n]=t}),{allOwnKeys:n}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&io(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:lo,kindOfTest:uo,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(fo(e))return e;let t=e.length;if(!vo(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[ao]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:No,hasOwnProperty:zo,hasOwnProp:zo,reduceDescriptors:Fo,freezeMethods:e=>{Fo(e,((t,r)=>{if(go(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];go(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return fo(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ro,global:Ao,isContextDefined:Po,isSpecCompliantForm:function(e){return!!(e&&go(e.append)&&"FormData"===e[so]&&e[ao])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(yo(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=fo(e)?[]:{};return Oo(e,((e,t)=>{const i=r(e,n+1);!po(i)&&(o[t]=i)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:Do,isThenable:e=>e&&(yo(e)||go(e))&&go(e.then)&&go(e.catch),setImmediate:Mo,asap:Wo,isIterable:e=>null!=e&&go(e[ao])};function qo(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}Ho.inherits(qo,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ho.toJSONObject(this.config),code:this.code,status:this.status}}});const Vo=qo.prototype,Ko={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Ko[e]={value:e}})),Object.defineProperties(qo,Ko),Object.defineProperty(Vo,"isAxiosError",{value:!0}),qo.from=(e,t,r,n,o,i)=>{const a=Object.create(Vo);return Ho.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),qo.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Yo=qo;function Qo(e){return Ho.isPlainObject(e)||Ho.isArray(e)}function Jo(e){return Ho.endsWith(e,"[]")?e.slice(0,-2):e}function Xo(e,t,r){return e?e.concat(t).map((function(e,t){return e=Jo(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const Go=Ho.toFlatObject(Ho,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Zo=function(e,t,r){if(!Ho.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=Ho.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Ho.isUndefined(t[e])}))).metaTokens,o=r.visitor||u,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!==typeof Blob&&Blob)&&Ho.isSpecCompliantForm(t);if(!Ho.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Ho.isDate(e))return e.toISOString();if(!s&&Ho.isBlob(e))throw new Yo("Blob is not supported. Use a Buffer instead.");return Ho.isArrayBuffer(e)||Ho.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,r,o){let s=e;if(e&&!o&&"object"===typeof e)if(Ho.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(Ho.isArray(e)&&function(e){return Ho.isArray(e)&&!e.some(Qo)}(e)||(Ho.isFileList(e)||Ho.endsWith(r,"[]"))&&(s=Ho.toArray(e)))return r=Jo(r),s.forEach((function(e,n){!Ho.isUndefined(e)&&null!==e&&t.append(!0===a?Xo([r],n,i):null===a?r:r+"[]",l(e))})),!1;return!!Qo(e)||(t.append(Xo(o,r,i),l(e)),!1)}const c=[],d=Object.assign(Go,{defaultVisitor:u,convertValue:l,isVisitable:Qo});if(!Ho.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Ho.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),Ho.forEach(r,(function(r,i){!0===(!(Ho.isUndefined(r)||null===r)&&o.call(t,r,Ho.isString(i)?i.trim():i,n,d))&&e(r,n?n.concat(i):[i])})),c.pop()}}(e),t};function ei(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ti(e,t){this._pairs=[],e&&Zo(e,this,t)}const ri=ti.prototype;ri.append=function(e,t){this._pairs.push([e,t])},ri.toString=function(e){const t=e?function(t){return e.call(this,t,ei)}:ei;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const ni=ti;function oi(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ii(e,t,r){if(!t)return e;const n=r&&r.encode||oi;Ho.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(i=o?o(t,r):Ho.isURLSearchParams(t)?t.toString():new ni(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const ai=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ho.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},si={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},li={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:ni,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ui="undefined"!==typeof window&&"undefined"!==typeof document,ci="object"===typeof navigator&&navigator||void 0,di=ui&&(!ci||["ReactNative","NativeScript","NS"].indexOf(ci.product)<0),fi="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,pi=ui&&window.location.href||"http://localhost",hi={...e,...li};const mi=function(e){function t(e,r,n,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&Ho.isArray(n)?n.length:i,s)return Ho.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a;n[i]&&Ho.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],o)&&Ho.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}(n[i])),!a}if(Ho.isFormData(e)&&Ho.isFunction(e.entries)){const r={};return Ho.forEachEntry(e,((e,n)=>{t(function(e){return Ho.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null};const gi={transitional:si,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=Ho.isObject(e);o&&Ho.isHTMLForm(e)&&(e=new FormData(e));if(Ho.isFormData(e))return n?JSON.stringify(mi(e)):e;if(Ho.isArrayBuffer(e)||Ho.isBuffer(e)||Ho.isStream(e)||Ho.isFile(e)||Ho.isBlob(e)||Ho.isReadableStream(e))return e;if(Ho.isArrayBufferView(e))return e.buffer;if(Ho.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Zo(e,new hi.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return hi.isNode&&Ho.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Ho.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Zo(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t,r){if(Ho.isString(e))try{return(t||JSON.parse)(e),Ho.trim(e)}catch(Mg){if("SyntaxError"!==Mg.name)throw Mg}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||gi.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Ho.isResponse(e)||Ho.isReadableStream(e))return e;if(e&&Ho.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(Mg){if(r){if("SyntaxError"===Mg.name)throw Yo.from(Mg,Yo.ERR_BAD_RESPONSE,this,null,this.response);throw Mg}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:hi.classes.FormData,Blob:hi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ho.forEach(["delete","get","head","post","put","patch"],(e=>{gi.headers[e]={}}));const vi=gi,yi=Ho.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bi=Symbol("internals");function xi(e){return e&&String(e).trim().toLowerCase()}function wi(e){return!1===e||null==e?e:Ho.isArray(e)?e.map(wi):String(e)}function _i(e,t,r,n,o){return Ho.isFunction(n)?n.call(this,t,r):(o&&(t=r),Ho.isString(t)?Ho.isString(n)?-1!==t.indexOf(n):Ho.isRegExp(n)?n.test(t):void 0:void 0)}class ki{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=xi(t);if(!o)throw new Error("header name must be a non-empty string");const i=Ho.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=wi(e))}const i=(e,t)=>Ho.forEach(e,((e,r)=>o(e,r,t)));if(Ho.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Ho.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&yi[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(Ho.isObject(e)&&Ho.isIterable(e)){let r,n,o={};for(const t of e){if(!Ho.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[n=t[0]]=(r=o[n])?Ho.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}i(o,t)}else null!=e&&o(t,e,r);return this}get(e,t){if(e=xi(e)){const r=Ho.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Ho.isFunction(t))return t.call(this,e,r);if(Ho.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=xi(e)){const r=Ho.findKey(this,e);return!(!r||void 0===this[r]||t&&!_i(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=xi(e)){const o=Ho.findKey(r,e);!o||t&&!_i(0,r[o],o,t)||(delete r[o],n=!0)}}return Ho.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!_i(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return Ho.forEach(this,((n,o)=>{const i=Ho.findKey(r,o);if(i)return t[i]=wi(n),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();a!==o&&delete t[o],t[a]=wi(n),r[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Ho.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Ho.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,r]=e;return t+": "+r})).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[bi]=this[bi]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=xi(e);t[n]||(!function(e,t){const r=Ho.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return Ho.isArray(e)?e.forEach(n):n(e),this}}ki.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ho.reduceDescriptors(ki.prototype,((e,t)=>{let{value:r}=e,n=t[0].toUpperCase()+t.slice(1);return{get:()=>r,set(e){this[n]=e}}})),Ho.freezeMethods(ki);const Si=ki;function Ei(e,t){const r=this||vi,n=t||r,o=Si.from(n.headers);let i=n.data;return Ho.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Ci(e){return!(!e||!e.__CANCEL__)}function ji(e,t,r){Yo.call(this,null==e?"canceled":e,Yo.ERR_CANCELED,t,r),this.name="CanceledError"}Ho.inherits(ji,Yo,{__CANCEL__:!0});const Ti=ji;function Oi(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Yo("Request failed with status code "+r.status,[Yo.ERR_BAD_REQUEST,Yo.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}const Ri=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),u=n[a];o||(o=l),r[i]=s,n[i]=l;let c=a,d=0;for(;c!==i;)d+=r[c++],c%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const f=u&&l-u;return f?Math.round(1e3*d/f):void 0}};const Ai=function(e,t){let r,n,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];t>=i?a(l,e):(r=l,n||(n=setTimeout((()=>{n=null,a(r)}),i-t)))},()=>r&&a(r)]},Pi=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=0;const o=Ri(50,250);return Ai((r=>{const i=r.loaded,a=r.lengthComputable?r.total:void 0,s=i-n,l=o(s);n=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),r)},Li=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},$i=e=>function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Ho.asap((()=>e(...r)))},Ni=hi.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,hi.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(hi.origin),hi.navigator&&/(msie|trident)/i.test(hi.navigator.userAgent)):()=>!0,zi=hi.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const a=[e+"="+encodeURIComponent(t)];Ho.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),Ho.isString(n)&&a.push("path="+n),Ho.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ii(e,t,r){let n=!function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Fi=e=>e instanceof Si?{...e}:e;function Di(e,t){t=t||{};const r={};function n(e,t,r,n){return Ho.isPlainObject(e)&&Ho.isPlainObject(t)?Ho.merge.call({caseless:n},e,t):Ho.isPlainObject(t)?Ho.merge({},t):Ho.isArray(t)?t.slice():t}function o(e,t,r,o){return Ho.isUndefined(t)?Ho.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function i(e,t){if(!Ho.isUndefined(t))return n(void 0,t)}function a(e,t){return Ho.isUndefined(t)?Ho.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,r)=>o(Fi(e),Fi(t),0,!0)};return Ho.forEach(Object.keys(Object.assign({},e,t)),(function(n){const i=l[n]||o,a=i(e[n],t[n],n);Ho.isUndefined(a)&&i!==s||(r[n]=a)})),r}const Mi=e=>{const t=Di({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=Si.from(s),t.url=ii(Ii(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Ho.isFormData(n))if(hi.hasStandardBrowserEnv||hi.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(r=s.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(hi.hasStandardBrowserEnv&&(o&&Ho.isFunction(o)&&(o=o(t)),o||!1!==o&&Ni(t.url))){const e=i&&a&&zi.read(a);e&&s.set(i,e)}return t},Ui="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=Mi(e);let o=n.data;const i=Si.from(n.headers).normalize();let a,s,l,u,c,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=n;function h(){u&&u(),c&&c(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const n=Si.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Oi((function(e){t(e),h()}),(function(e){r(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(r(new Yo("Request aborted",Yo.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new Yo("Network Error",Yo.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||si;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Yo(t,o.clarifyTimeoutError?Yo.ETIMEDOUT:Yo.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&Ho.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Ho.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),d&&"json"!==d&&(m.responseType=n.responseType),p&&([l,c]=Pi(p,!0),m.addEventListener("progress",l)),f&&m.upload&&([s,u]=Pi(f),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",u)),(n.cancelToken||n.signal)&&(a=t=>{m&&(r(!t||t.type?new Ti(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const v=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);v&&-1===hi.protocols.indexOf(v)?r(new Yo("Unsupported protocol "+v+":",Yo.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Bi=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Yo?t:new Ti(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new Yo(`timeout ${t} of ms exceeded`,Yo.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=n;return s.unsubscribe=()=>Ho.asap(a),s}},Wi=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},Hi=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},qi=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of Hi(e))yield*Wi(r,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return s(),void e.close();let i=n.byteLength;if(r){let e=a+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},Vi="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Ki=Vi&&"function"===typeof ReadableStream,Yi=Vi&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Qi=function(e){try{for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return!!e(...r)}catch(Mg){return!1}},Ji=Ki&&Qi((()=>{let e=!1;const t=new Request(hi.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Xi=Ki&&Qi((()=>Ho.isReadableStream(new Response("").body))),Gi={stream:Xi&&(e=>e.body)};var Zi;Vi&&(Zi=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Gi[e]&&(Gi[e]=Ho.isFunction(Zi[e])?t=>t[e]():(t,r)=>{throw new Yo(`Response type '${e}' is not supported`,Yo.ERR_NOT_SUPPORT,r)})})));const ea=async(e,t)=>{const r=Ho.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(Ho.isBlob(e))return e.size;if(Ho.isSpecCompliantForm(e)){const t=new Request(hi.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ho.isArrayBufferView(e)||Ho.isArrayBuffer(e)?e.byteLength:(Ho.isURLSearchParams(e)&&(e+=""),Ho.isString(e)?(await Yi(e)).byteLength:void 0)})(t):r},ta=Vi&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=Mi(e);u=u?(u+"").toLowerCase():"text";let p,h=Bi([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&Ji&&"get"!==r&&"head"!==r&&0!==(g=await ea(c,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(Ho.isFormData(n)&&(e=r.headers.get("content-type"))&&c.setContentType(e),r.body){const[e,t]=Li(g,Pi($i(l)));n=qi(r.body,65536,e,t)}}Ho.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:r.toUpperCase(),headers:c.normalize().toJSON(),body:n,duplex:"half",credentials:o?d:void 0});let i=await fetch(p);const a=Xi&&("stream"===u||"response"===u);if(Xi&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=Ho.toFiniteNumber(i.headers.get("content-length")),[r,n]=s&&Li(t,Pi($i(s),!0))||[];i=new Response(qi(i.body,65536,r,(()=>{n&&n(),m&&m()})),e)}u=u||"text";let v=await Gi[Ho.findKey(Gi,u)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,r)=>{Oi(t,r,{data:v,headers:Si.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:p})}))}catch(v){if(m&&m(),v&&"TypeError"===v.name&&/Load failed|fetch/i.test(v.message))throw Object.assign(new Yo("Network Error",Yo.ERR_NETWORK,e,p),{cause:v.cause||v});throw Yo.from(v,v&&v.code,e,p)}}),ra={http:null,xhr:Ui,fetch:ta};Ho.forEach(ra,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(Mg){}Object.defineProperty(e,"adapterName",{value:t})}}));const na=e=>`- ${e}`,oa=e=>Ho.isFunction(e)||null===e||!1===e,ia=e=>{e=Ho.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){let t;if(r=e[i],n=r,!oa(r)&&(n=ra[(t=String(r)).toLowerCase()],void 0===n))throw new Yo(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+i]=n}if(!n){const e=Object.entries(o).map((e=>{let[t,r]=e;return`adapter ${t} `+(!1===r?"is not supported by the environment":"is not available in the build")}));let r=t?e.length>1?"since :\n"+e.map(na).join("\n"):" "+na(e[0]):"as no adapter specified";throw new Yo("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n};function aa(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ti(null,e)}function sa(e){aa(e),e.headers=Si.from(e.headers),e.data=Ei.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ia(e.adapter||vi.adapter)(e).then((function(t){return aa(e),t.data=Ei.call(e,e.transformResponse,t),t.headers=Si.from(t.headers),t}),(function(t){return Ci(t)||(aa(e),t&&t.response&&(t.response.data=Ei.call(e,e.transformResponse,t.response),t.response.headers=Si.from(t.response.headers))),Promise.reject(t)}))}const la="1.9.0",ua={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ua[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const ca={};ua.transitional=function(e,t,r){function n(e,t){return"[Axios v1.9.0] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,i)=>{if(!1===e)throw new Yo(n(o," has been removed"+(t?" in "+t:"")),Yo.ERR_DEPRECATED);return t&&!ca[o]&&(ca[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}},ua.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const da={assertOptions:function(e,t,r){if("object"!==typeof e)throw new Yo("options must be an object",Yo.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const t=e[i],r=void 0===t||a(t,i,e);if(!0!==r)throw new Yo("option "+i+" must be "+r,Yo.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Yo("Unknown option "+i,Yo.ERR_BAD_OPTION)}},validators:ua},fa=da.validators;class pa{constructor(e){this.defaults=e||{},this.interceptors={request:new ai,response:new ai}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(Mg){}}throw r}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Di(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&da.assertOptions(r,{silentJSONParsing:fa.transitional(fa.boolean),forcedJSONParsing:fa.transitional(fa.boolean),clarifyTimeoutError:fa.transitional(fa.boolean)},!1),null!=n&&(Ho.isFunction(n)?t.paramsSerializer={serialize:n}:da.assertOptions(n,{encode:fa.function,serialize:fa.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),da.assertOptions(t,{baseUrl:fa.spelling("baseURL"),withXsrfToken:fa.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Ho.merge(o.common,o[t.method]);o&&Ho.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Si.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let u;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let c,d=0;if(!s){const e=[sa.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),c=e.length,u=Promise.resolve(t);d<c;)u=u.then(e[d++],e[d++]);return u}c=a.length;let f=t;for(d=0;d<c;){const e=a[d++],t=a[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{u=sa.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,c=l.length;d<c;)u=u.then(l[d++],l[d++]);return u}getUri(e){return ii(Ii((e=Di(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Ho.forEach(["delete","get","head","options"],(function(e){pa.prototype[e]=function(t,r){return this.request(Di(r||{},{method:e,url:t,data:(r||{}).data}))}})),Ho.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Di(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}pa.prototype[e]=t(),pa.prototype[e+"Form"]=t(!0)}));const ha=pa;class ma{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new Ti(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new ma((function(t){e=t})),cancel:e}}}const ga=ma;const va={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(va).forEach((e=>{let[t,r]=e;va[r]=t}));const ya=va;const ba=function e(t){const r=new ha(t),n=no(ha.prototype.request,r);return Ho.extend(n,ha.prototype,r,{allOwnKeys:!0}),Ho.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Di(t,r))},n}(vi);ba.Axios=ha,ba.CanceledError=Ti,ba.CancelToken=ga,ba.isCancel=Ci,ba.VERSION=la,ba.toFormData=Zo,ba.AxiosError=Yo,ba.Cancel=ba.CanceledError,ba.all=function(e){return Promise.all(e)},ba.spread=function(e){return function(t){return e.apply(null,t)}},ba.isAxiosError=function(e){return Ho.isObject(e)&&!0===e.isAxiosError},ba.mergeConfig=Di,ba.AxiosHeaders=Si,ba.formToJSON=e=>mi(Ho.isHTMLForm(e)?new FormData(e):e),ba.getAdapter=ia,ba.HttpStatusCode=ya,ba.default=ba;const xa=ba.create({baseURL:"https://api.jokesteronline.org/api",timeout:6e4});xa.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e))),xa.interceptors.response.use((e=>e.data?e:(console.warn("Empty response data",e),{...e,data:{data:[]}})),(async e=>{var t,r,n,o,i;401===(null===(t=e.response)||void 0===t?void 0:t.status)&&(localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.pathname.includes("/login")||(window.location.href="/login"));const a={message:(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Erro na requisi\xe7\xe3o",status:(null===(o=e.response)||void 0===o?void 0:o.status)||500,data:(null===(i=e.response)||void 0===i?void 0:i.data)||null};return Promise.reject(a)}));xa.getArray=async(e,t)=>(e=>Array.isArray(e)?e:e&&Array.isArray(e.data)?e.data:e&&e.items&&Array.isArray(e.items)?e.items:[])((await xa.get(e,t)).data);const wa=xa,_a={CONFLICT:"CONFLICT",AUTH_ERROR:"AUTH_ERROR",SESSION_EXPIRED:"SESSION_EXPIRED",NETWORK_ERROR:"NETWORK_ERROR",VALIDATION_ERROR:"VALIDATION_ERROR",UNKNOWN_ERROR:"UNKNOWN_ERROR"},ka=async e=>{var t;try{const{data:t}=await wa.post("/auth/register",e);return t.token&&localStorage.setItem("token",t.token),t}catch(r){if(console.error("[Auth Service] Register Error:",r),!r.response)throw r.request?{type:_a.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:_a.UNKNOWN_ERROR,message:"Erro desconhecido ao registrar"};switch(r.response.status){case 400:throw{type:_a.VALIDATION_ERROR,message:"Dados inv\xe1lidos",details:r.response.data.errors};case 409:throw{type:_a.CONFLICT,message:r.response.data.message||"Conflito no registro",conflicts:r.response.data.conflicts};default:throw{type:_a.UNKNOWN_ERROR,message:(null===(t=r.response.data)||void 0===t?void 0:t.message)||"Erro ao registrar usu\xe1rio"}}}},Sa=async e=>{var t,r,n;try{const{data:t}=await wa.post("/auth/login",e);return localStorage.setItem("token",t.token),t}catch(o){if(console.error("[Auth Service] Login Error:",o),!o.response)throw o.request?{type:_a.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:_a.UNKNOWN_ERROR,message:"Erro desconhecido ao fazer login"};switch(o.response.status){case 400:throw{type:_a.VALIDATION_ERROR,message:"Credenciais inv\xe1lidas",details:o.response.data.errors};case 401:throw{type:_a.AUTH_ERROR,message:(null===(t=o.response.data)||void 0===t?void 0:t.message)||"Credenciais inv\xe1lidas"};case 403:throw{type:_a.AUTH_ERROR,message:(null===(r=o.response.data)||void 0===r?void 0:r.message)||"Conta desativada ou bloqueada"};default:throw{type:_a.UNKNOWN_ERROR,message:(null===(n=o.response.data)||void 0===n?void 0:n.message)||"Erro ao fazer login"}}}},Ea=async()=>{try{const e=localStorage.getItem("token");if(!e)throw{type:_a.AUTH_ERROR,message:"Nenhum token encontrado"};const{data:t}=await wa.get("/auth/check",{headers:{Authorization:`Bearer ${e}`}});return t}catch(r){var e,t;if(console.error("[Auth Service] Check Auth Error:",r),401===(null===(e=r.response)||void 0===e?void 0:e.status))throw localStorage.removeItem("token"),{type:_a.SESSION_EXPIRED,message:"Sess\xe3o expirada"};if(r.response)throw{type:_a.UNKNOWN_ERROR,message:(null===(t=r.response.data)||void 0===t?void 0:t.message)||"Erro ao verificar autentica\xe7\xe3o"};throw r.request?{type:_a.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:_a.UNKNOWN_ERROR,message:r.message||"Erro desconhecido ao verificar autentica\xe7\xe3o"}}},Ca=async()=>{try{return await wa.post("/auth/logout"),localStorage.removeItem("token"),localStorage.removeItem("user"),{success:!0}}catch(t){var e;if(console.error("[Auth Service] Logout Error:",t),localStorage.removeItem("token"),localStorage.removeItem("user"),t.response)throw{type:_a.UNKNOWN_ERROR,message:(null===(e=t.response.data)||void 0===e?void 0:e.message)||"Erro ao fazer logout"};throw t.request?{type:_a.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:_a.UNKNOWN_ERROR,message:"Erro desconhecido ao fazer logout"}}},ja=Object.create(null);ja.open="0",ja.close="1",ja.ping="2",ja.pong="3",ja.message="4",ja.upgrade="5",ja.noop="6";const Ta=Object.create(null);Object.keys(ja).forEach((e=>{Ta[ja[e]]=e}));const Oa={type:"error",data:"parser error"},Ra="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),Aa="function"===typeof ArrayBuffer,Pa=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,La=(e,t,r)=>{let{type:n,data:o}=e;return Ra&&o instanceof Blob?t?r(o):$a(o,r):Aa&&(o instanceof ArrayBuffer||Pa(o))?t?r(o):$a(new Blob([o]),r):r(ja[n]+(o||""))},$a=(e,t)=>{const r=new FileReader;return r.onload=function(){const e=r.result.split(",")[1];t("b"+(e||""))},r.readAsDataURL(e)};function Na(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let za;const Ia="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Fa="undefined"===typeof Uint8Array?[]:new Uint8Array(256);for(let r=0;r<64;r++)Fa[Ia.charCodeAt(r)]=r;const Da="function"===typeof ArrayBuffer,Ma=(e,t)=>{if("string"!==typeof e)return{type:"message",data:Ba(e,t)};const r=e.charAt(0);if("b"===r)return{type:"message",data:Ua(e.substring(1),t)};return Ta[r]?e.length>1?{type:Ta[r],data:e.substring(1)}:{type:Ta[r]}:Oa},Ua=(e,t)=>{if(Da){const r=(e=>{let t,r,n,o,i,a=.75*e.length,s=e.length,l=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);const u=new ArrayBuffer(a),c=new Uint8Array(u);for(t=0;t<s;t+=4)r=Fa[e.charCodeAt(t)],n=Fa[e.charCodeAt(t+1)],o=Fa[e.charCodeAt(t+2)],i=Fa[e.charCodeAt(t+3)],c[l++]=r<<2|n>>4,c[l++]=(15&n)<<4|o>>2,c[l++]=(3&o)<<6|63&i;return u})(e);return Ba(r,t)}return{base64:!0,data:e}},Ba=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,Wa=String.fromCharCode(30);function Ha(){return new TransformStream({transform(e,t){!function(e,t){Ra&&e.data instanceof Blob?e.data.arrayBuffer().then(Na).then(t):Aa&&(e.data instanceof ArrayBuffer||Pa(e.data))?t(Na(e.data)):La(e,!1,(e=>{za||(za=new TextEncoder),t(za.encode(e))}))}(e,(r=>{const n=r.length;let o;if(n<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,n);else if(n<65536){o=new Uint8Array(3);const e=new DataView(o.buffer);e.setUint8(0,126),e.setUint16(1,n)}else{o=new Uint8Array(9);const e=new DataView(o.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(n))}e.data&&"string"!==typeof e.data&&(o[0]|=128),t.enqueue(o),t.enqueue(r)}))}})}let qa;function Va(e){return e.reduce(((e,t)=>e+t.length),0)}function Ka(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let n=0;for(let o=0;o<t;o++)r[o]=e[0][n++],n===e[0].length&&(e.shift(),n=0);return e.length&&n<e[0].length&&(e[0]=e[0].slice(n)),r}function Ya(e){if(e)return function(e){for(var t in Ya.prototype)e[t]=Ya.prototype[t];return e}(e)}Ya.prototype.on=Ya.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},Ya.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this},Ya.prototype.off=Ya.prototype.removeListener=Ya.prototype.removeAllListeners=Ya.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var o=0;o<n.length;o++)if((r=n[o])===t||r.fn===t){n.splice(o,1);break}return 0===n.length&&delete this._callbacks["$"+e],this},Ya.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){n=0;for(var o=(r=r.slice(0)).length;n<o;++n)r[n].apply(this,t)}return this},Ya.prototype.emitReserved=Ya.prototype.emit,Ya.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},Ya.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Qa="function"===typeof Promise&&"function"===typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Ja="undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")();function Xa(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.reduce(((t,r)=>(e.hasOwnProperty(r)&&(t[r]=e[r]),t)),{})}const Ga=Ja.setTimeout,Za=Ja.clearTimeout;function es(e,t){t.useNativeTimers?(e.setTimeoutFn=Ga.bind(Ja),e.clearTimeoutFn=Za.bind(Ja)):(e.setTimeoutFn=Ja.setTimeout.bind(Ja),e.clearTimeoutFn=Ja.clearTimeout.bind(Ja))}function ts(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}class rs extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class ns extends Ya{constructor(e){super(),this.writable=!1,es(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new rs(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ma(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}(e);return t.length?"?"+t:""}}class os extends ns{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",(function(){--e||t()}))),this.writable||(e++,this.once("drain",(function(){--e||t()})))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const r=e.split(Wa),n=[];for(let o=0;o<r.length;o++){const e=Ma(r[o],t);if(n.push(e),"error"===e.type)break}return n})(e,this.socket.binaryType).forEach((e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)})),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const r=e.length,n=new Array(r);let o=0;e.forEach(((e,i)=>{La(e,!1,(e=>{n[i]=e,++o===r&&t(n.join(Wa))}))}))})(e,(e=>{this.doWrite(e,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=ts()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}}let is=!1;try{is="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(Ug){}const as=is;function ss(){}class ls extends os{constructor(e){if(super(e),"undefined"!==typeof location){const t="https:"===location.protocol;let r=location.port;r||(r=t?"443":"80"),this.xd="undefined"!==typeof location&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",((e,t)=>{this.onError("xhr post error",e,t)}))}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",((e,t)=>{this.onError("xhr poll error",e,t)})),this.pollXhr=e}}class us extends Ya{constructor(e,t,r){super(),this.createRequest=e,es(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=void 0!==r.data?r.data:null,this._create()}_create(){var e;const t=Xa(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&r.setRequestHeader(e,this._opts.extraHeaders[e])}}catch(Mg){}if("POST"===this._method)try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(Mg){}try{r.setRequestHeader("Accept","*/*")}catch(Mg){}null===(e=this._opts.cookieJar)||void 0===e||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var e;3===r.readyState&&(null===(e=this._opts.cookieJar)||void 0===e||e.parseCookies(r.getResponseHeader("set-cookie"))),4===r.readyState&&(200===r.status||1223===r.status?this._onLoad():this.setTimeoutFn((()=>{this._onError("number"===typeof r.status?r.status:0)}),0))},r.send(this._data)}catch(Mg){return void this.setTimeoutFn((()=>{this._onError(Mg)}),0)}"undefined"!==typeof document&&(this._index=us.requestsCount++,us.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if("undefined"!==typeof this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=ss,e)try{this._xhr.abort()}catch(Mg){}"undefined"!==typeof document&&delete us.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(us.requestsCount=0,us.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",cs);else if("function"===typeof addEventListener){addEventListener("onpagehide"in Ja?"pagehide":"unload",cs,!1)}function cs(){for(let e in us.requests)us.requests.hasOwnProperty(e)&&us.requests[e].abort()}const ds=function(){const e=fs({xdomain:!1});return e&&null!==e.responseType}();function fs(e){const t=e.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!t||as))return new XMLHttpRequest}catch(Mg){}if(!t)try{return new(Ja[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(Mg){}}const ps="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class hs extends ns{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=ps?{}:Xa(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(Ug){return this.emitReserved("error",Ug)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],n=t===e.length-1;La(r,this.supportsBinary,(e=>{try{this.doWrite(r,e)}catch(Mg){}n&&Qa((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){"undefined"!==typeof this.ws&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=ts()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const ms=Ja.WebSocket||Ja.MozWebSocket;const gs={websocket:class extends hs{createSocket(e,t,r){return ps?new ms(e,t,r):t?new ms(e,t):new ms(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends ns{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(Ug){return this.emitReserved("error",Ug)}this._transport.closed.then((()=>{this.onClose()})).catch((e=>{this.onError("webtransport error",e)})),this._transport.ready.then((()=>{this._transport.createBidirectionalStream().then((e=>{const t=function(e,t){qa||(qa=new TextDecoder);const r=[];let n=0,o=-1,i=!1;return new TransformStream({transform(a,s){for(r.push(a);;){if(0===n){if(Va(r)<1)break;const e=Ka(r,1);i=128===(128&e[0]),o=127&e[0],n=o<126?3:126===o?1:2}else if(1===n){if(Va(r)<2)break;const e=Ka(r,2);o=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),n=3}else if(2===n){if(Va(r)<8)break;const e=Ka(r,8),t=new DataView(e.buffer,e.byteOffset,e.length),i=t.getUint32(0);if(i>Math.pow(2,21)-1){s.enqueue(Oa);break}o=i*Math.pow(2,32)+t.getUint32(4),n=3}else{if(Va(r)<o)break;const e=Ka(r,o);s.enqueue(Ma(i?e:qa.decode(e),t)),n=0}if(0===o||o>e){s.enqueue(Oa);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),n=Ha();n.readable.pipeTo(e.writable),this._writer=n.writable.getWriter();const o=()=>{r.read().then((e=>{let{done:t,value:r}=e;t||(this.onPacket(r),o())})).catch((e=>{}))};o();const i={type:"open"};this.query.sid&&(i.data=`{"sid":"${this.query.sid}"}`),this._writer.write(i).then((()=>this.onOpen()))}))}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],n=t===e.length-1;this._writer.write(r).then((()=>{n&&Qa((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){var e;null===(e=this._transport)||void 0===e||e.close()}},polling:class extends ls{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=ds&&!t}request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(e,{xd:this.xd},this.opts),new us(fs,this.uri(),e)}}},vs=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ys=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function bs(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),n=e.indexOf("]");-1!=r&&-1!=n&&(e=e.substring(0,r)+e.substring(r,n).replace(/:/g,";")+e.substring(n,e.length));let o=vs.exec(e||""),i={},a=14;for(;a--;)i[ys[a]]=o[a]||"";return-1!=r&&-1!=n&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=function(e,t){const r=/\/{2,9}/g,n=t.replace(r,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||n.splice(0,1);"/"==t.slice(-1)&&n.splice(n.length-1,1);return n}(0,i.path),i.queryKey=function(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(e,t,n){t&&(r[t]=n)})),r}(0,i.query),i}const xs="function"===typeof addEventListener&&"function"===typeof removeEventListener,ws=[];xs&&addEventListener("offline",(()=>{ws.forEach((e=>e()))}),!1);class _s extends Ya{constructor(e,t){if(super(),this.binaryType="arraybuffer",this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&"object"===typeof e&&(t=e,e=null),e){const r=bs(e);t.hostname=r.host,t.secure="https"===r.protocol||"wss"===r.protocol,t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=bs(t.host).host);es(this,t),this.secure=null!=t.secure?t.secure:"undefined"!==typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach((e=>{const t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e})),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"===typeof this.opts.query&&(this.opts.query=function(e){let t={},r=e.split("&");for(let n=0,o=r.length;n<o;n++){let e=r[n].split("=");t[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}return t}(this.opts.query)),xs&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ws.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);const e=this.opts.rememberUpgrade&&_s.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",(e=>this._onClose("transport close",e)))}onOpen(){this.readyState="open",_s.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()}_onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn((()=>{this._onClose("ping timeout")}),e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let r=0;r<this.writeBuffer.length;r++){const n=this.writeBuffer[r].data;if(n&&(e+="string"===typeof(t=n)?function(e){let t=0,r=0;for(let n=0,o=e.length;n<o;n++)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(n++,r+=4);return r}(t):Math.ceil(1.33*(t.byteLength||t.size))),r>0&&e>this._maxPayload)return this.writeBuffer.slice(0,r);e+=2}var t;return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Qa((()=>{this._onClose("ping timeout")}),this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,n){if("function"===typeof t&&(n=t,t=void 0),"function"===typeof r&&(n=r,r=null),"closing"===this.readyState||"closed"===this.readyState)return;(r=r||{}).compress=!1!==r.compress;const o={type:e,data:t,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?r():e()})):this.upgrading?r():e()),this}_onError(e){if(_s.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),xs&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const e=ws.indexOf(this._offlineEventListener);-1!==e&&ws.splice(e,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}_s.protocol=4;class ks extends _s{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),"open"===this.readyState&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),r=!1;_s.priorWebsocketSuccess=!1;const n=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",(e=>{if(!r)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;_s.priorWebsocketSuccess="websocket"===t.name,this.transport.pause((()=>{r||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())}))}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}})))};function o(){r||(r=!0,u(),t.close(),t=null)}const i=e=>{const r=new Error("probe error: "+e);r.transport=t.name,o(),this.emitReserved("upgradeError",r)};function a(){i("transport closed")}function s(){i("socket closed")}function l(e){t&&e.name!==t.name&&o()}const u=()=>{t.removeListener("open",n),t.removeListener("error",i),t.removeListener("close",a),this.off("close",s),this.off("upgrading",l)};t.once("open",n),t.once("error",i),t.once("close",a),this.once("close",s),this.once("upgrading",l),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn((()=>{r||t.open()}),200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}}class Ss extends ks{constructor(e){const t="object"===typeof e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!t.transports||t.transports&&"string"===typeof t.transports[0])&&(t.transports=(t.transports||["polling","websocket","webtransport"]).map((e=>gs[e])).filter((e=>!!e))),super(e,t)}}const Es="function"===typeof ArrayBuffer,Cs=Object.prototype.toString,js="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Cs.call(Blob),Ts="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===Cs.call(File);function Os(e){return Es&&(e instanceof ArrayBuffer||(e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer)(e))||js&&e instanceof Blob||Ts&&e instanceof File}function Rs(e,t){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e)){for(let t=0,r=e.length;t<r;t++)if(Rs(e[t]))return!0;return!1}if(Os(e))return!0;if(e.toJSON&&"function"===typeof e.toJSON&&1===arguments.length)return Rs(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&Rs(e[r]))return!0;return!1}function As(e){const t=[],r=e.data,n=e;return n.data=Ps(r,t),n.attachments=t.length,{packet:n,buffers:t}}function Ps(e,t){if(!e)return e;if(Os(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}if(Array.isArray(e)){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=Ps(e[n],t);return r}if("object"===typeof e&&!(e instanceof Date)){const r={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=Ps(e[n],t));return r}return e}function Ls(e,t){return e.data=$s(e.data,t),delete e.attachments,e}function $s(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"===typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=$s(e[r],t);else if("object"===typeof e)for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=$s(e[r],t));return e}const Ns=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],zs=5;var Is;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(Is||(Is={}));class Fs{constructor(e){this.replacer=e}encode(e){return e.type!==Is.EVENT&&e.type!==Is.ACK||!Rs(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===Is.EVENT?Is.BINARY_EVENT:Is.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==Is.BINARY_EVENT&&e.type!==Is.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=As(e),r=this.encodeAsString(t.packet),n=t.buffers;return n.unshift(r),n}}function Ds(e){return"[object Object]"===Object.prototype.toString.call(e)}class Ms extends Ya{constructor(e){super(),this.reviver=e}add(e){let t;if("string"===typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===Is.BINARY_EVENT;r||t.type===Is.BINARY_ACK?(t.type=r?Is.EVENT:Is.ACK,this.reconstructor=new Us(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!Os(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(void 0===Is[r.type])throw new Error("unknown packet type "+r.type);if(r.type===Is.BINARY_EVENT||r.type===Is.BINARY_ACK){const n=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const o=e.substring(n,t);if(o!=Number(o)||"-"!==e.charAt(t))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===e.charAt(t+1)){const n=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}r.nsp=e.substring(n,t)}else r.nsp="/";const n=e.charAt(t+1);if(""!==n&&Number(n)==n){const n=t+1;for(;++t;){const r=e.charAt(t);if(null==r||Number(r)!=r){--t;break}if(t===e.length)break}r.id=Number(e.substring(n,t+1))}if(e.charAt(++t)){const n=this.tryParse(e.substr(t));if(!Ms.isPayloadValid(r.type,n))throw new Error("invalid payload");r.data=n}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(Mg){return!1}}static isPayloadValid(e,t){switch(e){case Is.CONNECT:return Ds(t);case Is.DISCONNECT:return void 0===t;case Is.CONNECT_ERROR:return"string"===typeof t||Ds(t);case Is.EVENT:case Is.BINARY_EVENT:return Array.isArray(t)&&("number"===typeof t[0]||"string"===typeof t[0]&&-1===Ns.indexOf(t[0]));case Is.ACK:case Is.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Us{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=Ls(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Bs(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Ws=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Hs extends Ya{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Bs(e,"open",this.onopen.bind(this)),Bs(e,"packet",this.onpacket.bind(this)),Bs(e,"error",this.onerror.bind(this)),Bs(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.unshift("message"),this.emit.apply(this,t),this}emit(e){var t,r,n;if(Ws.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];if(i.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const s={type:Is.EVENT,data:i,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"===typeof i[i.length-1]){const e=this.ids++,t=i.pop();this._registerAckCallback(e,t),s.id=e}const l=null===(r=null===(t=this.io.engine)||void 0===t?void 0:t.transport)||void 0===r?void 0:r.writable,u=this.connected&&!(null===(n=this.io.engine)||void 0===n?void 0:n._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var r,n=this;const o=null!==(r=this.flags.timeout)&&void 0!==r?r:this._opts.ackTimeout;if(void 0===o)return void(this.acks[e]=t);const i=this.io.setTimeoutFn((()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))}),o),a=function(){n.io.clearTimeoutFn(i);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];t.apply(n,r)};a.withError=!0,this.acks[e]=a}emitWithAck(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return new Promise(((t,n)=>{const o=(e,r)=>e?n(e):t(r);o.withError=!0,r.push(o),this.emit(e,...r)}))}_addToQueue(e){var t=this;let r;"function"===typeof e[e.length-1]&&(r=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((function(e){if(n!==t._queue[0])return;if(null!==e)n.tryCount>t._opts.retries&&(t._queue.shift(),r&&r(e));else if(t._queue.shift(),r){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];r(null,...i)}return n.pending=!1,t._drainQueue()})),this._queue.push(n),this._drainQueue()}_drainQueue(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth((e=>{this._sendConnectPacket(e)})):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Is.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach((e=>{if(!this.sendBuffer.some((t=>String(t.id)===e))){const t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,new Error("socket has been disconnected"))}}))}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Is.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Is.EVENT:case Is.BINARY_EVENT:this.onevent(e);break;case Is.ACK:case Is.BINARY_ACK:this.onack(e);break;case Is.DISCONNECT:this.ondisconnect();break;case Is.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"===typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(){if(!r){r=!0;for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];t.packet({type:Is.ACK,id:e,data:o})}}}onack(e){const t=this.acks[e.id];"function"===typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach((e=>this.emitEvent(e))),this.receiveBuffer=[],this.sendBuffer.forEach((e=>{this.notifyOutgoingListeners(e),this.packet(e)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((e=>e())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Is.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function qs(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}qs.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-r:e+r}return 0|Math.min(e,this.max)},qs.prototype.reset=function(){this.attempts=0},qs.prototype.setMin=function(e){this.ms=e},qs.prototype.setMax=function(e){this.max=e},qs.prototype.setJitter=function(e){this.jitter=e};class Vs extends Ya{constructor(e,r){var n;super(),this.nsps={},this.subs=[],e&&"object"===typeof e&&(r=e,e=void 0),(r=r||{}).path=r.path||"/socket.io",this.opts=r,es(this,r),this.reconnection(!1!==r.reconnection),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(n=r.randomizationFactor)&&void 0!==n?n:.5),this.backoff=new qs({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==r.timeout?2e4:r.timeout),this._readyState="closed",this.uri=e;const o=r.parser||t;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=!1!==r.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ss(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const n=Bs(t,"open",(function(){r.onopen(),e&&e()})),o=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},i=Bs(t,"error",o);if(!1!==this._timeout){const e=this._timeout,r=this.setTimeoutFn((()=>{n(),o(new Error("timeout")),t.close()}),e);this.opts.autoUnref&&r.unref(),this.subs.push((()=>{this.clearTimeoutFn(r)}))}return this.subs.push(n),this.subs.push(i),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Bs(e,"ping",this.onping.bind(this)),Bs(e,"data",this.ondata.bind(this)),Bs(e,"error",this.onerror.bind(this)),Bs(e,"close",this.onclose.bind(this)),Bs(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(Mg){this.onclose("parse error",Mg)}}ondecoded(e){Qa((()=>{this.emitReserved("packet",e)}),this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Hs(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t){if(this.nsps[r].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach((e=>e())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),null===(r=this.engine)||void 0===r||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn((()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()})))}),t);this.opts.autoUnref&&r.unref(),this.subs.push((()=>{this.clearTimeoutFn(r)}))}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ks={};function Ys(e,t){"object"===typeof e&&(t=e,e=void 0);const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,n=e;r=r||"undefined"!==typeof location&&location,null==e&&(e=r.protocol+"//"+r.host),"string"===typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?r.protocol+e:r.host+e),/^(https?|wss?):\/\//.test(e)||(e="undefined"!==typeof r?r.protocol+"//"+e:"https://"+e),n=bs(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+t,n.href=n.protocol+"://"+o+(r&&r.port===n.port?"":":"+n.port),n}(e,(t=t||{}).path||"/socket.io"),n=r.source,o=r.id,i=r.path,a=Ks[o]&&i in Ks[o].nsps;let s;return t.forceNew||t["force new connection"]||!1===t.multiplex||a?s=new Vs(n,t):(Ks[o]||(Ks[o]=new Vs(n,t)),s=Ks[o]),r.query&&!t.query&&(t.query=r.queryKey),s.socket(r.path,t)}Object.assign(Ys,{Manager:Vs,Socket:Hs,io:Ys,connect:Ys});const Qs={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org";let Js;const Xs=e=>(Js||(console.log("Inicializando socket com token:",e?"presente":"ausente"),Js=Ys(Qs,{auth:{token:e},transports:["websocket"],reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3,withCredentials:!0}),Js.on("connect",(()=>{console.log("Socket conectado:",Js.id)})),Js.on("disconnect",(e=>{console.log("Socket desconectado. Raz\xe3o:",e),"io server disconnect"===e&&Js.connect()})),Js.on("connect_error",(e=>{console.error("Erro de conex\xe3o:",e.message),console.error("Detalhes do erro:",e),setTimeout((()=>{Js.connect()}),1e3)}))),Js);var Gs=r(579);const Zs=(0,n.createContext)(),el=e=>{let{children:t}=e;const[r,o]=(0,n.useState)(null),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(!1),u=(0,n.useCallback)((async()=>{try{if(!("Notification"in window))return console.warn("Este navegador n\xe3o suporta notifica\xe7\xf5es desktop"),!1;if("granted"===Notification.permission)return!0;if("denied"!==Notification.permission){if("granted"===await Notification.requestPermission())return console.log("Permiss\xe3o para notifica\xe7\xf5es concedida"),!0}return console.log("Permiss\xe3o para notifica\xe7\xf5es n\xe3o concedida"),!1}catch(e){return console.error("Erro ao solicitar permiss\xe3o de notifica\xe7\xf5es:",e),!1}}),[]),c=(0,n.useCallback)((async()=>{if(!localStorage.getItem("token"))return a(!1),void l(!0);try{var e,t;a(!0);const r=await Ea();o((null===r||void 0===r?void 0:r.user)||null),!1!==(null===r||void 0===r||null===(e=r.user)||void 0===e||null===(t=e.settings)||void 0===t?void 0:t.notificationsEnabled)&&await u()}catch(r){console.error("Falha na verifica\xe7\xe3o de autentica\xe7\xe3o:",r),localStorage.removeItem("token"),o(null)}finally{a(!1),l(!0)}}),[u]),d=(0,n.useCallback)((async e=>{try{var t,r;a(!0);const n=await apiLogin(e);return localStorage.setItem("token",n.token),o(n.user),!1!==(null===(t=n.user)||void 0===t||null===(r=t.settings)||void 0===r?void 0:r.notificationsEnabled)&&await u(),n}catch(n){throw n}finally{a(!1)}}),[u]),f=(0,n.useCallback)((async()=>{try{await Ca(),localStorage.removeItem("token"),o(null),Js&&(Js.disconnect(),Js=null)}catch(e){console.error("Logout error:",e)}}),[]),p=(0,n.useCallback)((async function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{o((t=>({...t,...e}))),t&&await c()}catch(r){throw console.error("Falha ao atualizar usu\xe1rio:",r),r}}),[c]),h=(0,n.useCallback)((async e=>{try{const t=new FormData;t.append("avatar",e);const{data:r}=await wa.put("/users/profile",t,{headers:{"Content-Type":"multipart/form-data"}});return await p(r),r}catch(t){throw console.error("Falha ao atualizar avatar:",t),t}}),[p]),m=(0,n.useCallback)((async e=>{try{return await wa.patch("/users/settings",{notificationsEnabled:e}),await p({settings:{...r.settings,notificationsEnabled:e}},!1),e&&await u(),!0}catch(t){throw console.error("Falha ao atualizar prefer\xeancias:",t),t}}),[r,p,u]);return(0,n.useEffect)((()=>{c()}),[c]),(0,Gs.jsx)(Zs.Provider,{value:{user:r,loading:i,initialCheckDone:s,verifyAuth:c,login:d,logout:f,updateUser:p,updateAvatar:h,updateNotificationPreferences:m,requestNotificationPermission:u},children:t})},tl=()=>{const e=(0,n.useContext)(Zs);if(!e)throw new Error("useAuth deve ser usado dentro de um AuthProvider");return e};var rl,nl,ol=r(403);!function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(rl||(rl={})),function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"}(nl||(nl={}));const il=(0,ol.F3)("StatusBar"),al=(0,n.createContext)(),sl=e=>{let{children:t}=e;const[r,o]=(0,n.useState)((()=>{if(ol.Ii.isNativePlatform())return"dark";const e=localStorage.getItem("theme"),t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return e||(t?"dark":"light")}));return(0,n.useEffect)((()=>{document.body.setAttribute("data-theme",r),ol.Ii.isNativePlatform()&&(il.setBackgroundColor({color:"dark"===r?"#121212":"#ffffff"}),il.setStyle({style:"dark"===r?rl.Dark:rl.Light}))}),[r]),(0,Gs.jsx)(al.Provider,{value:{theme:r,toggleTheme:()=>{o((e=>{const t="light"===e?"dark":"light";return localStorage.setItem("theme",t),ol.Ii.isNativePlatform()&&il.setStyle({style:"dark"===t?rl.Dark:rl.Light}),t}))}},children:t})},ll=()=>{const e=(0,n.useContext)(al);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e};var ul;r(536);!function(e){e[e.Sunday=1]="Sunday",e[e.Monday=2]="Monday",e[e.Tuesday=3]="Tuesday",e[e.Wednesday=4]="Wednesday",e[e.Thursday=5]="Thursday",e[e.Friday=6]="Friday",e[e.Saturday=7]="Saturday"}(ul||(ul={}));const cl=(0,ol.F3)("LocalNotifications",{web:()=>r.e(640).then(r.bind(r,640)).then((e=>new e.LocalNotificationsWeb))}),dl=(0,n.createContext)(),fl=e=>{let{children:t}=e;const[r,o]=(0,n.useState)([]),[i,a]=(0,n.useState)(0),[s,l]=(0,n.useState)(!0),{user:u}=tl(),[c,d]=(0,n.useState)(null),f=(0,n.useCallback)((e=>{o(e)}),[]),p=(0,n.useCallback)((async()=>{try{var e;l(!0);const t=await wa.get("/notifications",{params:{limit:20,skip:0,sort:"-createdAt"}}),r=Array.isArray(null===(e=t.data)||void 0===e?void 0:e.data)?t.data.data:[];f(r)}catch(t){console.error("Failed to load notifications:",t),f([])}finally{l(!1)}}),[f]),h=(0,n.useCallback)((async()=>{if(u)try{const e=await wa.get("/notifications/unread-count");a(e.data.count||0)}catch(e){console.error("Failed to load unread count:",e),a(0)}}),[u]),m=(0,n.useCallback)((async e=>{if(e&&0!==e.length)try{await wa.post("/notifications/mark-read",{notificationIds:e}),a((t=>Math.max(0,t-e.length))),o((t=>t.map((t=>e.includes(t._id)?{...t,read:!0}:t))))}catch(t){console.error("Failed to mark as read:",t)}}),[]),g=(0,n.useCallback)((async()=>{try{return await wa.delete("/notifications"),o([]),a(0),!0}catch(e){return console.error("Failed to clear notifications:",e),!1}}),[]),v=(0,n.useCallback)((e=>{if("Notification"in window&&"granted"===Notification.permission){var t,r;const n=b(e),o={body:x(e),icon:(null===(t=e.sender)||void 0===t||null===(r=t.profile)||void 0===r?void 0:r.avatar)||"/logo192.png",badge:"/logo192.png"};window.lastNotification&&window.lastNotification.close(),window.lastNotification=new Notification(n,o),window.lastNotification.onclick=()=>{window.focus(),e.meme?window.location.href=`/memes/${e.meme._id}`:e.comment?window.location.href=`/comments/${e.comment._id}`:e.reply&&(window.location.href=`/replies/${e.reply._id}`)}}}),[]),y=(0,n.useCallback)((e=>{console.log("Nova notifica\xe7\xe3o recebida (antes do estado):",e),o((t=>{const r=[e,...t].slice(0,100);return console.log("Notifica\xe7\xf5es ap\xf3s atualiza\xe7\xe3o:",r),r})),a((e=>e+1)),"visible"!==document.visibilityState&&v(e)}),[v]);(0,n.useEffect)((()=>{if(!u)return o([]),a(0),void(c&&(c.disconnect(),d(null)));(async()=>{if(Capacitor.isNativePlatform())try{await(async()=>{if(!ol.Ii.isNativePlatform())return void("Notification"in window&&"denied"!==Notification.permission&&await Notification.requestPermission());if("granted"!==(await cl.requestPermissions()).display)throw new Error("Permiss\xe3o negada para notifica\xe7\xf5es");cl.addListener("localNotificationActionPerformed",(e=>{var t;console.log("Notifica\xe7\xe3o local clicada:",e),null!==(t=e.notification.extra)&&void 0!==t&&t.memeId&&(window.location.href=`/memes/${e.notification.extra.memeId}`)}))})()}catch(e){console.error("Notification initialization error:",e)}else"Notification"in window&&"denied"!==Notification.permission&&Notification.requestPermission().catch(console.error)})();const e=(()=>{const e=localStorage.getItem("token");if(!e)return null;const t=Xs(e);return t.on("connect",(()=>{console.log("WebSocket connected"),t.emit("authenticate",e)})),t.on("connect_error",(e=>{console.error("WebSocket connection error:",e.message),setTimeout((()=>{console.log("Attempting to reconnect WebSocket..."),t.connect()}),5e3)})),t.on("disconnect",(e=>{console.log("WebSocket disconnected:",e),"io client disconnect"!==e&&setTimeout((()=>{console.log("Reconnecting after disconnect..."),t.connect()}),3e3)})),t.on("reconnect_failed",(()=>{console.error("WebSocket reconnection failed")})),t.on("new-notification",y),t.on("notifications-read",(e=>{o((t=>t.map((t=>e.includes(t._id)?{...t,read:!0}:t))))})),t})();d(e);(async()=>{try{l(!0),await Promise.all([p(),h()])}catch(e){console.error("Error loading initial data:",e)}finally{l(!1)}})();const t=setInterval((()=>{e&&!e.connected&&(console.log("WebSocket not connected, attempting to reconnect..."),e.connect())}),3e4);return()=>{clearInterval(t),e&&(e.off("connect"),e.off("connect_error"),e.off("disconnect"),e.off("reconnect_failed"),e.off("new-notification"),e.off("notifications-read"),e.disconnect())}}),[u,y,p,h]);const b=e=>{var t,r,n,o,i,a;switch(e.type){case"like":return`${(null===(t=e.sender)||void 0===t?void 0:t.username)||"Algu\xe9m"} curtiu seu meme`;case"like_grouped":return`Seu meme tem ${(null===(r=e.metadata)||void 0===r?void 0:r.count)||"muitas"} curtidas`;case"comment":return`${(null===(n=e.sender)||void 0===n?void 0:n.username)||"Algu\xe9m"} comentou no seu meme`;case"comment_grouped":return`Seu meme tem ${(null===(o=e.metadata)||void 0===o?void 0:o.count)||"muitos"} coment\xe1rios`;case"reply":return`${(null===(i=e.sender)||void 0===i?void 0:i.username)||"Algu\xe9m"} respondeu seu coment\xe1rio`;case"mention":return`${(null===(a=e.sender)||void 0===a?void 0:a.username)||"Algu\xe9m"} te mencionou`;default:return"Nova notifica\xe7\xe3o"}},x=e=>{var t,r,n,o;switch(e.type){case"like":case"comment":return null!==(t=e.meme)&&void 0!==t&&t.caption?w(e.meme.caption,50):"Veja agora";case"like_grouped":case"comment_grouped":return null!==(r=e.meme)&&void 0!==r&&r.caption?w(e.meme.caption,50):"Veja todas as intera\xe7\xf5es";case"reply":return null!==(n=e.reply)&&void 0!==n&&n.text?w(e.reply.text,50):"Veja a resposta";case"mention":return null!==(o=e.comment)&&void 0!==o&&o.text?w(e.comment.text,50):"Veja a men\xe7\xe3o";default:return""}},w=(e,t)=>(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e;return(0,Gs.jsx)(dl.Provider,{value:{notifications:r,unreadCount:i,loading:s,markAsRead:m,clearAllNotifications:g,loadNotifications:p,loadUnreadCount:h},children:t})};var pl={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hl=n.createContext&&n.createContext(pl),ml=["attr","size","title"];function gl(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vl.apply(this,arguments)}function yl(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function bl(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?yl(Object(r),!0).forEach((function(t){xl(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):yl(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function xl(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function wl(e){return e&&e.map(((e,t)=>n.createElement(e.tag,bl({key:t},e.attr),wl(e.child))))}function _l(e){return t=>n.createElement(kl,vl({attr:bl({},e.attr)},t),wl(e.child))}function kl(e){var t=t=>{var r,{attr:o,size:i,title:a}=e,s=gl(e,ml),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",vl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:bl(bl({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==hl?n.createElement(hl.Consumer,null,(e=>t(e))):t(pl)}function Sl(e){return _l({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 240c0-9.3 4.1-17.5 10.5-23.4l-31-9.3c-8.5-2.5-13.3-11.5-10.7-19.9 2.5-8.5 11.4-13.2 19.9-10.7l80 24c8.5 2.5 13.3 11.5 10.7 19.9-2.1 6.9-8.4 11.4-15.3 11.4-.5 0-1.1-.2-1.7-.2.7 2.7 1.7 5.3 1.7 8.2 0 17.7-14.3 32-32 32S136 257.7 136 240zm168 154.2c-27.8-33.4-84.2-33.4-112.1 0-13.5 16.3-38.2-4.2-24.6-20.5 20-24 49.4-37.8 80.6-37.8s60.6 13.8 80.6 37.8c13.8 16.5-11.1 36.6-24.5 20.5zm76.6-186.9l-31 9.3c6.3 5.8 10.5 14.1 10.5 23.4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.9.9-5.6 1.7-8.2-.6.1-1.1.2-1.7.2-6.9 0-13.2-4.5-15.3-11.4-2.5-8.5 2.3-17.4 10.7-19.9l80-24c8.4-2.5 17.4 2.3 19.9 10.7 2.5 8.5-2.3 17.4-10.8 19.9z"},child:[]}]})(e)}function El(e){return _l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Cl(e){return _l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(e)}function jl(e){return _l({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(e)}function Tl(e){return _l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(e)}function Ol(e){return _l({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z"},child:[]}]})(e)}function Rl(e){return _l({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M0 256c0 137 111 248 248 248s248-111 248-248S385 8 248 8 0 119 0 256zm200-48c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm158.5 16.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.7 11.1-11.4 18.3-19.8 10.8l-9.7-8.5zM157.8 325.8C180.2 352.7 213 368 248 368s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.2 24.6 20.5C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11.2-36.7 24.6-20.4z"},child:[]}]})(e)}function Al(e){return _l({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"},child:[]}]})(e)}function Pl(e){return _l({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}const Ll=Zn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${e=>e.$fullPage&&"\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.8);\n    z-index: 1000;\n  "}
`,$l=Zn((function(e){return _l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(e)}))`
  animation: spin 1s linear infinite;
  font-size: 2rem;
  color: #ff4500;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,Nl=e=>{let{fullPage:t=!1}=e;return(0,Gs.jsx)(Ll,{$fullPage:t,children:(0,Gs.jsx)($l,{})})},zl=e=>{let{children:t}=e;const{user:r,loading:o,initialCheckDone:i}=tl(),a=G();return(0,n.useEffect)((()=>{ol.Ii.isNativePlatform()&&il.setBackgroundColor({color:"#121212"})}),[]),o||!i?(0,Gs.jsx)(Nl,{fullPage:!0}):r?ol.Ii.isNativePlatform()?(0,Gs.jsx)("div",{style:{paddingTop:"env(safe-area-inset-top)",paddingBottom:"env(safe-area-inset-bottom)",minHeight:"calc(100vh - 60px)"},children:t}):t:(0,Gs.jsx)(ve,{to:"/login",replace:!0,state:{from:a,message:"Por favor fa\xe7a login para acessar esta p\xe1gina",isMobile:ol.Ii.isNativePlatform()}})};function Il(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(e)}function Fl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(e)}function Dl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function Ml(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function Ul(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(e)}function Bl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function Wl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(e)}function Hl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(e)}function ql(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(e)}function Vl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function Kl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(e)}function Yl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"6"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12",y2:"22"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"6",y2:"12"},child:[]},{tag:"line",attr:{x1:"18",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"},child:[]}]})(e)}function Ql(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(e)}function Jl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function Xl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(e)}function Gl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(e)}function Zl(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(e)}function eu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(e)}function tu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"},child:[]}]})(e)}function ru(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(e)}function nu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}function ou(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(e)}function iu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(e)}function au(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}function su(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function lu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(e)}function uu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(e)}function cu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(e)}function du(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(e)}function fu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(e)}function pu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(e)}function hu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(e)}function mu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"},child:[]},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"},child:[]}]})(e)}function gu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function vu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function yu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function bu(e){return _l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(e)}const xu={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},wu={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},_u="mousemove",ku="mouseup";function Su(e,t){if(0===t)return e;const r=Math.PI/180*t;return[e[0]*Math.cos(r)+e[1]*Math.sin(r),e[1]*Math.cos(r)-e[0]*Math.sin(r)]}function Eu(e,t){const r=t=>{const r="touches"in t;r&&t.touches.length>1||e(((e,o)=>{o.trackMouse&&!r&&(document.addEventListener(_u,n),document.addEventListener(ku,i));const{clientX:a,clientY:s}=r?t.touches[0]:t,l=Su([a,s],o.rotationAngle);return o.onTouchStartOrOnMouseDown&&o.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),wu),{initial:l.slice(),xy:l,start:t.timeStamp||0})}))},n=t=>{e(((e,r)=>{const n="touches"in t;if(n&&t.touches.length>1)return e;if(t.timeStamp-e.start>r.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;const{clientX:o,clientY:i}=n?t.touches[0]:t,[a,s]=Su([o,i],r.rotationAngle),l=a-e.xy[0],u=s-e.xy[1],c=Math.abs(l),d=Math.abs(u),f=(t.timeStamp||0)-e.start,p=Math.sqrt(c*c+d*d)/(f||1),h=[l/(f||1),u/(f||1)],m=function(e,t,r,n){return e>t?r>0?"Right":"Left":n>0?"Down":"Up"}(c,d,l,u),g="number"===typeof r.delta?r.delta:r.delta[m.toLowerCase()]||xu.delta;if(c<g&&d<g&&!e.swiping)return e;const v={absX:c,absY:d,deltaX:l,deltaY:u,dir:m,event:t,first:e.first,initial:e.initial,velocity:p,vxvy:h};v.first&&r.onSwipeStart&&r.onSwipeStart(v),r.onSwiping&&r.onSwiping(v);let y=!1;return(r.onSwiping||r.onSwiped||r[`onSwiped${m}`])&&(y=!0),y&&r.preventScrollOnSwipe&&r.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:v,swiping:!0})}))},o=t=>{e(((e,r)=>{let n;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<r.swipeDuration){n=Object.assign(Object.assign({},e.eventData),{event:t}),r.onSwiped&&r.onSwiped(n);const o=r[`onSwiped${n.dir}`];o&&o(n)}}else r.onTap&&r.onTap({event:t});return r.onTouchEndOrOnMouseUp&&r.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),wu),{eventData:n})}))},i=e=>{document.removeEventListener(_u,n),document.removeEventListener(ku,i),o(e)},a=(e,t)=>{let i=()=>{};if(e&&e.addEventListener){const a=Object.assign(Object.assign({},xu.touchEventOptions),t.touchEventOptions),s=[["touchstart",r,a],["touchmove",n,Object.assign(Object.assign({},a),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",o,a]];s.forEach((t=>{let[r,n,o]=t;return e.addEventListener(r,n,o)})),i=()=>s.forEach((t=>{let[r,n]=t;return e.removeEventListener(r,n)}))}return i},s={ref:t=>{null!==t&&e(((e,r)=>{if(e.el===t)return e;const n={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),n.cleanUpTouch=void 0),r.trackTouch&&t&&(n.cleanUpTouch=a(t,r)),Object.assign(Object.assign(Object.assign({},e),{el:t}),n)}))}};return t.trackMouse&&(s.onMouseDown=r),[s,a]}function Cu(e){const{trackMouse:t}=e,r=n.useRef(Object.assign({},wu)),o=n.useRef(Object.assign({},xu)),i=n.useRef(Object.assign({},o.current));let a;for(a in i.current=Object.assign({},o.current),o.current=Object.assign(Object.assign({},xu),e),xu)void 0===o.current[a]&&(o.current[a]=xu[a]);const[s,l]=n.useMemo((()=>Eu((e=>r.current=e(r.current,o.current)),{trackMouse:t})),[t]);return r.current=function(e,t,r,n){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==r.preventScrollOnSwipe||t.touchEventOptions.passive!==r.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:n(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:n(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(r.current,o.current,i.current,l),s}const ju=to`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,Tu=to`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`,Ou=(Zn.div`
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
`,Zn.button`
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
`,Zn.div`
  position: fixed;
  top: ${ol.Ii.isNativePlatform()?"60px":"calc(100% + 10px)"};
  right: 10px;
  width: ${ol.Ii.isNativePlatform()?"calc(100% - 20px)":"380px"};
  max-height: ${ol.Ii.isNativePlatform()?"70vh":"500px"};
  overflow: hidden;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: ${e=>{let{$isOpen:t}=e;return t?"block":"none"}};
  z-index: 1001;
  animation: ${ju} 0.2s ease-out;
  border: 1px solid var(--border-light);
`,Zn.div`
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
`,Zn.div`
  display: flex;
  gap: 10px;
`,Zn.button`
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
`,Zn.div`
  max-height: calc(${ol.Ii.isNativePlatform()?"70vh":"400px"} - 60px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 2px;
  }
`,Zn.div`
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
`,Zn.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-light);
  flex-shrink: 0;
`,Zn.div`
  flex: 1;
  min-width: 0;
`,Zn.div`
  font-size: 15px;
  line-height: 1.4;
`,Zn.span`
  color: var(--primary);
  font-weight: 500;
`,Zn.div`
  font-style: italic;
  margin-top: 6px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border-left: 2px solid var(--border-light);
  color: var(--text-light);
  font-size: 14px;
`,Zn.div`
  font-size: 13px;
  color: var(--text-lighter);
  margin-top: 6px;
`,Zn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  
  svg {
    color: var(--primary);
    opacity: ${e=>{let{$unread:t}=e;return t?0:1}};
  }
`,Zn.div`
  padding: 32px 16px;
  text-align: center;
  color: var(--text-lighter);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Zn.div`
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
  animation: ${ju} 0.2s ease-out;
`,Zn.div`
  background: var(--card-bg);
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${Tu} 0.3s ease-out;
`,Zn.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
`,Zn.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`,Zn.button`
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
`,to`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,to`
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,Zn.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  padding-top: env(safe-area-inset-top);
  background: ${e=>{let{theme:t}=e;return"dark"===t?"#1A1A1B":"#FFFFFF"}};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 1000;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return"dark"===t?"#343536":"#EDEFF1"}};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${e=>{let{$visible:t}=e;return t?"translateY(0)":"translateY(-100%)"}};
  will-change: transform;
`),Ru=Zn.div`
  position: fixed;
  top: calc(56px + env(safe-area-inset-top));
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
  z-index: 999;
  opacity: ${e=>{let{$visible:t}=e;return t?1:0}};
  transition: opacity 0.25s ease;
`,Au=Zn.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
`,Pu=Zn((function(e){return _l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"},child:[]}]})(e)}))`
  font-size: 1.8rem;
  color: ${e=>{let{theme:t}=e;return"dark"===t?"#D7DADC":"#FF4500"}};
`,Lu=Zn.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return"dark"===t?"#D7DADC":"#1A1A1B"}};
  letter-spacing: -0.5px;
`,$u=Zn.div`
  position: fixed;
  top: 0;
  left: ${e=>{let{$isOpen:t}=e;return t?"0":"-100%"}};
  width: 280px;
  height: 100vh;
  padding-top: env(safe-area-inset-top);
  background: ${e=>{let{theme:t}=e;return"dark"===t?"#1A1A1B":"#FFFFFF"}};
  z-index: 1002;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${e=>{let{theme:t}=e;return"dark"===t?"#343536":"#EDEFF1"}};
`,Nu=Zn.div`
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
`,zu=Zn.div`
  padding: 24px 20px;
  background: ${e=>{let{theme:t}=e;return"dark"===t?"#1A1A1B":"#FFFFFF"}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return"dark"===t?"#343536":"#EDEFF1"}};
  display: flex;
  align-items: center;
  gap: 12px;
`,Iu=Zn.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${e=>{let{theme:t}=e;return"dark"===t?"#343536":"#EDEFF1"}};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.95);
  }
`,Fu=Zn.div`
  display: flex;
  flex-direction: column;
`,Du=Zn.span`
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return"dark"===t?"#D7DADC":"#1A1A1B"}};
`,Mu=Zn.span`
  font-size: 0.8rem;
  color: ${e=>{let{theme:t}=e;return"dark"===t?"#818384":"#787C7E"}};
`,Uu=Zn(nt)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  color: ${e=>{let{$active:t,theme:r}=e;return t?"#FF4500":"dark"===r?"#D7DADC":"#1A1A1B"}};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  position: relative;
  background: ${e=>{let{$active:t}=e;return t?"rgba(255, 69, 0, 0.1)":"transparent"}};

  &:hover {
    background: ${e=>{let{theme:t}=e;return"dark"===t?"#272729":"#F6F7F8"}};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${e=>{let{$active:t}=e;return t?"#FF4500":"inherit"}};
  }
`,Bu=Zn.div`
  margin-top: auto;
  padding: 20px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return"dark"===t?"#343536":"#EDEFF1"}};
`,Wu=Zn.button`
  background: none;
  border: none;
  padding: 8px;
  color: ${e=>{let{theme:t}=e;return"dark"===t?"#D7DADC":"#1A1A1B"}};
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: ${e=>{let{theme:t}=e;return"dark"===t?"#272729":"#F6F7F8"}};
  }
`,Hu=Zn(Wu)`
  background: ${e=>{let{theme:t}=e;return"dark"===t?"#272729":"#F6F7F8"}};
  border-radius: 20px;
  padding: 8px 12px;
  flex: 1;
  max-width: 200px;
  justify-content: flex-start;
  gap: 8px;
  margin: 0 8px;
`,qu=Zn.span`
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return"dark"===t?"#818384":"#787C7E"}};
`,Vu=e=>{var t,r;let{navbarVisible:o}=e;const{theme:i,toggleTheme:a}=ll(),{user:s,logout:l}=tl(),u=te(),c=G(),[d,f]=(0,n.useState)(!1),[p,h]=(0,n.useState)(c.pathname);(0,n.useEffect)((()=>{h(c.pathname),f(!1)}),[c]);const m=Cu({onSwipedLeft:()=>f(!1),trackMouse:!0}),g=e=>{if(!e)return"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`};return(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsxs)(Ou,{$visible:o,theme:i,children:[(0,Gs.jsx)(Wu,{onClick:()=>f(!0),"aria-label":"Open menu",theme:i,children:(0,Gs.jsx)(Jl,{size:24})}),(0,Gs.jsxs)(Hu,{onClick:()=>u("/search"),theme:i,children:[(0,Gs.jsx)(au,{size:18}),(0,Gs.jsx)(qu,{theme:i,children:"Search"})]}),s?(0,Gs.jsx)(Wu,{onClick:()=>u(`/users/${s._id}`),"aria-label":"Profile",theme:i,children:(0,Gs.jsx)(Iu,{src:null!==(t=s.profile)&&void 0!==t&&t.avatar?g(s.profile.avatar):"https://i.pravatar.cc/150?img=3",alt:s.username,onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"},theme:i})}):(0,Gs.jsx)(Wu,{onClick:()=>u("/login"),"aria-label":"Login",theme:i,children:(0,Gs.jsx)(gu,{size:24})})]}),(0,Gs.jsx)(Ru,{$visible:o}),(0,Gs.jsx)(Nu,{$isOpen:d,onClick:()=>f(!1),...m}),(0,Gs.jsxs)($u,{$isOpen:d,...m,theme:i,children:[(0,Gs.jsx)(zu,{theme:i,children:s?(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(Iu,{src:null!==(r=s.profile)&&void 0!==r&&r.avatar?g(s.profile.avatar):"https://i.pravatar.cc/150?img=3",alt:s.username,onClick:()=>{f(!1),u(`/users/${s._id}`)},onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"},theme:i}),(0,Gs.jsxs)(Fu,{children:[(0,Gs.jsxs)(Du,{theme:i,children:["u/",s.username]}),(0,Gs.jsx)(Mu,{theme:i,children:"1 karma"})]})]}):(0,Gs.jsxs)(Au,{children:[(0,Gs.jsx)(Pu,{theme:i}),(0,Gs.jsx)(Lu,{theme:i,children:"iFunny"})]})}),(0,Gs.jsx)("div",{style:{padding:"16px 0",flex:1},children:s?(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsxs)(Uu,{to:"/",$active:"/"===p,theme:i,children:[(0,Gs.jsx)(Vl,{}),"Home"]}),(0,Gs.jsxs)(Uu,{to:"/trending",$active:"/trending"===p,theme:i,children:[(0,Gs.jsx)(fu,{}),"Popular"]}),(0,Gs.jsxs)(Uu,{to:"/upload",$active:"/upload"===p,theme:i,children:[(0,Gs.jsx)(nu,{}),"Create Post"]}),(0,Gs.jsxs)(Uu,{to:`/users/${s._id}`,$active:p===`/users/${s._id}`,theme:i,children:[(0,Gs.jsx)(gu,{}),"Profile"]})]}):(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsxs)(Uu,{to:"/login",$active:"/login"===p,theme:i,children:[(0,Gs.jsx)(gu,{}),"Login"]}),(0,Gs.jsxs)(Uu,{to:"/register",$active:"/register"===p,theme:i,children:[(0,Gs.jsx)(gu,{}),"Register"]})]})}),(0,Gs.jsxs)(Bu,{theme:i,children:[(0,Gs.jsxs)(Uu,{as:"button",onClick:a,$active:!1,theme:i,children:["light"===i?(0,Gs.jsx)(Zl,{}):(0,Gs.jsx)(cu,{}),"light"===i?"Dark Mode":"Light Mode"]}),s&&(0,Gs.jsxs)(Uu,{as:"button",onClick:async()=>{try{await l(),u("/")}catch(e){console.error("Logout error:",e)}},$active:!1,theme:i,children:[(0,Gs.jsx)(Ql,{}),"Logout"]})]})]})]})};var Ku,Yu;!function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(Ku||(Ku={})),function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"}(Yu||(Yu={}));const Qu=(0,ol.F3)("Keyboard"),Ju=((0,ol.F3)("App",{web:()=>r.e(551).then(r.bind(r,551)).then((e=>new e.AppWeb))}),e=>{if(!e)return console.warn("URL is empty or undefined"),"";if(e.startsWith("http://")||e.startsWith("https://")||e.startsWith("blob:"))return e.replace(/^http:\/\//i,"https://");const t=e.startsWith("/")?e.substring(1):e;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}/${t}`}),Xu=to`
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(5deg); }
  50% { transform: scale(1.3) rotate(0deg); }
  75% { transform: scale(1.2) rotate(-5deg); }
`,Gu=to`
  0%, 100% { transform: scale(1) rotate(0deg); }
  20% { transform: scale(1.2) rotate(-10deg); }
  40% { transform: scale(1.3) rotate(10deg); }
  60% { transform: scale(1.2) rotate(-10deg); }
  80% { transform: scale(1.1) rotate(5deg); }
`,Zu=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,ec=Zn.div`
  position: relative;
  padding: 16px;
  background: var(--card-bg);
  height: 100%;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 8px;
    padding-bottom: ${e=>e.$keyboardActive?"300px":"60px"};
  }
`,tc=(Zn.button`
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
`,Zn.div`
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
`),rc=Zn.div`
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
      animation: ${Zu} 1.5s infinite;
    }
  `}
`,nc=Zn.img`
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
`,oc=Zn.div`
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
`,ic=(Zn.div`
  display: flex;
  flex-direction: column; /* Muda para coluna */
  gap: 2px; /* Espaço entre linhas */
  margin-bottom: 6px;
`,Zn.div`
  font-weight: 700;
  font-size: 1.5 rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
`),ac=Zn.span`
  font-size: 0.65rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2px 6px;
  border-radius: 12px;
  font-weight: 500;
`,sc=Zn.p`
  margin: 6px 0 10px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text);
  white-space: pre-wrap;
  word-break: break-word;
  padding: 0 4px;
  ${e=>e.$isDeleted&&"font-style: italic; color: var(--text-muted);"}
`,lc=Zn.small`
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 400;
`,uc=Zn.form`
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

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    background: var(--card-bg);
    padding: 0.5rem;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
  }
`,cc=Zn.input`
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
`,dc=Zn.button`
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
`,fc=Zn.form`
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
`,pc=Zn.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  justify-content: flex-start;
`,hc=(Zn.div`
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
`,Zn.div`
  position: absolute;
  left: -12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary);
  border-radius: 2px;
`),mc=Zn.button`
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
      animation: ${Xu} 0.6s;
    `}
  `}

  ${e=>"dislike"===e.$type&&Jn`
    color: ${e.$active?"var(--dislike-color)":"var(--text-muted)"};
    &:hover {
      background: rgba(var(--dislike-rgb), 0.1);
    }
    ${e.$active&&Jn`
      animation: ${Gu} 0.6s;
    `}
  `}
`,gc=Zn.span`
  font-size: 0.8rem;
  color: inherit;
  margin-left: 4px;
  font-weight: 500;
`,vc=Zn.button`
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
`,yc=Zn.div`
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
`,bc=Zn.button`
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
`,xc=Zn.div`
  margin-top: 8px;
`,wc=Zn.textarea`
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
`,_c=Zn.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,kc=Zn.button`
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
`,Sc=Zn.button`
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
`,Ec=Zn.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`,Cc=Zn.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: 0.95rem;
`,jc=Zn.div`
  text-align: center;
  padding: 1rem;
  color: var(--error);
  font-size: 0.9rem;
  background: var(--error-bg);
  border-radius: var(--radius-sm);
  margin: 0.5rem 0;
`,Tc=Zn.span`
  font-style: italic;
  color: var(--text-muted);
`,Oc=Zn.div`
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
`,Rc=Zn.span`
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
`,Ac=Zn.div`
  margin-top: 12px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  overflow: hidden;
  max-width: 100%;
  position: relative;
  background: var(--media-bg);
`,Pc=Zn.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  display: block;
  background: var(--media-bg);
`,Lc=Zn.p`
  padding: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
  background: var(--media-caption-bg);
  border-top: 1px solid var(--border-light);
`,$c=Zn.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
`,Nc=Zn.button`
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
`,zc=Zn.div`
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
`,Ic=Zn.div`
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
`,Fc=Zn.div`
  padding: ${e=>e.$isMobile?"1rem":"1.25rem"};
  border-bottom: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: var(--card-bg);
  z-index: 10;
`,Dc=Zn.h3`
  font-size: ${e=>e.$isMobile?"1.1rem":"1.25rem"};
  margin: 0;
  color: var(--text-primary);
  font-weight: 600;
`,Mc=Zn.button`
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
`,Uc=Zn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${e=>e.$isMobile?"120px":"150px"}, 1fr));
  gap: ${e=>e.$isMobile?"8px":"12px"};
  padding: ${e=>e.$isMobile?"1rem":"1.25rem"};
  overflow-y: auto;
`,Bc=Zn.div`
  position: relative;
  aspect-ratio: 1;
`,Wc=Zn.img`
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
`,Hc=Zn.div`
  padding: ${e=>e.$isMobile?"1rem":"1.25rem"};
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.$isMobile?"8px":"12px"};
  position: sticky;
  bottom: 0;
  background: var(--card-bg);
`,qc=Zn.video`
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
`,Vc=Zn.div`
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
`,Kc=Zn.button`
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
`,Yc=e=>{let{file:t,meme:r,onRemove:o}=e;const i=(0,n.useMemo)((()=>window.innerWidth<=768),[]),a={position:"absolute",top:i?"8px":"5px",right:i?"8px":"5px",background:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"50%",width:i?"32px":"24px",height:i?"32px":"24px",cursor:"pointer",fontSize:i?"18px":"16px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,transition:"transform 0.2s",":hover":{transform:"scale(1.1)"},":active":{transform:"scale(0.95)"}},s=Zn(Ac)`
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
  `,l=Zn(Lc)`
    padding: ${i?"10px":"8px"};
    font-size: ${i?"0.9rem":"0.8rem"};
    background: ${i?"rgba(0,0,0,0.7)":"#f9f9f9"};
    color: ${i?"white":"var(--text-light)"};
  `;if(r){var u,c;const e=(null===(u=r.mediaUrl)||void 0===u?void 0:u.endsWith(".mp4"))||(null===(c=r.mediaUrl)||void 0===c?void 0:c.includes("video/"));return(0,Gs.jsxs)(s,{children:[e?(0,Gs.jsxs)("video",{controls:!0,playsInline:!0,style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},crossOrigin:"anonymous",children:[(0,Gs.jsx)("source",{src:Ju(r.mediaUrl),type:"video/mp4"}),"Seu navegador n\xe3o suporta v\xeddeos HTML5."]}):(0,Gs.jsx)(Pc,{src:Ju(r.mediaUrl),alt:r.caption||"Meme compartilhado",crossOrigin:"anonymous",style:{maxHeight:i?"50vh":"60vh"},onError:e=>{e.target.style.display="none"}}),r.caption&&(0,Gs.jsx)(l,{children:r.caption}),(0,Gs.jsx)("button",{onClick:o,style:a,"aria-label":"Remover m\xeddia",children:"\xd7"})]})}if(t){const e=t.type.startsWith("video/"),r=URL.createObjectURL(t);return(0,Gs.jsxs)(s,{children:[e?(0,Gs.jsxs)("video",{controls:!0,playsInline:!0,style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},children:[(0,Gs.jsx)("source",{src:r,type:t.type}),"Seu navegador n\xe3o suporta v\xeddeos HTML5."]}):(0,Gs.jsx)("img",{src:r,alt:"Preview",style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},onError:e=>{e.target.style.display="none"}}),(0,Gs.jsx)("button",{onClick:()=>{o(),URL.revokeObjectURL(r)},style:a,"aria-label":"Remover m\xeddia",children:"\xd7"})]})}return null},Qc=(0,n.memo)((e=>{var t,r,o,i,a,s;let{comment:l,depth:u=0,parentCommentId:c=null,currentUser:d,onEdit:f,onDelete:p,onReply:h,onReaction:m,editingId:g,editText:v,onEditChange:y,onSaveEdit:b,replyingTo:x,replyText:w,onReplyChange:_,onReplySubmit:k,showOptions:S,onToggleOptions:E,isPopular:C,replyTexts:j,onReplyMediaChange:T,onReplyMemeChange:O,replyMedia:R,replySelectedMeme:A,onOpenMemeSelector:P,userMemes:L,loadMoreReplies:$,loadingReplies:N,expandedReplies:z,setExpandedReplies:I}=e;console.log("--- Comment Debug ---"),console.log("Comment ID:",l._id),console.log("Has sharedMeme:",!!l.sharedMeme),l.sharedMeme&&console.log("sharedMeme details:",{mediaUrl:l.sharedMeme.mediaUrl,mediaType:l.sharedMeme.mediaType,caption:l.sharedMeme.caption,builtUrl:Ju(l.sharedMeme.mediaUrl)});const F=te(),D=g===l._id,M=x===l._id,U=u>0,B=l.isDeleted,W=l.user||{_id:"deleted",username:"[Removido]",profile:{avatar:"https://i.pravatar.cc/150?img=3"}},H=!B&&d&&(W._id===d._id||d.isAdmin),q=(0,n.useCallback)((e=>{const t=new Date(e),r=new Date,n=Math.floor((r-t)/1e3);return n<60?"Agora":n<3600?`${Math.floor(n/60)}m`:n<86400?`${Math.floor(n/3600)}h`:`${Math.floor(n/86400)}d`}),[]),V=l.repliesCount>((null===(t=l.replies)||void 0===t?void 0:t.length)||0),K=(0,n.useCallback)((e=>{I((t=>{const r={...t},n=!t[e];return r[e]=n,l.replies&&l.replies.forEach((e=>{r[e._id]=n})),r}))}),[l.replies]);return(0,Gs.jsxs)(n.Fragment,{children:[(0,Gs.jsxs)(rc,{$depth:u,$isPopular:C,"data-testid":`comment-${l._id}`,children:[U&&(0,Gs.jsx)(hc,{}),(0,Gs.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",width:"100%"},children:[(0,Gs.jsx)(nc,{src:null!==(r=W.profile)&&void 0!==r&&r.avatar?W.profile.avatar.startsWith("https")?W.profile.avatar:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${W.profile.avatar}`:"https://i.pravatar.cc/150?img=3",alt:W.username,$isReply:U,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"},onClick:()=>F(`/users/${W._id}`),style:{cursor:"pointer",flexShrink:0,marginRight:"12px"}}),(0,Gs.jsxs)(oc,{$isReply:U,style:{flex:1},children:[S===l._id&&(0,Gs.jsxs)(yc,{style:{right:"0",left:"auto",top:"40px"},children:[(0,Gs.jsxs)(bc,{onClick:()=>f(l),children:[(0,Gs.jsx)(Hl,{size:14})," Editar"]}),(0,Gs.jsxs)(bc,{onClick:()=>p(l._id,U,c),children:[(0,Gs.jsx)(du,{size:14})," Excluir"]}),(0,Gs.jsxs)(bc,{onClick:()=>E(null),children:[(0,Gs.jsx)(yu,{size:14})," Cancelar"]})]}),D?(0,Gs.jsxs)(xc,{children:[(0,Gs.jsx)(wc,{value:v,onChange:e=>y(e.target.value),autoFocus:!0,"aria-label":"Editar coment\xe1rio"}),(0,Gs.jsxs)(_c,{children:[(0,Gs.jsx)(Sc,{onClick:()=>f(null),children:"Cancelar"}),(0,Gs.jsx)(kc,{onClick:()=>b(l._id,U,c),children:"Salvar"})]})]}):(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"4px",position:"relative"},children:[(0,Gs.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,Gs.jsx)(ic,{onClick:()=>F(`/users/${W._id}`),style:{cursor:"pointer",fontSize:"15px",fontWeight:"700",color:"var(--text-primary)",marginRight:"8px"},children:W.username}),(0,Gs.jsxs)(lc,{style:{position:"absolute",right:H?"30px":"0",top:"2px",fontSize:"11px",color:"var(--text-muted)",opacity:"0.7"},children:[q(l.createdAt),l.isEdited&&" \xb7 editado"]})]}),H&&(0,Gs.jsx)(vc,{onClick:()=>E(l._id),"aria-label":"Mais op\xe7\xf5es",style:{marginLeft:"auto"},children:(0,Gs.jsx)(eu,{size:16})})]}),(0,Gs.jsxs)("div",{style:{display:"flex",gap:"6px",marginBottom:"8px"},children:[W.isVerified&&(0,Gs.jsx)(ac,{style:{fontSize:"10px",padding:"2px 6px"},children:"Verificado"}),C&&(0,Gs.jsx)(Rc,{style:{fontSize:"10px",padding:"2px 6px"},children:"\ud83d\udd25 Popular"})]}),(0,Gs.jsx)(sc,{$isDeleted:B,style:{fontSize:"14px",lineHeight:"1.5",marginBottom:"8px"},children:B?(0,Gs.jsx)(Tc,{children:l.text}):l.text}),l.sharedMeme&&l.sharedMeme.mediaUrl&&(console.log("Rendering shared media for comment:",l._id,{url:l.sharedMeme.mediaUrl,builtUrl:Ju(l.sharedMeme.mediaUrl),type:l.sharedMeme.mediaType||"unknown"}),(0,Gs.jsxs)(Ac,{style:{marginTop:"8px",maxWidth:"100%"},children:["video"===l.sharedMeme.mediaType||l.sharedMeme.mediaUrl.endsWith(".mp4")?(0,Gs.jsx)("video",{controls:!0,style:{width:"100%",display:"block",maxHeight:"200px"},crossOrigin:"anonymous",children:(0,Gs.jsx)("source",{src:Ju(l.sharedMeme.mediaUrl),type:"video/mp4"})}):(0,Gs.jsx)(Pc,{src:Ju(l.sharedMeme.mediaUrl),alt:l.sharedMeme.caption||"Meme compartilhado",crossOrigin:"anonymous",style:{maxHeight:"200px"},onError:e=>{console.error("FAILED TO LOAD MEDIA:",{commentId:l._id,src:e.target.src,builtUrl:Ju(l.sharedMeme.mediaUrl),error:e}),e.target.style.display="none"}}),l.sharedMeme.caption&&(0,Gs.jsx)(Lc,{style:{fontSize:"12px",padding:"8px"},children:l.sharedMeme.caption})]}))]}),!B&&(0,Gs.jsx)(pc,{style:{marginTop:"12px",paddingTop:"8px",borderTop:"1px solid #eee"},children:(0,Gs.jsxs)("div",{style:{display:"flex",gap:"16px"},children:[(0,Gs.jsxs)(mc,{onClick:()=>m(l._id,"like",U,c),$active:"like"===l.userReaction,$type:"like","aria-label":"Curtir","data-testid":"like-button",style:{padding:"4px 8px",backgroundColor:"like"===l.userReaction?"rgba(0, 200, 83, 0.1)":"transparent"},children:[(0,Gs.jsx)(Al,{size:14,color:"like"===l.userReaction?"#00C853":"#757575"}),(0,Gs.jsx)(gc,{style:{fontSize:"12px",marginLeft:"4px",color:"like"===l.userReaction?"#00C853":"#757575"},children:null!==(o=l.likesCount)&&void 0!==o?o:(null===(i=l.likes)||void 0===i?void 0:i.length)||0})]}),(0,Gs.jsxs)(mc,{onClick:()=>m(l._id,"dislike",U,c),$active:"dislike"===l.userReaction,$type:"dislike","aria-label":"N\xe3o curtir","data-testid":"dislike-button",style:{padding:"4px 8px",backgroundColor:"dislike"===l.userReaction?"rgba(255, 82, 82, 0.1)":"transparent"},children:[(0,Gs.jsx)(Sl,{size:14,color:"dislike"===l.userReaction?"#FF5252":"#757575"}),(0,Gs.jsx)(gc,{style:{fontSize:"12px",marginLeft:"4px",color:"dislike"===l.userReaction?"#FF5252":"#757575"},children:null!==(a=l.dislikesCount)&&void 0!==a?a:(null===(s=l.dislikes)||void 0===s?void 0:s.length)||0})]}),d&&u<10&&(0,Gs.jsxs)(mc,{onClick:()=>h(l._id,c),"aria-label":"Responder","data-testid":"reply-button",style:{padding:"4px 8px",color:"#666"},children:[(0,Gs.jsx)(Xl,{size:12}),l.repliesCount>0&&(0,Gs.jsx)(gc,{style:{fontSize:"12px",marginLeft:"4px"},children:l.repliesCount})]})]})})]})]})]}),M&&u<10&&(0,Gs.jsx)(fc,{onSubmit:e=>{e.preventDefault(),k(l._id)},style:{marginTop:"12px",marginLeft:"44px",padding:"8px",backgroundColor:"#f5f5f5",borderRadius:"12px"},children:(0,Gs.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,Gs.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[(0,Gs.jsx)(cc,{type:"text",id:`reply-input-${l._id}`,name:`replyTo${l._id}`,value:j[l._id]||"",onChange:e=>_(l._id,e.target.value),placeholder:"Escreva uma resposta...","aria-label":"Responder coment\xe1rio",style:{flex:1,padding:"8px 12px",fontSize:"14px"}}),(0,Gs.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[(0,Gs.jsx)(Nc,{type:"button",onClick:()=>document.getElementById(`reply-file-${l._id}`).click(),"aria-label":"Anexar m\xeddia",style:{width:"32px",height:"32px"},children:(0,Gs.jsx)(tu,{size:16})}),(0,Gs.jsx)("input",{type:"file",id:`reply-file-${l._id}`,style:{display:"none"},onChange:e=>{const t=e.target.files[0];t&&(T(t,l._id),O(null,l._id))},accept:"image/*, video/*"}),(0,Gs.jsx)(Nc,{type:"button",onClick:()=>P(l._id),"aria-label":"Compartilhar meme",style:{width:"32px",height:"32px"},children:(0,Gs.jsx)(Kl,{size:16})}),(0,Gs.jsx)(dc,{type:"submit","aria-label":"Enviar resposta",style:{width:"32px",height:"32px"},children:(0,Gs.jsx)(su,{size:16})})]})]}),(R[l._id]||A[l._id])&&(0,Gs.jsx)(Yc,{file:R[l._id],meme:A[l._id]?L.find((e=>e._id===A[l._id])):null,onRemove:()=>{T(null,l._id),O(null,l._id)}})]})}),l.replies&&Array.isArray(l.replies)&&l.replies.length>0&&(0,Gs.jsxs)("div",{style:{marginLeft:u>0?"1.25rem":"0",marginTop:"8px"},children:[(z[l._id]?l.replies:[l.replies[0]]).map((e=>(0,Gs.jsx)(Qc,{comment:e,depth:u+1,parentCommentId:l._id,currentUser:d,onEdit:f,onDelete:p,onReply:h,onReaction:m,editingId:g,editText:v,onEditChange:y,onSaveEdit:b,replyingTo:x,replyTexts:j,onReplyChange:_,onReplySubmit:k,showOptions:S,onToggleOptions:E,isPopular:!1,onReplyMediaChange:T,onReplyMemeChange:O,replyMedia:R,replySelectedMeme:A,onOpenMemeSelector:P,userMemes:L,loadMoreReplies:$,loadingReplies:N,expandedReplies:z,setExpandedReplies:I},e._id))),l.replies.length>1&&(0,Gs.jsx)("div",{style:{textAlign:"left",marginTop:"8px",paddingLeft:u>0?"1rem":"0"},children:(0,Gs.jsx)("button",{onClick:()=>K(l._id),disabled:N[l._id],style:{background:"rgba(var(--primary-rgb), 0.08)",border:"1px solid rgba(var(--primary-rgb), 0.2)",color:"var(--primary)",cursor:"pointer",padding:"8px 16px",fontSize:"0.8rem",borderRadius:"20px",display:"inline-flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease",fontWeight:"500",":hover":{background:"rgba(var(--primary-rgb), 0.15)"},":disabled":{opacity:"0.7",cursor:"not-allowed"}},children:N[l._id]?(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(Yl,{size:14,style:{animation:"spin 1s linear infinite"}}),"Carregando..."]}):z[l._id]?(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(Wl,{size:14}),"Ocultar todas as respostas"]}):(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(Bl,{size:14}),"Mostrar todas as respostas (",l.replies.length-1,")"]})})}),V&&!z[l._id]&&(0,Gs.jsx)("div",{style:{textAlign:"left",marginTop:"8px",paddingLeft:u>0?"1rem":"0"},children:(0,Gs.jsx)("button",{onClick:()=>$(l._id),disabled:N[l._id],style:{background:"rgba(var(--primary-rgb), 0.08)",border:"1px solid rgba(var(--primary-rgb), 0.2)",color:"var(--primary)",cursor:"pointer",padding:"8px 16px",fontSize:"0.8rem",borderRadius:"20px",display:"inline-flex",alignItems:"center",gap:"6px",transition:"all 0.2s ease",fontWeight:"500",":hover":{background:"rgba(var(--primary-rgb), 0.15)"},":disabled":{opacity:"0.7",cursor:"not-allowed"}},children:N[l._id]?(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(Yl,{size:14,style:{animation:"spin 1s linear infinite"}}),"Carregando..."]}):(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(ru,{size:14}),"Carregar mais respostas (",l.repliesCount-l.replies.length,")"]})})})]})]})})),Jc=e=>{let{memes:t,selectedMeme:r,onSelect:o,onClose:i,isForReply:a=!1}=e;const s=(0,n.useMemo)((()=>window.innerWidth<=768),[]);return(0,Gs.jsx)(zc,{children:(0,Gs.jsxs)(Ic,{$isMobile:s,children:[(0,Gs.jsxs)(Fc,{$isMobile:s,children:[(0,Gs.jsx)(Dc,{$isMobile:s,children:"Selecione um meme para compartilhar"}),(0,Gs.jsx)(Mc,{onClick:i,"aria-label":"Fechar",$isMobile:s,children:(0,Gs.jsx)(yu,{size:s?20:24})})]}),(0,Gs.jsx)(Uc,{$isMobile:s,children:t.map((e=>{var t;const n="video"===e.mediaType||(null===(t=e.mediaUrl)||void 0===t?void 0:t.endsWith(".mp4"));return(0,Gs.jsxs)(Bc,{$isMobile:s,children:[n?(0,Gs.jsx)(qc,{$isMobile:s,$selected:r===e._id,onClick:()=>o(e._id,a),crossOrigin:"anonymous",children:(0,Gs.jsx)("source",{src:Ju(e.mediaUrl),type:"video/mp4"})}):(0,Gs.jsx)(Wc,{src:Ju(e.mediaUrl),onClick:()=>o(e._id,a),$selected:r===e._id,$isMobile:s,crossOrigin:"anonymous",alt:e.caption||"Meme"}),e.caption&&(0,Gs.jsx)(Vc,{$isMobile:s,children:e.caption})]},e._id)}))}),(0,Gs.jsxs)(Hc,{$isMobile:s,children:[(0,Gs.jsx)(Kc,{onClick:i,$isMobile:s,children:"Cancelar"}),(0,Gs.jsx)(Kc,{$primary:!0,onClick:()=>{o(r,a),i()},disabled:!r,$isMobile:s,children:a?"Compartilhar na Resposta":"Compartilhar"})]})]})})},Xc=e=>{let{memeId:t,onCommentSubmit:r,onCommentCountChange:o,setCommentOpen:i}=e;const{user:a}=tl(),[s,l]=(0,n.useState)([]),[u,c]=(0,n.useState)(!0),[d,f]=(0,n.useState)(null),[p,h]=(0,n.useState)(""),[m,g]=(0,n.useState)(null),[v,y]=(0,n.useState)(""),[b,x]=(0,n.useState)(null),[w,_]=(0,n.useState)(null),[k,S]=(0,n.useState)(!1),[E,C]=(0,n.useState)([]),[j,T]=(0,n.useState)(null),[O,R]=(0,n.useState)(null),[A,P]=(0,n.useState)(null),[L,$]=(0,n.useState)({}),[N,z]=(0,n.useState)({}),[I,F]=(0,n.useState)({}),[D,M]=(0,n.useState)(null),[U,B]=(0,n.useState)({}),[W,H]=(0,n.useState)({}),[q,V]=(0,n.useState)({}),[K,Y]=(0,n.useState)(0),Q=(0,n.useRef)(null),[J,X]=(0,n.useState)({}),G=(0,n.useRef)(null),Z=(0,n.useCallback)(((e,t)=>{for(const r of e){if(r._id===t)return r;if(r.replies){const e=Z(r.replies,t);if(e)return e}}return null}),[]),[ee,te]=(0,n.useState)(!1),re=(((e,t)=>{const r=(0,n.useRef)(0),o=(0,n.useRef)(!1),i=(0,n.useRef)();(0,n.useCallback)((function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];i.current=a;const l=Date.now(),u=l-r.current;o.current||(u>=t?(r.current=l,e(...a)):(o.current=!0,setTimeout((()=>{r.current=Date.now(),e(...i.current),o.current=!1}),t-u)))}),[e,t])})((()=>{setIsScrolling(!0),clearTimeout(scrollTimeout.current),scrollTimeout.current=setTimeout((()=>{setIsScrolling(!1)}),100)}),100),async e=>{if(!U[e]){V((t=>({...t,[e]:!0})));try{var r,n;const o=(null===(n=(await wa.get(`/memes/${t}/comments/${e}/replies`,{params:{page:((null===(r=W[e])||void 0===r?void 0:r.page)||0)+1,limit:5}})).data)||void 0===n?void 0:n.data)||[];l((t=>{const r=t=>t.map((t=>t._id===e?{...t,replies:[...t.replies||[],...o]}:t.replies?{...t,replies:r(t.replies)}:t));return r(t)}))}catch(d){console.error("Erro ao carregar respostas:",d)}finally{V((t=>({...t,[e]:!1})))}}}),ne=(0,n.useCallback)((e=>[...e].sort(((e,t)=>{var r,n,o,i;const a=((null===(r=e.likes)||void 0===r?void 0:r.length)||0)-((null===(n=e.dislikes)||void 0===n?void 0:n.length)||0);return((null===(o=t.likes)||void 0===o?void 0:o.length)||0)-((null===(i=t.dislikes)||void 0===i?void 0:i.length)||0)-a}))),[]),oe=(0,n.useCallback)((e=>{var t,r;if(!Array.isArray(e)||e.length<10)return e||[];const n=[...e].sort(((e,t)=>{var r,n,o,i;const a=(e.likesCount||(null===(r=e.likes)||void 0===r?void 0:r.length)||0)-(e.dislikesCount||(null===(n=e.dislikes)||void 0===n?void 0:n.length)||0);return(t.likesCount||(null===(o=t.likes)||void 0===o?void 0:o.length)||0)-(t.dislikesCount||(null===(i=t.dislikes)||void 0===i?void 0:i.length)||0)-a})),o=n[0];return(o.likesCount||(null===(t=o.likes)||void 0===t?void 0:t.length)||0)-(o.dislikesCount||(null===(r=o.dislikes)||void 0===r?void 0:r.length)||0)<5?e:n.map(((e,t)=>({...e,isPopular:0===t})))}),[ne]),ie=(0,n.useCallback)((async()=>{if(a)try{const e=await wa.get(`/users/${a._id}/memes`);C(e.data||[])}catch(d){console.error("Erro ao buscar memes do usu\xe1rio:",d)}}),[a]),ae=(0,n.useCallback)((async()=>{try{c(!0),f(null);const e=await wa.get(`/memes/${t}/comments`);console.log("API Response:",e);const r=e=>{if(Array.isArray(e))return e;if(Array.isArray(null===e||void 0===e?void 0:e.data))return e.data;if(Array.isArray(null===e||void 0===e?void 0:e.comments))return e.comments;throw new Error("Formato de dados inesperado da API")},n=r(e.data);console.log("Comments data:",n);const o=n.map((e=>e.sharedMeme&&"string"===typeof e.sharedMeme?{...e,sharedMeme:{_id:e.sharedMeme,mediaUrl:"",caption:""}}:e));console.log("First comment with sharedMeme:",o.find((e=>e.sharedMeme))),l(o)}catch(Ug){0,console.error("Erro ao buscar coment\xe1rios:",Ug),f(Ug.message||"Falha ao carregar coment\xe1rios"),l([])}finally{c(!1)}}),[t]);(0,n.useEffect)((()=>{console.log("Loading state:",u),console.log("Comments:",s)}),[u,s]),(0,n.useEffect)((()=>{let e=!0;return(async()=>{e&&await ae()})(),()=>{e=!1}}),[ae]);const se=(0,n.useCallback)((e=>{const t=e.target.files[0];t&&(R(t),T(null))}),[]),le=(0,n.useCallback)(((e,t)=>{z((r=>({...r||{},[t]:e}))),F((e=>({...e||{},[t]:null})))}),[]),ue=(0,n.useCallback)(((e,t)=>{F((r=>({...r||{},[t]:e}))),z((e=>({...e||{},[t]:null})))}),[]),ce=(0,n.useCallback)((e=>{M(e),S(!0),ie()}),[ie]),de=(0,n.useCallback)((function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&D?F((t=>({...t,[D]:e}))):(T(e),R(null))}),[D]),fe=(0,n.useCallback)((async e=>{e.preventDefault();const r=new FormData;r.append("text",p||""),O&&r.append("media",O),j&&r.append("sharedMeme",j);try{f(null);const e=await wa.post(`/memes/${t}/comments`,r,{headers:{"Content-Type":"multipart/form-data"}}),n=e.data.length;o&&o(n),l((t=>[e.data,...t])),h(""),R(null),T(null)}catch(d){var n,i;console.error("Erro detalhado ao enviar coment\xe1rio:",{error:d,response:d.response,config:d.config}),f((null===(n=d.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.message)||"Erro ao enviar coment\xe1rio")}}),[p,O,j,t,o]),pe=(0,n.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;P((t=>t===e?null:e)),_(t),$((t=>({...t,[e]:t[e]||""}))),i((t=>t===e?null:e))}),[i]),he=(0,n.useCallback)(((e,t)=>{$((r=>({...r,[e]:t})))}),[]),me=(0,n.useCallback)((async e=>{const r=L[e]||"",n=I[e];if(r.trim()||n){try{const i=new FormData;i.append("text",r),i.append("parentId",e),n&&i.append("sharedMeme",n);await wa.post(`/memes/${t}/comments`,i,{headers:{"Content-Type":"multipart/form-data"}});const a=await wa.get(`/memes/${t}`);l(a.data.comments||[]),o&&o(a.data.commentCount||0),$((t=>{const r={...t};return delete r[e],r})),F((t=>{const r={...t};return delete r[e],r})),P(null)}catch(d){var a,s,u,c;console.error("Erro detalhado:",{message:d.message,response:null===(a=d.response)||void 0===a?void 0:a.data,status:null===(s=d.response)||void 0===s?void 0:s.status,config:d.config}),f((null===(u=d.response)||void 0===u||null===(c=u.data)||void 0===c?void 0:c.message)||"Erro ao enviar resposta")}i(!1)}else f("Por favor, adicione texto ou um meme")}),[t,L,I,o,i]),ge=(0,n.useCallback)((e=>{g((null===e||void 0===e?void 0:e._id)||null),y((null===e||void 0===e?void 0:e.text)||""),x(null)}),[]),ve=(0,n.useCallback)((async e=>{try{f(null);const r=await wa.put(`/memes/${t}/comments/${e}`,{text:v}),n=t=>t.map((t=>t._id===e?{...t,...r.data}:t.replies?{...t,replies:n(t.replies)}:t));l(n(s)),g(null),y("")}catch(d){f("Erro ao editar coment\xe1rio"),console.error("Erro ao editar coment\xe1rio:",d)}}),[v,t,s]),ye=(0,n.useCallback)((async e=>{try{f(null);const r=await wa.delete(`/memes/${t}/comments/${e}`),n=t=>t.map((t=>t._id===e?{...r.data,replies:t.replies}:t.replies?{...t,replies:n(t.replies)}:t));l(n(s))}catch(d){f("Erro ao excluir coment\xe1rio"),console.error("Erro ao excluir coment\xe1rio:",d)}}),[t,s]),be=(0,n.useCallback)((async function(e,r){try{const n=Z(s,e),o=(null===n||void 0===n?void 0:n.userReaction)===r?"none":r,i=`/memes/${t}/comments/${e}/reaction`,a=await wa.post(i,{reaction:o});l((t=>{const r=t=>t.map((t=>{if(t._id===e){const e={...t,userReaction:"none"===o?null:o};return a.data&&(e.likes=a.data.likes||[],e.dislikes=a.data.dislikes||[],e.likesCount=a.data.likesCount||0,e.dislikesCount=a.data.dislikesCount||0),e}return t.replies?{...t,replies:r(t.replies)}:t}));return r(t)}))}catch(d){console.error("Erro ao reagir ao coment\xe1rio:",d)}}),[t,s,Z]),xe=(0,n.useMemo)((()=>Array.isArray(s)?oe(s):[]),[s,oe]),we=(0,n.useMemo)((()=>"undefined"!==typeof window&&window.innerWidth<=768),[]),[_e,ke]=(0,n.useState)(!1);(0,n.useEffect)((()=>{if("undefined"===typeof window||window.innerWidth>768)return;const e=()=>{const e=window.visualViewport;if(e){const t=e.height,r=window.innerHeight-t;Y(Math.max(r,300)),ke(r>50),G.current&&r>50&&setTimeout((()=>{G.current.scrollIntoView({behavior:"smooth",block:"end"})}),300)}},t=window.visualViewport;return t&&t.addEventListener("resize",e),()=>{t&&t.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((()=>{if(_e){const e=document.getElementById("main-comment-input");e&&e.focus()}}),[_e]),(0,n.useEffect)((()=>{if(!we)return;const e=()=>{const e=window.visualViewport;if(e){const t=e.height;if(window.innerHeight-t>50){const e=document.getElementById("main-comment-input");e&&e.scrollIntoView({behavior:"smooth",block:"end"})}}},t=window.visualViewport;return t&&t.addEventListener("resize",e),()=>{t&&t.removeEventListener("resize",e)}}),[we]),(0,n.useEffect)((()=>{if(!we)return;const e=e=>{"main-comment-input"===e.target.id&&(ke(!0),setTimeout((()=>{G.current&&G.current.scrollIntoView({behavior:"smooth",block:"center"})}),300))},t=()=>{ke(!1)},r=document.getElementById("main-comment-input");return r&&(r.addEventListener("focus",e),r.addEventListener("blur",t)),()=>{r&&(r.removeEventListener("focus",e),r.removeEventListener("blur",t))}}),[we]),(0,n.useEffect)((()=>{if(!we)return;const e=()=>{const e=window.visualViewport;if(e){const t=e.height,r=window.innerHeight-t;Y(Math.max(r,250)),ke(r>50)}},t=window.visualViewport;return t&&t.addEventListener("resize",e),()=>{t&&t.removeEventListener("resize",e)}}),[we]);const Se=Zn.button`
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
`,Ee=Zn.div`
  text-align: center;
  padding: 10px;
  color: var(--text-light);
  font-size: 0.9rem;
`;return(0,Gs.jsxs)(ec,{"data-testid":"comment-section","aria-live":"polite","aria-atomic":"true",children:[(0,Gs.jsxs)(Oc,{"aria-live":"polite",children:[s.length," ",1===s.length?"coment\xe1rio":"coment\xe1rios"]}),d&&(0,Gs.jsxs)(jc,{role:"alert",children:[d,(0,Gs.jsx)(Se,{onClick:ae,"aria-label":"Tentar carregar coment\xe1rios novamente",children:"Tentar novamente"})]}),(0,Gs.jsx)(tc,{ref:Q,children:u?(0,Gs.jsxs)(Ec,{"aria-busy":"true",children:[(0,Gs.jsx)("div",{className:"spinner","aria-hidden":"true"}),"Carregando coment\xe1rios..."]}):Array.isArray(s)&&0!==s.length?(0,Gs.jsxs)("div",{role:"list",children:[xe.map((e=>(0,Gs.jsx)(Qc,{comment:e,depth:0,currentUser:a,onEdit:ge,onDelete:ye,onReply:pe,onReaction:be,editingId:m,editText:v,onEditChange:y,onSaveEdit:ve,replyingTo:A,replyTexts:L,onReplyChange:he,onReplySubmit:me,showOptions:b,onToggleOptions:x,isPopular:e.isPopular||!1,onReplyMediaChange:le,onReplyMemeChange:ue,replyMedia:N,replySelectedMeme:I,onOpenMemeSelector:ce,userMemes:E,loadMoreReplies:re,loadingReplies:q,expandedReplies:U,setExpandedReplies:B,findComment:Z},e._id))),we&&s.length>3&&(0,Gs.jsx)(Ee,{children:"Voc\xea chegou ao fim. Role para cima \u2191"})]}):(0,Gs.jsxs)(Cc,{children:["Nenhum coment\xe1rio ainda. Seja o primeiro!",we&&(0,Gs.jsx)("div",{style:{marginTop:"10px"},children:"Role para baixo para comentar \u2193"})]})}),a&&(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsxs)(uc,{onSubmit:fe,role:"form",ref:G,children:[(0,Gs.jsx)(cc,{type:"text",id:"main-comment-input",name:"mainComment",value:p,onChange:e=>h(e.target.value),placeholder:"Escreva um coment\xe1rio...","aria-label":"Escrever coment\xe1rio","data-testid":"comment-input","aria-required":"true"}),(0,Gs.jsxs)($c,{children:[(0,Gs.jsx)(Nc,{type:"button",onClick:()=>document.getElementById("comment-file-input").click(),"aria-label":"Anexar m\xeddia","data-testid":"attach-media-button",children:(0,Gs.jsx)(tu,{size:18,"aria-hidden":"true"})}),(0,Gs.jsx)("input",{type:"file",id:"comment-file-input",style:{display:"none"},onChange:se,accept:"image/*, video/*","data-testid":"media-input","aria-label":"Selecionar arquivo de m\xeddia"}),(0,Gs.jsx)(Nc,{type:"button",onClick:()=>{S(!0),ie()},"aria-label":"Compartilhar meme","data-testid":"meme-selector-button",children:(0,Gs.jsx)(Kl,{size:18,"aria-hidden":"true"})}),(0,Gs.jsx)(dc,{type:"submit","aria-label":"Enviar coment\xe1rio",disabled:!p.trim()&&!O&&!j,"data-testid":"submit-comment-button","aria-disabled":!p.trim()&&!O&&!j,children:(0,Gs.jsx)(su,{size:18,"aria-hidden":"true"})})]})]}),(O||j)&&(0,Gs.jsx)("div",{style:{marginTop:we?"8px":"0",padding:we?"0 16px":"0",marginBottom:we?"60px":"0"},children:(0,Gs.jsx)(Yc,{file:O,meme:j?E.find((e=>e._id===j)):null,onRemove:()=>{R(null),T(null)},"data-testid":"media-preview"})}),k&&(0,Gs.jsx)(Jc,{memes:E,selectedMeme:D?I[D]:j,onSelect:de,onClose:()=>{S(!1),M(null)},isForReply:!!D,"data-testid":"meme-selector-modal"})]})]})},Gc=(e,t,r)=>{if(!e)return null;return e.split(/(@\w+)/g).map(((e,n)=>{if(e.startsWith("@")){const o=e.substring(1),i=t[o];return i?(0,Gs.jsx)("span",{className:"mention",onClick:e=>{e.preventDefault(),e.stopPropagation(),r(`/users/${i}`)},children:e},`${o}-${n}`):e}return e}))},Zc=async e=>{if(!e)return[];const t=[...e.matchAll(/@([a-zA-Z0-9_]+)/g)],r=[...new Set(t.map((e=>e[1])))];if(0===r.length)return[];try{const e=await wa.post("/users/validate-mentions",{usernames:r}),t={};return e.data.validUsers.forEach((e=>{t[e.username]=e.userId})),{mentions:e.data.validUsers,mentionMap:t}}catch(n){return console.error("Error validating mentions:",n),{mentions:[],mentionMap:{}}}},ed=to`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`,td=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,rd=to`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,nd=to`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,od=to`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,id=to`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,ad=(to`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(100%); opacity: 0; }
`,Zn.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease;
  pointer-events: ${e=>e.$visible?"auto":"none"};
`),sd=Zn.div`
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
`,ld=Zn(sd)`
  transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateY(calc(${e=>e.$offset}px + ${e=>e.$isOpen?"0%":"100%"}));
  opacity: ${e=>1-e.$offset/200};
  border-radius: 16px 16px 0 0;
  background: var(--card-bg);
  height: 80vh;
  max-height: 80vh;
  pointer-events: auto;
  touch-action: none; /* Importante para controle total do toque */
  
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
`,ud=Zn.div`
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
`,cd=Zn.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  position: relative;
  padding-bottom: 0;
`,dd=(Zn.div`
  position: sticky;
  bottom: 0;
  padding: 12px;
  background: var(--card-bg);
  border-top: 1px solid var(--border-light);
`,Zn.button`
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
`),fd=(Zn.button`
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
`,Zn.button`
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
`),pd=Zn.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${od} 0.3s ease-out;
`,hd=Zn.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: var(--radius-md);
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: ${id} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,md=Zn.h3`
  margin: 0 0 1.5rem;
  color: var(--text);
  font-size: 1.2rem;
  text-align: center;
`,gd=Zn.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`,vd=Zn.button`
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
`,yd=Zn.div`
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
  animation: ${ed} 0.5s forwards;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  svg {
    color: var(--success);
  }
`,bd=Zn.div`
  position: absolute;
  top: 40px;
  right: 5px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 10;
  min-width: 150px;
`,xd=Zn.button`
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
`,wd=Zn.div`
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
`,_d=Zn.div`
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
  animation: ${rd} 3s ease-in-out infinite;
  
  svg {
    margin-right: 0.25rem;
  }
`,kd=Zn.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--background);
  position: relative;
  border-bottom: 1px solid var(--border-light);
`,Sd=Zn.img`
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
    animation: ${nd} 3s infinite linear;
  }
  
  &:hover {
    transform: rotate(15deg) scale(1.1);
    border-color: var(--primary-hover);
  }
`,Ed=Zn.span`
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
`,Cd=Zn.img`
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
`,jd=Zn.video`
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
`,Td=Zn.div`
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
`,Od=Zn.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: var(--radius-md);
`,Rd=Zn.div`
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
`,Ad=Zn.div`
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
    animation: ${od} 0.3s forwards;
  }
`,Pd=Zn.button`
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
`,Ld=Zn.div`
  flex-grow: 1;
  height: 0.25rem;
  background: rgba(255,255,255,0.3);
  border-radius: 0.125rem;
  margin: 0 0.625rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`,$d=Zn.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.$progress||"0%"};
  background: var(--primary);
  border-radius: 0.125rem;
`,Nd=Zn.span`
  color: var(--card-bg);
  font-size: 0.8rem;
  min-width: 5rem;
  text-align: center;
`,zd=Zn.p`
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
`,Id=Zn.div`
  padding: 0 1rem 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background: var(--card-bg);
`,Fd=Zn.span`
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
`,Dd=Zn.div`
  display: flex;
  padding: 12px;
  border-top: 1px solid var(--border-light);
  background: var(--card-bg);
  justify-content: space-between;
  position: sticky;
  bottom: 0;
`,Md=Zn.div`
  display: flex;
  gap: 0.5rem;
`,Ud=Zn.button`
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
`,Bd=Zn(Ud)`
  color: ${e=>e.$active?"var(--success)":"var(--text-light)"};
  
  &:hover {
    color: var(--success);
  }
`,Wd=Zn.div`
  position: absolute;
  animation: ${ed} 0.5s forwards, ${td} 0.5s 0.5s forwards;
  font-size: 2.5rem;
  opacity: 0;
  pointer-events: none;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  z-index: 10;
`,Hd=e=>{var t,r,o,i,a,s,l,u,c,d,f;let{meme:p,isRepost:h=!1,onDelete:m,onCommentCountChange:g,isFullScreen:v=!1,setCommentOpen:y=()=>{}}=e;const b=te(),{user:x}=tl(),[w,_]=(0,n.useState)(!1),[k,S]=(0,n.useState)((null===(t=p.likes)||void 0===t?void 0:t.length)||0),[E,C]=(0,n.useState)(!1),j=p.commentCount||0,[T,O]=(0,n.useState)(null),[R,A]=(0,n.useState)(!1),[P,L]=(0,n.useState)(p.repostCount||0),[$,N]=(0,n.useState)(!0),[z,I]=(0,n.useState)(!1),[F,D]=(0,n.useState)(!1),[M,U]=(0,n.useState)(!1),[B,W]=(0,n.useState)(!1),[H,q]=(0,n.useState)(0),[V,K]=(0,n.useState)({}),[Y,Q]=(0,n.useState)(!1),[J,X]=(0,n.useState)(0),[G,Z]=(0,n.useState)(0),[ee,re]=(0,n.useState)(0),ne=(0,n.useRef)(null),oe=(0,n.useRef)(null),ie=(0,n.useRef)(null),[ae,se]=(0,n.useState)(0),[le,ue]=(0,n.useState)(!1);(0,n.useEffect)((()=>{var e;(async()=>{if(p.caption)try{const e=await Zc(p.caption);K(e.mentionMap||{})}catch(e){console.error("Error processing mentions:",e),K({})}})(),x&&p.likes&&_(p.likes.some((e=>e.toString()===x._id))),S((null===(e=p.likes)||void 0===e?void 0:e.length)||0),L(p.repostCount||0),x?fe():N(!1)}),[p,x]);const ce=()=>{ne.current&&(Y?ne.current.pause():ne.current.play(),Q(!Y))},de=e=>{const t=Math.floor(e/60),r=Math.floor(e%60);return`${t}:${r<10?"0":""}${r}`},fe=async()=>{try{var e;if(p.originalMeme&&p.author._id===x._id)A(!0);else A(null===(e=p.reposts)||void 0===e?void 0:e.some((e=>e.toString()===x._id)))}catch(t){console.error("Erro ao verificar repost:",t)}finally{N(!1)}},pe=e=>{if(!e)return console.warn("URL is empty or undefined"),"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`},he=()=>{C(!E),y(!E)};(0,n.useEffect)((()=>()=>{"function"===typeof y&&y(!1)}),[y]);return(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsxs)(wd,{$deleting:F,style:v?{width:"100%",height:"100%",marginBottom:0,borderRadius:0,border:"none",boxShadow:"none"}:{},children:[F&&(0,Gs.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Gs.jsx)("div",{style:{width:"80%",background:"rgba(255,255,255,0.2)",borderRadius:"10px",overflow:"hidden"},children:(0,Gs.jsx)("div",{style:{width:`${H}%`,height:"6px",background:"var(--primary)",transition:"width 0.3s ease"}})})}),M&&(0,Gs.jsxs)(yd,{children:[(0,Gs.jsx)(El,{size:18}),(0,Gs.jsx)("span",{children:"Meme deletado com sucesso!"})]}),(null===x||void 0===x?void 0:x._id)===(null===(r=p.author)||void 0===r?void 0:r._id)&&(0,Gs.jsxs)("div",{style:{position:"relative"},children:[(0,Gs.jsx)(fd,{onClick:e=>{e.stopPropagation(),I(!z)},children:(0,Gs.jsx)(Cl,{size:14})}),z&&(0,Gs.jsx)(bd,{onClick:e=>e.stopPropagation(),children:(0,Gs.jsxs)(xd,{onClick:()=>{I(!1),W(!0)},children:[(0,Gs.jsx)(du,{size:14}),(0,Gs.jsx)("span",{children:"Deletar"})]})})]}),h&&(0,Gs.jsxs)(_d,{children:[(0,Gs.jsx)(iu,{})," Repostado por @",(null===(o=p.repostedBy)||void 0===o?void 0:o.username)||"usu\xe1rio"]}),T&&(0,Gs.jsx)(Wd,{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"like"===T?"var(--primary)":"dislike"===T?"#f00":"repost"===T?"#10b981":"var(--primary)"},children:"like"===T?(0,Gs.jsx)(Al,{}):"dislike"===T?(0,Gs.jsx)(Sl,{}):"repost"===T?(0,Gs.jsx)(El,{}):(0,Gs.jsx)("span",{style:{fontSize:"1rem"},children:"Voc\xea \xe9 o autor!"})}),(0,Gs.jsxs)(kd,{children:[(0,Gs.jsx)(Sd,{src:null!==(i=p.author)&&void 0!==i&&null!==(a=i.profile)&&void 0!==a&&a.avatar?pe(p.author.profile.avatar):"https://i.pravatar.cc/150?img=3",alt:null===(s=p.author)||void 0===s?void 0:s.username,onClick:()=>p.author&&b(`/users/${p.author._id}`),crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"}}),(0,Gs.jsxs)(Ed,{onClick:()=>p.author&&b(`/users/${p.author._id}`),children:["@",(null===(l=p.author)||void 0===l?void 0:l.username)||"usu\xe1rio desconhecido"]})]}),(0,Gs.jsx)(Td,{children:"image"===p.mediaType?(0,Gs.jsx)(Cd,{src:pe(p.mediaUrl),alt:p.caption||"Meme image",style:{transform:E?"scale(0.98)":"scale(1)",filter:E?"brightness(0.95)":"none"},crossOrigin:"anonymous",onError:e=>{e.target.src="https://placehold.co/600x400?text=Imagem+n\xe3o+carregada",e.target.onerror=null}}):(0,Gs.jsxs)(Od,{onClick:ce,children:[(0,Gs.jsx)(jd,{ref:ne,src:pe(p.mediaUrl),preload:"metadata",onTimeUpdate:()=>{if(ne.current){const e=ne.current.currentTime/ne.current.duration*100;X(e),re(ne.current.currentTime)}},onLoadedMetadata:()=>{ne.current&&Z(ne.current.duration)},onEnded:()=>Q(!1),crossOrigin:"anonymous"}),!Y&&(0,Gs.jsx)(Rd,{onClick:e=>{e.stopPropagation(),ce()}}),(0,Gs.jsxs)(Ad,{onClick:e=>e.stopPropagation(),children:[(0,Gs.jsx)(Pd,{onClick:ce,children:Y?"\u275a\u275a":"\u25b6"}),(0,Gs.jsx)(Ld,{onClick:e=>{if(ne.current){const t=e.target.getBoundingClientRect(),r=(e.clientX-t.left)/t.width;ne.current.currentTime=r*ne.current.duration}},children:(0,Gs.jsx)($d,{$progress:`${J}%`})}),(0,Gs.jsxs)(Nd,{children:[de(ee)," / ",de(G)]}),(0,Gs.jsx)(Pd,{onClick:()=>{ne.current&&(ne.current.muted=!ne.current.muted)},children:null!==(u=ne.current)&&void 0!==u&&u.muted?"\ud83d\udd07":"\ud83d\udd08"})]}),(0,Gs.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, \n                  rgba(255,255,255,0.1), \n                  rgba(255,69,0,0.05))",pointerEvents:"none"}})]})}),p.caption&&(0,Gs.jsx)(zd,{children:n.Children.toArray(Gc(p.caption,V,b))}),(null===(c=p.tags)||void 0===c?void 0:c.length)>0&&(0,Gs.jsx)(Id,{children:p.tags.map((e=>(0,Gs.jsxs)(Fd,{onClick:()=>b(`/explore?tag=${e}`),children:["#",e]},e)))}),(0,Gs.jsxs)(Dd,{children:[(0,Gs.jsxs)(Md,{children:[(0,Gs.jsxs)(Ud,{onClick:async()=>{if(x)try{const e=await wa.post(`/memes/${p._id}/like`);_(e.data.isLiked),S(e.data.likeCount),O(e.data.isLiked?"like":"dislike"),setTimeout((()=>O(null)),1500)}catch(e){console.error("Erro ao curtir:",e)}},$active:w,$color:"var(--primary)",children:[(0,Gs.jsx)(Al,{})," ",k]}),(0,Gs.jsx)(Ud,{onClick:async()=>{if(x&&w)try{const e=await wa.post(`/memes/${p._id}/like`);_(!1),S(e.data.likeCount),O("dislike"),setTimeout((()=>O(null)),1500)}catch(e){console.error("Erro ao remover curtida:",e)}},$active:!w&&k>0,$color:"var(--text)",children:(0,Gs.jsx)(Sl,{})}),(0,Gs.jsxs)(Ud,{onClick:he,$active:E,$color:"#f000",children:[(0,Gs.jsx)(Gl,{})," ",j]})]}),(0,Gs.jsxs)(Md,{children:[(0,Gs.jsxs)(Bd,{onClick:async()=>{var e;if(x){if((null===(e=p.author)||void 0===e?void 0:e._id)===x._id)return O("self-repost"),void setTimeout((()=>O(null)),1500);if(!R&&!h)try{const e=await wa.post(`/memes/${p._id}/repost`);A(!0),L(e.data.repostCount),O("repost"),setTimeout((()=>O(null)),1500)}catch(t){console.error("Erro ao repostar:",t),t.response&&409===t.response.status&&A(!0)}}},$active:R,disabled:R||$||h||(null===(d=p.author)||void 0===d?void 0:d._id)===(null===x||void 0===x?void 0:x._id),title:(null===(f=p.author)||void 0===f?void 0:f._id)===(null===x||void 0===x?void 0:x._id)?"Voc\xea n\xe3o pode repostar seu pr\xf3prio conte\xfado":"",children:[$?(0,Gs.jsx)(iu,{}):R?(0,Gs.jsx)(El,{}):(0,Gs.jsx)(iu,{})," ",P]}),(0,Gs.jsx)(Ud,{children:(0,Gs.jsx)(lu,{})})]})]})]}),E&&(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(ad,{$visible:E,onClick:he}),(0,Gs.jsxs)(ld,{$isOpen:E,$offset:ae,children:[(0,Gs.jsx)(ud,{className:"drag-handle",onTouchStart:e=>{e.target.closest(".drag-handle")&&(ie.current=e.touches[0].clientY,ue(!0),se(0))},onTouchMove:e=>{if(!le)return;const t=e.touches[0].clientY-ie.current;t>0&&se(Math.min(.7*t,180))},onTouchEnd:()=>{le&&(ue(!1),ae>100&&(C(!1),y(!1)),se(0))}}),(0,Gs.jsxs)(cd,{style:{touchAction:le?"none":"auto",pointerEvents:le?"none":"auto"},ref:oe,onScroll:()=>ue(!1),onClick:e=>e.stopPropagation(),children:[(0,Gs.jsx)(dd,{onClick:he,children:(0,Gs.jsx)(Bl,{size:24})}),(0,Gs.jsx)(Xc,{memeId:p._id,onCommentSubmit:async e=>{try{const t=await wa.post(`/memes/${p._id}/comments`,e,{headers:{"Content-Type":"multipart/form-data"}});if(g){const e=await wa.get(`/memes/${p._id}`);g(e.data.commentCount||0)}await wa.get(`/memes/${p._id}`),p.commentCount;return t.data}catch(i){var t,r,n,o;throw console.error("Erro detalhado:",{message:i.message,response:null===(t=i.response)||void 0===t?void 0:t.data,status:null===(r=i.response)||void 0===r?void 0:r.status,config:i.config}),new Error((null===(n=i.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||i.message||"Erro ao enviar coment\xe1rio")}},onCommentCountChange:g,setCommentOpen:y})]})]})]}),B&&(0,Gs.jsx)(pd,{children:(0,Gs.jsxs)(hd,{children:[(0,Gs.jsx)(md,{children:"Tem certeza que deseja deletar este meme?"}),(0,Gs.jsx)("p",{style:{textAlign:"center",color:"var(--text-light)"},children:"Esta a\xe7\xe3o \xe9 irrevers\xedvel e remover\xe1 o meme permanentemente."}),(0,Gs.jsxs)(gd,{children:[(0,Gs.jsxs)(vd,{onClick:async()=>{W(!1),D(!0);try{var e;const r=setInterval((()=>{q((e=>e>=90?(clearInterval(r),e):e+10))}),100),n=localStorage.getItem("token"),o=await wa.delete(`/memes/${p._id}`,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"}});var t;if(clearInterval(r),q(100),null===(e=o.data)||void 0===e||!e.success)throw new Error((null===(t=o.data)||void 0===t?void 0:t.message)||"Falha ao deletar");U(!0),setTimeout((()=>{m&&m(p._id),U(!1)}),1500)}catch(Ug){var r,n,o;if(console.error("Erro ao deletar meme:",Ug),410===(null===(r=Ug.response)||void 0===r?void 0:r.status))m&&m(p._id),alert("Este meme j\xe1 foi deletado anteriormente");else alert((null===(n=Ug.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||"Erro ao deletar meme")}finally{D(!1),q(0)}},children:[(0,Gs.jsx)(Ul,{size:16}),"Confirmar"]}),(0,Gs.jsxs)(vd,{onClick:()=>W(!1),children:[(0,Gs.jsx)(yu,{size:16}),"Cancelar"]})]})]})})]})},qd=Zn.button`
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
`,Vd=()=>{const{user:e,loading:t,initialCheckDone:r}=tl(),n=te();return t||!r?null:(0,Gs.jsx)(qd,{onClick:()=>{!t&&r&&(e?n("/upload"):n("/login",{state:{from:"/upload"}}))},disabled:t,"aria-label":"Bot\xe3o de upload",children:(0,Gs.jsx)(nu,{})})},Kd=e=>{let{loading:t,hasMore:r,onLoadMore:o,threshold:i=100}=e;const[a,s]=(0,n.useState)(null),l=(0,n.useRef)();return(0,n.useEffect)((()=>{if(t||!r)return;const e=new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&o()}),{root:null,rootMargin:`${i}px`,threshold:.1});return a&&e.observe(a),l.current=e,()=>{l.current&&l.current.disconnect()}}),[a,t,r,o,i]),[s]},Yd=Zn.div`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  padding-top: calc(60px + env(safe-area-inset-top)); // Ajuste para navbar e status bar
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
  background-color: var(--background);
`,Qd=Zn.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,Jd=Zn.h1`
  font-size: 1.5rem;
  color: var(--text);
  margin: 0;
`,Xd=Zn.div`
  display: flex;
  gap: 12px;
`,Gd=Zn.button`
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 10px 16px;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text);
  transition: all 0.2s ease;
  touch-action: manipulation;
  
  &:active {
    transform: scale(0.95);
    background: var(--border-light);
  }
`,Zd=Zn.button`
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 10px 16px;
  border-radius: 24px;
  cursor: pointer;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text);
  transition: all 0.2s ease;
  width: 100%;
  touch-action: manipulation;
  
  &:active {
    transform: scale(0.95);
    background: var(--border-light);
  }
`,ef=Zn.div`
  text-align: center;
  padding: 40px 20px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--shadow);
  color: var(--text);
  margin-top: 20px;
`,tf=Zn.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: var(--text-light);
`,rf=Zn.div`
  text-align: center;
  padding: 20px;
  background: var(--card-bg);
  color: var(--dislike-color);
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-light);
`,nf=Zn.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,of=Zn.button`
  padding: 10px 16px;
  border-radius: 24px;
  border: none;
  background: ${e=>{let{$active:t}=e;return t?"var(--primary)":"var(--card-bg)"}};
  color: ${e=>{let{$active:t}=e;return t?"var(--text-inverse)":"var(--text)"}};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--border-light);
  font-weight: 500;
  white-space: nowrap;
  touch-action: manipulation;
  
  &:active {
    transform: scale(0.95);
  }
`,af=Zn.div`
  text-align: center;
  padding: 20px;
  color: var(--text-light);
`,sf=Zn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`,lf=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0),[i,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)(null),[u,c]=(0,n.useState)("all"),[d,f]=(0,n.useState)(1),[p,h]=(0,n.useState)(!0),{user:m,logout:g}=tl(),v=te(),y=(0,n.useCallback)((async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{1===e?o(!0):a(!0),l(null);const{data:n}=await wa.get(`/feed/trending?page=${e}&limit=10`);t(r?n.data:t=>1===e?n.data:[...t,...n.data]),h(n.data.length>=10),f(e)}catch(s){var n;console.error("Error fetching trending memes:",s),l("Erro ao carregar os memes em destaque. Tente novamente mais tarde."),401===(null===(n=s.response)||void 0===n?void 0:n.status)&&(await g(),v("/login"))}finally{o(!1),a(!1)}}),[g,v]),b=(0,n.useCallback)((()=>{r||i||!p||y(d+1)}),[y,p,r,i,d]),[x]=Kd({loading:r,hasMore:p,onLoadMore:b,threshold:200}),w=(0,n.useCallback)((()=>{y(1,!0)}),[y]);(0,n.useEffect)((()=>{y()}),[y]);const _=e.filter((e=>"all"===u||("images"===u?"image"===e.mediaType:"videos"!==u||"video"===e.mediaType)));return r&&1===d?(0,Gs.jsx)(Gs.Fragment,{children:(0,Gs.jsx)(Yd,{children:(0,Gs.jsx)(tf,{children:"Carregando memes em destaque..."})})}):s?(0,Gs.jsx)(Gs.Fragment,{children:(0,Gs.jsx)(Yd,{children:(0,Gs.jsxs)(rf,{children:[s,(0,Gs.jsxs)(Gd,{onClick:w,children:[(0,Gs.jsx)(ou,{})," Tentar novamente"]})]})})}):(0,Gs.jsx)(Gs.Fragment,{children:(0,Gs.jsxs)(Yd,{children:[(0,Gs.jsxs)(Qd,{children:[(0,Gs.jsx)(Jd,{children:"Destaques - Os memes mais populares"}),(0,Gs.jsxs)(Xd,{children:[(0,Gs.jsx)(Vd,{}),(0,Gs.jsx)(Gd,{onClick:w,children:(0,Gs.jsx)(ou,{size:18})})]})]}),(0,Gs.jsxs)(nf,{children:[(0,Gs.jsx)(of,{$active:"all"===u,onClick:()=>c("all"),children:"Todos"}),(0,Gs.jsx)(of,{$active:"images"===u,onClick:()=>c("images"),children:"Imagens"}),(0,Gs.jsx)(of,{$active:"videos"===u,onClick:()=>c("videos"),children:"V\xeddeos"})]}),0===_.length?(0,Gs.jsxs)(ef,{children:[(0,Gs.jsx)("h3",{children:"Nenhum meme em destaque encontrado"}),(0,Gs.jsx)("p",{children:"Que tal criar o primeiro?"}),(0,Gs.jsx)(Vd,{style:{marginTop:"20px"}})]}):(0,Gs.jsxs)(sf,{children:[_.map(((e,t)=>{var r;return(0,Gs.jsxs)("div",{ref:t===_.length-1?x:null,children:[(0,Gs.jsx)(Hd,{meme:e,commentCount:e.commentCount||0}),m&&m._id!==(null===(r=e.author)||void 0===r?void 0:r._id)&&(0,Gs.jsxs)(Zd,{onClick:()=>(async e=>{try{await wa.post(`/memes/${e}/repost`),w()}catch(s){var t;console.error("Erro ao repostar:",s),l("Erro ao repostar"),401===(null===(t=s.response)||void 0===t?void 0:t.status)&&(await g(),v("/login"))}})(e._id),children:[(0,Gs.jsx)("span",{children:"\ud83d\udd01"})," Repostar (",e.repostCount||0,")"]})]},`${e._id}-${t}`)})),i&&(0,Gs.jsxs)(af,{children:[(0,Gs.jsx)(ou,{className:"spin"})," Carregando mais memes..."]}),!p&&_.length>0&&(0,Gs.jsx)(af,{children:"Voc\xea chegou ao fim dos memes em destaque!"})]})]})})},uf=()=>{const{user:e}=tl();return e?(0,Gs.jsx)(lf,{}):(0,Gs.jsxs)("div",{children:[(0,Gs.jsx)("h1",{children:"Bem-vindo ao iFunny Clone"}),(0,Gs.jsx)("p",{children:"Fa\xe7a login para ver o conte\xfado"})]})},cf=Zn.div`
  display: flex;
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
  padding: ${ol.Ii.isNativePlatform()?"env(safe-area-inset-top) 16px env(safe-area-inset-bottom)":"0"};
`,df=Zn.div`
  width: 100%;
  max-width: ${ol.Ii.isNativePlatform()?"100%":"400px"};
  margin: auto;
  padding: ${ol.Ii.isNativePlatform()?"2rem 1rem":"2rem"};
  background: var(--card-bg);
  border-radius: ${ol.Ii.isNativePlatform()?"0":"16px"};
  box-shadow: ${ol.Ii.isNativePlatform()?"none":"0 10px 25px rgba(0, 0, 0, 0.1)"};
`,ff=Zn.input`
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
`,pf=Zn.button`
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
`,hf=Zn.div`
  color: var(--danger);
  background-color: rgba(231, 76, 60, 0.1);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
`,mf=Zn.h1`
  color: var(--text);
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${ol.Ii.isNativePlatform()?"24px":"28px"};
`,gf=Zn.p`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-lighter);

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
  }
`,vf=()=>{const[e,t]=(0,n.useState)({usernameOrEmail:"",password:""}),[r,o]=(0,n.useState)(""),[i,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)("0px"),{user:u,initialCheckDone:c,verifyAuth:d}=tl(),f=te(),p=G(),h=ol.Ii.isNativePlatform();(0,n.useEffect)((()=>{if(h)return Qu.addListener("keyboardWillShow",(e=>{l(`${e.keyboardHeight}px`)})),Qu.addListener("keyboardWillHide",(()=>{l("0px")})),()=>{Qu.removeAllListeners()}}),[h]),(0,n.useEffect)((()=>{var e,t;c&&(u&&f((null===(e=p.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname)||"/feed",{replace:!0,state:{...p.state,isMobile:h}}))}),[u,c,f,p,h]);return(0,Gs.jsx)(cf,{style:{paddingBottom:s,transition:"padding-bottom 0.3s ease"},children:(0,Gs.jsxs)(df,{children:[(0,Gs.jsx)(mf,{children:"Bem-vindo de volta"}),r&&(0,Gs.jsx)(hf,{children:r}),(0,Gs.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),a(!0),o("");try{var r,n;const t=await Sa(e);localStorage.setItem("token",t.token),Xs(t.token),await d(),f((null===(r=p.state)||void 0===r||null===(n=r.from)||void 0===n?void 0:n.pathname)||"/trending",{replace:!0,state:{...p.state,isMobile:h}})}catch(Ug){o(Ug.message||"Credenciais inv\xe1lidas. Por favor, tente novamente."),localStorage.removeItem("token")}finally{a(!1)}},children:[(0,Gs.jsx)(ff,{type:"text",placeholder:"Usu\xe1rio ou Email",value:e.usernameOrEmail,onChange:r=>t({...e,usernameOrEmail:r.target.value}),required:!0,autoCapitalize:"none"}),(0,Gs.jsx)(ff,{type:"password",placeholder:"Senha",value:e.password,onChange:r=>t({...e,password:r.target.value}),required:!0}),(0,Gs.jsx)(pf,{type:"submit",disabled:i,children:i?"Entrando...":"Entrar"})]}),(0,Gs.jsxs)(gf,{children:["N\xe3o tem conta? ",(0,Gs.jsx)(nt,{to:"/register",state:{isMobile:h},children:"Cadastre-se"})]})]})})},yf=Zn.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`,bf=Zn.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`,xf=Zn.input`
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
`,wf=Zn.button`
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
`,_f=Zn.div`
  color: #e74c3c;
  background-color: #fdecea;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
`,kf=Zn.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 28px;
`,Sf=Zn.p`
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
`,Ef=Zn.small`
  display: block;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  color: #7f8c8d;
  font-size: 0.8rem;
`,Cf=()=>{const[e,t]=(0,n.useState)({username:"",email:"",password:""}),[r,o]=(0,n.useState)(""),[i,a]=(0,n.useState)(!1),s=te();return(0,Gs.jsx)(yf,{children:(0,Gs.jsxs)(bf,{children:[(0,Gs.jsx)(kf,{children:"Crie sua conta"}),r&&(0,Gs.jsx)(_f,{children:r}),(0,Gs.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),a(!0),o("");try{const t=await ka(e);localStorage.setItem("token",t.token),s("/feed",{replace:!0})}catch(Ug){o("CONFLICT"===Ug.type?Ug.message:"Erro ao cadastrar. Por favor, tente novamente.")}finally{a(!1)}},children:[(0,Gs.jsx)(xf,{type:"text",placeholder:"Nome de usu\xe1rio",value:e.username,onChange:r=>t({...e,username:r.target.value}),required:!0,minLength:3}),(0,Gs.jsx)(xf,{type:"email",placeholder:"Email",value:e.email,onChange:r=>t({...e,email:r.target.value}),required:!0}),(0,Gs.jsx)(xf,{type:"password",placeholder:"Senha",value:e.password,onChange:r=>t({...e,password:r.target.value}),required:!0,minLength:6}),(0,Gs.jsx)(Ef,{children:"M\xednimo de 8 caracteres e numeros"}),(0,Gs.jsx)(wf,{type:"submit",disabled:i,children:i?"Cadastrando...":"Criar conta"})]}),(0,Gs.jsxs)(Sf,{children:["J\xe1 tem conta? ",(0,Gs.jsx)(nt,{to:"/login",children:"Fa\xe7a login"})]})]})})},jf=Zn.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-y: contain;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-top: calc(60px + env(safe-area-inset-top)); // Ajuste para navbar e status bar
`,Tf=Zn.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Of=Zn.div`
  width: 100%;
  height: calc(100vh - 60px - env(safe-area-inset-top)); // Altura total menos navbar
  scroll-snap-align: start;
  position: relative;
`,Rf=Zn.div`
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
`,Af=Zn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px - env(safe-area-inset-top));
  width: 100%;
  color: var(--text-light);
  scroll-snap-align: start;
`,Pf=Zn.div`
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
`,Lf=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0),[i,a]=(0,n.useState)(null),[s,l]=(0,n.useState)(0),u=(0,n.useRef)(null),c=(0,n.useRef)(null),{logout:d}=tl(),f=te(),[p,h]=(0,n.useState)(!1),m=((0,n.useRef)(0),(0,n.useRef)(!1)),g=async()=>{try{o(!0),a(null);const{data:e}=await wa.get("/memes"),r=Array.isArray(null===e||void 0===e?void 0:e.data)?e.data.filter((e=>!e.isDeleted)):[];t(r)}catch(i){var e;console.error("Erro ao carregar feed:",i),a("Erro ao carregar o feed. Tente novamente mais tarde."),401===(null===(e=i.response)||void 0===e?void 0:e.status)&&(await d(),f("/login"))}finally{o(!1)}},v=()=>{p||(c.current&&clearTimeout(c.current),m.current=!0,c.current=setTimeout((()=>{if(m.current=!1,u.current){const e=u.current,t=e.scrollTop,r=e.offsetHeight,n=Math.round(t/r);n!==s&&(l(n),e.scrollTo({top:n*r,behavior:"smooth"}))}}),150))},y=r=>{var n;if(t((e=>e.filter((e=>e._id!==r)))),(null===(n=e[s])||void 0===n?void 0:n._id)===r){const t=Math.min(s,e.length-2);l(t>=0?t:0)}};return(0,n.useEffect)((()=>{const e=u.current;if(e)return e.addEventListener("scroll",v),()=>e.removeEventListener("scroll",v)}),[s,p]),(0,n.useEffect)((()=>{g()}),[]),(0,n.useEffect)((()=>()=>{h(!1)}),[]),r?(0,Gs.jsx)(Gs.Fragment,{children:(0,Gs.jsx)(jf,{ref:u,children:(0,Gs.jsx)(Af,{children:"Carregando..."})})}):i?(0,Gs.jsx)(Gs.Fragment,{children:(0,Gs.jsx)(jf,{ref:u,children:(0,Gs.jsxs)(Pf,{children:[i,(0,Gs.jsxs)("button",{onClick:g,children:[(0,Gs.jsx)(ou,{})," Tentar novamente"]})]})})}):(0,Gs.jsx)(Gs.Fragment,{children:(0,Gs.jsx)(jf,{ref:u,children:(0,Gs.jsx)(Tf,{children:0===e.length?(0,Gs.jsxs)(Rf,{children:[(0,Gs.jsx)("h3",{children:"Nenhum meme encontrado"}),(0,Gs.jsx)("p",{children:"Seja o primeiro a compartilhar sua cria\xe7\xe3o!"}),(0,Gs.jsx)(Vd,{size:"large"})]}):e.map(((e,r)=>(0,Gs.jsx)(Of,{children:(0,Gs.jsx)(Hd,{meme:e,onDelete:y,onCommentCountChange:r=>{t((t=>t.map((t=>t._id===e._id?{...t,commentCount:r}:t))))},isSquareView:!1,isActive:r===s,style:{width:"100%",height:"100%"},setCommentOpen:h})},e._id)))})})})},$f=Zn.div`
  position: relative;
  width: 100%;
`,Nf=Zn.textarea`
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
`,zf=Zn.ul`
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
`,If=Zn.li`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);

  &:hover {
    background: rgba(255, 69, 0, 0.1);
  }
`,Ff=Zn.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`,Df=e=>{let{value:t,onChange:r,placeholder:o}=e;const[i,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)([]),[u,c]=(0,n.useState)(""),[d,f]=(0,n.useState)(0),p=(0,n.useRef)(null),h=async e=>{if(!e||e.length<1)a(!1);else try{const t=await wa.get("/users/search",{params:{q:e}});t.data&&t.data.success&&Array.isArray(t.data.data)?(l(t.data.data),a(t.data.data.length>0)):(l([]),a(!1))}catch(t){console.error("Error fetching mentions:",t),l([]),a(!1)}};return(0,n.useEffect)((()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,n.useEffect)((()=>{const e=e=>{"Escape"===e.key&&a(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),(0,Gs.jsxs)($f,{children:[(0,Gs.jsx)(Nf,{ref:p,value:t,onChange:e=>{const t=e.target.value;r(t);const n=e.target.selectionStart,o=t.substring(0,n),i=o.lastIndexOf("@");if(i>=0){const e=o.substring(i+1);if(/\w/.test(e)&&!/\s/.test(e)){const e=t.substring(i+1,n);return c(e),f(i),void(e.length>=1?(h(e),a(!0)):a(!1))}}a(!1)},placeholder:o,onClick:()=>a(!1)}),i&&s.length>0&&(0,Gs.jsx)(zf,{children:s.map((e=>{var n,o;return(0,Gs.jsxs)(If,{onClick:()=>(e=>{console.log("Selecionando:",e,"Posi\xe7\xe3o:",d,"Query:",u);const n=t,o=n.substring(0,d),i=n.substring(d+u.length+1);r(`${o}@${e} ${i}`),a(!1),setTimeout((()=>{if(p.current){p.current.focus();const t=d+e.length+2;p.current.setSelectionRange(t,t)}}),0)})(e.username),children:[(0,Gs.jsx)(Ff,{src:null!==(n=e.profile)&&void 0!==n&&n.avatar?e.profile.avatar.startsWith("http")?e.profile.avatar:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${e.profile.avatar}`:"https://i.pravatar.cc/150?img=3",alt:e.username,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"}}),(0,Gs.jsxs)("span",{children:["@",e.username]}),(null===(o=e.profile)||void 0===o?void 0:o.displayName)&&(0,Gs.jsxs)("span",{style:{color:"var(--text-light)",fontSize:"0.9em"},children:["(",e.profile.displayName,")"]})]},e._id)}))})]})},Mf=Zn.div`
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
`,Uf=Zn.h2`
  color: var(--text);
  margin-bottom: 1.5rem;
  text-align: center;
`,Bf=Zn.div`
  color: var(--text-light);
  text-align: center;
  padding: 1rem;
`,Wf=Zn.div`
  color: var(--success);
  text-align: center;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-sm);
  margin: 1rem 0;
`,Hf=Zn.div`
  color: var(--danger);
  text-align: center;
  padding: 1rem;
  background: rgba(255, 68, 68, 0.1);
  border-radius: var(--radius-sm);
  margin: 1rem 0;
`,qf=Zn.button`
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
`,Vf=Zn.div`
  margin: 1.5rem 0;
`,Kf=Zn.label`
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
`,Yf=Zn.div`
  margin-top: 1rem;
  text-align: center;
  
  img, video {
    max-width: 100%;
    max-height: 300px;
    border-radius: var(--radius-sm);
  }
`,Qf=Zn.p`
  margin-top: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
`,Jf=Zn.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
`,Xf=Zn.p`
  margin-bottom: 0.5rem;
  color: var(--text-light);
`,Gf=()=>{const{user:e,loading:t,initialCheckDone:r}=tl(),o=te(),[i,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[u,c]=(0,n.useState)(null),[d,f]=(0,n.useState)(""),[p,h]=(0,n.useState)(null),[m,g]=(0,n.useState)(null);n.useEffect((()=>{!r||e||t||o("/login",{state:{from:"/upload"}})}),[e,t,r,o]);return t||!r?(0,Gs.jsx)(Mf,{children:(0,Gs.jsx)(Bf,{children:"Carregando..."})}):(0,Gs.jsxs)(Mf,{children:[(0,Gs.jsx)(Uf,{children:"Criar Nova Postagem"}),i?(0,Gs.jsx)(Wf,{children:"Postagem criada com sucesso! Redirecionando..."}):(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsxs)(Vf,{children:[(0,Gs.jsxs)(Kf,{children:[(0,Gs.jsx)("input",{type:"file",onChange:e=>{const t=e.target.files[0];if(t)if(h(t),c(null),t.type.startsWith("image/")){const e=new FileReader;e.onload=()=>g(e.result),e.readAsDataURL(t)}else t.type.startsWith("video/")&&g(URL.createObjectURL(t))},accept:"image/*,video/*",style:{display:"none"}}),p?"Arquivo selecionado":"Clique para selecionar imagem ou v\xeddeo"]}),m&&(0,Gs.jsxs)(Yf,{children:[p.type.startsWith("image/")?(0,Gs.jsx)("img",{src:m,alt:"Preview",crossOrigin:"anonymous"}):(0,Gs.jsx)("video",{controls:!0,src:m,crossOrigin:"anonymous"}),(0,Gs.jsx)(Qf,{children:p.name})]})]}),(0,Gs.jsx)(Df,{value:d,onChange:f,placeholder:"Adicione uma legenda... mencione usu\xe1rios com @"}),d&&(0,Gs.jsxs)(Jf,{children:[(0,Gs.jsx)(Xf,{children:"Pr\xe9-visualiza\xe7\xe3o:"}),(0,Gs.jsx)("div",{style:{lineHeight:1.5},children:Gc(d,o)})]}),u&&(0,Gs.jsx)(Hf,{children:u}),(0,Gs.jsx)(qf,{onClick:async()=>{if(p)if(d.length>500)c("A legenda n\xe3o pode ter mais de 500 caracteres");else{l(!0),c(null);try{const e=await Zc(d);if(e.length>5)throw new Error("Voc\xea pode mencionar no m\xe1ximo 5 pessoas");const t=new FormData;t.append("media",p),t.append("caption",d),t.append("mentions",JSON.stringify(e));const r=await wa.post("/memes",t,{headers:{"Content-Type":"multipart/form-data"}});a(!0),setTimeout((()=>o(`/memes/${r.data._id}`)),2e3)}catch(Ug){var e,t;console.error("Upload failed:",Ug),c((null===(e=Ug.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||Ug.message||"Erro ao fazer upload")}finally{l(!1)}}else c("Selecione um arquivo para upload")},disabled:s||!p,children:s?(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)("span",{className:"spinner"}),"Enviando..."]}):"Publicar"})]})]})},Zf=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,ep=Zn.div`
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
`,tp=Zn.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid var(--border-light);
  transition: var(--transition);

  ${ep}:hover & {
    transform: scale(1.05);
    border-color: var(--border);
  }
`,rp=Zn.div`
  flex: 1;
  min-width: 0;
`,np=Zn(nt)`
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
`,op=Zn.p`
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ip=Zn.button`
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
`,ap=Zn.div`
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
  animation: ${Zf} 2s infinite;
  border: 2px solid var(--card-bg);

  & > svg {
    font-size: 12px;
  }
`,sp=Zn.div`
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

  ${ap}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }
`,lp=e=>{var t,r;let{user:o,showFollowButton:i=!1}=e;const[a,s]=(0,n.useState)(!1),l=(()=>{if(null===o||void 0===o||!o.createdAt)return 0;try{const e=new Date(o.createdAt),t=new Date-e;return Math.max(1,Math.floor(t/864e5))}catch(e){return 1}})();return(0,Gs.jsxs)(ep,{children:[(0,Gs.jsxs)(ap,{days:l,children:[l>=365?(0,Gs.jsx)(Dl,{}):l>=180?(0,Gs.jsx)(uu,{}):l>=30?(0,Gs.jsx)(bu,{}):(0,Gs.jsx)(Ml,{}),l,"d",(0,Gs.jsxs)(sp,{children:[(0,Gs.jsx)("div",{style:{fontWeight:"bold",marginBottom:"3px"},children:l>=365?"Veterano":l>=180?"Experiente":l>=30?"Membro Ativo":"Novato"}),(0,Gs.jsxs)("div",{style:{fontSize:"11px",color:"var(--text-light)"},children:["Na plataforma h\xe1 ",l," dia",1!==l?"s":""]}),(0,Gs.jsxs)("div",{style:{fontSize:"10px",marginTop:"5px",color:"var(--text-lighter)",borderTop:"1px solid var(--border)",paddingTop:"5px"},children:["Desde ",new Date(o.createdAt).toLocaleDateString()]})]})]}),(0,Gs.jsx)(tp,{src:null!==(t=o.profile)&&void 0!==t&&t.avatar?(e=>{if(!e)return"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`})(o.profile.avatar):"https://i.pravatar.cc/150?img=3",alt:o.username,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3",e.target.onerror=null}}),(0,Gs.jsxs)(rp,{children:[(0,Gs.jsxs)(np,{to:`/users/${o._id}`,children:["@",o.username]}),(0,Gs.jsx)(op,{children:(null===(r=o.profile)||void 0===r?void 0:r.bio)||"Sem biografia ainda..."})]}),i&&(0,Gs.jsx)(ip,{$isFollowing:a,onClick:()=>s(!a),children:a?"Seguindo":"Seguir"})]})},up=Zn.div`
  margin-top: 20px;
`,cp=Zn.h3`
  margin-bottom: 15px;
  color: var(--text);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,dp=Zn.span`
  background: var(--primary);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
`,fp=e=>{let{userId:t}=e;const[r,o]=(0,n.useState)([]),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{a(!0);const{data:e}=await wa.get(`/users/${t}/followers`);o(e.data)}catch(s){var e,r;l((null===(e=s.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message)||"Erro ao carregar seguidores")}finally{a(!1)}})()}),[t]),i?(0,Gs.jsx)("div",{children:"Carregando..."}):s?(0,Gs.jsx)("div",{children:s}):(0,Gs.jsxs)(up,{children:[(0,Gs.jsxs)(cp,{children:["Seguidores",(0,Gs.jsx)(dp,{children:r.length})]}),r.length>0?r.map((e=>(0,Gs.jsx)(lp,{user:e.follower,showFollowButton:!0},e.follower._id))):(0,Gs.jsx)("p",{children:"Nenhum seguidor encontrado"})]})},pp=Zn.div`
  margin-top: 20px;
`,hp=Zn.h3`
  margin-bottom: 15px;
  color: var(--text);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,mp=Zn.span`
  background: var(--secondary);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
`,gp=e=>{let{userId:t}=e;const[r,o]=(0,n.useState)([]),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{a(!0);const{data:e}=await wa.get(`/users/${t}/following`);o(e.data)}catch(s){var e,r;l((null===(e=s.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message)||"Erro ao carregar pessoas seguidas")}finally{a(!1)}})()}),[t]),i?(0,Gs.jsx)("div",{children:"Carregando..."}):s?(0,Gs.jsx)("div",{children:s}):(0,Gs.jsxs)(pp,{children:[(0,Gs.jsxs)(hp,{children:["Seguindo",(0,Gs.jsx)(mp,{children:r.length})]}),r.length>0?r.map((e=>(0,Gs.jsx)(lp,{user:e.following,showFollowButton:!0},e.following._id))):(0,Gs.jsx)("p",{children:"N\xe3o est\xe1 seguindo ningu\xe9m"})]})},vp=to`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,yp=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,bp=to`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,xp=Zn.div`
  position: relative;
  margin-bottom: 20px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--card-bg);
  box-shadow: var(--shadow);
  animation: ${vp} 0.6s ease-out;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    border-radius: 0;
    margin-bottom: 10px;
    box-shadow: none;
  }
`,wp=Zn.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${bp} 1.5s infinite;
  border-radius: var(--radius-md);
`,_p=Zn.div`
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
`,kp=Zn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${e=>{let{$loaded:t}=e;return t?1:0}};

  @media (max-width: 768px) {
    object-position: center;
  }
`,Sp=Zn.div`
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
`,Ep=Zn.div`
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
`,Cp=Zn.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: var(--transition);
  opacity: ${e=>{let{$loaded:t}=e;return t?1:0}};

  @media (max-width: 768px) {
    object-position: center top;
  }
`,jp=Zn(wp)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,Tp=Zn.div`
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
`,Op=Zn.h1`
  margin: 8px 0 4px;
  font-size: 24px;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.5px;
  background: linear-gradient(to right, var(--secondary), #9b59b6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,Rp=Zn.p`
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
`,Ap=Zn.div`
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
`,Pp=Zn.div`
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
`,Lp=Zn.div`
  font-weight: 800;
  font-size: 18px;
  color: var(--text);
  margin-bottom: 2px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`,$p=Zn.div`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-lighter);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`,Np=Zn.div`
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
  animation: ${yp} 2s infinite;
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
`,zp=Zn.div`
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

  ${Np}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }
`,Ip=Zn.button`
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
`,Fp=Zn.button`
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
`,Dp=Zn.div`
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
  animation: ${vp} 0.3s ease-out;
`,Mp=Zn.div`
  background: var(--card-bg);
  color: var(--text);
  padding: 30px 15px;
  border-radius: var(--radius-lg);
  width: 95%;
  max-width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: var(--shadow-hover);
  position: relative;
  animation: ${vp} 0.4s ease-out;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    padding: 20px 10px;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }
`,Up=Zn.button`
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
`,Bp=Zn.div`
  display: inline-block;
  animation: ${yp} 1.5s infinite ease-in-out;
  margin-left: 8px;
`,Wp=Zn.div`
  @media (max-width: 768px) {
    padding: 10px;
    margin: -10px;
  }
`,Hp={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org",qp=e=>{var t,r,o;let{user:i,isOwnProfile:a}=e;const[s,l]=(0,n.useState)(!1),[u,c]=(0,n.useState)(!1),[d,f]=(0,n.useState)(!1),[p,h]=(0,n.useState)(!1),[m,g]=(0,n.useState)(!1),{stats:v,loading:y,setStats:b}=(e=>{const[t,r]=(0,n.useState)({posts:0,followers:0,following:0}),[o,i]=(0,n.useState)(!0),[a,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{const{data:t}=await wa.get(`/users/${e}/stats`);r(t)}catch(Ug){var t,n;s((null===(t=Ug.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Erro ao carregar estat\xedsticas")}finally{i(!1)}})()}),[e]),{stats:t,loading:o,error:a,setStats:r}})(i._id),{isFollowing:x,loading:w,toggleFollow:_}=((e,t)=>{const[r,o]=(0,n.useState)(!1),[i,a]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{if(!t){const t=async()=>{try{const{data:t}=await wa.get(`/users/${e}/follow-status`);o(t.isFollowing)}catch(t){console.error("Erro ao verificar follow:",t)}};t()}}),[e,t]),{isFollowing:r,loading:i,toggleFollow:async()=>{a(!0);try{r?await wa.delete(`/users/${e}/unfollow`):await wa.post(`/users/${e}/follow`),o(!r)}catch(t){throw console.error("Erro ao alternar follow:",t),t}finally{a(!1)}}}})(i._id,a);(0,n.useEffect)((()=>{const e=()=>{g(window.innerWidth<=768||"ontouchstart"in window||navigator.maxTouchPoints)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const k=e=>{if(!e)return null;if(e.startsWith("http://"))return"https://"+e.substring(7);if(e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${Hp}${t}`},S=(()=>{if(null===i||void 0===i||!i.createdAt)return 1;const e=new Date(i.createdAt),t=new Date;return Math.max(1,Math.floor((t-e)/864e5))})();return(0,Gs.jsxs)(xp,{children:[(0,Gs.jsxs)(Np,{days:S,children:[S>=365?(0,Gs.jsx)(Dl,{}):S>=180?(0,Gs.jsx)(uu,{}):S>=30?(0,Gs.jsx)(bu,{}):(0,Gs.jsx)(Ml,{}),S," dias",(0,Gs.jsxs)(zp,{children:[(0,Gs.jsx)("div",{style:{fontWeight:"bold",marginBottom:"5px",fontSize:"13px"},children:S>=365?"Veterano":S>=180?"Experiente":S>=30?"Membro Ativo":"Novato"}),(0,Gs.jsxs)("div",{style:{fontSize:"11px",color:"var(--text-light)"},children:["Na plataforma h\xe1 ",S," dia",1!==S?"s":""]}),(0,Gs.jsxs)("div",{style:{fontSize:"10px",marginTop:"6px",color:"var(--text-lighter)",borderTop:"1px solid var(--border)",paddingTop:"6px"},children:["Desde ",new Date(i.createdAt).toLocaleDateString()]})]})]}),(0,Gs.jsxs)(_p,{children:[!s&&(0,Gs.jsx)(wp,{style:{position:"absolute",width:"100%",height:"100%"}}),(0,Gs.jsx)(kp,{src:k(null===(t=i.profile)||void 0===t?void 0:t.coverPhoto)||`${Hp}/default-cover.jpg`,alt:"Capa do perfil",crossOrigin:"anonymous",$loaded:s,onLoad:()=>l(!0),onError:e=>{e.target.src=`${Hp}/default-cover.jpg`,l(!0)}})]}),(0,Gs.jsxs)(Sp,{children:[(0,Gs.jsxs)(Ep,{children:[!u&&(0,Gs.jsx)(jp,{}),null!==(r=i.profile)&&void 0!==r&&r.avatar?(0,Gs.jsx)(Cp,{src:k(i.profile.avatar),alt:`Avatar de ${i.username}`,crossOrigin:"anonymous",$loaded:u,onLoad:()=>c(!0),onError:e=>{e.target.src="",e.target.parentNode.querySelector("div").style.display="flex",c(!0)}}):(0,Gs.jsx)(Tp,{children:(0,Gs.jsx)(gu,{})})]}),(0,Gs.jsxs)(Op,{children:["@",i.username]}),(0,Gs.jsx)(Rp,{children:(null===(o=i.profile)||void 0===o?void 0:o.bio)||"Sem biografia ainda..."}),y?(0,Gs.jsx)(Ap,{children:[1,2,3].map((e=>(0,Gs.jsxs)(Pp,{children:[(0,Gs.jsx)(Lp,{as:wp,style:{width:"30px",height:"18px",margin:"0 auto"}}),(0,Gs.jsx)($p,{as:wp,style:{width:"50px",height:"12px",margin:"0 auto"}})]},e)))}):(0,Gs.jsxs)(Ap,{children:[(0,Gs.jsx)(Pp,{children:(0,Gs.jsxs)(Wp,{children:[(0,Gs.jsx)(Lp,{children:v.posts}),(0,Gs.jsx)($p,{children:"Posts"})]})}),(0,Gs.jsx)(Pp,{onClick:()=>f(!0),"aria-label":`Ver seguidores (${v.followers})`,children:(0,Gs.jsxs)(Wp,{children:[(0,Gs.jsx)(Lp,{children:v.followers}),(0,Gs.jsx)($p,{children:"Seguidores"})]})}),(0,Gs.jsx)(Pp,{onClick:()=>h(!0),"aria-label":`Ver seguindo (${v.following})`,children:(0,Gs.jsxs)(Wp,{children:[(0,Gs.jsx)(Lp,{children:v.following}),(0,Gs.jsx)($p,{children:"Seguindo"})]})})]}),!a&&(0,Gs.jsx)(Fp,{onClick:async()=>{try{const e=x;await _(),b((t=>({...t,followers:e?t.followers-1:t.followers+1})))}catch(e){console.error("Erro ao alternar follow:",e)}},disabled:w,$isFollowing:x,"aria-label":x?"Deixar de seguir":"Seguir usu\xe1rio",children:x?(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(hu,{})," Seguindo",w&&(0,Gs.jsx)(Bp,{children:(0,Gs.jsx)(ou,{})})]}):(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsx)(mu,{})," Seguir",w&&(0,Gs.jsx)(Bp,{children:(0,Gs.jsx)(ou,{})})]})})]}),a&&(0,Gs.jsxs)(Ip,{"aria-label":"Editar perfil",children:[(0,Gs.jsx)(ql,{})," Editar Perfil"]}),d&&(0,Gs.jsx)(Dp,{onClick:()=>f(!1),children:(0,Gs.jsxs)(Mp,{onClick:e=>e.stopPropagation(),children:[(0,Gs.jsx)(Up,{onClick:()=>f(!1),"aria-label":"Fechar modal",children:"\xd7"}),(0,Gs.jsxs)("h2",{style:{marginBottom:"20px",color:"var(--text)",display:"flex",alignItems:"center",gap:"8px",fontSize:m?"16px":"18px"},children:[(0,Gs.jsx)(vu,{size:m?18:22})," Seguidores"]}),(0,Gs.jsx)(fp,{userId:i._id})]})}),p&&(0,Gs.jsx)(Dp,{onClick:()=>h(!1),children:(0,Gs.jsxs)(Mp,{onClick:e=>e.stopPropagation(),children:[(0,Gs.jsx)(Up,{onClick:()=>h(!1),"aria-label":"Fechar modal",children:"\xd7"}),(0,Gs.jsxs)("h2",{style:{marginBottom:"20px",color:"var(--text)",display:"flex",alignItems:"center",gap:"8px",fontSize:m?"16px":"18px"},children:[(0,Gs.jsx)(vu,{size:m?18:22})," Seguindo"]}),(0,Gs.jsx)(gp,{userId:i._id})]})})]})},Vp=Zn.div`
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
`,Kp=Zn.button`
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
`,Yp=Zn.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary);
  transform: scaleX(${e=>e.$active?1:0});
  transform-origin: left;
  transition: transform 0.3s ease;
`,Qp=e=>{let{activeTab:t,setActiveTab:r,showSettings:n=!1}=e;const o=[{id:"memes",label:"Posts"},{id:"likes",label:"Likes"},{id:"activity",label:"Activity"},...n?[{id:"settings",label:"Settings"}]:[]];return(0,Gs.jsx)(Vp,{children:o.map((e=>(0,Gs.jsxs)(Kp,{$active:t===e.id,onClick:()=>r(e.id),"aria-label":e.label,"aria-selected":t===e.id,children:[e.label,(0,Gs.jsx)(Yp,{$active:t===e.id})]},e.id)))})};var Jp={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Xp(e){var t=function(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return Jp[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var Gp=function(){return Gp=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Gp.apply(this,arguments)},Zp=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},eh=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,a="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(a,0),n}("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");const th=function(e){var t=e.loading,r=void 0===t||t,o=e.color,i=void 0===o?"#000000":o,a=e.speedMultiplier,s=void 0===a?1:a,l=e.cssOverride,u=void 0===l?{}:l,c=e.size,d=void 0===c?15:c,f=e.margin,p=void 0===f?2:f,h=Zp(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),m=Gp({display:"inherit"},u),g=function(e){return{backgroundColor:i,width:Xp(d),height:Xp(d),margin:Xp(p),borderRadius:"100%",display:"inline-block",animation:"".concat(eh," ").concat(.75/s,"s ").concat(.12*e/s,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return r?n.createElement("span",Gp({style:m},h),n.createElement("span",{style:g(1)}),n.createElement("span",{style:g(2)}),n.createElement("span",{style:g(3)})):null},rh=Zn.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
`,nh=Zn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
  gap: 16px;
  padding: 0;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
`,oh=Zn.div`
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
`,ih=Zn.h2`
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
`,ah=Zn.div`
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
`,sh=()=>{const{userId:e}=re(),{user:t}=tl(),[r,o]=(0,n.useState)([]),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null),u=e=>{o((t=>t.filter((t=>t._id!==e))))};(0,n.useEffect)((()=>{(async()=>{try{a(!0),l(null);const{data:t}=await wa.get(`/users/${e}/memes`),r=t.filter((e=>{const t=!e.isDeleted,r=e.author&&!e.author.isDeleted;return t&&r}));o(r)}catch(Ug){l("Falha ao carregar memes"),console.error("Erro ao buscar memes:",Ug)}finally{a(!1)}})()}),[e]);const c=async e=>{try{await wa.delete(`/memes/${e}`),u(e)}catch(s){var t,r,n;console.error("Erro ao deletar meme:",s),410===(null===(t=s.response)||void 0===t?void 0:t.status)&&u(e),alert((null===(r=s.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Erro ao deletar meme")}};return i?(0,Gs.jsx)(rh,{children:(0,Gs.jsxs)(oh,{children:[(0,Gs.jsx)(th,{color:"#6c5ce7",size:15}),(0,Gs.jsx)("h3",{children:"Carregando memes..."}),(0,Gs.jsx)("p",{children:"Preparando as melhores piadas pra voc\xea"})]})}):s?(0,Gs.jsx)(rh,{children:(0,Gs.jsxs)(oh,{children:[(0,Gs.jsx)(Ol,{}),(0,Gs.jsx)("h3",{children:"Oops! Algo deu errado"}),(0,Gs.jsx)("p",{children:s}),(0,Gs.jsx)("p",{children:"Tente recarregar a p\xe1gina"})]})}):0===r.length?(0,Gs.jsx)(rh,{children:(0,Gs.jsxs)(oh,{children:[(0,Gs.jsx)(Rl,{}),(0,Gs.jsx)("h3",{children:"Nenhum meme encontrado"}),(0,Gs.jsx)("p",{children:"Parece que este usu\xe1rio ainda n\xe3o criou memes"})]})}):(0,Gs.jsxs)(rh,{children:[(0,Gs.jsx)(ih,{children:"Posts"}),(0,Gs.jsx)(nh,{children:r.map((e=>{var r;return(0,Gs.jsx)(ah,{children:(0,Gs.jsx)(Hd,{meme:e,onDelete:c,isOwner:(null===t||void 0===t?void 0:t._id)===(null===(r=e.author)||void 0===r?void 0:r._id),className:"meme-card"})},e._id)}))})]})},lh=Zn.button`
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
`,uh=Zn.div`
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
`,ch=Zn.button`
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
`,dh=e=>{let{memeId:t,onDelete:r}=e;const[o,i]=(0,n.useState)(!1);return(0,Gs.jsxs)("div",{style:{position:"relative"},children:[(0,Gs.jsx)(lh,{onClick:()=>i(!o),children:(0,Gs.jsx)(Cl,{size:14})}),o&&(0,Gs.jsx)(uh,{children:(0,Gs.jsxs)(ch,{onClick:async()=>{try{await wa.delete(`/memes/${t}`),r(t)}catch(Ug){console.error("Erro ao deletar meme:",Ug)}i(!1)},children:[(0,Gs.jsx)(Pl,{}),(0,Gs.jsx)("span",{children:"Deletar"})]})})]})},fh=Zn(nt)`
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
`,ph=Zn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`,hh=Zn.div`
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
  
  ${fh}:hover & {
    opacity: 1;
  }
`,mh=Zn.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 69, 0, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`,gh=Zn.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
`,vh=e=>{let{meme:t,isOwner:r,onDelete:n}=e;return(0,Gs.jsxs)(fh,{to:`/memes/${t._id}`,children:[r&&(0,Gs.jsx)(dh,{memeId:t._id,onDelete:n,onClick:e=>e.preventDefault()}),(0,Gs.jsx)(ph,{src:(()=>{if(!t.mediaUrl)return"https://placehold.co/600x400?text=Imagem+n\xe3o+carregada";if(t.mediaUrl.startsWith("http"))return t.mediaUrl.replace(/^http:\/\//i,"https://");return`https://api.jokesteronline.org${t.mediaUrl.startsWith("/")?t.mediaUrl:`/${t.mediaUrl}`}`})(),alt:t.caption||"Meme thumbnail",crossOrigin:"anonymous",onError:e=>{e.target.src="https://placehold.co/600x400?text=Imagem+n\xe3o+carregada",e.target.onerror=null}}),"video"===t.mediaType&&(0,Gs.jsx)(hh,{children:(0,Gs.jsx)(mh,{children:(0,Gs.jsx)(jl,{size:14})})}),t.isRepost&&(0,Gs.jsx)(gh,{children:"Repost"})]})},yh=Zn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,bh=Zn.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: var(--text-light);
  font-size: 1.1rem;
`,xh=e=>{let{userId:t}=e;const[r,o]=(0,n.useState)([]),[i,a]=(0,n.useState)(!0),[s,l]=(0,n.useState)(null),{user:u}=tl();(0,n.useEffect)((()=>{(async()=>{try{a(!0),l(null);const{data:e}=await wa.get(`/users/${t}/liked-memes`),r=Array.isArray(e)?e.filter((e=>{const t=!e.isDeleted,r=e.author&&!e.author.isDeleted;return t&&r})):[];o(r)}catch(s){var e;console.error("Error fetching liked memes:",s),l("Failed to load liked memes"),null===(e=s.response)||void 0===e||e.status}finally{a(!1)}})()}),[t,u]);const c=e=>{o((t=>t.filter((t=>t._id!==e))))};return i?(0,Gs.jsx)(bh,{children:"Loading liked memes..."}):s?(0,Gs.jsx)(bh,{children:s}):(0,Gs.jsx)(Gs.Fragment,{children:0===r.length?(0,Gs.jsx)(bh,{children:t===(null===u||void 0===u?void 0:u._id)?"You haven't liked any memes yet":"This user hasn't liked any memes"}):(0,Gs.jsx)(yh,{children:r.map((e=>(0,Gs.jsx)(vh,{meme:e,onDelete:c},e._id)))})})},wh=Zn.div`
  margin-top: 20px;
`,_h=Zn.div`
  padding: 15px;
  border-bottom: 1px solid #eee;
`,kh=e=>{let{userId:t}=e;const[r,o]=(0,n.useState)([]),[i,a]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{(async()=>{try{const{data:e}=await wa.get(`/users/${t}/activity`);o(e)}catch(e){console.error("Error fetching activities:",e)}finally{a(!1)}})()}),[t]),i?(0,Gs.jsx)("div",{children:"Loading activity..."}):(0,Gs.jsx)(wh,{children:r.map((e=>(0,Gs.jsxs)(_h,{children:[e.type,": ",e.content]},e._id)))})},Sh=(Zn.div`
  margin-top: 25px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,Zn.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`,Zn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`,Zn(nt)`
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
`,Zn.div`
  position: relative;
  margin-right: 15px;
`,Zn.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,Zn.div`
  flex: 1;
`,Zn.div`
  font-weight: 600;
  margin-bottom: 5px;
`,Zn.div`
  font-size: 0.8rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
`,Zn.div`
  text-align: center;
  padding: 30px;
  color: #666;
`,Zn.div`
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
`),Eh=Zn.h2`
  color: var(--primary);
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`,Ch=Zn.div`
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,jh=Zn.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--text);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,Th=Zn.input`
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
`,Oh=Zn.textarea`
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
`,Rh=Zn.div`
  position: relative;
  margin-bottom: 15px;
`,Ah=Zn.label`
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
`,Ph=Zn.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`,Lh=Zn.div`
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
`,$h=Zn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Nh=Zn.button`
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
`,zh=Zn.button`
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
`,Ih=Zn.div`
  color: var(--dislike-color);
  margin-top: 10px;
  font-size: 0.9rem;
`,Fh=Zn.div`
  color: var(--success);
  margin-top: 10px;
  font-size: 0.9rem;
`,Dh=e=>{var t,r,o,i,a,s,l;let{user:u}=e;const[c,d]=(0,n.useState)({bio:(null===(t=u.profile)||void 0===t?void 0:t.bio)||""}),[f,p]=(0,n.useState)(null),[h,m]=(0,n.useState)(null),[g,v]=(0,n.useState)((null===(r=u.profile)||void 0===r?void 0:r.avatar)||""),[y,b]=(0,n.useState)((null===(o=u.profile)||void 0===o?void 0:o.coverPhoto)||""),[x,w]=(0,n.useState)(!1),[_,k]=(0,n.useState)(""),[S,E]=(0,n.useState)(""),{updateUser:C}=tl();(0,n.useEffect)((()=>()=>{g&&g.startsWith("blob:")&&URL.revokeObjectURL(g),y&&y.startsWith("blob:")&&URL.revokeObjectURL(y)}),[g,y]);return(0,Gs.jsxs)(Sh,{children:[(0,Gs.jsx)(Eh,{children:"Configura\xe7\xf5es do Perfil"}),(0,Gs.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),w(!0),k(""),E("");try{const e=new FormData;f&&e.append("avatar",f),h&&e.append("coverPhoto",h),e.append("bio",c.bio);const{data:t}=await wa.put("/users/profile",e,{headers:{"Content-Type":"multipart/form-data"}});C(t),E("Perfil atualizado com sucesso!"),setTimeout((()=>E("")),3e3)}catch(_){var t,r;console.error("Error updating profile:",_),k((null===(t=_.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Falha ao atualizar o perfil")}finally{w(!1)}},children:[(0,Gs.jsxs)(Ch,{children:[(0,Gs.jsx)(jh,{children:"Biografia"}),(0,Gs.jsx)(Oh,{value:c.bio,onChange:e=>d({...c,bio:e.target.value}),placeholder:"Conte um pouco sobre voc\xea..."})]}),(0,Gs.jsxs)(Ch,{children:[(0,Gs.jsx)(jh,{children:"Foto de Perfil"}),(0,Gs.jsx)(Rh,{children:(0,Gs.jsxs)(Ah,{children:[(0,Gs.jsx)(pu,{size:18}),f?"Imagem selecionada":"Selecionar imagem",(0,Gs.jsx)(Th,{type:"file",accept:"image/*",onChange:e=>{const t=e.target.files[0];t&&(t.type.startsWith("image/")?t.size>2097152?k("A imagem de perfil deve ter menos de 2MB"):(p(t),v(URL.createObjectURL(t)),k("")):k("Por favor, selecione um arquivo de imagem v\xe1lido"))},style:{display:"none"}})]})}),(g||(null===(i=u.profile)||void 0===i?void 0:i.avatar))&&(0,Gs.jsx)(Ph,{children:(0,Gs.jsxs)(Lh,{$isAvatar:!0,children:[(0,Gs.jsx)($h,{src:g||(null===(a=u.profile)||void 0===a?void 0:a.avatar),alt:"Preview da foto de perfil",crossOrigin:"anonymous"}),f&&(0,Gs.jsx)(Nh,{onClick:()=>{var e;p(null),v((null===(e=u.profile)||void 0===e?void 0:e.avatar)||"")},children:(0,Gs.jsx)(yu,{size:16})})]})})]}),(0,Gs.jsxs)(Ch,{children:[(0,Gs.jsx)(jh,{children:"Foto de Capa"}),(0,Gs.jsx)(Rh,{children:(0,Gs.jsxs)(Ah,{children:[(0,Gs.jsx)(pu,{size:18}),h?"Imagem selecionada":"Selecionar imagem",(0,Gs.jsx)(Th,{type:"file",accept:"image/*",onChange:e=>{const t=e.target.files[0];t&&(t.type.startsWith("image/")?t.size>5242880?k("A imagem de capa deve ter menos de 5MB"):(m(t),b(URL.createObjectURL(t)),k("")):k("Por favor, selecione um arquivo de imagem v\xe1lido"))},style:{display:"none"},crossOrigin:"anonymous"})]})}),(y||(null===(s=u.profile)||void 0===s?void 0:s.coverPhoto))&&(0,Gs.jsx)(Ph,{children:(0,Gs.jsxs)(Lh,{children:[(0,Gs.jsx)($h,{src:y||(null===(l=u.profile)||void 0===l?void 0:l.coverPhoto),alt:"Preview da foto de capa"}),h&&(0,Gs.jsx)(Nh,{onClick:()=>{var e;m(null),b((null===(e=u.profile)||void 0===e?void 0:e.coverPhoto)||"")},children:(0,Gs.jsx)(yu,{size:16})})]})})]}),_&&(0,Gs.jsx)(Ih,{children:_}),S&&(0,Gs.jsx)(Fh,{children:S}),(0,Gs.jsx)(zh,{type:"submit",disabled:x,children:x?"Salvando...":"Salvar Altera\xe7\xf5es"})]})]})},Mh=to`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Uh=to`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Bh=Zn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px; // Reduzido de 20px
  animation: ${Mh} 0.5s ease-out;
  background-color: var(--background);
  min-height: calc(100vh - 50px); // Ajustado para altura do navbar

  @media (max-width: 768px) {
    padding: 0;
    max-width: 100%;
  }
`,Wh=Zn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;

  @media (max-width: 768px) {
    height: 70vh;
  }
`,Hh=Zn.div`
  animation: ${Uh} 1s linear infinite;
  font-size: 40px;
  color: var(--primary);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`,qh=Zn.p`
  font-size: 18px;
  color: var(--text-light);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Vh=Zn.div`
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
`,Kh=Zn.p`
  font-size: 18px;
  color: var(--dislike-color);
  font-weight: 500;
  max-width: 80%;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 90%;
  }
`,Yh=Zn.button`
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
`,Qh=Zn.div`
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
`,Jh=Zn.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`,Xh=Zn.div`
  margin-top: 15px; // Reduzido de 30px
  animation: ${Mh} 0.6s ease-out;
  padding-bottom: 20px; // Reduzido de 60px

  @media (max-width: 768px) {
    margin-top: 10px;
    padding: 0 10px 20px; // Reduzido padding
  }
`,Gh=()=>{const{userId:e}=re(),{user:t}=tl(),{theme:r}=ll(),[o,i]=(0,n.useState)({user:null,stats:{posts:0,followers:0,following:0},isFollowing:!1}),[a,s]=(0,n.useState)("memes"),[l,u]=(0,n.useState)(!0),[c,d]=(0,n.useState)(null),[f,p]=(0,n.useState)(0);(0,n.useEffect)((()=>{(async()=>{try{u(!0),d(null);const[r,n,o]=await Promise.all([wa.get(`/users/${e}`),wa.get(`/users/${e}/stats`),t?wa.get(`/users/${e}/follow-status`):Promise.resolve({data:{isFollowing:!1}})]);i({user:r.data,stats:n.data.data,isFollowing:o.data.isFollowing})}catch(c){console.error("Error fetching profile data:",c),d(c)}finally{u(!1)}})()}),[e,t,f]);const h=()=>{p((e=>e+1))};return l?(0,Gs.jsxs)(Wh,{children:[(0,Gs.jsx)(Hh,{children:(0,Gs.jsx)(Yl,{})}),(0,Gs.jsx)(qh,{children:"Loading profile..."})]}):c?(0,Gs.jsxs)(Vh,{children:[(0,Gs.jsxs)(Kh,{children:["Error loading profile. ",c.message||"Please try again."]}),(0,Gs.jsxs)(Yh,{onClick:h,children:[(0,Gs.jsx)(Yl,{})," Retry"]})]}):o.user||l?(0,Gs.jsxs)(Bh,{children:[(0,Gs.jsx)(qp,{user:o.user,stats:o.stats,isFollowing:o.isFollowing,onFollowToggle:async()=>{try{o.isFollowing?await wa.delete(`/users/${e}/unfollow`):await wa.post(`/users/${e}/follow`);const[t,r]=await Promise.all([wa.get(`/users/${e}/stats`),wa.get(`/users/${e}/follow-status`)]);i((e=>({...e,stats:t.data.data,isFollowing:r.data.isFollowing})))}catch(c){console.error("Error updating follow status:",c)}},isCurrentUser:(null===t||void 0===t?void 0:t._id)===e}),(0,Gs.jsxs)(Xh,{children:[(0,Gs.jsx)(Qp,{activeTab:a,setActiveTab:s,showSettings:(null===t||void 0===t?void 0:t._id)===e}),"memes"===a&&(0,Gs.jsx)(sh,{userId:e}),"likes"===a&&(0,Gs.jsx)(xh,{userId:e}),"activity"===a&&(0,Gs.jsx)(kh,{userId:e}),"followers"===a&&(0,Gs.jsx)(UserFollowers,{userId:e,followersCount:o.stats.followers}),"following"===a&&(0,Gs.jsx)(UserFollowing,{userId:e,followingCount:o.stats.following}),"settings"===a&&(null===t||void 0===t?void 0:t._id)===e&&(0,Gs.jsx)(Dh,{user:o.user})]})]}):(0,Gs.jsx)(Qh,{children:(0,Gs.jsx)(Jh,{children:"User not found"})})};var Zh=r(173),em=r.n(Zh),tm=r(161),rm=r.n(tm),nm=r(366),om=r.n(nm),im=r(123),am=r.n(im),sm="bodyAttributes",lm="htmlAttributes",um="titleAttributes",cm={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},dm=(Object.keys(cm).map((function(e){return cm[e]})),"charset"),fm="cssText",pm="href",hm="http-equiv",mm="innerHTML",gm="itemprop",vm="name",ym="property",bm="rel",xm="src",wm="target",_m={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},km="defaultTitle",Sm="defer",Em="encodeSpecialCharacters",Cm="onChangeClientState",jm="titleTemplate",Tm=Object.keys(_m).reduce((function(e,t){return e[_m[t]]=t,e}),{}),Om=[cm.NOSCRIPT,cm.SCRIPT,cm.STYLE],Rm="data-react-helmet",Am="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pm=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Lm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$m=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Nm=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},zm=function(e){var t=Um(e,cm.TITLE),r=Um(e,jm);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Um(e,km);return t||n||void 0},Im=function(e){return Um(e,Cm)||function(){}},Fm=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Lm({},e,t)}),{})},Dm=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[cm.BASE]})).map((function(e){return e[cm.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Mm=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&Vm("Helmet: "+e+' should be of type "Array". Instead found type "'+Am(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();-1===t.indexOf(l)||r===bm&&"canonical"===e[r].toLowerCase()||l===bm&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==mm&&s!==fm&&s!==gm||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=am()({},n[s],o[s]);n[s]=l}return e}),[]).reverse()},Um=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Bm=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){Bm(t)}),0)}}(),Wm=function(e){return clearTimeout(e)},Hm="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Bm:r.g.requestAnimationFrame||Bm,qm="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Wm:r.g.cancelAnimationFrame||Wm,Vm=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},Km=null,Ym=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,d=e.title,f=e.titleAttributes;Xm(cm.BODY,n),Xm(cm.HTML,o),Jm(d,f);var p={baseTag:Gm(cm.BASE,r),linkTags:Gm(cm.LINK,i),metaTags:Gm(cm.META,a),noscriptTags:Gm(cm.NOSCRIPT,s),scriptTags:Gm(cm.SCRIPT,u),styleTags:Gm(cm.STYLE,c)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,h,m)},Qm=function(e){return Array.isArray(e)?e.join(""):e},Jm=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=Qm(e)),Xm(cm.TITLE,t)},Xm=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Rm),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var c=i.indexOf(l);-1!==c&&i.splice(c,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);o.length===i.length?r.removeAttribute(Rm):r.getAttribute(Rm)!==a.join(",")&&r.setAttribute(Rm,a.join(","))}},Gm=function(e,t){var r=document.head||document.querySelector(cm.HEAD),n=r.querySelectorAll(e+"["+Rm+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===mm)r.innerHTML=t.innerHTML;else if(n===fm)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(Rm,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},Zm=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},eg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_m[r]||r]=e[r],t}),t)},tg=function(e,t,r){switch(e){case cm.TITLE:return{toComponent:function(){return function(e,t,r){var o,i=((o={key:t})[Rm]=!0,o),a=eg(r,i);return[n.createElement(cm.TITLE,a,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=Zm(r),i=Qm(t);return o?"<"+e+" "+Rm+'="true" '+o+">"+Nm(i,n)+"</"+e+">":"<"+e+" "+Rm+'="true">'+Nm(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case sm:case lm:return{toComponent:function(){return eg(t)},toString:function(){return Zm(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[Rm]=!0,o);return Object.keys(t).forEach((function(e){var r=_m[e]||e;if(r===mm||r===fm){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===mm||e===fm)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+Nm(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===Om.indexOf(e);return t+"<"+e+" "+Rm+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},rg=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,c=e.title,d=void 0===c?"":c,f=e.titleAttributes;return{base:tg(cm.BASE,t,n),bodyAttributes:tg(sm,r,n),htmlAttributes:tg(lm,o,n),link:tg(cm.LINK,i,n),meta:tg(cm.META,a,n),noscript:tg(cm.NOSCRIPT,s,n),script:tg(cm.SCRIPT,l,n),style:tg(cm.STYLE,u,n),title:tg(cm.TITLE,{title:d,titleAttributes:f},n)}},ng=function(e){var t,r;return r=t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!om()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case cm.SCRIPT:case cm.NOSCRIPT:return{innerHTML:t};case cm.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Lm({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Lm({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case cm.TITLE:return Lm({},o,((t={})[n.type]=a,t.titleAttributes=Lm({},i),t));case cm.BODY:return Lm({},o,{bodyAttributes:Lm({},i)});case cm.HTML:return Lm({},o,{htmlAttributes:Lm({},i)})}return Lm({},o,((r={})[n.type]=Lm({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Lm({},t);return Object.keys(e).forEach((function(t){var n;r=Lm({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Tm[r]||r]=e[r],t}),t)}($m(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case cm.LINK:case cm.META:case cm.NOSCRIPT:case cm.SCRIPT:case cm.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},r.prototype.render=function(){var t=this.props,r=t.children,o=$m(t,["children"]),i=Lm({},o);return r&&(i=this.mapChildrenToProps(r,i)),n.createElement(e,i)},Pm(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(n.Component),t.propTypes={base:em().object,bodyAttributes:em().object,children:em().oneOfType([em().arrayOf(em().node),em().node]),defaultTitle:em().string,defer:em().bool,encodeSpecialCharacters:em().bool,htmlAttributes:em().object,link:em().arrayOf(em().object),meta:em().arrayOf(em().object),noscript:em().arrayOf(em().object),onChangeClientState:em().func,script:em().arrayOf(em().object),style:em().arrayOf(em().object),title:em().string,titleAttributes:em().object,titleTemplate:em().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=rg({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(rm()((function(e){return{baseTag:Dm([pm,wm],e),bodyAttributes:Fm(sm,e),defer:Um(e,Sm),encode:Um(e,Em),htmlAttributes:Fm(lm,e),linkTags:Mm(cm.LINK,[bm,pm],e),metaTags:Mm(cm.META,[vm,dm,hm,ym,gm],e),noscriptTags:Mm(cm.NOSCRIPT,[mm],e),onChangeClientState:Im(e),scriptTags:Mm(cm.SCRIPT,[xm,mm],e),styleTags:Mm(cm.STYLE,[fm],e),title:zm(e),titleAttributes:Fm(um,e)}}),(function(e){Km&&qm(Km),e.defer?Km=Hm((function(){Ym(e,(function(){Km=null}))})):(Ym(e),Km=null)}),rg)((function(){return null})));ng.renderStatic=ng.rewind;!function(e){if(!e||"undefined"==typeof document)return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n');var og=e=>"number"==typeof e&&!isNaN(e),ig=e=>"string"==typeof e,ag=e=>"function"==typeof e,sg=e=>(0,n.isValidElement)(e)||ig(e)||ag(e)||og(e);function lg(e){let{enter:t,exit:r,appendPosition:o=!1,collapse:i=!0,collapseDuration:a=300}=e;return function(e){let{children:s,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f,playToast:p}=e,h=o?`${t}--${l}`:t,m=o?`${r}--${l}`:r,g=(0,n.useRef)(0);return(0,n.useLayoutEffect)((()=>{let e=d.current,t=h.split(" "),r=n=>{n.target===d.current&&(p(),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===g.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,n.useEffect)((()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,{scrollHeight:n,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)}))}))}(e,c,a):c()};f||(u?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))}),[f]),n.createElement(n.Fragment,null,s)}}var ug=1,cg=()=>""+ug++;var dg=new Map,fg=[],pg=new Set,hg=()=>dg.size>0;function mg(e,t){var r;if(t)return!(null==(r=dg.get(t))||!r.isToastActive(e));let n=!1;return dg.forEach((t=>{t.isToastActive(e)&&(n=!0)})),n}function gg(e){if(hg()){if(null==e||(e=>ig(e)||og(e))(e))dg.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){let t=dg.get(e.containerId);t?t.removeToast(e.id):dg.forEach((t=>{t.removeToast(e.id)}))}}else fg=fg.filter((t=>null!=e&&t.options.toastId!==e))}function vg(e,t){sg(e)&&(hg()||fg.push({content:e,options:t}),dg.forEach((r=>{r.buildToast(e,t)})))}function yg(e,t){dg.forEach((r=>{(null==t||null==t||!t.containerId||(null==t?void 0:t.containerId)===r.id)&&r.toggle(e,null==t?void 0:t.id)}))}function bg(e){return e&&(ig(e.toastId)||og(e.toastId))?e.toastId:cg()}function xg(e,t){return vg(e,t),t.toastId}function wg(e,t){return{...t,type:t&&t.type||e,toastId:bg(t)}}function _g(e){return(t,r)=>xg(t,wg(e,r))}function kg(e,t){return xg(e,wg("default",t))}kg.loading=(e,t)=>xg(e,wg("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),kg.promise=function(e,t,r){let n,{pending:o,error:i,success:a}=t;o&&(n=ig(o)?kg.loading(o,r):kg.loading(o.render,{...r,...o}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void kg.dismiss(n);let i={type:e,...s,...r,data:o},a=ig(t)?{render:t}:t;return n?kg.update(n,{...i,...a}):kg(a.render,{...i,...a}),o},u=ag(e)?e():e;return u.then((e=>l("success",a,e))).catch((e=>l("error",i,e))),u},kg.success=_g("success"),kg.info=_g("info"),kg.error=_g("error"),kg.warning=_g("warning"),kg.warn=kg.warning,kg.dark=(e,t)=>xg(e,wg("default",{theme:"dark",...t})),kg.dismiss=function(e){gg(e)},kg.clearWaitingQueue=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};dg.forEach((t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()}))},kg.isActive=mg,kg.update=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=((e,t)=>{let{containerId:r}=t;var n;return null==(n=dg.get(r||1))?void 0:n.toasts.get(e)})(e,t);if(r){let{props:n,content:o}=r,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:cg()};i.toastId!==e&&(i.staleId=e);let a=i.render||o;delete i.render,xg(a,i)}},kg.done=e=>{kg.update(e,{progress:1})},kg.onChange=function(e){return pg.add(e),()=>{pg.delete(e)}},kg.play=e=>yg(!0,e),kg.pause=e=>yg(!1,e);"undefined"!=typeof window?n.useLayoutEffect:n.useEffect;var Sg=function(e){return{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}};lg(Sg("bounce",!0)),lg(Sg("slide",!0)),lg(Sg("zoom")),lg(Sg("flip"));const Eg=e=>{if(!e)return console.warn("URL is empty or undefined"),"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`},Cg=Zn.div`
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 4px solid var(--danger);
  color: var(--danger);
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,jg=Zn.p`
  margin: 0;
  flex: 1;
`,Tg=Zn.button`
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
`,Og=e=>{let{message:t,onRetry:r}=e;return(0,Gs.jsxs)(Cg,{children:[(0,Gs.jsx)(Il,{size:20}),(0,Gs.jsx)(jg,{children:t||"Ocorreu um erro inesperado"}),r&&(0,Gs.jsxs)(Tg,{onClick:r,children:[(0,Gs.jsx)(Tl,{size:14}),"Tentar novamente"]})]})},Rg=Zn.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--background);
  color: var(--text);
`,Ag=Zn.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  background: var(--background);
  z-index: 10;
  padding-top: 10px;
`,Pg=Zn.button`
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
`,Lg=()=>{var e,t;const{id:r}=re(),o=te(),{user:i}=tl(),[a,s]=(0,n.useState)(null),[l,u]=(0,n.useState)(!0),[c,d]=(0,n.useState)(null),[f,p]=(0,n.useState)(!1),[h,m]=(0,n.useState)(!1),g=(0,n.useCallback)((async()=>{try{u(!0);const e=await wa.get(`/memes/${r}`);s(e.data)}catch(Ug){var e,t,n,o;console.error("Erro ao carregar meme:",Ug),d((null===(e=Ug.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Meme n\xe3o encontrado"),kg.error((null===(n=Ug.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message)||"Erro ao carregar meme")}finally{u(!1)}}),[r]),v=(0,n.useCallback)((async()=>{try{m(!0),await wa.delete(`/memes/${r}`),kg.success("Meme deletado com sucesso!"),o("/")}catch(Ug){var e,t;console.error("Erro ao deletar meme:",Ug),kg.error((null===(e=Ug.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Erro ao deletar meme")}finally{m(!1),p(!1)}}),[r,o]);return(0,n.useEffect)((()=>{g()}),[g]),l?(0,Gs.jsx)(Rg,{children:(0,Gs.jsx)(Nl,{})}):c?(0,Gs.jsx)(Rg,{children:(0,Gs.jsx)(Og,{message:c,onRetry:g})}):a?(0,Gs.jsxs)(Gs.Fragment,{children:[(0,Gs.jsxs)(ng,{children:[(0,Gs.jsxs)("title",{children:[a.caption?`${a.caption.substring(0,60)}...`:"Visualizar Meme"," | iFunny Clone"]}),(0,Gs.jsx)("meta",{name:"description",content:`Meme postado por @${null===(e=a.author)||void 0===e?void 0:e.username}`}),(0,Gs.jsx)("meta",{property:"og:title",content:a.caption||"Meme interessante"}),(0,Gs.jsx)("meta",{property:"og:description",content:`Meme postado por @${null===(t=a.author)||void 0===t?void 0:t.username}`}),(0,Gs.jsx)("meta",{property:"og:image",content:Eg(a.mediaUrl)}),(0,Gs.jsx)("meta",{property:"og:url",content:`${window.location.origin}/memes/${a._id}`})]}),(0,Gs.jsxs)(Rg,{children:[(0,Gs.jsx)(Ag,{children:(0,Gs.jsx)(Pg,{onClick:()=>o(-1),"aria-label":"Voltar",children:(0,Gs.jsx)(Fl,{})})}),(0,Gs.jsx)(Hd,{meme:a,onDelete:v,showCommentsInitially:!0})]})]}):(0,Gs.jsx)(Rg,{children:(0,Gs.jsx)(Og,{message:"Meme n\xe3o encontrado"})})},$g=Zn.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--background);
`,Ng=Zn.main`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: calc(60px + env(safe-area-inset-top)); // Navbar + status bar
  padding-bottom: env(safe-area-inset-bottom);
  scroll-behavior: smooth;
`,zg=Zn.div`
  height: var(--keyboard-height, 0px);
  transition: height 0.3s ease;
`,Ig=Zn.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-top: env(safe-area-inset-top);
  background: linear-gradient(135deg, #FF6B00 0%, #FF3D00 100%);
`;const Fg=function(){const[e,t]=(0,n.useState)(!0),r=(0,n.useRef)(0),o=(0,n.useRef)(),i=(0,n.useRef)(null),a=(0,n.useCallback)((()=>{var e;const n=(null===(e=o.current)||void 0===e?void 0:e.scrollTop)||0,a=n>r.current?"down":"up",s=Math.abs(n-r.current);i.current&&clearTimeout(i.current),s>5&&("down"===a&&n>60?t(!1):"up"===a&&t(!0)),r.current=n,i.current=setTimeout((()=>{i.current=null}),100)}),[]);return(0,n.useEffect)((()=>{const e=o.current;if(e)return e.addEventListener("scroll",a,{passive:!0}),()=>e.removeEventListener("scroll",a)}),[a]),(0,n.useEffect)((()=>(ol.Ii.isNativePlatform()&&(il.setBackgroundColor({color:"#FF6B00"}).catch(console.error),il.setStyle({style:rl.Light}).catch(console.error),il.setOverlaysWebView({overlay:!1}).catch(console.error),"web"!==ol.Ii.getPlatform()&&(Qu.setAccessoryBarVisible({isVisible:!0}),Qu.addListener("keyboardWillShow",(e=>{document.documentElement.style.setProperty("--keyboard-height",`${e.keyboardHeight}px`)})),Qu.addListener("keyboardWillHide",(()=>{document.documentElement.style.setProperty("--keyboard-height","0px")})))),()=>{"web"!==ol.Ii.getPlatform()&&Qu.removeAllListeners()})),[]),(0,Gs.jsx)(el,{children:(0,Gs.jsx)(fl,{children:(0,Gs.jsx)(tt,{children:(0,Gs.jsxs)(sl,{children:[(0,Gs.jsx)(ro,{}),(0,Gs.jsxs)($g,{children:[(0,Gs.jsx)(Ig,{children:(0,Gs.jsx)(Vu,{navbarVisible:e})}),(0,Gs.jsx)(Ng,{ref:o,children:(0,Gs.jsxs)(xe,{children:[(0,Gs.jsx)(ye,{path:"/",element:(0,Gs.jsx)(uf,{})}),(0,Gs.jsx)(ye,{path:"/memes/:id",element:(0,Gs.jsx)(Lg,{})}),(0,Gs.jsx)(ye,{path:"/login",element:(0,Gs.jsx)(vf,{})}),(0,Gs.jsx)(ye,{path:"/register",element:(0,Gs.jsx)(Cf,{})}),(0,Gs.jsx)(ye,{path:"/users/:userId",element:(0,Gs.jsx)(Gh,{})}),(0,Gs.jsx)(ye,{path:"/trending",element:(0,Gs.jsx)(lf,{})}),(0,Gs.jsx)(ye,{path:"/feed",element:(0,Gs.jsx)(zl,{children:(0,Gs.jsx)(Lf,{})})}),(0,Gs.jsx)(ye,{path:"/upload",element:(0,Gs.jsx)(zl,{children:(0,Gs.jsx)(Gf,{})})}),(0,Gs.jsx)(ye,{path:"*",element:(0,Gs.jsx)(ve,{to:"/"})})]})}),ol.Ii.isNativePlatform()&&(0,Gs.jsx)(zg,{})]})]})})})})},Dg=document.getElementById("root");(0,o.H)(Dg).render((0,Gs.jsx)(n.StrictMode,{children:(0,Gs.jsx)(Fg,{})}))})()})();
//# sourceMappingURL=main.79b0803e.js.map