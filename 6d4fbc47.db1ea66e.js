(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(151)),o={id:"preconfigured-image",title:"Preconfigured Image",sidebar_label:"Preconfigured Image",description:"Set up your Standard Notes Sync server with a preconfigured image.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-hosting","sync server","preconfigured image"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},c={type:"mdx",permalink:"/archive/self-hosting/preconfigured-image",source:"@site/src/pages/archive/self-hosting/preconfigured-image.md"},b=[{value:"Launching the instance",id:"launching-the-instance",children:[]},{value:"Setting up your domain",id:"setting-up-your-domain",children:[]},{value:"Configuring the server",id:"configuring-the-server",children:[]},{value:"Maintenance",id:"maintenance",children:[]}],l={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"preconfigured-image"},"Preconfigured Image"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This is deprecated."))),Object(i.b)("p",null,"Instead of setting up a server from scratch, you can use our public Amazon Machine Image (AMI), which launches (almost) ready to go with a working Standard Notes server."),Object(i.b)("p",null,"This article assumes you have some experience using the AWS console, so it won't go into too much detail about that interface."),Object(i.b)("p",null,"You should also have a domain or subdomain you'll be using for the server."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Important:")," This AMI is available only in the US-East N. Virginia region. After launching the image, you will need to update the software to catch up with new releases."),Object(i.b)("h2",{id:"launching-the-instance"},"Launching the instance"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'In the EC2 console, under "Images", select the "AMIs" menu item.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'In the search bar, change the dropdown to search in "Public images". Then type ',Object(i.b)("inlineCode",{parentName:"p"},"AMI ID : ami-4badcd5d")," and hit enter.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'You should see the Standard Notes AMI result in the list. Select the checkbox to the left of it, and press the blue "Launch" button on top.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose an Instance Type. The minimum you should use is the t2.micro, which has 1 GB memory. Anything less and you'll run into problems.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Go through the wizard with the default options. Don\'t press the blue "Review and Launch" button, as that will skip some steps. When you arrive at the step "Configure Security Group", you need to add 3 rules:'),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Port"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"SSH"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"22"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'Source: Choose "My IP"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"HTTP"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"80"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Source: Anywhere")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"HTTPS"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"443"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Source: Anywhere"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make sure to download your private key at the end."))),Object(i.b)("h2",{id:"setting-up-your-domain"},"Setting up your domain"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'In the EC2 console, choose "Instances", and click on the instance you just launched. Copy its "IPv4 Public IP".')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use this IP in your DNS settings for your domain. That is, create an A record in your domain settings that points to that IP address. These instructions differ depending on the host you're using."))),Object(i.b)("h2",{id:"configuring-the-server"},"Configuring the server"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"SSH into the server using the IP address you retrieved above:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ssh -i /path/to/key.pem ec2-user@ipaddress\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start the MySQL server:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo service mysqld start\n")),Object(i.b)("p",{parentName:"li"},"Note that the MySQL server is setup with username ",Object(i.b)("inlineCode",{parentName:"p"},"root")," and password ",Object(i.b)("inlineCode",{parentName:"p"},"root"),". Feel free to change this.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Edit your nginx config:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo vim /opt/nginx/conf/nginx.conf\n")),Object(i.b)("p",{parentName:"li"},"Replace domain.com in ",Object(i.b)("inlineCode",{parentName:"p"},"server_name domain.com;")," with your domain or subdomain.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Set up a free HTTPS certificate with LetsEncrypt (required)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"/opt/letsencrypt/letsencrypt-auto certonly --standalone --debug\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go back and edit the nginx.conf file:"),Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("inlineCode",{parentName:"p"},"server")," bracket, uncomment these two lines by removing the ",Object(i.b)("inlineCode",{parentName:"p"},"#")," symbol."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-nginx"}),"# ssl_certificate /etc/letsencrypt/live/domain.com/fullchain.pem;\n# ssl_certificate_key /etc/letsencrypt/live/domain.com/privkey.pem;\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Change domain.com with your domain."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update code with latest releases:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"cd ~/syncing-server\ngit pull\nbundle install\nbundle exec rails db:migrate RAILS_ENV=production\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Start nginx:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo /opt/nginx/sbin/nginx\n")))),Object(i.b)("p",null,"And that's it! You should be all set. Use your new server to register using Standard Notes."),Object(i.b)("h2",{id:"maintenance"},"Maintenance"),Object(i.b)("p",null,"Some tips on maintenance:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you modify your nginx conf file, you need to reload nginx for changes to take effect:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo /opt/nginx/sbin/nginx -s reload\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Your HTTPS cert expires after about 3 months. You can renew it by running the LetsEncrypt wizard step from above.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You should consider using Amazon RDS for your database instead of a local MySQL server. RDS will take care of backups, and may be more performant.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To change which database the Standard Notes app connects to, you can edit the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file in ",Object(i.b)("inlineCode",{parentName:"p"},"~/syncing-server/.env"),"."))),Object(i.b)("p",null,"This server was created using the instructions available here: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/standardnotes/syncing-server/wiki/Deploying-a-private-Standard-File-server-with-Amazon-EC2-and-Nginx"}),"Deploying a private Standard Notes server with Amazon EC2 and Nginx"),". Consult this guide if you'd like to customize any part of the instance."))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);