import{_ as n}from"./preload-helper-101896b7.js";import{e as o,y as i,n as h}from"./cast-6d78d3c7.js";import"./geometry-70b2a4a5.js";import{j as b,U as c}from"./request-e4299080.js";import{b as f,s as p,a as v}from"./Error-4ed679d7.js";import{n as g}from"./Evented-b378ccab.js";import{s as w}from"./Identifiable-57df9761.js";import{m as _}from"./Loadable-b0d5bb7e.js";import{j as L}from"./promiseUtils-930cba29.js";import"./typedArrayUtil-d02f10a8.js";import"./ensureType-d98e08e1.js";import{a as y,k as l}from"./Extent-d5fff12d.js";async function D(t){const r="portalItem"in t?t:{portalItem:t},d=await n(()=>import("./portalLayers-645eb7cc.js"),["assets/portalLayers-645eb7cc.js","assets/Error-4ed679d7.js","assets/string-9c5e03f7.js","assets/typedArrayUtil-d02f10a8.js","assets/lazyLayerLoader-2288f664.js","assets/preload-helper-101896b7.js","assets/PortalItem-bbd2de41.js","assets/cast-6d78d3c7.js","assets/ensureType-d98e08e1.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-930cba29.js","assets/assets-6ba3cd63.js","assets/request-e4299080.js","assets/Loadable-b0d5bb7e.js","assets/Promise-6bd0b483.js","assets/Extent-d5fff12d.js","assets/Portal-95b0f852.js","assets/locale-30120714.js","assets/PortalGroup-813428fa.js","assets/jsonMap-5afaf2ff.js","assets/PortalUser-4126c27a.js","assets/layersLoader-f177f715.js","assets/arcgisLayerUrl-02fe1a62.js","assets/persistableUrlUtils-d18becd9.js","assets/jsonContext-13d2310d.js","assets/portalItemUtils-ff52c3bb.js","assets/projection-6146477c.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/unitUtils-b69647a1.js","assets/SimpleObservable-e0897cc6.js","assets/mat4-62d5e6a4.js","assets/Polyline-42dcc920.js","assets/zscale-72b4355d.js","assets/styleUtils-45e2d86c.js","assets/asyncUtils-18831bb1.js","assets/geometry-70b2a4a5.js","assets/typeUtils-b6c52390.js","assets/Evented-b378ccab.js","assets/Identifiable-57df9761.js"]);try{return await d.fromItem(r)}catch(s){const a=r&&r.portalItem,u=a&&a.id||"unset",m=a&&a.portal&&a.portal.url||f.portalUrl;throw p.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+m+"', id: '"+u+"')",s),s}}let E=0,e=class extends g.EventedMixin(w(_)){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y(-180,-90,180,90,l.WGS84),this.id=Date.now().toString(16)+"-layer-"+E++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=l.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r=typeof t=="string"?{url:t}:t;return(await n(()=>import("./arcgisLayers-cfc9396e.js"),["assets/arcgisLayers-cfc9396e.js","assets/preload-helper-101896b7.js","assets/Error-4ed679d7.js","assets/string-9c5e03f7.js","assets/typedArrayUtil-d02f10a8.js","assets/request-e4299080.js","assets/promiseUtils-930cba29.js","assets/arcgisLayerUrl-02fe1a62.js","assets/persistableUrlUtils-d18becd9.js","assets/fetchService-09b66866.js","assets/lazyLayerLoader-2288f664.js"])).fromUrl(r)}static fromPortalItem(t){return D(t)}initialize(){this.when().catch(t=>{L(t)||p.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})})}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t)}}get hasAttributionData(){return this.attributionDataUrl!=null}get parsedUrl(){return b(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await c(t,{query:{f:"json"},responseType:"json"})).data;throw new v("layer:no-attribution-data","Layer does not have attribution data")}};o([i({type:String})],e.prototype,"attributionDataUrl",void 0),o([i({type:y})],e.prototype,"fullExtent",void 0),o([i({readOnly:!0})],e.prototype,"hasAttributionData",null),o([i({type:String,clonable:!1})],e.prototype,"id",void 0),o([i({type:Boolean,nonNullable:!0})],e.prototype,"legendEnabled",void 0),o([i({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0),o([i({type:Number,range:{min:0,max:1},nonNullable:!0})],e.prototype,"opacity",void 0),o([i({clonable:!1})],e.prototype,"parent",void 0),o([i({readOnly:!0})],e.prototype,"parsedUrl",null),o([i({type:Boolean})],e.prototype,"popupEnabled",void 0),o([i({type:Boolean})],e.prototype,"attributionVisible",void 0),o([i({type:l})],e.prototype,"spatialReference",void 0),o([i({type:String})],e.prototype,"title",void 0),o([i({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0),o([i()],e.prototype,"url",void 0),o([i({type:Boolean,nonNullable:!0})],e.prototype,"visible",void 0),e=o([h("esri.layers.Layer")],e);const V=e;export{V as b};