## Tema 1: ¿Qué es TypeScript?

### ¿Qué es TypeScript y quién lo desarrolla?

TypeScript es un superconjunto de JavaScript desarrollado por Microsoft, superconjunto quiere quiere decir que incluye todas las funcionalidades de javaScript y le añade otras nuevas funcionalidades.
### ¿Qué diferencias tiene con JavaScript?

La diferencia mas importante es que TypeScript es de tipado estatico opcional.
### ¿Qué ventajas ofrece?
ofrece las siguientes ventajas :
- Detecta errores mientras se escribe el código, antes de ejecutarlo.
- Mejora el autocompletado y la refactorizacion en el editor.
- Hace el codigo mas mantenible y escalable.
- Los tipos funcionan como documentacion del propio codigo
### ¿Cuál es su versión actual?
La version actual mas estable de TypeScript 7.0.2 segun la pagina oficial de gitHub 

## Tema 2: Crear y ejecutar un proyecto
### ¿Cómo se instala TypeScript en un proyecto?
Para instalar TypeScript hay que ejecutar
```bash
npm i -D typescript.
```
### ¿Para qué sirve el archivo tsconfig.json?
Es el archivo de configuración del proyecto. Le indica a TypeScript tres cosas:
1. Qué archivos forman el proyecto: include. 
2. Qué tan estricto debe ser al verificar tipos: strict y opciones relacionadas. 
3. Cómo generar el JavaScript: versión (target), sistema de módulos (module) y carpeta de salida
(outDir). 

También define que la carpeta es un proyecto TypeScript. Sin tsconfig.json, tsc no sabe qué compilar y
muestra la pantalla de ayuda. Lo leen tsc y el editor; Node y tsx no lo usan para verificar. Por qué crearlo a mano
### ¿Qué hace el comando tsc?
El comando tsc significa TypeScript Compiler

Su función principal es comprobar los tipos de datos y convertir el código TypeScript (.ts) en código JavaScript (.js), que puede ejecutarse en un navegador o en Node.js.
### ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?

La diferencia principal entre tsc, tsx y node está en cómo trabajan con los archivos TypeScript y JavaScript.

Aunque los tres comandos están relacionados con la ejecución de código, no hacen exactamente lo mismo:
- tsc: compila TypeScript a JavaScript y comprueba los tipos.
- tsx: permite ejecutar archivos TypeScript directamente, sin que tengas que compilarlos manualmente.
- node: ejecuta JavaScript y, en versiones modernas, también puede ejecutar TypeScript con ciertas limitaciones.

## Tema 3
### ¿Qué son los tipos string, number y boolean?

Son tipos primitivos que TypeScript utiliza para representar cadenas de texto, números y valores lógicos.

**string** — Cadenas de texto

Se utiliza para almacenar texto. Podemos escribirlo utilizando comillas simples, dobles o backticks.

```ts
const nombre: string = 'Oscar'
const apellido: string = "Schneider"
const saludo: string = `Hola, ${nombre,apellido}`
```

**number** — Números
Se utiliza para representar números enteros y decimales.

```ts
const edad: number = 23
const altura:number = 1.68
const temperatura: number = -14
```

A diferencia de otros lenguajes, TypeScript no distingue entre tipos como int, float o double. Todos estos valores utilizan number.

**boolean** — Valores lógicos
Representa únicamente dos valores: true (verdadero) y false (falso).

```ts
const esMayorDeEdad: boolean = true
const tieneConexion: boolean = false
```

pero tambien typeScript detecta automaticamente lo tipos, eso de denomina inferencia de tipos

```ts
let nombre = "Oscar"; // string
let edad = 23;        // number
let activo = true;    // boolean
```

### ¿Cómo se declara un array con tipo?
Un array tipado es un arreglo en el que especificamos qué tipos de elementos puede contener.

En TypeScript existen dos formas principales de declararlo.

Primera forma: utilizando tipo[]
```ts
const nombres:string[] = ["jose","omar","silvia"]
const numeros:number[] = [1,2,3]
const boleanos:boolean[] = [true,false,true]
```
Segunda forma: utilizando "Array"tipo"

```ts
const nombres:Array<string> = ["jose","omar","silvia"]
const numeros:Array<number> = [1,2,3]
const boleanos:Array<boolean> = [true,false,true]
```
Ambas formas son equivalentes.

### ¿Qué es un tipo unión?

Un tipo unión (Union Type) permite que una variable pueda contener valores de dos o más tipos diferentes.

Para declararlo utilizamos el operador |, que significa o

```ts
let numerosOLetras : number | string

numerosOLetras= 32    // correcto
numerosOLetras = "hola"   // correcto
numerosOLetras = true    !// Error
```

Tambien se puede aplicar a los arrays

```ts
const letrasONumeros:(string|number)[] = ["jose",23,"maria",25];
```

### ¿Por qué se recomienda evitar any?

