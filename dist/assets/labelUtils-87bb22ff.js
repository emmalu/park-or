import{n as u}from"./string-9c5e03f7.js";const r="__begin__",t="__end__",c=new RegExp(r,"ig"),p=new RegExp(t,"ig"),o=new RegExp("^"+r,"i"),i=new RegExp(t+"$","i"),s='"',x=s+" + ",f=" + "+s;function g(n){return n.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}function y(n){return n.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function l(n){const e={expression:"",type:"none"};return n.labelExpressionInfo?n.labelExpressionInfo.value?(e.expression=n.labelExpressionInfo.value,e.type="conventional"):n.labelExpressionInfo.expression&&(e.expression=n.labelExpressionInfo.expression,e.type="arcade"):n.labelExpression!=null&&(e.expression=g(n.labelExpression),e.type="conventional"),e}function I(n){const e=l(n);if(!e)return null;switch(e.type){case"conventional":return w(e.expression);case"arcade":return e.expression}return null}function d(n){const e=l(n);if(!e)return null;switch(e.type){case"conventional":return $(e.expression);case"arcade":return _(e.expression)}return null}function w(n){let e;return n?(e=u(n,a=>r+'$feature["'+a+'"]'+t),e=o.test(e)?e.replace(o,""):s+e,e=i.test(e)?e.replace(i,""):e+s,e=e.replace(c,x).replace(p,f)):e='""',e}const E=/^\s*\{([^}]+)\}\s*$/i;function $(n){const e=n.match(E);return e&&e[1].trim()||null}const b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,R=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function _(n){if(!n)return null;let e=b.exec(n)||m.exec(n);return e?e[1]||e[3]:(e=R.exec(n),e?e[2]:null)}export{_,I as f,d as g,y as u,w,l as x};
