// ============================================================ Node.js事件
/*
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event", function () {
  console.log("some_event occured.");
});

setTimeout(function () {
  event.emit("some_event");
}, 1000);
*/

// ============================================================ EventEmitter介绍
var events = require("events");
var emitter = new events.EventEmitter();

/*
emitter.on("someEvent", function (arg1, arg2) {
  console.log("listener1", arg1, arg2);
});

emitter.on("someEvent", function (arg1, arg2) {
  console.log("listener2", arg1, arg2);
});

emitter.emit("someEvent", "byvoid", 1991);
*/

/*
emitter.on("event1", function () {
  console.log("event1 occured.");
});

var event2Handler = function () {
  console.log("event2 occured.");
};
emitter.addListener("event2", event2Handler);

emitter.once("event3", function () {
  console.log("event3 occured.");
});

emitter.emit("event1");
emitter.emit("event1");

emitter.emit("event2");
emitter.removeListener("event2", event2Handler);
emitter.emit("event2");

emitter.emit("event3");
emitter.emit("event3");
*/

// ============================================================ error事件
var events = require("events");
var emitter = new events.EventEmitter();

emitter.emit("error");
