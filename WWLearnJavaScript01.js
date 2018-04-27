* 学习网址：
  * [JavaScript教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)
  * [JavaScript 教程](http://www.runoob.com/js/js-tutorial.html)
  * [JavaScript 教程](http://www.w3school.com.cn/js/index.asp) 
### 字符串
```JavaScript
// 转移字符的使用I'm "ok!"
var brStr = '<br/>'
var stateStr = 'I\'m \"ok!\"';
//
document.write(brStr);
document.write(stateStr);
document.write(brStr);
// ‘A’ 的 ASCII  码 为 65  16进制的41 是65
document.write('\x41');


//下列字符串输出结果为 中文
var characterStr = '\u4e2d\u6587';
document.write(characterStr);

/*
多行文字的时候使用 反引号  这个反引号是 数字键1左边的键 并且注意在英文格式的输入法下
测试后发现对于alert可以显示为多行的形式 
但是对于document.write() 的形式输出出来仍然是单行的样子
*/
var multilineStr = 
`
这是
一个多行的
字符串
`;
document.write(multilineStr);
alert(multilineStr);

/*
发现了一个问题是在使用Mac Air的时候
使用我用的两种测试js的网址不能用console.log正常输出
具体问题还没找到 
见有的说是因为输出的级别，看了下console 的级别
有Default
Verbose
Info
Warnings
Errors
可以在控制台看到部分信息了，不过用我使用的测试网址不能直接测试出来，具体原因有待查证
*/







```


