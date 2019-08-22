let angle = 0.00;

class Cross
{
  constructor(x, y, numberOfCircles, diameter, color) {
    this.x = x;
    this.y = y;
    this.numberOfCircles = numberOfCircles;
    this.diameter = diameter;
    this.color = color;
  }
  
  show() {
    fill(0);
    let counter=0;

    push();
    translate(this.x, this.y);
    rotate(angle);
    
    for (let i=0; i<this.numberOfCircles; i++){
      circle(counter, 0, 15);
      
      counter+=15;
    }
    
    angle = angle +0.03;
    pop();
  }

  update() {
    
  }
}
