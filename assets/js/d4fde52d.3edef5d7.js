"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[533],{2877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const s={sidebar_position:6},r="Redis",a={id:"Cache Configuration/Redis",title:"Redis",description:"Description",source:"@site/docs/Cache Configuration/Redis.md",sourceDirName:"Cache Configuration",slug:"/Cache Configuration/Redis",permalink:"/Cache Configuration/Redis",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cache Configuration/Redis.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Text-Base Captcha Configuration",permalink:"/text-base captcha configuration"},next:{title:"In Memory",permalink:"/Cache Configuration/In Memory"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"redis",children:"Redis"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"For distributed systems and architectures such as microservices, this library supports Redis and you need to configure it according to the code samples below. Please note that you cannot use the in-memory cache model simultaneously with Redis in your system."}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'\nbuilder.Services.AddBabyCaptcha(babyOption =>\n{\n\n    babyOption.CacheConfiguration.UseRedis(option =>\n    {\n        option.Host = "Redis_Host_address";\n        option.Port = 6379;  //Redis Server Port\n        option.Password = "Redis_Server_Password";\n        option.Key = "Custom_Name_for_Cache";\n        option.CacheExpireTime = TimeSpan.FromMinutes(5);\n        option.AbortOnConnectFail = false;\n        option.Ssl = false;\n    });\n});\n\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);