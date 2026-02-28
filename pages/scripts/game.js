var s;
var step = 20;
var food;

var snake_col;
var bg_col;
var food_col;
var grid_col;

function setup() {
    snake_col = color(0, 255, 0)
    grid_col = color(0,100, 0)
    bg_col = color(0)
    food_col = color(255,0,0)

    createCanvas(400, 400)
    frameRate(10)
    s = new snake()
    pick_location()
}

function draw() {
    noStroke()
    background(bg_col)

    s.death()
    s.update()
    s.show()

    fill(food_col)
    rect(food.x, food.y, step);

    if (s.eat(food)) {
        pick_location()
        update_score()
    }

    setup_grid()
}

function setup_grid () {
    stroke(grid_col)
    noFill()
    for (var i=0; i < window.width/step; i++) {
        for (var p =0; p < window.height/step; p++) {
            rect(i*step,p*step, step)
        }
    }
}

function pick_location() {

    var cols = floor(width / step);
    var rows = floor(height / step);
    var valid = false;
    while (!valid) {
        var newFood = createVector(
            floor(random(cols)),
            floor(random(rows))
        );
        newFood.mult(step);
        valid = true;

        if (newFood.x === s.x && newFood.y === s.y) {
            valid = false;
        }

        for (var i = 0; i < s.tail.length; i++) {
            if (newFood.x === s.tail[i].x &&
                newFood.y === s.tail[i].y) {
                valid = false;
                break;
            }
        }
        
        if (valid) {
            food = newFood;
        }
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW && s.y_speed != 1) {
        s.dir(0, -1)
    } else if (keyCode === DOWN_ARROW && s.y_speed != -1){
        s.dir(0, 1)
    } else if (keyCode === LEFT_ARROW && s.x_speed != 1) {
        s.dir(-1, 0)
    } else if (keyCode === RIGHT_ARROW && s.x_speed != -1) {
        s.dir(1, 0)
    }
}

function restart_game() {
    s.total = 0;
    update_score()
    s = new snake()
    pick_location()
}

function update_score() {
    document.getElementById("score_counter").innerText = "Score: "+s.total
}

function snake() {
    this.x = 0;
    this.y = 0;
    this.x_speed = 0;
    this.y_speed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function() {
        for (var i=0; i < this.tail.length-1; i++) {
            this.tail[i] = this.tail[i+1]
        }
        this.tail[this.total-1] = createVector(this.x, this.y)

        this.x = this.x + this.x_speed*step;
        this.y = this.y + this.y_speed*step;

        if (this.x <0 || this.x > width-step || this.y < 0 || this.y > height-step) {
            restart_game()
        }
    }

    this.eat = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 2) {
            this.total++;
            return true
        } else {
            return false
        }
    }

    this.show = function () {
        fill(0, 255, 0)
        for (var i=0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, step, step)
        }
        fill(0, 255, 0)
        rect(this.x, this.y, step, step);
    }

    this.death = function () {
        for (var i=0; i < this.tail.length; i++) {
            var pos = this.tail[i]
            var d = dist(this.x, this.y, pos.x, pos.y);

            if (d < 2) {
                restart_game()
            }
        }
    }

    this.dir = function(x, y) {
        this.x_speed = x;
        this.y_speed = y;
    }
}