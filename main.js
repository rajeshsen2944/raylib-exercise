const sketch = require("./01_center_rectangle");

function loop() {
    while(sketch.running())
    {
        sketch.draw();
    }
}

function main(){
    sketch.setup();
    loop();
    sketch.teardown();
}


main();