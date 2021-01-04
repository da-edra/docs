(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(151)),a={title:"How to build editors with EditorKit",sidebar_label:"EditorKit",description:"How to use the Standard Notes EditorKit to build an editor.",keywords:["standard notes","docs","notes app","end-to-end encryption","build an extension","EditorKit"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"extensions/editorkit",id:"extensions/editorkit",isDocsHomePage:!1,title:"How to build editors with EditorKit",description:"How to use the Standard Notes EditorKit to build an editor.",source:"@site/docs/extensions/editorkit.md",slug:"/extensions/editorkit",permalink:"/extensions/editorkit",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/extensions/editorkit.md",version:"current",lastUpdatedAt:1594535914,sidebar_label:"EditorKit",sidebar:"someSidebar",previous:{title:"Building an Extension",permalink:"/extensions/building-an-extension"},next:{title:"How to use the Standard Notes StyleKit",permalink:"/extensions/stylekit"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Development",id:"development",children:[]},{value:"License",id:"license",children:[]},{value:"Resources",id:"resources",children:[]}],d={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The EditorKit is a wrapper for the Components API to make it easier to develop editors for Standard Notes."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"The documentation for the EditorKit is incomplete. You can view the following examples to see how it is used."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sn-extensions/token-vault"}),"Token Vault"))),Object(o.b)("h2",{id:"development"},"Development"),Object(o.b)("p",null,"The Standard Notes EditorKit is written in JavaScript and compiled with Webpack."),Object(o.b)("h2",{id:"license"},"License"),Object(o.b)("p",null,"The Standard Notes EditorKit is licensed under the GNU ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/standardnotes/editor-kit/blob/master/LICENSE"}),"AGPL-3.0-or-later"),"."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/standardnotes/editor-kit"}),"GitHub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/sn-editor-kit"}),"NPM"))))}l.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||p[b]||o;return n?i.a.createElement(m,c(c({ref:t},d),{},{components:n})):i.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);