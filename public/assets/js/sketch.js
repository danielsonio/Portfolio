let snow = [];
let gravity;

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.01);

    for (let i = 0; i < 350; i++) {
        let x = random(width);
        let y = random(height);
        snow.push(new Snowflake(x, y));
    }
}

function draw() {
    background(0);
    // snow.push(new Snowflake());

    let wx = map(mouseX, mouseY / 2, width, -1, 1);
    let wind = createVector(wx, 0);

    for (flake of snow) {
        flake.applyForce(gravity);
        flake.applyForce(wind);
        flake.render();
        flake.update();
    }

    // for (let i = snow.length-1; i >= 0; i--) {
    //     if (snow[i].offScreen()) {
    //         snow.splice(i, 1);
    //     }
    // }
}



function getRandomSize() {

    let r = pow(random(0.2, 1), 5);
    return constrain(r * 24, 2, 36);

    // let r = randomGaussian() * 10;
    // return constrain(abs(r * r), 2, 36);


    // while (true) {
    //     let r1 = random(1);
    //     let r2 = random(1);
    //     if (r2 > r1) {
    //         return r1 * 36;
    //     }

    // }

}

class Snowflake {

    constructor(sX, sY) {
        let x = sX || random(width);
        let y = sY || random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0.1);
        this.acc = createVector();
        this.angle = random(TWO_PI);
        this.dir = (random(1) > 0.5) ? 1 : -1;
        this.xOff = 0;
        this.r = getRandomSize();
    }

    applyForce(force) {
        let f = force.copy();
        f.mult(this.r);

        this.acc.add(f);
    }

    randomize() {
        let x = random(width);
        let y = random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0.1);
        this.acc = createVector();
        this.r = getRandomSize();

    }

    update() {

        this.xOff = sin(this.angle) * this.r;

        this.vel.add(this.acc);
        this.vel.limit(this.r * 0.2);

        if (this.vel.mag() < 1) {
            this.vel.normalize();
        }
     
        this.pos.add(this.vel);
        this.acc.mult(0);

        if (this.pos.y > height + this.r) {
            this.randomize();
        }

        this.angle += this.dir * this.vel.mag() / 200;
    }

    render() {

        push()
        translate(this.pos.x + this.xOff, this.pos.y)
        rotate(this.angle);
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y);
        pop();
    }

    offScreen() {
        return (this.pos.y > height + this.r);
    }
}
