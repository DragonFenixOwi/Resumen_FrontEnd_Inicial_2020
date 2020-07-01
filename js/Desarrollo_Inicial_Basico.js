/* 
    ----------------------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        RESUMEN CONTENIDO JAVASCRIPT 2020 - NIVEL BÁSICO 
    ----------------------------------------------------------
*/






/*
    -----------------------------------------
        TIPOS DE DATOS (VAR - LET - CONST)
    -----------------------------------------
*/


/*
    IDEAL
        - Utilizar "var" en el SCOPE GLOBAL.
        - Utilizar "let" en Bloques locales (Bucles, funciones, etc.) o SCOPE LOCAL. 
        - Utilizar "const" para evitar malas prácticas como "MAGIC NUMBER"

    - ¿Cual es mejor usar?
        - Segun JavaScript, la idea es reducir el alcance.
        - Que una variable tenga largo alcance es una "Mala practica".
*/





/* 
    --------------------------------------
        VARIABLES LARGO ALCANCE - "VAR"
    --------------------------------------
*/


//VALOR  NÚMERO
var numero = 10;


// STRINGS
var numero = 'owilapesada';     // En HTML es "obligatorio" las comillas dobles "". En JavaScript da igual (simples o dobles).


//VALOR BOOLEANOS  
var verdadero = true; 
var falso  = false;



/* 
    - VALORES TIPO OBJETO
        1ro. Lista o Array o Arreglo 
        2do. Objeto 
*/ 

// ARRAY
var lista_array_arreglo = [23,45,12,89,90];

// OBJETO
var objeto = 
    {
        nombre: 'Toni',
        ciudad: 'Llumajor',
        cp: 07620
    }





/* 
    -----------------------------------------
        VARIABLES DE CORTO ALCANCE - "LET"
    -----------------------------------------
*/


// En el Scope Global "var" y "let" son iguales 
var i1 = 1;
let i2 = 1;




/* 
    -------------------------------------------
        CONSTANTE DE CORTO ALCANCE - "CONST"
    -------------------------------------------
*/



// La constante no se puede asignar otra vez. 
const LETRA =1;                     // Variable inicial declarada.
LETRA = 2;                          // ERROR - No se puede reasignar

//ESTO NO SE PUEDE HACER ES UN ERROR
const NUMERO = [1,2,3];             // Variable inicial declarada.
NUMERO = [12,12,33];                // ERROR - No se puede reasignar


// PERO SI se puede insertar "AL FINAL-ultimaposición" un elemento nuevo dentro del array.
NUMERO.push(4); 











/***************************************************************************************************************/

/*
    ------------------
        FUNCIONES
    ------------------
*/


/*
    ------------------------------------------------------------------
        TIPOS DE FUNCIÓN SEGÚN  SINTAXIS  (DECLARATIVAS Y EXPRESIVAS)
    ------------------------------------------------------------------
*/


// FUNCIONES DECLARATIVAS (Son las más utilizadas)
function nuevaFuncion ()
        {
            // Se crea de manera simple la Función.
            return "Hola";
        }




//FUNCIONES EXPRESIVAS 
var nuevaFuncion = function  ()
        {
            // Se asigna una "Función" dentro de una "variable" 
            return "Hola";
        }


// LLAMDA A LA FUNCIÓN. 
nuevaFuncion();           //Si no se declara y ejecuta la llamada. La funciones "Declarativas o Expresivas" no se ejecuta.






/*
    ------------------------------------------
        ESTRUCTURA BÁSICA DE UNA FUNCIÓN 
    ------------------------------------------
*/


function hola (/*PARAMETROS*/ persona )
    {

    }

hola (/*ARGUMENTOS*/'Pepe');       // llmada de la función "hola" 





/*
    ------------------------------------------------
        FUNCIÓN CON PARAMETROS Y ARGUMENTOS BÁSICO
    ------------------------------------------------
*/


//FUNCION PARA SUMAR
function suma(valor1,valor2)
    {
        console.log(valor1+valor2);
    }

var suma1 = suma(45,456);
var suma2 = suma(345,12);
var suma3 = suma(789,89);








/*****************************************************************************************************************/

/*
    -----------------------------
        SCOPE GLOBAL Y LOCAL
    -----------------------------
*/


//SCOPE --> puede definirse como el alcance que una variable tendrá en tu código.


//SCOPE GLOBAL (Tiene acceso en cada parte del código). Se declaran como  VARIABLES GLOBALES.
var ciudad = 'Palma';
var cp =07010;



//SCOPE LOCAL (Tiene acceso solo dentro del Bloque de la Función "entorno"). 
function entorno(valor1,valor2)
    {
        // Tanto los parámetros "valor1" y "valor2", como la variable "cp". Son "VARIABLES LOCALES"
        var cp = 07010;       
        console.log(cp + " " + ciudad);  // Del LOCAL se puede trabajar con variables del GLOBAL-. Pero no viceversa.
    }












/*****************************************************************************************************************/

