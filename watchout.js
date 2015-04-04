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

var Unit = function(cx, cy, r, fill){
  this.cx = cx || 50;
  this.cy = cy ||  50;
  this.r = r ||  10;
  this.fill = fill || '#fff';
}

var Enemy = function(cx, cy, r, fill){
  Unit.call(this, cx, cy, 15, '#f00');
}

window.enemies = [];
var createEnemies = function(n){
  for (var i=0; i<n; i++){
    window.enemies.push(new Enemy(n*10,n*10));
  }  
}

createEnemies(10);

var randomLoc = function(px){
  return Math.floor(Math.random() * px);
}
