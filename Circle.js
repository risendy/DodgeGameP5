var radius = 15;
var frequency = 1;
var angleSum = 0.0;

class Circle {
  constructor(id, x, y, rotationCenterX, rotationCenterY, radius, angle, even, obj) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.rotationCenterX = rotationCenterX;
    this.rotationCenterY = rotationCenterY;
    this.radius = radius;
    this.angle = angle;
    this.angleInit = 0.0;
    this.even = even;
    this.obj = obj;
    //this.scribbleNew = new Scribble(this.obj);

    //this.scribbleNew.bowing = 1.5;
    //this.scribbleNew.roughness = 1.2;
  }

  show() {
    this.obj.push();

    this.obj.stroke(0);
    this.obj.fill(0, 120);

    //this.scribbleNew.scribbleFilling([this.x - 3, this.x + 5, this.x + 5, this.x - 3], [this.y - 5, this.y - 5, this.y + 5, this.y + 5], gap, angleScribble);

    //this.scribbleNew.scribbleRoundedRect(this.x, this.y, 15, 15, 15);

    this.obj.circle(this.x, this.y, 15);
    this.obj.push();
  }

  update() {
    if (this.id != 0) {
      this.x = this.rotationCenterX + this.obj.cos(this.angleInit) * this.radius;
      this.y = this.rotationCenterY + this.obj.sin(this.angleInit) * this.radius;

      //console.log(angleSum);

      //if (!this.even && angleSum > 60){
      //    this.angleInit += this.angle;
      //}

      if (this.even === true) {
        this.angleInit += this.angle;
      }

      angleSum += this.angle;
    }

  }
}