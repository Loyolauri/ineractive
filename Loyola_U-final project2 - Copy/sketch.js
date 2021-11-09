var img;
let value= 0;
let value2= 1000;
function preload() {
  img = loadImage("BW_rabbiteye.jpg");
}
function setup() {

  createCanvas(800, 800 );
}

function draw() {
  background(1000);
  image(img, 150, 80,);

  ///moving eye left
let xc =constrain(mouseX, 344, 395);
let xs =constrain(mouseY, 342,396);
fill(0);
noStroke();
ellipse(xc,xs,35);
///  moving right eye
let xr =constrain(mouseX, 456, 507);
let xt =constrain(mouseY, 342,396);
fill(0);
ellipse(xr,xt,35);

///disappearing rabbit
fill(value);
rect(12,90,160,140);
ellipse(50,70,60);
ellipse(135,70,60,);

fill(1000);
ellipse(50,120,45);
ellipse(135,120,45);
ellipse(90,190,85,40);
ellipse(92,150,15,10)
fill(1);
ellipse(50,105,20);
ellipse(135,105,20);

///screaming rabbit

strokeWeight(3);
fill(10);
ellipse(689,700,180);
ellipse(640,602,35,100);
ellipse(740,602,35,100);

rect(610,722,160,50,20);
fill(1000);

ellipse(650,675,30,70);
ellipse(730,675,30,70);
fill(value2);
rect(618,734,140,25,6);







}
function mouseMoved(){
  value = value + 2;
  if (value > 255){
    value = 0;
  }

}
function mousePressed() {
  if (value2 === 1000) {
    value2 = 0;
  } else {
    value2 = 1000;
  }
}
