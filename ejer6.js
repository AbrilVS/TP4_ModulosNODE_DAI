import { URL } from 'url';

const parsearUrl2 = (urlString) => {
    try {
        const myUrl = new URL(urlString);
        const holis = {
            "host": myUrl.host,            
            "pathname": myUrl.pathname,    
            "parametros": myUrl.searchParams
        };
        console.log(holis);
    } catch (error) {
        console.error("Hubo un error al procesar la URL:", error.message);
    }
};

export default parsearUrl2;
