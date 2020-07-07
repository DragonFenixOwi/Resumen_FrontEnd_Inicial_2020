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


