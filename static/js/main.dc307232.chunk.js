(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{28:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),s=a(1),c=a(2),i=a(3),m=a(4),u={title:"Testimonials",content:[{name:"Jonathan Burgin",title:"PhD",quote:"I had the pleasure  of Mason reporting to me while he was an intern at WellAware Holdings Inc. Mason showed great eagerness, initiative and flexibility with his assignments. One of Mason's attributes is a teachable spirit, which made it a blessing to work with him and his education. We did not give him 'intern tasks', but treated him as a regular college hire employee with commensurate task difficulties. He accomplished all assignments to him with a positive attitude and willingness to learn that indicates he would be a positive asset to any team lucky enough to hire him."},{name:"Alan Erwin",title:"Software Developer III",quote:"I have had the opportunity to mentor many people throughout my career. Mason was one of the few that truly stood out. During his tenure as my intern, he always showed an appetite for learning and a work ethic that would follow through. An example of this was, during one of the projects he was doing he got stuck. He spent a day working on a few different solutions to figure out what was the best approach. Once he had learned what needed to be done, and the approach to take, he built a demo and brought it to me. This showed me that he had the willingness to learn,  the work ethic to take on the unknown, and the confidence to own his decisions. I hope in the future to get to work with him again."}]},p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid page bg-white center text-dark",id:"testimonials"},r.a.createElement("div",{className:"row my-3 my-sm-auto"},r.a.createElement("h4",{className:"display-4 font-weight-light"},u.title)),u.content.map((function(e){return r.a.createElement("div",{className:"row content mb-3 mb-sm-auto"},r.a.createElement("div",{className:"col"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"m-0 font-weight-normal"},'"',e.quote,'"'),r.a.createElement("footer",{className:"blockquote-footer"},e.name,", ",e.title))))})))}}]),a}(n.Component),d=a(12),h=a(5),b=function(e){return{type:"SET_DRAWER_OPEN",payload:{drawerOpen:e}}},E=function(e){return{type:"SET_PROJECTS_MODAL_VISIBLE",payload:{modalVisible:e}}},f=function(e){return{type:"SET_CONTACT_ME_MODAL_VISIBLE",payload:{modalVisible:e}}};function v(){return fetch("https://api.masonpohler.com:1000/projects",{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return Promise.all([e,e.json()])})).catch((function(e){return Promise.all([{status:503},"server is not available"])}))}var y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleKeyDown",value:function(e){27===e.keyCode&&this.props.setProjectsModalVisible(!1)}},{key:"moreInfoButtonClick",value:function(e){this.props.setSelectedProject(e),this.props.setProjectsModalVisible(!0)}},{key:"determineProjectList",value:function(){var e=this;this.props.fetchProjectsRequest(),function(){return Promise.race([v(),(e=3e3,new Promise((function(t){return setTimeout(t,e)})).then((function(){return Promise.all([{status:408},"time out"])})))]);var e}().then((function(t){var a=Object(d.a)(t,2),n=a[0],r=a[1];200===n.status?e.props.fetchProjectsSuccess(r):e.props.fetchProjectsFailure()}))}},{key:"componentDidMount",value:function(){this.determineProjectList()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid p-0 m-0"},r.a.createElement("div",{className:"row row-cols-1 row-cols-md-2 row-cols-xl-3 p-0 m-0"},this.props.projects.map((function(t){return r.a.createElement("div",{className:"col p-2"},r.a.createElement("div",{className:"project-box rounded",onMouseOver:function(){return e.props.setProjectHovered(t,!0)},onMouseLeave:function(){return e.props.setProjectHovered(t,!1)}},r.a.createElement("div",{className:"p-2 center text-white"},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,t.description),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary mr-3",onClick:function(){return window.open(t.liveURL)}},"Try Demo"),r.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.moreInfoButtonClick(t)},onKeyDown:function(t){return e.handleKeyDown(t)}},"More Info"))),!t.hovered&&r.a.createElement("div",null,r.a.createElement("img",{className:"card-img rounded border border-dark",src:t.previewURL,alt:t.name}))))}))))}}]),a}(n.Component),w=Object(h.b)((function(e){return{projects:e.projects.projects.filter((function(t){switch(e.projects.filterMode){case 1:return t.large;case 2:return!t.large;case 0:default:return!0}}))}}),{fetchProjectsRequest:function(){return{type:"FETCH_PROJECTS_REQUEST"}},fetchProjectsSuccess:function(e){return{type:"FETCH_PROJECTS_SUCCESS",payload:{projects:e}}},fetchProjectsFailure:function(){return{type:"FETCH_PROJECTS_FAILURE"}},setProjectHovered:function(e,t){return{type:"SET_PROJECT_HOVERED",payload:{project:e,hovered:t}}},setSelectedProject:function(e){return{type:"SET_SELECTED_PROJECT",payload:{selectedProject:e}}},setProjectsModalVisible:E})(y),g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.modalVisible&&r.a.createElement("div",{className:"modal d-block text-dark",role:"dialog"},r.a.createElement("div",{className:"modal-shadow",onClick:function(){return e.props.setProjectsModalVisible(!1)}}),r.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h3",null,this.props.project.name),r.a.createElement("button",{type:"button",className:"close",onClick:function(){return e.props.setProjectsModalVisible(!1)}},"\xd7")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",null,this.props.project.detailedDescription.split("\r\n").map((function(e){return r.a.createElement(r.a.Fragment,null,e,r.a.createElement("br",null))})))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h5",null,"Source Code")),this.props.project.sources.map((function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"p-0 btn btn-link text-dark text-nowrap",onClick:function(){return window.open(e.url)}},e.name))}))))))))}}]),a}(n.Component),N=Object(h.b)((function(e){return{modalVisible:e.projects.modalVisible,project:e.projects.selectedProject}}),{setProjectsModalVisible:E})(g),O=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"nav nav-tabs text-nowrap d-inline-flex flex-nowrap mb-1"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:0===this.props.filterMode?"nav-link active":"nav-link",onClick:function(){return e.props.setFilterMode(0)}},"All Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:1===this.props.filterMode?"nav-link active":"nav-link",onClick:function(){return e.props.setFilterMode(1)}},"Large")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:2===this.props.filterMode?"nav-link active":"nav-link",onClick:function(){return e.props.setFilterMode(2)}},"Small")))}}]),a}(n.Component),j=Object(h.b)((function(e){return{filterMode:e.projects.filterMode}}),{setFilterMode:function(e){return{type:"SET_FILTER_MODE",payload:{filterMode:e}}}})(O),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid page bg-white text-dark center",id:"projects"},r.a.createElement("div",{className:"row my-3 my-md-auto"},r.a.createElement("h4",{className:"display-4 font-weight-light"},"My Projects")),r.a.createElement("div",{className:"row mb-3 mb-md-auto w-100 center"},this.props.error&&r.a.createElement("div",{className:"col center content"},r.a.createElement("h2",{className:"font-weight-light text-dark"},"Sorry, my Projects server seems to be down right now. Please check again later.")),!this.props.error&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(w,null),r.a.createElement(N,null))))}}]),a}(n.Component),C=Object(h.b)((function(e){return{error:e.projects.error}}),{})(k),M="Mason Pohler",S="dev@masonpohler.com",x="https://www.linkedin.com/in/mason-pohler-2aa626199/",T="https://github.com/mpohler1",_=a(6);function P(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}var L=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 w-100 footer-content mb-3 mb-sm-auto p-0 m-0"},r.a.createElement("div",{className:"col mb-3 mb-sm-auto px-0 px-sm-3"},r.a.createElement("div",{className:"row w-100 border-bottom border-secondary p-0 m-0"},r.a.createElement("div",{className:"col px-0 px-sm-3"},r.a.createElement("h5",null,"Contact"))),r.a.createElement("div",{className:"row p-0 m-0"},r.a.createElement("div",{className:"col px-0 px-sm-3"},r.a.createElement("p",null,M,r.a.createElement("br",null),S,r.a.createElement("br",null),r.a.createElement("span",{className:"text-white btn-link",onClick:function(){return window.open(x)}},"LinkedIn"),r.a.createElement("br",null),r.a.createElement("span",{className:"text-white btn-link",onClick:function(){return window.open(T)}},"GitHub"))))),r.a.createElement("div",{className:"col mb-3 mb-sm-auto px-0 px-sm-3"},r.a.createElement("div",{className:"row w-100 border-bottom border-secondary p-0 m-0"},r.a.createElement("div",{className:"col px-0 px-sm-3"},r.a.createElement("h5",null,"Site Navigation"))),r.a.createElement("div",{className:"row p-0 m-0"},r.a.createElement("div",{className:"col px-0 px-sm-3"},r.a.createElement("div",{className:"d-flex flex-column flex-nowrap align-items-start"},r.a.createElement(_.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("p",{className:"m-0 btn btn-link text-white-50 text-nowrap p-0"},"Home")),r.a.createElement(_.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("p",{className:"m-0 btn btn-link text-white-50 text-nowrap p-0"},"My Projects")),r.a.createElement(_.Link,{activeClass:"active",to:"testimonials",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("p",{className:"m-0 btn btn-link text-white-50 text-nowrap p-0"},"Testimonials")),r.a.createElement(_.Link,{activeClass:"active",to:"contactMe",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("p",{className:"m-0 btn btn-link text-white-50 text-nowrap p-0"},"Contact Me")))))),r.a.createElement("div",{className:"col px-0 px-sm-3"},r.a.createElement("div",{className:"row w-100 border-bottom border-secondary p-0 m-0"},r.a.createElement("div",{className:"col px-0 px-sm-3"},r.a.createElement("h5",null,"About This Website"))),r.a.createElement("div",{className:"row p-0 m-0"},r.a.createElement("div",{className:"col px-0 px-sm-3"},r.a.createElement("p",null,"This website was developed by Mason Pohler using JavaScript, JSX, and CSS. This website was built using ReactJS, Redux, and Bootstrap."," ",r.a.createElement("span",{className:"text-white btn-link",onClick:function(){return window.open("https://github.com/mpohler1/mpohler1.github.io")}},"View Source")))))),r.a.createElement("div",{className:"row w-100 footer-content mb-3 mb-sm-auto"},r.a.createElement("div",{className:"col px-0 px-sm-3"},r.a.createElement("div",{className:"row w-100 border-top border-secondary p-0 m-0"},r.a.createElement("div",{className:"col text-left text-nowrap pt-2 pl-0 pl-sm-3"},r.a.createElement("p",null,"\xa9 2020 Mason Pohler")),r.a.createElement("div",{className:"col text-right text-nowrap pt-2 float-right pr-0 pr-sm-3"},r.a.createElement("span",{className:"btn-link text-white-50 text-nowrap p-0 float-right",onClick:function(){return window.open("http://www.masonpohler.com/privacy-policy")}},"Privacy Policy"))))))}}]),a}(n.Component),D=a(27),I=a.n(D),R={name:{length:{minimum:1,message:"cannot be empty."}},email:{format:{pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"must be a valid email address"}},body:{length:{minimum:1,message:"cannot be empty."}}};function A(e,t,a){var n={name:e,email:t,body:a};return fetch("https://api.masonpohler.com:9000/mail/send",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return Promise.all([e])})).catch((function(e){return Promise.all([{status:503}])}))}var V=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleSendButtonClick",value:function(){var e=this.validateForm();0===Object.keys(e).length&&e.constructor===Object&&this.sendMail(),this.props.setErrors(e)}},{key:"validateForm",value:function(){return Object.assign({},I()({name:this.props.name,email:this.props.email,body:this.props.body},R))}},{key:"sendMail",value:function(){var e=this;this.props.sendMailRequest(),function(e,t,a){return Promise.race([A(e,t,a),(n=3e3,new Promise((function(e){return setTimeout(e,n)})).then((function(){return Promise.all([{status:408}])})))]);var n}(this.props.name,this.props.email,this.props.body).then((function(t){200===Object(d.a)(t,1)[0].status?(e.props.sendMailSuccess(),e.props.setContactMeModalVisible(!1)):e.props.sendMailFailure()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group w-100 mx-2"},r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"name"},"Name",r.a.createElement("span",{className:"text-danger"}," ",this.props.errors.name)),r.a.createElement("input",{className:"form-control",id:"name",type:"text",placeholder:"Your Name",value:this.props.name,onChange:function(t){return e.props.setName(t.target.value)}})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"email"},"Email",r.a.createElement("span",{className:"text-danger"}," ",this.props.errors.email)),r.a.createElement("input",{className:"form-control",id:"from",type:"text",placeholder:"Your Email Address",value:this.props.email,onChange:function(t){return e.props.setEmail(t.target.value)}})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"body"},"Message",r.a.createElement("span",{className:"text-danger"}," ",this.props.errors.body)),r.a.createElement("textarea",{className:"form-control overflow-auto",id:"body",rows:"7",placeholder:"Message Body",value:this.props.body,onChange:function(t){return e.props.setBody(t.target.value)}})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,1===this.props.mode?r.a.createElement("button",{className:"btn btn-primary ml-1 disabled"},r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," ","Sending..."):r.a.createElement("button",{className:"btn btn-primary ml-1",onClick:function(){return e.handleSendButtonClick()}},"Send"),r.a.createElement("button",{className:"btn btn-secondary ml-3 mr-1",onClick:function(){return e.props.setContactMeModalVisible(!1)}},"Cancel"))))}}]),a}(n.Component),F=Object(h.b)((function(e){return{name:e.contactMe.name,email:e.contactMe.email,body:e.contactMe.body,errors:e.contactMe.errors,mode:e.mail.mode}}),{sendMailRequest:function(){return{type:"SEND_MAIL_REQUEST"}},sendMailSuccess:function(){return{type:"SEND_MAIL_SUCCESS"}},sendMailFailure:function(){return{type:"SEND_MAIL_FAILURE"}},setContactMeModalVisible:f,setEmail:function(e){return{type:"SET_EMAIL",payload:{email:e}}},setName:function(e){return{type:"SET_NAME",payload:{name:e}}},setBody:function(e){return{type:"SET_BODY",payload:{body:e}}},setErrors:function(e){return{type:"SET_ERROES",payload:{errors:e}}}})(V),B=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.modalVisible&&r.a.createElement("div",{className:"modal d-block text-dark",role:"dialog"},r.a.createElement("div",{className:"modal-shadow",onClick:function(){return e.props.setContactMeModalVisible(!1)}}),r.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h3",null,"Contact Me"),r.a.createElement("button",{type:"button",className:"close",onClick:function(){return e.props.setContactMeModalVisible(!1)}},"\xd7")),r.a.createElement("div",{className:"modal-body"},r.a.createElement(F,null))))))}}]),a}(n.Component),H=Object(h.b)((function(e){return{modalVisible:e.contactMe.modalVisible,response:e.mail.response}}),{setContactMeModalVisible:f})(B),J="Please email me directly at "+S,U=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,(2===this.props.mode||3===this.props.mode)&&r.a.createElement("div",{className:"message-alert center"},r.a.createElement("div",{className:2===this.props.mode?"alert alert-bottom alert-success alert-dismissible show m-4":"alert alert-bottom alert-danger alert-dismissible show m-4",role:"alert"},r.a.createElement("h4",{className:"alert-heading"},2===this.props.mode?"Message Sent Successfully!":"Message Failed To Send"),r.a.createElement("button",{className:"close","aria-label":"Close",onClick:function(){return e.props.resetMailMode()}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement("p",null,2===this.props.mode?"":J))))}}]),a}(n.Component),q=Object(h.b)((function(e){return{mode:e.mail.mode}}),{resetMailMode:function(){return{type:"RESET_MAIL_MODE"}}})(U),K=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleKeyDown",value:function(e){27===e.keyCode&&this.props.setContactMeModalVisible(!1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid page bg-blue center text-white-50",id:"contactMe"},r.a.createElement("div",{className:"row my-3 my-sm-auto px-2"},r.a.createElement("h1",{className:"display-4 font-weight-light text-white text-center"},"Like what you see?")),r.a.createElement("div",{className:"row mb-3 mb-sm-auto px-2"},r.a.createElement("button",{className:"btn btn-lg btn-primary",onClick:function(){return e.props.setContactMeModalVisible(!0)},onKeyDown:function(t){return e.handleKeyDown(t)}},"Lets Get In Touch"),r.a.createElement(H,null),r.a.createElement(q,null)),r.a.createElement("div",{className:"row mb-3 mb-sm-auto px-2"},r.a.createElement("p",{className:"text-white-50 text-center"},"Or email me directly at",r.a.createElement("span",{className:"text-white"}," ",S))),r.a.createElement(L,null))}}]),a}(n.Component),W=Object(h.b)((function(e){return{}}),{setContactMeModalVisible:f})(K),Y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).baseBackgroundColor=[10,24,35],e}return Object(c.a)(a,[{key:"handleScroll",value:function(){var e=window.innerHeight-P(5),t=(window.scrollY/e).toFixed(2);t>100?this.props.setBackgroundOpacity(1):this.props.setBackgroundOpacity(t)}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){return e.handleScroll()}),{passive:!0})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("scroll",(function(){return e.handleScroll()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"container-fluid navbar navbar-expand-md navbar-dark sticky-top navbar-height",ref:function(t){return t&&t.setAttribute("style","background-color: rgba("+e.baseBackgroundColor[0]+", "+e.baseBackgroundColor[1]+", "+e.baseBackgroundColor[2]+", "+e.props.backgroundOpacity+")")}},r.a.createElement("button",{className:"navbar-toggler ml-2",type:"button",onClick:function(){return e.props.setDrawerOpen(!0)}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"container-fluid navbar-nav d-flex"},r.a.createElement("li",{className:"nav-item mx-auto btn"},r.a.createElement(_.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("h5",{className:"h5 nav-link font-weight-normal"},"Home"))),r.a.createElement("li",{className:"nav-item mr-auto btn"},r.a.createElement(_.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("h5",{className:"h5 nav-link font-weight-normal"},"My Projects"))),r.a.createElement("li",{className:"nav-item mr-auto btn"},r.a.createElement(_.Link,{activeClass:"active",to:"testimonials",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("h5",{className:"h5 nav-link font-weight-normal"},"Testimonials"))),r.a.createElement("li",{className:"nav-item mr-auto btn"},r.a.createElement(_.Link,{activeClass:"active",to:"contactMe",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("h5",{className:"h5 nav-link font-weight-normal"},"Contact Me"))))))}}]),a}(n.Component),G=Object(h.b)((function(e){return{backgroundOpacity:e.navbar.backgroundOpacity}}),{setBackgroundOpacity:function(e){return{type:"SET_BACKGROUND_OPACITY",payload:{backgroundOpacity:e}}},setDrawerOpen:b})(Y),z=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid page center my-auto",id:"home",ref:function(t){return t&&t.setAttribute("style","opacity: "+e.props.opacity)}},r.a.createElement("div",{className:"row mt-auto mb-3 mb-sm-5"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"display-4 text-white text-left"},"Hello, I'm Mason Pohler. I like to build software."))),r.a.createElement("div",{className:"row mt-3 mt-sm-5 mb-auto"},r.a.createElement("div",{className:"col-12"},r.a.createElement(_.Link,{activeClass:"",to:"projects",spy:!0,smooth:!0,offset:-P(5)},r.a.createElement("button",{className:this.props.opacity<=0?"btn-outline-light btn-lg":"btn btn-outline-light btn-lg",disabled:this.props.opacity<=0},"See My Work")))))}}]),a}(n.Component),Q=Object(h.b)((function(e){return{opacity:1-(2*e.navbar.backgroundOpacity).toFixed(2)}}))(z),Z=(a(45),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.drawerOpen&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-shadow",onClick:function(){return e.props.setDrawerOpen(!1)}}),r.a.createElement("div",{className:"drawer bg-blue-dark navbar navbar-dark border-right border-secondary px-0 m-0 fixed-top"},r.a.createElement("div",{className:"navbar-nav drawer-list d-flex flex-column flex-nowrap h-100 align-items-start"},r.a.createElement(_.Link,{className:"mx-4 my-5 nav-item btn",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-P(5),onClick:function(){return e.props.setDrawerOpen(!1)}},r.a.createElement("h5",{className:"h5 nav-link font-weight-normal"},"Home")),r.a.createElement(_.Link,{className:"mx-4 mb-5 nav-item btn",activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-P(5),onClick:function(){return e.props.setDrawerOpen(!1)}},r.a.createElement("h5",{className:"h5 nav-link font-weight-normal"},"My Projects")),r.a.createElement(_.Link,{className:"mx-4 mb-5 nav-item btn",activeClass:"active",to:"testimonials",spy:!0,smooth:!0,offset:-P(5),onClick:function(){return e.props.setDrawerOpen(!1)}},r.a.createElement("h5",{className:"h5 nav-link font-weight-normal"},"Testimonials")),r.a.createElement(_.Link,{className:"mx-4 mb-5 nav-item btn",activeClass:"active",to:"contactMe",spy:!0,smooth:!0,offset:-P(5),onClick:function(){return e.props.setDrawerOpen(!1)}},r.a.createElement("h5",{className:"h5 nav-link font-weight-normal"},"Contact Me"))))))}}]),a}(n.Component)),X=Object(h.b)((function(e){return{drawerOpen:e.navbar.drawerOpen}}),{setDrawerOpen:b})(Z);var $=function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(G,null),r.a.createElement(Q,null),r.a.createElement(C,null),r.a.createElement(p,null),r.a.createElement(W,null),r.a.createElement(X,null))},ee=(a(46),a(8));var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{backgroundOpacity:0,drawerOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BACKGROUND_OPACITY":return Object.assign({},e,{backgroundOpacity:t.payload.backgroundOpacity});case"SET_DRAWER_OPEN":return Object.assign({},e,{drawerOpen:t.payload.drawerOpen});default:return e}};var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{projects:[],selectedProject:{},modalVisible:!1,filterMode:0,error:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROJECTS_FAILURE":return Object.assign({},e,{error:!0});case"FETCH_PROJECTS_SUCCESS":return Object.assign({},e,{projects:t.payload.projects.map((function(e){return e.hovered=!1,e})),error:!1});case"SET_PROJECT_HOVERED":return Object.assign({},e,{projects:e.projects.slice().map((function(e){return e.id===t.payload.project.id&&(e.hovered=t.payload.hovered),e}))});case"SET_SELECTED_PROJECT":return Object.assign({},e,{selectedProject:t.payload.selectedProject});case"SET_PROJECTS_MODAL_VISIBLE":return Object.assign({},e,{modalVisible:t.payload.modalVisible});case"SET_FILTER_MODE":return Object.assign({},e,{filterMode:t.payload.filterMode});default:return e}};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{response:"",mode:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MAIL_REQUEST":return Object.assign({},e,{mode:1});case"SEND_MAIL_SUCCESS":return Object.assign({},e,{mode:2});case"SEND_MAIL_FAILURE":return Object.assign({},e,{mode:3});case"RESET_MAIL_MODE":return Object.assign({},e,{mode:0});default:return e}};var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{modalVisible:!1,name:"",email:"",body:"",errors:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACT_ME_MODAL_VISIBLE":return Object.assign({},e,{modalVisible:t.payload.modalVisible});case"SET_NAME":return Object.assign({},e,{name:t.payload.name});case"SET_EMAIL":return Object.assign({},e,{email:t.payload.email});case"SET_BODY":return Object.assign({},e,{body:t.payload.body});case"SET_ERROES":return Object.assign({},e,{errors:t.payload.errors});default:return e}},oe=Object(ee.b)({navbar:te,projects:ae,mail:ne,contactMe:re}),le=Object(ee.c)(oe,{backgroundIsVisible:!1});l.a.render(r.a.createElement(h.a,{store:le},r.a.createElement($,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.dc307232.chunk.js.map