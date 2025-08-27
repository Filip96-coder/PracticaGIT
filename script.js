function mostrarMensaje() {
  alert("La carrera de Ingeniería Informática te prepara para los retos tecnológicos del futuro 🚀");
}

function enviarFormulario(event) {
  event.preventDefault(); // evita que se recargue la página
  const nombre = document.getElementById("nombre").value;
  const programa = document.getElementById("programa").value;
  alert(`Gracias ${nombre}, hemos recibido tu interés en el programa de ${programa}. Nos pondremos en contacto pronto 📧`);
}
