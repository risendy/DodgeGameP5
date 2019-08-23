class Game {
  constructor(level, obj) {
    this.turrets = [];
    this.obj = obj;
    this.hero = new Hero(this.obj);
    this.gameBoard = new GameBoard(level, this.obj);
    this.walls = this.gameBoard.getWalls();

    this.scoreElem = this.obj.createDiv('Game in progress');
    this.scoreElem.position(0, this.obj.height);
    this.scoreElem.style('color', 'black');

    this.deathCountElem = this.obj.createDiv('Death count: ');
    this.deathCountElem.position(0, this.obj.height + 15);
    this.deathCountElem.style('color', 'black');

    this.deathCountNumber = this.obj.createSpan('0');
    this.deathCountNumber.position(90, this.obj.height + 15);
    this.deathCountNumber.style('color', 'black');

    if (level == 1) {
      var self = this;
      
      turretCoordinatesLevel1.forEach(function(item) {
        let turret = new Turret(
          item.x,
          item.y,
          item.vx,
          item.vy,
          item.diameter,
          item.color,
          obj
        );

        self.turrets.push(turret);

      });

    }
  }

  loadLevel1() {
    this.gameBoard.showLevel1();

    for (let i = 0; i < this.turrets.length; i++) {
      this.turrets[i].show();
      this.turrets[i].shoot();
      this.turrets[i].update();
    }

    this.hero.show();
    this.hero.update(this.walls);
    this.hero.isHit(bullets);

    this.checkIfHeroIsAlive();
    this.checkIfGameIsCompleted();
  }

  checkIfHeroIsAlive() {
    if (!this.hero.isAlive) {
      this.hero.deathCount++;
      this.obj.noLoop();
      this.scoreElem.html('Game ended!');
      this.deathCountNumber.html(this.hero.deathCount);
    }
  }

  checkIfGameIsCompleted() {
    let endingBox = this.gameBoard.getEndingBox();

    if (this.obj.collideRectRect(this.hero.x, this.hero.y, this.hero.diameter, this.hero.diameter, endingBox.x, endingBox.y, endingBox.w, endingBox.h)) {
      this.obj.noLoop();
      this.scoreElem.html('Level completed!');
    }
  }

  reset() {
    this.hero.isAlive = true;
    this.hero.color = 'red';
    this.hero.x = 25;
    this.hero.y = 25;
    this.scoreElem.html('Game in progress');
    this.obj.loop();
  }
}