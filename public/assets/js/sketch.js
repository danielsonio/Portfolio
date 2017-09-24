var symbol_pairs = [];
var canvasWidth = 600;
var canvasHeight = 400;

function setup(){
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('board');

    for(var i = 0; i<1;i++) {
        var symbol_pair = new SymbolPair();
        symbol_pair.generateSymbols();
        symbol_pairs.push(symbol_pair);
    }


}


function draw(){
    background(48,129,232);
    symbol_pairs.forEach(function(symbol_pair) {
        console.log()
        symbol_pair.renderSymbols();
    })
}



function Symbols(x,y){
    this.range = 50;
    this.x = x;
    this.y = y;
    this.size = 50;
    this.index0 = Math.floor((Math.random() * 2000) + 60);
    this.index1 = Math.floor((Math.random() * 2000) + 60);
    this.values = [this.index0, this.index1];
    this.symbols = [];
    this.getSymbols = function(){
        for (var i = 0;i<this.values.length;i++){
            symbol = String.fromCharCode(this.values[i]);
            this.symbols.push(symbol);
        }
    }
}


function SymbolPair(){
    this.pair_array = [];
    this.x = 0;
    this.y = 50;
    this.generateSymbols = function(){
        while(this.y < canvasHeight+50){
            symbol_pair = new Symbols(this.x,this.y);
            symbol_pair.getSymbols();
            this.pair_array.push(symbol_pair);
            this.x+=55;
            // console.log(symbol_pair);
            if(this.x > canvasWidth+80) {
                this.y += 55;
                this.x = 0;
            }
        }

    
    }
    this.renderSymbols = function() {
        this.pair_array.forEach(function(symbol_pair) {
            fill(255,171,34);
            textSize(symbol_pair.size);


            if(mouseX>(symbol_pair.x - symbol_pair.range) && mouseX<(symbol_pair.x + symbol_pair.range) && mouseY>(symbol_pair.y - symbol_pair.range) && mouseY<(symbol_pair.y + symbol_pair.range)) {
                fill(255,206,125);
                text(symbol_pair.symbols[1], symbol_pair.x, symbol_pair.y);
            } else {
                text(symbol_pair.symbols[0], symbol_pair.x, symbol_pair.y);
            }
        });
    }
}
