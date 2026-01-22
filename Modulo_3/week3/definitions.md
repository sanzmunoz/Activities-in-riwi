### DOM, SPA

DOM (SELECION Y MODIFICACIÓN)
Los atributos son los que acompañan la etiqueta en html
Se pueden agregar atributos a la etiquita desde JS 

### VITE:
    Empaquetador de modulos moderno y un servidor de desarrollo con velocidad en mente.

    Creacion de vite nuevo:
    en consola y en la carpeta: npm create vite@lasted

### npm:
    node packpage mangment
    gestor de paquetes oficial de Node.js que permite instalar gestionar y compartir librerias de JS

### serviodor web:
    programa que procesa una aplicacion del lado del servidor

### LocalStorage:
    API del navegador para guardar informacion del usuario de manera persistente, los datos se mantienen hasta que se limpien intencionalmente y almacena de 5 a 10MB por dominio y los datos se almacenan por string pares clave-valor
    Los datos son accesibles desde cualquier pagina del mismo origen o dominio
    Usado cuando se necesita que los datos persistan mas alla de la sesion del usuario.

### Métodos clave del Local Storage:
    .setItem(key, value):   Guarda datos en local Storage.
    .getItem(key):          Recupera los datos guardados.
    .removeItem(key):       Elimina un dato especifico almacenado en LocalStorage
    .clear():               Elimina todos los datos almacenados en LS

### Session Storage:
    Tiene una diferencia clave, los datos guardados en session storage solo se mantienen diponibles durante la sesion actual, pero cuando el navegador se cierra los datos se eliminan automaticamente
    tiene los mismos metodos que el localStorage.

### Eventos comunes de click y teclado:
        De clic
    'click' :se activa cuando el usr hace clic
    'dblclick': se activa cuando el usr hace doble clic
    'mouseover':se activa cuando el cursor pasa sobre un elemento.
    'mouseout': se activa cuando el cursos deja de estar sobre un elemento
    'mousemove': Ocurre cuando el raton se mueve dentro de un elemento.
        De Teclado
    'keydown': se activa cuando se presiona una tecla
    'keyip': se activa cuando se suelta una tecla
    'keypress': se activa cuando se presiona una tecla que produce un valor de -carácter-
        De Formulario
    'sumbit':Se dispara cuando se envia un formulario.
    'change':ocurre cuando el valor de un campo de formulario cambia.
    'input': Se activa cada vez que se introduce un valor en un campo de texto.
        De Ventana
    'load': ocurre cuando una página o recurso (como una imagen) se carga completamente.
    'resize': Se activa cuando la ventana del navegador cambia de tamaño.
    'scroll':Se dispara cuando el usuario desplaza el contenido de la página
        De Documento
    'DOMContentLoaded': Se dispara cuando el documento HTML ha sido completamente cargado y analizado, sin esperar a que se carguen estilo, imagenes u otros recursos externos.