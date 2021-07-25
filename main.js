var angle = 0;
var h = 150;
var w = 150;
var c = 0;

function setup() {
  createCanvas(360,360, WEBGL);
}

function draw() {
  pointLight(255,255,255,200,0,400);
  pointLight(200,200,200,200,0,600);
  background(47,56,73);
  rotateX(0.1);
  perspective(0, 0, 0, -200)
  translate(0,-20,0);
  rotateX(0.4);
  rotateY(angle);
  ambientMaterial(240,87,104);
  box(w,h,w);

   if(c < 62){
    //save("cube"+c);
    print(c);
    angle += 0.025;
    c++;
  }else if(c == 62){
    print('Done. Convert to GIF');
    c++;
  }
}
