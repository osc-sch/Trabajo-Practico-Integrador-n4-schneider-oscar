//Primera forma: utilizando tipo[]

const nombres1:string[] = ["jose","omar","silvia"]
const numeros1:number[] = [1,2,3]
const boleanos1: boolean[] = [true, false, true]

console.log("#### Primera forma: utilizando tipo[] ####")
console.log(nombres1)
console.log(numeros1)
console.log(boleanos1)

//Segunda forma: utilizando "Array<tipo>"
const nombres2:Array<string> = ["jose","omar","silvia"]
const numeros2:Array<number> = [1,2,3]
const boleanos2: Array<boolean> = [true, false, true]

console.log("#### Segunda forma: utilizando Array<tipo> ####")
console.log(nombres2)
console.log(numeros2)
console.log(boleanos2)