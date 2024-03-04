function cambiarNombre() {
  const nuevoNombre = prompt("¿Cuál es tu nombre?");
  if (nuevoNombre) {
    document.getElementById("nombre").textContent = nuevoNombre;
  }
}
