(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(151)),i={id:"getting-started",title:"Getting Started with Self-hosting",sidebar_label:"Getting Started",description:"How to get started with self-hosting a Standard Notes syncing server.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},s={unversionedId:"self-hosting/getting-started",id:"self-hosting/getting-started",isDocsHomePage:!1,title:"Getting Started with Self-hosting",description:"How to get started with self-hosting a Standard Notes syncing server.",source:"@site/docs/self-hosting/getting-started.md",slug:"/self-hosting/getting-started",permalink:"/self-hosting/getting-started",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/getting-started.md",version:"current",lastUpdatedAt:1608765410,sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Per-Post Options",permalink:"/listed/options"},next:{title:"Self-hosting with Docker",permalink:"/self-hosting/docker"}},c=[{value:"Syncing Server",id:"syncing-server",children:[{value:"Recommendations",id:"recommendations",children:[]},{value:"Issues",id:"issues",children:[]}]},{value:"Web application",id:"web-application",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"syncing-server"},"Syncing Server"),Object(a.b)("p",null,"We offer free and fast sync for unlimited devices to both free and paid users. If you are interested in hosting your own syncing server, you are welcome to do so. We offer the following options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/self-hosting/docker"}),"Docker")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/self-hosting/heroku"}),"Heroku")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/self-hosting/ec2-nginx"}),"AWS EC2 and Nginx")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/self-hosting/raspberry-pi"}),"Raspberry Pi"))),Object(a.b)("h3",{id:"recommendations"},"Recommendations"),Object(a.b)("p",null,"We highly recommend that you use our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/repository/docker/standardnotes/syncing-server"}),"official Docker image")," to host your syncing server. Docker containers are isolated software environments that you can control and manage. Our official Docker image is a quick and easy way to get started because all the requirements are prepared and packaged inside the image."),Object(a.b)("p",null,"If you are new to Docker, please see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/get-started/"}),"official Docker documentation")," on how to get started."),Object(a.b)("p",null,"We recommend that you avoid setting up the syncing server from scratch with Nginx unless you are proficient with Nginx. Setting up the full architecture can be challenging without full knowledge of how the syncing server works."),Object(a.b)("h3",{id:"issues"},"Issues"),Object(a.b)("p",null,"If you have any issues with setting up your syncing server, please ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/standardnotes/syncing-server/issues"}),"open an issue on GitHub"),"."),Object(a.b)("h2",{id:"web-application"},"Web application"),Object(a.b)("p",null,"If you would like to self-host the actual Standard Notes web application, visit the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/standardnotes/web"}),"repository for the web app on GitHub"),"."))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);