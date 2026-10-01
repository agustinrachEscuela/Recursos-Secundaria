const contenidos3 = {

    // =========================================================
    // MÓDULO 1
    // =========================================================

    modulo1: {
        titulo: "Módulo 1: Arquitectura Web y Servidores con Google Apps Script",
        descripcion: "Frontend, Backend, páginas interactivas y creación de Web Apps con Google Apps Script.",

        teoria: `
            <h3>Frontend y Backend</h3>

            <p>
                El <strong>Frontend</strong> representa la interfaz visual de una aplicación web
                y se ejecuta principalmente en el navegador. Utiliza tecnologías como
                <strong>HTML, CSS y JavaScript</strong>.
            </p>

            <p>
                El <strong>Backend</strong> se encarga de procesar la lógica que se ejecuta
                en el servidor y permite gestionar diferentes operaciones de una aplicación.
            </p>

            <h3>Páginas estáticas e interactivas</h3>

            <p>
                Una página estática presenta información que permanece prácticamente igual
                hasta que el desarrollador modifica el código.
            </p>

            <p>
                Una página interactiva puede reaccionar ante las acciones del usuario,
                por ejemplo, cuando presiona un botón o completa un formulario.
            </p>

            <h3>Google Apps Script</h3>

            <p>
                Google Apps Script permite crear aplicaciones web utilizando servicios
                de Google. La función <code>doGet()</code> puede utilizarse como punto
                de entrada para mostrar una página HTML.
            </p>
        `,

        ejemplos: `
            <h3>Backend: Code.gs</h3>

            <pre><code>function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
}</code></pre>

            <h3>Frontend: index.html</h3>

            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        body {
            font-family: Arial;
            text-align: center;
            margin-top: 50px;
        }

        button {
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;h1&gt;Mi Web App Interactiva&lt;/h1&gt;

    &lt;button onclick="saludar()"&gt;
        Saludar
    &lt;/button&gt;

    &lt;script&gt;
        function saludar() {
            alert("¡Hola desde la web!");
        }
    &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
        `,

        practica: `
            <h3>Actividad 1: Crear una Web App</h3>

            <p>
                Crear una aplicación web sencilla utilizando Google Apps Script.
                El proyecto debe contar con un archivo <code>Code.gs</code> y un archivo
                <code>index.html</code>.
            </p>

            <p>
                El servidor debe utilizar la función <code>doGet()</code> para mostrar
                la página HTML.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <p><strong>Code.gs:</strong></p>

                <pre><code>function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
}</code></pre>

                <p><strong>index.html:</strong></p>

                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

    &lt;h1&gt;Mi Web App&lt;/h1&gt;

    &lt;button onclick="saludar()"&gt;
        Saludar
    &lt;/button&gt;

    &lt;script&gt;
        function saludar() {
            alert("¡Hola desde la web!");
        }
    &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>

            </div>
        `
    },


    // =========================================================
    // MÓDULO 2
    // =========================================================

    modulo2: {
        titulo: "Módulo 2: El Árbol del DOM y Selección de Nodos",
        descripcion: "Comprender el DOM y seleccionar elementos HTML desde JavaScript.",

        teoria: `
            <h3>¿Qué es el DOM?</h3>

            <p>
                El <strong>DOM (Document Object Model)</strong> es la representación
                del documento HTML que realiza el navegador.
            </p>

            <p>
                Los elementos del documento se organizan formando una estructura
                similar a un árbol de nodos.
            </p>

            <h3>Nodo raíz</h3>

            <p>
                El objeto <code>document</code> representa el documento HTML y permite
                acceder a los diferentes elementos que forman parte de la página.
            </p>

            <h3>Selección de elementos</h3>

            <p>
                JavaScript proporciona diferentes métodos para seleccionar elementos
                del DOM.
            </p>

            <ul>
                <li><code>document.getElementById()</code></li>
                <li><code>document.querySelector()</code></li>
            </ul>
        `,

        ejemplos: `
            <h3>Seleccionar por ID</h3>

            <pre><code>let titulo = document.getElementById("titulo");</code></pre>

            <h3>Seleccionar mediante un selector CSS</h3>

            <pre><code>let encabezado = document.querySelector("h1");</code></pre>
        `,

        practica: `
            <h3>Actividad 1: Seleccionar elementos del DOM</h3>

            <p>
                Crear una página que tenga un título con el identificador
                <code>titulo</code> y seleccionar dicho elemento desde JavaScript.
            </p>

            <p>
                Luego seleccionar el primer elemento <code>&lt;h1&gt;</code>
                utilizando <code>querySelector()</code>.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>let titulo = document.getElementById("titulo");

let encabezado = document.querySelector("h1");</code></pre>

            </div>
        `

    },


    // =========================================================
    // MÓDULO 3
    // =========================================================

    modulo3: {
        titulo: "Módulo 3: Modificación Dinámica de Contenido, Atributos y Estilos",
        descripcion: "Modificar contenidos, imágenes y estilos de los elementos HTML mediante JavaScript.",

        teoria: `
            <h3>Modificar contenido</h3>

            <p>
                JavaScript permite modificar el contenido de los elementos HTML
                utilizando propiedades como <code>textContent</code> e
                <code>innerHTML</code>.
            </p>

            <h3>Modificar atributos</h3>

            <p>
                También es posible modificar atributos de los elementos HTML.
                Por ejemplo, podemos cambiar la imagen mostrada modificando
                su propiedad <code>src</code>.
            </p>

            <h3>Modificar estilos</h3>

            <p>
                La propiedad <code>style</code> permite modificar propiedades
                visuales de los elementos desde JavaScript.
            </p>

            <p>
                Por ejemplo, podemos cambiar colores, fondos, bordes o formas.
            </p>
        `,

        ejemplos: `
            <h3>Modificar texto</h3>

            <pre><code>titulo.textContent = "Modo Noche Activado";</code></pre>

            <h3>Modificar color</h3>

            <pre><code>titulo.style.color = "darkblue";</code></pre>

            <h3>Modificar una imagen</h3>

            <pre><code>foto.src = "paisaje_noche.jpg";</code></pre>

            <h3>Modificar una forma</h3>

            <pre><code>caja.style.borderRadius = "50%";
caja.style.backgroundColor = "green";</code></pre>

            <h3>Ejemplo completo</h3>

            <pre><code>function modoNoche() {

    let titulo = document.getElementById("titulo");
    let foto = document.getElementById("foto");
    let caja = document.getElementById("caja");

    titulo.textContent = "Modo Noche Activado";
    titulo.style.color = "darkblue";

    foto.src = "paisaje_noche.jpg";

    caja.style.borderRadius = "50%";
    caja.style.backgroundColor = "green";
}</code></pre>
        `,

        practica: `
            <h3>Actividad 1: Modo Día y Modo Noche</h3>

            <p>
                Crear una función que permita modificar dinámicamente el contenido
                de una página para representar un modo noche.
            </p>

            <p>
                La función debe cambiar el título, el color del título,
                la imagen y el aspecto de una caja.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>function modoNoche() {

    let titulo = document.getElementById("titulo");
    let foto = document.getElementById("foto");
    let caja = document.getElementById("caja");

    titulo.textContent = "Modo Noche Activado";
    titulo.style.color = "darkblue";

    foto.src = "paisaje_noche.jpg";

    caja.style.borderRadius = "50%";
    caja.style.backgroundColor = "green";
}</code></pre>

            </div>


            <h3>Actividad 2: Cambiar una figura</h3>

            <p>
                Crear una función que transforme una caja cuadrada en un círculo
                y modifique su color de fondo.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>function transformarCaja() {

    let caja = document.getElementById("caja");

    caja.style.borderRadius = "50%";
    caja.style.backgroundColor = "green";
}</code></pre>

            </div>
        `
    },


    // =========================================================
    // MÓDULO 4
    // =========================================================

    modulo4: {
        titulo: "Módulo 4: Inserción y Creación Dinámica de Elementos",
        descripcion: "Crear nuevos elementos HTML e incorporarlos dinámicamente al DOM.",

        teoria: `
            <h3>Crear elementos dinámicamente</h3>

            <p>
                JavaScript permite crear nuevos elementos HTML mientras la página
                está funcionando.
            </p>

            <p>
                Para crear un elemento se utiliza:
            </p>

            <pre><code>document.createElement("etiqueta");</code></pre>

            <h3>Insertar elementos</h3>

            <p>
                Una vez creado un elemento, podemos incorporarlo al documento
                utilizando <code>appendChild()</code>.
            </p>

            <pre><code>elementoPadre.appendChild(nuevoElemento);</code></pre>
        `,

        ejemplos: `
            <h3>Crear un párrafo</h3>

            <pre><code>function agregarNota() {

    const nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent =
        "Entrega realizada dinámicamente";

    document.body.appendChild(nuevoParrafo);
}</code></pre>

            <h3>Crear un elemento de lista</h3>

            <pre><code>function agregarItem(textoIngresado) {

    let lista = document.getElementById("lista");

    let nuevoItem = document.createElement("li");

    nuevoItem.textContent = textoIngresado;

    lista.appendChild(nuevoItem);
}</code></pre>
        `,

        practica: `
            <h3>Actividad 1: Agregar una nota</h3>

            <p>
                Crear una función llamada <code>agregarNota()</code> que genere
                un nuevo párrafo y lo agregue al documento.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>function agregarNota() {

    const nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent =
        "Entrega realizada dinámicamente";

    document.body.appendChild(nuevoParrafo);
}</code></pre>

            </div>


            <h3>Actividad 2: Agregar elementos a una lista</h3>

            <p>
                Crear una función que reciba un texto y genere un nuevo elemento
                <code>&lt;li&gt;</code> dentro de una lista existente.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>function agregarItem(textoIngresado) {

    let lista = document.getElementById("lista");

    let nuevoItem = document.createElement("li");

    nuevoItem.textContent = textoIngresado;

    lista.appendChild(nuevoItem);
}</code></pre>

            </div>
        `
    },


    // =========================================================
    // MÓDULO 5
    // =========================================================

    modulo5: {
        titulo: "Módulo 5: Programación Orientada a Eventos y Escuchadores",
        descripcion: "Utilizar eventos y addEventListener para crear interfaces interactivas.",

        teoria: `
            <h3>¿Qué es un evento?</h3>

            <p>
                Un evento representa una acción que ocurre en una página web,
                muchas veces como consecuencia de una acción realizada por el usuario.
            </p>

            <p>
                Algunos ejemplos son:
            </p>

            <ul>
                <li><code>click</code></li>
                <li><code>mouseover</code></li>
                <li><code>mouseout</code></li>
                <li><code>keydown</code></li>
                <li><code>keyup</code></li>
            </ul>

            <h3>addEventListener()</h3>

            <p>
                <code>addEventListener()</code> permite asociar una función a un evento.
            </p>

            <pre><code>elemento.addEventListener("evento", funcion);</code></pre>

            <h3>Lectura de inputs</h3>

            <p>
                Para obtener el contenido de un campo de entrada se utiliza
                principalmente la propiedad <code>.value</code>.
            </p>
        `,

        ejemplos: `
            <h3>Evento mouseover</h3>

            <pre><code>let caja = document.getElementById("caja");

caja.addEventListener("mouseover", function() {

    caja.style.backgroundColor = "red";

});

caja.addEventListener("mouseout", function() {

    caja.style.backgroundColor = "blue";

});</code></pre>

            <h3>Evento de teclado</h3>

            <pre><code>let entrada = document.getElementById("texto");
let salida = document.getElementById("mensaje");

entrada.addEventListener("keyup", function() {

    salida.textContent = entrada.value;

});</code></pre>
        `,

        practica: `
            <h3>Actividad 1: Interacción con el mouse</h3>

            <p>
                Crear un programa que cambie el color de una caja cuando el
                usuario coloque el mouse sobre ella y que vuelva a cambiar
                cuando retire el mouse.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>let caja = document.getElementById("caja");

caja.addEventListener("mouseover", function() {

    caja.style.backgroundColor = "red";

});

caja.addEventListener("mouseout", function() {

    caja.style.backgroundColor = "blue";

});</code></pre>

            </div>


            <h3>Actividad 2: Texto en tiempo real</h3>

            <p>
                Crear un campo de texto y mostrar en otro elemento de la página
                el contenido que el usuario escribe en tiempo real.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>let entrada = document.getElementById("texto");
let salida = document.getElementById("mensaje");

entrada.addEventListener("keyup", function() {

    salida.textContent = entrada.value;

});</code></pre>

            </div>
        `
    },


    // =========================================================
    // MÓDULO 6
    // =========================================================

    modulo6: {
        titulo: "Módulo 6: Proyecto Integrador Frontend — Carrito de Compras (GameShop)",
        descripcion: "Construcción de un carrito de compras interactivo utilizando DOM, eventos y variables acumuladoras.",

        teoria: `
            <h3>Manejo de estado</h3>

            <p>
                Una aplicación interactiva necesita conservar información mientras
                el usuario realiza diferentes acciones.
            </p>

            <p>
                En un carrito de compras podemos utilizar variables para almacenar
                la cantidad de productos y el monto total.
            </p>

            <h3>Contadores y acumuladores</h3>

            <p>
                La variable <code>cantidad</code> puede utilizarse como contador
                de productos.
            </p>

            <p>
                La variable <code>total</code> puede utilizarse como acumulador
                del precio de los productos.
            </p>

            <h3>Renderizado y reseteo</h3>

            <p>
                Podemos agregar elementos al carrito utilizando
                <code>createElement()</code> y <code>appendChild()</code>.
            </p>

            <p>
                Para vaciar el contenido de una lista podemos utilizar
                <code>innerHTML = ""</code>.
            </p>
        `,

        ejemplos: `
            <h3>Variables del carrito</h3>

            <pre><code>let cantidad = 0;
let total = 0;</code></pre>

            <h3>Agregar un producto</h3>

            <pre><code>let btnMinecraft =
    document.getElementById("minecraft");

let listaCarrito =
    document.getElementById("listaCarrito");

let cantidadTexto =
    document.getElementById("cantidad");

let totalTexto =
    document.getElementById("total");

btnMinecraft.addEventListener("click", function() {

    let producto = document.createElement("li");

    producto.textContent =
        "Minecraft - $30000";

    listaCarrito.appendChild(producto);

    cantidad = cantidad + 1;

    total = total + 30000;

    cantidadTexto.textContent =
        "Productos: " + cantidad;

    totalTexto.textContent =
        "Total: $" + total;

});</code></pre>

            <h3>Vaciar carrito</h3>

            <pre><code>document.getElementById("vaciar")
    .addEventListener("click", function() {

        listaCarrito.innerHTML = "";

        cantidad = 0;
        total = 0;

        cantidadTexto.textContent =
            "Productos: 0";

        totalTexto.textContent =
            "Total: $0";

    });</code></pre>
        `,

        practica: `
            <h3>Actividad: Crear el carrito de GameShop</h3>

            <p>
                Crear la lógica de un carrito de compras interactivo.
            </p>

            <p>
                El programa debe permitir agregar productos a una lista,
                incrementar la cantidad de productos y acumular el precio total.
            </p>

            <p>
                También debe existir una opción para vaciar el carrito
                y restablecer los valores.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>let cantidad = 0;
let total = 0;

let btnMinecraft =
    document.getElementById("minecraft");

let listaCarrito =
    document.getElementById("listaCarrito");

let cantidadTexto =
    document.getElementById("cantidad");

let totalTexto =
    document.getElementById("total");

btnMinecraft.addEventListener("click", function() {

    let producto = document.createElement("li");

    producto.textContent =
        "Minecraft - $30000";

    listaCarrito.appendChild(producto);

    cantidad = cantidad + 1;

    total = total + 30000;

    cantidadTexto.textContent =
        "Productos: " + cantidad;

    totalTexto.textContent =
        "Total: $" + total;

});


document.getElementById("vaciar")
    .addEventListener("click", function() {

        listaCarrito.innerHTML = "";

        cantidad = 0;
        total = 0;

        cantidadTexto.textContent =
            "Productos: 0";

        totalTexto.textContent =
            "Total: $0";

    });</code></pre>

            </div>
        `
    },


    // =========================================================
    // MÓDULO 7
    // =========================================================

    modulo7: {
        titulo: "Módulo 7: Persistencia de Datos con LocalStorage y JSON",
        descripcion: "Guardar, recuperar y eliminar información utilizando LocalStorage y JSON.",

        teoria: `
            <h3>Variables y memoria</h3>

            <p>
                Los datos almacenados únicamente en variables se pierden cuando
                la página se recarga o cuando se cierra el navegador.
            </p>

            <h3>LocalStorage</h3>

            <p>
                <strong>LocalStorage</strong> permite guardar información en el
                dispositivo del usuario.
            </p>

            <p>
                Los datos almacenados permanecen disponibles aunque la página
                sea recargada.
            </p>

            <h3>LocalStorage y texto</h3>

            <p>
                LocalStorage almacena la información como texto.
                Por este motivo, cuando queremos guardar objetos o arreglos,
                necesitamos convertirlos previamente.
            </p>

            <h3>JSON.stringify()</h3>

            <p>
                <code>JSON.stringify()</code> convierte un objeto o arreglo
                de JavaScript en una cadena de texto JSON.
            </p>

            <h3>JSON.parse()</h3>

            <p>
                <code>JSON.parse()</code> realiza el proceso inverso:
                convierte el texto JSON nuevamente en un objeto de JavaScript.
            </p>

            <h3>Métodos principales</h3>

            <ul>
                <li><code>setItem()</code></li>
                <li><code>getItem()</code></li>
                <li><code>removeItem()</code></li>
                <li><code>clear()</code></li>
            </ul>
        `,

        ejemplos: `
            <h3>Guardar un objeto</h3>

            <pre><code>let usuario = {
    nombre: "Agustin",
    edad: 17,
    curso: "4° Año"
};

let usuarioJSON = JSON.stringify(usuario);

localStorage.setItem("usuario", usuarioJSON);</code></pre>

            <h3>Recuperar el objeto</h3>

            <pre><code>let datosGuardados =
    localStorage.getItem("usuario");

if (datosGuardados) {

    let usuarioRecuperado =
        JSON.parse(datosGuardados);

    console.log(
        "Usuario recuperado:",
        usuarioRecuperado.nombre
    );
}</code></pre>

            <h3>Eliminar un dato</h3>

            <pre><code>localStorage.removeItem("usuario");</code></pre>
        `,

        practica: `
            <h3>Actividad: Guardar y recuperar un usuario</h3>

            <p>
                Crear un objeto llamado <code>usuario</code> con información
                de una persona.
            </p>

            <p>
                Luego convertir el objeto a JSON, guardarlo en LocalStorage,
                recuperarlo y convertirlo nuevamente en un objeto.
            </p>

            <p>
                Finalmente, mostrar una de sus propiedades y eliminar
                el dato almacenado.
            </p>

            <button class="boton-solucion" onclick="mostrarSolucion(this)">
                Ver solución
            </button>

            <div class="solucion" style="display: none;">

                <pre><code>let usuario = {
    nombre: "Agustin",
    edad: 17,
    curso: "4° Año"
};

let usuarioJSON =
    JSON.stringify(usuario);

localStorage.setItem(
    "usuario",
    usuarioJSON
);


let datosGuardados =
    localStorage.getItem("usuario");

if (datosGuardados) {

    let usuarioRecuperado =
        JSON.parse(datosGuardados);

    console.log(
        "Usuario recuperado:",
        usuarioRecuperado.nombre
    );
}


localStorage.removeItem("usuario");</code></pre>

            </div>
        `
    },


    // =========================================================
    // MÓDULO 8
    // =========================================================

    modulo8: {
        titulo: "Módulo 8: Ciudadanía Digital, Huella Digital y Ética Tecnológica",
        descripcion: "Analizar la identidad digital, la privacidad, los datos personales, los algoritmos y el uso ético de la tecnología.",

        teoria: `
            <h3>Identidad y Huella Digital</h3>

            <p>
                La identidad digital se construye a partir de la información
                que una persona comparte o genera en Internet.
            </p>

            <p>
                La huella digital puede incluir datos explícitos, información
                implícita, metadatos e historial de navegación.
            </p>

            <h3>Tipos de datos</h3>

            <p>
                Los datos pueden clasificarse en diferentes categorías,
                como datos públicos, privados, personales y sensibles.
            </p>

            <p>
                También existen procesos relacionados con la anonimización
                y el consentimiento digital.
            </p>

            <h3>Protección de datos personales</h3>

            <p>
                En Argentina existe la <strong>Ley 25.326 de Protección de
                Datos Personales</strong>, que establece diferentes derechos
                y obligaciones relacionados con el tratamiento de datos personales.
            </p>

            <h3>Algoritmos y economía de la atención</h3>

            <p>
                Las cookies, los permisos de aplicaciones y los sistemas
                de recomendación pueden utilizar información de los usuarios
                para personalizar contenidos y servicios.
            </p>

            <p>
                Estos mecanismos pueden contribuir a la creación de
                experiencias personalizadas y también relacionarse con
                fenómenos como la llamada "burbuja de filtros".
            </p>

            <h3>Uso ético de la Inteligencia Artificial</h3>

            <p>
                Las herramientas de Inteligencia Artificial Generativa pueden
                utilizarse como asistentes de estudio y apoyo para diferentes
                actividades.
            </p>

            <p>
                Es importante comprender que estas herramientas requieren
                verificación humana, ya que pueden producir información
                incorrecta o respuestas que deben ser revisadas.
            </p>
        `,

        ejemplos: `
            <h3>Situaciones para analizar</h3>

            <p>
                Una aplicación solicita acceso a la cámara, micrófono,
                ubicación y contactos del dispositivo.
            </p>

            <p>
                Antes de aceptar los permisos, el usuario debería analizar
                qué información está solicitando la aplicación y si esos
                permisos son necesarios para la función que ofrece.
            </p>

            <h3>Ejemplo de huella digital</h3>

            <p>
                Una publicación en una red social puede formar parte de la
                huella digital de una persona y permanecer disponible o ser
                compartida por otras personas.
            </p>
        `,

        practica: `
            <h3>Actividad 1: Análisis de privacidad</h3>

            <p>
                Analizar perfiles hipotéticos de redes sociales e identificar
                posibles riesgos relacionados con la privacidad y la exposición
                de información personal.
            </p>

            <h3>Actividad 2: Permisos de aplicaciones</h3>

            <p>
                Analizar los permisos solicitados por diferentes aplicaciones
                móviles y determinar qué información podría estar siendo
                utilizada.
            </p>

            <h3>Actividad 3: Acuerdo de uso ético</h3>

            <p>
                Elaborar un acuerdo de uso ético de la tecnología que incluya
                recomendaciones para proteger la privacidad, utilizar
                responsablemente la información y verificar los resultados
                obtenidos mediante herramientas de Inteligencia Artificial.
            </p>

            <h3>Actividad 4: Matriz de evaluación de privacidad</h3>

            <p>
                Elaborar una matriz para analizar las solicitudes de permisos
                realizadas por diferentes herramientas web y crear una lista
                de verificación de seguridad digital.
            </p>
        `
    }

};