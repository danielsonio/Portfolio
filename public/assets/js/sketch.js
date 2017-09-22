var streams = [];
var counter = Math.floor((Math.random() * 100000) + 1);
var screenHeight = 400;

var button = document.querySelector("#newunicode");

button.addEventListener('click', function() {
    counter = Math.floor((Math.random() * 100000) + 1);

    var elem = document.querySelector('#unicode');
    elem.animate([
      { 
        transform: 'translateY(-1000px) scaleY(2.5) scaleX(.2)', 
        transformOrigin: '50% 0', 
        filter: 'blur(1px)', 
        opacity: 0 
      },
      { 
        transform: 'translateY(0) scaleY(1) scaleX(1)',
        transformOrigin: '50% 50%',
        filter: 'blur(0)',
        opacity: 1 
      }
    ], 1000);

})





function setup() {
    var r = 100;
    var g = 0;
    var b = 100;
    var color_meter = 5;
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
       console.log("Unicode Index Number:", counter);
       document.getElementById("unicode").innerHTML = counter;
       
        if(forward) {
            r+=color_meter;
            g+=color_meter;
         
        }

        if(!forward) {
            r-=color_meter;
            g-=color_meter;
   
        }

        if(r>200) {
            forward = false;
        }
        if(r<100){
            forward = true;
        }


    }, 1000);

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
            this.x += 120;
            this.y = 0;
            this.up = false;
        }
        if(this.y > screenHeight+80) {
            this.x += 120;
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
            textSize(80);
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
