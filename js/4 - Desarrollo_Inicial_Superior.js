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
   RESUMIENDO TODO  

        - JAVASCRIPT             ---►       - Es un sistema Asincrónico. Otros lenguajes pueden hacer mas de una cosa a la vez. JavaScrit "no".
                                            
                                            - Para entenderlo mejor se toma el siguiente ejemplo:
                                                
                                                - Si estoy trabajando con una conexión. 
                                                        
                                                        - Necesito que esa conexión funcione. Y al funcionar ir por un camino para recuperar esa 
                                                          información en una zona de la base de datos o en una API. 
                                                          
                                                        - Y cuando  no funcione esa conexión me avise.  
                                                
                                                - Y es este proceso de conexión  donde entran los callback's y promesas.   


        - CALLBACK'S             ---►       - ANTIGUO. Son funciones. Es un modo de asegurar que cierto código o acción  no se ejecuta antes de terminar el anterior.
                                            
                                                - Es decir, los callbacks, nos ayudan en asegurar el orden en las peticiones a servidores.  


        - PROMESAS               ---►       ACTUAL. Hacen  lo mismo que los CALLBACK'S. Pero de manera estructuralmente mejor.


        - JQUERY                 ---►       Libreria Externa de JavaScript. Permiten agregar interactividad (aporta el dinamismo) a un sitio web. 


        - VANILLA JAVASCRIPT     ---►       Todo lo contrario a JQuery. Es JavaScript puro.  


        - JSON                   ---►       Lenguaje de intercambio de datos. No crean aplicaciones. Crean estructuras para poder
                                            intercambiar datos entre "diferentes lenguajes". 
        
                                            
        - NODE.js                ---►       Freamework. Es un entorno JavaScript de lado del servidor. Podemos estar en BackEnd con Node. 
                                            Sin necesidad de aprender un lenguaje de programción basado en backend como por ejemplo  PHP        
        

        - API                    ---►       - Es el mecanismo más útil para conectar dos softwares (dos aplicaciones o dos codigos) entre sí. 
                                              para el intercambio de datos en formato estÁndar como JSON.
        
                                              
    CASOS REALIZADOS

            - Utilizar la libreria externa JQuery (como pull request) para traer información de una API de Star Wars.

                - Utilizando las funciones CALLBACK'S para la conexión.

            - Utilizar NODE.js para crear un JSON y poder ejecutar archivos JavaScript.



    PROFUNDIZANDO CON EL ASINCRONISMO 


        - TODO LO QUE SE EXPLICA es para conectarnos a BASE DE DATOS, A JSON EXTERNOS, INFORMACIÓN EXTERNA.   

            - Siempre vamos  a tener requerimientos de una base de datos. Aunque tengamos que construirlas nosotros.

                - Por ejemplo "un login". Registro a una página. Esto ya es una conexion a base de datos
                
                - Y es una conexión a datos "PERSISTENTE". Por ejemplo, 
                    
                        - Los discos duros (son persistentes). 
                        
                        - Mientras que la Memoria RAM (es una memoria volátil), se pierde datos al apagar la computadora. 

            - Siempre vamos a Tener que acceder a esa base de datos para guardar el usuario y contraseña. 
            
                - Luego hay que acceder a esa base de datos para leerlos. 
                
                - Y a este proceso de (acceder) se le llama "Asincronismo". Se necesita  del "Asincronismo" para accerder. 

        - JavaScript sólo puede hacer una cosa a la vez.
            
                - Pero es capaz de delegar la ejecución de ciertas funciones a otros procesos. 
            
                - Este modelo de concurrencia se llama "EventLoop".

        - ¿que ocurre si le envia varias tareas a la vez? 
            
                - Delega esas tareas al navegador y las asocia a "funciones".
            
                - Al terminar la tarea actual. Esta tarea asociada a una función debera ser ejecutada. 
            
                - Estas funciones son conocidos como "CALLBACK".
                

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
console.log(1);                                     // Se ejecuta. Se imprime en consola "1"
setTimeout(() => console.log(2), 2000);             // No se ejecuta. Se delega al navegedar. La función se añade a la cola de tareas
console.log(3);                                     // Se ejecuta. Se imprime en consola "3"
// Final del código. Empieza a sacar las tareas de la cola de tareas. Se imprime en consola "2"       

                    

