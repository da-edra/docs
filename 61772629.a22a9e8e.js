(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(157)),i={id:"docker",title:"Self-hosting with Docker",sidebar_label:"Docker",description:"How to self-host a Standard Notes Sync server with Docker.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","docker"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"self-hosting/docker",id:"self-hosting/docker",isDocsHomePage:!1,title:"Self-hosting with Docker",description:"How to self-host a Standard Notes Sync server with Docker.",source:"@site/docs/self-hosting/docker.md",slug:"/self-hosting/docker",permalink:"/self-hosting/docker",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/self-hosting/docker.md",version:"current",lastUpdatedAt:1608765410,sidebar_label:"Docker",sidebar:"someSidebar",previous:{title:"Getting Started with Self-hosting",permalink:"/self-hosting/getting-started"},next:{title:"Self-Hosting with Heroku",permalink:"/self-hosting/heroku"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Using your new server",id:"using-your-new-server",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"These instructions make the following assumptions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You've just finished setting up a Linux server (say, Ubuntu 20.04 64-bit) and have installed ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"Docker")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"Docker Compose")," on it."),Object(o.b)("li",{parentName:"ul"},"You've configured your security groups to allow for incoming SSH connections from your local IP."),Object(o.b)("li",{parentName:"ul"},"You've configured a domain name (or subdomain) to point to your server's IP address."),Object(o.b)("li",{parentName:"ul"},"You've configured the DNS to enable HTTPS for your domain (say, using Cloudflare).")),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"SSH into your server and follow the steps below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update your system:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get update\n$ sudo apt-get upgrade\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install ",Object(o.b)("inlineCode",{parentName:"p"},"git")," and ",Object(o.b)("inlineCode",{parentName:"p"},"libmysqlclient-dev"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get install -y git libmysqlclient-dev\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure you are in your home directory and clone the Standard Notes Server ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/standardnotes/syncing-server"}),"syncing-server")," project:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ cd ~\n$ git clone --single-branch --branch master https://github.com/standardnotes/syncing-server.git\n$ cd syncing-server\n")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch has the latest, stable code. Use this branch in production environments.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file in the project's directory:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ cp .env.sample .env\n")),Object(o.b)("p",{parentName:"li"},"Generate the secret key base and paste the output in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file's ",Object(o.b)("inlineCode",{parentName:"p"},"SECRET_KEY_BASE")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PSEUDO_KEY_PARAMS_KEY")," key:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ openssl rand -hex 64\n")),Object(o.b)("p",{parentName:"li"},"Also make sure to check the following variables:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DB_PASSWORD")," create a password for your database and set it"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RAILS_ENV"),' change this to "production" for production use, otherwise the access token time is very short and forces re-login')),Object(o.b)("p",{parentName:"li"},"These variables cannot be changed within the docker container once they are set. To change them, the container needs to be removed ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose rm")," and rebuilt (see next step). Data might be lost during this process.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Simply run:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo docker-compose up -d\n")),Object(o.b)("p",{parentName:"li"},"This should load the ",Object(o.b)("inlineCode",{parentName:"p"},"syncing-server")," on ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," and MySQL database containers and run the necessary migrations.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Test your access to the server locally:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ curl {domain name}\n<!doctype html>\n<html>\n  ...\n  <body>\n    <h1> Hi! You\'re not supposed to be here. </h1>\n\n    <p> You might be looking for the <a href="https://app.standardnotes.org"> Standard Notes Web App</a> or the main <a href="https://standardnotes.org"> Standard Notes Website</a>. </p>\n\n  </body>\n</html>\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You're done!"))),Object(o.b)("h2",{id:"using-your-new-server"},"Using your new server"),Object(o.b)("p",null,"You can immediately start using your new server by using the Standard Notes app at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.standardnotes.org"}),"https://app.standardnotes.org"),"."),Object(o.b)("p",null,"In the account menu, choose ",Object(o.b)("inlineCode",{parentName:"p"},"Advanced Options")," and enter the address of your new server in ",Object(o.b)("inlineCode",{parentName:"p"},"Sync Server Domain"),"."),Object(o.b)("p",null,"Then, register for a new account or log into an existing account and begin using your private new secure Standard Notes server!"))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);