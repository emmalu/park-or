import{_ as R}from"./preload-helper-101896b7.js";import{e as m,y as _,n as b}from"./cast-6d78d3c7.js";import"./geometry-70b2a4a5.js";import{B as C,U as x}from"./request-e4299080.js";import{a,s as c}from"./Error-4ed679d7.js";import{r as h,t as f,z as k,q as L}from"./typedArrayUtil-d02f10a8.js";import{U as E,D as F}from"./promiseUtils-930cba29.js";import"./ensureType-d98e08e1.js";import"./string-9c5e03f7.js";import{o as O}from"./zscale-72b4355d.js";import{n as N}from"./Evented-b378ccab.js";import{c as v}from"./query-4348ce6f.js";import{x as q}from"./Query-066f2ccf.js";import{v as $}from"./jsonUtils-5115c7e5.js";import{k as P}from"./Extent-d5fff12d.js";import"./nextTick-3ee5a785.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./jsonMap-5afaf2ff.js";import"./unitUtils-b69647a1.js";import"./normalizeUtils-91a64c2b.js";import"./pbfQueryUtils-91f50fb5.js";import"./pbf-e4fd0249.js";import"./OptimizedFeature-1bba65b5.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-1674984c.js";import"./TimeExtent-0fd238ea.js";import"./enumeration-497ef064.js";import"./Field-bb784640.js";import"./fieldType-9bddd3d4.js";import"./Clonable-58355d3c.js";let y=class extends N.EventedAccessor{get connectionError(){return this.errorString?new a("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}};m([_({readOnly:!0})],y.prototype,"connectionError",null),y=m([b("esri.layers.support.StreamConnection")],y);const j=y;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let p=class extends j{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._config=e,this._featureZScaler=O(t,o,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){h(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(f(this._websocket))return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const o=C(e,this._config.customParameters);this._websocket=await this._createWebSocket(o),this.notifyChange("connectionStatus")}catch(o){const s=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(c.getLogger(this.declaredClass).error(new a("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(c.getLogger(this.declaredClass).error(new a("websocket-connection",`Failed to connect. Attempting to reconnect in ${s}s`,o)),await E(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_createWebSocket(e){return new Promise((t,r)=>{const o=new WebSocket(e);o.onopen=()=>{if(o.onopen=null,this.destroyed)return o.onclose=null,void o.close();o.onclose=s=>this._onClose(s),o.onerror=s=>this._onError(s),o.onmessage=s=>this._onMessage(s),t(o)},o.onclose=s=>{o.onopen=o.onclose=null,r(s)}})}async _handshake(e=1e4){const t=this._websocket;if(f(t))return;const r=F(),o=t.onmessage,{filter:s,outFields:n,spatialReference:l}=this._config;return r.timeout(e),t.onmessage=u=>{var i;let d=null;try{d=JSON.parse(u.data)}catch{}d&&typeof d=="object"||(c.getLogger(this.declaredClass).error(new a("websocket-connection","Protocol violation. Handshake failed - malformed message",u.data)),r.reject(),this.destroy()),((i=d.spatialReference)==null?void 0:i.wkid)!==(l==null?void 0:l.wkid)&&(c.getLogger(this.declaredClass).error(new a("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,u.data)),r.reject(),this.destroy()),d.format!=="json"&&(c.getLogger(this.declaredClass).error(new a("websocket-connection","Protocol violation. Handshake failed - format is not set",u.data)),r.reject(),this.destroy()),s&&d.filter!==s&&c.getLogger(this.declaredClass).error(new a("websocket-connection","Tried to set filter, but server doesn't support it")),n&&d.outFields!==n&&c.getLogger(this.declaredClass).error(new a("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=o,r.resolve()},t.send(JSON.stringify({filter:s,outFields:n,format:"json",spatialReference:{wkid:l.wkid}})),r.promise}_onMessage(e){try{const t=JSON.parse(e.data);if(t.type!=="featureResult")throw new a("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const r of t.features)h(this._featureZScaler)&&this._featureZScaler(r.geometry),this.onFeature(r)}catch(t){return c.getLogger(this.declaredClass).error(new a("websocket-connection","Failed to parse message",t)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),c.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),e.code!==1e3&&c.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};m([_()],p.prototype,"connectionStatus",null),m([_()],p.prototype,"errorString",void 0),p=m([b("esri.layers.graphics.sources.connections.WebSocketConnection")],p);const W=1e4,D={maxQueryDepth:5,maxRecordCountFactor:3};let w=class extends p{constructor(e){super({...D,...e})}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||c.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),h(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(r){return void c.getLogger(this.declaredClass).error(new a("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=x(e.path,{query:t,responseType:"json"}),o=(await r).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:s}=r,n=this._inferWebSocketBaseUrl(o);return C(`${n}/subscribe`,{outSR:""+t.wkid,token:s})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return c.getLogger(this.declaredClass).error(new a("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(f(r)||f(e)&&f(t))return;const o=JSON.stringify({filter:this._serializeFilter(e,t)});let s=!1;const n=F(),l=()=>{s||(this.destroyed||this._websocket!==r||c.getLogger(this.declaredClass).error(new a("geoevent-connection","Server timed out when setting filter")),n.reject())},u=d=>{const i=JSON.parse(d.data);i.filter&&(i.error&&(c.getLogger(this.declaredClass).error(new a("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),r.onmessage=this._onMessage.bind(this),s=!0,n.resolve())};return r.onmessage=u,r.send(o),setTimeout(l,W),n.promise}_serializeFilter(e,t){const r={};if(f(e)&&f(t))return r;if(h(e)&&e.geometry)try{const o=$(e.geometry);if(o.type!=="extent")throw new a(`Expected extent but found type ${o.type}`);r.geometry=JSON.stringify(o.shiftCentralMeridian())}catch(o){c.getLogger(this.declaredClass).error(new a("geoevent-connection","Encountered an error when setting connection geometryDefinition",o))}return h(e)&&e.where&&e.where!=="1 = 1"&&(r.where=e.where),h(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return c.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:s}=this._relatedFeatures.get(r);for(const n in o)e.attributes[n]=o[n];return s&&(e.geometry=s),e.geometry||e.centroid||c.getLogger(this.declaredClass).error(new a("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const s=await o;if(!s)return;for(const n of s.features)this.onFeature(this._enrich(n))}catch(e){c.getLogger(this.declaredClass).error(new a("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await R(()=>import("./FeatureLayer-95c99e68.js"),["assets/FeatureLayer-95c99e68.js","assets/preload-helper-101896b7.js","assets/cast-6d78d3c7.js","assets/typedArrayUtil-d02f10a8.js","assets/string-9c5e03f7.js","assets/Error-4ed679d7.js","assets/ensureType-d98e08e1.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-930cba29.js","assets/PopupTemplate-29fe62b5.js","assets/Clonable-58355d3c.js","assets/Collection-42fe629f.js","assets/Evented-b378ccab.js","assets/SimpleObservable-e0897cc6.js","assets/Extent-d5fff12d.js","assets/fieldUtils-2efa8993.js","assets/arcadeOnDemand-72a1843c.js","assets/geometry-70b2a4a5.js","assets/Polyline-42dcc920.js","assets/typeUtils-b6c52390.js","assets/jsonMap-5afaf2ff.js","assets/enumeration-497ef064.js","assets/number-c7f1bfee.js","assets/locale-30120714.js","assets/Identifiable-57df9761.js","assets/UniqueValueRenderer-8e382829.js","assets/symbols-12804594.js","assets/CIMSymbol-33ea3902.js","assets/Symbol-1bb07043.js","assets/Color-b7b9e6bb.js","assets/colorUtils-639f4d25.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-8b7acc4e.js","assets/aaBoundingBox-33fc923c.js","assets/request-e4299080.js","assets/persistableUrlUtils-d18becd9.js","assets/collectionUtils-3d8a9611.js","assets/Portal-95b0f852.js","assets/Loadable-b0d5bb7e.js","assets/Promise-6bd0b483.js","assets/PortalGroup-813428fa.js","assets/PortalUser-4126c27a.js","assets/LegendOptions-e31ff575.js","assets/reactiveUtils-b0e56010.js","assets/diffUtils-713e5c9b.js","assets/colorRamps-c00f504b.js","assets/sizeVariableUtils-d4870b0d.js","assets/Graphic-34c50417.js","assets/jsonUtils-5115c7e5.js","assets/compilerUtils-eefea0ec.js","assets/lengthUtils-0dde2114.js","assets/unitUtils-b69647a1.js","assets/jsonUtils-c8fbfbd0.js","assets/styleUtils-cde65ff5.js","assets/jsonUtils-7ad404a7.js","assets/DictionaryLoader-46cd8e54.js","assets/LRUCache-4d56ba4d.js","assets/MemCache-1e028041.js","assets/deprecate-46fadabd.js","assets/heatmapUtils-90a13d85.js","assets/vec4f64-018b3fa6.js","assets/MultiOriginJSONSupport-1970ed0f.js","assets/LayerFloorInfo-0d02c503.js","assets/FeatureLayerBase-6192846c.js","assets/Field-bb784640.js","assets/fieldType-9bddd3d4.js","assets/HeightModelInfo-645087b5.js","assets/arcgisLayerUrl-02fe1a62.js","assets/OperationalLayer-007b4c8b.js","assets/TimeExtent-0fd238ea.js","assets/ElevationInfo-618e96ba.js","assets/RelationshipQuery-b5b427dc.js","assets/Query-066f2ccf.js","assets/Layer-f9f81f65.js","assets/HandleOwner-6ac6f00a.js","assets/workers-e5f6a313.js","assets/Connection-f53be4bf.js","assets/Queue-8aae62d3.js","assets/assets-6ba3cd63.js","assets/intl-a5c99ea3.js","assets/messages-634811b5.js","assets/editsZScale-e318eb4a.js","assets/queryZScale-1674984c.js","assets/zscale-72b4355d.js","assets/FeatureSet-622e3076.js","assets/APIKeyMixin-f90cfebd.js","assets/ArcGISService-f6f32fbc.js","assets/BlendLayer-7a735871.js","assets/parser-f68dd732.js","assets/mat4-62d5e6a4.js","assets/CustomParametersMixin-5e3018da.js","assets/EditBusLayer-1372e92b.js","assets/FeatureReductionLayer-d24025a2.js","assets/labelingInfo-69496ac8.js","assets/labelUtils-87bb22ff.js","assets/defaultsJSON-b087dd4d.js","assets/OrderedLayer-7b3473c8.js","assets/PortalLayer-5c12bdba.js","assets/asyncUtils-18831bb1.js","assets/PortalItem-bbd2de41.js","assets/RefreshableLayer-84ec1468.js","assets/ScaleRangeLayer-c6a35aba.js","assets/TemporalLayer-ac8e2c3d.js","assets/TimeInfo-a1791ae0.js","assets/FeatureTemplate-773a8865.js","assets/FeatureType-6c50f4e3.js","assets/fieldProperties-9268e64b.js","assets/FieldsIndex-0e507864.js","assets/versionUtils-5ccafbea.js","assets/styleUtils-45e2d86c.js","assets/TopFeaturesQuery-7da1d7c1.js","assets/popupUtils-40f744cb.js"])).default({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,s=r.query.supportsPagination,n=r.query.supportsCentroid,l=this._config.maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,d=o?u*l:u,i=new q;if(i.outFields=k(this._config.outFields,["*"]),i.where=k(L(this._config.filter,"where"),"1=1"),i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=P.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),o&&(i.maxRecordCountFactor=l),s)return i.num=d,t.destroy(),this._queryPages(e,i);const S=await v(e,i,this._config.sourceSpatialReference);return t.destroy(),S.data}async _queryPages(e,t,r=[],o=0){t.start=h(t.num)?o*t.num:null;const{data:s}=await v(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&o<this._config.maxQueryDepth?(s.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,o+1)):(r.forEach(n=>s.features.push(n)),s)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const s of r){const n=s.attributes[o];t.set(n,s)}this._relatedFeatures=t}};w=m([b("esri.layers.graphics.sources.connections.GeoEventConnection")],w);const T=w;function me(e,t,r,o,s,n,l,u){const d=e.path.indexOf("wss://")===0||e.path.indexOf("ws://")===0,i={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:o,filter:s,maxReconnectionAttempts:n,maxReconnectionInterval:l,customParameters:u};return d?new p(i):new T(i)}export{me as createConnection};
