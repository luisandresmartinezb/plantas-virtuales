# 🌿 Plantas Virtuales

Mini proyecto desarrollado con **Angular** para la gestión de una colección de plantas de interior.  
Permite consultar, añadir, editar, eliminar y marcar el estado de riego de cada planta de forma sencilla y visual.

---

## 🧾 Descripción

Esta aplicación permite gestionar una colección de plantas con las siguientes características:

✔ Lista de plantas con nombre, imagen y estado de riego  
✔ Añadir nuevas plantas con nombre e imagen generada automáticamente a partir del nombre  
✔ Editar plantas existentes  
✔ Marcar regada/no regada  
✔ Filtrar por estado de riego (todas, regadas, no regadas)  
✔ Botón “Regar todas” que actualiza todas las plantas  
✔ Backend simulado con **json-server**

---

## 💻 Tecnologías utilizadas

| Tecnología | Versión |
|------------|---------|
| Angular    | 17+     |
| TypeScript | ES2022  |
| json-server| —       |
| HTML/CSS   | —       |
| Bootstrap  | (opcional para estilos) |

---

## 🔁 Funcionalidades

La aplicación incluye:

- **PlantListComponent**  
  Muestra todas las plantas con indicadores de si están regadas y acciones para editar, eliminar o marcar riego.

- **AddPlantComponent**  
  Formulario para crear nuevas plantas o editar existentes.

- **PlantService**  
  Servicio Angular que se comunica con el backend json-server utilizando HttpClient.

- **Routing**  
  Permite navegar entre la lista principal y el formulario de añadir/editar planta.

---

## 📁 Estructura del proyecto

plantas-virtuales/
├─ src/
│ ├─ app/
│ │ ├─ components/
│ │ │ ├─ add-plant/
│ │ │ └─ plant-list/
│ │ ├─ services/
│ │ └─ models/
│ ├─ assets/
│ │ └─ plants/
│ └─ ...
├─ db.json
├─ angular.json
└─ package.json


---
## 🚀 Instalación y arranque

### 1) Clonar el repositorio
```bash
git clone https://github.com/luisandresmartinezb/plantas-virtuales.git
cd plantas-virtuales


### 2) Instalar dependencias
```bash
npm install

### 3) Levantar el backend simulado
```bash
npx json-server --watch db.json --port 3000

Este comando sirve la API REST en: http://localhost:3000/plants

### 4) Arrancar la aplicación Angular
```bash
ng serve -o















