let score=document.getElementById('number');
let score1=document.getElementById('hs');
let start=document.getElementById('start');
start.onclick=function(){
const canvas = document.getElementById('canvas');
if(canvas.getContext)
{
const ctx = canvas.getContext('2d');

 const circle = {
   x: 500,
   y: 620,
   size: 10,
   dx: 0,
   dy: 0,
speed:5,
score:0
 };


 function drawCircle() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
 

ctx.beginPath();
ctx.fillStyle='red';
ctx.arc(500,225,70,0,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='green';
ctx.arc(500,225,70,0,((Math.PI)*3)/2,true);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='green';
ctx.arc(500,225,70,(Math.PI)/2,(Math.PI));
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(500,225,60,0,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='black';
ctx.rect(0,220,430,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='purple';
ctx.rect(570,220,430,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle='green';
ctx.moveTo(490,0);
ctx.lineTo(470,40);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle='green';
ctx.moveTo(510,0);
ctx.lineTo(530,40);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle='green';
ctx.moveTo(490,640);
ctx.lineTo(470,600);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle='green';
ctx.moveTo(510,640);
ctx.lineTo(530,600);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='blue';
ctx.rect(0,430,430,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='red';
ctx.rect(570,430,430,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='violet';
ctx.arc(500,435,70,0,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='green';
ctx.arc(500,435,70,0,(Math.PI)/2);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='green';
ctx.arc(500,435,70,(Math.PI),(Math.PI)*1.5);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(500,435,60,0,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = 'green';
   ctx.arc(circle.x, circle.y, circle.size, 0, 10);
  ctx.fill();
ctx.closePath();

 }
function newPos() {
    circle.x+=circle.dx;
  circle.y += circle.dy;
circle.score-=circle.dy;
score.innerHTML='Score:'+circle.score;
hs.innerHTML='High Score:'+circle.score;
  detectWalls();
}

function detectWalls() {

  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
     circle.dy *= -1;   }
 if (circle.x+ circle.size > canvas.width || circle.x - circle.size < 0) {
     circle.dx *= -1;   }

}


function update()
{

drawCircle();
newPos();

requestAnimationFrame(update);
 }

function moveUp() {
  circle.dy = -circle.speed;
}

function moveDown() {
  circle.dy = circle.speed;
}

function moveRight() {
  circle.dx = circle.speed;
}

function moveLeft() {
  circle.dx = -circle.speed;
}

function keyDown(e) {
if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveLeft();
  }
else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  }
}

function keyUp(e) {
  if (
e.key == 'Right' ||
    e.key == 'ArrowRight' ||
    e.key == 'Left' ||
    e.key == 'ArrowLeft' ||
    e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'
  ) {
    circle.dx = 0;
    circle.dy = 0;
  }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


}

}


