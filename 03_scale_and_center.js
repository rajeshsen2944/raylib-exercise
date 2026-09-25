const r = require("raylib");
const title = "Center a Rectangle";
const windowWidth = 1000;
const windowHeight = 1000;

const outsideRecWidth = 200;
const outsideRecHeight = 100;

const centerRecHeight = 0.8;
const centerRecWidth = 0.5;

const coordinateOutRecX = 10;
const coordinateOutRecY = 10;

function recCenterPosition(windowSize, recSize, coordinateOutsideRec) {
  return (windowSize - recSize) / 2 + coordinateOutsideRec;
}

function recDimentionCalculate(windowSize, perSize) {
  return windowSize * perSize;
}


function setup() {
  r.InitWindow(windowWidth, windowHeight, title);
  r.SetTargetFPS(50);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  
  r.DrawRectangle(
    coordinateOutRecX,
    coordinateOutRecY,
    outsideRecWidth,
    outsideRecHeight,
    r.WHITE,
  );
  r.DrawRectangle(
    recCenterPosition(
      outsideRecWidth,
      recDimentionCalculate(centerRecWidth, outsideRecWidth),
      coordinateOutRecY,
    ),
    recCenterPosition(
      outsideRecHeight,
      recDimentionCalculate(centerRecHeight, outsideRecHeight),
      coordinateOutRecX,
    ),

    recDimentionCalculate(centerRecWidth, outsideRecWidth),
    recDimentionCalculate(centerRecHeight, outsideRecHeight),
    r.RED,
  );
  r.EndDrawing();
}


function loop() {
  while (!r.WindowShouldClose()) {
    draw();
  }
  
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

main();
