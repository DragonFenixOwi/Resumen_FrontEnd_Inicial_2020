/* 
    ---------------------------------------------------------------------------
        Autor: Osvaldo Aquino
        Nickname: owi
        RECORRIDO DE LA ACTUALIZACIÓN DE TODO LO QUE SALIO EN EL ECMCASCRIPT6 
    ----------------------------------------------------------------------------
*/



/*
    -----------------------   
        RESUMEN GENERAL     
    -----------------------
*/



/* 
    - ¿ Qué salio en ECMAScript6 del 2015 ?

                   LISTA AGRUPADA                          CAMBIOS 

                                                          
        1 - Parámetros y Concatenación     ---►      Parámetros - Params 

                                                     Concatenación - Template Literals ( ` ` ) , ( ${} )
                                                     
                                                     Multilinea    - "Enter" === "\n" 

        2 - Desestructuración               ---►      

        3 - Spread Operador                 ---►     Operdor nuevo. LLegua para ayudar a los arrays.
                                                     Porque eran un poco pesados

        4 - var, let y const                ---►     Incorporación de que "var" pasa a ultimo lugar,
                                                     "let" se utiliza mas en local y tambien "const". 

        5 - Arrow function                  ---►     Son Funciones anónimas.  Se utilizan dentro de "constantes"

        6 - Promesas                        ---►     Solución a los CallBack's Hell.
            
        7 - Clases                          ---►     Fue un bombaso. 
        

    - ¿ Qué salio en ECMAScript7 ?
    
            - INCLUDE - Validar la existencia de un valor dentro de un arreglo. 

            - Simplificar las Operaciones con Potencias 

    - ¿ Qué salio en ECMAScript8 ?

            - Convertir OBJETO a ARRAY 
            
                - Object.entries

                - Object.keys

                - Object.values

            - PADS     ---►     puedes añadir un string tanto al inicio como al final 

            - Trailing Commas
    
    - ¿ Qué salio en ECMAScript 9 ?

            - Operador de Reposo
*/






/****************************************************************************************************************************************************/

/* 
    --------------------
        ECMASCRIPT 6 
    --------------------
*/



/*
    --------------------------------------
        1 - PARÁMETROS Y CONCATENACIÓN    
    --------------------------------------
*/




/*
    ---------------------------------
        1.1 - PARÁMETROS - PARAMS  
    ---------------------------------
*/


// OLD - CASO VIEJO 
    function parametros_OLD (nombre, anyo, country) 
            {                                                           // Esto son casos de como se trataba los parámetros anteriormente
                nombre = nombre || 'Juan';                              // Parámetros con un "string" 
                var anyo = anyo || 32;                                  // Parámetros con un valor  "númerico" 
                console.log(nombre, anyo, country);
            }


// ECMASript6 - NUEVA FUNCIONALIDAD 
    function parametros_ES6 (nombre="Juan", anyo = 32, country)         // Con la nueva funcionalidad podiamos tratar asi "nombre = Juan", etc. 
        {
            console.log (nombre,anyo);                                  // Visualizar por consola.
        }


//LLAMADA
parametros_OLD();
parametros_ES6();
parametros_ES6("Pep",23);




/*
    -----------------------------
        1.2 - CONCATENACIONES
    -----------------------------
*/


// VIEJO - CASO NORMAL
    let hola = "Hola";
    let mundo = "Mundo";
    let frase = hola + " " + mundo + "!";               




// ECMAScritp 6 
    let frase_ES6 = `${hola} ${mundo}!`;              // En ES6 aparece los "Template Literals"
                                                      //      - con comillas invertivas  ``
                                                      //      - y con las inclusiones de  ${}
      
console.log(frase);
console.log(frase_ES6);






/*
    ---------------------------------------------
        1.3 - MULTILIENAS vs TEMPLATE LITERAL
    ---------------------------------------------
*/



// MULTILINEAS 
let frase_Antigua = "Esta es una frase. \n" + "Aqui la otra frase. \n";

//ES6 - TEMPLATE LITERAL
let frase_Nueva = `Esta es una frase.               
                   Aqui la otra frase.`;              // Ya lee "enter" ya lee como "\n" salto de linea

console.log(frase_Antigua);
console.log(frase_Nueva);






/*
    ---------------------------
       2 - DESESTRUCTURACIÓN
    ---------------------------
*/


// CASO VIEJO - OBJETO
let persona = 
    {
        nombre : "Miquel",
        edad : 50
    };

console.log("Antes de ES6 ->", persona.nombre, persona.edad);




// ECMASCRIPT 6 -  DESECTRUCTURACIÓN - OBJETO
let {nombre,edad} = persona;                               // Luego ECMAScript6 trae la Desectructuración.

console.log(`Despues de ES6 -> ${nombre} ${edad}`);        // "nombre" y "edad" vienen del objeto "persona"








 


/****************************************************************************************************************************************************/

  
/*
    ---------------------------
        3 - SPREAD OPERATOR
    ---------------------------
*/


// ARRAY BASE 
let equipo_1 =["Pep", "Pedro","Jose"];                     
let equipo_2 =["Ana","Joana","Maria"];



