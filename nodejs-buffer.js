// ============================================================ 创建Buffer类
/*
// 方法1
var buff1 = new Buffer(10);
// 方法2
var buff2 = new Buffer([10, 20, 30, 40, 50]);
// 方法3
var buff3 = new Buffer("www.w3cschool.cn", "utf-8");

console.log(buff3.toString());
*/

// ============================================================ 写入缓冲区
/*
var buff = new Buffer(256);
var len = buff.write("Hello, World!");

console.log("写入字节数：" + len);
*/

// ============================================================ 从缓冲区读取数据
/*
var buff = new Buffer(26);
for (var i = 0; i < 26; i++) {
  buff[i] = i + 97;
}

console.log(buff.toString("ascii"));
console.log(buff.toString("ascii", 0, 5));
console.log(buff.toString("utf8", 0, 5));
console.log(buff.toString(undefined, 0, 5));
*/

// ============================================================ 将Buffer转换为JSON对象
/*
var buff = new Buffer("Hello, World!");
var json = buff.toJSON();

console.log(json);
*/

// ============================================================ 缓冲区合并
/*
var buff1 = new Buffer("W3Cschool教程 ");
var buff2 = new Buffer("www.w3cschool.cn");
var buff3 = Buffer.concat([buff1, buff2]);

console.log("buff3内容：" + buff3.toString());
*/

// ============================================================ 缓冲区比较
/*
var buff1 = new Buffer("ABCDE");
var buff2 = new Buffer("ABCD");
var result = buff1.compare(buff2);

if (result < 0)
  console.log(buff1 + " 小于 " + buff2);
else if (result == 0)
  console.log(buff1 + " 与 " + buff2 + " 相同");
else
  console.log(buff2 + " 大于 " + buff2);
*/

// ============================================================ 拷贝缓冲区
/*
var buff1 = new Buffer("ABC");
var buff2 = new Buffer(2);

buff1.copy(buff2, 0, 1);

console.log("buff2 content: " + buff2.toString());
*/

// ============================================================ 缓冲区裁剪
/*
var buff1 = new Buffer("youj");
var buff2 = buff1.slice(0, 2);

console.log("buff2 content: " + buff2.toString());
*/

// ============================================================ 缓冲区长度
var buff = new Buffer("Hello, World!");

console.log("buff length: " + buff.length);














