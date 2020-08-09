/* 
    --------------------------------------------
        Author : Osvaldo Aquino
        NickName: Owi
        RESUMEN CONTENIDO JAVASCRIPT 2020
    --------------------------------------------
*/




/*
    --------------------------------------------------------------
        LINEAS DE ACCION DE JAVASCRIPT (DINAMISMO Y APLICACIÓN)
    --------------------------------------------------------------
*/


/*
    -------------------------------------------------------
        1RA LINEA DE ACCIÓN - DOM - DINAMISMO HTML Y CSS
    --------------------------------------------------------
*/


/*
                                            WINDOWS                                                                             - 
                                         _______|_______                         
                                         |             |                        
                                         |             |                        
                                         ▼             ▼
                                    _____________________________________      
        NAVIGATOR   ◄ --------------|___________|___________|           |      
                                    |                                   |      
                                    |                                   |  
                                    |               DOM                 |--------► - El interfaz de programación DOM no modifica nada en ESTÁTICO.
                                    |                                   |          - Sino que modifica la estructura, estilo o contenido en DINÁMICO. 
                                    |                                   |          - Es decir, por una accion externa del usuario, se hace un cambio.
                                    |___________________________________|                            
*/




/*

                ** CÓDIGO PARA UNA PÁGINA SENCILLA** 

<html>
    <head>

        <meta http-equiv="Content-Type" content="text/html; charset= iso-8859-1 ">       </meta>
        
        <title>   OwiDragonFenix   </title>

    </head>


    <body>

        <p> TONY STARK

            <strong> YO SOY IRON MAN  </strong>
        
        </p>
        
    </body>

</html>




                    *** ESQUEMA  -  CÓDIGO PARA UNA PAGINA SENCILLA ***
                    


                                                         ¿ A que tipo de NODO  pertence "YO SOY IRON MAN" en el esquema de abajo?
                                                
                                                
                                                    ___________________                     
                                                    |                 |      
                Raíz de todos los NODOS ◄ ----------|     document    | 
                                                    |      XHTML      |     
                                                    |_________________|          
                                                              |                              *** TIPOS DE NODOS ***
                                                              |                                                            
                        ______________________________________|______________________________________                     
                        |                                                                           |                      
                        |                                                                           |               
                        ▼                                                                           ▼                          
                ___________________                                                         ___________________          
                |                 |------ ► Element - Representa cada uno de las            |                 |         
                |     Element     |                   Etiquetas HTML                        |     Element     |              
                |       HEAD      |                 - Único NODO que puede contener         |      BODY       | 
                |_________________|                   "atributos"                           |_________________|     
                         |                                                                           |   
                         |                                                                           |  
            _____________|_______________                                                            |                       
            |                            |                                                           |                      
            |                            |                                                           |               
            ▼                            ▼                                                           ▼                                      
    ___________________          ___________________                                        ___________________          
    |                 |          |                 |                                        |                 |         
    |     Element     |          |     Element     |                                        |    Element      |              
    |       META      |          |      Title      |                                        |       P         | 
    |_________________|          |_________________|                                        |_________________|     
                                          |                                                          |    
                                          |                                                          |    
                                          |                                         _________________| _________________   
                                          ▼                                        ▼                                    ▼                                              
                                  _____________________                  _____________________                _____________________          
                                  |                   |                  |                   |                |                   |        
                                  |       Text        |                  |       Text        |                |       Element     |              
                                  |  "OwiDragonFenix" |                  |   "TONY STARK"    |                |       STRONG      | 
                                  |___________________|                  |___________________|                |___________________|    
                                                                                                                        |                                                     
                                                                                                                        |                                                  
                                                                                                                        |                                          
                                                                                                                        ▼                                                                               
                                                                                                              _____________________                          
                                                                                                              |                   |           
                                                                                                              |       Text        |                     
                                                                                                              | "YO SOY IRON MAN" |        
                                                                                                              |___________________|                
                                  
*/






/*
    ------------------------------
        1 - UTILIZAR LOS NODOS 
    ------------------------------
*/



/*
    -----------------------
        ACCEDER AL  DOM 
    -----------------------
*/


