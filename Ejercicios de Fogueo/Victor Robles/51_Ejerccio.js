//multiplicando x multiplicador = producto

function tablaMultiplicacion(multiplicando){
  let resultado = `# La tabla del ${multiplicando} # \n`;

  for(multiplicador = 1; multiplicador <= 12; multiplicador++){
    let multiplicacion = (multiplicador*multiplicando);

    resultado += `${multiplicador} X ${multiplicando} = ${multiplicacion} \n`
  }
  return resultado;

}
console.log(tablaMultiplicacion(8))




/*function tabla(multiplicando){
    var multiplicador = 0;
    var producto = 0;
      while (multiplicador <= 12)
          {
            producto = multiplicando*multiplicador;
            console.log(multiplicando + " X " + multiplicador + " = " + producto);
            multiplicador++;
            }
        };
  console.log(tabla(2));*/
