// RUTA DE IMAGEN DETALLADA  ---►  \Resumen_FrontEnd_Inicial_2020\Registro Complementario\Recipilación de imagenes\1 - CallBack



// SUMAR - FUNCIÓN QUE ACTUA COMO CALLBACK 
function sumar (numero1, numero2)                                                      
    {
        return numero1 + numero2;                                       //  RESULTADO FINAL   40 +20 = 60 
    }                                                                   //        ▲
                                                                        //        |
                                                                        //        |
// 2DO - FUNCIÓN QUE SOLICITA DOS PARAMETROS Y UNA FUNCIÓN CALLBACK     
function calcular(numero1, numero2,callback)                            // Parametro 1   ---►  numero1 = 40                 (recibe) por petición 
    {                                                                   // Parametro 2   ---►  numero2 = 20                 (recibe) por petición  
        return callback(numero1, numero2);                              // Parametro 3   ---►  callback = Función "sumar"   (recibe) por petición
    }                                                                   //        ▲
                                                                        //        |
                                                                        //        |
// 1RO - LLAMADA DE LA FUNCIÓN                                          
console.log(calcular(40,20,sumar));                                                   // Argumento 1   ---►  40                            (Envia)
                                                                        // Argumento 2   ---►  20                            (Envia)
                                                                        // Argumento 3   ---►  Función "sumar"               (Envia)



