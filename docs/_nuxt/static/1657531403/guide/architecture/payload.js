__NUXT_JSONP__("/guide/architecture", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:[{document:{slug:"architecture",description:"",title:"Architecture",position:o,category:"Guide",toc:[{id:p,depth:m,text:q},{id:r,depth:m,text:s},{id:t,depth:m,text:u},{id:v,depth:o,text:w}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Policy Reporter consists of up to three components."}]},{type:a,value:c},{type:b,tag:"img",props:{src:"\u002Fpolicy-reporter\u002Fimages\u002Fpolicy-reporter.svg",style:"background-color: #fff; padding: 15px; width: 100%;"},children:[]},{type:a,value:c},{type:b,tag:n,props:{id:p},children:[{type:b,tag:e,props:{href:"#policy-reporter",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is the core application and watches for PolicyReporter and ClusterPolicyReporter CRD resources in the cluster. Policy Reporter uses internal listeners to react to incoming events and apply its logic to them."}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"MetricsListener"}]},{type:a,value:" (optional) creates metrics based on new, updated, and removed resources"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"StoreListener"}]},{type:a,value:" (optional) persists new resources and every change of an existing resource in an internal representation in the included SQLite database"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"ResultsListener"}]},{type:a,value:" checks each new and updated report for new results and publishes them to all registered "},{type:b,tag:f,props:{},children:[{type:a,value:"PolicyResultListeners"}]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"SendResultListener"}]},{type:a,value:" is a PolicyResultListener and sends all new results to the configured targets"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Processed information is available over the embedded HTTP server as API endpoints. See "},{type:b,tag:"nuxt-link",props:{to:"\u002Fcore\u002F07-api-reference"},children:[{type:a,value:"API Reference"}]},{type:a,value:" for details."}]},{type:a,value:c},{type:b,tag:n,props:{id:r},children:[{type:b,tag:e,props:{href:"#policy-reporter-kyverno-plugin",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This component watches for the Kyverno (Cluster)Policy CRDs like the Policy Reporter core application for the (Cluster)PolicyReport CRDs. The collected data is transformed into a internal format and available over the embedded HTTP server as API endpoints."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This component is independent from the Policy Reporter core application and only consumed by the Policy Reporter UI."}]},{type:a,value:c},{type:b,tag:n,props:{id:t},children:[{type:b,tag:e,props:{href:"#policy-reporter-ui",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This component is an optional, standalone UI for information provided by the Policy Reporter core application (and Policy Reporter Kyverno Plugin). The intention was to provide a simple alternative to external monitoring solutions such as Grafana, which are not always available. The UI is a "},{type:b,tag:e,props:{href:"https:\u002F\u002Fnuxtjs.org\u002F",target:"_blank"},children:[{type:a,value:"NuxtJS"}]},{type:a,value:" based single-page application and is served over a Golang-based static file server. This server also proxies all requests made by the UI to the Policy Reporter API."}]},{type:a,value:c},{type:b,tag:"h3",props:{id:v},children:[{type:b,tag:e,props:{href:"#kyverno-plugin",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Kyverno integration is an optional plugin. If enabled, it provides additional views about Kyverno policies. This information is provided by the Policy Reporter Kyverno Plugin which will also be proxied."}]}]},dir:"\u002Fen\u002Fguide",path:"\u002Fen\u002Fguide\u002Farchitecture",extension:".md",createdAt:x,updatedAt:x,to:"\u002Fguide\u002Farchitecture"},prev:{title:"Getting started",path:"\u002Fen\u002Fguide\u002Fgetting-started",to:"\u002Fguide\u002Fgetting-started"},next:{title:"Helm Chart",path:"\u002Fen\u002Fguide\u002Fhelm-chart-core",to:"\u002Fguide\u002Fhelm-chart-core"}}],fetch:{},mutations:[]}}("text","element","\n","p","a","strong","true",-1,"span","icon","icon-link","li",2,"h2",3,"policy-reporter","Policy Reporter","policy-reporter-kyverno-plugin","Policy Reporter Kyverno Plugin","policy-reporter-ui","Policy Reporter UI","kyverno-plugin","Kyverno Plugin","2022-07-11T09:22:39.524Z")));