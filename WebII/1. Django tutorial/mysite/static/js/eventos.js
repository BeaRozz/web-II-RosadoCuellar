const button = document.querySelector("#create-evento-button");
const botonesEliminar = document.querySelectorAll('#eliminar-btn');

botonesEliminar.forEach(button => {
    button.addEventListener('click', function() {
        const eventoId = this.getAttribute('data-id');
        console.log('ID del evento a eliminar:', eventoId);
        eliminarEvento(eventoId);
    });
});

function eliminarEvento(eventoId) {
    const token = document.querySelector("#csrf_token").value

    fetch(EVENT_DELETE_URL, {
        method: 'DELETE',
        headers:{
            "X-CSRFToken":token,
            "Accept": "aplication/json",
            "Content-Type": 'aplication/json'
        },
        body: JSON.stringify({"id" : eventoId})
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
    
    console.log(`Eliminar evento con ID: ${eventoId}`);
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

    //verifica los horarios
    const scheduleCheck = schedulesCheck(data["fecha-inicio"], data["fecha-fin"])
    if(!scheduleCheck) return;

    //verifica que la última localidad nos ea igual a la nueva asignada
    const localidadCheckPass = localidadCheck(data["localidad"])
    if(!localidadCheckPass) return;

    fetch(EVENT_CREATE_URL, {
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

//valida que las fechas son válidas
function schedulesCheck(inicio, fin){
    const dateInicio = new Date(inicio);
    const dateFin = new Date(fin);
    const hoy = new Date()
    
    //verifica que la fecha de inicio sea después de hoy
    if(dateInicio <= hoy){
        alert("La fecha de inicio debe ser después de hoy")
        return false    
    }

    if(dateFin <= dateInicio){
        alert("La fecha de fin es antes que la fecha de incio")
        return false
    }
    
    return true
}

function localidadCheck(localidadSend){
    //Obtenemos el valor de la última localidad
    const localidadTd = document.getElementById('localidad-1');
    const localidad = localidadTd.innerText || localidadTd.textContent;
    console.log(localidad);

    if (localidadSend == localidad){
        alert("No puede usar la última localidad guardada");
        return false
    }

    return true
}