// VARIÁVEIS GLOBAIS
let perguntasDisponiveis = [];
let perguntaAtualIndex = 0;
let pontuacao = 0;
let dadosUsuario = { nome: "", idade: 0 };
const TOTAL_PERGUNTAS = 5;

// FUNÇÃO PRINCIPAL PARA INICIAR O QUIZ
function iniciarQuiz() {
    // Esconde telas de início/coleta e mostra o container principal do quiz
    document.getElementById('tela-inicio').style.display = 'none';
    document.getElementById('tela-coleta').style.display = 'none';
    document.getElementById('tela-recompensa').style.display = 'none';
    document.getElementById('tela-final').style.display = 'none';
    document.getElementById('quiz-main').style.display = 'flex';
    
    // --- NOVO CÓDIGO: EXIBE O VÍDEO NO INÍCIO DO QUIZ ---
    // O vídeo já deve estar visível por padrão, mas garantimos aqui que ele aparece na transição
    document.getElementById('arvore-crescendo-video').style.display = 'block'; 
    // ------------------------------------------------------
    
    // Configura o quiz
    pontuacao = 0;
    document.getElementById('pontuacao-atual').textContent = pontuacao;
    perguntaAtualIndex = 0;
    
    // Seleciona as perguntas (assumindo que o arquivo perguntas.js existe e exporta a variável 'perguntas')
    if (typeof perguntas === 'undefined' || perguntas.length === 0) {
        document.getElementById('pergunta-atual').innerHTML = `<p>ERRO: O arquivo 'perguntas.js' não foi carregado corretamente.</p>`;
        return;
    }

    // Embaralha todas as perguntas e seleciona apenas as 5 primeiras
    perguntasDisponiveis = shuffleArray([...perguntas]).slice(0, TOTAL_PERGUNTAS);
    
    carregarProximaPergunta();
}

// FUNÇÃO PARA EMBARALHAR ARRAY (Algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// FUNÇÃO PARA CARREGAR A PRÓXIMA PERGUNTA
function carregarProximaPergunta() {
    // Se o quiz acabou, mostra a tela final/recompensa
    if (perguntaAtualIndex >= TOTAL_PERGUNTAS) {
        finalizarQuiz();
        return;
    }

    const pergunta = perguntasDisponiveis[perguntaAtualIndex];
    
    // Exibe a pergunta
    document.getElementById('pergunta-atual').innerHTML = `<p>${pergunta.pergunta}</p>`;
    
    const alternativasContainer = document.getElementById('alternativas-container');
    alternativasContainer.innerHTML = '';
    
    // Embaralha as alternativas (para não ser sempre a primeira a correta)
    const alternativasEmbaralhadas = shuffleArray([...pergunta.alternativas]);
    
    // Cria os botões de alternativa
    alternativasEmbaralhadas.forEach(alt => {
        const button = document.createElement('button');
        button.className = 'alternativa-btn';
        button.textContent = alt.texto;
        button.onclick = () => verificarResposta(button, alt.correta);
        alternativasContainer.appendChild(button);
    });

    document.getElementById('feedback').textContent = '';
}

// FUNÇÃO PARA VERIFICAR A RESPOSTA
function verificarResposta(botaoClicado, eCorreta) {
    // Desabilita todos os botões após a escolha
    const botoes = document.querySelectorAll('.alternativa-btn');
    botoes.forEach(btn => btn.disabled = true);
    
    // Marca a alternativa correta/incorreta
    if (eCorreta) {
        botaoClicado.classList.add('alternativa-correta');
        document.getElementById('feedback').textContent = "ACERTOU! 🎉";
        pontuacao++;
        document.getElementById('pontuacao-atual').textContent = pontuacao;
    } else {
        botaoClicado.classList.add('alternativa-incorreta');
        document.getElementById('feedback').textContent = "ERROU! 😔";
        
        // Encontra e marca a alternativa correta
        botoes.forEach(btn => {
            const alternativaData = perguntasDisponiveis[perguntaAtualIndex].alternativas.find(alt => alt.texto === btn.textContent);
            if (alternativaData && alternativaData.correta) {
                btn.classList.add('alternativa-correta');
            }
        });
    }

    // Espera 2 segundos antes de ir para a próxima pergunta
    setTimeout(() => {
        perguntaAtualIndex++;
        carregarProximaPergunta();
    }, 2000);
}

