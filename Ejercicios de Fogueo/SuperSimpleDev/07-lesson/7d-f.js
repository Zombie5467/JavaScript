function convertTemperature(degrees, unit) {
    if (unit === 'c') {

        return (degrees * 9) / 5 + 32;
      // celsius to fahrenheit
      
    } else if( unit === 'f') {
        
        return ((degrees - 32) * 5) / 9;
      // fahrenheit to celsius
    }
    // else { console.log('degrees or unit missing')}
}

console.log(convertTemperature(25, 'c'));
console.log(convertTemperature(-5, 'c'));
console.log(convertTemperature(86, 'f'));
convertTemperature();
