// ----- definir el tipo de dato que recibe la funcion -----

const saludar = (nombre:string) =>{ //* recibe solo texto
    console.log(`Hola, ${nombre}`)  
}

const sumar = (a:number,b:number) =>{ // * recibe solo numeros
    return a+b
}

saludar("Oscar") //* BIEN
// saludar(25) //! MAL

// sumar("jose", "perez") //! MAL
let resultado = sumar(5, 10) //* BIEN
console.log(resultado)

//-------- definir el tipo de dato que retorna la funcion ------------

const restar = (a:number,b:number):number =>{ // * recibe solo numeros y retorna un numero
    return a-b
}

let resultadoResta = restar(10, 5) //* BIEN
console.log(resultadoResta)

// funcion que no devuelve ningun resultado

const despedir = (nombre:string):void =>{
    console.log(`adios, ${nombre}`)
}

//---------- funciones con parametros opcionales ------------

const bienvenida = (nombre:string, apellido?:string):void =>{
    if (apellido){
        console.log(`bienvenido, ${nombre} ${apellido}`)
        return
    }

    console.log(`bienvenido, ${nombre}`)
    return
}

bienvenida("oscar","schneider")