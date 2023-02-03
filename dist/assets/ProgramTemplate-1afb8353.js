import{r as P,t as ie,I as se}from"./typedArrayUtil-d02f10a8.js";import"./string-9c5e03f7.js";import{c as L}from"./Texture-c2297638.js";import{r as k}from"./context-util-abf86a85.js";import{H as p,t as S}from"./enums-64ab819c.js";const le=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var F,H={exports:{}};(F=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])!==void 0&&(H.exports=F);const ce=H.exports;var j,z={exports:{}};j=z,function(o){var e=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];e!==void 0&&(j.exports=e)}();const R=z.exports;var q={exports:{}};(function(o){(function(e){var r=function(){return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]}();r!==void 0&&(o.exports=r)})()})(q);const fe=q.exports;var _=999,$=9999,D=0,w=1,B=2,I=3,V=4,M=5,me=6,ue=7,he=8,O=9,ge=10,G=11,de=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function _e(){var o,e,r,t=0,i=0,n=_,a=[],m=[],l=1,s=0,c=0,u=!1,d=!1,h="";return function(f){return m=[],f!==null?Q(f.replace?f.replace(/\r\n/g,`
`):f):W()};function g(f){f.length&&m.push({type:de[n],data:f,position:c,line:l,column:s})}function Q(f){var v;for(t=0,r=(h+=f).length;o=h[t],t<r;){switch(v=t,n){case D:t=ee();break;case w:t=Y();break;case B:t=b();break;case I:t=te();break;case V:t=oe();break;case G:t=re();break;case M:t=ae();break;case $:t=ne();break;case O:t=J();break;case _:t=Z()}v!==t&&(h[v]===`
`?(s=0,++l):++s)}return i+=t,h=h.slice(t),m}function W(f){return a.length&&g(a.join("")),n=ge,g("(eof)"),m}function Z(){return a=a.length?[]:a,e==="/"&&o==="*"?(c=i+t-1,n=D,e=o,t+1):e==="/"&&o==="/"?(c=i+t-1,n=w,e=o,t+1):o==="#"?(n=B,c=i+t,t):/\s/.test(o)?(n=O,c=i+t,t):(u=/\d/.test(o),d=/[^\w_]/.test(o),c=i+t,n=u?V:d?I:$,t)}function J(){return/[^\s]/g.test(o)?(g(a.join("")),n=_,t):(a.push(o),e=o,t+1)}function b(){return o!=="\r"&&o!==`
`||e==="\\"?(a.push(o),e=o,t+1):(g(a.join("")),n=_,t)}function Y(){return b()}function ee(){return o==="/"&&e==="*"?(a.push(o),g(a.join("")),n=_,t+1):(a.push(o),e=o,t+1)}function te(){if(e==="."&&/\d/.test(o))return n=M,t;if(e==="/"&&o==="*")return n=D,t;if(e==="/"&&o==="/")return n=w,t;if(o==="."&&a.length){for(;U(a););return n=M,t}if(o===";"||o===")"||o==="("){if(a.length)for(;U(a););return g(o),n=_,t+1}var f=a.length===2&&o!=="=";if(/[\w_\d\s]/.test(o)||f){for(;U(a););return n=_,t}return a.push(o),e=o,t+1}function U(f){for(var v,T,A=0;;){if(v=R.indexOf(f.slice(0,f.length+A).join("")),T=R[v],v===-1){if(A--+f.length>0)continue;T=f.slice(0,1).join("")}return g(T),c+=T.length,(a=a.slice(T.length)).length}}function re(){return/[^a-fA-F0-9]/.test(o)?(g(a.join("")),n=_,t):(a.push(o),e=o,t+1)}function oe(){return o==="."||/[eE]/.test(o)?(a.push(o),n=M,e=o,t+1):o==="x"&&a.length===1&&a[0]==="0"?(n=G,a.push(o),e=o,t+1):/[^\d]/.test(o)?(g(a.join("")),n=_,t):(a.push(o),e=o,t+1)}function ae(){return o==="f"&&(a.push(o),e=o,t+=1),/[eE]/.test(o)||o==="-"&&/[eE]/.test(e)?(a.push(o),e=o,t+1):/[^\d]/.test(o)?(g(a.join("")),n=_,t):(a.push(o),e=o,t+1)}function ne(){if(/[^\d\w_]/.test(o)){var f=a.join("");return n=ce.indexOf(f)>-1?he:fe.indexOf(f)>-1?ue:me,g(a.join("")),n=_,t}return a.push(o),e=o,t+1}}function pe(o){var e=_e(),r=[];return r=(r=r.concat(e(o))).concat(e(null))}function xe(o){return pe(o)}function ve(o){return o.map(e=>e.type!=="eof"?e.data:"").join("")}const E=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function Te(o,e="100",r="300 es"){const t=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const i of o)if(i.type==="preprocessor"){const n=t.exec(i.data);if(n){const a=n[1].replace(/\s\s+/g," ");if(a===r)return a;if(a===e)return i.data="#version "+r,e;throw new Error("unknown glsl version: "+a)}}return o.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:`
`}),null}function ye(o,e){for(let r=e-1;r>=0;r--){const t=o[r];if(t.type!=="whitespace"&&t.type!=="block-comment"){if(t.type!=="keyword")break;if(t.data==="attribute"||t.data==="in")return!0}}return!1}function y(o,e,r,t){t=t||r;for(const i of o)if(i.type==="ident"&&i.data===r)return t in e?e[t]++:e[t]=0,y(o,e,t+"_"+e[t],t);return r}function K(o,e,r="afterVersion"){function t(l,s){for(let c=s;c<l.length;c++){const u=l[c];if(u.type==="operator"&&u.data===";")return c}return null}function i(l){let s=-1,c=0,u=-1;for(let d=0;d<l.length;d++){const h=l[d];if(h.type==="preprocessor"&&(h.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++c:h.data.match(/\#endif\s*.*/)&&--c),r!=="afterVersion"&&r!=="afterPrecision"||h.type==="preprocessor"&&/^#version/.test(h.data)&&(u=Math.max(u,d)),r==="afterPrecision"&&h.type==="keyword"&&h.data==="precision"){const g=t(l,d);if(g===null)throw new Error("precision statement not followed by any semicolons!");u=Math.max(u,g)}s<u&&c===0&&(s=d)}return s+1}const n={data:`
`,type:"whitespace"},a=l=>l<o.length&&/[^\r\n]$/.test(o[l].data);let m=i(o);a(m-1)&&o.splice(m++,0,n);for(const l of e)o.splice(m++,0,l);a(m-1)&&a(m)&&o.splice(m,0,n)}function Se(o,e,r,t="lowp"){K(o,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:t},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function Me(o,e,r,t,i="lowp"){K(o,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:t.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function Ue(o,e){let r,t,i=-1;for(let n=e;n<o.length;n++){const a=o[n];if(a.type==="operator"&&(a.data==="["&&(r=n),a.data==="]")){t=n;break}a.type==="integer"&&(i=parseInt(a.data,10))}return r&&t&&o.splice(r,t-r+1),i}function N(o,e){const r=De();if(P(r))return r;const t=xe(o);if(Te(t,"100","300 es")==="300 es")return o;let i=null,n=null;const a={},m={};for(let l=0;l<t.length;++l){const s=t[l];switch(s.type){case"keyword":e===p.VERTEX_SHADER&&s.data==="attribute"?s.data="in":s.data==="varying"&&(s.data=e===p.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replace(/(2D|Cube|EXT)/g,"")),e===p.FRAGMENT_SHADER&&s.data==="gl_FragColor"&&(i||(i=y(t,a,"fragColor"),Se(t,i,"vec4")),s.data=i),e===p.FRAGMENT_SHADER&&s.data==="gl_FragData"){const c=Ue(t,l+1),u=y(t,a,"fragData");Me(t,u,"vec4",c,"mediump"),s.data=u}else e===p.FRAGMENT_SHADER&&s.data==="gl_FragDepthEXT"&&(n||(n=y(t,a,"gl_FragDepth")),s.data=n);break;case"ident":if(le.includes(s.data)){if(e===p.VERTEX_SHADER&&ye(t,l))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in m||(m[s.data]=y(t,a,s.data)),s.data=m[s.data]}}}for(let l=t.length-1;l>=0;--l){const s=t[l];if(s.type==="preprocessor"){const c=s.data.match(/\#extension\s+(.*)\:/);if(c&&c[1]&&E.includes(c[1].trim())){const h=t[l+1];t.splice(l,h&&h.type==="whitespace"?2:1)}const u=s.data.match(/\#ifdef\s+(.*)/);u&&u[1]&&E.includes(u[1].trim())&&(s.data="#if 1");const d=s.data.match(/\#ifndef\s+(.*)/);d&&d[1]&&E.includes(d[1].trim())&&(s.data="#if 0")}}return we(o,ve(t))}function De(o){return null}function we(o,e){return e}const Ee=4294967295;class Pe{constructor(e,r,t,i,n=new Map){this._context=e,this._locations=i,this._uniformBlockBindings=n,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),r.length===0&&console.error("Shaders source should not be empty!"),this._context.type===k.WEBGL2&&(r=N(r,p.VERTEX_SHADER),t=N(t,p.FRAGMENT_SHADER)),this._vShader=X(this._context,p.VERTEX_SHADER,r),this._fShader=X(this._context,p.FRAGMENT_SHADER,t),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(S.Shader,this),L()&&(this.vertexShader=r,this.fragmentShader=t)}get glName(){if(P(this._glName))return this._glName;if(ie(this._vShader))return null;const e=this._context.gl,r=e.createProgram();if(e.attachShader(r,this._vShader),e.attachShader(r,this._fShader),this._locations.forEach((t,i)=>e.bindAttribLocation(r,t,i)),e.linkProgram(r),L()&&!e.getProgramParameter(r,e.LINK_STATUS)&&console.error(`Could not link shader
validated: ${e.getProgramParameter(r,e.VALIDATE_STATUS)}, gl error ${e.getError()}, vertex: ${e.getShaderParameter(this._vShader,e.COMPILE_STATUS)}, fragment: ${e.getShaderParameter(this._fShader,e.COMPILE_STATUS)}, info log: ${e.getProgramInfoLog(r)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===k.WEBGL2){const t=e;for(const[i,n]of this._uniformBlockBindings){const a=t.getUniformBlockIndex(r,i);a<Ee&&t.uniformBlockBinding(r,a,n)}}return this._glName=r,this._context.instanceCounter.increment(S.Program,this),r}get hasGLName(){return P(this._glName)}get isCompiled(){if(this._compiled)return!0;const e=this._context.gl.getExtension("KHR_parallel_shader_compile");return e==null?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const e=this._context.gl;this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(S.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(S.Program,this))}ref(){++this._refCount}_getUniformLocation(e){return this._nameToUniformLocation[e]===void 0&&(++C.numUniforms,this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return this._getUniformLocation(e)!==null}setUniform1i(e,r){const t=this._nameToUniform1[e];t!==void 0&&r===t||(this._context.gl.uniform1i(this._getUniformLocation(e),r),this._nameToUniform1[e]=r)}setUniform1iv(e,r){x(this._nameToUniform1v,e,r)&&this._context.gl.uniform1iv(this._getUniformLocation(e),r)}setUniform2iv(e,r){x(this._nameToUniform2,e,r)&&this._context.gl.uniform2iv(this._getUniformLocation(e),r)}setUniform3iv(e,r){x(this._nameToUniform3,e,r)&&this._context.gl.uniform3iv(this._getUniformLocation(e),r)}setUniform4iv(e,r){x(this._nameToUniform4,e,r)&&this._context.gl.uniform4iv(this._getUniformLocation(e),r)}setUniform1f(e,r){const t=this._nameToUniform1[e];t!==void 0&&r===t||(this._context.gl.uniform1f(this._getUniformLocation(e),r),this._nameToUniform1[e]=r)}setUniform1fv(e,r){x(this._nameToUniform1v,e,r)&&this._context.gl.uniform1fv(this._getUniformLocation(e),r)}setUniform2f(e,r,t){const i=this._nameToUniform2.get(e);i===void 0?(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),this._nameToUniform2.set(e,[r,t])):r===i[0]&&t===i[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),i[0]=r,i[1]=t)}setUniform2fv(e,r){x(this._nameToUniform2,e,r)&&this._context.gl.uniform2fv(this._getUniformLocation(e),r)}setUniform3f(e,r,t,i){const n=this._nameToUniform3.get(e);n===void 0?(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,i),this._nameToUniform3[e]=[r,t,i]):r===n[0]&&t===n[1]&&i===n[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,i),n[0]=r,n[1]=t,n[2]=i)}setUniform3fv(e,r){x(this._nameToUniform3,e,r)&&this._context.gl.uniform3fv(this._getUniformLocation(e),r)}setUniform4f(e,r,t,i,n){const a=this._nameToUniform4.get(e);a===void 0?(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,i,n),this._nameToUniform4.set(e,[r,t,i,n])):a!==void 0&&r===a[0]&&t===a[1]&&i===a[2]&&n===a[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,i,n),a[0]=r,a[1]=t,a[2]=i,a[3]=n)}setUniform4fv(e,r){x(this._nameToUniform4,e,r)&&this._context.gl.uniform4fv(this._getUniformLocation(e),r)}setUniformMatrix3fv(e,r,t=!1){x(this._nameToUniformMatrix3,e,r)&&this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),t,r)}setUniformMatrix4fv(e,r,t=!1){x(this._nameToUniformMatrix4,e,r)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),t,r)}stop(){}}function X(o,e,r){const t=o.gl,i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),L()&&!t.getShaderParameter(i,t.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===p.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(t.getShaderInfoLog(i)),console.error(Le(r))),C.enabled&&(C.compiledLOC+=r.match(/\n/g).length+1),i}function Le(o){let e=2;return o.replace(/\n/g,()=>`
`+Ce(e++)+":")}function Ce(o){return o>=1e3?o.toString():("  "+o).slice(-3)}function x(o,e,r){const t=o.get(e);return t?se(t,r):(o.set(e,Array.from(r)),!0)}const C={compiledLOC:0,numUniforms:0,enabled:!1};let Re=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,r=new Map){if(r.has(e))return r.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=i.exec(t);const a=[];for(;n!=null;)a.push({path:n[1],start:n.index,length:n[0].length}),n=i.exec(t);let m=0,l="";return a.forEach(s=>{l+=t.slice(m,s.start),l+=r.has(s.path)?"":this._resolve(s.path,r),m=s.start+s.length}),l+=t.slice(m),r.set(e,l),l}_read(e){return this._readFile(e)}};function Be(o,e,r=""){return new Pe(o,r+e.shaders.vertexShader,r+e.shaders.fragmentShader,e.attributes)}export{Be as a,Re as e,Pe as h};