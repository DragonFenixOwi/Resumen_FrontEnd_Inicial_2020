/* 
    ----------------------------------------
        Autor: Osvaldo Aquino
        Nickname: owi
        RESUMEN DE AGILIDAD BÁSICA 2020
    ----------------------------------------
*/





/* 
    -----------------------------------------------------------------------
        INDEX.HTML - ATAJOS DE TECLADO MAS COMUNES - VISUAL STUDIO CODE
    -----------------------------------------------------------------------
*/
 

/*
    ATAJOS QUE SE PUEDEN VISUALIZAR EN INDEX.HTML

        - LISTA DE LINKS "a Href"
            <!--   TECLADO ABREVIADO     a[href="#"]{links}*5   -->
        
        - FORMULARIO BÁSICO
            <!--   TECLADO ABREVIADO     input:number#suma_1*2   -->
        
        - BOTON     
            <!--   TECLADO ABREVIADO     button#submit{SUMA}   -->
        
        - H3    
            <!--   TECLADO ABREVIADO     h3#total_final   -->
        
        - LISTA "UL" - "LI"
            <!--   TECLADO ABREVIADO     ul#lista>li{hola$}*3   -->  
        
        - BOTON
            <!--   TECLADO ABREVIADO     button#boton_del_id{boton_DOM_visual}  -->  


    OTROS ATAJOS
     
        CREAR ESTRUCTURA BÁSICA DE  HTML5
            <!--   TECLADO ABREVIADO     html:5   -->

        CREAR HEADER - MAIN - FOOTER 
            <!--   TECLADO ABREVIADO     header+main+footer   -->

*/






/****************************************************************************************************************************************/


/* 
    -------------------------------------------------------------
        EXTENSIONES(PLUGINS) MAS COMUNES - VISUAL STUDIO CODE
    -------------------------------------------------------------
*/


/*
    -SPANHIS LANGUAGE PACK
        - Para cambiar el idioma del entorno de trabajo de Visual Studio en Español

    - LIVE SERVER
        - Go Live. Para crear un pequeño servidor Local para ver el como queda el código final.
    
    - CODE RUNNER
        - Para ejecutar y verificar una pequeña porción de código. 
    
        - PRETTIER - CODE FORMATTER
        - Ordena o Formatea el código de forma automática. 

    - ESLINT
        - Busca errores.
        - Ahora tambien se utiliza como formateo (segun descripción).       
        
    - EDITORCONFIG
        - Interactua con VS Code. 
        - Puede modificar la visualización final de un formateo.  

    - BRACKET PAIR COLORIZER 2
        -Cambiar de color el parentesis 
    
    - TABNINE
        - Escribe código básicemente él solo. 

    - VSCODE-ICONS
        - Estilo de iconos.
    
    - INDENT-RAINBOW
        - Para indentar código (mandar a la derecha las líneas hijas). Colores distintos para identificarlos.

    - SASS
        - Preprocesador

    -POLACODE
        - Hacer un screenshot de código. Captura como imagen de manera perfecta el código.
        
    - LIVE SHARE 
        - Desarrollo colaborativo tiempo real

    - GITLENS 
        - Ayuda a ver el historial y evolución del código. Quien, como y que cambio en el código.
        - En rojo lo que se quito. En verde lo que se cambio.
    
    - SVG
        - Extensión que te ayuda a crear gráficos. 


*/














/****************************************************************************************************************************************/


/* 
    -----------------------------------------------------
        ATAJOS DE TECLADO BÁSICO - VISUAL STUDIO CODE
    -----------------------------------------------------
*/



