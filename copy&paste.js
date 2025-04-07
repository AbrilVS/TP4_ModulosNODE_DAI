import {readFileSync, writeFileSync} from "fs"

const leer =()=>{
    let msj=readFileSync('hola.txt').toString() 
    return msj
}

const escribir=()=>{
    let menaje= leer()
    writeFileSync('chau.txt', menaje)
}
export default escribir;