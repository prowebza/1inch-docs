import{u as m}from"./index.9009f699.js";import{d as v,r as h,I as y,b as s,c as o,J as i,f as p,e,F as f,ak as k,p as C,j as b,t as g,l as x}from"./entry.1ffc1a4c.js";const n=t=>(C("data-v-c33b9d7c"),t=t(),b(),t),I={key:0,class:"copied"},S=n(()=>e("div",{class:"scrim"},null,-1)),w=n(()=>e("div",{class:"content"}," Copied! ",-1)),B=[S,w],T=n(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),j={class:"window"},F=n(()=>e("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),c=h("init"),d=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(d.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",I,B)):p("",!0),T,e("div",j,[(s(!0),o(f,null,k(i(d),r=>(s(),o("span",{key:r,class:"line"},[F,e("span",N,g(r),1)]))),128))]),i(c)!=="copied"?(s(),o("div",V," Click to copy ")):p("",!0)]))}});const J=x(q,[["__scopeId","data-v-c33b9d7c"]]);export{J as default};
