import{e as r,y as s,n as p}from"./cast-6d78d3c7.js";import{t as c}from"./typedArrayUtil-d02f10a8.js";import{b as y}from"./ensureType-d98e08e1.js";import{j as a,n as d}from"./Collection-42fe629f.js";import{t as f,n as u}from"./collectionUtils-3d8a9611.js";import{a as v}from"./HandleOwner-6ac6f00a.js";import"./string-9c5e03f7.js";import"./Error-4ed679d7.js";import{b as w}from"./Layer-f9f81f65.js";import{n as g}from"./BlendLayer-7a735871.js";import{t as _}from"./ScaleRangeLayer-c6a35aba.js";import{g as l}from"./Graphic-34c50417.js";import{x as $}from"./ElevationInfo-618e96ba.js";let n=class extends v(a){constructor(e){super(e),this.handles.add([this.on("before-add",t=>{c(t.item)&&t.preventDefault()}),this.on("after-add",t=>this._own(t.item)),this.on("after-remove",t=>this._release(t.item))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(a.ofType(this.itemType.Type))(e):new a(e)}};function A(e,t){return{type:e,cast:f,set(m){const h=u(m,this._get(t),e);h.owner=this,this._set(t,h)}}}r([s()],n.prototype,"owner",null),n=r([p("esri.core.support.OwningCollection")],n);let i=class extends n{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};r([d({Type:l,ensureType:y(l)})],i.prototype,"itemType",void 0),i=r([p("esri.support.GraphicsCollection")],i);let o=class extends g(_(w)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new i,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};r([s({type:$})],o.prototype,"elevationInfo",void 0),r([s(A(i,"graphics"))],o.prototype,"graphics",void 0),r([s({type:["show","hide"]})],o.prototype,"listMode",void 0),r([s()],o.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],o.prototype,"type",void 0),r([s({constructOnly:!0})],o.prototype,"internal",void 0),o=r([p("esri.layers.GraphicsLayer")],o);const D=o;export{A as a,D as h,i,n as l};
