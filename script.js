function agregarALaPantalla(value) {
    const pantalla = document.getElementById('pantalla');
    const mensajeError = document.getElementById('mensajeError');
    const valorActual = pantalla.value;
    
    mensajeError.textContent = '';

    const ultimoCaracter = valorActual.charAt(valorActual.length - 1);

    if (esOperador(ultimoCaracter) && esOperador(value)) {
        pantalla.value = valorActual.slice(0, -1) + value;
    } else {
        pantalla.value += value;
    }
}

function esOperador(caracter) {
    return ['+', '-', '*', '/'].includes(caracter);
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const mensajeError = document.getElementById('mensajeError');

    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;

    if (isFinite(result)) {
        pantalla.value = result;
        mensajeError.textContent = ''; 
    } else {
        mensajeError.textContent = 'Error: División por cero';
        pantalla.value = ''; 
    }
}

function borrarDigito() {
    const pantalla = document.getElementById('pantalla');
    const mensajeError = document.getElementById('mensajeError');
    const valorPantalla = pantalla.value;

    mensajeError.textContent = '';

    if (valorPantalla.length > 0) {
        pantalla.value = valorPantalla.slice(0, -1);
    }
}

function limpiarPantalla() {
    const pantalla = document.getElementById('pantalla');
    const mensajeError = document.getElementById('mensajeError');
    
    pantalla.value = '';
    mensajeError.textContent = '';
}

