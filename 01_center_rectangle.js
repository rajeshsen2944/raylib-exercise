const g = require("./geometry")
const r = require("raylib");

const title = "Center a Rectangle";   //window Property
const WIDTH = 900;
const HEIGHT = 1000;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, title);
  r.SetTargetFPS(50);
  r.SetWindowState(r.FLAG_WINDOW_RESIZABLE);
}


function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  r.CloseWindow();
}



const recWidth = 500;
const recHeight = 200;

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  r.DrawRectangle(
    g.calcOffset(WIDTH, recWidth),
    g.calcOffset(HEIGHT, recHeight),
    recWidth,
    recHeight,
    r.WHITE,
  );


  r.EndDrawing();
}


module.exports = {
  setup,
  draw,
  running,
  teardown,
}