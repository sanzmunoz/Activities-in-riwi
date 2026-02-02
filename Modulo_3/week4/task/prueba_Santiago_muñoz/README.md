# PRUEBA DE DESEMPEÑO – MÓDULO 3 CRUDTASK

Web application with dynamic routing, authentication and JSON server API.

## You must clone the Project

```bash
git clone <URL_DEL_REPOSITORIO>
cd prueba
```

## You must install the dependencies

Installs all necessary project dependencies:

```bash
npm i
```

## Start the Development Server

Starts the development server with Vite on `http://localhost:5173/`:

```bash
npm run dev
```

## Start the API Server

On another terminal, start the JSON server at `http://localhost:3003`:

```bash
npm run api
```

## Use

1. Run `npm i` to install dependencies
2. Opens two terminals:
   - On the first: run `npm run dev' to start the application
   - In the second: run `npm run api' to start the API server
3. acess `http://localhost:5174/` in your browser



## project structure

```
.
├── db.json             # JSON database
├── index.html          # main HTML file
├── styles              # CSS Styles Folder
├── package.json        # project dependencies
├── src/
|    ├──main.js         # Functions and project development
|    └──services/
|        └── auth.js    # Servicios de usuario
└──  public/
       └── views/                # views folder
            ├── login.html       # Template to start up
            ├── notFound.html    # If no page is found
            ├── regist.html      # Template for registration
            ├── taskForm.html    # Template for the format
            ├── user.html        # template for user
            └── taskList.html    # Template for tasks

```

## Scripts Disponibles

- `npm run dev` - Starts the development server
- `npm run api` - Starts the JSON API server on port 3003
