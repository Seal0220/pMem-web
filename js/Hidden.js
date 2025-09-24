function createPreWord(txt) {
    let i = 0;
    return function () {
        if (i < txt.length) {
            return txt.charAt(i++);
        }
        return null;
    };
}

let img1 = document.getElementById("section02-content-03-table-img1");
let img2 = document.getElementById("section02-content-03-table-img2");
let img3 = document.getElementById("section02-content-03-table-img3");

let hiddenContent = document.getElementById("section02-content-03-hidden-content");

let content01 = [
    '#!/usr/bin/env MEMORIES',
    '@SEAL ~ $ cd MENORY',
    '@SEAL MEMORY $ grep -a Wave -A 8 Waves.png',
    `[Wave] Sometimes, success cannot be achieved in one attempt, it may iterate or loop...

  ⏜  
⎛ ◕ᴥ◕⎞
⎝  ⊃  ⊃
 \\　 ⎠
  \\ /  
   ω

`,
    '#透過終端機指令查找圖片背後的隱寫，[Wave]為最終解答之提示',
    ''

];

let content02 = [
    '#!/usr/bin/env MEMORIES',
    '@SEAL ~ $ cd MENORY',
    '@SEAL MEMORY $ grep -a Wave -A 8 Heart.gif',
    `[Wave] Remember the date where I am.
    
  ⏜
⎛ ◕ᴥ◕⎞
⎝  ⊃  ⊃
 \\　 ⎠
  \\ /
   ω
        
`,
    '#注意這天的日期⋯⋯',
    '@SEAL MEMORY $ grep -a PASSWORD -A 8 Heart.gif',
    `[PASSWORD] Where I am... -> (N, E) -> Wave N E
    
  ⏜
⎛ ◕ᴥ◕⎞
⎝  ⊃  ⊃
 \\　 ⎠
  \\ /
   ω

`,
    '#下方WAVE密碼的提示⋯⋯下方地圖上「Where I am」的經緯度座標⋯⋯',
    ''
];

let content03 = [
    '#!/usr/bin/env MEMORIES',
    '@SEAL ~ $ cd MENORY',
    '@SEAL MEMORY $ grep -a Wave -A 8 Ocean.png',
    `[Wave] If seeing the garbled text, try base64-decoding.
        
  ⏜
⎛ ◕ᴥ◕⎞
⎝  ⊃  ⊃
 \\　 ⎠
  \\ /
   ω

`,
    '#最終解答提示⋯⋯若看到亂碼，嘗試base64解碼',
    ''
];

function showContent(content, id) {
    hiddenContent.innerHTML = "";
    let div = document.createElement('div');
    div.id = id;
    div.className = "section02-content-03-hidden-content";
    hiddenContent.appendChild(div);
    content.forEach(text => {
        let preWord = createPreWord(text);
        let p = document.createElement('p');
        div.appendChild(p);
        if (text.startsWith('[Wave]') || text.startsWith('[PASSWORD]')) {
            p.style.backgroundColor = "black";
            p.style.color = "white";
            p.style.marginLeft = '5%';
            p.style.fontWeight = '700';
        }
        if (text.startsWith('#') ^ text.startsWith('#!')) {
            p.style.backgroundColor = "white";
            p.style.color = "black";
            p.style.marginLeft = '5%';
            p.style.marginBottom = '5%';
        }
        if (text === '') {
            p.style.backgroundColor = 'transparent'
            p.style.visibility = 'hidden';
            p.style.paddingBottom = '10%';
        }
        let intervalId = setInterval(() => {
            let char = preWord();
            if (char !== null) {
                p.innerHTML += char === ' ' ? '&nbsp;' : char;
            } else {
                clearInterval(intervalId);
            }
        }, 50);
    });
}


img1.addEventListener("mouseover", function () {
    showContent(content01, "section02-content-03-hidden-content-01");
});

img2.addEventListener("mouseover", function () {
    showContent(content02, "section02-content-03-hidden-content-02");
});

img3.addEventListener("mouseover", function () {
    showContent(content03, "section02-content-03-hidden-content-03");
});
