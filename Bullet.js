class Bullet {
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
    this.obj.fill(this.color);
    this.obj.circle(this.x, this.y, this.diameter);
    this.obj.pop();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  isOutOfScreen() {
    if (this.x < 0 || this.x > this.obj.width || this.y < 0 || this.y > this.obj.width) {
      return true;
    }
    
    return false;
  }
}