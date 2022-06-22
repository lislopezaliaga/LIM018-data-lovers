# Data Lovers - GHIBLIFLEX

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Resumen del proyecto 📝

Este proyecto tiene como finalidad construir una página web responsive, en la cual va interactuar con una base de datos externa, 
la misma que cuenta con la información de los 20 films del studio Ghibli. Por el cual, se va importar y extraer 
los datos requeridos, según las necesidades de nuestr@s usuari@s. Logrando que puedan visualizar, la información deseada, 
de manera precisa y clara. En la cual l@s usuari@s podrán interactuar filtrando, ordenando y obteniendo un cálculo agregado de la data, 
para una mejor comprensión de la misma. Asimismo podrán encontrar infprmación detallada sobre Studio Ghibli.

## 2. Descripción del proyecto 📎

Esta página permite a los seguidores de Studio Ghibli informarse con mayor detalle sobre cada uno de los films, personajes, vehículos, locaciones, asi como la descripción detallada de cada uno de ellos. 

### 2.1 Vista Final de Proyecto 👩🏻‍🎨🎨

Para el proyecto se opto por un estilo animado, ya que nuestro objetivo es poder transmitir la información de forma clara, precisa y divertida, y que a su vez pueda ser amigable ante la vista de nuestros usuarios, asi ellos puedan tener un rapido reconocimiento de la interfaz de nuestra pagina web, y se familiricen con los componentes.
 

### 2.2 Vista Móvil 📲

![prototipo1](link de img)

### 2.3 Vista Desktop  💻

![prototipo1](link de img)

## 3. Investigación UX 🔍

### 3.1 Investigación con Seguidores de Studio Ghibli 👩
Realizamos entrevistas con diversas personas, seguidoras de Studio Ghibli y realizamos interrogantes como: ¿Qué información te gustaría saber sobre Studio Ghibli
y los films?
Para el diseño se realizó una investigación detallada sobre como les gustaría verla información a los seguidores de Studio Ghibli. También se analizó diversas páginas realacionadas con los films.

📌 Datos importante de los films

    * Titulo y portada de cada uno de los films.
    * Poder filtrar por cada año.
    * Poder filtrar por productor y/o director.
    * Buscar un film directo por su nombre.
    * Ver los personajes y sus características.
    
### 3.2 Problemática y Necesidades de los Usuarios 🗣️

Los usuarios quieren poder tener toda la información necesaria sobre los films de Studio Ghibli en una sola página.

### 3.3 Público Objetivo & Propuesta de Valor 🏆

Nuestro público objetivo son los seguidores de Studio Ghibli, y nuestra propuesta es que en una sola página web puedan encontrar toda la información de los
creadores de Studio Ghibli, asi como la información detallada de cada uno de los films.

### 3.4 Historiad de Usuario y Criterios de Aceptación  📝

📝HU 1 - Visualizar todos los Films

  YO, COMO usuario, QUIERO  como primera instancia visualizar todos los 
  films, PARA saber que films existen.
  
  📍 Criterios de Aceptación:

  [✔️] El usuario tiene que poder ver la portada del ánime, el nombre, fecha de publicación y  ID.
  [✔️] El usuario  tienen que poder ver GhibliFLEX en tres dispositivos(celular, tablet y laptop)
  [✔️] Que el usuario pueda ver los ánimes en filas y columnas.
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.
  [✔️] El código no tiene errores en ESLINT.

📝HU 2 - Ordenar Alfabéticamente Ascendente y descendente

  Yo COMO usuario QUIERO poder ordenar los ánimes alfabéticamente,
  PARA poder encontrar más rápido el ánime que busco.
  
  📍 Criterios de Aceptación:

  [✔️]  El usuario tiene que poder buscar los ánimes alfabéticamente en forma ascendente y descendente a travez de una lista desplegable.
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.
  
 📝HU 3 - Filtrar por directores y productores

  QUIERO poder filtrar los ánimes según los productores y directores
  PARA saber que ánimes comparten el mismo director y productor.
  
  📍 Criterios de Aceptación:

  [✔️]  El usuario tiene que poder filtrar los films por directores y productores
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.

