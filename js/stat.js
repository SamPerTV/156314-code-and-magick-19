'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;

var BAR_X = 160;
var GAP = 90;
var FONT_GAP = 30;
var GAP_SCORE = 5;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var NAME_X = 195;
var NAME_Y = 270;
var height;
var bgColor;

var cloudColor = '#fff';
var shadowColor = '#000';
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {

  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {

      maxElement = arr[i];
    }
  }
  return maxElement;
};
var renderText = function (ctx) {

  ctx.fillStyle = shadowColor;
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Cписок результатов', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

};
var getRandomNumber = function (max) {
  return Math.floor(Math.random() * max + 1);
};

var getBarColor = function (playerName) {
  var barColor = 'hsl(235, ' + getRandomNumber(100) + '%, 50%)';
  if (playerName === 'Вы') {
    barColor = 'rgba(255, 0, 0, 1) ';
  }
  return barColor;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, cloudColor);
  renderText(ctx);

  var maxTime = getMaxElement(times);
  var scoreBar;
  for (var i = 0; i < players.length; i++) {
    height = BAR_HEIGHT * times[i] / maxTime;
    bgColor = getBarColor(players[i]);
    var BAR_Y = CLOUD_Y + GAP + (BAR_HEIGHT - height);

    ctx.fillStyle = shadowColor;
    ctx.fillText(players[i], NAME_X + GAP * i - FONT_GAP, NAME_Y);
    ctx.fillStyle = barColor;
    ctx.fillRect(BAR_X + GAP * i, BAR_Y, BAR_WIDTH, height);
    ctx.fillStyle = shadowColor;
    scoreBar = Math.floor(height);
    ctx.fillText(scoreBar, BAR_X + GAP_SCORE + GAP * i, BAR_Y - GAP_SCORE);
  }
};
