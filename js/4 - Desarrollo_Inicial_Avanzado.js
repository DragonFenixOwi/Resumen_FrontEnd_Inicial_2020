/* 
    --------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        RESUMEN CONTENIDO JAVASCRIPT 2020
    --------------------------------------------
*/






/* 
    --------------------------------------------
        POO - PROGRAMACIÓN ORIENTADA A OBJETOS
    --------------------------------------------
*/

/* 
    ------------------------
        POO - OBJETOS { }
    ------------------------
*/

/* 
    - Se trae un "Objeto de la vida real" y se describe en código
    - Se representa un "Objeto de la vida real" de manera "abstracta" . 
    - No podemos tocar el objeto de la vida real pero si podemos "Definirla" mediante sus propiedades
    - Todo objeto tiene propiedades(alto, color, bajo, duro, etc.)
*/

var coche = 
    {
        marca : 'Toyota',        //En POO. Se define PALABRAS CLAVES (O KEY) Y VALORES
        modelo: 'C-HR',          // KEY (marca, modelo, anyo) - VALORES (Toyota, C-HR, 2020)
        anyo :  '2020'  
    };


// LLAMADA A UNA PROPIEDAD. 
Coche.marca;                    // Forma de acceder a la información del objeto coche.







/* 
    -------------------------------------
        POO - MÉTODO DE LOS OBJETOS
    -------------------------------------
*/


var coche = 
    {
        marca : 'Toyota',
        modelo: 'C-HR',      
        anyo :  '2020',
        
        // METODO DEL OBJETO 
        detalles_owi : function()
        {
            /* 
                - A cualquier "fución" que estan dentro de un objeto se le conose como "Método"
                - "this" - es una variable hace referencia al padre. El padre es coche. 
                - "this" - es la representacion de ese objeto.
            */
            console.log(`${this.marca}: ${this.modelo} \\${this.anyo} `);
        }
    };



//llamar a un metodo 
coche.detalles_owi();       //Sin esta llamada no se ejecuta el método "detalles_owi" dentro del objeto "coche". 


//LLamar a una propiedad
coche.anyo;

    













/****************************************************************************************************************************************/


/* 
    -------------------------------
        ESTRUCTURA DE UNA CLASE 
    -------------------------------
*/


/* 
    - Existe un "Antes" y un "Despues" del ECMAScript de 2015
        - A la Estructura de una clase (se le llama PROTOTIPO en JavaScript)
        - Cuando creamos un prototipo. La primera letra siempre en MAYÚSCULAS.
*/





/* 
    ---------------------------------------------------------------------
        ANTES DEL ECMAScript 2015 - CONSTRUCTOR - PROTOTIPOS (MÉTODOS)
    ---------------------------------------------------------------------
*/



/*
    SINTAXIS
        - CONSTRUCTOR                  --> Siempre encabeza la estructura 
        - PROTOTIPOS (MÉTODOS)         --> Se define la Acción
        - INSTANCIAS DEL CONSTRUCTOR   --> Se crea un objeto nuevo
        - LLAMADA DEL MÉTODO           --> Se ejecuta la Acción
*/






/*
    ---------------------------
        CONSTRUCTOR (CLASE)
    ---------------------------
*/


//CONSTRUCTOR (CLASE de "Persona")
function Persona (nombre, apellidos, edad, nacionalidad='Espanyola')
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nacionalidad =nacionalidad;
    }




/*
    ---------------------------
        MÉTODOS (PROTOTIPO)
    ---------------------------

*/


//ACCIÓN que puede realizar una INSTANCIA DEL CONSTRUCTOR

// MÉTODO (prototipo de "Persona") 
Persona.prototype.saludar = function ()                     //Constructor.prototype.nombre_del _prototipo(o del método)
    {
        console.log(`Hola me llamo ${this.nombre } ${apellidos}`) ; 
    };




/*
    ------------------
        INSTANCIAS
    ------------------

*/

/*
    - La "Instancia" es como crear un nuevo "Objeto"   
    - Por ejemplo
        - Se le asigna el Constructor "Persona" a la variable  "diego"
        - diego --> (nombre = Diego, apellidos = Torres, edad = 38, nacionalidad = Española)
*/



