import{h as c,b as s}from"./asyncUtils-18831bb1.js";import{j as e}from"./Collection-42fe629f.js";import{m}from"./Loadable-b0d5bb7e.js";import{t as u}from"./typedArrayUtil-d02f10a8.js";async function b(o,n){return await o.load(),d(o,n)}async function d(o,n){const l=[],i=(...t)=>{for(const r of t)u(r)||(Array.isArray(r)?i(...r):e.isCollection(r)?r.forEach(f=>i(f)):m.isLoadable(r)&&l.push(r))};n(i);let a=null;if(await c(l,async t=>{(await s(p(t)?t.loadAll():t.load())).ok!==!1||a||(a=t)}),a)throw a.loadError;return o}function p(o){return"loadAll"in o&&typeof o.loadAll=="function"}export{d as i,b as n};
