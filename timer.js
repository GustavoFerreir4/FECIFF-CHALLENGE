let timerInterval;
let timeLeft = 0;

function startTimer(durationInSeconds) {
    stopTimer(); // evita múltiplos timers
    timeLeft = durationInSeconds;
    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            stopTimer();
            alert("⏰ O tempo acabou!");
            stopGame()
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    document.getElementById("timer").innerText =
        `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function stopGame(){
     document.querySelectorAll(".slider-controls button").forEach(btn => {
        btn.disabled = true;
    });

    // trava o botão de conectar
    let connectBtn = document.querySelector("button[onclick='submitAnswer()']");
    if (connectBtn) connectBtn.disabled = true;

    // trava o botão de desconectar (se tiver)
    let disconnectBtn = document.querySelector("button[onclick='removeAnswer()']");
    if (disconnectBtn) disconnectBtn.disabled = true;
}