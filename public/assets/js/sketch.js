var symbol_pairs = [];

function setup(){
    var canvas = createCanvas(400, 400);
    canvas.parent('board');

    for(var i = 0; i<2;i++) {
        var symbol_pair = new SymbolPair(300,300);
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
    this.index0 = Math.floor((Math.random() * 2000) + 60);
    this.index1 = Math.floor((Math.random() * 2000) + 60);
    this.values = [this.index0, this.index1];
    this.symbols = [];
    this.getSymbols = function(value){
        for (var i = 0;i<this.values.length;i++){
            symbol = String.fromCharCode(this.values[i]);
            this.symbols.push(symbol);
        }
    }
}


function SymbolPair(){
    this.pair_array = [];
    this.x = 0;
    this.y = 30;
    this.generateSymbols = function(){
        for (var i = 0; i<70; i++){
            symbol_pair = new Symbols(this.x,this.y);
            symbol_pair.getSymbols();
            this.pair_array.push(symbol_pair);
            this.x+=55;
            console.log(symbol_pair);
            if(this.x > 400) {
                this.y += 55;
                this.x = 0;
            }
        }

    
    }
    this.renderSymbols = function() {
        this.pair_array.forEach(function(symbol_pair) {
            fill(255,171,34);
            textSize(50);


            if(mouseX>(symbol_pair.x - symbol_pair.range) && mouseX<(symbol_pair.x + symbol_pair.range) && mouseY>(symbol_pair.y - symbol_pair.range) && mouseY<(symbol_pair.y + symbol_pair.range)) {
                fill(255,206,125);
                text(symbol_pair.symbols[1], symbol_pair.x, symbol_pair.y);
            } else {
                text(symbol_pair.symbols[0], symbol_pair.x, symbol_pair.y);
            }
        });
    }
}
