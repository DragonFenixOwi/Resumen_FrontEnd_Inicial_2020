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

document.write(nombre.toUpperCase() + "<br>");
document.write("<br><br>");

document.write(` la letra que corresponde al DNI de número
        "${valor_dni}" es : "${Letra_DNI[valor]}" <br> <br>
        Entonces el DNI es: "${valor_dni} }"`);

// Visualización del resultado final en consola
console.log(` la letra que corresponde al DNI de número
        "${valor_dni}" es : "${Letra_DNI[valor]}" \n \n
        Entonces el DNI es: "${valor_dni}}"`);


/* CARACTER ESPECIALES - \n \t   */
'primera linea \n segunda linea \n'

/* CARACTER DE ESCAPE - Escapar de doble comillas*/
var parrafo = "Libro de \"Autor\" de 1988";
console.log(parrafo);





/***************************************************************************************************/

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






/***************************************************************************************************/

/* 
    ---------------------------
        METODOS DE ARRAY [ ]
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





// el filter valora si es verdero o falso. No estropea el array padre original y crea un nuevo array
articulos.filter();

// map saca el nombre de los articulos. No se estropea el original y crea uno nuevo.
articulo.map();

// find - nos encuentra el objeto y nos devuelve el objeto
articulo.find();

// FOREACH - No crea ningun nuevo array y tampoco modifica  el array original
articulo.forEach();

// SOME genera un booleano y no toca el array el original. Nos devuelve un "true" o un "false"
articulo.some();






/***************************************************************************************************/

/* 
    -------------------
        OBJETOS { }
    -------------------
*/

var persona = 
    {
        nombre: "Juan",
        edad : 33,
        altura : 1.77,
    };

console.log(persona.nombre.toUpperCase());  // Pone todo el string en Mayuscula
persona.edad +=1;               //34 
console.log(persona.edad +=1);  //35

// ...persona        //"spead operator"


/*   ----- Espacio de Memoria - Comparar Objetos -------*/
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








/******************************************************************************************************************/

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











    
/***************************************************************************************************/

/* 
    ---------------------------------------------------------------------------------
        ARRAY - BUCLE "FOR - OF" ESPECIAL - lECTURA Y UTILIZACIÓN DEL CONTENIDO DE UN ARRAY
    ---------------------------------------------------------------------------------
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








/***************************************************************************************************/

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


// Llamada a una propiedad. 
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
        
        /* 
            METODO DEL OBJETO 
        */
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


