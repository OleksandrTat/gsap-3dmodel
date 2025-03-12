// Cuando la página esté completamente cargada
window.onload = function() {
    // Ocultar el cargador
    document.getElementById('loader').style.display = 'none';
    // Mostrar el contenido de la página
    document.getElementById('section').style.display = 'block';
};




// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});