import{r as h}from"./typedArrayUtil-d02f10a8.js";import{h as u}from"./ProgramTemplate-1afb8353.js";class a{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return this._outer.size===0}get(e,o){var t;return(t=this._outer.get(e))==null?void 0:t.get(o)}set(e,o,t){const s=this._outer.get(e);s?s.set(o,t):this._outer.set(e,new Map([[o,t]]))}delete(e,o){const t=this._outer.get(e);t&&(t.delete(o),t.size===0&&this._outer.delete(e))}forEach(e){this._outer.forEach((o,t)=>e(o,t))}}class ${constructor(e){this._rctx=e,this._store=new a}dispose(){this._store.forEach(e=>e.forEach(o=>o.dispose())),this._store.clear()}acquire(e,o,t,s){const r=this._store.get(e,o);if(h(r))return r.ref(),r;const n=new u(this._rctx,e,o,t,s);return n.ref(),this._store.set(e,o,n),n}get test(){let e=0;return this._store.forEach(o=>o.forEach(t=>e+=t.hasGLName?2:1)),{cachedWebGLObjects:e}}}function l(i){const{options:e,value:o}=i;return typeof e[o]=="number"}function d(i){let e="";for(const o in i){const t=i[o];if(typeof t=="boolean")t&&(e+=`#define ${o}
`);else if(typeof t=="number")e+=`#define ${o} ${t.toFixed()}
`;else if(typeof t=="object")if(l(t)){const{value:s,options:r,namespace:n}=t,c=n?`${n}_`:"";for(const f in r)e+=`#define ${c}${f} ${r[f].toFixed()}
`;e+=`#define ${o} ${c}${s}
`}else{const s=t.options;let r=0;for(const n in s)e+=`#define ${s[n]} ${(r++).toFixed()}
`;e+=`#define ${o} ${s[t.value]}
`}}return e}export{d as n,$ as s};
