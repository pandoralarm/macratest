(function(){"use strict";var n={2894:function(n,e,t){var s=t(9242),r=t(65),o=t(3396);function c(n,e,t,s,r,c){const a=(0,o.up)("HeaderComponent"),i=(0,o.up)("BodyComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a,{msg:"Welcome to Your Vue.js App"}),(0,o.Wm)(i,{msg:"Welcome to Your Vue.js App"})],64)}t(7387),t(6744);var a=t(7139);const i=n=>((0,o.dD)("data-v-53cad2bc"),n=n(),(0,o.Cn)(),n),l={class:"container-fluid"},u={class:"row base"},p=i((()=>(0,o._)("div",{class:"col-3 pt-4 text-center"},[(0,o._)("img",{src:"Logo.png"})],-1))),d={class:"col-7 pt-4"},m={class:"row"},v={class:"col-9"},g={class:"col-3"},_=i((()=>(0,o._)("div",{class:"col-2 pt-3 text-center"},[(0,o._)("img",{src:"user.png",style:{height:"60%"}})],-1)));function f(n,e,t,s,r,c){const i=(0,o.up)("DrowdownButton");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",u,[p,(0,o._)("div",d,[(0,o._)("div",m,[(0,o._)("div",v,[(0,o._)("span",{class:"text-left dash-title",onUpdate:e[0]||(e[0]=(...n)=>c.titleupdate&&c.titleupdate(...n))},(0,a.zw)(c.title),33)]),(0,o._)("div",g,[(0,o.Wm)(i,{desc:"dropdown"})])])]),_])])}const h=n=>((0,o.dD)("data-v-35fc6b90"),n=n(),(0,o.Cn)(),n),b={class:"selection",style:{width:"200px"}},C=h((()=>(0,o._)("select",null,[(0,o._)("option",{value:"0"},"This Month"),(0,o._)("option",{value:"1"},"This Quarter"),(0,o._)("option",{value:"2"},"This Year"),(0,o._)("option",{value:"3"},"This Decade")],-1))),w=[C];function y(n,e,t,s,r,c){return(0,o.wg)(),(0,o.iD)("div",b,w)}var D={name:"DropdownButton",props:{msg:String,msg2:String}},k=t(89);const x=(0,k.Z)(D,[["render",y],["__scopeId","data-v-35fc6b90"]]);var O=x,S={name:"HeaderComponent",data(){return{}},computed:{title(){return this.$store.state.current}},props:{msg:String,msg2:String},methods:{titleupdate(n){this.title=n}},components:{DrowdownButton:O}};const U=(0,k.Z)(S,[["render",f],["__scopeId","data-v-53cad2bc"]]);var j=U;const H={class:"container-fluid"},R={class:"row base"},A={class:"col-3 text-center"},T={class:"col-9"},W={class:"row"},I={class:"col"};function Z(n,e,t,s,r,c){const a=(0,o.up)("NavComponent"),i=(0,o.up)("ContentComponent");return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("div",R,[(0,o._)("div",A,[(0,o.Wm)(a,{src:"Logo.png"})]),(0,o._)("div",T,[(0,o._)("div",W,[(0,o._)("div",I,[(0,o.Wm)(i,{msg:"Its body"})])])])])])}const B=n=>((0,o.dD)("data-v-1bc7a063"),n=n(),(0,o.Cn)(),n),E={class:"row"},z={class:"col"},M=(0,o.Uk)(),Y=B((()=>(0,o._)("span",{class:"pl-5"},"Dashboard",-1))),$=(0,o.Uk)(),L=B((()=>(0,o._)("span",{class:"pl-5"},"Employees",-1))),N=(0,o.Uk)(),P=B((()=>(0,o._)("span",{class:"pl-5"},"Assets",-1))),V=(0,o.Uk)(),F=B((()=>(0,o._)("span",{class:"pl-5"},"References",-1))),G=(0,o.Uk)(),Q=B((()=>(0,o._)("span",{class:"pl-5"},"Report",-1))),q=(0,o.Uk)(),J=B((()=>(0,o._)("i",{class:"bi bi-chevron-right",style:{float:"right","margin-right":"3%"}},null,-1)));function K(n,e,t,s,r,c){return(0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("div",z,[(0,o._)("ul",null,[(0,o._)("li",{onClick:e[0]||(e[0]=n=>c.changemenu("Dashboard")),class:(0,a.C_)(["mb-1",{active:"Dashboard"===c.current}])},[(0,o._)("img",{src:"icons/dash.svg",class:(0,a.C_)(["px-4",{invert:"Dashboard"===c.current}])},null,2),M,Y],2),(0,o._)("li",{onClick:e[1]||(e[1]=n=>c.changemenu("Employees")),class:(0,a.C_)(["my-1",{active:"Employees"===c.current}])},[(0,o._)("img",{src:"icons/employee.svg",class:(0,a.C_)(["px-4",{invert:"Employees"===c.current}])},null,2),$,L],2),(0,o._)("li",{onClick:e[2]||(e[2]=n=>c.changemenu("Assets")),class:(0,a.C_)(["my-1",{active:"Assets"===c.current}])},[(0,o._)("img",{src:"icons/assets.svg",class:(0,a.C_)(["px-4",{invert:"Assets"===c.current}])},null,2),N,P],2),(0,o._)("li",{onClick:e[3]||(e[3]=n=>c.changemenu("References")),class:(0,a.C_)(["my-1",{active:"References"===c.current}])},[(0,o._)("img",{src:"icons/references.svg",class:(0,a.C_)(["px-4",{invert:"References"===c.current}])},null,2),V,F],2),(0,o._)("li",{onClick:e[4]||(e[4]=n=>c.changemenu("Report")),class:(0,a.C_)(["my-1",{active:"Report"===c.current}])},[(0,o._)("img",{src:"icons/report.svg",class:(0,a.C_)(["px-4",{invert:"Report"===c.current}])},null,2),G,Q,q,J],2)])])])}var X={name:"HeaderComponent",computed:{current(){return this.$store.state.current}},props:{msg:String,msg2:String},methods:{changemenu(n){this.$store.commit("updatecurrent",n)}}};const nn=(0,k.Z)(X,[["render",K],["__scopeId","data-v-1bc7a063"]]);var en=nn;const tn=n=>((0,o.dD)("data-v-39bb5a73"),n=n(),(0,o.Cn)(),n),sn={class:"row"},rn={class:"col"},on={class:"banner w-75"},cn=tn((()=>(0,o._)("img",{src:"Contents.png",class:"w-100"},null,-1))),an={class:"top-left p-5"},ln={style:{"font-size":"5vh","font-weight":"700"}},un=(0,o.Uk)("Good Morning, "),pn=tn((()=>(0,o._)("br",null,null,-1))),dn=tn((()=>(0,o._)("div",{class:"bottom-left p-5"},[(0,o._)("span",{style:{"font-size":"2vh","font-weight":"400"}},"Have a good day!")],-1)));function mn(n,e,t,s,r,c){return(0,o.wg)(),(0,o.iD)("div",sn,[(0,o._)("div",rn,[(0,o._)("div",on,[cn,(0,o._)("div",an,[(0,o._)("span",ln,[un,pn,(0,o.Uk)((0,a.zw)(c.username),1)])]),dn])])])}var vn={name:"HeaderComponent",computed:{username(){return this.$store.state.username}},props:{msg:String,msg2:String}};const gn=(0,k.Z)(vn,[["render",mn],["__scopeId","data-v-39bb5a73"]]);var _n=gn,fn={name:"HeaderComponent",components:{NavComponent:en,ContentComponent:_n},props:{msg:String,msg2:String}};const hn=(0,k.Z)(fn,[["render",Z],["__scopeId","data-v-448d5d9c"]]);var bn=hn,Cn={name:"App",components:{HeaderComponent:j,BodyComponent:bn}};const wn=(0,k.Z)(Cn,[["render",c]]);var yn=wn;const Dn=(0,r.MT)({state(){return{current:"Dashboard",username:"Samantha"}},mutations:{updatecurrent(n,e){n.current=e}}}),kn=(0,s.ri)(yn);kn.use(Dn),kn.mount("#app")}},e={};function t(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return n[s].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,s,r,o){if(!s){var c=1/0;for(u=0;u<n.length;u++){s=n[u][0],r=n[u][1],o=n[u][2];for(var a=!0,i=0;i<s.length;i++)(!1&o||c>=o)&&Object.keys(t.O).every((function(n){return t.O[n](s[i])}))?s.splice(i--,1):(a=!1,o<c&&(c=o));if(a){n.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[s,r,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var s in e)t.o(e,s)&&!t.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,s){var r,o,c=s[0],a=s[1],i=s[2],l=0;if(c.some((function(e){return 0!==n[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(i)var u=i(t)}for(e&&e(s);l<c.length;l++)o=c[l],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(u)},s=self["webpackChunkmacratest"]=self["webpackChunkmacratest"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(2894)}));s=t.O(s)})();
//# sourceMappingURL=app.6cb0a560.js.map