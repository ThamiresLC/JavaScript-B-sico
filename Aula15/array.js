let num = [1, 5, 6, 7]
num[6] = 4
num.push(2)
num.sort()
console.log(num)
console.log(`Vetor tem esses valores ${num}`)
console.log(`Vetor possui ${num.length} casas`)
console.log(num[0])

//utilizando indexOf

let pos = num.indexOf(5)
if(pos == -1){
    console.log(`O valor do vetor não foi encontrado`)
}else{
    console.log(`O valor está na posição ${pos}`)
}