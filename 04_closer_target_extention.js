const r = require("raylib");
const windowTitle = "Find the Closer Target";
r.InitWindow(700, 1000, windowTitle);
r.SetTargetFPS(60);

const target1posX = 300;
const target1posY = 110;
const target2posX = 200;
const target2posY = 250;
const sourcePosX = 400;
const sourcePosY = 300;
let target1Redius = 80;
let target2Redius = 180;
const sourceRedius = 50;

let minTargetPosX;
let minTargetPosY;

function ball(redius, posX, posY, color) {
  const borderRedius = redius + 5;
  r.DrawCircle(posX, posY, borderRedius, r.GRAY);
  r.DrawCircle(posX, posY, redius, color);
}
function measureDistance(pos1, pos2, redius) {
  return ((sourcePosX - pos1) ** 2 + (sourcePosY - pos2) ** 2) ** 0.5 - redius;
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  if (target1Redius < 80) {
    target1Redius++;
  } else {
    target1Redius = 10;
  }
  if (target2Redius < 80) {
    target2Redius += 2;
  } else {
    target2Redius = 10;
  }
  ball(sourceRedius, sourcePosX, sourcePosY, r.RED); //source
  ball(target1Redius, target1posX, target1posY, r.PURPLE); //target1
  ball(target2Redius, target2posX, target2posY, r.BLUE); //target2

  if (
    measureDistance(target1posX, target1posY, target1Redius) >
    measureDistance(target2posX, target2posY, target2Redius)
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

r.CloseWindow();