// FUNÇÃO PARA MOSTRAR A TELA FINAL (RECOMPENSA OU FIM)
function finalizarQuiz() {
    document.getElementById('quiz-main').style.display = 'none';
    
    // --- NOVO CÓDIGO: OCULTA O VÍDEO DA ÁRVORE AO FINALIZAR O QUIZ ---
    document.getElementById('arvore-crescendo-video').style.display = 'none'; 
    // -----------------------------------------------------------------
    
    if (pontuacao >= TOTAL_PERGUNTAS) { // Brinde por acertar todas
        document.getElementById('mensagem-recompensa').textContent = `Parabéns ${dadosUsuario.nome}, você acertou ${pontuacao} de ${TOTAL_PERGUNTAS} perguntas e ganhou um brinde exclusivo!`;
        document.getElementById('tela-recompensa').style.display = 'flex';
    } else {
        document.getElementById('pontuacao-final').textContent = pontuacao;
        document.getElementById('tela-final').style.display = 'flex';
    }
}

// FUNÇÃO PARA REINICIAR O QUIZ (volta para a tela de início)
function reiniciar() {
    // Esconde todas as telas e mostra a tela de início
    document.getElementById('tela-inicio').style.display = 'flex';
    document.getElementById('tela-coleta').style.display = 'none';
    document.getElementById('tela-recompensa').style.display = 'none';
    document.getElementById('tela-final').style.display = 'none';
    document.getElementById('quiz-main').style.display = 'none';
    
    // --- NOVO CÓDIGO: REEXIBE O VÍDEO DA ÁRVORE AO REINICIAR ---
    // O vídeo deve ser reexibido quando voltamos para as telas iniciais
    document.getElementById('arvore-crescendo-video').style.display = 'block'; 
    // -------------------------------------------------------------
    
    // Limpar campos de coleta
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('iniciar-quiz-coleta').disabled = true;
}


// --- LÓGICA DE NAVEGAÇÃO ENTRE TELAS E COLETAS ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. BOTÃO "PRÓXIMO" da Tela de Início
    const avancarColetaBtn = document.getElementById('avancar-coleta');
    avancarColetaBtn.addEventListener('click', () => {
        document.getElementById('tela-inicio').style.display = 'none';
        document.getElementById('tela-coleta').style.display = 'flex';
    });
    
    // 2. LÓGICA DA TELA DE COLETA DE DADOS
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const iniciarQuizColetaBtn = document.getElementById('iniciar-quiz-coleta');

    const validarColeta = () => {
        const nomeValido = nomeInput.value.trim().length > 2;
        const idadeValida = parseInt(idadeInput.value) >= 5; // Idade mínima

        iniciarQuizColetaBtn.disabled = !(nomeValido && idadeValida);
    };

    nomeInput.addEventListener('input', validarColeta);
    idadeInput.addEventListener('input', validarColeta);

    // 3. BOTÃO "INICIAR QUIZ" da Tela de Coleta
    iniciarQuizColetaBtn.addEventListener('click', () => {
        dadosUsuario.nome = nomeInput.value.trim();
        dadosUsuario.idade = parseInt(idadeInput.value);
        iniciarQuiz();
    });

    // 4. BOTÕES DE REINICIAR
    document.getElementById('reiniciar-brinde').addEventListener('click', reiniciar);
    document.getElementById('reiniciar-final').addEventListener('click', reiniciar);
    
    // Inicializa na tela de início
    reiniciar(); 
});

