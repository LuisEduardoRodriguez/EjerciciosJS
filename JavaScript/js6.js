let dato1 = document.getElementById("texto");
let dato2 = document.getElementById("texto2");
let edad1 = prompt("¿Eres mayor de 18 años?");
const ingreso = () =>{
    
    if (edad1 == "si") {
        let genero = prompt("Eres hombre o mujer");
    switch (genero) {
        case "hombre":
            let edad = prompt("¿Que edad tienes?");
            if (edad > 24) {
                dato1.innerHTML= "Debes cancelar $30.000 para ingresar"
            }else{
                dato1.innerHTML= "Debes cancelar $25.000 para ingresar"
            }
            break;
        case "mujer":
            let edad2 = prompt("¿Que edad tienes?");
            if (edad2 > 25) {
                dato1.innerHTML= "Debes cancelar $25.000 para ingresar"
            }else{
                dato1.innerHTML= "Debes cancelar $20.000 para ingresar"
            }
            break;
        default:
            break;
    }
} else{
    dato2.innerHTML= "Debes tener 18 años minimo para ingresar"
}
    }
    
ingreso();



    