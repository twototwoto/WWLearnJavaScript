* 学习网址：
  * [JavaScript教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)
  * [JavaScript 教程](http://www.runoob.com/js/js-tutorial.html)
  * [JavaScript 教程](http://www.w3school.com.cn/js/index.asp) 
### 基础语法
```JavaScript
//弹出警示框 注释方式有// /* */
alert('我要学JavaScript!');
//变量赋值
var x = 1;
//使用警示框的方式查看x的值
window.alert(x)
//语句
'Hello JavaScript'

//普通if 花括号中的内容缩进4个空格
if(2 >1){
    x = 1;
    y = 2;
    z = 3;
//使用警示框的方式查看x y z的值
window.alert(x)
window.alert(y)
window.alert(z)

//嵌套的if
if(2>1){
    x = 1;
    y = 2;
    z = 3;
    if(x<y){
        z = 4;
    }
    if (x > y){
        z = 5;
    }
    console.log(x)
    console.log(y)
    console.log(z)
}
/*
输出结果：
1
2
4
*/

//JavaScript严格区分大小写
if(2>1){
    a = 3;
    console.log(A)
}
//运行结果：ReferenceError: Can't find variable: A


```



### 数据类型和变量
* Number
```JavaScript
123; //整数123
0.123; //浮点数 0.123
1.23e3; //科学计数法 1.23 * 10的三次方 即 1230
-99; //负数
NaN; //NaN 表示Not a Number 当无法计算结果时用Nan表示
Infinity; //表示无限大 当数值超过了JS的Number能够表示的最大数值时 用NaN表示
Number.MAX_VALUE //
Number.MIN_VALUE //
Number.NEGATIVE_INFINITY //负无穷
Number.POSITIVE_INFINITY //正无穷

document.write('最大值：'+ [Number.MAX_VALUE + '<br />' ,
'最小值：'+ Number.MIN_VALUE + '<br />' ,
'负无穷：'+Number.NEGATIVE_INFINITY + '<br />' , 
'正无穷：'+Number.POSITIVE_INFINITY]);
/*
最大值：1.7976931348623157e+308
,最小值：5e-324
,负无穷：-Infinity
,正无穷：Infinity
*/

//四则运算
{
    a = 1 + 2;
    b = (1 + 2) * 5 / 2;
    c = 2 / 0;
    d = 0 / 0;
    e = 10 % 3;
    f = 10.5 % 3;
    document.write(['a='+a,'b='+b,'c='+c,'d='+d,'e='+e,'f='+f]);
}
//输出结果a=3,b=7.5,c=Infinity,d=NaN,e=1,f=1.5

```


* 字符串
```JavaScript
//可以使用 ‘’  或者 ""
    document.write('abc',"def")
    document.write('abc'+ '<br/>',"def")
/*
abc
def

'<br/>' 是换行
*/
```

* 布尔值

```JavaScript
true;
false;
2 > 1;
2 >= 3;

//&& 与运算 全为true的时候才是true 否则为false
true && true;   //true
true && false;  // false
false && true && false  //false 

// || 或运算   有一个ture 即为true 否则为false
false || false      //false
true || false       //true
false || true || false   //true

// ! 非运算 取反的操作
!true; //false
!false; //结果为true
!(2 > 5); //结果为true

var age = 18;
if(age >= 18){
    alert('adult')
}else{
    alert('teenager');
}
```


* 比较运算符
```JavaScript
2 > 5; //false
5 > 2; //true
7 == 7; //true

false == 0；
false === 0；
/*
注意：JavaScript 里边有两种比较相等运算符
== 自动转换数据类型后再比较
==== 不会自动转换数据类型
不要使用 ==
要使用 ==== 比较是否相同

NaN === NaN //false
唯一能够判断NaN 的方法是 isNaN(NaN)
*/

document.write(false == 0 ,
'<br/>',false === 0, 
'<br/>', NaN === NaN,
'<br/>',isNaN(NaN));
/*
true
false
false
true
*

//浮点数运算的时候的误差
document.write(1 / 3,1 - 2 / 3);  //0.33333333333333330.33333333333333337
Math.abs(1 / 3 - (1 - 2 / 3));  //5.551115123125783e-17


//现在测试的时候 发现不相等了 和参考教程的时候的测试结果了
//https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499190108eec0bdf14e704a09935cd112e501e31a000

//null 表示空值 它和0(数值) 和 ‘’(长度为0的字符串) 不同 
//大多数情况下使用null   undefined 仅仅 在判断函数参数是否传递的情况下有用

 
/**关于数组
 元素之间使用逗号分隔 
 数组长度获取 使用length 
 根据下标 0 ~ length-1 获取数组元素
 如果是取到了越界的元素会输出undefined
*/
arr = Array(1,2,3.14,'Hello',null,true);
document.write(arr);    //数组所有内容
document.write('<br/>');
document.write(arr.length); //数组长度
document.write('<br/>');
document.write(arr[8]);

document.write('<br/>');
bArr = new Array(2,3,4);
document.write(b.length)

/*
1,2,3.14,Hello,,true
6
undefined
3
*/

//对象
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js','Web','Mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
}
brString = '<br/>'
document.write(person.name,brString,person.age,brString,person)
/*
Bob
20
[object Object]
直接打印对象出来是 [object Object]
*/


//变量赋值 关键字var 和Swift一样 也有类型推断
brString = '<br/>'
var a;  //声明变量a 此时a的值是undefined
var $b = 1; //变量$1 $b 为整数
var s_007 = '007'; //字符串 s_007
var Answer = true; //布尔值 true
var t = null;
document.write(a,brString,$b,brString,s_007,brString,Answer,brString,t);

/*
undefined
1
007
true
null
*/

```

* strict 模式
```JavaScript
同一个页面的不同JavaScript文件中 如果都不用var声明 那么范围会是全局的
使用var声明的变量 范围会得以控制 像同名变量可以在不同的函数中使用 而不冲突
使用strict 模式会强制使用 var 声明变量 否则会运行有异常
我在测试的时候还不大会用这部分 目前是在
http://www.w3school.com.cn/tiy/t.asp?f=jseg_isNaN
这里测试的时候如果使用了 ‘use stric’ 的时候 没有使用var修饰的变量 就不能够正常输出
使用了var 修饰的变量就可以正常输出

```


```JavaScript
小结：
目前用到的输出方式有window.alert() 和 console.log() document.write()


```




```JavaScript

```

































