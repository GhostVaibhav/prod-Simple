/*! For license information please see 12.7c35d997.chunk.js.LICENSE.txt */
(self.webpackChunksimple=self.webpackChunksimple||[]).push([[12],{9012:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(2791),o=r(7945),i=r.n(o),a=(r(4655),r(7089)),s=r(2007),c=r.n(s);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,r;function o(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(p(t)),t.handleErrored=t.handleErrored.bind(p(t)),t.handleChange=t.handleChange.bind(p(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(p(t)),t}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=o.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return n.createElement("div",d({},t,{ref:this.handleRecaptchaRef}))},o}(n.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:c().string.isRequired,onChange:c().func,grecaptcha:c().object,theme:c().oneOf(["dark","light"]),type:c().oneOf(["image","audio"]),tabindex:c().number,onExpired:c().func,onErrored:c().func,size:c().oneOf(["compact","normal","invisible"]),stoken:c().string,hl:c().string,badge:c().oneOf(["bottomright","bottomleft","inline"])},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var u=r(2110),f=r.n(u);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}var h={},y=0;var b="onloadcallback";var g,v,x=(g=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+b+"&render=explicit"},v=(v={callbackName:b,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,o;function i(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}o=t,(r=i).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+y++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof g?g():g,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=h[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[v.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=v,o=n.globalName,i=n.callbackName,a=n.scriptId;if(o&&"undefined"!==typeof window[o]&&(h[t]={loaded:!0,observers:{}}),h[t]){var s=h[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},h[t]={loaded:!1,observers:c};var d=document.createElement("script");for(var p in d.src=t,d.async=!0,v.attributes)d.setAttribute(p,v.attributes[p]);a&&(d.id=a);var l=function(e){if(h[t]){var r=h[t].observers;for(var n in r)e(r[n])&&delete r[n]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=h[t];e&&(e.loaded=!0,l((function(t){return!i&&(t(e),!0)})))},d.onerror=function(){var e=h[t];e&&(e.errored=!0,l((function(t){return t(e),!0})))},document.body.appendChild(d)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===v.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=h[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===v.removeOnUnmount&&delete h[e])},a.render=function(){var t=v.globalName,r=this.props,o=(r.asyncScriptOnLoad,r.forwardedRef),i=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=o,(0,n.createElement)(e,i)},i}(n.Component),o=(0,n.forwardRef)((function(e,t){return(0,n.createElement)(r,m({},e,{forwardedRef:t}))}));return o.displayName="AsyncScriptLoader("+t+")",o.propTypes={asyncScriptOnLoad:c().func},f()(o,e)})(l),w=x,S=r(184),_={in:{opacity:1,x:0},out:{opacity:0,x:"-100vw"},upIn:{opacity:1,y:0},upOut:{opacity:0,y:"-100vh"},downOut:{opacity:0,y:"100vh"},comeLeftOut:{opacity:0,x:"100vw"},zoomInit:{scale:0},zoomFinal:{scale:1}},O={transition:"linear",duration:4};var E=function(e){var t=function(){e.setVerified(!1),document.getElementById("open").classList.add("hidden"),document.getElementById("dis").classList.remove("hidden")},r=function(t){var r,n=!0,o=!0;t.preventDefault(),e.verified?(""!==document.getElementById("in-email").value&&(r=document.getElementById("in-email").value,String(r).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))||(document.getElementById("in-email").classList.add("border-red-500"),n=!1),""===document.getElementById("in-msg").value&&(document.getElementById("in-msg").classList.add("border-red-500"),o=!1)):(n=!1,o=!1),n&&document.getElementById("in-email").classList.remove("border-red-500"),o&&document.getElementById("in-msg").classList.remove("border-red-500"),n&&o&&document.getElementById("form").submit()};return(0,n.useEffect)((function(){i().init()}),[]),(0,S.jsx)("div",{children:(0,S.jsxs)("div",{className:"h-fit min-h-screen min-w-full w-fit bg-gray-900 flex justify-center items-center",children:[(0,S.jsxs)("div",{className:"z-10 absolute h-screen w-screen !opacity-60 blur-2xl overflow-hidden",children:[(0,S.jsx)("div",{className:"absolute top-1/2 md:top-1/4 left-[10%] md:left-1/4 h-1/3 md:h-auto md:w-1/3 aspect-square bg-purple-300 rounded-full mix-blend-multiply filter animate-something animation-delay-2000"}),(0,S.jsx)("div",{className:"absolute top-1/2 md:top-1/4 left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-yellow-300 rounded-full mix-blend-multiply filter animate-something"}),(0,S.jsx)(a.E.div,{transition:O,initial:"upOut",animate:"upIn",exit:"upOut",variants:_,className:"absolute top-1/3 md:top-[20%] left-[15%] md:left-[45%] h-1/3 md:h-auto md:w-1/3 aspect-square bg-pink-300 rounded-full mix-blend-multiply filter animate-something animation-delay-4000"})]}),(0,S.jsx)(a.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"z-20 phone_landscape:my-2 flex justify-center backdrop-blur-2xl rounded-lg",children:(0,S.jsxs)("div",{className:"flex flex-col sm:flex-row items-center border border-gray-800 bg-opacity-80 bg-gray-700 rounded-lg",children:[(0,S.jsx)("div",{"data-blobity-offset-y":"10",style:{fontFamily:"Caveat"},className:"text-center phone_landscape:mx-1 font-extrabold mt-6 pr-3 md:pr-0 m-2 text-indigo-500 text-5xl w-full md:ml-6 md:mr-20",children:"\ud83d\udcd1Contact Me"}),(0,S.jsxs)("form",{id:"form",onSubmit:r,action:"https://formcarry.com/s/rJM8b8RJ5Ob",method:"POST",acceptCharset:"UTF-8",className:"flex flex-col phone_landscape:my-0 phone_landscape:mx-2 text-white my-4 md:mr-6 m-2 justify-center w-[90%]",children:[(0,S.jsx)("input",{id:"in-name","data-blobity-radius":"8",name:"firstName",spellCheck:"false",className:"w-full m-2 self-center p-2 rounded-md bg-gray-800",placeholder:"Name",type:"text"}),(0,S.jsx)("input",{id:"in-email","data-blobity-radius":"8",name:"email",className:"w-full m-2 self-center p-2 rounded-md bg-gray-800",placeholder:"Email*",type:"email"}),(0,S.jsx)("input",{id:"in-msg","data-blobity-radius":"8",name:"anotherInput",spellCheck:"false",autoComplete:"off",className:"resize-none w-full m-2 self-center p-2 rounded-md bg-gray-800",placeholder:"Message*",type:"text"}),(0,S.jsx)("span",{className:"flex w-full pr-4 phone_landscape:pr-0 md:pr-0",required:!0,children:(0,S.jsx)(w,{onErrored:t,onExpired:t,onChange:function(){e.setVerified(!0),document.getElementById("open").classList.remove("hidden"),document.getElementById("dis").classList.add("hidden")},className:"w-fit self-center",sitekey:"6Ldz1dgoAAAAAO85RNQ5O3wFp_ayc3W4HxWYWmbW",theme:"dark"})}),(0,S.jsx)("button",{id:"open","data-blobity-radius":"8",className:"hidden cursor-none m-2 w-fit self-end p-1 border-2 border-transparent focus:border-indigo-900 bg-indigo-700 rounded-md",type:"submit",children:"Submit"}),(0,S.jsx)("button",{onClick:r,disabled:!0,id:"dis","data-blobity-radius":"8",className:"cursor-none m-2 w-fit self-end p-1 border-2 border-transparent focus:border-indigo-500 bg-indigo-400 rounded-md",type:"button",children:"Submit"}),(0,S.jsx)("input",{type:"hidden",name:"_gotcha"})]})]})})]})})}},2110:function(e,t,r){"use strict";var n=r(8309),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var d=Object.defineProperty,p=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=f(r);o&&o!==m&&e(t,o,n)}var a=p(r);l&&(a=a.concat(l(r)));for(var s=c(t),h=c(r),y=0;y<a.length;++y){var b=a[y];if(!i[b]&&(!n||!n[b])&&(!h||!h[b])&&(!s||!s[b])){var g=u(r,b);try{d(t,b,g)}catch(v){}}}}return t}},746:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case p:case l:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case d:case u:case y:case h:case c:return e;default:return t}}case o:return t}}}function S(e){return w(e)===l}t.AsyncMode=p,t.ConcurrentMode=l,t.ContextConsumer=d,t.ContextProvider=c,t.Element=n,t.ForwardRef=u,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return S(e)||w(e)===p},t.isConcurrentMode=S,t.isContextConsumer=function(e){return w(e)===d},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===s||e===a||e===f||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===d||e.$$typeof===u||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x||e.$$typeof===b)},t.typeOf=w},8309:function(e,t,r){"use strict";e.exports=r(746)},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=12.7c35d997.chunk.js.map