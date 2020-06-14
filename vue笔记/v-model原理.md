<!--
 * @Descripttion: 
 * @version: 
 * @Date: 2020-06-11 20:33:03
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-12 13:26:59
--> 
# v-model原理以及遇到的坑

## 场景描述
最近在做问卷编辑器的时候采用的是在问卷输入事件失去焦点后自动调用接口的方式，由于这些事件比较多，所以采用自定义指令的方式绑定在对应的dom元素上，通过比较前后值的改变去自动调用接口。对于选择，下拉来说，一次点击调用一次接口，但如果是输入框的话，就会出现输入多长的字符就会调用该字符长度次接口。

查阅文档后发现，原因是使用vue的[v-model双向绑定](https://cn.vuejs.org/v2/guide/forms.html)时，v-model在内部为不同的输入元素使用不同的property并抛出不同的事件。input类型为text和textarea元素使用`value`property和`input`事件，因此只要一输入就会触发`input`事件，更新元素的值，随机调用接口。这样会在段时间内大量调用接口，是不合理的，调用接口的时机应该在输入框失去焦点的时候。因此需要手动模拟v-model的实现原理。

## v-model的原理
v-model是用来进行双向绑定的。所谓双向绑定就是当我们更新Model中的数据时，View中与之相关的部分会发生变化，当我们更新View中的数据的时候，Model中的数据也会被自动更新。vue中的v-model其实就是一个[语法糖](https://cn.vuejs.org/v2/guide/components.html)。
```javascript
<input v-bind:value="message" v-on:input="message=$event.target.value" />
```
其中`v-bind:value="message"`是实现Model到View的单向绑定，将message的值绑定到输入框上，这样一旦message发生了改变，输入框的值就会发生相应的改变。`v-on:input="message=$event.target.value"`的作用是监听输入框输入的事件，当输入框输入内容发生变化的时候，同时改变message的值，这样就可以实现View到Model的单向绑定。两相结合就实现了双向绑定。

## 改进时遇到的问题
由于项目使用了element组件，因此一开始采用了element里面的el-input框。然而遇到遇到了以下的问题。

1.由于element中的el-input框封装了input框的原生事件，做了一系列的处理.如果只在input，change方法里面只打印出事件参数$event，那么input方法打印出来的是每一次输入的值，change方法不会执行，输入框里面输入的值会被强行清空，显示不出输入值。如果在input将$event的值赋给输入框绑定的值，那么


## 参考文献
https://cn.vuejs.org/v2/guide/forms.html
https://cn.vuejs.org/v2/guide/components.html
https://segmentfault.com/a/1190000022126326?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com&share_user=1030000000178452
https://segmentfault.com/a/1190000021039085?utm_source=tag-newest
https://segmentfault.com/a/1190000015581922