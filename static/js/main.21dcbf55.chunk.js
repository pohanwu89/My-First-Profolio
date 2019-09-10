(window["webpackJsonpprofolio-v1"]=window["webpackJsonpprofolio-v1"]||[]).push([[0],{100:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(14),i=(a(49),a(50),a(3)),m=a(5),s=a(6),u=a(8),p=a(7),h=a(9),b=(a(20),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",marginTop:"auto"}},r.a.createElement(i.Grid,{className:"landing-grid"},r.a.createElement(i.Cell,{col:12},r.a.createElement("img",{src:"https://icon-library.net//images/male-avatar-icon/male-avatar-icon-29.jpg",className:"avatar-img",alt:"avatar"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h3",null,"Po Han Wu"),r.a.createElement("h5",null,"Full Stack Web Developer "),r.a.createElement("hr",null),r.a.createElement("p",null,"HTML | CSS | Javascript | React | NodeJS | Express | PostgreSQL | Bootsrap"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"http://google.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"http://google.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})),r.a.createElement("a",{href:"http://google.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"})))))))}}]),t}(n.Component)),d=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Me"))}}]),t}(n.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Resume Page"))}}]),t}(n.Component),E=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(i.Grid,{className:"contact-grid"},r.a.createElement(i.Cell,{col:6},r.a.createElement("h2",null,"Po Han Wu"),r.a.createElement("img",{src:"https://icon-library.net//images/male-avatar-icon/male-avatar-icon-29.jpg",alt:"avatar",style:{height:"250px"}}),r.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"Self-taught JavaScript developer, passionate about the web development and looking to join a team of like-minded people in an environment that promotes teamwork and fosters personal and professional growth.")),r.a.createElement(i.Cell,{col:6,className:"contact-list"},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("hr",null),r.a.createElement(i.List,null,r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{icon:"phone"},"+81 07033085678")),r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{icon:"mail"},"hankwu0930@gmail.com")),r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{icon:"message"},"hank7xx9(skype)"))))))}}]),t}(n.Component),f=(a(100),function(e){return console.log(e),r.a.createElement(i.Card,{shadow:0,style:{width:"320px",height:"320px",margin:"auto"}},r.a.createElement(i.CardTitle,{expand:!0,style:{color:"#fff",background:"url(".concat(e.url,")center/cover")}},e.project.title),r.a.createElement(i.CardText,null,e.project.text),r.a.createElement(i.CardActions,{border:!0},r.a.createElement("a",{href:e.github,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"}),"View in GitHub")))}),v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[{title:"Robot Friends",text:"My first React app that lets users filter robots by name.",img:"https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",githubUrl:"https://github.com/pohanwu89/robotfriends"},{title:"Smart Brain",text:"A  full stack web application that detects faces from an input image URL.",img:"https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",githubUrl:"https://github.com/pohanwu89/smart-brain-react"},{title:"Burger Builder",text:"A web application designed using React. It allows users to sign-up and order burgers.",img:"https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",githubUrl:"https://github.com/pohanwu89/Burger-Builder"}]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-card-list"},this.state.projects.map(function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement(f,{project:e,url:e.img,github:e.githubUrl}))}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[{title:"Smart Brain Serverside",text:"Used Express to write RESTful api for Smart Brain project",img:"https://miro.medium.com/max/1200/1*alZcSIb0lcN7gQIx2tJ_tg.png",githubUrl:"https://github.com/pohanwu89/smart-brain-api"}]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-card-list"},this.state.projects.map(function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement(f,{project:e,url:e.img,github:e.githubUrl}))}))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={activeTab:0},a.toggleCategories=function(){return 0===a.state.activeTab?r.a.createElement(v,null):1===a.state.activeTab?r.a.createElement(j,null):void 0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category-abs"},r.a.createElement(i.Tabs,{className:"sticky",activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(i.Tab,null,"React/Redux"),r.a.createElement(i.Tab,null,"ExpressJS")),r.a.createElement("div",null,r.a.createElement("div",{className:"content"}," ",this.toggleCategories())))}}]),t}(n.Component),O=a(16);var w=function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(i.Layout,null,r.a.createElement(i.Header,{className:"header-color",title:"Profolio",scroll:!0},r.a.createElement(i.Navigation,null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/projects"},"Projects"),r.a.createElement(o.b,{to:"/contact"},"Contact"))),r.a.createElement(i.Drawer,{title:"Profolio"},r.a.createElement(i.Navigation,null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/projects"},"Projects"),r.a.createElement(o.b,{to:"/contact"},"Contact"))),r.a.createElement(i.Content,null,r.a.createElement("div",{className:"page-content"},r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/aboutme",component:d}),r.a.createElement(O.a,{path:"/contact",component:E}),r.a.createElement(O.a,{path:"/projects",component:y}),r.a.createElement(O.a,{path:"/resume",component:g}),r.a.createElement(O.a,{path:"/",exact:!0,component:b}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,t,a){},44:function(e,t,a){e.exports=a(103)}},[[44,1,2]]]);
//# sourceMappingURL=main.21dcbf55.chunk.js.map