function updateText() {
    let setText = document.querySelector('.js-finished');
    setText.innerHTML = 'Loading...'

  setTimeout(function() {
    setText.innerHTML = 'Finished!';
    console.log('Marie');
  }, 1000);
}
