"use strict";(self["webpackChunkfirst_app"]=self["webpackChunkfirst_app"]||[]).push([[947],{947:function(t,o,e){e.r(o),e.d(o,{default:function(){return _}});var d=function(){var t=this,o=t._self._c;return o("div",[o("h2",[t._v("Todo list")]),o("router-link",{attrs:{to:"/"}},[t._v("Home page")]),o("hr"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){var o="_value"in t?t._value:t.value;return o}));t.filter=o.target.multiple?e:e[0]}}},[o("option",{attrs:{value:"all"}},[t._v("All")]),o("option",{attrs:{value:"completed"}},[t._v("Completed")]),o("option",{attrs:{value:"not-completed"}},[t._v("Not completed")])]),o("hr"),t.loading?o("Loader"):t.filteredTodos.length?o("TodoList",{attrs:{todos:t.filteredTodos},on:{"remove-todo":t.removeTodo}}):o("p",[t._v("No todos!")])],1)},i=[],l=e(464),r=e(420),s=function(){var t=this;t._self._c;return t._m(0)},n=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"lds-spinner"},[o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div"),o("div")])}],a={name:"Loader"},v=a,u=e(1),p=(0,u.Z)(v,s,n,!1,null,"9114a9ea",null),c=p.exports,f={name:"Todos",components:{TodoList:l.Z,AddTodo:r.Z,Loader:c},data(){return{todos:[],loading:!0,filter:"all"}},mounted(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((t=>t.json())).then((t=>{setTimeout((()=>{this.todos=t,this.loading=!1}),1e3)}))},computed:{filteredTodos(){return"all"===this.filter?this.todos:"completed"===this.filter?this.todos.filter((t=>t.completed)):"not-completed"===this.filter?this.todos.filter((t=>!t.completed)):void 0}},methods:{removeTodo(t){this.todos=this.todos.filter((o=>o.id!==t))},addTodo(t){this.todos.push(t)}}},h=f,m=(0,u.Z)(h,d,i,!1,null,"0afdea01",null),_=m.exports}}]);
//# sourceMappingURL=947.374490b9.js.map