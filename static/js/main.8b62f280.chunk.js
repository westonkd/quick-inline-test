(this["webpackJsonpcanavas-editor"]=this["webpackJsonpcanavas-editor"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),a=n.n(i),s=(n(11),n(2)),l=(n(12),n(5)),o=n.n(l),u=n(0),d=function(e){var t=e.rows,n=e.columns,r=e.index,i=Object(c.useState)(1),a=Object(s.a)(i,2),l=a[0],o=a[1],d=Object(c.useState)(1),j=Object(s.a)(d,2),b=j[0],x=j[1];return Object(u.jsx)("div",{className:"cell-wrapper",style:{gridRow:"auto / span ".concat(l),gridColumn:"auto / span ".concat(b)},children:Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(u.jsxs)("div",{style:{display:"flex",height:"100%"},children:[Object(u.jsx)("div",{className:"cell","data-container-id":r,"data-row":Math.floor(r/t)+1,"data-col":r%n+1,style:{flexGrow:1},children:"Content here"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){return x((function(e){return e+1}))},children:"+"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){x((function(e){return e>0?e-1:0}))},children:"-"})})]})]}),Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("button",{onClick:function(){return o((function(e){return e+1}))},children:"+"}),Object(u.jsx)("button",{children:"-"})]})]})})};var j=function(){var e=Object(c.useState)(1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(1),a=Object(s.a)(i,2),l=a[0],j=a[1],b=Object(c.useState)(1),x=Object(s.a)(b,2),O=x[0],h=x[1];return Object(c.useEffect)((function(){o.a.editors.forEach((function(e){return e.remove()})),o.a.init({inline:!0,selector:".cell",plugins:"noneditable"})}),[O]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{style:{borderBottom:"solid 2px gray",padding:"10px",marginBottom:"10px"},children:[Object(u.jsxs)("label",{children:["Rows",Object(u.jsx)("input",{type:"number",min:"1",value:n,onChange:function(e){return r(e.currentTarget.value)}})]}),Object(u.jsx)("div",{style:{marginLeft:"10px",display:"inline"},children:Object(u.jsxs)("label",{children:["Columns",Object(u.jsx)("input",{type:"number",min:"1",value:l,onChange:function(e){return j(e.currentTarget.value)}})]})})]}),Object(u.jsxs)("div",{className:"App",style:{gridTemplateRows:"repeat(".concat(n,", auto)"),gridTemplateColumns:"repeat(".concat(l,", auto)")},children:[Array.from(Array(O).keys()).map((function(e){return Object(u.jsx)(d,{rows:n,columns:l,index:e},"CEL-".concat(e))})),Object(u.jsx)("div",{className:"addCell",onClick:function(){return h((function(e){return e+1}))},children:"+ Add Cell"})]}),Object(u.jsx)("div",{children:"End Content"})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.8b62f280.chunk.js.map