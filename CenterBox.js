class CenterBox {
  constructor(x, y, w, h, rows, cols, colorX, colorY, obj) {
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

  show() {
    this.drawCheckBoardBox();
  }

  drawCheckBoardBox() {
    this.obj.stroke(80);
    
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        let xCor = i * this.h + this.x;
        let yCor = j * this.h + this.y;
        
        if ((i + j) % 2 == 0) {
          scribble.scribbleFilling([xCor, xCor + 42, xCor + 42, xCor], [yCor + 42, yCor + 42, yCor, yCor], gap, angleScribble);
          //this.obj.fill(this.colorX);
        } else {
          //this.obj.fill(this.colorY);
        }

        //scribble.scribbleRect(xCor + 13, yCor + 14, this.h, this.h);

        this.obj.rect(i * this.h + this.x, j * this.h + this.y, this.h, this.h);
      }
    }
  }
}