import { URL } from 'url';

const parsear = () => {
    const myUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
    
    let holis={
        "host"        : myUrl.host,
        "pathname"        : myUrl.pathname,
        "parametros"        : myUrl.searchParams
    }
    console.log(holis)
}

export default parsear
