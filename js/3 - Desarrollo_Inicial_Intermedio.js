/* 
    --------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        RESUMEN CONTENIDO JAVASCRIPT 2020
    --------------------------------------------
*/








/* 
    ---------------------------------
        VIZUALIZACIÓN DE DATOS
    ---------------------------------
*/



//VISUALIZACIÓN DEL RESULTADO FINAL

// NAVEGADOR  
document.write(` la letra que corresponde al DNI de número
               "${valor_dni}" es : "${Letra_DNI[valor]}" <br> <br>              
                 Entonces el DNI es: "${valor_dni} }"`);                  // Salto de línea con    ---►     <br>

// Visualización del resultado final en consola
console.log(` la letra que corresponde al DNI de número
            "${valor_dni}" es : "${Letra_DNI[valor]}" \n \n
             Entonces el DNI es: "${valor_dni}}"`);                       // Salto de línea con    ---►     \n 


//  CARACTER ESPECIALES     
'primera linea \n segunda linea \n'                                       //  salto de línea    ---►         \n
                                                                          //  tabulación        ---►         \t

// CARACTER DE ESCAPE 
var parrafo = "Libro de \"Autor\" de 1988";                               // Escapar de doble comillas
console.log(parrafo);

//OTROS CASOS 
document.write( parrafo + "<br>"); 
document.write(nombre.toUpperCase() + "<br>");


    













/****************************************************************************************************************************************/


/* 
    -----------------
        ARRAY []
    -----------------
*/

var mascotas = ["perro", "gato", "serpiente"];
console.log(mascotas.length); // Nos devuelve el tamaño del array

// acceder a los datos guardados en el ARRAY
mascotas[0]; // accedo a perro
mascotas[1]; // accedo a gato
mascotas[2]; // accedo a serpiente

// insertar "AL FINAL-ultimaposición" un elemento nuevo dentro del array de mascotas
mascotas.push("canario");
mascotas.push("largato");

//pop  - eliminar elementos del final. Es la que se utiliza mas
mascotas.pop();

// unshift  -Inserta elementos  desde el "INICIO"
mascotas.unshift("alcon milenario");

//shift  - elimina elementos desde el principio
mascotas.shift();

//indexOP - me dice en que posicion esta "gato"
mascotas.indexOf("gato");
console.log(mascotas.indexOf('gato'));

    













/****************************************************************************************************************************************/


/* 
    ---------------------------
        MÉTODOS DE ARRAY [ ]
    ---------------------------
*/

var articulos = 
    [
        { nombre: "aspiradora", precio: 320 },
        { nombre: "x-box", precio: 520 },
        { nombre: "micro", precio: 150 },
        { nombre: "secadora", precio: 440 },
        { nombre: "pc", precio: 1320 },
    ];

// TODOS TIENEN EL OBJETIVO DE "BUSAR DENTRO DE TODO EL ARRAY"




/* SINTAXIS */
var Imprimir_Precios_menores_400 = articulos.filter(function(articulo)
    {
        return articulo.precio<400;
    })
console.log(Imprimir_Precios_menores_400);





// FILTER --> valora si es verdero o falso. No estropea el array padre original y crea un nuevo array
articulos.filter();

// MAP --> saca el nombre de los articulos. No se estropea el original y crea uno nuevo.
articulo.map();

// find --> nos encuentra el objeto y nos devuelve el objeto
articulo.find();

// FOREACH --> No crea ningun nuevo array y tampoco modifica  el array original
articulo.forEach();

// SOME --> genera un booleano y no toca el array el original. Nos devuelve un "true" o un "false"
articulo.some();

    













/****************************************************************************************************************************************/


/* 
    -----------------------------------------------------------
        SINTAXIS ENTRE FUNCIONES (PARÁMETROS) Y OBJETOS { }
    -----------------------------------------------------------
*/


/* ********** OBJETO ********** */
var persona = 
    {
        nombre: "Juan",                     // Propiedad 1  - Atributo 1
        edad : 33,                          // Propiedad 2  - Atributo 2
        altura : 1.77,                      // Propiedad 3  - Atributo 3
    };




