import{e as t,y as a,n as h,l as T,f as _,u as N,t as x}from"./cast-6d78d3c7.js";import{a as y}from"./Error-4ed679d7.js";import{q as S,r as L,t as b}from"./typedArrayUtil-d02f10a8.js";import{O as R}from"./MultiOriginJSONSupport-1970ed0f.js";import{w as A}from"./promiseUtils-930cba29.js";import{a as I,U as M}from"./reactiveUtils-b0e56010.js";import"./ensureType-d98e08e1.js";import{r as j,o as J}from"./Extent-d5fff12d.js";import{g as c}from"./persistable-2122ab83.js";import{b as U}from"./Layer-f9f81f65.js";import{i as D}from"./APIKeyMixin-f90cfebd.js";import{p as V}from"./ArcGISService-f6f32fbc.js";import{c as K,d as P}from"./OperationalLayer-007b4c8b.js";import{v as E}from"./PortalLayer-5c12bdba.js";import{t as q}from"./ScaleRangeLayer-c6a35aba.js";import{N as z,L as g}from"./SceneService-596f37bd.js";import{s as G,l as k,u as C,m as F}from"./I3SLayerDefinitions-faf8d899.js";import{j as B,U as H}from"./request-e4299080.js";import{j as Q}from"./Collection-42fe629f.js";import"./geometry-70b2a4a5.js";import{y as W}from"./string-9c5e03f7.js";import{A as X,m as Y}from"./projection-6146477c.js";import{v as w}from"./Polyline-42dcc920.js";import{c as Z}from"./persistableUrlUtils-d18becd9.js";import"./nextTick-3ee5a785.js";import"./preload-helper-101896b7.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./uuid-73213768.js";import"./Evented-b378ccab.js";import"./Identifiable-57df9761.js";import"./Loadable-b0d5bb7e.js";import"./Promise-6bd0b483.js";import"./arcgisLayerUrl-02fe1a62.js";import"./TimeExtent-0fd238ea.js";import"./ElevationInfo-618e96ba.js";import"./jsonMap-5afaf2ff.js";import"./fieldUtils-2efa8993.js";import"./arcadeOnDemand-72a1843c.js";import"./lengthUtils-0dde2114.js";import"./unitUtils-b69647a1.js";import"./opacityUtils-8b7acc4e.js";import"./asyncUtils-18831bb1.js";import"./Portal-95b0f852.js";import"./locale-30120714.js";import"./PortalGroup-813428fa.js";import"./PortalUser-4126c27a.js";import"./PortalItem-bbd2de41.js";import"./assets-6ba3cd63.js";import"./originUtils-1469eeaf.js";import"./HeightModelInfo-645087b5.js";import"./resourceUtils-bab4da0f.js";import"./enumeration-497ef064.js";import"./SimpleObservable-e0897cc6.js";import"./typeUtils-b6c52390.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./mat4-62d5e6a4.js";import"./zscale-72b4355d.js";var f;let n=f=class extends T{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,o,s,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!X(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new _("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const m=new w;Y(e,m,r.layer.spatialReference),o[s]=m.toJSON(r)}else o[s]=e.toJSON(r);delete o[s].spatialReference}clone(){return new f({geometry:W(this.geometry),type:this.type})}};t([a({type:w}),c()],n.prototype,"geometry",void 0),t([j(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),c()],n.prototype,"type",void 0),n=f=t([h("esri.layers.support.SceneModification")],n);const d=n;var p;let l=p=class extends N(Q.ofType(d)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(o=>o.toJSON(e)).filter(o=>!!o.geometry)}static fromJSON(e,o){const s=new p;for(const r of e)s.add(d.fromJSON(r,o));return s}static async fromUrl(e,o,s){const r={url:B(e),origin:"service"},m=await H(e,{responseType:"json",signal:S(s,"signal")}),O=o.toJSON(),u=[];for(const v of m.data)u.push(d.fromJSON({...v,geometry:{...v.geometry,spatialReference:O}},r));return new p({url:e,items:u})}};t([a({type:String})],l.prototype,"url",void 0),l=p=t([h("esri.layers.support.SceneModifications")],l);const $=l;let i=class extends z(V(K(E(q(R(D(U))))))){constructor(...e){super(...e),this._handles=new x,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(I(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,M))}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}readModifications(e,o,s){this._modificationsSource={url:Z(e,s),context:s}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const o=S(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(s){A(s)}if(await this._fetchService(o),L(this._modificationsSource)){const s=await $.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",s,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,o)}beforeSave(){if(!b(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,o){return this._debouncedSaveOperations(g.SAVE_AS,{...o,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(g.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new y("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new y("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new y("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],i.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],i.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],i.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([a({type:G,readOnly:!0})],i.prototype,"nodePages",void 0),t([a({type:[k],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([a({type:[C],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([a({type:[F],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:$}),c({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],i.prototype,"modifications",void 0),t([J(["web-scene","portal-item"],"modifications")],i.prototype,"readModifications",null),t([a(P)],i.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),i=t([h("esri.layers.IntegratedMeshLayer")],i);const it=i;export{it as default};
