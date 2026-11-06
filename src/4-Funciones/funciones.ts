const saludar = (nombre:string) =>{ //* recibe solo texto
    console.log(`Hola, ${nombre}`)  
}

const sumar = (a:number,b:number) =>{ // * recibe solo numeros
    return a+b
}

saludar("Oscar") //* BIEN
// saludar(25) //! MAL

sumar(5,10) //* BIEN
// sumar("jose", "perez") //! MAL