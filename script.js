let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
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


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



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

    // Botón siguiente
    nextButton.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling || slides[0]; // Si no hay siguiente, regresa al primero

        moveToSlide(track, currentSlide, nextSlide);
    });

    // Botón anterior
    prevButton.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Si no hay anterior, va al último

        moveToSlide(track, currentSlide, prevSlide);
    });
});

function openCV() {
    window.open('https://drive.google.com/file/d/1Hr39kAqXgaeJ7L5XZSFKEaBqCjg9Sa0R/view?usp=sharing', '_blank');
    window.open('https://drive.google.com/file/d/1afL-Y7HH2RSdbEH_aY7HNI_clm7_wTgS/view?usp=sharing', '_blank');
}

function openLinks() {
    // URLs a abrir
    const links = [
        "https://github.com/JorgeDataScientist/Proyecto_Individual_1_Machine_Learning_Operations_?tab=readme-ov-file",
        "https://jorgeluisgarcia-pt01.onrender.com/docs#/",
        "https://jorgeluisgarcia-pt01.onrender.com/",
        "https://www.youtube.com/watch?v=vhlR6XJjDKM"
    ];

    // Abrir cada URL en una nueva pestaña
    links.forEach(link => window.open(link, "_blank"));
}

function openLinksForBlog() {
    // URLs a abrir
    const links = [
        "https://jorgedataengineer.medium.com/an%C3%A1lisis-del-acceso-a-internet-en-argentina-impulsando-la-conectividad-digital-7830bfd73102",
        "https://github.com/JorgeDataScientist/P_I_2_Telecomunicaciones"
    ];

    // Abrir cada URL en una nueva pestaña
    links.forEach(link => window.open(link, "_blank"));
}

function openLinksForBlogFutbol() {
    // URLs a abrir
    const links = [
        "https://medium.com/@jorgedataengineer/an%C3%A1lisis-de-datos-en-el-f%C3%BAtbol-a6401f4f5c3b",
        "https://github.com/JorgeDataScientist/Jugadores-FIFA---Analisis-de-Datos"
    ];

    // Abrir cada URL en una nueva pestaña
    links.forEach(link => window.open(link, "_blank"));
}

function openLinksForVideo() {
    // URLs a abrir
    const links = [
        "https://www.youtube.com/watch?v=DYY5jFZztkw&t=0s",
        "https://github.com/JorgeDataScientist/Python_Tkinter_PyMySQL"
    ];

    // Abrir cada URL en una nueva pestaña
    links.forEach(link => window.open(link, "_blank"));
}

function openLinksForRepo() {
    // URLs a abrir
    const links = [
        "https://github.com/JorgeDataScientist/pyspark-ingenieria-de-datos",
        "https://github.com/JorgeDataScientist/ETL-with-Python-and-PySpark"
    ];

    // Abrir cada URL en una nueva pestaña
    links.forEach(link => window.open(link, "_blank"));
}


