# Testing - React - Hello World

* Introducción a pruebas 
* AAA
  * Arrange - Arreglar
  * Act - Actuar 
  * Assert - Afirmar 
* Primeras pruebas 
* Jest 
* Expect 
* toBe
* Enzyme 
* Comandos útiles en la terminal para pruebas 
* Revisar elementos renderizados en el componente
* Simular eventos


## Unitarias y de integración 

  * `Unitarias:` Enfocadas en pequeñas funcionalidades
  * `Integración:` Enfocadas en cómo reaccionan varis piezas en conjunto

Las pruebas deben ser: 
  * Fáciles de escribir
  * Fáciles de leer 
  * Confiables
  * Rápidas
  * Principalmente unitarias
Todos estos pasos son conocidos cómo AAA

### Arrange - Arreglar
Preparamos el estado inicial -> El suejeto a probar

  * Iniciamos variables 
  * Importaciones necesarias 

### Act - Actuar 
Aplicamos acciones o estímulos
  * Llamamos métodos 
  * Simulamos clicks
  * Realizar acciones sobre el paso anterior
### Assert - Afirmar
Observar el comportamiento resultante 
  * Son los resultados esperados 

### Mitos 
* Hacen que mi aplicación no tenga errores
* Las pruebas no pueden fallar
* Hacen más lenta mi aplicación 
* Es una pérdida de tiempo
* Hay que probar todo