/*
    - 4 Formas de acceder a etiquetas de HTML para manipular la informacion 
        -document.getElementById('')                         "id"
        -document.getElementsByClassName('')                  "class"
        -document.getElementsByName('')                       "name"
        -document.getElementsByTagName('')                    "array de div. Todos las etiquetas id, class y name"
*/


/*
    SINTAXIS
        - Objeto.metodo('nombre del identificador de la etiqueta HTML')
            - Objeto --> document
            - metodo --> getElementById("nombre de la etiqueta )        // Lo encontramos en el "index.html" --►  "Section" 
*/

var cabecera = document.gerElementById('cabecera_etiqueta');            // "id"    --► Etiqueta que restringe el nombre. Solo puede existir un "id" en toda la pagina
var boton    = document.getElementsByClassName('boton_etiqueta');       // "class" --► Se utiliza mucho en la maquetación
var auto     = document.getElementsByName('auto_etiqueta');             //  "name" --► Se utiliza muy poco.


var caja     = document.getElementsByTagName('div');                    //Nos devuelve una colección de Etiquetas. Un array de div ("id", "class","name")
var segundoDiv = caja [1];                                              // Accedemos al  div de la posición 2 





/*
    ----------------------
        MODIFICAR HTML  
    ----------------------
*/


// ACCEDER A LA ETIQUETA 
var cabecera = document.gerElementById('cabecera_etiqueta');            



// 1ER CASO - CAMBIAR EL CONTENIDO DE UN ELEMENTO
cabecera.innerHTML = "</b> Página Principal </b>";                          // Se elimina "texto 1 Cabecera" (se puede vizualizar en la etiqueta "section") y se sobre escribe "Página Principal"
                                                                            //  <b>   </b>   --> pone en negrita "Página Principal" 
            
// 2DO CASO - CAMBIAR EL CONTENIDO DE UN ELEMENTO
cabecera.textContent = "HOME";                                              // <b>   </b>   --> No se puede utilizar con  ".textContent" . Porque no pone en negrita y sale como texto. Esa es la diferencia que existe con "".innerHTML"
                                                                                





/*
    ----------------------
        MODIFICAR CSS  
    ----------------------
*/
var cabecera = document.gerElementById('cabecera_etiqueta');            


// 1RA ESTRCUTRA Y SINTAXIS PARA MODIFICAR
cabecera.style.color ="red";                                // objeto.style.color 
cabecera.style.fontFamily = "serif";                        // En estos casos  "font-family". Se quita el "guion" y se unen las palabras, con la primera letra en Mayúscula 

//2DA ESTRCUTRA Y SINTAXIS PARA MODIFICAR
cabecera.style = "color:red ; font-family:serif ;"          // Esta forma se aproxima mas a CSS




 
/*
    ------------------------------------
        PRACTICA - MODIFICAR PARRAFO
    ------------------------------------
*/

var parrafo = document.gerElementById('parrafo_de_cabecera_numero_2');             // En index.html     --►  etiqueta "section"  <p class= > 

parrafo.style.color = "green";                                                                                            
parrafo.style.width = "200px";











/*
    --------------------------------------------------
        2 - CREAR ELEMENTOS HTML A TRAVÉS DEL DOM
    --------------------------------------------------
*/



/*
    - Proceso para generar los Elementos
    
        1ro - Definir y crear  el tipo de elmento (el tipo de etiqueta) 
                - Meta                 - Head                 - Body
                - Tittle               - p                    -Strong
 
                        
        2do - Crear el  Nodo de tipo texto (Text) que va a haber dentro de esa etiqueta (o si existe otro hijo de Element) 
                - Texto

        3ro - Sincronizar ambos Nodos.
                - Por ejemplo. Añadir el nodo "text" como hijo del nodo Element "p"
    
        4to - Añadir  al DOM  el NODO creado para poder visualizarla en la Página 
                - Añadir el nodo Element como hijo de la Document (pagina)

    - Es recomendable crear los Nodos en JavaScript y no CSS
*/



/*
    -------------------
        CREAR NODOS 
    -------------------
*/



// 1RO - CREAR NODO DE TIPO ELEMENTO 
var parrafo = document.createElement('p');                          // Se crea el nodo de tipo  elemento  "p" 

