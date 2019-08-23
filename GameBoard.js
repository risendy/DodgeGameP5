class GameBoard {
  constructor(obj) {
    this.obj = obj;

    this.boardColorX = 255;
    this.boardColorY = this.obj.color(90.6, 34.1, 0, 110);
    this.startingBoxColor = this.obj.color(119, 231, 81);
    this.startingBox = [];
    this.endingBox = [];
    this.walls = [];

    this.wall = new Wall(0, 0, 78, 0, 'black', this.obj);
    this.wall2 = new Wall(0, 0, 0, 135, 'black', this.obj);
    this.wall3 = new Wall(0, 135, 78, 135, 'black', this.obj);
    this.wall4 = new Wall(80, 0, 80, 60, 'black', this.obj);
    this.wall5 = new Wall(80, 135, 80, 310, 'black', this.obj);
    this.wall6 = new Wall(80, 310, 330, 310, 'black', this.obj);
    this.wall7 = new Wall(80, 60, 330, 60, 'black', this.obj);
    this.wall8 = new Wall(330, 60, 330, 250, 'black', this.obj);
    this.wall9 = new Wall(330, 250, 400, 250, 'black', this.obj);
    this.wall10 = new Wall(400, 250, 400, 385, 'black', this.obj);
    this.wall11 = new Wall(400, 385, 330, 385, 'black', this.obj);
    this.wall12 = new Wall(330, 385, 330, 310, 'black', this.obj);

    this.walls.push(this.wall);
    this.walls.push(this.wall2);
    this.walls.push(this.wall3);
    this.walls.push(this.wall4);
    this.walls.push(this.wall5);
    this.walls.push(this.wall6);
    this.walls.push(this.wall7);
    this.walls.push(this.wall8);
    this.walls.push(this.wall9);
    this.walls.push(this.wall10);
    this.walls.push(this.wall11);
    this.walls.push(this.wall12);
  }

  showLevel1() {
    this.drawCheckBoardBox(10, 10, 25, 80, 60, this.boardColorY, this.boardColorX);

    this.startingBox = new LandingBox(
      0,
      0,
      79,
      135,
      this.obj.color(119, 231, 81),
      this.obj
    );

    this.endingBox = new LandingBox(
      330,
      250,
      70,
      135,
      this.obj.color(119, 231, 81),
      this.obj
    );

    this.startingBox.show();
    this.endingBox.show();

    for (var i = 0; i < this.walls.length; i++) {
      this.walls[i].show();
    }
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
  
  getWalls(){
     return this.walls; 
  }
}