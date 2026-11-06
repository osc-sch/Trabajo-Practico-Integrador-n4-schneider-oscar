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