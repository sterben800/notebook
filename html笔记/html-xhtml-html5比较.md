# HTML-XHTML-HTML的比较(归纳整理官当文档)

## html
HTML 是用来描述网页的一种语言。

- HTML 指的是超文本标记语言 (Hyper Text Markup Language)
- HTML 不是一种编程语言，而是一种标记语言 (markup language)
- 标记语言是一套标记标签 (markup tag)
- HTML 使用标记标签来描述网页
- HTML 被设计用来显示数据。

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

- HTML 标签是由尖括号包围的关键词，比如 <html>
- HTML 标签通常是成对出现的，比如 <b> 和 </b>
- 标签对中的第一个标签是开始标签，第二个标签是结束标签
- 开始和结束标签也被称为开放标签和闭合标签

HTML 文档 = 网页

- HTML 文档描述网页
- HTML 文档包含 HTML 标签和纯文本
- HTML 文档也被称为网页
- Web 浏览器的作用是读取 HTML 文档，并以网页的形式显示出它们。浏览器不会显示 HTML 标签，而是使用标签来解释页面的内容

## XML

- XML 被设计用来传输和存储数据。
- XML 指可扩展标记语言（EXtensible Markup Language）
- XML 是一种标记语言，很类似 HTML
- XML 的设计宗旨是传输数据，而非显示数据
- XML 标签没有被预定义。您需要自行定义标签。
- XML 被设计为具有自我描述性。
- XML 是 W3C 的推荐标准
- XML 仅仅是纯文本，是不作为的
- XML 是对 HTML 的补充。

**XML 与 HTML 的主要差异**

- XML 不是 HTML 的替代。
- XML 和 HTML 为不同的目的而设计：
- XML 被设计为传输和存储数据，其焦点是数据的内容。
- HTML 被设计用来显示数据，其焦点是数据的外观。
- HTML 旨在显示信息，而 XML 旨在传输信息。

## XHTML

XHTML 是什么？

- XHTML 指可扩展超文本标签语言（EXtensible HyperText Markup Language）。
- XHTML 的目标是取代 HTML。
- XHTML 与 HTML 4.01 几乎是相同的,XHTML 与 HTML 4.01 兼容。
- **XHTML 是更严格更纯净的 HTML 代码**。
- XHTML 是作为一种 XML 应用被重新定义的 HTML。
- XHTML 是一个 W3C 标准。
- 所有新的浏览器都支持 XHTML。
- XHTML 是一个 W3C 标准
- XHTML 是 HTML 与 XML（扩展标记语言）的结合物

为什么要使用XHTML

- 万维网上的许多页面都包含着糟糕的 HTML 代码。
- XML 用来描述数据，而 HTML 则用来显示数据。通过把 HTML 和 XML 各自的长处加以结合，我们得到了在现在和未来都能派上用场的标记语言 - XHTML。
- 在今天的市场中存在着不同的浏览器技术，某些浏览器运行在计算机中，某些浏览器则运行在移动电话和手持设备上。XHTML 可以被所有的支持 XML 的设备读取，同时在其余的浏览器升级至支持 XML 之前，XHTML 使我们有能力编写出拥有良好结构的文档，这些文档可以很好地工作于所有的浏览器，并且可以向后兼容。

**XHTML 与 HTML 之间的差异**

最主要的不同：

- XHTML 元素必须被正确地嵌套。
- XHTML 元素必须被关闭。
- 标签名必须用小写字母。
- XHTML 文档必须拥有根元素。

具体的来说就是：
- 元素必须被正确地嵌套
- XHTML 元素必须被关闭
    - 非空标签必须使用结束标签
    - 空标签也必须使用结束标签，或者其开始标签必须使用/>结尾。
    - 重要的兼容性提示:在 "/" 符号前添加一个额外的空格，以使你的 XHTML 与当今的浏览器相兼容。
- XHTML 元素必须小写
    - XHTML 规范定义：标签名和属性对大小写敏感。
    - 
- XHTML 文档必须拥有一个根元素
    - 所有的 XHTML 元素必须被嵌套于 <html> 根元素中。其余所有的元素均可有子元素。子元素必须是成对的且被嵌套在其父元素之中。
- 属性名称必须小写，属性值必须加引号，属性不能简写
- 用 id 属性代替 name 属性
    - HTML 4.01 针对下列元素定义 name 属性：a, applet, frame, iframe, img, 和map。在 XHTML 中不鼓励使用 name 属性，应该使用 id 取而代之。
- 语言属性（lang）
    - lang 属性应用于几乎所有的 XHTML 元素。它定义元素内部的内容的所用语言的类型。
    - 如果在某元素中使用 lang 属性，就必须添加额外的 xml:lang，像这样：`<div lang="no" xml:lang="no">Heia Norge!</div>`
- 强制使用的 XHTML 元素
    - 所有 XHTML 文档必须进行文件类型声明（DOCTYPE declaration）。在 XHTML 文档中必须存在html、head、body元素，而 title 元素必须位于在 head 元素中。
下面是一个最小化的 XHTML 文件模板：

```javascript
//文件类型声明并非 XHTML 文档自身的组成部分。它并不是 XHTML 元素，也没有关闭标签
<!DOCTYPE Doctype goes here>
//在 XHTML 中，<html> 标签内的 xmlns 属性是必需的
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Title goes here</title>
</head>

<body>
</body>

</html>
```
##　HTML5

HTML5 是下一代的 HTML

HTML5 将成为 HTML、XHTML 以及 HTML DOM 的新标准

什么是 HTML5？

- HTML5 是最新的 HTML 标准。
- HTML5 是专门为承载丰富的 web 内容而设计的，并且无需额外插件。
- HTML5 拥有新的语义、图形以及多媒体元素。
- HTML5 提供的新元素和新的 API 简化了 web 应用程序的搭建。
HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。

文档声明
```javascript
<!DOCTYPE html>
The new character encoding (charset) declaration is also very simple:

<meta charset="UTF-8">
```
所有现代浏览器都支持 HTML5。
此外，所有浏览器，不论新旧，都会自动把未识别元素当做行内元素来处理。

## 新特性
- 用于绘画的 canvas 元素
- 用于媒介回放的 video 和 audio 元素
- 对本地离线存储的更好的支持
- 新的特殊内容元素，比如 article、footer、header、nav、section
- 新的表单控件，比如 calendar、date、time、email、url、search

## 参考文献
https://www.w3school.com.cn/html/html_jianjie.asp  
https://www.w3school.com.cn/xhtml/xhtml_intro.asp
https://www.w3school.com.cn/xhtml/xhtml_intro.asp