import{q as d,e as r,y as s,n as h}from"./cast-6d78d3c7.js";import{l as b}from"./CollectionFlattener-b89887c0.js";import{n as v}from"./loadAll-1ae88564.js";import{r as u}from"./typedArrayUtil-d02f10a8.js";import{O as f}from"./MultiOriginJSONSupport-1970ed0f.js";import{l as m,U as y}from"./reactiveUtils-b0e56010.js";import"./ensureType-d98e08e1.js";import{r as c}from"./Extent-d5fff12d.js";import{b as _}from"./Layer-f9f81f65.js";import{n as g}from"./BlendLayer-7a735871.js";import{c as L}from"./OperationalLayer-007b4c8b.js";import{v as O}from"./PortalLayer-5c12bdba.js";import{t as w}from"./ScaleRangeLayer-c6a35aba.js";import{a as M}from"./lazyLayerLoader-2288f664.js";import{l as V,d as $,t as C}from"./TablesMixin-019c9675.js";import{y as x}from"./writeUtils-44b0e78b.js";import"./string-9c5e03f7.js";import"./Error-4ed679d7.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-930cba29.js";import"./Collection-42fe629f.js";import"./Evented-b378ccab.js";import"./SimpleObservable-e0897cc6.js";import"./asyncUtils-18831bb1.js";import"./Loadable-b0d5bb7e.js";import"./Promise-6bd0b483.js";import"./preload-helper-101896b7.js";import"./geometry-70b2a4a5.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./jsonMap-5afaf2ff.js";import"./request-e4299080.js";import"./Identifiable-57df9761.js";import"./parser-f68dd732.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./common-701a4199.js";import"./TimeExtent-0fd238ea.js";import"./persistableUrlUtils-d18becd9.js";import"./ElevationInfo-618e96ba.js";import"./fieldUtils-2efa8993.js";import"./arcadeOnDemand-72a1843c.js";import"./lengthUtils-0dde2114.js";import"./unitUtils-b69647a1.js";import"./opacityUtils-8b7acc4e.js";import"./Portal-95b0f852.js";import"./locale-30120714.js";import"./PortalGroup-813428fa.js";import"./PortalUser-4126c27a.js";import"./PortalItem-bbd2de41.js";import"./assets-6ba3cd63.js";import"./collectionUtils-3d8a9611.js";import"./layerUtils-6996b9ea.js";let t=class extends g(w(L(O(V($(f(_))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new b({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=C(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(m(()=>this.visible,this._onVisibilityChange.bind(this),y))}_writeLayers(i,e,p,o){const l=[];if(!i)return l;i.forEach(n=>{const a=x(n,o.webmap?o.webmap.getLayerJSONFromResourceInfo(n):null,o);u(a)&&a.layerType&&l.push(a)}),e.layers=l}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:M},i)),Promise.resolve(this)}loadAll(){return v(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=m(()=>i.visible,e=>this._onChildVisibilityChange(i,e),y)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!d(this).initialized)return;const p=this.layers;let o=p.find(l=>l.visible);switch(i){case"exclusive":p.length&&!o&&(o=p.getItemAt(0),o.visible=!0),this._turnOffOtherLayers(o);break;case"inherited":p.forEach(l=>{l.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};r([s({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),r([s({readOnly:!0})],t.prototype,"allTables",void 0),r([s()],t.prototype,"fullExtent",void 0),r([s({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),r([s({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),r([c("layers")],t.prototype,"_writeLayers",null),r([s({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),r([s({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),r([s()],t.prototype,"spatialReference",void 0),r([s({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),r([s({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=r([h("esri.layers.GroupLayer")],t);const Ti=t;export{Ti as default};
