(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{316:function(a,t,n){"use strict";n.r(t);var s=n(14),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"新建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建项目"}},[a._v("#")]),a._v(" 新建项目")]),a._v(" "),t("h3",{attrs:{id:"建立目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立目录"}},[a._v("#")]),a._v(" 建立目录")]),a._v(" "),t("h3",{attrs:{id:"初始化git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化git"}},[a._v("#")]),a._v(" 初始化git")]),a._v(" "),t("p",[a._v("在npm项目根目录运行终端命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git init .\n")])])]),t("h3",{attrs:{id:"编写package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写package-json"}},[a._v("#")]),a._v(" 编写package.json")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm init --yes\n")])])]),t("p",[t("strong",[a._v("package.json重点字段说明：")]),a._v("\nname 即npm项目包名，发布到npm时就是取的这个name名，你自己取个语义化的名字，和已有的npm库不能重复；\nversion 版本号，更新npm包时必须修改一个更高的版本号后才能成功发布到npm，版本号最好遵循npm版本管理规范；\ndescription 包的描述，发布到npm后你搜索该npm包时，在搜索联想列表里会显示在包名的下方，作为描述说明；\nmain 入口文件路径，在你通过import或require引用该npm包时就是引入的该路径的文件；")]),a._v(" "),t("h3",{attrs:{id:"添加license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加license"}},[a._v("#")]),a._v(" 添加LICENSE")]),a._v(" "),t("p",[a._v("LICENSE即开源协议文件，这里使用MIT协议类型。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('MIT License\n\nCopyright (c) 2020 zhangfuling\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n')])])]),t("ul",[t("li",[a._v("Copyright © 2020 zhangfuling 这一行，2020是年份，自行修改为当前年份，zhangfuling是作者姓名，改成你自己的。")]),a._v(" "),t("li",[a._v("package.json里修改license字段值为MIT")])]),a._v(" "),t("h3",{attrs:{id:"配置npm上传白名单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置npm上传白名单"}},[a._v("#")]),a._v(" 配置npm上传白名单")]),a._v(" "),t("p",[a._v("配置npm上传的文件白名单，可以指定哪些文件上传哪些不上传，\n比如我这里不想直接发布src里的index.js源码，而是发布dist目录下的index.min.js（index.js压缩后的文件），按以下配置：\n在package.json里，修改main字段的路径指向dist/index.min.js：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"main": "dist/index.min.js"\n')])])]),t("p",[a._v("添加files字段来配置要上传npm的文件白名单目录：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"files": [\n  "dist"\n]\n')])])]),t("p",[a._v("这样dist文件夹会上传npm，而src文件夹就不会上传，想保存src源码就上传项目到git远程仓库就行，这样git仓库保存了完整项目，而npm只包含部分项目文件。\n有些文件是必定会上传的，无法控制，例如package.json、LICENSE、README.md等等。\n当然了，也可以配置npm上传黑名单，通过.npmignore配置，具体不再赘述。")]),a._v(" "),t("h3",{attrs:{id:"关联github地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关联github地址"}},[a._v("#")]),a._v(" 关联github地址")]),a._v(" "),t("p",[a._v("如果想把npm包和项目github地址关联起来，首先项目需要先上传到github上，然后package.json添加repository字段")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"repository": {\n  "type": "git",\n  "url": "git://github.com/neohan666/wxmp-rsa.git"\n}\n')])])]),t("ul",[t("li",[a._v("url后的地址格式，就是项目git上的https完整地址把https换成git")]),a._v(" "),t("li",[a._v("关联并发布npm后，在npm官网的该npm包页面右边会显示有github链接，点击可以跳转到github项目地址。")])]),a._v(" "),t("h3",{attrs:{id:"完整package-json内容和项目目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整package-json内容和项目目录"}},[a._v("#")]),a._v(" 完整package.json内容和项目目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n  "name": "wxmp-rsa",\n  "version": "1.0.0",\n  "description": "兼容微信小程序的rsa加解密库，支持超长文本和中文字符",\n  "author": "neohan",\n  "main": "dist/index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": ["wxmp", "rsa", "jsencrypt", "js", "long"],\n  "license": "MIT",\n  "files": [\n    "dist"\n  ],\n  "repository": {\n    "type": "git",\n    "url": "git://github.com/xxx/xxxx.git"\n  }\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/292785/1654762576220-ebfb1f80-d712-40a0-b72d-bfd8ba615d11.png#clientId=ue306e734-9531-4&from=paste&height=199&id=u6053376a&name=image.png&originHeight=199&originWidth=191&originalType=binary&ratio=1&rotation=0&showTitle=false&size=10479&status=done&style=none&taskId=ub635b870-6084-429d-a098-02326c571b2&title=&width=191",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"发布npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布npm"}},[a._v("#")]),a._v(" 发布npm")]),a._v(" "),t("h3",{attrs:{id:"npm注册登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm注册登录"}},[a._v("#")]),a._v(" npm注册登录")]),a._v(" "),t("ul",[t("li",[a._v("先去npm官网注册账号：https://www.npmjs.com/，或者通过终端命令注册： npm adduser")]),a._v(" "),t("li",[a._v("终端命令，登录npm账号 npm login")])]),a._v(" "),t("h3",{attrs:{id:"调试npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试npm"}},[a._v("#")]),a._v(" 调试npm")]),a._v(" "),t("p",[a._v("如果不需要调试，可以跳过调试步骤，直接发布。\nnpm项目根目录运行终端命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm link\n")])])]),t("p",[a._v("运行后即将该npm包放进了本地npm缓存里，\n如果要在其他项目（例如项目名叫aaa）里引用调试，只需要在在aaa里运行命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm link 包名\n")])])]),t("p",[a._v("这样就在aaa里建立了包名到npm包的链接关联，通过常规方式引入就可以测试npm包了。\n如果要取消项目aaa与npm包的关联，在aaa项目下运行命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm unlink 包名\n")])])]),t("p",[a._v("为了防止本地调试npm与发布后的npm混淆冲突，在调试完成后一定记得手动取消项目关联。")]),a._v(" "),t("h3",{attrs:{id:"发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[a._v("#")]),a._v(" 发布")]),a._v(" "),t("p",[a._v("在npm包项目根目录运行命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm publish\n")])])]),t("p",[a._v("运行完后，稍等片刻，在npm官网就可以搜索到发布的该npm包了。")]),a._v(" "),t("ul",[t("li",[a._v("因为很多人把npm源都切到了淘宝源，毕竟速度快，但是发布npm前需要先恢复到npm官方源上，否则发布失败，切换命令：")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 配置npm全局使用淘宝镜像源\nnpm config set registry https://registry.npm.taobao.org\n// 配置npm全局恢复官方镜像源\nnpm config set registry https://registry.npmjs.org\n")])])]),t("p",[a._v("或者呢，在项目根目录新建.npmrc文件，写入以下内容即可：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("registry=https://registry.npmjs.org\n")])])]),t("p",[a._v("这样，在此项目下运行npm命令时，默认使用的仓库都是配置官方源，不影响其他项目。\n如果要发布一个beta包，运行命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm publish --tag beta\n")])])]),t("ul",[t("li",[a._v("其实就是发布了一个标签，标签名可以自定义，例如 alpha next。")])]),a._v(" "),t("h3",{attrs:{id:"成员权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成员权限"}},[a._v("#")]),a._v(" 成员权限")]),a._v(" "),t("p",[a._v("发布npm是用自己的账号发布的，默认只有自己能更新包，如果想要给其他人更新npm包的权限，按以下方式：\n打开npm包所在页面，点击右方settings栏，然后在Invite maintainer模块，输入要加入权限的npm账号的username，然后点击invite就加入，下方Maintainers就是有权限的npm项目成员列表。")]),a._v(" "),t("h3",{attrs:{id:"作废和删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作废和删除"}},[a._v("#")]),a._v(" 作废和删除")]),a._v(" "),t("p",[a._v("（1）作废npm包，就是这里的 Deprecate package，就是给npm包打上已作废的标签，表示不再更新维护。")]),a._v(" "),t("p",[a._v("在npm包页面展示（示例：@babel/polyfill）以及npm i下载时会有提示。")]),a._v(" "),t("p",[a._v("也可以通过命令行操作："),t("code",[a._v('npm deprecate <package-name> "<message>"')]),a._v("\n（2）"),t("strong",[a._v("删除已发布的包")]),a._v("，这是非常危险的行为，除非你确定这个包没有其他人使用。\nnpm官网的删除政策这几年一直在变，我记得之前是不允许删除，现在又可以了，但有一些限制，需满足以下几点才能删除：")]),a._v(" "),t("ul",[t("li",[a._v("没有其他npm包依赖此包")]),a._v(" "),t("li",[a._v("上一周的npm下载量不超过300")]),a._v(" "),t("li",[a._v("npm包成员只存在一个拥有者或管理员\n具体可以查看npm官网政策")])]),a._v(" "),t("h2",{attrs:{id:"注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[a._v("#")]),a._v(" 注意点")]),a._v(" "),t("ul",[t("li",[a._v("发布到npm上就意味着代码的开源，如果是有公司业务相关的代码就不建议发到npm上，最好是公司自建一个私有仓库来使用。")]),a._v(" "),t("li",[a._v("npm淘宝源是每隔十分钟和npm官方源同步一次，所以刚发布npm后可能要等几分钟后淘宝源才会更新，如果发布后就立马切换回淘宝源再更新包可能更的还是老版本。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);