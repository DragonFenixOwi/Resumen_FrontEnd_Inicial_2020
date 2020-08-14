# Carpeta "js" de JavaScript

##  Comandos de Atajos de Teclado y Git 

1. **Atajos mas Comunes del "index.html" en Visual Studio Code**

2. **Extensiones (Plugins) mas Comunes en Visual Studio Code**

3. **Atajo de teclado Básico para Visual Studio Code**

   - Formateo de Errores.          - Recargar Windows        

   - Terminal de salida             - Paleta de comandos 
   
   - Go Live.                       - Ejecutar Consola 
   
   - Ejecutar Terminal de Salida    - Ejecutar pequeña porción de código

    - Alternar Pestañas             - Iniciar Visual Studio Code

4. **Integrar Git_Bash a la Terminal de VSCode**

   - Configurar ruta de acceso de git_bash en el archivo  setting.json

   - Configurar Usuario y email con "git config"

5. **Iniciando el mundo de Git**

   - Proceso de Ejecución Básica en Segundo Plano

        - Basado en 

            - Directorio de trabajo local 

            - Area de Prepación - Staging Area

            - Repositorio local

            - Repositorio remoto 

        - Envío y Recepción de datos.

            - git -->  init, add, commit, clone url y push 

        - Actualización de datos

            - git -->  fetch, merge  y pull 

   - Términos comunes 

   - Atajos de terminal git_bash 

   - Comando iniciales git.

   - Caso Especial - Comando aislado

   - Comandos Generales
    
6. **Comando Generales de Terminal**. 

   - Generales

   - Crear carpeta o archivo

   - Escribir en un archivo

   - Ver contenido de un archivo

   - Comandos un poco destructivos 
    
   - Llaves SSH 




### Desarrollo Inicial Básico

 1. **Valores Booleanos**
    - Valores considerados Falsos y Valores considerados Verdaderos para el tipo Booleano.

 3. **Variables**, **Constante** y  **Valores**. 
    - **var**   - largo alcance
    - **let**   - corto alcance
    - **const** - corto alcance
    - **Valores con variables**. 
        - Strings, Números, Tipo Objeto (Array y Objeto ), Booleanos

 2. **Operadores**
    - Básicos - Igualdad - Desigualdad - Asignación - Comparación

 4. **Funciones**
    - Estructura Básica (Parámetros y Argumentos).
    - Sintaxis de las Funciones (Declarativas y Expresivas).
    - Función con Parámetros. 
    - Funciones de JavaScript - Palabras reservadas.

 5. **Scope**
    - Global y Local.

 6. **Hoisting**
    - undefined.  

 7. **Buenas Prácticas**
    - Estructura Modular. 
    -  Explicación de porque no hay que utilizar un Magic Number.
        - Codigo Junior vs Codigo Senior.

 8. **Debil Tipado**
    -  Diferencia con el Fuerte tipado.

 9. **Coerción** 
    - Implicita 
    - Explicita



### Desarrollo Inicial Intermedio

 1. Visualización de datos  
    - **document.write**()
    - **console.log**()

 2. Array
    - **push**(), **pop**(), **unshift**(), **shift**(), **indexOP**

 3. Métodos Array
    - **filter**(), **map**(), **find**(), **forEach**(), **some**()

 4. Objetos.
    - Sintaxis entre Funciones (parámetros) y objetos 
    - Comportamiento de los atributos de un Objeto en el Scope Local y Global.
        - Spread Operator - Operador de Propagación 
    - Comparación entre dos Objetos. 

 5. Métodos Strings
    - **toLowerCase**();
    - **toUpperCase**();

 6. Módulo Math
    - **Random**
    - Redondear numeros con decimales
        - **round**
        - **toFixed**
        - **parseFloat**
        - **parseInt**
    - Random controlada por un máximo y un mínimo

 7. Condicionales. 
    - if else - else if
    - **Operador Ternario** if
    - Switch

 8. Bucles
    - **for Básico**
    - Array
        - **for - of** 
    - **While**
        - Estructura Estandar - Bandera.
        - Ejemplo de Bucle infinito.
        - Ejemplo de Bucle no infinito.
    - **do - while**

 9. Arrow Function
    - **4 Fases de la Simplificación de funciones**




### Desarrollo Inicial Avanzado.
 1. lineas de acción de JavaScript (Dinamismo y Aplicación)
    - 1RA Líneas de Acción DOM - Dinamismo HTML Y CSS
        - Código y Esquema para entener "Código para una Página Sencilla" 
            - Explicación de la relación entre Nodos y Etiquetas

        **1ro** Utilizar los Nodos  
            - Acceder al DOM
                - 4 formas de accerder a etiquetas HTML
            - Modificar HTML
            - Modificar CSS
            - Practica - Modificar Parrafo

        **2do** Crear Elementos HTML a través del DOM
            - Crear Nodos
            - Eliminar Nodos
            - Localizar los Elementos - Padres e hijos
            - Reemplazar Elemento y Eliminar un hijo

        **3ro** Atributos
            - Crear un Elemento vacío con atributos.

        **4to** Eventos
            - Varios eventos
            - Formulario Básico

        - Combinación - Práctica de todo lo aprendido
            - Crear Nodo - Aplicar Evento
            - Formulario Básico - Introducir datos. 

    - 2DA Aplicación
 


### Desarrollo Inicial Superior.
1. **Programación Orientada a Objetos** (**POO**)
    - Objetos { }
    - Metódo de los Objetos. 

 2. **Estructura de una Clase**
    - Antes del **ECMAScript** de 2015
        - Constructor
        - Prototipos (Métodos)
        - Instancias
        - Llamada del Método
    - Despues del **ECMAScript** de 2015
        - Clase
            - Constructor
            - Método.
        - Herencias (Clase)
            - extends 
            - Constructor Nativo
            - Super Constructor
            - Método
        - Instancia del Constructor - Padre
        - Instancia del Constructor - Herencia
        - Llamada del Método

 3. **Asincronismo**
    - Comportamiento de JavaScript en la **línea de tiempo** de Ejecución
    - CallBack's
    - API
    - NODE.js - Asincronismo - Crear un Json
        - Terminal Externa git_bash y NODE.js
            - Primeros pasos - Verificar si la Instalación fue Exitosa.
            - Iniciar NODE.js  guardando datos en un archivo JSON
            -  Ejecutar NODE.js