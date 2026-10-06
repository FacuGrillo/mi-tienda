# 🛒 CLI de Gestión de Productos con Node.js (DummyJSON)

Este proyecto es una aplicación de línea de comandos (CLI) en Node.js que permite consultar, crear y eliminar productos usando la API de DummyJSON.

## ⚙️ Instalación

1. Clonar el repositorio:
   git clone https://github.com/FacuGrillo/mi-tienda.git
   cd mi-tienda

2. Instalar dependencias:
   npm install

3. Verificar que en package.json esté configurado:
   {
     "type": "module",
     "scripts": {
       "start": "node index.js"
     }
   }

## 🚀 Uso

Todos los comandos se ejecutan desde la terminal con:
   npm run start <METHOD> <ROUTE> [args...]

🔍 Consultar todos los productos:
   npm run start GET products

🔍 Consultar un producto específico:
   npm run start GET products/15

➕ Crear un producto nuevo:
   npm run start POST products <title> <price> <category>
Ejemplo:
   npm run start POST products T-Shirt-Rex 300 remeras

❌ Eliminar un producto:
   npm run start DELETE products/7

## ⚠️ Ejemplos de validaciones y errores

Eliminar sin ID:
   npm run start DELETE products
   → ❌ Error: Debes indicar un ID para eliminar. Ejemplo: DELETE products/7

ID no numérico:
   npm run start GET products/abc
   → ❌ Error: El ID debe ser un número válido.

Faltan argumentos al crear:
   npm run start POST products T-Shirt-Rex
   → ❌ Error: faltan argumentos. Uso: POST products <title> <price> <category>

Precio no numérico:
   npm run start POST products T-Shirt-Rex hola remeras
   → ❌ Error: el precio debe ser un número válido.

## 📌 Ejemplo de flujo correcto

1. Listar productos → GET products
2. Ver detalle de un producto → GET products/15
3. Crear producto → POST products T-Shirt-Rex 300 remeras
4. Eliminar producto → DELETE products/7

## 🛠️ Tecnologías utilizadas
- Node.js (con fetch nativo, sin dependencias externas)
- ESModules

## 📎 Notas importantes
- La API de DummyJSON simula operaciones de creación y eliminación: los cambios no se guardan realmente.
- Este proyecto es un ejercicio práctico para manejar rutas, métodos HTTP y argumentos desde la terminal.

## 📄 .gitignore

# Dependencias
node_modules/

# Logs
npm-debug.log
yarn-error.log
*.log

# Archivos temporales
*.tmp

# Configuración local
.env

# Archivos de sistema
.DS_Store
Thumbs.db
