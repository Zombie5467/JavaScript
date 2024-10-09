/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

function nombreResolucion(ancho, alto){
    if(ancho <= 1280 && alto >= 720) {
        console.log('HD');
    } else if(ancho <= 1920 && alto >= 1080) {
        console.log('FHD');
    } else if(ancho <= 2560 && alto >= 1440) {
        console.log('WQHD');
    } else if(ancho <= 3840 && alto >= 2160) {
        console.log('4K');
    } else if(ancho <= 7680 && alto >= 4320) {
        console.log('8K');
    } else {
        return false
    }
} 

let nombre = nombreResolucion(3840, 21);
console.log(nombre);

/**
 * NOTA DE CHAT GPT
 * Tu código funciona correctamente utilizando las comparaciones con `<=` en orden ascendente. Sin embargo, 
 * hay algunas razones por las que podría considerarse una **mejor práctica** 
 * utilizar el enfoque descendente con `>=`, como en mi ejemplo.

### 1. **Claridad y Lógica**:
- Al usar el enfoque descendente con `>=`, la lógica sigue una secuencia natural: comienzas verificando primero las resoluciones 
*más grandes**, como 8K, y luego desciendes hacia resoluciones más pequeñas.
- Esto hace que el código sea más fácil de leer y entender, 
ya que sigues una jerarquía descendente lógica. Primero verificas si el dispositivo tiene una resolución superior y, 
si no, sigues reduciendo las expectativas hasta llegar a la más baja (HD).

### 2. **Precisión en Casos de Resoluciones Intermedias**:
- Cuando trabajas con **comparaciones mayores o iguales (`>=`)**, aseguras que el valor de ancho y alto cumple con el requisito mínimo para cada resolución. 
Esto es más consistente con cómo normalmente se definen las resoluciones en la práctica.
- Usar `<=` podría hacer que en algún momento una resolución intermedia o no estándar caiga en un rango incorrecto. 
Por ejemplo, si tienes un dispositivo con una resolución de ancho ligeramente superior a 1280 pero inferior a 1920, 
tu código podría clasificarlo como HD, aunque no se ajuste exactamente.

### 3. **Mejora en Escalabilidad y Mantenibilidad**:
- Si en el futuro agregas más resoluciones más grandes (por ejemplo, 16K), el enfoque descendente con `>=` facilita la adición de nuevos casos 
sin riesgo de que resoluciones intermedias caigan en una categoría incorrecta.
- El flujo de condiciones es más controlado, ya que en cada paso estás garantizando que la resolución actual sea mayor o igual a la que estás evaluando, 
lo que evita malinterpretaciones.

### 4. **Estandarización**:
- La mayoría de los sistemas o estándares de resolución tienden a usar comparaciones como "mínimos garantizados" (`>=`), 
porque generalmente quieres asegurarte de que un dispositivo cumple con una resolución mínima para una clasificación específica. 
Este enfoque es más común y consistente en muchas aplicaciones industriales y de desarrollo.

### 5. **Rendimiento**:
- Aunque en la práctica la diferencia de rendimiento sería mínima para un código tan pequeño, 
el enfoque descendente con `>=` asegura que los dispositivos con resoluciones grandes sean categorizados más rápido. 
Esto significa que no necesitas pasar por todas las resoluciones más pequeñas antes de llegar a la correcta, 
lo que mejora ligeramente la eficiencia en ciertos casos.

### Conclusión:
*Tu código está bien y funcional**, y si se ajusta a tus necesidades actuales, no tienes que cambiarlo. 
Sin embargo, el enfoque descendente con `>=` es generalmente más claro, preciso y fácil de mantener, 
especialmente cuando trabajas con resoluciones mayores o en casos más complejos. Por ello, es una práctica que se recomienda, 
aunque en tu caso no sea estrictamente necesario para el correcto funcionamiento.
 */