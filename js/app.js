
document.getElementById('btnOrador').addEventListener('click', function() {
    var nombre = document.getElementById('nombreFormOrador').value;
    var apellido = document.getElementById('apellidoFormOrador').value;
    var email = document.getElementById('emailFormOrador').value;
    var tema = document.getElementById('tema-charla').value;
    
    var nombreRegex = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    var nombreValido = nombreRegex.test(nombre);
    var apellidoValido = nombreRegex.test(apellido);
    var emailValido = emailRegex.test(email);
  
    if (nombreValido && apellidoValido && emailValido && tema) {
      Swal.fire(
        'Inscripción Aceptada!',
        'Gracias por inscribirte como orador! Nos estaremos comunicando con vos al correo que nos indicaste.',
        'success'
      )
      document.getElementById("formulario-orador").reset();
    } else {
      Swal.fire(
        'ERROR!',
        'Por favor, introduce datos válidos en todos los campos solicitados.',
        'error'
    )
    }
  });