// SIN RETRASO DE TIEMPO
console.log(1);                                     // Se ejecuta. Se imprime en consola "1"
setTimeout(() => console.log(2), 0);                // Se ejecuta el ARROW FUNCTION. Tiempo que tarda para ejecutar la function "0"
console.log(3);                                     // Se ejecuta. Se imprime en consola "3"















/**************************************************************************************************************************************************************/




/*
    ------------------------------
                API
    ------------------------------
*/




/*
    - API                   ---►      Application Programming Interface
                                      Se podria considerar un mecanismo para que se conecten dos aplicaciones o dos codigos, dos softwares. 
                                      Y que esas aplicaciones intercambien datos. 

    - TIPOS DE  API          ---►     Free, registro, pago
    
    - API de Star- Wars      ---►     https://swapi.dev/    - Se necesita JQuery que es el que hara de "request" (rescatar los datos) para traer 
                                                              a nuestro código 
                                
                                                            - Diferentes Datos  
                                        
                                                                - people/1 - pertenece a "luke skywalker"
                                                                
                                                                - people/10 - pertence a "obin-wan kenobi"
                                                                
                                                                - people/5  - pertenece a "leia organa"
                                        
                                                            - Estos datos (people/ id)  nos deja acceder atraves de una API. 
                                    
    
*/






/****************************************************************************************************************************************************/

    
/*
    ---------------------------------------------------
                PROMESAS   VS    CALLBACK'S 
    ---------------------------------------------------
*/


/*
    - ¿Para que me sirven las promesas y callback's?

            - pues la prugunta correcta seria    ---►     ¿Como conectarnos con algo externo?
    
    - Los dos sirven para conectarnos para datos externos. 

    - En aplicativos web es muy común realizar consultas a las API's. 
    
            - Dicha petición se realiza utilizando FUNCIONES  de JavaScript y estas presentan ASINCRONÍA. 

    - Esta consulta al final del día se puede traducir como "una petición al servidor". 

*/









