//* interfaces
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

//* bien aplicado
const usuario1: Usuario = {
  id: 1,
  nombre: "Oscar",
  email: "oscar@example.com",
  activo: true
};

//! el parametro email es obligatorio, por lo que si no se incluye, TypeScript marcará un error.
// const usuario2: Usuario = {
//   id: 2,
//   nombre: "jose",
//   activo: true
// };

// ------------ Type Alias -----------------

type Estado = "activo" | "inactivo" | "suspendido";

let estadoUsuario: Estado = "activo";

estadoUsuario = "suspendido"; // Correcto
// estadoUsuario = "eliminado";  // Error

// --------------------- propiedades opcionales ------------------

interface Usuario2 {
  id: number;
  nombre: string;
  email: string;
  telefono?:number
}

const usuario3: Usuario2={ //solo la propiedades obligatorias
    id: 10,
    nombre: "Oscar",
    email: "oscar@gmail.com",
}

const usuario5: Usuario2 = {//con la propiedad opcional
    id: 10,
    nombre: "Oscar",
    email: "oscar@gmail.com",
    telefono:370498756
}

console.log("### propiedades obligatorias ###")
console.log(usuario3)
console.log("### propiedades opcionales ###")
console.log(usuario5)