/*     

    - RELOAD WINDOWS (RECARGAR WINDOWS)
        - "Ctrl + R"
        - Si existe varias ventanas abiertas. Elegis una y das "Enter" 
    
    - PALETA DE COMANDOS
        - "Ctrl + Bloq Mayús + P"
        - Importante teclear el simbolo ">" para buscar
        - COMANDOS USADO GENERALMENTE
            - RELOAD WINDOWS   ---►  Actualizar ventana
    
    - FORMATEO DE ERRORES
        - Con "shift + alt + F" - prettier hace el trabajo sucio y asegura los ;
        - No me gusta como queda la estructura. Pero para solucionar errores, deberia acostumbrarme en el futuro.
    
    
    - EJECUTAR CONSOLA 
        - "Ctrl + Bloq Mayús + Ñ" 
        - Por defecto
        - git_bash


    - EJECUTAR TERMINAL DE SALIDA. 
        - "Ctrl + Alt + N"
        - Ejecutamos solo una pequeña porción del codigo seleccionado
        
    - EJECUTAR PEQUEÑA PORCIÓN DE CÓDIGO
        - 
        - CODE RUN

    - GO LIVE
        - "shift + º" 
        - (Configuración :  Archivo --> Preferencias ---►  Métodos abreviados de teclado )
        - Acceso por teclado: "1ro Ctrl + K" seguido de "Ctrl+S" 
    
    - Alternar Pestañas
        - ctrl + NumPad (<-) (>)  "volver a modificar mas adelante"

    - INICIAR VISUAL STUDIO CODE DESDE LA TERMINAL EXTERNA DE GIT_BASH
        - code.  

*/


    

















/**************************************************************************************************/


/* 
    ---------------------------------------
        INTEGRAR GIT BASH A LA TERMINAL
    ---------------------------------------
*/

/*
    ****** PRIMERA PARTE ******

        - INTEGRAR GIT BASH A LA TERMINAL DE VISUAL STUDIO
            - 3 rutas de acceso
                - "Ctrl + ,"
                - Archivo --> Preferencias --> Configuración
                - Configuración esquina izquierda inferior(indica rama master en la linea de Go live) 
                y luego de nuevo configuración.

            - Accerder 
                - Buscar  "Shell" 
                - Se encuentra en  "Caracteristicas  -->  Terminal"   
                

            - En la ventana actualizada de  Buscar "Shell" buscar lo siguiente
                
                - Terminal › Integrated › Shell: Windows
                    -  Ruta de acceso del shell que el terminal usa en Windows 
                    (valor predeterminado: C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe) 

                - Click en "Editar en setting.json"
                    - Copiar la ruta de acceso de  "bash.exe" (ruta de instalación en windows) 
                    -  Pegar en 
                        - "terminal.integrated.shell.windows": " PEGAR AQUI"    

            - Para Buscar la ubicación exacta de "git_bash"

                - Tecla "Windows" - Buscar git_bash

                - click derecho en git_bash. Seleccionar "mas --> Abrir Ubicación"

                - Se accede a la carpeta del acceso directo. 
                    - Click derecho  nuevamente en git_bash. Y clickear en "Abrir la ubicación del archivo" 

                - Buscar y acceder a la carpeta "bin" en el que se encuentra el ejecutable "bash.exe"

            
            - Copiar la ruta de acceso de esa carpeta. En este caso es  "C:\Program Files\Git\bin"

            - Se debe pegar en  "setting.json" 
                -  "terminal.integrated.shell.windows": "C:\Program Files\Git\bin" 

            - Se debe Editar y configurar. Para ajustar a JSON 
                -  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
        
            - Se guarda la modficación con "control + S"

            - Y se actualiza la ventana con RELOAD WINDOWS (control + r)
                - Tambien se puede actualizar la ventana buscando RELOAD en la paleta de comandos. 
 
        -FIN 





    ****** SEGUNDA PARTE ******

        NOMBRE Y CORREO DEL USUARIO
            - git config --list                                   ---►      Lista de Configuración por defecto 
            - git config --list --show-origin                     ---►      Alojamiento de configuraciones. Tecla "q" para salir

            - git config --global user.name "Osvaldo"             ---►      Cambiar la configuracion del usuario de git 
            - git config --global user.email "_@gmail.com"         ---►      Cambiar la configuracion del email de git 





*/

    









/**************************************************************************************************/


/* 
    ---------------------------------
        INICIANDO EL MUNDO DE GIT
    ---------------------------------
*/




/* 
    ------------------------------------------------------
        PROCESO  DE EJECUCIÓN BÁSICA EN SEGUNDO PLANO
    -----------------------------------------------------
*/

    


