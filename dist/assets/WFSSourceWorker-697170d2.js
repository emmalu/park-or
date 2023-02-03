import{j as l}from"./asyncUtils-18831bb1.js";import{a as n,s as g}from"./Error-4ed679d7.js";import{r as _,e as f}from"./typedArrayUtil-d02f10a8.js";import{f as m,j as d}from"./promiseUtils-930cba29.js";import{E as w,z as p}from"./Extent-d5fff12d.js";import{n as E,r as q}from"./featureConversionUtils-d9ec654e.js";import{u as F}from"./FeatureStore-e4f85688.js";import{g as S,f as T}from"./projectionSupport-38cc9dc5.js";import{Y as x}from"./QueryEngine-f445533b.js";import{T as j,I}from"./geojson-c624d850.js";import{m as b}from"./sourceUtils-00946dc8.js";import{K as C}from"./wfsUtils-9891b472.js";import{r as P}from"./FieldsIndex-c06d221a.js";import"./cast-6d78d3c7.js";import"./string-9c5e03f7.js";import"./ensureType-d98e08e1.js";import"./nextTick-3ee5a785.js";import"./jsonUtils-5115c7e5.js";import"./Polyline-42dcc920.js";import"./OptimizedFeature-1bba65b5.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-b378ccab.js";import"./aaBoundingBox-33fc923c.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./aaBoundingRect-ca34962d.js";import"./PooledRBush-bda7a700.js";import"./quickselect-322ec8e1.js";import"./centroid-7800ee74.js";import"./projection-6146477c.js";import"./preload-helper-101896b7.js";import"./unitUtils-b69647a1.js";import"./jsonMap-5afaf2ff.js";import"./SimpleObservable-e0897cc6.js";import"./mat4-62d5e6a4.js";import"./assets-6ba3cd63.js";import"./request-e4299080.js";import"./zscale-72b4355d.js";import"./json-48e3ea08.js";import"./MemCache-1e028041.js";import"./normalizeUtils-91a64c2b.js";import"./geometry-70b2a4a5.js";import"./typeUtils-b6c52390.js";import"./QueryEngineResult-5b50d77e.js";import"./quantizationUtils-8770173e.js";import"./ItemCache-b4db8f82.js";import"./WhereClause-646ca60e.js";import"./utils-879afedd.js";import"./generateRendererUtils-6626f9c6.js";import"./colorRamps-c00f504b.js";import"./Color-b7b9e6bb.js";import"./colorUtils-639f4d25.js";import"./enumeration-497ef064.js";import"./Symbol-1bb07043.js";import"./utils-2be9b16b.js";import"./fieldUtils-141b2ff2.js";import"./arcadeOnDemand-72c57f7a.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-b2e00cf8.js";import"./Scheduler-343fdba6.js";import"./reactiveUtils-b0e56010.js";import"./xmlUtils-444cb4c0.js";import"./Field-bb784640.js";import"./fieldType-9bddd3d4.js";class At{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await C(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:t});await j(i),m(t);const o=I(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!w(this._queryEngine.spatialReference,p))for(const r of o)_(r.geometry)&&(r.geometry=E(S(q(r.geometry,this._queryEngine.geometryType,!1,!1),p,this._queryEngine.spatialReference)));let a=1;for(const r of o){const s={};b(this._fieldsIndex,s,r.attributes,!0),r.attributes=s,r.attributes[e]==null&&(r.objectId=r.attributes[e]=a++)}return o}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:o,spatialReference:a,fields:r,geometryType:s,featureType:u,objectIdField:h,customParameters:y}=t;this._featureType=u,this._customParameters=y,this._getFeatureUrl=i,this._getFeatureOutputFormat=o,this._fieldsIndex=new P(r),await this._checkProjection(a),m(e),this._queryEngine=new x({fields:r,geometryType:s,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:a,timeInfo:null,featureStore:new F({geometryType:s,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(f(e.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new n("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=l(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),d(i)||g.getLogger("esri.layers.WFSLayer").error(new n("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await T(p,t)}catch{throw new n("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{At as default};