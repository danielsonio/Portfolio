var squares = [];
var canvas;
var square_count;

function setup() {

  if (windowWidth < 400) {
    var canvas = createCanvas(300, 300);
    canvas.parent('board');
    square_count = 50
  } else {
    var canvas = createCanvas(800, 800);
    canvas.parent('board');
    square_count = 250
  }

  while (squares.length < square_count) {

    var red = Math.floor((Math.random() * 255) + 1)
    var green = Math.floor((Math.random() * 255) + 1)
    var blue = Math.floor((Math.random() * 255) + 1)

    var square = {
      x: random(width),
      y: random(height),
      r: random(14, 32),
      red: red,
      green: green,
      blue: blue
    };

    var overlapping = false;

    for (var j = 0; j< squares.length; j++) {
      var other = squares[j];
      var d = dist(square.x, square.y, other.x, other.y);
      if (d < square.r + other.r) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      squares.push(square);
      console.log("overlap");         
    }

 
  }


  console.log(squares.length);

  
}



function draw() {

  for (var i = 0; i < squares.length; i++) {

      fill(squares[i].red, squares[i].green, squares[i].blue);
      noStroke();

      rect(squares[i].x, squares[i].y, squares[i].r*2, squares[i].r*2);
  }

}