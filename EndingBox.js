class EndingBox{
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
   
    this.obj.stroke(149, 254, 124);
    scribble.scribbleFilling( [this.x+80, this.x+5, this.x+5, this.x+80], [this.y+130, this.y+130, this.y-5, this.y-5], gap, angleScribble);
    scribble.scribbleRect( this.x+40, this.y+65, this.w+10, this.h );
    
    this.obj.pop();
  }
}
