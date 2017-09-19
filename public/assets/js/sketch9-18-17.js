var lines = [];
var particles = [];


function setup() {
	var canvas = createCanvas(600, 600);
	
	timePush();
	canvas.mousePressed(particlePush);

}

function timePush() {
	setInterval(pushLine, 400);
  	// setInterval(particlePush, 500);	
}




function particlePush() {
  particles.push(new Particle(mouseX, mouseY));
  if(particles.length > 8) {
    particles.splice(0, 1);
  }
}


function pushLine() {
	lines.push(new Line());
	if(lines.length > 20) {
		lines.splice(0, 1);
	}
		console.log(lines.length);	
}

function draw() {
	background(52, 0, 52, 50);


	for (var i = 0; i < lines.length; i++) {
		lines[i].render();
		lines[i].update();
	}

	for(var i = 0; i < particles.length; i++) {
	    particles[i].update();
	    particles[i].show();
	  }	

}

function letters() {

}

function Line() {
	this.x = 0;
	this.y = 0;
	this.speed = 3;
	this.offset = 20;
	this.color = color(random(255), random(255), random(255));
	this.render = function() {
		stroke(this.color);
		line(this.x, 0, this.x, height);
		// line(this.x-this.offset, 0, this.x-this.offset, height);
		line(0, this.y, width, this.y);
	}
	this.update = function() {
		this.x += this.speed;
		if (this.x > width) {
			this.x = 0;
		}
		this.y += this.speed;
		if (this.y > width) {
			this.y = 0;
		}
	}
}


function Particle(x, y) {
    this.x = x;
    this.y = y;
  
    this.yspeed = 0;
  
    this.history = [];
  
    this.update = function() {
      this.y += random(-10, 10);
      this.x += random(-10, 10);
  
  
      var v = createVector(this.x, this.y);
      this.history.push(v);
      console.log(this.history.length);
  
      if(this.history.length > 50) {
        this.history.splice(0, 1);
      }
    }
  
    this.show = function() {
  
      noFill();
      beginShape();
      for (var i = 0; i < this.history.length; i++) {
        noStroke();      
        var pos = this.history[i];
        fill(255, 10);
        ellipse(pos.x, pos.y, i*2, i*2);
        // vertex(pos.x, pos.y);
      }
      endShape();
    }
    
  }