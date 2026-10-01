const contenidos2 = {

    // =====================================================
    // UNIDAD 1
    // =====================================================

    unidad1: {

        titulo:
            "Unidad 1: Fundamentos de JavaScript, Variables y Condicionales",

        descripcion:
            "Variables, operadores, condicionales y toma de decisiones.",


        teoria: `

            <div class="bloque">

                <h3>¿Qué es un programa?</h3>

                <p>
                    Un programa es un conjunto de instrucciones
                    que una computadora ejecuta para realizar
                    una tarea determinada.
                </p>

            </div>


            <div class="bloque">

                <h3>console.log()</h3>

                <p>
                    Permite mostrar información en la consola
                    del navegador.
                </p>

                <pre><code>
console.log("Hola mundo");
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Variables</h3>

                <p>
                    Las variables permiten guardar información
                    para utilizarla posteriormente.
                </p>

                <pre><code>
let nombre = "Juan";
let edad = 16;
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Condicionales</h3>

                <p>
                    Las estructuras if, else if y else permiten
                    tomar decisiones según determinadas condiciones.
                </p>

                <pre><code>
if (edad >= 18) {

    console.log("Mayor de edad");

} else {

    console.log("Menor de edad");

}
                </code></pre>

            </div>

        `,


        ejemplos: `

            <div class="bloque">

                <h3>Ejemplo 1</h3>

                <pre><code>
let nombre = "Juan";
let edad = 16;

console.log(nombre);
console.log(edad);
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Ejemplo 2</h3>

                <pre><code>
let numero = 10;

if (numero > 0) {

    console.log("Positivo");

} else {

    console.log("Negativo");

}
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Ejemplo 3</h3>

                <pre><code>
let nota = 8;

if (nota >= 9) {

    console.log("Excelente");

} else if (nota >= 6) {

    console.log("Aprobado");

} else {

    console.log("Desaprobado");

}
                </code></pre>

            </div>

        `,


        practica: `

            <div class="ejercicio">

                <h3>Ejercicio 1</h3>

                <p>
                    Crear un programa que evalúe si un número
                    es positivo, negativo o cero.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let numero = 10;

if (numero > 0) {

    console.log("Positivo");

} else if (numero < 0) {

    console.log("Negativo");

} else {

    console.log("Cero");

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 2</h3>

                <p>
                    Crear un programa que indique si una
                    temperatura es mayor a 25 grados.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let temperatura = 30;

if (temperatura > 25) {

    console.log("Hace calor");

} else {

    console.log("Hace frío");

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 3</h3>

                <p>
                    Crear un sistema que clasifique una nota:
                    Excelente, Bien, Aprobado o Desaprobado.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let nota = 8;

if (nota >= 9) {

    console.log("Excelente");

} else if (nota >= 7) {

    console.log("Bien");

} else if (nota === 6) {

    console.log("Aprobado");

} else {

    console.log("Desaprobado");

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 4</h3>

                <p>
                    Crear un simulador de semáforo utilizando
                    una variable llamada color.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let color = "verde";

if (color === "rojo") {

    console.log("Detenerse");

} else if (color === "amarillo") {

    console.log("Precaución");

} else if (color === "verde") {

    console.log("Avanzar");

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 5</h3>

                <p>
                    Determinar si un número es positivo,
                    negativo o cero y además indicar si es
                    par o impar.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let numero = 8;

if (numero > 0) {

    console.log("Positivo");

} else if (numero < 0) {

    console.log("Negativo");

} else {

    console.log("Cero");

}


if (numero % 2 === 0) {

    console.log("Par");

} else {

    console.log("Impar");

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 6</h3>

                <p>
                    Comparar tres números y determinar cuál
                    es el mayor.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let a = 15;
let b = 8;
let c = 20;

if (a > b && a > c) {

    console.log(a);

} else if (b > a && b > c) {

    console.log(b);

} else {

    console.log(c);

}
                    </code></pre>

                </div>

            </div>

        `
    },


    // =====================================================
    // UNIDAD 2
    // =====================================================

    unidad2: {

        titulo:
            "Unidad 2: Estructuras de Repetición",

        descripcion:
            "Bucles for, while y do...while.",


        teoria: `

            <div class="bloque">

                <h3>¿Qué es un bucle?</h3>

                <p>
                    Un bucle permite repetir instrucciones
                    sin tener que escribirlas varias veces.
                </p>

            </div>


            <div class="bloque">

                <h3>Bucle for</h3>

                <pre><code>
for (let i = 1; i <= 5; i++) {

    console.log(i);

}
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Bucle while</h3>

                <pre><code>
let numero = 1;

while (numero <= 5) {

    console.log(numero);

    numero++;

}
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Bucle do...while</h3>

                <pre><code>
let numero = 1;

do {

    console.log(numero);

    numero++;

} while (numero <= 5);
                </code></pre>

            </div>

        `,


        ejemplos: `

            <div class="bloque">

                <h3>Ejemplo con for</h3>

                <pre><code>
for (let i = 1; i <= 10; i++) {

    console.log(i);

}
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Ejemplo con while</h3>

                <pre><code>
let texto = "";

while (texto !== "salir") {

    texto = prompt(
        "Escribí salir para finalizar"
    );

}
                </code></pre>

            </div>

        `,


        practica: `

            <div class="ejercicio">

                <h3>Ejercicio 1</h3>

                <p>
                    Mostrar los números del 1 al 10 en orden
                    ascendente y luego del 10 al 1.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
for (let i = 1; i <= 10; i++) {

    console.log(i);

}


for (let i = 10; i >= 1; i--) {

    console.log(i);

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 2</h3>

                <p>
                    Mostrar únicamente los números pares
                    entre 1 y 20.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {

        console.log(i);

    }

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 3</h3>

                <p>
                    Generar la tabla de multiplicar de un
                    número del 1 al 10.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let numero = 5;

for (let i = 1; i <= 10; i++) {

    console.log(
        numero + " x " +
        i + " = " +
        numero * i
    );

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 4</h3>

                <p>
                    Crear un programa que solicite una
                    contraseña hasta ingresar "1234".
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let clave = "";

while (clave !== "1234") {

    clave = prompt(
        "Ingrese la contraseña"
    );

}

console.log(
    "Contraseña correcta"
);
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 5</h3>

                <p>
                    Solicitar palabras hasta que el usuario
                    escriba "fin" y mostrar la cantidad
                    de intentos.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let palabra = "";
let intentos = 0;

while (palabra !== "fin") {

    palabra = prompt(
        "Ingrese una palabra"
    );

    intentos++;

}

console.log(
    "Intentos: " + intentos
);
                    </code></pre>

                </div>

            </div>

        `
    },


    // =====================================================
    // UNIDAD 3
    // =====================================================

    unidad3: {

        titulo:
            "Unidad 3: Contadores, Acumuladores y Menús Interactivos",

        descripcion:
            "Contadores, acumuladores y construcción de menús.",


        teoria: `

            <div class="bloque">

                <h3>Contador</h3>

                <p>
                    Un contador aumenta normalmente de uno en uno
                    para contabilizar una cantidad.
                </p>

                <pre><code>
contador++;
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Acumulador</h3>

                <p>
                    Un acumulador permite sumar diferentes valores
                    para obtener un total.
                </p>

                <pre><code>
suma = suma + numero;
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Menú interactivo</h3>

                <p>
                    Un menú permite seleccionar diferentes
                    acciones dentro de un programa.
                </p>

            </div>

        `,


        ejemplos: `

            <div class="bloque">

                <h3>Ejemplo</h3>

                <pre><code>
let sumaTotal = 0;
let aprobados = 0;

for (let i = 1; i <= 3; i++) {

    let nota = parseInt(
        prompt("Ingrese nota:")
    );

    sumaTotal =
        sumaTotal + nota;

    if (nota >= 6) {

        aprobados++;

    }

}

console.log(
    "Suma total: " +
    sumaTotal
);

console.log(
    "Aprobados: " +
    aprobados
);
                </code></pre>

            </div>

        `,


        practica: `

            <div class="ejercicio">

                <h3>Ejercicio 1</h3>

                <p>
                    Contar cuántos números impares existen
                    entre 1 y 15.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let contador = 0;

for (let i = 1; i <= 15; i++) {

    if (i % 2 !== 0) {

        contador++;

    }

}

console.log(contador);
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 2</h3>

                <p>
                    Sumar exclusivamente los números pares
                    comprendidos entre 1 y 20.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let suma = 0;

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {

        suma = suma + i;

    }

}

console.log(suma);
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 3</h3>

                <p>
                    Crear una mini calculadora interactiva
                    con opciones para sumar, restar,
                    multiplicar, dividir y salir.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
let opcion = 0;

while (opcion !== 5) {

    opcion = Number(
        prompt(
            "1 - Sumar\\n" +
            "2 - Restar\\n" +
            "3 - Multiplicar\\n" +
            "4 - Dividir\\n" +
            "5 - Salir"
        )
    );


    if (opcion >= 1 && opcion <= 4) {

        let a = Number(
            prompt(
                "Ingrese el primer número"
            )
        );

        let b = Number(
            prompt(
                "Ingrese el segundo número"
            )
        );


        if (opcion === 1) {

            console.log(a + b);

        } else if (opcion === 2) {

            console.log(a - b);

        } else if (opcion === 3) {

            console.log(a * b);

        } else if (opcion === 4) {

            if (b !== 0) {

                console.log(a / b);

            } else {

                console.log(
                    "No se puede dividir por cero"
                );

            }

        }

    }

}
                    </code></pre>

                </div>

            </div>

        `
    },


    // =====================================================
    // UNIDAD 4
    // =====================================================

    unidad4: {

        titulo:
            "Unidad 4: Funciones en JavaScript",

        descripcion:
            "Funciones, parámetros, argumentos y retorno.",


        teoria: `

            <div class="bloque">

                <h3>¿Qué es una función?</h3>

                <p>
                    Una función es un bloque de código reutilizable
                    diseñado para realizar una tarea determinada.
                </p>

                <pre><code>
function saludar() {

    console.log("Hola");

}
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Parámetros y argumentos</h3>

                <p>
                    Los parámetros son las variables que recibe
                    una función. Los argumentos son los valores
                    que enviamos al llamar a la función.
                </p>

                <pre><code>
function saludar(nombre) {

    console.log("Hola " + nombre);

}

saludar("Ana");
                </code></pre>

            </div>


            <div class="bloque">

                <h3>Return</h3>

                <p>
                    return permite devolver un resultado desde
                    una función.
                </p>

                <pre><code>
function sumar(a, b) {

    return a + b;

}

let resultado =
    sumar(5, 3);

console.log(resultado);
                </code></pre>

            </div>

        `,


        ejemplos: `

            <div class="bloque">

                <h3>Ejemplo con retorno</h3>

                <pre><code>
function calcularPromedio(
    nota1,
    nota2,
    nota3
) {

    return (
        nota1 +
        nota2 +
        nota3
    ) / 3;

}

let promedio =
    calcularPromedio(8, 7, 9);

console.log(promedio);
                </code></pre>

            </div>

        `,


        practica: `

            <div class="ejercicio">

                <h3>Ejercicio 1</h3>

                <p>
                    Crear una función
                    convertirTemperatura(celsius)
                    que convierta Celsius a Fahrenheit.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function convertirTemperatura(celsius) {

    return (celsius * 1.8) + 32;

}

console.log(
    convertirTemperatura(20)
);
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 2</h3>

                <p>
                    Crear una función
                    calcularSegundos(horas, minutos, segundos)
                    que devuelva el total de segundos.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function calcularSegundos(
    horas,
    minutos,
    segundos
) {

    return (
        horas * 3600 +
        minutos * 60 +
        segundos
    );

}

console.log(
    calcularSegundos(1, 30, 20)
);
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 3</h3>

                <p>
                    Crear una función esPar(numero)
                    que devuelva true si el número
                    es par y false si es impar.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function esPar(numero) {

    return numero % 2 === 0;

}

console.log(
    esPar(8)
);
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 4</h3>

                <p>
                    Crear una función
                    calcularPrecioCine(cantidad)
                    que calcule el precio de las entradas.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function calcularPrecioCine(cantidad) {

    let precio =
        cantidad * 5000;


    if (cantidad >= 5) {

        precio =
            precio * 0.80;

    }


    return precio;

}


console.log(
    calcularPrecioCine(5)
);
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 5</h3>

                <p>
                    Crear una función calcularConsumo(km)
                    para calcular los litros necesarios
                    para un viaje.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function calcularConsumo(km) {

    return km * 7 / 100;

}


console.log(
    calcularConsumo(200)
);
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 6</h3>

                <p>
                    Crear una función precioTotal(precio)
                    que calcule el costo final de una compra.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function precioTotal(precio) {

    if (precio > 50000) {

        return precio;

    } else {

        return precio + 3000;

    }

}


console.log(
    precioTotal(45000)
);
                    </code></pre>

                </div>

            </div>

        `
    },


    // =====================================================
    // UNIDAD 5
    // =====================================================

    unidad5: {

        titulo:
            "Unidad 5: Arquitectura Modular, Testing y Casos Límite",

        descripcion:
            "Organización del código mediante funciones y pruebas.",


        teoria: `

            <div class="bloque">

                <h3>Modularización</h3>

                <p>
                    La modularización permite dividir un programa
                    en diferentes funciones independientes.
                </p>

            </div>


            <div class="bloque">

                <h3>Manejo del estado</h3>

                <p>
                    El estado representa los datos actuales
                    de una entidad, como vida, nivel, oro
                    o cantidad de pociones.
                </p>

            </div>


            <div class="bloque">

                <h3>Testing</h3>

                <p>
                    Las pruebas permiten verificar que el programa
                    funcione correctamente y detectar casos límite.
                </p>

            </div>

        `,


        ejemplos: `

            <div class="bloque">

                <h3>Sistema de videojuego</h3>

                <pre><code>
let jugador = {

    nombre: "Jugador1",
    nivel: 1,
    experiencia: 0,
    vida: 100,
    oro: 0,
    pociones: 3

};
                </code></pre>

            </div>

        `,


        practica: `

            <div class="ejercicio">

                <h3>Ejercicio 1</h3>

                <p>
                    Crear la función mostrarEstadisticas()
                    para mostrar los datos del jugador.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function mostrarEstadisticas() {

    console.log(jugador);

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 2</h3>

                <p>
                    Crear ganarExperiencia(puntos) para sumar
                    experiencia al jugador.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function ganarExperiencia(puntos) {

    jugador.experiencia =
        jugador.experiencia + puntos;

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 3</h3>

                <p>
                    Crear recibirDanio(puntos) asegurando que
                    la vida nunca sea menor que 0.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function recibirDanio(puntos) {

    jugador.vida =
        jugador.vida - puntos;


    if (jugador.vida < 0) {

        jugador.vida = 0;

    }

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 4</h3>

                <p>
                    Crear usarPocion() para recuperar 30 de vida
                    sin superar 100.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function usarPocion() {

    if (jugador.pociones > 0) {

        jugador.vida =
            jugador.vida + 30;


        if (jugador.vida > 100) {

            jugador.vida = 100;

        }


        jugador.pociones--;

    }

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 5</h3>

                <p>
                    Crear comprarPocion() verificando que el
                    jugador tenga suficiente oro.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <pre><code>
function comprarPocion() {

    if (jugador.oro >= 50) {

        jugador.oro =
            jugador.oro - 50;

        jugador.pociones++;

    }

}
                    </code></pre>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Ejercicio 6</h3>

                <p>
                    Aplicar la rutina Afirmar, Apoyar y Cuestionar
                    al sistema de videojuego.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Solución:</strong>

                    <p>
                        <strong>Afirmar:</strong>
                        La vida nunca puede ser menor que 0.
                    </p>

                    <p>
                        <strong>Apoyar:</strong>
                        La función recibirDanio()
                        controla ese límite.
                    </p>

                    <p>
                        <strong>Cuestionar:</strong>
                        ¿Qué ocurre si se recibe un daño de 500?
                        ¿Qué ocurre si se recibe un número negativo?
                    </p>

                </div>

            </div>

        `
    },


    // =====================================================
    // UNIDAD 6
    // =====================================================

    unidad6: {

        titulo:
            "Unidad 6: Ética e Impacto de la Inteligencia Artificial",

        descripcion:
            "Análisis crítico de la inteligencia artificial.",


        teoria: `

            <div class="bloque">

                <h3>Inteligencia Artificial</h3>

                <p>
                    La inteligencia artificial permite desarrollar
                    sistemas capaces de realizar tareas que normalmente
                    requieren capacidades humanas.
                </p>

            </div>


            <div class="bloque">

                <h3>Dilemas éticos</h3>

                <p>
                    El uso de IA puede generar diferentes problemas
                    relacionados con responsabilidad, sesgos,
                    privacidad y toma de decisiones.
                </p>

            </div>


            <div class="bloque">

                <h3>Deepfakes y desinformación</h3>

                <p>
                    Los contenidos generados o modificados mediante
                    IA pueden utilizarse para crear información falsa.
                </p>

            </div>


            <div class="bloque">

                <h3>IA en educación</h3>

                <p>
                    La IA puede utilizarse como herramienta de apoyo,
                    pero también requiere desarrollar pensamiento crítico.
                </p>

            </div>

        `,


        ejemplos: `

            <div class="bloque">

                <h3>Caso de análisis</h3>

                <p>
                    Una herramienta de IA utilizada para seleccionar
                    trabajadores descarta determinados candidatos
                    debido a sesgos presentes en sus datos históricos.
                </p>

            </div>


            <div class="bloque">

                <h3>Otro caso</h3>

                <p>
                    Se publica un video manipulado mediante IA
                    para hacer parecer que una persona dijo algo
                    que nunca dijo.
                </p>

            </div>

        `,


        practica: `

            <div class="ejercicio">

                <h3>Actividad 1</h3>

                <p>
                    Explicar dos beneficios y dos riesgos
                    del uso de inteligencia artificial.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Respuesta posible:</strong>

                    <p>
                        Algunos beneficios pueden ser la automatización
                        de tareas y el acceso rápido a información.
                    </p>

                    <p>
                        Entre los riesgos pueden encontrarse los sesgos,
                        la dependencia tecnológica y la desinformación.
                    </p>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Actividad 2</h3>

                <p>
                    Analizar el caso de una IA de selección
                    laboral que presenta sesgos.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Respuesta posible:</strong>

                    <p>
                        El problema aparece cuando los datos utilizados
                        para entrenar el sistema contienen patrones
                        discriminatorios.
                    </p>

                    <p>
                        La IA puede reproducir esos patrones
                        al tomar decisiones.
                    </p>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Actividad 3</h3>

                <p>
                    Explicar qué problemas puede generar
                    un deepfake.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Respuesta posible:</strong>

                    <p>
                        Un deepfake puede utilizarse para crear
                        contenido falso y hacer creer que una persona
                        realizó declaraciones o acciones que nunca realizó.
                    </p>

                </div>

            </div>


            <div class="ejercicio">

                <h3>Actividad 4</h3>

                <p>
                    Analizar ventajas y riesgos del uso
                    de IA en educación.
                </p>


                <button
                    class="boton-solucion"
                    onclick="mostrarSolucion(this)"
                >
                    Ver solución
                </button>


                <div
                    class="solucion"
                    style="display: none;"
                >

                    <strong>Respuesta posible:</strong>

                    <p>
                        La IA puede utilizarse como herramienta de apoyo
                        para explicar contenidos, generar ejemplos
                        o personalizar actividades.
                    </p>

                    <p>
                        También es necesario verificar la información
                        y mantener el pensamiento crítico.
                    </p>

                </div>

            </div>

        `
    }

};