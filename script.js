// Referencias a los elementos del slider
const slider = document.getElementById("slider");
const anio = document.getElementById("anio");
const precio = document.getElementById("precio");

// Datos estadísticos simulados (puedes cambiarlos)
const precios = {
  2020: 45.3,
  2021: 60.1,
  2022: 75.5,
  2023: 80.2,
  2024: 70.6,
  2025: 85.4
};

// Actualizar cuando se mueve el slider
slider.addEventListener("input", () => {
  const valor = slider.value;
  anio.textContent = valor;
  precio.textContent = precios[valor] || "Sin datos";
});
