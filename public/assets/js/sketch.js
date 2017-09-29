let angle = 0;
var boxes = [];

function setup() {
    canvas = createCanvas(400,400);
    canvas.parent('board');
    angleMode(DEGREES);
    x = 25;
    y = 25;

    setInterval(function(){
        box = new Box(x,y);
        boxes.push(box);
        x+=50;
        angle+=1;
        if(x>width){
            x = 25;
            y+=50;
        }
        if(boxes.length>65){
            boxes.splice(0,1);
        }
    },250);

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
        rect(0,0,50,10);
        pop();;
        angle+=.1;
    }
}
