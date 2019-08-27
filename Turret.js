var bullets = [];
let bulletColor = 0;

class Turret {
  constructor(x, y, vx, vy, diameter, color, obj) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.diameter = diameter;
    this.color = color;
    this.obj = obj;
  }

  show() {
    this.obj.push();
    //this.obj.fill('blue');
    this.obj.stroke( 0, 50, 180 );

    scribble.scribbleFilling( [this.x, this.x+30, this.x+30, this.x], [this.y+35, this.y+35, this.y+5, this.y+5], gap, angleScribble);
    scribble.scribbleRect( this.x+15, this.y+20, this.diameter, this.diameter );

    //this.obj.square(this.x, this.y, this.diameter);
    this.obj.pop();
  }

  update() {
    for (let i = bullets.length - 1; i >= 0; i--) {
      bullets[i].show();
      bullets[i].update();

      if (bullets[i].isOutOfScreen()) {
        bullets.splice(i, 1);
      }
    }
  }

  shoot() {
    if (this.obj.frameCount % 50 == 0) {

      let bullet = new Bullet(
        this.x + 15,
        this.y + 15,
        this.vx,
        this.vy,
        10,
        bulletColor,
        this.obj
      );

      bullets.push(bullet);
    }
  }
}