/*
                    *** CICLO BÁSICO INICIAL GIT - ENVÍO Y RECEPCIÓN DE DATOS ***
                                                                           
                                                                    _______________________      
                                                                    |                     |      
                                                                    |                     |      
                                                                    | REPOSITORIO REMOTO  |-----------¬     
                                      git clone url ◄ --------------|       GITHUB        |           ▲      
                                            |                       |                     |           |
                                            |                       |_____________________|           |             
                                            |                                                         |
                ____________________________|__________________________________                       |
                |                                                              |                      |
                |                                                              |                      |
                ▼                                                              ▼                      | 
               git init                       git add                       git commit                |    
        _______________________        ______________________         _______________________         |  
        |                     |        |                     |        |                     |         |  
        |                     |        |                     |        |                     |         |       
        |    DIRECTORIO DE    |        | AREA DE PREPARACIÓN |        |     REPOSITORIO     |--- ► git push
        |    TRABAJO LOCAL    |        |      O STAGING      |        |        LOCAL        |
        |                     |        |                     |        |                     |
        |_____________________|        |_____________________|        |_____________________|




    - git init               ---►      1ro - Se crea un espacio en la memoria RAM que se llama "Staging". En el que se agrega los cambios. 
                                       2do - Se crea el repositorio. Es la carpeta oculta ".git". Es donde se guarda todos los cambios al final del proyecto.
                                                                      
    - git add                ---►      Se agrega en el "Staging" (Área de la memoria RAM - Área de preparación) los cambios realizados. Datos guardados de manera temporal.
                                       Si no se hace algo con él, eventualmente va a desaparecer, debido al "garbage collector"  (sistema para proteger la memoria RAM)
    
    - git commit             ---►      Se guarda la versión final-definitiva en el "Repositorio Local" o "Base de Datos Historicos". 

    - git push               ---►      Se envia la versión final-definitiva al Servidor remoto o repositorio remoto

    - git clone url          ---►      Copia los archivos del repositorio remoto de la "url"  ---►  Guarda una copia del "master" al "Directorio de trabajo"
                                                                                              ---►  Crea toda la "Base de Datos Historicos" en el "Repositorio Local"
    
*/






/*
                    *** CICLO BÁSICO INICIAL GIT - ACTUALIZACIÓN DE DATOS ***
                                                                           
                                                                                           _______________________      
                                                                                           |                     |      
                        git pull (git fetch + git merch)                                   |                     |      
                                                                                           | REPOSITORIO REMOTO  |    
                                                                                     ------|       GITHUB        |               
                                                                                     |     |                     |          
                                                                                     |     |_____________________|                        
                                                                                     |                                                         
                __________________________ git merge ________________________    git  fetch                
                |                                                           |        |             
                |                                                           |        |              
                |                                                           |        |              
                ▼                                                           ▼        ▼
        _______________________        ______________________         _______________________          
        |                     |        |                     |        |                     |           
        |                     |        |                     |        |                     |                
        |    DIRECTORIO DE    |        | AREA DE PREPARACIÓN |        |     REPOSITORIO     |
        |    TRABAJO LOCAL    |        |      O STAGING      |        |        LOCAL        |
        |                     |        |                     |        |                     |
        |_____________________|        |_____________________|        |_____________________|



    - git fetch              ---►      Trae actualizaciones del repositorio remoto al repositorio local. No guarda en el "Directorio de trabajo local"
    
    - git merge              ---►      Fusionar     ---►    La ultima actualización del "Repositorio local "
                                                    ---►    Con la Versión actual que se encuentra en el "Directorio de Trabajo Local"

    - git pull               ---►      git fetch + git merge. 
        


*/







/* 
    ------------------------
        TERMINOS COMUNES  
    ------------------------
*/

/* 
    - ".gitkeep"          ---►      Permite guardar carpetas vacias en el repositorio. Porque Git no entiende de carpetas.    
    
    - ".gitgnore"         ---►      Archivo Binario. Se utiliza para Configurar Git. Para que ignore archivos que no quieras subir a Github
                                    
    - HEAD                ---►      Puntore de commit. Indica en que rama estoy. Por lo general y por defecto estamos en "master"

    - Master              ---►      Es un puntero de rama. 
    
    - 
*/





/* 
    ---------------------------------------------
        ATAJOS DE TECLADO - TERMINAL GIT BASH 
    ---------------------------------------------
*/


