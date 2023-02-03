import{u as j,e as t,y as i,n as f,s as S}from"./cast-6d78d3c7.js";import{c as E}from"./Analysis-01d0b90a.js";import{l as y}from"./Color-b7b9e6bb.js";import{l as R}from"./Clonable-58355d3c.js";import{o as b,e as T}from"./screenUtils-7afeb41c.js";import{t as h,r as n,e as N}from"./typedArrayUtil-d02f10a8.js";import{T as w,a as k}from"./ensureType-d98e08e1.js";import"./geometry-70b2a4a5.js";import{s as C}from"./Cyclical-1a93cb12.js";import{w as x,a as P,r as L}from"./Extent-d5fff12d.js";import{j as O}from"./Collection-42fe629f.js";import{t as _,n as A}from"./collectionUtils-3d8a9611.js";import{l as q,w as D}from"./reactiveUtils-b0e56010.js";import{o as H}from"./projection-6146477c.js";import{O as M}from"./MultiOriginJSONSupport-1970ed0f.js";import{b as B}from"./Layer-739799ab.js";import{c as F}from"./OperationalLayer-54654858.js";import"./string-9c5e03f7.js";import"./Error-4ed679d7.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-930cba29.js";import"./Identifiable-57df9761.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./jsonMap-5afaf2ff.js";import"./Evented-b378ccab.js";import"./SimpleObservable-e0897cc6.js";import"./preload-helper-101896b7.js";import"./unitUtils-b69647a1.js";import"./mat4-62d5e6a4.js";import"./assets-6ba3cd63.js";import"./request-e4299080.js";import"./zscale-72b4355d.js";import"./Loadable-b0d5bb7e.js";import"./Promise-6bd0b483.js";import"./TimeExtent-0fd238ea.js";import"./persistableUrlUtils-d18becd9.js";import"./ElevationInfo-28459ff1.js";import"./fieldUtils-141b2ff2.js";import"./arcadeOnDemand-72c57f7a.js";import"./lengthUtils-0dde2114.js";import"./opacityUtils-8b7acc4e.js";let p=class extends j(R){constructor(e){super(e),this.type="simple",this.color=new y("black"),this.lineSize=2,this.fontSize=10,this.textColor=new y("black"),this.textBackgroundColor=new y([255,255,255,.6])}};t([i({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],p.prototype,"type",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],p.prototype,"color",void 0),t([i({type:Number,cast:b,nonNullable:!0,range:{min:T(1)},json:{write:{isRequired:!0}}})],p.prototype,"lineSize",void 0),t([i({type:Number,cast:b,nonNullable:!0,json:{write:{isRequired:!0}}})],p.prototype,"fontSize",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],p.prototype,"textColor",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],p.prototype,"textBackgroundColor",void 0),p=t([f("esri.analysis.DimensionSimpleStyle")],p);const v=p;var d;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(d||(d={}));const G=[d.Horizontal,d.Vertical,d.Direct];let l=class extends j(R){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=d.Direct,this.offset=0,this.orientation=0}};t([i({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([i({type:x,json:{write:!0}})],l.prototype,"startPoint",void 0),t([i({type:x,json:{write:!0}})],l.prototype,"endPoint",void 0),t([i({type:G,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),S(e=>C.normalize(k(e),0,!0))],l.prototype,"orientation",void 0),l=t([f("esri.analysis.LengthDimension")],l);const z=l,g=O.ofType(z);let a=class extends E{constructor(e){super(e),this.type="dimension",this.style=new v,this.extent=null}initialize(){this.addHandles(q(()=>this._computeExtent(),e=>{(h(e)||h(e.pending))&&this._set("extent",n(e)?e.extent:null)},D))}get dimensions(){return this._get("dimensions")||new g}set dimensions(e){this._set("dimensions",A(e,this.dimensions,g))}get spatialReference(){for(const e of this.dimensions){if(n(e.startPoint))return e.startPoint.spatialReference;if(n(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,o)=>(e.push(o.startPoint,o.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return n(e)?N(e.pending):null}_computeExtent(){const e=this.spatialReference;if(h(e))return{pending:null,extent:null};const o=[];for(const s of this.dimensions)n(s.startPoint)&&o.push(s.startPoint),n(s.endPoint)&&o.push(s.endPoint);const m=H(o,e);if(n(m.pending))return{pending:m.pending,extent:null};let c=null;return n(m.geometries)&&(c=m.geometries.reduce((s,u)=>h(s)?n(u)?P.fromPoint(u):null:n(u)?s.union(P.fromPoint(u)):s,null)),{pending:null,extent:c}}clear(){this.dimensions.removeAll()}};t([i({type:["dimension"]})],a.prototype,"type",void 0),t([i({cast:_,type:g,nonNullable:!0})],a.prototype,"dimensions",null),t([i({readOnly:!0})],a.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:v}},nonNullable:!0})],a.prototype,"style",void 0),t([i({value:null,readOnly:!0})],a.prototype,"extent",void 0),t([i({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),a=t([f("esri.analysis.DimensionAnalysis")],a);const $=a;let r=class extends F(M(B)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new $,this.opacity=1,e){const{source:o,style:m}=e;o&&m&&(o.style=m)}}initialize(){this.addHandles([q(()=>this.source,(e,o)=>{n(o)&&o.parent===this&&(o.parent=null),n(e)&&(e.parent=this)},D)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return N(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new $)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,o,m,c){o.dimensions=e.filter(({startPoint:s,endPoint:u})=>n(s)&&n(u)).map(s=>s.toJSON(c)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([i({type:["ArcGISDimensionLayer"]})],r.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],r.prototype,"source",void 0),t([i({readOnly:!0})],r.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:v}},json:{write:{ignoreOrigin:!0}}})],r.prototype,"style",null),t([i({readOnly:!0})],r.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),t([i({type:["show","hide"]})],r.prototype,"listMode",void 0),t([i({type:O.ofType(z),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],r.prototype,"dimensions",null),t([L("web-scene","dimensions")],r.prototype,"writeDimensions",null),r=t([f("esri.layers.DimensionLayer")],r);const Ce=r;export{Ce as default};