import o from"./ContentSlot.dc4754ed.js";import{f as s,q as a,x as r,G as _,y as p}from"./runtime-core.esm-bundler.c752936e.js";import{s as c}from"./index.ce37d225.js";import"./DocsAsideTree.4a0276c0.js";import"./cookie.10b90659.js";import"./Container.6a94be83.js";const m=s({__name:"Badge",props:{type:{type:String,default:"info",validator(e){return["info","success","warning","danger","primary"].includes(e)}}},setup(e){return(t,i)=>{const n=o;return a(),r("span",{class:p([[e.type],"badge"])},[_(n,{use:t.$slots.default,unwrap:"p"},null,8,["use"])],2)}}});const x=c(m,[["__scopeId","data-v-69c7b84e"]]);export{x as default};