let saludo = prompt("!Bienvenido a la pizzeria¡ Danos tu nombre");
alert(" ¡Tomaremos tu pedido! " + saludo);
alert(" ¡Tenemos tres tamaños: Personal, Mediana y Familiar");
let tamaño = prompt("¿Cual vas a llevar?");
alert(" Tenemos pizza de Pollo con Champiñores, Hawaiana, Carnes, Mexicana, Criolla, Vegetariana, Carne & pollo ");
let sabor = prompt("¿Cual vas a llevar?");

switch (sabor) {
    case "pollo con champiñones":
        let ingrediente = prompt("¿Con queso o sin queso?");
        if (ingrediente == "con queso") {
                alert(" Su pedido es una pizza " + tamaño + " de " + sabor + " con queso " + saludo);
                }
        else {
                let ingrediente2 = prompt("¿Entonces con salsa o borde de bocadillo?");
                switch (ingrediente2) {
            
            
                    case "salsa" :
                        alert(" Su pedido es una pizza " + tamaño + " de " + sabor +" "+ ingrediente + " con " + ingrediente2 +" "+ saludo);
                        break;
                    case "borde de bocadillo" :
                        alert(" Su pedido es una pizza " + tamaño + " de " + sabor +" "+ ingrediente + " con " + ingrediente2 +" "+ saludo);
                        break;
                        case "no" :
                            alert(" Su pedido es una pizza " + tamaño + " de " + sabor +" "+ ingrediente  +" "+ saludo);
                            break;
                    default:
                        alert(" Favor ingresa si es con salsa o borde con bocadillo ");
                    break;
                    
                    
                }
            }
    break;
        case "hawaiana":
            let ingredienteh = prompt(" ¿Sin Piña? o ¿Sin Jamon? ");
            switch (ingredienteh) {
                case "sin piña":
                    let ingredienteh1 = prompt(" ¿Con Salami? ");
                    if (ingredienteh1 == "si") {
                        alert(" Su pedido es una pizza " + tamaño + " " + sabor +" "+ ingredienteh  +" con salami "+ saludo);
                    }
                    else{
                        alert(" Su pedido es una pizza " + tamaño + " " + sabor +" "+ ingredienteh  +" "+ saludo);
                    }
                    break;
                case "sin jamon":
                    let ingredienteh2 = prompt(" ¿Con Salami? ");
                    if (ingredienteh2 == "si") {
                        alert(" Su pedido es una pizza " + tamaño + " " + sabor +" "+ ingredienteh + " con salami " + saludo);
                    }
                    else{
                        alert(" Su pedido es una pizza " + tamaño + " " + sabor +" "+ ingredienteh  +" "+ saludo);
                    }
                    break;
                    case "no":
                        alert(" Su pedido es una pizza " + tamaño + " " + sabor  +" "+ saludo);
                        break;
                default:
                    alert(" Favor ingresa si es, sin piña o sin jamon ");
                    break;
            }
        case "carnes":
            let ingredientec = prompt(" ¿Desea sin salami o desea con queso? ");
            switch (ingredientec) {
                case "sin salami":
                    let ingredientec1 = prompt(" ¿Desea con Cabano? ");
                    if (ingredientec1 == "si") {
                        alert(" Su pedido es una pizza " + tamaño + " de " + sabor +" "+ ingredientec + " con Cabano " +  saludo);
                    }
                    else{
                        alert(" Su pedido es una pizza " + tamaño + " de " + sabor +" "+ ingredientec + " " +  saludo);
                    }

                    break;
                case "con queso":
                    alert(" Su pedido es una pizza " + tamaño + " de " + sabor +" "+ ingredientec +" "+ saludo);

                    break
                case "no":
                    alert(" Su pedido es una pizza " + tamaño + " de " + sabor +" "+ saludo);
                    break;

                default:
                    alert(" Favor ingresa si es, con salami o con queso ");
                    break;
            }
            break
        
        case "Mexicana":
            let ingredientem = prompt(" ¿Desea con nachos o desea sin nachos? ");
            switch (ingredientem) {
                case "con nachos":
                    alert(" Su pedido es una pizza " + tamaño + " " + sabor +" "+ ingredientem + " " +  saludo);
                    break;
                    case "sin nachos":
                        let ingredientem1 = prompt(" ¿Desea Extra Guacamole? ");
                        if (ingredientem1 == "si") {
                            alert(" Su pedido es una pizza " + tamaño + " " + sabor +" "+ ingredientem + " con extra guacamole " +  saludo);
                        }
                        else{
                            alert(" Su pedido es una pizza " + tamaño + " " + sabor +" "+ ingredientem + " " +  saludo);
                        }
                        break;
                default:
                    alert(" Favor ingresa si es, con nachos o desea sin nachos ");
                    break;
            }
            break
        case "criolla":
            let ingredientecr = prompt("¿Con maiz o sin maiz?");
        if (ingredientecr == "con maiz") {
                alert(" Su pedido es una pizza " + tamaño + " " + sabor + " " + ingredientecr + " " + saludo);
                }
        else {
                let ingredientecr1 = prompt("¿Desea con extra carne molida o con queso?");
                switch (ingredientecr1) {
            
            
                    case "extra carne molida" :
                        alert(" Su pedido es una pizza " + tamaño + " " + sabor + " " + ingredientecr + " con " + ingredientecr1 + saludo);
                        break;
                    case "con queso" :
                        alert(" Su pedido es una pizza " + tamaño + " " + sabor + " " + ingredientecr + " " + ingredientecr1 + saludo);
                        break;
                        case "no" :
                            alert(" Su pedido es una pizza " + tamaño + " " + sabor + " " + ingredientecr + " " + saludo);
                            break;
                    default:
                        alert(" Favor ingresa si desea con extra carne molida o con queso ");
                    break;                    
                }
            }
        break;
        case "vegetariana":
            let ingredientev = prompt("¿Desea con queso o desea sin queso?");
            if (ingredientev == "con queso") {
                alert(" Su pedido es una pizza " + tamaño + " " + sabor + " " + ingredientev + " " + saludo);
            }
            else{
                alert(" Su pedido es una pizza " + tamaño + " " + sabor + " " + saludo);
            }
            break;
            case "carne y pollo":
            let ingredientecp = prompt("¿Desea adicionar salchicha o desea adicionar champiñones?");
            switch (ingredientecp) {
                case "salchicha":
                    alert(" Su pedido es una pizza " + tamaño + " de " + sabor + " con " + ingredientecp + " " + saludo);
                    break;
                case "chapiñones":
                    alert(" Su pedido es una pizza " + tamaño + " de " + sabor + " con " + ingredientecp + " " + saludo);
                    break;
                    case "no":
                        alert(" Su pedido es una pizza " + tamaño + " de " + sabor + " " + saludo);
                        break;
                default:
                    alert(" Favor ingresa si desea adicionar salchicha o desea adicionar champiñones ");
                    break;
            }
            break;
        
     break;   

    default:
        alert("Favor ingresa (Pollo y Champiñores), Hawaiana y Carnes");
        break;
}