// Escuchar teclas en toda la página
document.addEventListener('keydown', function(event) {
    // Si es número
    if (event.key >= '0' && event.key <= '9') {
        agregarALaPantalla(event.key);
    }

    // Si es operador permitido
    if (['/', '*', '-', '+', '.', '(', ')'].includes(event.key)) {
        agregarALaPantalla(event.key);
    }

    // Si es Enter (hacer cálculo como si fuera "=")
    if (event.key === 'Enter') {
        calcular();
    }

    // Backspace = borrar último
    if (event.key === 'Backspace') {
        borrarDigito(); 
        event.preventDefault(); 
    }
});

function agregarALaPantalla(value) {
    const pantalla = document.getElementById('pantalla');
    const valorActual = pantalla.value;
    
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
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;

    if (isFinite(result)) {
        pantalla.value = result;
    } else {

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Error: Operación inválida"
        });

        pantalla.value = ''; 
    }
}

function borrarDigito() {
    const pantalla = document.getElementById('pantalla');
    const valorPantalla = pantalla.value;

    if (valorPantalla.length > 0) {
        pantalla.value = valorPantalla.slice(0, -1);
    }
}

function limpiarPantalla() {
    const pantalla = document.getElementById('pantalla');    
    pantalla.value = '';
}

// MODO LIGHT-DARK

let toggleSwitch = document.getElementById('toggleSwitch');
let calculadora_light = document.getElementsByClassName('calculadora');
let pantalla_light = document.getElementsByClassName('pantalla_resultado');

let botonesNormales = document.querySelectorAll('.boton_normal');


toggleSwitch.addEventListener('click', cambiarColor);

function cambiarColor() {
    if (toggleSwitch.checked) {
        calculadora_light[0].classList.add('calculadora_light');
        botonesNormales.forEach(b => b.classList.add('botones_light'));

    } else {
        calculadora_light[0].classList.remove('calculadora_light');
        botonesNormales.forEach(b => b.classList.remove('botones_light'));
    }
}