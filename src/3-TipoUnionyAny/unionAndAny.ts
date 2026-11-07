//Operador Union: permite que una variable pueda tener más de un tipo de dato.
let numerosOLetras: number | string

numerosOLetras= 32    // correcto
numerosOLetras = "hola"   // correcto
//! numerosOLetras = true // Error

const letrasONumeros: (string | number)[] = ["jose", 23, "maria", 25];
//! const letrasONumeros2: (string | number)[] = ["jose", 23, "maria", 25, true];

console.log(letrasONumeros)

//Tipo any: permite que una variable pueda tener cualquier tipo de dato.
//! pierde la ventaja de tipado de TypeScript.
let dato:any = 25;
console.log(dato)

dato = "hola"
console.log(dato)

dato = true
console.log(dato)

dato = [1, 2, 3]
console.log(dato)