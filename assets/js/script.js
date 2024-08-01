let hr = document.getElementById('hour-hand');
let min = document.getElementById('minute-hand');
let sec = document.getElementById('second-hand');

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calcula las rotaciones necesarias
    let hRotation = 30 * hh + mm / 2; // 30 grados por hora más la corrección por minutos
    let mRotation = 6 * mm; // 6 grados por minuto
    let sRotation = 6 * ss; // 6 grados por segundo

    // Aplica las transformaciones a las manecillas
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Llama a la función displayTime cada segundo
setInterval(displayTime, 1000);
