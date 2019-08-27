class Level {
  constructor(level, obj) {
    this.level = level;
    this.obj = obj;
    this.self = this;
    this.turrets = [];
    this.startingBox = [];
    this.centerBoxes = [];
    this.endingBox = [];
    this.walls = [];
    this.crosses = [];
  }

  initStartingBox() {
    let self = this;

    startingBoxMap[this.level].forEach(function(item) {
      self.startingBox = new LandingBox(
        item.x,
        item.y,
        item.w,
        item.h,
        item.color,
        self.obj
      );
    });

    return this.startingBox;
  }

  initCenterBox() {
    let self = this;

    centerBoxMap[this.level].forEach(function(item) {
      let centerBox = new CenterBox(
        item.offsetX,
        item.offsetY,
        item.squareSize,
        item.squareSize,
        item.rows,
        item.cols,
        item.colorX,
        item.colorY,
        self.obj
      );

      self.centerBoxes.push(centerBox);
    });

    return self.centerBoxes;
  }

  initEndingBox() {
    let self = this;

    endingBoxMap[this.level].forEach(function(item) {
      self.endingBox = new EndingBox(
        item.x,
        item.y,
        item.w,
        item.h,
        item.color,
        self.obj
      );
    });

    return this.endingBox;
  }

  initTurrets() {
    let self = this;

    if (turretsMap[this.level].length > 0) {
      turretsMap[this.level].forEach(function(item) {
        let turret = new Turret(
          item.x,
          item.y,
          item.vx,
          item.vy,
          item.diameter,
          item.color,
          self.obj
        );

        self.turrets.push(turret);
      });
    }

    return this.turrets;
  }
  
  initCrosses() {
    var self = this;

    if (crossesMap[this.level].length > 0) {
      crossesMap[this.level].forEach(function(item) {
        let cross = new Cross(
          item.x,
          item.y,
          item.rotationCenterX,
          item.rotationCenterY,
          item.numberOfCircles,
          item.diameter,
          item.color,
          self.obj
        );

        self.crosses.push(cross);
      });

      return this.crosses;
    }
  }

  initWalls() {
    let self = this;

    if (wallsMap[this.level].length > 0) {
      wallsMap[this.level].forEach(function(item) {
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

      return this.walls;
    }
  }

}