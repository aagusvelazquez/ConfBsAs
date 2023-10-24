function contactoOrador() {
    var nombre = document.getElementById('nombreFormOrador');
    var nombreError = document.getElementById('nombreError');
    var apellido = document.getElementById('apellidoFormOrador');
    var apellidoError = document.getElementById('apellidoError');
    var email = document.getElementById('emailFormOrador');
    var emailError = document.getElementById('correoError');
    var tema = document.getElementById('tema-charla');
    var temaError = document.getElementById('temaError');

    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegApellido=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegEmail=/^\w+@(\w+\.)+\w{2,4}$/;

    // Campo Nombre
    if (!nombre.value || !expRegNombre.exec(nombre.value)) {
        nombreError.classList.add('visible');
        nombre.classList.add('is-invalid');
        nombreError.setAttribute('aria-hidden', false);
        nombreError.setAttribute('aria-invalid', true);
        Swal.fire(
            'ERROR!',
            'Ingrese un nombre válido por favor!',
            'error'
        )
    }else {
        nombreError.classList.add('invisible');
        nombre.classList.remove('is-invalid');
        nombreError.setAttribute('aria-hidden', true);
        nombreError.setAttribute('aria-invalid', true);
    }

    // Campo Apellido
    if (!apellido.value || !expRegApellido.exec(apellido.value)) {
        apellidoError.classList.add('visible');
        apellido.classList.add('is-invalid');
        apellidoError.setAttribute('aria-hidden', false);
        apellidoError.setAttribute('aria-invalid', true);
        Swal.fire(
            'ERROR!',
            'Ingrese un apellido válido por favor!',
            'error'
        )
    }else {
        apellidoError.classList.add('invisible');
        apellido.classList.remove('is-invalid');
        apellidoError.setAttribute('aria-hidden', true);
        apellidoError.setAttribute('aria-invalid', true);
    }

    // Campo Correo
    if (!email.value || !expRegEmail.exec(correo.value)) {
        emailError.classList.add('visible');
        email.classList.add('is-invalid');
        emailError.setAttribute('aria-hidden', false);
        emailError.setAttribute('aria-invalid', true);
        Swal.fire(
            'ERROR!',
            'Ingrese un correo electrónico válido por favor!',
            'error'
        )
    }else {
        emailError.classList.add('invisible');
        email.classList.remove('is-invalid');
        emailError.setAttribute('aria-hidden', true);
        emailError.setAttribute('aria-invalid', true);
    }

    //Textarea con tema de charla
    if(!tema.value){
        temaError.classList.add('visible');
        tema.classList.add('is-invalid');
        temaError.setAttribute('aria-hidden', false);
        temaError.setAttribute('aria-invalid', true);
        Swal.fire(
            'ERROR!',
            'Complete el campo Tema de Charla por favor',
            'error'
        )
    } else {
        temaError.classList.add('invisible');
        tema.classList.remove('is-invalid');
        temaError.setAttribute('aria-hidden', true);
        temaError.setAttribute('aria-invalid', true);
    }
}

const btnFormClick = document.getElementById('btnOrador');
btnFormClick.addEventListener('click', contactoOrador);