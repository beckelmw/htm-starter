var Gt=Object.create;var _e=Object.defineProperty;var Jt=Object.getOwnPropertyDescriptor;var Vt=Object.getOwnPropertyNames;var Yt=Object.getPrototypeOf,Qt=Object.prototype.hasOwnProperty;var k=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),G=(t,e)=>{for(var r in e)_e(t,r,{get:e[r],enumerable:!0})},Zt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Vt(e))!Qt.call(t,i)&&i!==r&&_e(t,i,{get:()=>e[i],enumerable:!(n=Jt(e,i))||n.enumerable});return t};var jt=(t,e,r)=>(r=t!=null?Gt(Yt(t)):{},Zt(e||!t||!t.__esModule?_e(r,"default",{value:t,enumerable:!0}):r,t));var Re=k((Fr,Pe)=>{var Kt=async t=>{let e=t.headers.get("content-type");t.content=void 0;try{e&&e.includes("application/json")&&(t.content=await t.json())}catch{}};Pe.exports={withContent:Kt}});var Te=k((Or,Ee)=>{var Xt=t=>{t.cookies={};try{t.cookies=(t.headers.get("Cookie")||"").split(/;\s*/).map(e=>e.split("=")).reduce((e,[r,n])=>(e[r]=n,e),{})}catch{}};Ee.exports={withCookies:Xt}});var He=k((Dr,Ae)=>{var It=t=>{for(let e in t.params||{})t[e]=t.params[e]};Ae.exports={withParams:It}});var Fe=k((Mr,Ue)=>{Ue.exports={...Re(),...Te(),...He()}});var De=k((Nr,Oe)=>{var zt=(t="text/plain; charset=utf-8")=>(e,r={})=>{let{headers:n={},...i}=r;return typeof e=="object"?new Response(JSON.stringify(e),{headers:{"Content-Type":t,...n},...i}):new Response(e,r)};Oe.exports={createResponseType:zt}});var J=k((qr,Me)=>{var{createResponseType:er}=De(),tr=er("application/json; charset=utf-8");Me.exports={json:tr}});var ce=k((Lr,Ne)=>{var{json:rr}=J(),or=(t=500,e="Internal Server Error.")=>rr({...typeof e=="object"?e:{status:t,error:e}},{status:t});Ne.exports={error:or}});var Le=k((Br,qe)=>{var{error:nr}=ce(),sr=(t="Not found.")=>nr(404,t);qe.exports={missing:sr}});var We=k((Wr,Be)=>{var{json:ir}=J(),ar=(t,e)=>e?ir({...typeof e=="object"?e:{status:t,message:e}},{status:t}):new Response(null,{status:t});Be.exports={status:ar}});var Je=k((Gr,Ge)=>{var lr=(t,e={})=>new Response(t,e);Ge.exports={text:lr}});var pe=k((Jr,Ve)=>{Ve.exports={...ce(),...J(),...Le(),...We(),...Je()}});var Qe=k((Vr,Ye)=>{Ye.exports={Router:function({base:t="",routes:e=[]}={}){return{__proto__:new Proxy({},{get:(r,n,i)=>(o,...a)=>e.push([n.toUpperCase(),RegExp(`^${(t+o).replace(/(\/?)\*/g,"($1.*)?").replace(/\/$/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/]+)$2$3").replace(/\.(?=[\w(])/,"\\.").replace(/\)\.\?\(([^\[]+)\[\^/g,"?)\\.?($1(?<=\\.)[^\\.")}/*$`),a])&&i}),routes:e,async handle(r,...n){let i,o,a=new URL(r.url);r.query=Object.fromEntries(a.searchParams);for(var[u,p,d]of e)if((u===r.method||u==="ALL")&&(o=a.pathname.match(p))){r.params=o.groups;for(var s of d)if((i=await s(r.proxy||r,...n))!==void 0)return i}}}}}});var je=k((Yr,Ze)=>{"use strict";var{Router:_r}=Qe(),{error:cr}=pe(),pr=(t={})=>{let{stack:e=!1}=t;return new Proxy(_r(t),{get:(r,n)=>(...i)=>n==="handle"?r[n](...i).catch(o=>cr(o.status||500,{status:o.status||500,error:o.message,stack:e&&o.stack||void 0})):r[n](...i)})};Ze.exports={ThrowableRouter:pr}});var Xe=k((Qr,Ke)=>{Ke.exports={...je()}});var ze=k((Zr,Ie)=>{var ue=class extends Error{constructor(e=500,r="Internal Error."){super(r),this.name="StatusError",this.status=e}};Ie.exports={StatusError:ue}});var tt=k((jr,et)=>{et.exports={...ze()}});var ot=k((Kr,rt)=>{rt.exports={...Fe(),...pe(),...Xe(),...tt()}});var X=jt(ot(),1);var st=function(t,e,r,n){var i;e[0]=0;for(var o=1;o<e.length;o++){var a=e[o++],u=e[o]?(e[0]|=a?1:2,r[e[o++]]):e[++o];a===3?n[0]=u:a===4?n[1]=Object.assign(n[1]||{},u):a===5?(n[1]=n[1]||{})[e[++o]]=u:a===6?n[1][e[++o]]+=u+"":a?(i=t.apply(u,st(t,u,r,["",null])),n.push(i),u[0]?e[0]|=2:(e[o-2]=0,e[o]=i)):n.push(u)}return n},nt=new Map;function it(t){var e=nt.get(this);return e||(e=new Map,nt.set(this,e)),(e=st(this,e.get(t)||(e.set(t,e=function(r){for(var n,i,o=1,a="",u="",p=[0],d=function(l){o===1&&(l||(a=a.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?p.push(0,l,a):o===3&&(l||a)?(p.push(3,l,a),o=2):o===2&&a==="..."&&l?p.push(4,l,0):o===2&&a&&!l?p.push(5,0,!0,a):o>=5&&((a||!l&&o===5)&&(p.push(o,0,a,i),o=6),l&&(p.push(o,l,0,i),o=6)),a=""},s=0;s<r.length;s++){s&&(o===1&&d(),d(s));for(var f=0;f<r[s].length;f++)n=r[s][f],o===1?n==="<"?(d(),p=[p],o=3):a+=n:o===4?a==="--"&&n===">"?(o=1,a=""):a=n+a[0]:u?n===u?u="":a+=n:n==='"'||n==="'"?u=n:n===">"?(d(),o=1):o&&(n==="="?(o=5,i=a,a=""):n==="/"&&(o<5||r[s][f+1]===">")?(d(),o===3&&(p=p[0]),o=p,(p=p[0]).push(2,0,o),o=0):n===" "||n==="	"||n===`
`||n==="\r"?(d(),o=2):a+=n),o===3&&a==="!--"&&(o=4,p=p[0])}return d(),p}(t)),e),arguments,[])).length>1?e:e[0]}var fe,m,ut,ur,M,ft,at,fr,dt={},ht=[],dr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function H(t,e){for(var r in e)t[r]=e[r];return t}function mt(t){var e=t.parentNode;e&&e.removeChild(t)}function vt(t,e,r){var n,i,o,a={};for(o in e)o=="key"?n=e[o]:o=="ref"?i=e[o]:a[o]=e[o];if(arguments.length>2&&(a.children=arguments.length>3?fe.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)a[o]===void 0&&(a[o]=t.defaultProps[o]);return V(t,a,n,i,null)}function V(t,e,r,n,i){var o={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++ut};return i==null&&m.vnode!=null&&m.vnode(o),o}function N(t){return t.children}function Y(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__.__k.indexOf(t)+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?D(t):null}function yt(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return yt(t)}}function lt(t){(!t.__d&&(t.__d=!0)&&M.push(t)&&!Q.__r++||at!==m.debounceRendering)&&((at=m.debounceRendering)||ft)(Q)}function Q(){for(var t;Q.__r=M.length;)t=M.sort(function(e,r){return e.__v.__b-r.__v.__b}),M=[],t.some(function(e){var r,n,i,o,a,u;e.__d&&(a=(o=(r=e).__v).__e,(u=r.__P)&&(n=[],(i=H({},o)).__v=o.__v+1,kt(u,o,i,r.__n,u.ownerSVGElement!==void 0,o.__h!=null?[a]:null,n,a??D(o),o.__h),mr(n,o),o.__e!=a&&yt(o)))})}function gt(t,e,r,n,i,o,a,u,p,d){var s,f,l,c,h,P,_,y=n&&n.__k||ht,w=y.length;for(r.__k=[],s=0;s<e.length;s++)if((c=r.__k[s]=(c=e[s])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?V(null,c,null,null,c):Array.isArray(c)?V(N,{children:c},null,null,null):c.__b>0?V(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=r,c.__b=r.__b+1,(l=y[s])===null||l&&c.key==l.key&&c.type===l.type)y[s]=void 0;else for(f=0;f<w;f++){if((l=y[f])&&c.key==l.key&&c.type===l.type){y[f]=void 0;break}l=null}kt(t,c,l=l||dt,i,o,a,u,p,d),h=c.__e,(f=c.ref)&&l.ref!=f&&(_||(_=[]),l.ref&&_.push(l.ref,null,c),_.push(f,c.__c||h,c)),h!=null?(P==null&&(P=h),typeof c.type=="function"&&c.__k===l.__k?c.__d=p=xt(c,p,t):p=bt(t,c,l,y,h,p),typeof r.type=="function"&&(r.__d=p)):p&&l.__e==p&&p.parentNode!=t&&(p=D(l))}for(r.__e=P,s=w;s--;)y[s]!=null&&(typeof r.type=="function"&&y[s].__e!=null&&y[s].__e==r.__d&&(r.__d=D(n,s+1)),Ct(y[s],y[s]));if(_)for(s=0;s<_.length;s++)wt(_[s],_[++s],_[++s])}function xt(t,e,r){for(var n,i=t.__k,o=0;i&&o<i.length;o++)(n=i[o])&&(n.__=t,e=typeof n.type=="function"?xt(n,e,r):bt(r,n,n,i,n.__e,e));return e}function bt(t,e,r,n,i,o){var a,u,p;if(e.__d!==void 0)a=e.__d,e.__d=void 0;else if(r==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(i),a=null;else{for(u=o,p=0;(u=u.nextSibling)&&p<n.length;p+=2)if(u==i)break e;t.insertBefore(i,o),a=o}return a!==void 0?a:i.nextSibling}function hr(t,e,r,n,i){var o;for(o in r)o==="children"||o==="key"||o in e||Z(t,o,null,r[o],n);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===e[o]||Z(t,o,e[o],r[o],n)}function _t(t,e,r){e[0]==="-"?t.setProperty(e,r):t[e]=r==null?"":typeof r!="number"||dr.test(e)?r:r+"px"}function Z(t,e,r,n,i){var o;e:if(e==="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||_t(t.style,e,"");if(r)for(e in r)n&&r[e]===n[e]||_t(t.style,e,r[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=r,r?n||t.addEventListener(e,o?pt:ct,o):t.removeEventListener(e,o?pt:ct,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,r):t.removeAttribute(e))}}function ct(t){this.l[t.type+!1](m.event?m.event(t):t)}function pt(t){this.l[t.type+!0](m.event?m.event(t):t)}function kt(t,e,r,n,i,o,a,u,p){var d,s,f,l,c,h,P,_,y,w,F,C=e.type;if(e.constructor!==void 0)return null;r.__h!=null&&(p=r.__h,u=e.__e=r.__e,e.__h=null,o=[u]),(d=m.__b)&&d(e);try{e:if(typeof C=="function"){if(_=e.props,y=(d=C.contextType)&&n[d.__c],w=d?y?y.props.value:d.__:n,r.__c?P=(s=e.__c=r.__c).__=s.__E:("prototype"in C&&C.prototype.render?e.__c=s=new C(_,w):(e.__c=s=new Y(_,w),s.constructor=C,s.render=yr),y&&y.sub(s),s.props=_,s.state||(s.state={}),s.context=w,s.__n=n,f=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),C.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=H({},s.__s)),H(s.__s,C.getDerivedStateFromProps(_,s.__s))),l=s.props,c=s.state,f)C.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(C.getDerivedStateFromProps==null&&_!==l&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(_,w),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(_,s.__s,w)===!1||e.__v===r.__v){s.props=_,s.state=s.__s,e.__v!==r.__v&&(s.__d=!1),s.__v=e,e.__e=r.__e,e.__k=r.__k,e.__k.forEach(function(R){R&&(R.__=e)}),s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(_,s.__s,w),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(l,c,h)})}s.context=w,s.props=_,s.state=s.__s,(d=m.__r)&&d(e),s.__d=!1,s.__v=e,s.__P=t,d=s.render(s.props,s.state,s.context),s.state=s.__s,s.getChildContext!=null&&(n=H(H({},n),s.getChildContext())),f||s.getSnapshotBeforeUpdate==null||(h=s.getSnapshotBeforeUpdate(l,c)),F=d!=null&&d.type===N&&d.key==null?d.props.children:d,gt(t,Array.isArray(F)?F:[F],e,r,n,i,o,a,u,p),s.base=e.__e,e.__h=null,s.__h.length&&a.push(s),P&&(s.__E=s.__=null),s.__e=!1}else o==null&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=vr(r.__e,e,r,n,i,o,a,p);(d=m.diffed)&&d(e)}catch(R){e.__v=null,(p||o!=null)&&(e.__e=u,e.__h=!!p,o[o.indexOf(u)]=null),m.__e(R,e,r)}}function mr(t,e){m.__c&&m.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(n){n.call(r)})}catch(n){m.__e(n,r.__v)}})}function vr(t,e,r,n,i,o,a,u){var p,d,s,f=r.props,l=e.props,c=e.type,h=0;if(c==="svg"&&(i=!0),o!=null){for(;h<o.length;h++)if((p=o[h])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){t=p,o[h]=null;break}}if(t==null){if(c===null)return document.createTextNode(l);t=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,l.is&&l),o=null,u=!1}if(c===null)f===l||u&&t.data===l||(t.data=l);else{if(o=o&&fe.call(t.childNodes),d=(f=r.props||dt).dangerouslySetInnerHTML,s=l.dangerouslySetInnerHTML,!u){if(o!=null)for(f={},h=0;h<t.attributes.length;h++)f[t.attributes[h].name]=t.attributes[h].value;(s||d)&&(s&&(d&&s.__html==d.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(hr(t,l,f,i,u),s)e.__k=[];else if(h=e.props.children,gt(t,Array.isArray(h)?h:[h],e,r,n,i&&c!=="foreignObject",o,a,o?o[0]:r.__k&&D(r,0),u),o!=null)for(h=o.length;h--;)o[h]!=null&&mt(o[h]);u||("value"in l&&(h=l.value)!==void 0&&(h!==t.value||c==="progress"&&!h||c==="option"&&h!==f.value)&&Z(t,"value",h,f.value,!1),"checked"in l&&(h=l.checked)!==void 0&&h!==t.checked&&Z(t,"checked",h,f.checked,!1))}return t}function wt(t,e,r){try{typeof t=="function"?t(e):t.current=e}catch(n){m.__e(n,r)}}function Ct(t,e,r){var n,i;if(m.unmount&&m.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||wt(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){m.__e(o,e)}n.base=n.__P=null}if(n=t.__k)for(i=0;i<n.length;i++)n[i]&&Ct(n[i],e,typeof t.type!="function");r||t.__e==null||mt(t.__e),t.__e=t.__d=void 0}function yr(t,e,r){return this.constructor(t,r)}fe=ht.slice,m={__e:function(t,e,r,n){for(var i,o,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,n||{}),a=i.__d),a)return i.__E=i}catch(u){t=u}throw t}},ut=0,ur=function(t){return t!=null&&t.constructor===void 0},Y.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof t=="function"&&(t=t(H({},r),this.props)),t&&H(r,t),t!=null&&this.__v&&(e&&this.__h.push(e),lt(this))},Y.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),lt(this))},Y.prototype.render=N,M=[],ft=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Q.__r=0,fr=0;var gr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,xr=/[&<>"]/;function St(t){var e=String(t);return xr.test(e)?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):e}var $t=function(t,e){return String(t).replace(/(\n+)/g,"$1"+(e||"	"))},Pt=function(t,e,r){return String(t).length>(e||40)||!r&&String(t).indexOf(`
`)!==-1||String(t).indexOf("<")!==-1},Rt={};function br(t){var e="";for(var r in t){var n=t[r];n!=null&&n!==""&&(e&&(e+=" "),e+=r[0]=="-"?r:Rt[r]||(Rt[r]=r.replace(/([A-Z])/g,"-$1").toLowerCase()),e+=": ",e+=n,typeof n=="number"&&gr.test(r)===!1&&(e+="px"),e+=";")}return e||void 0}function j(t,e){for(var r in e)t[r]=e[r];return t}function he(t,e){return Array.isArray(e)?e.reduce(he,t):e!=null&&e!==!1&&t.push(e),t}var kr={shallow:!0},de=[],wr=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,Et=/[\s\n\\/='"\0<>]/;function Tt(){this.__d=!0}U.render=U;var Cr=function(t,e){return U(t,e,kr)},At=[];function U(t,e,r){e=e||{},r=r||{};var n=m.__s;m.__s=!0;var i=q(t,e,r);return m.__c&&m.__c(t,At),At.length=0,m.__s=n,i}function q(t,e,r,n,i,o){if(t==null||typeof t=="boolean")return"";if(typeof t!="object")return St(t);var a=r.pretty,u=a&&typeof a=="string"?a:"	";if(Array.isArray(t)){for(var p="",d=0;d<t.length;d++)a&&d>0&&(p+=`
`),p+=q(t[d],e,r,n,i,o);return p}var s,f=t.type,l=t.props,c=!1;if(typeof f=="function"){if(c=!0,!r.shallow||!n&&r.renderRootComponent!==!1){if(f===N){var h=[];return he(h,t.props.children),q(h,e,r,r.shallowHighOrder!==!1,i,o)}var P,_=t.__c={__v:t,context:e,props:t.props,setState:Tt,forceUpdate:Tt,__d:!0,__h:[]};m.__b&&m.__b(t);var y=m.__r;if(f.prototype&&typeof f.prototype.render=="function"){var w=f.contextType,F=w&&e[w.__c],C=w!=null?F?F.props.value:w.__:e;(_=t.__c=new f(l,C)).__v=t,_._dirty=_.__d=!0,_.props=l,_.state==null&&(_.state={}),_._nextState==null&&_.__s==null&&(_._nextState=_.__s=_.state),_.context=C,f.getDerivedStateFromProps?_.state=j(j({},_.state),f.getDerivedStateFromProps(_.props,_.state)):_.componentWillMount&&(_.componentWillMount(),_.state=_._nextState!==_.state?_._nextState:_.__s!==_.state?_.__s:_.state),y&&y(t),P=_.render(_.props,_.state,_.context)}else for(var R=f.contextType,Ce=R&&e[R.__c],Lt=R!=null?Ce?Ce.props.value:R.__:e,Bt=0;_.__d&&Bt++<25;)_.__d=!1,y&&y(t),P=f.call(t.__c,l,Lt);return _.getChildContext&&(e=j(j({},e),_.getChildContext())),m.diffed&&m.diffed(t),q(P,e,r,r.shallowHighOrder!==!1,i,o)}f=(s=f).displayName||s!==Function&&s.name||function(ie){var ae=(Function.prototype.toString.call(ie).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!ae){for(var W=-1,le=de.length;le--;)if(de[le]===ie){W=le;break}W<0&&(W=de.push(ie)-1),ae="UnnamedComponent"+W}return ae}(s)}var L,A,g="<"+f;if(l){var I=Object.keys(l);r&&r.sortAttributes===!0&&I.sort();for(var z=0;z<I.length;z++){var v=I[z],x=l[v];if(v!=="children"){if(!Et.test(v)&&(r&&r.allAttributes||v!=="key"&&v!=="ref"&&v!=="__self"&&v!=="__source")){if(v==="defaultValue")v="value";else if(v==="className"){if(l.class!==void 0)continue;v="class"}else i&&v.match(/^xlink:?./)&&(v=v.toLowerCase().replace(/^xlink:?/,"xlink:"));if(v==="htmlFor"){if(l.for)continue;v="for"}v==="style"&&x&&typeof x=="object"&&(x=br(x)),v[0]==="a"&&v[1]==="r"&&typeof x=="boolean"&&(x=String(x));var ee=r.attributeHook&&r.attributeHook(v,x,e,r,c);if(ee||ee==="")g+=ee;else if(v==="dangerouslySetInnerHTML")A=x&&x.__html;else if(f==="textarea"&&v==="value")L=x;else if((x||x===0||x==="")&&typeof x!="function"){if(!(x!==!0&&x!==""||(x=v,r&&r.xml))){g+=" "+v;continue}if(v==="value"){if(f==="select"){o=x;continue}f==="option"&&o==x&&l.selected===void 0&&(g+=" selected")}g+=" "+v+'="'+St(x)+'"'}}}else L=x}}if(a){var te=g.replace(/\n\s*/," ");te===g||~te.indexOf(`
`)?a&&~g.indexOf(`
`)&&(g+=`
`):g=te}if(g+=">",Et.test(f))throw new Error(f+" is not a valid HTML tag name in "+g);var B,Wt=wr.test(f)||r.voidElements&&r.voidElements.test(f),E=[];if(A)a&&Pt(A)&&(A=`
`+u+$t(A,u)),g+=A;else if(L!=null&&he(B=[],L).length){for(var re=a&&~g.indexOf(`
`),Se=!1,oe=0;oe<B.length;oe++){var ne=B[oe];if(ne!=null&&ne!==!1){var O=q(ne,e,r,!0,f==="svg"||f!=="foreignObject"&&i,o);if(a&&!re&&Pt(O)&&(re=!0),O)if(a){var $e=O.length>0&&O[0]!="<";Se&&$e?E[E.length-1]+=O:E.push(O),Se=$e}else E.push(O)}}if(a&&re)for(var se=E.length;se--;)E[se]=`
`+u+$t(E[se],u)}if(E.length||A)g+=E.join("");else if(r&&r.xml)return g.substring(0,g.length-1)+" />";return!Wt||B||A?(a&&~g.indexOf(`
`)&&(g+=`
`),g+="</"+f+">"):g=g.replace(/>$/," />"),g}U.shallowRender=Cr;var Ht={"strict-transport-security":"max-age=63072000; includeSubdomains; preload","content-security-policy":"default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'","x-content-type-options":"nosniff","x-frame-options":"DENY","x-xss-protection":"1; mode=block"};var S=()=>b`
    <div class="site-header bg-blue-500">
      <nav class="flex pl-8 py-4 gap-4">
        <a href="/">Home</a> <a href="/posts">Posts</a>
      </nav>
    </div>
  `;var T=({children:t})=>b` <main class="my-8">${t}</main> `;var $=()=>b` <footer>The footer</footer> `;function me(){return b`
    <div class="wrapper">
      <${S} />
      <div>
        <h1>Page not found</h1>
      </div>
      <${$} />
    </div>
  `}var K=({head:t,content:e})=>`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bill Beckelman</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href="/site.css" />
        ${t||""}
      </head>
      <body>
        ${e}
      </body>
    </html>
  `;var b=it.bind(vt),ve=t=>typeof t=="function";function Ut({request:t,env:e}){return async(r,n,i)=>{let o={},a={"content-type":"text/html",...Ht},u="";if(ve(n.api)&&(o=await n.api({request:t,env:e,params:i}),o.errorCode)){let s=U(me());return new Response(K({content:s}),{status:o.errorCode,headers:a})}ve(n.headers)&&(a={...a,...n.headers({request:t,env:e,props:o})}),ve(n.head)&&(u=U(n.head({request:t,env:e,props:o})));let p=U(n.default({request:t,env:e,props:o})),d=r({content:p,head:u});return new Response(d,{headers:a})}}function ye(){return new Response(`User-agent: *
Disallow: /`,{headers:{"content-type":"text/plain"}})}var ge={};G(ge,{default:()=>Ft,head:()=>Pr,headers:()=>$r});function $r(){return{"x-whatever":"12345"}}function Pr(){return b` <meta name="author" content="Bill Beckelman" /> `}function Ft(){return b`
    <div class="wrapper">
      <${S} />
      <${T}>
        <h1>About</h1>
      <//>
      <${$} />
    </div>
  `}var xe={};G(xe,{api:()=>Tr,default:()=>Dt,head:()=>Er,headers:()=>Rr});var Ot=({posts:t})=>b`<ul class="list-disc list-inside">
    ${t.map(e=>b`<li>
        <a href="/post/${e.id}">${e.title}</a>
      </li>`)}
  </ul>`;function Rr(){return{"x-whatever":"12345"}}function Er(){return b` <meta name="author" content="Bill Beckelman" /> `}async function Tr(){return{posts:(await(await fetch("https://jsonplaceholder.typicode.com/posts")).json()).slice(0,10)}}function Dt({props:t}){let{posts:e}=t;return b`
    <div class="wrapper">
      <${S} />
      <${T}>
        <h1>Latest Posts</h1>
        <${Ot} posts=${e} />
      <//>
      <${$} />
    </div>
  `}var be={};G(be,{api:()=>Ar,default:()=>Mt});async function Ar({env:t}){await t.SITE.put("test.json",JSON.stringify({test:"1"}));let e=await t.SITE.get("test.json","json");return{posts:await(await fetch("https://jsonplaceholder.typicode.com/posts")).json(),site:e}}function Mt({props:t}){let{posts:e}=t;return b`
    <div class="wrapper">
      <${S} />
      <${T}>
        <h1>Posts</h1>
        <ul class="list-disc list-inside">
          ${e.map(r=>b`<li>
              <a href="/post/${r.id}">${r.title}</a>
            </li>`)}
        </ul>
      <//>
      <${$} />
    </div>
  `}var ke={};G(ke,{api:()=>Hr,default:()=>Nt});async function Hr({params:t}){let{id:e}=t,r=await fetch(`https://jsonplaceholder.typicode.com/posts/${e}`);return r.ok?{post:await r.json()}:{errorCode:r.status}}function Nt({props:t}){let{post:e}=t;return b`
    <div class="wrapper">
      <${S} />
      <${T}>
        <h1>${e.title}</h1>
        <div>${e.body}</div>
      <//>
      <${$} />
    </div>
  `}var qt=[{path:"/about",code:ge},{path:"/",code:xe},{path:"/posts",code:be},{path:"/post/:id",code:ke}];function we(t){let{request:e,env:r}=t,n=Ut(t),i=(0,X.ThrowableRouter)();for(let o of qt)i.get(o.path,X.withParams,({params:a})=>n(K,o.code,a));return i.all("/robots.txt",ye).get("*",()=>r.ASSETS.fetch(e)),i}var Bo={async fetch(t,e){return we({request:t,env:e}).handle(t)}};export{Bo as default};
