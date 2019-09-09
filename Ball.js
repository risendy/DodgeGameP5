class Ball {
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
    this.obj.fill(this.color, 200);

    this.obj.circle(this.x, this.y, this.diameter);
    this.obj.pop();
  }
  
  update(){
      this.x += this.vx;
      this.y += this.vy;
  }
  
  checkForCollisionsWithWalls(walls)
  {
      for (let i = 0; i < walls.length; i++) {
        if (this.obj.collideLineCircle(walls[i].x1, walls[i].y1, walls[i].x2, walls[i].y2, this.x, this.y, this.diameter)) {
          this.vx = this.vx * -1;
          this.vy = this.vy * -1;
        }
      }
  }
}