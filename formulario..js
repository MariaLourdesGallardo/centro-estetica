

// Inicializa el calendario de fecha
$(function () {
    $("#fecha").datepicker();
});


// // Función de validación de formulario

const citaForm = document.getElementById("citaForm");
citaForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Recopila los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const horario = document.getElementById("horario").value;
    // Recopila otros datos del formulario según sea necesario

    // Redirige al usuario a la página de confirmación
    window.location.href = `confirmacion.html?nombre=${nombre}&servicio=${servicio}&fecha=${fecha}&horario=${horario}`;
});

