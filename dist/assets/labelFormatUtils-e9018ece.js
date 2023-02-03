import{_ as y}from"./preload-helper-101896b7.js";import{s as g,a as c}from"./Error-4ed679d7.js";import{t as h}from"./typedArrayUtil-d02f10a8.js";import{L as w,m as v,S as b}from"./number-c7f1bfee.js";import{i as x}from"./fieldUtils-2efa8993.js";import{x as _,_ as E}from"./labelUtils-87bb22ff.js";import{n as F}from"./arcadeOnDemand-72a1843c.js";import"./string-9c5e03f7.js";import"./jsonMap-5afaf2ff.js";import"./locale-30120714.js";import"./geometry-70b2a4a5.js";import"./ensureType-d98e08e1.js";import"./Extent-d5fff12d.js";import"./cast-6d78d3c7.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-930cba29.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";const f=g.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},V={getAttribute:(a,o)=>a.field(o)};async function G(a,o,e){if(!a||!a.symbol)return d;const n=a.where,i=_(a),s=n?await y(()=>import("./WhereClause-646ca60e.js"),["assets/WhereClause-646ca60e.js","assets/string-9c5e03f7.js","assets/typedArrayUtil-d02f10a8.js"]):null;let l;if(i.type==="arcade"){const r=await F(i.expression,e,o);if(h(r))return d;l={type:"arcade",evaluate(u){try{const t=r.evaluate({$feature:"attributes"in u?r.repurposeFeature(u):u});if(t!=null)return t.toString()}catch{f.error(new c("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:u,expression:i}))}return null},needsHydrationToEvaluate:()=>E(i.expression)==null}}else l={type:"simple",evaluate:r=>i.expression.replace(/{[^}]*}/g,u=>{const t=u.slice(1,-1),p=o.get(t);if(!p)return u;let m=null;return"attributes"in r?r&&r.attributes&&(m=r.attributes[p.name]):m=r.field(p.name),m==null?"":L(m,p)})};if(n){let r;try{r=s.WhereClause.create(n,o)}catch(t){return f.error(new c("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:n,error:t})),d}const u=l.evaluate;l.evaluate=t=>{const p="attributes"in t?void 0:V;try{if(r.testFeature(t,p))return u(t)}catch(m){f.error(new c("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:n,feature:t,error:m}))}return null}}return l}function L(a,o){if(a==null)return"";const e=o.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const i=a;for(const s of e.codedValues)if(s.code===i)return s.name}else if(e.type==="range"){const i=+a,s="range"in e?e.range[0]:e.minValue,l="range"in e?e.range[1]:e.maxValue;if(s<=i&&i<=l)return e.name}}let n=a;return o.type==="date"||o.type==="esriFieldTypeDate"?n=w(n,b("short-date")):x(o)&&(n=v(+n)),n||""}export{G as createLabelFunction,L as formatField};
