import{_ as y}from"./preload-helper-101896b7.js";import{c as f,e as s,y as a,n as g}from"./cast-6d78d3c7.js";import{U as v,g as w}from"./request-e4299080.js";import{s as $,a as T}from"./Error-4ed679d7.js";import{C as b,r as m,e as S,N as L}from"./typedArrayUtil-d02f10a8.js";import{O as I}from"./MultiOriginJSONSupport-1970ed0f.js";import{f as c,w as k}from"./promiseUtils-930cba29.js";import"./ensureType-d98e08e1.js";import{o as D}from"./Extent-d5fff12d.js";import{v as E}from"./HeightModelInfo-645087b5.js";import{b as x}from"./Layer-739799ab.js";import{s as O}from"./ArcGISCachedService-3557fba7.js";import{p as V}from"./ArcGISService-f6f32fbc.js";import{c as j,f as P}from"./OperationalLayer-54654858.js";import{v as A}from"./PortalLayer-644d657e.js";import{u as M}from"./workers-7aef8bf1.js";import"./string-9c5e03f7.js";import"./nextTick-3ee5a785.js";import"./jsonMap-5afaf2ff.js";import"./unitUtils-b69647a1.js";import"./geometry-70b2a4a5.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./Evented-b378ccab.js";import"./Identifiable-57df9761.js";import"./Loadable-b0d5bb7e.js";import"./Promise-6bd0b483.js";import"./TilemapCache-9e0e130c.js";import"./TileInfo-92f7dc61.js";import"./aaBoundingRect-ca34962d.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./byteSizeEstimations-90c5a50d.js";import"./HandleOwner-6ac6f00a.js";import"./reactiveUtils-b0e56010.js";import"./LRUCache-4d56ba4d.js";import"./MemCache-1e028041.js";import"./arcgisLayerUrl-02fe1a62.js";import"./persistableUrlUtils-d18becd9.js";import"./TimeExtent-0fd238ea.js";import"./ElevationInfo-28459ff1.js";import"./fieldUtils-141b2ff2.js";import"./arcadeOnDemand-72c57f7a.js";import"./lengthUtils-0dde2114.js";import"./opacityUtils-8b7acc4e.js";import"./asyncUtils-18831bb1.js";import"./Portal-fbb2b73d.js";import"./locale-30120714.js";import"./PortalGroup-813428fa.js";import"./PortalUser-cf18ae9d.js";import"./PortalItem-69c4a143.js";import"./assets-6ba3cd63.js";import"./Connection-dd24ab83.js";import"./Queue-8aae62d3.js";import"./intl-a5c99ea3.js";import"./number-c7f1bfee.js";import"./messages-634811b5.js";class U{constructor(e,t,r,l,p={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=M(e,{...p,schedule:l}).then(h=>{if(this._thread===void 0){this._thread=h,this._promise=null,p.hasInitialize&&this.broadcast({},"initialize");for(const n of this._listeners)this._connectListener(n)}else h.close()}),this._promise.catch(h=>$.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${h}`))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),f(()=>{r.removed=!0,b(this._listeners,r),this._thread&&m(r.threadHandle)&&r.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const l=this._transferLists[e],p=l?l(t):[];return this._thread.invoke(e,t,{transferList:p,signal:r})}return this._promise?this._promise.then(()=>(c(r),this.invokeMethod(e,t,r))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}class _ extends U{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,r){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}release(){--this.ref<=0&&(d.forEach((e,t)=>{e===this&&d.delete(t)}),this.destroy())}}const d=new Map;function N(i=null){let e=d.get(S(i));return e||(m(i)?(e=new _(t=>i.schedule(t)),d.set(i,e)):(e=new _,d.set(null,e))),++e.ref,e}let o=class extends O(V(j(A(I(x))))){constructor(...i){super(...i),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=N()}normalizeCtorArgs(i,e){return typeof i=="string"?{url:i,...e}:i}destroy(){this._lercDecoder=L(this._lercDecoder)}readVersion(i,e){let t=e.currentVersion;return t||(t=9.3),t}load(i){const e=m(i)?i.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let r=0;r<t.typeKeywords.length;r++)if(t.typeKeywords[r].toLowerCase()==="elevation 3d layer")return!0;throw new T("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},i).catch(k).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(i,e,t,r){const l=m((r=r||{signal:null}).signal)?r.signal:r.signal=new AbortController().signal,p={responseType:"array-buffer",signal:l},h={noDataValue:r.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(i,e,t,r)).then(()=>v(this.getTileUrl(i,e,t),p)).then(n=>this._lercDecoder.decode(n.data,h,l)).then(n=>{var u;return{values:n.pixelData,width:n.width,height:n.height,maxZError:(u=n.fileInfo)==null?void 0:u.maxZError,noDataValue:n.noDataValue,minValue:n.minValue,maxValue:n.maxValue}})}getTileUrl(i,e,t){const r=!this.tilemapCache&&this.supportsBlankTile,l=w({...this.parsedUrl.query,blankTile:!r&&null});return`${this.parsedUrl.path}/tile/${i}/${e}/${t}${l?"?"+l:""}`}async queryElevation(i,e){const{ElevationQuery:t}=await y(()=>import("./ElevationQuery-048df8cb.js"),["assets/ElevationQuery-048df8cb.js","assets/asyncUtils-18831bb1.js","assets/cast-6d78d3c7.js","assets/typedArrayUtil-d02f10a8.js","assets/string-9c5e03f7.js","assets/Error-4ed679d7.js","assets/ensureType-d98e08e1.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-930cba29.js","assets/unitUtils-b69647a1.js","assets/jsonMap-5afaf2ff.js","assets/Extent-d5fff12d.js","assets/Polyline-42dcc920.js","assets/projection-6146477c.js","assets/preload-helper-101896b7.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/SimpleObservable-e0897cc6.js","assets/mat4-62d5e6a4.js","assets/assets-6ba3cd63.js","assets/request-e4299080.js","assets/zscale-72b4355d.js","assets/aaBoundingRect-ca34962d.js","assets/geometry-70b2a4a5.js","assets/typeUtils-b6c52390.js","assets/TileInfo-92f7dc61.js"]);return c(e),new t().query(this,i,e)}async createElevationSampler(i,e){const{ElevationQuery:t}=await y(()=>import("./ElevationQuery-048df8cb.js"),["assets/ElevationQuery-048df8cb.js","assets/asyncUtils-18831bb1.js","assets/cast-6d78d3c7.js","assets/typedArrayUtil-d02f10a8.js","assets/string-9c5e03f7.js","assets/Error-4ed679d7.js","assets/ensureType-d98e08e1.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-930cba29.js","assets/unitUtils-b69647a1.js","assets/jsonMap-5afaf2ff.js","assets/Extent-d5fff12d.js","assets/Polyline-42dcc920.js","assets/projection-6146477c.js","assets/preload-helper-101896b7.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/SimpleObservable-e0897cc6.js","assets/mat4-62d5e6a4.js","assets/assets-6ba3cd63.js","assets/request-e4299080.js","assets/zscale-72b4355d.js","assets/aaBoundingRect-ca34962d.js","assets/geometry-70b2a4a5.js","assets/typeUtils-b6c52390.js","assets/TileInfo-92f7dc61.js"]);return c(e),new t().createSampler(this,i,e)}_fetchTileAvailability(i,e,t,r){return this.tilemapCache?this.tilemapCache.fetchAvailability(i,e,t,r):Promise.resolve("unknown")}async _fetchImageService(i){var r;if(this.sourceJSON)return this.sourceJSON;const e={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:i},t=await v(this.parsedUrl.path,e);t.ssl&&(this.url=(r=this.url)==null?void 0:r.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};s([a({json:{read:{source:"copyrightText"}}})],o.prototype,"copyright",void 0),s([a({readOnly:!0,type:E})],o.prototype,"heightModelInfo",void 0),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([a({type:["show","hide"]})],o.prototype,"listMode",void 0),s([a({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],o.prototype,"minScale",void 0),s([a({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],o.prototype,"maxScale",void 0),s([a({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),s([a({type:["ArcGISTiledElevationServiceLayer"]})],o.prototype,"operationalLayerType",void 0),s([a()],o.prototype,"sourceJSON",void 0),s([a({json:{read:!1},value:"elevation",readOnly:!0})],o.prototype,"type",void 0),s([a(P)],o.prototype,"url",void 0),s([a()],o.prototype,"version",void 0),s([D("version",["currentVersion"])],o.prototype,"readVersion",null),o=s([g("esri.layers.ElevationLayer")],o),o.prototype.fetchTile.__isDefault__=!0;const Je=o;export{Je as default};