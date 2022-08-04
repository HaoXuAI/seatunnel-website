"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[48747],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,g=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(g,u(u({ref:t},c),{},{components:n})):r.createElement(g,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3257:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],i={},l="Output plugin",p={unversionedId:"configuration/output-plugin",id:"version-1.x/configuration/output-plugin",title:"Output plugin",description:"Output plugin common parameters",source:"@site/versioned_docs/version-1.x/configuration/output-plugin.md",sourceDirName:"configuration",slug:"/configuration/output-plugin",permalink:"/docs/1.x/configuration/output-plugin",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/output-plugin.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Output-Plugin",permalink:"/docs/1.x/category/output"},next:{title:"Alluxio",permalink:"/docs/1.x/configuration/output-plugins/Alluxio"}},c={},s=[{value:"Output plugin common parameters",id:"output-plugin-common-parameters",level:3},{value:"source_table_name string",id:"source_table_name-string",level:5},{value:"Usage example",id:"usage-example",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"output-plugin"},"Output plugin"),(0,o.kt)("h3",{id:"output-plugin-common-parameters"},"Output plugin common parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#source_table_name-string"},"source_table_name")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h5",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plugin processes the dataset output by the previous plugin in the configuration file;"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin processes the dataset corresponding to this parameter."),(0,o.kt)("h3",{id:"usage-example"},"Usage example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'stdout {\n     source_table_name = "view_table_2"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Output a temporary table named ",(0,o.kt)("inlineCode",{parentName:"p"},"view_table_2"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"stdout {}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not configured, output the processing result of the last ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," plugin in the configuration file")))}f.isMDXComponent=!0}}]);