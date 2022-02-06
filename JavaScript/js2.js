let dato = document.getElementById("texto");

const textoUsuario = () => {
    let palabra = prompt("ingresa palabra casa, mesa, perro o gato");
   
    switch (palabra) {
        case "casa":
            dato.innerHTML = "casa en ingles = House" ;
            dato.style.color = "red";
            break;

            case "mesa":
                dato.innerHTML = "mesa en ingles = Desk" ;
                dato.style.color = "blue";
                break;

                case "perro":
                    dato.innerHTML = "perro en ingles = Dog" ;
                    dato.style.color = "yellow";
                    break;

                    case "gato":
                        dato.innerHTML = "gato en ingles = Cat" ;
                        dato.style.color = "black";
                        break;


    default:
        alert("Favor ingresa casa, mesa, perro o gato")
        break;
}

    
  };
  
    textoUsuario();
