let valores = [1, 2, 8, 6, 5]
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor do numero ${valores[pos]}`)
    
} */

//simplificado 

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor do numero ${valores[pos]}`)
}