/*
    ----------------------------------------------------
                CALLBACK'S (ANTIGUO)
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

        - Los callback's al final, estaria hablando de como (antes) procedia JavaScript cuando tenia que conectarse a base de datos. 

        -  Se debe olvidar  un rato la expectativa de que todo lo que sucedera en la línea 1 finalizará antes de ejecutar la línea 2
        
            -  Se debe olvidar un poquito la programación lineal de que la ejecución se realizara de forma inmediata de arriba hacia abajo.
        
         

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
calcular(40,20,sumar);                                                   // Argumento 1   ---►  40                            (Envia)
                                                                        // Argumento 2   ---►  20                            (Envia)
                                                                        // Argumento 3   ---►  Función "sumar"               (Envia)






                                                                        
/*
    ---------------------------------------------
                PROMESA (ACTUAL)
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

    const PROMESA_OWI  = function ()                                          // funcion sin parametros. La constante "PROMESA_OWI" guarda una "function"  
        {
            return new Promise ( function (resolve,reject)                    // "function"      ---►     Es una función ejecutor 
                                    {                                         // "Parámetros"    ---►     Se recibe Funciones  "resolve (resolver)   y    reject (rechazar)" 
                                        if (true)                             // El ejecutor inicia un trabajo asíncrono. Una vez completado se llama  a la función "resolve" o "reject"                                                                       
                                            {                                                         
                                                resolve("Éxito");             // Si resuelve exitosamente (true). Llama a la función "resolve" 
                                            }                                                          
                                        else
                                            {
                                                reject("Fracaso");            // Si algun error sucede (false). LLama a la función "reject"
                                            }    
                                    }
                                    );
        }  

    // EJECUTAR UNA PROMESA - LLAMADA
                        
    PROMESA_OWI().then (  function (response)                                     // Cuando todo funciona bien 
                            {
                                console.log(response);                       // Se imprime lo que devuelve "return"
                            }
                     );                                 
                            
    PROMESA_OWI().catch ( function (err)                                       // cuando hay errores
                            {
                                cconsole.error(err);                         // Se imprime lo que devuelve "return"     
                            }
                      ); 
                      
                    


// 2DO CASO - CON ARROW FUNCTION (MAS COMÚN)
    
    // SE ASIGNA UNA FUNCIÓN A LA CONSTANTE (PROMESA_OWI) 

    const PROMESA_OWI = () =>                                                 // FASE 1 DE ARROW FUNCTION - Se cambia "function" por la flecha "=>"
        {   
            return new Promise ( (resolve, reject) =>                          // "function"      ---►     Es una función ejecutor 
                                    {                                         // "Parámetros"    ---►     Se recibe Funciones  "resolve (resolver)   y    reject (rechazar)" 
                                        if (true)                             // El ejecutor inicia un trabajo asíncrono. Una vez completado se llama  a la función "resolve" o "reject"                                                                  
                                            {                                                          
                                                resolve("Éxito");             // Si resuelve exitosamente (true). Llama a la función "resolve" 
                                            }                                                          
                                        else
                                            {
                                                reject("Fracaso");            // Si algun error sucede (false). LLama a la función "reject"
                                            }    
                                    }
                                );
        };  


    // EJECUTAR UNA PROMESA 

    // CASO 1 - LLAMADA 
        PROMESA_OWI().then( (response) => console.log(response));             // FASE 1 DE ARROW FUNCTION - Se cambia "function" por la flecha "=>"
                                                                              // FASE 3 DE ARROW FUNCTION - Se elimina las llaves 
                                                                
                                
        PROMESA_OWI().catch ((err) => console.error(err));                    // FASE 1 DE ARROW FUNCTION 
                                                                              // FASE 3 DE ARROW FUNCTION
 

    // CASO 2 - LLAMADA                                                                               
        PROMESA_OWI()
            .then((response) => console.log(response))                        // si todo esta bien      
            .catch((err) => console.error(err));                              // manejo del error
                           
        
                                                                                

const QUE_PASARA = () => 
    {
        return new Promise((resolve, reject) => 
            {
                if (true) 
                    {
                        resolve("Bien echo!");
                    } 
                else 
                    {
                        reject("Mal!");
                    }
            });
};

// ejecutar
// al ejecutar una promesa hay unos elementos encadenados que son .then y .catch

                                                                                





/*
    ---------------------------------------
            MULTIPLES PROMESAS 
    ---------------------------------------
*/




// LLAMADA DE VARIAS PROMESAS
Promise.all(PROMESA_1(), PROMESA_2(), PROMESA_3(), PROMESA_N())                // Aqui esta la solución a los CALLBACK'S. Se realiza multiples llamadas de PROMESAS        
    .then((response) =>                                                        
        {                                                                      // PROMESA_OWI ()  ===  PROMESA_1()     ---►     PROMESA_OWI () de arriba es una función  
            console.log("Resultados", response);    
        })                                                                     // No debe ponerse ";" 
    .catch ( (err) => 
        {
            console.error(err);                                                // ".then" y ".cat" deben estar ajustadas a promise (cerca)
        });















/****************************************************************************************************************************************/


/* 
    ------------------------------------------------------
            JSON  (JavaScript - Object - Notation)
    ------------------------------------------------------
*/