El tipo any permite almacenar prácticamente cualquier valor y desactiva gran parte de las comprobaciones de tipos de TypeScript sobre ese valor.

```ts
let dato:any = 25;

dato = "hola"
dato = True
dato = [1,2,3]
```

## Tema 4: Funciones
### ¿Cómo se indican los tipos de los parámetros?
Los parámetros son los valores que una función recibe para realizar una tarea.

En TypeScript, indicamos sus tipos utilizando dos puntos ```:``` después del nombre de cada parámetro.

```ts
const saludar = (nombre:string) =>{ // recibe solo texto
    console.log(`Hola, ${nombre}`)  //Hola, jose
}
o
const sumar = (a:number,b:number) =>{
    return a+b
}
//ambos parametros son numericos
```
### ¿Cómo se indica el tipo de retorno?
El tipo de retorno indica qué tipo de dato devuelve una función.

Se declara colocando ````:"tipo"````  después de los paréntesis.

```ts
const sumar = (a:number,b:number): number =>{
    return a+b
}//retorna solo valores numericos

const saludar = (nombre:string):string =>{ 
    const saludo =  `Hola, ${nombre}`
    return saludo
}//retorna solo valores de caracteres
```
Si la función no devuelve ningún valor, podemos utilizar void.

```ts
const saludar = (nombre:string): void =>{
    console.log(`Hola, ${nombre}`)  //Hola, jose
}
```
TypeScript también puede inferir automáticamente el tipo de retorno.

### ¿Qué es un parámetro opcional?
Un parámetro opcional es aquel que no es obligatorio proporcionar al llamar a una función.

Se declara agregando un signo de interrogación ```?``` después del nombre del parámetro.

```ts
const saludar = (nombre: string, edad?: number): void => {
  console.log(`Hola ${nombre}`);
}

saludar("Oscar");
saludar("Oscar", 23);
//Ambas llamadas son correctas porque edad es opcional.

//Si no proporcionamos un valor, el parámetro tendrá el valor undefined.
```

### ¿Qué es un parámetro por defecto?
Un parámetro por defecto es aquel al que se le asigna automáticamente un valor cuando no se proporciona uno o se pasa undefined.

Se declara utilizando el operador de asignación ``=``.

```ts
const saludar = (nombre: string = 'Usuario'): void => {
  console.log(`Hola ${nombre}`);
}

saludar("Oscar");  // Hola Oscar
saludar();   // Hola Usuario
```

## Tema 5: Interfaces y type
### ¿Qué es una interfaz y para qué sirve?
Una interfaz (interface) es una estructura que define qué propiedades y métodos debe tener un objeto y qué tipos de datos deben utilizar.

Por ejemplo, imaginemos que estamos desarrollando una aplicación donde necesitamos almacenar información de usuarios.
```ts
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}
```


Ahora podemos utilizar la interfaz para definir nuestros objetos:

```ts
const usuario: Usuario = {
  id: 1,
  nombre: "Oscar",
  email: "oscar@example.com",
  activo: true
};
```
TypeScript comprobará que el objeto cumpla con la estructura definida por la interfaz.

Si intentamos hacer esto:

```ts
const usuario: Usuario = {
  id: 1,
  nombre: "Oscar",
  activo: true
};
```


TypeScript señalará un error porque falta la propiedad obligatoria ``email``.

¿Para qué sirven las interfaces?
- Definir la estructura de los objetos.
- Establecer qué propiedades son obligatorias.
- Definir los tipos de parámetros y valores de retorno.
- Facilitar la reutilización de estructuras en diferentes partes del código.
### ¿Qué es un type?
Un type es una palabra clave que permite crear un alias para un tipo de dato.

Puede utilizarse para definir objetos, tipos primitivos, uniones de tipos, tuplas y otras combinaciones.

Por ejemplo, podemos definir un objeto de forma similar a una interfaz:
```ts
type Usuario = {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
};
```

Y utilizarlo de la misma manera:
```ts
const usuario: Usuario = {
  id: 1,
  nombre: "Oscar",
  email: "oscar@example.com",
  activo: true
};
```
Sin embargo, type también permite definir otros tipos.

Ejemplo con tipos unión:
```ts
type Estado = "activo" | "inactivo" | "suspendido";

let estadoUsuario: Estado = "activo";

estadoUsuario = "suspendido"; // Correcto
estadoUsuario = "eliminado";  // Error
```
En este caso, Estado únicamente admite los tres valores de texto que especificamos.

También podemos crear alias para tipos primitivos:
```ts
type ID = string | number;

let idUsuario: ID = 10;
idUsuario = "USR-10";
```
Por eso type es especialmente útil cuando necesitamos representar combinaciones de tipos.
### ¿Cómo se declara una propiedad opcional?
Tanto en las interfaces como en los alias de tipos podemos declarar propiedades opcionales utilizando el símbolo ``?`` después del nombre de la propiedad.

