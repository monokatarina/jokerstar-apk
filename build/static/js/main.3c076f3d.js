/*! For license information please see main.3c076f3d.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},123:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},161:(e,t,n)=>{"use strict";var r,o=n(43),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function c(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),c()},a.componentDidUpdate=function(){c()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",s),d}}},173:(e,t,n)=>{e.exports=n(497)()},175:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function u(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:k.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===i?"."+T(l,0):i,w(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),O(a,t,o,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+T(s=e[u],u);l+=O(s,t,o,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=O(s=s.value,t,o,c=i+T(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function R(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},L={transition:null},N={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)_.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>i(l,n))u<o&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<o&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,L(_);else{var t=r(c);null!==t&&N(w,t.startTime-e)}}function _(e,n){m=!1,g&&(g=!1,y(j),j=-1),h=!0;var i=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!O());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var s=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?f.callback=s:f===r(u)&&o(u),x(n)}else o(u);f=r(u)}if(null!==f)var l=!0;else{var d=r(c);null!==d&&N(w,d.startTime-n),l=!1}return l}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,S=!1,E=null,j=-1,C=5,T=-1;function O(){return!(t.unstable_now()-T<C)}function R(){if(null!==E){var e=t.unstable_now();T=e;var n=!0;try{n=E(!0,e)}finally{n?k():(S=!1,E=null)}}else S=!1}if("function"===typeof b)k=function(){b(R)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,A=P.port2;P.port1.onmessage=R,k=function(){A.postMessage(null)}}else k=function(){v(R,0)};function L(e){E=e,S||(S=!0,k())}function N(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,L(_))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(y(j),j=-1):g=!0,N(w,i-a))):(e.sortIndex=s,n(u,e),m||h||(m=!0,L(_))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},366:e=>{var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},391:(e,t,n)=>{"use strict";var r=n(950);t.H=r.createRoot,r.hydrateRoot},497:(e,t,n)=>{"use strict";var r=n(218);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},536:function(e,t,n){var r;e=n.nmd(e),function(){var o,i="Expected a function",a="__lodash_hash_undefined__",s="__lodash_placeholder__",l=16,u=32,c=64,d=128,f=256,p=1/0,h=9007199254740991,m=NaN,g=4294967295,v=[["ary",d],["bind",1],["bindKey",2],["curry",8],["curryRight",l],["flip",512],["partial",u],["partialRight",c],["rearg",f]],y="[object Arguments]",b="[object Array]",x="[object Boolean]",w="[object Date]",_="[object Error]",k="[object Function]",S="[object GeneratorFunction]",E="[object Map]",j="[object Number]",C="[object Object]",T="[object Promise]",O="[object RegExp]",R="[object Set]",P="[object String]",A="[object Symbol]",L="[object WeakMap]",N="[object ArrayBuffer]",$="[object DataView]",z="[object Float32Array]",M="[object Float64Array]",D="[object Int8Array]",I="[object Int16Array]",F="[object Int32Array]",U="[object Uint8Array]",B="[object Uint8ClampedArray]",W="[object Uint16Array]",H="[object Uint32Array]",q=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,K=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,Q=/[&<>"']/g,X=RegExp(Y.source),J=RegExp(Q.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,ee=/<%=([\s\S]+?)%>/g,te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ne=/^\w*$/,re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oe=/[\\^$.*+?()[\]{}|]/g,ie=RegExp(oe.source),ae=/^\s+/,se=/\s/,le=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,de=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fe=/[()=,{}\[\]\/\s]/,pe=/\\(\\)?/g,he=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,me=/\w*$/,ge=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,ye=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,xe=/^(?:0|[1-9]\d*)$/,we=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_e=/($^)/,ke=/['\n\r\u2028\u2029\\]/g,Se="\\ud800-\\udfff",Ee="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",je="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Te="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Re="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Pe="['\u2019]",Ae="["+Se+"]",Le="["+Re+"]",Ne="["+Ee+"]",$e="\\d+",ze="["+je+"]",Me="["+Ce+"]",De="[^"+Se+Re+$e+je+Ce+Te+"]",Ie="\\ud83c[\\udffb-\\udfff]",Fe="[^"+Se+"]",Ue="(?:\\ud83c[\\udde6-\\uddff]){2}",Be="[\\ud800-\\udbff][\\udc00-\\udfff]",We="["+Te+"]",He="\\u200d",qe="(?:"+Me+"|"+De+")",Ve="(?:"+We+"|"+De+")",Ke="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",Ye="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",Qe="(?:"+Ne+"|"+Ie+")"+"?",Xe="["+Oe+"]?",Je=Xe+Qe+("(?:"+He+"(?:"+[Fe,Ue,Be].join("|")+")"+Xe+Qe+")*"),Ge="(?:"+[ze,Ue,Be].join("|")+")"+Je,Ze="(?:"+[Fe+Ne+"?",Ne,Ue,Be,Ae].join("|")+")",et=RegExp(Pe,"g"),tt=RegExp(Ne,"g"),nt=RegExp(Ie+"(?="+Ie+")|"+Ze+Je,"g"),rt=RegExp([We+"?"+Me+"+"+Ke+"(?="+[Le,We,"$"].join("|")+")",Ve+"+"+Ye+"(?="+[Le,We+qe,"$"].join("|")+")",We+"?"+qe+"+"+Ke,We+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$e,Ge].join("|"),"g"),ot=RegExp("["+He+Se+Ee+Oe+"]"),it=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,at=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],st=-1,lt={};lt[z]=lt[M]=lt[D]=lt[I]=lt[F]=lt[U]=lt[B]=lt[W]=lt[H]=!0,lt[y]=lt[b]=lt[N]=lt[x]=lt[$]=lt[w]=lt[_]=lt[k]=lt[E]=lt[j]=lt[C]=lt[O]=lt[R]=lt[P]=lt[L]=!1;var ut={};ut[y]=ut[b]=ut[N]=ut[$]=ut[x]=ut[w]=ut[z]=ut[M]=ut[D]=ut[I]=ut[F]=ut[E]=ut[j]=ut[C]=ut[O]=ut[R]=ut[P]=ut[A]=ut[U]=ut[B]=ut[W]=ut[H]=!0,ut[_]=ut[k]=ut[L]=!1;var ct={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dt=parseFloat,ft=parseInt,pt="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,ht="object"==typeof self&&self&&self.Object===Object&&self,mt=pt||ht||Function("return this")(),gt=t&&!t.nodeType&&t,vt=gt&&e&&!e.nodeType&&e,yt=vt&&vt.exports===gt,bt=yt&&pt.process,xt=function(){try{var e=vt&&vt.require&&vt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(t){}}(),wt=xt&&xt.isArrayBuffer,_t=xt&&xt.isDate,kt=xt&&xt.isMap,St=xt&&xt.isRegExp,Et=xt&&xt.isSet,jt=xt&&xt.isTypedArray;function Ct(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Tt(e,t,n,r){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(r,a,n(a),e)}return r}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Rt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Pt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function At(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function Lt(e,t){return!!(null==e?0:e.length)&&Wt(e,t,0)>-1}function Nt(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}function $t(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}function zt(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function Mt(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}function Dt(e,t,n,r){var o=null==e?0:e.length;for(r&&o&&(n=e[--o]);o--;)n=t(n,e[o],o,e);return n}function It(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Ft=Kt("length");function Ut(e,t,n){var r;return n(e,(function(e,n,o){if(t(e,n,o))return r=n,!1})),r}function Bt(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Wt(e,t,n){return t===t?function(e,t,n){var r=n-1,o=e.length;for(;++r<o;)if(e[r]===t)return r;return-1}(e,t,n):Bt(e,qt,n)}function Ht(e,t,n,r){for(var o=n-1,i=e.length;++o<i;)if(r(e[o],t))return o;return-1}function qt(e){return e!==e}function Vt(e,t){var n=null==e?0:e.length;return n?Xt(e,t)/n:m}function Kt(e){return function(t){return null==t?o:t[e]}}function Yt(e){return function(t){return null==e?o:e[t]}}function Qt(e,t,n,r,o){return o(e,(function(e,o,i){n=r?(r=!1,e):t(n,e,o,i)})),n}function Xt(e,t){for(var n,r=-1,i=e.length;++r<i;){var a=t(e[r]);a!==o&&(n=n===o?a:n+a)}return n}function Jt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Gt(e){return e?e.slice(0,gn(e)+1).replace(ae,""):e}function Zt(e){return function(t){return e(t)}}function en(e,t){return $t(t,(function(t){return e[t]}))}function tn(e,t){return e.has(t)}function nn(e,t){for(var n=-1,r=e.length;++n<r&&Wt(t,e[n],0)>-1;);return n}function rn(e,t){for(var n=e.length;n--&&Wt(t,e[n],0)>-1;);return n}var on=Yt({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),an=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function sn(e){return"\\"+ct[e]}function ln(e){return ot.test(e)}function un(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function cn(e,t){return function(n){return e(t(n))}}function dn(e,t){for(var n=-1,r=e.length,o=0,i=[];++n<r;){var a=e[n];a!==t&&a!==s||(e[n]=s,i[o++]=n)}return i}function fn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function pn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function hn(e){return ln(e)?function(e){var t=nt.lastIndex=0;for(;nt.test(e);)++t;return t}(e):Ft(e)}function mn(e){return ln(e)?function(e){return e.match(nt)||[]}(e):function(e){return e.split("")}(e)}function gn(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var vn=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var yn=function e(t){var n=(t=null==t?mt:yn.defaults(mt.Object(),t,yn.pick(mt,at))).Array,r=t.Date,se=t.Error,Se=t.Function,Ee=t.Math,je=t.Object,Ce=t.RegExp,Te=t.String,Oe=t.TypeError,Re=n.prototype,Pe=Se.prototype,Ae=je.prototype,Le=t["__core-js_shared__"],Ne=Pe.toString,$e=Ae.hasOwnProperty,ze=0,Me=function(){var e=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),De=Ae.toString,Ie=Ne.call(je),Fe=mt._,Ue=Ce("^"+Ne.call($e).replace(oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Be=yt?t.Buffer:o,We=t.Symbol,He=t.Uint8Array,qe=Be?Be.allocUnsafe:o,Ve=cn(je.getPrototypeOf,je),Ke=je.create,Ye=Ae.propertyIsEnumerable,Qe=Re.splice,Xe=We?We.isConcatSpreadable:o,Je=We?We.iterator:o,Ge=We?We.toStringTag:o,Ze=function(){try{var e=fi(je,"defineProperty");return e({},"",{}),e}catch(t){}}(),nt=t.clearTimeout!==mt.clearTimeout&&t.clearTimeout,ot=r&&r.now!==mt.Date.now&&r.now,ct=t.setTimeout!==mt.setTimeout&&t.setTimeout,pt=Ee.ceil,ht=Ee.floor,gt=je.getOwnPropertySymbols,vt=Be?Be.isBuffer:o,bt=t.isFinite,xt=Re.join,Ft=cn(je.keys,je),Yt=Ee.max,bn=Ee.min,xn=r.now,wn=t.parseInt,_n=Ee.random,kn=Re.reverse,Sn=fi(t,"DataView"),En=fi(t,"Map"),jn=fi(t,"Promise"),Cn=fi(t,"Set"),Tn=fi(t,"WeakMap"),On=fi(je,"create"),Rn=Tn&&new Tn,Pn={},An=Di(Sn),Ln=Di(En),Nn=Di(jn),$n=Di(Cn),zn=Di(Tn),Mn=We?We.prototype:o,Dn=Mn?Mn.valueOf:o,In=Mn?Mn.toString:o;function Fn(e){if(ts(e)&&!Ha(e)&&!(e instanceof Hn)){if(e instanceof Wn)return e;if($e.call(e,"__wrapped__"))return Ii(e)}return new Wn(e)}var Un=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=o,n}}();function Bn(){}function Wn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}function Hn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function qn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Vn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kn;++t<n;)this.add(e[t])}function Qn(e){var t=this.__data__=new Vn(e);this.size=t.size}function Xn(e,t){var n=Ha(e),r=!n&&Wa(e),o=!n&&!r&&Ya(e),i=!n&&!r&&!o&&us(e),a=n||r||o||i,s=a?Jt(e.length,Te):[],l=s.length;for(var u in e)!t&&!$e.call(e,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||bi(u,l))||s.push(u);return s}function Jn(e){var t=e.length;return t?e[Yr(0,t-1)]:o}function Gn(e,t){return $i(Ro(e),sr(t,0,e.length))}function Zn(e){return $i(Ro(e))}function er(e,t,n){(n!==o&&!Fa(e[t],n)||n===o&&!(t in e))&&ir(e,t,n)}function tr(e,t,n){var r=e[t];$e.call(e,t)&&Fa(r,n)&&(n!==o||t in e)||ir(e,t,n)}function nr(e,t){for(var n=e.length;n--;)if(Fa(e[n][0],t))return n;return-1}function rr(e,t,n,r){return fr(e,(function(e,o,i){t(r,e,n(e),i)})),r}function or(e,t){return e&&Po(t,Ps(t),e)}function ir(e,t,n){"__proto__"==t&&Ze?Ze(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ar(e,t){for(var r=-1,i=t.length,a=n(i),s=null==e;++r<i;)a[r]=s?o:js(e,t[r]);return a}function sr(e,t,n){return e===e&&(n!==o&&(e=e<=n?e:n),t!==o&&(e=e>=t?e:t)),e}function lr(e,t,n,r,i,a){var s,l=1&t,u=2&t,c=4&t;if(n&&(s=i?n(e,r,i,a):n(e)),s!==o)return s;if(!es(e))return e;var d=Ha(e);if(d){if(s=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&$e.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!l)return Ro(e,s)}else{var f=mi(e),p=f==k||f==S;if(Ya(e))return So(e,l);if(f==C||f==y||p&&!i){if(s=u||p?{}:vi(e),!l)return u?function(e,t){return Po(e,hi(e),t)}(e,function(e,t){return e&&Po(t,As(t),e)}(s,e)):function(e,t){return Po(e,pi(e),t)}(e,or(s,e))}else{if(!ut[f])return i?e:{};s=function(e,t,n){var r=e.constructor;switch(t){case N:return Eo(e);case x:case w:return new r(+e);case $:return function(e,t){var n=t?Eo(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case z:case M:case D:case I:case F:case U:case B:case W:case H:return jo(e,n);case E:return new r;case j:case P:return new r(e);case O:return function(e){var t=new e.constructor(e.source,me.exec(e));return t.lastIndex=e.lastIndex,t}(e);case R:return new r;case A:return o=e,Dn?je(Dn.call(o)):{}}var o}(e,f,l)}}a||(a=new Qn);var h=a.get(e);if(h)return h;a.set(e,s),as(e)?e.forEach((function(r){s.add(lr(r,t,n,r,e,a))})):ns(e)&&e.forEach((function(r,o){s.set(o,lr(r,t,n,o,e,a))}));var m=d?o:(c?u?ii:oi:u?As:Ps)(e);return Ot(m||e,(function(r,o){m&&(r=e[o=r]),tr(s,o,lr(r,t,n,o,e,a))})),s}function ur(e,t,n){var r=n.length;if(null==e)return!r;for(e=je(e);r--;){var i=n[r],a=t[i],s=e[i];if(s===o&&!(i in e)||!a(s))return!1}return!0}function cr(e,t,n){if("function"!=typeof e)throw new Oe(i);return Pi((function(){e.apply(o,n)}),t)}function dr(e,t,n,r){var o=-1,i=Lt,a=!0,s=e.length,l=[],u=t.length;if(!s)return l;n&&(t=$t(t,Zt(n))),r?(i=Nt,a=!1):t.length>=200&&(i=tn,a=!1,t=new Yn(t));e:for(;++o<s;){var c=e[o],d=null==n?c:n(c);if(c=r||0!==c?c:0,a&&d===d){for(var f=u;f--;)if(t[f]===d)continue e;l.push(c)}else i(t,d,r)||l.push(c)}return l}Fn.templateSettings={escape:G,evaluate:Z,interpolate:ee,variable:"",imports:{_:Fn}},Fn.prototype=Bn.prototype,Fn.prototype.constructor=Fn,Wn.prototype=Un(Bn.prototype),Wn.prototype.constructor=Wn,Hn.prototype=Un(Bn.prototype),Hn.prototype.constructor=Hn,qn.prototype.clear=function(){this.__data__=On?On(null):{},this.size=0},qn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},qn.prototype.get=function(e){var t=this.__data__;if(On){var n=t[e];return n===a?o:n}return $e.call(t,e)?t[e]:o},qn.prototype.has=function(e){var t=this.__data__;return On?t[e]!==o:$e.call(t,e)},qn.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=On&&t===o?a:t,this},Vn.prototype.clear=function(){this.__data__=[],this.size=0},Vn.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0)&&(n==t.length-1?t.pop():Qe.call(t,n,1),--this.size,!0)},Vn.prototype.get=function(e){var t=this.__data__,n=nr(t,e);return n<0?o:t[n][1]},Vn.prototype.has=function(e){return nr(this.__data__,e)>-1},Vn.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Kn.prototype.clear=function(){this.size=0,this.__data__={hash:new qn,map:new(En||Vn),string:new qn}},Kn.prototype.delete=function(e){var t=ci(this,e).delete(e);return this.size-=t?1:0,t},Kn.prototype.get=function(e){return ci(this,e).get(e)},Kn.prototype.has=function(e){return ci(this,e).has(e)},Kn.prototype.set=function(e,t){var n=ci(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Yn.prototype.add=Yn.prototype.push=function(e){return this.__data__.set(e,a),this},Yn.prototype.has=function(e){return this.__data__.has(e)},Qn.prototype.clear=function(){this.__data__=new Vn,this.size=0},Qn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Qn.prototype.get=function(e){return this.__data__.get(e)},Qn.prototype.has=function(e){return this.__data__.has(e)},Qn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Vn){var r=n.__data__;if(!En||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};var fr=No(xr),pr=No(wr,!0);function hr(e,t){var n=!0;return fr(e,(function(e,r,o){return n=!!t(e,r,o)})),n}function mr(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],s=t(a);if(null!=s&&(l===o?s===s&&!ls(s):n(s,l)))var l=s,u=a}return u}function gr(e,t){var n=[];return fr(e,(function(e,r,o){t(e,r,o)&&n.push(e)})),n}function vr(e,t,n,r,o){var i=-1,a=e.length;for(n||(n=yi),o||(o=[]);++i<a;){var s=e[i];t>0&&n(s)?t>1?vr(s,t-1,n,r,o):zt(o,s):r||(o[o.length]=s)}return o}var yr=$o(),br=$o(!0);function xr(e,t){return e&&yr(e,t,Ps)}function wr(e,t){return e&&br(e,t,Ps)}function _r(e,t){return At(t,(function(t){return Ja(e[t])}))}function kr(e,t){for(var n=0,r=(t=xo(t,e)).length;null!=e&&n<r;)e=e[Mi(t[n++])];return n&&n==r?e:o}function Sr(e,t,n){var r=t(e);return Ha(e)?r:zt(r,n(e))}function Er(e){return null==e?e===o?"[object Undefined]":"[object Null]":Ge&&Ge in je(e)?function(e){var t=$e.call(e,Ge),n=e[Ge];try{e[Ge]=o;var r=!0}catch(a){}var i=De.call(e);r&&(t?e[Ge]=n:delete e[Ge]);return i}(e):function(e){return De.call(e)}(e)}function jr(e,t){return e>t}function Cr(e,t){return null!=e&&$e.call(e,t)}function Tr(e,t){return null!=e&&t in je(e)}function Or(e,t,r){for(var i=r?Nt:Lt,a=e[0].length,s=e.length,l=s,u=n(s),c=1/0,d=[];l--;){var f=e[l];l&&t&&(f=$t(f,Zt(t))),c=bn(f.length,c),u[l]=!r&&(t||a>=120&&f.length>=120)?new Yn(l&&f):o}f=e[0];var p=-1,h=u[0];e:for(;++p<a&&d.length<c;){var m=f[p],g=t?t(m):m;if(m=r||0!==m?m:0,!(h?tn(h,g):i(d,g,r))){for(l=s;--l;){var v=u[l];if(!(v?tn(v,g):i(e[l],g,r)))continue e}h&&h.push(g),d.push(m)}}return d}function Rr(e,t,n){var r=null==(e=Ti(e,t=xo(t,e)))?e:e[Mi(Xi(t))];return null==r?o:Ct(r,e,n)}function Pr(e){return ts(e)&&Er(e)==y}function Ar(e,t,n,r,i){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!==e&&t!==t:function(e,t,n,r,i,a){var s=Ha(e),l=Ha(t),u=s?b:mi(e),c=l?b:mi(t),d=(u=u==y?C:u)==C,f=(c=c==y?C:c)==C,p=u==c;if(p&&Ya(e)){if(!Ya(t))return!1;s=!0,d=!1}if(p&&!d)return a||(a=new Qn),s||us(e)?ni(e,t,n,r,i,a):function(e,t,n,r,o,i,a){switch(n){case $:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case N:return!(e.byteLength!=t.byteLength||!i(new He(e),new He(t)));case x:case w:case j:return Fa(+e,+t);case _:return e.name==t.name&&e.message==t.message;case O:case P:return e==t+"";case E:var s=un;case R:var l=1&r;if(s||(s=fn),e.size!=t.size&&!l)return!1;var u=a.get(e);if(u)return u==t;r|=2,a.set(e,t);var c=ni(s(e),s(t),r,o,i,a);return a.delete(e),c;case A:if(Dn)return Dn.call(e)==Dn.call(t)}return!1}(e,t,u,n,r,i,a);if(!(1&n)){var h=d&&$e.call(e,"__wrapped__"),m=f&&$e.call(t,"__wrapped__");if(h||m){var g=h?e.value():e,v=m?t.value():t;return a||(a=new Qn),i(g,v,n,r,a)}}if(!p)return!1;return a||(a=new Qn),function(e,t,n,r,i,a){var s=1&n,l=oi(e),u=l.length,c=oi(t),d=c.length;if(u!=d&&!s)return!1;var f=u;for(;f--;){var p=l[f];if(!(s?p in t:$e.call(t,p)))return!1}var h=a.get(e),m=a.get(t);if(h&&m)return h==t&&m==e;var g=!0;a.set(e,t),a.set(t,e);var v=s;for(;++f<u;){var y=e[p=l[f]],b=t[p];if(r)var x=s?r(b,y,p,t,e,a):r(y,b,p,e,t,a);if(!(x===o?y===b||i(y,b,n,r,a):x)){g=!1;break}v||(v="constructor"==p)}if(g&&!v){var w=e.constructor,_=t.constructor;w==_||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof _&&_ instanceof _||(g=!1)}return a.delete(e),a.delete(t),g}(e,t,n,r,i,a)}(e,t,n,r,Ar,i))}function Lr(e,t,n,r){var i=n.length,a=i,s=!r;if(null==e)return!a;for(e=je(e);i--;){var l=n[i];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<a;){var u=(l=n[i])[0],c=e[u],d=l[1];if(s&&l[2]){if(c===o&&!(u in e))return!1}else{var f=new Qn;if(r)var p=r(c,d,u,e,t,f);if(!(p===o?Ar(d,c,3,r,f):p))return!1}}return!0}function Nr(e){return!(!es(e)||(t=e,Me&&Me in t))&&(Ja(e)?Ue:ye).test(Di(e));var t}function $r(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Ha(e)?Ur(e[0],e[1]):Fr(e):fl(e)}function zr(e){if(!Si(e))return Ft(e);var t=[];for(var n in je(e))$e.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Mr(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in je(e))t.push(n);return t}(e);var t=Si(e),n=[];for(var r in e)("constructor"!=r||!t&&$e.call(e,r))&&n.push(r);return n}function Dr(e,t){return e<t}function Ir(e,t){var r=-1,o=Va(e)?n(e.length):[];return fr(e,(function(e,n,i){o[++r]=t(e,n,i)})),o}function Fr(e){var t=di(e);return 1==t.length&&t[0][2]?ji(t[0][0],t[0][1]):function(n){return n===e||Lr(n,e,t)}}function Ur(e,t){return wi(e)&&Ei(t)?ji(Mi(e),t):function(n){var r=js(n,e);return r===o&&r===t?Cs(n,e):Ar(t,r,3)}}function Br(e,t,n,r,i){e!==t&&yr(t,(function(a,s){if(i||(i=new Qn),es(a))!function(e,t,n,r,i,a,s){var l=Oi(e,n),u=Oi(t,n),c=s.get(u);if(c)return void er(e,n,c);var d=a?a(l,u,n+"",e,t,s):o,f=d===o;if(f){var p=Ha(u),h=!p&&Ya(u),m=!p&&!h&&us(u);d=u,p||h||m?Ha(l)?d=l:Ka(l)?d=Ro(l):h?(f=!1,d=So(u,!0)):m?(f=!1,d=jo(u,!0)):d=[]:os(u)||Wa(u)?(d=l,Wa(l)?d=vs(l):es(l)&&!Ja(l)||(d=vi(u))):f=!1}f&&(s.set(u,d),i(d,u,r,a,s),s.delete(u));er(e,n,d)}(e,t,s,n,Br,r,i);else{var l=r?r(Oi(e,s),a,s+"",e,t,i):o;l===o&&(l=a),er(e,s,l)}}),As)}function Wr(e,t){var n=e.length;if(n)return bi(t+=t<0?n:0,n)?e[t]:o}function Hr(e,t,n){t=t.length?$t(t,(function(e){return Ha(e)?function(t){return kr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=$t(t,Zt(ui()));var o=Ir(e,(function(e,n,o){var i=$t(t,(function(t){return t(e)}));return{criteria:i,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(o,(function(e,t){return function(e,t,n){var r=-1,o=e.criteria,i=t.criteria,a=o.length,s=n.length;for(;++r<a;){var l=Co(o[r],i[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function qr(e,t,n){for(var r=-1,o=t.length,i={};++r<o;){var a=t[r],s=kr(e,a);n(s,a)&&Zr(i,xo(a,e),s)}return i}function Vr(e,t,n,r){var o=r?Ht:Wt,i=-1,a=t.length,s=e;for(e===t&&(t=Ro(t)),n&&(s=$t(e,Zt(n)));++i<a;)for(var l=0,u=t[i],c=n?n(u):u;(l=o(s,c,l,r))>-1;)s!==e&&Qe.call(s,l,1),Qe.call(e,l,1);return e}function Kr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var o=t[n];if(n==r||o!==i){var i=o;bi(o)?Qe.call(e,o,1):fo(e,o)}}return e}function Yr(e,t){return e+ht(_n()*(t-e+1))}function Qr(e,t){var n="";if(!e||t<1||t>h)return n;do{t%2&&(n+=e),(t=ht(t/2))&&(e+=e)}while(t);return n}function Xr(e,t){return Ai(Ci(e,t,rl),e+"")}function Jr(e){return Jn(Fs(e))}function Gr(e,t){var n=Fs(e);return $i(n,sr(t,0,n.length))}function Zr(e,t,n,r){if(!es(e))return e;for(var i=-1,a=(t=xo(t,e)).length,s=a-1,l=e;null!=l&&++i<a;){var u=Mi(t[i]),c=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(i!=s){var d=l[u];(c=r?r(d,u,l):o)===o&&(c=es(d)?d:bi(t[i+1])?[]:{})}tr(l,u,c),l=l[u]}return e}var eo=Rn?function(e,t){return Rn.set(e,t),e}:rl,to=Ze?function(e,t){return Ze(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function no(e){return $i(Fs(e))}function ro(e,t,r){var o=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var a=n(i);++o<i;)a[o]=e[o+t];return a}function oo(e,t){var n;return fr(e,(function(e,r,o){return!(n=t(e,r,o))})),!!n}function io(e,t,n){var r=0,o=null==e?r:e.length;if("number"==typeof t&&t===t&&o<=2147483647){for(;r<o;){var i=r+o>>>1,a=e[i];null!==a&&!ls(a)&&(n?a<=t:a<t)?r=i+1:o=i}return o}return ao(e,t,rl,n)}function ao(e,t,n,r){var i=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!==t,l=null===t,u=ls(t),c=t===o;i<a;){var d=ht((i+a)/2),f=n(e[d]),p=f!==o,h=null===f,m=f===f,g=ls(f);if(s)var v=r||m;else v=c?m&&(r||p):l?m&&p&&(r||!h):u?m&&p&&!h&&(r||!g):!h&&!g&&(r?f<=t:f<t);v?i=d+1:a=d}return bn(a,4294967294)}function so(e,t){for(var n=-1,r=e.length,o=0,i=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!Fa(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?m:+e}function uo(e){if("string"==typeof e)return e;if(Ha(e))return $t(e,uo)+"";if(ls(e))return In?In.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function co(e,t,n){var r=-1,o=Lt,i=e.length,a=!0,s=[],l=s;if(n)a=!1,o=Nt;else if(i>=200){var u=t?null:Xo(e);if(u)return fn(u);a=!1,o=tn,l=new Yn}else l=t?[]:s;e:for(;++r<i;){var c=e[r],d=t?t(c):c;if(c=n||0!==c?c:0,a&&d===d){for(var f=l.length;f--;)if(l[f]===d)continue e;t&&l.push(d),s.push(c)}else o(l,d,n)||(l!==s&&l.push(d),s.push(c))}return s}function fo(e,t){return null==(e=Ti(e,t=xo(t,e)))||delete e[Mi(Xi(t))]}function po(e,t,n,r){return Zr(e,t,n(kr(e,t)),r)}function ho(e,t,n,r){for(var o=e.length,i=r?o:-1;(r?i--:++i<o)&&t(e[i],i,e););return n?ro(e,r?0:i,r?i+1:o):ro(e,r?i+1:0,r?o:i)}function mo(e,t){var n=e;return n instanceof Hn&&(n=n.value()),Mt(t,(function(e,t){return t.func.apply(t.thisArg,zt([e],t.args))}),n)}function go(e,t,r){var o=e.length;if(o<2)return o?co(e[0]):[];for(var i=-1,a=n(o);++i<o;)for(var s=e[i],l=-1;++l<o;)l!=i&&(a[i]=dr(a[i]||s,e[l],t,r));return co(vr(a,1),t,r)}function vo(e,t,n){for(var r=-1,i=e.length,a=t.length,s={};++r<i;){var l=r<a?t[r]:o;n(s,e[r],l)}return s}function yo(e){return Ka(e)?e:[]}function bo(e){return"function"==typeof e?e:rl}function xo(e,t){return Ha(e)?e:wi(e,t)?[e]:zi(ys(e))}var wo=Xr;function _o(e,t,n){var r=e.length;return n=n===o?r:n,!t&&n>=r?e:ro(e,t,n)}var ko=nt||function(e){return mt.clearTimeout(e)};function So(e,t){if(t)return e.slice();var n=e.length,r=qe?qe(n):new e.constructor(n);return e.copy(r),r}function Eo(e){var t=new e.constructor(e.byteLength);return new He(t).set(new He(e)),t}function jo(e,t){var n=t?Eo(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Co(e,t){if(e!==t){var n=e!==o,r=null===e,i=e===e,a=ls(e),s=t!==o,l=null===t,u=t===t,c=ls(t);if(!l&&!c&&!a&&e>t||a&&s&&u&&!l&&!c||r&&s&&u||!n&&u||!i)return 1;if(!r&&!a&&!c&&e<t||c&&n&&i&&!r&&!a||l&&n&&i||!s&&i||!u)return-1}return 0}function To(e,t,r,o){for(var i=-1,a=e.length,s=r.length,l=-1,u=t.length,c=Yt(a-s,0),d=n(u+c),f=!o;++l<u;)d[l]=t[l];for(;++i<s;)(f||i<a)&&(d[r[i]]=e[i]);for(;c--;)d[l++]=e[i++];return d}function Oo(e,t,r,o){for(var i=-1,a=e.length,s=-1,l=r.length,u=-1,c=t.length,d=Yt(a-l,0),f=n(d+c),p=!o;++i<d;)f[i]=e[i];for(var h=i;++u<c;)f[h+u]=t[u];for(;++s<l;)(p||i<a)&&(f[h+r[s]]=e[i++]);return f}function Ro(e,t){var r=-1,o=e.length;for(t||(t=n(o));++r<o;)t[r]=e[r];return t}function Po(e,t,n,r){var i=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var l=t[a],u=r?r(n[l],e[l],l,n,e):o;u===o&&(u=e[l]),i?ir(n,l,u):tr(n,l,u)}return n}function Ao(e,t){return function(n,r){var o=Ha(n)?Tt:rr,i=t?t():{};return o(n,e,ui(r,2),i)}}function Lo(e){return Xr((function(t,n){var r=-1,i=n.length,a=i>1?n[i-1]:o,s=i>2?n[2]:o;for(a=e.length>3&&"function"==typeof a?(i--,a):o,s&&xi(n[0],n[1],s)&&(a=i<3?o:a,i=1),t=je(t);++r<i;){var l=n[r];l&&e(t,l,r,a)}return t}))}function No(e,t){return function(n,r){if(null==n)return n;if(!Va(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=je(n);(t?i--:++i<o)&&!1!==r(a[i],i,a););return n}}function $o(e){return function(t,n,r){for(var o=-1,i=je(t),a=r(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===n(i[l],l,i))break}return t}}function zo(e){return function(t){var n=ln(t=ys(t))?mn(t):o,r=n?n[0]:t.charAt(0),i=n?_o(n,1).join(""):t.slice(1);return r[e]()+i}}function Mo(e){return function(t){return Mt(Js(Ws(t).replace(et,"")),e,"")}}function Do(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Un(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Io(e){return function(t,n,r){var i=je(t);if(!Va(t)){var a=ui(n,3);t=Ps(t),n=function(e){return a(i[e],e,i)}}var s=e(t,n,r);return s>-1?i[a?t[s]:s]:o}}function Fo(e){return ri((function(t){var n=t.length,r=n,a=Wn.prototype.thru;for(e&&t.reverse();r--;){var s=t[r];if("function"!=typeof s)throw new Oe(i);if(a&&!l&&"wrapper"==si(s))var l=new Wn([],!0)}for(r=l?r:n;++r<n;){var u=si(s=t[r]),c="wrapper"==u?ai(s):o;l=c&&_i(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[si(c[0])].apply(l,c[3]):1==s.length&&_i(s)?l[u]():l.thru(s)}return function(){var e=arguments,r=e[0];if(l&&1==e.length&&Ha(r))return l.plant(r).value();for(var o=0,i=n?t[o].apply(this,e):r;++o<n;)i=t[o].call(this,i);return i}}))}function Uo(e,t,r,i,a,s,l,u,c,f){var p=t&d,h=1&t,m=2&t,g=24&t,v=512&t,y=m?o:Do(e);return function d(){for(var b=arguments.length,x=n(b),w=b;w--;)x[w]=arguments[w];if(g)var _=li(d),k=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(x,_);if(i&&(x=To(x,i,a,g)),s&&(x=Oo(x,s,l,g)),b-=k,g&&b<f){var S=dn(x,_);return Yo(e,t,Uo,d.placeholder,r,x,S,u,c,f-b)}var E=h?r:this,j=m?E[e]:e;return b=x.length,u?x=function(e,t){var n=e.length,r=bn(t.length,n),i=Ro(e);for(;r--;){var a=t[r];e[r]=bi(a,n)?i[a]:o}return e}(x,u):v&&b>1&&x.reverse(),p&&c<b&&(x.length=c),this&&this!==mt&&this instanceof d&&(j=y||Do(j)),j.apply(E,x)}}function Bo(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,o,i){t(r,n(e),o,i)})),r}(n,e,t(r),{})}}function Wo(e,t){return function(n,r){var i;if(n===o&&r===o)return t;if(n!==o&&(i=n),r!==o){if(i===o)return r;"string"==typeof n||"string"==typeof r?(n=uo(n),r=uo(r)):(n=lo(n),r=lo(r)),i=e(n,r)}return i}}function Ho(e){return ri((function(t){return t=$t(t,Zt(ui())),Xr((function(n){var r=this;return e(t,(function(e){return Ct(e,r,n)}))}))}))}function qo(e,t){var n=(t=t===o?" ":uo(t)).length;if(n<2)return n?Qr(t,e):t;var r=Qr(t,pt(e/hn(t)));return ln(t)?_o(mn(r),0,e).join(""):r.slice(0,e)}function Vo(e){return function(t,r,i){return i&&"number"!=typeof i&&xi(t,r,i)&&(r=i=o),t=ps(t),r===o?(r=t,t=0):r=ps(r),function(e,t,r,o){for(var i=-1,a=Yt(pt((t-e)/(r||1)),0),s=n(a);a--;)s[o?a:++i]=e,e+=r;return s}(t,r,i=i===o?t<r?1:-1:ps(i),e)}}function Ko(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=gs(t),n=gs(n)),e(t,n)}}function Yo(e,t,n,r,i,a,s,l,d,f){var p=8&t;t|=p?u:c,4&(t&=~(p?c:u))||(t&=-4);var h=[e,t,i,p?a:o,p?s:o,p?o:a,p?o:s,l,d,f],m=n.apply(o,h);return _i(e)&&Ri(m,h),m.placeholder=r,Li(m,e,t)}function Qo(e){var t=Ee[e];return function(e,n){if(e=gs(e),(n=null==n?0:bn(hs(n),292))&&bt(e)){var r=(ys(e)+"e").split("e");return+((r=(ys(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Xo=Cn&&1/fn(new Cn([,-0]))[1]==p?function(e){return new Cn(e)}:ll;function Jo(e){return function(t){var n=mi(t);return n==E?un(t):n==R?pn(t):function(e,t){return $t(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Go(e,t,r,a,p,h,m,g){var v=2&t;if(!v&&"function"!=typeof e)throw new Oe(i);var y=a?a.length:0;if(y||(t&=-97,a=p=o),m=m===o?m:Yt(hs(m),0),g=g===o?g:hs(g),y-=p?p.length:0,t&c){var b=a,x=p;a=p=o}var w=v?o:ai(e),_=[e,t,r,a,p,b,x,h,m,g];if(w&&function(e,t){var n=e[1],r=t[1],o=n|r,i=o<131,a=r==d&&8==n||r==d&&n==f&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!i&&!a)return e;1&r&&(e[2]=t[2],o|=1&n?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?To(u,l,t[4]):l,e[4]=u?dn(e[3],s):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Oo(u,l,t[6]):l,e[6]=u?dn(e[5],s):t[6]);(l=t[7])&&(e[7]=l);r&d&&(e[8]=null==e[8]?t[8]:bn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=o}(_,w),e=_[0],t=_[1],r=_[2],a=_[3],p=_[4],!(g=_[9]=_[9]===o?v?0:e.length:Yt(_[9]-y,0))&&24&t&&(t&=-25),t&&1!=t)k=8==t||t==l?function(e,t,r){var i=Do(e);return function a(){for(var s=arguments.length,l=n(s),u=s,c=li(a);u--;)l[u]=arguments[u];var d=s<3&&l[0]!==c&&l[s-1]!==c?[]:dn(l,c);return(s-=d.length)<r?Yo(e,t,Uo,a.placeholder,o,l,d,o,o,r-s):Ct(this&&this!==mt&&this instanceof a?i:e,this,l)}}(e,t,g):t!=u&&33!=t||p.length?Uo.apply(o,_):function(e,t,r,o){var i=1&t,a=Do(e);return function t(){for(var s=-1,l=arguments.length,u=-1,c=o.length,d=n(c+l),f=this&&this!==mt&&this instanceof t?a:e;++u<c;)d[u]=o[u];for(;l--;)d[u++]=arguments[++s];return Ct(f,i?r:this,d)}}(e,t,r,a);else var k=function(e,t,n){var r=1&t,o=Do(e);return function t(){return(this&&this!==mt&&this instanceof t?o:e).apply(r?n:this,arguments)}}(e,t,r);return Li((w?eo:Ri)(k,_),e,t)}function Zo(e,t,n,r){return e===o||Fa(e,Ae[n])&&!$e.call(r,n)?t:e}function ei(e,t,n,r,i,a){return es(e)&&es(t)&&(a.set(t,e),Br(e,t,o,ei,a),a.delete(t)),e}function ti(e){return os(e)?o:e}function ni(e,t,n,r,i,a){var s=1&n,l=e.length,u=t.length;if(l!=u&&!(s&&u>l))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var f=-1,p=!0,h=2&n?new Yn:o;for(a.set(e,t),a.set(t,e);++f<l;){var m=e[f],g=t[f];if(r)var v=s?r(g,m,f,t,e,a):r(m,g,f,e,t,a);if(v!==o){if(v)continue;p=!1;break}if(h){if(!It(t,(function(e,t){if(!tn(h,t)&&(m===e||i(m,e,n,r,a)))return h.push(t)}))){p=!1;break}}else if(m!==g&&!i(m,g,n,r,a)){p=!1;break}}return a.delete(e),a.delete(t),p}function ri(e){return Ai(Ci(e,o,qi),e+"")}function oi(e){return Sr(e,Ps,pi)}function ii(e){return Sr(e,As,hi)}var ai=Rn?function(e){return Rn.get(e)}:ll;function si(e){for(var t=e.name+"",n=Pn[t],r=$e.call(Pn,t)?n.length:0;r--;){var o=n[r],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return($e.call(Fn,"placeholder")?Fn:e).placeholder}function ui(){var e=Fn.iteratee||ol;return e=e===ol?$r:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,t){var n=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?n["string"==typeof t?"string":"hash"]:n.map}function di(e){for(var t=Ps(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Ei(o)]}return t}function fi(e,t){var n=function(e,t){return null==e?o:e[t]}(e,t);return Nr(n)?n:o}var pi=gt?function(e){return null==e?[]:(e=je(e),At(gt(e),(function(t){return Ye.call(e,t)})))}:ml,hi=gt?function(e){for(var t=[];e;)zt(t,pi(e)),e=Ve(e);return t}:ml,mi=Er;function gi(e,t,n){for(var r=-1,o=(t=xo(t,e)).length,i=!1;++r<o;){var a=Mi(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&Za(o)&&bi(a,o)&&(Ha(e)||Wa(e))}function vi(e){return"function"!=typeof e.constructor||Si(e)?{}:Un(Ve(e))}function yi(e){return Ha(e)||Wa(e)||!!(Xe&&e&&e[Xe])}function bi(e,t){var n=typeof e;return!!(t=null==t?h:t)&&("number"==n||"symbol"!=n&&xe.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Va(n)&&bi(t,n.length):"string"==r&&t in n)&&Fa(n[t],e)}function wi(e,t){if(Ha(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||(ne.test(e)||!te.test(e)||null!=t&&e in je(t))}function _i(e){var t=si(e),n=Fn[t];if("function"!=typeof n||!(t in Hn.prototype))return!1;if(e===n)return!0;var r=ai(n);return!!r&&e===r[0]}(Sn&&mi(new Sn(new ArrayBuffer(1)))!=$||En&&mi(new En)!=E||jn&&mi(jn.resolve())!=T||Cn&&mi(new Cn)!=R||Tn&&mi(new Tn)!=L)&&(mi=function(e){var t=Er(e),n=t==C?e.constructor:o,r=n?Di(n):"";if(r)switch(r){case An:return $;case Ln:return E;case Nn:return T;case $n:return R;case zn:return L}return t});var ki=Le?Ja:gl;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ae)}function Ei(e){return e===e&&!es(e)}function ji(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==o||e in je(n)))}}function Ci(e,t,r){return t=Yt(t===o?e.length-1:t,0),function(){for(var o=arguments,i=-1,a=Yt(o.length-t,0),s=n(a);++i<a;)s[i]=o[t+i];i=-1;for(var l=n(t+1);++i<t;)l[i]=o[i];return l[t]=r(s),Ct(e,this,l)}}function Ti(e,t){return t.length<2?e:kr(e,ro(t,0,-1))}function Oi(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}var Ri=Ni(eo),Pi=ct||function(e,t){return mt.setTimeout(e,t)},Ai=Ni(to);function Li(e,t,n){var r=t+"";return Ai(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(le,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ot(v,(function(n){var r="_."+n[0];t&n[1]&&!Lt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(ue);return t?t[1].split(ce):[]}(r),n)))}function Ni(e){var t=0,n=0;return function(){var r=xn(),i=16-(r-n);if(n=r,i>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(o,arguments)}}function $i(e,t){var n=-1,r=e.length,i=r-1;for(t=t===o?r:t;++n<t;){var a=Yr(n,i),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}var zi=function(e){var t=Na(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(re,(function(e,n,r,o){t.push(r?o.replace(pe,"$1"):n||e)})),t}));function Mi(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Di(e){if(null!=e){try{return Ne.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Ii(e){if(e instanceof Hn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Ro(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Fi=Xr((function(e,t){return Ka(e)?dr(e,vr(t,1,Ka,!0)):[]})),Ui=Xr((function(e,t){var n=Xi(t);return Ka(n)&&(n=o),Ka(e)?dr(e,vr(t,1,Ka,!0),ui(n,2)):[]})),Bi=Xr((function(e,t){var n=Xi(t);return Ka(n)&&(n=o),Ka(e)?dr(e,vr(t,1,Ka,!0),o,n):[]}));function Wi(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:hs(n);return o<0&&(o=Yt(r+o,0)),Bt(e,ui(t,3),o)}function Hi(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r-1;return n!==o&&(i=hs(n),i=n<0?Yt(r+i,0):bn(i,r-1)),Bt(e,ui(t,3),i,!0)}function qi(e){return(null==e?0:e.length)?vr(e,1):[]}function Vi(e){return e&&e.length?e[0]:o}var Ki=Xr((function(e){var t=$t(e,yo);return t.length&&t[0]===e[0]?Or(t):[]})),Yi=Xr((function(e){var t=Xi(e),n=$t(e,yo);return t===Xi(n)?t=o:n.pop(),n.length&&n[0]===e[0]?Or(n,ui(t,2)):[]})),Qi=Xr((function(e){var t=Xi(e),n=$t(e,yo);return(t="function"==typeof t?t:o)&&n.pop(),n.length&&n[0]===e[0]?Or(n,o,t):[]}));function Xi(e){var t=null==e?0:e.length;return t?e[t-1]:o}var Ji=Xr(Gi);function Gi(e,t){return e&&e.length&&t&&t.length?Vr(e,t):e}var Zi=ri((function(e,t){var n=null==e?0:e.length,r=ar(e,t);return Kr(e,$t(t,(function(e){return bi(e,n)?+e:e})).sort(Co)),r}));function ea(e){return null==e?e:kn.call(e)}var ta=Xr((function(e){return co(vr(e,1,Ka,!0))})),na=Xr((function(e){var t=Xi(e);return Ka(t)&&(t=o),co(vr(e,1,Ka,!0),ui(t,2))})),ra=Xr((function(e){var t=Xi(e);return t="function"==typeof t?t:o,co(vr(e,1,Ka,!0),o,t)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=At(e,(function(e){if(Ka(e))return t=Yt(e.length,t),!0})),Jt(t,(function(t){return $t(e,Kt(t))}))}function ia(e,t){if(!e||!e.length)return[];var n=oa(e);return null==t?n:$t(n,(function(e){return Ct(t,o,e)}))}var aa=Xr((function(e,t){return Ka(e)?dr(e,t):[]})),sa=Xr((function(e){return go(At(e,Ka))})),la=Xr((function(e){var t=Xi(e);return Ka(t)&&(t=o),go(At(e,Ka),ui(t,2))})),ua=Xr((function(e){var t=Xi(e);return t="function"==typeof t?t:o,go(At(e,Ka),o,t)})),ca=Xr(oa);var da=Xr((function(e){var t=e.length,n=t>1?e[t-1]:o;return n="function"==typeof n?(e.pop(),n):o,ia(e,n)}));function fa(e){var t=Fn(e);return t.__chain__=!0,t}function pa(e,t){return t(e)}var ha=ri((function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,i=function(t){return ar(t,e)};return!(t>1||this.__actions__.length)&&r instanceof Hn&&bi(n)?((r=r.slice(n,+n+(t?1:0))).__actions__.push({func:pa,args:[i],thisArg:o}),new Wn(r,this.__chain__).thru((function(e){return t&&!e.length&&e.push(o),e}))):this.thru(i)}));var ma=Ao((function(e,t,n){$e.call(e,n)?++e[n]:ir(e,n,1)}));var ga=Io(Wi),va=Io(Hi);function ya(e,t){return(Ha(e)?Ot:fr)(e,ui(t,3))}function ba(e,t){return(Ha(e)?Rt:pr)(e,ui(t,3))}var xa=Ao((function(e,t,n){$e.call(e,n)?e[n].push(t):ir(e,n,[t])}));var wa=Xr((function(e,t,r){var o=-1,i="function"==typeof t,a=Va(e)?n(e.length):[];return fr(e,(function(e){a[++o]=i?Ct(t,e,r):Rr(e,t,r)})),a})),_a=Ao((function(e,t,n){ir(e,n,t)}));function ka(e,t){return(Ha(e)?$t:Ir)(e,ui(t,3))}var Sa=Ao((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var Ea=Xr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xi(e,t[0],t[1])?t=[]:n>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Hr(e,vr(t,1),[])})),ja=ot||function(){return mt.Date.now()};function Ca(e,t,n){return t=n?o:t,t=e&&null==t?e.length:t,Go(e,d,o,o,o,o,t)}function Ta(e,t){var n;if("function"!=typeof t)throw new Oe(i);return e=hs(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=o),n}}var Oa=Xr((function(e,t,n){var r=1;if(n.length){var o=dn(n,li(Oa));r|=u}return Go(e,r,t,n,o)})),Ra=Xr((function(e,t,n){var r=3;if(n.length){var o=dn(n,li(Ra));r|=u}return Go(t,r,e,n,o)}));function Pa(e,t,n){var r,a,s,l,u,c,d=0,f=!1,p=!1,h=!0;if("function"!=typeof e)throw new Oe(i);function m(t){var n=r,i=a;return r=a=o,d=t,l=e.apply(i,n)}function g(e){var n=e-c;return c===o||n>=t||n<0||p&&e-d>=s}function v(){var e=ja();if(g(e))return y(e);u=Pi(v,function(e){var n=t-(e-c);return p?bn(n,s-(e-d)):n}(e))}function y(e){return u=o,h&&r?m(e):(r=a=o,l)}function b(){var e=ja(),n=g(e);if(r=arguments,a=this,c=e,n){if(u===o)return function(e){return d=e,u=Pi(v,t),f?m(e):l}(c);if(p)return ko(u),u=Pi(v,t),m(c)}return u===o&&(u=Pi(v,t)),l}return t=gs(t)||0,es(n)&&(f=!!n.leading,s=(p="maxWait"in n)?Yt(gs(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),b.cancel=function(){u!==o&&ko(u),d=0,r=c=a=u=o},b.flush=function(){return u===o?l:y(ja())},b}var Aa=Xr((function(e,t){return cr(e,1,t)})),La=Xr((function(e,t,n){return cr(e,gs(t)||0,n)}));function Na(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Oe(i);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Na.Cache||Kn),n}function $a(e){if("function"!=typeof e)throw new Oe(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Na.Cache=Kn;var za=wo((function(e,t){var n=(t=1==t.length&&Ha(t[0])?$t(t[0],Zt(ui())):$t(vr(t,1),Zt(ui()))).length;return Xr((function(r){for(var o=-1,i=bn(r.length,n);++o<i;)r[o]=t[o].call(this,r[o]);return Ct(e,this,r)}))})),Ma=Xr((function(e,t){var n=dn(t,li(Ma));return Go(e,u,o,t,n)})),Da=Xr((function(e,t){var n=dn(t,li(Da));return Go(e,c,o,t,n)})),Ia=ri((function(e,t){return Go(e,f,o,o,o,t)}));function Fa(e,t){return e===t||e!==e&&t!==t}var Ua=Ko(jr),Ba=Ko((function(e,t){return e>=t})),Wa=Pr(function(){return arguments}())?Pr:function(e){return ts(e)&&$e.call(e,"callee")&&!Ye.call(e,"callee")},Ha=n.isArray,qa=wt?Zt(wt):function(e){return ts(e)&&Er(e)==N};function Va(e){return null!=e&&Za(e.length)&&!Ja(e)}function Ka(e){return ts(e)&&Va(e)}var Ya=vt||gl,Qa=_t?Zt(_t):function(e){return ts(e)&&Er(e)==w};function Xa(e){if(!ts(e))return!1;var t=Er(e);return t==_||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Ja(e){if(!es(e))return!1;var t=Er(e);return t==k||t==S||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Ga(e){return"number"==typeof e&&e==hs(e)}function Za(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=h}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=kt?Zt(kt):function(e){return ts(e)&&mi(e)==E};function rs(e){return"number"==typeof e||ts(e)&&Er(e)==j}function os(e){if(!ts(e)||Er(e)!=C)return!1;var t=Ve(e);if(null===t)return!0;var n=$e.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ne.call(n)==Ie}var is=St?Zt(St):function(e){return ts(e)&&Er(e)==O};var as=Et?Zt(Et):function(e){return ts(e)&&mi(e)==R};function ss(e){return"string"==typeof e||!Ha(e)&&ts(e)&&Er(e)==P}function ls(e){return"symbol"==typeof e||ts(e)&&Er(e)==A}var us=jt?Zt(jt):function(e){return ts(e)&&Za(e.length)&&!!lt[Er(e)]};var cs=Ko(Dr),ds=Ko((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Va(e))return ss(e)?mn(e):Ro(e);if(Je&&e[Je])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Je]());var t=mi(e);return(t==E?un:t==R?fn:Fs)(e)}function ps(e){return e?(e=gs(e))===p||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}function hs(e){var t=ps(e),n=t%1;return t===t?n?t-n:t:0}function ms(e){return e?sr(hs(e),0,g):0}function gs(e){if("number"==typeof e)return e;if(ls(e))return m;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var n=ve.test(e);return n||be.test(e)?ft(e.slice(2),n?2:8):ge.test(e)?m:+e}function vs(e){return Po(e,As(e))}function ys(e){return null==e?"":uo(e)}var bs=Lo((function(e,t){if(Si(t)||Va(t))Po(t,Ps(t),e);else for(var n in t)$e.call(t,n)&&tr(e,n,t[n])})),xs=Lo((function(e,t){Po(t,As(t),e)})),ws=Lo((function(e,t,n,r){Po(t,As(t),e,r)})),_s=Lo((function(e,t,n,r){Po(t,Ps(t),e,r)})),ks=ri(ar);var Ss=Xr((function(e,t){e=je(e);var n=-1,r=t.length,i=r>2?t[2]:o;for(i&&xi(t[0],t[1],i)&&(r=1);++n<r;)for(var a=t[n],s=As(a),l=-1,u=s.length;++l<u;){var c=s[l],d=e[c];(d===o||Fa(d,Ae[c])&&!$e.call(e,c))&&(e[c]=a[c])}return e})),Es=Xr((function(e){return e.push(o,ei),Ct(Ns,o,e)}));function js(e,t,n){var r=null==e?o:kr(e,t);return r===o?n:r}function Cs(e,t){return null!=e&&gi(e,t,Tr)}var Ts=Bo((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=De.call(t)),e[t]=n}),el(rl)),Os=Bo((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=De.call(t)),$e.call(e,t)?e[t].push(n):e[t]=[n]}),ui),Rs=Xr(Rr);function Ps(e){return Va(e)?Xn(e):zr(e)}function As(e){return Va(e)?Xn(e,!0):Mr(e)}var Ls=Lo((function(e,t,n){Br(e,t,n)})),Ns=Lo((function(e,t,n,r){Br(e,t,n,r)})),$s=ri((function(e,t){var n={};if(null==e)return n;var r=!1;t=$t(t,(function(t){return t=xo(t,e),r||(r=t.length>1),t})),Po(e,ii(e),n),r&&(n=lr(n,7,ti));for(var o=t.length;o--;)fo(n,t[o]);return n}));var zs=ri((function(e,t){return null==e?{}:function(e,t){return qr(e,t,(function(t,n){return Cs(e,n)}))}(e,t)}));function Ms(e,t){if(null==e)return{};var n=$t(ii(e),(function(e){return[e]}));return t=ui(t),qr(e,n,(function(e,n){return t(e,n[0])}))}var Ds=Jo(Ps),Is=Jo(As);function Fs(e){return null==e?[]:en(e,Ps(e))}var Us=Mo((function(e,t,n){return t=t.toLowerCase(),e+(n?Bs(t):t)}));function Bs(e){return Xs(ys(e).toLowerCase())}function Ws(e){return(e=ys(e))&&e.replace(we,on).replace(tt,"")}var Hs=Mo((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),qs=Mo((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Vs=zo("toLowerCase");var Ks=Mo((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var Ys=Mo((function(e,t,n){return e+(n?" ":"")+Xs(t)}));var Qs=Mo((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Xs=zo("toUpperCase");function Js(e,t,n){return e=ys(e),(t=n?o:t)===o?function(e){return it.test(e)}(e)?function(e){return e.match(rt)||[]}(e):function(e){return e.match(de)||[]}(e):e.match(t)||[]}var Gs=Xr((function(e,t){try{return Ct(e,o,t)}catch(n){return Xa(n)?n:new se(n)}})),Zs=ri((function(e,t){return Ot(t,(function(t){t=Mi(t),ir(e,t,Oa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Fo(),nl=Fo(!0);function rl(e){return e}function ol(e){return $r("function"==typeof e?e:lr(e,1))}var il=Xr((function(e,t){return function(n){return Rr(n,e,t)}})),al=Xr((function(e,t){return function(n){return Rr(e,n,t)}}));function sl(e,t,n){var r=Ps(t),o=_r(t,r);null!=n||es(t)&&(o.length||!r.length)||(n=t,t=e,e=this,o=_r(t,Ps(t)));var i=!(es(n)&&"chain"in n)||!!n.chain,a=Ja(e);return Ot(o,(function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(i||t){var n=e(this.__wrapped__);return(n.__actions__=Ro(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,zt([this.value()],arguments))})})),e}function ll(){}var ul=Ho($t),cl=Ho(Pt),dl=Ho(It);function fl(e){return wi(e)?Kt(Mi(e)):function(e){return function(t){return kr(t,e)}}(e)}var pl=Vo(),hl=Vo(!0);function ml(){return[]}function gl(){return!1}var vl=Wo((function(e,t){return e+t}),0),yl=Qo("ceil"),bl=Wo((function(e,t){return e/t}),1),xl=Qo("floor");var wl=Wo((function(e,t){return e*t}),1),_l=Qo("round"),kl=Wo((function(e,t){return e-t}),0);return Fn.after=function(e,t){if("function"!=typeof t)throw new Oe(i);return e=hs(e),function(){if(--e<1)return t.apply(this,arguments)}},Fn.ary=Ca,Fn.assign=bs,Fn.assignIn=xs,Fn.assignInWith=ws,Fn.assignWith=_s,Fn.at=ks,Fn.before=Ta,Fn.bind=Oa,Fn.bindAll=Zs,Fn.bindKey=Ra,Fn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ha(e)?e:[e]},Fn.chain=fa,Fn.chunk=function(e,t,r){t=(r?xi(e,t,r):t===o)?1:Yt(hs(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var a=0,s=0,l=n(pt(i/t));a<i;)l[s++]=ro(e,a,a+=t);return l},Fn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,o=[];++t<n;){var i=e[t];i&&(o[r++]=i)}return o},Fn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=n(e-1),r=arguments[0],o=e;o--;)t[o-1]=arguments[o];return zt(Ha(r)?Ro(r):[r],vr(t,1))},Fn.cond=function(e){var t=null==e?0:e.length,n=ui();return e=t?$t(e,(function(e){if("function"!=typeof e[1])throw new Oe(i);return[n(e[0]),e[1]]})):[],Xr((function(n){for(var r=-1;++r<t;){var o=e[r];if(Ct(o[0],this,n))return Ct(o[1],this,n)}}))},Fn.conforms=function(e){return function(e){var t=Ps(e);return function(n){return ur(n,e,t)}}(lr(e,1))},Fn.constant=el,Fn.countBy=ma,Fn.create=function(e,t){var n=Un(e);return null==t?n:or(n,t)},Fn.curry=function e(t,n,r){var i=Go(t,8,o,o,o,o,o,n=r?o:n);return i.placeholder=e.placeholder,i},Fn.curryRight=function e(t,n,r){var i=Go(t,l,o,o,o,o,o,n=r?o:n);return i.placeholder=e.placeholder,i},Fn.debounce=Pa,Fn.defaults=Ss,Fn.defaultsDeep=Es,Fn.defer=Aa,Fn.delay=La,Fn.difference=Fi,Fn.differenceBy=Ui,Fn.differenceWith=Bi,Fn.drop=function(e,t,n){var r=null==e?0:e.length;return r?ro(e,(t=n||t===o?1:hs(t))<0?0:t,r):[]},Fn.dropRight=function(e,t,n){var r=null==e?0:e.length;return r?ro(e,0,(t=r-(t=n||t===o?1:hs(t)))<0?0:t):[]},Fn.dropRightWhile=function(e,t){return e&&e.length?ho(e,ui(t,3),!0,!0):[]},Fn.dropWhile=function(e,t){return e&&e.length?ho(e,ui(t,3),!0):[]},Fn.fill=function(e,t,n,r){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&xi(e,t,n)&&(n=0,r=i),function(e,t,n,r){var i=e.length;for((n=hs(n))<0&&(n=-n>i?0:i+n),(r=r===o||r>i?i:hs(r))<0&&(r+=i),r=n>r?0:ms(r);n<r;)e[n++]=t;return e}(e,t,n,r)):[]},Fn.filter=function(e,t){return(Ha(e)?At:gr)(e,ui(t,3))},Fn.flatMap=function(e,t){return vr(ka(e,t),1)},Fn.flatMapDeep=function(e,t){return vr(ka(e,t),p)},Fn.flatMapDepth=function(e,t,n){return n=n===o?1:hs(n),vr(ka(e,t),n)},Fn.flatten=qi,Fn.flattenDeep=function(e){return(null==e?0:e.length)?vr(e,p):[]},Fn.flattenDepth=function(e,t){return(null==e?0:e.length)?vr(e,t=t===o?1:hs(t)):[]},Fn.flip=function(e){return Go(e,512)},Fn.flow=tl,Fn.flowRight=nl,Fn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var o=e[t];r[o[0]]=o[1]}return r},Fn.functions=function(e){return null==e?[]:_r(e,Ps(e))},Fn.functionsIn=function(e){return null==e?[]:_r(e,As(e))},Fn.groupBy=xa,Fn.initial=function(e){return(null==e?0:e.length)?ro(e,0,-1):[]},Fn.intersection=Ki,Fn.intersectionBy=Yi,Fn.intersectionWith=Qi,Fn.invert=Ts,Fn.invertBy=Os,Fn.invokeMap=wa,Fn.iteratee=ol,Fn.keyBy=_a,Fn.keys=Ps,Fn.keysIn=As,Fn.map=ka,Fn.mapKeys=function(e,t){var n={};return t=ui(t,3),xr(e,(function(e,r,o){ir(n,t(e,r,o),e)})),n},Fn.mapValues=function(e,t){var n={};return t=ui(t,3),xr(e,(function(e,r,o){ir(n,r,t(e,r,o))})),n},Fn.matches=function(e){return Fr(lr(e,1))},Fn.matchesProperty=function(e,t){return Ur(e,lr(t,1))},Fn.memoize=Na,Fn.merge=Ls,Fn.mergeWith=Ns,Fn.method=il,Fn.methodOf=al,Fn.mixin=sl,Fn.negate=$a,Fn.nthArg=function(e){return e=hs(e),Xr((function(t){return Wr(t,e)}))},Fn.omit=$s,Fn.omitBy=function(e,t){return Ms(e,$a(ui(t)))},Fn.once=function(e){return Ta(2,e)},Fn.orderBy=function(e,t,n,r){return null==e?[]:(Ha(t)||(t=null==t?[]:[t]),Ha(n=r?o:n)||(n=null==n?[]:[n]),Hr(e,t,n))},Fn.over=ul,Fn.overArgs=za,Fn.overEvery=cl,Fn.overSome=dl,Fn.partial=Ma,Fn.partialRight=Da,Fn.partition=Sa,Fn.pick=zs,Fn.pickBy=Ms,Fn.property=fl,Fn.propertyOf=function(e){return function(t){return null==e?o:kr(e,t)}},Fn.pull=Ji,Fn.pullAll=Gi,Fn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Vr(e,t,ui(n,2)):e},Fn.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Vr(e,t,o,n):e},Fn.pullAt=Zi,Fn.range=pl,Fn.rangeRight=hl,Fn.rearg=Ia,Fn.reject=function(e,t){return(Ha(e)?At:gr)(e,$a(ui(t,3)))},Fn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,o=[],i=e.length;for(t=ui(t,3);++r<i;){var a=e[r];t(a,r,e)&&(n.push(a),o.push(r))}return Kr(e,o),n},Fn.rest=function(e,t){if("function"!=typeof e)throw new Oe(i);return Xr(e,t=t===o?t:hs(t))},Fn.reverse=ea,Fn.sampleSize=function(e,t,n){return t=(n?xi(e,t,n):t===o)?1:hs(t),(Ha(e)?Gn:Gr)(e,t)},Fn.set=function(e,t,n){return null==e?e:Zr(e,t,n)},Fn.setWith=function(e,t,n,r){return r="function"==typeof r?r:o,null==e?e:Zr(e,t,n,r)},Fn.shuffle=function(e){return(Ha(e)?Zn:no)(e)},Fn.slice=function(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&xi(e,t,n)?(t=0,n=r):(t=null==t?0:hs(t),n=n===o?r:hs(n)),ro(e,t,n)):[]},Fn.sortBy=Ea,Fn.sortedUniq=function(e){return e&&e.length?so(e):[]},Fn.sortedUniqBy=function(e,t){return e&&e.length?so(e,ui(t,2)):[]},Fn.split=function(e,t,n){return n&&"number"!=typeof n&&xi(e,t,n)&&(t=n=o),(n=n===o?g:n>>>0)?(e=ys(e))&&("string"==typeof t||null!=t&&!is(t))&&!(t=uo(t))&&ln(e)?_o(mn(e),0,n):e.split(t,n):[]},Fn.spread=function(e,t){if("function"!=typeof e)throw new Oe(i);return t=null==t?0:Yt(hs(t),0),Xr((function(n){var r=n[t],o=_o(n,0,t);return r&&zt(o,r),Ct(e,this,o)}))},Fn.tail=function(e){var t=null==e?0:e.length;return t?ro(e,1,t):[]},Fn.take=function(e,t,n){return e&&e.length?ro(e,0,(t=n||t===o?1:hs(t))<0?0:t):[]},Fn.takeRight=function(e,t,n){var r=null==e?0:e.length;return r?ro(e,(t=r-(t=n||t===o?1:hs(t)))<0?0:t,r):[]},Fn.takeRightWhile=function(e,t){return e&&e.length?ho(e,ui(t,3),!1,!0):[]},Fn.takeWhile=function(e,t){return e&&e.length?ho(e,ui(t,3)):[]},Fn.tap=function(e,t){return t(e),e},Fn.throttle=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new Oe(i);return es(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Pa(e,t,{leading:r,maxWait:t,trailing:o})},Fn.thru=pa,Fn.toArray=fs,Fn.toPairs=Ds,Fn.toPairsIn=Is,Fn.toPath=function(e){return Ha(e)?$t(e,Mi):ls(e)?[e]:Ro(zi(ys(e)))},Fn.toPlainObject=vs,Fn.transform=function(e,t,n){var r=Ha(e),o=r||Ya(e)||us(e);if(t=ui(t,4),null==n){var i=e&&e.constructor;n=o?r?new i:[]:es(e)&&Ja(i)?Un(Ve(e)):{}}return(o?Ot:xr)(e,(function(e,r,o){return t(n,e,r,o)})),n},Fn.unary=function(e){return Ca(e,1)},Fn.union=ta,Fn.unionBy=na,Fn.unionWith=ra,Fn.uniq=function(e){return e&&e.length?co(e):[]},Fn.uniqBy=function(e,t){return e&&e.length?co(e,ui(t,2)):[]},Fn.uniqWith=function(e,t){return t="function"==typeof t?t:o,e&&e.length?co(e,o,t):[]},Fn.unset=function(e,t){return null==e||fo(e,t)},Fn.unzip=oa,Fn.unzipWith=ia,Fn.update=function(e,t,n){return null==e?e:po(e,t,bo(n))},Fn.updateWith=function(e,t,n,r){return r="function"==typeof r?r:o,null==e?e:po(e,t,bo(n),r)},Fn.values=Fs,Fn.valuesIn=function(e){return null==e?[]:en(e,As(e))},Fn.without=aa,Fn.words=Js,Fn.wrap=function(e,t){return Ma(bo(t),e)},Fn.xor=sa,Fn.xorBy=la,Fn.xorWith=ua,Fn.zip=ca,Fn.zipObject=function(e,t){return vo(e||[],t||[],tr)},Fn.zipObjectDeep=function(e,t){return vo(e||[],t||[],Zr)},Fn.zipWith=da,Fn.entries=Ds,Fn.entriesIn=Is,Fn.extend=xs,Fn.extendWith=ws,sl(Fn,Fn),Fn.add=vl,Fn.attempt=Gs,Fn.camelCase=Us,Fn.capitalize=Bs,Fn.ceil=yl,Fn.clamp=function(e,t,n){return n===o&&(n=t,t=o),n!==o&&(n=(n=gs(n))===n?n:0),t!==o&&(t=(t=gs(t))===t?t:0),sr(gs(e),t,n)},Fn.clone=function(e){return lr(e,4)},Fn.cloneDeep=function(e){return lr(e,5)},Fn.cloneDeepWith=function(e,t){return lr(e,5,t="function"==typeof t?t:o)},Fn.cloneWith=function(e,t){return lr(e,4,t="function"==typeof t?t:o)},Fn.conformsTo=function(e,t){return null==t||ur(e,t,Ps(t))},Fn.deburr=Ws,Fn.defaultTo=function(e,t){return null==e||e!==e?t:e},Fn.divide=bl,Fn.endsWith=function(e,t,n){e=ys(e),t=uo(t);var r=e.length,i=n=n===o?r:sr(hs(n),0,r);return(n-=t.length)>=0&&e.slice(n,i)==t},Fn.eq=Fa,Fn.escape=function(e){return(e=ys(e))&&J.test(e)?e.replace(Q,an):e},Fn.escapeRegExp=function(e){return(e=ys(e))&&ie.test(e)?e.replace(oe,"\\$&"):e},Fn.every=function(e,t,n){var r=Ha(e)?Pt:hr;return n&&xi(e,t,n)&&(t=o),r(e,ui(t,3))},Fn.find=ga,Fn.findIndex=Wi,Fn.findKey=function(e,t){return Ut(e,ui(t,3),xr)},Fn.findLast=va,Fn.findLastIndex=Hi,Fn.findLastKey=function(e,t){return Ut(e,ui(t,3),wr)},Fn.floor=xl,Fn.forEach=ya,Fn.forEachRight=ba,Fn.forIn=function(e,t){return null==e?e:yr(e,ui(t,3),As)},Fn.forInRight=function(e,t){return null==e?e:br(e,ui(t,3),As)},Fn.forOwn=function(e,t){return e&&xr(e,ui(t,3))},Fn.forOwnRight=function(e,t){return e&&wr(e,ui(t,3))},Fn.get=js,Fn.gt=Ua,Fn.gte=Ba,Fn.has=function(e,t){return null!=e&&gi(e,t,Cr)},Fn.hasIn=Cs,Fn.head=Vi,Fn.identity=rl,Fn.includes=function(e,t,n,r){e=Va(e)?e:Fs(e),n=n&&!r?hs(n):0;var o=e.length;return n<0&&(n=Yt(o+n,0)),ss(e)?n<=o&&e.indexOf(t,n)>-1:!!o&&Wt(e,t,n)>-1},Fn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:hs(n);return o<0&&(o=Yt(r+o,0)),Wt(e,t,o)},Fn.inRange=function(e,t,n){return t=ps(t),n===o?(n=t,t=0):n=ps(n),function(e,t,n){return e>=bn(t,n)&&e<Yt(t,n)}(e=gs(e),t,n)},Fn.invoke=Rs,Fn.isArguments=Wa,Fn.isArray=Ha,Fn.isArrayBuffer=qa,Fn.isArrayLike=Va,Fn.isArrayLikeObject=Ka,Fn.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Er(e)==x},Fn.isBuffer=Ya,Fn.isDate=Qa,Fn.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Fn.isEmpty=function(e){if(null==e)return!0;if(Va(e)&&(Ha(e)||"string"==typeof e||"function"==typeof e.splice||Ya(e)||us(e)||Wa(e)))return!e.length;var t=mi(e);if(t==E||t==R)return!e.size;if(Si(e))return!zr(e).length;for(var n in e)if($e.call(e,n))return!1;return!0},Fn.isEqual=function(e,t){return Ar(e,t)},Fn.isEqualWith=function(e,t,n){var r=(n="function"==typeof n?n:o)?n(e,t):o;return r===o?Ar(e,t,o,n):!!r},Fn.isError=Xa,Fn.isFinite=function(e){return"number"==typeof e&&bt(e)},Fn.isFunction=Ja,Fn.isInteger=Ga,Fn.isLength=Za,Fn.isMap=ns,Fn.isMatch=function(e,t){return e===t||Lr(e,t,di(t))},Fn.isMatchWith=function(e,t,n){return n="function"==typeof n?n:o,Lr(e,t,di(t),n)},Fn.isNaN=function(e){return rs(e)&&e!=+e},Fn.isNative=function(e){if(ki(e))throw new se("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Nr(e)},Fn.isNil=function(e){return null==e},Fn.isNull=function(e){return null===e},Fn.isNumber=rs,Fn.isObject=es,Fn.isObjectLike=ts,Fn.isPlainObject=os,Fn.isRegExp=is,Fn.isSafeInteger=function(e){return Ga(e)&&e>=-9007199254740991&&e<=h},Fn.isSet=as,Fn.isString=ss,Fn.isSymbol=ls,Fn.isTypedArray=us,Fn.isUndefined=function(e){return e===o},Fn.isWeakMap=function(e){return ts(e)&&mi(e)==L},Fn.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Er(e)},Fn.join=function(e,t){return null==e?"":xt.call(e,t)},Fn.kebabCase=Hs,Fn.last=Xi,Fn.lastIndexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r;return n!==o&&(i=(i=hs(n))<0?Yt(r+i,0):bn(i,r-1)),t===t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,i):Bt(e,qt,i,!0)},Fn.lowerCase=qs,Fn.lowerFirst=Vs,Fn.lt=cs,Fn.lte=ds,Fn.max=function(e){return e&&e.length?mr(e,rl,jr):o},Fn.maxBy=function(e,t){return e&&e.length?mr(e,ui(t,2),jr):o},Fn.mean=function(e){return Vt(e,rl)},Fn.meanBy=function(e,t){return Vt(e,ui(t,2))},Fn.min=function(e){return e&&e.length?mr(e,rl,Dr):o},Fn.minBy=function(e,t){return e&&e.length?mr(e,ui(t,2),Dr):o},Fn.stubArray=ml,Fn.stubFalse=gl,Fn.stubObject=function(){return{}},Fn.stubString=function(){return""},Fn.stubTrue=function(){return!0},Fn.multiply=wl,Fn.nth=function(e,t){return e&&e.length?Wr(e,hs(t)):o},Fn.noConflict=function(){return mt._===this&&(mt._=Fe),this},Fn.noop=ll,Fn.now=ja,Fn.pad=function(e,t,n){e=ys(e);var r=(t=hs(t))?hn(e):0;if(!t||r>=t)return e;var o=(t-r)/2;return qo(ht(o),n)+e+qo(pt(o),n)},Fn.padEnd=function(e,t,n){e=ys(e);var r=(t=hs(t))?hn(e):0;return t&&r<t?e+qo(t-r,n):e},Fn.padStart=function(e,t,n){e=ys(e);var r=(t=hs(t))?hn(e):0;return t&&r<t?qo(t-r,n)+e:e},Fn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(ys(e).replace(ae,""),t||0)},Fn.random=function(e,t,n){if(n&&"boolean"!=typeof n&&xi(e,t,n)&&(t=n=o),n===o&&("boolean"==typeof t?(n=t,t=o):"boolean"==typeof e&&(n=e,e=o)),e===o&&t===o?(e=0,t=1):(e=ps(e),t===o?(t=e,e=0):t=ps(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var i=_n();return bn(e+i*(t-e+dt("1e-"+((i+"").length-1))),t)}return Yr(e,t)},Fn.reduce=function(e,t,n){var r=Ha(e)?Mt:Qt,o=arguments.length<3;return r(e,ui(t,4),n,o,fr)},Fn.reduceRight=function(e,t,n){var r=Ha(e)?Dt:Qt,o=arguments.length<3;return r(e,ui(t,4),n,o,pr)},Fn.repeat=function(e,t,n){return t=(n?xi(e,t,n):t===o)?1:hs(t),Qr(ys(e),t)},Fn.replace=function(){var e=arguments,t=ys(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Fn.result=function(e,t,n){var r=-1,i=(t=xo(t,e)).length;for(i||(i=1,e=o);++r<i;){var a=null==e?o:e[Mi(t[r])];a===o&&(r=i,a=n),e=Ja(a)?a.call(e):a}return e},Fn.round=_l,Fn.runInContext=e,Fn.sample=function(e){return(Ha(e)?Jn:Jr)(e)},Fn.size=function(e){if(null==e)return 0;if(Va(e))return ss(e)?hn(e):e.length;var t=mi(e);return t==E||t==R?e.size:zr(e).length},Fn.snakeCase=Ks,Fn.some=function(e,t,n){var r=Ha(e)?It:oo;return n&&xi(e,t,n)&&(t=o),r(e,ui(t,3))},Fn.sortedIndex=function(e,t){return io(e,t)},Fn.sortedIndexBy=function(e,t,n){return ao(e,t,ui(n,2))},Fn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=io(e,t);if(r<n&&Fa(e[r],t))return r}return-1},Fn.sortedLastIndex=function(e,t){return io(e,t,!0)},Fn.sortedLastIndexBy=function(e,t,n){return ao(e,t,ui(n,2),!0)},Fn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=io(e,t,!0)-1;if(Fa(e[n],t))return n}return-1},Fn.startCase=Ys,Fn.startsWith=function(e,t,n){return e=ys(e),n=null==n?0:sr(hs(n),0,e.length),t=uo(t),e.slice(n,n+t.length)==t},Fn.subtract=kl,Fn.sum=function(e){return e&&e.length?Xt(e,rl):0},Fn.sumBy=function(e,t){return e&&e.length?Xt(e,ui(t,2)):0},Fn.template=function(e,t,n){var r=Fn.templateSettings;n&&xi(e,t,n)&&(t=o),e=ys(e),t=ws({},t,r,Zo);var i,a,s=ws({},t.imports,r.imports,Zo),l=Ps(s),u=en(s,l),c=0,d=t.interpolate||_e,f="__p += '",p=Ce((t.escape||_e).source+"|"+d.source+"|"+(d===ee?he:_e).source+"|"+(t.evaluate||_e).source+"|$","g"),h="//# sourceURL="+($e.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++st+"]")+"\n";e.replace(p,(function(t,n,r,o,s,l){return r||(r=o),f+=e.slice(c,l).replace(ke,sn),n&&(i=!0,f+="' +\n__e("+n+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=l+t.length,t})),f+="';\n";var m=$e.call(t,"variable")&&t.variable;if(m){if(fe.test(m))throw new se("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(q,""):f).replace(V,"$1").replace(K,"$1;"),f="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var g=Gs((function(){return Se(l,h+"return "+f).apply(o,u)}));if(g.source=f,Xa(g))throw g;return g},Fn.times=function(e,t){if((e=hs(e))<1||e>h)return[];var n=g,r=bn(e,g);t=ui(t),e-=g;for(var o=Jt(r,t);++n<e;)t(n);return o},Fn.toFinite=ps,Fn.toInteger=hs,Fn.toLength=ms,Fn.toLower=function(e){return ys(e).toLowerCase()},Fn.toNumber=gs,Fn.toSafeInteger=function(e){return e?sr(hs(e),-9007199254740991,h):0===e?e:0},Fn.toString=ys,Fn.toUpper=function(e){return ys(e).toUpperCase()},Fn.trim=function(e,t,n){if((e=ys(e))&&(n||t===o))return Gt(e);if(!e||!(t=uo(t)))return e;var r=mn(e),i=mn(t);return _o(r,nn(r,i),rn(r,i)+1).join("")},Fn.trimEnd=function(e,t,n){if((e=ys(e))&&(n||t===o))return e.slice(0,gn(e)+1);if(!e||!(t=uo(t)))return e;var r=mn(e);return _o(r,0,rn(r,mn(t))+1).join("")},Fn.trimStart=function(e,t,n){if((e=ys(e))&&(n||t===o))return e.replace(ae,"");if(!e||!(t=uo(t)))return e;var r=mn(e);return _o(r,nn(r,mn(t))).join("")},Fn.truncate=function(e,t){var n=30,r="...";if(es(t)){var i="separator"in t?t.separator:i;n="length"in t?hs(t.length):n,r="omission"in t?uo(t.omission):r}var a=(e=ys(e)).length;if(ln(e)){var s=mn(e);a=s.length}if(n>=a)return e;var l=n-hn(r);if(l<1)return r;var u=s?_o(s,0,l).join(""):e.slice(0,l);if(i===o)return u+r;if(s&&(l+=u.length-l),is(i)){if(e.slice(l).search(i)){var c,d=u;for(i.global||(i=Ce(i.source,ys(me.exec(i))+"g")),i.lastIndex=0;c=i.exec(d);)var f=c.index;u=u.slice(0,f===o?l:f)}}else if(e.indexOf(uo(i),l)!=l){var p=u.lastIndexOf(i);p>-1&&(u=u.slice(0,p))}return u+r},Fn.unescape=function(e){return(e=ys(e))&&X.test(e)?e.replace(Y,vn):e},Fn.uniqueId=function(e){var t=++ze;return ys(e)+t},Fn.upperCase=Qs,Fn.upperFirst=Xs,Fn.each=ya,Fn.eachRight=ba,Fn.first=Vi,sl(Fn,function(){var e={};return xr(Fn,(function(t,n){$e.call(Fn.prototype,n)||(e[n]=t)})),e}(),{chain:!1}),Fn.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Fn[e].placeholder=Fn})),Ot(["drop","take"],(function(e,t){Hn.prototype[e]=function(n){n=n===o?1:Yt(hs(n),0);var r=this.__filtered__&&!t?new Hn(this):this.clone();return r.__filtered__?r.__takeCount__=bn(n,r.__takeCount__):r.__views__.push({size:bn(n,g),type:e+(r.__dir__<0?"Right":"")}),r},Hn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Hn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ui(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ot(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Hn.prototype[e]=function(){return this[n](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Hn.prototype[e]=function(){return this.__filtered__?new Hn(this):this[n](1)}})),Hn.prototype.compact=function(){return this.filter(rl)},Hn.prototype.find=function(e){return this.filter(e).head()},Hn.prototype.findLast=function(e){return this.reverse().find(e)},Hn.prototype.invokeMap=Xr((function(e,t){return"function"==typeof e?new Hn(this):this.map((function(n){return Rr(n,e,t)}))})),Hn.prototype.reject=function(e){return this.filter($a(ui(e)))},Hn.prototype.slice=function(e,t){e=hs(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Hn(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==o&&(n=(t=hs(t))<0?n.dropRight(-t):n.take(t-e)),n)},Hn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Hn.prototype.toArray=function(){return this.take(g)},xr(Hn.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),i=Fn[r?"take"+("last"==t?"Right":""):t],a=r||/^find/.test(t);i&&(Fn.prototype[t]=function(){var t=this.__wrapped__,s=r?[1]:arguments,l=t instanceof Hn,u=s[0],c=l||Ha(t),d=function(e){var t=i.apply(Fn,zt([e],s));return r&&f?t[0]:t};c&&n&&"function"==typeof u&&1!=u.length&&(l=c=!1);var f=this.__chain__,p=!!this.__actions__.length,h=a&&!f,m=l&&!p;if(!a&&c){t=m?t:new Hn(this);var g=e.apply(t,s);return g.__actions__.push({func:pa,args:[d],thisArg:o}),new Wn(g,f)}return h&&m?e.apply(this,s):(g=this.thru(d),h?r?g.value()[0]:g.value():g)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Re[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Fn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var o=this.value();return t.apply(Ha(o)?o:[],e)}return this[n]((function(n){return t.apply(Ha(n)?n:[],e)}))}})),xr(Hn.prototype,(function(e,t){var n=Fn[t];if(n){var r=n.name+"";$e.call(Pn,r)||(Pn[r]=[]),Pn[r].push({name:t,func:n})}})),Pn[Uo(o,2).name]=[{name:"wrapper",func:o}],Hn.prototype.clone=function(){var e=new Hn(this.__wrapped__);return e.__actions__=Ro(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ro(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ro(this.__views__),e},Hn.prototype.reverse=function(){if(this.__filtered__){var e=new Hn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Hn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Ha(e),r=t<0,o=n?e.length:0,i=function(e,t,n){var r=-1,o=n.length;for(;++r<o;){var i=n[r],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=bn(t,e+a);break;case"takeRight":e=Yt(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,u=r?s:a-1,c=this.__iteratees__,d=c.length,f=0,p=bn(l,this.__takeCount__);if(!n||!r&&o==l&&p==l)return mo(e,this.__actions__);var h=[];e:for(;l--&&f<p;){for(var m=-1,g=e[u+=t];++m<d;){var v=c[m],y=v.iteratee,b=v.type,x=y(g);if(2==b)g=x;else if(!x){if(1==b)continue e;break e}}h[f++]=g}return h},Fn.prototype.at=ha,Fn.prototype.chain=function(){return fa(this)},Fn.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Fn.prototype.next=function(){this.__values__===o&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?o:this.__values__[this.__index__++]}},Fn.prototype.plant=function(e){for(var t,n=this;n instanceof Bn;){var r=Ii(n);r.__index__=0,r.__values__=o,t?i.__wrapped__=r:t=r;var i=r;n=n.__wrapped__}return i.__wrapped__=e,t},Fn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Hn){var t=e;return this.__actions__.length&&(t=new Hn(this)),(t=t.reverse()).__actions__.push({func:pa,args:[ea],thisArg:o}),new Wn(t,this.__chain__)}return this.thru(ea)},Fn.prototype.toJSON=Fn.prototype.valueOf=Fn.prototype.value=function(){return mo(this.__wrapped__,this.__actions__)},Fn.prototype.first=Fn.prototype.head,Je&&(Fn.prototype[Je]=function(){return this}),Fn}();mt._=yn,(r=function(){return yn}.call(t,n,t,e))===o||(e.exports=r)}.call(this)},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),_=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),C=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var N=Symbol.iterator;function $(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=N&&e[N]||e["@@iterator"])?e:null}var z,M=Object.assign;function D(e){if(void 0===z)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);z=t&&t[1]||""}return"\n"+z+e}var I=!1;function F(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function U(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case _:return"Portal";case E:return"Profiler";case S:return"StrictMode";case O:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function V(e){e._valueTracker||(e._valueTracker=function(e){var t=q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function G(e,t){J(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ie(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,ke=null,Se=null;function Ee(e){if(e=xo(e)){if("function"!==typeof _e)throw Error(i(280));var t=e.stateNode;t&&(t=_o(t),_e(e.stateNode,e.type,t))}}function je(e){ke?Se?Se.push(e):Se=[e]:ke=e}function Ce(){if(ke){var e=ke,t=Se;if(Se=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Te(e,t){return e(t)}function Oe(){}var Re=!1;function Pe(e,t,n){if(Re)return e(t,n);Re=!0;try{return Te(e,t,n)}finally{Re=!1,(null!==ke||null!==Se)&&(Oe(),Ce())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var r=_o(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Le=!1;if(c)try{var Ne={};Object.defineProperty(Ne,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Ne,Ne),window.removeEventListener("test",Ne,Ne)}catch(ce){Le=!1}function $e(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ze=!1,Me=null,De=!1,Ie=null,Fe={onError:function(e){ze=!0,Me=e}};function Ue(e,t,n,r,o,i,a,s,l){ze=!1,Me=null,$e.apply(Fe,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(i(188))}function qe(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return He(o),e;if(a===r)return He(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ve(e):null}function Ve(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ve(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,Xe=o.unstable_requestPaint,Je=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~o;0!==s?r=dt(s):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,_t,kt,St,Et,jt=!1,Ct=[],Tt=null,Ot=null,Rt=null,Pt=new Map,At=new Map,Lt=[],Nt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $t(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Pt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function zt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&_t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Mt(e){var t=bo(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&_t(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function It(e,t,n){Dt(e)&&n.delete(t)}function Ft(){jt=!1,null!==Tt&&Dt(Tt)&&(Tt=null),null!==Ot&&Dt(Ot)&&(Ot=null),null!==Rt&&Dt(Rt)&&(Rt=null),Pt.forEach(It),At.forEach(It)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ft)))}function Bt(e){function t(t){return Ut(t,e)}if(0<Ct.length){Ut(Ct[0],e);for(var n=1;n<Ct.length;n++){var r=Ct[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==Ot&&Ut(Ot,e),null!==Rt&&Ut(Rt,e),Pt.forEach(t),At.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)Mt(n),null===n.blockedOn&&Lt.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function qt(e,t,n,r){var o=bt,i=Wt.transition;Wt.transition=null;try{bt=1,Kt(e,t,n,r)}finally{bt=o,Wt.transition=i}}function Vt(e,t,n,r){var o=bt,i=Wt.transition;Wt.transition=null;try{bt=4,Kt(e,t,n,r)}finally{bt=o,Wt.transition=i}}function Kt(e,t,n,r){if(Ht){var o=Qt(e,t,n,r);if(null===o)Hr(e,t,r,Yt,n),$t(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Tt=zt(Tt,e,t,n,r,o),!0;case"dragenter":return Ot=zt(Ot,e,t,n,r,o),!0;case"mouseover":return Rt=zt(Rt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Pt.set(i,zt(Pt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,At.set(i,zt(At.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if($t(e,r),4&t&&-1<Nt.indexOf(e)){for(;null!==o;){var i=xo(o);if(null!==i&&wt(i),null===(i=Qt(e,t,n,r))&&Hr(e,t,r,Yt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function Qt(e,t,n,r){if(Yt=null,null!==(e=bo(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Jt=null,Gt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Gt,r=n.length,o="value"in Jt?Jt.value:Jt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=M({},un,{view:0,detail:0}),fn=on(dn),pn=M({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=on(pn),mn=on(M({},pn,{dataTransfer:0})),gn=on(M({},dn,{relatedTarget:0})),vn=on(M({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=M({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(yn),xn=on(M({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_n={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Sn}var jn=M({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?_n[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=on(jn),Tn=on(M({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),On=on(M({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Rn=on(M({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Pn=M({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=on(Pn),Ln=[9,13,27,32],Nn=c&&"CompositionEvent"in window,$n=null;c&&"documentMode"in document&&($n=document.documentMode);var zn=c&&"TextEvent"in window&&!$n,Mn=c&&(!Nn||$n&&8<$n&&11>=$n),Dn=String.fromCharCode(32),In=!1;function Fn(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function qn(e,t,n,r){je(r),0<(t=Vr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,Kn=null;function Yn(e){Dr(e,0)}function Qn(e){if(K(wo(e)))return e}function Xn(e,t){if("change"===e)return t}var Jn=!1;if(c){var Gn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Gn=Zn}else Gn=!1;Jn=Gn&&(!document.documentMode||9<document.documentMode)}function tr(){Vn&&(Vn.detachEvent("onpropertychange",nr),Kn=Vn=null)}function nr(e){if("value"===e.propertyName&&Qn(Kn)){var t=[];qn(t,Kn,e,we(e)),Pe(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Vn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Kn)}function ir(e,t){if("click"===e)return Qn(t)}function ar(e,t){if("input"===e||"change"===e)return Qn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!sr(e[o],t[o]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cr(n,i);var a=cr(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Vr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Sr={};function Er(e){if(kr[e])return kr[e];if(!_r[e])return e;var t,n=_r[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return kr[e]=n[t];return e}c&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);var jr=Er("animationend"),Cr=Er("animationiteration"),Tr=Er("animationstart"),Or=Er("transitionend"),Rr=new Map,Pr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Rr.set(e,t),l(t,[e])}for(var Lr=0;Lr<Pr.length;Lr++){var Nr=Pr[Lr];Ar(Nr.toLowerCase(),"on"+(Nr[0].toUpperCase()+Nr.slice(1)))}Ar(jr,"onAnimationEnd"),Ar(Cr,"onAnimationIteration"),Ar(Tr,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Or,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zr=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Mr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,s,l,u){if(Ue.apply(this,arguments),ze){if(!ze)throw Error(i(198));var c=Me;ze=!1,Me=null,De||(De=!0,Ie=c)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Mr(o,s,u),i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Mr(o,s,u),i=l}}}if(De)throw e=Ie,De=!1,Ie=null,e}function Ir(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,a.forEach((function(t){"selectionchange"!==t&&(zr.has(t)||Fr(t,!1,e),Fr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Fr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Xt(t)){case 1:var o=qt;break;case 4:o=Vt;break;default:o=Kt}n=o.bind(null,t,n,e),o=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=bo(s)))return;if(5===(l=a.tag)||6===l){r=i=a;continue e}s=s.parentNode}}r=r.return}Pe((function(){var r=i,o=we(n),a=[];e:{var s=Rr.get(e);if(void 0!==s){var l=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Cn;break;case"focusin":u="focus",l=gn;break;case"focusout":u="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=On;break;case jr:case Cr:case Tr:l=vn;break;case Or:l=Rn;break;case"scroll":l=fn;break;case"wheel":l=An;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Ae(h,f))&&c.push(qr(h,m,p)))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,n,o),a.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!bo(u)&&!u[mo])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?bo(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:wo(l),p=null==u?s:wo(u),(s=new c(m,h+"leave",l,n,o)).target=d,s.relatedTarget=p,m=null,bo(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,h=0,p=c=l;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)c=Kr(c),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==l&&Yr(a,s,l,c,!1),null!==u&&null!==d&&Yr(a,d,u,c,!0)}if("select"===(l=(s=r?wo(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Xn;else if(Hn(s))if(Jn)g=ar;else{g=or;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ir);switch(g&&(g=g(e,r))?qn(a,g,n,o):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?wo(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(a,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(a,n,o)}var y;if(Nn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Bn?Fn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Mn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Bn&&(y=en()):(Gt="value"in(Jt=o)?Jt.value:Jt.textContent,Bn=!0)),0<(v=Vr(r,b)).length&&(b=new xn(b,e,null,n,o),a.push({event:b,listeners:v}),y?b.data=y:null!==(y=Un(n))&&(b.data=y))),(y=zn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(In=!0,Dn);case"textInput":return(e=t.data)===Dn&&In?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Nn&&Fn(e,t)?(e=en(),Zt=Gt=Jt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Vr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=y))}Dr(a,t)}))}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Ae(e,n))&&r.unshift(qr(e,i,o)),null!=(i=Ae(e,t))&&r.push(qr(e,i,o))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,o?null!=(l=Ae(n,i))&&a.unshift(qr(n,l,s)):o||null!=(l=Ae(n,i))&&a.push(qr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Jr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Xr,"")}function Gr(e,t,n){if(t=Jr(t),Jr(e)!==t&&n)throw Error(i(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(so)}:ro;function so(e){setTimeout((function(){throw e}))}function lo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Bt(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,vo="__reactListeners$"+fo,yo="__reactHandles$"+fo;function bo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[po])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function _o(e){return e[ho]||null}var ko=[],So=-1;function Eo(e){return{current:e}}function jo(e){0>So||(e.current=ko[So],ko[So]=null,So--)}function Co(e,t){So++,ko[So]=e.current,e.current=t}var To={},Oo=Eo(To),Ro=Eo(!1),Po=To;function Ao(e,t){var n=e.type.contextTypes;if(!n)return To;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Lo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function No(){jo(Ro),jo(Oo)}function $o(e,t,n){if(Oo.current!==To)throw Error(i(168));Co(Oo,t),Co(Ro,n)}function zo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,W(e)||"Unknown",o));return M({},n,r)}function Mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||To,Po=Oo.current,Co(Oo,e),Co(Ro,Ro.current),!0}function Do(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=zo(e,t,Po),r.__reactInternalMemoizedMergedChildContext=e,jo(Ro),jo(Oo),Co(Oo,e)):jo(Ro),Co(Ro,n)}var Io=null,Fo=!1,Uo=!1;function Bo(e){null===Io?Io=[e]:Io.push(e)}function Wo(){if(!Uo&&null!==Io){Uo=!0;var e=0,t=bt;try{var n=Io;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Io=null,Fo=!1}catch(o){throw null!==Io&&(Io=Io.slice(e+1)),Ke(Ze,Wo),o}finally{bt=t,Uo=!1}}return null}var Ho=[],qo=0,Vo=null,Ko=0,Yo=[],Qo=0,Xo=null,Jo=1,Go="";function Zo(e,t){Ho[qo++]=Ko,Ho[qo++]=Vo,Vo=e,Ko=t}function ei(e,t,n){Yo[Qo++]=Jo,Yo[Qo++]=Go,Yo[Qo++]=Xo,Xo=e;var r=Jo;e=Go;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Jo=1<<32-at(t)+o|n<<o|r,Go=i+e}else Jo=1<<i|n<<o|r,Go=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ni(e){for(;e===Vo;)Vo=Ho[--qo],Ho[qo]=null,Ko=Ho[--qo],Ho[qo]=null;for(;e===Xo;)Xo=Yo[--Qo],Yo[Qo]=null,Go=Yo[--Qo],Yo[Qo]=null,Jo=Yo[--Qo],Yo[Qo]=null}var ri=null,oi=null,ii=!1,ai=null;function si(e,t){var n=Au(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xo?{id:Jo,overflow:Go}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Au(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ui(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ii){var t=oi;if(t){var n=t;if(!li(e,t)){if(ui(e))throw Error(i(418));t=uo(n.nextSibling);var r=ri;t&&li(e,t)?si(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ui(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function fi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ui(e))throw pi(),Error(i(418));for(;t;)si(e,t),t=uo(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?uo(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=oi;e;)e=uo(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=x.ReactCurrentBatchConfig;function vi(e,t){if(e&&e.defaultProps){for(var n in t=M({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var yi=Eo(null),bi=null,xi=null,wi=null;function _i(){wi=xi=bi=null}function ki(e){var t=yi.current;jo(yi),e._currentValue=t}function Si(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ei(e,t){bi=e,wi=xi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function ji(e){var t=e._currentValue;if(wi!==e)if(e={context:e,memoizedValue:t,next:null},null===xi){if(null===bi)throw Error(i(308));xi=e,bi.dependencies={lanes:0,firstContext:e}}else xi=xi.next=e;return t}var Ci=null;function Ti(e){null===Ci?Ci=[e]:Ci.push(e)}function Oi(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Ti(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ri(e,r)}function Ri(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Pi=!1;function Ai(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Li(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ni(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $i(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ol)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ri(e,n)}return null===(o=r.interleaved)?(t.next=t,Ti(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ri(e,n)}function zi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Mi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Di(e,t,n,r){var o=e.updateQueue;Pi=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?i=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,c=u=l=null,s=i;;){var f=s.lane,p=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=M({},d,f);break e;case 2:Pi=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,a|=f;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(f=s).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ml|=a,e.lanes=a,e.memoizedState=d}}function Ii(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Fi=(new r.Component).refs;function Ui(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:M({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Bi={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tu(),o=nu(e),i=Ni(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=$i(e,i,o))&&(ru(t,e,o,r),zi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tu(),o=nu(e),i=Ni(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=$i(e,i,o))&&(ru(t,e,o,r),zi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tu(),r=nu(e),o=Ni(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=$i(e,o,r))&&(ru(t,e,r,n),zi(t,e,r))}};function Wi(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(o,i))}function Hi(e,t,n){var r=!1,o=To,i=t.contextType;return"object"===typeof i&&null!==i?i=ji(i):(o=Lo(t)?Po:Oo.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ao(e,o):To),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Bi,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qi(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function Vi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Fi,Ai(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=ji(i):(i=Lo(t)?Po:Oo.current,o.context=Ao(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(Ui(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&Bi.enqueueReplaceState(o,o.state,null),Di(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function Ki(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;t===Fi&&(t=o.refs={}),null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qi(e){return(0,e._init)(e._payload)}function Xi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Nu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Du(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===A&&Qi(i)===t.type)?((r=o(t,n.props)).ref=Ki(e,t,n),r.return=e,r):((r=$u(n.type,n.key,n.props,null,e.mode,r)).ref=Ki(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=zu(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=$u(t.type,t.key,t.props,null,e.mode,n)).ref=Ki(e,null,t),n.return=e,n;case _:return(t=Iu(t,e.mode,n)).return=e,t;case A:return f(e,(0,t._init)(t._payload),n)}if(te(t)||$(t))return(t=zu(t,e.mode,n,null)).return=e,t;Yi(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?u(e,t,n,r):null;case _:return n.key===o?c(e,t,n,r):null;case A:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||$(n))return null!==o?null:d(e,t,n,r,null);Yi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case _:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case A:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||$(r))return d(t,e=e.get(n)||null,r,o,null);Yi(t,r)}return null}function m(o,i,s,l){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),i=a(v,i,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return n(o,d),ii&&Zo(o,m),u;if(null===d){for(;m<s.length;m++)null!==(d=f(o,s[m],l))&&(i=a(d,i,m),null===c?u=d:c.sibling=d,c=d);return ii&&Zo(o,m),u}for(d=r(o,d);m<s.length;m++)null!==(g=h(d,o,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(o,e)})),ii&&Zo(o,m),u}function g(o,s,l,u){var c=$(l);if("function"!==typeof c)throw Error(i(150));if(null==(l=c.call(l)))throw Error(i(151));for(var d=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),s=a(b,s,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(o,m),ii&&Zo(o,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(o,y.value,u))&&(s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return ii&&Zo(o,g),c}for(m=r(o,m);!y.done;g++,y=l.next())null!==(y=h(m,o,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(o,e)})),ii&&Zo(o,g),c}return function e(r,i,a,l){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=i;null!==c;){if(c.key===u){if((u=a.type)===k){if(7===c.tag){n(r,c.sibling),(i=o(c,a.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===A&&Qi(u)===c.type){n(r,c.sibling),(i=o(c,a.props)).ref=Ki(r,c,a),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===k?((i=zu(a.props.children,r.mode,l,a.key)).return=r,r=i):((l=$u(a.type,a.key,a.props,null,r.mode,l)).ref=Ki(r,i,a),l.return=r,r=l)}return s(r);case _:e:{for(c=a.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Iu(a,r.mode,l)).return=r,r=i}return s(r);case A:return e(r,i,(c=a._init)(a._payload),l)}if(te(a))return m(r,i,a,l);if($(a))return g(r,i,a,l);Yi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Du(a,r.mode,l)).return=r,r=i),s(r)):n(r,i)}}var Ji=Xi(!0),Gi=Xi(!1),Zi={},ea=Eo(Zi),ta=Eo(Zi),na=Eo(Zi);function ra(e){if(e===Zi)throw Error(i(174));return e}function oa(e,t){switch(Co(na,t),Co(ta,e),Co(ea,Zi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}jo(ea),Co(ea,t)}function ia(){jo(ea),jo(ta),jo(na)}function aa(e){ra(na.current);var t=ra(ea.current),n=le(t,e.type);t!==n&&(Co(ta,e),Co(ea,n))}function sa(e){ta.current===e&&(jo(ea),jo(ta))}var la=Eo(0);function ua(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function da(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var fa=x.ReactCurrentDispatcher,pa=x.ReactCurrentBatchConfig,ha=0,ma=null,ga=null,va=null,ya=!1,ba=!1,xa=0,wa=0;function _a(){throw Error(i(321))}function ka(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function Sa(e,t,n,r,o,a){if(ha=a,ma=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fa.current=null===e||null===e.memoizedState?ss:ls,e=n(r,o),ba){a=0;do{if(ba=!1,xa=0,25<=a)throw Error(i(301));a+=1,va=ga=null,t.updateQueue=null,fa.current=us,e=n(r,o)}while(ba)}if(fa.current=as,t=null!==ga&&null!==ga.next,ha=0,va=ga=ma=null,ya=!1,t)throw Error(i(300));return e}function Ea(){var e=0!==xa;return xa=0,e}function ja(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===va?ma.memoizedState=va=e:va=va.next=e,va}function Ca(){if(null===ga){var e=ma.alternate;e=null!==e?e.memoizedState:null}else e=ga.next;var t=null===va?ma.memoizedState:va.next;if(null!==t)va=t,ga=e;else{if(null===e)throw Error(i(310));e={memoizedState:(ga=e).memoizedState,baseState:ga.baseState,baseQueue:ga.baseQueue,queue:ga.queue,next:null},null===va?ma.memoizedState=va=e:va=va.next=e}return va}function Ta(e,t){return"function"===typeof t?t(e):t}function Oa(e){var t=Ca(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=ga,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var l=s=null,u=null,c=a;do{var d=c.lane;if((ha&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=f,s=r):u=u.next=f,ma.lanes|=d,Ml|=d}c=c.next}while(null!==c&&c!==a);null===u?s=r:u.next=l,sr(r,t.memoizedState)||(xs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,ma.lanes|=a,Ml|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ra(e){var t=Ca(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{a=e(a,s.action),s=s.next}while(s!==o);sr(a,t.memoizedState)||(xs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Pa(){}function Aa(e,t){var n=ma,r=Ca(),o=t(),a=!sr(r.memoizedState,o);if(a&&(r.memoizedState=o,xs=!0),r=r.queue,Ha($a.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==va&&1&va.memoizedState.tag){if(n.flags|=2048,Ia(9,Na.bind(null,n,r,o,t),void 0,null),null===Rl)throw Error(i(349));0!==(30&ha)||La(n,t,o)}return o}function La(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ma.updateQueue)?(t={lastEffect:null,stores:null},ma.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Na(e,t,n,r){t.value=n,t.getSnapshot=r,za(t)&&Ma(e)}function $a(e,t,n){return n((function(){za(t)&&Ma(e)}))}function za(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ma(e){var t=Ri(e,1);null!==t&&ru(t,e,1,-1)}function Da(e){var t=ja();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=ns.bind(null,ma,e),[t.memoizedState,e]}function Ia(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ma.updateQueue)?(t={lastEffect:null,stores:null},ma.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Fa(){return Ca().memoizedState}function Ua(e,t,n,r){var o=ja();ma.flags|=e,o.memoizedState=Ia(1|t,n,void 0,void 0===r?null:r)}function Ba(e,t,n,r){var o=Ca();r=void 0===r?null:r;var i=void 0;if(null!==ga){var a=ga.memoizedState;if(i=a.destroy,null!==r&&ka(r,a.deps))return void(o.memoizedState=Ia(t,n,i,r))}ma.flags|=e,o.memoizedState=Ia(1|t,n,i,r)}function Wa(e,t){return Ua(8390656,8,e,t)}function Ha(e,t){return Ba(2048,8,e,t)}function qa(e,t){return Ba(4,2,e,t)}function Va(e,t){return Ba(4,4,e,t)}function Ka(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ya(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ba(4,4,Ka.bind(null,t,e),n)}function Qa(){}function Xa(e,t){var n=Ca();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ja(e,t){var n=Ca();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ga(e,t,n){return 0===(21&ha)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),ma.lanes|=n,Ml|=n,e.baseState=!0),t)}function Za(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=pa.transition;pa.transition={};try{e(!1),t()}finally{bt=n,pa.transition=r}}function es(){return Ca().memoizedState}function ts(e,t,n){var r=nu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rs(e))os(t,n);else if(null!==(n=Oi(e,t,n,r))){ru(n,e,r,tu()),is(n,t,r)}}function ns(e,t,n){var r=nu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rs(e))os(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(o.next=o,Ti(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(u){}null!==(n=Oi(e,t,o,r))&&(ru(n,e,r,o=tu()),is(n,t,r))}}function rs(e){var t=e.alternate;return e===ma||null!==t&&t===ma}function os(e,t){ba=ya=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function is(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var as={readContext:ji,useCallback:_a,useContext:_a,useEffect:_a,useImperativeHandle:_a,useInsertionEffect:_a,useLayoutEffect:_a,useMemo:_a,useReducer:_a,useRef:_a,useState:_a,useDebugValue:_a,useDeferredValue:_a,useTransition:_a,useMutableSource:_a,useSyncExternalStore:_a,useId:_a,unstable_isNewReconciler:!1},ss={readContext:ji,useCallback:function(e,t){return ja().memoizedState=[e,void 0===t?null:t],e},useContext:ji,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ua(4194308,4,Ka.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var n=ja();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ja();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ts.bind(null,ma,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ja().memoizedState=e},useState:Da,useDebugValue:Qa,useDeferredValue:function(e){return ja().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=Za.bind(null,e[1]),ja().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ma,o=ja();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Rl)throw Error(i(349));0!==(30&ha)||La(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Wa($a.bind(null,r,a,e),[e]),r.flags|=2048,Ia(9,Na.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ja(),t=Rl.identifierPrefix;if(ii){var n=Go;t=":"+t+"R"+(n=(Jo&~(1<<32-at(Jo)-1)).toString(32)+n),0<(n=xa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=wa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ls={readContext:ji,useCallback:Xa,useContext:ji,useEffect:Ha,useImperativeHandle:Ya,useInsertionEffect:qa,useLayoutEffect:Va,useMemo:Ja,useReducer:Oa,useRef:Fa,useState:function(){return Oa(Ta)},useDebugValue:Qa,useDeferredValue:function(e){return Ga(Ca(),ga.memoizedState,e)},useTransition:function(){return[Oa(Ta)[0],Ca().memoizedState]},useMutableSource:Pa,useSyncExternalStore:Aa,useId:es,unstable_isNewReconciler:!1},us={readContext:ji,useCallback:Xa,useContext:ji,useEffect:Ha,useImperativeHandle:Ya,useInsertionEffect:qa,useLayoutEffect:Va,useMemo:Ja,useReducer:Ra,useRef:Fa,useState:function(){return Ra(Ta)},useDebugValue:Qa,useDeferredValue:function(e){var t=Ca();return null===ga?t.memoizedState=e:Ga(t,ga.memoizedState,e)},useTransition:function(){return[Ra(Ta)[0],Ca().memoizedState]},useMutableSource:Pa,useSyncExternalStore:Aa,useId:es,unstable_isNewReconciler:!1};function cs(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,n){(n=Ni(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ql||(ql=!0,Vl=r),fs(0,t)},n}function ms(e,t,n){(n=Ni(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fs(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){fs(0,t),"function"!==typeof r&&(null===Kl?Kl=new Set([this]):Kl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ju.bind(null,e,t,n),t.then(e,e))}function vs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ys(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ni(-1,1)).tag=2,$i(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var bs=x.ReactCurrentOwner,xs=!1;function ws(e,t,n,r){t.child=null===e?Gi(t,null,n,r):Ji(t,e.child,n,r)}function _s(e,t,n,r,o){n=n.render;var i=t.ref;return Ei(t,o),r=Sa(e,t,n,r,i,o),n=Ea(),null===e||xs?(ii&&n&&ti(t),t.flags|=1,ws(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qs(e,t,o))}function ks(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Lu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=$u(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ss(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return qs(e,t,o)}return t.flags|=1,(e=Nu(i,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref){if(xs=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,qs(e,t,o);0!==(131072&e.flags)&&(xs=!0)}}return Cs(e,t,n,r,o)}function Es(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Co(Nl,Ll),Ll|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Co(Nl,Ll),Ll|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Co(Nl,Ll),Ll|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Co(Nl,Ll),Ll|=r;return ws(e,t,o,n),t.child}function js(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,o){var i=Lo(n)?Po:Oo.current;return i=Ao(t,i),Ei(t,o),n=Sa(e,t,n,r,i,o),r=Ea(),null===e||xs?(ii&&r&&ti(t),t.flags|=1,ws(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qs(e,t,o))}function Ts(e,t,n,r,o){if(Lo(n)){var i=!0;Mo(t)}else i=!1;if(Ei(t,o),null===t.stateNode)Hs(e,t),Hi(t,n,r),Vi(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=ji(u):u=Ao(t,u=Lo(n)?Po:Oo.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==u)&&qi(t,a,r,u),Pi=!1;var f=t.memoizedState;a.state=f,Di(t,r,a,o),l=t.memoizedState,s!==r||f!==l||Ro.current||Pi?("function"===typeof c&&(Ui(t,n,c,r),l=t.memoizedState),(s=Pi||Wi(t,n,s,r,f,l,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Li(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:vi(t.type,s),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=ji(l):l=Ao(t,l=Lo(n)?Po:Oo.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||f!==l)&&qi(t,a,r,l),Pi=!1,f=t.memoizedState,a.state=f,Di(t,r,a,o);var h=t.memoizedState;s!==d||f!==h||Ro.current||Pi?("function"===typeof p&&(Ui(t,n,p,r),h=t.memoizedState),(u=Pi||Wi(t,n,u,r,f,h,l)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Os(e,t,n,r,i,o)}function Os(e,t,n,r,o,i){js(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Do(t,n,!1),qs(e,t,i);r=t.stateNode,bs.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=Ji(t,e.child,null,i),t.child=Ji(t,null,s,i)):ws(e,t,s,i),t.memoizedState=r.state,o&&Do(t,n,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?$o(0,t.pendingContext,t.pendingContext!==t.context):t.context&&$o(0,t.context,!1),oa(e,t.containerInfo)}function Ps(e,t,n,r,o){return hi(),mi(o),t.flags|=256,ws(e,t,n,r),t.child}var As,Ls,Ns,$s,zs={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,n){var r,o=t.pendingProps,a=la.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Co(la,1&a),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&o)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Mu(l,o,0,null),e=zu(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ms(n),t.memoizedState=zs,e):Is(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,s){if(n)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,r=ds(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Mu({mode:"visible",children:r.children},o,0,null),(a=zu(a,o,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&Ji(t,e.child,null,s),t.child.memoizedState=Ms(s),t.memoizedState=zs,a);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,Fs(e,t,s,r=ds(a=Error(i(419)),r,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(r=Rl)){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|s))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Ri(e,o),ru(r,e,o,-1))}return gu(),Fs(e,t,s,r=ds(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Tu.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=uo(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Yo[Qo++]=Jo,Yo[Qo++]=Go,Yo[Qo++]=Xo,Jo=e.id,Go=e.overflow,Xo=t),t=Is(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,a,n);if(s){s=o.fallback,l=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&l)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=Nu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Nu(r,s):(s=zu(s,l,n,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=null===(l=e.child.memoizedState)?Ms(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=zs,o}return e=(s=e.child).sibling,o=Nu(s,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Is(e,t){return(t=Mu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&mi(r),Ji(t,e.child,null,n),(e=Is(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Us(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Si(e.return,t,n)}function Bs(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ws(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ws(e,t,r.children,n),0!==(2&(r=la.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Us(e,n,t);else if(19===e.tag)Us(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Co(la,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ua(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ua(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bs(t,!0,n,null,i);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ml|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Nu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vs(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ks(t),null;case 1:case 17:return Lo(t.type)&&No(),Ks(t),null;case 3:return r=t.stateNode,ia(),jo(Ro),jo(Oo),da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(su(ai),ai=null))),Ls(e,t),Ks(t),null;case 5:sa(t);var o=ra(na.current);if(n=t.type,null!==e&&null!=t.stateNode)Ns(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ks(t),null}if(e=ra(ea.current),fi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[po]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":Ir("cancel",r),Ir("close",r);break;case"iframe":case"object":case"embed":Ir("load",r);break;case"video":case"audio":for(o=0;o<$r.length;o++)Ir($r[o],r);break;case"source":Ir("error",r);break;case"img":case"image":case"link":Ir("error",r),Ir("load",r);break;case"details":Ir("toggle",r);break;case"input":X(r,a),Ir("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ir("invalid",r);break;case"textarea":oe(r,a),Ir("invalid",r)}for(var l in ye(n,a),o=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Gr(r.textContent,u,e),o=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Gr(r.textContent,u,e),o=["children",""+u]):s.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Ir("scroll",r)}switch(n){case"input":V(r),Z(r,a,!0);break;case"textarea":V(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[po]=t,e[ho]=r,As(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(n,r),n){case"dialog":Ir("cancel",e),Ir("close",e),o=r;break;case"iframe":case"object":case"embed":Ir("load",e),o=r;break;case"video":case"audio":for(o=0;o<$r.length;o++)Ir($r[o],e);o=r;break;case"source":Ir("error",e),o=r;break;case"img":case"image":case"link":Ir("error",e),Ir("load",e),o=r;break;case"details":Ir("toggle",e),o=r;break;case"input":X(e,r),o=Q(e,r),Ir("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=M({},r,{value:void 0}),Ir("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Ir("invalid",e)}for(a in ye(n,o),u=o)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Ir("scroll",e):null!=c&&b(e,a,c,l))}switch(n){case"input":V(e),Z(e,r,!1);break;case"textarea":V(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ks(t),null;case 6:if(e&&null!=t.stateNode)$s(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=ra(na.current),ra(ea.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Gr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Gr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Ks(t),null;case 13:if(jo(la),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))pi(),hi(),t.flags|=98560,a=!1;else if(a=fi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[po]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),a=!1}else null!==ai&&(su(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&la.current)?0===$l&&($l=3):gu())),null!==t.updateQueue&&(t.flags|=4),Ks(t),null);case 4:return ia(),Ls(e,t),null===e&&Br(t.stateNode.containerInfo),Ks(t),null;case 10:return ki(t.type._context),Ks(t),null;case 19:if(jo(la),null===(a=t.memoizedState))return Ks(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Vs(a,!1);else{if(0!==$l||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ua(e))){for(t.flags|=128,Vs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Co(la,1&la.current|2),t.child}e=e.sibling}null!==a.tail&&Je()>Wl&&(t.flags|=128,r=!0,Vs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ua(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!ii)return Ks(t),null}else 2*Je()-a.renderingStartTime>Wl&&1073741824!==n&&(t.flags|=128,r=!0,Vs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Je(),t.sibling=null,n=la.current,Co(la,r?1&n|2:1&n),t):(Ks(t),null);case 22:case 23:return fu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ll)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Qs(e,t){switch(ni(t),t.tag){case 1:return Lo(t.type)&&No(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ia(),jo(Ro),jo(Oo),da(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return sa(t),null;case 13:if(jo(la),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return jo(la),null;case 4:return ia(),null;case 10:return ki(t.type._context),null;case 22:case 23:return fu(),null;default:return null}}As=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ls=function(){},Ns=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ra(ea.current);var i,a=null;switch(n){case"input":o=Q(e,o),r=Q(e,r),a=[];break;case"select":o=M({},o,{value:void 0}),r=M({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var l=o[c];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(s.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(i in l)!l.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&l[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(s.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ir("scroll",e),a||l===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},$s=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xs=!1,Js=!1,Gs="function"===typeof WeakSet?WeakSet:Set,Zs=null;function el(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function tl(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var nl=!1;function rl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&tl(t,n,i)}o=o.next}while(o!==r)}}function ol(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[vo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function ll(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,fl=!1;function pl(e,t,n){for(n=n.child;null!==n;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(s){}switch(n.tag){case 5:Js||el(n,t);case 6:var r=dl,o=fl;dl=null,pl(e,t,n),fl=o,null!==(dl=r)&&(fl?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(fl?(e=dl,n=n.stateNode,8===e.nodeType?lo(e.parentNode,n):1===e.nodeType&&lo(e,n),Bt(e)):lo(dl,n.stateNode));break;case 4:r=dl,o=fl,dl=n.stateNode.containerInfo,fl=!0,pl(e,t,n),dl=r,fl=o;break;case 0:case 11:case 14:case 15:if(!Js&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&tl(n,t,a),o=o.next}while(o!==r)}pl(e,t,n);break;case 1:if(!Js&&(el(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Eu(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Js=(r=Js)||null!==n.memoizedState,pl(e,t,n),Js=r):pl(e,t,n);break;default:pl(e,t,n)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gs),t.forEach((function(t){var r=Ou.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,fl=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,fl=!0;break e}l=l.return}if(null===dl)throw Error(i(160));hl(a,s,o),dl=null,fl=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){Eu(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vl(t,e),t=t.sibling}function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),yl(e),4&r){try{rl(3,e,e.return),ol(3,e)}catch(g){Eu(e,e.return,g)}try{rl(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:gl(t,e),yl(e),512&r&&null!==n&&el(n,n.return);break;case 5:if(gl(t,e),yl(e),512&r&&null!==n&&el(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===a.type&&null!=a.name&&J(o,a),be(l,s);var c=be(l,a);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):b(o,d,f,c)}switch(l){case"input":G(o,a);break;case"textarea":ie(o,a);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(g){Eu(e,e.return,g)}}break;case 6:if(gl(t,e),yl(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){Eu(e,e.return,g)}}break;case 3:if(gl(t,e),yl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:gl(t,e),yl(e);break;case 13:gl(t,e),yl(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Bl=Je())),4&r&&ml(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Js=(c=Js)||d,gl(t,e),Js=c):gl(t,e),yl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zs=e,d=e.child;null!==d;){for(f=Zs=d;null!==Zs;){switch(h=(p=Zs).child,p.tag){case 0:case 11:case 14:case 15:rl(4,p,p.return);break;case 1:el(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:el(p,p.return);break;case 22:if(null!==p.memoizedState){_l(f);continue}}null!==h?(h.return=p,Zs=h):_l(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,c?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=f.stateNode,s=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=me("display",s))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gl(t,e),yl(e),4&r&&ml(e);case 21:}}function yl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(sl(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),cl(e,ll(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ul(e,ll(e),a);break;default:throw Error(i(161))}}catch(s){Eu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Zs=e,xl(e,t,n)}function xl(e,t,n){for(var r=0!==(1&e.mode);null!==Zs;){var o=Zs,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Xs;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||Js;s=Xs;var u=Js;if(Xs=a,(Js=l)&&!u)for(Zs=o;null!==Zs;)l=(a=Zs).child,22===a.tag&&null!==a.memoizedState?kl(o):null!==l?(l.return=a,Zs=l):kl(o);for(;null!==i;)Zs=i,xl(i,t,n),i=i.sibling;Zs=o,Xs=s,Js=u}wl(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Zs=i):wl(e)}}function wl(e){for(;null!==Zs;){var t=Zs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Js||ol(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Js)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:vi(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ii(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ii(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(i(163))}Js||512&t.flags&&il(t)}catch(p){Eu(t,t.return,p)}}if(t===e){Zs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zs=n;break}Zs=t.return}}function _l(e){for(;null!==Zs;){var t=Zs;if(t===e){Zs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zs=n;break}Zs=t.return}}function kl(e){for(;null!==Zs;){var t=Zs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ol(4,t)}catch(l){Eu(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(l){Eu(t,o,l)}}var i=t.return;try{il(t)}catch(l){Eu(t,i,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Eu(t,a,l)}}}catch(l){Eu(t,t.return,l)}if(t===e){Zs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Zs=s;break}Zs=t.return}}var Sl,El=Math.ceil,jl=x.ReactCurrentDispatcher,Cl=x.ReactCurrentOwner,Tl=x.ReactCurrentBatchConfig,Ol=0,Rl=null,Pl=null,Al=0,Ll=0,Nl=Eo(0),$l=0,zl=null,Ml=0,Dl=0,Il=0,Fl=null,Ul=null,Bl=0,Wl=1/0,Hl=null,ql=!1,Vl=null,Kl=null,Yl=!1,Ql=null,Xl=0,Jl=0,Gl=null,Zl=-1,eu=0;function tu(){return 0!==(6&Ol)?Je():-1!==Zl?Zl:Zl=Je()}function nu(e){return 0===(1&e.mode)?1:0!==(2&Ol)&&0!==Al?Al&-Al:null!==gi.transition?(0===eu&&(eu=mt()),eu):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function ru(e,t,n,r){if(50<Jl)throw Jl=0,Gl=null,Error(i(185));vt(e,n,r),0!==(2&Ol)&&e===Rl||(e===Rl&&(0===(2&Ol)&&(Dl|=n),4===$l&&lu(e,Al)),ou(e,r),1===n&&0===Ol&&0===(1&t.mode)&&(Wl=Je()+500,Fo&&Wo()))}function ou(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=pt(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=ft(e,e===Rl?Al:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Fo=!0,Bo(e)}(uu.bind(null,e)):Bo(uu.bind(null,e)),ao((function(){0===(6&Ol)&&Wo()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ru(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Zl=-1,eu=0,0!==(6&Ol))throw Error(i(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=ft(e,e===Rl?Al:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=vu(e,r);else{t=r;var o=Ol;Ol|=2;var a=mu();for(Rl===e&&Al===t||(Hl=null,Wl=Je()+500,pu(e,t));;)try{bu();break}catch(l){hu(e,l)}_i(),jl.current=a,Ol=o,null!==Pl?t=0:(Rl=null,Al=0,t=$l)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=au(e,o))),1===t)throw n=zl,pu(e,0),lu(e,r),ou(e,Je()),n;if(6===t)lu(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!sr(i(),o))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=vu(e,r))&&(0!==(a=ht(e))&&(r=a,t=au(e,a))),1===t))throw n=zl,pu(e,0),lu(e,r),ou(e,Je()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:_u(e,Ul,Hl);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Bl+500-Je())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){tu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(_u.bind(null,e,Ul,Hl),t);break}_u(e,Ul,Hl);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>o&&(o=s),r&=~a}if(r=o,10<(r=(120>(r=Je()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*El(r/1960))-r)){e.timeoutHandle=ro(_u.bind(null,e,Ul,Hl),r);break}_u(e,Ul,Hl);break;default:throw Error(i(329))}}}return ou(e,Je()),e.callbackNode===n?iu.bind(null,e):null}function au(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=vu(e,t))&&(t=Ul,Ul=n,null!==t&&su(t)),e}function su(e){null===Ul?Ul=e:Ul.push.apply(Ul,e)}function lu(e,t){for(t&=~Il,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(0!==(6&Ol))throw Error(i(327));ku();var t=ft(e,0);if(0===(1&t))return ou(e,Je()),null;var n=vu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=au(e,r))}if(1===n)throw n=zl,pu(e,0),lu(e,t),ou(e,Je()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_u(e,Ul,Hl),ou(e,Je()),null}function cu(e,t){var n=Ol;Ol|=1;try{return e(t)}finally{0===(Ol=n)&&(Wl=Je()+500,Fo&&Wo())}}function du(e){null!==Ql&&0===Ql.tag&&0===(6&Ol)&&ku();var t=Ol;Ol|=1;var n=Tl.transition,r=bt;try{if(Tl.transition=null,bt=1,e)return e()}finally{bt=r,Tl.transition=n,0===(6&(Ol=t))&&Wo()}}function fu(){Ll=Nl.current,jo(Nl)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Pl)for(n=Pl.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&No();break;case 3:ia(),jo(Ro),jo(Oo),da();break;case 5:sa(r);break;case 4:ia();break;case 13:case 19:jo(la);break;case 10:ki(r.type._context);break;case 22:case 23:fu()}n=n.return}if(Rl=e,Pl=e=Nu(e.current,null),Al=Ll=t,$l=0,zl=null,Il=Dl=Ml=0,Ul=Fl=null,null!==Ci){for(t=0;t<Ci.length;t++)if(null!==(r=(n=Ci[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Ci=null}return e}function hu(e,t){for(;;){var n=Pl;try{if(_i(),fa.current=as,ya){for(var r=ma.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ya=!1}if(ha=0,va=ga=ma=null,ba=!1,xa=0,Cl.current=null,null===n||null===n.return){$l=1,zl=t,Pl=null;break}e:{var a=e,s=n.return,l=n,u=t;if(t=Al,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=vs(s);if(null!==h){h.flags&=-257,ys(h,s,l,0,t),1&h.mode&&gs(a,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){gs(a,c,t),gu();break e}u=Error(i(426))}else if(ii&&1&l.mode){var v=vs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),ys(v,s,l,0,t),mi(cs(u,l));break e}}a=u=cs(u,l),4!==$l&&($l=2),null===Fl?Fl=[a]:Fl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Mi(a,hs(0,u,t));break e;case 1:l=u;var y=a.type,b=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Kl||!Kl.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Mi(a,ms(a,l,t));break e}}a=a.return}while(null!==a)}wu(n)}catch(x){t=x,Pl===n&&null!==n&&(Pl=n=n.return);continue}break}}function mu(){var e=jl.current;return jl.current=as,null===e?as:e}function gu(){0!==$l&&3!==$l&&2!==$l||($l=4),null===Rl||0===(268435455&Ml)&&0===(268435455&Dl)||lu(Rl,Al)}function vu(e,t){var n=Ol;Ol|=2;var r=mu();for(Rl===e&&Al===t||(Hl=null,pu(e,t));;)try{yu();break}catch(o){hu(e,o)}if(_i(),Ol=n,jl.current=r,null!==Pl)throw Error(i(261));return Rl=null,Al=0,$l}function yu(){for(;null!==Pl;)xu(Pl)}function bu(){for(;null!==Pl&&!Qe();)xu(Pl)}function xu(e){var t=Sl(e.alternate,e,Ll);e.memoizedProps=e.pendingProps,null===t?wu(e):Pl=t,Cl.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ys(n,t,Ll)))return void(Pl=n)}else{if(null!==(n=Qs(n,t)))return n.flags&=32767,void(Pl=n);if(null===e)return $l=6,void(Pl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Pl=t);Pl=t=e}while(null!==t);0===$l&&($l=5)}function _u(e,t,n){var r=bt,o=Tl.transition;try{Tl.transition=null,bt=1,function(e,t,n,r){do{ku()}while(null!==Ql);if(0!==(6&Ol))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Rl&&(Pl=Rl=null,Al=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yl||(Yl=!0,Ru(tt,(function(){return ku(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Tl.transition,Tl.transition=null;var s=bt;bt=1;var l=Ol;Ol|=4,Cl.current=null,function(e,t){if(eo=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(l=s+o),f!==a||0!==r&&3!==f.nodeType||(u=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===o&&(l=s),p===a&&++d===r&&(u=s),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Ht=!1,Zs=t;null!==Zs;)if(e=(t=Zs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zs=e;else for(;null!==Zs;){t=Zs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:vi(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zs=e;break}Zs=t.return}m=nl,nl=!1}(e,n),vl(n,e),hr(to),Ht=!!eo,to=eo=null,e.current=n,bl(n,e,o),Xe(),Ol=l,bt=s,Tl.transition=a}else e.current=n;if(Yl&&(Yl=!1,Ql=e,Xl=o),a=e.pendingLanes,0===a&&(Kl=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ou(e,Je()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ql)throw ql=!1,e=Vl,Vl=null,e;0!==(1&Xl)&&0!==e.tag&&ku(),a=e.pendingLanes,0!==(1&a)?e===Gl?Jl++:(Jl=0,Gl=e):Jl=0,Wo()}(e,t,n,r)}finally{Tl.transition=o,bt=r}return null}function ku(){if(null!==Ql){var e=xt(Xl),t=Tl.transition,n=bt;try{if(Tl.transition=null,bt=16>e?16:e,null===Ql)var r=!1;else{if(e=Ql,Ql=null,Xl=0,0!==(6&Ol))throw Error(i(331));var o=Ol;for(Ol|=4,Zs=e.current;null!==Zs;){var a=Zs,s=a.child;if(0!==(16&Zs.flags)){var l=a.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Zs=c;null!==Zs;){var d=Zs;switch(d.tag){case 0:case 11:case 15:rl(8,d,a)}var f=d.child;if(null!==f)f.return=d,Zs=f;else for(;null!==Zs;){var p=(d=Zs).sibling,h=d.return;if(al(d),d===c){Zs=null;break}if(null!==p){p.return=h,Zs=p;break}Zs=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Zs=s;else e:for(;null!==Zs;){if(0!==(2048&(a=Zs).flags))switch(a.tag){case 0:case 11:case 15:rl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Zs=y;break e}Zs=a.return}}var b=e.current;for(Zs=b;null!==Zs;){var x=(s=Zs).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Zs=x;else e:for(s=b;null!==Zs;){if(0!==(2048&(l=Zs).flags))try{switch(l.tag){case 0:case 11:case 15:ol(9,l)}}catch(_){Eu(l,l.return,_)}if(l===s){Zs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Zs=w;break e}Zs=l.return}}if(Ol=o,Wo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(_){}r=!0}return r}finally{bt=n,Tl.transition=t}}return!1}function Su(e,t,n){e=$i(e,t=hs(0,t=cs(n,t),1),1),t=tu(),null!==e&&(vt(e,1,t),ou(e,t))}function Eu(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Kl||!Kl.has(r))){t=$i(t,e=ms(t,e=cs(n,e),1),1),e=tu(),null!==t&&(vt(t,1,e),ou(t,e));break}}t=t.return}}function ju(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=tu(),e.pingedLanes|=e.suspendedLanes&n,Rl===e&&(Al&n)===n&&(4===$l||3===$l&&(130023424&Al)===Al&&500>Je()-Bl?pu(e,0):Il|=n),ou(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=tu();null!==(e=Ri(e,t))&&(vt(e,t,n),ou(e,n))}function Tu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Ou(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Cu(e,n)}function Ru(e,t){return Ke(e,t)}function Pu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Au(e,t,n,r){return new Pu(e,t,n,r)}function Lu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nu(e,t){var n=e.alternate;return null===n?((n=Au(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $u(e,t,n,r,o,a){var s=2;if(r=e,"function"===typeof e)Lu(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case k:return zu(n.children,o,a,t);case S:s=8,o|=8;break;case E:return(e=Au(12,n,t,2|o)).elementType=E,e.lanes=a,e;case O:return(e=Au(13,n,t,o)).elementType=O,e.lanes=a,e;case R:return(e=Au(19,n,t,o)).elementType=R,e.lanes=a,e;case L:return Mu(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:s=10;break e;case C:s=9;break e;case T:s=11;break e;case P:s=14;break e;case A:s=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Au(s,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function zu(e,t,n,r){return(e=Au(7,e,r,t)).lanes=n,e}function Mu(e,t,n,r){return(e=Au(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function Du(e,t,n){return(e=Au(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Au(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Uu(e,t,n,r,o,i,a,s,l){return e=new Fu(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Au(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ai(i),e}function Bu(e){if(!e)return To;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Lo(n))return zo(e,n,t)}return t}function Wu(e,t,n,r,o,i,a,s,l){return(e=Uu(n,r,!0,e,0,i,0,s,l)).context=Bu(null),n=e.current,(i=Ni(r=tu(),o=nu(n))).callback=void 0!==t&&null!==t?t:null,$i(n,i,o),e.current.lanes=o,vt(e,o,r),ou(e,r),e}function Hu(e,t,n,r){var o=t.current,i=tu(),a=nu(o);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ni(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$i(o,t,a))&&(ru(e,o,a,i),zi(e,o,a)),a}function qu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ro.current)xs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xs=!1,function(e,t,n){switch(t.tag){case 3:Rs(t),hi();break;case 5:aa(t);break;case 1:Lo(t.type)&&Mo(t);break;case 4:oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Co(yi,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Co(la,1&la.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ds(e,t,n):(Co(la,1&la.current),null!==(e=qs(e,t,n))?e.sibling:null);Co(la,1&la.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ws(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Co(la,la.current),r)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,n)}return qs(e,t,n)}(e,t,n);xs=0!==(131072&e.flags)}else xs=!1,ii&&0!==(1048576&t.flags)&&ei(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var o=Ao(t,Oo.current);Ei(t,n),o=Sa(null,t,r,e,o,n);var a=Ea();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lo(r)?(a=!0,Mo(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Ai(t),o.updater=Bi,t.stateNode=o,o._reactInternals=t,Vi(t,r,e,n),t=Os(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),ws(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Lu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===P)return 14}return 2}(r),e=vi(r,e),o){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=_s(null,t,r,e,n);break e;case 14:t=ks(null,t,r,vi(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Cs(e,t,r,o=t.elementType===r?o:vi(r,o),n);case 1:return r=t.type,o=t.pendingProps,Ts(e,t,r,o=t.elementType===r?o:vi(r,o),n);case 3:e:{if(Rs(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Li(e,t),Di(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ps(e,t,r,n,o=cs(Error(i(423)),t));break e}if(r!==o){t=Ps(e,t,r,n,o=cs(Error(i(424)),t));break e}for(oi=uo(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=Gi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=qs(e,t,n);break e}ws(e,t,r,n)}t=t.child}return t;case 5:return aa(t),null===e&&ci(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,s=o.children,no(r,o)?s=null:null!==a&&no(r,a)&&(t.flags|=32),js(e,t),ws(e,t,s,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Ds(e,t,n);case 4:return oa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Ji(t,null,r,n):ws(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,_s(e,t,r,o=t.elementType===r?o:vi(r,o),n);case 7:return ws(e,t,t.pendingProps,n),t.child;case 8:case 12:return ws(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,Co(yi,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===o.children&&!Ro.current){t=qs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Ni(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Si(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(i(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Si(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}ws(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ei(t,n),r=r(o=ji(o)),t.flags|=1,ws(e,t,r,n),t.child;case 14:return o=vi(r=t.type,t.pendingProps),ks(e,t,r,o=vi(r.type,o),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vi(r,o),Hs(e,t),t.tag=1,Lo(r)?(e=!0,Mo(t)):e=!1,Ei(t,n),Hi(t,r,o),Vi(t,r,o,n),Os(null,t,r,!0,e,n);case 19:return Ws(e,t,n);case 22:return Es(e,t,n)}throw Error(i(156,t.tag))};var Yu="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Xu(e){this._internalRoot=e}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function ec(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var s=o;o=function(){var e=qu(a);s.call(e)}}Hu(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=qu(a);i.call(e)}}var a=Wu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=a,e[mo]=a.current,Br(8===e.nodeType?e.parentNode:e),du(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var s=r;r=function(){var e=qu(l);s.call(e)}}var l=Uu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=l,e[mo]=l.current,Br(8===e.nodeType?e.parentNode:e),du((function(){Hu(t,l,n,r)})),l}(n,t,e,o,r);return qu(a)}Xu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Hu(e,t,null,null)},Xu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;du((function(){Hu(null,e,null,null)})),t[mo]=null}},Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&Mt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ou(t,Je()),0===(6&Ol)&&(Wl=Je()+500,Wo()))}break;case 13:du((function(){var t=Ri(e,1);if(null!==t){var n=tu();ru(t,e,1,n)}})),Ku(e,1)}},_t=function(e){if(13===e.tag){var t=Ri(e,134217728);if(null!==t)ru(t,e,134217728,tu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=nu(e),n=Ri(e,t);if(null!==n)ru(n,e,t,tu());Ku(e,t)}},St=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},_e=function(e,t,n){switch(t){case"input":if(G(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_o(r);if(!o)throw Error(i(90));K(r),G(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=cu,Oe=du;var tc={usingClientEntryPoint:!1,Events:[xo,wo,_o,je,Ce,cu]},nc={findFiberByHostInstance:bo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=qe(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{ot=oc.inject(rc),it=oc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Ju(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:_,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Ju(e))throw Error(i(299));var n=!1,r="",o=Yu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Uu(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Br(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=qe(t))?null:e.stateNode},t.flushSync=function(e){return du(e)},t.hydrate=function(e,t,n){if(!Gu(t))throw Error(i(200));return ec(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Ju(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",s=Yu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Wu(t,null,e,1,null!=n?n:null,o,0,a,s),e[mo]=t.current,Br(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xu(t)},t.render=function(e,t,n){if(!Gu(t))throw Error(i(200));return ec(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(i(40));return!!e._reactRootContainer&&(du((function(){ec(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=cu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return ec(e,t,n,!1,r)},t.version="18.2.0-next-9e3b772b8-20220608"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>ki,hasStandardBrowserEnv:()=>Ei,hasStandardBrowserWebWorkerEnv:()=>ji,navigator:()=>Si,origin:()=>Ci});var t={};n.r(t),n.d(t,{Decoder:()=>el,Encoder:()=>Gs,PacketType:()=>Js,protocol:()=>Xs});var r=n(43),o=n(391),i=(n(175),"popstate");function a(){return p((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return c("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:d(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function s(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function l(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?f(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function p(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:a=!1}=r,l=o.history,f="POP",p=null,h=m();function m(){return(l.state||{idx:null}).idx}function g(){f="POP";let e=m(),t=null==e?null:e-h;h=e,p&&p({action:f,location:y.location,delta:t})}function v(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),s(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,l.replaceState({...l.state,idx:h},""));let y={get action(){return f},get location(){return e(o,l)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(i,g),p=e,()=>{o.removeEventListener(i,g),p=null}},createHref:e=>t(o,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH";let r=c(y.location,e,t);n&&n(r,e),h=m()+1;let i=u(r,h),s=y.createHref(r);try{l.pushState(i,"",s)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;o.location.assign(s)}a&&p&&p({action:f,location:y.location,delta:1})},replace:function(e,t){f="REPLACE";let r=c(y.location,e,t);n&&n(r,e),h=m();let o=u(r,h),i=y.createHref(r);l.replaceState(o,"",i),a&&p&&p({action:f,location:y.location,delta:0})},go:e=>l.go(e)};return y}new WeakMap;function h(e,t){return m(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function m(e,t,n,r){let o=R(("string"===typeof t?f(t):t).pathname||"/",n);if(null==o)return null;let i=g(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=O(o);a=j(i[s],e,r)}return a}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(s(a.relativePath.startsWith(r),`Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(r.length));let l=$([r,a.relativePath]),u=n.concat(a);e.children&&e.children.length>0&&(s(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),g(e.children,t,u,l)),(null!=e.path||e.index)&&t.push({path:l,score:E(l,e.index),routesMeta:u})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of v(e.path))o(e,t,n);else o(e,t)})),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=v(r.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var y=/^:[\w-]+$/,b=3,x=2,w=1,_=10,k=-2,S=e=>"*"===e;function E(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=k),t&&(r+=x),n.filter((e=>!S(e))).reduce(((e,t)=>e+(y.test(t)?b:""===t?w:_)),r)}function j(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:$([i,c.pathname]),pathnameBase:z($([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=$([i,c.pathnameBase]))}return a}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=T(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1),l=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=s[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:i,pathnameBase:a,pattern:e}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];l("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return l(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function P(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function L(e){let t=A(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function N(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=f(e):(r={...e},s(!r.pathname||!r.pathname.includes("?"),P("?","pathname","search",r)),s(!r.pathname||!r.pathname.includes("#"),P("#","pathname","hash",r)),s(!r.search||!r.search.includes("#"),P("#","search","hash",r)));let i,a=""===e||""===r.pathname,l=a?"/":r.pathname;if(null==l)i=n;else{let e=t.length-1;if(!o&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:o=""}="string"===typeof e?f(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:M(r),hash:D(o)}}(r,i),c=l&&"/"!==l&&l.endsWith("/"),d=(a||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!c&&!d||(u.pathname+="/"),u}var $=e=>e.join("/").replace(/\/\/+/g,"/"),z=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",D=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function I(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var F=["POST","PUT","PATCH","DELETE"],U=(new Set(F),["GET",...F]);new Set(U),Symbol("ResetLoaderData");var B=r.createContext(null);B.displayName="DataRouter";var W=r.createContext(null);W.displayName="DataRouterState";var H=r.createContext({isTransitioning:!1});H.displayName="ViewTransition";var q=r.createContext(new Map);q.displayName="Fetchers";var V=r.createContext(null);V.displayName="Await";var K=r.createContext(null);K.displayName="Navigation";var Y=r.createContext(null);Y.displayName="Location";var Q=r.createContext({outlet:null,matches:[],isDataRoute:!1});Q.displayName="Route";var X=r.createContext(null);X.displayName="RouteError";function J(){return null!=r.useContext(Y)}function G(){return s(J(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(Y).location}var Z="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ee(e){r.useContext(K).static||r.useLayoutEffect(e)}function te(){let{isDataRoute:e}=r.useContext(Q);return e?function(){let{router:e}=de("useNavigate"),t=pe("useNavigate"),n=r.useRef(!1);ee((()=>{n.current=!0}));let o=r.useCallback((async function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(n.current,Z),n.current&&("number"===typeof r?e.navigate(r):await e.navigate(r,{fromRouteId:t,...o}))}),[e,t]);return o}():function(){s(J(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(B),{basename:t,navigator:n}=r.useContext(K),{matches:o}=r.useContext(Q),{pathname:i}=G(),a=JSON.stringify(L(o)),u=r.useRef(!1);ee((()=>{u.current=!0}));let c=r.useCallback((function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(l(u.current,Z),!u.current)return;if("number"===typeof r)return void n.go(r);let s=N(r,JSON.parse(a),i,"path"===o.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:$([t,s.pathname])),(o.replace?n.replace:n.push)(s,o.state,o)}),[t,n,a,i,e]);return c}()}r.createContext(null);function ne(){let{matches:e}=r.useContext(Q),t=e[e.length-1];return t?t.params:{}}function re(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:n}=r.useContext(Q),{pathname:o}=G(),i=JSON.stringify(L(n));return r.useMemo((()=>N(e,JSON.parse(i),o,"path"===t)),[e,i,o,t])}function oe(e,t,n,o){s(J(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:a}=r.useContext(K),{matches:u}=r.useContext(Q),c=u[u.length-1],d=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",g=c&&c.route;{let e=g&&g.path||"";ge(p,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=G();if(t){let e="string"===typeof t?f(t):t;s("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let b=v.pathname||"/",x=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!a&&n&&n.matches&&n.matches.length>0?n.matches:h(e,{pathname:x});l(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),l(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=ue(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:$([m,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:$([m,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,n,o);return t&&_?r.createElement(Y.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},_):_}function ie(){let e=he(),t=I(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=r.createElement(r.Fragment,null,r.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:a},"ErrorBoundary")," or"," ",r.createElement("code",{style:a},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,s)}var ae=r.createElement(ie,null),se=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(Q.Provider,{value:this.props.routeContext},r.createElement(X.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function le(e){let{routeContext:t,match:n,children:o}=e,i=r.useContext(B);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(Q.Provider,{value:t},o)}function ue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e){if(!n)return null;if(n.errors)e=n.matches;else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null;e=n.matches}}let o=e,i=n?.errors;if(null!=i){let e=o.findIndex((e=>e.route.id&&void 0!==i?.[e.route.id]));s(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let a=!1,l=-1;if(n)for(let r=0;r<o.length;r++){let e=o[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(l=r),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){a=!0,o=l>=0?o.slice(0,l+1):[o[0]];break}}}return o.reduceRight(((e,s,u)=>{let c,d=!1,f=null,p=null;n&&(c=i&&s.route.id?i[s.route.id]:void 0,f=s.route.errorElement||ae,a&&(l<0&&0===u?(ge("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):l===u&&(d=!0,p=s.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,u+1)),m=()=>{let t;return t=c?f:d?p:s.route.Component?r.createElement(s.route.Component,null):s.route.element?s.route.element:e,r.createElement(le,{match:s,routeContext:{outlet:e,matches:h,isDataRoute:null!=n},children:t})};return n&&(s.route.ErrorBoundary||s.route.errorElement||0===u)?r.createElement(se,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function ce(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function de(e){let t=r.useContext(B);return s(t,ce(e)),t}function fe(e){let t=r.useContext(W);return s(t,ce(e)),t}function pe(e){let t=function(e){let t=r.useContext(Q);return s(t,ce(e)),t}(e),n=t.matches[t.matches.length-1];return s(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function he(){let e=r.useContext(X),t=fe("useRouteError"),n=pe("useRouteError");return void 0!==e?e:t.errors?.[n]}var me={};function ge(e,t,n){t||me[e]||(me[e]=!0,l(!1,n))}r.memo((function(e){let{routes:t,future:n,state:r}=e;return oe(t,void 0,r,n)}));function ve(e){let{to:t,replace:n,state:o,relative:i}=e;s(J(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=r.useContext(K);l(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=r.useContext(Q),{pathname:c}=G(),d=te(),f=N(t,L(u),c,"path"===i),p=JSON.stringify(f);return r.useEffect((()=>{d(JSON.parse(p),{replace:n,state:o,relative:i})}),[d,p,i,n,o]),null}function ye(e){s(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function be(e){let{basename:t="/",children:n=null,location:o,navigationType:i="POP",navigator:a,static:u=!1}=e;s(!J(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=r.useMemo((()=>({basename:c,navigator:a,static:u,future:{}})),[c,a,u]);"string"===typeof o&&(o=f(o));let{pathname:p="/",search:h="",hash:m="",state:g=null,key:v="default"}=o,y=r.useMemo((()=>{let e=R(p,c);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:i}}),[c,p,h,m,g,v,i]);return l(null!=y,`<Router basename="${c}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:r.createElement(K.Provider,{value:d},r.createElement(Y.Provider,{children:n,value:y}))}function xe(e){let{children:t,location:n}=e;return oe(we(t),n)}r.Component;function we(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return r.Children.forEach(e,((e,o)=>{if(!r.isValidElement(e))return;let i=[...t,o];if(e.type===r.Fragment)return void n.push.apply(n,we(e.props.children,i));s(e.type===ye,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),s(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=we(e.props.children,i)),n.push(a)})),n}var _e="get",ke="application/x-www-form-urlencoded";function Se(e){return null!=e&&"string"===typeof e.tagName}var Ee=null;var je=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ce(e){return null==e||je.has(e)?e:(l(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ke}"`),null)}function Te(e,t){let n,r,o,i,a;if(Se(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?R(a,t):null,n=e.getAttribute("method")||_e,o=Ce(e.getAttribute("enctype"))||ke,i=new FormData(e)}else if(function(e){return Se(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Se(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?R(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||_e,o=Ce(e.getAttribute("formenctype"))||Ce(a.getAttribute("enctype"))||ke,i=new FormData(a,e),!function(){if(null===Ee)try{new FormData(document.createElement("form"),0),Ee=!1}catch(e){Ee=!0}return Ee}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Se(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=_e,r=null,o=ke,a=e}var s;return i&&"text/plain"===o&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}function Oe(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Re(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Pe(e){return null!=e&&"string"===typeof e.page}function Ae(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Le(e,t,n,r,o,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>a(e,t)||s(e,t))):"data"===i?t.filter(((t,i)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Ne(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o})).flat(1),[...new Set(r)];var r}function $e(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,o)=>{if(t&&!Pe(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(i)||(n.add(i),e.push({key:i,link:o})),e}),[])}function ze(e){return{__html:e}}Symbol("SingleFetchRedirect");var Me=new Set([100,101,204,205]);function De(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===R(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}r.Component;function Ie(e){let{error:t,isOutsideRemixApp:n}=e;console.error(t);let o,i=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(I(t))return r.createElement(Fe,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},t.status," ",t.statusText),i);if(t instanceof Error)0;else{let e=null==t?"Unknown Error":"object"===typeof t&&"toString"in t?t.toString():JSON.stringify(t);new Error(e)}return r.createElement(Fe,{title:"Application Error!",isOutsideRemixApp:n},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),i)}function Fe(e){let{title:t,renderScripts:n,isOutsideRemixApp:o,children:i}=e,{routeModules:a}=qe();return a.root?.Layout&&!o?i:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,t)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,n?r.createElement(Ge,null):null)))}function Ue(e){return!0===e}function Be(){let e=r.useContext(B);return Oe(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function We(){let e=r.useContext(W);return Oe(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var He=r.createContext(void 0);function qe(){let e=r.useContext(He);return Oe(e,"You must render this element inside a <HydratedRouter> element"),e}function Ve(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ke(e,t,n){if(n&&!Je)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Ye(e){let{page:t,...n}=e,{router:o}=Be(),i=r.useMemo((()=>h(o.routes,t,o.basename)),[o.routes,t,o.basename]);return i?r.createElement(Xe,{page:t,matches:i,...n}):null}function Qe(e){let{manifest:t,routeModules:n}=qe(),[o,i]=r.useState([]);return r.useEffect((()=>{let r=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Re(r,n);return e.links?e.links():[]}return[]})));return $e(r.flat(1).filter(Ae).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(e,t,n).then((e=>{r||i(e)})),()=>{r=!0}}),[e,t,n]),o}function Xe(e){let{page:t,matches:n,...o}=e,i=G(),{manifest:a,routeModules:s}=qe(),{basename:l}=Be(),{loaderData:u,matches:c}=We(),d=r.useMemo((()=>Le(t,n,c,a,i,"data")),[t,n,c,a,i]),f=r.useMemo((()=>Le(t,n,c,a,i,"assets")),[t,n,c,a,i]),p=r.useMemo((()=>{if(t===i.pathname+i.search+i.hash)return[];let e=new Set,r=!1;if(n.forEach((t=>{let n=a.routes[t.route.id];n&&n.hasLoader&&(!d.some((e=>e.route.id===t.route.id))&&t.route.id in u&&s[t.route.id]?.shouldRevalidate||n.hasClientLoader?r=!0:e.add(t.route.id))})),0===e.size)return[];let o=De(t,l);return r&&e.size>0&&o.searchParams.set("_routes",n.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[o.pathname+o.search]}),[l,u,i,a,d,n,t,s]),h=r.useMemo((()=>Ne(f,a)),[f,a]),m=Qe(f);return r.createElement(r.Fragment,null,p.map((e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...o}))),h.map((e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...o}))),m.map((e=>{let{key:t,link:n}=e;return r.createElement("link",{key:t,...n})})))}He.displayName="FrameworkContext";var Je=!1;function Ge(e){let{manifest:t,serverHandoffString:n,isSpaMode:o,ssr:i,renderMeta:a}=qe(),{router:s,static:l,staticContext:u}=Be(),{matches:c}=We(),d=Ue(i);a&&(a.didRenderScripts=!0);let f=Ke(c,null,o);r.useEffect((()=>{0}),[]);let p=r.useMemo((()=>{let o=u?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=l?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(t.url)}`};\n${f.map(((e,n)=>{let r=`route${n}`,o=t.routes[e.route.id];Oe(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:u}=o,c=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:u,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(u)};`:[c.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${c.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,o=new Set(t.state.matches.map((e=>e.route.id))),i=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(i.pop();i.length>0;)a.push(`/${i.join("/")}`),i.pop();a.forEach((e=>{let n=h(t.routes,e,t.basename);n&&n.forEach((e=>o.add(e.route.id)))}));let s=[...o].reduce(((e,t)=>Object.assign(e,{[t]:r.routes[t]})),{});return{...r,routes:s,sri:!!n||void 0}}(t,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(o),type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(i),type:"module",async:!0}))}),[]),m=Je?[]:(t.entry.imports.concat(Ne(f,t,{includeHydrateFallback:!0})),[...new Set(g)]);var g;let v="object"===typeof t.sri?t.sri:{};return Je?null:r.createElement(r.Fragment,null,"object"===typeof t.sri?r.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,d?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:v[t.url],suppressHydrationWarning:!0}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:v[t.entry.module],suppressHydrationWarning:!0}),m.map((t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin,integrity:v[t],suppressHydrationWarning:!0}))),p)}function Ze(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var et="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{et&&(window.__reactRouterVersion="7.5.3")}catch($v){}function tt(e){let{basename:t,children:n,window:o}=e,i=r.useRef();null==i.current&&(i.current=a({window:o,v5Compat:!0}));let s=i.current,[l,u]=r.useState({action:s.action,location:s.location}),c=r.useCallback((e=>{r.startTransition((()=>u(e)))}),[u]);return r.useLayoutEffect((()=>s.listen(c)),[s,c]),r.createElement(be,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s})}var nt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rt=r.forwardRef((function(e,t){let n,{onClick:o,discover:i="render",prefetch:a="none",relative:u,reloadDocument:c,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:v,...y}=e,{basename:b}=r.useContext(K),x="string"===typeof m&&nt.test(m),w=!1;if("string"===typeof m&&x&&(n=m,et))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=R(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch($v){l(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(J(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:o}=r.useContext(K),{hash:i,pathname:a,search:l}=re(e,{relative:t}),u=a;return"/"!==n&&(u="/"===a?n:$([n,a])),o.createHref({pathname:u,search:l,hash:i})}(m,{relative:u}),[k,S,E]=function(e,t){let n=r.useContext(He),[o,i]=r.useState(!1),[a,s]=r.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=t,p=r.useRef(null);r.useEffect((()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[e]),r.useEffect((()=>{if(o){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[o]);let h=()=>{i(!0)},m=()=>{i(!1),s(!1)};return n?"intent"!==e?[a,p,{}]:[a,p,{onFocus:Ve(l,h),onBlur:Ve(u,m),onMouseEnter:Ve(c,h),onMouseLeave:Ve(d,m),onTouchStart:Ve(f,h)}]:[!1,p,{}]}(a,y),j=function(e){let{target:t,replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=te(),u=G(),c=re(e,{relative:a});return r.useCallback((r=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(r,t)){r.preventDefault();let t=void 0!==n?n:d(u)===d(c);l(e,{replace:t,state:o,preventScrollReset:i,relative:a,viewTransition:s})}}),[u,l,c,n,o,t,e,i,a,s])}(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:u,viewTransition:v});let C=r.createElement("a",{...y,...E,href:n||_,onClick:w||c?o:function(e){o&&o(e),e.defaultPrevented||j(e)},ref:Ze(t,S),target:h,"data-discover":x||"render"!==i?void 0:"true"});return k&&!x?r.createElement(r.Fragment,null,C,r.createElement(Ye,{page:_})):C}));rt.displayName="Link",r.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:u,viewTransition:c,children:d,...f}=e,p=re(u,{relative:f.relative}),h=G(),m=r.useContext(W),{navigator:g,basename:v}=r.useContext(K),y=null!=m&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.useContext(H);s(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=at("useViewTransitionState"),i=re(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=R(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=R(n.nextLocation.pathname,o)||n.nextLocation.pathname;return null!=C(i.pathname,l)||null!=C(i.pathname,a)}(p)&&!0===c,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=R(w,v)||w);const _="/"!==b&&b.endsWith("/")?b.length-1:b.length;let k,S=x===b||!a&&x.startsWith(b)&&"/"===x.charAt(_),E=null!=w&&(w===b||!a&&w.startsWith(b)&&"/"===w.charAt(b.length)),j={isActive:S,isPending:E,isTransitioning:y},T=S?n:void 0;k="function"===typeof i?i(j):[i,S?"active":null,E?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let O="function"===typeof l?l(j):l;return r.createElement(rt,{...f,"aria-current":T,className:k,ref:t,style:O,to:u,viewTransition:c},"function"===typeof d?d(j):d)})).displayName="NavLink";var ot=r.forwardRef(((e,t)=>{let{discover:n="render",fetcherKey:o,navigate:i,reloadDocument:a,replace:l,state:u,method:c=_e,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,...v}=e,y=ut(),b=function(e){let{relative:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:n}=r.useContext(K),o=r.useContext(Q);s(o,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),a={...re(e||".",{relative:t})},l=G();if(null==e){a.search=l.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(a.pathname="/"===a.pathname?n:$([n,a.pathname]));return d(a)}(f,{relative:h}),x="get"===c.toLowerCase()?"get":"post",w="string"===typeof f&&nt.test(f);return r.createElement("form",{ref:t,method:x,action:b,onSubmit:a?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c;y(t||e.currentTarget,{fetcherKey:o,method:n,navigate:i,replace:l,state:u,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==n?void 0:"true"})}));function it(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function at(e){let t=r.useContext(B);return s(t,it(e)),t}ot.displayName="Form";var st=0,lt=()=>`__${String(++st)}__`;function ut(){let{router:e}=at("useSubmit"),{basename:t}=r.useContext(K),n=pe("useRouteId");return r.useCallback((async function(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:s,formData:l,body:u}=Te(r,t);if(!1===o.navigate){let t=o.fetcherKey||lt();await e.fetch(t,n,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[e,t,n])}new TextEncoder;var ct=function(){return ct=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ct.apply(this,arguments)};Object.create;function dt(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ft=n(324),pt=n.n(ft),ht="-ms-",mt="-moz-",gt="-webkit-",vt="comm",yt="rule",bt="decl",xt="@keyframes",wt=Math.abs,_t=String.fromCharCode,kt=Object.assign;function St(e){return e.trim()}function Et(e,t){return(e=t.exec(e))?e[0]:e}function jt(e,t,n){return e.replace(t,n)}function Ct(e,t,n){return e.indexOf(t,n)}function Tt(e,t){return 0|e.charCodeAt(t)}function Ot(e,t,n){return e.slice(t,n)}function Rt(e){return e.length}function Pt(e){return e.length}function At(e,t){return t.push(e),e}function Lt(e,t){return e.filter((function(e){return!Et(e,t)}))}var Nt=1,$t=1,zt=0,Mt=0,Dt=0,It="";function Ft(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Nt,column:$t,length:a,return:"",siblings:s}}function Ut(e,t){return kt(Ft("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bt(e){for(;e.root;)e=Ut(e.root,{children:[e]});At(e,e.siblings)}function Wt(){return Dt=Mt>0?Tt(It,--Mt):0,$t--,10===Dt&&($t=1,Nt--),Dt}function Ht(){return Dt=Mt<zt?Tt(It,Mt++):0,$t++,10===Dt&&($t=1,Nt++),Dt}function qt(){return Tt(It,Mt)}function Vt(){return Mt}function Kt(e,t){return Ot(It,e,t)}function Yt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qt(e){return Nt=$t=1,zt=Rt(It=e),Mt=0,[]}function Xt(e){return It="",e}function Jt(e){return St(Kt(Mt-1,en(91===e?e+2:40===e?e+1:e)))}function Gt(e){for(;(Dt=qt())&&Dt<33;)Ht();return Yt(e)>2||Yt(Dt)>3?"":" "}function Zt(e,t){for(;--t&&Ht()&&!(Dt<48||Dt>102||Dt>57&&Dt<65||Dt>70&&Dt<97););return Kt(e,Vt()+(t<6&&32==qt()&&32==Ht()))}function en(e){for(;Ht();)switch(Dt){case e:return Mt;case 34:case 39:34!==e&&39!==e&&en(Dt);break;case 40:41===e&&en(e);break;case 92:Ht()}return Mt}function tn(e,t){for(;Ht()&&e+Dt!==57&&(e+Dt!==84||47!==qt()););return"/*"+Kt(t,Mt-1)+"*"+_t(47===e?e:Ht())}function nn(e){for(;!Yt(qt());)Ht();return Kt(e,Mt)}function rn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function on(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case bt:return e.return=e.return||e.value;case vt:return"";case xt:return e.return=e.value+"{"+rn(e.children,r)+"}";case yt:if(!Rt(e.value=e.props.join(",")))return""}return Rt(n=rn(e.children,r))?e.return=e.value+"{"+n+"}":""}function an(e,t,n){switch(function(e,t){return 45^Tt(e,0)?(((t<<2^Tt(e,0))<<2^Tt(e,1))<<2^Tt(e,2))<<2^Tt(e,3):0}(e,t)){case 5103:return gt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return gt+e+e;case 4789:return mt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return gt+e+mt+e+ht+e+e;case 5936:switch(Tt(e,t+11)){case 114:return gt+e+ht+jt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return gt+e+ht+jt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return gt+e+ht+jt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return gt+e+ht+e+e;case 6165:return gt+e+ht+"flex-"+e+e;case 5187:return gt+e+jt(e,/(\w+).+(:[^]+)/,gt+"box-$1$2"+ht+"flex-$1$2")+e;case 5443:return gt+e+ht+"flex-item-"+jt(e,/flex-|-self/g,"")+(Et(e,/flex-|baseline/)?"":ht+"grid-row-"+jt(e,/flex-|-self/g,""))+e;case 4675:return gt+e+ht+"flex-line-pack"+jt(e,/align-content|flex-|-self/g,"")+e;case 5548:return gt+e+ht+jt(e,"shrink","negative")+e;case 5292:return gt+e+ht+jt(e,"basis","preferred-size")+e;case 6060:return gt+"box-"+jt(e,"-grow","")+gt+e+ht+jt(e,"grow","positive")+e;case 4554:return gt+jt(e,/([^-])(transform)/g,"$1"+gt+"$2")+e;case 6187:return jt(jt(jt(e,/(zoom-|grab)/,gt+"$1"),/(image-set)/,gt+"$1"),e,"")+e;case 5495:case 3959:return jt(e,/(image-set\([^]*)/,gt+"$1$`$1");case 4968:return jt(jt(e,/(.+:)(flex-)?(.*)/,gt+"box-pack:$3"+ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+gt+e+e;case 4200:if(!Et(e,/flex-|baseline/))return ht+"grid-column-align"+Ot(e,t)+e;break;case 2592:case 3360:return ht+jt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Et(e.props,/grid-\w+-end/)}))?~Ct(e+(n=n[t].value),"span",0)?e:ht+jt(e,"-start","")+e+ht+"grid-row-span:"+(~Ct(n,"span",0)?Et(n,/\d+/):+Et(n,/\d+/)-+Et(e,/\d+/))+";":ht+jt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Et(e.props,/grid-\w+-start/)}))?e:ht+jt(jt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return jt(e,/(.+)-inline(.+)/,gt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rt(e)-1-t>6)switch(Tt(e,t+1)){case 109:if(45!==Tt(e,t+4))break;case 102:return jt(e,/(.+:)(.+)-([^]+)/,"$1"+gt+"$2-$3$1"+mt+(108==Tt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ct(e,"stretch",0)?an(jt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return jt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,s){return ht+n+":"+r+s+(o?ht+n+"-span:"+(i?a:+a-+r)+s:"")+e}));case 4949:if(121===Tt(e,t+6))return jt(e,":",":"+gt)+e;break;case 6444:switch(Tt(e,45===Tt(e,14)?18:11)){case 120:return jt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+gt+(45===Tt(e,14)?"inline-":"")+"box$3$1"+gt+"$2$3$1"+ht+"$2box$3")+e;case 100:return jt(e,":",":"+ht)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return jt(e,"scroll-","scroll-snap-")+e}return e}function sn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bt:return void(e.return=an(e.value,e.length,n));case xt:return rn([Ut(e,{value:jt(e.value,"@","@"+gt)})],r);case yt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Et(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bt(Ut(e,{props:[jt(t,/:(read-\w+)/,":-moz-$1")]})),Bt(Ut(e,{props:[t]})),kt(e,{props:Lt(n,r)});break;case"::placeholder":Bt(Ut(e,{props:[jt(t,/:(plac\w+)/,":"+gt+"input-$1")]})),Bt(Ut(e,{props:[jt(t,/:(plac\w+)/,":-moz-$1")]})),Bt(Ut(e,{props:[jt(t,/:(plac\w+)/,ht+"input-$1")]})),Bt(Ut(e,{props:[t]})),kt(e,{props:Lt(n,r)})}return""}))}}function ln(e){return Xt(un("",null,null,null,[""],e=Qt(e),0,[0],e))}function un(e,t,n,r,o,i,a,s,l){for(var u=0,c=0,d=a,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=i,_=r,k=b;g;)switch(h=y,y=Ht()){case 40:if(108!=h&&58==Tt(k,d-1)){-1!=Ct(k+=jt(Jt(y),"&","&\f"),"&\f",wt(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Jt(y);break;case 9:case 10:case 13:case 32:k+=Gt(h);break;case 92:k+=Zt(Vt()-1,7);continue;case 47:switch(qt()){case 42:case 47:At(dn(tn(Ht(),Vt()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[u++]=Rt(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(k=jt(k,/\f/g,"")),p>0&&Rt(k)-d&&At(p>32?fn(k+";",r,n,d-1,l):fn(jt(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(At(_=cn(k,t,n,u,c,o,s,b,x=[],w=[],d,i),i),123===y)if(0===c)un(k,t,_,_,x,i,d,s,w);else switch(99===f&&110===Tt(k,3)?100:f){case 100:case 108:case 109:case 115:un(e,_,_,r&&At(cn(e,_,_,0,0,o,s,b,o,x=[],d,w),w),o,w,d,s,r?x:w);break;default:un(k,_,_,_,[""],w,0,s,w)}}u=c=p=0,m=v=1,b=k="",d=a;break;case 58:d=1+Rt(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Wt())continue;switch(k+=_t(y),y*m){case 38:v=c>0?1:(k+="\f",-1);break;case 44:s[u++]=(Rt(k)-1)*v,v=1;break;case 64:45===qt()&&(k+=Jt(Ht())),f=qt(),c=d=Rt(b=k+=nn(Vt())),y++;break;case 45:45===h&&2==Rt(k)&&(m=0)}}return i}function cn(e,t,n,r,o,i,a,s,l,u,c,d){for(var f=o-1,p=0===o?i:[""],h=Pt(p),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Ot(e,f+1,f=wt(g=a[m])),x=e;y<h;++y)(x=St(g>0?p[y]+" "+b:jt(b,/&\f/g,p[y])))&&(l[v++]=x);return Ft(e,t,n,0===o?yt:s,l,u,c,d)}function dn(e,t,n,r){return Ft(e,t,n,vt,_t(Dt),Ot(e,2,-2),0,r)}function fn(e,t,n,r,o){return Ft(e,t,n,bt,Ot(e,0,r),Ot(e,r+1,-1),r,o)}var pn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",mn="active",gn="data-styled-version",vn="6.1.17",yn="/*!sc*/\n",bn="undefined"!=typeof window&&"HTMLElement"in window,xn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),wn={},_n=(new Set,Object.freeze([])),kn=Object.freeze({});function Sn(e,t,n){return void 0===n&&(n=kn),e.theme!==n.theme&&e.theme||t||n.theme}var En=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cn=/(^-|-$)/g;function Tn(e){return e.replace(jn,"-").replace(Cn,"")}var On=/(a)(d)/gi,Rn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Rn(t%52)+n;return(Rn(t%52)+n).replace(On,"$1-$2")}var An,Ln=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Nn=function(e){return Ln(5381,e)};function $n(e){return Pn(Nn(e)>>>0)}function zn(e){return e.displayName||e.name||"Component"}function Mn(e){return"string"==typeof e&&!0}var Dn="function"==typeof Symbol&&Symbol.for,In=Dn?Symbol.for("react.memo"):60115,Fn=Dn?Symbol.for("react.forward_ref"):60112,Un={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hn=((An={})[Fn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},An[In]=Wn,An);function qn(e){return("type"in(t=e)&&t.type.$$typeof)===In?Wn:"$$typeof"in e?Hn[e.$$typeof]:Un;var t}var Vn=Object.defineProperty,Kn=Object.getOwnPropertyNames,Yn=Object.getOwnPropertySymbols,Qn=Object.getOwnPropertyDescriptor,Xn=Object.getPrototypeOf,Jn=Object.prototype;function Gn(e,t,n){if("string"!=typeof t){if(Jn){var r=Xn(t);r&&r!==Jn&&Gn(e,r,n)}var o=Kn(t);Yn&&(o=o.concat(Yn(t)));for(var i=qn(e),a=qn(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Bn||n&&n[l]||a&&l in a||i&&l in i)){var u=Qn(t,l);try{Vn(e,l,u)}catch(e){}}}}return e}function Zn(e){return"function"==typeof e}function er(e){return"object"==typeof e&&"styledComponentId"in e}function tr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function rr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function or(e,t,n){if(void 0===n&&(n=!1),!n&&!rr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=or(e[r],t[r]);else if(rr(t))for(var r in t)e[r]=or(e[r],t[r]);return e}function ir(e,t){Object.defineProperty(e,"toString",{value:t})}function ar(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var sr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw ar(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(yn);return t},e}(),lr=new Map,ur=new Map,cr=1,dr=function(e){if(lr.has(e))return lr.get(e);for(;ur.has(cr);)cr++;var t=cr++;return lr.set(e,t),ur.set(t,e),t},fr=function(e,t){cr=t+1,lr.set(e,t),ur.set(t,e)},pr="style[".concat(hn,"][").concat(gn,'="').concat(vn,'"]'),hr=new RegExp("^".concat(hn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mr=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},gr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(yn),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(hr);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(fr(c,u),mr(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},vr=function(e){for(var t=document.querySelectorAll(pr),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(hn)!==mn&&(gr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function yr(){return n.nc}var br=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(hn,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(hn,mn),r.setAttribute(gn,vn);var a=yr();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},xr=function(){function e(e){this.element=br(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw ar(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),wr=function(){function e(e){this.element=br(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),_r=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),kr=bn,Sr={isServer:!bn,useCSSOMInjection:!xn},Er=function(){function e(e,t,n){void 0===e&&(e=kn),void 0===t&&(t={});var r=this;this.options=ct(ct({},Sr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&bn&&kr&&(kr=!1,vr(this)),ir(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return ur.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(hn,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(yn)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return dr(e)},e.prototype.rehydrate=function(){!this.server&&bn&&vr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new _r(n):t?new xr(n):new wr(n)}(this.options),new sr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(dr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(dr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(dr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jr=/&/g,Cr=/^\s*\/\/.*$/gm;function Tr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Tr(e.children,t)),e}))}function Or(e){var t,n,r,o=void 0===e?kn:e,i=o.options,a=void 0===i?kn:i,s=o.plugins,l=void 0===s?_n:s,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===yt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(jr,n).replace(r,u))})),a.prefix&&c.push(sn),c.push(on);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Cr,""),u=ln(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(u=Tr(u,a.namespace));var d,f=[];return rn(u,function(e){var t=Pt(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce((function(e,t){return t.name||ar(15),Ln(e,t.name)}),5381).toString():"",d}var Rr=new Er,Pr=Or(),Ar=r.createContext({shouldForwardProp:void 0,styleSheet:Rr,stylis:Pr}),Lr=(Ar.Consumer,r.createContext(void 0));function Nr(){return(0,r.useContext)(Ar)}function $r(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],o=t[1],i=Nr().styleSheet,a=(0,r.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),s=(0,r.useMemo)((function(){return Or({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)((function(){pt()(n,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,r.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return r.createElement(Ar.Provider,{value:l},r.createElement(Lr.Provider,{value:s},e.children))}var zr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Pr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ir(this,(function(){throw ar(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Pr),this.name+e.hash},e}(),Mr=function(e){return e>="A"&&e<="Z"};function Dr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Mr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ir=function(e){return null==e||!1===e||""===e},Fr=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ir(i)&&(Array.isArray(i)&&i.isCss||Zn(i)?r.push("".concat(Dr(o),":"),i,";"):rr(i)?r.push.apply(r,dt(dt(["".concat(o," {")],Fr(i),!1),["}"],!1)):r.push("".concat(Dr(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in pn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ur(e,t,n,r){return Ir(e)?[]:er(e)?[".".concat(e.styledComponentId)]:Zn(e)?!Zn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Ur(e(t),t,n,r):e instanceof zr?n?(e.inject(n,r),[e.getName(r)]):[e]:rr(e)?Fr(e):Array.isArray(e)?Array.prototype.concat.apply(_n,e.map((function(e){return Ur(e,t,n,r)}))):[e.toString()];var o}function Br(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zn(n)&&!er(n))return!1}return!0}var Wr=Nn(vn),Hr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Br(e),this.componentId=t,this.baseHash=Ln(Wr,t),this.baseStyle=n,Er.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=tr(r,this.staticRulesId);else{var o=nr(Ur(this.rules,e,t,n)),i=Pn(Ln(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=tr(r,i),this.staticRulesId=i}else{for(var s=Ln(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=nr(Ur(c,e,t,n));s=Ln(s,d+u),l+=d}}if(l){var f=Pn(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=tr(r,f)}}return r},e}(),qr=r.createContext(void 0);qr.Consumer;var Vr={};new Set;function Kr(e,t,n){var o=er(e),i=e,a=!Mn(e),s=t.attrs,l=void 0===s?_n:s,u=t.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Tn(e);Vr[n]=(Vr[n]||0)+1;var r="".concat(n,"-").concat($n(vn+n+Vr[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return Mn(e)?"styled.".concat(e):"Styled(".concat(zn(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Tn(t.displayName),"-").concat(t.componentId):t.componentId||c,h=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Hr(n,p,o?i.componentStyle:void 0);function b(e,t){return function(e,t,n){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=r.useContext(qr),d=Nr(),f=e.shouldForwardProp||d.shouldForwardProp,p=Sn(t,c,a)||kn,h=function(e,t,n){for(var r,o=ct(ct({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=Zn(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?tr(o[s],a[s]):"style"===s?ct(ct({},o[s]),a[s]):a[s]}return t.className&&(o.className=tr(o.className,t.className)),o}(o,t,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Nr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),b=tr(s,l);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[Mn(m)&&!En.has(m)?"class":"className"]=b,n&&(g.ref=n),(0,r.createElement)(m,g)}(x,e,t)}b.displayName=f;var x=r.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=o?tr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=o?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)or(e,o[r],!0);return e}({},i.defaultProps,e):e}}),ir(x,(function(){return".".concat(x.styledComponentId)})),a&&Gn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Yr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Qr=function(e){return Object.assign(e,{isCss:!0})};function Xr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Zn(e)||rr(e))return Qr(Ur(Yr(_n,dt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ur(r):Qr(Ur(Yr(r,t)))}function Jr(e,t,n){if(void 0===n&&(n=kn),!t)throw ar(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Xr.apply(void 0,dt([r],o,!1)))};return r.attrs=function(r){return Jr(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Jr(e,t,ct(ct({},n),r))},r}var Gr=function(e){return Jr(Kr,e)},Zr=Gr;En.forEach((function(e){Zr[e]=Gr(e)}));var eo=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Br(e),Er.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(nr(Ur(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Er.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function to(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=nr(Xr.apply(void 0,dt([e],t,!1))),o=$n(r);return new zr(o,r)}var no;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=yr(),r=nr([n&&'nonce="'.concat(n,'"'),"".concat(hn,'="true"'),"".concat(gn,'="').concat(vn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ar(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ar(2);var n=e.instance.toString();if(!n)return[];var o=((t={})[hn]="",t[gn]=vn,t.dangerouslySetInnerHTML={__html:n},t),i=yr();return i&&(o.nonce=i),[r.createElement("style",ct({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Er({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw ar(2);return r.createElement($r,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ar(3)}})(),"__sc-".concat(hn,"__");!function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(no||(no={}));class ro extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const oo=e=>{const t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},o=()=>null!==t?t.name:(e=>{var t,n;return(null===e||void 0===e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null===e||void 0===e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(e),i=e=>{var t;return null===(t=n.PluginHeaders)||void 0===t?void 0:t.find((t=>t.name===e))},a=new Map;return n.convertFileSrc||(n.convertFileSrc=e=>e),n.getPlatform=o,n.handleError=t=>e.console.error(t),n.isNativePlatform=()=>"web"!==o(),n.isPluginAvailable=e=>{const t=a.get(e);return!!(null===t||void 0===t?void 0:t.platforms.has(o()))||!!i(e)},n.registerPlugin=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=a.get(e);if(l)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),l.proxy;const u=o(),c=i(e);let d;const f=r=>{let o;const i=function(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];const f=(async()=>(!d&&u in s?d=d="function"===typeof s[u]?await s[u]():s[u]:null!==t&&!d&&"web"in s&&(d=d="function"===typeof s.web?await s.web():s.web),d))().then((t=>{const i=((t,r)=>{var o,i;if(!c){if(t)return null===(i=t[r])||void 0===i?void 0:i.bind(t);throw new ro(`"${e}" plugin is not implemented on ${u}`,no.Unimplemented)}{const i=null===c||void 0===c?void 0:c.methods.find((e=>r===e.name));if(i)return"promise"===i.rtype?t=>n.nativePromise(e,r.toString(),t):(t,o)=>n.nativeCallback(e,r.toString(),t,o);if(t)return null===(o=t[r])||void 0===o?void 0:o.bind(t)}})(t,r);if(i){const e=i(...a);return o=null===e||void 0===e?void 0:e.remove,e}throw new ro(`"${e}.${r}()" is not implemented on ${u}`,no.Unimplemented)}));return"addListener"===r&&(f.remove=async()=>o()),f};return i.toString=()=>`${r.toString()}() { [capacitor code] }`,Object.defineProperty(i,"name",{value:r,writable:!1,configurable:!1}),i},p=f("addListener"),h=f("removeListener"),m=(e,t)=>{const n=p({eventName:e},t),r=async()=>{const r=await n;h({eventName:e,callbackId:r},t)},o=new Promise((e=>n.then((()=>e({remove:r})))));return o.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()},o},g=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return c?m:p;case"removeListener":return h;default:return f(t)}}});return r[e]=g,a.set(e,{name:e,proxy:g,platforms:new Set([...Object.keys(s),...c?[u]:[]])}),g},n.Exception=ro,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},io=(e=>e.Capacitor=oo(e))("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}),ao=io.registerPlugin;class so{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e);return Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const r=this.listeners[e];if(r)r.forEach((e=>e(t)));else if(n){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not implemented";return new io.Exception(e,no.Unimplemented)}unavailable(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"not available";return new io.Exception(e,no.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach((t=>{this.notifyListeners(e,t)})))}}const lo=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),uo=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class co extends so{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach((e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=uo(n).trim(),r=uo(r).trim(),t[n]=r})),t}async setCookie(e){try{const t=lo(e.key),n=lo(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),i=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${r}; path=${o}; ${i};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}ao("CapacitorCookies",{web:()=>new co});const fo=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=Object.assign({method:e.method||"GET",headers:e.headers},t),r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e),n=Object.keys(e).map((e=>e.toLocaleLowerCase()));return n.reduce(((n,r,o)=>(n[r]=e[t[o]],n)),{})}(e.headers),o=r["content-type"]||"";if("string"===typeof e.data)n.body=e.data;else if(o.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(o.includes("multipart/form-data")||e.data instanceof FormData){const t=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,n)=>{t.append(n,e)}));else for(const n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;const r=new Headers(n.headers);r.delete("content-type"),n.headers=r}else(o.includes("application/json")||"object"===typeof e.data)&&(n.body=JSON.stringify(e.data));return n};class po extends so{async request(e){const t=fo(e,e.webFetchExtra),n=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return null;const n=Object.entries(e).reduce(((e,n)=>{const[r,o]=n;let i,a;return Array.isArray(o)?(a="",o.forEach((e=>{i=t?encodeURIComponent(e):e,a+=`${r}=${i}&`})),a.slice(0,-1)):(i=t?encodeURIComponent(o):o,a=`${r}=${i}`),`${e}&${a}`}),"");return n.substr(1)}(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,o=await fetch(r,t),i=o.headers.get("content-type")||"";let a,s,{responseType:l="text"}=o.ok?e:{};switch(i.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":s=await o.blob(),a=await(async e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=()=>{const e=r.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)})))(s);break;case"json":a=await o.json();break;default:a=await o.text()}const u={};return o.headers.forEach(((e,t)=>{u[t]=e})),{data:a,headers:u,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}ao("CapacitorHttp",{web:()=>new po});var ho,mo;!function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(ho||(ho={})),function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"}(mo||(mo={}));const go=ao("StatusBar"),vo=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=Xr.apply(void 0,dt([e],t,!1)),i="sc-global-".concat($n(JSON.stringify(o))),a=new eo(o,i),s=function(e){var t=Nr(),n=r.useContext(qr),o=r.useRef(t.styleSheet.allocateGSInstance(i)).current;return t.styleSheet.server&&l(o,e,t.styleSheet,n,t.stylis),r.useLayoutEffect((function(){if(!t.styleSheet.server)return l(o,e,t.styleSheet,n,t.stylis),function(){return a.removeStyles(o,t.styleSheet)}}),[o,e,t.styleSheet,n,t.stylis]),null};function l(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,wn,n,o);else{var i=ct(ct({},t),{theme:Sn(t,r,s.defaultProps)});a.renderStyles(e,i,n,o)}}return r.memo(s)})`
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
  `;function yo(e,t){return function(){return e.apply(t,arguments)}}const{toString:bo}=Object.prototype,{getPrototypeOf:xo}=Object,{iterator:wo,toStringTag:_o}=Symbol,ko=(e=>t=>{const n=bo.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),So=e=>(e=e.toLowerCase(),t=>ko(t)===e),Eo=e=>t=>typeof t===e,{isArray:jo}=Array,Co=Eo("undefined");const To=So("ArrayBuffer");const Oo=Eo("string"),Ro=Eo("function"),Po=Eo("number"),Ao=e=>null!==e&&"object"===typeof e,Lo=e=>{if("object"!==ko(e))return!1;const t=xo(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(_o in e)&&!(wo in e)},No=So("Date"),$o=So("File"),zo=So("Blob"),Mo=So("FileList"),Do=So("URLSearchParams"),[Io,Fo,Uo,Bo]=["ReadableStream","Request","Response","Headers"].map(So);function Wo(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),jo(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=o?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let a;for(n=0;n<i;n++)a=r[n],t.call(null,e[a],a,e)}}function Ho(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const qo="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Vo=e=>!Co(e)&&e!==qo;const Ko=(Yo="undefined"!==typeof Uint8Array&&xo(Uint8Array),e=>Yo&&e instanceof Yo);var Yo;const Qo=So("HTMLFormElement"),Xo=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),Jo=So("RegExp"),Go=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Wo(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)};const Zo=So("AsyncFunction"),ei=(ti="function"===typeof setImmediate,ni=Ro(qo.postMessage),ti?setImmediate:ni?((e,t)=>(qo.addEventListener("message",(n=>{let{source:r,data:o}=n;r===qo&&o===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),qo.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var ti,ni;const ri="undefined"!==typeof queueMicrotask?queueMicrotask.bind(qo):"undefined"!==typeof process&&process.nextTick||ei,oi={isArray:jo,isArrayBuffer:To,isBuffer:function(e){return null!==e&&!Co(e)&&null!==e.constructor&&!Co(e.constructor)&&Ro(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||Ro(e.append)&&("formdata"===(t=ko(e))||"object"===t&&Ro(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&To(e.buffer),t},isString:Oo,isNumber:Po,isBoolean:e=>!0===e||!1===e,isObject:Ao,isPlainObject:Lo,isReadableStream:Io,isRequest:Fo,isResponse:Uo,isHeaders:Bo,isUndefined:Co,isDate:No,isFile:$o,isBlob:zo,isRegExp:Jo,isFunction:Ro,isStream:e=>Ao(e)&&Ro(e.pipe),isURLSearchParams:Do,isTypedArray:Ko,isFileList:Mo,forEach:Wo,merge:function e(){const{caseless:t}=Vo(this)&&this||{},n={},r=(r,o)=>{const i=t&&Ho(n,o)||o;Lo(n[i])&&Lo(r)?n[i]=e(n[i],r):Lo(r)?n[i]=e({},r):jo(r)?n[i]=r.slice():n[i]=r};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Wo(arguments[o],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Wo(t,((t,r)=>{n&&Ro(t)?e[r]=yo(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==n&&xo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:ko,kindOfTest:So,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(jo(e))return e;let t=e.length;if(!Po(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[wo]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Qo,hasOwnProperty:Xo,hasOwnProp:Xo,reduceDescriptors:Go,freezeMethods:e=>{Go(e,((t,n)=>{if(Ro(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Ro(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return jo(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ho,global:qo,isContextDefined:Vo,isSpecCompliantForm:function(e){return!!(e&&Ro(e.append)&&"FormData"===e[_o]&&e[wo])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Ao(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=jo(e)?[]:{};return Wo(e,((e,t)=>{const i=n(e,r+1);!Co(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Zo,isThenable:e=>e&&(Ao(e)||Ro(e))&&Ro(e.then)&&Ro(e.catch),setImmediate:ei,asap:ri,isIterable:e=>null!=e&&Ro(e[wo])};function ii(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}oi.inherits(ii,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:oi.toJSONObject(this.config),code:this.code,status:this.status}}});const ai=ii.prototype,si={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{si[e]={value:e}})),Object.defineProperties(ii,si),Object.defineProperty(ai,"isAxiosError",{value:!0}),ii.from=(e,t,n,r,o,i)=>{const a=Object.create(ai);return oi.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ii.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const li=ii;function ui(e){return oi.isPlainObject(e)||oi.isArray(e)}function ci(e){return oi.endsWith(e,"[]")?e.slice(0,-2):e}function di(e,t,n){return e?e.concat(t).map((function(e,t){return e=ci(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const fi=oi.toFlatObject(oi,{},null,(function(e){return/^is[A-Z]/.test(e)}));const pi=function(e,t,n){if(!oi.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=oi.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!oi.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,i=n.dots,a=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&oi.isSpecCompliantForm(t);if(!oi.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(oi.isDate(e))return e.toISOString();if(!s&&oi.isBlob(e))throw new li("Blob is not supported. Use a Buffer instead.");return oi.isArrayBuffer(e)||oi.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let s=e;if(e&&!o&&"object"===typeof e)if(oi.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(oi.isArray(e)&&function(e){return oi.isArray(e)&&!e.some(ui)}(e)||(oi.isFileList(e)||oi.endsWith(n,"[]"))&&(s=oi.toArray(e)))return n=ci(n),s.forEach((function(e,r){!oi.isUndefined(e)&&null!==e&&t.append(!0===a?di([n],r,i):null===a?n:n+"[]",l(e))})),!1;return!!ui(e)||(t.append(di(o,n,i),l(e)),!1)}const c=[],d=Object.assign(fi,{defaultVisitor:u,convertValue:l,isVisitable:ui});if(!oi.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!oi.isUndefined(n)){if(-1!==c.indexOf(n))throw Error("Circular reference detected in "+r.join("."));c.push(n),oi.forEach(n,(function(n,i){!0===(!(oi.isUndefined(n)||null===n)&&o.call(t,n,oi.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),c.pop()}}(e),t};function hi(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function mi(e,t){this._pairs=[],e&&pi(e,this,t)}const gi=mi.prototype;gi.append=function(e,t){this._pairs.push([e,t])},gi.toString=function(e){const t=e?function(t){return e.call(this,t,hi)}:hi;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const vi=mi;function yi(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function bi(e,t,n){if(!t)return e;const r=n&&n.encode||yi;oi.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(i=o?o(t,n):oi.isURLSearchParams(t)?t.toString():new vi(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const xi=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){oi.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},wi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_i={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:vi,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ki="undefined"!==typeof window&&"undefined"!==typeof document,Si="object"===typeof navigator&&navigator||void 0,Ei=ki&&(!Si||["ReactNative","NativeScript","NS"].indexOf(Si.product)<0),ji="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,Ci=ki&&window.location.href||"http://localhost",Ti={...e,..._i};const Oi=function(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&oi.isArray(r)?r.length:i,s)return oi.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&oi.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&oi.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!a}if(oi.isFormData(e)&&oi.isFunction(e.entries)){const n={};return oi.forEachEntry(e,((e,r)=>{t(function(e){return oi.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Ri={transitional:wi,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=oi.isObject(e);o&&oi.isHTMLForm(e)&&(e=new FormData(e));if(oi.isFormData(e))return r?JSON.stringify(Oi(e)):e;if(oi.isArrayBuffer(e)||oi.isBuffer(e)||oi.isStream(e)||oi.isFile(e)||oi.isBlob(e)||oi.isReadableStream(e))return e;if(oi.isArrayBufferView(e))return e.buffer;if(oi.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return pi(e,new Ti.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Ti.isNode&&oi.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=oi.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return pi(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(oi.isString(e))try{return(t||JSON.parse)(e),oi.trim(e)}catch($v){if("SyntaxError"!==$v.name)throw $v}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Ri.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(oi.isResponse(e)||oi.isReadableStream(e))return e;if(e&&oi.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch($v){if(n){if("SyntaxError"===$v.name)throw li.from($v,li.ERR_BAD_RESPONSE,this,null,this.response);throw $v}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ti.classes.FormData,Blob:Ti.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};oi.forEach(["delete","get","head","post","put","patch"],(e=>{Ri.headers[e]={}}));const Pi=Ri,Ai=oi.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Li=Symbol("internals");function Ni(e){return e&&String(e).trim().toLowerCase()}function $i(e){return!1===e||null==e?e:oi.isArray(e)?e.map($i):String(e)}function zi(e,t,n,r,o){return oi.isFunction(r)?r.call(this,t,n):(o&&(t=n),oi.isString(t)?oi.isString(r)?-1!==t.indexOf(r):oi.isRegExp(r)?r.test(t):void 0:void 0)}class Mi{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Ni(t);if(!o)throw new Error("header name must be a non-empty string");const i=oi.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=$i(e))}const i=(e,t)=>oi.forEach(e,((e,n)=>o(e,n,t)));if(oi.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(oi.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Ai[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(oi.isObject(e)&&oi.isIterable(e)){let n,r,o={};for(const t of e){if(!oi.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[r=t[0]]=(n=o[r])?oi.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}i(o,t)}else null!=e&&o(t,e,n);return this}get(e,t){if(e=Ni(e)){const n=oi.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(oi.isFunction(t))return t.call(this,e,n);if(oi.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ni(e)){const n=oi.findKey(this,e);return!(!n||void 0===this[n]||t&&!zi(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Ni(e)){const o=oi.findKey(n,e);!o||t&&!zi(0,n[o],o,t)||(delete n[o],r=!0)}}return oi.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!zi(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return oi.forEach(this,((r,o)=>{const i=oi.findKey(n,o);if(i)return t[i]=$i(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=$i(r),n[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return oi.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&oi.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[Li]=this[Li]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Ni(e);t[r]||(!function(e,t){const n=oi.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return oi.isArray(e)?e.forEach(r):r(e),this}}Mi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),oi.reduceDescriptors(Mi.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),oi.freezeMethods(Mi);const Di=Mi;function Ii(e,t){const n=this||Pi,r=t||n,o=Di.from(r.headers);let i=r.data;return oi.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Fi(e){return!(!e||!e.__CANCEL__)}function Ui(e,t,n){li.call(this,null==e?"canceled":e,li.ERR_CANCELED,t,n),this.name="CanceledError"}oi.inherits(Ui,li,{__CANCEL__:!0});const Bi=Ui;function Wi(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new li("Request failed with status code "+n.status,[li.ERR_BAD_REQUEST,li.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Hi=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),u=r[a];o||(o=l),n[i]=s,r[i]=l;let c=a,d=0;for(;c!==i;)d+=n[c++],c%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const f=u&&l-u;return f?Math.round(1e3*d/f):void 0}};const qi=function(e,t){let n,r,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];t>=i?a(l,e):(n=l,r||(r=setTimeout((()=>{r=null,a(n)}),i-t)))},()=>n&&a(n)]},Vi=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=Hi(50,250);return qi((n=>{const i=n.loaded,a=n.lengthComputable?n.total:void 0,s=i-r,l=o(s);r=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),n)},Ki=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Yi=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return oi.asap((()=>e(...n)))},Qi=Ti.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ti.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ti.origin),Ti.navigator&&/(msie|trident)/i.test(Ti.navigator.userAgent)):()=>!0,Xi=Ti.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];oi.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),oi.isString(r)&&a.push("path="+r),oi.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ji(e,t,n){let r=!function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Gi=e=>e instanceof Di?{...e}:e;function Zi(e,t){t=t||{};const n={};function r(e,t,n,r){return oi.isPlainObject(e)&&oi.isPlainObject(t)?oi.merge.call({caseless:r},e,t):oi.isPlainObject(t)?oi.merge({},t):oi.isArray(t)?t.slice():t}function o(e,t,n,o){return oi.isUndefined(t)?oi.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function i(e,t){if(!oi.isUndefined(t))return r(void 0,t)}function a(e,t){return oi.isUndefined(t)?oi.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,n)=>o(Gi(e),Gi(t),0,!0)};return oi.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=l[r]||o,a=i(e[r],t[r],r);oi.isUndefined(a)&&i!==s||(n[r]=a)})),n}const ea=e=>{const t=Zi({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=Di.from(s),t.url=bi(Ji(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),oi.isFormData(r))if(Ti.hasStandardBrowserEnv||Ti.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(Ti.hasStandardBrowserEnv&&(o&&oi.isFunction(o)&&(o=o(t)),o||!1!==o&&Qi(t.url))){const e=i&&a&&Xi.read(a);e&&s.set(i,e)}return t},ta="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=ea(e);let o=r.data;const i=Di.from(r.headers).normalize();let a,s,l,u,c,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=r;function h(){u&&u(),c&&c(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=Di.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Wi((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new li("Request aborted",li.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new li("Network Error",li.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||wi;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new li(t,o.clarifyTimeoutError?li.ETIMEDOUT:li.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&oi.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),oi.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),p&&([l,c]=Vi(p,!0),m.addEventListener("progress",l)),f&&m.upload&&([s,u]=Vi(f),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(a=t=>{m&&(n(!t||t.type?new Bi(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const v=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);v&&-1===Ti.protocols.indexOf(v)?n(new li("Unsupported protocol "+v+":",li.ERR_BAD_REQUEST,e)):m.send(o||null)}))},na=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof li?t:new Bi(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new li(`timeout ${t} of ms exceeded`,li.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=r;return s.unsubscribe=()=>oi.asap(a),s}},ra=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},oa=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},ia=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of oa(e))yield*ra(n,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return s(),void e.close();let i=r.byteLength;if(n){let e=a+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},aa="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,sa=aa&&"function"===typeof ReadableStream,la=aa&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ua=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch($v){return!1}},ca=sa&&ua((()=>{let e=!1;const t=new Request(Ti.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),da=sa&&ua((()=>oi.isReadableStream(new Response("").body))),fa={stream:da&&(e=>e.body)};var pa;aa&&(pa=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!fa[e]&&(fa[e]=oi.isFunction(pa[e])?t=>t[e]():(t,n)=>{throw new li(`Response type '${e}' is not supported`,li.ERR_NOT_SUPPORT,n)})})));const ha=async(e,t)=>{const n=oi.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(oi.isBlob(e))return e.size;if(oi.isSpecCompliantForm(e)){const t=new Request(Ti.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return oi.isArrayBufferView(e)||oi.isArrayBuffer(e)?e.byteLength:(oi.isURLSearchParams(e)&&(e+=""),oi.isString(e)?(await la(e)).byteLength:void 0)})(t):n},ma=aa&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=ea(e);u=u?(u+"").toLowerCase():"text";let p,h=na([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&ca&&"get"!==n&&"head"!==n&&0!==(g=await ha(c,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(oi.isFormData(r)&&(e=n.headers.get("content-type"))&&c.setContentType(e),n.body){const[e,t]=Ki(g,Vi(Yi(l)));r=ia(n.body,65536,e,t)}}oi.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let i=await fetch(p);const a=da&&("stream"===u||"response"===u);if(da&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=oi.toFiniteNumber(i.headers.get("content-length")),[n,r]=s&&Ki(t,Vi(Yi(s),!0))||[];i=new Response(ia(i.body,65536,n,(()=>{r&&r(),m&&m()})),e)}u=u||"text";let v=await fa[oi.findKey(fa,u)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,n)=>{Wi(t,n,{data:v,headers:Di.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:p})}))}catch(v){if(m&&m(),v&&"TypeError"===v.name&&/Load failed|fetch/i.test(v.message))throw Object.assign(new li("Network Error",li.ERR_NETWORK,e,p),{cause:v.cause||v});throw li.from(v,v&&v.code,e,p)}}),ga={http:null,xhr:ta,fetch:ma};oi.forEach(ga,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch($v){}Object.defineProperty(e,"adapterName",{value:t})}}));const va=e=>`- ${e}`,ya=e=>oi.isFunction(e)||null===e||!1===e,ba=e=>{e=oi.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!ya(n)&&(r=ga[(t=String(n)).toLowerCase()],void 0===r))throw new li(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(va).join("\n"):" "+va(e[0]):"as no adapter specified";throw new li("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function xa(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bi(null,e)}function wa(e){xa(e),e.headers=Di.from(e.headers),e.data=Ii.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ba(e.adapter||Pi.adapter)(e).then((function(t){return xa(e),t.data=Ii.call(e,e.transformResponse,t),t.headers=Di.from(t.headers),t}),(function(t){return Fi(t)||(xa(e),t&&t.response&&(t.response.data=Ii.call(e,e.transformResponse,t.response),t.response.headers=Di.from(t.response.headers))),Promise.reject(t)}))}const _a="1.9.0",ka={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ka[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Sa={};ka.transitional=function(e,t,n){function r(e,t){return"[Axios v1.9.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new li(r(o," has been removed"+(t?" in "+t:"")),li.ERR_DEPRECATED);return t&&!Sa[o]&&(Sa[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}},ka.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const Ea={assertOptions:function(e,t,n){if("object"!==typeof e)throw new li("options must be an object",li.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new li("option "+i+" must be "+n,li.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new li("Unknown option "+i,li.ERR_BAD_OPTION)}},validators:ka},ja=Ea.validators;class Ca{constructor(e){this.defaults=e||{},this.interceptors={request:new xi,response:new xi}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch($v){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Zi(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ea.assertOptions(n,{silentJSONParsing:ja.transitional(ja.boolean),forcedJSONParsing:ja.transitional(ja.boolean),clarifyTimeoutError:ja.transitional(ja.boolean)},!1),null!=r&&(oi.isFunction(r)?t.paramsSerializer={serialize:r}:Ea.assertOptions(r,{encode:ja.function,serialize:ja.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ea.assertOptions(t,{baseUrl:ja.spelling("baseURL"),withXsrfToken:ja.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&oi.merge(o.common,o[t.method]);o&&oi.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Di.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let u;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let c,d=0;if(!s){const e=[wa.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),c=e.length,u=Promise.resolve(t);d<c;)u=u.then(e[d++],e[d++]);return u}c=a.length;let f=t;for(d=0;d<c;){const e=a[d++],t=a[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{u=wa.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,c=l.length;d<c;)u=u.then(l[d++],l[d++]);return u}getUri(e){return bi(Ji((e=Zi(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}oi.forEach(["delete","get","head","options"],(function(e){Ca.prototype[e]=function(t,n){return this.request(Zi(n||{},{method:e,url:t,data:(n||{}).data}))}})),oi.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Zi(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ca.prototype[e]=t(),Ca.prototype[e+"Form"]=t(!0)}));const Ta=Ca;class Oa{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Bi(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Oa((function(t){e=t})),cancel:e}}}const Ra=Oa;const Pa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pa).forEach((e=>{let[t,n]=e;Pa[n]=t}));const Aa=Pa;const La=function e(t){const n=new Ta(t),r=yo(Ta.prototype.request,n);return oi.extend(r,Ta.prototype,n,{allOwnKeys:!0}),oi.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Zi(t,n))},r}(Pi);La.Axios=Ta,La.CanceledError=Bi,La.CancelToken=Ra,La.isCancel=Fi,La.VERSION=_a,La.toFormData=pi,La.AxiosError=li,La.Cancel=La.CanceledError,La.all=function(e){return Promise.all(e)},La.spread=function(e){return function(t){return e.apply(null,t)}},La.isAxiosError=function(e){return oi.isObject(e)&&!0===e.isAxiosError},La.mergeConfig=Zi,La.AxiosHeaders=Di,La.formToJSON=e=>Oi(oi.isHTMLForm(e)?new FormData(e):e),La.getAdapter=ba,La.HttpStatusCode=Aa,La.default=La;const Na=La.create({baseURL:"https://api.jokesteronline.org/api",timeout:6e4});Na.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>Promise.reject(e))),Na.interceptors.response.use((e=>e.data?e:(console.warn("Empty response data",e),{...e,data:{data:[]}})),(async e=>{var t,n,r,o,i;401===(null===(t=e.response)||void 0===t?void 0:t.status)&&(localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.pathname.includes("/login")||(window.location.href="/login"));const a={message:(null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||"Erro na requisi\xe7\xe3o",status:(null===(o=e.response)||void 0===o?void 0:o.status)||500,data:(null===(i=e.response)||void 0===i?void 0:i.data)||null};return Promise.reject(a)}));Na.getArray=async(e,t)=>(e=>Array.isArray(e)?e:e&&Array.isArray(e.data)?e.data:e&&e.items&&Array.isArray(e.items)?e.items:[])((await Na.get(e,t)).data);const $a=Na,za={CONFLICT:"CONFLICT",AUTH_ERROR:"AUTH_ERROR",SESSION_EXPIRED:"SESSION_EXPIRED",NETWORK_ERROR:"NETWORK_ERROR",VALIDATION_ERROR:"VALIDATION_ERROR",UNKNOWN_ERROR:"UNKNOWN_ERROR"},Ma=async e=>{var t;try{const{data:t}=await $a.post("/auth/register",e);return t.token&&localStorage.setItem("token",t.token),t}catch(n){if(console.error("[Auth Service] Register Error:",n),!n.response)throw n.request?{type:za.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:za.UNKNOWN_ERROR,message:"Erro desconhecido ao registrar"};switch(n.response.status){case 400:throw{type:za.VALIDATION_ERROR,message:"Dados inv\xe1lidos",details:n.response.data.errors};case 409:throw{type:za.CONFLICT,message:n.response.data.message||"Conflito no registro",conflicts:n.response.data.conflicts};default:throw{type:za.UNKNOWN_ERROR,message:(null===(t=n.response.data)||void 0===t?void 0:t.message)||"Erro ao registrar usu\xe1rio"}}}},Da=async e=>{var t,n,r;try{const{data:t}=await $a.post("/auth/login",e);return localStorage.setItem("token",t.token),t}catch(o){if(console.error("[Auth Service] Login Error:",o),!o.response)throw o.request?{type:za.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:za.UNKNOWN_ERROR,message:"Erro desconhecido ao fazer login"};switch(o.response.status){case 400:throw{type:za.VALIDATION_ERROR,message:"Credenciais inv\xe1lidas",details:o.response.data.errors};case 401:throw{type:za.AUTH_ERROR,message:(null===(t=o.response.data)||void 0===t?void 0:t.message)||"Credenciais inv\xe1lidas"};case 403:throw{type:za.AUTH_ERROR,message:(null===(n=o.response.data)||void 0===n?void 0:n.message)||"Conta desativada ou bloqueada"};default:throw{type:za.UNKNOWN_ERROR,message:(null===(r=o.response.data)||void 0===r?void 0:r.message)||"Erro ao fazer login"}}}},Ia=async()=>{try{const e=localStorage.getItem("token");if(!e)throw{type:za.AUTH_ERROR,message:"Nenhum token encontrado"};const{data:t}=await $a.get("/auth/check",{headers:{Authorization:`Bearer ${e}`}});return t}catch(n){var e,t;if(console.error("[Auth Service] Check Auth Error:",n),401===(null===(e=n.response)||void 0===e?void 0:e.status))throw localStorage.removeItem("token"),{type:za.SESSION_EXPIRED,message:"Sess\xe3o expirada"};if(n.response)throw{type:za.UNKNOWN_ERROR,message:(null===(t=n.response.data)||void 0===t?void 0:t.message)||"Erro ao verificar autentica\xe7\xe3o"};throw n.request?{type:za.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:za.UNKNOWN_ERROR,message:n.message||"Erro desconhecido ao verificar autentica\xe7\xe3o"}}},Fa=async()=>{try{return await $a.post("/auth/logout"),localStorage.removeItem("token"),localStorage.removeItem("user"),{success:!0}}catch(t){var e;if(console.error("[Auth Service] Logout Error:",t),localStorage.removeItem("token"),localStorage.removeItem("user"),t.response)throw{type:za.UNKNOWN_ERROR,message:(null===(e=t.response.data)||void 0===e?void 0:e.message)||"Erro ao fazer logout"};throw t.request?{type:za.NETWORK_ERROR,message:"Sem resposta do servidor"}:{type:za.UNKNOWN_ERROR,message:"Erro desconhecido ao fazer logout"}}},Ua=Object.create(null);Ua.open="0",Ua.close="1",Ua.ping="2",Ua.pong="3",Ua.message="4",Ua.upgrade="5",Ua.noop="6";const Ba=Object.create(null);Object.keys(Ua).forEach((e=>{Ba[Ua[e]]=e}));const Wa={type:"error",data:"parser error"},Ha="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),qa="function"===typeof ArrayBuffer,Va=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Ka=(e,t,n)=>{let{type:r,data:o}=e;return Ha&&o instanceof Blob?t?n(o):Ya(o,n):qa&&(o instanceof ArrayBuffer||Va(o))?t?n(o):Ya(new Blob([o]),n):n(Ua[r]+(o||""))},Ya=(e,t)=>{const n=new FileReader;return n.onload=function(){const e=n.result.split(",")[1];t("b"+(e||""))},n.readAsDataURL(e)};function Qa(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Xa;const Ja="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ga="undefined"===typeof Uint8Array?[]:new Uint8Array(256);for(let n=0;n<64;n++)Ga[Ja.charCodeAt(n)]=n;const Za="function"===typeof ArrayBuffer,es=(e,t)=>{if("string"!==typeof e)return{type:"message",data:ns(e,t)};const n=e.charAt(0);if("b"===n)return{type:"message",data:ts(e.substring(1),t)};return Ba[n]?e.length>1?{type:Ba[n],data:e.substring(1)}:{type:Ba[n]}:Wa},ts=(e,t)=>{if(Za){const n=(e=>{let t,n,r,o,i,a=.75*e.length,s=e.length,l=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);const u=new ArrayBuffer(a),c=new Uint8Array(u);for(t=0;t<s;t+=4)n=Ga[e.charCodeAt(t)],r=Ga[e.charCodeAt(t+1)],o=Ga[e.charCodeAt(t+2)],i=Ga[e.charCodeAt(t+3)],c[l++]=n<<2|r>>4,c[l++]=(15&r)<<4|o>>2,c[l++]=(3&o)<<6|63&i;return u})(e);return ns(n,t)}return{base64:!0,data:e}},ns=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,rs=String.fromCharCode(30);function os(){return new TransformStream({transform(e,t){!function(e,t){Ha&&e.data instanceof Blob?e.data.arrayBuffer().then(Qa).then(t):qa&&(e.data instanceof ArrayBuffer||Va(e.data))?t(Qa(e.data)):Ka(e,!1,(e=>{Xa||(Xa=new TextEncoder),t(Xa.encode(e))}))}(e,(n=>{const r=n.length;let o;if(r<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,r);else if(r<65536){o=new Uint8Array(3);const e=new DataView(o.buffer);e.setUint8(0,126),e.setUint16(1,r)}else{o=new Uint8Array(9);const e=new DataView(o.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(r))}e.data&&"string"!==typeof e.data&&(o[0]|=128),t.enqueue(o),t.enqueue(n)}))}})}let is;function as(e){return e.reduce(((e,t)=>e+t.length),0)}function ss(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let o=0;o<t;o++)n[o]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function ls(e){if(e)return function(e){for(var t in ls.prototype)e[t]=ls.prototype[t];return e}(e)}ls.prototype.on=ls.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},ls.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},ls.prototype.off=ls.prototype.removeListener=ls.prototype.removeAllListeners=ls.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var o=0;o<r.length;o++)if((n=r[o])===t||n.fn===t){r.splice(o,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},ls.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,t)}return this},ls.prototype.emitReserved=ls.prototype.emit,ls.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},ls.prototype.hasListeners=function(e){return!!this.listeners(e).length};const us="function"===typeof Promise&&"function"===typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),cs="undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")();function ds(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce(((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t)),{})}const fs=cs.setTimeout,ps=cs.clearTimeout;function hs(e,t){t.useNativeTimers?(e.setTimeoutFn=fs.bind(cs),e.clearTimeoutFn=ps.bind(cs)):(e.setTimeoutFn=cs.setTimeout.bind(cs),e.clearTimeoutFn=cs.clearTimeout.bind(cs))}function ms(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}class gs extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class vs extends ls{constructor(e){super(),this.writable=!1,hs(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new gs(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=es(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}(e);return t.length?"?"+t:""}}class ys extends vs{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",(function(){--e||t()}))),this.writable||(e++,this.once("drain",(function(){--e||t()})))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const n=e.split(rs),r=[];for(let o=0;o<n.length;o++){const e=es(n[o],t);if(r.push(e),"error"===e.type)break}return r})(e,this.socket.binaryType).forEach((e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)})),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const n=e.length,r=new Array(n);let o=0;e.forEach(((e,i)=>{Ka(e,!1,(e=>{r[i]=e,++o===n&&t(r.join(rs))}))}))})(e,(e=>{this.doWrite(e,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=ms()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}}let bs=!1;try{bs="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(zv){}const xs=bs;function ws(){}class _s extends ys{constructor(e){if(super(e),"undefined"!==typeof location){const t="https:"===location.protocol;let n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!==typeof location&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",((e,t)=>{this.onError("xhr post error",e,t)}))}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",((e,t)=>{this.onError("xhr poll error",e,t)})),this.pollXhr=e}}class ks extends ls{constructor(e,t,n){super(),this.createRequest=e,hs(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=void 0!==n.data?n.data:null,this._create()}_create(){var e;const t=ds(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&n.setRequestHeader(e,this._opts.extraHeaders[e])}}catch($v){}if("POST"===this._method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch($v){}try{n.setRequestHeader("Accept","*/*")}catch($v){}null===(e=this._opts.cookieJar)||void 0===e||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var e;3===n.readyState&&(null===(e=this._opts.cookieJar)||void 0===e||e.parseCookies(n.getResponseHeader("set-cookie"))),4===n.readyState&&(200===n.status||1223===n.status?this._onLoad():this.setTimeoutFn((()=>{this._onError("number"===typeof n.status?n.status:0)}),0))},n.send(this._data)}catch($v){return void this.setTimeoutFn((()=>{this._onError($v)}),0)}"undefined"!==typeof document&&(this._index=ks.requestsCount++,ks.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if("undefined"!==typeof this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=ws,e)try{this._xhr.abort()}catch($v){}"undefined"!==typeof document&&delete ks.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(ks.requestsCount=0,ks.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",Ss);else if("function"===typeof addEventListener){addEventListener("onpagehide"in cs?"pagehide":"unload",Ss,!1)}function Ss(){for(let e in ks.requests)ks.requests.hasOwnProperty(e)&&ks.requests[e].abort()}const Es=function(){const e=js({xdomain:!1});return e&&null!==e.responseType}();function js(e){const t=e.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!t||xs))return new XMLHttpRequest}catch($v){}if(!t)try{return new(cs[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch($v){}}const Cs="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class Ts extends vs{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=Cs?{}:ds(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(zv){return this.emitReserved("error",zv)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;Ka(n,this.supportsBinary,(e=>{try{this.doWrite(n,e)}catch($v){}r&&us((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){"undefined"!==typeof this.ws&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=ms()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Os=cs.WebSocket||cs.MozWebSocket;const Rs={websocket:class extends Ts{createSocket(e,t,n){return Cs?new Os(e,t,n):t?new Os(e,t):new Os(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends vs{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(zv){return this.emitReserved("error",zv)}this._transport.closed.then((()=>{this.onClose()})).catch((e=>{this.onError("webtransport error",e)})),this._transport.ready.then((()=>{this._transport.createBidirectionalStream().then((e=>{const t=function(e,t){is||(is=new TextDecoder);const n=[];let r=0,o=-1,i=!1;return new TransformStream({transform(a,s){for(n.push(a);;){if(0===r){if(as(n)<1)break;const e=ss(n,1);i=128===(128&e[0]),o=127&e[0],r=o<126?3:126===o?1:2}else if(1===r){if(as(n)<2)break;const e=ss(n,2);o=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),r=3}else if(2===r){if(as(n)<8)break;const e=ss(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),i=t.getUint32(0);if(i>Math.pow(2,21)-1){s.enqueue(Wa);break}o=i*Math.pow(2,32)+t.getUint32(4),r=3}else{if(as(n)<o)break;const e=ss(n,o);s.enqueue(es(i?e:is.decode(e),t)),r=0}if(0===o||o>e){s.enqueue(Wa);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=os();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const o=()=>{n.read().then((e=>{let{done:t,value:n}=e;t||(this.onPacket(n),o())})).catch((e=>{}))};o();const i={type:"open"};this.query.sid&&(i.data=`{"sid":"${this.query.sid}"}`),this._writer.write(i).then((()=>this.onOpen()))}))}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;this._writer.write(n).then((()=>{r&&us((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){var e;null===(e=this._transport)||void 0===e||e.close()}},polling:class extends _s{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=Es&&!t}request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(e,{xd:this.xd},this.opts),new ks(js,this.uri(),e)}}},Ps=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,As=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Ls(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let o=Ps.exec(e||""),i={},a=14;for(;a--;)i[As[a]]=o[a]||"";return-1!=n&&-1!=r&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=function(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||r.splice(0,1);"/"==t.slice(-1)&&r.splice(r.length-1,1);return r}(0,i.path),i.queryKey=function(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(e,t,r){t&&(n[t]=r)})),n}(0,i.query),i}const Ns="function"===typeof addEventListener&&"function"===typeof removeEventListener,$s=[];Ns&&addEventListener("offline",(()=>{$s.forEach((e=>e()))}),!1);class zs extends ls{constructor(e,t){if(super(),this.binaryType="arraybuffer",this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&"object"===typeof e&&(t=e,e=null),e){const n=Ls(e);t.hostname=n.host,t.secure="https"===n.protocol||"wss"===n.protocol,t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=Ls(t.host).host);hs(this,t),this.secure=null!=t.secure?t.secure:"undefined"!==typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach((e=>{const t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e})),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"===typeof this.opts.query&&(this.opts.query=function(e){let t={},n=e.split("&");for(let r=0,o=n.length;r<o;r++){let e=n[r].split("=");t[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}return t}(this.opts.query)),Ns&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},$s.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);const e=this.opts.rememberUpgrade&&zs.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",(e=>this._onClose("transport close",e)))}onOpen(){this.readyState="open",zs.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()}_onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn((()=>{this._onClose("ping timeout")}),e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const r=this.writeBuffer[n].data;if(r&&(e+="string"===typeof(t=r)?function(e){let t=0,n=0;for(let r=0,o=e.length;r<o;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}(t):Math.ceil(1.33*(t.byteLength||t.size))),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}var t;return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,us((()=>{this._onClose("ping timeout")}),this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,r){if("function"===typeof t&&(r=t,t=void 0),"function"===typeof n&&(r=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;(n=n||{}).compress=!1!==n.compress;const o={type:e,data:t,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?n():e()})):this.upgrading?n():e()),this}_onError(e){if(zs.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ns&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const e=$s.indexOf(this._offlineEventListener);-1!==e&&$s.splice(e,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}zs.protocol=4;class Ms extends zs{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),"open"===this.readyState&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;zs.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",(e=>{if(!n)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;zs.priorWebsocketSuccess="websocket"===t.name,this.transport.pause((()=>{n||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())}))}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}})))};function o(){n||(n=!0,u(),t.close(),t=null)}const i=e=>{const n=new Error("probe error: "+e);n.transport=t.name,o(),this.emitReserved("upgradeError",n)};function a(){i("transport closed")}function s(){i("socket closed")}function l(e){t&&e.name!==t.name&&o()}const u=()=>{t.removeListener("open",r),t.removeListener("error",i),t.removeListener("close",a),this.off("close",s),this.off("upgrading",l)};t.once("open",r),t.once("error",i),t.once("close",a),this.once("close",s),this.once("upgrading",l),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn((()=>{n||t.open()}),200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}class Ds extends Ms{constructor(e){const t="object"===typeof e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!t.transports||t.transports&&"string"===typeof t.transports[0])&&(t.transports=(t.transports||["polling","websocket","webtransport"]).map((e=>Rs[e])).filter((e=>!!e))),super(e,t)}}const Is="function"===typeof ArrayBuffer,Fs=Object.prototype.toString,Us="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Fs.call(Blob),Bs="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===Fs.call(File);function Ws(e){return Is&&(e instanceof ArrayBuffer||(e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer)(e))||Us&&e instanceof Blob||Bs&&e instanceof File}function Hs(e,t){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(Hs(e[t]))return!0;return!1}if(Ws(e))return!0;if(e.toJSON&&"function"===typeof e.toJSON&&1===arguments.length)return Hs(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Hs(e[n]))return!0;return!1}function qs(e){const t=[],n=e.data,r=e;return r.data=Vs(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Vs(e,t){if(!e)return e;if(Ws(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=Vs(e[r],t);return n}if("object"===typeof e&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=Vs(e[r],t));return n}return e}function Ks(e,t){return e.data=Ys(e.data,t),delete e.attachments,e}function Ys(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"===typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=Ys(e[n],t);else if("object"===typeof e)for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=Ys(e[n],t));return e}const Qs=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Xs=5;var Js;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(Js||(Js={}));class Gs{constructor(e){this.replacer=e}encode(e){return e.type!==Js.EVENT&&e.type!==Js.ACK||!Hs(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===Js.EVENT?Js.BINARY_EVENT:Js.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==Js.BINARY_EVENT&&e.type!==Js.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=qs(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}}function Zs(e){return"[object Object]"===Object.prototype.toString.call(e)}class el extends ls{constructor(e){super(),this.reviver=e}add(e){let t;if("string"===typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Js.BINARY_EVENT;n||t.type===Js.BINARY_ACK?(t.type=n?Js.EVENT:Js.ACK,this.reconstructor=new tl(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!Ws(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(void 0===Js[n.type])throw new Error("unknown packet type "+n.type);if(n.type===Js.BINARY_EVENT||n.type===Js.BINARY_ACK){const r=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||"-"!==e.charAt(t))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===e.charAt(t+1)){const r=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}n.nsp=e.substring(r,t)}else n.nsp="/";const r=e.charAt(t+1);if(""!==r&&Number(r)==r){const r=t+1;for(;++t;){const n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(!el.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch($v){return!1}}static isPayloadValid(e,t){switch(e){case Js.CONNECT:return Zs(t);case Js.DISCONNECT:return void 0===t;case Js.CONNECT_ERROR:return"string"===typeof t||Zs(t);case Js.EVENT:case Js.BINARY_EVENT:return Array.isArray(t)&&("number"===typeof t[0]||"string"===typeof t[0]&&-1===Qs.indexOf(t[0]));case Js.ACK:case Js.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class tl{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=Ks(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function nl(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const rl=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ol extends ls{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[nl(e,"open",this.onopen.bind(this)),nl(e,"packet",this.onpacket.bind(this)),nl(e,"error",this.onerror.bind(this)),nl(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.unshift("message"),this.emit.apply(this,t),this}emit(e){var t,n,r;if(rl.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];if(i.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const s={type:Js.EVENT,data:i,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"===typeof i[i.length-1]){const e=this.ids++,t=i.pop();this._registerAckCallback(e,t),s.id=e}const l=null===(n=null===(t=this.io.engine)||void 0===t?void 0:t.transport)||void 0===n?void 0:n.writable,u=this.connected&&!(null===(r=this.io.engine)||void 0===r?void 0:r._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var n,r=this;const o=null!==(n=this.flags.timeout)&&void 0!==n?n:this._opts.ackTimeout;if(void 0===o)return void(this.acks[e]=t);const i=this.io.setTimeoutFn((()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))}),o),a=function(){r.io.clearTimeoutFn(i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t.apply(r,n)};a.withError=!0,this.acks[e]=a}emitWithAck(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise(((t,r)=>{const o=(e,n)=>e?r(e):t(n);o.withError=!0,n.push(o),this.emit(e,...n)}))}_addToQueue(e){var t=this;let n;"function"===typeof e[e.length-1]&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((function(e){if(r!==t._queue[0])return;if(null!==e)r.tryCount>t._opts.retries&&(t._queue.shift(),n&&n(e));else if(t._queue.shift(),n){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];n(null,...i)}return r.pending=!1,t._drainQueue()})),this._queue.push(r),this._drainQueue()}_drainQueue(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth((e=>{this._sendConnectPacket(e)})):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Js.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach((e=>{if(!this.sendBuffer.some((t=>String(t.id)===e))){const t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,new Error("socket has been disconnected"))}}))}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Js.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Js.EVENT:case Js.BINARY_EVENT:this.onevent(e);break;case Js.ACK:case Js.BINARY_ACK:this.onack(e);break;case Js.DISCONNECT:this.ondisconnect();break;case Js.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"===typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];t.packet({type:Js.ACK,id:e,data:o})}}}onack(e){const t=this.acks[e.id];"function"===typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach((e=>this.emitEvent(e))),this.receiveBuffer=[],this.sendBuffer.forEach((e=>{this.notifyOutgoingListeners(e),this.packet(e)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((e=>e())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Js.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function il(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}il.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},il.prototype.reset=function(){this.attempts=0},il.prototype.setMin=function(e){this.ms=e},il.prototype.setMax=function(e){this.max=e},il.prototype.setJitter=function(e){this.jitter=e};class al extends ls{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&"object"===typeof e&&(n=e,e=void 0),(n=n||{}).path=n.path||"/socket.io",this.opts=n,hs(this,n),this.reconnection(!1!==n.reconnection),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(r=n.randomizationFactor)&&void 0!==r?r:.5),this.backoff=new il({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==n.timeout?2e4:n.timeout),this._readyState="closed",this.uri=e;const o=n.parser||t;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=!1!==n.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ds(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=nl(t,"open",(function(){n.onopen(),e&&e()})),o=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},i=nl(t,"error",o);if(!1!==this._timeout){const e=this._timeout,n=this.setTimeoutFn((()=>{r(),o(new Error("timeout")),t.close()}),e);this.opts.autoUnref&&n.unref(),this.subs.push((()=>{this.clearTimeoutFn(n)}))}return this.subs.push(r),this.subs.push(i),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(nl(e,"ping",this.onping.bind(this)),nl(e,"data",this.ondata.bind(this)),nl(e,"error",this.onerror.bind(this)),nl(e,"close",this.onclose.bind(this)),nl(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch($v){this.onclose("parse error",$v)}}ondecoded(e){us((()=>{this.emitReserved("packet",e)}),this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new ol(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t){if(this.nsps[n].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach((e=>e())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),null===(n=this.engine)||void 0===n||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn((()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()})))}),t);this.opts.autoUnref&&n.unref(),this.subs.push((()=>{this.clearTimeoutFn(n)}))}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const sl={};function ll(e,t){"object"===typeof e&&(t=e,e=void 0);const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=e;n=n||"undefined"!==typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"===typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e="undefined"!==typeof n?n.protocol+"//"+e:"https://"+e),r=Ls(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+t,r.href=r.protocol+"://"+o+(n&&n.port===r.port?"":":"+r.port),r}(e,(t=t||{}).path||"/socket.io"),r=n.source,o=n.id,i=n.path,a=sl[o]&&i in sl[o].nsps;let s;return t.forceNew||t["force new connection"]||!1===t.multiplex||a?s=new al(r,t):(sl[o]||(sl[o]=new al(r,t)),s=sl[o]),n.query&&!t.query&&(t.query=n.queryKey),s.socket(n.path,t)}Object.assign(ll,{Manager:al,Socket:ol,io:ll,connect:ll});const ul={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org";let cl;const dl=e=>(cl||(console.log("Inicializando socket com token:",e?"presente":"ausente"),cl=ll(ul,{auth:{token:e},transports:["websocket"],reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3,withCredentials:!0}),cl.on("connect",(()=>{console.log("Socket conectado:",cl.id)})),cl.on("disconnect",(e=>{console.log("Socket desconectado. Raz\xe3o:",e),"io server disconnect"===e&&cl.connect()})),cl.on("connect_error",(e=>{console.error("Erro de conex\xe3o:",e.message),console.error("Detalhes do erro:",e),setTimeout((()=>{cl.connect()}),1e3)}))),cl);var fl=n(579);const pl=(0,r.createContext)(),hl=e=>{let{children:t}=e;const[n,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(!0),[s,l]=(0,r.useState)(!1),u=(0,r.useCallback)((async()=>{try{if(!("Notification"in window))return console.warn("Este navegador n\xe3o suporta notifica\xe7\xf5es desktop"),!1;if("granted"===Notification.permission)return!0;if("denied"!==Notification.permission){if("granted"===await Notification.requestPermission())return console.log("Permiss\xe3o para notifica\xe7\xf5es concedida"),!0}return console.log("Permiss\xe3o para notifica\xe7\xf5es n\xe3o concedida"),!1}catch(e){return console.error("Erro ao solicitar permiss\xe3o de notifica\xe7\xf5es:",e),!1}}),[]),c=(0,r.useCallback)((async()=>{if(!localStorage.getItem("token"))return a(!1),void l(!0);try{var e,t;a(!0);const n=await Ia();o((null===n||void 0===n?void 0:n.user)||null),!1!==(null===n||void 0===n||null===(e=n.user)||void 0===e||null===(t=e.settings)||void 0===t?void 0:t.notificationsEnabled)&&await u()}catch(n){console.error("Falha na verifica\xe7\xe3o de autentica\xe7\xe3o:",n),localStorage.removeItem("token"),o(null)}finally{a(!1),l(!0)}}),[u]),d=(0,r.useCallback)((async e=>{try{var t,n;a(!0);const r=await apiLogin(e);return localStorage.setItem("token",r.token),o(r.user),!1!==(null===(t=r.user)||void 0===t||null===(n=t.settings)||void 0===n?void 0:n.notificationsEnabled)&&await u(),r}catch(r){throw r}finally{a(!1)}}),[u]),f=(0,r.useCallback)((async()=>{try{await Fa(),localStorage.removeItem("token"),o(null),cl&&(cl.disconnect(),cl=null)}catch(e){console.error("Logout error:",e)}}),[]),p=(0,r.useCallback)((async function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{o((t=>({...t,...e}))),t&&await c()}catch(n){throw console.error("Falha ao atualizar usu\xe1rio:",n),n}}),[c]),h=(0,r.useCallback)((async e=>{try{const t=new FormData;t.append("avatar",e);const{data:n}=await $a.put("/users/profile",t,{headers:{"Content-Type":"multipart/form-data"}});return await p(n),n}catch(t){throw console.error("Falha ao atualizar avatar:",t),t}}),[p]),m=(0,r.useCallback)((async e=>{try{return await $a.patch("/users/settings",{notificationsEnabled:e}),await p({settings:{...n.settings,notificationsEnabled:e}},!1),e&&await u(),!0}catch(t){throw console.error("Falha ao atualizar prefer\xeancias:",t),t}}),[n,p,u]);return(0,r.useEffect)((()=>{c()}),[c]),(0,fl.jsx)(pl.Provider,{value:{user:n,loading:i,initialCheckDone:s,verifyAuth:c,login:d,logout:f,updateUser:p,updateAvatar:h,updateNotificationPreferences:m,requestNotificationPermission:u},children:t})},ml=()=>{const e=(0,r.useContext)(pl);if(!e)throw new Error("useAuth deve ser usado dentro de um AuthProvider");return e};var gl={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},vl=r.createContext&&r.createContext(gl),yl=["attr","size","title"];function bl(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}function wl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?wl(Object(n),!0).forEach((function(t){kl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wl(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function kl(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sl(e){return e&&e.map(((e,t)=>r.createElement(e.tag,_l({key:t},e.attr),Sl(e.child))))}function El(e){return t=>r.createElement(jl,xl({attr:_l({},e.attr)},t),Sl(e.child))}function jl(e){var t=t=>{var n,{attr:o,size:i,title:a}=e,s=bl(e,yl),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",xl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:_l(_l({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==vl?r.createElement(vl.Consumer,null,(e=>t(e))):t(gl)}function Cl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(e)}function Tl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(e)}function Ol(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function Rl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(e)}function Pl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(e)}function Al(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(e)}function Ll(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function Nl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 10 4 15 9 20"},child:[]},{tag:"path",attr:{d:"M20 4v7a4 4 0 0 1-4 4H4"},child:[]}]})(e)}function $l(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(e)}function zl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(e)}function Ml(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function Dl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(e)}function Il(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"6"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12",y2:"22"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"6",y2:"12"},child:[]},{tag:"line",attr:{x1:"18",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"},child:[]}]})(e)}function Fl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(e)}function Ul(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function Bl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(e)}function Wl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(e)}function Hl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(e)}function ql(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"},child:[]}]})(e)}function Vl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(e)}function Kl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(e)}function Yl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(e)}function Ql(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function Xl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(e)}function Jl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(e)}function Gl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(e)}function Zl(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(e)}function eu(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(e)}function tu(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(e)}function nu(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(e)}function ru(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(e)}function ou(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"},child:[]},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"},child:[]}]})(e)}function iu(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function au(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function su(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function lu(e){return El({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(e)}function uu(e){return El({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 240c0-9.3 4.1-17.5 10.5-23.4l-31-9.3c-8.5-2.5-13.3-11.5-10.7-19.9 2.5-8.5 11.4-13.2 19.9-10.7l80 24c8.5 2.5 13.3 11.5 10.7 19.9-2.1 6.9-8.4 11.4-15.3 11.4-.5 0-1.1-.2-1.7-.2.7 2.7 1.7 5.3 1.7 8.2 0 17.7-14.3 32-32 32S136 257.7 136 240zm168 154.2c-27.8-33.4-84.2-33.4-112.1 0-13.5 16.3-38.2-4.2-24.6-20.5 20-24 49.4-37.8 80.6-37.8s60.6 13.8 80.6 37.8c13.8 16.5-11.1 36.6-24.5 20.5zm76.6-186.9l-31 9.3c6.3 5.8 10.5 14.1 10.5 23.4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.9.9-5.6 1.7-8.2-.6.1-1.1.2-1.7.2-6.9 0-13.2-4.5-15.3-11.4-2.5-8.5 2.3-17.4 10.7-19.9l80-24c8.4-2.5 17.4 2.3 19.9 10.7 2.5 8.5-2.3 17.4-10.8 19.9z"},child:[]}]})(e)}function cu(e){return El({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function du(e){return El({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(e)}function fu(e){return El({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm33.8 161.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 180l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.7-4.7-7.7-15.9 0-20.6zm-163-30c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.8 4.7 7.8 15.9 0 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3-33.6-40.3zM398.9 306C390 377 329.4 432 256 432h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18z"},child:[]}]})(e)}function pu(e){return El({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(e)}function hu(e){return El({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(e)}function mu(e){return El({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z"},child:[]}]})(e)}function gu(e){return El({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M0 256c0 137 111 248 248 248s248-111 248-248S385 8 248 8 0 119 0 256zm200-48c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm158.5 16.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.7 11.1-11.4 18.3-19.8 10.8l-9.7-8.5zM157.8 325.8C180.2 352.7 213 368 248 368s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.2 24.6 20.5C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11.2-36.7 24.6-20.4z"},child:[]}]})(e)}function vu(e){return El({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"},child:[]}]})(e)}function yu(e){return El({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}const bu=e=>{if(!e)return console.warn("URL is empty or undefined"),"";if(e.startsWith("https"))return e;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${e}`},xu=to`
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(5deg); }
  50% { transform: scale(1.3) rotate(0deg); }
  75% { transform: scale(1.2) rotate(-5deg); }
`,wu=to`
  0%, 100% { transform: scale(1) rotate(0deg); }
  20% { transform: scale(1.2) rotate(-10deg); }
  40% { transform: scale(1.3) rotate(10deg); }
  60% { transform: scale(1.2) rotate(-10deg); }
  80% { transform: scale(1.1) rotate(5deg); }
`,_u=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,ku=Zr.div`
  background: var(--card-bg);
  border-top: 1px solid var(--border-light);
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    border-top: none;
  }
`,Su=Zr.div`
  max-height: 31.25rem;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding-right: 0.5rem;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-y;
  
  /* Melhora a sensação de arraste */
  scroll-snap-type: y proximity;
  scrollbar-width: thin;
  
  @media (max-width: 768px) {
    max-height: none;
    height: 60vh;
    padding-right: 0;
    margin-bottom: 0.5rem;
  }

  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--background);
    border-radius: 0.625rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--border-light);
    border-radius: 0.625rem;
    
    &:hover {
      background: var(--primary);
    }
  }
`,Eu=Zr.div`
  display: flex;
  margin-bottom: 1rem;
  position: relative;
  transition: var(--transition);
  margin-left: ${e=>1.25*e.$depth}rem;
  border-left: ${e=>e.$depth>0?"2px solid var(--primary)":"none"};
  padding-left: ${e=>e.$depth>0?"0.75rem":"0"};

  @media (max-width: 768px) {
    margin-left: ${e=>.75*e.$depth}rem;
    padding-left: ${e=>e.$depth>0?"0.5rem":"0"};
  }

  &:hover {
    transform: translateX(0.125rem);
  }

  ${e=>e.$isPopular&&Xr`
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
      animation: ${_u} 1.5s infinite;
    }
  `}
`,ju=Zr.img`
  width: ${e=>e.$isReply?"32px":"40px"};
  height: ${e=>e.$isReply?"32px":"40px"};
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  border: 2px solid var(--background);
  transition: all 0.2s;

  &:hover {
    border-color: #ff4500;
    transform: scale(1.05);
  }
`,Cu=Zr.div`
  flex: 1;
  background: var(--comment-bg);
  padding: 0.75rem;
  border-radius: var(--radius-md);
  position: relative;
  box-shadow: var(--shadow-sm);
  overflow: visible;
  color: var(--text);
  transition: background 0.3s ease;
  
  ${e=>e.$isReply&&Xr`
    background: var(--reply-bg);
  `}
`,Tu=Zr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
`,Ou=Zr.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 6px;
`,Ru=Zr.span`
  font-size: 0.7rem;
  background: linear-gradient(135deg, #ff4500, #ff8c00);
  color: var(--card-bg); 
  padding: 2px 6px;
  border-radius: 12px;
`,Pu=Zr.p`
  margin: 8px 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text);
  white-space: pre-wrap;
  word-break: break-word;
  ${e=>e.$isDeleted&&"font-style: italic; color: #999;"}
`,Au=Zr.small`
  display: block;
  font-size: 0.75rem;
  color: #999;
  margin-top: 4px;
`,Lu=Zr.form`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  background: var(--input-bg);
  border-radius: var(--radius-lg);
  padding: 0.25rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid var(--border-light);

  @media (max-width: 768px) {
    position: sticky;
    bottom: 0;
    margin-top: 0.5rem;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    background: var(--card-bg);
    padding: 0.5rem;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
    border-color: var(--primary);
  }
`,Nu=Zr.input`
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
    font-size: 16px; // Prevent zoom on iOS
    min-height: 44px; // Tamanho mínimo para toque
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`,$u=Zr.button`
  background: linear-gradient(135deg, #ff4500, #ff8c00);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 5px rgba(255, 69, 0, 0.3);

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    margin-left: 4px;
  }

  &:hover {
    background: linear-gradient(135deg, #e03d00, #e07d00);
    transform: scale(1.05);
  }
`,zu=Zr.button`
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 4px 8px;
  border-radius: 16px;
  transition: all 0.2s;

  &:hover {
    color: #ff4500;
    background: rgba(255, 69, 0, 0.1);
  }
`,Mu=Zr.form`
  display: flex;
  margin: 8px 0 16px 52px;
  background: #fff;
  border-radius: 24px;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: var(--transition);

  &:focus-within {
    box-shadow: 0 2px 12px rgba(255, 69, 0, 0.2);
  }
`,Du=Zr.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,Iu=Zr.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.25rem 0.625rem;
  border-radius: 1rem;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.1);
  }

  ${e=>"like"===e.$type&&Xr`
    color: ${e.$active?"var(--like-color)":"var(--text-light)"};
    &:hover {
      background: rgba(var(--like-rgb), 0.1);
    }
    ${e.$active&&Xr`
      animation: ${xu} 0.6s;
    `}
  `}

  ${e=>"dislike"===e.$type&&Xr`
    color: ${e.$active?"var(--dislike-color)":"var(--text-light)"};
    &:hover {
      background: rgba(var(--dislike-rgb), 0.1);
    }
    ${e.$active&&Xr`
      animation: ${wu} 0.6s;
    `}
  `}
`,Fu=Zr.span`
  font-size: 0.85rem;
  color: inherit;
  margin-left: 4px;
`,Uu=Zr.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    color: #ff4500;
    background: rgba(0, 0, 0, 0.05);
    transform: rotate(90deg);
  }
`,Bu=Zr.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: var(--card-bg);
  border: 1px solid var(--background);
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 120px;
  overflow: hidden;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px) translateY(-50%); }
    to { opacity: 1; transform: translateY(0) translateY(-50%); }
  }
`,Wu=Zr.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: none;
  border: none;
  text-align: left;
  color: var(--text);
  cursor: pointer;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    background: var(--background-light);
    color: var(--primary);
  }
`,Hu=Zr.div`
  margin-top: 8px;
`,qu=Zr.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  resize: none;
  font-family: inherit;
  font-size: 0.95rem;
  min-height: 5rem;
  margin-bottom: 0.5rem;
  background: var(--input-bg);
  color: var(--input-text);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`,Vu=Zr.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,Ku=Zr.button`
  background: linear-gradient(135deg, #ff4500, #ff8c00);
  color: var(--card-bg); 
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 5px rgba(255, 69, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #e03d00, #e07d00);
    transform: translateY(-1px);
  }
`,Yu=Zr.button`
  background: var(--background);
  color: var(--text-light);
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--background);
    transform: translateY(-1px);
  }
`,Qu=Zr.div`
  text-align: center;
  padding: 20px;
  color: var(--text-light);
  font-size: 0.9rem;
`,Xu=Zr.div`
  text-align: center;
  padding: 20px;
  color: var(--text-light);
  font-size: 0.9rem;
`,Ju=Zr.div`
  text-align: center;
  padding: 20px;
  color: #ff3b30;
  font-size: 0.9rem;
`,Gu=Zr.span`
  font-style: italic;
  color: #999;
`,Zu=Zr.div`
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 16px;
  padding: 0 8px;
  font-weight: 500;
`,ec=Zr.span`
  font-size: 0.7rem;
  background: linear-gradient(135deg, #ff8c00, #ff4500);
  color: background: var(--card-bg);
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`,tc=Zr.div`
  margin-top: 12px;
  border: 1px solid var(--background);
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  position: relative;
`,nc=Zr.img`
  width: 100%;
  height: auto;
  display: block;
`,rc=Zr.p`
  padding: 8px;
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
  background: #f9f9f9;
`,oc=Zr.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ic=Zr.button`
  background: var(--background);
  color: var(--text-light);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  &:hover {
    background: #e0e0e0;
    color: #ff4500;
  }
`,ac=Zr.div`
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
`,sc=Zr.div`
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
`,lc=Zr.div`
  padding: ${e=>e.$isMobile?"12px 16px":"16px"};
  border-bottom: 1px solid var(--background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: var(--card-bg);
  z-index: 10;
`,uc=Zr.h3`
  font-size: ${e=>e.$isMobile?"1rem":"1.25rem"};
  margin: 0;
`,cc=Zr.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-light);
  padding: ${e=>e.$isMobile?"4px":"8px"};
`,dc=Zr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${e=>e.$isMobile?"100px":"120px"}, 1fr));
  gap: ${e=>e.$isMobile?"6px":"8px"};
  padding: ${e=>e.$isMobile?"12px":"16px"};
  overflow-y: auto;
`,fc=Zr.div`
  position: relative;
  aspect-ratio: 1;
`,pc=Zr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${e=>e.$selected?"#ff4500":"transparent"};
  transition: all 0.2s;

  &:hover {
    transform: ${e=>e.$isMobile?"none":"scale(1.05)"};
  }
`,hc=Zr.div`
  padding: ${e=>e.$isMobile?"12px":"16px"};
  border-top: 1px solid var(--background);
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.$isMobile?"6px":"8px"};
  position: sticky;
  bottom: 0;
  background: var(--card-bg);
`,mc=Zr.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${e=>e.$selected?"#ff4500":"transparent"};
  transition: all 0.2s;
  background: #000;

  &:hover {
    transform: ${e=>e.$isMobile?"none":"scale(1.05)"};
  }
`,gc=Zr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: ${e=>e.$isMobile?"2px 4px":"4px"};
  font-size: ${e=>e.$isMobile?"0.6rem":"0.7rem"};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,vc=Zr.button`
  padding: ${e=>e.$isMobile?"6px 12px":"8px 16px"};
  font-size: ${e=>e.$isMobile?"0.9rem":"1rem"};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: ${e=>e.$primary?"#ff4500":"var(--background)"};
  color: ${e=>e.$primary?"white":"var(--text)"};
  transition: all 0.2s;
  min-width: ${e=>e.$isMobile?"100px":"auto"};

  &:hover {
    background: ${e=>e.$primary?"#e03d00":"#e0e0e0"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,yc=e=>{let{file:t,meme:n,onRemove:o}=e;const i=(0,r.useMemo)((()=>window.innerWidth<=768),[]),a={position:"absolute",top:i?"8px":"5px",right:i?"8px":"5px",background:"rgba(0,0,0,0.7)",color:"white",border:"none",borderRadius:"50%",width:i?"32px":"24px",height:i?"32px":"24px",cursor:"pointer",fontSize:i?"18px":"16px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,transition:"transform 0.2s",":hover":{transform:"scale(1.1)"},":active":{transform:"scale(0.95)"}},s=Zr(tc)`
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
  `,l=Zr(rc)`
    padding: ${i?"10px":"8px"};
    font-size: ${i?"0.9rem":"0.8rem"};
    background: ${i?"rgba(0,0,0,0.7)":"#f9f9f9"};
    color: ${i?"white":"var(--text-light)"};
  `;if(n){var u,c;const e=(null===(u=n.mediaUrl)||void 0===u?void 0:u.endsWith(".mp4"))||(null===(c=n.mediaUrl)||void 0===c?void 0:c.includes("video/"));return(0,fl.jsxs)(s,{children:[e?(0,fl.jsxs)("video",{controls:!0,playsInline:!0,style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},crossOrigin:"anonymous",children:[(0,fl.jsx)("source",{src:bu(n.mediaUrl),type:"video/mp4"}),"Seu navegador n\xe3o suporta v\xeddeos HTML5."]}):(0,fl.jsx)(nc,{src:bu(n.mediaUrl),alt:n.caption||"Meme compartilhado",crossOrigin:"anonymous",style:{maxHeight:i?"50vh":"60vh"},onError:e=>{e.target.style.display="none"}}),n.caption&&(0,fl.jsx)(l,{children:n.caption}),(0,fl.jsx)("button",{onClick:o,style:a,"aria-label":"Remover m\xeddia",children:"\xd7"})]})}if(t){const e=t.type.startsWith("video/"),n=URL.createObjectURL(t);return(0,fl.jsxs)(s,{children:[e?(0,fl.jsxs)("video",{controls:!0,playsInline:!0,style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},children:[(0,fl.jsx)("source",{src:n,type:t.type}),"Seu navegador n\xe3o suporta v\xeddeos HTML5."]}):(0,fl.jsx)("img",{src:n,alt:"Preview",style:{width:"100%",display:"block",maxHeight:i?"50vh":"60vh"},onError:e=>{e.target.style.display="none"}}),(0,fl.jsx)("button",{onClick:()=>{o(),URL.revokeObjectURL(n)},style:a,"aria-label":"Remover m\xeddia",children:"\xd7"})]})}return null},bc=(0,r.memo)((e=>{var t,n,o,i;let{comment:a,depth:s=0,parentCommentId:l=null,currentUser:u,onEdit:c,onDelete:d,onReply:f,onReaction:p,editingId:h,editText:m,onEditChange:g,onSaveEdit:v,replyingTo:y,replyText:b,onReplyChange:x,onReplySubmit:w,showOptions:_,onToggleOptions:k,isPopular:S,replyTexts:E,onReplyMediaChange:j,onReplyMemeChange:C,replyMedia:T,replySelectedMeme:O,onOpenMemeSelector:R,userMemes:P,loadMoreReplies:A,loadingReplies:L,expandedReplies:N,setExpandedReplies:$}=e;const z=te(),M=h===a._id,D=y===a._id,I=s>0,F=a.isDeleted,U=a.user||{_id:"deleted",username:"[Removido]",profile:{avatar:"https://i.pravatar.cc/150?img=3"}},B=!F&&u&&(U._id===u._id||u.isAdmin),W=(0,r.useCallback)((e=>new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),[]),H=(0,r.useCallback)((e=>new Date(e).toLocaleDateString([],{day:"2-digit",month:"2-digit",year:"numeric"})),[]),q=a.repliesCount>((null===(t=a.replies)||void 0===t?void 0:t.length)||0);return(0,fl.jsxs)(r.Fragment,{children:[(0,fl.jsxs)(Eu,{$depth:s,$isPopular:S,"data-testid":`comment-${a._id}`,children:[(0,fl.jsx)(ju,{src:null!==(n=U.profile)&&void 0!==n&&n.avatar?U.profile.avatar.startsWith("https")?U.profile.avatar:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${U.profile.avatar}`:"https://i.pravatar.cc/150?img=3",alt:U.username,$isReply:I,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"},onClick:()=>z(`/users/${U._id}`),style:{cursor:"pointer"}}),(0,fl.jsxs)(Cu,{$isReply:I,children:[(0,fl.jsxs)(Tu,{children:[(0,fl.jsxs)(Ou,{onClick:()=>z(`/users/${U._id}`),style:{cursor:"pointer"},children:["@",U.username,U.isVerified&&(0,fl.jsx)(Ru,{children:"Verificado"}),S&&(0,fl.jsx)(ec,{children:"\ud83d\udd25 Popular"})]}),B&&(0,fl.jsx)(Uu,{onClick:()=>k(a._id),"aria-label":"Mais op\xe7\xf5es",children:(0,fl.jsx)(Hl,{})})]}),_===a._id&&(0,fl.jsxs)(Bu,{children:[(0,fl.jsxs)(Wu,{onClick:()=>c(a),children:[(0,fl.jsx)($l,{size:14})," Editar"]}),(0,fl.jsxs)(Wu,{onClick:()=>d(a._id,I,l),children:[(0,fl.jsx)(eu,{size:14})," Excluir"]}),(0,fl.jsxs)(Wu,{onClick:()=>k(null),children:[(0,fl.jsx)(su,{size:14})," Cancelar"]})]}),M?(0,fl.jsxs)(Hu,{children:[(0,fl.jsx)(qu,{value:m,onChange:e=>g(e.target.value),autoFocus:!0,"aria-label":"Editar coment\xe1rio"}),(0,fl.jsxs)(Vu,{children:[(0,fl.jsx)(Yu,{onClick:()=>c(null),children:"Cancelar"}),(0,fl.jsx)(Ku,{onClick:()=>v(a._id,I,l),children:"Salvar"})]})]}):(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Pu,{$isDeleted:F,children:F?(0,fl.jsx)(Gu,{children:a.text}):a.text}),a.sharedMeme&&a.sharedMeme.mediaUrl&&(0,fl.jsxs)(tc,{children:["video"===a.sharedMeme.mediaType||a.sharedMeme.mediaUrl.endsWith(".mp4")?(0,fl.jsxs)("video",{controls:!0,style:{width:"100%",display:"block"},crossOrigin:"anonymous",children:[(0,fl.jsx)("source",{src:bu(a.sharedMeme.mediaUrl),type:"video/mp4"}),"Seu navegador n\xe3o suporta v\xeddeos HTML5."]}):(0,fl.jsx)(nc,{src:bu(a.sharedMeme.mediaUrl),alt:a.sharedMeme.caption||"Meme compartilhado",crossOrigin:"anonymous",onError:e=>{console.error("Failed to load meme:",e.target.src),e.target.style.display="none"}}),a.sharedMeme.caption&&(0,fl.jsx)(rc,{children:a.sharedMeme.caption})]}),(0,fl.jsxs)(Au,{children:[H(a.createdAt)," \xe0s ",W(a.createdAt),a.isEdited&&" (editado)"]})]}),!F&&(0,fl.jsxs)(Du,{children:[(0,fl.jsxs)(Iu,{onClick:()=>p(a._id,"like",I,l),$active:"like"===a.userReaction,$type:"like","aria-label":"Curtir",children:["like"===a.userReaction?"\ud83d\ude0a":"\ud83d\ude42",(0,fl.jsx)(Fu,{children:(null===(o=a.likes)||void 0===o?void 0:o.length)||0})]}),(0,fl.jsxs)(Iu,{onClick:()=>p(a._id,"dislike",I,l),$active:"dislike"===a.userReaction,$type:"dislike","aria-label":"N\xe3o curtir",children:["dislike"===a.userReaction?"\ud83d\ude20":"\u2639\ufe0f",(0,fl.jsx)(Fu,{children:(null===(i=a.dislikes)||void 0===i?void 0:i.length)||0})]}),u&&s<10&&(0,fl.jsxs)(zu,{onClick:()=>f(a._id,l),children:[(0,fl.jsx)(Nl,{size:12}),"Responder"]})]})]})]}),D&&s<10&&(0,fl.jsxs)(Mu,{onSubmit:e=>{e.preventDefault(),w(a._id)},children:[(0,fl.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[(0,fl.jsx)(Nu,{type:"text",id:`reply-input-${a._id}`,name:`replyTo${a._id}`,value:E[a._id]||"",onChange:e=>x(a._id,e.target.value),placeholder:"Escreva uma resposta...","aria-label":"Responder coment\xe1rio"}),(0,fl.jsx)(ic,{type:"button",onClick:()=>document.getElementById(`reply-file-${a._id}`).click(),"aria-label":"Anexar m\xeddia",children:(0,fl.jsx)(ql,{size:18})}),(0,fl.jsx)("input",{type:"file",id:`reply-file-${a._id}`,style:{display:"none"},onChange:e=>{const t=e.target.files[0];t&&(j(t,a._id),C(null,a._id))},accept:"image/*, video/*"}),(0,fl.jsx)(ic,{type:"button",onClick:()=>R(a._id),"aria-label":"Compartilhar meme",children:(0,fl.jsx)(Dl,{size:18})}),(0,fl.jsx)($u,{type:"submit","aria-label":"Enviar resposta",children:(0,fl.jsx)(Ql,{size:18})})]}),(T[a._id]||O[a._id])&&(0,fl.jsx)(yc,{file:T[a._id],meme:O[a._id]?P.find((e=>e._id===O[a._id])):null,onRemove:()=>{j(null,a._id),C(null,a._id)}})]}),a.replies&&Array.isArray(a.replies)&&a.replies.length>0&&(0,fl.jsxs)("div",{style:{marginLeft:s>0?"1.25rem":"0"},children:[a.replies.slice(0,N[a._id]?a.replies.length:1).map((e=>(0,fl.jsx)(bc,{comment:e,depth:s+1,parentCommentId:a._id,currentUser:u,onEdit:c,onDelete:d,onReply:f,onReaction:p,editingId:h,editText:m,onEditChange:g,onSaveEdit:v,replyingTo:y,replyTexts:E,onReplyChange:x,onReplySubmit:w,showOptions:_,onToggleOptions:k,isPopular:!1,onReplyMediaChange:j,onReplyMemeChange:C,replyMedia:T,replySelectedMeme:O,onOpenMemeSelector:R,userMemes:P,loadMoreReplies:A,loadingReplies:L},e._id))),a.replies.length>1&&(0,fl.jsx)("div",{style:{textAlign:"center",marginTop:"0.5rem",paddingLeft:s>0?"1.25rem":"0"},children:(0,fl.jsx)("button",{onClick:()=>$((e=>({...e,[a._id]:!e[a._id]}))),disabled:L[a._id],style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0.25rem 0.75rem",fontSize:"0.85rem",borderRadius:"1rem",transition:"all 0.2s",display:"inline-flex",alignItems:"center",gap:"0.25rem",":hover":{backgroundColor:"rgba(var(--primary-rgb), 0.1)"},":disabled":{opacity:.7,cursor:"not-allowed"}},children:L[a._id]?(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Il,{size:14}),"Carregando..."]}):N[a._id]?"Mostrar menos":`Mostrar mais respostas (${a.replies.length-1})`})}),q&&!N[a._id]&&(0,fl.jsx)("div",{style:{textAlign:"center",marginTop:"0.5rem",paddingLeft:s>0?"1.25rem":"0"},children:(0,fl.jsx)("button",{onClick:()=>A(a._id),disabled:L[a._id],style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",padding:"0.25rem 0.75rem",fontSize:"0.85rem",borderRadius:"1rem",transition:"all 0.2s",display:"inline-flex",alignItems:"center",gap:"0.25rem",":hover":{backgroundColor:"rgba(var(--primary-rgb), 0.1)"},":disabled":{opacity:.7,cursor:"not-allowed"}},children:L[a._id]?(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Il,{size:14}),"Carregando..."]}):`Carregar mais respostas (${a.repliesCount-a.replies.length})`})})]})]})})),xc=e=>{let{memes:t,selectedMeme:n,onSelect:o,onClose:i,isForReply:a=!1}=e;const s=(0,r.useMemo)((()=>window.innerWidth<=768),[]);return(0,fl.jsx)(ac,{children:(0,fl.jsxs)(sc,{$isMobile:s,children:[(0,fl.jsxs)(lc,{$isMobile:s,children:[(0,fl.jsx)(uc,{$isMobile:s,children:"Selecione um meme para compartilhar"}),(0,fl.jsx)(cc,{onClick:i,"aria-label":"Fechar",$isMobile:s,children:(0,fl.jsx)(su,{size:s?20:24})})]}),(0,fl.jsx)(dc,{$isMobile:s,children:t.map((e=>{var t;const r="video"===e.mediaType||(null===(t=e.mediaUrl)||void 0===t?void 0:t.endsWith(".mp4")),i=e.mediaUrl.startsWith("https")?e.mediaUrl:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${e.mediaUrl}`;return(0,fl.jsxs)(fc,{$isMobile:s,children:[r?(0,fl.jsx)(mc,{$isMobile:s,$selected:n===e._id,onClick:()=>o(e._id,a),crossOrigin:"anonymous",children:(0,fl.jsx)("source",{src:i,type:"video/mp4"})}):(0,fl.jsx)(pc,{src:i,onClick:()=>o(e._id,a),$selected:n===e._id,$isMobile:s,crossOrigin:"anonymous",alt:e.caption||"Meme"}),e.caption&&(0,fl.jsx)(gc,{$isMobile:s,children:e.caption})]},e._id)}))}),(0,fl.jsxs)(hc,{$isMobile:s,children:[(0,fl.jsx)(vc,{onClick:i,$isMobile:s,children:"Cancelar"}),(0,fl.jsx)(vc,{$primary:!0,onClick:()=>{o(n,a),i()},disabled:!n,$isMobile:s,children:a?"Compartilhar na Resposta":"Compartilhar"})]})]})})},wc=e=>{let{memeId:t,onCommentSubmit:n,onCommentCountChange:o}=e;const{user:i}=ml(),[a,s]=(0,r.useState)([]),[l,u]=(0,r.useState)(!0),[c,d]=(0,r.useState)(null),[f,p]=(0,r.useState)(""),[h,m]=(0,r.useState)(null),[g,v]=(0,r.useState)(""),[y,b]=(0,r.useState)(null),[x,w]=(0,r.useState)(null),[_,k]=(0,r.useState)(!1),[S,E]=(0,r.useState)([]),[j,C]=(0,r.useState)(null),[T,O]=(0,r.useState)(null),[R,P]=(0,r.useState)(null),[A,L]=(0,r.useState)({}),[N,$]=(0,r.useState)({}),[z,M]=(0,r.useState)({}),[D,I]=(0,r.useState)(null),[F,U]=(0,r.useState)({}),[B,W]=(0,r.useState)({}),[H,q]=(0,r.useState)({}),[V,K]=(0,r.useState)(0),Y=(0,r.useRef)(null),[Q,X]=(0,r.useState)(!1),[J,G]=((0,r.useRef)(0),(0,r.useRef)(0),(0,r.useRef)(null),(0,r.useRef)(null),(0,r.useRef)(0),(0,r.useRef)(0),(0,r.useRef)(0),(0,r.useState)(!1)),Z=(0,r.useRef)(null),ee=(0,r.useCallback)(((e,t)=>{for(const n of e){if(n._id===t)return n;if(n.replies){const e=ee(n.replies,t);if(e)return e}}return null}),[]),[te,ne]=(0,r.useState)(!1);((e,t)=>{const n=(0,r.useRef)(0),o=(0,r.useRef)(!1),i=(0,r.useRef)();(0,r.useCallback)((function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];i.current=a;const l=Date.now(),u=l-n.current;o.current||(u>=t?(n.current=l,e(...a)):(o.current=!0,setTimeout((()=>{n.current=Date.now(),e(...i.current),o.current=!1}),t-u)))}),[e,t])})((()=>{G(!0),clearTimeout(Z.current),Z.current=setTimeout((()=>{G(!1)}),100)}),100);(0,r.useEffect)((()=>{const e=Y.current;if(!e)return;const t={isDragging:!1,startY:0,startScrollTop:0,lastY:0,lastTime:0,velocity:0,animationId:null,touchActive:!1},n=.94,r=.2,o=.2,i=300,a=100,s=n=>{t.isDragging=!0,t.startY=n,t.startScrollTop=e.scrollTop,t.lastY=n,t.lastTime=performance.now(),t.velocity=0,cancelAnimationFrame(t.animationId),e.style.scrollBehavior="auto",X(!0)},l=n=>{if(!t.isDragging)return;const r=performance.now(),i=r-t.lastTime;if(i>0){const e=n-t.lastY;t.velocity=e/i,t.lastY=n,t.lastTime=r}const s=Math.min(a,Math.max(-a,n-t.startY));let l=t.startScrollTop-s;const u=e.scrollHeight-e.clientHeight,c=l<0;if(c||l>u){const e=c?-l:l-u;l=c?-e*o:u+e*o}e.scrollTop=l},u=()=>{if(Math.abs(t.velocity)<r)return t.animationId=null,void c();const o=e.scrollHeight-e.clientHeight;let i=e.scrollTop-16*t.velocity;i<0?(i=0,t.velocity=0):i>o&&(i=o,t.velocity=0),e.scrollTop=i,t.velocity*=n,t.animationId=requestAnimationFrame(u)},c=()=>{setTimeout((()=>{e.style.scrollBehavior="smooth",X(!1)}),i)},d=()=>{t.isDragging&&(t.isDragging=!1,Math.abs(t.velocity)>r?t.animationId=requestAnimationFrame(u):c())},f=e=>{1===e.touches.length&&(t.touchActive=!0,s(e.touches[0].clientY),e.preventDefault())},p=e=>{t.touchActive&&1===e.touches.length&&(l(e.touches[0].clientY),e.preventDefault())},h=()=>{t.touchActive&&(t.touchActive=!1,d())},m=e=>{0!==e.button||t.touchActive||(s(e.clientY),document.addEventListener("mousemove",g),document.addEventListener("mouseup",v))},g=e=>{l(e.clientY),e.preventDefault()},v=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",v),d()},y={passive:!1};return e.addEventListener("touchstart",f,y),e.addEventListener("touchmove",p,y),e.addEventListener("touchend",h),e.addEventListener("mousedown",m),()=>{e.removeEventListener("touchstart",f),e.removeEventListener("touchmove",p),e.removeEventListener("touchend",h),e.removeEventListener("mousedown",m),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",v),cancelAnimationFrame(t.animationId),clearTimeout(Z.current)}}),[]);(0,r.useCallback)((e=>{if(J)return;const t=document.getElementById(`comment-${e}`);t&&Y.current&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}),[J]);const re=async e=>{if(!F[e]){q((t=>({...t,[e]:!0})));try{var n,r;const o=(null===(r=(await $a.get(`/memes/${t}/comments/${e}/replies`,{params:{page:((null===(n=B[e])||void 0===n?void 0:n.page)||0)+1,limit:5}})).data)||void 0===r?void 0:r.data)||[];s((t=>{const n=t=>t.map((t=>t._id===e?{...t,replies:[...t.replies||[],...o]}:t.replies?{...t,replies:n(t.replies)}:t));return n(t)}))}catch(c){console.error("Erro ao carregar respostas:",c)}finally{q((t=>({...t,[e]:!1})))}}},oe=(0,r.useCallback)((e=>[...e].sort(((e,t)=>{var n,r,o,i;const a=((null===(n=e.likes)||void 0===n?void 0:n.length)||0)-((null===(r=e.dislikes)||void 0===r?void 0:r.length)||0);return((null===(o=t.likes)||void 0===o?void 0:o.length)||0)-((null===(i=t.dislikes)||void 0===i?void 0:i.length)||0)-a}))),[]),ie=(0,r.useCallback)((e=>{var t,n;if(!Array.isArray(e)||e.length<10)return e||[];const r=oe(e),o=r[0];return((null===(t=o.likes)||void 0===t?void 0:t.length)||0)-((null===(n=o.dislikes)||void 0===n?void 0:n.length)||0)<5?e:r.map(((e,t)=>({...e,isPopular:0===t,replies:Array.isArray(e.replies)?ie(e.replies):[]})))}),[oe]),ae=(0,r.useCallback)((async()=>{if(i)try{const e=await $a.get(`/users/${i._id}/memes`);E(e.data||[])}catch(c){console.error("Erro ao buscar memes do usu\xe1rio:",c)}}),[i]),se=(0,r.useCallback)((async()=>{try{var e;u(!0),d(null);const n=await $a.get(`/memes/${t}/comments`),r=Array.isArray(n.data)?n.data:(null===(e=n.data)||void 0===e?void 0:e.data)||[];s(r)}catch(zv){d("Falha ao carregar coment\xe1rios"),console.error("Erro ao buscar coment\xe1rios:",zv),s([])}finally{u(!1)}}),[t]),le=(0,r.useCallback)((e=>{const t=e.target.files[0];t&&(O(t),C(null))}),[]),ue=(0,r.useCallback)(((e,t)=>{$((n=>({...n||{},[t]:e}))),M((e=>({...e||{},[t]:null})))}),[]),ce=(0,r.useCallback)(((e,t)=>{M((n=>({...n||{},[t]:e}))),$((e=>({...e||{},[t]:null})))}),[]),de=(0,r.useCallback)((e=>{I(e),k(!0),ae()}),[ae]),fe=(0,r.useCallback)((function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&D?M((t=>({...t,[D]:e}))):(C(e),O(null))}),[D]),pe=(0,r.useCallback)((async e=>{e.preventDefault();const r=new FormData;r.append("text",f||""),T&&r.append("media",T),j&&r.append("sharedMeme",j);try{d(null),await n(r);const e=(await $a.get(`/memes/${t}/comments`)).data.length;o&&o(e),p(""),O(null),C(null),await se()}catch(c){console.error("Erro ao enviar coment\xe1rio:",c),d(c.message||"Erro ao enviar coment\xe1rio")}}),[f,T,j,n,se,o]),he=(0,r.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;P((t=>t===e?null:e)),w(t),L((t=>({...t,[e]:t[e]||""})))}),[]),me=(0,r.useCallback)(((e,t)=>{L((n=>({...n,[e]:t})))}),[]),ge=(0,r.useCallback)((async e=>{const n=A[e]||"",r=z[e];if(n.trim()||r)try{const a=new FormData;a.append("text",n),a.append("parentId",e),r&&a.append("sharedMeme",r);const l=await $a.post(`/memes/${t}/comments`,a),u=await $a.get(`/memes/${t}/comments`);o&&o(u.data.length);const c={...l.data,user:i};s((t=>{const n=t=>t.map((t=>t._id===e?{...t,replies:[...t.replies||[],c]}:t.replies?{...t,replies:n(t.replies)}:t));return n(t)})),L((t=>{const n={...t};return delete n[e],n})),M((t=>{const n={...t};return delete n[e],n})),P(null)}catch(c){d("Erro ao enviar resposta"),console.error("Erro:",c)}else d("Por favor, adicione texto ou um meme")}),[t,A,z,i,o]),ve=(0,r.useCallback)((e=>{m((null===e||void 0===e?void 0:e._id)||null),v((null===e||void 0===e?void 0:e.text)||""),b(null)}),[]),ye=(0,r.useCallback)((async e=>{try{d(null);const n=await $a.put(`/memes/${t}/comments/${e}`,{text:g}),r=t=>t.map((t=>t._id===e?{...t,...n.data}:t.replies?{...t,replies:r(t.replies)}:t));s(r(a)),m(null),v("")}catch(c){d("Erro ao editar coment\xe1rio"),console.error("Erro ao editar coment\xe1rio:",c)}}),[g,t,a]),be=(0,r.useCallback)((async e=>{try{d(null);const n=await $a.delete(`/memes/${t}/comments/${e}`),r=t=>t.map((t=>t._id===e?{...n.data,replies:t.replies}:t.replies?{...t,replies:r(t.replies)}:t));s(r(a))}catch(c){d("Erro ao excluir coment\xe1rio"),console.error("Erro ao excluir coment\xe1rio:",c)}}),[t,a]),xe=(0,r.useCallback)((async function(e,n){try{const r=ee(a,e),o=(null===r||void 0===r?void 0:r.userReaction)===n?"none":n,i=`/memes/${t}/comments/${e}/reaction`,l=await $a.post(i,{reaction:o});s((t=>{const n=t=>t.map((t=>t._id===e?{...t,likes:l.data.likesCount||t.likes,dislikes:l.data.dislikesCount||t.dislikes,userReaction:"none"===o?null:o}:t.replies?{...t,replies:n(t.replies)}:t));return n(t)}))}catch(c){console.error("Erro ao reagir ao coment\xe1rio:",c)}}),[t,a,ee]);(0,r.useEffect)((()=>{se()}),[se,t]);const we=(0,r.useMemo)((()=>Array.isArray(a)?ie(a):[]),[a,ie]),_e=(0,r.useMemo)((()=>"undefined"!==typeof window&&window.innerWidth<=768),[]),[ke,Se]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(!_e)return;const e=()=>Se(!0),t=()=>Se(!1),n=document.getElementById("main-comment-input"),r=document.getElementById("comment-file-input");return n&&(n.addEventListener("focus",e),n.addEventListener("blur",t)),()=>{n&&(n.removeEventListener("focus",e),n.removeEventListener("blur",t)),r&&(r.removeEventListener("focus",e),r.removeEventListener("blur",t))}}),[_e]);const Ee=Zr.button`
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
`,je=Zr.div`
  text-align: center;
  padding: 10px;
  color: var(--text-light);
  font-size: 0.9rem;
`;return(0,fl.jsxs)(ku,{"data-testid":"comment-section",style:{paddingBottom:ke?"300px":"0",transition:"padding-bottom 0.3s ease"},"aria-live":"polite","aria-atomic":"true",children:[(0,fl.jsxs)(Zu,{"aria-live":"polite",children:[a.length," ",1===a.length?"coment\xe1rio":"coment\xe1rios"]}),c&&(0,fl.jsxs)(Ju,{role:"alert",children:[c,(0,fl.jsx)(Ee,{onClick:se,"aria-label":"Tentar carregar coment\xe1rios novamente",children:"Tentar novamente"})]}),(0,fl.jsx)(Su,{ref:Y,children:l?(0,fl.jsxs)(Qu,{"aria-busy":"true",children:[(0,fl.jsx)("div",{className:"spinner","aria-hidden":"true"}),"Carregando coment\xe1rios..."]}):Array.isArray(a)&&0!==a.length?(0,fl.jsxs)("div",{role:"list",children:[we.map((e=>(0,fl.jsx)(bc,{comment:e,depth:0,currentUser:i,onEdit:ve,onDelete:be,onReply:he,onReaction:xe,editingId:h,editText:g,onEditChange:v,onSaveEdit:ye,replyingTo:R,replyTexts:A,onReplyChange:me,onReplySubmit:ge,showOptions:y,onToggleOptions:b,isPopular:e.isPopular||!1,onReplyMediaChange:ue,onReplyMemeChange:ce,replyMedia:N,replySelectedMeme:z,onOpenMemeSelector:de,userMemes:S,loadMoreReplies:re,loadingReplies:H,expandedReplies:F,setExpandedReplies:U},e._id))),_e&&a.length>3&&(0,fl.jsx)(je,{children:"Voc\xea chegou ao fim. Role para cima \u2191"})]}):(0,fl.jsxs)(Xu,{children:["Nenhum coment\xe1rio ainda. Seja o primeiro!",_e&&(0,fl.jsx)("div",{style:{marginTop:"10px"},children:"Role para baixo para comentar \u2193"})]})}),i&&(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsxs)(Lu,{onSubmit:pe,role:"form",children:[(0,fl.jsx)(Nu,{type:"text",id:"main-comment-input",name:"mainComment",value:f,onChange:e=>p(e.target.value),placeholder:"Escreva um coment\xe1rio...","aria-label":"Escrever coment\xe1rio","data-testid":"comment-input","aria-required":"true"}),(0,fl.jsxs)(oc,{children:[(0,fl.jsx)(ic,{type:"button",onClick:()=>document.getElementById("comment-file-input").click(),"aria-label":"Anexar m\xeddia","data-testid":"attach-media-button",children:(0,fl.jsx)(ql,{size:18,"aria-hidden":"true"})}),(0,fl.jsx)("input",{type:"file",id:"comment-file-input",style:{display:"none"},onChange:le,accept:"image/*, video/*","data-testid":"media-input","aria-label":"Selecionar arquivo de m\xeddia"}),(0,fl.jsx)(ic,{type:"button",onClick:()=>{k(!0),ae()},"aria-label":"Compartilhar meme","data-testid":"meme-selector-button",children:(0,fl.jsx)(Dl,{size:18,"aria-hidden":"true"})}),(0,fl.jsx)($u,{type:"submit","aria-label":"Enviar coment\xe1rio",disabled:!f.trim()&&!T&&!j,"data-testid":"submit-comment-button","aria-disabled":!f.trim()&&!T&&!j,children:(0,fl.jsx)(Ql,{size:18,"aria-hidden":"true"})})]}),(T||j)&&(0,fl.jsx)(yc,{file:T,meme:j?S.find((e=>e._id===j)):null,onRemove:()=>{O(null),C(null)},"data-testid":"media-preview"})]}),_&&(0,fl.jsx)(xc,{memes:S,selectedMeme:D?z[D]:j,onSelect:fe,onClose:()=>{k(!1),I(null)},isForReply:!!D,"data-testid":"meme-selector-modal"})]})]})},_c=(e,t,n)=>{if(!e)return null;return e.split(/(@\w+)/g).map(((e,r)=>{if(e.startsWith("@")){const o=e.substring(1),i=t[o];return i?(0,fl.jsx)("span",{className:"mention",onClick:e=>{e.preventDefault(),e.stopPropagation(),n(`/users/${i}`)},children:e},`${o}-${r}`):e}return e}))},kc=async e=>{if(!e)return[];const t=[...e.matchAll(/@([a-zA-Z0-9_]+)/g)],n=[...new Set(t.map((e=>e[1])))];if(0===n.length)return[];try{const e=await $a.post("/users/validate-mentions",{usernames:n}),t={};return e.data.validUsers.forEach((e=>{t[e.username]=e.userId})),{mentions:e.data.validUsers,mentionMap:t}}catch(r){return console.error("Error validating mentions:",r),{mentions:[],mentionMap:{}}}},Sc=to`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`,Ec=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`,jc=to`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,Cc=to`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Tc=to`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Oc=to`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Rc=(to`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(100%); opacity: 0; }
`,Zr.div`
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70vh;
    max-height: 70vh;
    background: var(--card-bg);
    z-index: 1000;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: translateY(${e=>e.$isOpen?"0":"100%"});
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    touch-action: pan-y;

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
`),Pc=Zr.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  padding-bottom: 0;
`,Ac=(Zr.div`
  position: sticky;
  bottom: 0;
  padding: 12px;
  background: var(--card-bg);
  border-top: 1px solid var(--border-light);
`,Zr.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: var(--text-light);
  z-index: 10;
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
`),Lc=(Zr.button`
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
`,Zr.button`
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
`),Nc=Zr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${Tc} 0.3s ease-out;
`,$c=Zr.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: var(--radius-md);
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: ${Oc} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,zc=Zr.h3`
  margin: 0 0 1.5rem;
  color: var(--text);
  font-size: 1.2rem;
  text-align: center;
`,Mc=Zr.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`,Dc=Zr.button`
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
`,Ic=Zr.div`
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
  z-index: 10;
  animation: ${Sc} 0.5s forwards;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  svg {
    color: var(--success);
  }
`,Fc=Zr.div`
  position: absolute;
  top: 40px;
  right: 5px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 10;
  min-width: 150px;
`,Uc=Zr.button`
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
`,Bc=Zr.div`
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
`,Wc=Zr.div`
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
  animation: ${jc} 3s ease-in-out infinite;
  
  svg {
    margin-right: 0.25rem;
  }
`,Hc=Zr.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--background);
  position: relative;
  border-bottom: 1px solid var(--border-light);
`,qc=Zr.img`
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
    animation: ${Cc} 3s infinite linear;
  }
  
  &:hover {
    transform: rotate(15deg) scale(1.1);
    border-color: var(--primary-hover);
  }
`,Vc=Zr.span`
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
`,Kc=Zr.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: var(--transition);
  border-radius: var(--radius-md);
  
  &:hover {
    transform: scale(1.03);
    filter: saturate(1.2) brightness(1.05);
  }
`,Yc=Zr.video`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius-md);
  z-index: 1;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.03);
    filter: saturate(1.2) brightness(1.05);
  }
`,Qc=Zr.div`
  width: 100%;
  max-height: 43.75rem;
  min-height: 18.75rem;
  background: var(--background);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`,Xc=Zr.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: var(--radius-md);
`,Jc=Zr.div`
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
`,Gc=Zr.div`
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
    animation: ${Tc} 0.3s forwards;
  }
`,Zc=Zr.button`
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
`,ed=Zr.div`
  flex-grow: 1;
  height: 0.25rem;
  background: rgba(255,255,255,0.3);
  border-radius: 0.125rem;
  margin: 0 0.625rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`,td=Zr.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.$progress||"0%"};
  background: var(--primary);
  border-radius: 0.125rem;
`,nd=Zr.span`
  color: var(--card-bg);
  font-size: 0.8rem;
  min-width: 5rem;
  text-align: center;
`,rd=Zr.p`
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
`,od=Zr.div`
  padding: 0 1rem 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background: var(--card-bg);
`,id=Zr.span`
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
`,ad=Zr.div`
  display: flex;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border-light);
  background: var(--card-bg);
  justify-content: space-between;
`,sd=Zr.div`
  display: flex;
  gap: 0.5rem;
`,ld=Zr.button`
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
`,ud=Zr(ld)`
  color: ${e=>e.$active?"var(--success)":"var(--text-light)"};
  
  &:hover {
    color: var(--success);
  }
`,cd=Zr.div`
  position: absolute;
  animation: ${Sc} 0.5s forwards, ${Ec} 0.5s 0.5s forwards;
  font-size: 2.5rem;
  opacity: 0;
  pointer-events: none;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  z-index: 10;
`,dd=e=>{var t,n,o,i,a,s,l,u,c,d,f;let{meme:p,isRepost:h=!1,onDelete:m,onCommentCountChange:g,isFullScreen:v=!1}=e;const y=te(),{user:b}=ml(),[x,w]=(0,r.useState)(!1),[_,k]=(0,r.useState)((null===(t=p.likes)||void 0===t?void 0:t.length)||0),[S,E]=(0,r.useState)(!1),j=p.commentCount||0,[C,T]=(0,r.useState)(null),[O,R]=(0,r.useState)(!1),[P,A]=(0,r.useState)(p.repostCount||0),[L,N]=(0,r.useState)(!0),[$,z]=(0,r.useState)(!1),[M,D]=(0,r.useState)(!1),[I,F]=(0,r.useState)(!1),[U,B]=(0,r.useState)(!1),[W,H]=(0,r.useState)(0),[q,V]=(0,r.useState)({}),[K,Y]=(0,r.useState)(!1),[Q,X]=(0,r.useState)(0),[J,G]=(0,r.useState)(0),[Z,ee]=(0,r.useState)(0),ne=(0,r.useRef)(null),re=(0,r.useRef)(null),oe=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;(async()=>{if(p.caption)try{const e=await kc(p.caption);V(e.mentionMap||{})}catch(e){console.error("Error processing mentions:",e),V({})}})(),b&&p.likes&&w(p.likes.some((e=>e.toString()===b._id))),k((null===(e=p.likes)||void 0===e?void 0:e.length)||0),A(p.repostCount||0),b?se():N(!1)}),[p,b]);const ie=()=>{ne.current&&(K?ne.current.pause():ne.current.play(),Y(!K))},ae=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?"0":""}${n}`},se=async()=>{try{var e;if(p.originalMeme&&p.author._id===b._id)R(!0);else R(null===(e=p.reposts)||void 0===e?void 0:e.some((e=>e.toString()===b._id)))}catch(t){console.error("Erro ao verificar repost:",t)}finally{N(!1)}},le=e=>{if(!e)return console.warn("URL is empty or undefined"),"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`},ue=()=>{E(!S)};return(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsxs)(Bc,{$deleting:M,style:v?{width:"100%",height:"100%",marginBottom:0,borderRadius:0,border:"none",boxShadow:"none"}:{},children:[M&&(0,fl.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,fl.jsx)("div",{style:{width:"80%",background:"rgba(255,255,255,0.2)",borderRadius:"10px",overflow:"hidden"},children:(0,fl.jsx)("div",{style:{width:`${W}%`,height:"6px",background:"var(--primary)",transition:"width 0.3s ease"}})})}),I&&(0,fl.jsxs)(Ic,{children:[(0,fl.jsx)(cu,{size:18}),(0,fl.jsx)("span",{children:"Meme deletado com sucesso!"})]}),(null===b||void 0===b?void 0:b._id)===(null===(n=p.author)||void 0===n?void 0:n._id)&&(0,fl.jsxs)("div",{style:{position:"relative"},children:[(0,fl.jsx)(Lc,{onClick:e=>{e.stopPropagation(),z(!$)},children:(0,fl.jsx)(du,{size:14})}),$&&(0,fl.jsx)(Fc,{onClick:e=>e.stopPropagation(),children:(0,fl.jsxs)(Uc,{onClick:()=>{z(!1),B(!0)},children:[(0,fl.jsx)(eu,{size:14}),(0,fl.jsx)("span",{children:"Deletar"})]})})]}),h&&(0,fl.jsxs)(Wc,{children:[(0,fl.jsx)(Yl,{})," Repostado por @",(null===(o=p.repostedBy)||void 0===o?void 0:o.username)||"usu\xe1rio"]}),C&&(0,fl.jsx)(cd,{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"like"===C?"var(--primary)":"dislike"===C?"#f00":"repost"===C?"#10b981":"var(--primary)"},children:"like"===C?(0,fl.jsx)(vu,{}):"dislike"===C?(0,fl.jsx)(uu,{}):"repost"===C?(0,fl.jsx)(cu,{}):(0,fl.jsx)("span",{style:{fontSize:"1rem"},children:"Voc\xea \xe9 o autor!"})}),(0,fl.jsxs)(Hc,{children:[(0,fl.jsx)(qc,{src:null!==(i=p.author)&&void 0!==i&&null!==(a=i.profile)&&void 0!==a&&a.avatar?le(p.author.profile.avatar):"https://i.pravatar.cc/150?img=3",alt:null===(s=p.author)||void 0===s?void 0:s.username,onClick:()=>p.author&&y(`/users/${p.author._id}`),crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"}}),(0,fl.jsxs)(Vc,{onClick:()=>p.author&&y(`/users/${p.author._id}`),children:["@",(null===(l=p.author)||void 0===l?void 0:l.username)||"usu\xe1rio desconhecido"]})]}),(0,fl.jsx)(Qc,{children:"image"===p.mediaType?(0,fl.jsx)(Kc,{src:le(p.mediaUrl),alt:p.caption||"Meme image",style:{transform:S?"scale(0.98)":"scale(1)",filter:S?"brightness(0.95)":"none"},crossOrigin:"anonymous",onError:e=>{e.target.src="https://placehold.co/600x400?text=Imagem+n\xe3o+carregada",e.target.onerror=null}}):(0,fl.jsxs)(Xc,{onClick:ie,children:[(0,fl.jsx)(Yc,{ref:ne,src:le(p.mediaUrl),preload:"metadata",onTimeUpdate:()=>{if(ne.current){const e=ne.current.currentTime/ne.current.duration*100;X(e),ee(ne.current.currentTime)}},onLoadedMetadata:()=>{ne.current&&G(ne.current.duration)},onEnded:()=>Y(!1),crossOrigin:"anonymous"}),!K&&(0,fl.jsx)(Jc,{onClick:e=>{e.stopPropagation(),ie()}}),(0,fl.jsxs)(Gc,{onClick:e=>e.stopPropagation(),children:[(0,fl.jsx)(Zc,{onClick:ie,children:K?"\u275a\u275a":"\u25b6"}),(0,fl.jsx)(ed,{onClick:e=>{if(ne.current){const t=e.target.getBoundingClientRect(),n=(e.clientX-t.left)/t.width;ne.current.currentTime=n*ne.current.duration}},children:(0,fl.jsx)(td,{$progress:`${Q}%`})}),(0,fl.jsxs)(nd,{children:[ae(Z)," / ",ae(J)]}),(0,fl.jsx)(Zc,{onClick:()=>{ne.current&&(ne.current.muted=!ne.current.muted)},children:null!==(u=ne.current)&&void 0!==u&&u.muted?"\ud83d\udd07":"\ud83d\udd08"})]}),(0,fl.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, \n                  rgba(255,255,255,0.1), \n                  rgba(255,69,0,0.05))",pointerEvents:"none"}})]})}),p.caption&&(0,fl.jsx)(rd,{children:r.Children.toArray(_c(p.caption,q,y))}),(null===(c=p.tags)||void 0===c?void 0:c.length)>0&&(0,fl.jsx)(od,{children:p.tags.map((e=>(0,fl.jsxs)(id,{onClick:()=>y(`/explore?tag=${e}`),children:["#",e]},e)))}),(0,fl.jsxs)(ad,{children:[(0,fl.jsxs)(sd,{children:[(0,fl.jsxs)(ld,{onClick:async()=>{if(b)try{const e=await $a.post(`/memes/${p._id}/like`);w(e.data.isLiked),k(e.data.likeCount),T(e.data.isLiked?"like":"dislike"),setTimeout((()=>T(null)),1500)}catch(e){console.error("Erro ao curtir:",e)}},$active:x,$color:"var(--primary)",children:[(0,fl.jsx)(vu,{})," ",_]}),(0,fl.jsx)(ld,{onClick:async()=>{if(b&&x)try{const e=await $a.post(`/memes/${p._id}/like`);w(!1),k(e.data.likeCount),T("dislike"),setTimeout((()=>T(null)),1500)}catch(e){console.error("Erro ao remover curtida:",e)}},$active:!x&&_>0,$color:"var(--text)",children:(0,fl.jsx)(uu,{})}),(0,fl.jsxs)(ld,{onClick:ue,$active:S,$color:"#f000",children:[(0,fl.jsx)(Bl,{})," ",j]})]}),(0,fl.jsxs)(sd,{children:[(0,fl.jsxs)(ud,{onClick:async()=>{var e;if(b){if((null===(e=p.author)||void 0===e?void 0:e._id)===b._id)return T("self-repost"),void setTimeout((()=>T(null)),1500);if(!O&&!h)try{const e=await $a.post(`/memes/${p._id}/repost`);R(!0),A(e.data.repostCount),T("repost"),setTimeout((()=>T(null)),1500)}catch(t){console.error("Erro ao repostar:",t),t.response&&409===t.response.status&&R(!0)}}},$active:O,disabled:O||L||h||(null===(d=p.author)||void 0===d?void 0:d._id)===(null===b||void 0===b?void 0:b._id),title:(null===(f=p.author)||void 0===f?void 0:f._id)===(null===b||void 0===b?void 0:b._id)?"Voc\xea n\xe3o pode repostar seu pr\xf3prio conte\xfado":"",children:[L?(0,fl.jsx)(Yl,{}):O?(0,fl.jsx)(cu,{}):(0,fl.jsx)(Yl,{})," ",P]}),(0,fl.jsx)(ld,{children:(0,fl.jsx)(Jl,{})})]})]})]}),S&&(0,fl.jsxs)(Rc,{$isOpen:S,onTouchStart:e=>{oe.current=e.touches[0].clientY},onTouchMove:e=>{if(!oe.current)return;e.touches[0].clientY-oe.current>50&&(E(!1),oe.current=null)},onTouchEnd:()=>{oe.current=null},children:[(0,fl.jsx)(Ac,{onClick:ue,children:(0,fl.jsx)(Ll,{size:24})}),(0,fl.jsx)(Pc,{ref:re,children:(0,fl.jsx)(wc,{memeId:p._id,onCommentSubmit:async e=>{try{const t=await $a.post(`/memes/${p._id}/comments`,e,{headers:{"Content-Type":"multipart/form-data"}});await $a.get(`/memes/${p._id}`),p.commentCount;return t.data}catch(i){var t,n,r,o;throw console.error("Erro detalhado:",{message:i.message,response:null===(t=i.response)||void 0===t?void 0:t.data,status:null===(n=i.response)||void 0===n?void 0:n.status,config:i.config}),new Error((null===(r=i.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||i.message||"Erro ao enviar coment\xe1rio")}},onCommentCountChange:g})})]}),U&&(0,fl.jsx)(Nc,{children:(0,fl.jsxs)($c,{children:[(0,fl.jsx)(zc,{children:"Tem certeza que deseja deletar este meme?"}),(0,fl.jsx)("p",{style:{textAlign:"center",color:"var(--text-light)"},children:"Esta a\xe7\xe3o \xe9 irrevers\xedvel e remover\xe1 o meme permanentemente."}),(0,fl.jsxs)(Mc,{children:[(0,fl.jsxs)(Dc,{onClick:async()=>{B(!1),D(!0);try{var e;const n=setInterval((()=>{H((e=>e>=90?(clearInterval(n),e):e+10))}),100),r=localStorage.getItem("token"),o=await $a.delete(`/memes/${p._id}`,{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}});var t;if(clearInterval(n),H(100),null===(e=o.data)||void 0===e||!e.success)throw new Error((null===(t=o.data)||void 0===t?void 0:t.message)||"Falha ao deletar");F(!0),setTimeout((()=>{m&&m(p._id),F(!1)}),1500)}catch(zv){var n,r,o;if(console.error("Erro ao deletar meme:",zv),410===(null===(n=zv.response)||void 0===n?void 0:n.status))m&&m(p._id),alert("Este meme j\xe1 foi deletado anteriormente");else alert((null===(r=zv.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||"Erro ao deletar meme")}finally{D(!1),H(0)}},children:[(0,fl.jsx)(Al,{size:16}),"Confirmar"]}),(0,fl.jsxs)(Dc,{onClick:()=>B(!1),children:[(0,fl.jsx)(su,{size:16}),"Cancelar"]})]})]})})]})},fd=Zr.button`
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
`,pd=()=>{const{user:e,loading:t,initialCheckDone:n}=ml(),r=te();return t||!n?null:(0,fl.jsx)(fd,{onClick:()=>{!t&&n&&(e?r("/upload"):r("/login",{state:{from:"/upload"}}))},disabled:t,"aria-label":"Bot\xe3o de upload",children:(0,fl.jsx)(Vl,{})})},hd=e=>{let{loading:t,hasMore:n,onLoadMore:o,threshold:i=100}=e;const[a,s]=(0,r.useState)(null),l=(0,r.useRef)();return(0,r.useEffect)((()=>{if(t||!n)return;const e=new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&o()}),{root:null,rootMargin:`${i}px`,threshold:.1});return a&&e.observe(a),l.current=e,()=>{l.current&&l.current.disconnect()}}),[a,t,n,o,i]),[s]},md=Zr.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--background);
`,gd=Zr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,vd=Zr.h1`
  font-size: 24px;
  color: var(--text);
`,yd=Zr.button`
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 8px 16px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text);
  transition: var(--transition);
  
  &:hover {
    background: var(--border-light);
    box-shadow: var(--shadow-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`,bd=Zr.button`
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  padding: 8px 16px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: var(--text);
  transition: var(--transition);
  
  &:hover {
    background: var(--border-light);
    box-shadow: var(--shadow-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`,xd=Zr.div`
  text-align: center;
  padding: 40px 20px;
  background: var(--card-bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  color: var(--text);
`,wd=Zr.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: var(--text-light);
`,_d=Zr.div`
  text-align: center;
  padding: 20px;
  background: var(--card-bg);
  color: var(--dislike-color);
  border-radius: var(--radius-md);
  margin: 20px 0;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-light);
`,kd=Zr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,Sd=Zr.button`
  padding: 0.5rem 1rem;
  border-radius: var(--radius-lg);
  border: none;
  background: ${e=>{let{$active:t}=e;return t?"var(--primary)":"var(--card-bg)"}};
  color: ${e=>{let{$active:t}=e;return t?"var(--text-inverse)":"var(--text)"}};
  cursor: pointer;
  transition: var(--transition);
  border: 1px solid var(--border-light);
  font-weight: 500;

  &:hover {
    background: ${e=>{let{$active:t}=e;return t?"var(--primary-hover)":"var(--border-light)"}};
    box-shadow: var(--shadow-hover);
  }

  &:active {
    transform: scale(0.98);
  }
`,Ed=Zr.div`
  text-align: center;
  padding: 20px;
  color: var(--text-light);
`,jd=()=>{const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0),[i,a]=(0,r.useState)(!1),[s,l]=(0,r.useState)(null),[u,c]=(0,r.useState)("all"),[d,f]=(0,r.useState)(1),[p,h]=(0,r.useState)(!0),{user:m,logout:g}=ml(),v=te(),y=(0,r.useCallback)((async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{1===e?o(!0):a(!0),l(null);const{data:r}=await $a.get(`/feed/trending?page=${e}&limit=10`);t(n?r.data:t=>1===e?r.data:[...t,...r.data]),h(r.data.length>=10),f(e)}catch(s){var r;console.error("Error fetching trending memes:",s),l("Erro ao carregar os memes em destaque. Tente novamente mais tarde."),401===(null===(r=s.response)||void 0===r?void 0:r.status)&&(await g(),v("/login"))}finally{o(!1),a(!1)}}),[g,v]),b=(0,r.useCallback)((()=>{n||i||!p||y(d+1)}),[y,p,n,i,d]),[x]=hd({loading:n,hasMore:p,onLoadMore:b}),w=(0,r.useCallback)((()=>{y(1,!0)}),[y]);(0,r.useEffect)((()=>{y()}),[y]);const _=e.filter((e=>"all"===u||("images"===u?"image"===e.mediaType:"videos"!==u||"video"===e.mediaType)));return n&&1===d?(0,fl.jsx)(md,{children:(0,fl.jsx)(wd,{children:"Carregando memes em destaque..."})}):s?(0,fl.jsx)(md,{children:(0,fl.jsxs)(_d,{children:[s,(0,fl.jsxs)(yd,{onClick:w,children:[(0,fl.jsx)(Kl,{})," Tentar novamente"]})]})}):(0,fl.jsxs)(md,{children:[(0,fl.jsxs)(gd,{children:[(0,fl.jsx)(vd,{children:"Destaques - Os memes mais populares"}),(0,fl.jsxs)("div",{children:[(0,fl.jsx)(pd,{}),(0,fl.jsxs)(yd,{onClick:w,children:[(0,fl.jsx)(Kl,{})," Atualizar"]})]})]}),(0,fl.jsxs)(kd,{children:[(0,fl.jsx)(Sd,{$active:"all"===u,onClick:()=>c("all"),children:"Todos"}),(0,fl.jsx)(Sd,{$active:"images"===u,onClick:()=>c("images"),children:"Imagens"}),(0,fl.jsx)(Sd,{$active:"videos"===u,onClick:()=>c("videos"),children:"V\xeddeos"})]}),0===_.length?(0,fl.jsxs)(xd,{children:[(0,fl.jsx)("h3",{children:"Nenhum meme em destaque encontrado"}),(0,fl.jsx)("p",{children:"Que tal criar o primeiro?"}),(0,fl.jsx)(pd,{style:{marginTop:"20px"}})]}):(0,fl.jsxs)("div",{className:"feed-list",children:[_.map(((e,t)=>{var n;return(0,fl.jsxs)("div",{style:{marginBottom:"24px"},ref:t===_.length-1?x:null,children:[(0,fl.jsx)(dd,{meme:e,commentCount:e.commentCount||0}),m&&m._id!==(null===(n=e.author)||void 0===n?void 0:n._id)&&(0,fl.jsxs)(bd,{onClick:()=>(async e=>{try{await $a.post(`/memes/${e}/repost`),w()}catch(s){var t;console.error("Erro ao repostar:",s),l("Erro ao repostar"),401===(null===(t=s.response)||void 0===t?void 0:t.status)&&(await g(),v("/login"))}})(e._id),children:[(0,fl.jsx)("span",{children:"\ud83d\udd01"})," Repostar (",e.repostCount||0,")"]})]},`${e._id}-${t}`)})),i&&(0,fl.jsxs)(Ed,{children:[(0,fl.jsx)(Kl,{className:"spin"})," Carregando mais memes..."]}),!p&&_.length>0&&(0,fl.jsx)(Ed,{children:"Voc\xea chegou ao fim dos memes em destaque!"})]})]})},Cd=()=>{const{user:e}=ml();return e?(0,fl.jsx)(jd,{}):(0,fl.jsxs)("div",{children:[(0,fl.jsx)("h1",{children:"Bem-vindo ao iFunny Clone"}),(0,fl.jsx)("p",{children:"Fa\xe7a login para ver o conte\xfado"})]})};var Td,Od;!function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(Td||(Td={})),function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"}(Od||(Od={}));const Rd=ao("Keyboard"),Pd=Zr.div`
  display: flex;
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
  padding: ${io.isNativePlatform()?"env(safe-area-inset-top) 16px env(safe-area-inset-bottom)":"0"};
`,Ad=Zr.div`
  width: 100%;
  max-width: ${io.isNativePlatform()?"100%":"400px"};
  margin: auto;
  padding: ${io.isNativePlatform()?"2rem 1rem":"2rem"};
  background: var(--card-bg);
  border-radius: ${io.isNativePlatform()?"0":"16px"};
  box-shadow: ${io.isNativePlatform()?"none":"0 10px 25px rgba(0, 0, 0, 0.1)"};
`,Ld=Zr.input`
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
`,Nd=Zr.button`
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
`,$d=Zr.div`
  color: var(--danger);
  background-color: rgba(231, 76, 60, 0.1);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
`,zd=Zr.h1`
  color: var(--text);
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${io.isNativePlatform()?"24px":"28px"};
`,Md=Zr.p`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-lighter);

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
  }
`,Dd=()=>{const[e,t]=(0,r.useState)({usernameOrEmail:"",password:""}),[n,o]=(0,r.useState)(""),[i,a]=(0,r.useState)(!1),[s,l]=(0,r.useState)("0px"),{user:u,initialCheckDone:c,verifyAuth:d}=ml(),f=te(),p=G(),h=io.isNativePlatform();(0,r.useEffect)((()=>{if(h)return Rd.addListener("keyboardWillShow",(e=>{l(`${e.keyboardHeight}px`)})),Rd.addListener("keyboardWillHide",(()=>{l("0px")})),()=>{Rd.removeAllListeners()}}),[h]),(0,r.useEffect)((()=>{var e,t;c&&(u&&f((null===(e=p.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname)||"/feed",{replace:!0,state:{...p.state,isMobile:h}}))}),[u,c,f,p,h]);return(0,fl.jsx)(Pd,{style:{paddingBottom:s,transition:"padding-bottom 0.3s ease"},children:(0,fl.jsxs)(Ad,{children:[(0,fl.jsx)(zd,{children:"Bem-vindo de volta"}),n&&(0,fl.jsx)($d,{children:n}),(0,fl.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),a(!0),o("");try{var n,r;const t=await Da(e);localStorage.setItem("token",t.token),dl(t.token),await d(),f((null===(n=p.state)||void 0===n||null===(r=n.from)||void 0===r?void 0:r.pathname)||"/trending",{replace:!0,state:{...p.state,isMobile:h}})}catch(zv){o(zv.message||"Credenciais inv\xe1lidas. Por favor, tente novamente."),localStorage.removeItem("token")}finally{a(!1)}},children:[(0,fl.jsx)(Ld,{type:"text",placeholder:"Usu\xe1rio ou Email",value:e.usernameOrEmail,onChange:n=>t({...e,usernameOrEmail:n.target.value}),required:!0,autoCapitalize:"none"}),(0,fl.jsx)(Ld,{type:"password",placeholder:"Senha",value:e.password,onChange:n=>t({...e,password:n.target.value}),required:!0}),(0,fl.jsx)(Nd,{type:"submit",disabled:i,children:i?"Entrando...":"Entrar"})]}),(0,fl.jsxs)(Md,{children:["N\xe3o tem conta? ",(0,fl.jsx)(rt,{to:"/register",state:{isMobile:h},children:"Cadastre-se"})]})]})})},Id=Zr.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`,Fd=Zr.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`,Ud=Zr.input`
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
`,Bd=Zr.button`
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
`,Wd=Zr.div`
  color: #e74c3c;
  background-color: #fdecea;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
`,Hd=Zr.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 28px;
`,qd=Zr.p`
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
`,Vd=Zr.small`
  display: block;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  color: #7f8c8d;
  font-size: 0.8rem;
`,Kd=()=>{const[e,t]=(0,r.useState)({username:"",email:"",password:""}),[n,o]=(0,r.useState)(""),[i,a]=(0,r.useState)(!1),s=te();return(0,fl.jsx)(Id,{children:(0,fl.jsxs)(Fd,{children:[(0,fl.jsx)(Hd,{children:"Crie sua conta"}),n&&(0,fl.jsx)(Wd,{children:n}),(0,fl.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),a(!0),o("");try{const t=await Ma(e);localStorage.setItem("token",t.token),s("/feed",{replace:!0})}catch(zv){o("CONFLICT"===zv.type?zv.message:"Erro ao cadastrar. Por favor, tente novamente.")}finally{a(!1)}},children:[(0,fl.jsx)(Ud,{type:"text",placeholder:"Nome de usu\xe1rio",value:e.username,onChange:n=>t({...e,username:n.target.value}),required:!0,minLength:3}),(0,fl.jsx)(Ud,{type:"email",placeholder:"Email",value:e.email,onChange:n=>t({...e,email:n.target.value}),required:!0}),(0,fl.jsx)(Ud,{type:"password",placeholder:"Senha",value:e.password,onChange:n=>t({...e,password:n.target.value}),required:!0,minLength:6}),(0,fl.jsx)(Vd,{children:"M\xednimo de 8 caracteres e numeros"}),(0,fl.jsx)(Bd,{type:"submit",disabled:i,children:i?"Cadastrando...":"Criar conta"})]}),(0,fl.jsxs)(qd,{children:["J\xe1 tem conta? ",(0,fl.jsx)(rt,{to:"/login",children:"Fa\xe7a login"})]})]})})},Yd=Zr.div`
  max-width: 100%;
  width: 100%;
  padding: 0;
  background-color: var(--background);
`,Qd=Zr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Xd=Zr.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Mantém aspecto quadrado */
  overflow: hidden;
  background: #000;
`,Jd=Zr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Gd=Zr.div`
  width: 100%;
  padding: 40px 20px;
  text-align: center;
  color: var(--text-light);
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`,Zd=Zr.div`
  width: 100%;
  padding: 40px;
  text-align: center;
  color: var(--text-light);
`,ef=Zr.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: var(--dislike-color);
  
  button {
    margin-top: 15px;
    padding: 8px 16px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
`,tf=()=>{const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0),[i,a]=(0,r.useState)(null),{user:s,logout:l}=ml(),u=te(),c=async()=>{try{o(!0),a(null);const{data:e}=await $a.get("/memes"),n=Array.isArray(null===e||void 0===e?void 0:e.data)?e.data.filter((e=>!e.isDeleted)):[];t(n)}catch(i){var e;console.error("Erro ao carregar feed:",i),a("Erro ao carregar o feed. Tente novamente mais tarde."),401===(null===(e=i.response)||void 0===e?void 0:e.status)&&(await l(),u("/login"))}finally{o(!1)}},d=e=>{t((t=>t.filter((t=>t._id!==e))))};return(0,r.useEffect)((()=>{c()}),[]),n?(0,fl.jsx)(Yd,{children:(0,fl.jsx)(Zd,{children:"Carregando..."})}):i?(0,fl.jsx)(Yd,{children:(0,fl.jsxs)(ef,{children:[i,(0,fl.jsxs)("button",{onClick:c,children:[(0,fl.jsx)(Kl,{})," Tentar novamente"]})]})}):(0,fl.jsx)(Yd,{children:(0,fl.jsx)(Qd,{children:0===e.length?(0,fl.jsxs)(Gd,{children:[(0,fl.jsx)("h3",{children:"Nenhum post encontrado"}),(0,fl.jsx)("p",{children:"Seja o primeiro a postar!"}),(0,fl.jsx)(pd,{})]}):e.map((e=>(0,fl.jsx)(Xd,{children:(0,fl.jsx)(Jd,{children:(0,fl.jsx)(dd,{meme:e,onDelete:d,onCommentCountChange:n=>{t((t=>t.map((t=>t._id===e._id?{...t,commentCount:n}:t))))},isSquareView:!0})})},e._id)))})})},nf=Zr.div`
  position: relative;
  width: 100%;
`,rf=Zr.textarea`
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
`,of=Zr.ul`
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
`,af=Zr.li`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);

  &:hover {
    background: rgba(255, 69, 0, 0.1);
  }
`,sf=Zr.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`,lf=e=>{let{value:t,onChange:n,placeholder:o}=e;const[i,a]=(0,r.useState)(!1),[s,l]=(0,r.useState)([]),[u,c]=(0,r.useState)(""),[d,f]=(0,r.useState)(0),p=(0,r.useRef)(null),h=async e=>{if(!e||e.length<1)a(!1);else try{const t=await $a.get("/users/search",{params:{q:e}});t.data&&t.data.success&&Array.isArray(t.data.data)?(l(t.data.data),a(t.data.data.length>0)):(l([]),a(!1))}catch(t){console.error("Error fetching mentions:",t),l([]),a(!1)}};return(0,r.useEffect)((()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&a(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),(0,fl.jsxs)(nf,{children:[(0,fl.jsx)(rf,{ref:p,value:t,onChange:e=>{const t=e.target.value;n(t);const r=e.target.selectionStart,o=t.substring(0,r),i=o.lastIndexOf("@");if(i>=0){const e=o.substring(i+1);if(/\w/.test(e)&&!/\s/.test(e)){const e=t.substring(i+1,r);return c(e),f(i),void(e.length>=1?(h(e),a(!0)):a(!1))}}a(!1)},placeholder:o,onClick:()=>a(!1)}),i&&s.length>0&&(0,fl.jsx)(of,{children:s.map((e=>{var r,o;return(0,fl.jsxs)(af,{onClick:()=>(e=>{console.log("Selecionando:",e,"Posi\xe7\xe3o:",d,"Query:",u);const r=t,o=r.substring(0,d),i=r.substring(d+u.length+1);n(`${o}@${e} ${i}`),a(!1),setTimeout((()=>{if(p.current){p.current.focus();const t=d+e.length+2;p.current.setSelectionRange(t,t)}}),0)})(e.username),children:[(0,fl.jsx)(sf,{src:null!==(r=e.profile)&&void 0!==r&&r.avatar?e.profile.avatar.startsWith("http")?e.profile.avatar:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${e.profile.avatar}`:"https://i.pravatar.cc/150?img=3",alt:e.username,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3"}}),(0,fl.jsxs)("span",{children:["@",e.username]}),(null===(o=e.profile)||void 0===o?void 0:o.displayName)&&(0,fl.jsxs)("span",{style:{color:"var(--text-light)",fontSize:"0.9em"},children:["(",e.profile.displayName,")"]})]},e._id)}))})]})},uf=Zr.div`
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
`,cf=Zr.h2`
  color: var(--text);
  margin-bottom: 1.5rem;
  text-align: center;
`,df=Zr.div`
  color: var(--text-light);
  text-align: center;
  padding: 1rem;
`,ff=Zr.div`
  color: var(--success);
  text-align: center;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: var(--radius-sm);
  margin: 1rem 0;
`,pf=Zr.div`
  color: var(--danger);
  text-align: center;
  padding: 1rem;
  background: rgba(255, 68, 68, 0.1);
  border-radius: var(--radius-sm);
  margin: 1rem 0;
`,hf=Zr.button`
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
`,mf=Zr.div`
  margin: 1.5rem 0;
`,gf=Zr.label`
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
`,vf=Zr.div`
  margin-top: 1rem;
  text-align: center;
  
  img, video {
    max-width: 100%;
    max-height: 300px;
    border-radius: var(--radius-sm);
  }
`,yf=Zr.p`
  margin-top: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
`,bf=Zr.div`
  margin: 1rem 0;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
`,xf=Zr.p`
  margin-bottom: 0.5rem;
  color: var(--text-light);
`,wf=()=>{const{user:e,loading:t,initialCheckDone:n}=ml(),o=te(),[i,a]=(0,r.useState)(!1),[s,l]=(0,r.useState)(!1),[u,c]=(0,r.useState)(null),[d,f]=(0,r.useState)(""),[p,h]=(0,r.useState)(null),[m,g]=(0,r.useState)(null);r.useEffect((()=>{!n||e||t||o("/login",{state:{from:"/upload"}})}),[e,t,n,o]);return t||!n?(0,fl.jsx)(uf,{children:(0,fl.jsx)(df,{children:"Carregando..."})}):(0,fl.jsxs)(uf,{children:[(0,fl.jsx)(cf,{children:"Criar Nova Postagem"}),i?(0,fl.jsx)(ff,{children:"Postagem criada com sucesso! Redirecionando..."}):(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsxs)(mf,{children:[(0,fl.jsxs)(gf,{children:[(0,fl.jsx)("input",{type:"file",onChange:e=>{const t=e.target.files[0];if(t)if(h(t),c(null),t.type.startsWith("image/")){const e=new FileReader;e.onload=()=>g(e.result),e.readAsDataURL(t)}else t.type.startsWith("video/")&&g(URL.createObjectURL(t))},accept:"image/*,video/*",style:{display:"none"}}),p?"Arquivo selecionado":"Clique para selecionar imagem ou v\xeddeo"]}),m&&(0,fl.jsxs)(vf,{children:[p.type.startsWith("image/")?(0,fl.jsx)("img",{src:m,alt:"Preview",crossOrigin:"anonymous"}):(0,fl.jsx)("video",{controls:!0,src:m,crossOrigin:"anonymous"}),(0,fl.jsx)(yf,{children:p.name})]})]}),(0,fl.jsx)(lf,{value:d,onChange:f,placeholder:"Adicione uma legenda... mencione usu\xe1rios com @"}),d&&(0,fl.jsxs)(bf,{children:[(0,fl.jsx)(xf,{children:"Pr\xe9-visualiza\xe7\xe3o:"}),(0,fl.jsx)("div",{style:{lineHeight:1.5},children:_c(d,o)})]}),u&&(0,fl.jsx)(pf,{children:u}),(0,fl.jsx)(hf,{onClick:async()=>{if(p)if(d.length>500)c("A legenda n\xe3o pode ter mais de 500 caracteres");else{l(!0),c(null);try{const e=await kc(d);if(e.length>5)throw new Error("Voc\xea pode mencionar no m\xe1ximo 5 pessoas");const t=new FormData;t.append("media",p),t.append("caption",d),t.append("mentions",JSON.stringify(e));const n=await $a.post("/memes",t,{headers:{"Content-Type":"multipart/form-data"}});a(!0),setTimeout((()=>o(`/memes/${n.data._id}`)),2e3)}catch(zv){var e,t;console.error("Upload failed:",zv),c((null===(e=zv.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||zv.message||"Erro ao fazer upload")}finally{l(!1)}}else c("Selecione um arquivo para upload")},disabled:s||!p,children:s?(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)("span",{className:"spinner"}),"Enviando..."]}):"Publicar"})]})]})},_f=(0,r.createContext)(),kf=e=>{let{children:t}=e;const[n,o]=(0,r.useState)((()=>{if(io.isNativePlatform())return"dark";const e=localStorage.getItem("theme"),t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return e||(t?"dark":"light")}));return(0,r.useEffect)((()=>{document.body.setAttribute("data-theme",n),io.isNativePlatform()&&(go.setBackgroundColor({color:"dark"===n?"#121212":"#ffffff"}),go.setStyle({style:"dark"===n?ho.Dark:ho.Light}))}),[n]),(0,fl.jsx)(_f.Provider,{value:{theme:n,toggleTheme:()=>{o((e=>{const t="light"===e?"dark":"light";return localStorage.setItem("theme",t),io.isNativePlatform()&&go.setStyle({style:"dark"===t?ho.Dark:ho.Light}),t}))}},children:t})},Sf=()=>{const e=(0,r.useContext)(_f);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Ef=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,jf=Zr.div`
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
`,Cf=Zr.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid var(--border-light);
  transition: var(--transition);

  ${jf}:hover & {
    transform: scale(1.05);
    border-color: var(--border);
  }
`,Tf=Zr.div`
  flex: 1;
  min-width: 0;
`,Of=Zr(rt)`
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
`,Rf=Zr.p`
  font-size: 13px;
  color: var(--text-light);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Pf=Zr.button`
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
`,Af=Zr.div`
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
  animation: ${Ef} 2s infinite;
  border: 2px solid var(--card-bg);

  & > svg {
    font-size: 12px;
  }
`,Lf=Zr.div`
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

  ${Af}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }
`,Nf=e=>{var t,n;let{user:o,showFollowButton:i=!1}=e;const[a,s]=(0,r.useState)(!1),l=(()=>{if(null===o||void 0===o||!o.createdAt)return 0;try{const e=new Date(o.createdAt),t=new Date-e;return Math.max(1,Math.floor(t/864e5))}catch(e){return 1}})();return(0,fl.jsxs)(jf,{children:[(0,fl.jsxs)(Af,{days:l,children:[l>=365?(0,fl.jsx)(Ol,{}):l>=180?(0,fl.jsx)(Gl,{}):l>=30?(0,fl.jsx)(lu,{}):(0,fl.jsx)(Pl,{}),l,"d",(0,fl.jsxs)(Lf,{children:[(0,fl.jsx)("div",{style:{fontWeight:"bold",marginBottom:"3px"},children:l>=365?"Veterano":l>=180?"Experiente":l>=30?"Membro Ativo":"Novato"}),(0,fl.jsxs)("div",{style:{fontSize:"11px",color:"var(--text-light)"},children:["Na plataforma h\xe1 ",l," dia",1!==l?"s":""]}),(0,fl.jsxs)("div",{style:{fontSize:"10px",marginTop:"5px",color:"var(--text-lighter)",borderTop:"1px solid var(--border)",paddingTop:"5px"},children:["Desde ",new Date(o.createdAt).toLocaleDateString()]})]})]}),(0,fl.jsx)(Cf,{src:null!==(t=o.profile)&&void 0!==t&&t.avatar?(e=>{if(!e)return"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`})(o.profile.avatar):"https://i.pravatar.cc/150?img=3",alt:o.username,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3",e.target.onerror=null}}),(0,fl.jsxs)(Tf,{children:[(0,fl.jsxs)(Of,{to:`/users/${o._id}`,children:["@",o.username]}),(0,fl.jsx)(Rf,{children:(null===(n=o.profile)||void 0===n?void 0:n.bio)||"Sem biografia ainda..."})]}),i&&(0,fl.jsx)(Pf,{$isFollowing:a,onClick:()=>s(!a),children:a?"Seguindo":"Seguir"})]})},$f=Zr.div`
  margin-top: 20px;
`,zf=Zr.h3`
  margin-bottom: 15px;
  color: var(--text);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,Mf=Zr.span`
  background: var(--primary);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
`,Df=e=>{let{userId:t}=e;const[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)(!0),[s,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{try{a(!0);const{data:e}=await $a.get(`/users/${t}/followers`);o(e.data)}catch(s){var e,n;l((null===(e=s.response)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)||"Erro ao carregar seguidores")}finally{a(!1)}})()}),[t]),i?(0,fl.jsx)("div",{children:"Carregando..."}):s?(0,fl.jsx)("div",{children:s}):(0,fl.jsxs)($f,{children:[(0,fl.jsxs)(zf,{children:["Seguidores",(0,fl.jsx)(Mf,{children:n.length})]}),n.length>0?n.map((e=>(0,fl.jsx)(Nf,{user:e.follower,showFollowButton:!0},e.follower._id))):(0,fl.jsx)("p",{children:"Nenhum seguidor encontrado"})]})},If=Zr.div`
  margin-top: 20px;
`,Ff=Zr.h3`
  margin-bottom: 15px;
  color: var(--text);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,Uf=Zr.span`
  background: var(--secondary);
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
`,Bf=e=>{let{userId:t}=e;const[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)(!0),[s,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{try{a(!0);const{data:e}=await $a.get(`/users/${t}/following`);o(e.data)}catch(s){var e,n;l((null===(e=s.response)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)||"Erro ao carregar pessoas seguidas")}finally{a(!1)}})()}),[t]),i?(0,fl.jsx)("div",{children:"Carregando..."}):s?(0,fl.jsx)("div",{children:s}):(0,fl.jsxs)(If,{children:[(0,fl.jsxs)(Ff,{children:["Seguindo",(0,fl.jsx)(Uf,{children:n.length})]}),n.length>0?n.map((e=>(0,fl.jsx)(Nf,{user:e.following,showFollowButton:!0},e.following._id))):(0,fl.jsx)("p",{children:"N\xe3o est\xe1 seguindo ningu\xe9m"})]})},Wf=to`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Hf=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,qf=to`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,Vf=Zr.div`
  position: relative;
  margin-bottom: 20px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--card-bg);
  box-shadow: var(--shadow);
  animation: ${Wf} 0.6s ease-out;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`,Kf=Zr.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${qf} 1.5s infinite;
  border-radius: var(--radius-md);
`,Yf=Zr.div`
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
`,Qf=Zr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${e=>{let{$loaded:t}=e;return t?1:0}};
`,Xf=Zr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -70px;
  position: relative;
  z-index: 2;
  padding: 0 15px 20px;
  text-align: center;
`,Jf=Zr.div`
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
`,Gf=Zr.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: var(--transition);
  opacity: ${e=>{let{$loaded:t}=e;return t?1:0}};
`,Zf=Zr(Kf)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,ep=Zr.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-inverse);
  font-size: 50px;
`,tp=Zr.h1`
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
`,np=Zr.p`
  margin: 0 auto;
  color: var(--text-light);
  max-width: 100%;
  line-height: 1.5;
  font-size: 14px;
  padding: 0 15px;
`,rp=Zr.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`,op=Zr.div`
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
`,ip=Zr.div`
  font-weight: 800;
  font-size: 18px;
  color: var(--text);
  margin-bottom: 2px;
`,ap=Zr.div`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-lighter);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,sp=Zr.div`
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
  animation: ${Hf} 2s infinite;
  border: 2px solid var(--card-bg);
  backdrop-filter: blur(5px);
  
  & > svg {
    font-size: 14px;
  }
`,lp=Zr.div`
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

  ${sp}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(5px);
  }
`,up=Zr.button`
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
`,cp=Zr.button`
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
`,dp=Zr.div`
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
  animation: ${Wf} 0.3s ease-out;
`,fp=Zr.div`
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
  animation: ${Wf} 0.4s ease-out;
`,pp=Zr.button`
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
`,hp=Zr.div`
  display: inline-block;
  animation: ${Hf} 1.5s infinite ease-in-out;
  margin-left: 8px;
`,mp={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org",gp=e=>{var t,n,o;let{user:i,isOwnProfile:a}=e;const[s,l]=(0,r.useState)(!1),[u,c]=(0,r.useState)(!1),[d,f]=(0,r.useState)(!1),[p,h]=(0,r.useState)(!1),{stats:m,loading:g,setStats:v}=(e=>{const[t,n]=(0,r.useState)({posts:0,followers:0,following:0}),[o,i]=(0,r.useState)(!0),[a,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{try{const{data:t}=await $a.get(`/users/${e}/stats`);n(t)}catch(zv){var t,r;s((null===(t=zv.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message)||"Erro ao carregar estat\xedsticas")}finally{i(!1)}})()}),[e]),{stats:t,loading:o,error:a,setStats:n}})(i._id),{isFollowing:y,loading:b,toggleFollow:x}=((e,t)=>{const[n,o]=(0,r.useState)(!1),[i,a]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{if(!t){const t=async()=>{try{const{data:t}=await $a.get(`/users/${e}/follow-status`);o(t.isFollowing)}catch(t){console.error("Erro ao verificar follow:",t)}};t()}}),[e,t]),{isFollowing:n,loading:i,toggleFollow:async()=>{a(!0);try{n?await $a.delete(`/users/${e}/unfollow`):await $a.post(`/users/${e}/follow`),o(!n)}catch(t){throw console.error("Erro ao alternar follow:",t),t}finally{a(!1)}}}})(i._id,a),w=e=>{if(!e)return null;if(e.startsWith("http://"))return"https://"+e.substring(7);if(e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${mp}${t}`},_=(()=>{if(null===i||void 0===i||!i.createdAt)return 1;const e=new Date(i.createdAt),t=new Date;return Math.max(1,Math.floor((t-e)/864e5))})();return(0,fl.jsxs)(Vf,{children:[(0,fl.jsxs)(sp,{days:_,children:[_>=365?(0,fl.jsx)(Ol,{}):_>=180?(0,fl.jsx)(Gl,{}):_>=30?(0,fl.jsx)(lu,{}):(0,fl.jsx)(Pl,{}),_," dias",(0,fl.jsxs)(lp,{children:[(0,fl.jsx)("div",{style:{fontWeight:"bold",marginBottom:"5px",fontSize:"13px"},children:_>=365?"Veterano":_>=180?"Experiente":_>=30?"Membro Ativo":"Novato"}),(0,fl.jsxs)("div",{style:{fontSize:"11px",color:"var(--text-light)"},children:["Na plataforma h\xe1 ",_," dia",1!==_?"s":""]}),(0,fl.jsxs)("div",{style:{fontSize:"10px",marginTop:"6px",color:"var(--text-lighter)",borderTop:"1px solid var(--border)",paddingTop:"6px"},children:["Desde ",new Date(i.createdAt).toLocaleDateString()]})]})]}),(0,fl.jsxs)(Yf,{children:[!s&&(0,fl.jsx)(Kf,{style:{position:"absolute",width:"100%",height:"100%"}}),(0,fl.jsx)(Qf,{src:w(null===(t=i.profile)||void 0===t?void 0:t.coverPhoto)||`${mp}/default-cover.jpg`,alt:"Capa do perfil",crossOrigin:"anonymous",$loaded:s,onLoad:()=>l(!0),onError:e=>{e.target.src=`${mp}/default-cover.jpg`,l(!0)}})]}),(0,fl.jsxs)(Xf,{children:[(0,fl.jsxs)(Jf,{children:[!u&&(0,fl.jsx)(Zf,{}),null!==(n=i.profile)&&void 0!==n&&n.avatar?(0,fl.jsx)(Gf,{src:w(i.profile.avatar),alt:`Avatar de ${i.username}`,crossOrigin:"anonymous",$loaded:u,onLoad:()=>c(!0),onError:e=>{e.target.src="",e.target.parentNode.querySelector("div").style.display="flex",c(!0)}}):(0,fl.jsx)(ep,{children:(0,fl.jsx)(iu,{})})]}),(0,fl.jsxs)(tp,{children:["@",i.username]}),(0,fl.jsx)(np,{children:(null===(o=i.profile)||void 0===o?void 0:o.bio)||"Sem biografia ainda..."}),g?(0,fl.jsx)(rp,{children:[1,2,3].map((e=>(0,fl.jsxs)(op,{children:[(0,fl.jsx)(ip,{as:Kf,style:{width:"30px",height:"18px",margin:"0 auto"}}),(0,fl.jsx)(ap,{as:Kf,style:{width:"50px",height:"12px",margin:"0 auto"}})]},e)))}):(0,fl.jsxs)(rp,{children:[(0,fl.jsxs)(op,{children:[(0,fl.jsx)(ip,{children:m.posts}),(0,fl.jsx)(ap,{children:"Posts"})]}),(0,fl.jsxs)(op,{onClick:()=>f(!0),"aria-label":`Ver seguidores (${m.followers})`,children:[(0,fl.jsx)(ip,{children:m.followers}),(0,fl.jsx)(ap,{children:"Seguidores"})]}),(0,fl.jsxs)(op,{onClick:()=>h(!0),"aria-label":`Ver seguindo (${m.following})`,children:[(0,fl.jsx)(ip,{children:m.following}),(0,fl.jsx)(ap,{children:"Seguindo"})]})]}),!a&&(0,fl.jsx)(cp,{onClick:async()=>{try{const e=y;await x(),v((t=>({...t,followers:e?t.followers-1:t.followers+1})))}catch(e){console.error("Erro ao alternar follow:",e)}},disabled:b,$isFollowing:y,"aria-label":y?"Deixar de seguir":"Seguir usu\xe1rio",children:y?(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(ru,{})," Seguindo",b&&(0,fl.jsx)(hp,{children:(0,fl.jsx)(Kl,{})})]}):(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(ou,{})," Seguir",b&&(0,fl.jsx)(hp,{children:(0,fl.jsx)(Kl,{})})]})})]}),a&&(0,fl.jsxs)(up,{"aria-label":"Editar perfil",children:[(0,fl.jsx)(zl,{})," Editar Perfil"]}),d&&(0,fl.jsx)(dp,{onClick:()=>f(!1),children:(0,fl.jsxs)(fp,{onClick:e=>e.stopPropagation(),children:[(0,fl.jsx)(pp,{onClick:()=>f(!1),"aria-label":"Fechar modal",children:"\xd7"}),(0,fl.jsxs)("h2",{style:{marginBottom:"20px",color:"var(--text)",display:"flex",alignItems:"center",gap:"8px",fontSize:"18px"},children:[(0,fl.jsx)(au,{size:22})," Seguidores"]}),(0,fl.jsx)(Df,{userId:i._id})]})}),p&&(0,fl.jsx)(dp,{onClick:()=>h(!1),children:(0,fl.jsxs)(fp,{onClick:e=>e.stopPropagation(),children:[(0,fl.jsx)(pp,{onClick:()=>h(!1),"aria-label":"Fechar modal",children:"\xd7"}),(0,fl.jsxs)("h2",{style:{marginBottom:"20px",color:"var(--text)",display:"flex",alignItems:"center",gap:"8px",fontSize:"18px"},children:[(0,fl.jsx)(au,{size:22})," Seguindo"]}),(0,fl.jsx)(Bf,{userId:i._id})]})})]})},vp=Zr.div`
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
`,yp=Zr.button`
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 2px solid ${e=>e.$active?"var(--primary)":"transparent"};
  color: ${e=>e.$active?"var(--primary)":"var(--text-light)"};
  font-weight: ${e=>e.$active?"600":"500"};
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--primary);
    background: rgba(var(--primary-rgb), 0.05);
  }

  &:focus {
    outline: none;
  }
`,bp=e=>{let{activeTab:t,setActiveTab:n}=e;return(0,fl.jsx)(vp,{children:[{id:"memes",label:"Posts"},{id:"likes",label:"Likes"},{id:"activity",label:"Activity"},{id:"guests",label:"Guests"},{id:"settings",label:"Settings"}].map((e=>(0,fl.jsx)(yp,{$active:t===e.id,onClick:()=>n(e.id),children:e.label},e.id)))})};var xp={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function wp(e){var t=function(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return xp[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var _p=function(){return _p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_p.apply(this,arguments)},kp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Sp=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,a="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(a,0),r}("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");const Ep=function(e){var t=e.loading,n=void 0===t||t,o=e.color,i=void 0===o?"#000000":o,a=e.speedMultiplier,s=void 0===a?1:a,l=e.cssOverride,u=void 0===l?{}:l,c=e.size,d=void 0===c?15:c,f=e.margin,p=void 0===f?2:f,h=kp(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),m=_p({display:"inherit"},u),g=function(e){return{backgroundColor:i,width:wp(d),height:wp(d),margin:wp(p),borderRadius:"100%",display:"inline-block",animation:"".concat(Sp," ").concat(.75/s,"s ").concat(.12*e/s,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?r.createElement("span",_p({style:m},h),r.createElement("span",{style:g(1)}),r.createElement("span",{style:g(2)}),r.createElement("span",{style:g(3)})):null},jp=Zr.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`,Cp=Zr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`,Tp=Zr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
  padding: 40px;
  background: ${e=>{let{theme:t}=e;return t.cardBg||"#f8f9fa"}};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  color: ${e=>{let{theme:t}=e;return t.text||"#333"}};

  svg {
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`,Op=Zr.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.text||"#333"}};
  margin-bottom: 20px;
  padding-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 70%;
    width: 5px;
    background: ${e=>{let{theme:t}=e;return t.primary||"#6c5ce7"}};
    border-radius: 5px;
  }
`,Rp=()=>{const{userId:e}=ne(),{user:t}=ml(),[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)(!0),[s,l]=(0,r.useState)(null),u=e=>{o((t=>t.filter((t=>t._id!==e))))};(0,r.useEffect)((()=>{(async()=>{try{a(!0),l(null);const{data:t}=await $a.get(`/users/${e}/memes`),n=t.filter((e=>{const t=!e.isDeleted,n=e.author&&!e.author.isDeleted;return t&&n}));o(n)}catch(zv){l("Falha ao carregar memes"),console.error("Erro ao buscar memes:",zv)}finally{a(!1)}})()}),[e]);const c=async e=>{try{await $a.delete(`/memes/${e}`),u(e)}catch(s){var t,n,r;console.error("Erro ao deletar meme:",s),410===(null===(t=s.response)||void 0===t?void 0:t.status)&&u(e),alert((null===(n=s.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||"Erro ao deletar meme")}};return i?(0,fl.jsx)(jp,{children:(0,fl.jsxs)(Tp,{children:[(0,fl.jsx)(Ep,{color:"#6c5ce7",size:15}),(0,fl.jsx)("h3",{children:"Carregando memes..."}),(0,fl.jsx)("p",{children:"Preparando as melhores piadas pra voc\xea"})]})}):s?(0,fl.jsx)(jp,{children:(0,fl.jsxs)(Tp,{children:[(0,fl.jsx)(mu,{}),(0,fl.jsx)("h3",{children:"Oops! Algo deu errado"}),(0,fl.jsx)("p",{children:s}),(0,fl.jsx)("p",{children:"Tente recarregar a p\xe1gina"})]})}):0===n.length?(0,fl.jsx)(jp,{children:(0,fl.jsxs)(Tp,{children:[(0,fl.jsx)(gu,{}),(0,fl.jsx)("h3",{children:"Nenhum meme encontrado"}),(0,fl.jsx)("p",{children:"Parece que este usu\xe1rio ainda n\xe3o criou memes"})]})}):(0,fl.jsxs)(jp,{children:[(0,fl.jsx)(Op,{children:"Posts"}),(0,fl.jsx)(Cp,{children:n.map((e=>{var n;return(0,fl.jsx)(dd,{meme:e,onDelete:c,isOwner:(null===t||void 0===t?void 0:t._id)===(null===(n=e.author)||void 0===n?void 0:n._id)},e._id)}))})]})},Pp=Zr.button`
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
`,Ap=Zr.div`
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
`,Lp=Zr.button`
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
`,Np=e=>{let{memeId:t,onDelete:n}=e;const[o,i]=(0,r.useState)(!1);return(0,fl.jsxs)("div",{style:{position:"relative"},children:[(0,fl.jsx)(Pp,{onClick:()=>i(!o),children:(0,fl.jsx)(du,{size:14})}),o&&(0,fl.jsx)(Ap,{children:(0,fl.jsxs)(Lp,{onClick:async()=>{try{await $a.delete(`/memes/${t}`),n(t)}catch(zv){console.error("Erro ao deletar meme:",zv)}i(!1)},children:[(0,fl.jsx)(yu,{}),(0,fl.jsx)("span",{children:"Deletar"})]})})]})},$p=Zr(rt)`
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
`,zp=Zr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`,Mp=Zr.div`
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
  
  ${$p}:hover & {
    opacity: 1;
  }
`,Dp=Zr.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 69, 0, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`,Ip=Zr.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1;
`,Fp=e=>{let{meme:t,isOwner:n,onDelete:r}=e;return(0,fl.jsxs)($p,{to:`/memes/${t._id}`,children:[n&&(0,fl.jsx)(Np,{memeId:t._id,onDelete:r,onClick:e=>e.preventDefault()}),(0,fl.jsx)(zp,{src:t.mediaUrl?t.mediaUrl.startsWith("http")?t.mediaUrl:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t.mediaUrl}`:"https://placehold.co/600x400?text=Imagem+n\xe3o+carregada",alt:t.caption||"Meme thumbnail",crossOrigin:"anonymous",onError:e=>{e.target.src="https://placehold.co/600x400?text=Imagem+n\xe3o+carregada",e.target.onerror=null}}),"video"===t.mediaType&&(0,fl.jsx)(Mp,{children:(0,fl.jsx)(Dp,{children:(0,fl.jsx)(pu,{size:14})})}),t.isRepost&&(0,fl.jsx)(Ip,{children:"Repost"})]})},Up=Zr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Bp=Zr.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: var(--text-light);
  font-size: 1.1rem;
`,Wp=e=>{let{userId:t}=e;const[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)(!0),[s,l]=(0,r.useState)(null),{user:u}=ml();(0,r.useEffect)((()=>{(async()=>{try{a(!0),l(null);const{data:e}=await $a.get(`/users/${t}/liked-memes`),n=Array.isArray(e)?e.filter((e=>{const t=!e.isDeleted,n=e.author&&!e.author.isDeleted;return t&&n})):[];o(n)}catch(s){var e;console.error("Error fetching liked memes:",s),l("Failed to load liked memes"),null===(e=s.response)||void 0===e||e.status}finally{a(!1)}})()}),[t,u]);const c=e=>{o((t=>t.filter((t=>t._id!==e))))};return i?(0,fl.jsx)(Bp,{children:"Loading liked memes..."}):s?(0,fl.jsx)(Bp,{children:s}):(0,fl.jsx)(fl.Fragment,{children:0===n.length?(0,fl.jsx)(Bp,{children:t===(null===u||void 0===u?void 0:u._id)?"You haven't liked any memes yet":"This user hasn't liked any memes"}):(0,fl.jsx)(Up,{children:n.map((e=>(0,fl.jsx)(Fp,{meme:e,onDelete:c},e._id)))})})},Hp=Zr.div`
  margin-top: 20px;
`,qp=Zr.div`
  padding: 15px;
  border-bottom: 1px solid #eee;
`,Vp=e=>{let{userId:t}=e;const[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{(async()=>{try{const{data:e}=await $a.get(`/users/${t}/activity`);o(e)}catch(e){console.error("Error fetching activities:",e)}finally{a(!1)}})()}),[t]),i?(0,fl.jsx)("div",{children:"Loading activity..."}):(0,fl.jsx)(Hp,{children:n.map((e=>(0,fl.jsxs)(qp,{children:[e.type,": ",e.content]},e._id)))})},Kp=(Zr.div`
  margin-top: 25px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,Zr.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`,Zr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`,Zr(rt)`
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
`,Zr.div`
  position: relative;
  margin-right: 15px;
`,Zr.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,Zr.div`
  flex: 1;
`,Zr.div`
  font-weight: 600;
  margin-bottom: 5px;
`,Zr.div`
  font-size: 0.8rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
`,Zr.div`
  text-align: center;
  padding: 30px;
  color: #666;
`,Zr.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
`),Yp=Zr.h2`
  color: var(--primary);
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.8rem;
`,Qp=Zr.div`
  margin-bottom: 25px;
`,Xp=Zr.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--text);
`,Jp=Zr.input`
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
`,Gp=Zr.textarea`
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
`,Zp=Zr.div`
  position: relative;
  margin-bottom: 15px;
`,eh=Zr.label`
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
`,th=Zr.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`,nh=Zr.div`
  position: relative;
  width: ${e=>e.$isAvatar?"120px":"100%"};
  height: ${e=>e.$isAvatar?"120px":"200px"};
  border-radius: ${e=>e.$isAvatar?"50%":"var(--radius-sm)"};
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
`,rh=Zr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,oh=Zr.button`
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
`,ih=Zr.button`
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
`,ah=Zr.div`
  color: var(--dislike-color);
  margin-top: 10px;
  font-size: 0.9rem;
`,sh=Zr.div`
  color: var(--success);
  margin-top: 10px;
  font-size: 0.9rem;
`,lh=e=>{var t,n,o,i,a,s,l;let{user:u}=e;const[c,d]=(0,r.useState)({bio:(null===(t=u.profile)||void 0===t?void 0:t.bio)||""}),[f,p]=(0,r.useState)(null),[h,m]=(0,r.useState)(null),[g,v]=(0,r.useState)((null===(n=u.profile)||void 0===n?void 0:n.avatar)||""),[y,b]=(0,r.useState)((null===(o=u.profile)||void 0===o?void 0:o.coverPhoto)||""),[x,w]=(0,r.useState)(!1),[_,k]=(0,r.useState)(""),[S,E]=(0,r.useState)(""),{updateUser:j}=ml();(0,r.useEffect)((()=>()=>{g&&g.startsWith("blob:")&&URL.revokeObjectURL(g),y&&y.startsWith("blob:")&&URL.revokeObjectURL(y)}),[g,y]);return(0,fl.jsxs)(Kp,{children:[(0,fl.jsx)(Yp,{children:"Configura\xe7\xf5es do Perfil"}),(0,fl.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),w(!0),k(""),E("");try{const e=new FormData;f&&e.append("avatar",f),h&&e.append("coverPhoto",h),e.append("bio",c.bio);const{data:t}=await $a.put("/users/profile",e,{headers:{"Content-Type":"multipart/form-data"}});j(t),E("Perfil atualizado com sucesso!"),setTimeout((()=>E("")),3e3)}catch(_){var t,n;console.error("Error updating profile:",_),k((null===(t=_.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||"Falha ao atualizar o perfil")}finally{w(!1)}},children:[(0,fl.jsxs)(Qp,{children:[(0,fl.jsx)(Xp,{children:"Biografia"}),(0,fl.jsx)(Gp,{value:c.bio,onChange:e=>d({...c,bio:e.target.value}),placeholder:"Conte um pouco sobre voc\xea..."})]}),(0,fl.jsxs)(Qp,{children:[(0,fl.jsx)(Xp,{children:"Foto de Perfil"}),(0,fl.jsx)(Zp,{children:(0,fl.jsxs)(eh,{children:[(0,fl.jsx)(nu,{size:18}),f?"Imagem selecionada":"Selecionar imagem",(0,fl.jsx)(Jp,{type:"file",accept:"image/*",onChange:e=>{const t=e.target.files[0];t&&(t.type.startsWith("image/")?t.size>2097152?k("A imagem de perfil deve ter menos de 2MB"):(p(t),v(URL.createObjectURL(t)),k("")):k("Por favor, selecione um arquivo de imagem v\xe1lido"))},style:{display:"none"}})]})}),(g||(null===(i=u.profile)||void 0===i?void 0:i.avatar))&&(0,fl.jsx)(th,{children:(0,fl.jsxs)(nh,{$isAvatar:!0,children:[(0,fl.jsx)(rh,{src:g||(null===(a=u.profile)||void 0===a?void 0:a.avatar),alt:"Preview da foto de perfil",crossOrigin:"anonymous"}),f&&(0,fl.jsx)(oh,{onClick:()=>{var e;p(null),v((null===(e=u.profile)||void 0===e?void 0:e.avatar)||"")},children:(0,fl.jsx)(su,{size:16})})]})})]}),(0,fl.jsxs)(Qp,{children:[(0,fl.jsx)(Xp,{children:"Foto de Capa"}),(0,fl.jsx)(Zp,{children:(0,fl.jsxs)(eh,{children:[(0,fl.jsx)(nu,{size:18}),h?"Imagem selecionada":"Selecionar imagem",(0,fl.jsx)(Jp,{type:"file",accept:"image/*",onChange:e=>{const t=e.target.files[0];t&&(t.type.startsWith("image/")?t.size>5242880?k("A imagem de capa deve ter menos de 5MB"):(m(t),b(URL.createObjectURL(t)),k("")):k("Por favor, selecione um arquivo de imagem v\xe1lido"))},style:{display:"none"},crossOrigin:"anonymous"})]})}),(y||(null===(s=u.profile)||void 0===s?void 0:s.coverPhoto))&&(0,fl.jsx)(th,{children:(0,fl.jsxs)(nh,{children:[(0,fl.jsx)(rh,{src:y||(null===(l=u.profile)||void 0===l?void 0:l.coverPhoto),alt:"Preview da foto de capa"}),h&&(0,fl.jsx)(oh,{onClick:()=>{var e;m(null),b((null===(e=u.profile)||void 0===e?void 0:e.coverPhoto)||"")},children:(0,fl.jsx)(su,{size:16})})]})})]}),_&&(0,fl.jsx)(ah,{children:_}),S&&(0,fl.jsx)(sh,{children:S}),(0,fl.jsx)(ih,{type:"submit",disabled:x,children:x?"Salvando...":"Salvar Altera\xe7\xf5es"})]})]})},uh=to`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,ch=to`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,dh=Zr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  animation: ${uh} 0.5s ease-out;
  background-color: var(--background);
`,fh=Zr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
`,ph=Zr.div`
  animation: ${ch} 1s linear infinite;
  font-size: 40px;
  color: var(--primary);
`,hh=Zr.p`
  font-size: 18px;
  color: var(--text-light);
  font-weight: 500;
`,mh=Zr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
  text-align: center;
`,gh=Zr.p`
  font-size: 18px;
  color: var(--dislike-color);
  font-weight: 500;
  max-width: 80%;
`,vh=Zr.button`
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
`,yh=Zr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
`,bh=Zr.p`
  font-size: 18px;
  color: var(--text);
  font-weight: 500;
`,xh=Zr.div`
  margin-top: 30px;
  animation: ${uh} 0.6s ease-out;
`,wh=()=>{const{userId:e}=ne(),{user:t}=ml(),{theme:n}=Sf(),[o,i]=(0,r.useState)({user:null,stats:{posts:0,followers:0,following:0},isFollowing:!1}),[a,s]=(0,r.useState)("memes"),[l,u]=(0,r.useState)(!0),[c,d]=(0,r.useState)(null),[f,p]=(0,r.useState)(0);(0,r.useEffect)((()=>{(async()=>{try{u(!0),d(null);const[n,r,o]=await Promise.all([$a.get(`/users/${e}`),$a.get(`/users/${e}/stats`),t?$a.get(`/users/${e}/follow-status`):Promise.resolve({data:{isFollowing:!1}})]);i({user:n.data,stats:r.data.data,isFollowing:o.data.isFollowing})}catch(c){console.error("Error fetching profile data:",c),d(c)}finally{u(!1)}})()}),[e,t,f]);const h=()=>{p((e=>e+1))};return l?(0,fl.jsxs)(fh,{children:[(0,fl.jsx)(ph,{children:(0,fl.jsx)(Il,{})}),(0,fl.jsx)(hh,{children:"Loading profile..."})]}):c?(0,fl.jsxs)(mh,{children:[(0,fl.jsxs)(gh,{children:["Error loading profile. ",c.message||"Please try again."]}),(0,fl.jsxs)(vh,{onClick:h,children:[(0,fl.jsx)(Il,{})," Retry"]})]}):o.user||l?(0,fl.jsxs)(dh,{children:[(0,fl.jsx)(gp,{user:o.user,stats:o.stats,isFollowing:o.isFollowing,onFollowToggle:async()=>{try{o.isFollowing?await $a.delete(`/users/${e}/unfollow`):await $a.post(`/users/${e}/follow`);const[t,n]=await Promise.all([$a.get(`/users/${e}/stats`),$a.get(`/users/${e}/follow-status`)]);i((e=>({...e,stats:t.data.data,isFollowing:n.data.isFollowing})))}catch(c){console.error("Error updating follow status:",c)}},isCurrentUser:(null===t||void 0===t?void 0:t._id)===e}),(0,fl.jsxs)(xh,{children:[(0,fl.jsx)(bp,{activeTab:a,setActiveTab:s,showSettings:(null===t||void 0===t?void 0:t._id)===e}),"memes"===a&&(0,fl.jsx)(Rp,{userId:e}),"likes"===a&&(0,fl.jsx)(Wp,{userId:e}),"activity"===a&&(0,fl.jsx)(Vp,{userId:e}),"followers"===a&&(0,fl.jsx)(UserFollowers,{userId:e,followersCount:o.stats.followers}),"following"===a&&(0,fl.jsx)(UserFollowing,{userId:e,followingCount:o.stats.following}),"settings"===a&&(null===t||void 0===t?void 0:t._id)===e&&(0,fl.jsx)(lh,{user:o.user})]})]}):(0,fl.jsx)(yh,{children:(0,fl.jsx)(bh,{children:"User not found"})})},_h={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},kh={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Sh="mousemove",Eh="mouseup";function jh(e,t){if(0===t)return e;const n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function Ch(e,t){const n=t=>{const n="touches"in t;n&&t.touches.length>1||e(((e,o)=>{o.trackMouse&&!n&&(document.addEventListener(Sh,r),document.addEventListener(Eh,i));const{clientX:a,clientY:s}=n?t.touches[0]:t,l=jh([a,s],o.rotationAngle);return o.onTouchStartOrOnMouseDown&&o.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),kh),{initial:l.slice(),xy:l,start:t.timeStamp||0})}))},r=t=>{e(((e,n)=>{const r="touches"in t;if(r&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;const{clientX:o,clientY:i}=r?t.touches[0]:t,[a,s]=jh([o,i],n.rotationAngle),l=a-e.xy[0],u=s-e.xy[1],c=Math.abs(l),d=Math.abs(u),f=(t.timeStamp||0)-e.start,p=Math.sqrt(c*c+d*d)/(f||1),h=[l/(f||1),u/(f||1)],m=function(e,t,n,r){return e>t?n>0?"Right":"Left":r>0?"Down":"Up"}(c,d,l,u),g="number"===typeof n.delta?n.delta:n.delta[m.toLowerCase()]||_h.delta;if(c<g&&d<g&&!e.swiping)return e;const v={absX:c,absY:d,deltaX:l,deltaY:u,dir:m,event:t,first:e.first,initial:e.initial,velocity:p,vxvy:h};v.first&&n.onSwipeStart&&n.onSwipeStart(v),n.onSwiping&&n.onSwiping(v);let y=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${m}`])&&(y=!0),y&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:v,swiping:!0})}))},o=t=>{e(((e,n)=>{let r;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){r=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(r);const o=n[`onSwiped${r.dir}`];o&&o(r)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),kh),{eventData:r})}))},i=e=>{document.removeEventListener(Sh,r),document.removeEventListener(Eh,i),o(e)},a=(e,t)=>{let i=()=>{};if(e&&e.addEventListener){const a=Object.assign(Object.assign({},_h.touchEventOptions),t.touchEventOptions),s=[["touchstart",n,a],["touchmove",r,Object.assign(Object.assign({},a),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",o,a]];s.forEach((t=>{let[n,r,o]=t;return e.addEventListener(n,r,o)})),i=()=>s.forEach((t=>{let[n,r]=t;return e.removeEventListener(n,r)}))}return i},s={ref:t=>{null!==t&&e(((e,n)=>{if(e.el===t)return e;const r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=void 0),n.trackTouch&&t&&(r.cleanUpTouch=a(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),r)}))}};return t.trackMouse&&(s.onMouseDown=n),[s,a]}function Th(e){const{trackMouse:t}=e,n=r.useRef(Object.assign({},kh)),o=r.useRef(Object.assign({},_h)),i=r.useRef(Object.assign({},o.current));let a;for(a in i.current=Object.assign({},o.current),o.current=Object.assign(Object.assign({},_h),e),_h)void 0===o.current[a]&&(o.current[a]=_h[a]);const[s,l]=r.useMemo((()=>Ch((e=>n.current=e(n.current,o.current)),{trackMouse:t})),[t]);return n.current=function(e,t,n,r){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(n.current,o.current,i.current,l),s}n(536);const Oh=(0,r.createContext)(),Rh=e=>{let{children:t}=e;const[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)(0),[s,l]=(0,r.useState)(!0),{user:u}=ml(),[c,d]=(0,r.useState)(null),f=(0,r.useCallback)((e=>{o(e)}),[]),p=(0,r.useCallback)((async()=>{try{var e;l(!0);const t=await $a.get("/notifications",{params:{limit:20,skip:0,sort:"-createdAt"}}),n=Array.isArray(null===(e=t.data)||void 0===e?void 0:e.data)?t.data.data:[];f(n)}catch(t){console.error("Failed to load notifications:",t),f([])}finally{l(!1)}}),[f]),h=(0,r.useCallback)((async()=>{if(u)try{const e=await $a.get("/notifications/unread-count");a(e.data.count||0)}catch(e){console.error("Failed to load unread count:",e),a(0)}}),[u]),m=(0,r.useCallback)((async e=>{if(e&&0!==e.length)try{await $a.post("/notifications/mark-read",{notificationIds:e}),a((t=>Math.max(0,t-e.length))),o((t=>t.map((t=>e.includes(t._id)?{...t,read:!0}:t))))}catch(t){console.error("Failed to mark as read:",t)}}),[]),g=(0,r.useCallback)((async()=>{try{return await $a.delete("/notifications"),o([]),a(0),!0}catch(e){return console.error("Failed to clear notifications:",e),!1}}),[]),v=(0,r.useCallback)((e=>{if("Notification"in window&&"granted"===Notification.permission){var t,n;const r=b(e),o={body:x(e),icon:(null===(t=e.sender)||void 0===t||null===(n=t.profile)||void 0===n?void 0:n.avatar)||"/logo192.png",badge:"/logo192.png"};window.lastNotification&&window.lastNotification.close(),window.lastNotification=new Notification(r,o),window.lastNotification.onclick=()=>{window.focus(),e.meme?window.location.href=`/memes/${e.meme._id}`:e.comment?window.location.href=`/comments/${e.comment._id}`:e.reply&&(window.location.href=`/replies/${e.reply._id}`)}}}),[]),y=(0,r.useCallback)((e=>{console.log("Nova notifica\xe7\xe3o recebida (antes do estado):",e),o((t=>{const n=[e,...t].slice(0,100);return console.log("Notifica\xe7\xf5es ap\xf3s atualiza\xe7\xe3o:",n),n})),a((e=>e+1)),"visible"!==document.visibilityState&&v(e)}),[v]);(0,r.useEffect)((()=>{if(!u)return o([]),void a(0);"Notification"in window&&"denied"!==Notification.permission&&Notification.requestPermission();const e=localStorage.getItem("token"),t=dl(e);d(t),t.on("connect_error",(e=>{console.error("Connection error:",e)})),t.on("new-notification",y);return(async()=>{try{await Promise.all([p(),h()])}catch(e){console.error("Error loading initial data:",e)}})(),()=>{t&&(t.off("new-notification",y),t.disconnect())}}),[u,y,p,h]);const b=e=>{var t,n,r,o,i,a;switch(e.type){case"like":return`${(null===(t=e.sender)||void 0===t?void 0:t.username)||"Algu\xe9m"} curtiu seu meme`;case"like_grouped":return`Seu meme tem ${(null===(n=e.metadata)||void 0===n?void 0:n.count)||"muitas"} curtidas`;case"comment":return`${(null===(r=e.sender)||void 0===r?void 0:r.username)||"Algu\xe9m"} comentou no seu meme`;case"comment_grouped":return`Seu meme tem ${(null===(o=e.metadata)||void 0===o?void 0:o.count)||"muitos"} coment\xe1rios`;case"reply":return`${(null===(i=e.sender)||void 0===i?void 0:i.username)||"Algu\xe9m"} respondeu seu coment\xe1rio`;case"mention":return`${(null===(a=e.sender)||void 0===a?void 0:a.username)||"Algu\xe9m"} te mencionou`;default:return"Nova notifica\xe7\xe3o"}},x=e=>{var t,n,r,o;switch(e.type){case"like":case"comment":return null!==(t=e.meme)&&void 0!==t&&t.caption?w(e.meme.caption,50):"Veja agora";case"like_grouped":case"comment_grouped":return null!==(n=e.meme)&&void 0!==n&&n.caption?w(e.meme.caption,50):"Veja todas as intera\xe7\xf5es";case"reply":return null!==(r=e.reply)&&void 0!==r&&r.text?w(e.reply.text,50):"Veja a resposta";case"mention":return null!==(o=e.comment)&&void 0!==o&&o.text?w(e.comment.text,50):"Veja a men\xe7\xe3o";default:return""}},w=(e,t)=>(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e;return(0,fl.jsx)(Oh.Provider,{value:{notifications:n,unreadCount:i,loading:s,markAsRead:m,clearAllNotifications:g,loadNotifications:p,loadUnreadCount:h},children:t})},Ph=(Math.pow(10,8),43200),Ah=Symbol.for("constructDateFrom");function Lh(e,t){return"function"===typeof e?e(t):e&&"object"===typeof e&&Ah in e?e[Ah](t):e instanceof Date?new e.constructor(t):new Date(t)}function Nh(e){return Lh(e,Date.now())}const $h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function zh(e){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Mh={date:zh({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:zh({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:zh({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Dh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Ih(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,o=n?.width?String(n.width):t;r=e.formattingValues[o]||e.formattingValues[t]}else{const t=e.defaultWidth,o=n?.width?String(n.width):e.defaultWidth;r=e.values[o]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const Fh={ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Ih({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Ih({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ih({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Ih({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Ih({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function Uh(e){return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?function(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n;return}(s,(e=>e.test(a))):function(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n;return}(s,(e=>e.test(a)));let u;u=e.valueCallback?e.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;return{value:u,rest:t.slice(a.length)}}}function Bh(e){return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;return{value:a,rest:t.slice(o.length)}}}const Wh={ordinalNumber:Bh({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:Uh({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Uh({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:Uh({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Uh({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Uh({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},Hh={code:"en-US",formatDistance:(e,t,n)=>{let r;const o=$h[e];return r="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Mh,formatRelative:(e,t,n,r)=>Dh[e],localize:Fh,match:Wh,options:{weekStartsOn:0,firstWeekContainsDate:1}};let qh={};function Vh(){return qh}function Kh(e,t){return Lh(t||e,e)}function Yh(e){const t=Kh(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Qh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o=Lh.bind(null,e||n.find((e=>"object"===typeof e)));return n.map(o)}function Xh(e,t){const n=+Kh(e)-+Kh(t);return n<0?-1:n>0?1:n}function Jh(e,t,n){const[r,o]=Qh(n?.in,e,t);return 12*(r.getFullYear()-o.getFullYear())+(r.getMonth()-o.getMonth())}function Gh(e,t){const n=Kh(e,t?.in);return n.setHours(23,59,59,999),n}function Zh(e,t){const n=Kh(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function em(e,t){const n=Kh(e,t?.in);return+Gh(n,t)===+Zh(n,t)}function tm(e,t,n){const[r,o,i]=Qh(n?.in,e,e,t),a=Xh(o,i),s=Math.abs(Jh(o,i));if(s<1)return 0;1===o.getMonth()&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-a*s);let l=Xh(o,i)===-a;em(r)&&1===s&&1===Xh(r,i)&&(l=!1);const u=a*(s-+l);return 0===u?0:u}function nm(e,t){return+Kh(e)-+Kh(t)}function rm(e,t,n){const r=nm(e,t)/1e3;return(o=n?.roundingMethod,e=>{const t=(o?Math[o]:Math.trunc)(e);return 0===t?0:t})(r);var o}function om(e,t,n){const r=Vh(),o=n?.locale??r.locale??Hh,i=Xh(e,t);if(isNaN(i))throw new RangeError("Invalid time value");const a=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:i}),[s,l]=Qh(n?.in,...i>0?[t,e]:[e,t]),u=rm(l,s),c=(Yh(l)-Yh(s))/1e3,d=Math.round((u-c)/60);let f;if(d<2)return n?.includeSeconds?u<5?o.formatDistance("lessThanXSeconds",5,a):u<10?o.formatDistance("lessThanXSeconds",10,a):u<20?o.formatDistance("lessThanXSeconds",20,a):u<40?o.formatDistance("halfAMinute",0,a):u<60?o.formatDistance("lessThanXMinutes",1,a):o.formatDistance("xMinutes",1,a):0===d?o.formatDistance("lessThanXMinutes",1,a):o.formatDistance("xMinutes",d,a);if(d<45)return o.formatDistance("xMinutes",d,a);if(d<90)return o.formatDistance("aboutXHours",1,a);if(d<1440){const e=Math.round(d/60);return o.formatDistance("aboutXHours",e,a)}if(d<2520)return o.formatDistance("xDays",1,a);if(d<Ph){const e=Math.round(d/1440);return o.formatDistance("xDays",e,a)}if(d<86400)return f=Math.round(d/Ph),o.formatDistance("aboutXMonths",f,a);if(f=tm(l,s),f<12){const e=Math.round(d/Ph);return o.formatDistance("xMonths",e,a)}{const e=f%12,t=Math.trunc(f/12);return e<3?o.formatDistance("aboutXYears",t,a):e<9?o.formatDistance("overXYears",t,a):o.formatDistance("almostXYears",t+1,a)}}function im(e,t){return om(e,Nh(e),t)}const am={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},sm={date:zh({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:zh({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:zh({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},lm={lastWeek:e=>{const t=e.getDay();return"'"+(0===t||6===t?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"},um={ordinalNumber:(e,t)=>{const n=Number(e);return"week"===t?.unit?n+"\xaa":n+"\xba"},era:Ih({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:Ih({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ih({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:Ih({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:Ih({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})},cm={ordinalNumber:Bh({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:Uh({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:Uh({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:Uh({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:Uh({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:Uh({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},dm={code:"pt-BR",formatDistance:(e,t,n)=>{let r;const o=am[e];return r="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",String(t)),n?.addSuffix?n.comparison&&n.comparison>0?"em "+r:"h\xe1 "+r:r},formatLong:sm,formatRelative:(e,t,n,r)=>{const o=lm[e];return"function"===typeof o?o(t):o},localize:um,match:cm,options:{weekStartsOn:0,firstWeekContainsDate:1}},fm=to`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,pm=to`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`,hm=Zr.div`
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
`,mm=Zr.button`
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
`,gm=Zr.div`
  position: fixed;
  top: ${io.isNativePlatform()?"60px":"calc(100% + 10px)"};
  right: 10px;
  width: ${io.isNativePlatform()?"calc(100% - 20px)":"380px"};
  max-height: ${io.isNativePlatform()?"70vh":"500px"};
  overflow: hidden;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: ${e=>{let{$isOpen:t}=e;return t?"block":"none"}};
  z-index: 1001;
  animation: ${fm} 0.2s ease-out;
  border: 1px solid var(--border-light);
`,vm=Zr.div`
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
`,ym=Zr.div`
  display: flex;
  gap: 10px;
`,bm=Zr.button`
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
`,xm=Zr.div`
  max-height: calc(${io.isNativePlatform()?"70vh":"400px"} - 60px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 2px;
  }
`,wm=Zr.div`
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
`,_m=Zr.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-light);
  flex-shrink: 0;
`,km=Zr.div`
  flex: 1;
  min-width: 0;
`,Sm=Zr.div`
  font-size: 15px;
  line-height: 1.4;
`,Em=Zr.span`
  color: var(--primary);
  font-weight: 500;
`,jm=Zr.div`
  font-style: italic;
  margin-top: 6px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border-left: 2px solid var(--border-light);
  color: var(--text-light);
  font-size: 14px;
`,Cm=Zr.div`
  font-size: 13px;
  color: var(--text-lighter);
  margin-top: 6px;
`,Tm=Zr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  
  svg {
    color: var(--primary);
    opacity: ${e=>{let{$unread:t}=e;return t?0:1}};
  }
`,Om=Zr.div`
  padding: 32px 16px;
  text-align: center;
  color: var(--text-lighter);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Rm=Zr.div`
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
  animation: ${fm} 0.2s ease-out;
`,Pm=Zr.div`
  background: var(--card-bg);
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${pm} 0.3s ease-out;
`,Am=Zr.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
`,Lm=Zr.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`,Nm=Zr.button`
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
`,$m=()=>{const{notifications:e,unreadCount:t,markAsRead:n,clearAllNotifications:o,loading:i}=(()=>{const e=(0,r.useContext)(Oh);if(!e)throw new Error("useNotifications must be used within a NotificationProvider");return e})(),[a,s]=(0,r.useState)(!1),[l,u]=(0,r.useState)(!1),c=(0,r.useRef)(null),d=te();(0,r.useEffect)((()=>{const e=e=>{c.current&&!c.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,r.useEffect)((()=>{io.isNativePlatform()&&(a?go.setBackgroundColor({color:"#1E1E1E"}):go.setBackgroundColor({color:"#00000000"}))}),[a]),(0,r.useEffect)((()=>{if(a&&t>0){const t=e.filter((e=>!e.read)).map((e=>e._id));t.length>0&&n(t)}}),[a,e,t,n]);const f=e=>{var t,n,r,o,i,a,s,l,u,c,d,f,h,m;switch(e.type){case"mention":return(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Em,{children:null===(t=e.sender)||void 0===t?void 0:t.username})," te mencionou em um"," ","comment"===(null===(n=e.metadata)||void 0===n?void 0:n.context)?"coment\xe1rio":"meme",(null===(r=e.metadata)||void 0===r?void 0:r.text)&&(0,fl.jsxs)(jm,{children:['"',p(e.metadata.text,50),'"']})]});case"like":return(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Em,{children:(null===(o=e.sender)||void 0===o?void 0:o.username)||"Algu\xe9m"})," curtiu seu meme",(null===(i=e.meme)||void 0===i?void 0:i.caption)&&(0,fl.jsxs)(jm,{children:['"',p(e.meme.caption,50),'"']})]});case"like_grouped":return(0,fl.jsxs)(fl.Fragment,{children:["Seu meme tem ",(0,fl.jsxs)(Em,{children:[(null===(a=e.metadata)||void 0===a?void 0:a.count)||"muitas"," curtidas"]}),(null===(s=e.meme)||void 0===s?void 0:s.caption)&&(0,fl.jsxs)(jm,{children:['"',p(e.meme.caption,50),'"']})]});case"comment":return(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Em,{children:(null===(l=e.sender)||void 0===l?void 0:l.username)||"Algu\xe9m"})," comentou no seu meme:",null!==(u=e.comment)&&void 0!==u&&u.text?(0,fl.jsxs)(jm,{children:['"',p(e.comment.text,60),'"']}):(0,fl.jsx)(jm,{children:"Novo coment\xe1rio"})]});case"comment_grouped":return(0,fl.jsxs)(fl.Fragment,{children:["Seu meme tem ",(0,fl.jsxs)(Em,{children:[(null===(c=e.metadata)||void 0===c?void 0:c.count)||"muitos"," coment\xe1rios"]}),(null===(d=e.meme)||void 0===d?void 0:d.caption)&&(0,fl.jsxs)(jm,{children:['"',p(e.meme.caption,50),'"']})]});case"reply":return(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Em,{children:null===(f=e.sender)||void 0===f?void 0:f.username})," respondeu seu coment\xe1rio:",(0,fl.jsxs)(jm,{children:['"',null===(h=e.metadata)||void 0===h?void 0:h.text,'"']}),e.comment&&(0,fl.jsxs)("div",{style:{marginTop:4,fontSize:12},children:['Em resposta a: "',null===(m=e.comment.text)||void 0===m?void 0:m.substring(0,40),'..."']})]});default:return"Nova notifica\xe7\xe3o"}},p=(e,t)=>(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e;return(0,fl.jsxs)("div",{ref:c,style:{position:"relative"},children:[(0,fl.jsxs)(mm,{onClick:()=>s(!a),children:[(0,fl.jsx)(Rl,{size:24}),t>0&&(0,fl.jsx)(hm,{children:t>9?"9+":t})]}),(0,fl.jsxs)(gm,{$isOpen:a,children:[(0,fl.jsxs)(vm,{children:[(0,fl.jsx)("span",{children:"Notifica\xe7\xf5es"}),(0,fl.jsxs)(ym,{children:[e.length>0&&(0,fl.jsxs)(bm,{$danger:!0,onClick:()=>u(!0),children:[(0,fl.jsx)(eu,{size:16})," Limpar"]}),e.some((e=>!e.read))&&(0,fl.jsxs)(bm,{onClick:async()=>{const t=e.filter((e=>!e.read)).map((e=>e._id));t.length>0&&await n(t)},children:[(0,fl.jsx)(Al,{size:16})," Lidas"]})]})]}),(0,fl.jsx)(xm,{children:i?(0,fl.jsxs)(Om,{children:[(0,fl.jsx)(Rl,{size:24}),"Carregando notifica\xe7\xf5es..."]}):0===e.length?(0,fl.jsxs)(Om,{children:[(0,fl.jsx)(Rl,{size:24}),"Nenhuma notifica\xe7\xe3o"]}):e.map((e=>{var t,n,r;return(0,fl.jsxs)(wm,{$unread:!e.read,$type:e.type,onClick:()=>(e=>{e.meme?d(`/memes/${e.meme._id}`):e.comment?d(`/memes/${e.comment.meme}`,{state:{highlightComment:e.comment._id}}):e.reply&&d(`/memes/${e.reply.meme}`,{state:{highlightReply:e.reply._id}}),s(!1)})(e),children:[(0,fl.jsx)(_m,{src:null!==(t=e.sender)&&void 0!==t&&null!==(n=t.profile)&&void 0!==n&&n.avatar?e.sender.profile.avatar.startsWith("https")?e.sender.profile.avatar:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${e.sender.profile.avatar}`:"https://i.pravatar.cc/150?img=3",alt:null===(r=e.sender)||void 0===r?void 0:r.username,crossOrigin:"anonymous",onError:e=>{e.target.src="https://i.pravatar.cc/150?img=3",e.target.onerror=null}}),(0,fl.jsxs)(km,{children:[(0,fl.jsx)(Sm,{children:f(e)}),(0,fl.jsx)(Cm,{children:im(new Date(e.createdAt),{addSuffix:!0,locale:dm})})]}),(0,fl.jsx)(Tm,{$unread:!e.read,children:(0,fl.jsx)(Al,{size:18})})]},e._id)}))})]}),l&&(0,fl.jsx)(Rm,{children:(0,fl.jsxs)(Pm,{children:[(0,fl.jsxs)(Am,{children:["Tem certeza que deseja limpar todas as notifica\xe7\xf5es?",(0,fl.jsx)("br",{}),"Esta a\xe7\xe3o n\xe3o pode ser desfeita."]}),(0,fl.jsxs)(Lm,{children:[(0,fl.jsx)(Nm,{onClick:async()=>{await o(),u(!1),s(!1)},children:"Limpar"}),(0,fl.jsx)(Nm,{onClick:()=>u(!1),children:"Cancelar"})]})]})})]})},zm=(to`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,to`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,to`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Zr.div`
  position: fixed;
  top: env(safe-area-inset-top);
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(135deg, rgba(255, 115, 0, 0.95) 0%, rgb(230, 65, 5) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`),Mm=Zr.div`
  position: fixed;
  top: 0;
  left: ${e=>{let{$isOpen:t}=e;return t?"0":"-100%"}};
  width: 85%;
  max-width: 300px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(255, 115, 0, 0.95) 0%, rgb(230, 65, 5) 100%);
  z-index: 1001;
  transition: left 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`,Dm=Zr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${e=>{let{$isOpen:t}=e;return t?"1":"0"}};
  pointer-events: ${e=>{let{$isOpen:t}=e;return t?"all":"none"}};
  transition: opacity 0.3s ease;
`,Im=Zr.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
`,Fm=Zr(rt)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 1.1rem;
  background: ${e=>{let{$active:t}=e;return t?"rgba(255, 255, 255, 0.2)":"transparent"}};
  
  &:active {
    background: rgba(255, 255, 255, 0.3);
  }
`,Um=Zr.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`,Bm=Zr.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 8px;
`,Wm=Zr.div`
  height: 60px;
`,Hm=()=>{const{theme:e,toggleTheme:t}=Sf(),{user:n,logout:o}=ml(),i=te(),a=G(),[s,l]=(0,r.useState)(!1),[u,c]=(0,r.useState)(a.pathname);(0,r.useEffect)((()=>{c(a.pathname),l(!1)}),[a]);const d=Th({onSwipedLeft:()=>l(!1),onSwipedRight:()=>l(!0),trackMouse:!0});return(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsxs)(zm,{children:[(0,fl.jsx)(Bm,{onClick:()=>l(!0),children:(0,fl.jsx)(Ul,{size:24})}),(0,fl.jsx)(rt,{to:"/",style:{textDecoration:"none"},children:(0,fl.jsxs)(Im,{children:[(0,fl.jsx)(fu,{}),(0,fl.jsx)("span",{children:"iFuunny"})]})}),n?(0,fl.jsx)($m,{}):(0,fl.jsx)("div",{style:{width:24}})]}),(0,fl.jsx)(Dm,{$isOpen:s,onClick:()=>l(!1),...d}),(0,fl.jsxs)(Mm,{$isOpen:s,...d,children:[(0,fl.jsxs)(Im,{children:[(0,fl.jsx)(fu,{}),(0,fl.jsx)("span",{children:"iFuunny"})]}),n?(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsxs)(Fm,{to:"/",$active:"/"===u,onClick:()=>l(!1),children:[(0,fl.jsx)(tu,{}),(0,fl.jsx)("span",{children:"Destaques"})]}),(0,fl.jsxs)(Fm,{to:"/feed",$active:"/feed"===u,onClick:()=>l(!1),children:[(0,fl.jsx)(Ml,{}),(0,fl.jsx)("span",{children:"Coletivo"})]}),(0,fl.jsxs)(Fm,{to:"/upload",$active:"/upload"===u,onClick:()=>l(!1),children:[(0,fl.jsx)(Vl,{}),(0,fl.jsx)("span",{children:"Criar"})]}),(0,fl.jsxs)(Fm,{to:`/users/${n._id}`,$active:u===`/users/${n._id}`,onClick:()=>l(!1),children:[(0,fl.jsx)(iu,{}),(0,fl.jsx)("span",{children:"Meu Perfil"})]}),(0,fl.jsxs)(Fm,{to:"/settings",$active:"/settings"===u,onClick:()=>l(!1),children:[(0,fl.jsx)(Xl,{}),(0,fl.jsx)("span",{children:"Configura\xe7\xf5es"})]}),(0,fl.jsxs)(Um,{children:[(0,fl.jsxs)(Fm,{as:"button",onClick:t,children:["light"===e?(0,fl.jsx)(Wl,{}):(0,fl.jsx)(Zl,{}),(0,fl.jsx)("span",{children:"light"===e?"Tema Escuro":"Tema Claro"})]}),(0,fl.jsxs)(Fm,{as:"button",onClick:async()=>{try{await o(),i("/")}catch(e){console.error("Logout error:",e)}},children:[(0,fl.jsx)(Fl,{}),(0,fl.jsx)("span",{children:"Sair"})]})]})]}):(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Fm,{to:"/login",$active:"/login"===u,onClick:()=>l(!1),children:(0,fl.jsx)("span",{children:"Login"})}),(0,fl.jsx)(Fm,{to:"/register",$active:"/register"===u,onClick:()=>l(!1),children:(0,fl.jsx)("span",{children:"Registrar"})})]})]}),(0,fl.jsx)(Wm,{})]})},qm=Zr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${e=>e.$fullPage&&"\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.8);\n    z-index: 1000;\n  "}
`,Vm=Zr((function(e){return El({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(e)}))`
  animation: spin 1s linear infinite;
  font-size: 2rem;
  color: #ff4500;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,Km=e=>{let{fullPage:t=!1}=e;return(0,fl.jsx)(qm,{$fullPage:t,children:(0,fl.jsx)(Vm,{})})},Ym=e=>{let{children:t}=e;const{user:n,loading:o,initialCheckDone:i}=ml(),a=G();return(0,r.useEffect)((()=>{io.isNativePlatform()&&go.setBackgroundColor({color:"#121212"})}),[]),o||!i?(0,fl.jsx)(Km,{fullPage:!0}):n?io.isNativePlatform()?(0,fl.jsx)("div",{style:{paddingTop:"env(safe-area-inset-top)",paddingBottom:"env(safe-area-inset-bottom)",minHeight:"calc(100vh - 60px)"},children:t}):t:(0,fl.jsx)(ve,{to:"/login",replace:!0,state:{from:a,message:"Por favor fa\xe7a login para acessar esta p\xe1gina",isMobile:io.isNativePlatform()}})};var Qm=n(173),Xm=n.n(Qm),Jm=n(161),Gm=n.n(Jm),Zm=n(366),eg=n.n(Zm),tg=n(123),ng=n.n(tg),rg="bodyAttributes",og="htmlAttributes",ig="titleAttributes",ag={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},sg=(Object.keys(ag).map((function(e){return ag[e]})),"charset"),lg="cssText",ug="href",cg="http-equiv",dg="innerHTML",fg="itemprop",pg="name",hg="property",mg="rel",gg="src",vg="target",yg={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},bg="defaultTitle",xg="defer",wg="encodeSpecialCharacters",_g="onChangeClientState",kg="titleTemplate",Sg=Object.keys(yg).reduce((function(e,t){return e[yg[t]]=t,e}),{}),Eg=[ag.NOSCRIPT,ag.SCRIPT,ag.STYLE],jg="data-react-helmet",Cg="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tg=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Og=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rg=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Pg=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ag=function(e){var t=Mg(e,ag.TITLE),n=Mg(e,kg);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Mg(e,bg);return t||r||void 0},Lg=function(e){return Mg(e,_g)||function(){}},Ng=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Og({},e,t)}),{})},$g=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[ag.BASE]})).map((function(e){return e[ag.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},zg=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&Bg("Helmet: "+e+' should be of type "Array". Instead found type "'+Cg(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();-1===t.indexOf(l)||n===mg&&"canonical"===e[n].toLowerCase()||l===mg&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==dg&&s!==lg&&s!==fg||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=ng()({},r[s],o[s]);r[s]=l}return e}),[]).reverse()},Mg=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Dg=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){Dg(t)}),0)}}(),Ig=function(e){return clearTimeout(e)},Fg="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Dg:n.g.requestAnimationFrame||Dg,Ug="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ig:n.g.cancelAnimationFrame||Ig,Bg=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},Wg=null,Hg=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,d=e.title,f=e.titleAttributes;Kg(ag.BODY,r),Kg(ag.HTML,o),Vg(d,f);var p={baseTag:Yg(ag.BASE,n),linkTags:Yg(ag.LINK,i),metaTags:Yg(ag.META,a),noscriptTags:Yg(ag.NOSCRIPT,s),scriptTags:Yg(ag.SCRIPT,u),styleTags:Yg(ag.STYLE,c)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,h,m)},qg=function(e){return Array.isArray(e)?e.join(""):e},Vg=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=qg(e)),Kg(ag.TITLE,t)},Kg=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(jg),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var c=i.indexOf(l);-1!==c&&i.splice(c,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(jg):n.getAttribute(jg)!==a.join(",")&&n.setAttribute(jg,a.join(","))}},Yg=function(e,t){var n=document.head||document.querySelector(ag.HEAD),r=n.querySelectorAll(e+"["+jg+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===dg)n.innerHTML=t.innerHTML;else if(r===lg)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(jg,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},Qg=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Xg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[yg[n]||n]=e[n],t}),t)},Jg=function(e,t,n){switch(e){case ag.TITLE:return{toComponent:function(){return function(e,t,n){var o,i=((o={key:t})[jg]=!0,o),a=Xg(n,i);return[r.createElement(ag.TITLE,a,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=Qg(n),i=qg(t);return o?"<"+e+" "+jg+'="true" '+o+">"+Pg(i,r)+"</"+e+">":"<"+e+" "+jg+'="true">'+Pg(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case rg:case og:return{toComponent:function(){return Xg(t)},toString:function(){return Qg(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[jg]=!0,o);return Object.keys(t).forEach((function(e){var n=yg[e]||e;if(n===dg||n===lg){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===dg||e===lg)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+Pg(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===Eg.indexOf(e);return t+"<"+e+" "+jg+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Gg=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,c=e.title,d=void 0===c?"":c,f=e.titleAttributes;return{base:Jg(ag.BASE,t,r),bodyAttributes:Jg(rg,n,r),htmlAttributes:Jg(og,o,r),link:Jg(ag.LINK,i,r),meta:Jg(ag.META,a,r),noscript:Jg(ag.NOSCRIPT,s,r),script:Jg(ag.SCRIPT,l,r),style:Jg(ag.STYLE,u,r),title:Jg(ag.TITLE,{title:d,titleAttributes:f},r)}},Zg=function(e){var t,n;return n=t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!eg()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case ag.SCRIPT:case ag.NOSCRIPT:return{innerHTML:t};case ag.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Og({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Og({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case ag.TITLE:return Og({},o,((t={})[r.type]=a,t.titleAttributes=Og({},i),t));case ag.BODY:return Og({},o,{bodyAttributes:Og({},i)});case ag.HTML:return Og({},o,{htmlAttributes:Og({},i)})}return Og({},o,((n={})[r.type]=Og({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Og({},t);return Object.keys(e).forEach((function(t){var r;n=Og({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Sg[n]||n]=e[n],t}),t)}(Rg(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case ag.LINK:case ag.META:case ag.NOSCRIPT:case ag.SCRIPT:case ag.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},n.prototype.render=function(){var t=this.props,n=t.children,o=Rg(t,["children"]),i=Og({},o);return n&&(i=this.mapChildrenToProps(n,i)),r.createElement(e,i)},Tg(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(r.Component),t.propTypes={base:Xm().object,bodyAttributes:Xm().object,children:Xm().oneOfType([Xm().arrayOf(Xm().node),Xm().node]),defaultTitle:Xm().string,defer:Xm().bool,encodeSpecialCharacters:Xm().bool,htmlAttributes:Xm().object,link:Xm().arrayOf(Xm().object),meta:Xm().arrayOf(Xm().object),noscript:Xm().arrayOf(Xm().object),onChangeClientState:Xm().func,script:Xm().arrayOf(Xm().object),style:Xm().arrayOf(Xm().object),title:Xm().string,titleAttributes:Xm().object,titleTemplate:Xm().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=Gg({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(Gm()((function(e){return{baseTag:$g([ug,vg],e),bodyAttributes:Ng(rg,e),defer:Mg(e,xg),encode:Mg(e,wg),htmlAttributes:Ng(og,e),linkTags:zg(ag.LINK,[mg,ug],e),metaTags:zg(ag.META,[pg,sg,cg,hg,fg],e),noscriptTags:zg(ag.NOSCRIPT,[dg],e),onChangeClientState:Lg(e),scriptTags:zg(ag.SCRIPT,[gg,dg],e),styleTags:zg(ag.STYLE,[lg],e),title:Ag(e),titleAttributes:Ng(ig,e)}}),(function(e){Wg&&Ug(Wg),e.defer?Wg=Fg((function(){Hg(e,(function(){Wg=null}))})):(Hg(e),Wg=null)}),Gg)((function(){return null})));Zg.renderStatic=Zg.rewind;!function(e){if(!e||"undefined"==typeof document)return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}(':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n');var ev=e=>"number"==typeof e&&!isNaN(e),tv=e=>"string"==typeof e,nv=e=>"function"==typeof e,rv=e=>(0,r.isValidElement)(e)||tv(e)||nv(e)||ev(e);function ov(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:i=!0,collapseDuration:a=300}=e;return function(e){let{children:s,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f,playToast:p}=e,h=o?`${t}--${l}`:t,m=o?`${n}--${l}`:n,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)((()=>{let e=d.current,t=h.split(" "),n=r=>{r.target===d.current&&(p(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,r.useEffect)((()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,{scrollHeight:r,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,c,a):c()};f||(u?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,s)}}var iv=1,av=()=>""+iv++;var sv=new Map,lv=[],uv=new Set,cv=()=>sv.size>0;function dv(e,t){var n;if(t)return!(null==(n=sv.get(t))||!n.isToastActive(e));let r=!1;return sv.forEach((t=>{t.isToastActive(e)&&(r=!0)})),r}function fv(e){if(cv()){if(null==e||(e=>tv(e)||ev(e))(e))sv.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){let t=sv.get(e.containerId);t?t.removeToast(e.id):sv.forEach((t=>{t.removeToast(e.id)}))}}else lv=lv.filter((t=>null!=e&&t.options.toastId!==e))}function pv(e,t){rv(e)&&(cv()||lv.push({content:e,options:t}),sv.forEach((n=>{n.buildToast(e,t)})))}function hv(e,t){sv.forEach((n=>{(null==t||null==t||!t.containerId||(null==t?void 0:t.containerId)===n.id)&&n.toggle(e,null==t?void 0:t.id)}))}function mv(e){return e&&(tv(e.toastId)||ev(e.toastId))?e.toastId:av()}function gv(e,t){return pv(e,t),t.toastId}function vv(e,t){return{...t,type:t&&t.type||e,toastId:mv(t)}}function yv(e){return(t,n)=>gv(t,vv(e,n))}function bv(e,t){return gv(e,vv("default",t))}bv.loading=(e,t)=>gv(e,vv("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),bv.promise=function(e,t,n){let r,{pending:o,error:i,success:a}=t;o&&(r=tv(o)?bv.loading(o,n):bv.loading(o.render,{...n,...o}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void bv.dismiss(r);let i={type:e,...s,...n,data:o},a=tv(t)?{render:t}:t;return r?bv.update(r,{...i,...a}):bv(a.render,{...i,...a}),o},u=nv(e)?e():e;return u.then((e=>l("success",a,e))).catch((e=>l("error",i,e))),u},bv.success=yv("success"),bv.info=yv("info"),bv.error=yv("error"),bv.warning=yv("warning"),bv.warn=bv.warning,bv.dark=(e,t)=>gv(e,vv("default",{theme:"dark",...t})),bv.dismiss=function(e){fv(e)},bv.clearWaitingQueue=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};sv.forEach((t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()}))},bv.isActive=dv,bv.update=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=((e,t)=>{let{containerId:n}=t;var r;return null==(r=sv.get(n||1))?void 0:r.toasts.get(e)})(e,t);if(n){let{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:av()};i.toastId!==e&&(i.staleId=e);let a=i.render||o;delete i.render,gv(a,i)}},bv.done=e=>{bv.update(e,{progress:1})},bv.onChange=function(e){return uv.add(e),()=>{uv.delete(e)}},bv.play=e=>hv(!0,e),bv.pause=e=>hv(!1,e);"undefined"!=typeof window?r.useLayoutEffect:r.useEffect;var xv=function(e){return{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:arguments.length>1&&void 0!==arguments[1]&&arguments[1]}};ov(xv("bounce",!0)),ov(xv("slide",!0)),ov(xv("zoom")),ov(xv("flip"));const wv=e=>{if(!e)return console.warn("URL is empty or undefined"),"https://i.pravatar.cc/150?img=3";if(e.startsWith("http://")&&(e="https://"+e.substring(7)),e.startsWith("https://")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e:`/${e}`;return`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://api.jokesteronline.org"}${t}`},_v=Zr.div`
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 4px solid var(--danger);
  color: var(--danger);
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,kv=Zr.p`
  margin: 0;
  flex: 1;
`,Sv=Zr.button`
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
`,Ev=e=>{let{message:t,onRetry:n}=e;return(0,fl.jsxs)(_v,{children:[(0,fl.jsx)(Cl,{size:20}),(0,fl.jsx)(kv,{children:t||"Ocorreu um erro inesperado"}),n&&(0,fl.jsxs)(Sv,{onClick:n,children:[(0,fl.jsx)(hu,{size:14}),"Tentar novamente"]})]})},jv=Zr.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--background);
  color: var(--text);
`,Cv=Zr.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  background: var(--background);
  z-index: 10;
  padding-top: 10px;
`,Tv=Zr.button`
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
`,Ov=()=>{var e,t;const{id:n}=ne(),o=te(),{user:i}=ml(),[a,s]=(0,r.useState)(null),[l,u]=(0,r.useState)(!0),[c,d]=(0,r.useState)(null),[f,p]=(0,r.useState)(!1),[h,m]=(0,r.useState)(!1),g=(0,r.useCallback)((async()=>{try{u(!0);const e=await $a.get(`/memes/${n}`);s(e.data)}catch(zv){var e,t,r,o;console.error("Erro ao carregar meme:",zv),d((null===(e=zv.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Meme n\xe3o encontrado"),bv.error((null===(r=zv.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message)||"Erro ao carregar meme")}finally{u(!1)}}),[n]),v=(0,r.useCallback)((async()=>{try{m(!0),await $a.delete(`/memes/${n}`),bv.success("Meme deletado com sucesso!"),o("/")}catch(zv){var e,t;console.error("Erro ao deletar meme:",zv),bv.error((null===(e=zv.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Erro ao deletar meme")}finally{m(!1),p(!1)}}),[n,o]);return(0,r.useEffect)((()=>{g()}),[g]),l?(0,fl.jsx)(jv,{children:(0,fl.jsx)(Km,{})}):c?(0,fl.jsx)(jv,{children:(0,fl.jsx)(Ev,{message:c,onRetry:g})}):a?(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsxs)(Zg,{children:[(0,fl.jsxs)("title",{children:[a.caption?`${a.caption.substring(0,60)}...`:"Visualizar Meme"," | iFunny Clone"]}),(0,fl.jsx)("meta",{name:"description",content:`Meme postado por @${null===(e=a.author)||void 0===e?void 0:e.username}`}),(0,fl.jsx)("meta",{property:"og:title",content:a.caption||"Meme interessante"}),(0,fl.jsx)("meta",{property:"og:description",content:`Meme postado por @${null===(t=a.author)||void 0===t?void 0:t.username}`}),(0,fl.jsx)("meta",{property:"og:image",content:wv(a.mediaUrl)}),(0,fl.jsx)("meta",{property:"og:url",content:`${window.location.origin}/memes/${a._id}`})]}),(0,fl.jsxs)(jv,{children:[(0,fl.jsx)(Cv,{children:(0,fl.jsx)(Tv,{onClick:()=>o(-1),"aria-label":"Voltar",children:(0,fl.jsx)(Tl,{})})}),(0,fl.jsx)(dd,{meme:a,onDelete:v,showCommentsInitially:!0})]})]}):(0,fl.jsx)(jv,{children:(0,fl.jsx)(Ev,{message:"Meme n\xe3o encontrado"})})},Rv=Zr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: ${io.isNativePlatform()?"env(safe-area-inset-top)":"0"};
  padding-bottom: ${io.isNativePlatform()?"env(safe-area-inset-bottom)":"0"};
`,Pv=Zr.main`
  flex: 1;
  padding: ${io.isNativePlatform()?"0":"1rem"};
  padding-top: ${io.isNativePlatform()?"60px":"0"};
  background-color: var(--background);
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding-top: ${io.isNativePlatform()?"60px":"0"};
    padding: 0;
  }
`,Av=Zr.div`
  padding-top: ${io.isNativePlatform()?"60px":"0"};
`;const Lv=function(){return(0,r.useEffect)((()=>{io.isNativePlatform()&&(go.setOverlaysWebView({overlay:!0}),go.setBackgroundColor({color:"#00000000"}),Rd.addListener("keyboardWillShow",(()=>{document.documentElement.style.setProperty("--keyboard-height","300px")})),Rd.addListener("keyboardWillHide",(()=>{document.documentElement.style.setProperty("--keyboard-height","0px")})))}),[]),(0,fl.jsx)(hl,{children:(0,fl.jsx)(Rh,{children:(0,fl.jsx)(tt,{children:(0,fl.jsxs)(kf,{children:[(0,fl.jsx)(vo,{}),(0,fl.jsx)(Rv,{children:io.isNativePlatform()?(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Hm,{}),(0,fl.jsx)(Av,{children:(0,fl.jsx)(Pv,{children:(0,fl.jsxs)(xe,{children:[(0,fl.jsx)(ye,{path:"/",element:(0,fl.jsx)(Cd,{})}),(0,fl.jsx)(ye,{path:"/memes/:id",element:(0,fl.jsx)(Ov,{})}),(0,fl.jsx)(ye,{path:"/login",element:(0,fl.jsx)(Dd,{})}),(0,fl.jsx)(ye,{path:"/register",element:(0,fl.jsx)(Kd,{})}),(0,fl.jsx)(ye,{path:"/users/:userId",element:(0,fl.jsx)(wh,{})}),(0,fl.jsx)(ye,{path:"/trending",element:(0,fl.jsx)(jd,{})}),(0,fl.jsx)(ye,{path:"/feed",element:(0,fl.jsx)(Ym,{children:(0,fl.jsx)(tf,{})})}),(0,fl.jsx)(ye,{path:"/upload",element:(0,fl.jsx)(Ym,{children:(0,fl.jsx)(wf,{})})}),(0,fl.jsx)(ye,{path:"*",element:(0,fl.jsx)(ve,{to:"/"})})]})})})]}):(0,fl.jsxs)(fl.Fragment,{children:[(0,fl.jsx)(Hm,{}),(0,fl.jsx)(Pv,{children:(0,fl.jsxs)(xe,{children:[(0,fl.jsx)(ye,{path:"/",element:(0,fl.jsx)(Cd,{})}),(0,fl.jsx)(ye,{path:"/memes/:id",element:(0,fl.jsx)(Ov,{})}),(0,fl.jsx)(ye,{path:"/login",element:(0,fl.jsx)(Dd,{})}),(0,fl.jsx)(ye,{path:"/register",element:(0,fl.jsx)(Kd,{})}),(0,fl.jsx)(ye,{path:"/users/:userId",element:(0,fl.jsx)(wh,{})}),(0,fl.jsx)(ye,{path:"/trending",element:(0,fl.jsx)(jd,{})}),(0,fl.jsx)(ye,{path:"/feed",element:(0,fl.jsx)(Ym,{children:(0,fl.jsx)(tf,{})})}),(0,fl.jsx)(ye,{path:"/upload",element:(0,fl.jsx)(Ym,{children:(0,fl.jsx)(wf,{})})}),(0,fl.jsx)(ye,{path:"*",element:(0,fl.jsx)(ve,{to:"/"})})]})})]})})]})})})})},Nv=document.getElementById("root");(0,o.H)(Nv).render((0,fl.jsx)(r.StrictMode,{children:(0,fl.jsx)(Lv,{})}))})()})();
//# sourceMappingURL=main.3c076f3d.js.map