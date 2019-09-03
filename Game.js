class Game {
  constructor(level, obj) {
    this.obj = obj;
    this.hero = new Hero(this.obj);
    this.gameBoard = new GameBoard(level, this.obj);
    this.walls = this.gameBoard.getWalls();
    this.turrets = this.gameBoard.getTurrets();
    this.crosses = this.gameBoard.getCrosses();
    
    this.scoreElem = this.obj.createDiv('Game in progress');
    this.scoreElem.position(0, this.obj.height);
    this.scoreElem.class('game-progress');

    this.deathCountElem = this.obj.createDiv('Death count: ');
    this.deathCountElem.position(160, this.obj.height+5);
    this.deathCountElem.class('death-count-before');

    this.deathCountNumber = this.obj.createSpan('0');
    this.deathCountNumber.position(260, this.obj.height + 9);
    this.deathCountElem.class('death-count-after');
  }

  load() {
    //loading boxes and turrets
    this.gameBoard.show();

    //loading hero
    this.hero.show();
    this.hero.update(this.walls);
    
    if (this.turrets.length > 0 && bullets.length > 0){
      this.hero.isHitByBullets(bullets);
    }
    
    if (this.crosses){
      this.hero.isHitByCrosses(this.crosses);
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
      
      nextLevelButton.removeAttribute('disabled');

      Cookies.set('level_'+(activeLevel+1), 'true', { expires: 365 });
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