/* 
    ----------------------------------------
        Autor: Osvaldo Aquino
        Nickname: owi
        RESUMEN DE AGILIDAD BÁSICA 2020
    ----------------------------------------
*/

/* 
    ---------------------------------
        ATAJOS DE TECLADO BÁSICO
    ---------------------------------
*/


/*
    -Termiando
        - Anotaciones del 1 al 4
    - Falta
        - Anotaciones 5 - CSS- Descnaso de eso. Lleva mucho tiempo
        - Anotaciones 6 - Mejorar descripcion y ejemplos
*/

/*
    POR DEFECTO 


    - RELOAD WINDOWS (RECARGAR WINDOWS)
        "Ctrl + R"
        - Por defecto
    
    
    - FORMATEO DE ERRORES
        - Con "shift + alt + F" - prettier hace el trabajo sucio y asegura los ;
        - No me gusta como queda la estructura
    
    
    - EJECUTAR CONSOLA 
        - "Ctrl + Bloq Mayús + Ñ" 
        - Por defecto
        - git_bash


    - EJECUTAR TERMINAL DE SALIDA. 
        - "Ctrl + Alt + N"
        - Ejecutamos solo una pequeña porción del codigo seleccionado
        
    - GO LIVE
        - "shift + º" 
        - (Configuración :  Archivo --> Preferencias --> Métodos abreviados de teclado )
        - Acceso por teclado: "1ro Ctrl + K" seguido de "Ctrl+S" 
    
    - Alternar Pestañas
        - ctrl + NumPad (<-) (>)  "volver a modificar mas adelante"

    - PALETA DE COMANDOS
        - "Ctrl + Bloq Mayús + P"

*/


    













/****************************************************************************************************************************************/


/* 
    ---------------------------------
        EXTENSIONES MAS COMUNES
    ---------------------------------
*/


/*
    -SPANHIS LANGUAGE PACK
        - Para cambiar el idioma del entorno de trabajo de Visual Studio en Español

    - LIVE SERVER
        - Go Live
    
    - PRETTIER - CODE FORMATTER
        - Formatea el código. 

    - BRACKET PAIR COLORIZER 2
        -Cambiar de color el parentesis 
    
    - TABNINE
        - Escribe solo el solo. 
    
    -ESLINT
        -  
    - VSCODE-ICONS
        - Estilo de iconos.
    
    - SASS
        - Preprocesador


*/

    














/**************************************************************************************************/


/* 
    ---------------------------------------
        INTEGRAR GIT BASH A LA TERMINAL
    ---------------------------------------
*/

/*
    - INTEGRAR GIT BASH A LA TERMINAL DE VISUAL STUDIO
        - 3 rutas de acceso
            - "Ctrl + ,"
            - Archivo --> Preferencias --> Configuración
            - Configuración esquina izquierda inferior(indica rama master en la linea de Go live) 
            y luego de nuevo configuración.
        - Accerder 
            - Caracteristicas  -->  Terminal   
            - Buscar  "Shell" 
        - En Buscar "Shell" buscar lo siguiente
            - Terminal › Integrated › Shell: Windows
                -  Ruta de acceso del shell que el terminal usa en Windows 
                (valor predeterminado: C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe) 
        - Click en "Editar en setting.json"
            - Copiar la ruta de acceso de "bash.exe"
            - Pegar en 
                - "terminal.integrated.shell.windows": "AQUI"    
        - Buscar la ubicación exacta de "git_bash"
            - Tecla "Windows" - Buscar git_bash
            - click derecho en git_bash. Seleccionar " mas --> Abrir Ubicación"
            - Click derecho  de nuevo en git_bash. 
            - Buscar y acceder a la carpeta "bin"
            - Copiar la ruta de acceso de esa carpeta. En este caso es  "C:\Program Files\Git\bin"
        - Pegamos "setting.json" 
            -  "terminal.integrated.shell.windows": "C:\Program Files\Git\bin" 
        - Se debe Editar y configurar. Para ajustar a JSON 
            -  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
        -FIN 


    NOMBRE Y CORREO DEL USUARIO
        - git config --list                               // Lista de Configuración por defecto 
        - git config --list --show-origin                 // Alojamiento de configuraciones

        - git config --global user.name "Osvaldo"         // Cambiar la configuracion del usuario de git 
        -git config --global user.email "_@gmail.com"     // Cambiar la configuracion del email de git 
*/

    













/**************************************************************************************************/


/* 
    ---------------------------------
        COMANDOS INICIALES GIT 
    ---------------------------------
*/



/*
    - LIMPIAR PANTALLA DE LA TERMINAL 
        - ctrl + L 
        - Limpiar pantalla de la terminal git_Bash
    
    - ABRIR TERMINAL 
     - ctrl + Mayuscula + Ñ 

    - Utilizar 
        "-"     --> un guion indica que se utilizara una letra por ejemplo "-la"
        "--"    --> un guion indica que se utilizara una palabra por ejemplo "--global"
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
        git commit –m
        git push -u origin master
*/

/* 
    - CASO AISLADO - ERROR al intentar realizar un git pull (merge + ) 
        - Con el fin de unir mi repositorio local de Visual Studio Code 
        - Con el repositorio en la nube de github  
    - Y tiene que ver en la manera como github crea los primeros archivos
    - COMANDO GIT 
        - git pull origin master --allow-unrelated-histories
*/

    













/**************************************************************************************************/


/* 
    ----------------------------------------------
        PROCESO  DE EJECUCIÓN EN SEGUNDO PLANO
    ----------------------------------------------
*/

    




/*
                    *** CICLO BÁSICO INICIAL ***
                                                                           
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
        |    DIRECTORIO DE    |        | AREA DE PREPARACIÓN |        |    REPOSITORIO      |--- ► git push
        |    TRABAJO LOCAL    |        |      O STAGING      |        |    LOCAL            |
        |                     |        |                     |        |                     |
        |_____________________|        |_____________________|        |_____________________|


*/