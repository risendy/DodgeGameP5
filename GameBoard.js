class GameBoard {
  constructor(level, obj) {
    this.obj = obj;

    this.startingBox = [];
    this.centerBox = [];
    this.endingBox = [];
    this.walls = [];
    this.turrets = [];
    this.level = level;
    this.levelObj = new Level(level, obj);
    this.turrets = this.levelObj.initTurrets();
    this.startingBox = this.levelObj.initStartingBox();
    this.centerBox = this.levelObj.initCenterBox();
    this.endingBox = this.levelObj.initEndingBox();
    this.walls = this.levelObj.initWalls();
  }

  show() {
    this.startingBox.show();
    this.endingBox.show();

    if (this.walls) {

      for (var i = 0; i < this.walls.length; i++) {
        this.walls[i].show();
      }
    }

    this.centerBox.show();

    for (let i = 0; i < this.turrets.length; i++) {
      this.turrets[i].show();
      this.turrets[i].shoot();
      this.turrets[i].update();
    }
  }

  getEndingBox() {
    return this.endingBox;
  }

  getWalls() {
    return this.walls;
  }

  getTurrets() {
    return this.turrets;
  }
}