// 2DO - CREAR NODO DE TIPO TEXTO
var contenido = document.createTextNode('Hola Mundo');              // Crear nodo de tipo Text 

// 3RO - SINCRONIZAR LOS DOS TIPOS DE NODOS.
parrafo.appendChild(contenido);                                     // Añadir el nodo Text (contenido) como hijo del nodo Element "p" (parrafo)

// 4TO -  AÑADIR AL DOM LOS NODOS CREADOS 
document.body.appendChild(parrafo);                                 // Añadir el nodo Element "p" como hijo de "document.body"
                                                                    // TIPOS DE NODOS : document --► body --► Element "p" (parrafo) 







/*
    ----------------------
        ELIMINAR NODOS
    ----------------------
*/

/*
    - Proceso para generar los Elementos
    
        1ro - Traemos el Nodo que queremos eleminar con :
            
                - ".getElementById"  --►  que nos devuelve el Elemento que tiene el atributo con el valor "id" único 
                    
        2do - Existen dos formas de Eliminar:

                - Forma Directa  --►  Nombre_del_Nodo . "removeChild"

                - Forma mas larga --►  parent not

*/


// 1RO - RECOGEMOS LA INFORMACIÓN
var boton = document.getElementsByClassName('boton_etiqueta');            // "id"   --►   Etiqueta que restringe el nombre. Solo puede existir un "id" en toda la pagina


// FORMA DIRECTA DE ELMINAR  
boton.removeChild(boton);                                                 // Instruccion básica para eliminar un Nodo                                                

// SEGUNGA FORMA
boton.parentNode.removeChild(boton);                                      // 












/*
    -------------------------------------------------
        LOCALIZAR LOS ELEMENTOS -  PADRES E HIJOS
    -------------------------------------------------
*/




// 1ER CASO ACCEDER AL PRIMER ELEMENTO-->  HIJO - ARRAY POSICIÓN 1
var hijo   = document.getElementsByTagName('Section');                      // Devuelve una colección de Etiquetas. Un array de Section
var hijo_1 = hijo[0];                                                       // Se accede  al  "section"  de la posición 1 



// 2DO  CASO ACCEDER AL PRIMER ELEMENTO-->  HIJO - ARRAY POSICIÓN 1
var hijo = document.getElementsByTagName("Section")[0];                     // Se accede  al  "section"  de la posición 1. Devuelve el primer "section" del array


// LOCALIZAR PADRE 
var padre = document.getElementsByTagName("Section")[0].parentNode;         // Con ".parentNode" --> se localiza al Padre de "section" posición 1. El padre es la etiqueta "main"



// INSERTAR UN ELEMENTO ANTES DEL HIJO
padre.insertBefore(parrafo,hijo);                                           // Se utiliza la variable "parrafo" (1RO - CREAR NODO DE TIPO ELEMENTO ). Y se inserta antes de "Section "
                                                                            //  "Section" es el hijo de "Main" (que es el padre). Dentro de "main" y antes  de "section" se añade un parrafo









/*
    -----------------------------------------------
        REEMPLAZAR ELEMENTO Y ELIMINAR UN HIJO 
    -----------------------------------------------
*/


//CREAR NODO 

// 1RO - CREAR NODO DE TIPO ELEMENTO 
var nodoLista = document.createElement("li");                            // Se crea el nodo de tipo  elemento  "p" 

// 2DO - CREAR NODO DE TIPO TEXTO
var nodoTextoLista = document.createTextNode("Nueva linea");             // Crear nodo de tipo Text 

// 3RO - SINCRONIZAR LOS DOS TIPOS DE NODOS.
nodoLista.appendChild(nodoTextoLista);                                       // Añadir el nodo Text (contenido) como hijo del nodo Element "p" (parrafo)

// 4TO -  AÑADIR AL DOM LOS NODOS CREADOS 
document.body.appendChild(parrafo);                                          // Añadir el nodo Element "p" como hijo de "document.body"
                                                                             // TIPOS DE NODOS : document --► body --► Element 


// PADRE DE "li" ES  "lista" 
var padreLista = document.getElementById("lista");                           // Se sabe al mirar el index.html en la etiqueta "footer" en el "ul" con id = "lista"                    




