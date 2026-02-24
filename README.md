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

## Tecnologías utilizadas

| Tecnología | Versión |
|------------|---------|
| Angular    | 17+     |
| TypeScript | ES2022  |
| json-server| —       |
| HTML/CSS   | —       |
| Bootstrap  | (opcional para estilos) |

---

## Funcionalidades

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

## Estructura del proyecto
```bash
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

### 4)Arrancar la aplicación Angular
```bash
ng serve -o

La aplicación se abrirá automáticamente en tu navegador en: http://localhost:4200


---

## Funcionalidades

- 📋 Visualización de todas las plantas
- ➕ Añadir nuevas plantas
- ✏️ Editar plantas existentes
- ❌ Eliminar plantas
- 💧 Marcar plantas como regadas / no regadas
- 🔍 Filtrar por estado (todas, regadas, no regadas)
- 🌊 Botón "Regar todas"
- 🖼 Generación automática de imagen a partir del nombre
- 🛡 Imagen por defecto si no existe la imagen indicada

---

##  API REST (json-server)

La aplicación consume un backend simulado mediante json-server en el puerto 3000.

Endpoints disponibles:

GET    /plants  
POST   /plants  
PATCH  /plants/:id  
DELETE /plants/:id  

Base URL:
http://localhost:3000/plants

---

## Modelo de datos

Cada planta contiene las siguientes propiedades:

```ts
{
  id: number;
  name: string;
  watered: boolean;
  image: string;
}


---

# ✅ 4️⃣ Sección: Objetivo académico

Muy importante para examen:

```markdown
---

## Objetivo académico

Este proyecto demuestra el uso de:

- Componentes standalone en Angular
- Directivas estructurales (*ngFor, *ngIf)
- Property Binding y Event Binding
- Formularios Template-driven
- Servicios con HttpClient
- Routing básico
- Consumo de API REST
- Gestión de estado

---

##  Autor

Luis Andrés Martínez Berraquero.  
Front Avanzado (Angular) – Examen obligatorio


