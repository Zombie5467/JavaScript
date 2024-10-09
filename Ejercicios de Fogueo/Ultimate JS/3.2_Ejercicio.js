function getByIdx(arr, idx) {
    if(idx < 0 || arr.length <= idx) {
        return 'elemento no existe';
    }

    return arr[idx]
}

let resultado = getByIdx([1, 2], 2);
console.log(resultado);


/**
 * NOTA DE CHAT GPT
 En este caso es mejor usar `||` (OR lógico) en lugar de `&&` (AND lógico) porque refleja de manera más clara la lógica de lo que estamos verificando. Vamos a desglosarlo:

### Ejercicio A con `&&`:
javascript
if (idx >= 0 && idx < arr.length) {
    return arr[idx];
} else {
    console.log('el arreglo no tiene este indice');
}

- Aquí, la condición con `&&` dice: "Si `idx` es mayor o igual que 0 **y** `idx` es menor que el tamaño del arreglo, entonces el índice es válido".
- Esta estructura es válida, pero si la condición no se cumple, significa que alguna de las dos partes no fue verdadera. Sin embargo, la forma de expresarlo no es la más eficiente o directa cuando se trata de manejar errores.

### Ejercicio B con `||`:
javascript
if (idx < 0 || arr.length <= idx) {
    return 'elemento no existe';
}
return arr[idx];

- Aquí, la condición con `||` dice: "Si `idx` es menor que 0 **o** si `idx` es mayor o igual al tamaño del arreglo, entonces el índice no es válido".
- En este caso, estamos directamente cubriendo los **casos de error** con la condición `||`. Si **alguna** de estas condiciones es verdadera, sabemos que el índice no es válido, por lo que podemos manejarlo en esa rama del `if`.

### Razones por las que `||` es mejor en este caso:
1. **Verificar condiciones de error directamente**: Con `||`, la condición captura **todas las situaciones en las que el índice es inválido**. Esto se alinea mejor con el flujo típico de control, donde se validan errores primero y luego se continúa con el procesamiento normal si todo es válido.
   
2. **Control de flujo más eficiente**: Al usar `||`, estamos verificando los casos de error de forma directa, y si una de las dos condiciones es verdadera, inmediatamente nos salimos del flujo normal y devolvemos el mensaje de error. Esto evita que el código se ejecute innecesariamente.

3. **Legibilidad**: El uso de `||` en este contexto es más fácil de entender porque nos estamos enfocando en capturar condiciones donde el índice es inválido. Si alguna de las dos condiciones es verdadera, la función sabe que algo está mal, lo cual simplifica la comprensión del código.

### Resumen:
Usar `||` es más adecuado aquí porque queremos capturar casos de error de manera directa. Esto hace que el código sea más eficiente, más legible, y que maneje los casos excepcionales de forma clara y explícita.
 */