(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{7576:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[[...slug]]",function(){return n(3641)}])},9255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3082:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(8301).Z,l=n(4123).Z,r=o(n(9953)),u=n(1486),a=n(5166),c=n(6938),i=n(2490),f=n(7174),s=n(9255),d=n(1185);let p={};function v(e,t,n,o){if(!e||!u.isLocalURL(t))return;Promise.resolve(e.prefetch(t,n,o)).catch(e=>{});let l=o&&void 0!==o.locale?o.locale:e&&e.locale;p[t+"%"+n+(l?"%"+l:"")]=!0}let y=r.default.forwardRef(function(e,t){let n,o;let{href:y,as:m,children:C,prefetch:h,passHref:b,replace:_,shallow:x,scroll:w,locale:g,onClick:M,onMouseEnter:j,onTouchStart:E,legacyBehavior:L=!0!==Boolean(!0)}=e,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=C,L&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let k=!1!==h,R=r.default.useContext(c.RouterContext),I=r.default.useContext(i.AppRouterContext);I&&(R=I);let{href:P,as:T}=r.default.useMemo(()=>{let[e,t]=u.resolveHref(R,y,!0);return{href:e,as:m?u.resolveHref(R,m):t||e}},[R,y,m]),S=r.default.useRef(P),D=r.default.useRef(T);L&&(o=r.default.Children.only(n));let H=L?o&&"object"==typeof o&&o.ref:t,[N,U,X]=f.useIntersection({rootMargin:"200px"}),B=r.default.useCallback(e=>{(D.current!==T||S.current!==P)&&(X(),D.current=T,S.current=P),N(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[T,H,P,X,N]);r.default.useEffect(()=>{let e=U&&k&&u.isLocalURL(P),t=void 0!==g?g:R&&R.locale,n=p[P+"%"+T+(t?"%"+t:"")];e&&!n&&v(R,P,T,{locale:t})},[T,P,U,g,k,R]);let q={ref:B,onClick(e){L||"function"!=typeof M||M(e),L&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,o,l,a,c,i,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(n)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[l?"replace":"push"](n,o,{shallow:a,locale:i,scroll:c}):t[l?"replace":"push"](o||n,{forceOptimisticNavigation:!s})};f?r.default.startTransition(v):v()}(e,R,P,T,_,x,w,g,Boolean(I),k)},onMouseEnter(e){L||"function"!=typeof j||j(e),L&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!k&&I)&&u.isLocalURL(P)&&v(R,P,T,{priority:!0})},onTouchStart(e){L||"function"!=typeof E||E(e),L&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!k&&I)&&u.isLocalURL(P)&&v(R,P,T,{priority:!0})}};if(!L||b||"a"===o.type&&!("href"in o.props)){let A=void 0!==g?g:R&&R.locale,K=R&&R.isLocaleDomain&&s.getDomainLocale(T,A,R.locales,R.domainLocales);q.href=K||d.addBasePath(a.addLocale(T,A,R&&R.defaultLocale))}return L?r.default.cloneElement(o,q):r.default.createElement("a",Object.assign({},O,q),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!r,[f,s]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(r){if(!i&&!f&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:l,elements:r}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let l=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:r,elements:l},a.push(n),u.set(n,t),t}(n);return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),u.delete(o);let t=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){let o=l.requestIdleCallback(()=>s(!0));return()=>l.cancelIdleCallback(o)}},[d,i,n,t,f]);let v=o.useCallback(()=>{s(!1)},[]);return[p,f,v]};var o=n(9953),l=n(40);let r="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(8301).Z)(n(9953));let l=o.default.createContext(null);t.AppRouterContext=l;let r=o.default.createContext(null);t.LayoutRouterContext=r;let u=o.default.createContext(null);t.GlobalLayoutRouterContext=u;let a=o.default.createContext(null);t.TemplateContext=a},3641:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return b}});var o={};n.r(o),n.d(o,{MDXContext:function(){return s},MDXProvider:function(){return y},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var l=n(1874),r=n(8535),u=n.n(r),a=n(8069),c=n.n(a),i=n(9953),f=n(9956);let s=i.createContext({});function d(e){return function(t){let n=p(t.components);return i.createElement(e,{...t,allComponents:n})}}function p(e){let t=i.useContext(s);return i.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let v={};function y({components:e,children:t,disableParentContext:n}){let o=p(e);return n&&(o=e||v),i.createElement(s.Provider,{value:o},t)}function m({compiledSource:e,frontmatter:t,scope:n,components:l={},lazy:r}){let[u,a]=(0,i.useState)(!r||"undefined"==typeof window);(0,i.useEffect)(()=>{if(r){let e=window.requestIdleCallback(()=>{a(!0)});return()=>window.cancelIdleCallback(e)}},[]);let c=(0,i.useMemo)(()=>{let l=Object.assign({opts:{...o,...f.c}},{frontmatter:t},n),r=Object.keys(l),u=Object.values(l),a=Reflect.construct(Function,r.concat(`${e}`));return a.apply(a,u).default},[n,e]);if(!u)return i.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let s=i.createElement(y,{components:l},i.createElement(c,null));return r?i.createElement("div",null,s):s}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var C=n(8341),h=!0;function b(e){let{source:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:"Build Your Own..."})}),(0,l.jsxs)("main",{children:[(0,l.jsx)("nav",{children:(0,l.jsx)(c(),{href:"/",children:"Home"})}),(0,l.jsx)(m,{...t,components:{CH:C.CH}})]})]})}},8535:function(e,t,n){e.exports=n(3219)},8069:function(e,t,n){e.exports=n(3082)},9956:function(e,t,n){let o=n(1874);e.exports.c=o}},function(e){e.O(0,[268,774,888,179],function(){return e(e.s=7576)}),_N_E=e.O()}]);