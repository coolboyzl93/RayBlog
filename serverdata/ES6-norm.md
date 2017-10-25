ES6编程规范
=====
---

> 并不是针对ES6的新特性，是ES6的全部

##代码书写规范
所谓的代码书写规范，是和编程的规范不一样的，代码书写强调代码各部分在文件中的位置，和格式化的问题，当然这些代码仅仅是开发者版本，如果是生产者版本，必然是要经过压缩的，那时的书写规范是没有任何意义的。

---
**缩进**

> 缩进问题，其实没那么严重

规范缩进，是提高代码可读性的重要方法。缩进的方式主要有两种，tab和space。由于在不同编辑器/IDE中，tab的缩进长度不一致，所以**在合作写代码的时候**，可能发生一个程序有两种不同缩进的情况，当然了，最终也可以躲敲几个键来让整个代码保持一致的缩进，这在任何写代码的工具中都是非常容易实现的。而且如果不合作写代码，其实用tab键缩进是更好的选择，因为按tab键只需要按一次，而space要达到相同的缩进长度要按4次。现在之所以网上都提倡用空格来缩进，第一点，在用不同的工具写代码的时候，可以保持一致的代码缩进；第二点，有些程序语言只能用空格缩进，比如python，有些文本格式也是用空格缩进的，比如markdown，所以空格缩进是通用的。

**代码的位置**

如果不用webpack我习惯的代码位置是这样的：
1. 将所有全局变量放在代码的最开始处定义；
2. 然后将所有执行的代码流程，以及事件注册放在后面；
3. 其次将异步函数的声明放在函数调用的后面；
4. 最后将同步函数的声明放在最后。

这样做的原因是，全局变量一定是要先定义的，无论是var，let，还是const，无论变量提升与否，他们都会在最开始的位置被声明。这样后面一定不会出现引用出错的问题。
然后是函数调用或者事件监听，因为在程序调试的时候，我们经常要去思考整个代码的执行逻辑，这可能需要经常查看源码，将函数代码执行的逻辑放在这里，可以保证不必花费很多时间去滚动编辑器的滚动条，当然你可以使用全局搜索关键字来找到函数调用的位置，但是如果一开始就知道执行逻辑的大致位置，肯定调试起来是很舒服的。
最后是函数声明，这里面一定都是可复用的函数，因为函数表达式不会提升，这些函数都是绝对不会改变全局变量的函数，它们只会创建全局变量的缓存，然后返回一些东西。这样的函数很健康，属于内部封闭的，有唯一的入口和出口的函数。符合函数式编程的理念。为什么要把异步函数放在同步函数前面呢，这也是因为往往异步函数出错的几率是高于同步函数的，这也是有道理的，因为异步函数是一个接着一个进入事件队列的，异步事件每次进入事件队列要么是满足某种状态的条件，要么是要延迟一定的时间，他们不像同步函数一次全部执行，自然更复杂一些。

如果用webpack+babel打包了,那一定是属于模块化编程
首先我会将整个项目中的所有函数声明放到一个js块中，然后分别将用到的函数import到需要执行他们的js文件去；
所以位置稍有变化
1. import要导入的部分
2. 将所有全局变量放在代码的最开始处定义；
3. 然后将所有执行的代码流程，以及事件注册放在后面；
4. export要导出的部分
+public-lib.js(放公共函数库的地方)

**何时换行与敲空格**

这是一个小问题，但为了让可读行做到极致，平时注意一下也不错。
如果编辑器不支持当代码长度超过编辑器宽度的时候，会自动换行，请考虑换一个编辑器。
当数组/对象/函数/某些表达式过长的时候，编辑器自动换行会让代码的可读性降低，此时，应该将代码以更小的方式进分割，分割出的每一小份放到每一行中去，至于每一小份代码到底多长，只要不超过编辑器的宽度即可。
函数声明之间应该留有换行，每个不同的代码区域（我上面分的）我会留两个换行。

敲空格，和缩进不同，缩进关注的是代码每一行的左边距。而空格往往要在等号前后插入，数组元素与紧随其后的逗号间插入，等等，这也是为了提高代码的可读性，以及统一所有语言的语法规范，因为有些语言必须要这么做。但还是可以借助格式化插件来解决。

---
##ES6新增的编程风格

> ES6的编程风格和ES5相比有着很大的不同，这是因为ES6新加入了很多东西，他们未来会成为ECMScript固有的内容（大部分现在已经实现了），而且它们确实比ES5好用。

---
**变量声明关键字！**

1. 首先考虑能否用const（这个变量本身不会改变，而他的引用是可以改变的）,const可以提高代码的安全性。
2. 其他所有情况使用let在块级作用域内的最顶端定义变量；
3. var真的可以退出历史舞台了。

**字符串！**

1. 静态字符串用单引号，这是为了在出现字符串嵌套HTML的时候，可以不和HTML中属性名的双引号冲突，同时单引号可以不按shift就直接打出来。多开心。
2. 动态字符串用反引号，因为ES最叼的是可以在像这样语法``` `${varable}` ``` 在反引号的字符串中嵌入变量，这比加号好看太多了。 

**变量的解构赋值**

> 解构赋值的场景是，把一个类数组的数据解构中的值赋给别的变量，此时将等号左边变为类数组相同的语法结构，然后在对应等号右边数据结构相应的位置写上变量名，即可完成对变量的解构赋值。这样做的好处是可以一次性全部赋值，同时语义很清晰，即从哪里取的值一目了然。函数形参也属于这种情况，只不过等号是在函数调用时候被隐藏掉了，因为函数调用就是把实参的值赋给形参。

这样的场景有：变量声明，变量赋值，函数形参为对象属性时的解构```({atribute1,atribute2})```。
**当然如果觉得理解有难度，或者不习惯，是可以不这样写的，个人看来完全是无所谓的**。

**对象**

- map:优先考虑用map数据结构代替对象，因为map自带迭代器。
- 简洁语法：所有对象上的的方法都使用简洁语法，可以少写一个function和一个冒号；属性的键和值的变量名相同的时候，可以使用简洁语法。否则无法使用简洁语法。

**数组**

- 数组的形成/复制使用```Array.from()```；
- 灵活使用拓展字符```...```

**函数**
- 函数实参的集合，不应该再用arguments,而是在形参中定义一个...arguments,这样可以得到一个真正的数组，而每一个实参都是数组中的成员。
- 使用class 代替构造函数，他的继承更方便，而且class关键字比首字母大写要好识别多了。
- 箭头函数认识即可，没必要用，这东西限制还是很多的，对大脑的记忆并不友好。

##ES5保存下来的，在ES6依然适用的编程风格

> 这里只是简单罗列出来，因为很多规则相信大家已经习惯了

- 不要使用"相等"（==）运算符，只使用"严格相等"（===）运算符。
- 避免使用全局变量；如果不得不使用，用大写字母表示变量名，比如UPPER_CASE。
- 私有变量的命名，记得要使用下划线开头。
- 不要使用自增（++）和自减（--）运算符，用+=和-=代替。
- 总是使用大括号表示区块。常常因为if后面可以省略大括号而混淆了代码的语义，所以要加上。





更详细的内容推荐大家看这里。

[阮一峰JavaScript规范](http://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html)

[阮一峰ES6](http://es6.ruanyifeng.com/#docs/style)
