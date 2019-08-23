const level1 = (p) => {
  p5.disableFriendlyErrors = true;
  let game = [];
  let turrets = [];
  
  let cross = new Cross(
    200,
    200,
    6,
    25
  );

  p.setup = function() {
    p.createCanvas(400, 400);

    goBackButton = p.createButton('Go back');
    goBackButton.position(p.width + 20, p.height + 20);
    goBackButton.mousePressed(p.goBack);
    
    tryAgainButton = p.createButton('Try again');
    tryAgainButton.position(p.width + 20, p.height + 40);
    tryAgainButton.mousePressed(p.resetLevel);

    game = new Game(1, this);
  }

  p.goBack = function() {
    p.remove();
    new p5(welcomeScreen);
  }
  
  p.resetLevel = function() {
    game.reset();
  }

  p.draw = function() {
    p.background(255);

    game.loadLevel1();
  }

}

const welcomeScreen = (p) => {

  p.setup = function() {
    p.createCanvas(400, 400);

    scoreElem = p.createDiv('Welcome to the game');
    scoreElem.position(p.width / 2 - 100, p.height / 2);
    scoreElem.id = 'score';
    scoreElem.style('color', 'black');
    scoreElem.style('font-size', '16pt');

    newGameButton = p.createButton('Level 1');
    newGameButton.position(15, p.height / 2 + 50);
    newGameButton.mousePressed(p.startLevel1);
  }

  p.draw = function() {
    p.background(255);

    p.noFill();
    p.stroke(0);
    p.strokeWeight(3);
    p.rect(5, p.height - 160, p.width - 15, 150);
  }

  p.startLevel1 = function() {
    p.remove();
    new p5(level1);
  }

}

new p5(level1);