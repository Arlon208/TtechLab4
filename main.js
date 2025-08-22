const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageTextarea = document.getElementById("message");
const enlacesMenu = document.querySelectorAll("nav ul li a");

enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    // Remover la clase 'active' de todos los enlaces
    enlacesMenu.forEach((link) => {
      link.classList.remove("active");
    });

    // Agregar la clase 'active' solo al enlace clickeado
    enlace.classList.add("active");
  });
});

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});

// VALIDACIÓN DEL FORMULARIO
// Definicion de Mensajes de error
function showError(element, message) {
  const errorSpan = document.getElementById(element.id + "-error");
  errorSpan.textContent = message;
  errorSpan.style.display = "block";
}

// 3. Definir una función para ocultar mensajes de error
function hideError(element) {
  const errorSpan = document.getElementById(element.id + "-error");
  errorSpan.textContent = "";
  errorSpan.style.display = "none";
}

// 4. Función principal
function validateForm(event) {
  // Prevenir el envío del formulario por defecto (dado que no se tiene backend)
  event.preventDefault();

  hideError(nameInput);
  hideError(emailInput);
  hideError(phoneInput);
  hideError(messageTextarea);

  // Obtener los valores de los campos
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const messageValue = messageTextarea.value.trim();

  let isValid = true; // Variable para controlar si el formulario es válido

  // Valida que los campos no estén vacíos
  if (!nameValue) {
    showError(nameInput, "El nombre es obligatorio.");
    isValid = false;
  }
  if (!emailValue) {
    showError(emailInput, "El email es obligatorio.");
    isValid = false;
  }
  if (!phoneValue) {
    showError(phoneInput, "El teléfono es obligatorio.");
    isValid = false;
  }
  if (!messageValue) {
    showError(messageTextarea, "El mensaje es obligatorio.");
    isValid = false;
  }

  // Validación del formato de email usando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue && !emailRegex.test(emailValue)) {
    showError(emailInput, "Por favor, ingrese un email válido.");
    isValid = false;
  }

  if (isValid) {
    alert("¡Formulario enviado con éxito!");
    form.submit(); // Envía el formulario si pasa la validación
  }
}
form.addEventListener("submit", validateForm);
