import{L as o}from"./cast-6d78d3c7.js";class n{constructor(){this._observers=[]}observe(s){return this._observers.includes(s)||this._observers.push(s),new o(this._observers,s)}notify(){const s=this._observers.slice();for(let e=0;e<s.length;++e){const r=s[e];r.onInvalidated(),r.onCommitted()}}}export{n as e};
