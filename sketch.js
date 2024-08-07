let cor;
let posicaoHorizontal2; // x
let posicaoVertical2; // y
let posicaoHorizontal;
let posicaoVertical;




function setup() {
 
  createCanvas(400, 400);// whidth x height
  background("red");
cor = color(random(0, 255), random(0, 255), random(0, 255));

posicaoHorizontal = 0;
posicaoVertical = random(height);
posicaoHorizontal2 = 0;
posicaoVertical2 = random(height);
}

function draw() {
 
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  circle(posicaoHorizontal2, posicaoVertical2, 50);



  posicaoHorizontal+= random(0, 3);
     posicaoVertical+=random(-3, 3);
  posicaoHorizontal2+= random(0, 3);
    posicaoVertical2+=random(-3, 3);
  
  
  if(mouseX < posicaoHorizontal)
posicaoHorizontal = posicaoHorizontal - 1;


if(mouseX > posicaoHorizontal) 
   posicaoHorizontal = posicaoHorizontal + 1;


if(mouseY < posicaoVertical)
posicaoVertical--;


if(mouseY > posicaoVertical)
posicaoVertical++;


if(mouseIsPressed)
cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));

}