const level1 = ( p ) => {
  let hero = [];

  let turrets = [];
  let cross = new Cross(
      200,
      200,
      6,
      25
  );

  p.setup = function() {
    p.createCanvas(400, 400);

    hero = new Hero(this);

    newGameButton = p.createButton('New game');
    newGameButton.position(p.width+20, p.height+20);
    newGameButton.mousePressed(p.resetLevel);

    scoreElem = p.createDiv('Game in progress');
    scoreElem.position(p.width, p.height);
    scoreElem.id = 'score';
    scoreElem.style('color', 'black');

    let turret = new Turret(
        150,
        0,
        30,
        'yellow',
        this
    );

    turrets.push(turret);
  }

  p.resetLevel = function() {
    p.remove();
    new p5(welcomeScreen);
  }

  p.startLevel1 = function() {
    for (let i = 0; i < turrets.length; i++) {
      turrets[i].show();
      turrets[i].shoot();
      turrets[i].update();
    }

    hero.show();
    hero.update();
    hero.isHit(bullets);

    if (!hero.isAlive) {
      noLoop();
      scoreElem.html('Game ended!');
    }
    //cross.show();
  }

  p.draw = function() {
    p.background(255);

    for (let i = 0; i < turrets.length; i++) {
      turrets[i].show();
      turrets[i].shoot();
      turrets[i].update();
    }

    hero.show();
    hero.update();
    hero.isHit(bullets);

    if (!hero.isAlive) {
      p.noLoop();
      scoreElem.html('Game ended!');
    }
  }

}

const welcomeScreen = ( p ) => {

  p.setup = function() {
    p.createCanvas(400, 400);

    scoreElem = p.createDiv('Welcome to the game');
    scoreElem.position(p.width/2, p.height/2);
    scoreElem.id = 'score';
    scoreElem.style('color', 'black');

    newGameButton = p.createButton('New Game');
    newGameButton.position(p.width/2+20, p.height/2+20);
    newGameButton.mousePressed(p.startLevel1);
  }

  p.draw = function() {
    p.background(255);
  }

  p.startLevel1 = function() {
    p.remove();
    new p5(level1);
  }

}

new p5(welcomeScreen);