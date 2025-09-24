const title = document.getElementById('title');
const titletext = document.getElementById('title-text-02');
const titlewave = document.getElementById('title-text-01');
const SEAL = document.getElementById('SEAL');
const section01 = document.getElementById('section01');
const section01_title = document.getElementById('section01-title');
const section01_title_header = document.getElementById('section01-title-header');
const section01_title_content = document.getElementById('section01-title-content');
const section01_content_01 = document.getElementById('section01-content-01');
const section01_content_01_main = document.getElementById('section01-content-01-main');
const section01_content_01_title = document.getElementById('section01-content-01-title');
const section01_content_01_content = document.getElementById('section01-content-01-content');
const section02_content_01_title1 = document.getElementById('section02-content-01-title1');
const section02_content_01_title2 = document.getElementById('section02-content-01-title2');
const section02_content_01_constent = document.getElementById('section02-content-01-constent');
const section02_content_02 = document.getElementById('section02-content-02');
const section03 = document.getElementById('section03');
const section03_title = document.getElementById('section03-title');
const section03_content_01 = document.getElementById('section03-content-01');
const section03_content_01_img1 = document.getElementById('section03-content-01-img1');
const section03_content_01_img2 = document.getElementById('section03-content-01-img2');
const section03_content_01_img2_bg = document.getElementById('section03-content-01-img2-bg');
const section03_content_01_img1_text = document.getElementById('section03-content-01-img1-text');
const section03_content_01_img2_text = document.getElementById('section03-content-01-img2-text');
const section03_content_01_img_conbine = document.getElementById('section03-content-01-img-conbine');
const section03_content_03_title = document.getElementById('section03-content-03-title');
const section03_content_03_img = document.getElementById('section03-content-03-img');
const section04_title = document.getElementById('section04-title');
const section04_content_02 = document.getElementById('section04-content-02');
const section05_content_01 = document.getElementById('section05-content-01');
const section06 = document.getElementById('section06');
const section06_content_01 = document.getElementById('section06-content-01');
const section06_content_02 = document.getElementById('section06-content-02');


var titleset = new Map([
    [1, 'MEMORIES'],
    [2, 'THE WAVE BENEATH THE OCEAN']
])
var titletext_content = ''

var replaceInterval = null;
function ReplaceString(A, B) {
    if (replaceInterval !== null)
        return;

    A = A.split('');
    let midIndexA = Math.floor(A.length / 2);
    let midIndexB = Math.floor(B.length / 2);

    let i = 0;
    replaceInterval = setInterval(() => {
        if (i < midIndexA || i < midIndexB) {
            if (midIndexA + i < A.length) {
                A[midIndexA + i] = B[midIndexB + i] || '';
            } else if (midIndexB + i < B.length) {
                A.push(B[midIndexB + i]);
            }

            if (midIndexA - i - 1 >= 0) {
                A[midIndexA - i - 1] = B[midIndexB - i - 1] || '';
            } else if (midIndexB - i - 1 >= 0) {
                A.unshift(B[midIndexB - i - 1]);
            }

            titletext_content = A.join('');
            i++;
        } else {
            clearInterval(replaceInterval);
            replaceInterval = null;
            i = 0;
        }
    }, 100);
}

var _dy = 0;
function Mem0x(dy) {
    if (dy != _dy && dy % 4 == 0) {
        if (dy - _dy > 0) {


            const content = document.createElement('p');
            content.textContent = `0x000000${dy}`;
            content.style.position = 'fixed';
            content.style.top = `${dy}vh`;
            content.style.whiteSpace = 'pre-wrap';
            content.id = `${dy}`;
            section01_content_01.appendChild(content);
        }
        else
            section01_content_01.removeChild(document.getElementById(`${dy}`));
        _dy = dy;
    }
}