/* ********** FUNCIONES ********** */

// 1ER CASO - PARÁMETRO NORMAL CON NOMBRE ALEATORIO
function Pantalla (humano)
    {
        var humano = humano.nombre; 
        console.log(humano);                  // Imprime en consola "Juan"
    }



// 2DO CASO - PARÁMETRO ENTRE LLAVES {} INDICANDO UN ATRIBUTO 
function Pantalla_2 ({edad})        
    {                                        // En el parámetro ya se indica con llaves {} El "nombre de la propiedad del objeto"
        console.log(edad);                   // Imprime en consola el número "33"  
    }



// 3ER CASO - SENTENCIA ENTRE LLAVES {} INDICANDO UN ATRIBUTO
function Pantalla_3 (individuo)
    {
        var {nombre} = individuo;             // Es la misma opción que  tener  " var individuo = individuo.nombre ; "" 
        console.log(nombre);                  // Imprime en consola "Juan"
    }




/* ********** LLAMADA DE LA FUNCIÓN ********** */
Pantalla(persona);
Pantalla_2(persona);
Pantalla(persona);

 




/* 
    -------------------------------------------------------------------------------------
        COMPORTAMIENTO DE LOS ATRIBUTOS DE UN  OBJETOS { } EN EL SCOPE LOCAL Y GLOBAL
    -------------------------------------------------------------------------------------
*/  

/* ********** OBJETO ********** */
var persona = 
    {
        edad : 73,                          // Propiedad 1  - Atributo 1
    };




/* ********** FUNCIONES ********** */

// 1ER CASO - COMPORTAMIENTO POR DEFECTO - MODIFICA EL SCOPE GLOBAL 
function Pantalla (edad)
    {
        persona.edad +=1;                   // La sentencia del SCOPE LOCAL  modifica el Atributo (edad) del SCOPE GLOBAL 
    }                                       // Ahora en el objeto "persona" la "edad = 74"  


    
// 2DO CASO - OPERADOR DE PROPAGACIÓN - NO MODIFICA EL SCOPE GLOBAL 
function Pantalla_2 (persona)        
    {                                     
        return {                                // la llave no puede estar abajo. No es un Condicional. Debe estar pegado a return  
                ...persona,                     // Spread Operator --> realiza una copia del objeto
                edad: (persona.edad +=1)
            };
                              
    }











/* 
    ---------------------------------------
        COMPARACIÓN DE DOS  OBJETOS { }
    ---------------------------------------
*/


/*   ----- COMPARAR OBJETOS - ESPACIO DE MEMORIA  -------*/
var prueba01 = 
    {
        nombre :'Pepe',
    };

var prueba02 = 
    {
        nombre :'Pepe',
    };


//false. los objetos no estan comparando el contenido sino es el espacio de Memoria
prueba01==prueba02   //false

    













/****************************************************************************************************************************************/
M

/*
    -----------------------
        MÉTODOS STRINGS     
    -----------------------
*/

var apellido = 'Ferrà';


// CONVERTIR STRING A MINÚSCULAS 
apellido = apellido.toLowerCase();

// CONVERTIR STRING A MAYÚSCULAS 
apellido = apellido.toUpperCase();

// cantidad de carácteres que tiene un string
apellido = apellido.length;

    













/****************************************************************************************************************************************/


/*
    --------------------------------
        MODULO MATEMÁTICO - MATH     
    --------------------------------
*/


// RANDOM -->  Devuelve un núamero aleatorio entre el 0 y 1
Math.random();                                              




// RENDONDEAR NÚMERO CON DECIMALES

var resultado_Owi = (50.9 * 100 * 30.8) / 100;                    // Variable base. Sin utilizar Math

var resultado_Math = Math.round((50.9 * 100 * 30.8) / 100);       // utilizar Math.round, para redondear

var NuevoResultado = resultado_Owi.toFixed(5);                    // utilizar toFixed, control de decimales

var numero = parseFloat(NuevoResultado);                          // parseFloat devuelve a número con decimales

var numeroEntero = parseInt(NuevoResultado);                      // parseFloat devuelve a número sin decimales, número entero




