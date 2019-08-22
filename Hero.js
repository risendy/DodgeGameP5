class Hero {
  constructor(obj) {
    this.x = 25;
    this.y = 25;
    this.diameter = 15;
    this.color = 'red';
    this.isAlive = true;
    this.obj = obj;
  }


  update() {
    if (this.obj.keyIsDown(this.obj.LEFT_ARROW)) {
      this.x -= 2;
    }

    if (this.obj.keyIsDown(this.obj.RIGHT_ARROW)) {
      this.x += 2;
    }

    if (this.obj.keyIsDown(this.obj.UP_ARROW)) {
      this.y -= 2;
    }

    if (this.obj.keyIsDown(this.obj.DOWN_ARROW)) {
      this.y += 2;
    }
  }

  isHit(bullets){
    for (let i=0; i<bullets.length; i++) {
      let isHit =  this.obj.collideRectCircle(this.x,this.y,15,15,bullets[i].x,bullets[i].y,10);
      
      if (isHit)
      {
        this.color = 'black';
        this.isAlive = false;
      }
    }
  }
    
  show() {
    this.obj.fill(this.color);
    this.obj.square(this.x, this.y, this.diameter);
  }
}