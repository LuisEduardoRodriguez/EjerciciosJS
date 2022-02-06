let dato1 = document.getElementById("texto");
let dato2 = document.getElementById("texto2");

    let nombre = prompt("ingresa nombre");
    let sueldo = parseFloat(prompt("ingresa sueldo"));
    
    dato1.innerHTML = " Tu nombre es: " + nombre ;
            dato1.style.color = "red";
    dato2.innerHTML = " Sueldo: " + sueldo;
            dato2.style.color = "blue"; 
    

