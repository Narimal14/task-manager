# Task Manager

Este es un proyecto de **gestión de tareas** creado con **React** en el frontend y **Node.js** con **Express** en el backend. Permite agregar tareas con un título y una descripción, mostrando las tareas guardadas en una base de datos MongoDB. El proyecto se ha desarrollado como parte de una práctica de desarrollo web con un enfoque en la construcción de aplicaciones completas de extremo a extremo.

## Características

- **Frontend en React**: Interfaz de usuario interactiva para agregar y mostrar tareas.
- **Backend con Node.js y Express**: Servidor que gestiona las tareas y las guarda en una base de datos MongoDB.
- **Base de datos MongoDB**: Utiliza MongoDB para almacenar las tareas de manera persistente.

## Tecnologías utilizadas

- **Frontend**:
  - **React**: Librería de JavaScript para construir la interfaz de usuario.
  - **Axios**: Para realizar solicitudes HTTP desde el frontend al backend.
  - **CSS**: Para estilizar la interfaz, con un diseño minimalista en colores pastel.
  
- **Backend**:
  - **Node.js**: Entorno de ejecución de JavaScript en el servidor.
  - **Express**: Framework para Node.js que facilita la creación del servidor y las rutas de la API.
  - **MongoDB**: Base de datos NoSQL utilizada para almacenar las tareas.
  - **Mongoose**: ODM (Object Data Modeling) para trabajar con MongoDB de manera más sencilla.
  - **dotenv**: Para gestionar las variables de entorno y mantener las configuraciones seguras.

## Instalación y ejecución

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/Narimal14/task-manager.git
2.   Instalar dependencias:
2.1  En la carpeta del backend (task-manager-backend):
     cd task-manager-backend
     npm install
2.2  En la carpeta del frontend (task-manager-frontend):
     cd task-manager-frontend
     npm install
3.   Configura las variables de entorno:

     Crea un archivo .env en el directorio del backend con tu URI de MongoDB:

     MONGO_URI=mongodb+srv://medinafacundotra:b93VBfTCxgDTbrZr@cluster0.qfim7mc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
     PORT=5000
4.   Inicia el servidor backend:

     cd task-manager-backend
     npm start
     Inicia el servidor frontend:
     cd task-manager-frontend
     npm start
     El frontend estará disponible en http://localhost:3000 y el backend en http://localhost:5000.


