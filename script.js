// Fecha objetivo
var targetDate = new Date('2024-04-27T00:00:00');

// Función para actualizar el contador
function updateCountdown() {
    var currentDate = new Date();
    var difference = targetDate - currentDate;

    // Calcular días, horas, minutos y segundos restantes
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Asegurar que los números sean de dos dígitos
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    // Mostrar el resultado en la página
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Si la fecha objetivo ha pasado, mostrar un mensaje
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "¡El día ha llegado!";
        document.getElementById("final-message").innerHTML = "¡Ha llegado el día del evento!";
    }
}

// Llamar a la función cada segundo
var interval = setInterval(updateCountdown, 1000);
// Actualizar el contador por primera vez
updateCountdown();
