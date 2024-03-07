
let cajaNombre = document.getElementById('nombre');
let cajaEmail = document.getElementById('email');
let cajaTelefono = document.getElementById('telefono');
let cajaAsunto = document.getElementById('asunto');
let cajaMensaje = document.getElementById('mensaje');

document.getElementById('enviar').addEventListener('click', function(evento) {


    evento.preventDefault()
   
    let nombre = cajaNombre.value
    let email = cajaEmail.value
    let telefono = cajaTelefono.value
    let asunto = cajaAsunto.value
    let mensaje = cajaMensaje.value

    if(nombre=="" && telefono=="" && asunto=="" && mensaje==""){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Debes ingresar todos los datos",
          });
        
    }
    else{

        Swal.fire({
            title: "Bienvenido!",
            text: "Tus datos de contacto fueron enviados correctamente",
            icon: "success"
          });

    }

    console.log('nombre:', nombre)
    console.log('email:', email)
    console.log('mensaje:', mensaje)
    console.log('telefono:', telefono)
    console.log('asunto:', asunto)

   
});
