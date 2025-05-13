let personas = []
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value 
    let eErrorNombre= document.getElementById("errorNombre")
    console.log(eNombre)
    console.log(vNombre)
    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    console.log(eApellido)
    console.log(vApellido)
    if(vNombre.length >= 3){
        console.log("si cumple")
        eErrorNombre.innerText=""
        eNombre.style.backgroundColor = "green"
        eNombre.style.color = "white"
        
    }else{
        console.log("no cumple")
        alert("debes ingresar mas de 3 caracteres")
        eErrorNombre.innerText = "Debes ingresar mas de 3 caracteres"
        eNombre.style.backgroundColor = "red"
        eNombre.style.color = "white"
    }
    if (vApellido.length >= 5){
        console.log("si cumple")
        eErrorApellido.innerText = ""
        eApellido.style.backgroundColor="blue"
        eApellido.style.color="white"
        let p = {
            nombre : vNombre,
            apellido : vApellido
        }
        personas.push(p)
        eApellido.value = ""
        console.log(personas)
        cargarDatos()
    }else{
        console.log("no cumple")
        alert("debe ingresar mas de 5 caracteres tomto")
        eErrorApellido.innerText="debe ingresar mas de 5 caracteres tomto"
        eApellido.style.backgroundColor="black"
        eApellido.style.color ="white"
    }
}

function cargarDatos(){
    let eCuerpoTabla = document.getElementById("cuerpoTabla")
    let personasMap = personas.map((p)=>{
        return "<tr><td>"+p.nombre+p.apellido+"<tr><td>"
    })
    console.log("mapeandooo")
    console.log(personasMap)
    let personasStr = personasMap.join("")
    console.log("joineandoooo")
    console.log(personasStr)
    eCuerpoTabla.innerHTML= personasStr
}