//INSTANCIA DEL CONSTRUCTOR  ( Instancia de "Persona")       
var diego = new Persona ("Diego", "Torres", 38);            // "new" objeto basado en "Persona" (Constructor)  
var maria = new Persona ("Maria", "Sanchez", 18);




//LLAMADA AL MÉTODO "SALUDAR"
diego.saludar();
















/* 
    -------------------------------------------------------
        DESPUES DEL ECMAScript 2015 - CLASES - HERENCIA 
    -------------------------------------------------------
*/



/*
    SINTAXIS
        - CLASS                                     -->  Padre que hereda 
            - CONSTRUCTOR                           -->  Constructor del Padre.
            - MÉTODOS                               -->  Se define la Acción.
        
        - HERENCIA                                  -->  Sintaxis   class ______ extends  _____  
            - CONSTRUCTOR                           -->  Nativo de la clase "Herencia"
            - SUPER CONSTRUCTOR                     -->  Se invoca al Constructor del Padre
            - MÉTODO

        - INSTANCIAS DEL CONSTRUCTOR PADRE          --> Se crea un objeto nuevo "new Persona_Owi"
        - INSTANCIAS DEL CONSTRUCTOR HERENCA        --> Se crea un objeto nuevo "new Desarrollador" 
        
        - LLAMADA DEL MÉTODO                        --> Se ejecuta la Acción
*/




/*
    - Se consigue tener un MÉTODO y un CONSTRUCTOR dentro de una estructura "CLASS"
    - El gran impacto en esta actualización fue La HERENCIA (que es Modular) en las "CLASES"
        - Ahorrando muchisisisimo código. 
*/



/* 
    -------------------------------------
        CLASS - CONSTRUCTOR - MÉTODOS
    -------------------------------------
*/



class Persona_Owi 
    {
        //CONSTRUCTOR
            constructor (nombre, apellidos, edad, nacionalidad='Espanyola',altura)
                {
                    this.nombre = nombre;
                    this.apellidos = apellidos;
                    this.edad= edad; 
                    this.nacionalidad =nacionalidad;
                }

        //METÓDOS - los métodos son funciones
            saludar()
                {
                    console.log(`Hola me llamo ${this.nombre } ${apellidos}`) ;
                }
        }






/*
    ----------------------------
        HERENCIA EN CLASES
    ---------------------------
*/




/* 
    ¿Para que es una herencia?
        - Para "Heredar" todo lo que tiene otra "Clase".
            - Por ejemplo, quiero  el CONSTRUCTOR y  el MÉTODO "saludar" de la clase "Persona_Owi". 

    - HERENCIA(class) llamada "Desarrollador" 
        - ¿como hago que herede algo de la clase "Persona_Owi"?
            - Con un "extendes".  
            - "Extiendo la información de "Persona_Owi"
    
    - Entonces la clase "Desarrollador", tiene como padre de esa herencia "Persona_Owi"
        - Es decir, la "Herencia Prototipal" viene de "Persona_Owi"
        
    - Una parte es la del Heredado y otra es la propia. 
        - Por lo que, no se puede hacer un CONSTRUCTOR en una clase que hereda otra clase  
       - Se debe hacer un SUPER CONSTRUCTOR 

*/




// HERENCIA 
class Desarrollador extends Persona_Owi
    {
        //CONSTRUCTOR nativo de la clase  "Desarrolloador"
            constructor (nombre, apellidos, edad, nacionalidad, lenguaje)  // "lenguaje" es la Propia. Por eso hacemos "this" 
                {
                    super (nombre, apellidos, edad, nacionalidad);         // SUPER CONSTRUCTOR_ llamada al  CONSTRUCTOR PADRE 
                    this.lenguaje = lenguaje;                              // Declaración de la propia con "this"
                }

        // MÉTODO PROPIO dentro de "Desarrollador"
            saludarDev()    
                {
                    console.log(`Hola me llamo ${this.nombre } ${apellidos} y trabajo en el lenguaje ${this.lenguaje}`) ;
                }        


    }





