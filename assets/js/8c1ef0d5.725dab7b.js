"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9618],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2751:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={id:"nextcloud",title:"NextCloud"},c=void 0,l={unversionedId:"configuration/providers/nextcloud",id:"configuration/providers/nextcloud",title:"NextCloud",description:"The Nextcloud provider allows you to authenticate against users in your",source:"@site/docs/configuration/providers/nextcloud.md",sourceDirName:"configuration/providers",slug:"/configuration/providers/nextcloud",permalink:"/oauth2-proxy/docs/next/configuration/providers/nextcloud",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/configuration/providers/nextcloud.md",tags:[],version:"current",frontMatter:{id:"nextcloud",title:"NextCloud"},sidebar:"docs",previous:{title:"Login.gov",permalink:"/oauth2-proxy/docs/next/configuration/providers/login_gov"},next:{title:"DigitalOcean",permalink:"/oauth2-proxy/docs/next/configuration/providers/digitalocean"}},p={},d=[],s={toc:d},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Nextcloud provider allows you to authenticate against users in your\nNextcloud instance."),(0,i.kt)("p",null,"When you are using the Nextcloud provider, you must specify the urls via\nconfiguration, environment variable, or command line argument. Depending\non whether your Nextcloud instance is using pretty urls your urls may be of the\nform ",(0,i.kt)("inlineCode",{parentName:"p"},"/index.php/apps/oauth2/*")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/apps/oauth2/*"),"."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/oauth2.html"},"OAuth2\ndocumentation"),'\nto set up the client id and client secret. Your "Redirection URI" will be\n',(0,i.kt)("inlineCode",{parentName:"p"},"https://internalapp.yourcompany.com/oauth2/callback"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    -provider nextcloud\n    -client-id <from nextcloud admin>\n    -client-secret <from nextcloud admin>\n    -login-url="<your nextcloud url>/index.php/apps/oauth2/authorize"\n    -redeem-url="<your nextcloud url>/index.php/apps/oauth2/api/v1/token"\n    -validate-url="<your nextcloud url>/ocs/v2.php/cloud/user?format=json"\n')),(0,i.kt)("p",null,"Note: in ",(0,i.kt)("em",{parentName:"p"},"all")," cases the validate-url will ",(0,i.kt)("em",{parentName:"p"},"not")," have the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.php"),"."))}m.isMDXComponent=!0}}]);