// REEPLAZAR UN ELEMENTO O HIJO
padreLista.replaceChild(nodoLista, padreLista.lastChild);                    // FALTA DESCRIPCION 


// ELIMINAR UN HIJO 
padreLista.removeChild(padreLista.getElementsByTagName("li")[0]);            // FALTA DESCRIPCION 













/****************************************************************************************************************************************/


/*
    -----------------------
        3RO - ATRIBUTOS 
    -----------------------
*/



//ENLACE - URL - LINKS 
var enlace = document.getElementById('enlace_de_google');             //Se accede a la etiqueta de HTML  "a"  --►   que se encuentra en "Footer"            
var http = enlace.href;                                               // ".href"  --►  se utiliza para cambiar la URL si es que lo desea


// IMAGEN 
var enlace = document.getElementById('imagen_para_atributo');         // VOLVER A ANALIZAR  
foto.src = 'images/ ' 








/*
    ---------------------------------------------
        CREAR UN ELEMENTO VACIO CON ATRIBUTOS
    ---------------------------------------------
*/


/*
    PAGINA DINAMICA     
            - Dentro de main de hmtl se crea varios atributos que le describimos de aqui. 
            o apartir del codigo de abajo
            - 
*/




//CREAR NODO 

// 1RO - CREAR NODO DE TIPO ELEMENTO 
var nodoLista = document.createElement("li");                            // Se crea el nodo de tipo  elemento  "p" 

// 2DO - CREAR NODO DE TIPO TEXTO
var nodoTextoLista = document.createTextNode("Nueva linea");             // Crear nodo de tipo Text 

// 3RO - SINCRONIZAR LOS DOS TIPOS DE NODOS.
nodoLista.appendChild(nodoTextoLista);                                       // Añadir el nodo Text (contenido) como hijo del nodo Element "p" (parrafo)


document.body.appendChild(parrafo);                                         // Añadir el nodo Element "p" como hijo de "document.body"
                                                                            // TIPOS DE NODOS : document --► body --► Element 


// 1RO - CREAR UN NODO DE TIPO ELEMENTO
var elementoA = document.createElement("a");                                // Se crea un Nodo de tipo Elemento "a"

// 2DO - INSERTAR ATRIBUTOS 

        // CASO 1 -  FORMA DE INSERTAR ATRIBUTOS 
        elementoA.href = "http://www.google.es";                             // ".href" --> atributo
        elementoA.id = "link";                                               // Se inserta un Atributo Tipo "id" al Elemento "a"
        elementoA.className = "link";                                        // Se inserta un Atributo Tipo "class" al Elemento "a"
        elementoA.style = "color:red;";                                      // Se inserta un Estilo (.styke,ci). Un Atributo al Elemento "a"
        elementoA.textContent = "Google";                                    // Se añade contenido

        // CASO 2 -  FORMA DE INSERTAR ATRIBUTOS 
        elementoA.setAttribute("name","Google");                             //                   


// 4TO -  AÑADIR AL DOM LOS NODOS CREADOS 
   document
       .getElementsByTagName("main")[0]                                       // 
       .insertBefore(elementoA, document.getElementsByTagName("ul")[0])       // 
       ;


 












/****************************************************************************************************************************************/


/*
    -------------------
       4TO - EVENTOS
    -------------------
*/


/*
    - Por una accion externa del usuario, se realiza un cambio en el DOM
    - No hacer eventos en HTML (por ejemplo onclick en index.html). Siempre hacer los eventos en JavaScript o en CSS
    - Todas las siguientes acciones de JavaScript. Lo puede hacer CSS
        - JavaScript siempre necesitara mucha memoria y muchos recursos. 
        - Es recomendable hacerlo en CSS y guardar recursos para JavaScript  
*/


var boton = document.getElementById("boton");                                      // En index.html     --►  Etiqueta "article"



boton.addEventListener("click", function ()                                       // addEventListerner --► Escucho o presto atención, si alguien hace algo al OBJETO "boton"
                                    {
                                        parrafo.style.color = "black";             // Al dar click al boton  el color del parrafo cambia 
                                        cabecera.style.fontFamily = "arial";       // Al dar click al boton  el estilo de letra de la cabecera cambia
                                    });






