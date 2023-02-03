import{_ as E}from"./preload-helper-101896b7.js";import{a as A}from"./Error-4ed679d7.js";import{t as I,r as s}from"./typedArrayUtil-d02f10a8.js";import{t as x,o as V}from"./string-9c5e03f7.js";import{i as N}from"./arcadeOnDemand-72a1843c.js";var a;function w(e,n){switch(e.type){case"range":{const i="range"in e?e.range[0]:e.minValue,t="range"in e?e.range[1]:e.maxValue;if(i!=null&&+n<i||t!=null&&+n>t)return a.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(e.codedValues==null||e.codedValues.every(i=>i==null||i.code!==n))return a.INVALID_CODED_VALUE}return null}(function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"})(a||(a={}));const D=/^([0-9])/,L=/[^A-Za-z0-9_\u0080-\uffff]/g,O=/_{2,}/g,S=/^_/,U=/_$/;function oe(e){return e?e.trim().replace(L,"_").replace(O,"_").replace(S,"").replace(U,"").replace(D,"F$1"):null}const $=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],P=["field","normalizationField"];function se(e,n){if(e!=null&&n!=null){for(const i of Array.isArray(e)?e:[e])if(F($,i,n),"visualVariables"in i&&i.visualVariables)for(const t of i.visualVariables)F(P,t,n)}}function F(e,n,i){if(e)for(const t of e){const r=x(t,n),l=r&&typeof r!="function"&&i.get(r);l&&V(t,l.name,n)}}function ue(e,n){var i;if(e!=null&&((i=n==null?void 0:n.fields)!=null&&i.length))if("startField"in e){const t=n.get(e.startField),r=n.get(e.endField);e.startField=(t==null?void 0:t.name)??null,e.endField=(r==null?void 0:r.name)??null}else{const t=n.get(e.startTimeField),r=n.get(e.endTimeField);e.startTimeField=(t==null?void 0:t.name)??null,e.endTimeField=(r==null?void 0:r.name)??null}}const p=new Set;function z(e,n){return e&&n?(p.clear(),f(p,e,n),Array.from(p).sort()):[]}function f(e,n,i){var t;if(i)if((t=n==null?void 0:n.fields)!=null&&t.length)if(i.includes("*"))for(const{name:r}of n.fields)e.add(r);else for(const r of i)m(e,n,r);else{if(i.includes("*"))return e.clear(),void e.add("*");for(const r of i)r!=null&&e.add(r)}}function m(e,n,i){if(typeof i=="string")if(n){const t=n.get(i);t&&e.add(t.name)}else e.add(i)}function fe(e,n){return I(n)||I(e)?[]:n.includes("*")?(e.fields??[]).map(i=>i.name):n}async function u(e,n,i){var l;if(!i)return;const{arcadeUtils:t}=await N(),r=t.extractFieldNames(i,(l=n==null?void 0:n.fields)==null?void 0:l.map(o=>o.name));for(const o of r)m(e,n,o)}async function _(e,n,i){if(i&&i!=="1=1"){const t=(await E(()=>import("./WhereClause-646ca60e.js"),["assets/WhereClause-646ca60e.js","assets/string-9c5e03f7.js","assets/typedArrayUtil-d02f10a8.js"])).WhereClause.create(i,n);if(!t.isStandardized)throw new A("fieldUtils:collectFilterFields","Where clause is not standardized",{where:i});f(e,n,t.fieldNames)}}function de({displayField:e,fields:n}){return e||(n&&n.length?y(n,"name-or-title")||y(n,"unique-identifier")||y(n,"type-or-category")||R(n):null)}function R(e){for(const n of e){if(!n||!n.name)continue;const i=n.name.toLowerCase();if(i.includes("name")||i.includes("title"))return n.name}return null}function y(e,n){for(const i of e)if(i&&i.valueType&&i.valueType===n)return i.name;return null}async function ce(e,n){if(!n)return;const i=x("elevationInfo.featureExpressionInfo",n);return i?i.collectRequiredFields(e,n.fieldsIndex):void 0}function C(e,n,i){i.onStatisticExpression?u(e,n,i.onStatisticExpression.expression):e.add(i.onStatisticField)}async function me(e,n,i){if(!n||!i||!("fields"in i))return;const t=[],r=i.popupTemplate;t.push(G(e,n,r)),i.fields&&t.push(...i.fields.map(async l=>C(e,n.fieldsIndex,l))),await Promise.all(t)}async function G(e,n,i){const t=[];i!=null&&i.expressionInfos&&t.push(...i.expressionInfos.map(l=>u(e,n.fieldsIndex,l.expression)));const r=i==null?void 0:i.content;if(Array.isArray(r))for(const l of r)l.type==="expression"&&l.expressionInfo&&t.push(u(e,n.fieldsIndex,l.expressionInfo.expression));await Promise.all(t)}async function pe(e,n,i){n&&(n.timeInfo&&s(i)&&i.timeExtent&&f(e,n.fieldsIndex,[n.timeInfo.startField,n.timeInfo.endField]),n.floorInfo&&f(e,n.fieldsIndex,[n.floorInfo.floorField]),s(i)&&s(i.where)&&await _(e,n.fieldsIndex,i.where))}async function ye(e,n,i){n&&i&&await Promise.all(i.map(t=>k(e,n,t)))}async function k(e,n,i){n&&i&&(i.valueExpression?await u(e,n.fieldsIndex,i.valueExpression):i.field&&m(e,n.fieldsIndex,i.field))}function ge(e){if(!e)return[];const n="editFieldsInfo"in e&&e.editFieldsInfo;return n?z(e.fieldsIndex,[n&&n.creatorField,n&&n.creationDateField,n&&n.editorField,n&&n.editDateField]):[]}async function Ie(e,n){const{labelingInfo:i,fieldsIndex:t}=n;i&&i.length&&await Promise.all(i.map(r=>M(e,t,r)))}async function M(e,n,i){if(!i)return;const t=i.getLabelExpression(),r=i.where;if(t.type==="arcade")await u(e,n,t.expression);else{const l=t.expression.match(/{[^}]*}/g);l&&l.forEach(o=>{m(e,n,o.slice(1,-1))})}await _(e,n,r)}function Fe(e){const n=e.defaultValue;return n!==void 0&&T(e,n)?n:e.nullable?null:void 0}function b(e){return typeof e=="number"&&!isNaN(e)&&isFinite(e)}function W(e){return e===null||b(e)}const g="isInteger"in Number?Number.isInteger:e=>typeof e=="number"&&isFinite(e)&&Math.floor(e)===e;function Y(e){return e===null||g(e)}function v(e){return e!=null&&typeof e=="string"}function q(e){return e===null||v(e)}function J(){return!0}function T(e,n){let i;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":i=e.nullable?Y:g;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":i=e.nullable?W:b;break;case"string":case"esriFieldTypeString":i=e.nullable?q:v;break;default:i=J}return arguments.length===1?i:i(n)}const X=["integer","small-integer","single","double"],Z=new Set([...X,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function j(e){return e!=null&&Z.has(e.type)}function xe(e){return e!=null&&(e.type==="string"||e.type==="esriFieldTypeString")}var d,c;function _e(e){return e==null||typeof e=="number"&&isNaN(e)?null:e}function be(e,n){return e.nullable&&n===null?null:j(e)&&!B(e.type,Number(n))?d.OUT_OF_RANGE:T(e,n)?e.domain?w(e.domain,n):null:c.INVALID_TYPE}function B(e,n){const i=typeof e=="string"?h(e):e;if(!i)return!1;const t=i.min,r=i.max;return i.isInteger?g(n)&&n>=t&&n<=r:n>=t&&n<=r}function h(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return H;case"esriFieldTypeInteger":case"integer":return K;case"esriFieldTypeSingle":case"single":return Q;case"esriFieldTypeDouble":case"double":return ee}}(function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"})(d||(d={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(c||(c={}));const H={min:-32768,max:32767,isInteger:!0},K={min:-2147483648,max:2147483647,isInteger:!0},Q={min:-34e37,max:12e37,isInteger:!1},ee={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function ve(e,n,i){switch(e){case a.INVALID_CODED_VALUE:return`Value ${i} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case a.VALUE_OUT_OF_RANGE:return`Value ${i} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case c.INVALID_TYPE:return`Value ${i} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;case d.OUT_OF_RANGE:{const{min:t,max:r}=h(n.type);return`Value ${i} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${t} to ${r}`}}}function Te(e,n){return!ne(e,n,null)}function ne(e,n,i){if(!n||!n.attributes||!e){if(s(i))for(const l of e??[])i.add(l);return!0}const t=n.attributes;let r=!1;for(const l of e)if(!(l in t)){if(r=!0,!s(i))break;i.add(l)}return r}function he(e){return["raster.itempixelvalue","raster.servicepixelvalue"].some(n=>e.toLowerCase().startsWith(n))}export{ge as C,ce as D,de as E,se as F,ve as I,Fe as M,me as O,u as S,z as T,Ie as W,ue as a,f as b,_e as c,be as f,he as h,j as i,pe as j,oe as p,xe as t,fe as v,m as w,Te as x,ye as z};