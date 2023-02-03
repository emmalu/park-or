import{h as V}from"./string-9c5e03f7.js";import{c as L}from"./mathUtils-daf59e84.js";import{r as w,e as k}from"./typedArrayUtil-d02f10a8.js";import{s as z,a as K}from"./Error-4ed679d7.js";import{r as b}from"./context-util-abf86a85.js";import{M as E,L as T,D as P,t as y,G as v,P as D,U as I,u as H}from"./enums-64ab819c.js";const Y=z.getLogger("esri.views.webgl.checkWebGLError");function $(n,e){switch(e){case n.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case n.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case n.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case n.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case n.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case n.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const G=!!V("enable-feature:webgl-debug");function q(){return G}function ae(){return G}function A(n){if(q()){const e=n.getError();if(e){const t=$(n,e),i=new Error().stack;Y.error(new K("webgl-error","WebGL error occured",{message:t,stack:i}))}}}function x(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}const N={target:E.TEXTURE_2D,samplingMode:T.LINEAR,wrapMode:P.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},F=4;class m{constructor(e,t,i=null){this._context=e,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(y.Texture,this),this._descriptor={...N,...t};for(const r in N)this._descriptor[r]===void 0&&(this._descriptor[r]=N[r]);if(e.type!==b.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),f(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===E.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(y.Texture,this))}release(){this.dispose()}resize(e,t){const i=this._descriptor;if(i.width!==e||i.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");i.width=e,i.height=t,this._descriptor.target===E.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=E.TEXTURE_CUBE_MAP_POSITIVE_X;t<=E.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),e===void 0&&(e=null);const r=this._descriptor,o=t??r.target,s=f(o);e===null&&(r.width=r.width||F,r.height=r.height||F,s&&(r.depth=r.depth??1));const p=this._context.bindTexture(this,m.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(m.TEXTURE_UNIT_FOR_UPDATES),m._validateTexture(this._context,r),this._configurePixelStorage(),A(i);const a=r.pixelFormat;let l=r.internalFormat??this._deriveInternalFormat(a,r.dataType);if(S(e)){let h=e.width,u=e.height;const d=1;e instanceof HTMLVideoElement&&(h=e.videoWidth,u=e.videoHeight),r.width&&r.height,s&&r.depth,r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,l,r.hasMipmap,h,u,d),this._texImage(o,0,l,h,u,d,e),A(i),r.hasMipmap&&this.generateMipmap(),r.width===void 0&&(r.width=h),r.height===void 0&&(r.height=u),s&&r.depth===void 0&&(r.depth=d)}else{const{width:h,height:u,depth:d}=r;if(h==null||u==null)throw new Error("Width and height must be specified!");if(s&&d==null)throw new Error("Depth must be specified!");if(r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,l,r.hasMipmap,h,u,d),i.DEPTH24_STENCIL8&&l===i.DEPTH_STENCIL&&(l=i.DEPTH24_STENCIL8),U(e)){const _=e.levels,c=O(o,h,u,d),g=Math.min(c-1,_.length-1);x(i)?i.texParameteri(r.target,i.TEXTURE_MAX_LEVEL,g):r.hasMipmap=r.hasMipmap&&c===_.length;const M=l;if(!j(M))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((R,X,W,C)=>{const B=_[Math.min(R,_.length-1)];this._compressedTexImage(o,R,M,X,W,C,B)},g)}else w(e)?(this._texImage(o,0,l,h,u,d,e),A(i),r.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((_,c,g,M)=>{this._texImage(o,_,l,c,g,M,null),A(i)})}m._applySamplingMode(i,this._descriptor),m._applyWrapMode(i,this._descriptor),m._applyAnisotropicFilteringParameters(this._context,this._descriptor),A(i),this._context.bindTexture(p,m.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,i,r,o,s,p=0){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._context.gl,l=this._descriptor,{pixelFormat:h,dataType:u,target:d,isImmutable:_}=l,c=l.internalFormat??this._deriveInternalFormat(h,u);if(_&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const g=this._context.bindTexture(this,m.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||i<0||r>l.width||o>l.height||t+r>l.width||i+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),p){if(!x(a))return void console.error("Webgl2 must be enabled to use dataRowOffset!");a.pixelStorei(a.UNPACK_SKIP_ROWS,p)}if(S(s)?x(a)?a.texSubImage2D(d,e,t,i,r,o,h,u,s):a.texSubImage2D(d,e,t,i,h,u,s):U(s)?a.compressedTexSubImage2D(d,e,t,i,r,o,c,s.levels[e]):a.texSubImage2D(d,e,t,i,r,o,h,u,s),p){if(!x(a))return void console.error("Webgl2 must be enabled to use dataRowOffset!");a.pixelStorei(a.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(g,m.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,i,r,o,s,p,a){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._context.gl;if(!x(l))throw new Error("3D textures are not supported in WebGL1");const h=this._descriptor,{pixelFormat:u,dataType:d,isImmutable:_,target:c}=h,g=h.internalFormat??this._deriveInternalFormat(u,d);if(_&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");f(c)||console.warn("Attempting to set 3D texture data on a non-3D texture");const M=this._context.bindTexture(this,m.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(m.TEXTURE_UNIT_FOR_UPDATES),(t<0||i<0||r<0||o>h.width||s>h.height||p>h.depth||t+o>h.width||i+s>h.height||r+p>h.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),U(a))a=a.levels[e],l.compressedTexSubImage3D(c,e,t,i,r,o,s,p,g,a);else{const R=a;l.texSubImage3D(c,e,t,i,r,o,s,p,u,d,R)}this._context.bindTexture(M,m.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,m._validateTexture(this._context,e)}e.samplingMode===T.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=T.LINEAR_MIPMAP_NEAREST):e.samplingMode===T.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=T.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,m.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(m.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,m.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,m._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(m._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(m._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.type===b.WEBGL1)return e;switch(t){case v.FLOAT:switch(e){case D.RGBA:return I.RGBA32F;case D.RGB:return I.RGB32F;default:throw new Error("Unable to derive format")}case v.UNSIGNED_BYTE:switch(e){case D.RGBA:return I.RGBA8;case D.RGB:return I.RGB8}default:return e}}_configurePixelStorage(){const e=this._context.gl,{unpackAlignment:t,flipped:i,preMultiplyAlpha:r}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,t,i,r,o,s){const p=this._context.gl;if(!x(p))throw new Error("Immutable textures are not supported in WebGL1");if(!Z(t))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const a=i?O(e,r,o,s):1;if(f(e)){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");p.texStorage3D(e,a,t,r,o,s)}else p.texStorage2D(e,a,t,r,o);this._wasImmutablyAllocated=!0}_texImage(e,t,i,r,o,s,p){const a=this._context.gl;let l=null;const h=this._context.type===b.WEBGL2,u=f(e),{isImmutable:d,pixelFormat:_,dataType:c}=this._descriptor;if(h&&(l=a),h||!S(p))if(d){if(w(p)){const g=p;if(u){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");l.texSubImage3D(e,t,0,0,0,r,o,s,_,c,g)}else a.texSubImage2D(e,t,0,0,r,o,_,c,g)}}else{const g=k(p);if(u){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");l.texImage3D(e,t,i,r,o,s,0,_,c,g)}else a.texImage2D(e,t,i,r,o,0,_,c,g)}else a.texImage2D(e,0,i,_,c,p)}_compressedTexImage(e,t,i,r,o,s,p){const a=this._context.gl;let l=null;const h=f(e),u=this._descriptor.isImmutable;if(h){if(this._context.type!==b.WEBGL2)throw new Error("3D textures are not supported in WebGL1");l=a}if(u){if(w(p))if(h){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,t,0,0,0,r,o,s,i,p)}else a.compressedTexSubImage2D(e,t,0,0,r,o,i,p)}else if(h){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,t,i,r,o,s,0,p)}else a.compressedTexImage2D(e,t,i,r,o,0,p)}_forEachMipmapLevel(e,t=1/0){let{width:i,height:r,depth:o,hasMipmap:s,target:p}=this._descriptor;const a=p===E.TEXTURE_3D;if(i==null||r==null||a&&o==null)throw new Error("Missing texture dimensions for mipmap calculation");for(let l=0;e(l,i,r,o),s&&(i!==1||r!==1||a&&o!==1)&&!(l>=t);++l)i=Math.max(1,i>>1),r=Math.max(1,r>>1),a&&(o=Math.max(1,o>>1))}static _validateTexture(e,t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const i=x(e.gl),r=t.width!=null&&L(t.width)&&t.height!=null&&L(t.height);i||!t.isImmutable&&!f(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),i||r||(typeof t.wrapMode=="number"?t.wrapMode!==P.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===P.CLAMP_TO_EDGE&&t.wrapMode.t===P.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let i=t.samplingMode,r=t.samplingMode;i===T.LINEAR_MIPMAP_NEAREST||i===T.LINEAR_MIPMAP_LINEAR?(i=T.LINEAR,t.hasMipmap||(r=T.LINEAR)):i!==T.NEAREST_MIPMAP_NEAREST&&i!==T.NEAREST_MIPMAP_LINEAR||(i=T.NEAREST,t.hasMipmap||(r=T.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,i),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(e,t){typeof t.wrapMode=="number"?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}}function Z(n){return n in I}function j(n){return n in H}function U(n){return w(n)&&"type"in n&&n.type==="compressed"}function J(n){return w(n)&&"byteLength"in n}function S(n){return w(n)&&!U(n)&&!J(n)}function f(n){return n===E.TEXTURE_3D||n===E.TEXTURE_2D_ARRAY}function O(n,e,t,i=1){let r=Math.max(e,t);return n===E.TEXTURE_3D&&(r=Math.max(r,i)),Math.round(Math.log(r)/Math.LN2)+1}m.TEXTURE_UNIT_FOR_UPDATES=0;export{m as E,q as a,ae as c,x as n,A as u};
