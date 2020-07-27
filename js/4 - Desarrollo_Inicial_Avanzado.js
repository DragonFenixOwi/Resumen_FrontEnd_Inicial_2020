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
                                            WINDOWS
                                         _______|_______
                                         |             | 
                                         |             |
                                         ▼             ▼
                                    _________________________________________      
        NAVIGATOR   ◄ --------------|___________|___________|               |      
                                    |                                       |      
                                    |                                       |  
                                    |                DOM                    |                
                                    |                                       |          
                                    |                                       |                       
                                    |_______________________________________|
          
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

var cabecera = document.gerElementById('cabecera_etiqueta');            

cabecera.innerHTML = "Nuevo Titulo ";                        // Se elimina "texto 1 Cabecera" y se sobre escribe "Nuevo Titulo"





/*
    ----------------------
        MODIFICAR CSS  
    ----------------------
*/
var cabecera = document.gerElementById('cabecera_etiqueta');            


// 1ER FORMA DE MODIFICAR
cabecera.style.color ="red";                                // objeto.style.color 
cabecera.style.fontFamily = "serif";                        // En estos casos  "font-family". Se quita el "guion" y se unen las palabras, con la primera letra en Mayúscula 

//2DA FORMA DE MODIFICAR
cabecera.style = "color:red ; font-family:serif ;"          // Esta forma se aproxima mas a CSS




 
/*
    ------------------------------------
        PRACTICA - MODIFICAR PARRAFO
    ------------------------------------
*/

var parrafo = document.gerElementById('parrafo_de_cabecera_numero_2');           

parrafo.style.color = "green";
parrafo.style.color = "200px";




/*
    ---------------
        EVENTOS
    ---------------
*/


/*
    - Por una accion externa del usuario, se realiza un cambio en el DOM
    - No hacer eventos en HTML (por ejemplo onclick en index.html). Siempre hacer los eventos en JavaScript
*/


var boton = document.getElementById("boton");                                      // En index.html     --►   "article"



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












/*
    ------------------------------------------
        FORMULARIO - INTRODUCCIÓN DE DATOS
    ------------------------------------------
*/

var ayuda = "¿Necesitas ayuda?";


//sumar

/*
    Aqui  recogemos toda la informacion en modo de  
*/
var suma01 = document.getElementById("sum01");
console.log(suma01);
var suma02 = document.getElementById("sum02");

var btn_submit = document.getElementById("submit");
var total_final = document.getElementById("total_final");


btn_submit.addEventListener("click",function()
    {
        //no sacamos el texto sacamos los valores
        var total = Number(suma01.value) + Number(suma02.value);
        total_final.innerHTML = total; 
    });

document.article.appendChild(ayuda)


    




/*
    -------------------------------------------
        2DA LINEA DE ACCIÓN - APLICACIÓN 
    -------------------------------------------
*/

















































    







