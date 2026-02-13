# ApiDelTiempo 🌤️

**Proyecto simple que muestra el pronóstico meteorológico de 5 días usando la API pública de Open-Meteo y la geolocalización del navegador.**

## Verla en funcionamiento
https://marquesitoclase.github.io/ApiTiempoRepository/

## 🧩 Características
- Pronóstico a 5 días para la ubicación actual.
- Uso de geolocalización del navegador.
- Uso de una API libre del tiempo (Open-Meteo).
- Interfaz sencilla con tarjetas por día.

## ⚙️ Tecnologías
- HTML, CSS, JavaScript
- API: https://open-meteo.com

## 🚀 Instalación y ejecución
1. Clona el repositorio:
   ```bash
   git clone <tu-repo-url>
   cd ApiDelTiempo
   ```
2. Abre el proyecto con un servidor local:
   - O usa la extensión Live Server de VS Code.

## 🧭 Uso
- Al cargar la página, el navegador solicitará permiso para acceder a tu ubicación.
- Si se concede, se mostrará el pronóstico en tarjetas con iconos y temperaturas.
- Mensajes de error manejados: "No se pudo obtener la ubicación." y "Error al obtener los datos.".

## 🔧 Personalización rápida
- Cambiar días del pronóstico: editar `forecast_days` en la URL dentro de `js/index.js`.
- Localización de fechas: modificar `toLocaleDateString` en `formatearFecha`.

## 📁 Estructura del proyecto
- `index.html` — página principal
- `css/index.css` — estilos
- `js/index.js` — lógica y llamadas a la API
- `README.md` — documentación

## 🤝 Contribuciones
Abre issues o PRs para mejoras, correcciones o nuevas funcionalidades.

## 📝 Licencia
cc BY

## ✉️ Autor
Juan Luis Márquez Canedo.

## ToDo
Crear un buscador que te permita visualizar lugares que no sean tu ubicación