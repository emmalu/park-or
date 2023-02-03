import{e as _,n as F}from"./cast-6d78d3c7.js";import"./string-9c5e03f7.js";import{r as S,o as f}from"./typedArrayUtil-d02f10a8.js";import"./Error-4ed679d7.js";import"./ensureType-d98e08e1.js";import{m as U}from"./diffUtils-713e5c9b.js";import{s as v}from"./heatmapUtils-90a13d85.js";import{Q as E}from"./enums-ef042d89.js";import{p as O}from"./BaseProcessor-295710df.js";import{l as a}from"./tileUtils-23b52606.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-930cba29.js";import"./Collection-42fe629f.js";import"./Evented-b378ccab.js";import"./SimpleObservable-e0897cc6.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./screenUtils-7afeb41c.js";import"./vec4f64-018b3fa6.js";import"./HandleOwner-6ac6f00a.js";import"./reactiveUtils-b0e56010.js";import"./Extent-d5fff12d.js";import"./Query-066f2ccf.js";import"./geometry-70b2a4a5.js";import"./Polyline-42dcc920.js";import"./typeUtils-b6c52390.js";import"./jsonMap-5afaf2ff.js";import"./TimeExtent-0fd238ea.js";import"./enumeration-497ef064.js";import"./jsonUtils-5115c7e5.js";import"./Field-bb784640.js";import"./fieldType-9bddd3d4.js";import"./Clonable-58355d3c.js";import"./TileKey-ed432ae5.js";class n{constructor(t,r){this.offset=t,this.extent=r}}function g(i){const t=i.key,r=new Map,s=256,e=E,o=i.tileInfoView.tileInfo.isWrappable;return r.set(a(t,-1,-1,o).id,new n([-e,-e],[e-s,e-s,e,e])),r.set(a(t,0,-1,o).id,new n([0,-e],[0,e-s,e,e])),r.set(a(t,1,-1,o).id,new n([e,-e],[0,e-s,s,e])),r.set(a(t,-1,0,o).id,new n([-e,0],[e-s,0,e,e])),r.set(a(t,1,0,o).id,new n([e,0],[0,0,s,e])),r.set(a(t,-1,1,o).id,new n([-e,e],[e-s,0,e,s])),r.set(a(t,0,1,o).id,new n([0,e],[0,0,e,s])),r.set(a(t,1,1,o).id,new n([e,e],[0,0,s,s])),r}let l=class extends O{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(i,t){const r=t.schema.processors[0];r.type==="heatmap"&&U(this._schema,r)&&(i.mesh=!0,this._schema=r)}onTileUpdate(i){for(const t of i.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(i){const t={clear:!0};return this._tileKeyToFeatureSets.delete(i.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:i.id,data:t})}async onTileMessage(i,t,r){this._tileKeyToFeatureSets.has(i.key.id)||this._tileKeyToFeatureSets.set(i.key.id,new Map);const s=this._tileKeyToFeatureSets.get(i.key.id);if(S(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&s.set(t.addOrUpdate.instance,t),t.end){const e=[],o=g(i);this._tileKeyToFeatureSets.forEach((c,p)=>{if(p===i.key.id)c.forEach(m=>f(m.addOrUpdate,d=>e.push(d)));else if(o.has(p)){const m=o.get(p),[d,T]=m.offset;c.forEach(w=>f(w.addOrUpdate,k=>{const K=k.transform(d,T,1,1);e.push(K)}))}});const h=v(e,this._schema.mesh,512,512),u={tileKey:i.key.id,intensityInfo:h},y=[h.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",u,{...r,transferList:y})}}onTileError(i,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:i.id,error:t},r)}};l=_([F("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const me=l;export{me as default};