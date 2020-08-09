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
        - El  "Objeto de la vida real" se representa de manera "abstracta".
    - No podemos tocar el objeto de la vida real pero si podemos "Definirla" mediante sus propiedades
        - Todo objeto tiene propiedades(alto, color, bajo, duro, etc.)
*/

var coche = 
    {
        marca : 'Toyota',            //En POO. Se define PALABRAS "CLAVES" (O KEY) y "VALORES"
        modelo: 'C-HR',              // KEY (marca, modelo, anyo)
        anyo :  '2020'               //  VALORES (Toyota, C-HR, 2020)
    };


// LLAMADA A UNA PROPIEDAD. 
Coche.marca;                         // Forma de acceder a la información del objeto coche.







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
                - A cualquier "fuNción" que estan dentro de un OBJETO se le conose como "Método"
                - "this" - es una variable hace referencia al padre. El padre es coche. 
                - "this" - es la representacion de ese objeto.
            */
            console.log(`${this.marca}: ${this.modelo} \\${this.anyo} `);
        }
    };



//llamar a un metodo 
coche.detalles_owi();                   //Sin esta llamada. No se ejecuta el método "detalles_owi" dentro del objeto "coche". 


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








/****************************************************************************************************************************************/

    
/*
    ---------------------------------------------
                    CALLBACK'S
    ----------------------------------------------
*/


/*
    CALLBACK'S
        - Son esas tareas  que se delegan al navegador. Funciona de manera Asincronica. 
        - Es una función 
            - que se pasa a otra función como argumento. 
        - Y es un modo de asegurar que cierto codigo no se ejecuta antes de terminar el anterior
            - es una llamada atras.

        - Cualquier función puede ser un callback
*/

    


// RUTA DE IMAGEN DETALLADA  ---►  \Resumen_FrontEnd_Inicial_2020\Registro Complementario\Recipilación de imagenes\1 - CallBack



// SUMAR - FUNCIÓN QUE ACTUA COMO CALLBACK 
function sumar (numero1, numero2)                                                      
    {
        return numero1 + numero2;                                       //  RESULTADO FINAL   40 +20 = 60 
    }                                                                   //        ▲
                                                                        //        |
                                                                        //        |
// 2DO - FUNCIÓN QUE SOLICITA DOS PARAMETROS Y UNA FUNCIÓN CALLBACK     
function calcular(numero1, numero2,callback)                            // Parametro 1   ---►  numero1 = 40                 (recibe) por petición 
    {                                                                   // Parametro 2   ---►  numero2 = 20                 (recibe) por petición  
        return callback(numero1, numero2);                              // Parametro 3   ---►  callback = Función "sumar"   (recibe) por petición
    }                                                                   //        ▲
                                                                        //        |
                                                                        //        |
// 1RO - LLAMADA DE LA FUNCIÓN                                          
calcular(40,20,sumar)                                                   // Argumento 1   ---►  40                            (Envia)
                                                                        // Argumento 2   ---►  20                            (Envia)
                                                                        // Argumento 3   ---►  Función "sumar"               (Envia)









/****************************************************************************************************************************************/


/*
    ---------------------------------------------
                    API
    ----------------------------------------------
*/
/*
    ------------------------------
                API
    ------------------------------
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







/*
    ----------------------------------------------
        NODE.JS  - ASINCRONISMO - CREAR UN JSON 
    ----------------------------------------------
*/



/*
    # NODE.JS

        - Es un entorno JavaScript de lado de servidor. Podemos estar en BackEnd con Node.

        - Es un framework. Esta orientado a eventos asincronicos. 

        - Necesito  conectar con bases de datos, PHP (por ejemplo). Pero tengo que aprender PHP. 
            
            - Si ya se Javascript, simplemente trabajo con Node.js y ya podré conectar a base de datos.
            
*/




/*
    -------------------------------------------------------------------
       TERMINAL EXTERNA  GIT_BASH :  NODE.JS  - ASINCRONISMO -  JSON 
    -------------------------------------------------------------------
*/


/*
    -------------------------------
        PRIMEROS PASOS  NODE.JS  
    -------------------------------
*/



/*
    VERICAR SI LA INSTALACIÓN  FUE EXITOSA

        - node -v                    ---►      Vizualizar la versión de node.js 

        - node                    ---►     Se accede a node desde la terminal. Node tiene su propio lenguaje. 
    
        - console.log("Hola")     ---►     Se imprime en la terminal el string "Hola"

        - 2 veces "control + C"   ---►     Para salir del modo "node"


*/




/*
    ------------------------------
        INICIAR NODE.JS - JSON 
    ------------------------------
*/


/*

    - pwd                        ---►      Directorio Actual 
    
    - mkdir                      ---►      Crear carpeta.  Por ejemplo  "mkdir 'nombre de la carpeta' "
        
    - git init                   ---►      Iniciar el ".git"  

    - npm init               ---►      Iniciar el gestor de paquetes (buscamos el package.json)
        
        - Lista de preguntas :                                (estas pregutnas quedan guardadas dentro de un Archivo JSON como resumen que funciona)


                -package name:                  (Asincronismo)    - Por defecto por "mkdir 'Asincronismo' "

                - versión                       (1.0.0)           - Por defecto

                - descripción :                 veremos el asincronismo y sus variantes

                - entry point :                 (index.js)        -  por defecto. 
                                                src/index.js      -  Modificamos el punto de entrada (Se debe crear. Aqui solo se indica la ruta) 
                    
                - test comand:                  "Enter"            - no vamos a utilziar testin

                - git repository:               "Enter"
                
                - keywords:                     callback,promesa   - Palabras claves 

                - author :                      Owi
                
                - license :                     (ISC)               - Por defecto   
                                                 MIT                - Se cambia la licencia
                - Enter                                    
            
        

        - Si todo esta correcto. Se Plantea el JSON 

                {
                    "name": "asincronismo",
                    "version" : "1.0.0",
                    "description": "Veremos el asincronismo en sus variantes",
                    "main": "src/index.js",
                    "scripts": 
                        {
                            "test" : "echo \""Error: no test Specified\" && exit 1"  
                        },
                    "keywords": 
                        [
                            "callback",
                            "promesa"
                        ],
                    "author": "Owi",
                    "license": "MIT",    
                }

        
        - Is this OK?                   (yes)               - Por defecto "yes". Si todo esta correcto. Se teclea "Enter" y listo

*/
    




/* 
    ------------------------
        EJECUTAR NODE.JS
    ------------------------
*/

/*

    - npm run                ---►   Nombre del "scripts" de JSON 


    -callback:API
        - Estamos dentro de la carpeta callback pero queremos el codigo api 
        - node src/callback

    - Estructurar una API sin JQuery
        -


    -npm install xmlhttprequest -- save
        - instalamos en una carpeta na libreria
        - "install" pedimos instalar
        - "-- save" significa en su producto desarrollador+
        - 
    

    - no no sirver instalar miles de millones de librerias



    - Sin "npm" no vas a poder ingresar una libreria desde el exterior

    - Los callbacks se volvian un infierno.
    - callback es lo mas antiguo para aplicar antiguamente
    - luego de los "callback" vinieron "las promesas"
    - "Las promesas" aparecieron para 
*/
