# React - Hello World

## ¿Qué es un Componente en React ?

Es una pieza independiente y reutilizable de código que se encarga de una parte específica de la interfaz de usuario de una aplicación. 
Los componentes son como funciones de JavaScript, pueden aceptar entradas arbitrarias y devolver elementos de React que describen lo que debe aparecer en la pantalla.

Estos componentes pueden presentar un `estado`. 

## ¿Qué es un estado en React?

El estado en React es un objeto que contiene datos que pueden cambiar con el tiempo y afectar al comportamiento del componente. 
Cada componente puede tener su propio etado y es privado, es decir, sólo puede ser accedido y modificado dentro del componente en el que se define.

## ¿Qué son los Props ?

* Las props, abreviatura de "propiedades", son un mecanismo en React que permite pasar datos de un componente padre a un componente hijo. 

* Las props son inmutables y se utilizan para personalizar y configurar los componentes hijos.

* Los componentes pueden recibir props como argumentos en su función o como atributos en su declaración JSX. Estas props pueden contener cualquier tipo de dato, como cadenas de texto, números, objetos o incluso funciones.

* El uso de props permite crear componentes reutilizables y flexibles, ya que los datos pueden ser pasados de forma dinámica desde el componente padre al componente hijo. Esto facilita la creación de interfaces interactivas y personalizables en React.



## Conceptos 

* `fragment`: Un fragmento (fragment en inglés) es una forma de agrupar múltiples elementos hijos sin agregar un nodo adicional al DOM. Los fragmentos son útiles cuando necesitas devolver varios elementos en un componente de React sin envolverlos en un elemento contenedor adicional.

* `impresión de variables en HTML:`Puede imprimir variables en HTML utilizando JSX, que es un extensión de sintaxis de JavaScript que te permite escribir código HTML dentro de tus componentes de React. JSX te permite combinar la lógica de JavaScript con la estructura de HTML de una manera más intutitiva. Las variables no pueden ser objetos debido a que JSX solamente puede representar tipos de datos primtiivos, como cadenas de texto, número y booleanos. Esto se debe a que JSX se compila a llamadas de funciones de React, y los objetos no se puden representar directamente en arból de elementos de React. 

* `PropTypes:` Los PropTypes son una característica de React que se utiliza para validar los tipos de datos de las propiedades que se pasan a un componente. Proporcionan una forma de documentar y verificar los tipos de datos esperados para asegurar un correcto uso de los componentes en una aplicación React. 
Esto es solamente necesario si estás usando JS para desarrollar.

