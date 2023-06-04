# Challenge SportClub

Este es el archivo README para el proyecto "challenge-sportclub". Proporciona una descripción general del proyecto, sus dependencias y los scripts disponibles para el desarrollo y despliegue.

## Descripción del Proyecto

- **Nombre:** challenge-sportclub
- **Privado:** true
- **Versión:** 0.0.0
- **Tipo:** módulo

## Dependencias

El proyecto tiene las siguientes dependencias:

- **@emotion/react:** 11.11.0
- **@emotion/styled:** 11.11.0
- **@fontsource/roboto:** 5.0.2
- **@mui/icons-material:** 5.11.16
- **@mui/material:** 5.13.3
- **@mui/x-date-pickers:** 6.6.0
- **dayjs:** 1.11.8
- **react:** 18.2.0
- **react-dom:** 18.2.0
- **wouter:** 2.11.0

## Dependencias de Desarrollo

El proyecto tiene las siguientes dependencias de desarrollo:

- **@types/react:** 18.2.8
- **@types/react-dom:** 18.2.4
- **@vitejs/plugin-react-swc:** 3.3.1
- **eslint:** 8.41.0
- **eslint-config-prettier:** 8.8.0
- **eslint-config-standard:** 17.1.0
- **eslint-plugin-import:** 2.27.5
- **eslint-plugin-node:** 11.1.0
- **eslint-plugin-prettier:** 4.2.1
- **eslint-plugin-promise:** 6.1.1
- **eslint-plugin-react:** 7.32.2
- **eslint-plugin-react-hooks:** 4.6.0
- **eslint-plugin-react-refresh:** 0.4.1
- **prettier:** 2.8.8
- **vite:** 4.3.9

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- **dev:** Ejecuta el servidor de desarrollo utilizando Vite.
- **build:** Construye la versión optimizada del proyecto lista para producción.
- **lint:** Verifica el estilo de los archivos fuente utilizando ESLint con las reglas de configuración establecidas.
- **preview:** Construye y muestra una vista previa de la versión optimizada del proyecto lista para producción.

Para ejecutar un script, puedes utilizar el siguiente comando:

```bash
npm run <script>
```

Reemplaza `<nombre-del-script>` con el script deseado de los disponibles mencionados anteriormente.

## Empezando

Para comenzar con el proyecto, sigue estos pasos:

1. Clona el repositorio.
2. Instala las dependencias del proyecto utilizando el siguiente comando:

```bash
npm install
```

3. Una vez que se instalen las dependencias, puedes iniciar el servidor de desarrollo utilizando el siguiente comando:


```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y te proporcionará una URL para acceder a la aplicación en tu navegador.

4. Comienza a desarrollar y personalizar la aplicación según los requisitos de tu proyecto.

## Despliegue

Para desplegar la aplicación, sigue estos pasos:

1. Construye la versión optimizada del proyecto lista para producción utilizando el siguiente comando:

```bash
npm run build
```

2. Una vez que se construya la aplicación, puedes iniciar un servidor local para previsualizar la aplicación utilizando el siguiente comando:

```bash
npm run preview
```

3. Si deseas desplegar la aplicación en un servidor web, puedes copiar el contenido de la carpeta `dist` en el directorio raíz del servidor.

## Estructura de Archivos

La estructura de archivos del proyecto es la siguiente:

```bash
challenge-sportclub

├───── public
│       ├── vite.svg
├───── src
│       ├── components
│       │   ├── Navbar
│       │   │   ├── Navbar.jsx
│       │   │   └── NavbarDrawer.jsx
│       │   ├── Carrousel.jsx
│       ├── hook
│       │   ├── useForm.jsx
│       ├── Layout
│       │   ├── Layout.jsx
│       ├── Theme
│       │   ├── Theme.js
│       ├── views
│       │   ├── Home.jsx
│       │   ├── FormPage.jsx
│       ├── App.jsx
│       ├── main.jsx
├── .dockerignore
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── dockerfile
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js

```

## Dockerización

Si deseas Dockerizar el proyecto, puedes seguir los siguientes pasos:

### Paso 1: Crear el archivo Dockerfile

En el directorio raíz del proyecto, crea un archivo llamado `Dockerfile` sin extensión y pega el siguiente contenido:

```Dockerfile
# Establecer la imagen base
FROM node:latest

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json . 

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos al directorio de trabajo
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "npm", "run", "dev" ]
```

### Paso 2: Crear el archivo .dockerignore

En el directorio raíz del proyecto, crea un archivo llamado `.dockerignore` y pega el siguiente contenido:

```bash
node_modules
```

### Paso 3: Construir la imagen de Docker

Para construir la imagen de Docker, ejecuta el siguiente comando:

```bash
docker build -t <nombre-de-la-imagen> .
```

Reemplaza `<nombre-de-la-imagen>` con el nombre que deseas asignarle a la imagen.

### Paso 4: Ejecutar la imagen de Docker

Para ejecutar la imagen de Docker, ejecuta el siguiente comando:

```bash
docker run -p 3000:3000 <nombre-de-la-imagen>
```

Reemplaza `<nombre-de-la-imagen>` con el nombre de la imagen que asignaste en el paso anterior.



## Autor
Carlos Medina

[![LinkedIn][linkedin-shield]][linkedin-url]
[![GitHub][github-shield]][github-url]

<!-- Enlaces a redes sociales -->
[linkedin-url]: https://www.linkedin.com/in/carlosmedina06/
[github-url]: https://github.com/Carlosmedina06

<!-- Escudos de redes sociales -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/carlosmedina06/
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=flat-square&logo=github&logoColor=white&link=https://github.com/Carlosmedina06



