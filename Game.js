class Game {
  constructor(level, obj) {
    this.obj = obj;
    this.hero = new Hero(this.obj);
    this.gameBoard = new GameBoard(level, this.obj);
    this.walls = this.gameBoard.getWalls();
    this.turrets = this.gameBoard.getTurrets();
    this.scoreElem = this.obj.createDiv('Game in progress');
    this.scoreElem.position(0, this.obj.height);
    this.scoreElem.style('color', 'black');

    this.deathCountElem = this.obj.createDiv('Death count: ');
    this.deathCountElem.position(0, this.obj.height + 15);
    this.deathCountElem.style('color', 'black');

    this.deathCountNumber = this.obj.createSpan('0');
    this.deathCountNumber.position(90, this.obj.height + 15);
    this.deathCountNumber.style('color', 'black');
  }

  load() {
    //loading boxes and turrets
    this.gameBoard.show();

    //loading hero
    this.hero.show();
    this.hero.update(this.walls);
    
    if (this.turrets.length > 0 && bullets.length > 0){
      this.hero.isHit(bullets);
    }
      
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