// RANDOM CONTROLADA POR UN MÁXIMOS Y UNOS MÍNIMOS 

const numMax = 18;
const numMin = 1;

const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin);   
// CONSTANTE     Arrow F    ROUND ( RANDOM [0-1] * (  18   -   1   )  +  1   );  


// LLAMADA DE LA FUNCIÓN.
numRandom();

    













/****************************************************************************************************************************************/


/* 
    ------------------------
        CONDICIONALES
    ------------------------
*/

// CONDICIONALES ---- > lo que esta adentro del parentesis condiciona una acción

/*
    ----------------------------
        CONDICIONAL IF BÁSICO 
    ----------------------------
*/

var num =1;

if (true)
    {
        console.log('Dime Buenos dás');
    }

if (false)
    {
        console.log('No me imprime Buenos dás');
    }





/*
    ----------------------------------------
        CONDICIONALES IF-ELSE  Y   ELSE-IF
    ----------------------------------------
*/


var tiempo = 'sol';       // la variable num se convertira depende del valor que le pongamos


// si la condición que esta entre parentesis es verdad ejecuto lo que esta adentro del "if".
if (tiempo == 'sol')  
    {
        console.log('Buenos días');
    }
else if (tiempo == 'nublado')   // pero despues, sigue ejecutando las condionales que siguen,
    {
        console.log(' Esta nublado, no salgas a la calle');
    }
else
    {
        console.log(' Buenos Noches');
    }




/* 
    ----------------------------
        OPERADOR TERNARIO IF
    ----------------------------
*/

//1er CASO- IF BÁSICO

var numero = 10; 

if(numero === 10)
    {
        var resultado = "Soy un diez";
    }
else 
    { 
        var resultado = "Nos soy un diez";
    }

console.log(resultado);





//2do  CASO -  OPERADOR TERNARIO IF

var numero = 10;

/*
    - "condición"     ?   "lo que va a ser verdad "   :  "lo falso"
    - "numero === 10" ?         "Soy un diez"         :  "No soy un diez"
*/
var resultado = numero === 10 ? "Soy un diez" : "No soy un diez";

console.log(resultado);







/*
    ------------------------
        CONDICIONAL SWITCH
    ------------------------
*/


/*
    - Tiene  diferentes casos, a partir de  una variable. Ejemplo, la variable "tiempo"
    - Los "case (condición)" establecen, cuando se ejecuta cada linea de codigo.   
    - Si una condición se cumple, se ejecuta lineas de codigo. En el que pueden existir "iF", "funciones", "for", etc.
    -  Poner un "break" en cada "case" es oblitatorio.
        - Si un "case" se cumple. El "break" al final rompe o corta todos los "cases" o el default del switch.
        - El break da por finalizada la ejecución del condicional "switch".     
*/

var tiempo = 'sol'; 

switch(tiempo)
    {
        case 'sol':                       //Sintaxis: se utiliza ":" dos puntos
            console.log('');
            idiomas();                    // Se puede añadir Funciones. Por ejemplo uno que devuelva "buenos dias" en 20 idiomas. 
            break;                        // Aquí si se cumple "sol". Rompemos "switch" y nos vamos.   
        case 'nublado' && 'tarde':        // Al romper en el case "sol" no pasa por los otros casos (nublado, luna)
            console.log('No salgas a la calle');
            break;                  
        case 'madrugada'>'luna':
            console.log('Buenas noches');
            break;
        default:                          //(opcional) : Si ningun case se cumple. Se ejecuta "default".  
            console.log('Estamos en Jupiter');
    }















/****************************************************************************************************************************************/


/* 
    --------------
        BUCLES
    --------------
*/



/* 
    ------------------
        FOR BÁSICO
    ------------------
*/

/*
    for (variable, Condición, iterador)
        - iterador o contador ("i++"" = "i=i+1")
*/

for (var i=0 ; i<20; i++)
    {
        // Mientras "i sea menor a 20" no salimos de la ejecución de las lineas del "for". 
    }






/* 
    ----------------------------
        "FOR - OF" ESPECIAL
    ----------------------------
*/

