##### 面向c端的项目一定要做ssr
### 传统的vue纯浏览器渲染
npm run build 打包 把打包的东西放到服务器上 整个的生成是通过在**浏览器执行js **
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1636943800402-17b66feb-fd06-4d1a-8ef0-304733271d6c.png#clientId=u85b1f32b-b9e4-4&from=paste&height=1116&id=ud5687010&name=image.png&originHeight=1116&originWidth=2208&originalType=binary&ratio=1&rotation=0&showTitle=false&size=424226&status=done&style=none&taskId=ueab5097e-b425-4a3f-ab11-a920fd8b1fa&title=&width=2208)
### ssr服务端渲染 
##### 在服务端执行js代码 场景：面向C端的项目   SEO  有利于搜索引擎优化  
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1637293019384-fd2d654b-c2ce-4274-a197-01bcec0c2756.png#clientId=ua55684b8-a44e-4&from=paste&height=1036&id=u685fc1d5&name=image.png&originHeight=1036&originWidth=1992&originalType=binary&ratio=1&rotation=0&showTitle=false&size=269062&status=done&style=none&taskId=u059b8448-9c80-4dc6-b36a-cd4d82495e8&title=&width=1992)

![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1636945671674-30427aec-6902-4782-ab5a-373dfd009830.png#clientId=u85b1f32b-b9e4-4&from=paste&height=1092&id=u580c42c6&name=image.png&originHeight=1092&originWidth=2078&originalType=binary&ratio=1&rotation=0&showTitle=false&size=401001&status=done&style=none&taskId=ua3b7a417-0780-4bb6-bc3a-c5ae8204c7e&title=&width=2078)

### 基础ssr的实现
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1636963910562-d14dacc8-2b4a-474e-93e2-962cf940b7e5.png#clientId=u53b04b67-98b8-4&from=paste&height=495&id=u2d2b218e&name=image.png&originHeight=495&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=263596&status=done&style=none&taskId=ua0ccd4a3-cab2-4bf0-a09a-4ebb5027c2c&title=&width=1080)
把生成的 vue实例转成html  [Vue-Server-Renderer](https://www.cnblogs.com/pengdt/p/12304026.html)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1636946283437-747a615a-6489-467a-a4a4-7211cd8ac17d.png#clientId=u53b04b67-98b8-4&from=paste&height=674&id=u6eba3481&name=image.png&originHeight=674&originWidth=1406&originalType=binary&ratio=1&rotation=0&showTitle=false&size=593889&status=done&style=none&taskId=u2f6dfde2-cdfb-44bf-a99d-4b714963311&title=&width=1406)
涉及的文件修改如下  
#### 1. main.js src/main.js
 每一次访问都必须要创建一个新的实例 所以要写成一个方法 每次访问都调用createApp
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1636961103956-850eac35-77f3-4414-beb3-89586dd606e4.png#clientId=u53b04b67-98b8-4&from=paste&height=622&id=ub1d7e577&name=image.png&originHeight=622&originWidth=796&originalType=binary&ratio=1&rotation=0&showTitle=false&size=452495&status=done&style=none&taskId=uac4f44da-917f-42ae-ae85-3d0acc66f89&title=&width=796)
#### 2. router src/router/index.js
##### ⚠️ 路由只能是history模式
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1636947137537-bdf1db66-d02b-4772-8d71-fd4253206f2e.png#clientId=u53b04b67-98b8-4&from=paste&height=703&id=ub53f80e4&name=image.png&originHeight=972&originWidth=906&originalType=binary&ratio=1&rotation=0&showTitle=false&size=532522&status=done&style=none&taskId=u5679f3e9-2fe3-4622-8d66-f3f635e84f0&title=&width=655)
#### 3. serve.js  src/client.js
 生成vue实例
![截屏2021-11-15 下午3.50.15.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1636962629712-4a129522-b013-453a-9d65-14ebb0bebcab.png#clientId=u53b04b67-98b8-4&from=drop&id=ucbbc61ac&name=%E6%88%AA%E5%B1%8F2021-11-15%20%E4%B8%8B%E5%8D%883.50.15.png&originHeight=518&originWidth=936&originalType=binary&ratio=1&rotation=0&showTitle=false&size=330728&status=done&style=none&taskId=u0f6d1c3d-d6cd-42f1-84d5-477a007bda5&title=)
#### 4. 客户端激活  src/client.js
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1636962694217-dfcb049d-459b-4164-b0f8-a3205f11bdf7.png#clientId=u53b04b67-98b8-4&from=paste&height=376&id=u4c8305bd&name=image.png&originHeight=376&originWidth=896&originalType=binary&ratio=1&rotation=0&showTitle=false&size=219793&status=done&style=none&taskId=u4aeb0231-ee11-4f51-b162-f3120ea5be3&title=&width=896)
#### 5. 打包 
webpack.base.conf.js
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1637128199972-c9d12b3d-8d3b-4f1b-b93d-a1519d3cd2cd.png#clientId=u59c3d412-293d-4&from=paste&height=492&id=u72374252&name=image.png&originHeight=492&originWidth=850&originalType=binary&ratio=1&rotation=0&showTitle=false&size=328300&status=done&style=none&taskId=u2fa8121a-9696-47fd-af03-4efd53bb499&title=&width=850)

客户端打包配置文件 build/webpack.build.conf.js
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1637128356665-e8a89d42-7683-4d30-841e-3591e14c979e.png#clientId=u59c3d412-293d-4&from=paste&height=394&id=u37c76d3e&name=image.png&originHeight=394&originWidth=889&originalType=binary&ratio=1&rotation=0&showTitle=false&size=232446&status=done&style=none&taskId=ud99cd7bc-821f-4a9f-abae-9215812566b&title=&width=889)
服务端打包配置文件
webpack默认的打包，是在以浏览区上面跑为目标的 指定node环境的规范commonjs
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1637128516413-cf3620bd-bfc7-48f7-baa3-3e133c14be54.png#clientId=u59c3d412-293d-4&from=paste&height=448&id=u06997bf6&name=image.png&originHeight=448&originWidth=885&originalType=binary&ratio=1&rotation=0&showTitle=false&size=282388&status=done&style=none&taskId=u815327f4-e5ac-4c78-b321-3870003aa7e&title=&width=885)
package.json
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1637128543684-0ff33175-24a0-497f-bf18-99bbebfc6064.png#clientId=u59c3d412-293d-4&from=paste&height=502&id=u75737ab8&name=image.png&originHeight=502&originWidth=946&originalType=binary&ratio=1&rotation=0&showTitle=false&size=358058&status=done&style=none&taskId=u5dc18888-a4fe-4375-a285-a7578365b7c&title=&width=946)
#### 6. server.js 
##### 服务端打包入口  要在服务器上跑的
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1637129834748-79a89aa4-8568-4a07-94b1-03d736d9060e.png#clientId=u79024e49-f0fd-4&from=paste&height=549&id=u1a59008d&name=image.png&originHeight=549&originWidth=1022&originalType=binary&ratio=1&rotation=0&showTitle=false&size=398259&status=done&style=none&taskId=u85afe642-e1f7-406f-8982-c35c44b9e63&title=&width=1022)

7. index.ssr.html    <div id="app"></div>去掉 <div id="app"></div>加在src/App.vue里

![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1637129351895-f7817367-aa84-4964-a78f-9209f0c8d9da.png#clientId=u59c3d412-293d-4&from=paste&height=580&id=u1105e38c&name=image.png&originHeight=580&originWidth=1049&originalType=binary&ratio=1&rotation=0&showTitle=false&size=227893&status=done&style=none&taskId=u78d49121-a424-4cec-92c5-c477d146406&title=&width=1049)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/292785/1637130069102-408f577e-c721-4063-a360-e6c772affd5b.png#clientId=u79024e49-f0fd-4&from=paste&height=467&id=u46dd16fc&name=image.png&originHeight=467&originWidth=852&originalType=binary&ratio=1&rotation=0&showTitle=false&size=217822&status=done&style=none&taskId=uef60f74a-76ac-49f4-ab4e-6117c498711&title=&width=852)
### NUXT 
Nuxt.js 是一个基于 Vue.js 的通用应用框架，一个用于Vue.js 开发SSR应用的一站式解决方案。
[https://zhuanlan.zhihu.com/p/89484871](https://zhuanlan.zhihu.com/p/89484871)
