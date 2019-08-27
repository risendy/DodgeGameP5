var activeLevel = [];
var scribble = [];
var gap = 6;
var angleScribble = 315;


const level = (p) => {
  p5.disableFriendlyErrors = true;
  let game = [];

  p.setup = function() {
    p.createCanvas(400, 400);

    goBackButton = p.createButton('Go back');
    goBackButton.position(p.width, p.height + 20);
    goBackButton.mousePressed(p.goBack);
    goBackButton.class('go-back-btn');

    tryAgainButton = p.createButton('Try again');
    tryAgainButton.class('try-again-btn');
    tryAgainButton.position(p.width -100, p.height + 20);
    tryAgainButton.mousePressed(p.resetLevel);

    game = new Game(activeLevel, this);
    scribble = new Scribble(this);
    scribble.numEllipseSteps = 2;
    scribble.bowing = 0.1;
    scribble.roughness = 0.6;
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

    game.load();
  }
}

const welcomeScreen = (p) => {

  let img = [];

  p.setup = function() {
    p.createCanvas(400, 400);

    Level1Button = p.createButton('1');
    Level1Button.position(25, p.height / 2 + 50);
    Level1Button.mousePressed(p.startLevel1);
    Level1Button.class('btn-circle');

    Level2Button = p.createButton('2');
    Level2Button.position(70, p.height / 2 + 50);
    Level2Button.mousePressed(p.startLevel2);
    Level2Button.class('btn-circle');

    //img = p.loadImage('assets/img/html5_game.png');

    scribble = new Scribble(this);
    scribble.numEllipseSteps = 2;
    scribble.bowing = 0.3;
    scribble.roughness = 1;
  }

  p.drawCheckBoard = function() {
    p.push();
    p.strokeWeight(1);
    p.stroke(0, 25);
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        p.rect(i * 20, j * 20, 20, 20);
      }
    }
    p.pop();
  }

  p.draw = function() {
    p.background(255);

    //p.image(img, 110, 0);

    p.push();
    p.textSize(36);
    p.textFont('Comic Sans MS');
    p.text('Doodle game', 100, 120);
    p.pop();
    
    p.push();
    p.textSize(24);
    p.textFont('Comic Sans MS');
    p.text('Level select', 12, 220);
    p.pop();

    p.noFill();
    p.stroke(40);
    p.strokeWeight(2);

    p.drawCheckBoard();

    scribble.scribbleRect(200, 290, 380, 100);

    //p.rect(5, p.height - 160, p.width - 15, 150);
  }

  p.startLevel1 = function() {
    p.remove();
    activeLevel = 1;
    new p5(level);
  }

  p.startLevel2 = function() {
    p.remove();
    activeLevel = 2;
    new p5(level);
  }

}

new p5(welcomeScreen);