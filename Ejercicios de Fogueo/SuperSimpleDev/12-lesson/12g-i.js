let message = 2;
let timer;

let addButton = document.querySelector('.js-add--button');
addButton.addEventListener('click', () => {
  message++;
});

let removeButton = document.querySelector('.js-remove--button');
removeButton.addEventListener('click', () => {
  if (message <= 1) {
    // clearInterval(timer);
    document.title = 'SuperSimpleDev';
  } else {
    message--;
  }
});

timer = setInterval(function () {
  if (document.title === 'SuperSimpleDev') {
    document.title = `(${message}) New Message`;
  } else {
    document.title = 'SuperSimpleDev';
  }
}, 1000);

// Non ho finito questo esercizio perché per mancanza di tempo non ho trovato come utilizzare clearInterval(timer); senza disabilitare il pulsante "add".
