// start slingin' some d3 here.
var log = console.log.bind(console);
log('fefawefwfe');

g = {};
g.screen = {'width':320, 'height':180, 'bgColor':'#000'};

var svg = d3.select('body').append('svg:svg')
  .attr('width', g.screen.width)
  .attr('height', g.screen.height)
  .attr('fill', g.screen.fill);

svg.append('rect')
  .attr('width', g.screen.width)
  .attr('height', g.screen.height)
  .attr('fill', g.screen.bgColor);

var randomLoc = function(px){
  return Math.floor(Math.random() * px);
}

var Unit = function(x, y, width, height, image){
  this.x = x || 1;
  this.y = y ||  1;
  this.width = width ||  10;
  this.height = height || 10;
  this.image = image || 'asteroid.png';

  this.center = {'x':this.width/2 ,'y':this.height/2}
  this.r = this.width/2;
}

var Player = function(x, y, width, height, image){
  Unit.call(this, x, y, width, height, 'player.png');
  this.class = 'player';
}
window.player = [new Player(randomLoc(g.screen.width),randomLoc(g.screen.height),10,10,'player.png')];

var Enemy = function(x, y, width, height, image){
  Unit.call(this, x, y, width, height, image);
  this.class = 'enemy';
}

window.enemies = [];
var createEnemies = function(n){
  for (var i=0; i<n; i++){
    window.enemies.push(new Enemy(randomLoc(g.screen.width),randomLoc(g.screen.height), 20,20,'asteroid.png'));
  }
}
createEnemies(4);

// create enemies
var d3Enemies = svg.selectAll('image').data(window.enemies);
d3Enemies.enter().append('svg:image')
  .attr('class','enemy')
  .attr('x', function(d){return d.x})
  .attr('y', function(d){return d.y})
  .attr('width', function(d){return d.width})
  .attr('height', function(d){return d.height})
  .attr("xlink:href", function(d){return d.image});

// create player
var d3Player = svg.append('svg:image').data(window.player);
d3Player
  .attr('class','player')
  .attr('x', function(d){return d.x})
  .attr('y', function(d){return d.y})
  .attr('width', function(d){return d.width})
  .attr('height', function(d){return d.height})
  .attr("xlink:href", function(d){return d.image});

d3Enemies.each(function(d){
  log(d.class, d.image);
});

d3Enemies.each(function(d){
  log(d.class, d.image);
});

var repeat = function() {
  d3Enemies
  .transition()
  .duration(1000)
  .attr('x',function(d){d.x = randomLoc(g.screen.width); return d.x})
  .attr('y',function(d){d.y = randomLoc(g.screen.height); return d.y})
  .each("end", repeat);
}

repeat();
