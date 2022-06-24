FAVS

Esta API está diseñada para el proyecto Favs. Se creó utilizando para la lógica de Back end, Mongoose y para la base de datos MongoDB.

Para iniciar con el despliegue de la aplicación, clone este repositorio en su máquina local e inmediatamente después ejecute en la consola de comandos donde esta guardado el proyecto el comando:
npm install

Esto instalará automáticamente todas las dependencias necesarias para ejecutar la API, una vez hecho esto podrá ejecutar la API mediante el comando:
npm run start

Cuando la API ya esté desplegada podrá hacer uso de todas sus funcionalidades, las cuales son
• Autenticación y logueo de un usuario a la vez mediante un correo y una contraseña.
• Crear una lista vacía de favoritos con un nombre y un ID único ligado al usuario que la creó.
• Mostrar una lista individual mediante la provisión de un ID.
• Mostrar todas las listas creadas en la base de datos.
• Borrar una lista mediante la provisión de un ID.
• Crear un Fav que contiene un título, una descripción y un link mediante la provisión del ID de una lista para que este se ligue a la misma.

Autenticación
Para realizar el proceso de autenticación se deberá enviar al end point las credenciales del usuario que constan de un email y contraseña válidos en el cuerpo de la petición http con el método POST en formato JSON, por ejemplo:

{
“email”: “kz@mz.com ”,
“password”: “12345”
}

A la URL http://localhost:8080/auth/user, si el usuario se encuentra en la base de datos recibirá de vuelta una respuesta en formato JSON que contiene el token que le servirá para autenticar todas sus solicitudes a la API, por ejemplo:

{
"token":
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFjNjM1MTljZjlkNTQ5YjA3YWU2NTEiLCJpYXQiOjE2MjE5MTMyNjIsImV4cCI6MTYyMTk5OTY2Mn0.WkptwtzkfxNu5sQ28idbt4bJ7RDbXvVNlZXF0Z0ht-0"
}

En caso de que el email del usuario no se encuentre en la base de datos recibirá un mensaje de vuelta en formato JSON que le indicará que el usuario ha sido registrado así que deberá ingresar nuevamente para loguearse y así recibir el token.

Crear una única lista

Para crear una lista nueva deberá proveer al end point el nombre de la lista, en el cuerpo de la petición http con el método POST en formato JSON, por ejemplo:

{
“name”: “Una lista”
}

Y un header adicional llamado Autorización que contendrá la palabra Bearer seguido del token que recibió en la autenticación del usuario a la URL http://localhost:8080/api/create. Esto creará una nueva lista vacía con un único ID ligada al usuario.

Mostrar una única lista

Para mostrar una única lista deberá tener presente el ID único de esa lista, que será devuelto al crearlo junto con la estructura de la lista en formato JSON. Este ID deberá ser agregado como parámetro a la petición http con método GET al final de la URL http://localhost:8080/api/show/, además, deberá agregar un header adicional llamado Autorización que contendrá la palabra Bearer seguido del token que recibió en la autenticación del usuario.

Mostrar todas las listas

Para mostrar todas las listas presentes en la base de datos, deberá hacer una petición http con método GET, agregando un header adicional llamado Autorización que contendrá la palabra Bearer seguido del token que recibió en la autenticación del usuario a la URL http://localhost:8080/api/list.

Borrar una única lista

Para borrar una única lista deberá tener presente el ID único de esa lista, que será devuelto al crearla junto con la estructura de la lista en formato JSON. Este ID deberá ser agregado como parámetro a la petición http con método DELETE al final de la URL http://localhost:8080/api/delete/, además, deberá agregar un header adicional llamado Autorización que contendrá la palabra Bearer seguido del token que recibió en la autenticación del usuario.

Crear un único Fav

Para crear un único Fav deberá proveer al end point los valores de title, description y link en el cuerpo de la petición http con el método POST en formato JSON, por ejemplo:

{
“title”: “Un título”
“description”: “una descripción”
“link”: “http://someurl”
}

Y un header adicional llamado Autorización que contendrá la palabra Bearer seguido del token que recibió en la autenticación del usuario a la URL http://localhost:8080/fav/create/, seguido del ID único de la lista a la que quiere agregar el Fav. Esto creará un único Fav ligado a la lista con un único ID.
