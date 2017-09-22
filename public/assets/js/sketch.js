var streams = [];
var counter = 1205;
var screenHeight = 200;

function setup() {
    createCanvas(600, screenHeight);
    setInterval(function() {
        var stream = new Stream();
        stream.generateSymbol(counter);
        streams.push(stream);
        counter++
    }, 100);

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
    this.setToSymbol = function() {
        this.value = String.fromCharCode(this.id);
    }
    this.move = function() {
        this.y -= 5;
        if(this.y < 0) {
            this.x += 35;
            this.y = screenHeight;
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
            textSize(34);
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

