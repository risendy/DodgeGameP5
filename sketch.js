var activeLevel = [];
var scribble = [];
var gap = 6;
var angleScribble = 315;

const level = (p) => {
  p5.disableFriendlyErrors = true;
  let game = [];

  p.setup = function() {
    p.createCanvas(400, 450);

    goBackButton = p.createButton('Go back');
    goBackButton.position(0, p.height - 40);
    goBackButton.mousePressed(p.goBack);
    goBackButton.class('go-back-btn');

    tryAgainButton = p.createButton('Try again');
    tryAgainButton.class('try-again-btn');
    tryAgainButton.position(p.width - 200, p.height - 40);
    tryAgainButton.mousePressed(p.resetLevel);
    
    nextLevelButton = p.createButton('Next level');
    nextLevelButton.position(p.width - 100, p.height - 40);
    nextLevelButton.attribute('disabled', '');
    nextLevelButton.class('go-back-btn');
    nextLevelButton.mousePressed(p.loadNextLevel);

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
  
  p.loadNextLevel = function() {
     activeLevel++;

     p.remove();
     new p5(level); 
  }

  p.draw = function() {
    p.background(255);

    game.load();
  }
}

const welcomeScreen = (p) => {
  let cookies = Cookies.get();  
  let img = [];

  p.setup = function() {
    p.createCanvas(400, 400);

    Level1Button = p.createButton('1');
    Level1Button.position(25, p.height / 2 + 50);
    Level1Button.mousePressed(p.startLevel1);
    Level1Button.class('btn-circle');

    Level2Button = p.createButton('2');
    Level2Button.attribute('disabled', '');
    Level2Button.position(70, p.height / 2 + 50);
    Level2Button.class('btn-circle');
    
    Level3Button = p.createButton('3');
    Level3Button.attribute('disabled', '');
    Level3Button.position(115, p.height / 2 + 50);
    Level3Button.class('btn-circle');
    
    Level4Button = p.createButton('4');
    Level4Button.attribute('disabled', '');
    Level4Button.position(160, p.height / 2 + 50);
    Level4Button.class('btn-circle');
    
    if (cookies.level_2) {
          Level2Button.removeAttribute('disabled');
          Level2Button.mousePressed(p.startLevel2);
    }
    
    if (cookies.level_3) {
          Level3Button.removeAttribute('disabled');
          Level3Button.mousePressed(p.startLevel3);
    }
    
    if (cookies.level_4) {
          Level4Button.removeAttribute('disabled');
          Level4Button.mousePressed(p.startLevel4);
    }

    scribble = new Scribble(this);
    scribble.numEllipseSteps = 2;
    scribble.bowing = 0.1;
    scribble.roughness = 0.5;
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
  
  p.startLevel3 = function() {
    p.remove();
    activeLevel = 3;
    new p5(level);
  }
  
  p.startLevel4 = function() {
    p.remove();
    activeLevel = 4;
    new p5(level);
  }

}

new p5(welcomeScreen);