/*

            ***  ESTRUCTURAS DE COMUNICACIÓN ENTRE DIFERENTES LENGUAJES  ***
                                                                          
   

                                                          ___________________________      
                                                          |                         |      
                                                          |                         |      
                                                          |      LENGUAJES DE       |---------------- ► 1RO  XML    -   Primero vino XML
      Surge por que los servidores necesitan  ◄ ----------|  INTERCAMBIO DE DATOS   |                   2DO  JSON   -   Luego surge  JSON, por necesidad de intercambio de datos.
      comunicarse. Un claro ejemplo las API'S             |                         |                   3RO  YAML   -   Y por ultimo, aparece YAML 
                                                          |_________________________|                     
                                                                       |  
                                                                       |
                                                                       |
                                                                       | Lenguajes que sirven para crear estructuras de comunicación. "No crean aplicaciones". Crean estructuras 
                                                                       | para poderse leer entre diferentes lenguajes. Es decir, ellos intercambian datos entre "diferentes lenguajes" 
                                                                       |
                                                                       |                                                     
                            ___________________________________________|______________________________________                       
                            |                                          |                                     |                                            
                            |                                          |                                     |                               ___________________            
                            ▼                                          ▼                                     ▼                OTROS          |                 |                      
                           XML                                        JSON                                  YAML        ---------------- ►   |     SO XML      |              
            ____________________________________         ____________________________          ____________________________                  |                 |    
            |                                  |         |                          |          |                          |                  |     OGDL        |
            |  <Servers>                       |         | {                        |          |                          |                  |                 |    
            |     <Server>                     |         |   Servers:[              |          |                          |                  |     PLIST       |                 
            |       <name> Server 1</name>     |         |     {                    |          |  Servers:                |                  |_________________|   
            |       <owner> Owi </owner>       |         |        name : Server 1   |          |      name : Server 1     |                  
            |       <Created> 12345 </Created> |         |        owner : Owi       |          |      owner : Owi         |                     
            |       <Status>active</Status>    |         |        created: 123456   |          |      created: 123456     |              
            |    </Server>                     |         |        status : active   |          |      status : active     |              
            |  </Servers>                      |         |      }                   |          |                          |         
            |                                  |         |    ]                     |          |                          |                      
            |                                  |         |  }                       |          |                          |            
            |__________________________________|         |__________________________|          |__________________________|         
                       |                                   |                                                |
                       |                                   |                                                |      
                       |___________________________________|                                                |
                                        |                                                                   ▼ 
                                        |                                                                 Python  
                                        |   Todos los Lenguajes siguientes pueden leer 
                                        |         o entienden a JSON y  XML                  
                                        |
                                        |
                                        ▼    
                                    
                        - Objetive-C            -Cobol
                                     
                        - Python                - C#
                                     
                        - Java                  - JavaScript          
                                     
                        - C++                   - C
                                     
                        - Visual Basic          - Ruby
                                     
                        - ASP                   - Delphi
                                
*/




/*
    - DIFERENCIA ENTRE JSON Y XML 


                LOS DOS DICEN LO MISMO           ESTRUCTURA           PESO - TAMAÑO         CANTIDAD DE LÍNEAS

                       ARCHIVO 1                    XML                  10 Kb                 400 Líneas  
        
                       ARCHIVO 2                    JSON                 2 kb                   80 Líneas


    
  
    - Teniendo presente que el Archivo 1 y Archivo 2 pasan lo mismo datos. Hacen lo mismo. Se concluye que :

        - Con JSON  pesa menos, tiene un tamaño mas reducido.

        - Tabmien se tiene menos líneas ( y por ende : menos errores, mejor lectura del código)

                               
    - Tambien existen diferencias entre los que pueden transmitir y lo que no pueden. 
    
        - JSON es el que puede transmitir mas tipos de datos ( arrays, datos boleanos,etc. ). Punto a favor
*/





