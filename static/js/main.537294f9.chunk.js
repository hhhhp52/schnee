(this["webpackJsonpgithub-page"]=this["webpackJsonpgithub-page"]||[]).push([[0],{46:function(e,t,s){},83:function(e,t,s){},85:function(e){e.exports=JSON.parse('{"title":{"skill":"Skill","experience":"Experience","project":"Project","introduction":"Introduction"},"skill":[{"info":"Programming","contents":["Python","Golang","HTML/CSS","JavaScripts"]},{"info":"Database","contents":["PostgreSQL","Redis","MySQL"]},{"info":"Other","contents":["Kafka","Debezium","AWS","GRPC"]},{"info":"Personality","contents":["Collaboration","Mediatory","Empathy","Flexibility","Creativity"]}],"experience":[{"company":"H2 Inc.","title":"Senior Backend Engineer","timeline":"Feb. 2023 \u2013 Mar. 2024","history":["Spearheaded the refactoring of long-time APIs, resulting in a <strong>20% reduction</strong> in request time.","<strong>Reduced</strong> the time spent on subsequent adjustments by <strong>at least half</strong>, when I participated in early product design, providing feasibility planning and suggestions.","Offering ongoing support to web team members, optimizing <strong>at least 30% development efficiency.</strong>","<strong>Reduced</strong> the junior developers\' time range by <strong>at least 1 to 2 weeks</strong>, when I led long-term (at least one month) product adjustments, development, and demand confirmation for back-end services.","Supported the timely market release of Egyptian and Korean products, and <strong>completed</strong> the backend services <strong>1 month in advance</strong>, providing the product team with more time for validation."]},{"company":"H2 Inc.","title":"Backend Engineer","timeline":"Jan. 2020 \u2013 Feb. 2023","history":["Implemented projects such as ClinicPromotion, Telemedicine, and Self-Titration.","Designed and maintained the architecture for Health2sync, HealthPass, and SyncPoint.","Managed the development of Health2sync, boasting <strong>one million</strong> users and <strong>fifty thousand daily</strong> active users.","Assisted in structuring projects and provided technical support to new team members."]},{"company":"Junior Golang Web Engineer","title":"AuroraTech Inc.","timeline":"Jul. 2019 \u2013 Jan. 2020","history":["Developed the payment module, integrating third-party payment gateways for convenience store codes, bank virtual accounts, and credit cards."]},{"company":"Cathay United Bank \u570b\u6cf0\u4e16\u83ef\u5546\u696d\u9280\u884c","title":"IT Specialist","timeline":"Aug. 2017 \u2013 Mar. 2019","history":["Developed and maintained the financial system for debit and credit.","Possessed domain knowledge in credit and debit card systems."]}],"project":[{"name":"GithubPage","url":"https://github.com/hhhhp52/schnee","type":"self","description":"Self Page"},{"name":"EnglishNote","url":"https://github.com/hhhhp52/english-note","type":"self","description":"Record the english learning note"},{"name":"ClinicPromotion","url":"https://www.health2sync.com/tw/diabetes-clinics","type":"work","description":"Website for promoting clinic\'s famous rate"},{"name":"Health2Sync","url":"https://www.health2sync.com/tw","type":"work","description":"Company home page"}]}')},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){},94:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s.n(n),r=s(61),c=s.n(r),a=s(55),o=(s(46),s(83),s(135)),l=s(138),d=s(134),h=s(139),j=s(140),m=s(136),b=s(141),p=s(137),u=s(63),x=s.n(u),O=s(64),g=s.n(O),f=s(27),y=s(1);const v=s(85);class k extends i.a.Component{render(){return Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)(N,{}),Object(y.jsx)(C,{}),Object(y.jsx)(q,{}),Object(y.jsx)(P,{})]})}}class N extends i.a.Component{render(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:v.title.introduction}),Object(y.jsx)("div",{className:"section",children:Object(y.jsxs)("div",{className:"introduction-panel",children:[Object(y.jsxs)("div",{className:"introduction-object",children:[Object(y.jsx)("strong",{children:"5+"})," years of backend engineer. Proficient in ",Object(y.jsx)("strong",{children:"Python and the Flask framework"})," to quickly set up servers."]}),Object(y.jsxs)("div",{className:"introduction-object",children:["Strong ability to collaborate with multiple teams, at least ",Object(y.jsx)("strong",{children:"four teams"}),", including Product, Design, App and Business, and often ",Object(y.jsx)("strong",{children:"as the key man"})," in the project."]})]})})]})}}function S(e){const t=[];for(let s=0;s<e.contents.length;s++)t.push(Object(y.jsx)("li",{children:e.contents[s]}));return Object(y.jsxs)("div",{className:"skill-object",children:[Object(y.jsx)("div",{className:"skill-info",children:Object(y.jsx)("strong",{children:e.info})}),Object(y.jsx)("div",{className:"skill-content",children:Object(y.jsx)("ul",{children:t})})]})}class C extends i.a.Component{constructor(e){super(e),this.state={data:v.skill,max_item:v.skill.length-1}}renderSkill(){const e=[];for(let t=0;t<=this.state.max_item;t++)e.push(Object(y.jsx)(S,{info:this.state.data[t].info,contents:this.state.data[t].contents}));return Object(y.jsx)("div",{className:"skill-panel",children:e})}render(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:v.title.skill}),Object(y.jsx)("div",{className:"section",children:this.renderSkill()})]})}}function w(e){const t=e.history.map(((e,t)=>Object(y.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t)));return Object(y.jsxs)("div",{className:"work-object",children:[Object(y.jsxs)("div",{className:"work-info",children:[Object(y.jsx)("p",{children:Object(y.jsx)("strong",{children:e.title})}),Object(y.jsx)("p",{children:e.company}),Object(y.jsx)("p",{children:Object(y.jsx)("em",{children:e.timeline})})]}),Object(y.jsx)("div",{className:"work-content",children:Object(y.jsx)("ul",{children:t})})]})}class q extends i.a.Component{constructor(e){super(e),this.state={data:v.experience,max_item:v.experience.length-1}}renderExperience(){const e=[];for(let t=0;t<=this.state.max_item;t++)e.push(Object(y.jsx)(w,{company:this.state.data[t].company,title:this.state.data[t].title,timeline:this.state.data[t].timeline,history:this.state.data[t].history}));return Object(y.jsx)("div",{className:"work-panel",children:e})}render(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:v.title.experience}),Object(y.jsx)("div",{className:"section",children:this.renderExperience()})]})}}function I(e){return Object(y.jsxs)(o.a,{className:"project-card",children:[Object(y.jsx)(l.a,{avatar:Object(y.jsx)(d.a,{sx:{bgcolor:f.a[500]},"aria-label":"project",children:e.name[0]}),title:e.name,subheader:e.type,className:"project-card-header"}),Object(y.jsx)(h.a,{className:"project-card-content",children:Object(y.jsx)(p.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(y.jsx)(j.a,{disableSpacing:!0,className:"project-card-footer",children:Object(y.jsx)(m.a,{href:e.url,children:"Link"})})]})}class P extends i.a.Component{constructor(e){super(e),this.state={data:v.project,max_item:v.project.length-1,left:v.project.length>=1?v.project.length-1:0,current:0,right:v.project.length>=1?1:0}}renderCard(e){return Object(y.jsx)(I,{name:this.state.data[e].name,url:this.state.data[e].url,type:this.state.data[e].type,description:this.state.data[e].description})}handleClick(e){const t=this.state.left,s=this.state.right,n=this.state.max_item;e===t?this.setState({left:t-1>=0?t-1:n,current:e,right:s-1>=0?s-1:n}):e===s?this.setState({left:t+1<=n?t+1:0,current:e,right:s+1<=n?s+1:0}):console.log("Something Wrong")}render(){const e=this.state.left,t=this.state.right,s=this.state.current;return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:v.title.project}),Object(y.jsx)("div",{className:"section",children:Object(y.jsxs)("div",{className:"project-panel",children:[Object(y.jsx)("div",{className:"project-way",children:Object(y.jsx)(b.a,{onClick:()=>this.handleClick(e),size:"large",children:Object(y.jsx)(x.a,{fontSize:"inherit"})})}),Object(y.jsx)("div",{className:"project-screen",children:Object(y.jsxs)("div",{className:"project-shower",children:[this.renderCard(e),this.renderCard(s),this.renderCard(t)]})}),Object(y.jsx)("div",{className:"project-way",children:Object(y.jsx)("div",{children:Object(y.jsx)(b.a,{onClick:()=>this.handleClick(t),size:"large",children:Object(y.jsx)(g.a,{fontSize:"inherit"})})})})]})})]})}}s(90);var E=s(65),J=s.n(E),H=s(66),M=s.n(H),R=s(67),T=s.n(R);class _ extends i.a.Component{render(){return Object(y.jsx)("div",{className:"header",children:Object(y.jsxs)("div",{className:"profile",children:[Object(y.jsx)("div",{className:"profile-photo",children:Object(y.jsx)("div",{className:"profile-photo-object"})}),Object(y.jsxs)("div",{className:"profile-content",children:[Object(y.jsx)("p",{children:Object(y.jsx)("strong",{children:"Wen-Ching Ruan(Schnee)"})}),Object(y.jsx)("p",{children:Object(y.jsx)("strong",{children:Object(y.jsx)("em",{children:"Senior Backend Engineer"})})}),Object(y.jsx)("p",{children:"Fu Jen University"})]}),Object(y.jsxs)("div",{className:"link",children:[Object(y.jsxs)("a",{className:"link-style",href:"https://github.com/hhhhp52",children:[Object(y.jsx)(J.a,{}),Object(y.jsx)("span",{className:"link-name",children:"Github"})]}),Object(y.jsxs)("a",{className:"link-style",href:"https://www.linkedin.com/in/schneeheart/",children:[Object(y.jsx)(M.a,{}),Object(y.jsx)("span",{className:"link-name",children:"Linkedin"})]}),Object(y.jsxs)("a",{className:"link-style",href:"mailto:hhhhp52@gmail.com",children:[Object(y.jsx)(T.a,{}),Object(y.jsx)("span",{className:"link-name",children:"Email"})]})]})]})})}}s(91);class A extends i.a.Component{render(){return Object(y.jsx)("div",{className:"footer",children:Object(y.jsx)("span",{children:Object(y.jsx)("strong",{children:"--- Copyright \xa9 2024 Schnee Ruan ---"})})})}}class G extends i.a.Component{render(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(_,{}),Object(y.jsx)(k,{}),Object(y.jsx)(A,{})]})}}function z(){return Object(y.jsx)(G,{})}s(92);function B(e){const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let s=0;s<t.length;s++){const[n,i,r]=t[s];if(e[n]&&e[n]===e[i]&&e[n]===e[r])return e[n]}return null}function D(e){return Object(y.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}class L extends i.a.Component{renderSquare(e){return Object(y.jsx)(D,{value:this.props.squares[e],onClick:()=>this.props.onClick(e)})}render(){return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(y.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(y.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}class W extends i.a.Component{constructor(e){super(e),this.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0}}handleClick(e){const t=this.state.history.slice(0,this.state.stepNumber+1),s=t[t.length-1].squares.slice();B(s)||s[e]||(s[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:s}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}jumpTo(e){this.setState({stepNumber:e,xIsNext:e%2===0})}render(){const e=this.state.history,t=e[this.state.stepNumber],s=B(t.squares),n=e.map(((e,t)=>{const s=t?"Go to move #"+t:"Go to game start";return Object(y.jsx)("li",{children:Object(y.jsx)("button",{onClick:()=>this.jumpTo(t),children:s})},t)}));let i;return i=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),Object(y.jsxs)("div",{children:[Object(y.jsx)(_,{}),Object(y.jsxs)("div",{className:"game",children:[Object(y.jsx)("div",{className:"game-board",children:Object(y.jsx)(L,{squares:t.squares,onClick:e=>this.handleClick(e)})}),Object(y.jsxs)("div",{className:"game-info",children:[Object(y.jsx)("div",{children:i}),Object(y.jsx)("ol",{children:n})]})]}),Object(y.jsx)(A,{})]})}}function F(){return Object(y.jsx)(W,{})}const K=Object(a.b)([{path:"/",element:Object(y.jsx)(z,{})},{path:"/schnee",element:Object(y.jsx)(z,{})},{path:"/game",element:Object(y.jsx)(F,{})}]);c.a.createRoot(document.getElementById("root")).render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(a.a,{router:K})}))}},[[94,1,2]]]);
//# sourceMappingURL=main.537294f9.chunk.js.map