
// creo las const que voy a usar en mi pagina para que se vean en el index

const iceContent = document.getElementById("ice-content");
const verCarrito = document.getElementById("verCarrito");
const modalContent = document.getElementById("modal-content");
const cantidadCarrito = document.getElementById("cantidadCarrito");

// carrito con el localstoraje para que se guarde y no se pierda los productos del carrito

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Creo una funsion asincrona con una promesa a traveas del archivo json 

const getProducts = async() => {
    const response = await fetch("data.json");
    const data = await response.json();
    
    // busco los productos para poder seleccionar para comprar

    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
            <img  src="${product.imagen}">
            <h3>${product.titulo}</h3>
            <p class="precio">${product.precio}</p>
            `;
        iceContent.append(content);
    // boton comprar
        let comprar = document.createElement("button")
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);

        comprar.addEventListener("click", () => {
    // agrego los productos al carrito y le muestro lo que yo elegi mostrar en el carrito

        const repeat = carrito.some ((repeatProduct) => repeatProduct.id === product.id );
        if (repeat){
            carrito.map((prod) => {
                if (prod.id === product.id){
                    prod.cantidad++;
                }
            })
        } else { 
            carrito.push({
                id : product.id,
                img: product.imagen,
                nombre: product.titulo,
                precio: product.precio,
                cantidad: product.cantidad,
            });
            console.table(carrito);
            carritoCounter();
            saveLocal();
        }   
        });
    });
    // creo el localstoraeg para almacenar los arrays
    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(carrito))    
    }
    // codeo el carrito segun lo que quiero que se muestre
    const pintarCarrito = () => { 
        modalContent.innerHTML = "";
        modalContent.style.display ="flex"
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header"
        modalHeader.innerHTML = `
            <h1 class="modal-header-titulo">Carrito</h1>
        `;
        modalContent.append(modalHeader);
    // esta opcion es para cerrar el carrito mediante ❌
        const modalButton = document.createElement("h1");
        modalButton.innerHTML = `✖`;
        modalButton.className = ("modal-header-button");

        modalButton.addEventListener("click", () => {
            modalContent.style.display = "none";
        });

        modalHeader.append(modalButton)
    // busco en el carrito y muestro lo que el cliente eligio comprar en el carrito 🛒
        carrito.forEach((product) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = ("modal-contents");
            carritoContent.innerHTML= `
                <img src="${product.img}">
                <h3>${product.nombre}</h3>
                <p>${product.precio} $</p>
                <span class="restar"> - </span>
                <p>Cantidad: ${product.cantidad}</p>
                <span class="sumar"> + </span>
                <p>Total: ${product.cantidad * product.precio}</p>
                <span class="eliminar-producto">❌</span>
        `;

        modalContent.append(carritoContent)
    // comandos para restar o sumar cantidades con + o -
        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () => {   
            if (product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal()
            pintarCarrito();
        })
        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () =>{
            product.cantidad++;
            saveLocal();
            pintarCarrito()
        })

    // Esta funcion es para eliminar algun producto del carrito
        let eliminar = carritoContent.querySelector(".eliminar-producto");
        
        eliminar.addEventListener("click", () =>{
            elmiinarProducto(product.id)
        });

        eliminar.addEventListener("click", elmiinarProducto)
        })

        const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    // creo el acumulador del precio final y le sumo el IVA ademas
        const totalCompra = document.createElement("div");
        totalCompra.className = "total-content";
        totalCompra.innerHTML = `Total a pagar con IVA: ${total * 1.21} $`;
        
        modalContent.append(totalCompra);
    };

    verCarrito.addEventListener("click", (pintarCarrito));

    const elmiinarProducto = (id) => {
        const foundId = carrito.find((element) => element.id === id);

        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId; 
        });
        carritoCounter();
        pintarCarrito ();
        saveLocal();
    }

    const carritoCounter = () => {
        cantidadCarrito.style.display = "block";
        cantidadCarrito.innerText = carrito.length;
    }

};

getProducts();

