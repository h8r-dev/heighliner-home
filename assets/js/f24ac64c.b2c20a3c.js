"use strict";(self.webpackChunkheighliner_home=self.webpackChunkheighliner_home||[]).push([[5685],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={title:"Installation",sidebar_position:1},c=void 0,s={unversionedId:"getting_started/installation",id:"getting_started/installation",title:"Installation",description:"Requirements:",source:"@site/docs/02-getting_started/installation.md",sourceDirName:"02-getting_started",slug:"/getting_started/installation",permalink:"/docs/getting_started/installation",editUrl:"https://github.com/h8r-dev/heighliner-website/docs/02-getting_started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/overview/concepts"},next:{title:"First App",permalink:"/docs/getting_started/first_app"}},u={},p=[{value:"1. Install <code>hln</code> CLI",id:"1-install-hln-cli",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installed ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," command-line tool."),(0,o.kt)("li",{parentName:"ul"},"Have a ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"kubeconfig")," file and set ",(0,o.kt)("inlineCode",{parentName:"li"},"KUBECONFIG")," env (default location is ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),").")),(0,o.kt)("h2",{id:"1-install-hln-cli"},"1. Install ",(0,o.kt)("inlineCode",{parentName:"h2"},"hln")," CLI"))}d.isMDXComponent=!0}}]);