//INSTANCIA DEL CONSTRUCTOR  ( Instancia de "Persona_Owi")       
var diego = new Persona_Owi ("Diego", "Torres", 38);                     // "new" objeto basado en "Persona_Owi" (Constructor)  
var maria = new Persona_Owi ("Maria", "Sanchez", 18);
var ana   = new Desarrollador ("Ana","Torres",28,undefined,"Python");      //Cuando no hay nada que aportar, se puede poner "undefined"



/*
    HERENCIA DE ATRIBUTOS
        - diego    --> Pertenece a la clase "Persona_Owi" con (nombre,apellidos,...)
        - maria    --> Pertenece a la clase "Persona_Owi" con (nombre,apellidos,...)
        - ana      --> Pertenece a la clase "Desarrollador" con (nombre,apellidos,..., lenguaje)
*/






//LLAMADA AL MÉTODO "saludar" - Herencia
diego.saludar();                //HERENCIA DE MÉTODOS 
ana.saludar();                  //HERENCIA DE MÉTODOS 



//LLAMADA AL MÉTODO "saludarDev" - Propio
ana.saludarDev();               // Si Borramos "Dev" y dejamor "saludar" - Ocurre la acción de "Pisar métodos"

    













/****************************************************************************************************************************************/


/*
    --------------------
        ASINCRONISMO
    --------------------
*/




/*
    JavaScript sólo puede hacer una cosa a la vez.
        - Pero es capaz de delegar la ejecución de ciertas funciones a otros procesos. 
        - Este modelo de concurrencia se llama "EventLoop".

    - ¿que ocurre si le envia varias tareas a la vez? 
        - Delega esas tareas al navegador y las asocia a "funciones".
        - Al terminar la tarea actual. Esta tarea asociada a una función debera ser ejecutada. 
        - Estas funciones son conocidos como "CALLBACK"

    */




/*
    -------------------------------------------------------------
        COMPORTAMIENTO JS EN LA LINEA DE TIEMPO DE EJECUCIÓN
    -------------------------------------------------------------
*/


//


/*
    - Para entender el ASINCRONISMO hay que saber como trabaja esa cola de tareas.
    
    - setTimeout (función, tiempo) 
        - Despues de cierto "tiempo" se ejecuta la "función"
        - Parámetros     
            - ARROW FUNCTION  () => console.log(2)
            - tiempo = 2000 milisegundos
*/


// CON RETRASO DE TIEMPO
console.log(1);                              // Se ejecuta. Se imprime en consola "1"
setTimeout(() => console.log(2), 2000);      // No se ejecuta. Se delega al navegedar. La función se añade a la cola de tareas
console.log(3);                              // Se ejecuta. Se imprime en consola "3"
// Final del código. Empieza a sacar las tareas de la cola de tareas. Se imprime en consola "2"       

                    

// SIN RETRASO DE TIEMPO
console.log(1);                               // Se ejecuta. Se imprime en consola "1"
setTimeout(() => console.log(2), 0);          // Se ejecuta el ARROW FUNCTION. Tiempo que tarda para ejecutar la function "0"
console.log(3);                               // Se ejecuta. Se imprime en consola "3"







    
/*
    ---------------------------------------------
                    CALLBACK'S
    ----------------------------------------------
*/


/*
    CALLBACK'S
        - Son esas tareas  que se delegan al navegador.
        - Es una función 
            - que se pasa a otra función como argumento. 
        - Y es un modo de asegurar que cierto codigo no se ejecuta antes de terminar el anterior
            - es una llamada atras.
*/

    













/****************************************************************************************************************************************/


/*
    ---------------------------------------------
                    API
    ----------------------------------------------
*/


/*
    API    
        - Se podria considerar un mecanismo para que se conecten dos aplicaciones o dos codigos, dos softwares.
            - y que esas aplicaciones intercambien datos. 
    - API (Free, registro, pago)
    - API de Star- Wars 
        - https://swapi.dev/ 
        - Diferentes Datos 
            - people/1 - pertenece a "luke skywalker"
            - people/10 - pertence a "obin-wan kenobi"
            - people/5  - pertenece a "leia organa"
        - Estos datos (people/ id)  nos deja acceder atraves de una API. 
        - Por eso necesitamos ahora mismo JQuery que es el que hara "request"(el que va a rescatar estos datos)
            -  Con JQuery rescatamos esa información y nos los trae a nuestro codigo que redactamos ahora.

    
*/






    







