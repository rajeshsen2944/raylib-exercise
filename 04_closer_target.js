const r = require("raylib");
const windowTitle = "Find the Closer Target";

const target1posX = 300;
const target1posY = 100;

const target2posX = 100;
const target2posY = 200;

const sourcePosX = 400;
const sourcePosY = 300;

let minTargetPosX;
let minTargetPosY;

function setup() {
  r.InitWindow(700, 1000, windowTitle);
  r.SetTargetFPS(60);
}

function ball(posX, posY, color) {
  const borderRedius = 35;
  const redius = borderRedius - 5;
  r.DrawCircle(posX, posY, borderRedius, r.WHITE);
  r.DrawCircle(posX, posY, redius, color);
}

function measureDistance(pos1, pos2) {
  return ((sourcePosX - pos1) ** 2 + (sourcePosY - pos2) ** 2) ** 0.5;
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  ball(sourcePosX, sourcePosY, r.RED); //source
  ball(target1posX, target1posY, r.PURPLE); //target1
  ball(target2posX, target2posY, r.BLUE); //target2

  if (
    measureDistance(target1posX, target1posY) >
    measureDistance(target2posX, target2posY)
  ) {
    minTargetPosX = target2posX;
    minTargetPosY = target2posY;
  } else {
    minTargetPosX = target1posX;
    minTargetPosY = target1posY;
  }
  r.DrawLine(sourcePosX, sourcePosY, minTargetPosX, minTargetPosY, r.BLACK);
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