📝HU 4 - Filtrar por fecha de producción

  Yo COMO usuario QUIERO ver las películas por su fecha de producción
  PARA ver cronologicamente las películas.
  
  📍 Criterios de Aceptación:

  [✔️]  El usuario tiene que poder filtrar los films por  fecha de producción
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.
  
 📝HU 5 - Filtrar por Popularidad

  Yo COMO usuario QUIERO ver las películas mas populares
  PARA enterarme cuáles son las mas populares.
  
  📍 Criterios de Aceptación:

  [✔️] El usuario visualice 6 films mas populares.
  [✔️] El usuario visualice las portadas, títulos, fechas y score de las películas mas populares.
  [✔️] El usuario visualice las películas segun orden de popularidad.
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.
  
 📝HU 6 - Ver el detalle de cada película

  Yo COMO usuario QUIERO ver el detalle de cada película
  PARA saber cuántos personajes, vehículos y locaciones tiene la película.
  
  📍 Criterios de Aceptación:

  [✔️] El usuario tiene que ver en detalle la información de cada película cuántos y cuáles son los:
      Personajes
      Vehículos
      Locaciones
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.
  
  📝HU 7 - Ver el detalle de cada personaje

  Yo COMO usuario QUIERO saber en detalle la descripción del personaje
  PARA informarme acerca de dicho personaje .
  
  📍 Criterios de Aceptación:

  [✔️]  El usuario tiene que ver en detalle la información del personaje seleccionado:
        Género
        Edad
        Color de ojos
        Color de cabello
        Especie
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.

  📝HU 8 - Ver el detalle de cada Vehículo

  Yo COMO usuario QUIERO saber en detalle la descripción del Vehículo
  PARA informarme acerca de dicho Vehículo .
  
  📍 Criterios de Aceptación:

  [✔️]  El usuario tiene que ver en detalle la información del Vehículo seleccionado:
        
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.
  
   📝HU 9 - Ver el detalle de cada Locación

  Yo COMO usuario QUIERO saber en detalle la descripción de la Locación
  PARA informarme acerca de dicha Locación .
  
  📍 Criterios de Aceptación:

  [✔️]  El usuario tiene que ver en detalle la información de la Locación seleccionado:
        
  
  🏁 Definición de Terminado:

  [✔️] Todos los criterios de aceptación son cumplidos.
  [✔️] El código tiene y pasa los test respectivos.
  
 ### 3.5 Prototipo en Baja Fidelidad 📲✏️
 
 ![prototipo1](link de img)
 
  ### 3.6 Prototipo en Alta Fidelidad 📲✏️
 
 ![prototipo1](link de img)
 
 ## 4. Objetivos de aprendizaje
 
 ###  UX
  [✔️] Diseñar la aplicación pensando y entendiendo al usuario.
  [✔️] Crear prototipos para obtener feedback e iterar.
  [✔️] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
  [✔️] Planear y ejecutar tests de usabilidad.

 ### HTML
  [✔️] Entender y reconocer por qué es importante el HTML semántico.
  [✔️] Identificar y entender tipos de selectores en CSS.
  [✔️] Entender cómo funciona flexbox en CSS.
  [✔️] Construir tu aplicación respetando el diseño planeado (maquetación).

### CSS
- [✔️] Uso de selectores de CSS
- [✔️] Modelo de caja (box model): borde, margen, padding
- [✔️] Uso de flexbox en CSS

### DOM
[✔️] Entender y reconocer los selectores del DOM (querySelector | getElement).
[✔️] Manejar eventos del DOM. (addEventListener)
[✔️] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value).

### Javascript
  [✔️] Manipular arrays (filter | sort | reduce).
  [✔️] Manipular objects (key | value).
  [✔️] Entender el uso de condicionales (if-else).
  [✔️] Entender el uso de bucles (for | forEach).
  [〰️] Entender la diferencia entre expression y statements.
  [✔️] Utilizar funciones (parámetros | argumentos | valor de retorno).
  [✔️] Entender la diferencia entre tipos de datos primitivos | no primitivos.
  [✔️] Utilizar ES Modules (import | export).

  ### Pruebas Unitarias (testing)
  [✔️] Testear funciones (funciones puras).
 
  
  ### Git y GitHub
  [✔️] Ejecutar comandos de git (add | commit | pull | status | push).
  [✔️] Utilizar los repositorios de GitHub (clone | fork | gh-pages).
  [✔️] Colaborar en Github (pull requests).
  
  ### Buenas prácticas de desarrollo
  [✔️] Organizar y dividir el código en módulos (Modularización).
  [✔️] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
  [✔️] Utilizar linter para seguir buenas prácticas (ESLINT).

  ## 5. Consideraciones Generales 🚨
  
  📍 Este proyecto se realizó en dupla
  📍 La interfaz del proyecto esta desplegada usando GitHub Pages.
  📍 El tiempo del proyecto fue de 4 semanas.


  ## 6. Checklist

  * [✔️] Usa VanillaJS.
  * [ ] Pasa linter (`npm run pretest`)
  * [✔️] Pasa tests (`npm test`)
  * [✔️] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
    lines y branches.
  * [✔️] Incluye _Definición del producto_ clara e informativa en `README.md`.
  * [✔️] Incluye historias de usuario en `README.md`.
  * [✔️] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
    `README.md`.
  * [✔️] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
    en `README.md`.
  * [ ] Incluye link a Zeplin en `README.md`.
  * [ ] Incluye el listado de problemas que detectaste a través de tests de
    usabilidad en el `README.md`.
  * [✔️] UI: Muestra lista y/o tabla con datos y/o indicadores.
  * [✔️] UI: Permite ordenar data por uno o más campos (asc y desc).
  * [✔️] UI: Permite filtrar data en base a una condición.
  * [✔️]UI: Es _responsive_.
