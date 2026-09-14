function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rSXTgiapb3":
        Script1();
        break;
      case "6n9mkRb2Nkp":
        Script2();
        break;
      case "6Yf3nS5Ydr5":
        Script3();
        break;
      case "5umB3lz6gtz":
        Script4();
        break;
      case "60sQduUoOaB":
        Script5();
        break;
      case "5wf8mUQ06v8":
        Script6();
        break;
      case "5sIYTgfEvU9":
        Script7();
        break;
      case "6dTJGzwyjKU":
        Script8();
        break;
      case "6IdFBNSYgey":
        Script9();
        break;
      case "6RoACLbIfSK":
        Script10();
        break;
      case "5hDh8239PBh":
        Script11();
        break;
      case "6rjFcDu1Xje":
        Script12();
        break;
      case "6pdTkEFA8gs":
        Script13();
        break;
      case "6RzJQIwsJtS":
        Script14();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '6Az8AIH0hnA';
const growAmount = 0.2;
const delay = 208;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '5jwsJiNBGxT';
const shrinkAmount = 0.2;
const delay = 667;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '6Az8AIH0hnA';
const growAmount = 0.2;
const delay = 1229;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '5jwsJiNBGxT';
const shrinkAmount = 0.2;
const delay = 1688;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '6Az8AIH0hnA';
const growAmount = 0.2;
const delay = 2188;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '5jwsJiNBGxT';
const shrinkAmount = 0.2;
const delay = 2708;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '6Az8AIH0hnA';
const growAmount = 0.2;
const delay = 3333;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '5jwsJiNBGxT';
const shrinkAmount = 0.2;
const delay = 3854;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '6Az8AIH0hnA';
const growAmount = 0.2;
const delay = 4375;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '5jwsJiNBGxT';
const shrinkAmount = 0.2;
const delay = 4792;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  const target = object('6fYo6cs87a5');
const duration = 750;
const easing = 'ease-out';
const id = '60wdJbbVwIy';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6aJxEFHdX7e');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6rdZS59gq1K';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6aJxEFHdX7e');
const duration = 750;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6rdZS59gq1K';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
