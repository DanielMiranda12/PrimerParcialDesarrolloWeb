// Credenciales quemadas (predeterminadas)
const usuarioValido = "admin";
const contraseniaValida = "1234";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-inicio");
  const inputUsuario = document.getElementById("usuario");
  const inputContrasenia = document.getElementById("contrasenia");
  const mensajeError = document.getElementById("mensaje-error");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la página

    const usuario = inputUsuario.value.trim();
    const contrasenia = inputContrasenia.value.trim();

    // Validar campos vacíos
    if (usuario === "" || contrasenia === "") {
      mensajeError.textContent = "Por favor, rellena todos los campos.";
      return;
    }

    // Validar credenciales
    if (usuario === usuarioValido && contrasenia === contraseniaValida) {
      window.location.href = "index.html"; // Redirigir
    } else {
      mensajeError.textContent = "Usuario o contraseña incorrectos.";
    }
  });
});
