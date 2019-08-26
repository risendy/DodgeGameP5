var activeLevel = [];

const level = (p) => {
  p5.disableFriendlyErrors = true;
  let game = [];

  p.setup = function() {
    p.createCanvas(400, 400);
        
    goBackButton = p.createButton('Go back');
    goBackButton.position(p.width + 20, p.height + 20);
    goBackButton.mousePressed(p.goBack);
    
    tryAgainButton = p.createButton('Try again');
    tryAgainButton.position(p.width + 20, p.height + 40);
    tryAgainButton.mousePressed(p.resetLevel);
    
    game = new Game(activeLevel, this);
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

    Level1Button = p.createButton('Level 1');
    Level1Button.position(15, p.height / 2 + 50);
    Level1Button.mousePressed(p.startLevel1);
    
    Level2Button = p.createButton('Level 2');
    Level2Button.position(85, p.height / 2 + 50);
    Level2Button.mousePressed(p.startLevel2); 
    
    img = p.loadImage('assets/img/html5_game.png');
  }

  p.draw = function() {
    p.background(255);

    p.image(img, 110, 0);
    
    p.noFill();
    p.stroke(0);
    p.strokeWeight(3);
    p.rect(5, p.height - 160, p.width - 15, 150);
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