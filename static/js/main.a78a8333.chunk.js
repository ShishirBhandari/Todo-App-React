(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,function(e,t,o){e.exports={Todo:"Todo_Todo__B4yGm",IsCompleted:"Todo_IsCompleted__136k3",Header:"Todo_Header__2Qf6j",Content:"Todo_Content__3Oog0",LeftWrapper:"Todo_LeftWrapper__1xopx",Checkbox:"Todo_Checkbox__1mrkc",Checked:"Todo_Checked__tkajf",Action:"Todo_Action__1mdWF",Red:"Todo_Red__3j4Xl",NotEditable:"Todo_NotEditable__3lbPt"}},,function(e,t,o){e.exports={Search:"Search_Search__2SQmI",SearchForm:"Search_SearchForm__J2TKV"}},function(e,t,o){e.exports={Todos:"Todos_Todos__36L4r",AddButton:"Todos_AddButton__1uZIM"}},,,,,,,,function(e,t,o){e.exports=o(21)},,,,,function(e,t,o){},function(e,t,o){},,,function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),d=o(6),r=o.n(d),c=(o(17),o(2)),l=o(7),i=o(8),s=o(10),m=o(9),u=o(11),p=(o(18),o(3)),h=o.n(p),T=function(e){return n.a.createElement("div",{className:h.a.Search},n.a.createElement("span",null,"TODO APP"),n.a.createElement("form",{className:h.a.SearchForm},n.a.createElement("input",{type:"search",placeholder:"Search Todo",onChange:function(t){return e.searchTodos(t,t.target.value)}})))},f=o(1),A=o.n(f),E=function(e){var t=e.todo;return n.a.createElement("li",{className:A.a.Todo+" "+(null==t.completedAt?"":A.a.IsCompleted)},n.a.createElement("div",{className:A.a.Header+" clearfix"},n.a.createElement("div",{className:A.a.LeftWrapper},n.a.createElement("form",{className:A.a.Checkbox},n.a.createElement("span",{className:null==t.completedAt?"":A.a.Checked,onClick:e.todoCompleted},n.a.createElement("i",{className:"material-icons"},"check"))),n.a.createElement("p",null,t.createdAt.toDateString().slice(4),","," ",t.createdAt.toTimeString().slice(0,8))),n.a.createElement("div",{className:A.a.Action},n.a.createElement("span",{onClick:t.editing?function(t){return e.editTodo(t,t.target.parentElement.parentElement.parentElement.nextSibling.children[0].innerHTML,t.target.parentElement.parentElement.parentElement.nextSibling.children[1].innerHTML)}:e.editClicked},n.a.createElement("i",{className:"material-icons"},t.editing?"save":"edit")),n.a.createElement("span",{className:A.a.Red,onClick:e.deleteTodo},n.a.createElement("i",{className:"material-icons"},"delete")))),n.a.createElement("div",{className:A.a.Content},n.a.createElement("span",{className:t.editing?"":A.a.NotEditable,contentEditable:t.editing,onChange:function(e){console.log("editing"),e.target.innerHTML}},t.title),n.a.createElement("p",{className:t.editing?"":A.a.NotEditable,contentEditable:t.editing,onChange:function(e){e.target.innerHTML}},t.description)))},_=o(4),C=o.n(_),g=function(e){var t=e.todos.sort((function(e,t){return e.completedAt-t.completedAt}));return t=t.sort((function(e,t){return t.createdAt-e.createdAt})),n.a.createElement("ul",{className:C.a.Todos},n.a.createElement("li",{className:C.a.AddButton,onClick:function(t){return e.addTodo(t)}},"+"),t.sort((function(e,t){return t.createdAt-e.createdAt})).sort((function(e,t){return!!e.completedAt})).map((function(t,o){return null==t.deletedAt?n.a.createElement(E,{todo:t,todoCompleted:function(t){return e.todoCompleted(t,o)},editClicked:function(t){return e.editClicked(t,o)},editTodo:function(t,a,n){return e.editTodo(t,o,a,n)},deleteTodo:e.deleteTodo.bind(void 0,o),key:t.id}):null})))},v=(o(19),o(20),function(e){function t(){var e,o;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),d=0;d<a;d++)n[d]=arguments[d];return(o=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).todos=[{id:1,title:"Go to Market",description:"TBD: Lorem Ipsum Porem",createdAt:new Date,completedAt:null,deletedAt:null,editing:!1},{id:2,title:"Go to Ravi's house",description:"Lorem Ipsum: Lorem Ipsum Porem Lorem Ipsum Porem Lorem Ipsum Porem Lorem Ipsum Porem",createdAt:new Date,completedAt:new Date,deletedAt:null},{id:3,title:"List items",description:"TBD: Lorem Ipsum  Porem",createdAt:new Date,completedAt:null,deletedAt:null},{id:4,title:"Buy groceries",description:"TBD: Lorem Ipsum  Porem",createdAt:new Date,completedAt:null,deletedAt:null},{id:5,title:"Cook food.",description:"TBD: Lorem Ipsum  Porem",createdAt:new Date,completedAt:null,deletedAt:null}],o.state={todos:Object(c.a)(o.todos)},o.todoCompleted=function(e,t){e.preventDefault();var a=o.state.todos[t];a.completedAt=a.completedAt?null:new Date;var n=o.todos;n[t]=a,o.setState({todos:Object(c.a)(n)})},o.editClicked=function(e,t){var a=o.state.todos[t];a.editing=!a.editing;var n=o.todos;n[t]=a,o.setState({todos:Object(c.a)(n)})},o.editTodo=function(e,t,a,n){var d=o.state.todos[t];d.title=a,d.description=n,d.editing=!1;var r=o.todos;r[t]=d,o.setState({todos:Object(c.a)(r)})},o.deleteTodo=function(e){var t=o.state.todos[e];t.deletedAt=new Date;var a=o.todos;a[e]=t,o.setState({todos:Object(c.a)(a)})},o.addTodo=function(e,t,a){e.preventDefault();var n={id:o.state.todos.length+1,title:"New Todo",description:"description",createdAt:new Date,completedAt:null,deletedAt:null,editing:!0},d=o.todos;d.push(n),o.setState({todos:Object(c.a)(d)})},o.searchTodos=function(e,t){if(console.log(t),""!==t){var a=[];console.log(o.todos),o.todos.forEach((function(e){t=t.toLowerCase(),(e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t))&&a.push(e)})),o.setState({todos:[].concat(a)})}else o.setState({todos:Object(c.a)(o.todos)})},o}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(T,{searchTodos:this.searchTodos})),n.a.createElement("div",{className:"App-content"},n.a.createElement(g,{todos:this.state.todos,todoCompleted:this.todoCompleted,editClicked:this.editClicked,editTodo:this.editTodo,deleteTodo:this.deleteTodo,addTodo:this.addTodo})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.a78a8333.chunk.js.map