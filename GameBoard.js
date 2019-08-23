class GameBoard {
  constructor(level, obj) {
    this.obj = obj;

    this.boardColorX = 255;
    this.boardColorY = this.obj.color(90.6, 34.1, 0, 110);
    this.startingBoxColor = this.obj.color(119, 231, 81);
    this.startingBox = [];
    this.endingBox = [];
    this.walls = [];

    if (level == 1) {

      var self = this;

      wallCoordinatesLevel1.forEach(function(item) {
        let wall = new Wall(
          item.x1,
          item.y1,
          item.x2,
          item.y2,
          item.color,
          self.obj
        );

        self.walls.push(wall);
      });
      
      startingBoxLevel1.forEach(function(item) {
        self.startingBox = new LandingBox(
          item.x,
          item.y,
          item.w,
          item.h,
          item.color,
          self.obj
        );
      });

      endingBoxLevel1.forEach(function(item) {
        self.endingBox = new LandingBox(
          item.x,
          item.y,
          item.w,
          item.h,
          item.color,
          self.obj
        );
      });
      
    }
  }

  showLevel1() {
    this.startingBox.show();
    this.endingBox.show();
    
    for (var i = 0; i < this.walls.length; i++) {
      this.walls[i].show();
    }
    
    this.drawCheckBoardBox(centerBoxLevel1[0].rows, centerBoxLevel1[0].cols,centerBoxLevel1[0].squareSize, centerBoxLevel1[0].offsetX, centerBoxLevel1[0].offsetY, centerBoxLevel1[0].colorX, centerBoxLevel1[0].colorY);

  }

  drawCheckBoardBox(rows, cols, squareSize, offsetX, offsetY, colorX, colorY) {
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        if ((i + j) % 2 == 0) {
          this.obj.fill(colorX);
        } else {
          this.obj.fill(colorY);
        }
        this.obj.rect(i * squareSize + offsetX, j * squareSize + offsetY, squareSize, squareSize);
      }
    }
  }

  getEndingBox() {
    return this.endingBox;
  }

  getWalls() {
    return this.walls;
  }
}