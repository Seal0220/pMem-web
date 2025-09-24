function SinWave(N, E) {
    let x = Number(N);
    let y = Number(E);
    y = y / 121.42 * 5;
    let amplitude = 15;
    let frequency = x / 25.2 / 10;
    let phase = 0;

    let result = [];
    for (let i = 0; i < amplitude; i++) {
        let row = "";
        for (let j = 0; j < 60; j++) {
            let sinValue = Math.sin(frequency * j + phase) * y;
            if (i === Math.round(sinValue + amplitude / 2)) {
                row += "~";
            } else {
                row += ".";
            }
        }
        result.push(row);
    }
    return result;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    let N = document.getElementById('N-input').value;
    let E = document.getElementById('E-input').value;
    let resultLines = SinWave(N, E);
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    for (let i = 0; i < resultLines.length; i++) {

        (function (i, line) {
            setTimeout(function () {
                let p = document.createElement('p');
                p.textContent = line;
                resultDiv.appendChild(p);
            }, i * 100);
        })(i, resultLines[i]);
    }
});

