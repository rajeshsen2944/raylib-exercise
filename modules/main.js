const numbers = require("./numbers");
const sketch = require("./sketch");

console.log(typeof sketch);
console.log(numbers.double(5));


function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setup();
    loop();
    sketch.teardown();
}

main();