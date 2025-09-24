let t = 0;
let canvas;
let graphics;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight).parent('title-Ocean');
    graphics = createGraphics(windowWidth, windowHeight);
    frameRate(10);

    textAlign(CENTER, CENTER);
}

function draw() {
    if (scrollY < window.innerHeight * 4) {
        resizeCanvas(windowWidth, windowHeight);
        graphics.resizeCanvas(windowWidth, windowHeight);
        graphics.background(255);

        let tileSize = 10;
        let w = width / tileSize;
        let h = height / tileSize;
        let xOff = 0;
        let yOff = 0;

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                let noiseVal = noise(xOff, yOff, t);
                let charToShow = getCharFromNoise(noiseVal);
                graphics.textSize(5);
                graphics.text(charToShow, x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
                xOff += 0.1;
            }
            xOff = 0;
            yOff += 0.1;
        }
        t += 0.01;

        canvas.elt.getContext('2d').drawImage(graphics.elt, 0, 0);
    }
}

function getCharFromNoise(noiseVal) {
    if (noiseVal > 0.7) {
        return 'wave';//●
    } else if (noiseVal > 0.5) {
        return '~';//◉
    } else if (noiseVal > 0.3) {
        return ' ';//⦾
    } else {
        return '^';//•
    }
}