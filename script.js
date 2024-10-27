let randomNumber;
let attempts;
const maxAttempts = 10;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = maxAttempts;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('attemptsCount').textContent = attempts;
    document.getElementById('restartGame').style.display = 'none';
    document.getElementById('submitGuess').disabled = false;
}

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const resultElement = document.getElementById('result');

    if (isNaN(userGuess)) {
        resultElement.textContent = 'Por favor, introduce un número válido.';
        return;
    }

    attempts--;

    if (userGuess === randomNumber) {
        resultElement.textContent = `¡Correcto! El número era ${randomNumber}. Lo adivinaste en ${maxAttempts - attempts} intentos.`;
        document.getElementById('submitGuess').disabled = true;
        document.getElementById('restartGame').style.display = 'inline';
    } else if (userGuess < randomNumber) {
        resultElement.textContent = 'Demasiado bajo. Intenta de nuevo.';
    } else {
        resultElement.textContent = 'Demasiado alto. Intenta de nuevo.';
    }

    document.getElementById('attemptsCount').textContent = attempts;

    if (attempts === 0) {
        resultElement.textContent = `Se acabaron los intentos. El número era ${randomNumber}.`;
        document.getElementById('submitGuess').disabled = true;
        document.getElementById('restartGame').style.display = 'inline';
    }
});

document.getElementById('restartGame').addEventListener('click', startGame);

window.onload = startGame;
