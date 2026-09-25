const r = require("raylib");
const title = "Center a Rectangle";

const windowWidth = 1000;
const windowHeight = 1000;

const outsideRecWidth = 200;
const outsideRecHeight = 200;

const centerRecHeight = 50;
const centerRecWidth = 50;

const coordinateOutRecX = 200;
const coordinateOutRecY = 200;

function recCenterPosition(windowSize, recSize, coordinateOutsideRec) {
  return (windowSize - recSize) / 2 + coordinateOutsideRec;
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
    recCenterPosition(outsideRecWidth, centerRecWidth, coordinateOutRecX),
    recCenterPosition(outsideRecHeight, centerRecHeight, coordinateOutRecY),
    centerRecWidth,
    centerRecHeight,
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
