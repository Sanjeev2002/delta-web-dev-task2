let score=document.getElementById('number');
let score1=document.getElementById('hs');
const canvas = document.getElementById('canvas');
if(canvas.getContext)
{
const ctx = canvas.getContext('2d');
const ball = {
   x: 500,
   y: 620,
   size: 10,
   dx: 0,
   dy: 0,
speed:5,
score:0,
hs:0
 };

function drawBall()
{
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(ball.x, ball.y, ball.size, 0, 10);
  ctx.fill();
ctx.closePath();
}

function newPos() {
    ball.x+=ball.dx;
  ball.y += ball.dy;
ball.score-=ball.dy;
ball.hs-=ball.dy;
score.innerHTML='Score:'+ball.score;
if(!localStorage.getItem('highscore')){
localStorage.setItem('highscore',ball.hs);
hs.innerHTML='High Score:'+ball.hs;}
else{
let hs1=localStorage.getItem('highscore');
if(hs1>ball.hs){
hs.innerHTML='High Score:'+hs1;}
else{
var hs2=ball.hs;
localStorage.setItem('highscore1',hs2);
hs.innerHTML='High Score:'+hs2;
}
}
detectWalls();
var imgData=ctx.getImageData(ball.x+20,ball.y-10,1,1);
if(imgData.data[0])
{
 ctx.font='48px serif';
ctx.strokeText('Game Over',canvas.width/2-70,canvas.height/2,[150]);  
alert("game Over");
location.reload();}
if(imgData.data[2])
{
ctx.font='48px serif';
ctx.strokeText('Game Over',canvas.width/2-70,canvas.height/2,[150]);  
alert("game Over");
location.reload();
}
}
function detectWalls() {

  if (ball.y + ball.size > canvas.height)
{ ball.dy *= -1; }
if(ball.y - ball.size < 0) {
     ctx.font='48px serif';
ctx.strokeText('Game Over',canvas.width/2-70,canvas.height/2,[150]);  
ball.dy = 0;
location.reload(); }

}

function circle(x,y,r,startAngle,endAngle,color)
{
this.x=x;
this.y=y;
this.r=r;
this.startAngle=startAngle;
this.endAngle=endAngle;
this.angvel=0.02;
this.color=color;
this.dy=1;
this.draw=function()
{
ctx.beginPath();
ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle,false);
ctx.save();
ctx.strokeStyle=this.color;
ctx.lineWidth=20;
ctx.stroke();
ctx.restore();
};
this.update=function()
{
this.startAngle+=this.angvel;
this.endAngle+=this.angvel;
this.draw();
};
}
var circle1;
var circle2;
var circle3;
var circle4;

 

function init()
{

circle1=new circle(canvas.width/2,450,60,0,Math.PI,"green");
circle2=new circle(canvas.width/2,450,60,Math.PI,2*Math.PI,"blue");


circle3=new circle(canvas.width/2,180,60,0,Math.PI,"green");
circle4=new circle(canvas.width/2,180,60,Math.PI,2*Math.PI,"red");
}

function animate()
{
ctx.clearRect(0,0,canvas.width,canvas.height);

circle1.update();
circle2.update();
circle3.update();
circle4.update();
drawBall();
newPos();
requestAnimationFrame(animate);
}
function moveUp() {
  ball.dy = -ball.speed;
}

function moveDown() {
  ball.dy = ball.speed;
}


function keyDown(e) {
 if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  }
}

function keyUp(e) {
  if (

  e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'
  ) {
    ball.dx = 0;
    ball.dy = 0;
  }
}



init();
animate();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

}

