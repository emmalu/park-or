import{e as t,y as e,l as d,n as h}from"./cast-6d78d3c7.js";import{y as l}from"./string-9c5e03f7.js";import{b as u}from"./ensureType-d98e08e1.js";import{r as n,k as y}from"./Extent-d5fff12d.js";import"./geometry-70b2a4a5.js";import{K as c}from"./Query-066f2ccf.js";var a;let r=a=class extends d{constructor(i){super(i),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(i,s){s.resultOffset=this.start,s.resultRecordCount=this.num||10}clone(){return new a(l({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};t([e({type:[String],json:{write:!0}})],r.prototype,"attachmentTypes",void 0),t([e({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],r.prototype,"attachmentsWhere",void 0),t([e({type:Boolean,json:{write:!0}})],r.prototype,"cacheHint",void 0),t([e({type:[String],json:{write:!0}})],r.prototype,"keywords",void 0),t([e({type:[Number],json:{write:!0}})],r.prototype,"globalIds",void 0),t([e({json:{write:!0}})],r.prototype,"name",void 0),t([e({type:Number,json:{read:{source:"resultRecordCount"}}})],r.prototype,"num",void 0),t([e({type:[Number],json:{write:!0}})],r.prototype,"objectIds",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],r.prototype,"returnMetadata",void 0),t([e({type:[Number],json:{write:!0}})],r.prototype,"size",void 0),t([e({type:Number,json:{read:{source:"resultOffset"}}})],r.prototype,"start",void 0),t([n("start"),n("num")],r.prototype,"writeStart",null),t([e({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],r.prototype,"where",void 0),r=a=t([h("esri.rest.support.AttachmentQuery")],r),r.from=u(r);const g=r;var p;let o=p=class extends d{constructor(i){super(i),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(i,s){s.historicMoment=i&&i.getTime()}writeStart(i,s){s.resultOffset=this.start,s.resultRecordCount=this.num||10,this.start>0&&this.where==null&&(s.definitionExpression="1=1")}clone(){return new p(l({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};t([e({type:Boolean,json:{write:!0}})],o.prototype,"cacheHint",void 0),t([e({type:c,json:{write:!0}})],o.prototype,"dynamicDataSource",void 0),t([e({type:String,json:{write:!0}})],o.prototype,"gdbVersion",void 0),t([e({type:Number,json:{write:!0}})],o.prototype,"geometryPrecision",void 0),t([e({type:Date})],o.prototype,"historicMoment",void 0),t([n("historicMoment")],o.prototype,"_writeHistoricMoment",null),t([e({type:Number,json:{write:!0}})],o.prototype,"maxAllowableOffset",void 0),t([e({type:[Number],json:{write:!0}})],o.prototype,"objectIds",void 0),t([e({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),t([e({type:[String],json:{write:!0}})],o.prototype,"outFields",void 0),t([e({type:y,json:{read:{source:"outSR"},write:{target:"outSR"}}})],o.prototype,"outSpatialReference",void 0),t([e({json:{write:!0}})],o.prototype,"relationshipId",void 0),t([e({type:Number,json:{read:{source:"resultOffset"}}})],o.prototype,"start",void 0),t([n("start"),n("num")],o.prototype,"writeStart",null),t([e({type:Number,json:{read:{source:"resultRecordCount"}}})],o.prototype,"num",void 0),t([e({json:{write:!0}})],o.prototype,"returnGeometry",void 0),t([e({type:Boolean,json:{write:{overridePolicy:i=>({enabled:i})}}})],o.prototype,"returnM",void 0),t([e({type:Boolean,json:{write:{overridePolicy:i=>({enabled:i})}}})],o.prototype,"returnZ",void 0),t([e({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],o.prototype,"where",void 0),o=p=t([h("esri.rest.support.RelationshipQuery")],o),o.from=u(o);const S=o;export{g as c,S as d};
