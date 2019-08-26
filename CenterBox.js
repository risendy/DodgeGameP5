class CenterBox
{
  constructor(x, y, w, h, rows, cols, colorX, colorY, obj){
    this.x = x;
    this.y = y;
    this.w = w
    this.h = h;
    this.rows = rows;
    this.cols = cols;
    this.colorX = colorX;
    this.colorY = colorY;
    this.obj = obj;
  }
  
  show(){
      this.drawCheckBoardBox();
  }
  
  drawCheckBoardBox() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        if ((i + j) % 2 == 0) {
          this.obj.fill(this.colorX);
        } else {
          this.obj.fill(this.colorY);
        }
        this.obj.rect(i * this.h + this.x, j * this.h + this.y, this.h, this.h);
      }
    }
  }
}