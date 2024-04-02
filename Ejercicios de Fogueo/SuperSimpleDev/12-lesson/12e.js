function updateCart() {

    let setPar = document.querySelector('.js-added')
    
    setPar.innerHTML = 'added';
    
  clearTimeout();

  setTimeout(function () {
    setPar.innerHTML = '';
    // console.log('Marie');
  }, 2000);
}

