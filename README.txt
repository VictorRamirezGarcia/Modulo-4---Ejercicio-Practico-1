
Proyecto-Base

Este es un proyecto web del Hospital Clinico Dr Victor Ramirez que utiliza ReactJS para crear un sitio con un sistema de navegaci�n. El proyecto incluye p�ginas como "Inicio", "Servicios" y "Contacto".

Tabla de Contenidos

Tecnolog�as Usadas
Estructura del Proyecto
Instalaci�n
Uso
Scripts
Contribuciones
Licencia

Tecnolog�as Usadas

ReactJS: Para la estructuraciond e la pagina y cada uno de los componentes de la misma. Ademas de la renderizacion de los datos, flujo de informacion y creacion de los formularios para el manejo de la interaccion del usuario.
CSS: Para la escritura de estilos en CSS con caracter�sticas adicionales como variables y anidamiento.


Estructura del Proyecto

index.html: Es el archivo HTML principal que funciona como punto de entrada de la aplicación.
index.css: Archvio con los estilos css de la pagina index
main.jsx: Es el segundo archivo que se llama desde el index.html definiendo la extructura mas general de la pagina en ReactJS.
App.jsx: Es el tercer archivo que se llamada desde el main.jsx y define lo que el avegador presenta en el DOM.
App.css: Archivo con los estilos css de la pagina App.

DoctorCard.jsx: Pagina con el Componente ReactJs, que muestra la información de un doctor (nombre, especialidad, años de experiencia).
ServiceList.jsx: Pagina con el Componente ReactJs, que lista los servicios médicos disponibles en el hospital.
AppointmentForm.jsx: Pagina con el Componente ReactJs, que muestra uUn formulario para que los usuarios agenden una cita con un doctor del hospital por la pagina.

Instalaci�n

Clona este repositorio:

git clone https://github.com/VictorRamirezGarcia/Modulo-4---Discusion-y-Analisis-de-Casos.git
cd tu-repo


Instruciones para visualizacion:

Primero debes tener instalado Node.js, para ello en tu consola debes ejecutar el siguiente comando

nvm install node

Luego en tu carpeta donde tengas tu proyecto debes ejecutar los siguientes comandos

cd tu-repo
npm run dev

Luego ingresar en el link indicado por la consola para ingresar a la pagina de inicio de tu aplicacion web con ReactJs.

Ejemplo de como se visualizaria en tu consola:

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


Actualizaciones README especificar Modulo 4 - Ejercicio Practico 1

- Descripci�n de la integraci�n de prompts y c�mo se validan los datos ingresados por el usuario.

En la pagina llamada "Contacto2.html" se implmenteo la funcionalidad de prompts para obtener los datos del usuario al precionar el boton llamado "Reservar Cita" ubicado en el seccion del menu de navegacion de todas las paginas. LO anterior para la obtencion de los siguientes datos: Nombre, Correo electronico, telefono, fecha (formato YYYY-MM-DD) y hora (formato HH:MM)


Ejercicio Práctico: Desarrollo de Componentes Básicos con ReactJS para el Proyecto del Hospital

Contexto:
En este ejercicio práctico, los estudiantes comenzarán a desarrollar el sistema del hospital
utilizando los elementos fundamentales de ReactJS. Implementarán componentes
reutilizables para distintas secciones de la web del hospital, usando JSX para renderizar datos
y manejar el flujo de información con props. También deberán utilizar Hooks y formularios para
manejar la interacción del usuario.


Requisitos:

1. Creación de Componentes en ReactJS (1.5 puntos)
- Crea los siguientes componentes reutilizables para la aplicación del hospital:
- DoctorCard: Muestra la información de un doctor (nombre, especialidad, años
de experiencia).
- ServiceList: Lista los servicios médicos disponibles en el hospital.
- AppointmentForm: Un formulario para que los usuarios agenden una cita con
un doctor.
- Asegúrate de que los componentes sean modulares y puedan ser reutilizados en otras
secciones.

Respuesta: Se han creado los tres compinentes aparte en los archivos llamado "DoctorCard.jsx", "ServiceList.jsx"
y "AppointmentForm.jsx" los cuales son reutilizables y modulares



2. Uso de JSX para Renderización de Datos (1 punto)
- Utiliza JSX para crear la estructura visual de los componentes. Asegúrate de:
- Insertar expresiones JSX para mostrar los datos dinámicos de los doctores,
servicios y citas.
- Utilizar correctamente atributos en JSX y evitar errores comunes como el uso
incorrecto de className en lugar de class.

Respuesta:
En el archivo llamado "App.jsx" se utiliza JSX para mostrar una estructura visual de cada una de las tres paginas de sitio web del hospital que serian "Home", "Servicios" y "Contacto". Ademas se utilizan expresiones JSX para mostrar los datos dinamicos de los doctores por ejemplo en la "Home".



3. Flujo de Datos con Props (1 punto)
- Implementa props para pasar datos entre los componentes:
- Pasa los datos de doctores al componente DoctorCard desde el componente
principal.
- Pasa los datos de servicios al componente ServiceList desde el componente
principal.
- Usa props para manejar los datos de entrada en el formulario de citas
(AppointmentForm), como el nombre del paciente y el doctor seleccionado.

Respuesta: 
Se implemento props para pasar los datos en el componente "AppointmentForm.jsx", donde tambiej se pasan los doctores al campo del nombre del doctor con los doctores disponibles en el hospital.
Tambien se pasan los datos de los servicios desde el componente priciapla "App.jsx" hacia el componente llamado "ServiceList.jsx".



4. Listas y Keys en React (1 punto)
- Utiliza correctamente listas y keys en React para renderizar dinámicamente la lista de
doctores y servicios.
- Asegúrate de que cada ítem de la lista tenga una key única para optimizar el
rendimiento de la aplicación.

Respuesta: 
En el archvio "App.jsx" cuando se llama al compinente "DoctorCard" este se llama utilizando tambien una key para renderizar la lista de los doctores. En cuanto al componente "ServiceList" esta key se renderiza desde el mismo componente.



5. Formulario con Manejo de Estado (1 punto)
- Crea el formulario de citas (AppointmentForm) y utiliza Hooks como useState
para manejar los datos del formulario (nombre del paciente, especialidad del doctor,
fecha de la cita).
- Al enviar el formulario, muestra los datos ingresados en la consola del
navegador o en la interfaz.

Respuesta:
Se creo el componente llamado "AppointmentForm" para el formulario de las citas y para manejar los datos del Nombre del paciente, doctor y fecha de la cita. Luego esa informacion al precionar el boton de "Agendar Cita" se muestra por la consola del navegador.



6. Introducción a Hooks y Ciclo de Vida (1.5 puntos)
- Utiliza Hooks para manejar el ciclo de vida de los componentes:
- Usa useEffect para cargar la lista de doctores y servicios cuando el
componente principal se monta en el DOM.
- Usa useState para manejar el estado de las citas y los servicios seleccionados
por el usuario.

Respuesta:
En los llamdaso y componentes "DoctorCard" y "ServiceList" se utiliza "useEffect" y "useState" para cargar y manejar el estado de los datos respectivamente.

Creditos:
Imagenes sacada de buscador Google.