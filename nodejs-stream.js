// ============================================================ 从流中读取数据
/*
var fs = require("fs");
var data = "";

// 创建可读流
var readerStream = fs.createReadStream("input.txt");

// 设置编码为utf8
readerStream.setEncoding("utf8");

// 处理流事件
readerStream.on("data", function(chunk) {
  data += chunk;
});

readerStream.on("end", function() {
  console.log(data);
});

readerStream.on("error", function(err) {
  console.log(err.stack);
});

console.log("程序执行完毕");
*/

// ============================================================ 写入流
/*
var fs = require("fs");
var data = "W3Cschool教程官网地址：www.w3cschool.cn";

// 创建一个可以写入的流，写入到文件output.txt中
var writerStream = fs.createWriteStream("output.txt");

// 处理流事件
writerStream.on("finish", function() {
  console.log("写入完成");
});

writerStream.on("error", function(err) {
  console.log(err.stack);
});

// 使用utf8编码写入数据
writerStream.write(data, "UTF8");

// 标记文件末尾
writerStream.end();

console.log("程序执行完毕");
*/

// ============================================================ 管道流
/*
var fs = require("fs");

var readerStream = fs.createReadStream("input.txt");

var writerStream = fs.createWriteStream("output.txt");

readerStream.pipe(writerStream);

console.log("程序执行完毕");
*/

// ============================================================ 链式流
/*
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));
  
console.log("程序压缩完成");
*/

var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));
  
console.log("文件解压完成");























