


const numeros = [1,2,3,4,5,6,7,8,9,10]
let resultado = 0;

for (let i = 0; i < numeros.length; i++ ){
    resultado += numeros[i]
    // for (let j = 0; j < 11; j++){
    //     resultado =numeros[i] * j;
        
    //     // console.log(`${numeros[i]} x ${j} = ${resultado}`)
    // }

}
console.log(`La suma de los 10 numeros ${resultado}`)

console.log("..................................................\t")



// Mostrar los numeros pares e impares de los 10 numeros

for (let i = 0; i < numeros.length; i++ ){
    let numero=i+1

    if(numero % 2 == 0 ){
        console.log(`Los numero pares son ${numero} `)
    }
  
}

console.log("..................................................\t")

numeros.forEach (function(numero){
    if (numero % 2 == 1){
        console.log(`Los numeros Impares son  ${numero}`)
    }
})



 
