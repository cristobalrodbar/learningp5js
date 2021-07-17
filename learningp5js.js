var angle = 0;
//var h = 100;
//var w = 100;
var h = 150;
var w = 150;
var contador = 0;

function setup() {
  //createCanvas(400, 400, WEBGL);
  createCanvas(360,360, WEBGL);

}

function draw() {
  pointLight(255,255,255,200,0,400);
  pointLight(200,200,200,200,0,600);
  //pointLight(120,120,120,-500,0,600);

  background(47,56,73);
  //background('rgba(0,0,0, 0)');
  //camera(0,-50,0,0,0,0,0,0,0);
    rotateX(0.1);

  perspective(0, 0, 0, -200)
  //perspective(0, 0, 0, -300)
  //ortho(0,0,0,0,-500,500);
  
  translate(0,-20,0);
  rotateX(0.4);
  //rotateY(0.5);
  rotateY(angle);

  //rotateX(0.24);
  //rotateY(angle);
  
  ambientMaterial(240,87,104);
  box(w,h,w);
  //box(w,h,w);
  
  if(contador < 62){
   //save("cubo"+contador);
  }
  //0.5 - 31
  //0.0025 - 62
  angle += 0.025;
  contador++;
}
