webpackJsonp([1],{"+KFS":function(t,s){},BD7i:function(t,s){},MCmc:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={name:"Navigation",data:()=>({})},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"btn-group btn-group-toggle",attrs:{"data-toggle":"buttons"}},[s("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/"}},[this._v("About")]),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/Input"}},[this._v("New Task")]),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/ToDo"}},[this._v("Do Task")]),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/Done"}},[this._v("Finished Tasks")])],1)])},staticRenderFns:[]};var r=e("VU/8")(n,i,!1,function(t){e("MCmc")},"data-v-322f9dda",null).exports,o={name:"Done",data:()=>({doneTasks:[],doneTask:{id:"",title:"",details:"",date:""}}),props:["ApiUrl"],mounted(){this.loadDoneTasks()},methods:{loadDoneTasks(){fetch(this.ApiUrl+"/done").then(t=>t.json()).then(t=>this.doneTasks=t)}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex justify-content-center jumbotron"},[e("div",{staticClass:"card text-white bg-primary mb-3",staticStyle:{"max-width":"20rem"}},[e("div",{staticClass:"card-body text-center"},[e("h4",{staticClass:"card-title text-center faded"},[t._v("Here's what you've done!")]),t._v(" "),t.doneTasks.dones[0]?e("div",[e("router-link",{staticClass:"btn btn-primary btn-md another",attrs:{to:"/ToDo"}},[t._v("Finish Another!")]),e("br"),t._v(" "),t._l(t.doneTasks.dones,function(s){return e("ul",{key:s.id,staticClass:"text-left"},[s.date?e("div",[e("li",[t._v(t._s(s.title)+" "),e("div",{staticClass:"faded"},[t._v(t._s(s.date))])])]):e("div",[e("li",[t._v(t._s(s.title))])])])})],2):e("div",[e("p",[t._v("Keep going! We've got your back!")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:"/ToDo"}},[t._v("Finish A Task!")])],1)])])])},staticRenderFns:[]};var d=e("VU/8")(o,l,!1,function(t){e("iiA4")},"data-v-42ed5cc0",null).exports,c={name:"Landing",data:()=>({})},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"jumbotron"},[e("h1",{staticClass:"display-3"},[t._v("Welcome to BlackBox")]),t._v(" "),e("p",{staticClass:"lead d-flex justify-content-center"},[t._v("BlackBox is the simplest to-do app.")]),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),t._m(0),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("p",{staticClass:"lead d-flex justify-content-center"},[e("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/Input"}},[t._v("Start Your List")])],1)]),t._v(" "),e("h2",{staticClass:"d-flex justify-content-center"},[t._v("What is BlackBox?")]),t._v(" "),e("p",{staticClass:"d-flex justify-content-center"},[t._v("Black-box theory is an observable change in something without information on how it was changed.")]),t._v(" "),e("p",{staticClass:"d-flex justify-content-center"},[t._v("In order to simplify your life, we have adopted this mentality.")]),t._v(" "),e("p",{staticClass:"d-flex justify-content-center"},[t._v("Put in as many tasks as you want.")]),t._v(" "),e("p",{staticClass:"d-flex justify-content-center"},[t._v("See only one task at a time.")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"d-flex justify-content-center"},[s("li",[this._v("Plug in your tasks.")]),this._v(" "),s("li",[this._v("See ONLY ONE.")]),this._v(" "),s("li",[this._v("Get stuff done.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"d-flex justify-content-center"},[s("em",[this._v("Less stress.  Get more things done!")])])}]};var v=e("VU/8")(c,u,!1,function(t){e("OdZZ")},"data-v-35ce2dac",null).exports,m={name:"Input",data:()=>({taskTitle:"",taskDetails:"",task:{id:"",title:"",details:"",date:""}}),props:["ApiUrl"],methods:{addTask(){fetch(this.ApiUrl+"/todo",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.taskTitle,details:this.taskDetails})}),this.taskTitle="",this.taskDetails="",this.reRoute()},reRoute(){this.$router.push("TaskAdded")}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex justify-content-center jumbotron"},[e("div",{staticClass:"card text-white bg-primary mb-3",staticStyle:{"max-width":"20rem"}},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title text-center faded"},[t._v("Add A Task")]),t._v(" "),e("div",{staticClass:"card-text text-center"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.addTask(s)}}},[e("label",{attrs:{for:"task"}},[t._v("Task: ")]),t._v(" "),e("br"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.taskTitle,expression:"taskTitle"}],attrs:{type:"text",name:"task"},domProps:{value:t.taskTitle},on:{input:function(s){s.target.composing||(t.taskTitle=s.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("label",{attrs:{for:"details"}},[t._v("Details: ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskDetails,expression:"taskDetails"}],attrs:{name:"details",rows:"4",cols:"30"},domProps:{value:t.taskDetails},on:{input:function(s){s.target.composing||(t.taskDetails=s.target.value)}}}),t._v(" "),e("input",{staticClass:"btn btn-primary btn-md",attrs:{type:"submit",name:"add",value:"Add"}})])])])])])},staticRenderFns:[]};var p=e("VU/8")(m,h,!1,function(t){e("aqeX")},"data-v-0bc2655a",null).exports,f={name:"Edit",props:["tasks","ApiUrl"],data:()=>({taskTitle:"",taskDetails:"",task:{id:"",title:"",details:"",date:""}}),methods:{hideShow:()=>"hidden"==event.target.nextElementSibling.className?event.target.nextElementSibling.className="":""==event.target.nextElementSibling.className?event.target.nextElementSibling.className="hidden":void 0,updateTask(){const t=event.target[0].value;fetch(this.ApiUrl+"/todo/"+t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:event.target[1].value,details:event.target[2].value})}),this.reRoute()},reRoute(){this.$router.push("TaskUpdated")}}},j={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex justify-content-center jumbotron"},[e("div",{staticClass:"card text-white bg-primary mb-3",staticStyle:{"max-width":"20rem"}},t._l(t.tasks.todos,function(s){return e("ul",{key:s.id},[e("li",[t._v("\n        "+t._s(s.title)+" \n        "),e("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(s){t.hideShow(s)}}},[t._v("Edit")]),t._v(" "),e("section",{staticClass:"hidden"},[e("form",{on:{submit:function(e){e.preventDefault(),t.updateTask(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.id,expression:"task.id"}],staticClass:"hiddenId",attrs:{type:"text",name:"taskId",value:""},domProps:{value:s.id},on:{input:function(e){e.target.composing||t.$set(s,"id",e.target.value)}}}),t._v(" "),e("label",{attrs:{for:"task"}},[t._v("Update Task:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.title,expression:"task.title"}],attrs:{type:"text",name:"task",value:""},domProps:{value:s.title},on:{input:function(e){e.target.composing||t.$set(s,"title",e.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("label",{attrs:{for:"details"}},[t._v("Details: ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:s.details,expression:"task.details"}],attrs:{name:"details",rows:"4",cols:"19",textContent:"hello"},domProps:{value:s.details},on:{input:function(e){e.target.composing||t.$set(s,"details",e.target.value)}}}),t._v(" "),e("input",{staticClass:"btn btn-primary btn-md",attrs:{type:"submit",name:"add",value:"Update"}})])])])])})),t._v(" "),e("section")])},staticRenderFns:[]};var k=e("VU/8")(f,j,!1,function(t){e("BD7i")},"data-v-51ca2e81",null).exports,b=e("PJh5"),_={name:"ToDo",components:{Edit:k},data:()=>({descriptionToggle:!0,showAllTasks:!0,tasks:[],task:{id:"",title:"",details:"",date:""}}),props:["ApiUrl"],mounted(){this.loadTasks()},methods:{loadTasks(){fetch(this.ApiUrl+"/todo").then(t=>t.json()).then(t=>{this.tasks=t})},taskToDone(){fetch(this.ApiUrl+"/done",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.tasks.todos[0].title,details:this.tasks.todos[0].details,date:b().format("dddd, MMMM Do")})}),this.deleteTask()},deleteTask(){let t=this.tasks.todos[0].id;fetch(this.ApiUrl+`/todo/${t}`,{method:"delete",headers:{"Content-Type":"application/json"}}),this.reRoute()},reRoute(){this.$router.push("TaskFinished")}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex justify-content-center jumbotron"},[e("div",{staticClass:"card text-white bg-primary mb-3",staticStyle:{"max-width":"20rem"}},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title text-center faded"},[t._v("What Next?")]),t._v(" "),t.tasks.todos[0]?e("div",{staticClass:"text-center"},[e("p",{staticClass:"faded"},[t._v("(click the task to show details)")]),t._v(" "),e("h1",{staticClass:"card-title",on:{click:function(s){t.descriptionToggle=!t.descriptionToggle}}},[e("i",[t._v(t._s(t.tasks.todos[0].title))])]),t._v(" "),e("section",{class:{hidden:t.descriptionToggle}},[e("p",[t._v(t._s(t.tasks.todos[0].details))])]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-md",on:{click:function(s){return s.preventDefault(),t.taskToDone(s)}}},[t._v("Task Completed?")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary btn-sm faded",attrs:{to:"/Input"}},[t._v("Create Another Task")]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-sm faded",on:{click:function(s){t.showAllTasks=!t.showAllTasks}}},[t._v("Edit Tasks")]),t._v(" "),e("section",{class:{hidden:t.showAllTasks}},[e("Edit",{attrs:{tasks:t.tasks,ApiUrl:t.ApiUrl}})],1)],1):e("div",{staticClass:"text-center"},[e("p",[t._v("(You have no tasks to do right now!)")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:"/Input"}},[t._v("Make A New Task")])],1)])])])},staticRenderFns:[]};var g=e("VU/8")(_,y,!1,function(t){e("fclC")},"data-v-2a05b9a0",null).exports,x={data:()=>({})},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-center jumbotron"},[s("div",{staticClass:" d-flex card text-white bg-primary mb-3 justify-content-center",staticStyle:{"max-width":"20rem"}},[s("div",{staticClass:"d-flex flex-column card-body justify-content-center"},[this._m(0),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:"/Input"}},[this._v("Create Another Task")]),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:"/ToDo"}},[this._v("Finish A Task")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"text-center d-flex card-title justify-content-center"},[s("i",[this._v("Your Task Has Been Added!")])])}]};var T=e("VU/8")(x,C,!1,function(t){e("Olj7")},"data-v-53198b54",null).exports,w={data:()=>({})},A={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-center jumbotron"},[s("div",{staticClass:" d-flex card text-white bg-primary mb-3 justify-content-center",staticStyle:{"max-width":"20rem"}},[s("div",{staticClass:"d-flex flex-column card-body justify-content-center"},[this._m(0),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:"/Input"}},[this._v("Create Another Task")]),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:"/ToDo"}},[this._v("Finish A Task")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"text-center d-flex card-title justify-content-center"},[s("i",[this._v("Your Task Has Been Updated!")])])}]};var D=e("VU/8")(w,A,!1,function(t){e("eyXg")},"data-v-509903af",null).exports,U={data:()=>({})},E={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex justify-content-center jumbotron"},[s("div",{staticClass:" d-flex card text-white bg-primary mb-3 justify-content-center",staticStyle:{"max-width":"20rem"}},[s("div",{staticClass:"d-flex flex-column card-body justify-content-center"},[this._m(0),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:"/Input"}},[this._v("Create Another Task")]),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:"/ToDo"}},[this._v("Finish Another Task")]),this._v(" "),s("router-link",{staticClass:"btn btn-primary btn-md",attrs:{to:"/Done"}},[this._v("See Done Tasks")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"text-center d-flex card-title justify-content-center"},[s("i",[this._v("Your Task Has Been Completed!")])])}]};var z=e("VU/8")(U,E,!1,function(t){e("+KFS")},"data-v-2a2240f0",null).exports,F={name:"App",components:{Navigation:r,Landing:v,Input:p,Done:d,ToDo:g,Edit:k,TaskAdded:T,TaskUpdated:D,TaskFinished:z},data:()=>({ApiUrl:"https://powerful-harbor-21413.herokuapp.com"})},N={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{},[s("link",{attrs:{rel:"stylesheet",href:"https://bootswatch.com/4/lux/bootstrap.min.css"}}),this._v(" "),s("Navigation"),this._v(" "),s("transition",{attrs:{name:"fade"}},[s("router-view",{attrs:{ApiUrl:this.ApiUrl}})],1)],1)},staticRenderFns:[]};var S=e("VU/8")(F,N,!1,function(t){e("z4K3")},null,null).exports,R=e("/ocq");a.a.use(R.a);var O=new R.a({routes:[{path:"/",name:"Landing",component:v},{path:"/Input",name:"Input",component:p,props:!0},{path:"/Done",name:"Done",component:d,props:!0},{path:"/ToDo",name:"ToDo",component:g,props:!0},{path:"/TaskAdded",name:"TaskAdded",component:T,props:!0},{path:"/TaskUpdated",name:"TaskUpdated",component:D,props:!0},{path:"/TaskFinished",name:"TaskFinished",component:z,props:!0}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:O,components:{App:S},template:"<App/>"})},OdZZ:function(t,s){},Olj7:function(t,s){},aqeX:function(t,s){},eyXg:function(t,s){},fclC:function(t,s){},iiA4:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(i(t))}function i(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"},z4K3:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.16f4eb4c28137cb6b3de.js.map