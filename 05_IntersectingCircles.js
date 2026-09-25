const r = require("raylib");

const TITLE = "Intersecting Circles";
const WIDTH = 700;
const HEIGHT = 1000;
const FPS = 50;


function setup() {
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
    r.SetWindowPosition(1000, 10);
}

// function update() {}

function ball(posX, posY, radius, color) {
    r.DrawCircle(posX, posY, radius, color);
}

function sqr(x) {
    return x * x;
}
function add(x, y) {
    return x + y;
}
function getDistance(X1, Y1, X2, Y2) {
    return add(sqr(X1 - X2), sqr(Y1 - Y2)) ** 0.5;
}

const X1 = 100;
const Y1 = 100;

const X2 = 100;
const Y2 = 181;

const radius1 = 40;
const radius2 = 80;

const BLACK = r.BLACK;
const RED = r.RED;

function addBall(ballColor) {
    ball(X1, Y1, radius1, ballColor);       //add balls
    ball(X2, Y2, radius2, ballColor);

}
function chooseColor(distance, r1, r2) {
    if (distance > (r1 + r2)) { return BLACK; }
    return RED;
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);


    const distance = getDistance(X1, Y1, X2, Y2);
    const ballColor = chooseColor(distance, radius1, radius2)

    addBall(ballColor);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        // update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}



main();