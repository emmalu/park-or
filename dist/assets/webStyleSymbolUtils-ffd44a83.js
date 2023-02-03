import{c as v,q as d,r as $}from"./symbols-12804594.js";import{c as x,a as h}from"./devEnvironmentUtils-5002a058.js";import{a as w}from"./Error-4ed679d7.js";import{f as F,r as N}from"./typedArrayUtil-d02f10a8.js";import{j as u,O as S}from"./request-e4299080.js";import{j as U}from"./Portal-95b0f852.js";import{c as g}from"./persistableUrlUtils-d18becd9.js";import{p as j}from"./jsonUtils-c8fbfbd0.js";import{c as M,d as R,b as D,p as O,w as T}from"./styleUtils-cde65ff5.js";import"./ensureType-d98e08e1.js";import"./string-9c5e03f7.js";import"./cast-6d78d3c7.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-930cba29.js";import"./CIMSymbol-33ea3902.js";import"./enumeration-497ef064.js";import"./jsonMap-5afaf2ff.js";import"./Extent-d5fff12d.js";import"./fieldUtils-2efa8993.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-72a1843c.js";import"./geometry-70b2a4a5.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./Symbol-1bb07043.js";import"./Color-b7b9e6bb.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-8b7acc4e.js";import"./aaBoundingBox-33fc923c.js";import"./Collection-42fe629f.js";import"./Evented-b378ccab.js";import"./SimpleObservable-e0897cc6.js";import"./collectionUtils-3d8a9611.js";import"./Clonable-58355d3c.js";import"./Loadable-b0d5bb7e.js";import"./Promise-6bd0b483.js";import"./locale-30120714.js";import"./PortalGroup-813428fa.js";import"./PortalUser-4126c27a.js";function Ot(t,r,o,m){return t.name?t.styleName&&t.styleName==="Esri2DPointSymbolsStyle"?k(t,r,m):M(t,r,m).then(a=>W(F(a),t.name,r,o,m)):Promise.reject(new w("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function W(t,r,o,m,a){var b;const y=t.data,p=o&&N(o.portal)?o.portal:U.getDefault(),c={portal:p,url:u(t.baseUrl),origin:"portal-item"},l=y.items.find(i=>i.name===r);if(!l){const i=`The symbol name '${r}' could not be found`;return Promise.reject(new w("symbolstyleutils:symbol-name-not-found",i,{symbolName:r}))}let n=g(R(l,m),c),s=((b=l.thumbnail)==null?void 0:b.href)??null;const f=l.thumbnail&&l.thumbnail.imageData;x()&&(n=h(n)??"",s=h(s));const P={portal:p,url:u(S(n)),origin:"portal-item"};return D(n,a).then(i=>{const E=m==="cimRef"?O(i.data):i.data,e=j(E,P);if(e&&v(e)){if(s){const q=g(s,c);e.thumbnail=new d({url:q})}else f&&(e.thumbnail=new d({url:`data:image/png;base64,${f}`}));t.styleUrl?e.styleOrigin=new $({portal:o.portal,styleUrl:t.styleUrl,name:r}):t.styleName&&(e.styleOrigin=new $({portal:o.portal,styleName:t.styleName,name:r}))}return e})}function k(t,r,o){const m=T.replace(/\{SymbolName\}/gi,t.name),a=N(r.portal)?r.portal:U.getDefault();return D(m,o).then(y=>{const p=O(y.data);return j(p,{portal:a,url:u(S(m)),origin:"portal-item"})})}export{W as fetchSymbolFromStyle,Ot as resolveWebStyleSymbol};
