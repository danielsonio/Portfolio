let angle = 0;
var boxes = [];

function setup() {
    canvas = createCanvas(400,400);
    canvas.parent('board');
    angleMode(DEGREES);
    x = 50;
    y = 50;


    for(var i = 0; i<16; i++){
        box = new Box(x,y);
        boxes.push(box);
        x+=100;
        angle+=1;
        if(x>width){
            x = 50;
            y+=100;
        }
    }
    
}

function draw() {
    background(255,252,210);
    boxes.forEach(function(box){

        box.render();
    
    });

}

function Box(x,y){
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.render = function(){
        rectMode(CENTER);
        noStroke();
        push();
        translate(this.x,this.y);
        scale(-1,1);
        rotate(angle);
        fill(229,209,250);
        rect(0,0,100,10);
        pop();;
        angle+=.1;
    }
}
