import{e as i,y as l,n as p,m as u}from"./cast-6d78d3c7.js";import{a as b}from"./HandleOwner-6ac6f00a.js";import{r as d}from"./typedArrayUtil-d02f10a8.js";import{t as f}from"./LayerFloorInfo-0d02c503.js";import"./ensureType-d98e08e1.js";import{g}from"./OperationalLayer-007b4c8b.js";import{n as m}from"./floorFilterUtils-080a7cd2.js";import{i as S}from"./sublayerUtils-5b8ae1f1.js";const v={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let t=class extends b(u){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(r=>{const o=m(this.floors,r);return r.toExportImageJSON(o)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&S(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",r=>this.notifyChange(v[r.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(r=>r.id).join(","):"show:-1":null}get layerDefs(){var o;const e=!!((o=this.floors)!=null&&o.length),r=this.visibleSublayers.filter(a=>a.definitionExpression!=null||e&&a.floorInfo!=null);return r.length?JSON.stringify(r.reduce((a,s)=>{const n=m(this.floors,s),y=f(n,s.definitionExpression);return d(y)&&(a[s.id]=y),a},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,o=s=>{const n=this.scale,y=n===0,h=s.minScale===0||n<=s.minScale,c=s.maxScale===0||n>=s.maxScale;s.visible&&(y||h&&c)&&(s.sublayers?s.sublayers.forEach(o):e.unshift(s))};r&&r.forEach(o);const a=this._get("visibleSublayers");return!a||a.length!==e.length||a.some((s,n)=>e[n]!==s)?e:a}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};i([l({readOnly:!0})],t.prototype,"dynamicLayers",null),i([l()],t.prototype,"floors",void 0),i([l({readOnly:!0})],t.prototype,"hasDynamicLayers",null),i([l()],t.prototype,"layer",null),i([l({readOnly:!0})],t.prototype,"layers",null),i([l({readOnly:!0})],t.prototype,"layerDefs",null),i([l({type:Number})],t.prototype,"scale",void 0),i([l(g)],t.prototype,"timeExtent",void 0),i([l({readOnly:!0})],t.prototype,"version",null),i([l({readOnly:!0})],t.prototype,"visibleSublayers",null),t=i([p("esri.layers.mixins.ExportImageParameters")],t);export{t as c};
