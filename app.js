function skip15sec (){
  var player = document.querySelector("audio");
  //HTMLの中からaudio要素を探し、最初に見つけたものを返す。
  player.currentTime = player.currentTime + 15;
}
function onSkip15secButtonClicked(event){ //人間の行動などのプログラムだけでは表せない出来事の順序などを指定する。
  skip15sec();
}
var skip15secButton =  document.querySelector("#skip-15s-button");
skip15secButton.addEventListener("click",  onSkip15secButtonClicked);
//15秒進む


function reverse15sec (){
  var player = document.querySelector("audio");
  player.currentTime = player.currentTime -15;
}
function onReverse15secButtonClicked(event){
  reverse15sec();
}
var reverse15secButton = document.querySelector("#reverse-15s-button");
reverse15secButton.addEventListener("click",  onReverse15secButtonClicked);
//15秒戻る


function replay(){
  var player = document.querySelector("audio");
  player.currentTime = 0;
}
function onReplayButtonClicked(event){
  replay();
}
var replayButton = document.querySelector("#replay");
replayButton.addEventListener("click",  onReplayButtonClicked);
//最初からまたリプレイ

function repeat(){
  var player = document.querySelector("audio");
  player.loop = true;
}
function onRepeatButtonClicked(event){
  repeat();
}
var RepeatButton = document.querySelector("#repeat");
RepeatButton.addEventListener("click",  onRepeatButtonClicked);
//最後まで行ったらまた最初に帰って来るよ。ループだよ。

function setPlaybackRate(value){
var player = document.querySelector("audio");
 player.playbackRate = value;
}

function onPlaybackRateChanged(event){
   var rate = playbackRateControl.value;
   setPlaybackRate(rate);
}
var playbackRateControl = document.querySelector("#playback-rate-control > input");
 playbackRateControl.addEventListener("change",onPlaybackRateChanged);
 //曲のスピードが変わるよ

 function showPlaybackRate(value){ var label = 
document.querySelector("#playback-rate-control > span");
 label.textContent = "x" + value;
}
function setPlaybackRate(value){
  var player = document.querySelector("audio");
  player.playbackRate = value; showPlaybackRate(value);
}
//曲の倍速を数値で教えてくれるよ

function setPlaybackRate(value){
var player = document.querySelector("audio");
 player.playbackRate = value;
}

// //課題4たそ
// function onPlaybackRateChanged(event){
//    var rate = playbackRateControl.value;
//    setPlaybackRate(rate);
// }
// var playbackRateControl = document.querySelector("#reset-speed-button > input");
//  playbackRateControl.addEventListener("change",onPlaybackRateChanged);
//
//  function showPlaybackRateControl(event){
//
//  }

 //canvasのお勉強だよ
 var canvas = document.querySelector("canvas");
 var ctx = canvas.getContext("2d");
// 描画コンテキスト

function draw(){
ctx.fillStyle = "rgb(255, 108, 108)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = "rgb(192, 192, 192)";
ctx.fillRect(canvas.width / 2 - 5, canvas.height / 2 - 5, 10, 10);
 var data = [70,65, 60,55,50,45,40, 35, 30, 25, 20, 15, 10, -10,-15, -20,-25, -30, -35,-40, -45,-50,-55, -60,
   -65, -70];
 ctx.fillStyle = "rgb(255, 255, 255)";
 // ctx.fillRect(5, canvas.height / 2 - data[0]*4, 154, data[0]*4);
 // ctx.fillRect(164, canvas.height / 2 - data[1]*4, 154, data[1]*4);
 // ctx.fillRect(323, canvas.height / 2 - data[2]*4, 154, data[2]*4);
 // ctx.fillRect(482, canvas.height / 2 - data[3]*4, 154, data[3]*4);
 // ctx.fillRect(641, canvas.height / 2 - data[4]*4, 154, data[4]*4);

var i = 0;
var offset = 5;
var x = offset;
var width = (canvas.width - (offset*(data.length +1)))/ data.length;
while(i < data.length){
  ctx.fillRect(x, canvas.height / 2 - data[i] * 4, width, data[i] * 4);
  x=x+width+offset;
  i = i + 1;
}

}
