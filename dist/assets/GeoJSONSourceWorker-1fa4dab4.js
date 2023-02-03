import{U as O}from"./request-e4299080.js";import{j as k}from"./asyncUtils-18831bb1.js";import{a as g,s as C}from"./Error-4ed679d7.js";import{r as E}from"./typedArrayUtil-d02f10a8.js";import{j as D}from"./promiseUtils-930cba29.js";import{c as q}from"./jsonUtils-5115c7e5.js";import{z as _,E as Q}from"./Extent-d5fff12d.js";import{n as G,r as M,t as P,o as Z,X as A}from"./featureConversionUtils-d9ec654e.js";import{u as v}from"./FeatureStore-e4f85688.js";import{f as F,g as b}from"./projectionSupport-38cc9dc5.js";import{Y as z}from"./QueryEngine-7a3fc12e.js";import{L as N,I as U,T as B}from"./geojson-dd0b9fb6.js";import{o as L,a as J,i as V}from"./clientSideDefaults-bea2dc01.js";import{w as W,m as w,f as T,a as I,g as x}from"./sourceUtils-9030a203.js";import{r as S}from"./FieldsIndex-0e507864.js";import{i as Y}from"./fieldType-9bddd3d4.js";import{M as H}from"./fieldUtils-2efa8993.js";import"./preload-helper-101896b7.js";import"./string-9c5e03f7.js";import"./cast-6d78d3c7.js";import"./ensureType-d98e08e1.js";import"./nextTick-3ee5a785.js";import"./Polyline-42dcc920.js";import"./OptimizedFeature-1bba65b5.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-b378ccab.js";import"./aaBoundingBox-33fc923c.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./aaBoundingRect-ca34962d.js";import"./PooledRBush-bda7a700.js";import"./quickselect-322ec8e1.js";import"./centroid-7800ee74.js";import"./projection-6146477c.js";import"./unitUtils-b69647a1.js";import"./jsonMap-5afaf2ff.js";import"./SimpleObservable-e0897cc6.js";import"./mat4-62d5e6a4.js";import"./assets-6ba3cd63.js";import"./zscale-72b4355d.js";import"./json-48e3ea08.js";import"./MemCache-1e028041.js";import"./normalizeUtils-91a64c2b.js";import"./geometry-70b2a4a5.js";import"./typeUtils-b6c52390.js";import"./QueryEngineResult-4920a7e9.js";import"./quantizationUtils-8770173e.js";import"./ItemCache-b4db8f82.js";import"./WhereClause-646ca60e.js";import"./utils-879afedd.js";import"./generateRendererUtils-6626f9c6.js";import"./colorRamps-c00f504b.js";import"./Color-b7b9e6bb.js";import"./colorUtils-639f4d25.js";import"./enumeration-497ef064.js";import"./Symbol-1bb07043.js";import"./utils-2be9b16b.js";import"./arcadeOnDemand-72a1843c.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-b2e00cf8.js";import"./Scheduler-343fdba6.js";import"./reactiveUtils-b0e56010.js";import"./defaultsJSON-b087dd4d.js";const X={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class lt{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const s=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(t==null?void 0:t.signal));const n=N(r,{geometryType:e.geometryType}),o=e.fields||n.fields||[],l=e.hasZ!=null?e.hasZ:n.hasZ,u=n.geometryType;let m=e.objectIdField||n.objectIdFieldName||"__OBJECTID";const h=e.spatialReference||_;let i=e.timeInfo;o===n.fields&&n.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});let p=new S(o).get(m);p?(p.type!=="esriFieldTypeString"&&(p.type="esriFieldTypeOID"),p.editable=!1,p.nullable=!1,m=p.name):(p={alias:m,name:m,type:n.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(p));const c={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new g("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!Y.jsonValues.includes(a.type))throw new g("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==p.name){const f=H(a);f!==void 0&&(c[a.name]=f)}}this._fieldsIndex=new S(o);const d=this._fieldsIndex.requiredFields.indexOf(p);if(d>-1&&this._fieldsIndex.requiredFields.splice(d,1),i){if(i.startTimeField){const a=this._fieldsIndex.get(i.startTimeField);a?(i.startTimeField=a.name,a.type="esriFieldTypeDate"):i.startTimeField=null}if(i.endTimeField){const a=this._fieldsIndex.get(i.endTimeField);a?(i.endTimeField=a.name,a.type="esriFieldTypeDate"):i.endTimeField=null}if(i.trackIdField){const a=this._fieldsIndex.get(i.trackIdField);a?i.trackIdField=a.name:(i.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:i}}))}i.startTimeField||i.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:i}}),i=null)}const R=u?L(u):null,y={warnings:s,featureErrors:[],layerDefinition:{...X,drawingInfo:R,templates:J(c),extent:null,geometryType:u,objectIdField:m,fields:o,hasZ:!!l,timeInfo:i}};this._queryEngine=new z({fields:o,geometryType:u,hasM:!1,hasZ:l,objectIdField:m,spatialReference:h,timeInfo:i,featureStore:new v({geometryType:u,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=V(c,m);const j=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const $=this._normalizeFeatures(j,y.warnings,y.featureErrors);if(this._queryEngine.featureStore.addMany($),y.layerDefinition.extent=this._queryEngine.fullExtent,y.layerDefinition.timeInfo){const{start:a,end:f}=this._queryEngine.timeExtent;y.layerDefinition.timeInfo.timeExtent=[a,f]}return y}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([W(t,s),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._loadOptions.customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=k(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,s);const r=this._normalizeFeatures(s);r&&this._queryEngine.featureStore.addMany(r)},s=>{this._queryEngine.featureStore.clear(),D(s)||C.getLogger("esri.layers.GeoJSONLayer").error(new g("geojson-layer:refresh","An error occurred during refresh",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:r}=this._queryEngine,n=U(e,{geometryType:t,hasZ:s,objectIdField:r});if(!Q(this._queryEngine.spatialReference,_))for(const o of n)E(o.geometry)&&(o.geometry=G(b(M(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this._loadOptions,r=(await O(t,{responseType:"json",query:{...s},signal:e})).data;return await B(r),r}_normalizeFeatures(e,t,s){const{objectIdField:r}=this._queryEngine,n=[];for(const o of e){const l=this._createDefaultAttributes(),u=w(this._fieldsIndex,l,o.attributes,!0,t);u?s==null||s.push(u):(this._assignObjectId(l,o.attributes,!0),o.attributes=l,o.objectId=l[r],n.push(o))}return n}_applyEdits(e){const{adds:t,updates:s,deletes:r}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),s&&s.length&&this._applyUpdateEdits(n,s),r&&r.length){for(const o of r)n.deleteResults.push(T(o));this._queryEngine.featureStore.removeManyById(r)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:r,hasM:n,hasZ:o,objectIdField:l,spatialReference:u,featureStore:m}=this._queryEngine,h=[];for(const i of t){if(i.geometry&&r!==q(i.geometry)){s.push(I("Incorrect geometry type."));continue}const p=this._createDefaultAttributes(),c=w(this._fieldsIndex,p,i.attributes);if(c)s.push(c);else{if(this._assignObjectId(p,i.attributes),i.attributes=p,i.uid!=null){const d=i.attributes[l];e.uidToObjectId[i.uid]=d}if(E(i.geometry)){const d=i.geometry.spatialReference??u;i.geometry=b(x(i.geometry,d),d,u)}h.push(i),s.push(T(i.attributes[l]))}}m.addMany(P([],h,r,o,n,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:r,hasZ:n,objectIdField:o,spatialReference:l,featureStore:u}=this._queryEngine;for(const m of t){const{attributes:h,geometry:i}=m,p=h&&h[o];if(p==null){e.push(I(`Identifier field ${o} missing`));continue}if(!u.has(p)){e.push(I(`Feature with object id ${p} missing`));continue}const c=Z(u.getFeature(p),s,n,r);if(E(i)){if(s!==q(i)){e.push(I("Incorrect geometry type."));continue}const d=i.spatialReference??l;c.geometry=b(x(i,d),d,l)}if(h){const d=w(this._fieldsIndex,c.attributes,h);if(d){e.push(d);continue}}u.add(A(c,s,n,r,o)),e.push(T(p))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if(s.type==="esriFieldTypeString")return()=>s.name+"-"+Date.now().toString(16);let r=Number.NEGATIVE_INFINITY;for(const n of t)n.objectId&&(r=Math.max(r,n.objectId));return r=Math.max(0,r)+1,()=>r++}_assignObjectId(e,t,s=!1){const r=this._queryEngine.objectIdField;e[r]=s&&r in t?t[r]:this._objectIdGenerator()}async _checkProjection(e){try{await F(_,e)}catch{throw new g("geojson-layer","Projection not supported")}}}export{lt as default};
