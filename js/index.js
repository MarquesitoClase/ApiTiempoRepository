if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        pos => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            obtenerTiempo(lat, lon);
        },
        () => {
            document.getElementById("resultado").textContent =
                "No se pudo obtener la ubicación.";
        }
    );
}

function obtenerTiempo(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&forecast_days=5&timezone=auto`;

    fetch(url)
        .then(r => r.json())
        .then(data => mostrarTarjetas(data))
        .catch(e => {
            console.error(e);
            document.getElementById("resultado").textContent =
                "Error al obtener los datos.";
        });
}

function mostrarTarjetas(data) {
    const dias = data.daily.time;
    const max = data.daily.temperature_2m_max;
    const min = data.daily.temperature_2m_min;
    const codigos = data.daily.weathercode;

    let html = `<div id="contenedor">`;

    for (let i = 0; i < dias.length; i++) {
    const info = interpretarTiempo(codigos[i]);

    html += `
        <div class="tarjeta">
            <div class="fecha">${formatearFecha(dias[i])}</div>
            <div class="icono">${info.icono}</div>
            <div class="${info.class}">${info.texto}</div>
            <p>🌡️ ${max[i]}°C / ${min[i]}°C</p>
        </div>
    `;
}


    html += `</div>`;
    document.getElementById("resultado").innerHTML = html;
}

function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
        month: "short"
    });
}

function interpretarTiempo(codigo) {
    if (codigo === 0) {
        return { texto: "Soleado", icono: "☀️", class: "soleado" };
    }
    if (codigo <= 3) {
        return { texto: "Parcialmente nublado", icono: "⛅", class: "parcial" };
    }
    if (codigo <= 48) {
        return { texto: "Nublado", icono: "☁️", class: "nublado" };
    }
    if (codigo <= 67) {
        return { texto: "Lluvia", icono: "🌧️", class: "lluvia" };
    }
    if (codigo <= 77) {
        return { texto: "Nieve", icono: "❄️", class: "nieve" };
    }
    if (codigo <= 99) {
        return { texto: "Tormenta", icono: "⛈️", class: "tormenta" };
    }

    return { texto: "Desconocido", icono: "❓", class: "desconocido" };
}