// CASO VIEJO - ARRAY DEFINITIVO 
let partido =["David","Pep", "Pedro","Jose","Ana","Joana","Maria"];        // Se agregua al árbitro "David"

console.log("Antes de ES6 --->", partido);                                 // Visualizar por consola 



//ECMAScript6 - SPREAD OPERATOR                                            // Operdor nuevo. LLegua para ayudar a los arrays. 
let partido_ES6 = ["David", ...equipo_1, ...equipo_2];                     // Porque eran un poco pesados o podrian ser pesados.

console.log("Despues de ES6 --->", partido_ES6);                           // Visualizar por consola 





/*
    -----------------------------
        4 - VAR - LET - CONST
    -----------------------------
*/





/*
    ---------------------------
        5 - ARROW FUNCTIONS
    ---------------------------
*/

/*
    - Los ARROW FUNCTION inicialmente son Funciones anónimas.  
    
    - En ECMASCript se utilizan dentro de "constantes"

    - Las funciones no se puede repetir. las constantes obligan a que no se repitan.
*/



// ARREGLO - ARRAY 
const personas =   
    [
        {nombre: 'Pedro', edad: 50},                        // OBJETO 1        
        {nombre: 'Juana', edad: 40}                         // OBJETO 2.    
    ];

  
// CASO VIEJO - COMO SE HACIA ANTES
let grupo = personas.map(function(item)                     // ".map" es un metódo de un ARRAY. Saca el "nombre" en este caso
    {                                                       
        console.log("Antes de ES6 --->", item.nombre);
    });


    
// CON ECMAScript6 TENDRIAMOS                               
let grupo_ES6 = personas.map((item) => console.log(`Despues de ES6 ---> ${item.nombre}`));

                            // Se cambia "function" por la flecha "=>"



/*
    --------------------
        6 - PROMESAS
    --------------------
*/


/*
    -------------------
        7 - CLASES
    -------------------
*/




/****************************************************************************************************************************************************/

/* 
    --------------------
        ECMASCRIPT 7 
    --------------------
*/


/* 
    --------------------
        INCLUDE
    --------------------
*/


// INCLUDE - VALIDAR LA EXISTENCIA DE UN VALOR 
let numeros = [1,2,3,4,5,6,7,8,9];                     // Validar si hay un elemento dentro de un arreglo

if (numeros.includes(3))                               // Include es la manera de  Validar la existencia de un valor 
    {                                                  // dentro de un arreglo.     
        console.log ("correcto");
    }
else
    {
    console.log ("correcto");
    }






/* 
    -------------------------------------------------
        SIMPLIFICAR LAS OPERACIONES CON POTENCIAS
    -------------------------------------------------
*/


let base =4;
let exponente =3;
let resultado = base ** exponente;                    // 4 (base) elevado a las 3(exponente)

console.log(resultado);





/****************************************************************************************************************************************************/

/* 
    --------------------
        ECMASCRIPT 8 
    --------------------
*/


/* 
    ------------------------------------------------------
        OBJECT.ENTRIES - OBJECT.KEYS  -  OBJECT.VALUES
    ------------------------------------------------------
*/



// OBJETO 
const datos =
    {
        frontend: "Juan",                            
        backend: "Carlos",                          
        designer: "Ana",                           
    }



// CONVERTIR EL OBJETO EN UN ARRAY  


// CASO 1 - UN ARRAY DE TODO EL CONTENIDO
    const nuevo_Arreglo = Object.entries(datos);         // "Object.entries"  permite convertir el "objeto" en un "array"

    console.log(nuevo_Arreglo);                          // Visualizar por consola el Array D 


    // CANTIDAD DE ELEMENTOS  HAY EN EL ARRAY
    console.log(nuevo_Arreglo.length);                   // Antes no podiamos utilizar ".length" por ser un objeto


// CASO 2 - UN ARRAY DE LLAVES
    const key = Object.keys(datos);
    console.log(key);                                    //solo un array de llaves 


// CASO 2 - UN ARRAY DE VALORES
    const values = Object.values(datos);
    console.log(values);                                 // solo un array de valores






/* 
    ------------
        PADS
    ------------
*/


// 1ER CASO DE PADS CON VARIABLE
    const mundo = "mundo";

    // AÑADIR STRING AL PRINCIPIO
    console.log(mundo.padStart( 10, "hola " ) ) ;         // padStart("número exacto de caracteres que necesito", "hola" )       
                                                          // "mundo" (5) + espacio (1) + "hola" (4)   = 10

    // AÑADIR STRING AL FINAL
    console.log(mundo.padEnd( 50 , "*" ) ) ;              // padEnd("número exacto de caracteres que necesito", "hola" )   
                                                          // Antes se tenia que hacer un "for" para añadir el "*" asterisco

// 2DO - CASO DE PADS CON STRING DIRECTO
console.log("España".padEnd(12, "----"));





/* 
    -----------------------
        TRAILING COMMAS
    -----------------------
*/


// OBJETO
const obj = {
	nombre: 'Toni',            // dejamos las comas al final de un OBJETO  sin provocar el error.
}



/* 
    --------------------
        ECMASCRIPT 9
    --------------------
*/


// Operador de Reposo