/*
    --------------------
        HOISTING
    -------------------
*/


/*
    - Los casos de HOISTING. Ocurren por una "mala practica". Y es un problema. 
    - Las Buenas Practicas se realizan cuando las "variables globales y las funciones" se declaran en la parte
    superior de la linea de código.

*/


// EJEMPLO DE HOISTING. 
console.log(pueblo);          // El navegador asigna "undefined" a pueblo. Y eso es lo que se ve.

var pueblo = 'Algaida';
console.log(pueblo);          // Pero despues, al asignarle "Algaida". Ya se ve ese valor de string. 



/*
    - ¿Pero que hace realmente nuestro navegador cuando se encuentra con esto?
        - "console.log()"  --> Cuando encuentra una variable que no la han declarado.
            - A esa variable, le asigna el "undefined"
 */

// ASIGNACIÓN DEL NAVEGADOR 
var pueblo = "undefined"; 










/*******************************************************************************************************************/

/* 
    -------------------------
        BUENAS PRACTICAS
    -------------------------
*/


/* 
    -------------------------------
        EVITAR LOS "MAGIC NUMBER" 
    -------------------------------
*/


/*----------------------------------------------CODIGO JUNIOR-------------------------------------------------*/
//objetos

var carlos = 
    {
        nombre : 'Carlos',
        apellido : 'Torres',
        profesion : 'Arquitecto',
        dni : '6536784321',
        edad : '43',
        hijos : false,
        español: true,
        trabajo_activo : false,
        carnet_coche : true, 
        linkedin: true
    }

// vamos a averiguar "si una persona es mayor de edad"
function mayor_edad(persona)
    {
        if(persona.edad >= 18)   //MAGIC NUMBER - Haz sacado de la manga el numero "18"
            {
                document.write(`${persona.nombre} es mayor de edad`);
            }
        else
            {
                document.write(`${persona.nombre} no es mayor de edad`);
            }
    }








/* ------EN EL CODIGO DE ARRIBA HAY BASTANTES FALLOS---------*/ 



/*----------------------------------------CODIGO SENIOR--------------------------------------------------*/

/* 
    BUENAS PRACTICAS 
        - Evitar "MAGIC NUMBER"  
        - Intentar Trabajar siempre  con una "ESTRUCTURA MODULAR"

*/

/*
    ---------------------------
        VARIABLES GLOBABLES
    ---------------------------
*/
const MAYORIA_EDAD_ESPANYA = 18;

var carlos = 
    {
        nombre : 'Carlos',
        apellido : 'Torres',
        profesion : 'Arquitecto',
        dni : '6536784321',
        edad : '43',
        hijos : false,
        español: true,
        trabajo_activo : false,
        carnet_coche : true, 
        linkedin: true
    }


/*
    ------------------
        FUNCIONES
    ------------------
*/
// Funcion logica de la mayoria de edad
function mayorEdad(persona)
    {
        return persona.edad >= MAYORIA_EDAD_ESPANYA;
    }

//Funcion imprimir 
function imprimir(persona)
    {
        if (mayorEdad(persona)) //si la funcion "mayorEdad" hace un return "true" entra al if
            {
                document.write(`${persona.nombre} es mayor de edad`);
            }
        else
            {
                document.write(`${persona.nombre} no es mayor de edad`);
            } 
        }


/* 
    ------------------------
        FUNCIÓN PRINCIPAL
    ------------------------
*/


// funcion principal
function personaEsmayoEdad(persona)
        {
            imprimir(persona);
        }







/*******************************************************************************************************************/

/* 
    -------------------------
        DEBIL TIPADO
    -------------------------
*/

/* 
    - Son Cosas raras que hace JavaScript. Que si no sabes te puedes quedar un poco loco.
    - Son casos en el que hemos escrito mal pero igual busca un camino para ejecutar una operación. 
*/


10 + "10";
//"1010"         - Resultado

/*
    - ¿Que ocurre aqui?
        - Pues, es imposible sumar un "número" y un "string". Por lo que 
        - Utiliza el simbolo "+" para concatener.
        - Por eso, el resultado no es un numero. 
        - No se suma, se concatena 
*/


10 * "10";
//100          - Resultado

/* 
    - Mientras que cuando ve un multiplicador. 
    - Es lo que hace es. Mira. Esta claro que no me quiere multiplicar. Pues entonces, lo voy a multiplicar
    de verdad.
    - 
*/



/* true = 1    JavaScript lo suma*/
10 + true;
//11            - Resultado



/*
    - Hay otros lenguajes que si ocurre estos casos. No lo va hacer.
        - No va a buscar otro camino para hacer algo. 
        - Sino que va a implantar un enorme  error en la pantalla o en consola o en donde sea.
        - Y van a quedar ahi quietos, hasta que se resuelva eso. 
        - Eso se llama FUERTE TIPADO.
*/








/*******************************************************************************************************************/


/* 
    ---------------------------------
        COERCIÓN EN JAVASCRIPT
    --------------------------------
*/



