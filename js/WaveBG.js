let amplitude = window.innerHeight / 20;
let length = window.innerWidth / 8;

function createSinWave(N, E) {
    let x = Number(N);
    let y = Number(E);
    y = y / 121.42 * 5;

    let frequency = x / 25.2 / 10;
    let phase = 0;

    return function () {
        let result = "";
        for (let i = 0; i < amplitude; i++) {
            let row = "";
            for (let j = 0; j < length; j++) {
                let sinValue = Math.sin(frequency * j + phase) * y;
                if (i === Math.round(sinValue + amplitude / 2)) {
                    row += "~";
                } else {
                    row += ".";
                }
            }
            result += row + "\n";
        }
        phase += 0.1 + Math.random() * 0.5;  // 隨機改變相位
        frequency += (Math.random() - 0.5) / 20;  // 隨機改變頻率
        return result;
    }
}

let sinWave = createSinWave(25.2, 121.42);
let section04Title = document.getElementById('section04-title');


let intervalId = setInterval(function () {
    if (scrollY > window.innerHeight * 18 && scrollY < window.innerHeight * 21) {
        amplitude = window.innerHeight / 20;
        length = window.innerWidth / 8;
        section04Title.innerText = sinWave() + '\n';
    }
}, 100);