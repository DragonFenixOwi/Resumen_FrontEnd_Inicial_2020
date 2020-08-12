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
    ----------------------------------------------
                PROMESAS VS CALLBACK'S 
    ----------------------------------------------
*/


/*
        - ¿Para que me sirven las promesas?
    - La punto correcto seria ¿Como conectarnos con algo externo?
    - Si quiero trabajar con una conexion pero no se si funcioan esa conexion
        - Para eso necesito las promesas y los callback´s 
        - Para saber si la conexion funciona
    -  Te prometemos pero no lo cumplismo 
    
    - todos estos sirven para conectarnos para datos externos. Para JSON externos

*/


/*
    ----------------------------------------------------
                CALLBACK'S - VIEJO
    ----------------------------------------------------
*/


/*
    CALLBACK'S

        - Son esas tareas  que se delegan al navegador. Funciona de manera Asincronica. 
         
        - Un CallBack  es una "Función" (función 1)  y actua como un "Argumento" en la llamada de otra "Función" (Función 2)
        
            - Esta otra "Función" (Función 2) la recibe como un parámetro.
            
            - Se puede ver un ejemplo visual en la carpeta "Registro complementario / Recopilación de Imagenes"
            
        - El CallBack es un modo de asegurar que cierto código no se ejecuta antes de terminar el anterior
            
            - Es una llamada atras. Y Cualquier función puede ser un callback

        -  Se debe olvidar  un rato la expectativa de que todo lo que sucedera en la línea 1 finalizará antes de ejecutar la línea 2
        
            -  Se debe olvidar un poquito la programación lineal de que la ejecución se realizara de forma inmediata de arriba hacia abajo.
        
        - 

        - 
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
                PROMESA - ACTUAL
    ----------------------------------------------
*/


/*
    - Las PROMESAS  hacen  lo mismo que los CALLBACK'S
        
        - Pero de manera estructuralmente mejor.  

    - Con las PROMESAS en el ECMAScript 6 llega la solución a los CALLBACK'S HELL

        - Es la solución a esa manipualción exagerada de los callbacks's.
        
        - Y tambien se omite esa complejidad de tener que entender todo el código. (por ejemplo, cualquier función puede actuar como callback)
        
    
    SIGNIFICADO DE PROMESA

        - Imagina que eres un niño. Y tu mamá te promete que te comprará un nuevo teléfono la próxima semana.

            - No sabes a ciencias ciertas, si tu madre te lo comprará. Puede que realmente te compre el teléfono.
            
            - O puede que,  por ejemplo, que te portes mal y no te lo compre. 
        
        - Eso es una PROMESA. Una promesa de que vamos a hacerlo

    ESTADOS 

        - Tienen 3 estados 

            - Pending    (pendiente)       ---►       Primer estado. Si la promesa se resuelve, pasa al estado Fullfiled
    
            - Fullfiled  (cumplida)        ---►       Es cuando llega la información

            - Rejected   (rechazada)       ---►       Es cuando ocurre un error en la acción asincrona 
    
*/


