import{e as D,n as K}from"./cast-6d78d3c7.js";import{h as b}from"./string-9c5e03f7.js";import{D as O,j as X}from"./promiseUtils-930cba29.js";import"./Error-4ed679d7.js";import"./ensureType-d98e08e1.js";import{r as l,t as f,o as y,f as q,s as R,z as v}from"./typedArrayUtil-d02f10a8.js";import{u as H}from"./aaBoundingRect-ca34962d.js";import{s as M}from"./CircularArray-ace048ef.js";import{n as Z}from"./mat2d-80bd93af.js";import{E as G,I as B}from"./enums-4ca4641f.js";import{h as L}from"./Utils-b6ef920f.js";import{i as A,m as N,o as W}from"./FeatureContainer-e4e1ed67.js";import{a as x,i as j,e as J}from"./BufferPool-b738111d.js";import{E as S,a as Q}from"./VertexArrayObject-e1e46e3f.js";import{F as U}from"./enums-64ab819c.js";import{n as ee}from"./rendererUtils-a093890e.js";import{o as te}from"./BaseTileRenderer-f956b40f.js";import{b as se}from"./visualVariablesUtils-9310c846.js";import{c as _}from"./WGLContainer-69c7e591.js";import"./nextTick-3ee5a785.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./Extent-d5fff12d.js";import"./enums-ef042d89.js";import"./Texture-c2297638.js";import"./context-util-abf86a85.js";import"./VertexElementDescriptor-2925c6af.js";import"./mat3-45e3f2eb.js";import"./mat3f32-d3d088e8.js";import"./TileContainer-efb37002.js";import"./utils-1bc9587b.js";import"./parser-f68dd732.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./Evented-b378ccab.js";import"./MaterialKey-cec287ae.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./Color-b7b9e6bb.js";import"./TileKey-ed432ae5.js";import"./Queue-8aae62d3.js";import"./unitUtils-b69647a1.js";import"./jsonMap-5afaf2ff.js";import"./lengthUtils-0dde2114.js";import"./capabilities-5736b16f.js";import"./HandleOwner-6ac6f00a.js";import"./reactiveUtils-b0e56010.js";import"./visualVariablesUtils-4833b8d3.js";import"./vec2f32-461e65a9.js";import"./pixelUtils-a3529416.js";import"./vec2f64-e0301652.js";import"./ProgramTemplate-1afb8353.js";import"./StyleDefinition-ae208a94.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./vec2-f978aef8.js";import"./featureConversionUtils-d9ec654e.js";import"./jsonUtils-5115c7e5.js";import"./Polyline-42dcc920.js";import"./OptimizedFeature-1bba65b5.js";import"./OptimizedFeatureSet-1d1ac4b9.js";const g=6,V=4294967296;class C{constructor(e){this._savedCursor=null,this._savedOffset=null,this._head=e,this._cursor=e}static from(e){const t=E.from(new Float32Array(e));return new C(t)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(e){return this._cursor.setComputedMinZoom(e)}boundsComputedAnchorX(e){return this._cursor.boundsComputedAnchorX(e)}boundsComputedAnchorY(e){return this._cursor.boundsComputedAnchorY(e)}setBoundsComputedAnchorX(e,t){return this._cursor.setBoundsComputedAnchorX(e,t)}setBoundsComputedAnchorY(e,t){return this._cursor.setBoundsComputedAnchorY(e,t)}boundsX(e){return this._cursor.boundsX(e)}boundsY(e){return this._cursor.boundsY(e)}boundsWidth(e){return this._cursor.boundsWidth(e)}boundsHeight(e){return this._cursor.boundsHeight(e)}link(e){if(l(e._head))return this._cursor.link(e._head)}getCursor(){return this.copy()}copy(){var r;const e=new C((r=this._head)==null?void 0:r.copy());if(!e._head)return e;let t=e._head,s=e._head._link;for(;s;)t._link=s.copy(),t=s,s=t._link;return e}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}nextId(){const e=this.id;for(;e===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._savedCursor&&(this._cursor=this._savedCursor),this._savedOffset!=null&&(this._cursor._offset=this._savedOffset)}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&l(s)&&(s._link=t._link),!0;s=t,t=t._link}return!1}}class E{constructor(e){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=e}static from(e){return new E(new Float32Array(e))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(e){this._buffer[this._offset+0]=e}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(e){this._buffer[this._offset+8]=e}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(e){return this._buffer[this._offset+10+e*g+0]}boundsComputedAnchorY(e){return this._buffer[this._offset+10+e*g+1]}setBoundsComputedAnchorX(e,t){this._buffer[this._offset+10+e*g+0]=t}setBoundsComputedAnchorY(e,t){this._buffer[this._offset+10+e*g+1]=t}boundsX(e){return this._buffer[this._offset+10+e*g+2]}boundsY(e){return this._buffer[this._offset+10+e*g+3]}boundsWidth(e){return this._buffer[this._offset+10+e*g+4]}boundsHeight(e){return this._buffer[this._offset+10+e*g+5]}link(e){let t=this;for(;t._link;)t=t._link;t._link=e}getCursor(){return this.copy()}copy(){const e=new E(this._buffer);return e._link=this._link,e._offset=this._offset,e._deletedCount=this._deletedCount,e._offsets=this._offsets,e._count=this._count,e}peekId(){const e=this._offset+10+this.boundsCount*g+0;return e>=this._buffer.length?0:this._buffer[e]}next(){let e=0;for(;this._offset<this._buffer.length&&e++<100&&(this._offset===-1?this._offset=0:this._offset+=10+this.boundsCount*g,this.id===V););return this.id!==V&&this._offset<this._buffer.length}delete(e){const t=this._offset,s=this.lookup(e);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===e;)this.id=4294967295,++this._deletedCount;return this._offset=t,s}lookup(e){const t=this._offset;if(f(this._offsets.instance)){this._offsets.instance=new Map;const s=this.copy();s._offset=-1;let r=0;for(;s.next();)s.id!==r&&(this._offsets.instance.set(s.id,s._offset),r=s.id)}return!!this._offsets.instance.has(e)&&(this._offset=this._offsets.instance.get(e),this.id!==V||(this._offset=t,!1))}_computeCount(){const e=this._offset;let t=0;for(this._offset=-1;this.next();)t++;return this._offset=e,t}}class w{constructor(e,t,s,r,i){this.target=e,this.geometryType=t,this.materialKey=s,this.indexFrom=r,this.indexCount=i}get indexEnd(){return this.indexFrom+this.indexCount}extend(e){this.indexCount+=e}}let Y=class{constructor(e,t){this.geometryType=0,this._target=e,this.geometryType=t}static from(e,t,s,r){const i=new Y(e,t);if(l(r))for(const n of r)s.seekIndex(n),i.addRecord(s);else for(;s.next();)i.addRecord(s);return i}addRecord(e){const t=this._target,s=this.geometryType,r=e.materialKey;let i=e.indexFrom,n=e.indexCount;const h=e.vertexFrom,a=e.vertexCount;if(n||(i=h,n=a),f(this._head)){const c=new w(t,s,r,i,n);return void(this._head=new x(c))}let d=null,u=this._head;for(;u;){if(i<u.data.indexFrom)return this._insert(r,i,n,d,u);d=u,u=u.next}this._insert(r,i,n,d,null)}forEach(e){l(this._head)&&this._head.forEach(e)}*infos(){if(l(this._head))for(const e of this._head.values())yield e}_insert(e,t,s,r,i){if(f(r)&&f(i)){const n=new w(this._target,this.geometryType,e,t,s);this._head=new x(n)}return f(r)&&l(i)?this._insertAtHead(e,t,s,i):l(r)&&f(i)?this._insertAtEnd(e,t,s,r):l(r)&&l(i)?this._insertAtMiddle(e,t,s,r,i):void 0}_insertAtHead(e,t,s,r){const i=t+s;if(e===r.data.materialKey&&i===r.data.indexFrom)r.data.indexFrom=t,r.data.indexCount+=s;else{const n=new w(this._target,this.geometryType,e,t,s);this._head=new x(n),this._head.next=r}}_insertAtEnd(e,t,s,r){if(r.data.materialKey===e&&r.data.indexEnd===t)r.data.indexCount+=s;else{const i=new w(this._target,this.geometryType,e,t,s),n=new x(i);r.next=n}}_insertAtMiddle(e,t,s,r,i){const n=t+s;if(r.data.materialKey===e&&r.data.indexEnd===t)r.data.indexCount+=s,r.data.materialKey===i.data.materialKey&&r.data.indexEnd===i.data.indexFrom&&(r.data.indexCount+=i.data.indexCount,r.next=i.next);else if(e===i.data.materialKey&&n===i.data.indexFrom)i.data.indexFrom=t,i.data.indexCount+=s;else{const h=new w(this._target,this.geometryType,e,t,s),a=new x(h);r.next=a,a.next=i}}};const re=1.25,P=32767,ie=P<<16|P;class F{constructor(e,t,s,r){const i=j.create(t*s*Uint32Array.BYTES_PER_ELEMENT,r);this.size=t,this.strideInt=s,this.bufferType=e,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=i,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),y(this._gpu,e=>e.dispose()),this._gpu=null}_invalidateTriangleBuffer(){y(this._gpuComputeTriangles,e=>e.dispose()),this._gpuComputeTriangles=null}destroy(){y(this._gpu,e=>e.dispose()),y(this._gpuComputeTriangles,e=>e.dispose()),y(this._cpu,e=>e.destroy()),y(this._cpu2,e=>e.destroy())}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new J({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(e){if(!(this.maxAvailableSpace()>=e)&&e*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const t=this._cpu.length/this.strideInt,s=Math.round((t+e)*re),r=s*this.strideInt;this._cpu.expand(r*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(t,s-t)}}set(e,t){this._cpu.array[e]!==t&&(this._cpu.array[e]=t,this.dirty.start=Math.min(e,this.dirty.start),this.dirty.end=Math.max(e,this.dirty.end))}getGPUBuffer(e,t=!1){if(!this.bufferSize)return null;if(t){if(this.bufferType!=="index")throw new Error("Tired to get triangle buffer, but target is not an index buffer");return f(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(e)),this._gpuComputeTriangles}return f(this._gpu)&&(this._gpu=this._createBuffer(e)),this._gpu}getCPUBuffer(){if(!this._cpu2){const e=this._cpu.slice();this._cpu2=e}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(e,t,s,r){const i=s*this.strideInt;if(!i)return 0;const n=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,h=new Uint32Array(e,n,i),a=q(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,d=i,u=a/this.strideInt-t;if(r!==0)for(let c=0;c<h.length;c++)h[c]+=r;return this._cpu.array.set(h,a),this.dirty.start=Math.min(this.dirty.start,a),this.dirty.end=Math.max(this.dirty.end,a+d),this.fillPointer=Math.max(this.fillPointer,a+d),u}free(e,t,s){const r=e*this.strideInt,i=(e+t)*this.strideInt;if(s===!0)for(let n=e;n!==e+t;n++)this._cpu.array[n*this.strideInt]=ie;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,i),this.freeList.free(e,t)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),f(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(e){const t=U.DYNAMIC_DRAW;return this.bufferType==="index"?S.createIndex(e,t,this._cpu.array):S.createVertex(e,t,this._cpu.array)}_createComputeBuffer(e){const t=U.DYNAMIC_DRAW,s=new Uint32Array(this.fillPointer/3);for(let r=0;r<this.fillPointer;r+=3)s[r/3]=this._cpu.array[r];return S.createIndex(e,t,s)}}const ne=0,oe=1;let he=class{constructor(e,t){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=e,this._stage=t}destroy(){for(const[e,t]of this._vaos)l(t)&&t.dispose(!1);this._indexBuffer=R(this._indexBuffer),this._vertexBuffer=R(this._vertexBuffer)}insert(e,t,s){if(!e.records.byteLength)return;const r=e.stride;if(this._vertexBuffer&&this._indexBuffer){const i=e.indices.byteLength/4,n=e.vertices.byteLength/r;this._indexBuffer.ensure(i),this._vertexBuffer.ensure(n);const{vertices:h,indices:a}=e,d=A.from(e.records),u=this._vertexBuffer.insert(h,0,h.byteLength/r,0),c=this._indexBuffer.insert(a,0,a.byteLength/4,u);if(d.forEach(p=>{p.indexFrom+=c,p.vertexFrom+=u}),q(this._records,"Expected records to be defined").link(d),t)this._indicesInvalid=!0;else if(this._displayList){const p=d.getCursor();for(;p.next();)this._displayList.addRecord(p)}}else{const i=e.indices.byteLength/4,n=e.vertices.byteLength/r,h=r/Uint32Array.BYTES_PER_ELEMENT,a=this._stage.bufferPool;this._records=A.from(e.records),this._indexBuffer=new F("index",i,1,a),this._vertexBuffer=new F("vertex",n,h,a),this._indexBuffer.insert(e.indices,0,e.indices.byteLength/4,0),this._vertexBuffer.insert(e.vertices,0,e.vertices.byteLength/r,0),t&&(this._indicesInvalid=!0)}}remove(e){if(!f(this._records))for(const t of e){const s=this._records.getCursor();if(!s.lookup(t))continue;const r=s.indexFrom,i=s.vertexFrom;let n=s.indexCount,h=s.vertexCount;for(;s.next()&&s.id===t;)n+=s.indexCount,h+=s.vertexCount;this._indexBuffer.free(r,n),this._vertexBuffer.free(i,h,!0),this._records.delete(t)}}getVAO(e,t,s,r){if(!this._vertexBuffer||!this._indexBuffer||f(this._records)||!this._vertexBuffer.bufferSize)return null;const i=r?oe:ne;let n=this._vaos.get(i);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated||r&&this._indexBuffer.invalidatedComputeBuffer)&&(y(n,d=>d.dispose(!1)),n=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const h=this._indexBuffer.getGPUBuffer(e,i===1),a=this._vertexBuffer.getGPUBuffer(e);return n||(n=new Q(e,s,t,{geometry:a},h),this._vaos.set(i,n)),n}forEachCommand(e){if(!f(this._records)){if(this._sortIndices(this._records),!this._displayList){const t=this._cursorIndexOrder;this._displayList=Y.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(e)}}_sortIndices(e){const t=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let s=0;const r=e.getCursor(),i=[],n=[],h=[];for(;r.next();)n.push(r.index),h.push(r.sortKey),i.push(r.id);n.sort((u,c)=>{const p=h[c],m=h[u];return m===p?i[c]-i[u]:p-m});const a=e.getCursor(),d=t?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const u of n){if(!a.seekIndex(u))throw new Error("Expected to find index");if(t){const{indexFrom:c,indexCount:p}=a;a.indexFrom=s;for(let m=0;m<p;m++)this._indexBuffer.set(s++,d.array[c+m])}else{const{vertexFrom:c,vertexCount:p}=a,m=this._vertexBuffer.strideInt,I=c*m,z=I+p*m;a.vertexFrom=s/m;for(let T=I;T<z;T++)this._vertexBuffer.set(s++,d.array[T])}}this._cursorIndexOrder=n,this._displayList=null}};const ae=50,ue=4,$=100;let de=0;class fe extends N{constructor(e,t,s,r,i,n){super(e,t,s,r),this.instanceId=de++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new M($),this._bufferPatches=new M($),this._lastCommitTime=0,this.transforms.labelMat2d=Z(),this._store=i,this._requestLabelUpdate=n}destroy(){super.destroy(),this._renderState.current.geometry.forEach(e=>e.destroy()),l(this._renderState.next)&&this._renderState.next.geometry.forEach(e=>e.destroy()),this._renderState.current=null,this._renderState.next=null}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}patch(e,t){this.patchCount++,e.clear&&this._patches.size>=ae&&this._dropPatches();const s=e,r=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin;t&&r?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!t,this._patches.enqueue(s)),this.requestRender()}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let t=0;t<ue;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();this._renderState.swap=!0,this._swap()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,l(this._renderState.next)&&(this._renderState.current.geometry.forEach(e=>e.destroy()),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!l(e)||!e.clear||this._renderState.next===null)for(;this._bufferPatches.size;){const t=this._bufferPatches.dequeue();l(t)&&this._patchBuffer(t)}}_updateMesh(){var t,s,r,i;const e=this._patches.dequeue();if(l(e)){if(b("esri-2d-update-debug")){const n=e,h=(t=n.addOrUpdate)==null?void 0:t.tileKeyOrigin,a=this.key.id===h?"SELF":h;let d="";for(let u=0;u<5;u++)d+=(i=(r=(s=n.addOrUpdate)==null?void 0:s.data[u])==null?void 0:r.records)!=null&&i.byteLength?1:0;console.debug(this.key.id,"FeatureTile:patch",`[clear: ${n.clear} origin: ${a}, end:${n.end} data:${d}]`)}e.clear===!0&&(l(this._renderState.next)&&(this._renderState.next.geometry.forEach(n=>n.destroy()),this._renderState.next=null),this._renderState.next={geometry:new Map,metrics:null},b("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Creating new renderState")),this.requestRender(),this._patch(e),e.end&&(b("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Encountered end message"),this.ready(),this._swapRenderStates())}}_patch(e){L(t=>{this._remove(t,e.remove),this._insert(t,e,!1)})}_patchBuffer(e){L(t=>{this._insert(t,e,!0)})}_insert(e,t,s){var r;try{const i=v(this._renderState.next,this._renderState.current),n=(r=t.addOrUpdate)==null?void 0:r.data[e],h=i.geometry;if(f(n))return;h.has(e)||(b("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Creating geometry buffer ${e}`),h.set(e,new he(e,this.stage))),b("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Inserting into ${e}, version=${t.addOrUpdate.version} stride=${n.stride}`),h.get(e).insert(n,t.sort,s),e===G.LABEL&&this._insertLabelMetrics(t.type,n.metrics,t.clear)}catch{}}_insertLabelMetrics(e,t,s){const r=v(this._renderState.next,this._renderState.current);if(f(t))return;const i=C.from(t);if(f(r.metrics))r.metrics=i;else{if(e==="update"){const n=i.getCursor();for(;n.next();)r.metrics.delete(n.id)}r.metrics.link(i)}}_remove(e,t){const s=v(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t))}_removeLabelMetrics(e){const{metrics:t}=v(this._renderState.next,this._renderState.current);if(!f(t)&&e.length)for(const s of e)for(;t.delete(s););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const s=this._patches.dequeue();if(f(s))break;if(s.clear){if(t)break;t=!0}e.push(s)}this._patches.clear(),e.forEach(s=>this._patches.enqueue(s))}}const le=b("featurelayer-order-by-server-enabled");class ce extends W{constructor(e,t,s,r){super(e),this._hitTestsRequests=[],this._layer=s,this._layerView=t,this._onUpdate=r}renderChildren(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),super.renderChildren(e)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(e){let t=this._hitTestsRequests.find(({x:r,y:i})=>r===e.x&&i===e.y);const s=O();return t?t.resolvers.push(s):(t={x:e.x,y:e.y,resolvers:[s]},this._hitTestsRequests.push(t)),this.requestRender(),s.promise}onTileData(e,t){const s=le&&"orderBy"in this._layer&&this._layer.orderBy,r=(s==null?void 0:s.length)&&!s[0].valueExpression&&s[0].field,i=s&&this._layerView.orderByFields===r;e.patch(t,i),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(e){const{minScale:t,maxScale:s}=this._layer,r=e.state.scale;r<=(t||1/0)&&r>=s&&super.doRender(e)}afterRender(e){super.afterRender(e),this._hitTestsRequests.length&&this.requestRender()}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(e){const{rendererSchema:t}=e.rendererInfo;if((t==null?void 0:t.type)==="dot-density"&&(t==null?void 0:t.dotSize)>1||(t==null?void 0:t.type)==="heatmap")for(const r of this.children)r.stencilRef=r.key.level+1;else super.setStencilReference(e)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some(s=>s.labelingInfo&&s.labelingInfo.length&&s.labelsVisible);const e=this._layer.featureReduction,t=e&&"labelingInfo"in e&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[_.label],target:()=>this.hasLabels?this.children:null,drawPhase:B.LABEL|B.LABEL_ALPHA}),s=e.registerRenderPass({name:"geometry",brushes:[_.fill,_.dotDensity,_.line,_.marker,_.heatmap,_.pieChart,_.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:e.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:e.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),r=e.registerRenderPass({name:"highlight",brushes:[_.fill,_.dotDensity,_.line,_.marker,_.pieChart,_.text],target:()=>this.children,drawPhase:B.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),s,r,t]}}let k=class extends te{constructor(){super(...arguments),this.type="symbol"}install(o){const e=()=>this.notifyChange("updating"),t=new ce(this.tileInfoView,this.layerView,this.layer,e);this.featuresView=t,o.addChild(t)}uninstall(o){o.removeChild(this.featuresView),this.featuresView.destroy(),this.featuresView=null}fetchResource(o,e){const{url:t}=o,s=this.featuresView.stage;try{return s.resourceManager.fetchResource(t,{signal:e.signal})}catch(r){return X(r)?Promise.resolve({width:0,height:0}):Promise.reject(r)}}isUpdating(){var r;const o=super.isUpdating(),e=!this.featuresView||this.featuresView.isUpdating(),t=(r=this.featuresView)==null?void 0:r.hasEmptyAttributeView(),s=o||e||o&&t;return b("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${s}
  -> updatingTiles ${o}
  -> hasFeaturesView ${!!this.featuresView}
  -> updatingFeaturesView ${e}`),s}hitTest(o){return this.featuresView.hitTest(o)}supportsRenderer(o){return o!=null&&["simple","class-breaks","unique-value","dot-density","dictionary","heatmap","pie-chart"].includes(o.type)}onConfigUpdate(o){let e=null;if(o&&"visualVariables"in o){const t=(ee(o).visualVariables||[]).map(s=>{const r=s.clone();return"normalizationField"in s&&(r.normalizationField=null),s.valueExpression&&s.valueExpression!=="$view.scale"&&(r.valueExpression=null,r.field="nop"),r});e=se(t)}this.featuresView.setRendererInfo(o,e,this.layerView.featureEffect)}onTileData(o){const e=this.tiles.get(o.tileKey);e&&o.data&&this.featuresView.onTileData(e,o.data),this.layerView.view.labelManager.requestUpdate()}onTileError(o){const e=this.tiles.get(o.tileKey);e&&this.featuresView.onTileError(e)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach(o=>o.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach(o=>o.unlock())}async getMaterialItems(o){return this.featuresView.getMaterialItems(o)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(o){const e=this.tileInfoView.getTileBounds(H(),o),t=()=>this.layerView.view.labelManager.requestUpdate(),s=this.tileInfoView.getTileResolution(o.level),r=this.featuresView.attributeView;return new fe(o,s,e[0],e[3],r,t)}disposeTile(o){this.featuresView.removeChild(o),o.destroy(),this.layerView.view.labelManager.requestUpdate()}};k=D([K("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],k);const Tt=k;export{Tt as default};