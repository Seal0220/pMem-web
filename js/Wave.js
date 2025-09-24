const pageWidth = window.innerWidth;
const wave = document.getElementById('title-text-wave');
const textwave = document.getElementById('section05-content-01-ocean-wave');
let text = "~".repeat(pageWidth/50);
setInterval(() => {
    const newChar = Math.random() < 0.1 ? '^' : '~';
    text = text.substring(1) + newChar;
    wave.textContent = text;
    textwave.textContent = text;
    document.title = text;
}, 100);

//   ⏜  
// ⎛ ◕ᴥ◕⎞
// ⎝  ⊃  ⊃
//  \　 ⎠
//   \ /  
//    ω