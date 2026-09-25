const r = require("raylib");

let x = 100;
let y = 100;
let speed = 2;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  // ...
}

function update() {
  x += speed;
}

function draw() {
  // ...
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};