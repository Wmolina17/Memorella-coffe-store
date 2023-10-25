const evento = document.getElementById("submit")
const enviarForm = () => {
    let nombre = document.getElementById("name").value
    let nPersona = document.getElementById("number-client").value
    let email = document.getElementById("email").value
    let numberPeople = document.getElementById("number-people").value
    let date = document.getElementById("date").value
    let numero = 573242053079
    var win = window.open(`https://wa.me/${numero}?text= 
    **RESERVA**  
    Nombre : ${nombre},  
    Numero de telefono : ${nPersona} ,  
    Email : ${email} ,  
    Numero de personas : ${numberPeople} ,  
    Fecha : ${date} 
    `)
}

evento.addEventListener("click", enviarForm)