const botonesEliminar = document.querySelectorAll('#eliminar-btn');
const button = document.querySelector("#create-evento-button");

botonesEliminar.forEach(button => {
    button.addEventListener('click', function() {
        const productoId = this.getAttribute('data-id');
        console.log('ID del producto a eliminar:', productoId);
        eliminarProducto(productoId);
    });
});

function eliminarProducto(productoId) {
    const token = document.querySelector("#csrf_token").value

    fetch(PRODUCT_DELETE_URL, {
        method: 'DELETE',
        headers:{
            "X-CSRFToken":token,
            "Accept": "aplication/json",
            "Content-Type": 'aplication/json'
        },
        body: JSON.stringify({"id" : productoId})
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`Error en la respuesta: ${res.status}`);
        }
        return res.json();
    })
    .then((value) => {
        alert(`${value.message}`);
        console.log(value);
        location.reload();
    }).catch((error) => {
        alert(`Error: ${error}`);
        console.log(error);
    })
    
    console.log(`Eliminar evento con ID: ${productoId}`);
}

//función fetch de crear
button.addEventListener("click", function(event){
    event.preventDefault();
    const form = document.querySelector("#create-evento-form");
    const formData = new FormData(form)
    const data = {}
    const requiredFields = [];
    const token = document.querySelector("#csrf_token").value

    formData.forEach((value, key) =>{
        data[key] = value;
        requiredFields.push(key)
    })

    //verificar que todos los campos estén llenos
    const fieldsFill = requiredFields.every(field => data[field] && data[field].trim() !== "");
    if (!fieldsFill) {
        alert("Por favor, rellena todos los campos");
        return;
    }

    const precioCheck = checkPrecio(data["precio"])
    if(!precioCheck) return;

    fetch(PRODUCT_CREATE_URL, {
        method: 'POST',
        headers:{
            "X-CSRFToken":token,
            "Accept": "aplication/json",
            "Content-Type": 'aplication/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`Error en la respuesta: ${res.status}`);
        }
        return res.json();
    })
        .then((value) => {
            alert(`${value.message}`);
            console.log(value);
            location.reload();
        }).catch((error) => {
            alert(`Error: ${error}`);
            console.log(error);
        })

})

function checkPrecio(precio_text){
    const precio = parseFloat(precio_text);

    if(precio <= 0){
        alert("Agregue un valor válido")
        return false;    
    }

    return true;
    
}