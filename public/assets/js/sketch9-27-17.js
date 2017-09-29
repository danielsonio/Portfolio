var circles = [];


function setup(){
    var canvas = createCanvas(600,400);
    canvas.parent('board');
    setInterval(function(){
        circle = new Circle(300, 400,mouseY,mouseX,mouseX/3);
        circles.push(circle);
        if(circles.length>7){
            circles.splice(0,1);
        }
    },1000);

}

function draw(){
    background(255);

    circles.forEach(function(circle){
        circle.render()
    })

}





function Circle(x,y,r,g,b){
    this.x = x;
    this.y = y;
    this.size = 5;
    this.r = r;
    this.g = g;
    this.b = b;
    this.render = function(){
        noStroke();
        fill(this.r,this.g,this.b);
        ellipse(this.x,this.y,this.size,this.size);
        this.size+=3;
    }
}