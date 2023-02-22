![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641881657345-2af4d338-8e88-4879-97e6-609b0d4300c6.png#clientId=uf3281cfa-184b-4&from=paste&height=636&id=u7856fe1c&name=image.png&originHeight=636&originWidth=1662&originalType=binary&ratio=1&rotation=0&showTitle=false&size=245570&status=done&style=none&taskId=u52072bb4-7af7-4328-bfe4-7a59241b23d&title=&width=1662)
- 开放式系统互联模型（Open System Interconnection Model）
- 世界范围内的网络标准概念模型
- osi的努力让互联网协议逐渐走向标准化
### 应用层 Application Layer
提供高级的API

- 定义了网络主机提供的方法和接口（业务协议、高级协议）
- 往往直接对应用户行为
- 列如：HTTP FTP SMTP等

### 展示层 Presentation Layer
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641882219708-74faa635-671e-4b4e-b6da-745d097129de.png#clientId=u15482b6d-41ea-4&from=paste&height=606&id=u8925f3b7&name=image.png&originHeight=606&originWidth=1452&originalType=binary&ratio=1&rotation=0&showTitle=false&size=283454&status=done&style=none&taskId=u40749c74-b792-4a36-a891-38255a988a8&title=&width=1452)
- 也被称作语法层（syntax layer）
- 将application layer中的数据转换为传输格式 保留语义（ 如序列化 加密加密 字符串编码解码等）
- 确保数据发送取出后可以被接受者理解

### 会话层 Session Layer
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641882344283-15f924ea-753c-4678-b68a-0f0aa2734306.png#clientId=u15482b6d-41ea-4&from=paste&height=476&id=u8fb9ded6&name=image.png&originHeight=476&originWidth=1718&originalType=binary&ratio=1&rotation=0&showTitle=false&size=200703&status=done&style=none&taskId=ub93ddf86-b203-4513-9f8f-535ce646c17&title=&width=1718)
- 提供管理会话的方法（open/close/reopen/检查状态等）
- 提供对底层连接断断续续的隐藏 甚至对多种底层流的隐藏（提供数据同步点）

传输层
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641882452561-4c2ed6d2-3a4c-4c34-b5c9-95f09c68ea30.png#clientId=u15482b6d-41ea-4&from=paste&height=1024&id=ue6553033&name=image.png&originHeight=1024&originWidth=1640&originalType=binary&ratio=1&rotation=0&showTitle=false&size=565392&status=done&style=none&taskId=u87fcf2fd-03bb-45fa-82bd-033f19593d8&title=&width=1640)
提供主机到主机的数据通信能力

- 建立连接保证数据封包发送、接收到的顺序一致
- 提供可靠性（发送者知道数据有没有被完整送达）
- 提供流控制（发送者和接受者同步速率）
- 提供多路复用（【多工】 multiplexing 多种信号复用一个信道）

网络层
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641882614201-5a624eee-145f-4ad5-ac47-b3f05211869d.png#clientId=u15482b6d-41ea-4&from=paste&height=510&id=ubec689ca&name=image.png&originHeight=510&originWidth=1582&originalType=binary&ratio=1&rotation=0&showTitle=false&size=245241&status=done&style=none&taskId=uf18c437f-b094-4c1c-bd9c-ef454b7010f&title=&width=1582)
提供数据在逻辑单元（列如IP地址）之间的传递能力

- 路由： 决定数据的下一站在哪儿
- 寻址： 位数据封包增加头信息（地址等）

数据链路层 data link layer
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641882637930-3063f398-2024-4aee-8f7a-2c10937e43b5.png#clientId=u15482b6d-41ea-4&from=paste&height=492&id=ud37ff15a&name=image.png&originHeight=492&originWidth=1654&originalType=binary&ratio=1&rotation=0&showTitle=false&size=279201&status=done&style=none&taskId=u062f4897-beee-4511-8800-9be9c2b4fe7&title=&width=1654)物理层 physical layer
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641882753680-66444131-ceba-46e6-bb4c-2dd544e3151e.png#clientId=u15482b6d-41ea-4&from=paste&height=470&id=ue3693f6a&name=image.png&originHeight=470&originWidth=1556&originalType=binary&ratio=1&rotation=0&showTitle=false&size=260097&status=done&style=none&taskId=ub9897d16-a9de-43f0-9276-67f9d28907d&title=&width=1556)

示例
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641882873142-c8d5fc67-da4e-4a60-9bd9-1aa4e8709045.png#clientId=u15482b6d-41ea-4&from=paste&height=504&id=uf8da2a3a&name=image.png&originHeight=504&originWidth=1790&originalType=binary&ratio=1&rotation=0&showTitle=false&size=333041&status=done&style=none&taskId=u3fc3f654-d199-4653-a9d7-a5de63aeb61&title=&width=1790)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641882927210-630c34d9-515b-46f4-bbf4-03b0efa45cd0.png#clientId=u15482b6d-41ea-4&from=paste&height=576&id=udf5197e5&name=image.png&originHeight=576&originWidth=1744&originalType=binary&ratio=1&rotation=0&showTitle=false&size=353939&status=done&taskId=uc285beb5-7ca0-4637-a5e1-37cfd27fee1&title=&width=1744)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/292785/1641883044732-b179f9b3-1146-4b2a-b66b-341deb5e7ac1.png#clientId=u15482b6d-41ea-4&from=paste&height=998&id=ub295e718&name=image.png&originHeight=998&originWidth=992&originalType=binary&ratio=1&rotation=0&showTitle=false&size=232808&status=done&style=none&taskId=u3937524a-2612-4871-948a-d3a954bcc79&title=&width=992)
