# flex布局

## 重要概念

开启flex布局的元素是flex-container，flex-container里面的子元素叫做flex-items。通过设置display:flex|inline-flex可以即成为flex container.其中flex为block-level,inline-flex为inline-level

## flex布局模型
- 主轴
    主轴的开始位置叫main-start,结束的位置叫main-end。主轴的大小脚main-size。
- 交叉轴
    交叉轴的开始位置叫cross-start,结束为孩子叫cross-end。交叉轴的大小为cross-size.交叉轴垂直于主轴。
- 应用的属性
    | flex container| flex-item |
    |-|-|
    |flex-flow|flex|
    |flex-direction|flex-grow|
    |flex-wrap|flex-basis|
    |justify-content|flex-shrink|
    |align-items|order|
    |align-content|align-self|

## flex相关属性
- flex-container
    - flex-direction:row|row-reverse|column|column-reverse 决定主轴的方向的，默认为row,从左到右 ,column是从上到下的  
    - justify-content:flex-start|flex-end|center|space-between(两端对齐，中间距离相等)|space-evenly(等分间距)|space-round(两边距离小，中间距离大) 决定主轴的对齐方式，默认为flex-start.  
    - align-items:normal|stretch|flex-start|flex-end| center(中心点对齐)|baseline(基线对齐，第一行文本基线)。决定了一行flex-item在交叉轴上的对齐方式。默认为normal,效果和stretch一样。
    - flex-wrap:nowrap|wrap|wrap-reverse 默认为nowrap。自动换行  
    - flex-flow:flex-wrap和flex-direction的缩写属性  
    - align-content:stretch|flex-start|flex-end|center|space-between|space-around|space-evenly决定多行flex-items在交叉轴上的对齐方式。
- flex-item
    - order 排布的顺序。可以设置任意值，默认为0,值越小约在前面
    - align-self:可以覆盖掉flex-container的设置的align-item
    - flex-grow: 决定了flex-item如何扩展。可以设置为自然数，默认值为0.只有当flex-container在main axis方向上有剩余size的时候，flex-grow才会有效。
        - 如果flex-items的flex-grow总和不超过1，每个flex-item的扩展size为：flex剩余的size*flex-grow
        - 如果flex-grow总和超过1，每个flex-item扩展的size为：flex-container剩余的size*flex-grow
    - flex-shrink:收缩比例，默认为1.只有在flex-wrap设置为不换行的情况下生效。当flex-container在main axis方向上有剩余size的时候，flex-shrink才会有效。可以设置为非负数字。
        - 当flex-shrink总的和超过1的时候，每个flex-item的收缩的size为flex items超出flex container的size*收缩比例/所有flex items的收缩比例之和
        - 当flex items的flex-shrink总和sum不超过1的时候，每个flex-item收缩的size为：flex items超出flex container的size \* sum \* 收缩比例/所有flex items的收缩比例之和
    - flex-basis:auto设置flex-items在主轴上面的base-size。默认为100.
    - flex是 flex-grow + flex-shrink + flex-basis的简写
        - 单值语法：
        - 一个无单位数（<number>）:它会被当做flex-grow的值。
        - 一个有效的宽度（width）的值。它会被当做<flex-basis>的值。关键字none,auto,initial。
        - 关键字none,auto或者initial
        - 双值语法
        - 第一个值必须为无单位数，并且它会被当做flex-grow的值
        - 第二个值必须为以下之一。一个无单位的数，它会被当做flex-shrink的值。一个有效的宽度值。它会被当做flex-basis的值。


## 参考文档
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html


