// Función para mostrar u ocultar los botones de "Agendar cita"
function agendarCita() {
    var botones = document.getElementById('agendarCitaBtns');
    botones.style.display = (botones.style.display === "none" || botones.style.display === "") ? "block" : "none";
}

// Funciones para los botones de Agendar cita
function bañoEstandar() {
    alert("Has seleccionado Baño estandar.");
}

function bañoEspecializado() {
    alert("Has seleccionado Baño especializado.");
}

function bañoMedicado() {
    alert("Has seleccionado Baño medicado.");
}

function bañoInsecticida() {
    alert("Has seleccionado Baño insecticida.");
}

// Función para mostrar u ocultar los botones de "Reseña y testimonios"
function resenaTestimonios() {
    var botones = document.getElementById('resenaTestimoniosBtns');
    botones.style.display = (botones.style.display === "none" || botones.style.display === "") ? "block" : "none";
}

// Funciones para los botones de Reseña y Testimonios
function reseñaCliente() {
    alert("Has seleccionado Reseña por cliente.");
}

function videoTestimonio() {
    alert("Has seleccionado Video.");
}

function redesSociales() {
    alert("Has seleccionado Redes sociales.");
}

function correoTestimonios() {
    alert("Has seleccionado Correo.");
}

function preguntasFrecuentes() {
    alert("Has seleccionado Preguntas frecuentes.");
}

// Funciones para los otros botones
function paqueteServicios() {
    alert("Has seleccionado Paquete de servicios.");
}

function blogEducativo() {
    alert("Has seleccionado Blog educativo.");
}