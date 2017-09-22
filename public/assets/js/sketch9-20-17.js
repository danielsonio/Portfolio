function setup() {
    createCanvas(400, 400);
  
    setInterval(function(){
        latinChar(65,89);
    },50)
  }
  
  
  function draw() {
    background(156,244,167,10);
  }
  
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  
  
  function latinChar(x,y) {
    var string_length = getRandomInt(2,5);
    var char = "";
    var string = "";
    for(var i = 0; i < string_length;i++) {
        var t = getRandomInt(x,y);
        char = String.fromCharCode(t);
        string += char;
    }
  
    renderCharacters(string);
  }
  
  
  function renderCharacters(char) {
    var x = getRandomInt(8,44);
    fill(255,168,133);
    textSize(x);
    text(char, random(width), random(height));
  }