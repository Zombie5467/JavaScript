// Día 4: Módulos nativos de Node.js

//usando require
// const fs = require('fs');

//usando import
import { readFileSync} from 'fs';
import { writeFileSync } from 'fs';
import fs from 'fs';

const poema = fs.readFileSync('./texto.txt', 'utf-8');

console.log(poema);
fs.writeFileSync('./texto.txt', 'Hola, soy un texto modificado');