let ScrambleCoords = (function() {
    let stopScrambling = false;
    let intervalId = null;

    function scrambleToCoords(targetCoords) {
        let titleElement = document.getElementById("section03-content-02-title");

        let targetArray = targetCoords.split("");
        let currentArray = new Array(targetArray.length).fill("");
      
        intervalId = setInterval(() => {
            if (stopScrambling) {
                for (let i = 0; i < currentArray.length; i++) {
                    if (currentArray[i] !== targetArray[i]) {
                        currentArray[i] = targetArray[i];
                        break;
                    }
                }
            } else {
                for (let i = 0; i < currentArray.length; i++) {
                    if (targetArray[i] === " " || targetArray[i] === "°" || targetArray[i] === "'" || targetArray[i] === "\"" || targetArray[i] === "N" || targetArray[i] === "E" || targetArray[i] === ",") {
                        currentArray[i] = targetArray[i];
                    } else {
                        currentArray[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
                    }
                }
            }

            titleElement.textContent = currentArray.join("");

            if (currentArray.join("") === targetCoords) {
                clearInterval(intervalId);
            }
        }, 100);
    }

    return {
        start: function(targetCoords) {
            stopScrambling = false;
            scrambleToCoords(targetCoords);
        },
        stop: function() {
            stopScrambling = true;
        }
    };
})();

let FillError302 = (function() {
    var intervalId = null;

    return function() {
      var container = document.getElementById('section03-content-03-title');
  
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
  
      function fillDiv() {
        if (container.scrollHeight > container.offsetHeight+10) {
          clearInterval(intervalId);
          intervalId = null;
        } else {
          container.innerHTML += 'Error 302  ';
        }
      }
  
      intervalId = setInterval(fillDiv, 10);
    };
})();



setInterval(() => {
    let triggerPosition1 = window.innerHeight * 0.75;
    let triggerPosition2 = window.innerHeight * 1.25;
    let triggerPosition3 = window.innerHeight * 2.25;
    let triggerPosition4 = window.innerHeight * 3;
    let triggerPosition5 = window.innerHeight * 4;
    let triggerPosition6 = window.innerHeight * 5;
    let triggerPosition7 = window.innerHeight * 6;
    let triggerPosition8 = window.innerHeight * 7;
    let triggerPosition9 = window.innerHeight * 8;
    let triggerPosition10 = window.innerHeight * 9;
    let triggerPosition11 = window.innerHeight * 11;
    let triggerPosition12 = window.innerHeight * 12;
    let triggerPosition13 = window.innerHeight * 13.75;
    let triggerPosition14 = window.innerHeight * 14;
    let triggerPosition15 = window.innerHeight * 15;
    let triggerPosition16 = window.innerHeight * 16;
    let triggerPosition17 = window.innerHeight * 16.5;
    let triggerPosition18 = window.innerHeight * 17.25;
    let triggerPosition19 = window.innerHeight * 18;
    let triggerPosition20 = window.innerHeight * 19;
    let triggerPosition21 = window.innerHeight * 20;
    let triggerPosition22 = window.innerHeight * 21;
    let triggerPosition23 = window.innerHeight * 23;
    let triggerPosition24 = window.innerHeight * 24;
    let triggerPosition25 = window.innerHeight * 25;
    let triggerPosition26 = window.innerHeight * 26;
    let triggerPosition27 = window.innerHeight * 27;

    // console.log(scrollY, window.innerHeight);

    if (scrollY < triggerPosition1) {
        titlewave.style.opacity = 1 - scrollY / triggerPosition1;
        titlewave.style.display = '';

        titletext_content = titleset.get(1);
        titletext.style.position = '';
        titletext.style.top = '100vh';
    }
    else if (scrollY < triggerPosition2) {
        titlewave.style.display = 'none';

        if (titletext_content != titleset.get(1))
            ReplaceString(titletext_content, titleset.get(1));

        titletext.style.position = 'fixed';
        titletext.style.top = '25vh';
    } else if (scrollY < triggerPosition4) {
        if (scrollY > triggerPosition3)
            title.style.opacity = 1 - (scrollY - triggerPosition3) / (triggerPosition4 - triggerPosition3);
        else title.style.opacity = 1;

        if (titletext_content != titleset.get(2))
            ReplaceString(titletext_content, titleset.get(2));

        SEAL.style.position = 'absolute';
        SEAL.style.backgroundColor = 'transparent';
        SEAL.style.opacity = 1;
    } else if (scrollY < triggerPosition5) {
        let x = 1 - (scrollY - triggerPosition4) / (triggerPosition5 - triggerPosition4);

        title.style.opacity = 0;

        SEAL.style.backgroundColor = 'white';
        SEAL.style.position = 'fixed';
        SEAL.style.opacity = x;

        section01_title.style.top = 'calc(100vh -5em)';
        section01_title.style.position = 'absolute';
        section01_title_header.style.transform = `translateY(${x * -10}em)`;
        section01.style.backgroundColor = 'hsl(0, 0%, 100%, 0%)';
        section01_content_01.style.color = `hsl(0, 0%, 0%)`;

        section01_title_header.style.opacity = 1;
        section01_title_content.style.opacity = 1;
        section01_content_01_title.style.opacity = 0;

    } else if (scrollY < triggerPosition6) {
        let dy = (triggerPosition6 - scrollY) / window.innerHeight;

        title.style.opacity = 0;
        SEAL.style.backgroundColor = 'white';
        SEAL.style.opacity = 0;

        section01_title.style.display = 'flex';
        section01_title.style.top = 0;
        section01_title.style.position = 'fixed';
        section01_title_header.style.transform = 'translateY(1em)';
        section01.style.backgroundColor = `hsl(0, 0%, ${dy * 100}%)`;

        section01_content_01.style.color = `hsl(0, 0%, ${(1 - dy) * 100}%)`;
        section01_content_01_main.textContent = `0x${(Math.floor(100000000 * (1 - dy))).toString(16).padStart(8, '0').toUpperCase()}`;
        // Mem0x(Math.floor(100 * dy));

        section01_title_header.style.opacity = `${dy}`;
        section01_title_content.style.opacity = `${dy}`;
        section01_content_01_title.style.opacity = `${1 - dy}`;
        section01_content_01_title.style.transform = 'translateY(-15%)';
        section01_content_01_content.style.opacity = 0;

    } else if (scrollY < triggerPosition7) {
        section01_title.style.display = 'none';
        section01.style.backgroundColor = 'black';

        section01_content_01_title.style.opacity = 1;
        section01_content_01.style.color = 'hsl(0, 0%, 100%)';
        section01_content_01_title.style.transform = 'translateY(-500vh)';

        if (scrollY > triggerPosition6 + window.innerHeight * 0.25)
            section01_content_01_content.style.opacity = 1;

    } else if (scrollY < triggerPosition8) {
        section01_content_01_content.style.opacity = 1;
        section01.style.backgroundColor = 'black';
        section02_content_01_title1.style.transform = 'translateX(10vw)';
        section02_content_01_title2.style.transform = 'translateX(18vw)';
        section02_content_02.style.visibility = 'hidden';

    } else if (scrollY < triggerPosition9) {
        section02_content_02.style.top = '0';
        section02_content_02.style.position = 'fixed';
        section02_content_02.style.visibility = 'visible';

    } else if (scrollY < triggerPosition10) {
        section02_content_02.style.visibility = 'visible';
        section02_content_02.style.top = '100vh';
        section02_content_02.style.position = 'absolute';

    } else if (scrollY < triggerPosition11) {
        section03.style.visibility = 'hidden';

    } else if (scrollY < triggerPosition12) {
        section03.style.visibility = 'visible';
        section03_title.style.top = '0vh';
        section03_title.style.position = 'fixed';
        section03_content_01.style.position = 'absolute';

    } else if (scrollY < triggerPosition13) {
        section03.style.visibility = 'visible';

        section03_content_01.style.top = '245vh';
        section03_content_01.style.position = 'absolute';

    } else if (scrollY < triggerPosition14) {
        section03.style.visibility = 'visible';
        section03_content_01.style.top = '-80vh';
        section03_content_01.style.position = 'fixed';

        section03_content_01_img1.style.transform = 'translateX(75%)'
        section03_content_01_img2.style.transform = 'translateX(-75%)'
        section03_content_01_img2_bg.style.transform = 'translateX(-75%)'

        section03_content_01_img1_text.style.opacity = '100%';
        section03_content_01_img2_text.style.opacity = '100%';
        section03_content_01_img_conbine.style.opacity = '0%';

    } else if (scrollY < triggerPosition15) {
        section03.style.visibility = 'visible';
        section03_content_01.style.top = '-80vh';
        section03_content_01.style.position = 'fixed';

        section03_content_01_img1.style.transform = 'translateX(0%)'
        section03_content_01_img2.style.transform = 'translateX(0%)'
        section03_content_01_img2_bg.style.transform = 'translateX(0%)'

        section03_content_01_img1_text.style.opacity = '0%';
        section03_content_01_img2_text.style.opacity = '0%';
        section03_content_01_img_conbine.style.opacity = '100%';

        ScrambleCoords.start("25°12'00.0\" N 121°25'12.0\" E");
        

    } else if (scrollY < triggerPosition16) {
        section03.style.visibility = 'visible';
        section03_content_01.style.top = '-80vh';
        section03_content_01.style.position = 'fixed';

        
        section03_content_03_title.style.position = 'absolute';
        section03_content_03_img.style.visibility = 'hidden';

        ScrambleCoords.stop();
        FillError302();

    } else if (scrollY < triggerPosition17) {
        section03.style.visibility = 'visible';
        section03_content_03_title.style.position = 'fixed';
        section03_content_03_img.style.transform = 'scale(0)';

        section03_content_03_title.style.filter  = 'grayscale(0)';
        section03_content_03_img.style.filter = 'grayscale(0)';

    } else if (scrollY < triggerPosition18) {
        section03.style.visibility = 'visible';
        section03_content_03_title.style.position = 'fixed';
        section03_content_03_img.style.visibility = 'visible';
        section03_content_03_img.style.transform = 'scale(1)';
        section03_content_03_img.style.top = '50vh';
        section03_content_03_img.style.position = 'fixed';
        section03_content_03_img.classList.remove('section03-content-03-img-Animation');
        
        let dy = (scrollY-triggerPosition17)/(window.innerHeight*0.75);
        section03_content_03_title.style.filter  = `grayscale(${dy})`;
        section03_content_03_img.style.filter = `grayscale(${dy})`;

    } else if (scrollY < triggerPosition19) {
        section03.style.visibility = 'visible';
        section03_content_03_title.style.position = 'fixed';
        section03_content_03_img.style.visibility = 'visible';
        section03_content_03_img.style.transform = 'scale(1)';
        section03_content_03_img.style.top = '75vh';
        section03_content_03_img.style.position = 'absolute';
        
        section03_content_03_title.style.filter  = 'grayscale(1)';
        section03_content_03_img.style.filter = 'grayscale(1)';
        section03_content_03_img.classList.add('section03-content-03-img-Animation');        

    } else if (scrollY < triggerPosition20) {
        section03.style.visibility = 'visible';
        section03_content_03_title.style.position = 'fixed';
        section03_content_03_img.style.visibility = 'visible';
        section03_content_03_img.style.transform = 'scale(1)';
        section03_content_03_img.style.top = '75vh';
        section03_content_03_img.style.position = 'absolute';
        
        section03_content_03_title.style.filter  = 'grayscale(1)';
        section03_content_03_img.style.filter = 'grayscale(1)';
        section03_content_03_img.classList.add('section03-content-03-img-Animation');

        section04_title.style.position = 'absolute';
        
    } else if (scrollY < triggerPosition21) {
        section04_title.style.position = 'fixed';

    } else if (scrollY < triggerPosition22) {
        section04_title.style.position = 'fixed';
        section04_content_02.style.visibility = 'hidden';
        
    
    } else if (scrollY < triggerPosition23) {
        section04_title.style.position = 'fixed';
        section04_content_02.style.visibility = 'visible';
        section05_content_01.style.position = 'absolute'; 

    } else if (scrollY < triggerPosition24) {
        section05_content_01.style.position = 'fixed';
        section06.style.visibility = 'hidden';
        section06.style.opacity = '0';

    } else if (scrollY < triggerPosition25) {
        section05_content_01.style.position = 'fixed';
        section06.style.visibility = 'visible';
        section06.style.opacity = `${(scrollY-triggerPosition24)/window.innerHeight}`;

    } else if (scrollY < triggerPosition26) {
        section05_content_01.style.position = 'fixed';
        section06.style.visibility = 'visible';
        section06.style.opacity = '1';
        
        section06_content_01.style.opacity = '1';
        section06_content_02.style.opacity = '0';

    } else if (scrollY < triggerPosition27) {
        section05_content_01.style.position = 'fixed';
        section06.style.visibility = 'visible';
        section06.style.opacity = '1';

        section06_content_01.style.opacity = '0';
        section06_content_02.style.opacity = '1';

    } else {
        section05_content_01.style.position = 'fixed';
        section06.style.visibility = 'visible';
        section06.style.opacity = '1';

        section06_content_01.style.opacity = '0';
        section06_content_02.style.opacity = '1';
    }

    titletext.textContent = titletext_content;
});