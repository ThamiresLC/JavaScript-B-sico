let amigo = {
nome: 'Thami', 
sexo: 'F', 
peso: '66,1', 
engordar(p=0){
    console.log('engordou')
    this.peso += p
}} 

amigo.engordar(2)
console.log(`A ${amigo.nome} pesa ${amigo.peso}kg`)