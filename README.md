# Proyecto App Web Backend

Este es el backend de un sistema para la gestión de pacientes en un consultorio médico, construido con Node.js, Express, MongoDB (utilizando Mongoose), Morgan, Cors y Dotenv.

## Requisitos Previos

Asegúrate de tener instalado Node.js y MongoDB en tu sistema.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/LennyMA/proyectoAppWebBack.git
2. Ingresa al repositorio del proyecto:
   
   ```bash
   cd proyectoAppWebBack
3. Instala las dependencias:
   
   ```bash
   npm install
4. Crea un archivo .env en la raíz del proyecto y configura tus variables de entorno según sea necesario para la conexión a la base de datos.
## Configuración
- `config/`: Configuración y conexión a la base de datos.
- `controllers/`: Controladores de la aplicación.
- `models/`: Modelos de datos para la base de datos.
- `routes/`: Rutas de la API.
- `index.js`: Punto de entrada de la aplicación.
## Uso
1. Inicia el servidor
   
   ```bash  
   npm run dev
2. La API estará disponible en http://localhost:4800
## Endpoints de la API
### Ejemplos:
- GET /api/medicos: Obtener la lista de doctores.
- POST /api/medicos: Crear un nuevo doctor.
- GET /api/medicos/:id: Obtener detalles de un doctor específico.
- PUT /medicos/:id: Actualizar información de un doctor.
- DELETE /medicos/:id: Eliminar un doctor.
## Contribución
¡Contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, por favor crea un problema o una solicitud de extracción.
## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB y Mongoose
- Morgan
- Cors
- Dotenv
## Licencia
Este proyecto académico no tiene asignada una licencia específica. Todos los derechos de autor pertenecen al propietario del repositorio. Tenga en cuenta que esto significa que no se concede ningún permiso explícito para utilizar, modificar o distribuir el código fuente o los archivos relacionados. Cualquier uso, reproducción o distribución del proyecto debe obtener un permiso previo.
## Autor
@LennyMA  
Si tienes alguna pregunta o comentario, puedes contactarme en morenolenin1a@gmail.com.