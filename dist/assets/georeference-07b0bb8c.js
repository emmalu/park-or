import{r as S,t as g}from"./typedArrayUtil-d02f10a8.js";import{O as M,$ as ir,L as sr,E as lr}from"./unitUtils-b69647a1.js";import{e as K}from"./mat3f64-b33e332c.js";import{P as cr,h as Q,u as fr,C as ur,B as pr,i as yr}from"./mat4-62d5e6a4.js";import{e as $,o as mr}from"./mat4f64-3d813481.js";import{a as W,o as k,g as C,B as X}from"./mat3-45e3f2eb.js";import{Z as w,x as I}from"./projection-6146477c.js";import{e as T,y as A,n as gr,l as hr}from"./cast-6d78d3c7.js";import"./ensureType-d98e08e1.js";import{v as z,y as Tr,x as Ar}from"./quat-7867de93.js";import{e as q}from"./quatf64-7fd38d64.js";import{r as $r,b as Pr,m as Fr,O as H,F as dr,S as Z,z as Er}from"./mathUtils-daf59e84.js";import{n as _,a as Mr,t as B}from"./common-701a4199.js";import{w as xr,F as Rr,H as vr,P as wr,i as _r}from"./Extent-d5fff12d.js";import{T as p,i as u}from"./BufferView-dfb97f8b.js";import{t as d,e as Cr,r as P,o as rr}from"./vec33-cf1c6ea8.js";import{s as Or}from"./Error-4ed679d7.js";function E(r=Nr){return[r[0],r[1],r[2],r[3]]}function Pt(r,t,e=E()){return $r(e,r),e[3]=t,e}function Ft(r,t,e=E()){return z(x,r,Y(r)),z(D,t,Y(t)),Tr(x,D,x),br(e,Pr(Ar(e,x)))}function dt(r){return r}function Y(r){return Fr(r[3])}function br(r,t){return r[3]=t,r}const Nr=[0,0,1,0],x=q(),D=q();E();var j;let m=j=class extends hr{constructor(r){super(r),this.origin=_(),this.translation=_(),this.rotation=E(),this.scale=Mr(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return z(J,this.rotation,Y(this.rotation)),cr(r,J,this.translation,this.scale),r}get localMatrixInverse(){return Q($(),this.localMatrix)}applyLocal(r,t){return H(t,r,this.localMatrix)}applyLocalInverse(r,t){return H(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),n=p.fromTypedArray(e),o=p.fromTypedArray(r);if(this.geographic){const l=M(t),c=$();return w(t,this.origin,c,l),fr(c,c,this.localMatrix),d(n,o,c),I(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;ur(a,mr)?Cr(n,o):d(n,o,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,n]=this.origin;return new xr({x:t,y:e,z:n,spatialReference:r})}equals(r){return S(r)&&this.geographic===r.geographic&&dr(this.origin,r.origin)&&pr(this.localMatrix,r.localMatrix)}clone(){const r={origin:B(this.origin),translation:B(this.translation),rotation:E(this.rotation),scale:B(this.scale),geographic:this.geographic};return new j(r)}};T([A({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"origin",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"translation",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"rotation",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),T([A({type:Boolean,nonNullable:!0,json:{write:!0}})],m.prototype,"geographic",void 0),T([A()],m.prototype,"localMatrix",null),T([A()],m.prototype,"localMatrixInverse",null),m=j=T([gr("esri.geometry.support.MeshTransform")],m);const J=q(),Lr=m;function O(r,t){return r.isGeographic||r.isWebMercator&&((t==null?void 0:t.geographic)??!0)}const b=Or.getLogger("esri.geometry.support.meshUtils.normalProjection");function Br(r,t,e,n,o){return L(n)?(N(h.TO_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),n,u.fromTypedArray(o)),o):(b.error("Cannot convert spatial reference to PCPF"),o)}function Sr(r,t,e,n,o){return L(n)?(N(h.FROM_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),n,u.fromTypedArray(o)),o):(b.error("Cannot convert to spatial reference from PCPF"),o)}function zr(r,t,e){return I(r,t,0,e,M(t),0,r.length/3),e}function Yr(r,t,e){return I(r,M(e),0,t,e,0,r.length/3),t}function jr(r,t,e){if(g(r))return t;const n=p.fromTypedArray(r),o=p.fromTypedArray(t);return d(o,n,e),t}function Vr(r,t,e){if(g(r))return t;C(f,e);const n=u.fromTypedArray(r),o=u.fromTypedArray(t);return P(o,n,f),X(f)||rr(o,o),t}function Gr(r,t,e){if(g(r))return t;C(f,e);const n=u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o=u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(P(o,n,f),X(f)||rr(o,o),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function Ir(r,t,e,n,o){if(!L(n))return b.error("Cannot convert spatial reference to PCPF"),o;N(h.TO_PCPF,u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),n,u.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)o[a]=r[a];return o}function qr(r,t,e,n,o){if(!L(n))return b.error("Cannot convert to spatial reference from PCPF"),o;N(h.FROM_PCPF,u.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),n,u.fromTypedArray(o,16));for(let a=3;a<r.length;a+=4)o[a]=r[a];return o}function N(r,t,e,n,o,a){if(!t)return;const i=e.count,l=M(o);if(tr(o))for(let c=0;c<i;c++)n.getVec(c,R),t.getVec(c,y),w(l,R,v,l),W(f,v),r===h.FROM_PCPF&&k(f,f),Z(y,y,f),a.setVec(c,y);else for(let c=0;c<i;c++){n.getVec(c,R),t.getVec(c,y),w(l,R,v,l),W(f,v);const F=Rr(e.get(c,1));let s=Math.cos(F);r===h.TO_PCPF&&(s=1/s),f[0]*=s,f[1]*=s,f[2]*=s,f[3]*=s,f[4]*=s,f[5]*=s,r===h.FROM_PCPF&&k(f,f),Z(y,y,f),Er(y,y),a.setVec(c,y)}return a}function L(r){return tr(r)||Ur(r)}function tr(r){return r.isWGS84||vr(r)||wr(r)||_r(r)}function Ur(r){return r.isWebMercator}var h;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const R=_(),y=_(),v=$(),f=K();function er(r,t,e){return O(t.spatialReference,e)?Zr(r,t,e):Hr(r,t,e)}function Wr(r,t,e){const{position:n,normal:o,tangent:a}=r;if(g(t))return{position:n,normal:o,tangent:a};const i=t.localMatrix;return er({position:jr(n,new Float64Array(n.length),i),normal:S(o)?Vr(o,new Float32Array(o.length),i):null,tangent:S(a)?Gr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function Et(r,t,e){if(e!=null&&e.useTransform){const{position:n,normal:o,tangent:a}=r;return{vertexAttributes:{position:n,normal:o,tangent:a},transform:new Lr({origin:[t.x,t.y,t.z??0],geographic:O(t.spatialReference,e)})}}return{vertexAttributes:er(r,t,e),transform:null}}function kr(r,t,e){return O(t.spatialReference,e)?or(r,t,e):V(r,t,e)}function Mt(r,t,e,n){if(g(t))return kr(r,e,n);const o=Wr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?V(o,e,n):O(e.spatialReference,n)?or(o,e,n):V(o,e,n)}function Hr(r,t,e){const n=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:F}=U(e?e.unit:null,t.spatialReference);for(let s=0;s<o.length;s+=3)n[s+0]=o[s+0]*c+a,n[s+1]=o[s+1]*c+i,n[s+2]=o[s+2]*F+l;return{position:n,normal:r.normal,tangent:r.tangent}}function Zr(r,t,e){const n=t.spatialReference,o=nr(t,e,G),a=new Float64Array(r.position.length),i=Dr(r.position,o,n,a),l=C(ar,o);return{position:i,normal:Jr(i,a,r.normal,l,n),tangent:Kr(i,a,r.tangent,l,n)}}function Dr(r,t,e,n){d(p.fromTypedArray(n),p.fromTypedArray(r),t);const o=new Float64Array(r.length);return Yr(n,o,e)}function Jr(r,t,e,n,o){if(g(e))return null;const a=new Float32Array(e.length);return P(u.fromTypedArray(a),u.fromTypedArray(e),n),Sr(a,r,t,o,a),a}function Kr(r,t,e,n,o){if(g(e))return null;const a=new Float32Array(e.length);P(u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),n);for(let i=3;i<a.length;i+=4)a[i]=e[i];return qr(a,r,t,o,a),a}function V(r,t,e){const n=new Float64Array(r.position.length),o=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:F}=U(e?e.unit:null,t.spatialReference);for(let s=0;s<o.length;s+=3)n[s+0]=(o[s+0]-a)/c,n[s+1]=(o[s+1]-i)/c,n[s+2]=(o[s+2]-l)/F;return{position:n,normal:r.normal,tangent:r.tangent}}function or(r,t,e){const n=t.spatialReference;nr(t,e,G);const o=Q(tt,G),a=new Float64Array(r.position.length),i=Qr(r.position,n,o,a),l=C(ar,o);return{position:i,normal:Xr(r.normal,r.position,a,n,l),tangent:rt(r.tangent,r.position,a,n,l)}}function nr(r,t,e){w(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:n,vertical:o}=U(t?t.unit:null,r.spatialReference);return yr(e,e,[n,n,o]),e}function Qr(r,t,e,n){const o=zr(r,t,n),a=p.fromTypedArray(o),i=new Float64Array(o.length),l=p.fromTypedArray(i);return d(l,a,e),i}function Xr(r,t,e,n,o){if(g(r))return null;const a=Br(r,t,e,n,new Float32Array(r.length)),i=u.fromTypedArray(a);return P(i,i,o),a}function rt(r,t,e,n,o){if(g(r))return null;const a=Ir(r,t,e,n,new Float32Array(r.length)),i=u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return P(i,i,o),a}function U(r,t){if(g(r))return et;const e=t.isGeographic?1:ir(t),n=t.isGeographic?1:sr(t),o=lr(1,r,"meters");return{horizontal:o*e,vertical:o*n}}const G=$(),tt=$(),ar=K(),et={horizontal:1,vertical:1};export{qr as L,zr as M,Yr as O,Et as _,Ir as a,kr as b,E as c,Y as d,Pt as e,Lr as f,dt as g,Sr as h,Mt as i,Br as j,Wr as k,O as r,Ft as v,er as x};
