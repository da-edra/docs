(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),o=(n(0),n(169)),i={id:"intro",title:"Intro to Extensions",sidebar_label:"Intro to Extensions"},s={id:"extensions/intro",title:"Intro to Extensions",description:"## Philosophy",source:"@site/docs/extensions/intro.md",permalink:"/newdocs/extensions/intro",editUrl:"https://github.com/standardnotes/newdocs/edit/master/docs/extensions/intro.md",sidebar_label:"Intro to Extensions",sidebar:"someSidebar",previous:{title:"Preconfigured Image",permalink:"/newdocs/self-hosting/preconfigured-image"},next:{title:"Building an Extension",permalink:"/newdocs/extensions/building-an-extension"}},c=[{value:"Philosophy",id:"philosophy",children:[]},{value:"Sustainability",id:"sustainability",children:[]},{value:"Types",id:"types",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"philosophy"},"Philosophy"),Object(o.b)("p",null,"Standard Notes is built on the core principle of simplicity, in hopes of optimizing for longevity. This requires a different sort of architecture and long-term thinking. In today's environment, adding new features can be as easy as installing an external library and hooking it up with just a few lines of code. It's all too common that developers, in hopes of attracting more and more users, add more and more features to their app, until inevitably, the app bloats to oblivion and becomes impossible to maintain."),Object(o.b)("p",null,"Rather than tightly couple every feature we dream of building for Standard Notes into the core application code, we chose to design Standard Notes to be thoroughly extensible. This allows us to experiment with new features without polluting the core application and threatening its stability and survivability."),Object(o.b)("h2",{id:"sustainability"},"Sustainability"),Object(o.b)("p",null,"The Extensions model is also our main fundraising method, and allows us to to offer our core privacy experience at no cost, while sustaining future development by offering advanced features through our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extended"}),"Extended")," program."),Object(o.b)("p",null,"Most of our extensions are ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sn-extensions"}),"open-source")," and available for self-hosting. You can also learn to develop your own extensions by following the guides on this site. However, we encourage you to support the sustainability and future development of this project by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions"}),"purchasing a subscription"),"."),Object(o.b)("h2",{id:"types"},"Types"),Object(o.b)("p",null,"There are 3 main types of extensions:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Components"),": Components are user interface elements that completely swap out areas of Standard Notes with custom behavior. Components include editors (such as the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/advanced-markdown"}),"Advanced Markdown Editor")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/plus-editor"}),"Plus Editor"),"), editor stack components (like the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/action-bar"}),"Action Bar")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/filesafe"}),"FileSafe"),"), and other components (like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/folders"}),"Folders")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/quick-tags"}),"Quick Tags"),")."),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"/extensions/building-an-extension"}),"Developing a component \u2192")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Themes"),": Themes change the visual appearance of Standard Notes, and are compatible on all platforms, including desktop, web, and mobile. Some of our own themes include ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/midnight"}),"Midnight")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions/solarized-dark"}),"Solarized Dark"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"/extensions/themes"}),"Developing a theme \u2192")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Actions"),": Actions are an API-based extension interface that are accessible via the Actions menu in the note pane. Actions are triggered manually by the user by selecting an action from the list, and have the ability to interface with the current note and send or retrieve content from a remote server. We use actions for places such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://listed.to"}),"Listed"),", which is our blogging platform for Standard Notes users."),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"/extensions/actions"}),"Developing an action \u2192"))))))}l.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(h,s({ref:t},p,{components:n})):r.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);