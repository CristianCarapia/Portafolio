function abrirImagen(src) {
    document.getElementById("modalImagen").style.display = "block";
    document.getElementById("imgModal").src = src;
}

function cerrarImagen() {
    document.getElementById("modalImagen").style.display = "none";
}
