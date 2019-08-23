let bullets = [];
let bulletColor = 'yellow';

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
    this.obj.fill(this.color);
    this.obj.square(this.x, this.y, this.diameter);
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