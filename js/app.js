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
class Enemy{
    constructor(x,y,speed){
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
       
    }
    update(dt){
        if (this.x < 500){
            this.x += this.speed*dt;
        }
        else{
            this.x = 0;
        }
    }


    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
    }
}
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
        // if( player.x >= this.x -40 && player.x <=this.x + 40 ){
        //     if( player.y >= this.y -40 && player.y <=  this.y+40 ){
        //         player.x = 200;
        //         player.y = 400;
        //     }
        // }   a.y + a.height > b.y) return true;

        // if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
        //     dy = -dy;
        // }
        for (const enemy of allEnemies){
            if(this.x >= enemy.x && this.x <= enemy.x+30 && 
            this.y >= enemy.y && this.y <= enemy.y+30) {
                this.x = 200;
                this.y=415;
            }
        }
        // if (this.y<-20){
        //     alert('you win')
        // }
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
    }

    handleInput(move){
        // This if statement moves a player to the left
        // As long as they are not past their left boundary
        if(move=="left" && this.x>this.leftBoundary){
            this.x-=this.horizontalMove;
        }
        else if (move == "up" && this.y>this.upBoundary){
                this.y-=this.verticalMove;
        }
        else if (move=="right" && this.x<this.rightBoundary){
                this.x+=this.horizontalMove;
        }
        else if (move=="down" && this.y<this.downBoundary){
            this.y+=this.verticalMove;
        }
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


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
