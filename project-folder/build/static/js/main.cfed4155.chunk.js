(this["webpackJsonpproject-folder"]=this["webpackJsonpproject-folder"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c(1),r=c.n(n),a=c(11),s=c.n(a),i=(c(17),c(2)),j=c(8),l=c(3),u=(c(18),c(6)),d=c.n(u),b=function(e){var t=e.addProj,c=(e.curProject,Object(n.useState)({id:"",project:"",completable:!0})),r=Object(l.a)(c,2),a=r[0],s=r[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.project.trim()&&(t(Object(i.a)(Object(i.a)({},a),{},{id:d.a.v4()})),s(Object(i.a)(Object(i.a)({},a),{},{project:""})))},children:[Object(o.jsx)("input",{name:"task",type:"text",value:a.project,onChange:function(e){s(Object(i.a)(Object(i.a)({},a),{},{project:e.target.value}))},className:"projectInput form",placeholder:"Enter task here"}),Object(o.jsx)("button",{type:"submit",className:"taskButton projectAdd",children:"+"})]})})},O=function(e){var t,c=e.curProject,n=(e.setProject,e.nowFolder),r=e.removeProject;return t=!0===c.completable?Object(o.jsx)("button",{className:"ex",onClick:function(){r(c)},type:"button",children:" X "}):null,Object(o.jsxs)("div",{className:"listItem projectItem",children:[Object(o.jsxs)("div",{className:"list",onClick:function(e){n(e.target.innerText)},children:[" ",c.project," "]}),t]})},m=function(e){var t=e.addProj,c=e.curProject,n=e.nowFolder,r=e.removeProject;return Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsx)("h1",{className:"header",children:" Projects "}),Object(o.jsx)(b,{addProj:t,curProject:c}),c.map((function(e){return Object(o.jsx)(O,{curProject:e,nowFolder:n,removeProject:r},e.id)}))]})},f=function(e){var t=e.addTodo,c=e.curProject,r=Object(n.useState)({id:"",task:"",project:"inbox",completed:!1}),a=Object(l.a)(r,2),s=a[0],j=a[1],u=c.map((function(e){return Object(o.jsx)("option",{children:e.project},e.id)}));return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.task.trim()&&(t(Object(i.a)(Object(i.a)({},s),{},{id:d.a.v4()})),j(Object(i.a)(Object(i.a)({},s),{},{task:""})))},children:[Object(o.jsx)("input",{name:"task",type:"text",value:s.task,onChange:function(e){j(Object(i.a)(Object(i.a)({},s),{},{task:e.target.value}))},className:"taskInput form",placeholder:"Enter task here"}),Object(o.jsx)("select",{onChange:function(e){j(Object(i.a)(Object(i.a)({},s),{},{project:e.target.value}))},onF:!0,children:u}),Object(o.jsx)("button",{type:"submit",className:"taskButton taskAdd",children:"+"})]})})},p=function(e){var t=e.curTask,c=e.toggleComplete,n=e.removeTodo;return Object(o.jsxs)("div",{className:"listItem todoItem",children:[Object(o.jsx)("button",{className:"ex green",onClick:function(){return c(t.id)},type:"checkbox",children:"\u2713"}),Object(o.jsxs)("div",{className:"list",style:{textDecoration:t.completed?"line-through":null},children:[" ",t.task]}),Object(o.jsx)("button",{className:"ex ",onClick:function(){return n(t.id)},type:"button",children:"X"})]})},h=function(e){var t=e.addTodo,c=e.curTask,n=e.curProject,r=e.curFolder,a=e.toggleComplete,s=e.removeTodo,i=c.filter((function(e){return e&&e.project&&e.project.includes(r)})).map((function(e){return Object(o.jsx)(p,{curTask:e,toggleComplete:a,removeTodo:s},e.id)}));return Object(o.jsxs)("div",{className:"tasks",children:[Object(o.jsxs)("h1",{className:"header taskHeader",children:[" ",r," "]}),Object(o.jsx)(f,{addTodo:t,curProject:n}),i]})},x="todoing-tasks",v="todoing-projects",g=["inbox"],k=[{id:"b1",project:"inbox",completable:!1}],N=function(){var e=Object(n.useState)(g),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(k),s=Object(l.a)(a,2),u=s[0],d=s[1],b=Object(n.useState)([]),O=Object(l.a)(b,2),f=O[0],p=O[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(x));e&&p(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem(x,JSON.stringify(f))}),[f]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(v));e&&d(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem(v,JSON.stringify(u))}),[u]);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"bigtext",children:Object(o.jsx)("div",{children:"ToDoing by Michael Riccio"})}),Object(o.jsxs)("div",{className:"center",children:[Object(o.jsx)(m,{addProj:function(e){d([].concat(Object(j.a)(u),[e]))},curProject:u,setProject:d,nowFolder:function(e){r(e)},removeProject:function(e){window.confirm("Deleting a project deletes all tasks sorted beneath it. Are you sure you want to delete?")&&(d(u.filter((function(t){return t.id!==e.id}))),p(f.filter((function(t){return t.project!==e.project}))))}}),Object(o.jsx)(h,{addTodo:function(e){p([e].concat(Object(j.a)(f)))},curTask:f,curProject:u,curFolder:c,toggleComplete:function(e){p(f.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){p(f.filter((function(t){return t.id!==e})))}})]}),Object(o.jsx)("footer",{className:"bigtext",children:Object(o.jsx)("div",{children:"\xa9 Michael Riccio 2020"})})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),o(e),n(e),r(e),a(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),P()}},[[21,1,2]]]);
//# sourceMappingURL=main.cfed4155.chunk.js.map