```ts
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono?:number
}

const usuario1: Usuario={ //solo la propiedades obligatorias
    id: 10;
    nombre: "Oscar";
    email: "oscar@gmail.com";
}

const usuario2: Usuario = {//con la propiedad opcional
    id: 10;
    nombre: "Oscar";
    email: "oscar@gmail.com";
    telefono:370498756
}
```
### ¿Cuándo conviene usar cada uno?
Cuando trabajamos principalmente con estructuras de objetos, ``interface`` suele ser una buena elección. Cuando necesitamos uniones, alias de tipos primitivos o combinaciones de tipos, ``type`` suele resultar más adecuado. No obstante, para muchos objetos simples podemos utilizar cualquiera de los dos.

```ts
type Rol = "admin" | "usuario" | "invitado";
// type limita los posibles valores de  ROL

interface Usuario {
  id: number;
  nombre: string;
  email?: string;
  rol: Rol;
}
// Interfase limita los datos y tipos de datos Para Usuario

const usuario: Usuario = {
  id: 1,
  nombre: "Oscar",
  rol: "admin"
};
```
## Tema 6: Enums y tipos literales
### ¿Qué es un enum?
En TypeScript, los enums y los tipos literales nos permiten trabajar con un conjunto limitado de valores. Son especialmente útiles cuando una variable solamente debe aceptar determinadas opciones, como estados, roles o categorías.

Un enum (enumeración) es una estructura que permite definir un conjunto de constantes con nombres descriptivos.

Por ejemplo, imaginemos que estamos desarrollando una aplicación donde los usuarios pueden tener diferentes roles.

```ts
enum Rol {
  ADMIN = "admin",
  USUARIO = "usuario",
  INVITADO = "invitado"
}

let rolUsuario: Rol = Rol.ADMIN;
```
De esta manera, evitamos escribir directamente cadenas de texto en diferentes partes del código.

Tambien tienen una variante que trabaja con numeros.
```ts
enum estado = {
    PENDIENTE, //0
    PROCESNDO, //1
    COMPLETANDO //2
}
```
### ¿Qué es un tipo literal?
Un tipo literal es un tipo que permite utilizar únicamente un valor específico.
```ts
let estado: "activo";

estado = "activo";   //correcto
estado = "inactivo" // incorrecto
```
La variable solamente puede almacenar el valor ``"activo"``.

Tambien podemos combinar varios tipos literales mediante el operador de unión ``|``.

```ts
//En este ejemplo, Estado representa un conjunto de tres valores permitidos.
type Estado = "pendiente" | "procesando" | "completado";

let estadoPedido: Estado = "pendiente";

estadoPedido = "completado"; // Correcto
estadoPedido = "cancelado";  // Error
```
### ¿En qué se parecen y en qué se diferencian?
Ambos permiten restringir los valores que puede utilizar una variable, pero existen diferencias importantes.

**Utilizando ``enum``**
```ts 
enum Estado {
  ACTIVO = "activo",
  INACTIVO = "inactivo"
}

let estado: Estado = Estado.ACTIVO;
```
Para asignar un estado, utilizamos un miembro del ``enum``, como ``Estado.ACTIVO``.


**Utilizando tipos literales**
```ts
type Estado = "activo" | "inactivo";

let estado: Estado = "activo";
```

En este caso, asignamos directamente uno de los valores permitidos.


La diferencia más importante es que un enum normalmente existe también en JavaScript durante la ejecución, mientras que los tipos literales solo existen durante la comprobación de tipos.
### ¿En qué situaciones se puede usar cada uno?

**Cuándo utilizar enum**

Es conveniente cuando queremos agrupar constantes relacionadas y acceder a ellas mediante nombres descriptivos.

```ts
enum Dia {
  LUNES = "lunes",
  MARTES = "martes",
  MIERCOLES = "miercoles",
  JUEVES = "jueves",
  VIERNES = "viernes"
}
let diaActual: Dia = Dia.LUNES;
```
**Cuándo utilizar tipos literales**

Son especialmente útiles para definir opciones permitidas sin generar estructuras adicionales en JavaScript.

```ts
type Rol = "admin" | "usuario" | "invitado";

interface Usuario {
  id: number;
  nombre: string;
  rol: Rol;
}

const usuario: Usuario = {
  id: 1,
  nombre: "Oscar",
  rol: "admin"
};
```

En proyectos modernos de TypeScript, los tipos literales unidos con ``|`` suelen ser una buena opción por defecto cuando solamente necesitamos limitar los valores permitidos.

Los ``enum`` son útiles cuando queremos disponer de un conjunto de constantes agrupadas y accesibles durante la ejecución mediante expresiones como ``Estado.ACTIVO``.

Además, si utilizás herramientas que ejecutan TypeScript eliminando sus anotaciones sin transformaciones adicionales, los tipos literales suelen ofrecer mayor compatibilidad que los enums tradicionales.