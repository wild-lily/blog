我们知道Mac的[操作系统](https://so.csdn.net/so/search?q=%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F&spm=1001.2101.3001.7020)是基于Unix的，想了解Unix就要从最基本的Unix指令学起。

好了我们来学习几个最基本的指令：
**ls:显示全部目录内容**
**ls bin:显示bin下的目录内容**
**ls -a:显示当前目录下的隐藏文件**

最最基本的ls说完了，再来说说cd，cd为[Unix](https://so.csdn.net/so/search?q=Unix&spm=1001.2101.3001.7020)中的目录变更指令
**cd bin:将目录变更到bin下**
**cd 空格：切换到家目录**
**cd ..：返回上一层目录**
**cd ../..：返回上上级目录**

cp复制命令

cp s1 s2：将s1文件复制一份名为s2的文件

cp -r dir1 dir2：将dir1的全部内容复制到dir2里面

mv移动或改名

mv t1 t2：将t1的名字换为t2

mv dir1 dir2：将dir1的目录变为dir2的目录

注：cp与mv的区别为，cp是拷贝(复制)，mv为移动(剪切)。

rm删除

rm 文件名：删除文件，注意被删除的文件不会出现在废纸篓中哦，谨慎使用！

rm -r dir：删除dir下的所有档案

rmdir 文件夹名：删除文件夹

rm -rf：删除目录下的所有文件，谨慎使用！

其他，想到哪个说哪个了

mkdir 文件夹名：在当前目录下创建文件夹

pwd：显示当前路径

telnet ip地址：链接到指定ip上

df：显示硬盘空间使用情况

dv：检测一个目录和所有它的子目录中文件占用磁盘情况

date：显示系统时间

shutdown：关机

