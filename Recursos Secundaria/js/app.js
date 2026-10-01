const seccionInicio = document.getElementById("inicio");
const seccionAnio = document.getElementById("anio");
const seccionTema = document.getElementById("tema");

let anioActual = null;
let temaActual = null;


// =====================================================
// INFORMACIÓN DE LOS AÑOS
// =====================================================

const informacionAnios = {

    1: {
        titulo: "1° Año",
        descripcion: "HTML, CSS y fundamentos de JavaScript"
    },

    2: {
        titulo: "2° Año",
        descripcion: "JavaScript y lógica de programación"
    },

    3: {
        titulo: "3° Año",
        descripcion: "DOM, eventos y aplicaciones web"
    },

    4: {
        titulo: "4° Año",
        descripcion: "Programación Orientada a Objetos y proyectos"
    },

    5: {
        titulo: "5° Año",
        descripcion: "Programación avanzada y desarrollo de proyectos"
    }

};


// =====================================================
// MOSTRAR INICIO
// =====================================================

function mostrarInicio() {

    anioActual = null;
    temaActual = null;

    seccionInicio.classList.remove("oculto");
    seccionAnio.classList.add("oculto");
    seccionTema.classList.add("oculto");
}


// =====================================================
// MOSTRAR AÑO
// =====================================================

function mostrarAnio(numero) {

    anioActual = numero;

    seccionInicio.classList.add("oculto");
    seccionAnio.classList.remove("oculto");
    seccionTema.classList.add("oculto");

    const informacion = informacionAnios[numero];

    if (!informacion) {

        console.error(
            "No existe información para el año:",
            numero
        );

        return;
    }

    document.getElementById("tituloAnio").textContent =
        informacion.titulo;

    const descripcionAnio =
        document.getElementById("descripcionAnio");

    if (descripcionAnio) {

        descripcionAnio.textContent =
            informacion.descripcion;

    }

    cargarAnio(numero);
}


// =====================================================
// OBTENER CONTENIDOS
// =====================================================

function obtenerContenidos(numero) {

    switch (numero) {

        case 1:

            return typeof contenidos1 !== "undefined"
                ? contenidos1
                : null;

        case 2:

            return typeof contenidos2 !== "undefined"
                ? contenidos2
                : null;

        case 3:

            return typeof contenidos3 !== "undefined"
                ? contenidos3
                : null;

        case 4:

            return typeof contenidos4 !== "undefined"
                ? contenidos4
                : null;

        case 5:

            return typeof contenidos5 !== "undefined"
                ? contenidos5
                : null;

        default:

            return null;
    }
}


// =====================================================
// CARGAR UNIDADES
// =====================================================

function cargarAnio(numero) {

    const contenidosAnio =
        obtenerContenidos(numero);

    const listaTemas =
        document.getElementById("listaTemas");

    if (!listaTemas) {
        return;
    }

    listaTemas.innerHTML = "";


    if (!contenidosAnio) {

        listaTemas.innerHTML = `
            <div class="bloque">
                <h3>Contenido no disponible</h3>

                <p>
                    Todavía no hay contenidos cargados
                    para este año.
                </p>
            </div>
        `;

        return;
    }


    Object.keys(contenidosAnio).forEach(id => {

        const tema = contenidosAnio[id];

        const tarjeta =
            document.createElement("div");

        tarjeta.className = "card-tema";

        tarjeta.innerHTML = `
            <h3>${tema.titulo}</h3>

            <p>
                ${
                    tema.descripcion ||
                    "Ingresar al contenido de la unidad."
                }
            </p>
        `;


        tarjeta.addEventListener(
            "click",
            function () {

                mostrarTema(id);

            }
        );


        listaTemas.appendChild(tarjeta);

    });
}


// =====================================================
// MOSTRAR UNIDAD
// =====================================================

function mostrarTema(id) {

    const contenidosAnio =
        obtenerContenidos(anioActual);


    if (!contenidosAnio) {

        console.error(
            "No hay contenidos para este año."
        );

        return;
    }


    const tema =
        contenidosAnio[id];


    if (!tema) {

        console.error(
            "No se encontró la unidad:",
            id
        );

        return;
    }


    temaActual = {

        id: id,

        datos: tema

    };


    seccionInicio.classList.add("oculto");

    seccionAnio.classList.add("oculto");

    seccionTema.classList.remove("oculto");


    // TÍTULO

    document.getElementById("tituloTema").textContent =
        tema.titulo;


    // TEORÍA

    const teoria =
        document.getElementById("contenido-teoria");

    if (teoria) {

        teoria.innerHTML =
            tema.teoria ||
            "<p>No hay contenido de teoría disponible.</p>";

    }


    // EJEMPLOS

    const ejemplos =
        document.getElementById("contenido-ejemplos");

    if (ejemplos) {

        ejemplos.innerHTML =
            tema.ejemplos ||
            "<p>No hay ejemplos disponibles.</p>";

    }


    // PRÁCTICA

    const practica =
        document.getElementById("contenido-practica");

    if (practica) {

        practica.innerHTML =
            tema.practica ||
            "<p>No hay actividades disponibles.</p>";

    }


    // MOSTRAR TEORÍA AL ENTRAR

    const primeraPestana =
        document.querySelector(".pestana");

    mostrarPestana(
        "teoria",
        primeraPestana
    );
}


// =====================================================
// MOSTRAR / OCULTAR SOLUCIÓN
// =====================================================

function mostrarSolucion(boton) {

    const solucion =
        boton.nextElementSibling;


    if (!solucion) {

        return;

    }


    if (
        solucion.style.display === "none" ||
        solucion.style.display === ""
    ) {

        solucion.style.display = "block";

        boton.textContent =
            "Ocultar solución";

    } else {

        solucion.style.display = "none";

        boton.textContent =
            "Ver solución";

    }
}


// =====================================================
// VOLVER A LAS UNIDADES
// =====================================================

function volverAnio() {

    seccionTema.classList.add("oculto");

    seccionAnio.classList.remove("oculto");

    temaActual = null;
}


// =====================================================
// PESTAÑAS
// =====================================================

function mostrarPestana(id, boton) {

    document
        .querySelectorAll(".contenido-pestana")
        .forEach(contenido => {

            contenido.classList.remove("activa");

        });


    document
        .querySelectorAll(".pestana")
        .forEach(pestana => {

            pestana.classList.remove("activa");

        });


    const contenido =
        document.getElementById(
            "contenido-" + id
        );


    if (contenido) {

        contenido.classList.add("activa");

    }


    if (boton) {

        boton.classList.add("activa");

    }
}


// =====================================================
// IR AL INICIO
// =====================================================

function irInicio() {

    mostrarInicio();

}


// =====================================================
// INICIAR
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        mostrarInicio();

    }
);