/*
    ----------------------
        VARIOS EVENTOS
    ----------------------
*/


var boton = document.getElementById("boton");                                      


boton.addEventListener("mouseover", function ()                               // Cuando se coloca sobre  del boton        
                                    {
                                        cabecera.innerHTML = "SALIR";       
                                    });

boton.addEventListener("mouseout", function ()                                // Cuando sale de encima del boton                         
                                    {        
                                        cabecera.innerHTML = "SALIR";       
                                    });

boton.addEventListener("click", function ()                                   // Cuando da un click al boton 
                                    {   
                                        parrafo.style.color = "blue";     
                                    });














/****************************************************************************************************************************************/


/* 
    ---------------------------------------------------
        COMBINACIÓN - PRACTICA DE TODO LO APRENDIDO
    ---------------------------------------------------
*/




/*
    -----------------------------------
        CREAR NODO - APLICAR EVENTO 
    -----------------------------------
*/


// ACCEDER A LA ETIQUETA
var boton_id = document.getElementById('boton_del_id');                               // ".getElementById"  --►  devuelve el Elemento que tiene el atributo con el valor "id" único                               
    



//CREAR NODOS 

// 1RO - CREAR NODO DE TIPO ELEMENTO 
var nodoTitulo = document.createElement("h3");                             // Se crea el nodo de tipo elemento  "h3" 

// 2DO - CREAR NODO DE TIPO TEXTO
var nodoTexto = document.createTextNode("titulo");                         // Se crea el nodo de tipo Text 

// 3RO - SINCRONIZAR LOS DOS TIPOS DE NODOS.
nodoTitulo.appendChild(nodoTexto);                                         // ".appenChild"  --►  Añadir el nodo Text (nodoTexto) como hijo del nodo Element "h3" (nodoTitulo)                      
                                              



// EVENTO -  CON UN CLICK EN "boton_id" AGREGAR UNA SOLA VEZ UN "h3" 
boton_id.addEventListener('click',function()
    {
                                                                           // Si por cada click se quiere añadir al DOM un "h3" se debe añadir 1ro, 2do y 3er paso de crear Nodo dentro del Evento
        // 4TO -  AÑADIR AL DOM LOS NODOS CREADOS
        document.body.appendChild(nodoTitulo);                             // Añadir el nodo Element "h3" (nodoTitulo) como hijo del "document.body"


        // CASO ESPECIAL - "ID" A UNA PALABRA RESERVADA (article)
        document.getElementById("articulo").appendChild(nodoTitulo);        // Se añade en la etiqueta "article " del index.html  el nodo de tipo elemento "h3" 

    });









/*
    --------------------------------------------
        FORMULARIO BÁSICO - INTRODUCIR DATOS
    --------------------------------------------
*/

//VARIABLE GLOBAL
var ayuda = "¿Necesitas ayuda?";


//RECOGER TODOS LOS DATOS DEL NODO QUE NOS INTERESA
var suma_1 = document.getElementById("sum_1");                          // Extraemos los elementos del DOM, para utilizarlo. Y lo convertimos en un objeto
var suma_2 = document.getElementById("sum_2");                      

var boton_submit = document.getElementById("submit");                   // Boton - que al dar un click se ejecuta una acción 
var total_final_DOM = document.getElementById("total_final");           // Objeto "total_final_DOM" para visualizar el resultado en el navegador. "total_final" es del "strong" de HTML 




// PRINCIPAL
boton_submit.addEventListener("click", function()
                                            {                                                                    // Con ".value" extraemos el valor del objeto. Extraemos valores no el texto
                                                var total = Number(suma_1 .value) + Number(suma_2.value);        // Validamos el tipo de datos que extraemos con "Number"
                                                total_final_DOM.innerHTML = total;                              // El resultado de la suma "total" se vizualiza en el DOM
                                            });



    
                                      
















/****************************************************************************************************************************************/




/*
    -------------------------------------------
        2DA LINEA DE ACCIÓN - APLICACIÓN 
    -------------------------------------------
*/









