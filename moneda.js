import countryToCurrency from "country-to-currency"
const convertir=(pais)=>{
    let coin = ( countryToCurrency[ pais ] ); 
    if(coin != undefined){
        console.log(coin)
    }
    else{
        console.log("ERROR")
    }
}

export default convertir