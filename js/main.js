function resumen() {
    var nombre = document.getElementById('nombre');
    var nombreError = document.getElementById('nombreError');
    var apellido = document.getElementById('apellido');
    var apellidoError = document.getElementById('apellidoError');
    var correo = document.getElementById('email');
    var correoError = document.getElementById('correoError');

    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegApellido=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/;

    // Campo Nombre
    if (!nombre.value || !expRegNombre.exec(nombre.value)) {
        nombreError.classList.add('visible');
        nombre.classList.add('is-invalid');
        nombreError.setAttribute('aria-hidden', false);
        nombreError.setAttribute('aria-invalid', true);
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
    }else {
        apellidoError.classList.add('invisible');
        apellido.classList.remove('is-invalid');
        apellidoError.setAttribute('aria-hidden', true);
        apellidoError.setAttribute('aria-invalid', true);
    }

    // Campo Correo
    if (!correo.value || !expRegCorreo.exec(correo.value)) {
        correoError.classList.add('visible');
        correo.classList.add('is-invalid');
        correoError.setAttribute('aria-hidden', false);
        correoError.setAttribute('aria-invalid', true);
    }else {
        correoError.classList.add('invisible');
        correo.classList.remove('is-invalid');
        correoError.setAttribute('aria-hidden', true);
        correoError.setAttribute('aria-invalid', true);
    }

    var cant = document.getElementById('cantidad');
    var cantVacio = document.getElementById('cantVacio');
    var cat = document.getElementById('categoria');
    var resumenTotal;

    // Campo Cantidad y seleccion de Categoria
    if (!cant.value) {
        cantVacio.classList.add('visible');
        cant.classList.add('is-invalid');
        cantVacio.setAttribute('aria-hidden', false);
        cantVacio.setAttribute('aria-invalid', true);
        resumenTotal = "Seleccione la cantidad de entradas";
        document.getElementById('totalPagar').innerHTML = `${resumenTotal}`;
    }else{
        cantVacio.classList.add('invisible');
        cant.classList.remove("is-invalid");
        cantVacio.setAttribute('aria-hidden', true);
        cantVacio.setAttribute('aria-invalid', true);

        if (cat.value == 0) {
            resumenTotal = (200*0.2)*cant.value;
            document.getElementById('totalPagar').value = `$` + resumenTotal;
        } else if (cat.value == 1) {
            resumenTotal = (200*0.5)*cant.value;
            document.getElementById('totalPagar').value = `$` + resumenTotal;
        } else if (cat.value == 2) {
            resumenTotal = (200*0.85)*cant.value;
            document.getElementById('totalPagar').value = `$` + resumenTotal;
        }else if (cat.value == 3) {
            resumenTotal = 200*cant.value;
            document.getElementById('totalPagar').value = `$` + resumenTotal;
        }
    }
}

const btnClick = document.getElementById('btnResumen');
btnClick.addEventListener('click', resumen);

