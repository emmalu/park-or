import{l as w}from"./Color-b7b9e6bb.js";import{U as S}from"./request-e4299080.js";import{s as M,a as L}from"./Error-4ed679d7.js";import{e as R}from"./LRUCache-4d56ba4d.js";import{r as d,t as I}from"./typedArrayUtil-d02f10a8.js";import{j as $}from"./promiseUtils-930cba29.js";import{c as v}from"./string-9c5e03f7.js";import{i as N,u as T}from"./arcadeOnDemand-72a1843c.js";import{d as j}from"./CIMSymbol-33ea3902.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./ensureType-d98e08e1.js";import"./preload-helper-101896b7.js";import"./MemCache-1e028041.js";import"./cast-6d78d3c7.js";import"./nextTick-3ee5a785.js";import"./geometry-70b2a4a5.js";import"./Extent-d5fff12d.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./jsonMap-5afaf2ff.js";import"./enumeration-497ef064.js";import"./fieldUtils-2efa8993.js";import"./Symbol-1bb07043.js";const P="esri.renderers.support.DictionaryLoader",q={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class nt{constructor(t,o,e){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new R(100),this._dictionaryPromise=null,this.url=t,this.config=o,this.fieldMap=e}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,o){let e;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(o));try{e=await this._dictionaryPromise}catch(n){if($(n))return this._dictionaryPromise=null,null}const i={};if(this.fieldMap)for(const n of this._symbolFields){const m=this.fieldMap[n];if(m&&t.attributes[m]!=null){const b=""+t.attributes[m];i[n]=b}else i[n]=""}const r=e==null?void 0:e(i,o);if(!r||typeof r!="string")return null;const l=v(r).toString(),f=this._symbolCache.get(l);if(f)return f.catch(()=>{this._symbolCache.pop(l)}),f;const a=r.split(";"),s=[],c=[];for(const n of a)if(n)if(n.includes("po:")){const m=n.substr(3).split("|");if(m.length===3){const b=m[0],_=m[1];let y=m[2];if(_==="DashTemplate")y=y.split(" ").map(u=>Number(u));else if(_==="Color"){const u=new w(y).toRgba();y=[u[0],u[1],u[2],255*u[3]]}else y=Number(y);c.push({primitiveName:b,propertyName:_,value:y})}}else if(n.includes("|")){for(const m of n.split("|"))if(this._itemNames.has(m)){s.push(m);break}}else this._itemNames.has(n)&&s.push(n);const p=!d(t.geometry)||!t.geometry.hasZ&&t.geometry.type==="point",h=this._cimPartsToCIMSymbol(s,c,p,o);return this._symbolCache.put(l,h,1),h}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void M.getLogger(P).error("no valid URL!");const o=S(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:d(t)?t.signal:null}),[{data:e}]=await Promise.all([o,N()]);if(!e)throw this._dictionaryPromise=null,new L("esri.renderers.DictionaryRenderer","Bad dictionary data!");const i=e.expression,r=e.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+e.cimRefTemplateUrl,this._itemNames=new Set(e.itemsNames),this._symbolFields=r.symbol;const l={};if(this.config){const s=this.config;for(const c in s)l[c]=s[c]}if(r.configuration)for(const s of r.configuration)l.hasOwnProperty(s.name)||(l[s.name]=s.value);const f=[];if(d(t)&&t.fields&&this.fieldMap)for(const s of this._symbolFields){const c=this.fieldMap[s],p=t.fields.filter(h=>h.name===c);p.length>0&&f.push({...p[0],name:s})}const a=T(i,d(t)?t.spatialReference:null,f,l).then(s=>{const c={scale:0};return(p,h)=>{if(I(s))return null;const n=s.repurposeFeature({geometry:null,attributes:p});return c.scale=d(h)?h.scale:void 0,s.evaluate({$feature:n,$view:c})}}).catch(s=>(M.getLogger(P).error("Creating dictinoary expression failed:",s),null));return this._dictionaryPromise=a,a}async _cimPartsToCIMSymbol(t,o,e,i){const r=new Array(t.length);for(let a=0;a<t.length;a++)r[a]=this._getSymbolPart(t[a],i);const l=await Promise.all(r),f=this.fieldMap;if(f)for(const a of l)C(a,f);return new j({data:this._combineSymbolParts(l,o,e)})}async _getSymbolPart(t,o){if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(r=>r.data);const e=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,t),i=S(e,{responseType:"json",query:{f:"json"},...o});this._ongoingRequests.set(t,i);try{return(await i).data}catch(r){throw this._ongoingRequests.delete(t),r}}_combineSymbolParts(t,o,e){if(!t||t.length===0)return null;const i={...t[0]};if(t.length>1){i.symbolLayers=[];for(const r of t){const l=r;i.symbolLayers.unshift(...l.symbolLayers)}}return e&&(i.callout=q),{type:"CIMSymbolReference",symbol:i,primitiveOverrides:o}}}function C(g,t){if(!g)return;const o=g.symbolLayers;if(!o)return;let e=o.length;for(;e--;){const i=o[e];i&&i.enable!==!1&&i.type==="CIMVectorMarker"&&F(i,t)}}function F(g,t){const o=g.markerGraphics;if(o)for(const e of o){if(!e)continue;const i=e.symbol;if(i)switch(i.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":C(i,t);break;case"CIMTextSymbol":i.fieldMap=t}}}export{nt as DictionaryLoader};
