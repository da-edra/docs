(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||l[d]||o;return n?a.a.createElement(m,u(u({ref:t},s),{},{components:n})):a.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(160)),i={slug:"github-push/",id:"github-push",title:"GitHub Push",sidebar_label:"GitHub Push",description:"How to use the Standard Notes GitHub Push extension.",keywords:["standard notes","docs","notes app","end-to-end encryption","github push"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},u={unversionedId:"usage/github-push",id:"usage/github-push",isDocsHomePage:!1,title:"GitHub Push",description:"How to use the Standard Notes GitHub Push extension.",source:"@site/docs/usage/github-push.md",slug:"/usage/github-push/",permalink:"/usage/github-push/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/usage/github-push.md",version:"current",lastUpdatedAt:1608765620,sidebar_label:"GitHub Push",sidebar:"mainSidebar",previous:{title:"Action Bar",permalink:"/usage/action-bar"},next:{title:"Create and Import Backups",permalink:"/usage/backups/"}},c=[],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The GitHub Push Action Extension pushes a note to a public or private repository. You can choose a directory, extension and commit message, as well as which repository to push to."),Object(o.b)("p",null,"Required permissions for public repo access:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"public_repo")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/772937/92886567-9a8a8700-f3c8-11ea-9560-b1956eecdf4b.png",alt:"Public access"}))),Object(o.b)("p",null,"Required permissions for private repo access:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"repo")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/772937/92886571-9bbbb400-f3c8-11ea-86d8-713f0041a5ba.png",alt:"Private access"}))))}p.isMDXComponent=!0}}]);