// Enemies our player must avoid
// var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
//     this.sprite = 'images/enemy-bug.png';
// };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
// };

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

// This is the enemy class re written in ES 6
class Enemy{
    constructor(x,y,speed){
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
       
    }
    // This function updates the enemy's position
    update(dt){
        if (this.x < 500){
            this.x += this.speed*dt;
        }
        else{
            this.x = 0;
        }
    }

    // This function draws the the enemies on the canvas
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
    }
}

// This is a player class and initialises the player's x and y cordinates.
// It initialises the left,right,downward and upward boundaries.
// It also inittialises the horizontal and vertical steps a player takes
class Player{
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 415;
        this.leftBoundary=0; 
        this.rightBoundary = 415; 
        this.upBoundary = -10;
        this.downBoundary = 415;
        this.horizontalMove = 20;
        this.verticalMove = 30;
    }
    update(){
        // This for loop checks for collision between the player and the enemy.
        for (const enemy of allEnemies){
            if(this.x >= enemy.x && this.x <= enemy.x+30 && 
            this.y >= enemy.y && this.y <= enemy.y+30) {
                this.x = 200;
                this.y=415;
            }
        }
    }
    // This function draws a player on the canvas
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
    }

    handleInput(move){
        // This moves a player to the left
        // As long as they are not past their left boundary
        if(move=="left" && this.x>this.leftBoundary){
            this.x-=this.horizontalMove;
        }
        // This moves a player upward
        // As long as they are not past their upperboundary
        else if (move == "up" && this.y>this.upBoundary){
                this.y-=this.verticalMove;
        }
        // This moves a player to the right
        // As long as they are not past their right boundary
        else if (move=="right" && this.x<this.rightBoundary){
                this.x+=this.horizontalMove;
        }
        // This moves a player downward
        // As long as they are not past their bottom boundary
        else if (move=="down" && this.y<this.downBoundary){
            this.y+=this.verticalMove;
        }
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
 enemy1 = new Enemy(-100,100,100);
 enemy2 = new Enemy(-100,145,100);
 enemy3 = new Enemy(-100,230,100);
 enemy4 = new Enemy(-100,200,150);
 enemy5 = new Enemy(-100,145,80);
 enemy6 = new Enemy(-100,60,150);
 enemy7 = new Enemy(-100,145,200);
 enemy8 = new Enemy(-100,60,300);
 enemy9 = new Enemy(-100,230,250)
const allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9];
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
