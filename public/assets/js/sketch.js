var symbol_parts = [];
var canvasWidth = 400;
var canvasHeight = 600;

function setup(){
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('board');

    var min = 2100;
    var max = 3000;

    var change_button = document.querySelector('#newunicode');
    change_button.addEventListener("click", function() {
        symbol_parts = [];
        generateBody(0x21,20000);
    });

    generateBody(0x21,20000);

}


function draw(){
    background(242,226,217);
    symbol_parts.forEach(function(symbol_string) {
        symbol_string.render();
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


function Symbols(x,y, utf, max, size){
    this.range = 50;
    this.x = x;
    this.y = y;
    this.size = size;
    this.symbol_string = '';
    this.getSymbols = function(){
        for (var i = 0;i<this.size;i++){
            value = getRandomInt(0, max)
            symbol = String.fromCodePoint(utf + value);
            this.symbol_string += symbol;
        }
    }
}


function SymbolString(){
    this.body = [];
    this.generateSymbol = function(x,y, utf,max,size){
        body_part = new Symbols(x,y,utf,max,size);
        body_part.getSymbols();
        this.body.push(body_part);
    }
    this.render = function(){
        this.body.forEach(function(body_part) {
            fill(88);
            textSize(12);
            text(body_part.symbol_string, body_part.x, body_part.y)
        })
    }
}



//Create the body by passing in starting UTF value and max span
function generateBody(utf,max){
    //head position variables
    var right_side = 250;
    var left_side = 145;

    //TOP OF THE HEAD
    head_1 = new SymbolString();
    head_1.generateSymbol(left_side+5,80,utf,max,11);
    symbol_parts.push(head_1);

    //LEFT SIDE OF THE HEAD
    head_2 = new SymbolString();
    head_2.generateSymbol(left_side,95,utf,max,1);
    symbol_parts.push(head_2);

    head_3 = new SymbolString();
    head_3.generateSymbol(left_side,110,utf,max,1);
    symbol_parts.push(head_3);

    head_4 = new SymbolString();
    head_4.generateSymbol(left_side,125,utf,max,1);
    symbol_parts.push(head_4);

    head_5 = new SymbolString();
    head_5.generateSymbol(left_side,140,utf,max,1);
    symbol_parts.push(head_5);

    head_6 = new SymbolString();
    head_6.generateSymbol(left_side,155,utf,max,1);
    symbol_parts.push(head_6);

    head_7 = new SymbolString();
    head_7.generateSymbol(left_side,170,utf,max,1);
    symbol_parts.push(head_7);

    //RIGHT SIDE OF THE HEAD
    head_8 = new SymbolString();
    head_8.generateSymbol(right_side,95,utf,max,1);
    symbol_parts.push(head_8);

    head_9 = new SymbolString();
    head_9.generateSymbol(right_side,110,utf,max,1);
    symbol_parts.push(head_9);

    head_10 = new SymbolString();
    head_10.generateSymbol(right_side,125,utf,max,1);
    symbol_parts.push(head_10);

    head_11 = new SymbolString();
    head_11.generateSymbol(right_side,140,utf,max,1);
    symbol_parts.push(head_11);

    head_12 = new SymbolString();
    head_12.generateSymbol(right_side,155,utf,max,1);
    symbol_parts.push(head_12);

    head_13 = new SymbolString();
    head_13.generateSymbol(right_side,170,utf,max,1);
    symbol_parts.push(head_13);
    
    //EYES
    left_eye = new SymbolString();
    left_eye.generateSymbol(180,105,utf,max,1)
    symbol_parts.push(left_eye);

    right_eye = new SymbolString();
    right_eye.generateSymbol(218,105,utf,max,1)
    symbol_parts.push(right_eye);

    //NOSE
    nose = new SymbolString();
    nose.generateSymbol(200,130,utf,max,1)
    symbol_parts.push(nose);

    //MOUTH 
    mouth = new SymbolString();
    mouth.generateSymbol(180,155,utf,max,6);
    symbol_parts.push(mouth);


    //JAW
    jaw = new SymbolString();
    jaw.generateSymbol(left_side+5,180,utf,max,11);
    symbol_parts.push(jaw);


    //NECK
    neck_1 = new SymbolString();
    neck_1.generateSymbol(200,200,utf,max,1);
    symbol_parts.push(neck_1);

    neck_2 = new SymbolString();
    neck_2.generateSymbol(200,235,utf,max,1);
    symbol_parts.push(neck_2);

    //SHOULDERS
    shoulders = new SymbolString();
    shoulders.generateSymbol(left_side-25,250,utf,max,16);
    symbol_parts.push(shoulders);



    //ARMS

    left_arm_1 = new SymbolString();
    left_arm_1.generateSymbol(left_side - 25,280,utf,max,1);
    symbol_parts.push(left_arm_1);

    right_arm_1 = new SymbolString();
    right_arm_1.generateSymbol(right_side+15,280,utf,max,1);
    symbol_parts.push(right_arm_1);

    left_arm_2 = new SymbolString();
    left_arm_2.generateSymbol(left_side - 25,310,utf,max,1);
    symbol_parts.push(left_arm_2);

    right_arm_2 = new SymbolString();
    right_arm_2.generateSymbol(right_side+15,310,utf,max,1);
    symbol_parts.push(right_arm_2);

    left_arm_3 = new SymbolString();
    left_arm_3.generateSymbol(left_side - 25,340,utf,max,1);
    symbol_parts.push(left_arm_3);

    right_arm_3 = new SymbolString();
    right_arm_3.generateSymbol(right_side+15,340,utf,max,1);
    symbol_parts.push(right_arm_3);

    left_arm_4 = new SymbolString();
    left_arm_4.generateSymbol(left_side - 25,370,utf,max,1);
    symbol_parts.push(left_arm_4);

    right_arm = new SymbolString();
    right_arm.generateSymbol(right_side+15,370,utf,max,1);
    symbol_parts.push(right_arm);



    //ABDOMEN
    
    chest_1 = new SymbolString();
    chest_1.generateSymbol(left_side + 25, 280,utf,max, 6);
    symbol_parts.push(chest_1);

    chest_2 = new SymbolString();
    chest_2.generateSymbol(left_side + 25, 310,utf, max, 6);
    symbol_parts.push(chest_2);

    chest_3 = new SymbolString();
    chest_3.generateSymbol(left_side + 25, 340,utf, max, 6);
    symbol_parts.push(chest_3);

    chest_4 = new SymbolString();
    chest_4.generateSymbol(left_side + 25, 370,utf, max, 6);
    symbol_parts.push(chest_4);


    //HIPS
    hips = new SymbolString();
    hips.generateSymbol(left_side+5, 400,utf,max,10);
    symbol_parts.push(hips);


    //LEGS
    left_leg_1 = new SymbolString();
    left_leg_1.generateSymbol(left_side,430,utf,max,2);
    symbol_parts.push(left_leg_1);

    right_leg_1 = new SymbolString();
    right_leg_1.generateSymbol(right_side-30,430,utf,max,2);
    symbol_parts.push(right_leg_1);

    left_leg_2 = new SymbolString();
    left_leg_2.generateSymbol(left_side,460,utf,max,2);
    symbol_parts.push(left_leg_2);

    right_leg_2 = new SymbolString();
    right_leg_2.generateSymbol(right_side-30,460,utf,max,2);
    symbol_parts.push(right_leg_2);

    left_leg_3 = new SymbolString();
    left_leg_3.generateSymbol(left_side,490,utf,max,2);
    symbol_parts.push(left_leg_3);

    right_leg_3 = new SymbolString();
    right_leg_3.generateSymbol(right_side-30,490,utf,max,2);
    symbol_parts.push(right_leg_3);

    left_leg_4 = new SymbolString();
    left_leg_4.generateSymbol(left_side+3,520,utf,max,1);
    symbol_parts.push(left_leg_4);

    right_leg_4 = new SymbolString();
    right_leg_4.generateSymbol(right_side-33,520,utf,max,1);
    symbol_parts.push(right_leg_4);

    left_leg_5 = new SymbolString();
    left_leg_5.generateSymbol(left_side+3,550,utf,max,1);
    symbol_parts.push(left_leg_5);

    right_leg_5 = new SymbolString();
    right_leg_5.generateSymbol(right_side-33,550,utf,max,1);
    symbol_parts.push(right_leg_5);


    //FEET
    left_foot = new SymbolString();
    left_foot.generateSymbol(left_side- 20,580, utf, max, 4);
    symbol_parts.push(left_foot);

    right_foot = new SymbolString();
    right_foot.generateSymbol(right_side-30,580,utf, max, 4);
    symbol_parts.push(right_foot);



}



