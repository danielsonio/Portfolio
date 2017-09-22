var streams = [];
var counter = 1200;
var screenHeight = 200;

function setup() {
    createCanvas(600, screenHeight);
    setInterval(function() {
        var stream = new Stream();
        stream.generateSymbol(counter);
        streams.push(stream);
        if (streams.length>50) {
            streams.splice(0,1);
        }
        counter++
    }, 200);

}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }




function Symbol(x,y,id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.r = getRandomInt(0,255);
    this.g = getRandomInt(0,255);
    this.b = getRandomInt(0,255);
    this.up = true;
    this.setToSymbol = function() {
        this.value = String.fromCharCode(this.id);
    }
    this.move = function() {
        if(this.up) {
            this.y -= 5;
        } else {
            this.y += 5;
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

function Stream() {
    this.symbols = [];
    this.generateSymbol = function(counter) {
        symbol = new Symbol(5, screenHeight, counter);
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
