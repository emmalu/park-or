import{e as l,y as c,n as w}from"./cast-6d78d3c7.js";import{s as g}from"./Error-4ed679d7.js";import{j as h}from"./promiseUtils-930cba29.js";import{l as I}from"./reactiveUtils-b0e56010.js";import"./typedArrayUtil-d02f10a8.js";import"./ensureType-d98e08e1.js";import{E as f}from"./Extent-d5fff12d.js";import{t as S,n as d}from"./imageUtils-f5c68deb.js";import{y as T,u as v}from"./LayerView-5e92a124.js";import{h as V}from"./TileStore-a368d16c.js";import{e as y}from"./TileKey-ed432ae5.js";import{y as x,r as M}from"./TileStrategy-40f1ecb0.js";import{i as q}from"./RefreshableLayerView-6d197c7a.js";import"./string-9c5e03f7.js";import"./nextTick-3ee5a785.js";import"./BitmapTileContainer-f80c60ba.js";import"./aaBoundingRect-ca34962d.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./mat3f32-d3d088e8.js";import"./Bitmap-b5446edf.js";import"./mat3-45e3f2eb.js";import"./vec2f32-461e65a9.js";import"./utils-1bc9587b.js";import"./parser-f68dd732.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./Evented-b378ccab.js";import"./enums-4ca4641f.js";import"./MaterialKey-cec287ae.js";import"./Utils-b6ef920f.js";import"./enums-ef042d89.js";import"./enums-64ab819c.js";import"./Texture-c2297638.js";import"./context-util-abf86a85.js";import"./VertexElementDescriptor-2925c6af.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./Color-b7b9e6bb.js";import"./TileContainer-efb37002.js";import"./WGLContainer-69c7e591.js";import"./pixelUtils-a3529416.js";import"./vec2f64-e0301652.js";import"./VertexArrayObject-e1e46e3f.js";import"./ProgramTemplate-1afb8353.js";import"./StyleDefinition-ae208a94.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./vec2-f978aef8.js";import"./featureConversionUtils-d9ec654e.js";import"./jsonUtils-5115c7e5.js";import"./Polyline-42dcc920.js";import"./OptimizedFeature-1bba65b5.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Collection-42fe629f.js";import"./SimpleObservable-e0897cc6.js";import"./collectionUtils-3d8a9611.js";import"./geometry-70b2a4a5.js";import"./typeUtils-b6c52390.js";import"./jsonMap-5afaf2ff.js";import"./HandleOwner-6ac6f00a.js";import"./Identifiable-57df9761.js";import"./Promise-6bd0b483.js";import"./Queue-8aae62d3.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./Query-066f2ccf.js";import"./TimeExtent-0fd238ea.js";import"./enumeration-497ef064.js";import"./Field-bb784640.js";import"./fieldType-9bddd3d4.js";import"./Clonable-58355d3c.js";const R=[102113,102100,3857,3785,900913],Q=[0,0];let s=class extends q(S(T(v))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const t=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return t?(t.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=t.id),t):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:t}=this.tileMatrixSet;this._tileInfoView=new V(t),this._fetchQueue=new x({tileInfoView:this._tileInfoView,concurrency:16,process:(e,i)=>this.fetchTile(e,i)}),this._tileStrategy=new M({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(I(()=>{var e,i;return[(i=(e=this.layer)==null?void 0:e.activeLayer)==null?void 0:i.styleId,this.tileMatrixSet]},()=>this._refresh()),this.declaredClass),super.attach()}detach(){var t,e;super.detach(),this.handles.remove(this.declaredClass),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(Q,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:p=0}=e;if(!i)return this._fetchImage(t,r);const a=new y(0,0,0,0);let m;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),m=await this._fetchImage(a,r)}catch(o){if(h(o))throw o;if(p<3){const n=this._tileInfoView.getTileParentId(t.id);if(n){const u=new y(n),_=await this.fetchTile(u,{...e,resamplingLevel:p+1});return d(this._tileInfoView,_,u,t)}}throw o}return d(this._tileInfoView,m,a,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}supportsSpatialReference(t){return this.layer.activeLayer.tileMatrixSets.some(e=>f(e.tileInfo.spatialReference,t))}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){h(e)||g.getLogger(this.declaredClass).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(t=>{if(!t.bitmap.source)return;const e={id:t.key.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then(i=>{t.bitmap.source=i}).catch(i=>{h(i)||(t.bitmap.source=null)}).finally(()=>{t.requestRender(),e.fulfilled=!0})};this._tileRequests.set(t,e)})}_getTileMatrixSetBySpatialReference(t){const e=this.view.spatialReference;if(!t.tileMatrixSets)return null;let i=t.tileMatrixSets.find(r=>f(r.tileInfo.spatialReference,e));return!i&&e.isWebMercator&&(i=t.tileMatrixSets.find(r=>R.includes(r.tileInfo.spatialReference.wkid))),i}};l([c()],s.prototype,"_fetchQueue",void 0),l([c({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=l([w("esri.views.2d.layers.WMTSLayerView2D")],s);const Nt=s;export{Nt as default};