/*
    ---------------------------------------
            SINTAXIS DE UNA PROMESA 
    ---------------------------------------
*/



    // 1ER CASO - SIN ARROW FUNCTION

        // SE ASIGNA UNA FUNCIÓN A LA CONSTANTE (PROMESA_OWI) 

            const PROMESA_OWI  = function ()                                            // funcion sin parametros.  
                {
                    return new Promise ( function (resolve,reject)                      // "function"      ---►     Es una función ejecutor 
                                            {                                           // "Parámetros"    ---►     Se recibe Funciones  "resolve (resolver)   y    reject (rechazar)" 
                                                if (true)                               // El ejecutor inicia un trabajo asíncrono. Una vez completado se llama  a la función "resolve" o "reject"                                                                       
                                                    {                                                         
                                                        resolve("Éxito");               // Si resuelve exitosamente (true). Llama a la función "resolve" 
                                                    }                                                          
                                                else
                                                    {
                                                        reject("Fracaso");              // Si algun error sucede (false). LLama a la función "reject"
                                                    }    
                                            }
                                        );
                }  

        // EJECUTAR UNA PROMESA - LLAMADA
                        
            PROMESA_OWI.then (  function (valor)                                        // Cuando todo funciona bien 
                                    {
                                        console.log(response);                          // Se imprime lo que devuelve "return"
                                    }
                             );                                 
                            
            PROMESA_OWI.catch ( function (err)                                          // cuando hay errores
                                    {
                                        cconsole.error(err);                           // Se imprime lo que devuelve "return"     
                                    }
                              ); 


                        


    // 2DO CASO - CON ARROW FUNCTION (mas común)
    
        // SE ASIGNA UNA FUNCIÓN A LA CONSTANTE (PROMESA_OWI) 

            const PROMESA_OWI  = () =>                                                  // FASE 1 DE ARROW FUNCTION - Se cambia "function" por la flecha "=>"
                {
                    return new Promise ( function (resolve,reject)                      // "function"      ---►     Es una función ejecutor 
                                            {                                           // "Parámetros"    ---►     Se recibe Funciones  "resolve (resolver)   y    reject (rechazar)" 
                                                if (true)                               // El ejecutor inicia un trabajo asíncrono. Una vez completado se llama  a la función "resolve" o "reject"                                                                  
                                                    {                                                          
                                                        resolve("Éxito");               // Si resuelve exitosamente (true). Llama a la función "resolve" 
                                                    }                                                          
                                                else
                                                    {
                                                        reject("Fracaso");               // Si algun error sucede (false). LLama a la función "reject"
                                                    }    
                                    }
                                );
                }  

        // EJECUTAR UNA PROMESA - LLAMADA

            PROMESA_OWI.then ( (valor) => console.log(response) );                       // FASE 1 DE ARROW FUNCTION - Se cambia "function" por la flecha "=>"
                                                                                         // FASE 3 DE ARROW FUNCTION - Se elimina las llaves 
                                                            
                            
            PROMESA_OWI.catch ( (err) => console.error(err) );                           // FASE 1 DE ARROW FUNCTION 
                                                                                         // FASE 3 DE ARROW FUNCTION
                                                                                 
                                    
                            

const QUE_PASARA = () => 
    {
        return new PROMISE((resolve, reject)=>
            {
                if (true)
                    {
                        resolve('Bien echo!!!!');
                    }
                else
                    {
                        reject("Mal hecho!!!!");
                    }
            });
    };



QUE_PASARA()
    .then((response) => console.log(response));
    //.catch((err) => console.error(err));





























/****************************************************************************************************************************************/


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
    INSTALAR NODE.js                 ---►       Ya sea en Linux, Mac o Windows. 

    VERICAR SI LA INSTALACIÓN  FUE EXITOSA 

        - node -v                    ---►      Vizualizar la versión de node.js 

        - node                       ---►     Se accede al modo Escritura. "Node" tiene su propio lenguaje, en el que se comunica
                                              y ejecuta acciones. Por ejemplo un "console.log()"
    
            - console.log("Hola")    ---►     Se imprime en la terminal el string "Hola"

        - 2 veces "control + C"      ---►     Para salir del modo escritura "node" y volver a la terminal git_Bash


*/




/*
    ------------------------------
        INICIAR NODE.JS - JSON 
    ------------------------------
*/



/*

    - pwd                        ---►      Directorio Actual. 

    - cd "ruta"                  ---►      Ir a la ruta de acceso carpeta donde se alojara el JSON.
                                           Por ejemplo "Documents/JavaScript/Resumen_FrontEnd_Inicial_2020 "
    
    - mkdir                      ---►      Crear carpeta.  Por ejemplo  "mkdir  src" (nombre de la carpeta)    
    
    - cd  src                    ---►      Se accede a la carpeta donde se alojara o guardara el JSON.

    - npm init                   ---►      Iniciar el gestor de paquetes (buscamos el package.json)
        
        - Lista de preguntas :                                (estas pregutnas quedan guardadas dentro de un Archivo JSON como resumen que funciona)


                -package name:                  (src)                              - Por defecto. 
                                                asincronismo_owi   "Enter"         - Cambiamos por un nombre que tenga mas relación.

                - versión                       (1.0.0)            "Enter"         - Por defecto

                - descripción :                 veremos el asincronismo y sus variantes   "Enter"

                - entry point :                 (index.js)                         -  por defecto. JavaScript creado (src/callback/index.js) para practica de este ejemplo 
                                                src/index.js       "Enter"         -  Modificamos el punto de entrada (Se debe crear. Aqui solo se indica la ruta) 
                    
                - test comand:                  "Enter"                            - no vamos a utilziar testin

                - git repository:               "Enter"
                
                - keywords:                     callback, promesa  "Enter"          - Palabras claves 

                - author :                      Owi                "Enter"     
                
                - license :                     (ISC)                               - Por defecto   
                                                 MIT               "Enter"          - Se cambia la licencia

                - "Enter"                                    
            
        

        - Si todo esta correcto. Se Plantea el JSON 

                                            DATOS CON ESTRUCTURA DE TIPO "OBJETO"

                {                       
                    "name": "asincronismo_owi",                                                              // Primitivo    
                    "version" : "1.0.0",                                                        // Primitivo
                    "description": "veremos el asincronismo en sus variantes",                  // Primitivo
                    "main": "src/callback/index.js",                                                     // Primitivo
                    "scripts":                          
                        {
                            "test" : "echo \""Error: no test Specified\" && exit 1"             // Script
                        },
                    "keywords": 
                        [
                            "callback",                                                         // Array
                            "promesa"                                       
                        ],
                    "author": "Owi",                                                            // Primitivo   
                    "license": "MIT",                                                           // Primitivo 
                }

        
        - Is this OK?                   (yes)               - Por defecto "yes". Si todo esta correcto. Se teclea "Enter" y listo

        - "Enter" 
*/
    




