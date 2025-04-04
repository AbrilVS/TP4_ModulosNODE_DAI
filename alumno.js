class Alumno {
    constructor(username, dni) {
      this.username = username;
      this.dni = dni;
    }
  }
const crearAlu=(nom,id)=>{
    parseInt(id);
    const alumnito = new Alumno(nom,id);
    console.log(alumnito)
}
export default crearAlu