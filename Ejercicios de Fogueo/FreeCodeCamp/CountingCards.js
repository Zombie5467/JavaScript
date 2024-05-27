let count = 0;

function cc(card) {
  
  switch (card){
    
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    // nota 1: el case no lleva la variable, solo el valor (2,3 o 4 etc)
    /**  nota 2: no hay que recetear count a 0, solo no incluir este codigo porque no va a hacer nada, con cualquiera de estos valores count sigue teniendo su valor original que es 0.*/
    // case card === 7:
    // case card === 8:
    // case card === 9:
    //   count;
    //   break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count--;
    break;
  }
  if(count > 0){
  // nota 3: la variable correcta es count, no card.
    return `${count} Bet`
  }else {
    return `${count} Hold`
  }

  

  // return count;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');