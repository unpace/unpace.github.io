/* empty css                       */function B(){}function de(t,e){for(const n in e)t[n]=e[n];return t}function qt(t){return t()}function Dt(){return Object.create(null)}function ht(t){t.forEach(qt)}function Xt(t){return typeof t=="function"}function Yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function me(t){return Object.keys(t).length===0}function he(t,...e){if(t==null){for(const i of e)i(void 0);return B}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function wt(t,e,n){t.$$.on_destroy.push(he(e,n))}function pe(t,e,n,i){if(t){const o=Ut(t,e,n,i);return t[0](o)}}function Ut(t,e,n,i){return t[1]&&i?de(n.ctx.slice(),t[1](i(e))):n.ctx}function ge(t,e,n,i){if(t[2]&&i){const o=t[2](i(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const c=[],r=Math.max(e.dirty.length,o.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|o[l];return c}return e.dirty|o}return e.dirty}function ye(t,e,n,i,o,c){if(o){const r=Ut(e,n,i,c);t.p(r,o)}}function we(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function xt(t,e,n){return t.set(n),e}let pt=!1;function xe(){pt=!0}function _e(){pt=!1}function be(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function ve(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let f=0;f<e.length;f++){const a=e[f];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const f=e[s].claim_order,a=(o>0&&e[n[o]].claim_order<=f?o+1:be(1,o,h=>e[n[h]].claim_order,f))-1;i[s]=n[a]+1;const u=a+1;n[u]=s,o=Math.max(u,o)}const c=[],r=[];let l=e.length-1;for(let s=n[o]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);l>=s;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((s,f)=>s.claim_order-f.claim_order);for(let s=0,f=0;s<r.length;s++){for(;f<c.length&&r[s].claim_order>=c[f].claim_order;)f++;const a=f<c.length?c[f]:null;t.insertBefore(r[s],a)}}function Kt(t,e){if(pt){for(ve(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _t(t,e,n){pt&&!n?Kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t){return document.createElement(t)}function St(t){return document.createTextNode(t)}function Ae(){return St(" ")}function Ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ot(t){return Array.from(t.childNodes)}function Ee(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Gt(t,e,n,i,o=!1){Ee(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,o||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Oe(t,e,n,i){return Gt(t,o=>o.nodeName===e,o=>{const c=[];for(let r=0;r<o.attributes.length;r++){const l=o.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>o.removeAttribute(r))},()=>i(e))}function Bt(t,e,n){return Oe(t,e,n,Et)}function Jt(t,e){return Gt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>St(e),!0)}function Re(t){return Jt(t," ")}function Ce(t,e){e=""+e,t.data!==e&&(t.data=e)}function rt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let tt;function Z(t){tt=t}function Se(){if(!tt)throw new Error("Function called outside component initialization");return tt}function Te(t){Se().$$.on_mount.push(t)}const q=[],lt=[];let X=[];const $t=[],Le=Promise.resolve();let Rt=!1;function Pe(){Rt||(Rt=!0,Le.then(Qt))}function Ct(t){X.push(t)}const bt=new Set;let H=0;function Qt(){if(H!==0)return;const t=tt;do{try{for(;H<q.length;){const e=q[H];H++,Z(e),ke(e.$$)}}catch(e){throw q.length=0,H=0,e}for(Z(null),q.length=0,H=0;lt.length;)lt.pop()();for(let e=0;e<X.length;e+=1){const n=X[e];bt.has(n)||(bt.add(n),n())}X.length=0}while(q.length);for(;$t.length;)$t.pop()();Rt=!1,bt.clear(),Z(t)}function ke(t){if(t.fragment!==null){t.update(),ht(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ct)}}function Ne(t){const e=[],n=[];X.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),X=e}const ct=new Set;let De;function Zt(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function Fe(t,e,n,i){if(t&&t.o){if(ct.has(t))return;ct.add(t),De.c.push(()=>{ct.delete(t)}),t.o(e)}}function Be(t,e,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),Ct(()=>{const c=t.$$.on_mount.map(qt).filter(Xt);t.$$.on_destroy?t.$$.on_destroy.push(...c):ht(c),t.$$.on_mount=[]}),o.forEach(Ct)}function $e(t,e){const n=t.$$;n.fragment!==null&&(Ne(n.after_update),ht(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Me(t,e){t.$$.dirty[0]===-1&&(q.push(t),Pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ve(t,e,n,i,o,c,r=null,l=[-1]){const s=tt;Z(t);const f=t.$$={fragment:null,ctx:[],props:c,update:B,not_equal:o,bound:Dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Dt(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};r&&r(f.root);let a=!1;if(f.ctx=n?n(t,e.props||{},(u,h,...m)=>{const p=m.length?m[0]:h;return f.ctx&&o(f.ctx[u],f.ctx[u]=p)&&(!f.skip_bound&&f.bound[u]&&f.bound[u](p),a&&Me(t,u)),h}):[],f.update(),a=!0,ht(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){xe();const u=Ot(e.target);f.fragment&&f.fragment.l(u),u.forEach(j)}else f.fragment&&f.fragment.c();e.intro&&Zt(t.$$.fragment),Be(t,e.target,e.anchor),_e(),Qt()}Z(s)}class We{$$=void 0;$$set=void 0;$destroy(){$e(this,1),this.$destroy=B}$on(e,n){if(!Xt(n))return B;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ze);const He=["top","right","bottom","left"],Mt=["start","end"],Vt=He.reduce((t,e)=>t.concat(e,e+"-"+Mt[0],e+"-"+Mt[1]),[]),ft=Math.min,$=Math.max,ut=Math.round,st=Math.floor,N=t=>({x:t,y:t}),Ie={left:"right",right:"left",bottom:"top",top:"bottom"},je={start:"end",end:"start"};function Wt(t,e,n){return $(t,ft(e,n))}function nt(t,e){return typeof t=="function"?t(e):t}function L(t){return t.split("-")[0]}function T(t){return t.split("-")[1]}function te(t){return t==="x"?"y":"x"}function ee(t){return t==="y"?"height":"width"}function gt(t){return["top","bottom"].includes(L(t))?"y":"x"}function ne(t){return te(gt(t))}function ie(t,e,n){n===void 0&&(n=!1);const i=T(t),o=ne(t),c=ee(o);let r=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[c]>e.floating[c]&&(r=dt(r)),[r,dt(r)]}function qe(t){const e=dt(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>je[e])}function Xe(t,e,n){const i=["left","right"],o=["right","left"],c=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?c:r;default:return[]}}function Ye(t,e,n,i){const o=T(t);let c=Xe(L(t),n==="start",i);return o&&(c=c.map(r=>r+"-"+o),e&&(c=c.concat(c.map(at)))),c}function dt(t){return t.replace(/left|right|bottom|top/g,e=>Ie[e])}function Ue(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ke(t){return typeof t!="number"?Ue(t):{top:t,right:t,bottom:t,left:t}}function mt(t){const{x:e,y:n,width:i,height:o}=t;return{width:i,height:o,top:n,left:e,right:e+i,bottom:n+o,x:e,y:n}}function zt(t,e,n){let{reference:i,floating:o}=t;const c=gt(e),r=ne(e),l=ee(r),s=L(e),f=c==="y",a=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,h=i[l]/2-o[l]/2;let m;switch(s){case"top":m={x:a,y:i.y-o.height};break;case"bottom":m={x:a,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:u};break;case"left":m={x:i.x-o.width,y:u};break;default:m={x:i.x,y:i.y}}switch(T(e)){case"start":m[r]-=h*(n&&f?-1:1);break;case"end":m[r]+=h*(n&&f?-1:1);break}return m}const Ge=async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:c=[],platform:r}=n,l=c.filter(Boolean),s=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:o}),{x:a,y:u}=zt(f,i,s),h=i,m={},p=0;for(let g=0;g<l.length;g++){const{name:w,fn:d}=l[g],{x:y,y:x,data:b,reset:_}=await d({x:a,y:u,initialPlacement:i,placement:h,strategy:o,middlewareData:m,rects:f,platform:r,elements:{reference:t,floating:e}});a=y??a,u=x??u,m={...m,[w]:{...m[w],...b}},_&&p<=50&&(p++,typeof _=="object"&&(_.placement&&(h=_.placement),_.rects&&(f=_.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:o}):_.rects),{x:a,y:u}=zt(f,h,s)),g=-1)}return{x:a,y:u,placement:h,strategy:o,middlewareData:m}};async function Tt(t,e){var n;e===void 0&&(e={});const{x:i,y:o,platform:c,rects:r,elements:l,strategy:s}=t,{boundary:f="clippingAncestors",rootBoundary:a="viewport",elementContext:u="floating",altBoundary:h=!1,padding:m=0}=nt(e,t),p=Ke(m),w=l[h?u==="floating"?"reference":"floating":u],d=mt(await c.getClippingRect({element:(n=await(c.isElement==null?void 0:c.isElement(w)))==null||n?w:w.contextElement||await(c.getDocumentElement==null?void 0:c.getDocumentElement(l.floating)),boundary:f,rootBoundary:a,strategy:s})),y=u==="floating"?{x:i,y:o,width:r.floating.width,height:r.floating.height}:r.reference,x=await(c.getOffsetParent==null?void 0:c.getOffsetParent(l.floating)),b=await(c.isElement==null?void 0:c.isElement(x))?await(c.getScale==null?void 0:c.getScale(x))||{x:1,y:1}:{x:1,y:1},_=mt(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:x,strategy:s}):y);return{top:(d.top-_.top+p.top)/b.y,bottom:(_.bottom-d.bottom+p.bottom)/b.y,left:(d.left-_.left+p.left)/b.x,right:(_.right-d.right+p.right)/b.x}}function Je(t,e,n){return(t?[...n.filter(o=>T(o)===t),...n.filter(o=>T(o)!==t)]:n.filter(o=>L(o)===o)).filter(o=>t?T(o)===t||(e?at(o)!==o:!1):!0)}const Qe=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o;const{rects:c,middlewareData:r,placement:l,platform:s,elements:f}=e,{crossAxis:a=!1,alignment:u,allowedPlacements:h=Vt,autoAlignment:m=!0,...p}=nt(t,e),g=u!==void 0||h===Vt?Je(u||null,m,h):h,w=await Tt(e,p),d=((n=r.autoPlacement)==null?void 0:n.index)||0,y=g[d];if(y==null)return{};const x=ie(y,c,await(s.isRTL==null?void 0:s.isRTL(f.floating)));if(l!==y)return{reset:{placement:g[0]}};const b=[w[L(y)],w[x[0]],w[x[1]]],_=[...((i=r.autoPlacement)==null?void 0:i.overflows)||[],{placement:y,overflows:b}],O=g[d+1];if(O)return{data:{index:d+1,overflows:_},reset:{placement:O}};const F=_.map(v=>{const k=T(v.placement);return[v.placement,k&&a?v.overflows.slice(0,2).reduce((S,ot)=>S+ot,0):v.overflows[0],v.overflows]}).sort((v,k)=>v[1]-k[1]),G=((o=F.filter(v=>v[2].slice(0,T(v[0])?2:3).every(k=>k<=0))[0])==null?void 0:o[0])||F[0][0];return G!==l?{data:{index:d+1,overflows:_},reset:{placement:G}}:{}}}},Ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:o,middlewareData:c,rects:r,initialPlacement:l,platform:s,elements:f}=e,{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...w}=nt(t,e);if((n=c.arrow)!=null&&n.alignmentOffset)return{};const d=L(o),y=L(l)===l,x=await(s.isRTL==null?void 0:s.isRTL(f.floating)),b=h||(y||!g?[dt(l)]:qe(l));!h&&p!=="none"&&b.push(...Ye(l,g,p,x));const _=[l,...b],O=await Tt(e,w),F=[];let V=((i=c.flip)==null?void 0:i.overflows)||[];if(a&&F.push(O[d]),u){const S=ie(o,r,x);F.push(O[S[0]],O[S[1]])}if(V=[...V,{placement:o,overflows:F}],!F.every(S=>S<=0)){var G,v;const S=(((G=c.flip)==null?void 0:G.index)||0)+1,ot=_[S];if(ot)return{data:{index:S,overflows:V},reset:{placement:ot}};let J=(v=V.filter(W=>W.overflows[0]<=0).sort((W,z)=>W.overflows[1]-z.overflows[1])[0])==null?void 0:v.placement;if(!J)switch(m){case"bestFit":{var k;const W=(k=V.map(z=>[z.placement,z.overflows.filter(Q=>Q>0).reduce((Q,ae)=>Q+ae,0)]).sort((z,Q)=>z[1]-Q[1])[0])==null?void 0:k[0];W&&(J=W);break}case"initialPlacement":J=l;break}if(o!==J)return{reset:{placement:J}}}return{}}}};async function tn(t,e){const{placement:n,platform:i,elements:o}=t,c=await(i.isRTL==null?void 0:i.isRTL(o.floating)),r=L(n),l=T(n),s=gt(n)==="y",f=["left","top"].includes(r)?-1:1,a=c&&s?-1:1,u=nt(e,t);let{mainAxis:h,crossAxis:m,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof p=="number"&&(m=l==="end"?p*-1:p),s?{x:m*a,y:h*f}:{x:h*f,y:m*a}}const en=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:o,y:c,placement:r,middlewareData:l}=e,s=await tn(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:o+s.x,y:c+s.y,data:{...s,placement:r}}}}},nn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:c=!0,crossAxis:r=!1,limiter:l={fn:w=>{let{x:d,y}=w;return{x:d,y}}},...s}=nt(t,e),f={x:n,y:i},a=await Tt(e,s),u=gt(L(o)),h=te(u);let m=f[h],p=f[u];if(c){const w=h==="y"?"top":"left",d=h==="y"?"bottom":"right",y=m+a[w],x=m-a[d];m=Wt(y,m,x)}if(r){const w=u==="y"?"top":"left",d=u==="y"?"bottom":"right",y=p+a[w],x=p-a[d];p=Wt(y,p,x)}const g=l.fn({...e,[h]:m,[u]:p});return{...g,data:{x:g.x-n,y:g.y-i}}}}};function K(t){return oe(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function P(t){var e;return(e=(oe(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function oe(t){return t instanceof Node||t instanceof A(t).Node}function R(t){return t instanceof Element||t instanceof A(t).Element}function C(t){return t instanceof HTMLElement||t instanceof A(t).HTMLElement}function Ht(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function on(t){return["table","td","th"].includes(K(t))}function Lt(t){const e=Pt(),n=E(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function rn(t){let e=D(t);for(;C(e)&&!U(e);){if(Lt(e))return e;e=D(e)}return null}function Pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function U(t){return["html","body","#document"].includes(K(t))}function E(t){return A(t).getComputedStyle(t)}function yt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function D(t){if(K(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ht(t)&&t.host||P(t);return Ht(e)?e.host:e}function re(t){const e=D(t);return U(e)?t.ownerDocument?t.ownerDocument.body:t.body:C(e)&&it(e)?e:re(e)}function et(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const o=re(t),c=o===((i=t.ownerDocument)==null?void 0:i.body),r=A(o);return c?e.concat(r,r.visualViewport||[],it(o)?o:[],r.frameElement&&n?et(r.frameElement):[]):e.concat(o,et(o,[],n))}function se(t){const e=E(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=C(t),c=o?t.offsetWidth:n,r=o?t.offsetHeight:i,l=ut(n)!==c||ut(i)!==r;return l&&(n=c,i=r),{width:n,height:i,$:l}}function kt(t){return R(t)?t:t.contextElement}function Y(t){const e=kt(t);if(!C(e))return N(1);const n=e.getBoundingClientRect(),{width:i,height:o,$:c}=se(e);let r=(c?ut(n.width):n.width)/i,l=(c?ut(n.height):n.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const sn=N(0);function ce(t){const e=A(t);return!Pt()||!e.visualViewport?sn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function cn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==A(t)?!1:e}function M(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const o=t.getBoundingClientRect(),c=kt(t);let r=N(1);e&&(i?R(i)&&(r=Y(i)):r=Y(t));const l=cn(c,n,i)?ce(c):N(0);let s=(o.left+l.x)/r.x,f=(o.top+l.y)/r.y,a=o.width/r.x,u=o.height/r.y;if(c){const h=A(c),m=i&&R(i)?A(i):i;let p=h,g=p.frameElement;for(;g&&i&&m!==p;){const w=Y(g),d=g.getBoundingClientRect(),y=E(g),x=d.left+(g.clientLeft+parseFloat(y.paddingLeft))*w.x,b=d.top+(g.clientTop+parseFloat(y.paddingTop))*w.y;s*=w.x,f*=w.y,a*=w.x,u*=w.y,s+=x,f+=b,p=A(g),g=p.frameElement}}return mt({width:a,height:u,x:s,y:f})}const ln=[":popover-open",":modal"];function Nt(t){return ln.some(e=>{try{return t.matches(e)}catch{return!1}})}function fn(t){let{elements:e,rect:n,offsetParent:i,strategy:o}=t;const c=o==="fixed",r=P(i),l=e?Nt(e.floating):!1;if(i===r||l&&c)return n;let s={scrollLeft:0,scrollTop:0},f=N(1);const a=N(0),u=C(i);if((u||!u&&!c)&&((K(i)!=="body"||it(r))&&(s=yt(i)),C(i))){const h=M(i);f=Y(i),a.x=h.x+i.clientLeft,a.y=h.y+i.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-s.scrollLeft*f.x+a.x,y:n.y*f.y-s.scrollTop*f.y+a.y}}function un(t){return Array.from(t.getClientRects())}function le(t){return M(P(t)).left+yt(t).scrollLeft}function an(t){const e=P(t),n=yt(t),i=t.ownerDocument.body,o=$(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),c=$(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let r=-n.scrollLeft+le(t);const l=-n.scrollTop;return E(i).direction==="rtl"&&(r+=$(e.clientWidth,i.clientWidth)-o),{width:o,height:c,x:r,y:l}}function dn(t,e){const n=A(t),i=P(t),o=n.visualViewport;let c=i.clientWidth,r=i.clientHeight,l=0,s=0;if(o){c=o.width,r=o.height;const f=Pt();(!f||f&&e==="fixed")&&(l=o.offsetLeft,s=o.offsetTop)}return{width:c,height:r,x:l,y:s}}function mn(t,e){const n=M(t,!0,e==="fixed"),i=n.top+t.clientTop,o=n.left+t.clientLeft,c=C(t)?Y(t):N(1),r=t.clientWidth*c.x,l=t.clientHeight*c.y,s=o*c.x,f=i*c.y;return{width:r,height:l,x:s,y:f}}function It(t,e,n){let i;if(e==="viewport")i=dn(t,n);else if(e==="document")i=an(P(t));else if(R(e))i=mn(e,n);else{const o=ce(t);i={...e,x:e.x-o.x,y:e.y-o.y}}return mt(i)}function fe(t,e){const n=D(t);return n===e||!R(n)||U(n)?!1:E(n).position==="fixed"||fe(n,e)}function hn(t,e){const n=e.get(t);if(n)return n;let i=et(t,[],!1).filter(l=>R(l)&&K(l)!=="body"),o=null;const c=E(t).position==="fixed";let r=c?D(t):t;for(;R(r)&&!U(r);){const l=E(r),s=Lt(r);!s&&l.position==="fixed"&&(o=null),(c?!s&&!o:!s&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||it(r)&&!s&&fe(t,r))?i=i.filter(a=>a!==r):o=l,r=D(r)}return e.set(t,i),i}function pn(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const r=[...n==="clippingAncestors"?Nt(e)?[]:hn(e,this._c):[].concat(n),i],l=r[0],s=r.reduce((f,a)=>{const u=It(e,a,o);return f.top=$(u.top,f.top),f.right=ft(u.right,f.right),f.bottom=ft(u.bottom,f.bottom),f.left=$(u.left,f.left),f},It(e,l,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function gn(t){const{width:e,height:n}=se(t);return{width:e,height:n}}function yn(t,e,n){const i=C(e),o=P(e),c=n==="fixed",r=M(t,!0,c,e);let l={scrollLeft:0,scrollTop:0};const s=N(0);if(i||!i&&!c)if((K(e)!=="body"||it(o))&&(l=yt(e)),i){const u=M(e,!0,c,e);s.x=u.x+e.clientLeft,s.y=u.y+e.clientTop}else o&&(s.x=le(o));const f=r.left+l.scrollLeft-s.x,a=r.top+l.scrollTop-s.y;return{x:f,y:a,width:r.width,height:r.height}}function vt(t){return E(t).position==="static"}function jt(t,e){return!C(t)||E(t).position==="fixed"?null:e?e(t):t.offsetParent}function ue(t,e){const n=A(t);if(Nt(t))return n;if(!C(t)){let o=D(t);for(;o&&!U(o);){if(R(o)&&!vt(o))return o;o=D(o)}return n}let i=jt(t,e);for(;i&&on(i)&&vt(i);)i=jt(i,e);return i&&U(i)&&vt(i)&&!Lt(i)?n:i||rn(t)||n}const wn=async function(t){const e=this.getOffsetParent||ue,n=this.getDimensions,i=await n(t.floating);return{reference:yn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function xn(t){return E(t).direction==="rtl"}const _n={convertOffsetParentRelativeRectToViewportRelativeRect:fn,getDocumentElement:P,getClippingRect:pn,getOffsetParent:ue,getElementRects:wn,getClientRects:un,getDimensions:gn,getScale:Y,isElement:R,isRTL:xn};function bn(t,e){let n=null,i;const o=P(t);function c(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function r(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),c();const{left:f,top:a,width:u,height:h}=t.getBoundingClientRect();if(l||e(),!u||!h)return;const m=st(a),p=st(o.clientWidth-(f+u)),g=st(o.clientHeight-(a+h)),w=st(f),y={rootMargin:-m+"px "+-p+"px "+-g+"px "+-w+"px",threshold:$(0,ft(1,s))||1};let x=!0;function b(_){const O=_[0].intersectionRatio;if(O!==s){if(!x)return r();O?r(!1,O):i=setTimeout(()=>{r(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(b,{...y,root:o.ownerDocument})}catch{n=new IntersectionObserver(b,y)}n.observe(t)}return r(!0),c}function vn(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:c=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=i,f=kt(t),a=o||c?[...f?et(f):[],...et(e)]:[];a.forEach(d=>{o&&d.addEventListener("scroll",n,{passive:!0}),c&&d.addEventListener("resize",n)});const u=f&&l?bn(f,n):null;let h=-1,m=null;r&&(m=new ResizeObserver(d=>{let[y]=d;y&&y.target===f&&m&&(m.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=m)==null||x.observe(e)})),n()}),f&&!s&&m.observe(f),m.observe(e));let p,g=s?M(t):null;s&&w();function w(){const d=M(t);g&&(d.x!==g.x||d.y!==g.y||d.width!==g.width||d.height!==g.height)&&n(),g=d,p=requestAnimationFrame(w)}return n(),()=>{var d;a.forEach(y=>{o&&y.removeEventListener("scroll",n),c&&y.removeEventListener("resize",n)}),u?.(),(d=m)==null||d.disconnect(),m=null,s&&cancelAnimationFrame(p)}}const An=en,En=Qe,On=nn,Rn=Ze,Cn=(t,e,n)=>{const i=new Map,o={platform:_n,...n},c={...o.platform,_c:i};return Ge(t,e,{...o,platform:c})},I=[];function At(t,e=B){let n;const i=new Set;function o(l){if(Yt(t,l)&&(t=l,n)){const s=!I.length;for(const f of i)f[1](),I.push(f,t);if(s){for(let f=0;f<I.length;f+=2)I[f][0](I[f+1]);I.length=0}}}function c(l){o(l(t))}function r(l,s=B){const f=[l,s];return i.add(f),i.size===1&&(n=e(o,c)||B),l(t),()=>{i.delete(f),i.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:r}}function Sn(t){let e,n,i,o,c;const r=t[9].default,l=pe(r,t,t[8],null);return{c(){e=Et("span"),l&&l.c(),n=Ae(),i=Et("span"),o=St(t[0]),this.h()},l(s){e=Bt(s,"SPAN",{class:!0});var f=Ot(e);l&&l.l(f),f.forEach(j),n=Re(s),i=Bt(s,"SPAN",{class:!0,style:!0});var a=Ot(i);o=Jt(a,t[0]),a.forEach(j),this.h()},h(){Ft(e,"class","content svelte-vc7bxy"),Ft(i,"class","tooltip svelte-vc7bxy"),rt(i,"--x",t[4]+"px"),rt(i,"--y",t[3]+"px")},m(s,f){_t(s,e,f),l&&l.m(e,null),t[10](e),_t(s,n,f),_t(s,i,f),Kt(i,o),t[11](i),c=!0},p(s,[f]){l&&l.p&&(!c||f&256)&&ye(l,r,s,s[8],c?ge(r,s[8],f,null):we(s[8]),null),(!c||f&1)&&Ce(o,s[0]),(!c||f&16)&&rt(i,"--x",s[4]+"px"),(!c||f&8)&&rt(i,"--y",s[3]+"px")},i(s){c||(Zt(l,s),c=!0)},o(s){Fe(l,s),c=!1},d(s){s&&(j(e),j(n),j(i)),l&&l.d(s),t[10](null),t[11](null)}}}function Tn(t,e,n){let i,o,c,{$$slots:r={},$$scope:l}=e;const s=At(0);wt(t,s,d=>n(4,c=d));const f=At(0);wt(t,f,d=>n(3,o=d));const a=At(!1);wt(t,a,d=>n(12,i=d));let u,h;function m(){vn(u,h,()=>{Cn(u,h,{placement:"top",middleware:[Rn(),On({padding:6}),An(6),En()]}).then(({x:d,y,placement:x})=>{console.log("done computing"),xt(s,c=d,c),xt(f,o=y,o),xt(a,i=!0,i)})})}Te(()=>{m()});let{tip:p}=e;function g(d){lt[d?"unshift":"push"](()=>{u=d,n(1,u)})}function w(d){lt[d?"unshift":"push"](()=>{h=d,n(2,h)})}return t.$$set=d=>{"tip"in d&&n(0,p=d.tip),"$$scope"in d&&n(8,l=d.$$scope)},[p,u,h,o,c,s,f,a,l,r,g,w]}class Pn extends We{constructor(e){super(),Ve(this,e,Tn,Sn,Yt,{tip:0})}}export{Pn as default};