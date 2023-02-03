import{e as r,y as s,l,n as d}from"./cast-6d78d3c7.js";import{o as y,s as c}from"./jsonMap-5afaf2ff.js";import{r as E,B as v}from"./typedArrayUtil-d02f10a8.js";import"./ensureType-d98e08e1.js";import{o as I,r as w}from"./Extent-d5fff12d.js";import{S as g}from"./fieldUtils-2efa8993.js";import{m}from"./lengthUtils-0dde2114.js";var u;let i=u=class extends l{constructor(e){super(e)}async collectRequiredFields(e,t){return g(e,t,this.expression)}clone(){return new u({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};r([s({type:String,json:{write:!0}})],i.prototype,"expression",void 0),r([s({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=u=r([d("esri.layers.support.FeatureExpressionInfo")],i);const f=i;function G(e){return 1/(m[e]||1)}function $(){const e=Object.keys(m);return e.sort(),e}const j=$();var p;const n=y()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),a=new c({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let o=p=class extends l{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return e??(t.featureExpression&&t.featureExpression.value===0?{expression:"0"}:void 0)}writeFeatureExpressionInfo(e,t,x,h){t[x]=e.write({},h),e.expression==="0"&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):E(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new p({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&v(this.featureExpressionInfo,e.featureExpressionInfo)}};r([s({type:f,json:{write:!0}})],o.prototype,"featureExpressionInfo",void 0),r([I("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],o.prototype,"readFeatureExpressionInfo",null),r([w("featureExpressionInfo",{featureExpressionInfo:{type:f},"featureExpression.value":{type:[0]}})],o.prototype,"writeFeatureExpressionInfo",null),r([s({type:n.apiValues,nonNullable:!0,json:{type:n.jsonValues,read:n.read,write:{writer:n.write,isRequired:!0}}})],o.prototype,"mode",null),r([s({type:Number,json:{write:!0}})],o.prototype,"offset",void 0),r([s({type:j,json:{type:String,read:a.read,write:a.write}})],o.prototype,"unit",null),o=p=r([d("esri.layers.support.ElevationInfo")],o);const N=o;export{G as r,N as x};
