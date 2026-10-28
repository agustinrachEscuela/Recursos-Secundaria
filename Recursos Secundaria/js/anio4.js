
const contenidos4 = {
    modulo1: {
        titulo: "Ciudadanía Digital, Protección de Datos e Infraestructura de Internet",
        descripcion: "Identidad digital, privacidad, ciberseguridad y funcionamiento de Internet.",
        teoria: `
            <h3>1. Identidad y huella digital</h3>
            <p>La <strong>identidad digital</strong> es la información que permite representarnos en Internet. La <strong>huella digital</strong> es el rastro que dejamos al utilizar servicios digitales.</p>
            <ul>
                <li><strong>Huella activa:</strong> información que compartimos voluntariamente, como publicaciones, comentarios y fotografías.</li>
                <li><strong>Huella pasiva:</strong> información que se recopila durante el uso de servicios, como cookies, ubicación o ciertos metadatos.</li>
            </ul>

            <h3>2. Clasificación de los datos</h3>
            <ul>
                <li><strong>Datos personales:</strong> permiten identificar a una persona directa o indirectamente.</li>
                <li><strong>Datos sensibles:</strong> incluyen información relacionada con la salud, la biometría y otros aspectos especialmente protegidos por la legislación.</li>
                <li><strong>Datos públicos y privados:</strong> su disponibilidad depende de su naturaleza y del marco legal aplicable.</li>
            </ul>
            <p>En Argentina, la Ley 25.326 regula la protección de datos personales. Contempla derechos como el acceso, la rectificación y la supresión, dentro de las condiciones legales correspondientes. El hábeas data es una herramienta para conocer, actualizar o rectificar información personal registrada en determinados archivos o bases de datos.</p>

            <h3>3. Amenazas informáticas</h3>
            <ul>
                <li><strong>Phishing:</strong> mensajes o sitios falsos que buscan obtener información.</li>
                <li><strong>Ingeniería social:</strong> manipulación de personas para conseguir datos o lograr determinadas acciones.</li>
                <li><strong>Malware:</strong> software diseñado para realizar acciones dañinas.</li>
                <li><strong>Ransomware:</strong> tipo de malware que bloquea o cifra información y puede exigir un pago para recuperarla.</li>
            </ul>

            <h3>4. ¿Cómo viaja la información por Internet?</h3>
            <p>Cuando abrimos una página, el dispositivo se conecta a una red y los datos viajan a través de distintos equipos y enlaces hasta llegar al servidor correspondiente. La respuesta regresa por una ruta de red que puede variar.</p>
            <p>Los centros de datos alojan servidores que almacenan información y ejecutan aplicaciones. La nube permite utilizar recursos informáticos mediante una red, sin que necesariamente estén en nuestro dispositivo.</p>
        `,
        ejemplos: `
            <h3>Ejemplo 1: dos direcciones similares</h3>
            <p>Imaginá que recibís un mensaje con un enlace a <code>www.banco.com</code> y otro a <code>www.banc0.com</code>.</p>
            <p>En la segunda dirección, el último carácter de la palabra "banco" fue reemplazado por un cero. Esa diferencia puede utilizarse para engañar a los usuarios.</p>
            <p>Antes de ingresar información, comprobá el dominio, el origen del mensaje y la dirección real del sitio. Un candado HTTPS no garantiza por sí solo que una página sea legítima.</p>

            <h3>Ejemplo 2: información publicada</h3>
            <p>Una fotografía puede revelar más que lo que aparece en primer plano: nombres de usuarios, ubicación aproximada, uniforme escolar u otros detalles del entorno.</p>

            <h3>Ejemplo 3: incidentes informáticos</h3>
            <p>Los ataques de ransomware contra organizaciones muestran que un incidente digital puede interrumpir servicios importantes y afectar a muchas personas, incluso cuando estas no fueron atacadas individualmente.</p>
        `,
        practica: `
            <h3>Actividad 1: análisis de perfiles digitales</h3>
            <p>Analizá un perfil ficticio de una red social e identificá:</p>
            <ol>
                <li>La información que la persona publicó explícitamente.</li>
                <li>La información que puede deducirse de las publicaciones.</li>
                <li>Los datos que convendría proteger o eliminar.</li>
                <li>Las posibles consecuencias de compartir esa información.</li>
            </ol>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver orientación</button>
            <div class="solucion" style="display: none;">
                <p><strong>Orientación:</strong> separá lo que aparece escrito de lo que puede inferirse. Por ejemplo, una publicación puede mostrar el nombre de una escuela de forma explícita, mientras que la rutina diaria podría deducirse de varias publicaciones con horarios similares. Proponé medidas de privacidad sin divulgar datos reales de compañeros.</p>
            </div>

            <h3>Actividad 2: detectar una página sospechosa</h3>
            <p>Buscá ejemplos ficticios o preparados por el docente y revisá:</p>
            <ul>
                <li>La dirección completa y el dominio.</li>
                <li>Errores de escritura o nombres parecidos a los originales.</li>
                <li>Mensajes que exigen actuar de inmediato.</li>
                <li>Solicitudes inesperadas de contraseñas o datos personales.</li>
                <li>Si existe un canal oficial para verificar el mensaje.</li>
            </ul>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver orientación</button>
            <div class="solucion" style="display: none;">
                <p><strong>Respuesta orientativa:</strong> una dirección con errores, una solicitud urgente de credenciales o un remitente desconocido son señales de alerta. No ingreses datos ni descargues archivos hasta verificar el sitio por un canal oficial. Ninguna señal aislada permite confirmar todos los casos.</p>
            </div>

            <h3>Actividad 3: dibujar el recorrido de los datos</h3>
            <p>Representá con flechas el recorrido aproximado de una solicitud desde un celular hasta un servidor remoto. Incluí el dispositivo, la conexión Wi-Fi o móvil, el proveedor de Internet, los enlaces de red y el servidor.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver ejemplo de recorrido</button>
            <div class="solucion" style="display: none;">
                <pre><code>Celular
   ↓
Wi-Fi o red móvil
   ↓
Router o infraestructura del operador
   ↓
Proveedor de Internet (ISP)
   ↓
Redes y enlaces de transporte
   ↓
Centro de datos
   ↓
Servidor de la aplicación</code></pre>
                <p>El recorrido real puede variar. La respuesta del servidor vuelve al dispositivo a través de la red.</p>
            </div>
        `
    },

    modulo2: {
        titulo: "Fundamentos de la Programación Orientada a Objetos",
        descripcion: "Clases, objetos, atributos, métodos, constructores e instancias en JavaScript.",
        teoria: `
            <h3>1. ¿Qué es la POO?</h3>
            <p>La <strong>Programación Orientada a Objetos (POO)</strong> organiza un programa utilizando objetos que reúnen datos y comportamientos.</p>

            <h3>2. Clases y objetos</h3>
            <ul>
                <li><strong>Clase:</strong> define una estructura común para crear objetos.</li>
                <li><strong>Objeto o instancia:</strong> es un elemento concreto creado a partir de una clase.</li>
                <li><strong>Atributos:</strong> representan los datos de un objeto.</li>
                <li><strong>Métodos:</strong> son funciones definidas dentro de una clase que describen comportamientos.</li>
                <li><strong>Constructor:</strong> inicializa el objeto cuando se crea.</li>
            </ul>

            <h3>3. La palabra clave this</h3>
            <p><code>this</code> permite acceder al objeto sobre el que se está ejecutando un método. Dentro de un constructor, suele utilizarse para asignar valores a los atributos.</p>

            <h3>4. Crear instancias</h3>
            <p>En JavaScript se utiliza <code>new</code> para crear una instancia de una clase. Sin esa palabra clave, la creación del objeto no se realiza correctamente.</p>
        `,
        ejemplos: `
            <h3>Ejemplo: clase Alumno</h3>
            <pre><code>class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    saludar() {
        return "Hola, soy " + this.nombre +
            " de " + this.curso + ".";
    }
}

const estudiante1 = new Alumno("Martina", 16, "4° Año");

console.log(estudiante1.saludar());</code></pre>
            <p>La clase define tres atributos y un método. La variable <code>estudiante1</code> contiene una instancia creada a partir de esa clase.</p>
        `,
        practica: `
            <h3>Actividad 1: crear una clase</h3>
            <p>Creá una clase llamada <code>Libro</code> que tenga los atributos <code>titulo</code>, <code>autor</code> y <code>paginas</code>. Agregá un método llamado <code>mostrarInfo()</code> que devuelva los datos del libro.</p>
            <p>Creá dos libros diferentes y ejecutá el método de cada uno.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    mostrarInfo() {
        return this.titulo + " - " + this.autor +
            " - " + this.paginas + " páginas";
    }
}

const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", 96);
const libro2 = new Libro("Libro de prueba", "Autor desconocido", 150);

console.log(libro1.mostrarInfo());
console.log(libro2.mostrarInfo());</code></pre>
            </div>

            <h3>Actividad 2: corregir errores</h3>
            <p>Analizá el código y corregí los problemas para que funcione correctamente.</p>
            <pre><code>class Mascota {
    constructor(nombre, edad) {
        nombre = nombre;
        this.edad = edad;
    }

    presentar {
        return "Me llamo " + this.nombre;
    }
}

const perro = Mascota("Toby", 3);
console.log(perro.presentar());</code></pre>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentar() {
        return "Me llamo " + this.nombre +
            " y tengo " + this.edad + " años.";
    }
}

const perro = new Mascota("Toby", 3);
console.log(perro.presentar());</code></pre>
                <p>Se agregó <code>this.nombre</code>, los paréntesis del método y <code>new</code> al crear la instancia.</p>
            </div>

            <h3>Actividad 3: clase Alumno</h3>
            <p>Creá una clase <code>Alumno</code> con nombre, curso y nota. Agregá un método que indique el nombre y el curso del estudiante y otro que devuelva su nota. Creá una instancia y probá ambos métodos.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Alumno {
    constructor(nombre, curso, nota) {
        this.nombre = nombre;
        this.curso = curso;
        this.nota = nota;
    }

    mostrarDatos() {
        return this.nombre + " - " + this.curso;
    }

    obtenerNota() {
        return this.nota;
    }
}

const alumno1 = new Alumno("Lucía", "4° Año", 8);

console.log(alumno1.mostrarDatos());
console.log(alumno1.obtenerNota());</code></pre>
            </div>
        `
    },

    modulo3: {
        titulo: "Encapsulamiento: Getters, Setters y Validaciones Internas",
        descripcion: "Controlar el acceso a los atributos y validar los valores de los objetos.",
        teoria: `
            <h3>1. ¿Qué es el encapsulamiento?</h3>
            <p>El encapsulamiento consiste en controlar cómo se consulta o modifica el estado de un objeto. Permite establecer reglas para evitar valores inválidos.</p>

            <h3>2. Getters</h3>
            <p>Un <code>getter</code> permite consultar un valor como si fuera una propiedad. Se define con la palabra clave <code>get</code>.</p>

            <h3>3. Setters</h3>
            <p>Un <code>setter</code> permite controlar las asignaciones a una propiedad. Se define con <code>set</code> y puede rechazar valores que no cumplen las reglas.</p>

            <h3>4. Convención de nombres</h3>
            <p>Es habitual utilizar un guion bajo, como <code>_saldo</code>, para señalar que un atributo se considera interno. Sin embargo, el guion bajo por sí solo no impide el acceso directo. JavaScript también permite atributos privados reales usando <code>#saldo</code>.</p>
        `,
        ejemplos: `
            <h3>Ejemplo: cuenta bancaria</h3>
            <pre><code>class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this._saldo = saldo >= 0 ? saldo : 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            this._saldo = nuevoSaldo;
        } else {
            console.log("El saldo no puede ser negativo.");
        }
    }
}

const cuenta = new CuentaBancaria("Juan", 1000);
cuenta.saldo = -500;
console.log(cuenta.saldo);</code></pre>
            <p>La asignación negativa es rechazada por el setter. El saldo continúa siendo 1000.</p>
        `,
        practica: `
            <h3>Actividad 1: batería de un celular</h3>
            <p>Creá una clase <code>Celular</code> con un atributo interno para la batería. La batería debe comenzar en un valor entre 0 y 100. Implementá un getter y un setter que impidan asignar valores fuera de ese rango.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Celular {
    constructor(bateria) {
        this._bateria = 0;
        this.bateria = bateria;
    }

    get bateria() {
        return this._bateria;
    }

    set bateria(valor) {
        if (valor >= 0 && valor <= 100) {
            this._bateria = valor;
        } else {
            console.log("La batería debe estar entre 0 y 100.");
        }
    }
}

const celular = new Celular(80);
console.log(celular.bateria);

celular.bateria = 50;
console.log(celular.bateria);

celular.bateria = 150;
console.log(celular.bateria);</code></pre>
            </div>

            <h3>Actividad 2: validar una nota</h3>
            <p>Creá una clase <code>Evaluacion</code> con un atributo interno <code>_nota</code>. La nota solo puede tomar valores entre 1 y 10. Agregá un getter y un setter. Probá asignar una nota válida y otra inválida.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Evaluacion {
    constructor(nota) {
        this._nota = 1;
        this.nota = nota;
    }

    get nota() {
        return this._nota;
    }

    set nota(valor) {
        if (valor >= 1 && valor <= 10) {
            this._nota = valor;
        } else {
            console.log("La nota debe estar entre 1 y 10.");
        }
    }
}

const evaluacion = new Evaluacion(8);
console.log(evaluacion.nota);

evaluacion.nota = 11;
console.log(evaluacion.nota);</code></pre>
            </div>

            <h3>Actividad 3: cuenta bancaria</h3>
            <p>Implementá una clase <code>CuentaBancaria</code> que permita consultar y modificar el saldo, pero que rechace saldos negativos. Probá el funcionamiento con varios valores.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this._saldo = 0;
        this.saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        if (valor >= 0) {
            this._saldo = valor;
        } else {
            console.log("El saldo no puede ser negativo.");
        }
    }
}

const cuenta = new CuentaBancaria("Ana", 2500);
console.log(cuenta.saldo);

cuenta.saldo = 4000;
console.log(cuenta.saldo);

cuenta.saldo = -100;
console.log(cuenta.saldo);</code></pre>
            </div>
        `
    },

    modulo4: {
        titulo: "Interacción y Relaciones entre Clases",
        descripcion: "Colaboración entre objetos y relaciones entre las instancias de distintas clases.",
        teoria: `
            <h3>1. Los objetos pueden colaborar</h3>
            <p>En un programa orientado a objetos, una clase puede utilizar objetos creados a partir de otra clase. De esta manera, cada objeto tiene responsabilidades específicas y puede colaborar con otros.</p>

            <h3>2. Pasar objetos como parámetros</h3>
            <p>Un método puede recibir un objeto como parámetro y utilizar sus atributos o métodos. Esto permite que los objetos interactúen sin tener que concentrar toda la lógica en una sola clase.</p>

            <h3>3. Guardar objetos como atributos</h3>
            <p>Una instancia también puede guardar una referencia a otra instancia como atributo. Por ejemplo, una materia puede tener un profesor y una lista de alumnos.</p>

            <h3>4. Acceder a objetos relacionados</h3>
            <p>Si una materia tiene un atributo <code>profesor</code> y ese objeto tiene un atributo <code>nombre</code>, es posible consultar <code>materia.profesor.nombre</code>.</p>
        `,
        ejemplos: `
            <h3>Ejemplo: persona y mascota</h3>
            <pre><code>class Mascota {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(this.nombre + " dice: ¡Guau!");
    }
}

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar(mascota) {
        console.log(this.nombre + " saluda a " + mascota.nombre);
        mascota.hacerSonido();
    }
}

const perro = new Mascota("Firulais");
const duenio = new Persona("Juan");

duenio.saludar(perro);</code></pre>
            <p>El método <code>saludar()</code> recibe un objeto de tipo <code>Mascota</code> y utiliza sus datos y comportamiento.</p>
        `,
        practica: `
            <h3>Actividad 1: materias y profesores</h3>
            <p>Creá dos clases: <code>Profesor</code> y <code>Materia</code>. El profesor tendrá nombre y especialidad. La materia tendrá nombre y un objeto profesor. Implementá un método que muestre el nombre de la materia y el profesor responsable.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Profesor {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
    }
}

class Materia {
    constructor(nombre, profesor) {
        this.nombre = nombre;
        this.profesor = profesor;
    }

    mostrarInfo() {
        return "Materia: " + this.nombre +
            " - Profesor: " + this.profesor.nombre;
    }
}

const profesor1 = new Profesor("Carla", "Programación");
const materia1 = new Materia("POO", profesor1);

console.log(materia1.mostrarInfo());</code></pre>
            </div>

            <h3>Actividad 2: sistema de alumnos</h3>
            <p>Creá las clases <code>Alumno</code> y <code>Curso</code>. Cada alumno tendrá nombre y edad. El curso tendrá un nombre y una colección de alumnos. Agregá un método para incorporar alumnos y otro para mostrar la lista.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Curso {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    mostrarAlumnos() {
        console.log("Curso: " + this.nombre);

        for (const alumno of this.alumnos) {
            console.log(alumno.nombre + " - " + alumno.edad + " años");
        }
    }
}

const curso = new Curso("4° Año");
curso.agregarAlumno(new Alumno("Sofía", 15));
curso.agregarAlumno(new Alumno("Mateo", 16));

curso.mostrarAlumnos();</code></pre>
            </div>

            <h3>Actividad 3: batalla por turnos</h3>
            <p>Diseñá una simulación de combate por consola con las clases <code>Jugador</code>, <code>Enemigo</code> y <code>Juego</code>. El jugador y el enemigo tendrán puntos de vida. El juego debe hacer que el jugador ataque al enemigo y mostrar el resultado.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Jugador {
    constructor(nombre, vida, ataque) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
    }

    atacar(enemigo) {
        enemigo.recibirDanio(this.ataque);
    }
}

class Enemigo {
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }

    recibirDanio(cantidad) {
        this.vida = Math.max(0, this.vida - cantidad);
    }
}

class Juego {
    constructor(jugador, enemigo) {
        this.jugador = jugador;
        this.enemigo = enemigo;
    }

    iniciarTurno() {
        this.jugador.atacar(this.enemigo);

        console.log(
            this.enemigo.nombre + " tiene " +
            this.enemigo.vida + " puntos de vida."
        );
    }
}

const jugador = new Jugador("Explorador", 100, 25);
const enemigo = new Enemigo("Robot", 60);
const juego = new Juego(jugador, enemigo);

juego.iniciarTurno();
juego.iniciarTurno();
juego.iniciarTurno();</code></pre>
                <p>La clase <code>Juego</code> coordina la interacción entre los objetos, mientras que cada clase mantiene su propia responsabilidad.</p>
            </div>
        `
    },

    modulo5: {
        titulo: "Herencia en Programación Orientada a Objetos",
        descripcion: "Reutilización de código mediante clases padre, clases hijas, extends y super.",
        teoria: `
            <h3>1. ¿Qué es la herencia?</h3>
            <p>La herencia permite crear una clase a partir de otra. La clase hija reutiliza atributos y métodos de la clase padre y puede incorporar comportamientos propios.</p>

            <h3>2. extends</h3>
            <p>La palabra clave <code>extends</code> establece la relación de herencia entre una clase hija y una clase padre.</p>

            <h3>3. super()</h3>
            <p>En el constructor de una clase hija, <code>super()</code> llama al constructor de la clase padre. En una clase derivada de esta forma, debe ejecutarse antes de utilizar <code>this</code>.</p>

            <h3>4. Especialización de métodos</h3>
            <p>Una clase hija puede agregar métodos propios o redefinir un método heredado para adaptar su comportamiento. Esto se conoce como sobrescritura de métodos.</p>
        `,
        ejemplos: `
            <h3>Ejemplo: productos físicos y digitales</h3>
            <pre><code>class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        console.log(this.nombre + " - Precio: $" + this.precio);
    }
}

class ProductoFisico extends Producto {
    constructor(nombre, precio, peso) {
        super(nombre, precio);
        this.peso = peso;
    }

    calcularEnvio() {
        return this.peso < 5 ? 3000 : 6000;
    }
}

const silla = new ProductoFisico("Silla de Escritorio", 85000, 8);

silla.mostrarInfo();
console.log("Costo de envío: $" + silla.calcularEnvio());</code></pre>
            <p><code>ProductoFisico</code> hereda el constructor y el método <code>mostrarInfo()</code> de <code>Producto</code>, y agrega el atributo <code>peso</code> y su propio método.</p>
        `,
        practica: `
            <h3>Actividad 1: personas, alumnos y docentes</h3>
            <p>Creá una clase padre <code>Persona</code> con nombre y edad. Luego creá dos clases hijas: <code>Alumno</code>, que agrega un curso, y <code>Docente</code>, que agrega una materia. Cada clase hija debe tener un método que muestre sus datos.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    mostrarInfo() {
        return this.nombre + " - " + this.edad +
            " años - " + this.curso;
    }
}

class Docente extends Persona {
    constructor(nombre, edad, materia) {
        super(nombre, edad);
        this.materia = materia;
    }

    mostrarInfo() {
        return this.nombre + " - " + this.edad +
            " años - Materia: " + this.materia;
    }
}

const alumno = new Alumno("Lucía", 16, "4° Año");
const docente = new Docente("Pablo", 35, "Programación");

console.log(alumno.mostrarInfo());
console.log(docente.mostrarInfo());</code></pre>
            </div>

            <h3>Actividad 2: productos de una tienda</h3>
            <p>Creá una clase padre <code>Producto</code> con nombre y precio. Después implementá <code>ProductoFisico</code>, que agrega peso y costo de envío, y <code>ProductoDigital</code>, que agrega el tamaño del archivo. Ambas clases deben reutilizar un método de la clase padre.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        return this.nombre + " - $" + this.precio;
    }
}

class ProductoFisico extends Producto {
    constructor(nombre, precio, peso) {
        super(nombre, precio);
        this.peso = peso;
    }

    calcularEnvio() {
        return this.peso < 5 ? 3000 : 6000;
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, tamanoMB) {
        super(nombre, precio);
        this.tamanoMB = tamanoMB;
    }

    mostrarTamano() {
        return this.tamanoMB + " MB";
    }
}

const teclado = new ProductoFisico("Teclado", 30000, 2);
const juego = new ProductoDigital("Videojuego", 12000, 850);

console.log(teclado.mostrarInfo());
console.log("Envío: $" + teclado.calcularEnvio());

console.log(juego.mostrarInfo());
console.log("Tamaño: " + juego.mostrarTamano());</code></pre>
            </div>

            <h3>Actividad 3: corregir una herencia</h3>
            <p>El siguiente código presenta errores. Corregilo para que la clase hija herede correctamente de la clase padre.</p>
            <pre><code>class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
}

class Auto extends Vehiculo {
    constructor(marca, puertas) {
        this.puertas = puertas;
        super(marca);
    }
}

const auto = Auto("Ford", 4);
console.log(auto.marca);</code></pre>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
}

class Auto extends Vehiculo {
    constructor(marca, puertas) {
        super(marca);
        this.puertas = puertas;
    }
}

const auto = new Auto("Ford", 4);

console.log(auto.marca);
console.log(auto.puertas);</code></pre>
                <p>Primero se llama a <code>super(marca)</code> y después se utiliza <code>this</code>. También se agregó <code>new</code> al crear el objeto.</p>
            </div>
        `
    },

    modulo6: {
        titulo: "Persistencia con LocalStorage, JSON y Rehidratación",
        descripcion: "Guardar y recuperar información en el navegador y reconstruir instancias de clases.",
        teoria: `
            <h3>1. ¿Qué es LocalStorage?</h3>
            <p><code>localStorage</code> permite guardar datos en el navegador para recuperarlos en futuras visitas al mismo sitio, incluso después de cerrar la pestaña.</p>
            <ul>
                <li><code>setItem(clave, valor)</code>: guarda un valor.</li>
                <li><code>getItem(clave)</code>: recupera un valor o devuelve <code>null</code> si no existe.</li>
                <li><code>removeItem(clave)</code>: elimina un valor guardado.</li>
            </ul>
            <p>LocalStorage almacena cadenas de texto, por lo que los objetos suelen convertirse a JSON antes de guardarlos.</p>

            <h3>2. JSON.stringify() y JSON.parse()</h3>
            <ul>
                <li><code>JSON.stringify(objeto)</code> convierte datos a texto JSON.</li>
                <li><code>JSON.parse(texto)</code> convierte un texto JSON válido en datos de JavaScript.</li>
            </ul>

            <h3>3. ¿Qué es la rehidratación?</h3>
            <p>Al guardar una instancia como JSON, se conservan sus datos serializables, pero no sus métodos ni su prototipo de clase. Después de recuperarla, se puede crear una instancia nueva usando los datos obtenidos. Este proceso se conoce como rehidratación.</p>
            <p>No guardes contraseñas ni información sensible en LocalStorage. Los datos están disponibles para el código que se ejecuta en el mismo origen.</p>
        `,
        ejemplos: `
            <h3>Ejemplo: guardar y reconstruir un alumno</h3>
            <pre><code>class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    saludar() {
        return "Hola, soy " + this.nombre +
            " de " + this.curso + ".";
    }
}

const alumnoOriginal = new Alumno("Juan", 17, "5° Año");

localStorage.setItem(
    "alumnoGuardado",
    JSON.stringify(alumnoOriginal)
);

const datosTexto = localStorage.getItem("alumnoGuardado");

if (datosTexto) {
    const datosObjeto = JSON.parse(datosTexto);

    const alumnoRehidratado = new Alumno(
        datosObjeto.nombre,
        datosObjeto.edad,
        datosObjeto.curso
    );

    console.log(alumnoRehidratado.saludar());
}</code></pre>
            <p>La comprobación evita intentar convertir un valor inexistente. La instancia nueva recupera el método <code>saludar()</code> porque se crea con <code>new Alumno()</code>.</p>
        `,
        practica: `
            <h3>Actividad 1: guardar un usuario</h3>
            <p>Creá una clase <code>Usuario</code> con nombre, edad y nombre de usuario. Agregá un método para mostrar los datos. Guardá una instancia en LocalStorage, recuperala y reconstruí el objeto para utilizar el método.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Usuario {
    constructor(nombre, edad, nombreUsuario) {
        this.nombre = nombre;
        this.edad = edad;
        this.nombreUsuario = nombreUsuario;
    }

    mostrarInfo() {
        return this.nombre + " (" + this.nombreUsuario +
            "), " + this.edad + " años";
    }
}

const usuario = new Usuario("Sofía", 16, "sofi16");

localStorage.setItem("usuario", JSON.stringify(usuario));

const texto = localStorage.getItem("usuario");

if (texto !== null) {
    const datos = JSON.parse(texto);

    const usuarioRecuperado = new Usuario(
        datos.nombre,
        datos.edad,
        datos.nombreUsuario
    );

    console.log(usuarioRecuperado.mostrarInfo());
}</code></pre>
            </div>

            <h3>Actividad 2: colección persistente</h3>
            <p>Creá una clase <code>GestorUsuarios</code> que almacene varios objetos <code>Usuario</code>. Debe permitir agregar usuarios, guardarlos en LocalStorage y recuperarlos reconstruyendo cada instancia. Después de recuperar los datos, comprobá que los métodos sigan funcionando.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo() {
        return this.nombre + " - " + this.edad + " años";
    }
}

class GestorUsuarios {
    constructor() {
        this.usuarios = [];
    }

    agregar(usuario) {
        this.usuarios.push(usuario);
    }

    guardar() {
        localStorage.setItem(
            "usuarios",
            JSON.stringify(this.usuarios)
        );
    }

    cargar() {
        const texto = localStorage.getItem("usuarios");

        if (texto === null) {
            this.usuarios = [];
            return;
        }

        const datos = JSON.parse(texto);

        this.usuarios = datos.map(function (dato) {
            return new Usuario(dato.nombre, dato.edad);
        });
    }

    mostrarTodos() {
        for (const usuario of this.usuarios) {
            console.log(usuario.mostrarInfo());
        }
    }
}

const gestor = new GestorUsuarios();

gestor.agregar(new Usuario("Ana", 15));
gestor.agregar(new Usuario("Pedro", 16));
gestor.guardar();

const gestorRecuperado = new GestorUsuarios();
gestorRecuperado.cargar();
gestorRecuperado.mostrarTodos();</code></pre>
            </div>

            <h3>Actividad 3: eliminar datos guardados</h3>
            <p>Usá la clave <code>usuarios</code> del ejercicio anterior. Agregá una operación para eliminar los datos de LocalStorage y comprobá que ya no se puedan recuperar.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución</button>
            <div class="solucion" style="display: none;">
                <pre><code>function eliminarUsuariosGuardados() {
    localStorage.removeItem("usuarios");
}

eliminarUsuariosGuardados();

const datos = localStorage.getItem("usuarios");

if (datos === null) {
    console.log("No hay usuarios guardados.");
} else {
    console.log(JSON.parse(datos));
}</code></pre>
            </div>
        `
    },

    modulo7: {
        titulo: "Desarrollo Web Integrador: HTML, CSS, DOM y Eventos",
        descripcion: "Construcción de una aplicación web con formularios, eventos, CRUD y persistencia.",
        teoria: `
            <h3>1. Estructura HTML</h3>
            <p>HTML organiza el contenido de la página. Es conveniente utilizar etiquetas semánticas y formularios con etiquetas descriptivas para cada campo.</p>

            <h3>2. Diseño con CSS</h3>
            <p>CSS define colores, tamaños, distribución y adaptación a distintas pantallas. Se pueden utilizar clases para aplicar estilos y modificar la apariencia desde JavaScript.</p>

            <h3>3. Manipulación del DOM</h3>
            <p>El DOM representa el documento HTML como una estructura de nodos. JavaScript puede seleccionar elementos, cambiar su contenido, crear nuevos elementos y modificar atributos.</p>
            <ul>
                <li><code>document.getElementById()</code>: busca por identificador.</li>
                <li><code>document.querySelector()</code>: busca el primer elemento que coincide con un selector CSS.</li>
                <li><code>addEventListener()</code>: registra una función para responder a un evento.</li>
            </ul>

            <h3>4. Eventos y formularios</h3>
            <p>Los eventos permiten responder a acciones como hacer clic, enviar un formulario o escribir en un campo. En un evento <code>submit</code>, <code>event.preventDefault()</code> permite evitar el envío tradicional cuando la aplicación procesa los datos con JavaScript.</p>

            <h3>5. CRUD</h3>
            <p>CRUD reúne cuatro operaciones fundamentales:</p>
            <ul>
                <li><strong>Create:</strong> crear registros.</li>
                <li><strong>Read:</strong> consultar y mostrar registros.</li>
                <li><strong>Update:</strong> modificar registros existentes.</li>
                <li><strong>Delete:</strong> eliminar registros.</li>
            </ul>
            <p>Una aplicación puede combinar estas operaciones con LocalStorage para conservar los datos entre visitas al navegador.</p>
        `,
        ejemplos: `
            <h3>Ejemplo: estructura de una aplicación</h3>
            <p>Este HTML proporciona los elementos necesarios para que el código JavaScript pueda seleccionarlos.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Mi aplicación&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 30px auto;
            padding: 16px;
        }

        input, button {
            padding: 8px;
            margin: 4px 0;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Gestor de tareas&lt;/h1&gt;

    &lt;form id="formulario"&gt;
        &lt;label for="tarea"&gt;Nueva tarea&lt;/label&gt;
        &lt;input id="tarea" required&gt;
        &lt;button type="submit"&gt;Agregar&lt;/button&gt;
    &lt;/form&gt;

    &lt;ul id="lista"&gt;&lt;/ul&gt;

    &lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            <p>El archivo <code>app.js</code> debe encontrarse en la misma carpeta que el HTML de este ejemplo.</p>
        `,
        practica: `
            <h3>Proyecto integrador: gestor de registros</h3>
            <p>Desarrollá una aplicación web que permita administrar registros de tu elección: libros, videojuegos, tareas o productos.</p>
            <p><strong>Requisitos:</strong></p>
            <ol>
                <li>Crear una interfaz con HTML y CSS.</li>
                <li>Utilizar un formulario con validaciones.</li>
                <li>Representar cada registro mediante una clase de JavaScript.</li>
                <li>Implementar las operaciones de crear, consultar, modificar y eliminar.</li>
                <li>Mostrar los registros dinámicamente en el DOM.</li>
                <li>Guardar los datos en LocalStorage y recuperarlos al recargar la página.</li>
                <li>Organizar el código en funciones o clases con responsabilidades claras.</li>
            </ol>
            <p>El proyecto admite distintas soluciones. Como referencia, se incluye un gestor de tareas funcional que implementa las operaciones CRUD y la persistencia. Podés adaptarlo a otra temática.</p>
            <button class="boton-solucion" onclick="mostrarSolucion(this)">Ver solución de referencia</button>
            <div class="solucion" style="display: none;">
                <p><strong>Archivo index.html</strong></p>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Gestor de tareas&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 30px auto;
            padding: 16px;
        }

        input, button {
            padding: 8px;
            margin: 4px;
        }

        li {
            margin: 10px 0;
        }

        .completada {
            text-decoration: line-through;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Gestor de tareas&lt;/h1&gt;

    &lt;form id="formulario"&gt;
        &lt;label for="tarea"&gt;Tarea&lt;/label&gt;
        &lt;input id="tarea" required maxlength="100"&gt;
        &lt;button type="submit"&gt;Guardar&lt;/button&gt;
    &lt;/form&gt;

    &lt;p id="mensaje" aria-live="polite"&gt;&lt;/p&gt;
    &lt;ul id="lista"&gt;&lt;/ul&gt;

    &lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

                <p><strong>Archivo app.js</strong></p>
                <pre><code>class Tarea {
    constructor(id, nombre, completada = false) {
        this.id = id;
        this.nombre = nombre;
        this.completada = completada;
    }
}

class Aplicacion {
    constructor() {
        this.formulario = document.getElementById("formulario");
        this.campo = document.getElementById("tarea");
        this.lista = document.getElementById("lista");
        this.mensaje = document.getElementById("mensaje");
        this.tareas = [];
        this.cargar();

        this.formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            this.agregar();
        });

        this.renderizar();
    }

    cargar() {
        const texto = localStorage.getItem("tareas");

        if (texto !== null) {
            const datos = JSON.parse(texto);

            this.tareas = datos.map((dato) => {
                return new Tarea(
                    dato.id,
                    dato.nombre,
                    dato.completada
                );
            });
        }
    }

    guardar() {
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }

    agregar() {
        const nombre = this.campo.value.trim();

        if (nombre === "") {
            this.mensaje.textContent = "Ingresá una tarea.";
            return;
        }

        const tarea = new Tarea(
            Date.now(),
            nombre
        );

        this.tareas.push(tarea);
        this.guardar();
        this.renderizar();
        this.formulario.reset();
        this.mensaje.textContent = "Tarea agregada.";
    }

    cambiarEstado(id) {
        const tarea = this.tareas.find((t) => t.id === id);

        if (tarea) {
            tarea.completada = !tarea.completada;
            this.guardar();
            this.renderizar();
        }
    }

    editar(id) {
        const tarea = this.tareas.find((t) => t.id === id);

        if (!tarea) return;

        const nuevoNombre = prompt("Nuevo nombre:", tarea.nombre);

        if (nuevoNombre === null) return;

        if (nuevoNombre.trim() === "") {
            this.mensaje.textContent = "El nombre no puede estar vacío.";
            return;
        }

        tarea.nombre = nuevoNombre.trim();
        this.guardar();
        this.renderizar();
        this.mensaje.textContent = "Tarea modificada.";
    }

    eliminar(id) {
        this.tareas = this.tareas.filter((t) => t.id !== id);
        this.guardar();
        this.renderizar();
        this.mensaje.textContent = "Tarea eliminada.";
    }

    renderizar() {
        this.lista.replaceChildren();

        for (const tarea of this.tareas) {
            const elemento = document.createElement("li");
            const nombre = document.createElement("span");
            const completar = document.createElement("button");
            const editar = document.createElement("button");
            const eliminar = document.createElement("button");

            nombre.textContent = tarea.nombre;

            if (tarea.completada) {
                nombre.classList.add("completada");
            }

            completar.textContent = tarea.completada
                ? "Reabrir"
                : "Completar";

            completar.addEventListener("click", () => {
                this.cambiarEstado(tarea.id);
            });

            editar.textContent = "Editar";
            editar.addEventListener("click", () => {
                this.editar(tarea.id);
            });

            eliminar.textContent = "Eliminar";
            eliminar.addEventListener("click", () => {
                this.eliminar(tarea.id);
            });

            elemento.append(
                nombre,
                completar,
                editar,
                eliminar
            );

            this.lista.appendChild(elemento);
        }
    }
}

const app = new Aplicacion();</code></pre>
                <p>Guardá ambos archivos en la misma carpeta y abrí <code>index.html</code> en el navegador. Las tareas quedan almacenadas en LocalStorage. La aplicación reconstruye los objetos <code>Tarea</code> al recuperarlos.</p>
            </div>
        `
    }
};
