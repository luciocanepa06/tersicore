(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{7969:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calendario",function(){return i(417)}])},4095:function(e,n,i){"use strict";i.d(n,{Z:function(){return s}});var r=i(5893);function s(){return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsxs)("div",{className:"info",children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Associazione Coro Tersicore"})}),(0,r.jsx)("p",{children:"c/o Gianluca D'Ettorre"}),(0,r.jsx)("p",{children:"Via Brentani 9"}),(0,r.jsx)("p",{children:"6900 Lugano"})]}),(0,r.jsxs)("div",{className:"contacts",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"E-mail: "}),(0,r.jsx)("a",{href:"mailto:info@tersicore.ch",children:"info@tersicore.ch"})]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Telefono: "})," ",(0,r.jsx)("a",{href:"tel:+41919711375",children:"+41 91 971 13 75"})," "]})]}),(0,r.jsxs)("div",{className:"social",children:[(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://www.facebook.com/CORO-TERSICORE-Lugano-381826281882584",target:"_blank",children:"Pagina Facebook"})}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://www.youtube.com/channel/UCrO2CbPTXWypWYg1gYmiXWA",target:"_blank",children:"Canale Youtube"})})]})]})}i(1437)},2002:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var r=i(5893),s=i(1664),t=i.n(s),c=i(5675),a=i.n(c);i(655);var l={src:"/_next/static/media/logo.11cd838c.svg",height:899,width:731,blurWidth:0,blurHeight:0};function o(){return(0,r.jsxs)("div",{className:"navbar",children:[(0,r.jsx)(a(),{src:l,alt:"Logo Tersicore"}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("ul",{children:["  ",(0,r.jsx)(t(),{href:"/",children:" Home "}),"  "]}),(0,r.jsxs)("ul",{children:["  ",(0,r.jsx)(t(),{href:"/chi_siamo",children:" Chi siamo "}),"  "]}),(0,r.jsxs)("ul",{children:["  ",(0,r.jsx)(t(),{href:"/direttore",children:" Direttore "}),"  "]}),(0,r.jsxs)("ul",{children:["  ",(0,r.jsx)(t(),{href:"/calendario",children:" Calendario "}),"  "]})]})]})}},417:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o}});var r=i(5893),s=i(7294);i(9182),i(8396);var t=i(2002),c=i(4095);i(928);let a=(0,i(524).b)({bucketSlug:"tersicore-v2-tersicore",readKey:"XfrOLrgYlSBJNqtbOuf0jqjYQ5WRUZRtQGiEW2c6rpT5R95A7J"});async function l(){let e=new Date().toISOString().slice(0,10);return(await a.objects.find({type:"appuntamenti","metadata.data":{$gte:e}}).props(["id","title","metadata"]).sort("metadata.data")).objects}function o(){let[e,n]=(0,s.useState)([]),[i,a]=(0,s.useState)(!0);return((0,s.useEffect)(()=>{l().then(e=>{n(e)}).finally(()=>{a(!1)})},[]),i)?(0,r.jsx)("p",{children:"Loading ..."}):(0,r.jsxs)("div",{className:"main",children:[(0,r.jsx)(t.Z,{}),(0,r.jsx)("div",{className:"calendario",children:(0,r.jsx)("ul",{children:e.map(e=>{let n=e.metadata,i=n.data.slice(8,10)+" / "+n.data.slice(5,7)+" / "+n.data.slice(0,4);return(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"event",children:[(0,r.jsx)("h2",{children:n.titolo}),(0,r.jsx)("p",{children:n.luogo}),(0,r.jsx)("p",{children:i+" - "+n.ora}),(0,r.jsx)("p",{id:"next-event-description",children:(0,r.jsx)("i",{children:n.descrizione})})]})},n.id)})})}),(0,r.jsx)(c.Z,{})]})}},9182:function(){},8396:function(){},1437:function(){},928:function(){},655:function(){}},function(e){e.O(0,[61,524,888,774,179],function(){return e(e.s=7969)}),_N_E=e.O()}]);