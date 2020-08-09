/* 
    ----------------------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        RESUMEN CONTENIDO JAVASCRIPT 2020 - NIVEL BÁSICO 
    ----------------------------------------------------------
*/



/*
    ------------------------
        VALRORES BOOLEANOS
    ------------------------
*/



/*
    - ¿Qué se considera un valor FALSO y que se consifera un valor  VERDADERO dentro de los BOOLEANOS?    
            # FALSO
                - Datos que directamente son Falsos 
                    - false
                    - 0 
                    - Undefined
                    - " "                       un dato o string vacío es Falso. 
                    - Null                  
                    - NaN                       No es un número. Tambien es falso. 
                - Datos númericos
                    - 3>10                      3 No es mayor a 10. Esto tambien es falso.

            # TRUE 
                - []                    Cualquier inicio de un array es verdadero
                - {}                    Cualquier objeto es verdadero
                - 1 
                - 2,3,4                 todos los numero que no son cero 
                - Function () {}        una funcion es verdadero
* /


//- Si en algun momento tenes alguna duda. La Función con palabra reservada "Boolean()" las puede aclarar












/********************************************************************************************************************************/


/*
    -------------------------------------------------
        TIPOS DE DATOS (VAR - LET - CONST) Y VALORES
    -------------------------------------------------
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
var numero = 'owilapesada';     /*  - En HTML es "obligatorio" las comillas dobles "". En JavaScript da igual 
                                        - (simples o dobles). Pero es bueno utilizar simples para diferenciar */


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












/********************************************************************************************************************************/

/*
    -----------------
        OPERADORES 
    -----------------
*/


/*
    TIPOS DE OPERADORES 

        # OPERADORES BÁSICAS
            +                       Tiene dos funciones. Con números "suma" y con String "une-concatena"
            -                       Resta
            *                       Multiplica
            /                       Divide
            %                       Operadore de Resto. 

        # OPERADORES DE IGUALDAD 
            =                       Operador de Asignación.
            ==                      Operador de Comparación. No mira el tipo de valor
            ===                     Operador de Comparación. Estrictamente iguales. Mira el "valor" o contenido, como el "tipo" de valor
        
        # OPERADOR DE DESIGUALDAD
            =!                      Operador de "No es igual"
            ==!                     Estrictamente desiguales. Devuelve "true" si no son iguales ni en tipo, ni en contenido o valor
        
        # OPERADORES DE ASIGNACIÓN 
            =                       Asigna un valor a una varieble
            +=                      Ejemplo mas abajo. Del tipo incremental. Asigna una operación de suma. 
            *=                      Asigna una operación de multiplicación de un valor a una misma variable.
            -=                      Asigna una operación de resta de un valor una misma variable.
            /=                      Asigna una operación de división de un valor a una misma variable.
        
        # OPERADORES DE COMPARACIÓN 
            >                       Mayor que
            <                       Menor que 
            >=                      Mayor o igual que. (el signo igual siempre se pone despues)
            <=                      Menor o igual que.
*/





//OPERADORES DE IGUALDAD Y DESIGUALDAD
var nombre = 'asignamos a nombre'

// == 
5 == '5'                 //  No compara el tipo 
//true                       Nos sale tre. ¿por qué? Porque el "doble igual" no mira el tipo de valor. Solo mira el valor

// ===
5 === "5";               //  Compara el tipo (String o número) y el contenido (5 o 6 o 7)
// False                     Mira el "valor" como el "tipo de valor".  

// !=
5 != 5;                  //  Todo lo que asignemos una exclamación hacia abajo "!". Le asignamos un "no"
//false




// OPERADORES DE ASIGNACIÓN. CASO "+="
var numero = 10;
numero = numero + 1;    //11
numero +=1;             //12        Aqui podemos modificar el valor sumado. Por ejemplo en vez de 1 puede ser 5.
numero++;               //13        Aqui siempre le sumamos 1 
numero--;               //12        Aqui siemper le restamos 1  




//OPERADORES DE COMPARACIÓN 
5 > 10;                 // false. 5 no es mayor a 10

5 < 10;                 // true.  5 si es menor a 10 

5 >= 5;                 //true    5 es igual a 5

5 <= 5;                 //true    5 es igual a 5

















/********************************************************************************************************************************/

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
nuevaFuncion();           /* Si no se declara y ejecuta la llamada. La funciones "Declarativas o Expresivas" 
                            no se ejecuta.*/







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







/*
    -----------------------------------------
        FUNCIONES - PALABRAS RESERVADAS
    -----------------------------------------
*/

//Las letras mayusculas "S" de String y "N" de Number son obligatorias.

Number("10");       // Convierte el string "10" en un número 10.

String(10);         // Convierte el número 10 en un string "10".

Boolean();          // Función que me devuelve  Verdadero o Falso. 













/********************************************************************************************************************************/
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












/********************************************************************************************************************************/
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










/********************************************************************************************************************************/

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







/********************************************************************************************************************************/

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
    - Re-convierte el string "10" en un número para poder multiplicar. 
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








/********************************************************************************************************************************/



/* 
    ----------------------------------------
        COERCIÓN (IMPLICITA Y EXPLICITA)
    ----------------------------------------
*/

// COERCIÓN --> Se define como la acción de forzar un "valor" a que se comporte como otro tipo "valor"

/*
    - Un ejemplo de la Importancia de  la Coerción Explicita. Podriamos encontrar en :
        - El FORMULARIO de una web. 
    - Cada vez que le piden el teléfono, edad  o cualquier dato númerico. 
        -El "imput" que recoge esa información a través de HTML. Y las convierte todas a String.
    - Por ejemplo. Si yo quiero utilizar esa edad . 
        - Y la  quiero utilizar, para poder realizar una simple resta y saber en que año nació. 
        - Para poder trabajar. Primero necesito una COERSIÓN EXPLICITA  de ese dato. Para poder elevorar una resta.  
*/





// COERCIÓN IMPLICITA  - las que JavaScript genera por si solo.
var implicita = 10 + "10";

/*
    - El resultado de la concatenación de  10(número) + "10"(string). Se sabe que es "1010" 
        - Porque se ha pasado de un "número" a un "string" por el DEBIL TIPADO. 
        - Ha re-convertido un valor para conseguir algo. Y eso lo hace de manera automática
    
    -  Y a esto se le llamada "Coerción Implicita"
        - JavaScript transforma valores. Para conseguir ese DEBIL TIPADO. 
*/




//COERCIÓN EXPLICITA - son las que nosotros las obligamos. Porque necesitamos que trabajen de esa manera
var explicito = 10 + Number("10");
// 20

/*
    - Nosotros, a través de Number, obligamos a ese string a convertirse en un número. 
    - Ahora mismo ese string "10" no era un número, era una palabra. Por mucho que haya un 1 y un 0
*/



var explicito = String(10) + "10";     // Se convierte el número 10 a string. Para concatenarlas.
// "10" + "10"
// "1010"





