const win = require("raylib");
const windowWidth = 900;
const windowHeight = 600;
const title = "My First Graphic ";
let x = 0;
let endX = windowWidth/2;
let endY = windowHeight/3;


win.InitWindow(windowWidth, windowHeight, title);
win.SetTargetFPS(1);

while (!win.WindowShouldClose()) {
  win.BeginDrawing();
  win.ClearBackground(win.WHITE);
  win.DrawRectangle(0, 0, windowWidth, windowHeight / 3, win.ORANGE);
  win.DrawRectangle(
    0,
    (2 * windowHeight) / 3,
    windowWidth,
    windowHeight / 3,
    win.GREEN,
  );

  win.DrawCircle(windowWidth / 2, windowHeight / 2, 100, win.BLUE);
  win.DrawCircle(windowWidth / 2, windowHeight / 2, 95, win.WHITE);
  if(x < 8)
  {
      win.DrawLine(windowHeight/2,windowWidth/2,endX,endY,win.BLUE)
  }else{
    x = 0;
  }
  win.EndDrawing();
}

win.CloseWindow();
