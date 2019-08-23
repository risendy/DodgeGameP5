class LandingBox{
  constructor(x, y, w, h, color, obj) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.obj = obj;
  }
  
  show(){
    this.obj.push();
    this.obj.noStroke();
    this.obj.fill(this.color);
    this.obj.rect(this.x, this.y, this.w, this.h);
    this.obj.pop();
  }
}
