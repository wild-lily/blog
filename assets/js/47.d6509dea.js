(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{320:function(e,t,n){"use strict";n.r(t);var r=n(14),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("下载源码")])]),e._v(" "),t("p",[e._v("git clone https://github.com/vuejs/vue.git  或者"),t("a",{attrs:{href:"https://github.com/vuejs/vue/tree/dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("zip"),t("OutboundLink")],1)]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("npm i")])]),e._v(" "),t("li",[t("p",[e._v("在 package.json -> scripts 中的 dev 命令中添加 --sourcemap，这样就可以在浏览器中调试源码时查看当前代码在源码中的位置。")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "scripts": {\n    "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev"\n  }\n}\n')])])]),t("p",[e._v("4.npm run dev\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/292785/1635496174575-0b6ff95c-605d-4157-9d2c-42f5cd1771bf.png#clientId=u22b003c3-5731-4&from=paste&height=182&id=bHX2k&name=image.png&originHeight=182&originWidth=727&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25838&status=done&style=none&taskId=ua303496f-035d-4fdf-be69-c17abaa93a3&title=&width=727",alt:"image.png"}})]),e._v(" "),t("h1",{attrs:{id:"源码目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码目录结构"}},[e._v("#")]),e._v(" 源码目录结构")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── benchmarks                  性能、基准测试\n├── dist                        构建打包的输出目录\n├── examples                    案例目录\n├── flow                        flow 语法的类型声明\n├── packages                    一些额外的包，比如：负责服务端渲染的包 vue-server-renderer、配合 vue-loader 使用的的 vue-template-compiler，还有 weex 相关的\n│   ├── vue-server-renderer\n│   ├── vue-template-compiler\n│   ├── weex-template-compiler\n│   └── weex-vue-framework\n├── scripts                     所有的配置文件的存放位置，比如 rollup 的配置文件\n├── src                         vue 源码目录\n│   ├── compiler                编译器\n│   ├── core                    运行时的核心包\n│   │   ├── components          全局组件，比如 keep-alive\n│   │   ├── config.js           一些默认配置项\n│   │   ├── global-api          全局 API，比如熟悉的：Vue.use()、Vue.component() 等\n│   │   ├── instance            Vue 实例相关的，比如 Vue 构造函数就在这个目录下\n│   │   ├── observer            响应式原理\n│   │   ├── util                工具方法\n│   │   └── vdom                虚拟 DOM 相关，比如熟悉的 patch 算法就在这儿\n│   ├── platforms               平台相关的编译器代码\n│   │   ├── web\n│   │   └── weex\n│   ├── server                  服务端渲染相关\n├── test                        测试目录\n├── types                       TS 类型声明\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);