/*
    - LIMPIAR PANTALLA DE LA TERMINAL 
        - ctrl + L 
        - Limpiar pantalla de la terminal git_Bash
    
    - ABRIR TERMINAL 
     - ctrl + Mayuscula + Ñ 

 
*/






/* 
    ---------------------------------
        COMANDOS INICIALES GIT 
    ---------------------------------
*/
/*
        git clone https://github.com/DragonFenixOwi
        git remote remove origin
        git remote add origin https://github.com/DragonFenixOwi/
        git push -u origin master
        git status
            en rojo que hay que añadir
                modified:   css/estilos.css
                modified:   index.html
        git add 
            index.html  
            css/estilos.css
		Git status              
        git commit –m ""
        git push -u origin master
*/





/* 
    ------------------------
        COMANDOS AISLADO 
    ------------------------
*/

/* 
    - CASO AISLADO - ERROR al intentar realizar un git pull (merge + fetch ) 
    
        - Con el fin de unir mi repositorio local de Visual Studio Code 
    
        - Con el repositorio en la nube de github  
    
        - Y tiene que ver en la manera como github crea los primeros archivos
    
    - COMANDO GIT 
    
        - git pull origin master --allow-unrelated-histories
*/

    




/* 
    ---------------------------------
        COMANDOS GENERALES - GIT BASH 
    ---------------------------------
*/
/*  
    GENERALES     
        
        - git status                   ---►      Ver Estado del archivo. Por lo general, ver si falta un "git add" o "git commit"

        - git add .                    ---►      Agregar todos los cambios. El punto "." indica "la carpeta actual donde estan todos los archivos"

        - git commit                   ---►       

            - git commit -am " "       ---►       Seria un " git add" + un "git commit"  al mismo tiempo.  
 
            - git commit --amend       ---►      Cambiar el comentario del ultimo commit.

        - git log                      ---►      Ver historial de "commit". Con la tecla "q" se puede salir de "git log"

            - "git log --stat"         ---►      Ver el historial y los cambios especificos del "commit". Se observa cuantos "Bytes" se cambiaron.  
           
            - git log --online         ---►      Visualizar un resumen de "commits" en forma de lista. 

        - git branch                   ---►      Ver rama actual    

        - git diff                     ---►      Comprueba los cambios realizados antes del commit. 
                                                Luego de un "git fetch" es recomendable hacer un "diff"

            git diff HASH 1 HASH 2     ---►     Comparar el contenido de las distintas versiones del "commit".  HASH 1 (commit actual) y HASH 2 (commit inicial)
                                                 HASH" ---►   Es ese numero super largo que apunta a un "commit" en específico.      
                                        
        - git show                     ---►      Muestra los cambios que han existido sobre un archivo.
        
        - git restore --stage          ---►      Sacar un del "staging" un archivo para luego volver a modificarlo. Por ejemplo  " git restore --stage index.html "           



    COMANDOS UN POCO DESTRUCTIVAS - MUY PELIGROSOS

        - git reset "HASH"                      ---►     Permite volver a una versión de "commit" anterior. 
                                                         Al realizar No se puede volver atrás, es un acto destructivo en git.
                                                         Se debe tener cuidado si se trabaja online con otras personas, por ejemplo a través de GitHub. 

            - "git reset 'HASH' soft"           ---►     Suave. Elimina el commit. Pero no toca lo que hay en "Staging"

            - "git reset 'HASH' hard"           ---►     Duro. Elimina el commit y los cambios. Volver al estado de un commit anterior de manera agresiva        
        

        - git checkout "HASH" "index.html"      ---►     Es el acto de cambiar entre diferentes versiones. Ver el archivo en el estado de ese commit.
                                                         Por ejemplo, ver el contenido del primer commit en su estado original: git checkout "HASH Primer commit" "index.html"
        
        - git checkout master "index.html"      ---►     Regresa a la versión actual. Siempre y cuando no se haya realizado un "commit" luego del ckeckout  

        -git revert                             ---►     Revertir los ultimos cambios. Por ejemplo, "git revert HEAD". Es decir, revierte el contenido volviendo a un estado 
                                                         antes de guardar. No elimina el "commit"
*/





    









