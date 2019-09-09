class Wall{
  constructor(x1, y1, x2, y2, color, obj) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.obj = obj;
  }
  
  show(){
    this.obj.push();
    this.obj.fill(0);
    this.obj.stroke(0);
    this.obj.strokeWeight(3);
    this.obj.line(this.x1, this.y1, this.x2, this.y2);
    this.obj.pop();
  }
}
