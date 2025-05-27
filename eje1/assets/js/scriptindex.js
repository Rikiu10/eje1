let personas = []

function validar() {
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value.trim()
    let eErrorNombre = document.getElementById("errorNombre")

    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value.trim()
    let eErrorApellido = document.getElementById("errorApellido")

    let esValido = true

    if (vNombre.length >= 3) {
        eErrorNombre.innerText = ""
        eNombre.style.backgroundColor = "green"
        eNombre.style.color = "white"
    } else {
        esValido = false
        eErrorNombre.innerText = "Debes ingresar más de 3 caracteres"
        eNombre.style.backgroundColor = "red"
        eNombre.style.color = "white"
    }

    if (vApellido.length >= 5) {
        eErrorApellido.innerText = ""
        eApellido.style.backgroundColor = "blue"
        eApellido.style.color = "white"
    } else {
        esValido = false
        eErrorApellido.innerText = "Debes ingresar más de 5 caracteres"
        eApellido.style.backgroundColor = "black"
        eApellido.style.color = "white"
    }

    if (esValido) {
        let persona = {
            nombre: vNombre,
            apellido: vApellido
        }
        personas.push(persona)
        eNombre.value = ""
        eApellido.value = ""
        cargarDatos()
    }
}

function cargarDatos() {
    let eCuerpoTabla = document.getElementById("cuerpoTabla")
    eCuerpoTabla.innerHTML = ""

    personas.forEach((p, index) => {
        let fila = `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.apellido}</td>
            </tr>
        `
        eCuerpoTabla.innerHTML += fila
    })
}

