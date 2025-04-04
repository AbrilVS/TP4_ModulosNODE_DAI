var fs = require('fs');

const leer =()=>{
    let msj=fs.readFile('hola.txt') 
    return msj
}

const escribir=()=>{
    let menaje= leer()
}
export default leer;