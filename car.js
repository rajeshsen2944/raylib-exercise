const r = require("raylib");
function globalVar(varName) {
  const width = 600;
  const height = 1000;
  const title = "city  car ";
  const FPS = 50;

  if (varName === "width") {
    return width;
  }
  if (varName === "height") {
    return height;
  }
  if (varName === "title") {
    return title;
  }
  if (varName === "FPS") {
    return FPS;
  }
}

function setup() {
  r.InitWindow(
    globalVar("width"),
    globalVar("height"),
    globalVar("title"),
  );
  r.SetTargetFPS(globalVar("FPS"));
  r.SetWindowPosition(1000, 10)
}
function vehicalWheel(wheelPosX, wheelPosY, wheelRadius) {
  r.DrawCircle(wheelPosX, wheelPosY, wheelRadius, r.BLACK);
  r.DrawCircle(wheelPosX, wheelPosY, wheelRadius - 5, r.LIGHTGRAY);
  r.DrawCircle(wheelPosX, wheelPosY, 2, r.WHITE);


}

function headLight(posX,posY,side,time){
  if(time === "day"){ const color = r.WHITE}
  if(side === "right"){
    const headX = posX - 5;
    const headY = posY;
    r.DrawRectangle(headX,headY,10,12,r.YELLOW);
    // r.DrawLine(posX+) 
  }
}
function car(posX, posY, color) {
  const height = 60;
  const width = 150;
  r.DrawRectangle(posX, posY, width, height, color);

  const lowerCarWidth = 3 * width / 2;
  const lowerCarHeight = height / 2;

  const lowerCarPosX = posX + width / 2 - 3 * width / 4;
  const lowerCarPosY = posY + height / 2;
  r.DrawRectangle(lowerCarPosX, lowerCarPosY, lowerCarWidth, lowerCarHeight, color);

  const tyer1_X = lowerCarWidth / 4 + lowerCarPosX;
  const tyer1_2_Y = lowerCarPosY + lowerCarHeight;
  const tyer2_X = 3 * lowerCarWidth / 4 + lowerCarPosX;

  vehicalWheel(tyer1_X, tyer1_2_Y, 20);
  vehicalWheel(tyer2_X, tyer1_2_Y, 20);

  const window1_X = posX + 20;
  const window1_2_Y = posY + 5;
  const window_width = width / 3;
  const window_height = 2 * height / 5;
  r.DrawRectangle(window1_X, window1_2_Y, window_width, window_height, r.BLACK);


  const window2_X = posX + 30 + width / 3;
  r.DrawRectangle(window2_X, window1_2_Y, window_width, window_height, r.BLACK)

  headLight(lowerCarPosX+lowerCarWidth,lowerCarPosY,"right","night")



}
function update() { }

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.SKYBLUE);
  // vehicalWheel(30, 600, 10);
  car(100, 100, r.WHITE);
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    update();
    draw();
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}


main();