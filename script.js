// Creo un alert para que ingrese su nombre de usuario

let nombreUsuario = prompt("Hola Bienvenido a IceTech, por favor ingrese su nombre")

function saludoEspecifico(nombre){
    alert(`Hola ${nombre}`)
}

//Saludo al comprador 

saludoEspecifico(nombreUsuario)

//Le pergunto por su edad ya que el sitio es para mayores de 18 años

let edad = parseInt(prompt("Ingresa tu edad"))

if (edad >= 18){
    alert("Bienvenido al sitio oficial de IceTech")
}else { 
    alert("No cumplis la edad suficiente para entrar al sitio")
}

// Creo un array con todos los productos de mi sitio web

const productos = [
    { nombre: "Mouse", precio: 5000},
    { nombre: "Teclado", precio: 7000},
    { nombre: "Auriculares", precio: 8000},
    { nombre: "Parlantes", precio: 8500},
    { nombre: "Joystick", precio: 9000},
    { nombre: "Camara", precio: 9500},
    { nombre: "Microfono", precio: 6000},
    { nombre: "Monitor", precio: 10000},
    { nombre: "CPU", precio: 15000},
];

let carrito = []

//Le pregunto si desea comprar algun producto de la tienda

let seleccion = prompt(`Hola ${nombreUsuario} desea comprar algun producto? (Ingrese Si o No para continuar)`)

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("Hola desea compra algo si o no")
}

// Traigo el array y le muestro los productos que hay disponobles

if(seleccion == "si"){
    alert(" a continuación nuestra lista de productos")
    let todosLosProductos = productos.map(
    (productos) => productos.nombre + " " + productos.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
}   else if (seleccion == "no"){
    alert(`${nombreUsuario} gracias por comprar en IceTech, hasta pronto`);
}

// Si desea comprar lo siguiente es ingresar cada producto SINO se le agradece y se cierra el alert

while(seleccion != "no"){
    let producto = prompt(`${nombreUsuario} agrega los productos que desees comprar (Ingrese el nombre tal cual la lista de productos)`)
    let precio = 0

    if(producto == "Mouse" || producto == "Tecaldo" || producto == "Auriculares" || producto == "Parlantes" || producto == "Joystick" || producto == "Camara" || producto == "Microfono" || producto == "Monitor" || producto == "CPU"){
        switch (producto) {
            case "Mouse":
                precio = 5000;
            break
            case "Teclado":
                precio = 7000;
            break
            case "Auriculares":
                precio = 8000;
            break
            case "Parlantes":
                precio = 8500;
            break
            case "Joystick":
                precio = 9000;
            break
            case "Camara":
                precio = 9500;
            break
            case "Microfono":
                precio = 6000;
            break
            case "Monitor":
                precio = 10000;
            break
            case "CPU":
                precio = 15000;
            break
            default:
            break;
        }

        // Le pregunto cuantas unidades del producto desea llevar

    let unidades = parseInt(prompt(`${nombreUsuario} cuantas unidades del producto deseas llevar?`))
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } 

    // consulto si desea seguir comprando o si ya desea terminar la compra 

    seleccion = prompt(`${nombreUsuario} deseas seguir comprando?`)

    //Calculo el total de la compra y hago al suma de todos los productos que eligio

    while(seleccion === "no"){
        alert(`${nombreUsuario} gracias por la compra, a continuacion te muestro el total de la compra`)
        carrito.forEach((carritoFinal) => {
            console.log(`productos: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

    //LLamo al carrito para mostrarle el precio final de su compra 

const total = carrito.reduce((acumulador, el) => acumulador + el.precio * el.unidades, 0)
alert(`${nombreUsuario} el total a pagar por su compra es: ${total}.`)















