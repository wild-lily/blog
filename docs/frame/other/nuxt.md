# 手机端调试
mac获取IPV4 
ipconfig getifaddr en0
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1651561270979-b7dd39ab-a557-468d-af38-345556854abc.png#clientId=u3edb182b-eea9-4&from=paste&height=470&id=uf9d479ab&name=image.png&originHeight=940&originWidth=1434&originalType=binary&ratio=1&rotation=0&showTitle=false&size=130905&status=done&style=none&taskId=u3e056f62-422d-4eed-a2cf-fb87be77197&title=&width=717)
# 
# ssr部署
[https://wenku.baidu.com/view/51d2443cff4ffe4733687e21af45b307e871f98c.html](https://wenku.baidu.com/view/51d2443cff4ffe4733687e21af45b307e871f98c.html)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1650622262276-94ac0226-9447-4014-b115-a2fba466c57e.png#clientId=uc0ebab56-7fa7-4&from=paste&height=214&id=ube6316f3&name=image.png&originHeight=214&originWidth=1124&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81040&status=done&style=none&taskId=u9b609975-586c-4b18-9878-9814f4bd70e&title=&width=1124)
# _fetch或者asyncData这2个方法在layouts和components中是失效的_
# Nuxt 出现 RangeError Maximum call stack size exceeded
经过排查发现问题是，components引入的组件配置名称的时候，[Component](https://so.csdn.net/so/search?q=Component&spm=1001.2101.3001.7020)的名字和vue文件的name名字重复，就会出现栈溢出的 error
### methods中axios跨域
注：配置的api前缀只支持asyncData 里的请求
npm i @nuxtjs/axios -D
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1650506382957-b192af5b-083f-4afe-bf98-d0bf157eeb02.png#clientId=ue971133e-f02d-4&from=paste&height=734&id=uaede373c&name=image.png&originHeight=734&originWidth=1656&originalType=binary&ratio=1&rotation=0&showTitle=false&size=216217&status=done&style=none&taskId=u455d611c-3b56-47bb-972a-8fb07fd8a94&title=&width=1656)

### 动态绑定class失败   window.addEventListener
### ![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1650278973042-90874029-5db9-4b60-b6d5-ab1808f1c08e.png#clientId=u00b6b9fb-fe0c-4&from=paste&height=1350&id=u625acf6e&name=image.png&originHeight=1350&originWidth=1338&originalType=binary&ratio=1&rotation=0&showTitle=false&size=520647&status=done&style=none&taskId=u6062cf3c-aba1-44b2-8664-03dc17ea778&title=&width=1338)
### 根据github nuxt上的 issue第1552条 提示，要将 v-if 改为 v-show 语法。
### ![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1650273585315-e9750325-8c8b-4c03-8c53-5e3b92e9dcde.png#clientId=ub57f7d44-3988-4&from=paste&height=324&id=ua80a928f&name=image.png&originHeight=324&originWidth=3508&originalType=binary&ratio=1&rotation=0&showTitle=false&size=303199&status=done&style=none&taskId=uaa1b2d5a-f022-46b2-be9d-4d468ae3c28&title=&width=3508)img src不显示
**解决方法1：
**把图片存在服务器，使用网络路径，
**解决方法2：**
使用require和相对路径引用图片
{ src: require("../static/images/1.png") }
### element自定义主题 不推荐在sass中使用除法运算符/
: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.
在 calc() 之外使用 / 进行除法已被弃用，并将在 Dart Sass 2.0.0 中删除。
[https://stackoverflow.com/questions/67631879/nuxtjs-vuetify-throwing-lots-of-using-for-division-is-deprecated-and-will-be](https://stackoverflow.com/questions/67631879/nuxtjs-vuetify-throwing-lots-of-using-for-division-is-deprecated-and-will-be)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1647319750522-d01ba091-e700-42da-9077-25c72d855687.png#clientId=u1bad42e8-d29d-4&from=paste&height=611&id=u5d842c30&name=image.png&originHeight=1222&originWidth=1164&originalType=binary&ratio=1&rotation=0&showTitle=false&size=407282&status=done&style=none&taskId=u208d4e70-7e7e-4889-9ac0-be5ee796190&title=&width=582)

### sass-loader版本问题

![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1647318064293-163619f8-1ee8-4b83-8c9a-3034a595ce95.png#clientId=uc84be5f8-8167-4&from=paste&height=370&id=u93e7e41a&name=image.png&originHeight=740&originWidth=1386&originalType=binary&ratio=1&rotation=0&showTitle=false&size=88052&status=done&style=none&taskId=uc3eab07b-0447-4d3a-a4f6-8ce7efe2b32&title=&width=693)
sass-loader > 10 不支持vue2.0
[https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function](https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1647318736729-bc0d9e34-c8e1-494f-9194-c22d688ea792.png#clientId=uc84be5f8-8167-4&from=paste&height=269&id=u255c304b&name=image.png&originHeight=538&originWidth=1576&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90234&status=done&style=none&taskId=uc57d7419-ed21-4d9f-8320-f864b8ce680&title=&width=788)
### element样式穿透
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1647318483727-ca16d9a8-ec79-46fe-ae95-3489e00e6bb9.png#clientId=uc84be5f8-8167-4&from=paste&height=70&id=u5445dd54&name=image.png&originHeight=140&originWidth=1492&originalType=binary&ratio=1&rotation=0&showTitle=false&size=132993&status=done&style=none&taskId=u03d8c626-d9dd-4376-90a8-05474b8acdc&title=&width=746)
于是我尝试用 **::v-deep** 替换 /deep/ ，成功解决了问题。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1647318413985-bbc04f93-dc8a-4cd9-96ee-9f0f89dc9559.png#clientId=uc84be5f8-8167-4&from=paste&height=178&id=ud575ce30&name=image.png&originHeight=228&originWidth=730&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44525&status=done&style=none&taskId=uf2f1f03b-e8de-485c-90da-82a5beb59cb&title=&width=570)
### [document is not define](https://stackoverflow.com/questions/46058544/document-is-not-defined-in-nuxt-js)d 
### 由于nuxt.js会在服务端渲染页面，而服务端并没有window或documen
[https://stackoverflow.com/questions/46058544/document-is-not-defined-in-nuxt-js](https://stackoverflow.com/questions/46058544/document-is-not-defined-in-nuxt-js)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1650453007623-4c33d334-7bca-4e84-a17e-623bc36c025a.png#clientId=u75d33a12-5762-4&from=paste&height=1314&id=ub5da26aa&name=image.png&originHeight=1314&originWidth=1612&originalType=binary&ratio=1&rotation=0&showTitle=false&size=587069&status=done&style=none&taskId=ud3975e5e-6f81-49ad-9442-e2e7838f646&title=&width=1612)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1647318629137-171ec8a4-f4cd-472a-a6a7-14e475a90a39.png#clientId=uc84be5f8-8167-4&from=paste&height=387&id=uf5c63ff9&name=image.png&originHeight=774&originWidth=1214&originalType=binary&ratio=1&rotation=0&showTitle=false&size=285316&status=done&style=none&taskId=uc8800df3-081b-4b60-b2c8-518144c4d02&title=&width=607)