/**************************************************************************************************/



/* 
    -------------------------------------
        COMANDOS GENERALES - TERMINAL 
    -------------------------------------
*/

/*
    GENERALES

        - pwd                       ---►      Visualizar ruta de la carpeta actual. 

        - ls                        ---►      Listar los archivos de la carpeta actual.
        
        - ls -la                    ---►      Listar todos los archivos incluso los "Ocultos" de la carpeta actual.  

            TRAER ARGUMENTOS
                "-"                 ---►      un guion indica que se utilizara una "LETRA". Por ejemplo "-la"

                "--"                ---►      dos guiones indicaN que se utilizara una "PALABRA". Por ejemplo "--global"
            
            ARCHIVOS OCULTOS  
                - “.”               ---►      Punto es la carpeta actual.

                - “..”              ---►      Es la carpeta anterior. Se utiliza con el comando "cd" para ir a la carpeta anterior.
        
         - cd                       ---►      Ir a una carpeta (por lo general a una de la lista "ls"). Por ejemplo "cd Users"
        
                - cd ..             ---►      Regresar a la carpeta anterior. 

        - History                   ---►      Visualizar todos los comandos utilizados en la terminal. A cada comando utilizado le corresponde un número 

        - !"numero_History"         ---►      Con el signo "!" y un número de "History" se puede volver a utilizar el comando.

        - "Comando" --help          ---►      Abre en el navegador información sobre el comando. Click derecho "traducir", para mas comodidad. 
                                              Por ejemplo "git add" --help  

        - "Comando" -h              ---►      Lista de opciones del Comando. Ejemplo  "git push -h" 


    CREAR UNA CARPETA O UN ARCHIVO

        - mkdir              ---►      Crear una nueva carpeta. 
        
        - touch              ---►      Crear un archivo vacío. Ejemplo de extensiones del archivo ".txt - .html  - .css - etc."


    ESCRIBIR EN UN ARCHIVO VACIO

        - vi (vim)            ---►      Para escribir en el archivo vacío. Mas general. Se utiliza en Window.  
       
        - nano                ---►      Para escribir en el archivo vacío. Mas para linux. Me gusta mas. "control + X" para salir
    

    VER EL CONTENIDO DE UN ARCHIVO.
            
        -  Cat                 ---►      Visualizar contenido de un archivo. Por ejemplo, "cat index.hmtl"
                                         Para arhivos pequeños (con codigos cortos) 
                                         Tambien podemos duplicar un archivo. Por ejemplo : "cat index.html > cat index_2.html"

        - more                 ---►      Visualizar contenido de un archivo. Por ejemplo, "more index.hmtl"
                                             Para archivos grandes (con codigos largos)

        - tail -"numero"       ---►      Ver las ultimas lineas de cÓdigo de un archivo. Por ejemplo, "tail -25" (ultimas 25 lineas)               
        

    COMANDOS UN POCO DESTRUCTIVAS

        - rm  "nombre_del_archivo"      ---►    Eliminar un archivo (por ejemplo un ".txt"). Si cometes un error al escribir puedes borrar completamente el disco duro      
                                                Siglas que indican "remove". Elimina solo "archivos". Ejemplo rm html.html
            
        -rm rf "nombre_de_la_carpeta"   ---►    Eliminar una carpeta. No se puede eliminar una carpeta en el cual es residente
                                                Se debe ir a la ruta de la carpeta anterior con "cd .." y luego aplicar "rm rf"


    LLAVES SSH 

        TIPOS              

            - Llave pública y Llave privada            
        
        CREAR UNA LLAVE SSH
        
            1RO - CREAR UNA LLAVE CON "SSH-KEYGEN"

                - ssh-keygen -t rsa -b 4096 -c "mi llave personal"
                
                    - ssh-keygen   ---►         

                    - "-b"         ---►    parte binaria, que indica los 4096 necesarios

                    - "-c"         ---►    Para hacer un comentario 
                
                - Enter. Y se crean las dos llaves la publica y la privada.

            2DO - GUARDAR EN EL DIRECTORIO POR DEFECTO 

            3RO - ESCRIBIR UNA CONTRASEÑA QUE SE PUEDAN RECORDAR
        


*/









