
    // Alert example
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            alert('Este correo se enviara en un momento!');
        });
    });


document. addEventListener ('DOMContentLoaded', function() {
    const form = document.getElementById( 'contactForm'); 
    form.addEventListener ('submit', function(event) {
event. preventDefault ();
alert ( 'Mensaje enviado exitosamente.');
 });
    });

// aplicamos tema oscuro
const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");

}


// aplicamos tema claro
const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}


// funcion para cambiar de tema
const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
    }