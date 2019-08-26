let angle = 0.00;

class Cross {
  constructor(x, y, rotationCenterX, rotationCenterY, numberOfCircles, diameter, color, obj) {
    this.x = x;
    this.y = y;
    this.rotationCenterX = rotationCenterX;
    this.rotationCenterY = rotationCenterY;
    this.obj = obj;
    this.numberOfCircles = numberOfCircles;
    this.diameter = diameter;
    this.color = color;
    this.circles = [];

    this.initCircles();
  }

  initCircles() {
    let radius = 0;
    let circles = [];
    let counter = 15;

    for (let i = 0; i < this.numberOfCircles; i++) {
      let circleObj = new Circle(i, this.x, this.y, this.rotationCenterX, this.rotationCenterY, radius, 0.03, true, this.obj);
      //let circleObjNext = new Circle(i, this.x, this.y, this.rotationCenterX, this.rotationCenterY, radius, 0.03, false, this.obj);
      
      this.circles.push(circleObj);
      //this.circles.push(circleObjNext);

      radius += 15;
    }
  }

  show() {
    this.obj.fill(0);
    this.obj.push();

    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].show();
      this.circles[i].update();
    }
    
    this.obj.pop();
  }

  update() {

  }
  
  getCircles(){
     return this.circles; 
  }
}