let x = 0;
let y = 400;
let spacing = 30;

function setup(){
    canvas = createCanvas(400,400);
    canvas.parent('board');
    background(14,54,158);

}

function draw(){

    maze();

}



function maze(){
    strokeWeight(6);
    stroke(255);
    if (random(1)<0.5){
        line(x,y,x+spacing,y-spacing);
    } else{
        line(x,y-spacing,x+spacing,y);
    }

    x = x + spacing;
    if (x > width) {
        x = 0;
        y = y-spacing;
    }
}

