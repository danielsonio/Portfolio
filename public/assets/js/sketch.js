var streams = [];
var counter = 1200;
var screenHeight = 200;

function setup() {
    var r = 100;
    var g = 0;
    var b = 100;
    var speed = 5;
    var forward = true;
    var canvas = createCanvas(600, screenHeight);
    canvas.parent('board');
    setInterval(function() {
        
        var stream = new Stream(r,g,b);
        stream.generateSymbol(counter);
        streams.push(stream);
        if (streams.length>50) {
            streams.splice(0,1);
        }
        counter++
       
        if(forward) {
            r+=speed;
            g+=speed;
         
        }

        if(!forward) {
            r-=speed;
            g-=speed;
   
        }

        if(r>200) {
            forward = false;
        }
        if(r<100){
            forward = true;
        }


    }, 300);

}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }




function Symbol(x,y,id,r,g,b) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = 3;
    this.up = true;
    this.setToSymbol = function() {
        this.value = String.fromCharCode(this.id);
    }
    this.move = function() {
        if(this.up) {
            this.y -= this.speed;
        } else {
            this.y += this.speed;
        }
        if(this.y < 0) {
            this.x += 50;
            this.y = 0;
            this.up = false;
        }
        if(this.y > screenHeight) {
            this.x += 50;
            this.y = screenHeight;
            this.up = true;
        }


    }

}

function Stream(r,g,b) {
    this.symbols = [];
    this.generateSymbol = function(counter) {
        symbol = new Symbol(5, screenHeight, counter,r,g,b);
        symbol.setToSymbol();

        this.symbols.push(symbol);


    }
	this.render = function() {
        this.symbols.forEach(function(symbol) {
            fill(symbol.r, symbol.g, symbol.b);
            textSize(44);
            text(symbol.value, symbol.x, symbol.y);
            symbol.move();
        });
    }

}



function draw() {
    background(255);
    streams.forEach(function(stream){
        stream.render();
	});

}
