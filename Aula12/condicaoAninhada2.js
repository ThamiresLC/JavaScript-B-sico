var tempo = new Date()
var hora = tempo.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora <= 12){
    console.log('Bom dia xuxu')
}else if(hora <= 18){
    console.log('Boa tarde amor')
}else {
    console.log('Boa noite vida')
}
