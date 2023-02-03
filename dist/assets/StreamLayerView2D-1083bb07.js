import{e as m,y as n,n as h}from"./cast-6d78d3c7.js";import{a as s}from"./Error-4ed679d7.js";import{t as a,r as l}from"./typedArrayUtil-d02f10a8.js";import{l as c}from"./reactiveUtils-b0e56010.js";import"./ensureType-d98e08e1.js";import f from"./FeatureSet-622e3076.js";import v from"./FeatureLayerView2D-68b28637.js";import{e as O}from"./util-94bdf933.js";import"./string-9c5e03f7.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-930cba29.js";import"./geometry-70b2a4a5.js";import"./Extent-d5fff12d.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./jsonMap-5afaf2ff.js";import"./Graphic-34c50417.js";import"./PopupTemplate-29fe62b5.js";import"./Clonable-58355d3c.js";import"./Collection-42fe629f.js";import"./Evented-b378ccab.js";import"./SimpleObservable-e0897cc6.js";import"./fieldUtils-2efa8993.js";import"./preload-helper-101896b7.js";import"./arcadeOnDemand-72a1843c.js";import"./enumeration-497ef064.js";import"./number-c7f1bfee.js";import"./locale-30120714.js";import"./Identifiable-57df9761.js";import"./symbols-12804594.js";import"./CIMSymbol-33ea3902.js";import"./Symbol-1bb07043.js";import"./Color-b7b9e6bb.js";import"./colorUtils-639f4d25.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-8b7acc4e.js";import"./aaBoundingBox-33fc923c.js";import"./request-e4299080.js";import"./persistableUrlUtils-d18becd9.js";import"./collectionUtils-3d8a9611.js";import"./Portal-95b0f852.js";import"./Loadable-b0d5bb7e.js";import"./Promise-6bd0b483.js";import"./PortalGroup-813428fa.js";import"./PortalUser-4126c27a.js";import"./jsonUtils-5115c7e5.js";import"./Field-bb784640.js";import"./fieldType-9bddd3d4.js";import"./utils-1bc9587b.js";import"./mat3f32-d3d088e8.js";import"./parser-f68dd732.js";import"./mat4-62d5e6a4.js";import"./enums-4ca4641f.js";import"./MaterialKey-cec287ae.js";import"./Utils-b6ef920f.js";import"./enums-ef042d89.js";import"./enums-64ab819c.js";import"./Texture-c2297638.js";import"./context-util-abf86a85.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./FeatureReductionLayer-d24025a2.js";import"./BlendLayer-7a735871.js";import"./TimeExtent-0fd238ea.js";import"./Query-066f2ccf.js";import"./UniqueValueRenderer-8e382829.js";import"./LegendOptions-e31ff575.js";import"./diffUtils-713e5c9b.js";import"./colorRamps-c00f504b.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-eefea0ec.js";import"./lengthUtils-0dde2114.js";import"./unitUtils-b69647a1.js";import"./jsonUtils-c8fbfbd0.js";import"./styleUtils-cde65ff5.js";import"./jsonUtils-7ad404a7.js";import"./DictionaryLoader-46cd8e54.js";import"./LRUCache-4d56ba4d.js";import"./MemCache-1e028041.js";import"./deprecate-46fadabd.js";import"./OperationalLayer-007b4c8b.js";import"./ElevationInfo-618e96ba.js";import"./labelingInfo-69496ac8.js";import"./labelUtils-87bb22ff.js";import"./defaultsJSON-b087dd4d.js";import"./LayerView-5e92a124.js";import"./HandleOwner-6ac6f00a.js";import"./schemaUtils-37c9a4a8.js";import"./LayerFloorInfo-0d02c503.js";import"./visualVariablesUtils-4833b8d3.js";import"./createSymbolSchema-976acefa.js";import"./ExpandedCIM-6cfcc2f7.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-ca34962d.js";import"./mat2d-80bd93af.js";import"./vec2-f978aef8.js";import"./vec2f32-461e65a9.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8770173e.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-305df8f3.js";import"./rendererUtils-a093890e.js";import"./capabilities-5736b16f.js";import"./TileStore-a368d16c.js";import"./Queue-8aae62d3.js";import"./TileKey-ed432ae5.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./workers-e5f6a313.js";import"./Connection-f53be4bf.js";import"./assets-6ba3cd63.js";import"./intl-a5c99ea3.js";import"./messages-634811b5.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-f83851e5.js";import"./RefreshableLayerView-6d197c7a.js";function d(t,r){if(a(t)&&a(r))return null;const e={};return l(r)&&(e.geometry=r.toJSON()),l(t)&&(e.where=t),e}let o=class extends v{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([c(()=>{var t;return(t=this.layer)==null?void 0:t.purgeOptions},()=>this._update()),c(()=>this.suspended,t=>{t?this._proxy.pauseStream():this._proxy.resumeStream()})])}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(t,r){t==="data-received"&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const e=super.on(t,r),i=this;return{remove(){e.remove(),t==="data-received"&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(t,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(t),r).then(e=>{const i=f.fromJSON(e);return i.features.forEach(p=>{p.layer=this.layer,p.sourceLayer=this.layer}),i})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:t=>{this.set(t.propertyName,t.value)}}}_createTileRendererHash(t){const r=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(d(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(t)+r}async _createServiceOptions(){const t=this.layer,{objectIdField:r}=t,e=t.fields.map(u=>u.toJSON()),i=O(t.geometryType),p=t.timeInfo&&t.timeInfo.toJSON()||null,y=t.spatialReference?t.spatialReference.toJSON():null;return{type:"stream",fields:e,geometryType:i,objectIdField:r,timeInfo:p,source:this.layer.parsedUrl,serviceFilter:d(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:y,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:t.customParameters}}};m([n()],o.prototype,"errorString",void 0),m([n({readOnly:!0})],o.prototype,"connectionError",null),m([n()],o.prototype,"connectionStatus",void 0),o=m([h("esri.views.2d.layers.StreamLayerView2D")],o);const Dr=o;export{Dr as default};