(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{21:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),s=r.n(a),c=r(13),i=r.n(c),o=(r(21),r(3)),l=r(15),d=(r(22),r(23),s.a.createContext({})),j=function(){var e=Object(a.useContext)(d);function t(e){var t=e.split("-"),r=t[0];return[t[1],t[2].split("T")[0],r].join("-")}return Object(n.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var r=e.login,a=e.name,s=e.picture,c=e.phone,i=e.email,o=e.dob;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(n.jsx)("img",{src:s.medium,alt:"profile image for "+a.first+" "+a.last,className:"img-responsive"})}),Object(n.jsxs)("td",{"data-th":"Name",className:"name-call align-middle",children:[a.first," ",a.last]}),Object(n.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(n.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(n.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(n.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(o.date)})]},r.uuid)})):Object(n.jsx)(n.Fragment,{})})},u=function(){var e=Object(a.useContext)(d);return Object(n.jsx)("div",{className:"datatable mt-5",children:Object(n.jsxs)("table",{id:"table",className:"table table-striped table-hover table condensed",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:e.developerState.headings.map((function(t){var r=t.name,a=t.width;return Object(n.jsxs)("th",{className:"col",style:{width:a},onClick:function(){e.handleSort(r.toLowerCase())},children:[r,Object(n.jsx)("span",{className:"pointer"})]},r)}))})}),Object(n.jsx)(j,{})]})})},h=(r(24),function(){var e=Object(a.useContext)(d);return Object(n.jsx)("div",{className:"searchbox",children:Object(n.jsxs)("form",{className:"form-inline",children:[Object(n.jsx)("label",{htmlFor:"employee-filter",children:"Filter Results:"}),Object(n.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}})]})})});r(25);var b=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(n.jsx)("div",{className:"search-area col-4",children:Object(n.jsx)(h,{})})})},m=r(14),f=r.n(m),O={populateEmployees:function(){return f.a.get("https://randomuser.me/api/?results=50&nat=us")}},x=(r(43),function(){var e=Object(a.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(l.a)(e,2),r=t[0],s=t[1],c=r.headings.map((function(e){return e.name}));console.log(c);return Object(a.useEffect)((function(){O.populateEmployees().then((function(e){console.log(e.data.results),s((function(t){return Object(o.a)(Object(o.a)({},t),{},{users:e.data.results,filteredUsers:e.data.results})}))}))}),[]),Object(n.jsxs)(d.Provider,{value:{developerState:r,handleSearchChange:function(e){var t=e.target.value,n=r.users.filter((function(e){return-1!==(e.name.first.toLowerCase()+" "+e.name.last.toLowerCase()).indexOf(t.toLowerCase())?e:""}));s(Object(o.a)(Object(o.a)({},r),{},{filteredUsers:n}))},handleSort:function(e){var t=r.headings.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()}))[0];t.order=t.order||"ascend","descend"===t.order?t.order="ascend":"ascend"===t.order&&(t.order="descend");var n=r.filteredUsers.sort((function(r,n){return"ascend"===t.order?void 0===r[e]?1:void 0===n[e]?-1:"name"===e?r[e].first.toString().localeCompare(n[e].first):"dob"===e?r[e].age-n[e].age:r[e].toString().localeCompare(n[e]):void 0===r[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(r[e].first):"dob"===e?n[e].age-r[e].age:n[e].toString().localeCompare(r[e])})),a=r.headings.map((function(r){return r.order=r.name===e?t.order:r.order,r}));s(Object(o.a)(Object(o.a)({},r),{},{filteredUsers:n,headings:a}))}},children:[Object(n.jsx)(b,{}),Object(n.jsx)("div",{className:"data-area",children:r.filteredUsers.length>0?Object(n.jsx)(u,{}):Object(n.jsx)("div",{})})]})});r(44);var g=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(x,{})})};r(45);var p=function(e){var t=e.children;return Object(n.jsx)("div",{className:"wrapper",children:t})};r(46);var v=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Employee Directory"}),Object(n.jsx)("p",{children:"Click on a heading to sort or use the search field to narrow results."})]})};r(47);var C=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("span",{children:"\xa92020 Designed using ReactJS"})})};r(48);var N=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(p,{children:[Object(n.jsx)(v,{}),Object(n.jsx)(g,{}),Object(n.jsx)(C,{})]})})},S=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,51)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))};r(49);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),S()}},[[50,1,2]]]);
//# sourceMappingURL=main.65f571a2.chunk.js.map