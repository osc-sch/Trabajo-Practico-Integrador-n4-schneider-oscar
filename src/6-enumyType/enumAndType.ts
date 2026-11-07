// ------------ enum -------------


//declarando todos los roles posibles
enum Rol {
  ADMIN = "admin",
  USUARIO = "usuario",
  INVITADO = "invitado"
}

let rolUsuario: Rol = Rol.ADMIN;

console.log(rolUsuario)

//enum numerico
enum Estados {
  PENDIENTE,  // 0
  PROCESANDO, // 1
  COMPLETADO  // 2
}

// ----------- tipo literal ------------------

let estado: "activo";

estado = "activo";   //correcto
// estado = "inactivo" // incorrecto

//En este ejemplo, Estado representa un conjunto de tres valores permitidos.
type Estado1 = "pendiente" | "procesando" | "completado";

let estadoPedido: Estado1 = "pendiente";

estadoPedido = "completado"; // Correcto
// estadoPedido = "cancelado";  // Error

