emailjs.init('bzOLZvOgRyX70Tfat')

const btn = document.getElementById('section05-content-01-ocean-button');

document.getElementById('section05-content-01-ocean-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = '⋯⋯';

   const serviceID = 'serive_seal';
   const templateID = 'template_seal';
   const email = btn.dataset.to_email

   emailjs.send(serviceID, templateID, {to_email: email})
    .then(() => {
    	if(email == "eddie920220@gmail.com") {
      	btn.value = '看來我們沒有共識⋯⋯';
      	alert('看來我們沒有共識⋯⋯');
      }
      else {
      	btn.value = '謝謝你⋯⋯';
      	alert('歡迎進入我的回憶⋯⋯');
      }
    }, (err) => {
      btn.value = '看來我們沒有共識⋯⋯';
      alert('看來我們沒有共識⋯⋯');
    });
});

//   ⏜  
// ⎛ ◕ᴥ◕⎞
// ⎝  ⊃  ⊃
//  \　 ⎠
//   \ /  
//    ω