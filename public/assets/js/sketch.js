var circles = [];


function setup(){
    var canvas = createCanvas(400,400);
    canvas.parent('board');
    
    for(var i = 1;i<5;i++){
        circle = new Circle(i*80,100);
        circles.push(circle);
    }
    for(var i = 1;i<5;i++){
        circle = new Circle(i*80,300);
        circles.push(circle);
    }
}

function draw(){
    background(168,mouseX/3,mouseY/2);

    circles.forEach(function(circle){
        circle.render()
    })

}





function Circle(x,y){
    this.x = x;
    this.y = y;
    this.render = function(){
        noStroke();
        fill(mouseX/2,mouseY/1.5,mouseX/mouseY);
        if(mouseX>200){
            ellipse(this.x,this.y,mouseY/3,mouseX/3)
        }
        if(mouseX<200){
            ellipse(this.x,this.y,mouseX/3,mouseY/3)
        }
    }
}

