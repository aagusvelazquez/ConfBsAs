document.getElementById('validar').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const cantidad = document.getElementById('cantidad').value;
  const categoria = document.getElementById('categoria').value;
  const asistir = document.getElementById('fechaConf').value;
  
  const nombreRegex = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nombreValido = nombreRegex.test(nombre);
  const apellidoValido = nombreRegex.test(apellido);
  const emailValido = emailRegex.test(email);


  if (nombreValido && apellidoValido && emailValido && cantidad && categoria && asistir) {
    let fechaAsiste;
    let resumenTotal;

    if (categoria === "Estudiante") {
      resumenTotal = (200*0.2) * cantidad;
      document.getElementById('totalPagar').value = `$${resumenTotal}`;
      if (asistir === "Vie13Oct") {
        fechaAsiste = 'Viernes 13 de Octubre';
      } else if (asistir === "Sab14Oct") {
        fechaAsiste = 'Sábado 14 de Octubre';
      } else if (asistir === "Dom15Oct"){
        fechaAsiste = 'Domingo 15 de Octubre';
      }
      document.getElementById('generar-ticket').disabled = false;
    }
    if (categoria === "Trainee") {
      resumenTotal = (200*0.5) * cantidad;
      document.getElementById('totalPagar').value = `$${resumenTotal}`;
      if (asistir === "Vie13Oct") {
        fechaAsiste = 'Viernes 13 de Octubre';
      } else if (asistir === "Sab14Oct") {
        fechaAsiste = 'Sábado 14 de Octubre';
      } else if (asistir === "Dom15Oct"){
        fechaAsiste = 'Domingo 15 de Octubre';
      }
      document.getElementById('generar-ticket').disabled = false;
    }
    if (categoria === "Junior") {
      resumenTotal = (200*0.85) * cantidad;
      document.getElementById('totalPagar').value = `$${resumenTotal}`;
      if (asistir === "Vie13Oct") {
        fechaAsiste = 'Viernes 13 de Octubre';
      } else if (asistir === "Sab14Oct") {
        fechaAsiste = 'Sábado 14 de Octubre';
      } else if (asistir === "Dom15Oct"){
        fechaAsiste = 'Domingo 15 de Octubre';
      }
      document.getElementById('generar-ticket').disabled = false;
    }
    if (categoria === "SinCat") {
      resumenTotal = 200 * cantidad;
      document.getElementById('totalPagar').value = `$${resumenTotal}`;
      if (asistir === "Vie13Oct") {
        fechaAsiste = 'Viernes 13 de Octubre';
      } else if (asistir === "Sab14Oct") {
        fechaAsiste = 'Sábado 14 de Octubre';
      } else if (asistir === "Dom15Oct"){
        fechaAsiste = 'Domingo 15 de Octubre';
      }
      document.getElementById('generar-ticket').disabled = false;
    }

  } else {
    Swal.fire(
      'ERROR!',
      'Por favor, introduce datos válidos en todos los campos.',
      'error'
    )
  }
});

document.getElementById('generar-ticket').addEventListener('click', function() {
  const fecha = new Date();
  var hoy = fecha.getDate();
  var mesActual = fecha.getMonth() + 1; 
  var anioActual = fecha.getFullYear();
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;
  var cant = document.getElementById('cantidad').value;
  var categoria = document.getElementById('categoria').value;
  var asistir = document.getElementById('fechaConf').value;
  var fechaAsiste;
  var resumenTotal;

  document.getElementById("fechaCompra").textContent = hoy + "/" + mesActual + "/" + anioActual;
  document.getElementById("titularCompra").textContent = nombre + " " + apellido;
  document.getElementById("correoCompra").textContent = email;

  if (categoria === "Estudiante") {
    categoria = "Estudiante";
    resumenTotal = (200*0.2)*cant;
    document.getElementById('totalDeTicket').textContent = `$` + resumenTotal;
    document.getElementById("tipCantCompra").textContent = categoria + " x" + cant;
  }
  
  if (categoria === "Trainee") {
    categoria = "Trainee";
    resumenTotal = (200*0.5)*cant;
    document.getElementById('totalDeTicket').textContent = `$` + resumenTotal;
    document.getElementById("tipCantCompra").textContent = categoria + " x" + cant;
  }
  if (categoria === "Junior") {
    categoria = "Junior";
    resumenTotal = (200*0.85)*cant;
    document.getElementById('totalDeTicket').textContent = `$` + resumenTotal;
    document.getElementById("tipCantCompra").textContent = categoria + " x" + cant;
  }
  if (categoria === "SinCat") {
    categoria = "Sin Categoría"
    resumenTotal = 200*cant;
    document.getElementById('totalDeTicket').textContent = `$` + resumenTotal;
    document.getElementById("tipCantCompra").textContent = categoria + " x" + cant;
  }

  if (asistir === "Vie13Oct") {
    fechaAsiste = 'Viernes 13 de Octubre';
    document.getElementById('fechaAsiste').textContent = fechaAsiste;
  }
  if (asistir === "Sab14Oct") {
    fechaAsiste = 'Sábado 14 de Octubre';
    document.getElementById('fechaAsiste').textContent = fechaAsiste;
  }
  if (asistir === "Dom15Oct"){
    fechaAsiste = 'Domingo 15 de Octubre';
    document.getElementById('fechaAsiste').textContent = fechaAsiste;
  }
});

document.getElementById('descargarPDF').addEventListener('click', function () {
  var doc = new jsPDF();

  var x = 15;
  var y = 20;
  var tamañoCuadradoHoriz = 110;
  var tamañoCuadradoVert = 85;

  doc.rect(x, y, tamañoCuadradoHoriz, tamañoCuadradoVert);

  doc.setFontSize(20);
  doc.setFont('bold');
  doc.text("Ticket de Compra", 70, 30, null, null, "center");

  var contenido = document.getElementById("contenido").innerHTML;
  doc.fromHTML(contenido, 20, 30);

  doc.setFontSize(16);
  doc.setFont('bold');
  doc.text("¡GRACIAS POR TU COMPRA!", 70, 90, null, null, "center");

  doc.setFontSize(14);
  doc.setFont('bold');
  doc.text("¡Te esperamos!", 70, 98, null, null, "center");

  doc.save('Ticket de Compra - Conf BsAs.pdf');
  document.getElementById("form").reset();
});