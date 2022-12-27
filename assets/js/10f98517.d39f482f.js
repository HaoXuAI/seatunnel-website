"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6864],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74794:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return h}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],s={sidebar_position:7},c="Checkpoint Storage",l={unversionedId:"seatunnel-engine/checkpoint-storage",id:"seatunnel-engine/checkpoint-storage",title:"Checkpoint Storage",description:"Introduction",source:"@site/docs/seatunnel-engine/checkpoint-storage.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/checkpoint-storage",permalink:"/docs/seatunnel-engine/checkpoint-storage",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/checkpoint-storage.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"Run Job With Cluster Mode",permalink:"/docs/seatunnel-engine/cluster-mode"},next:{title:"TCP NetWork",permalink:"/docs/seatunnel-engine/tcp"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Checkpoint Storage",id:"checkpoint-storage-1",level:3},{value:"Checkpoint Storage Configuration",id:"checkpoint-storage-configuration",level:3},{value:"S3",id:"s3",level:4},{value:"HDFS",id:"hdfs",level:4},{value:"LocalFile",id:"localfile",level:4}],d={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checkpoint-storage"},"Checkpoint Storage"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Checkpoint is a fault-tolerant recovery mechanism. This mechanism ensures that when the program is running, it can recover itself even if it suddenly encounters an exception."),(0,a.kt)("h3",{id:"checkpoint-storage-1"},"Checkpoint Storage"),(0,a.kt)("p",null,"Checkpoint Storage is a storage mechanism for storing checkpoint data. "),(0,a.kt)("p",null,"SeaTunnel Engine supports the following checkpoint storage types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HDFS (S3,HDFS,LocalFile)"),(0,a.kt)("li",{parentName:"ul"},"LocalFile (native), (it's deprecated: use Hdfs(LocalFile) instead.")),(0,a.kt)("p",null,"We used the microkernel design pattern to separate the checkpoint storage module from the engine. This allows users to implement their own checkpoint storage modules."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"checkpoint-storage-api")," is the checkpoint storage module API, which defines the interface of the checkpoint storage module."),(0,a.kt)("p",null,"if you want to implement your own checkpoint storage module, you need to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckpointStorage")," and provide the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckpointStorageFactory")," implementation."),(0,a.kt)("h3",{id:"checkpoint-storage-configuration"},"Checkpoint Storage Configuration"),(0,a.kt)("p",null,"The configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel-server")," module is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n    engine:\n        checkpoint:\n            storage:\n                type: hdfs #plugin name of checkpoint storage, we support hdfs(S3, local, hdfs), localfile (native local file) is the default, but this plugin is de\n              # plugin configuration\n                plugin-config: \n                  namespace: #checkpoint storage parent path, the default value is /seatunnel/checkpoint\n                  K1: V1 # plugin other configuration\n                  K2: V2 # plugin other configuration   \n")),(0,a.kt)("h4",{id:"s3"},"S3"),(0,a.kt)("p",null,"S3 base on hdfs-file, so you can refer ",(0,a.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop docs")," to config s3."),(0,a.kt)("p",null,"Except when interacting with public S3 buckets, the S3A client needs the credentials needed to interact with buckets.\nThe client supports multiple authentication mechanisms and can be configured as to which mechanisms to use, and their order of use. Custom implementations of com.amazonaws.auth.AWSCredentialsProvider may also be used.\nif you used SimpleAWSCredentialsProvider (can be obtained from the Amazon Security Token Service), these consist of an access key, a secret key.\nyou can config like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"``` yaml\n\nseatunnel:\n    engine:\n        checkpoint:\n            interval: 6000\n            timeout: 7000\n            max-concurrent: 5\n            tolerable-failure: 2\n            storage:\n                type: hdfs\n                max-retained: 3\n                plugin-config:\n                    storage-type: s3\n                    s3.bucket: your-bucket\n                    fs.s3a.endpoint: your-endpoint\n                    fs.s3a.access-key: your-access-key\n                    fs.s3a.secret-key: your-secret-key\n                    fs.s3a.aws.credentials.provider: org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider\n                    \n\n")),(0,a.kt)("p",null,"if you used ",(0,a.kt)("inlineCode",{parentName:"p"},"InstanceProfileCredentialsProvider"),", this supports use of instance profile credentials if running in an EC2 VM, you could check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html"},"iam-roles-for-amazon-ec2"),".\nyou can config like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      max-concurrent: 5\n      tolerable-failure: 2\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage-type: s3\n          s3.bucket: your-bucket\n          fs.s3a.endpoint: your-endpoint\n          fs.s3a.aws.credentials.provider: org.apache.hadoop.fs.s3a.InstanceProfileCredentialsProvider\n")),(0,a.kt)("p",null,"For additional reading on the Hadoop Credential Provider API see: ",(0,a.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/CredentialProviderAPI.html"},"Credential Provider API"),"."),(0,a.kt)("h4",{id:"hdfs"},"HDFS"),(0,a.kt)("p",null,"if you used HDFS, you can config like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage-type: hdfs\n            fs.defaultFS: hdfs://localhost:9000\n            // if you used kerberos, you can config like this:\n            kerberosPrincipal: your-kerberos-principal\n            kerberosKeytab: your-kerberos-keytab  \n")),(0,a.kt)("h4",{id:"localfile"},"LocalFile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      max-concurrent: 5\n      tolerable-failure: 2\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage-type: hdfs\n          fs.defaultFS: /tmp/ # Ensure that the directory has written permission \n\n")))}h.isMDXComponent=!0}}]);