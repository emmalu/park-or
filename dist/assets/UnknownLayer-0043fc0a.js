import{v as m,e as t,y as p,n as s}from"./cast-6d78d3c7.js";import{a}from"./Error-4ed679d7.js";import{O as y}from"./MultiOriginJSONSupport-1970ed0f.js";import"./typedArrayUtil-d02f10a8.js";import"./ensureType-d98e08e1.js";import{b as l}from"./Layer-739799ab.js";import{v as u}from"./PortalLayer-644d657e.js";import"./string-9c5e03f7.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-930cba29.js";import"./preload-helper-101896b7.js";import"./geometry-70b2a4a5.js";import"./Extent-d5fff12d.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./jsonMap-5afaf2ff.js";import"./request-e4299080.js";import"./Evented-b378ccab.js";import"./Identifiable-57df9761.js";import"./Loadable-b0d5bb7e.js";import"./Promise-6bd0b483.js";import"./asyncUtils-18831bb1.js";import"./Portal-fbb2b73d.js";import"./locale-30120714.js";import"./PortalGroup-813428fa.js";import"./PortalUser-cf18ae9d.js";import"./PortalItem-69c4a143.js";import"./assets-6ba3cd63.js";let r=class extends u(y(l)){constructor(o){super(o),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((o,e)=>{m(()=>{const i=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unknown layer type";i&&(n+=" "+i),e(new a("layer:unknown-layer-type",n,{layerType:i}))})}))}read(o,e){super.read({resourceInfo:o},e)}write(){return null}};t([p({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([p({type:["show","hide"]})],r.prototype,"listMode",void 0),t([p({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=t([s("esri.layers.UnknownLayer")],r);const G=r;export{G as default};