/* 
    ------------------------
        EJECUTAR NODE.JS
    ------------------------
*/

/*
    PARA LA EJECUCIÓN

        - Se debe crear una carpeta con el nombre de "callback" ya sea por terminal o con el entorno "windows"

        - Y tambien crear un archivo JavaScript con el nombre "index.js". Para este ejemplo el contenido de este archivo sera un callback

    PARA HACER USO DEL NPM 

        - Primero se debe modificar el paquete JSON. Definir "el nombre" y la "ruta de acceso" 

        - Luego ejecutar "npm run"
        
*/            

/*
    
    MODIFICAR EL PAQUETE JSON 
        
        - Se debe ir al archivo JSON creado, que suele llamarse "package.json". 
                
            - Para este caso el JSON esta alojado en "Documents/JavaScript/Resumen_FrontEnd_Inicial_2020/src"

            - O en el explorador de Visual Studio Code en la carpeta "src"

        - Se busca el apartado "script" en el "package.json" en la estructura de tipo OBJETO.

            - Dentro se puede ver      ---►       "test" : "echo \""Error: no test Specified\" && exit 1"  

                - Se debe cambiar 
                    
                    - "test"           ---►        por un nombre de llamada 
                        
                    - y "echo\...."    ---►        por la ruta donde esta alojado el archivo JavaScript.


                
        1RO - DAR UN NOMBRE PARA LA LLAMADA  
                
            - Se escribe un nombre de referencia para la llamada (para este caso "callback_owi").
                
            - Que junto con "npm run" ejecutará el archivo de JavasScript (index.js). Por ejemplo "npm run callback_owi" 
            
        2DO - ESPECIFICAR LA RUTA 

            - Se escribe   "node"    +    "ruta donde se aloja el archivo de JavaScritp" 
                
                - "node callback/index.js"

        RESULTADO FINAL

                - "callback_owi": "node callback/index.js"

            
    EJECUTAR - NPM

        - npm run "Nombre de la llamada"          ---►      "npm run callback_owi" Ejecuta el programa "index.js" 


*/





/*
    IMPORTANTE - CONFLICTO ENTRE RUTAS

        - Es importante aclarar que existe dos tipos de rutas de acceso que se tiene que tener presente

                - El del "package.json"                ---►      Documents/JavaScript/Resumen_FrontEnd_Inicial_2020/src
                       
                    > asincronismo_owi @ 1.0.0         ---►      Se vizualiza en terminal externa de git_bash junto con la ruta de acceso    

                - Y el "index.js"                      ---►      callback/index.js  (que se encuentra dentro de "src")

                    > node callback/index.js           ---►      Se vizualiza en terminal externa de git_bash 

        - Y es importante porque el punto de referencia inicial para describir la ruta del "index.js" es la ruta de la carpeta en el que se aloja el "package.json"
                
                - "package.json"  se aloja en "src"

                - Pero tambien en "src" se encuentra "callback/index.js"

        - Escribir "src/callback/index.js" crearia un conflicto (un error) debido a que "src" aloja a los dos 


*/











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
