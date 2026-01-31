# Historia de usuario semana 4

Aplicación web con enrutamiento dinámico, autenticación y servidor API JSON.

## Debes clonar el Proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd week4
```

## Debes Instalar las Dependencias

Instala todas las dependencias necesarias del proyecto:

```bash
npm i
```

## Iniciar el Servidor de Desarrollo

Inicia el servidor de desarrollo con Vite en `http://localhost:5174/`:

```bash
npm run dev
```

## Iniciar el Servidor API

En otra terminal, inicia el servidor JSON Server en `http://localhost:3002`:

```bash
npm run api
```

## Uso

1. Ejecuta `npm i` para instalar las dependencias
2. Abre dos terminales:
   - En la primera: ejecuta `npm run dev` para iniciar la aplicación
   - En la segunda: ejecuta `npm run api` para iniciar el servidor API
3. Accede a `http://localhost:5174/` en tu navegador

## Estructura del Proyecto

```
.
├── db.json             # Base de datos JSON
├── index.html          # Archivo HTML principal
├── styles              # Carpeta de Estilos CSS
├── package.json        # Dependencias del proyecto
├── src/
|    └──services/
|        ├──main.js      # Funciones y enrutamiento
|        └── tasks.js    # Servicios de usuario
└──  public/
       └── views/          #Carpeta de vistas
            ├── home.html   # Template de inicio
            └── taskList.html     # Template de tareas

```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run api` - Inicia el servidor API JSON en puerto 3001
