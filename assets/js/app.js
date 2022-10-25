// Animación del header
window.addEventListener("scroll", function () {
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Validación del formulario
function enviaFormulario() {
    const formContacto = document.getElementById('formContacto');
    // nombre = document.getElementById('nombre').value,
    // correo = document.getElementById('correo').value,
    // asunto = document.querySelector('input[name="asunto"]:checked'),
    botonSub = document.getElementById('botonSub');

    let validarNombre = function (e) {
        if (formContacto.nombre.value == 0) {
            alert("Ingrese un nombre.");
            e.preventDefault();
        } else if (!formatoNombre(formContacto.nombre.value)) {
            alert("Ingrese un nombre válido.")
            e.preventDefault();
        }
    };

    const formatoNombre = (nombre) => {
        return /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(nombre);
    }

    let validarCorreo = function (e) {
        if (formContacto.correo.value == 0) {
            alert("Ingrese un correo electrónico.")
            e.preventDefault();
        } else if (!formatoCorreo(formContacto.correo.value)) {
            alert("Ingrese un correo electrónico válido.")
            e.preventDefault();
        }
    };

    const formatoCorreo = (correo) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
    }

    let validarAsunto = function (e) {
        if (formContacto.asunto[0].checked == true || formContacto.asunto[1].checked == true || formContacto.asunto[2].checked == true) {

        } else {
            alert("Elija un asunto.");
            e.preventDefault();
        }
    }


    function validarForm(e){
        validarNombre(e);
        validarCorreo(e);
        validarAsunto(e);
        // Código para evitar el cuadro (action) de formspree en pantalla. Se omite porque nos ignora las validaciones de JS.
        // const data = new FormData(this);
        // const response = await fetch(this.action, {
        //     method: this.method,
        //     body: data,
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // })
        // if (response.ok){
        //     this.reset()
        //     alert("¡Gracias por contactarte!");  
        // }
    }
    

    formContacto.addEventListener("submit", validarForm);
    // No encuentro manera de resetear el formulario de forma correcta.
}