const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('scoreDisplay');
let score = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateScore(points) {
    score += points;
    scoreDisplay.textContent = `Pontuação: ${score}`;
}

function drawBody(x, y, scale) {
    // Head
    ctx.beginPath();
    ctx.arc(x, y - scale * 50, scale * 10, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(x, y - scale * 40);
    ctx.lineTo(x, y + scale * 40);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(x, y - scale * 20);
    ctx.lineTo(x - scale * 30, y);
    ctx.moveTo(x, y - scale * 20);
    ctx.lineTo(x + scale * 30, y);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(x, y + scale * 40);
    ctx.lineTo(x - scale * 20, y + scale * 80);
    ctx.moveTo(x, y + scale * 40);
    ctx.lineTo(x + scale * 20, y + scale * 80);
    ctx.stroke();
}

function startTheoreticalMode() {
    clearCanvas();
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Bem-vindo ao Modo Teórico!', 50, 50);
    ctx.fillText('Aqui você aprenderá a teoria de posições e movimentos.', 50, 80);

    const content = [
        '1. A guarda é uma posição defensiva que permite ao lutador neutralizar ataques do adversário.',
        '2. A passagem de guarda consiste em superar as pernas do adversário para alcançar posições dominantes.',
        '3. O "mount" é uma posição de controle onde o lutador está por cima do oponente.',
        '4. O "back control" é quando você controla as costas do adversário, geralmente buscando estrangulamentos.',
        '5. Finalizações comuns incluem armbar, triangle choke e rear-naked choke.'
    ];

    content.forEach((text, index) => {
        ctx.fillText(text, 50, 120 + index * 30);
    });
    updateScore(10);
}

function startPracticalMode() {
    clearCanvas();
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Modo Prático Iniciado!', 50, 50);
    ctx.fillText('Desafio: Supere a guarda do adversário!', 50, 80);

    drawBody(400, 200, 1);
    ctx.fillText('Adversário defendendo a guarda', 310, 140);

    drawBody(200, 200, 1);
    ctx.fillText('Você', 180, 290);

    ctx.fillText('Use movimentos estratégicos para avançar!', 50, 350);
    updateScore(20);
}

function startCompetitiveMode() {
    clearCanvas();
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Modo Competitivo Iniciado!', 50, 50);
    ctx.fillText('Prepare-se para lutar contra um adversário!', 50, 80);

    drawBody(200, 200, 1);
    drawBody(600, 200, 1);

    ctx.fillText('Jogador', 180, 290);
    ctx.fillText('Adversário', 580, 290);

    ctx.fillText('Movimentos: Passe de guarda, queda, finalização', 50, 350);
    updateScore(30);
}
