(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(151)),a={id:"https-support",title:"Securing HTTP traffic of your Sync server",sidebar_label:"Securing HTTP traffic of your Sync server",description:"How to secure HTTP traffic of your Standard Notes Sync server.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","secure http traffic"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"self-hosting/https-support",id:"self-hosting/https-support",isDocsHomePage:!1,title:"Securing HTTP traffic of your Sync server",description:"How to secure HTTP traffic of your Standard Notes Sync server.",source:"@site/docs/self-hosting/https-support.md",slug:"/self-hosting/https-support",permalink:"/self-hosting/https-support",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/https-support.md",version:"current",lastUpdatedAt:1594535914,sidebar_label:"Securing HTTP traffic of your Sync server",sidebar:"someSidebar",previous:{title:"Managing options",permalink:"/self-hosting/managing-options"},next:{title:"Intro to Extensions",permalink:"/extensions/intro"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Getting started",id:"getting-started",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"These instructions will enable you to secure HTTP traffic of your ",Object(i.b)("inlineCode",{parentName:"p"},"syncing-server"),", using a reverse proxy with ",Object(i.b)("inlineCode",{parentName:"p"},"Nginx"),"."),Object(i.b)("h4",{id:"pre-requisites"},"Pre-requisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your ",Object(i.b)("inlineCode",{parentName:"li"},"syncing-server")," is running on a ",Object(i.b)("inlineCode",{parentName:"li"},"docker")," container."),Object(i.b)("li",{parentName:"ul"},"You've installed ",Object(i.b)("inlineCode",{parentName:"li"},"nginx")," in your server."),Object(i.b)("li",{parentName:"ul"},"You've configured a domain name (or subdomain) to point to your server's IP address.")),Object(i.b)("h3",{id:"getting-started"},"Getting started"),Object(i.b)("h4",{id:"setting-up-nginx"},"Setting up Nginx"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Disable the default virtual host:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"unlink /etc/nginx/sites-enabled/default\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new file named ",Object(i.b)("inlineCode",{parentName:"li"},"syncing-server.conf")," within ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/nginx/sites-available"),":")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"server {\n    listen 80;\n    listen [::]:80;\n    server_name yourdomain.com;\n\n    access_log /var/log/nginx/syncing-server-access.log;\n    error_log /var/log/nginx/syncing-server-error.log;\n\n    location / {\n        proxy_pass http://127.0.0.1:3000; # syncing-server address\n    }\n}\n")),Object(i.b)("p",null,"Replace ",Object(i.b)("inlineCode",{parentName:"p"},"yourdomain.com")," with your actual domain."),Object(i.b)("p",null,"Also, adjust the following line if necessary:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"proxy_pass http://127.0.0.1:3000\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Enable your new site:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ln -s /etc/nginx/sites-available/syncing-server.conf /etc/nginx/sites-enabled/syncing-server.conf\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Test the ",Object(i.b)("inlineCode",{parentName:"li"},"Nginx")," configuration with:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"nginx -t\n")),Object(i.b)("h4",{id:"setting-up-certbot"},"Setting up Certbot"),Object(i.b)("p",null,"Go to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://certbot.eff.org/instructions"}),"certbot")," to get and install your HTTPS certificate."),Object(i.b)("p",null,"After completing the above instructions, your Sync server should be HTTPS enabled!"))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);