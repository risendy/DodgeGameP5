let numberOfLevels = 1;
let turretsMap = {};
let crossesMap = {};
let startingBoxMap = {};
let centerBoxMap = {};
let endingBoxMap = {};
let wallsMap = {};
let ballsMap = {};

let ballsCoordinatesLevel1 = [{
    x: 100,
    y: 100,
    vx: 0,
    vy: 2.5,
    diameter: 25,
    color: 0
  },
  {
    x: 142,
    y: 250,
    vx: 0,
    vy: -2.5,
    diameter: 25,
    color: 0
  },
  {
    x: 184,
    y: 100,
    vx: 0,
    vy: 2.5,
    diameter: 25,
    color: 0
  },
  {
    x: 226,
    y: 250,
    vx: 0,
    vy: -2.5,
    diameter: 25,
    color: 0
  },
  {
    x: 268,
    y: 100,
    vx: 0,
    vy: 2.5,
    diameter: 25,
    color: 0
  },
  {
    x: 310,
    y: 250,
    vx: 0,
    vy: -2.5,
    diameter: 25,
    color: 0
  },
];

ballsMap[1] = {};
ballsMap[2] = ballsCoordinatesLevel1;
ballsMap[3] = {};
ballsMap[4] = {};

let turretCoordinatesLevel1 = [{
    x: 100,
    y: 0,
    vx: 0,
    vy: 0.5,
    diameter: 30,
    color: 'yellow'
  },
  {
    x: 150,
    y: 0,
    vx: 0,
    vy: 0.5,
    diameter: 30,
    color: 'yellow'
  },
  {
    level: 0,
    x: 200,
    y: 0,
    vx: 0,
    vy: 0.5,
    diameter: 30,
    color: 'yellow'
  },
  {
    x: 250,
    y: 0,
    vx: 0,
    vy: 0.5,
    diameter: 30,
    color: 'yellow'
  },
  {
    x: 350,
    y: 210,
    vx: -0.5,
    vy: 0,
    diameter: 30,
    color: 'yellow'
  },
  {
    x: 350,
    y: 150,
    vx: -0.5,
    vy: 0,
    diameter: 30,
    color: 'yellow'
  }
];

turretsMap[1] = turretCoordinatesLevel1;
turretsMap[2] = {};
turretsMap[3] = {};
turretsMap[4] = {};

let crossesCoordinatesLevel3 = [{
    x: 205,
    y: 185,
    rotationCenterX: 205,
    rotationCenterY: 185,
    numberOfCircles: 8,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 130,
    y: 110,
    rotationCenterX: 130,
    rotationCenterY: 110,
    numberOfCircles: 4,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 280,
    y: 110,
    rotationCenterX: 280,
    rotationCenterY: 110,
    numberOfCircles: 4,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 130,
    y: 260,
    rotationCenterX: 130,
    rotationCenterY: 260,
    numberOfCircles: 4,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 280,
    y: 260,
    rotationCenterX: 280,
    rotationCenterY: 260,
    numberOfCircles: 4,
    diameter: 15,
    color: 'yellow'
  },
];

