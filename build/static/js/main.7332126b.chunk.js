(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t(1),r=t.n(o),a=t(14),u=t.n(a),i=t(3),s=function(e){var n=e.value,t=e.onChange;return Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.onSubmit,t=e.onNumberChange,o=e.onNameChange,r=e.numberValue,a=e.nameValue;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name:",Object(c.jsx)("input",{value:a,onChange:o})]}),Object(c.jsxs)("div",{children:["number:",Object(c.jsx)("input",{value:r,onChange:t})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.person,t=e.handleDeleteButton;return Object(c.jsxs)("p",{children:[n.name," ",n.number," "," ",Object(c.jsx)("button",{onClick:t,children:"delete"})]})},j=t(4),b=t.n(j),h="/api/persons",f=function(){return b.a.get(h).then((function(e){return e.data}))},m=function(e){return b.a.post(h,e).then((function(e){return e.data}))},O=function(e,n){return b.a.delete("".concat(h,"/").concat(n),e).then((function(e){return e.data}))},v=function(e,n){return b.a.put("".concat(h,"/").concat(n),e).then((function(e){return e.data}))},p=function(e){var n=e.successMessage;return null===n?null:Object(c.jsx)("div",{className:"success",children:n})},x=function(e){var n=e.errorMessage;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(""),u=Object(i.a)(a,2),j=u[0],b=u[1],h=Object(o.useState)(""),g=Object(i.a)(h,2),w=g[0],C=g[1],S=Object(o.useState)(""),k=Object(i.a)(S,2),N=k[0],y=k[1],M=Object(o.useState)(null),D=Object(i.a)(M,2),V=D[0],B=D[1],E=Object(o.useState)(null),T=Object(i.a)(E,2),A=T[0],I=T[1];Object(o.useEffect)((function(){f().then((function(e){r(e)})).catch((function(e){console.log("error",e)}))}),[]);var J=t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{successMessage:A}),Object(c.jsx)(x,{errorMessage:V}),Object(c.jsx)(s,{value:N,onChange:function(e){return y(e.target.value)}}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsx)(l,{onSubmit:function(e){e.preventDefault();var n={name:j,number:w},c=t.find((function(e){return e.name===n.name}));if(c&&window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with a new one?")))return v(n,c.id).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),b(""),C(""),I("Added ".concat(e.name))})).catch((function(e){console.log("error occured")})),void setTimeout((function(){I(null)}),5e3);m(n).then((function(e){r(t.concat(e)),b(""),C(""),I("Added ".concat(e.name)),setTimeout((function(){I(null)}),5e3)})).catch((function(e){console.log("error occured")}))},nameValue:j,numberValue:w,onNameChange:function(e){t.forEach((function(n){n.name===e.target.value&&alert("".concat(n.name," is already added to phonebook"))})),b(e.target.value)},onNumberChange:function(e){return C(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),J.map((function(e){return Object(c.jsx)(d,{person:e,handleDeleteButton:function(){return function(e,n){window.confirm("Delete ".concat(e.name," ?"))&&O(e,n).then(r(t.filter((function(e){return e.id!==n})))).catch((function(n){B("Information of ".concat(e.name," has already been removed from server")),setTimeout((function(){B(null)}),5e3)}))}(e,e.id)}},e.id)}))]})};t(38);u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7332126b.chunk.js.map