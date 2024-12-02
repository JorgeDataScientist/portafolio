// Variable para controlar la visibilidad del menú
let menuVisible = false;

// Función que oculta o muestra el menú de navegación
function mostrarOcultarMenu(){
    if(menuVisible){
        // Si el menú está visible, se oculta
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        // Si el menú está oculto, se muestra
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que oculta el menú una vez que se selecciona una opción
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades cuando la sección es visible
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        // Añadir las clases para aplicar animaciones
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detecta el desplazamiento (scrolling) para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
};

// Configuración del carrusel de imágenes
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button.next");
    const prevButton = document.querySelector(".carousel-button.prev");

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Alinear las diapositivas una junto a la otra
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + "px";
    });

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    };

    // Acción para el botón siguiente
    nextButton.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling || slides[0]; // Si no hay siguiente, regresa al primero
        moveToSlide(track, currentSlide, nextSlide);
    });

    // Acción para el botón anterior
    prevButton.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Si no hay anterior, va al último
        moveToSlide(track, currentSlide, prevSlide);
    });
});

// Función para abrir los enlaces del CV
function openCV() {
    window.open('https://drive.google.com/file/d/1Hr39kAqXgaeJ7L5XZSFKEaBqCjg9Sa0R/view?usp=sharing', '_blank');
    window.open('https://drive.google.com/file/d/1afL-Y7HH2RSdbEH_aY7HNI_clm7_wTgS/view?usp=sharing', '_blank');
}

// Función que abre varios enlaces relacionados con proyectos
function openLinks() {
    const links = [
        "https://github.com/JorgeDataScientist/Proyecto_Individual_1_Machine_Learning_Operations_?tab=readme-ov-file",
        "https://jorgeluisgarcia-pt01.onrender.com/docs#/","https://jorgeluisgarcia-pt01.onrender.com/",
        "https://www.youtube.com/watch?v=vhlR6XJjDKM"
    ];
    links.forEach(link => window.open(link, "_blank"));
}

// Funciones para abrir enlaces específicos para blogs y proyectos
function openLinksForBlog() {
    const links = [
        "https://jorgedataengineer.medium.com/an%C3%A1lisis-del-acceso-a-internet-en-argentina-impulsando-la-conectividad-digital-7830bfd73102",
        "https://github.com/JorgeDataScientist/P_I_2_Telecomunicaciones"
    ];
    links.forEach(link => window.open(link, "_blank"));
}

function openLinksForBlogFutbol() {
    const links = [
        "https://medium.com/@jorgedataengineer/an%C3%A1lisis-de-datos-en-el-f%C3%BAtbol-a6401f4f5c3b",
        "https://github.com/JorgeDataScientist/Jugadores-FIFA---Analisis-de-Datos"
    ];
    links.forEach(link => window.open(link, "_blank"));
}

function openLinksForVideo() {
    const links = [
        "https://www.youtube.com/watch?v=DYY5jFZztkw&t=0s",
        "https://github.com/JorgeDataScientist/Python_Tkinter_PyMySQL"
    ];
    links.forEach(link => window.open(link, "_blank"));
}

function openLinksForRepo() {
    const links = [
        "https://github.com/JorgeDataScientist/pyspark-ingenieria-de-datos",
        "https://github.com/JorgeDataScientist/ETL-with-Python-and-PySpark"
    ];
    links.forEach(link => window.open(link, "_blank"));
}

// // Función para cambiar el idioma entre español e inglés
// let currentLanguage = 'es'; // Idioma por defecto (español)

// function toggleLanguage() {
//     const elements = document.querySelectorAll('[data-es][data-en]'); // Selecciona todos los elementos con atributos data-es y data-en
//     currentLanguage = currentLanguage === 'es' ? 'en' : 'es'; // Alterna entre español e inglés

//     elements.forEach(el => {
//         el.textContent = el.getAttribute(`data-${currentLanguage}`); // Actualiza el contenido según el idioma seleccionado
//     });

//     // Cambiar el texto del botón según el idioma seleccionado
//     const toggleButton = document.getElementById('language-toggle');
//     toggleButton.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
// }

// // Asegurarse de que al cargar la página se muestren los textos en español
// document.addEventListener('DOMContentLoaded', () => {
//     const elements = document.querySelectorAll('[data-es][data-en]');
//     elements.forEach(el => {
//         el.textContent = el.getAttribute('data-es'); // Muestra el contenido en español por defecto
//     });
// });


// Función para cambiar el idioma entre español e inglés
let currentLanguage = 'es'; // Idioma por defecto (español)

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-es][data-en]'); // Selecciona todos los elementos con atributos data-es y data-en
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es'; // Alterna entre español e inglés

    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLanguage}`); // Actualiza el contenido según el idioma seleccionado
    });

    // Cambiar el texto del botón según el idioma seleccionado
    const toggleButton = document.getElementById('language-toggle');
    toggleButton.textContent = currentLanguage === 'es' ? 'ES' : 'EN';

    // Cambiar el atributo data-language del botón según el idioma seleccionado
    toggleButton.setAttribute('data-language', currentLanguage);
}

// Asegurarse de que al cargar la página se muestren los textos en español
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-es][data-en]');
    elements.forEach(el => {
        el.textContent = el.getAttribute('data-es'); // Muestra el contenido en español por defecto
    });

    // Al cargar la página, aseguramos que el atributo data-language se inicialice correctamente
    const toggleButton = document.getElementById('language-toggle');
    toggleButton.setAttribute('data-language', 'es'); // Establecer 'es' como idioma inicial
});