let crossesCoordinatesLevel4 = [{
    x: 123,
    y: 100,
    rotationCenterX: 123,
    rotationCenterY: 100,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 205,
    y: 100,
    rotationCenterX: 205,
    rotationCenterY: 100,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 290,
    y: 100,
    rotationCenterX: 290,
    rotationCenterY: 100,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 290,
    y: 185,
    rotationCenterX: 290,
    rotationCenterY: 185,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 205,
    y: 185,
    rotationCenterX: 205,
    rotationCenterY: 185,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 123,
    y: 185,
    rotationCenterX: 123,
    rotationCenterY: 185,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 123,
    y: 270,
    rotationCenterX: 123,
    rotationCenterY: 270,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 205,
    y: 270,
    rotationCenterX: 205,
    rotationCenterY: 270,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
  {
    x: 290,
    y: 270,
    rotationCenterX: 290,
    rotationCenterY: 270,
    numberOfCircles: 3,
    diameter: 15,
    color: 'yellow'
  },
];

crossesMap[1] = [];
crossesMap[2] = [];
crossesMap[3] = crossesCoordinatesLevel3;
crossesMap[4] = crossesCoordinatesLevel4;

let wallCoordinatesLevel1 = [{
    x1: 0,
    y1: 0,
    x2: 78,
    y2: 0,
    color: 'black'
  },
  {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 135,
    color: 'black'
  },
  {
    x1: 0,
    y1: 135,
    x2: 78,
    y2: 135,
    color: 'black'
  },
  {
    x1: 80,
    y1: 0,
    x2: 80,
    y2: 60,
    color: 'black'
  },
  {
    x1: 80,
    y1: 135,
    x2: 80,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 135,
    x2: 80,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 135,
    x2: 80,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 310,
    x2: 330,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 60,
    x2: 330,
    y2: 60,
    color: 'black'
  },
  {
    x1: 330,
    y1: 60,
    x2: 330,
    y2: 250,
    color: 'black'
  },
  {
    x1: 330,
    y1: 250,
    x2: 400,
    y2: 250,
    color: 'black'
  },
  {
    x1: 400,
    y1: 250,
    x2: 400,
    y2: 385,
    color: 'black'
  },
  {
    x1: 400,
    y1: 385,
    x2: 330,
    y2: 385,
    color: 'black'
  },
  {
    x1: 330,
    y1: 385,
    x2: 330,
    y2: 310,
    color: 'black'
  },
];

let wallCoordinatesLevel4 = [{
    x1: 0,
    y1: 0,
    x2: 78,
    y2: 0,
    color: 'black'
  },
  {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 135,
    color: 'black'
  },
  {
    x1: 0,
    y1: 135,
    x2: 78,
    y2: 135,
    color: 'black'
  },
  {
    x1: 80,
    y1: 0,
    x2: 80,
    y2: 60,
    color: 'black'
  },
  {
    x1: 80,
    y1: 135,
    x2: 80,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 135,
    x2: 80,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 135,
    x2: 80,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 310,
    x2: 330,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 60,
    x2: 330,
    y2: 60,
    color: 'black'
  },
  {
    x1: 330,
    y1: 60,
    x2: 330,
    y2: 250,
    color: 'black'
  },
  {
    x1: 330,
    y1: 250,
    x2: 400,
    y2: 250,
    color: 'black'
  },
  {
    x1: 400,
    y1: 250,
    x2: 400,
    y2: 385,
    color: 'black'
  },
  {
    x1: 400,
    y1: 385,
    x2: 330,
    y2: 385,
    color: 'black'
  },
  {
    x1: 330,
    y1: 385,
    x2: 330,
    y2: 310,
    color: 'black'
  },
  {
    x1: 80,
    y1: 146,
    x2: 250,
    y2: 146,
    color: 'black'
  },
  {
    x1: 330,
    y1: 230,
    x2: 165,
    y2: 230,
    color: 'black'
  },
];


wallsMap[1] = wallCoordinatesLevel1;
wallsMap[2] = wallCoordinatesLevel1;
wallsMap[3] = wallCoordinatesLevel1;
wallsMap[4] = wallCoordinatesLevel4;

let centerBoxLevel1 = [{
  rows: 6,
  cols: 6,
  squareSize: 42,
  offsetX: 80,
  offsetY: 60,
  colorX: 'white',
  colorY: '#e7ece6'
}, ];

centerBoxMap[1] = centerBoxLevel1;
centerBoxMap[2] = centerBoxLevel1;
centerBoxMap[3] = centerBoxLevel1;
centerBoxMap[4] = centerBoxLevel1;

let startingBoxLevel1 = [{
  x: 0,
  y: 0,
  w: 79,
  h: 135,
  color: '#77E751'
}, ];

startingBoxMap[1] = startingBoxLevel1;
startingBoxMap[2] = startingBoxLevel1;
startingBoxMap[3] = startingBoxLevel1;
startingBoxMap[4] = startingBoxLevel1;

let endingBoxLevel1 = [{
  x: 325,
  y: 255,
  w: 60,
  h: 135,
  color: '#77E751'
}, ];

endingBoxMap[1] = endingBoxLevel1;
endingBoxMap[2] = endingBoxLevel1;
endingBoxMap[3] = endingBoxLevel1;
endingBoxMap[4] = endingBoxLevel1;