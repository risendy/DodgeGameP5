class GameBoard {
  constructor(level, obj) {
    this.obj = obj;

    this.startingBox = [];
    this.centerBox = [];
    this.endingBox = [];
    this.walls = [];
    this.turrets = [];
    this.crosses = [];
    this.level = level;
    this.levelObj = new Level(level, obj);
    this.turrets = this.levelObj.initTurrets();
    this.crosses = this.levelObj.initCrosses();
    this.startingBox = this.levelObj.initStartingBox();
    this.centerBoxes = this.levelObj.initCenterBox();
    this.endingBox = this.levelObj.initEndingBox();
    this.walls = this.levelObj.initWalls();
  }

  show() {
    this.startingBox.show();
    this.endingBox.show();

    if (this.walls) {
      for (let i = 0; i < this.walls.length; i++) {
        this.walls[i].show();
      }
    }

    if (this.centerBoxes) {
      for (let i = 0; i < this.centerBoxes.length; i++) {
        this.centerBoxes[i].show();
      }
    }

    if (this.turrets) {
      for (let i = 0; i < this.turrets.length; i++) {
        this.turrets[i].show();
        this.turrets[i].shoot();
        this.turrets[i].update();
      }
    }

    if (this.crosses) {
      for (let i = 0; i < this.crosses.length; i++) {
        this.crosses[i].show();
      }
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
  
  getCrosses() {
    return this.crosses;
  }
}