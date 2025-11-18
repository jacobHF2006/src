// ============================
// CONTACTANOS - Validación JS
// ============================

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contactForm");
    const btnCancelar = document.getElementById("btnCancelar");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Evitar envío real por ahora

        // Obtener valores
        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        const suscripcion = document.getElementById("suscripcion").checked;

        // Validación campos obligatorios
        if(nombre === "") {
            alert("El campo NOMBRE es obligatorio.");
            document.getElementById("nombre").focus();
            return;
        }

        if(telefono === "") {
            alert("El campo TELÉFONO es obligatorio.");
            document.getElementById("telefono").focus();
            return;
        }

        if(!/^\d+$/.test(telefono)) {
            alert("El teléfono solo puede contener números.");
            document.getElementById("telefono").focus();
            return;
        }

        // Validar email solo si se ingresó (opcional)
        if(email !== "" && !/^\S+@\S+\.\S+$/.test(email)) {
            alert("Ingrese un correo electrónico válido.");
            document.getElementById("email").focus();
            return;
        }

        // Campos opcionales: mensaje y suscripción no requieren validación

        // Si todo está correcto
        alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
        form.reset(); // Limpiar formulario
    });

    // Botón cancelar: limpiar formulario
    btnCancelar.addEventListener("click", function() {
        if(confirm("¿Desea cancelar y limpiar el formulario?")) {
            form.reset();
        }
    });

    // Evitar que textarea cambie de tamaño
    const textarea = document.getElementById("mensaje");
    textarea.addEventListener("input", function() {
        textarea.style.height = "auto"; // reset
        textarea.style.height = "120px"; // fijo
    });
});

// ============================
// CARRITO DE COMPRAS - JS
// ============================

document.addEventListener("DOMContentLoaded", function() {

    const botones = document.querySelectorAll(".add-to-cart");
    const carrito = [];

    botones.forEach(boton => {
        boton.addEventListener("click", function() {
            const nombre = boton.getAttribute("data-name");
            const precio = parseFloat(boton.getAttribute("data-price"));

            carrito.push({ nombre, precio });

            alert(`${nombre} ($${precio.toFixed(2)}) ha sido añadido al carrito.`);

            console.log("Carrito actual:", carrito);
        });
    });

});
