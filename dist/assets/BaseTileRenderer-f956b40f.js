import{e as s,y as r,n as l}from"./cast-6d78d3c7.js";import{d as o}from"./HandleOwner-6ac6f00a.js";import"./typedArrayUtil-d02f10a8.js";import"./ensureType-d98e08e1.js";let t=class extends o{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const i=this.createTile(e);return i.once("isReady",()=>this.notifyChange("updating")),this.tiles.set(e.id,i),i}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach(i=>{e=e&&i.isReady}),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};s([r()],t.prototype,"layer",void 0),s([r()],t.prototype,"layerView",void 0),s([r()],t.prototype,"tileInfoView",void 0),s([r()],t.prototype,"updating",null),t=s([l("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],t);const h=t;export{h as o};