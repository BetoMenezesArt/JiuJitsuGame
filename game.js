const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('scoreDisplay');
let score = 0;

// Quiz-based system for Jiu-Jitsu positions
let currentQuestionIndex = 0;
const questions = [
    {
        question: 'Qual é a melhor técnica para superar a guarda fechada?',
        options: ['Passagem de guarda com postura', 'Estrangulamento direto', 'Chave de braço'],
        correct: 0
    },
    {
        question: 'O que você deve fazer ao estar montado por cima?',
        options: ['Manter o equilíbrio e atacar', 'Levantar rapidamente', 'Dar espaço para o adversário'],
        correct: 0
    },
    {
        question: 'Qual é a defesa mais comum para um triângulo?',
        options: ['Posturar e empurrar os quadris', 'Puxar a cabeça do oponente', 'Dobrar o pescoço para frente'],
        correct: 0
    }
];

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateScore(points) {
    score += points;
    scoreDisplay.textContent = `Pontuação: ${score}`;
}

function displayQuestion() {
    clearCanvas();

    const question = questions[currentQuestionIndex];

    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Pergunta: ${question.question}`, 50, 50);

    question.options.forEach((option, index) => {
        ctx.fillText(`${index + 1}. ${option}`, 50, 100 + index * 30);
    });

    ctx.fillText('Pressione 1, 2 ou 3 para responder.', 50, 250);
}

function handleAnswer(answerIndex) {
    const question = questions[currentQuestionIndex];

    if (answerIndex === question.correct) {
        updateScore(10);
        ctx.fillStyle = 'green';
        ctx.fillText('Resposta correta!', 50, 300);
    } else {
        ctx.fillStyle = 'red';
        ctx.fillText('Resposta errada!', 50, 300);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(displayQuestion, 2000);
    } else {
        setTimeout(() => {
            clearCanvas();
            ctx.fillStyle = 'black';
            ctx.fillText('Você completou o quiz!', 50, 50);
            ctx.fillText(`Pontuação final: ${score}`, 50, 80);
        }, 2000);
    }
}

function startQuizMode() {
    currentQuestionIndex = 0;
    score = 0;
    updateScore(0);
    displayQuestion();
}

// Event listener for answering questions
window.addEventListener('keydown', (e) => {
    if (['1', '2', '3'].includes(e.key) && currentQuestionIndex < questions.length) {
        handleAnswer(parseInt(e.key) - 1);
    }
});
