# demo-template（html的复用）

html的复用形式基本是后端语言处理（如php 的 include），或者前端用nodejs处理，这里只介绍前端的做法。

## 方法一：[jade](http://jade-lang.com/)、ejs

第一步全局安装 `jade`

```
npm i jade -g
```

第二步添加监听自动编译（如果不添加就要使用命令行执行编译，像下面的`gulp fileinclude`），一般编辑器监听到会弹出询问框的，也可以在 `settings -> tools -> file watchers`里面设置：

![图片1](http://qingzhui.net/shareimg/demo-template1.jpg)

第三步设置自动编译后的路径和格式：

```
--out $FileParentDir$\dist\ -P $FileName$
```

![图片2](http://qingzhui.net/shareimg/demo-template2.jpg)

像这样的方式还有 [ejs](http://www.embeddedjs.com/)

## 方法二：gulp

第一步全局安装 `gulp`

```
npm install -g gulp
```

第二步切换到 `gulp`文件中执行 `npm install` 安装依赖模块

```
npm install
```

第三步，执行编译

```
gulp fileinclude
```

## 其它

其它局部的模块引擎可以使用 [artTemplate](https://github.com/aui/artTemplate)、[laytpl](http://laytpl.layui.com/)

## 自己动手试一试

```
git clone https://github.com/shuchengliang/demo-template.git
```

然后按照上面的操作执行，欢迎讨论交流，提提其它的想法。
