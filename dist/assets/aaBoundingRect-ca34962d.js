import"./string-9c5e03f7.js";import"./mathUtils-daf59e84.js";import{t as h}from"./typedArrayUtil-d02f10a8.js";import{a as f}from"./Extent-d5fff12d.js";function i(a=n){return[a[0],a[1],a[2],a[3]]}function g(a){return[a[0],a[1],a[2],a[3]]}function x(a,t){return a!==t&&(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3]),a}function w(a,t,m,c,u=i()){return u[0]=a,u[1]=t,u[2]=m,u[3]=c,u}function $(a,t=i()){return t[0]=a.xmin,t[1]=a.ymin,t[2]=a.xmax,t[3]=a.ymax,t}function K(a,t){return new f({xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:t})}function R(a,t){t[0]<a[0]&&(a[0]=t[0]),t[0]>a[2]&&(a[2]=t[0]),t[1]<a[1]&&(a[1]=t[1]),t[1]>a[3]&&(a[3]=t[1])}function b(a,t,m){if(h(t))x(m,a);else if("length"in t)e(t)?(m[0]=Math.min(a[0],t[0]),m[1]=Math.min(a[1],t[1]),m[2]=Math.max(a[2],t[2]),m[3]=Math.max(a[3],t[3])):t.length!==2&&t.length!==3||(m[0]=Math.min(a[0],t[0]),m[1]=Math.min(a[1],t[1]),m[2]=Math.max(a[2],t[0]),m[3]=Math.max(a[3],t[1]));else switch(t.type){case"extent":m[0]=Math.min(a[0],t.xmin),m[1]=Math.min(a[1],t.ymin),m[2]=Math.max(a[2],t.xmax),m[3]=Math.max(a[3],t.ymax);break;case"point":m[0]=Math.min(a[0],t.x),m[1]=Math.min(a[1],t.y),m[2]=Math.max(a[2],t.x),m[3]=Math.max(a[3],t.y)}}function M(a){return h(a)||a[0]>=a[2]?0:a[2]-a[0]}function r(a){return a[1]>=a[3]?0:a[3]-a[1]}function k(a){return M(a)*r(a)}function q(a,t,m){return t>=a[0]&&m>=a[1]&&t<=a[2]&&m<=a[3]}function D(a,t,m){return t[0]>=a[0]-m&&t[1]>=a[1]-m&&t[0]<=a[2]+m&&t[1]<=a[3]+m}function E(a,t){return Math.max(t[0],a[0])<=Math.min(t[2],a[2])&&Math.max(t[1],a[1])<=Math.min(t[3],a[3])}function G(a,t){return t[0]>=a[0]&&t[2]<=a[2]&&t[1]>=a[1]&&t[3]<=a[3]}function I(a){return a?x(a,o):i(o)}function e(a){return a!=null&&a.length===4}function L(a,t){return e(a)&&e(t)?a[0]===t[0]&&a[1]===t[1]&&a[2]===t[2]&&a[3]===t[3]:a===t}const o=[1/0,1/0,-1/0,-1/0],n=[0,0,0,0];export{I as D,E,L as I,o as K,G as R,$ as c,g as e,K as f,b as h,r as l,R as m,w as o,D as q,M as s,i as u,q as w,k as y};
