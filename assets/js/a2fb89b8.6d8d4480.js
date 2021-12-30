"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3076],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9494:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s="\u4e3a seatunnel \u8d21\u732e\u4ee3\u7801",u={unversionedId:"contribution/contribution",id:"contribution/contribution",title:"\u4e3a seatunnel \u8d21\u732e\u4ee3\u7801",description:"Coding Style",source:"@site/docs/contribution/contribution.md",sourceDirName:"contribution",slug:"/contribution/",permalink:"/docs/contribution/",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/contribution/contribution.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/docs/roadmap/"}},p=[{value:"Coding Style",id:"coding-style",children:[],level:2},{value:"\u4ee3\u7801/\u6587\u6863\u8d21\u732e\u6d41\u7a0b",id:"\u4ee3\u7801\u6587\u6863\u8d21\u732e\u6d41\u7a0b",children:[],level:2},{value:"\u81ea\u52a8\u5316Build\u4e0eTest",id:"\u81ea\u52a8\u5316build\u4e0etest",children:[],level:2},{value:"\u56fd\u5185sbt\u52a0\u901f",id:"\u56fd\u5185sbt\u52a0\u901f",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e3a-seatunnel-\u8d21\u732e\u4ee3\u7801"},"\u4e3a seatunnel \u8d21\u732e\u4ee3\u7801"),(0,l.kt)("h2",{id:"coding-style"},"Coding Style"),(0,l.kt)("p",null,"Scala Coding Style \u53c2\u8003:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://docs.scala-lang.org/style/"},"http://docs.scala-lang.org/style/")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/databricks/scala-style-guide"},"https://github.com/databricks/scala-style-guide")),(0,l.kt)("p",null,"\u4f7f\u7528sbt\u63d2\u4ef6",(0,l.kt)("a",{parentName:"p",href:"http://www.scalastyle.org/"},"scalastyle"),"\u4f5c\u4e3acoding style\u68c0\u67e5\u5de5\u5177\uff1b\u65e0\u6cd5\u901a\u8fc7coding style\u68c0\u67e5\u7684\u4ee3\u7801\u65e0\u6cd5\u63d0\u4ea4."),(0,l.kt)("p",null,"\u901a\u8fc7scalafmt\u5229\u7528",(0,l.kt)("a",{parentName:"p",href:"http://scalameta.org/scalafmt/#IntelliJ"},"Cli\u6216\u8005IntelliJ Idea"),"\u81ea\u52a8\u5b8c\u6210scala\u4ee3\u7801\u7684\u683c\u5f0f\u5316\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528scalafmt\u7684Idea\u63d2\u4ef6\uff0c\u8bf7\u5728\u63d2\u4ef6\u5b89\u88c5\u5b8c\u540e\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"\u6587\u4ef6\u4fdd\u5b58\u65f6\u81ea\u52a8\u66f4\u6b63\u4ee3\u7801\u683c\u5f0f"),',\u65b9\u6cd5 "Preferences" -> "Tools" -> "Scalafmt", \u52fe\u9009"format on file save"'),(0,l.kt)("h2",{id:"\u4ee3\u7801\u6587\u6863\u8d21\u732e\u6d41\u7a0b"},"\u4ee3\u7801/\u6587\u6863\u8d21\u732e\u6d41\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Interesting Lab\u6210\u5458 :")),(0,l.kt)("p",null,"(1) \u4ece master\u4e0a checkout \u51fa\u65b0\u5206\u652f\uff0c\u5206\u652f\u540d\u79f0\u8981\u6c42\u65b0\u529f\u80fd:\n",(0,l.kt)("inlineCode",{parentName:"p"},"<username>"),".fea.",(0,l.kt)("inlineCode",{parentName:"p"},"<feature_name>"),"\uff0c\u4fee\u590dbug: ",(0,l.kt)("inlineCode",{parentName:"p"},"<username>"),".fixbug.",(0,l.kt)("inlineCode",{parentName:"p"},"<bugname_or_issue_id>"),", \u6587\u6863\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"<username>"),".doc.",(0,l.kt)("inlineCode",{parentName:"p"},"<doc_name>")),(0,l.kt)("p",null,"(2) \u5f00\u53d1, \u63d0\u4ea4commit"),(0,l.kt)("p",null,'(3) \u5728github\u7684\u9879\u76ee\u4e3b\u9875\uff0c\u9009\u4e2d\u4f60\u7684\u5206\u652f\uff0c\u70b9"new pull request"\uff0c\u63d0\u4ea4pull request'),(0,l.kt)("p",null,"(3) \u7ecf\u81f3\u5c111\u4e2a\u5176\u4ed6\u6210\u5458\u5ba1\u6838\u901a\u8fc7\uff0c\u5e76\u4e14travis-ci\u7684build\u5168\u90e8\u901a\u8fc7\u540e\uff0c\u7531\u5ba1\u6838\u4ebamerge\u5230master\u5206\u652f\u4e2d."),(0,l.kt)("p",null,"(4) \u5220\u9664\u4f60\u7684\u5206\u652f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u975eInteresting Lab \u6210\u5458(\u5e38\u89c1\u7684github\u534f\u4f5c\u6d41\u7a0b):")),(0,l.kt)("p",null,"(1) \u5728seatunnel\u4e3b\u9875 fork \u8fd9\u4e2a\u9879\u76ee ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel"},"https://github.com/InterestingLab/seatunnel")),(0,l.kt)("p",null,"(2) \u5f00\u53d1"),(0,l.kt)("p",null,"(3) \u63d0\u4ea4commit"),(0,l.kt)("p",null,'(4) \u5728\u4f60\u81ea\u5df1\u7684\u9879\u76ee\u4e3b\u9875\u4e0a\uff0c\u70b9"new pull request"\uff0c\u63d0\u4ea4pull request'),(0,l.kt)("p",null,"(5) Interesting Lab \u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u4f60\u7684\u8d21\u732e\u5c06\u88ab\u7eb3\u5165\u9879\u76ee\u4ee3\u7801\u4e2d\u3002"),(0,l.kt)("h2",{id:"\u81ea\u52a8\u5316build\u4e0etest"},"\u81ea\u52a8\u5316Build\u4e0eTest"),(0,l.kt)("p",null,"\u6b64\u9879\u76ee\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://travis-ci.org/"},"travis-ci")," \u4f5c\u4e3a\u81ea\u52a8\u5316Build\u5de5\u5177."),(0,l.kt)("p",null,"\u6240\u6709\u5206\u652f\u6bcf\u6b21commit\u6709\u66f4\u65b0\uff0c\u90fd\u4f1a\u89e6\u53d1\u81ea\u52a8\u5316Build\uff0c\u65b0\u7684pull request\u4e5f\u4f1a\u89e6\u53d1\u3002"),(0,l.kt)("h2",{id:"\u56fd\u5185sbt\u52a0\u901f"},"\u56fd\u5185sbt\u52a0\u901f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-textmate"},"\n// \u589e\u52a0\u5168\u5c40 repositories \u914d\u7f6e, \u52a0\u901f\u4f9d\u8d56\u4e0b\u8f7d\n\nvim ~/.sbt/repository\n\n[repositories]\nlocal\naliyun-ivy: http://maven.aliyun.com/nexus/content/groups/public, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]  \naliyun-maven: http://maven.aliyun.com/nexus/content/groups/public\ntypesafe: http://repo.typesafe.com/typesafe/ivy-releases/, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext], bootOnly\ntypesafe2: http://repo.typesafe.com/typesafe/releases/\nsbt-plugin: http://repo.scala-sbt.org/scalasbt/sbt-plugin-releases/\nsonatype: http://oss.sonatype.org/content/repositories/snapshots\nuk_maven: http://uk.maven.org/maven2/\nrepo2: http://repo2.maven.org/maven2/\n\n\n")))}m.isMDXComponent=!0}}]);