# css基本图形绘制

<style>
#square {
    width: 100px;     
    height: 100px;
    background: #1FBBA6;
}
#rectangle {
    width: 200px;
    height: 100px;
    background: #1FBBA6;
}
#circle {
    width: 100px;
    height: 100px;
    background: #1FBBA6;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
}
#oval {
    width: 200px;
    height: 100px;
    background: #1FBBA6;
    -moz-border-radius: 100px / 50px;
    -webkit-border-radius: 100px / 50px;
    border-radius: 100px / 50px;
}
#triangle-up {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #1FBBA6;
}
#triangle-down {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid #1FBBA6;
}
#triangle-left {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 100px solid #1FBBA6;
    border-bottom: 50px solid transparent;
}
#triangle-right {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid #1FBBA6;
    border-bottom: 50px solid transparent;
}
</style>

1.正方形
<div id="square"></div>

```css
#square {
    width: 100px;     
    height: 100px;
    background: #1FBBA6;
}
```
2.长方形
<div id="rectangle"></div>

```css
#rectangle {
    width: 200px;
    height: 100px;
    background: #1FBBA6;
}
```
3.圆形
<div id="circle"></div>

先画一个正方形，border-radius的值为边长的一半 
（相当于四个角那里有个四个小圆，border-radius是小圆的半径，小圆与边框相切，小圆外面多余的部分被裁掉，所以就成圆角了）

```css
#circle {
    width: 100px;
    height: 100px;
    background: #1FBBA6;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
}
```
4.椭圆 
<div id="oval"></div>

先画一个长方形，在画角，其中角上圆的垂直半径是长方形高的一办，水平半径是长方形宽的一半。
border-radius:(左上 右上 右下 左下水平圆半径大小)/(左上 右上 右下 左下垂直圆半径大小)

```css
#oval {
    width: 200px;
    height: 100px;
    background: #1FBBA6;
    -moz-border-radius: 100px / 50px;
    -webkit-border-radius: 100px / 50px;
    border-radius: 100px / 50px;
}
```
5.三角形
<div style="position:relative">
    <div id="triangle-down"></div>
    <div id="triangle-up"></div>
    <div style="font-size:0;position:absolute;top:50px;left:60px;">
        <span id="triangle-left" style="display:inline-block"></span>
        <span id="triangle-right" style="display:inline-block"></span>
    </div>
</div>

```css
#triangle-up {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #1FBBA6;
}
#triangle-down {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid #1FBBA6;
}
#triangle-left {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 100px solid #1FBBA6;
    border-bottom: 50px solid transparent;
}
#triangle-right {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid #1FBBA6;
    border-bottom: 50px solid transparent;
}
```
画三角形的时候，利用了border的特点。当一个div没有宽和高而border有颜色和大小的时候，会得到由四个三角形拼成的矩形.因此我们可以通过将不需要的三角形的颜色置为透明来得到想要的三角形。
<div style="width:0;height:0;border:50px solid transparent;border-color:#ff6c5f #74d2e7 #b84592 #ffc168"></div>

## 参考
https://www.cnblogs.com/ming1025/p/7363074.html
https://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/