/*
    - JSON                     ---►        JavaScript - Object - Notation

    - Inicio de Persistencia   ---►        - A JSON tambien se le suele llamar como  "Base de datos minimalistas - Base de datos pequeñita".
                                        
                                            - Por ejemplo, en JSON se puede guardar los datos de las personas que trabajan en una empresa. Y 
                                              esto se guarda en un archivo. Y por eso lo de minimalista.
                                        
                                            - La persistencia empieza con los archivos.  Para entender mejor Los discos duros (son persistentes)
                                              Mientras que la Memoria RAM (no es perssitente) ya que al apagar la computadora se elimina todo el 
                                              contenido del archivo  que tenia guardado en su espacio.
                                            
                                            - Por eso ya es un inicio de la base de datos. Porque es algo persistente. Porque es algo que se guarda 
                                              en un archivo. Y eso se llama persistencia. 

                                            - Esta estructura minimalista que es JSON ya seria como la primera base de datos que podemos acceder.

                                                    - Ya sea estando en local (XAMPP) o lejos (API)
                                            
                                            -  " jsoneditoronline.org "  ( te ayuda a crear un Json)                                            
                                        
    - XML                      ---►         No ha muerto                            

    - AJAX                     ---►         Es un asincronismo muy antiguo. Es una implementación que se ha dejado de lado. Ajax es un problema de JQuery 
    
*/














/*********************************************************************************************************************************************************/


/* 
    -----------------------
            JQUEREY  
    ----------------------
*/


/*
    - JQuery                     ---►       - Es una libreria. Es JavaScript. 

                                            - JQuery  bien empleado no es malo. Pero por lo general se emplea mal.


    
    - Vanilla JavaScript         ---►       - Es todo lo contrario de JQuery. 

                                            - Cuando se habla de Vanilla JavaScript  es que se ha hecho 

                                                    - "JavaScript limpio" , "JavaScript nativo", 
                                                
                                                    - "JavaScript sin ningun tipo de libreria externa como JQuerey o otras".

                                                    - Producto creado totalmente desde cero.  
    
                                            - Cualquier libreria externa (JQuery es la mas conocida y la mas utilizada). Que se tebga
                                              tenga que integrar dentro del lenguaje. Se considera que no estas haciendo "Vanilla JavaScript"




    - MUNDO LABORAL              ---►       - Hay gente que hagan cosas y creen que hacen JavaScript. Y dicen yo domino JavaScript y No, tu dominas JQuery
                                            
                                            - JQuery hizo mucho daño. Intento ayudar pero, termino perjudicando

                                            - Al buscar trabajo, te pondran a prueba un ejercicio sin JQuery para ver  si podes hacerlo. 
                                              Para ver si sos de las personas que solo saben JQuery. 
                                            

                                            
    DIFERENCIA ENTRE JQUERY Y VANILLA JAVASCRIPT


                CREACIÓN DE UN BOTON           ESTRUCTURA           PESO - TAMAÑO          CANTIDAD DE LÍNEAS

                       LIBRERIA 1                JQuery                1000 Kb                 4  Líneas  
        
                       LIBRERIA 2                Vanilla                 1  kb                 5 Líneas                                          
    
    
    
    
    - Supongamos que no sabes JavaScript. Y solo sabemos JQuery. Y queremos crear un "BOTON"

            - Cuando traemos una libreria con JQuery. Traemos al padre, madre, primos, amigos, novio, amante, y mas 
               solo para hacer un boton. 
                                                      
            - Se Necesita traer miles instrucciones que no me sirven. Pero como todos estan conectados e implicados en el proceso de JQuery.
              ocurre esto.

    - Se concluye
                
            - La soluciona JQuery a lo que me soluciona Vanill. Es similar. Pero la diferencia entre el peso o tamaño es enorme 

            - Cuanto mas sabes de JavaScript. Menos utilizas JQuery.        

*/



















/****************************************************************************************************************************************/


/*
    ----------------------------------------------
        NODE.JS  - ASINCRONISMO - CREAR UN JSON 
    ----------------------------------------------
*/



/*
    # NODE.JS

        - Es un entorno JavaScript de lado del servidor. Podemos estar en BackEnd con Node.

        - Es un framework. Esta orientado a eventos asincronicos. 

        - Necesito  conectar con bases de datos, PHP (por ejemplo). Pero tengo que aprender PHP. 
            
            - Si ya sé Javascript, simplemente trabajo con Node.js y ya podré conectar a base de datos.
            
*/




/*
    -------------------------------------------------------------
            TERMINAL EXTERNA  GIT_BASH :  NODE.JS  - JSON 
    --------------------------------------------------------------





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





