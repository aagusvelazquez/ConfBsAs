function resumen() {
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var correo = document.getElementById('email');
    var nombreVacio = document.getElementById('nombreVacio');
    var apellidoVacio = document.getElementById('apellidoVacio');
    var correoVacio = document.getElementById('correoVacio');

    if (!nombre.value) {
        nombreVacio.classList.add('visible');
        nombre.classList.add('invalido');
        nombreVacio.setAttribute('aria-hidden', false);
        nombreVacio.setAttribute('aria-invalid', true);
    }else{
        nombreVacio.classList.add('invisible');
        nombre.classList.remove("invalido");
        nombreVacio.setAttribute('aria-hidden', true);
        nombreVacio.setAttribute('aria-invalid', true);
    }

    if (!apellido.value) {
        apellidoVacio.classList.add('visible');
        apellido.classList.add('invalido');
        apellidoVacio.setAttribute('aria-hidden', false);
        apellidoVacio.setAttribute('aria-invalid', true);
    }else{
        apellidoVacio.classList.add('invisible');
        apellido.classList.remove("invalido");
        apellidoVacio.setAttribute('aria-hidden', true);
        apellidoVacio.setAttribute('aria-invalid', true);
    }

    if (!correo.value) {
        correoVacio.classList.add('visible');
        correo.classList.add('invalido');
        correoVacio.setAttribute('aria-hidden', false);
        correoVacio.setAttribute('aria-invalid', true);
    }else{
        correoVacio.classList.add('invisible');
        correo.classList.remove("invalido");
        correoVacio.setAttribute('aria-hidden', true);
        correoVacio.setAttribute('aria-invalid', true);
    }

    var cant = document.getElementById('cantidad');
    var cantVacio = document.getElementById('cantVacio');
    var cat = document.getElementById('categoria');

    if (cat.value == 0) {
        resumenTotal = (200*0.2)*cant.value;
        document.getElementById('totalPagar').innerHTML = `$${resumenTotal}`;
    } else if (cat.value == 1) {
        resumenTotal = (200*0.5)*cant.value;
        document.getElementById('totalPagar').innerHTML = `$${resumenTotal}`;
    } else if (cat.value == 2) {
        resumenTotal = (200*0.85)*cant.value;
        document.getElementById('totalPagar').innerHTML = `$${resumenTotal}`;
    }else if (cat.value == 3) {
        resumenTotal = 200*cant.value;
        document.getElementById('totalPagar').innerHTML = `$${resumenTotal}`;
    }

    if (!cant.value) {
        cantVacio.classList.add('visible');
        cant.classList.add('invalido');
        cantVacio.setAttribute('aria-hidden', false);
        cantVacio.setAttribute('aria-invalid', true);
    }else{
        cantVacio.classList.add('invisible');
        cant.classList.remove("invalido");
        cantVacio.setAttribute('aria-hidden', true);
        cantVacio.setAttribute('aria-invalid', true);
    }
}

const btnClick = document.getElementById('btnResumen');
btnClick.addEventListener('click', resumen);

