// Configuración
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Cambia solo el código debajo de esta línea
  function updateRecords(records, id, prop, value) {
  
    if(value === '') {
  // usar estricto
      delete records[id][prop];
      //falto usar id, usar [] y no .
  
    } 
  
    else if(prop !== 'tracks' && value !== '') {
      //usar tracks como string
      records[id][prop] = value;
      //usar corchetes, no hay que crear variables
  
    }  else if(prop === 'tracks' && value !== '') {
      //usar tracks como string
      
      if(records[id].hasOwnProperty('tracks') === false){
        records[id][prop] = [];
        //usar un if inexado
        //usar hasOwnProperty
      }
      records[id][prop].push(value);
  
    }
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');