/* 
    -------------------------------------------------------------------------------------------------
        BUCLE "FOR - OF" ESPECIAL PARA UN ARRAY -  lECTURA Y UTILIZACIÓN DEL CONTENIDO DE UN ARRAY
    -------------------------------------------------------------------------------------------------
*/


//ARRAY 
var coches = ['Opel', 'Peugeot', 'seat', 'toyota']; 

//Función para vizualizar por consola
function marcasCoches2(coches)
    {
        console.log (`este fue uno de mis coches,${coches}`);
    }


for (var coche of coches)
    {
        /* 
            - Se asigna a "coche" el contenido del array "coches". 
        */
            marcasCoches2(coche);
    }




// FOR - OF  -->  se emplea para estar iterando un array 
// FOR - IF  -->  esta mas indicado en generico.  





/* 
    --------------------
        BUCLE - WHILE
    --------------------
*/



/*
    --------------------------------------------
        WHILE ESTRUCTURA ESTANDAR  - BANDERA
    --------------------------------------------
*/


var coches2 = ['Opel','seat' , 'seat', 'toyota'];

function marcasCoche(coches2)
    {
        console.log(`este fue uno de mis coches, ${coches2} `)
    }


var i = 0;                      // Bandera 

while (coches2.length > i)
    {
        var garaje = coches2[i];
        marcasCoche(garaje);
        i++;
    }
    







/* 
    ----------------------------------------
        EJEMPLO DE BUCLE INFINITO -WHILE
    ----------------------------------------
*/

var edad = 15;                          //Este pequeño codigo consume toda tu memoria RAM. Y congela tu computadora. 

while (edad < 18)               
    {
        console.log('Eres menor de edad');        
    }







/* 
    -------------------------------------------
        EJEMPLO DE BUCLE NO INFINITO -WHILE
    -------------------------------------------
*/


var coches2 = ['Opel','seat' , 'seat', 'toyota'];


//FUNCIÓN IMPRIMIR EN CONSOLA
function marcasCoche(coches2)
    {
        console.log(`este fue uno de mis coches, ${coches2} `)
    }
        

//FUNCIÓN PRINCIPAL
while (coches2.length >0)
    {
        var garaje = coches2.shift();           // La condición de while termina gracias al método "shift()"
        marcasCoche(garaje);                    
    }










/* 
    ------------------------------------
        EL OTRO WHILE - DO WHILE
    ------------------------------------
*/



do                                  
    {
        i++;                        // Siempre va a generar una sentencia.
        consle.log('hola');   
    } while(i<5);                   // Luego de la sentencia. Ejecuta el while

    













/****************************************************************************************************************************************/


/*
    -------------------------------------
        ARROW FUNCTION (=>) - 4 FASES
    -------------------------------------
*/



//FUNCION EXPRESIVA BÁSICA 
const MAYOR_EDAD = function (persona)                            // Se asigna una función a una constante "const". Con PARÁMETRO (persona)
        {
            return persona.edad === MAYORIA_EDAD_ESPANYA;
        }




/*
    ARROW FUNCTION

        -  Son 4 formas de recortar el código. Pero "NO" todas las funciones encajan con el Arrow Function
        
        - Son Funciones anónimas.  
        
        - Se utilizan dentro de constantes.
*/



// MODIFICARLO HACIA ARROW FUNCTION  - 4 FASES



// FASE 1  
const MAYOR_EDAD = (persona) =>                                               //  Se cambia    "function"   por la flecha    "=>" 
        {
            return persona.edad === MAYORIA_EDAD_ESPANYA;
        }


// FASE 2   
const MAYOR_EDAD = persona =>                                                 // Se eliminar el parentesis ().  
        {
          return persona.edad === MAYORIA_EDAD_ESPANYA;
        }


// FASE 3  
const MAYOR_EDAD = persona => persona.edad === MAYORIA_EDAD_ESPANYA;          // Se elimina las llaves {} y el return



// FASE 4 
const MAYOR_EDAD = ({ persona }) => edad === MAYORIA_EDAD_ESPANYA;            //  Entre {} indicamos el atributo 


