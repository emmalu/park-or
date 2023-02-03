import{r as u}from"./typedArrayUtil-d02f10a8.js";import{N as l}from"./cast-6d78d3c7.js";const m=-3;var o;(function(a){a[a.ALL=0]="ALL",a[a.SOME=1]="SOME"})(o||(o={}));class v{constructor(e,t,s){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,s,h=0){this._storage.put(this._namespace+e,t,s,h)}get(e){const t=this._storage.get(this._namespace+e);return t===void 0?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return t===void 0?++this._miss:++this._hit,t}updateSize(e,t,s){this._storage.updateSize(this._namespace+e,t,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class p{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new l,this._users=new l}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(t=>t[0]!==e)}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,s,h){const r=this._db.get(e);if(r&&(this._size-=r.size,this._db.delete(e),r.entry!==t&&this._notifyRemove(e,r.entry,o.ALL)),s>this._maxSize)return void this._notifyRemove(e,t,o.ALL);if(t===void 0)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const i=1+Math.max(h,m)-m;this._db.set(e,{entry:t,size:s,lifetime:i,lives:i}),this._size+=s,this._checkSizeLimit()}updateSize(e,t,s){const h=this._db.get(e);if(h&&h.entry===t){for(this._size-=h.size;s>this._maxSize;){const r=this._notifyRemove(e,t,o.SOME);if(!(u(r)&&r>0))return void this._db.delete(e);s=r}h.size=s,this._size+=s,this._checkSizeLimit()}}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(t!==void 0)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},s=new Array;this._db.forEach((i,_)=>{const n=i.lifetime;s[n]=(s[n]||0)+i.size,this._users.forAll(d=>{const c=d.namespace;if(_.startsWith(c)){const z=t[c]||0;t[c]=z+i.size}})});const h={};this._users.forAll(i=>{const _=i.namespace;if(!isNaN(i.hitRate)&&i.hitRate>0){const n=t[_]||0;t[_]=n,h[_]=Math.round(100*i.hitRate)+"%"}else h[_]="0%"});const r=Object.keys(t);r.sort((i,_)=>t[_]-t[i]),r.forEach(i=>e[i]=Math.round(t[i]/2**20)+"MB / "+h[i]);for(let i=s.length-1;i>=0;--i){const _=s[i];_&&(e["Priority "+(i+m-1)]=Math.round(_/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){this._db.forEach((t,s)=>{s.startsWith(e)&&(this._size-=t.size,this._db.delete(s),this._notifyRemove(s,t.entry,o.ALL))})}clearAll(){this._db.forEach((e,t)=>this._notifyRemove(t,e.entry,o.ALL)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,s){let h;return this._removeFuncs.some(r=>{if(e.startsWith(r[0])){const i=r[1](t,s);return typeof i=="number"&&(h=i),!0}return!1}),h}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size;const s=this._notifyRemove(e,t.entry,o.SOME);u(s)&&s>0&&(this._size+=s,t.lives=t.lifetime,t.size=s,this._db.set(e,t))}else--t.lives,this._db.set(e,t);if(this._size<=.9*this.maxSize)return}}}export{p as h,v as r};
