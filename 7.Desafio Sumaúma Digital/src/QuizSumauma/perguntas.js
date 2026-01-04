// Arquivo: perguntas.js

// O array é 'perguntas' para ser lido corretamente pelo script.js
const perguntas = [
    {
        pergunta: "O que é inclusão digital?",
        alternativas: [
            { texto: "Ensinar as pessoas a usar tecnologia.", correta: true },
            { texto: "Jogar videogame.", correta: false },
            { texto: "Comprar celulares novos.", correta: false }
        ]
    },
    {
        pergunta: "Para que serve um computador?",
        alternativas: [
            { texto: "Apenas para jogos.", correta: false },
            { texto: "Para aprender, trabalhar e se comunicar.", correta: true },
            { texto: "Para enfeitar o quarto.", correta: false }
        ]
    },
    {
        pergunta: "O que é a internet?",
        alternativas: [
            { texto: "Uma rede que conecta pessoas e informações.", correta: true },
            { texto: "Um tipo de comida.", correta: false },
            { texto: "Um brinquedo novo.", correta: false }
        ]
    },
    {
        pergunta: "O que é cidadania digital?",
        alternativas: [
            { texto: "Usar a internet de forma responsável.", correta: true },
            { texto: "Ter um passaporte.", correta: false },
            { texto: "Fazer login em jogos online.", correta: false }
        ]
    },
    {
        pergunta: "Quem pode aprender informática?",
        alternativas: [
            { texto: "Só adultos.", correta: false },
            { texto: "Qualquer pessoa!", correta: true },
            { texto: "Apenas quem tem computador em casa.", correta: false }
        ]
    },
    {
        pergunta: "Por que é importante ensinar informática nas escolas?",
        alternativas: [
            { texto: "Para gastar energia.", correta: false },
            { texto: "Para deixar a sala mais bonita.", correta: false },
            { texto: "Para preparar os alunos para o futuro.", correta: true }
        ]
    },
    {
        pergunta: "O que significa “acesso à tecnologia”?",
        alternativas: [
            { texto: "Fazer compras online.", correta: false },
            { texto: "Brincar com celulares caros.", correta: false },
            { texto: "Poder usar computadores e internet.", correta: true }
        ]
    },
    {
        pergunta: "Quando alguém aprende a usar o computador, o que ganha?",
        alternativas: [
            { texto: "Só diversão.", correta: false },
            { texto: "Novas oportunidades e conhecimento.", correta: true },
            { texto: "Acesso às redes sociais.", correta: false }
        ]
    },
    {
        pergunta: "O que é um curso de informática?",
        alternativas: [
            { texto: "Um jogo novo.", correta: false },
            { texto: "Um lugar para aprender sobre computadores.", correta: true },
            { texto: "Um lugar para aprender a escrever.", correta: false }
        ]
    },
    {
        pergunta: "O que é um Centro de Recondicionamento de Computadores (CRC)?",
        alternativas: [
            { texto: "Um local onde os computadores são consertados e reaproveitados.", correta: true },
            { texto: "Uma loja de eletrônicos.", correta: false },
            { texto: "Um shopping center.", correta: false }
        ]
    },
    {
        pergunta: "O que faz o Programa Computadores para Inclusão?",
        alternativas: [
            { texto: "Ensina a usar redes sociais.", correta: false },
            { texto: "Vende notebooks novos.", correta: false },
            { texto: "Conserta e doa computadores para quem precisa.", correta: true }
        ]
    },
    {
        pergunta: "Quem recebe os computadores do Programa?",
        alternativas: [
            { texto: "Escolas e projetos sociais.", correta: true },
            { texto: "Lojas de informática.", correta: false },
            { texto: "Jogadores profissionais.", correta: false }
        ]
    },
    {
        pergunta: "O que acontece com os computadores velhos?",
        alternativas: [
            { texto: "São jogados no lixo.", correta: false },
            { texto: "São recondicionados e usados novamente.", correta: true },
            { texto: "São guardados para sempre.", correta: false }
        ]
    },
    {
        pergunta: "Por que o Programa Computadores para Inclusão é importante?",
        alternativas: [
            { texto: "Porque ajuda o meio ambiente e as pessoas.", correta: false },
            { texto: "Porque leva a inclusão digital para as pessoas.", correta: false },
            { texto: "Todas as alternativas acima.", correta: true } // Assumindo que a 'c' engloba 'a' e 'b'
        ]
    },
    {
        pergunta: "O que é um computador recondicionado?",
        alternativas: [
            { texto: "Um computador antigo que foi consertado e voltou a funcionar.", correta: true },
            { texto: "Um computador de brinquedo.", correta: false },
            { texto: "Um computador novo.", correta: false }
        ]
    },
    {
        pergunta: "Quem trabalha nos CRCs?",
        alternativas: [
            { texto: "Robôs.", correta: false },
            { texto: "Jovens aprendizes e técnicos.", correta: true },
            { texto: "Escultores.", correta: false }
        ]
    },
    {
        pergunta: "Além de consertar, o que os CRCs fazem?",
        alternativas: [
            { texto: "Dão cursos gratuitos.", correta: true },
            { texto: "Vendem computadores.", correta: false },
            { texto: "Instalam TV a cabo.", correta: false }
        ]
    },
    {
        pergunta: "Para onde vão os computadores consertados?",
        alternativas: [
            { texto: "Para lojas.", correta: false },
            { texto: "Para o lixo.", correta: false },
            { texto: "Para escolas, bibliotecas e comunidades.", correta: true }
        ]
    },
    {
        pergunta: "O que o Programa ensina nas formações?",
        alternativas: [
            { texto: "Informática, sustentabilidade e cidadania digital.", correta: true },
            { texto: "Pintura e dança.", correta: false },
            { texto: "Somente matemática.", correta: false }
        ]
    },
    {
        pergunta: "O que significa “inclusão digital”?",
        alternativas: [
            { texto: "Comprar mais celulares.", correta: false },
            { texto: "Fazer com que todos possam usar tecnologia.", correta: true },
            { texto: "Apagar computadores antigos.", correta: false }
        ]
    },
    {
        pergunta: "O que é a COP30?",
        alternativas: [
            { texto: "Uma reunião mundial sobre o clima.", correta: true },
            { texto: "Um campeonato de futebol.", correta: false },
            { texto: "Um programa de TV.", correta: false }
        ]
    },
    {
        pergunta: "Onde será a COP30?",
        alternativas: [
            { texto: "Nos Estados Unidos.", correta: false },
            { texto: "Na África do Sul.", correta: false },
            { texto: "No Brasil.", correta: true }
        ]
    },
    {
        pergunta: "Por que a COP30 é importante?",
        alternativas: [
            { texto: "Para cuidar do planeta e discutir o futuro.", correta: true },
            { texto: "Para vender produtos novos.", correta: false },
            { texto: "Para viajar pelo mundo.", correta: false }
        ]
    },
    {
        pergunta: "O que os países conversam na COP30?",
        alternativas: [
            { texto: "Sobre a economia dos países.", correta: false },
            { texto: "Sobre como proteger o meio ambiente.", correta: true },
            { texto: "Sobre a culinária dos países.", correta: false }
        ]
    },
    {
        pergunta: "O que cada pessoa pode fazer para ajudar o planeta?",
        alternativas: [
            { texto: "Jogar lixo no chão.", correta: false },
            { texto: "Reciclar e economizar energia.", correta: true },
            { texto: "Deixar as luzes acesas.", correta: false }
        ]
    },
    {
        pergunta: "O que significa sustentabilidade?",
        alternativas: [
            { texto: "Cuidar do planeta pensando no futuro.", correta: true },
            { texto: "Comprar muitas roupas.", correta: false },
            { texto: "Comer doces.", correta: false }
        ]
    },
    {
        pergunta: "Por que precisamos economizar água e energia?",
        alternativas: [
            { texto: "Porque as contas são muito caras.", correta: false },
            { texto: "Porque queremos gastar mais.", correta: false },
            { texto: "Porque são recursos importantes e podem acabar.", correta: true }
        ]
    },
    {
        pergunta: "O que é reciclagem?",
        alternativas: [
            { texto: "Reaproveitar materiais para criar novos produtos.", correta: true },
            { texto: "Jogar tudo fora.", correta: false },
            { texto: "Comprar coisas novas sempre.", correta: false }
        ]
    },
    {
        pergunta: "Como o lixo eletrônico pode prejudicar o planeta?",
        alternativas: [
            { texto: "Espalha mau cheiro e atrai insetos como o lixo comum.", correta: false },
            { texto: "Ele não prejudica o planeta.", correta: false },
            { texto: "Soltando substâncias tóxicas.", correta: true }
        ]
    },
    {
        pergunta: "O que podemos fazer com aparelhos eletrônicos velhos?",
        alternativas: [
            { texto: "Doar para o Programa Computadores para Inclusão.", correta: true },
            { texto: "Guardar na gaveta.", correta: false },
            { texto: "Jogar no rio.", correta: false }
        ]
    },
    {
        pergunta: "O que significa REEE?",
        alternativas: [
            { texto: "Resíduos de Equipamentos Eletroeletrônicos.", correta: true },
            { texto: "Robôs elétricos engraçados.", correta: false },
            { texto: "Refrigerantes elétricos.", correta: false }
        ]
    },
    {
        pergunta: "Qual é um exemplo de REEE?",
        alternativas: [
            { texto: "Um caderno usado.", correta: false },
            { texto: "Um computador quebrado.", correta: true },
            { texto: "Um brinquedo de pelúcia rasgado.", correta: false }
        ]
    },
    {
        pergunta: "O que não devemos fazer com REEE?",
        alternativas: [
            { texto: "Jogar no lixo comum.", correta: true },
            { texto: "Levar para pontos de coleta.", correta: false },
            { texto: "Reciclar.", correta: false }
        ]
    },
    {
        pergunta: "Onde podemos levar lixo eletrônico?",
        alternativas: [
            { texto: "No chão da rua.", correta: false },
            { texto: "Nas margens de rios.", correta: false },
            { texto: "Nos pontos de coleta.", correta: true }
        ]
    },
    {
        pergunta: "Por que é perigoso jogar eletrônicos no lixo?",
        alternativas: [
            { texto: "Porque soltam metais pesados e contaminam o solo e a água.", correta: true },
            { texto: "Porque fazem barulho.", correta: false },
            { texto: "Porque são feios.", correta: false }
        ]
    },
    {
        // NOTA: Baseado no seu gabarito: 'Ouro e prata apenas' (b)
        pergunta: "Que tipo de metais existem nos eletrônicos?",
        alternativas: [
            { texto: "Chumbo, mercúrio e cádmio.", correta: false }, 
            { texto: "Ouro e prata apenas.", correta: true }, 
            { texto: "Madeira.", correta: false }
        ]
    },
    {
        pergunta: "O que acontece quando reciclamos eletrônicos?",
        alternativas: [
            { texto: "Criamos mais poluição.", correta: false },
            { texto: "Diminuímos o lixo e ajudamos o planeta.", correta: true },
            { texto: "Perdemos tempo.", correta: false }
        ]
    },
    {
        pergunta: "O que significa economia circular?",
        alternativas: [
            { texto: "Reaproveitar produtos em vez de jogar fora.", correta: true },
            { texto: "Andar em círculos.", correta: false },
            { texto: "Comprar coisas repetidas.", correta: false }
        ]
    },
    {
        pergunta: "O que é uma cooperativa de reciclagem?",
        alternativas: [
            { texto: "Um grupo de copeiros.", correta: false },
            { texto: "Uma equipe de limpeza.", correta: false },
            { texto: "Um grupo que trabalha junto para separar e reciclar materiais.", correta: true }
        ]
    },
    {
        pergunta: "Quem ajuda a recolher lixo eletrônico?",
        alternativas: [
            { texto: "O caminhão de lixo.", correta: false },
            { texto: "Cooperativas e catadores.", correta: true },
            { texto: "Bombeiros.", correta: false }
        ]
    },
    {
        pergunta: "O que é cidadania?",
        alternativas: [
            { texto: "Participar e cuidar da comunidade.", correta: true },
            { texto: "Jogar videogame.", correta: false },
            { texto: "Fazer bagunça.", correta: false }
        ]
    },
    {
        pergunta: "Como a tecnologia pode ajudar as pessoas?",
        alternativas: [
            { texto: "Tirando o emprego delas.", correta: false },
            { texto: "Atrapalhando a vida.", correta: false },
            { texto: "Facilitando o estudo e o trabalho.", correta: true }
        ]
    },
    {
        pergunta: "Quem pode doar eletrônicos velhos?",
        alternativas: [
            { texto: "Qualquer pessoa, empresa ou órgão público.", correta: true },
            { texto: "Só quem tem muito dinheiro.", correta: false },
            { texto: "Apenas escolas.", correta: false }
        ]
    },
    {
        pergunta: "O que o MCom faz?",
        alternativas: [
            { texto: "Cria filmes", correta: false },
            { texto: "Vende celulares.", correta: false },
            { texto: "Coordena programas de inclusão digital.", correta: true }
        ]
    },
    {
        pergunta: "Por que é importante estudar sobre o meio ambiente?",
        alternativas: [
            { texto: "Para cuidar da Terra e entender nossos impactos.", correta: true },
            { texto: "Para decorar a escola.", correta: false },
            { texto: "Para ganhar presentes.", correta: false }
        ]
    },
    {
        pergunta: "O que aprendemos com o Programa Computadores para Inclusão?",
        alternativas: [
            { texto: "Que tecnologia pode mudar vidas e cuidar do planeta.", correta: true },
            { texto: "Que lixo é bonito.", correta: false },
            { texto: "Que computador é brinquedo.", correta: false }
        ]
    },
    {
        pergunta: "O que é um Ponto de Inclusão Digital?",
        alternativas: [
            { texto: "Um local para mexer no celular.", correta: false },
            { texto: "Um local com computadores para estudo e acesso à internet.", correta: true },
            { texto: "Um parque.", correta: false }
        ]
    },
    {
        pergunta: "Como podemos ajudar o planeta no dia a dia?",
        alternativas: [
            { texto: "Usando tudo sem pensar.", correta: false },
            { texto: "Economizando água e energia, reciclando e não jogando lixo no chão.", correta: true },
            { texto: "Jogando lixo na rua.", correta: false }
        ]
    },
    {
        pergunta: "O que podemos fazer com pilhas e baterias usadas?",
        alternativas: [
            { texto: "Levar para pontos de coleta.", correta: true },
            { texto: "Jogar no lixo comum.", correta: false },
            { texto: "Guardar na geladeira.", correta: false }
        ]
    },
    {
        pergunta: "O que é “um futuro sustentável”?",
        alternativas: [
            { texto: "Um futuro onde pessoas e natureza vivem em equilíbrio.", correta: true },
            { texto: "Um futuro cheio de lixo.", correta: false },
            { texto: "Um futuro sem árvores.", correta: false }
        ]
    },
    {
        pergunta: "O que são REEE?",
        alternativas: [
            { texto: "Lixo de comida", correta: false },
            { texto: "Resíduos de equipamentos eletrônicos", correta: true },
            { texto: "Papel reciclável", correta: false }
        ]
    },
    {
        pergunta: "Qual desses é um REEE?",
        alternativas: [
            { texto: "Celular velho", correta: true },
            { texto: "Maçã", correta: false },
            { texto: "Garrafa de água", correta: false }
        ]
    },
    {
        pergunta: "Onde NÃO devemos jogar um eletrônico velho?",
        alternativas: [
            { texto: "Nas empresas especializadas", correta: false },
            { texto: "No ponto de coleta", correta: false },
            { texto: "No lixo normal", correta: true }
        ]
    },
    {
        pergunta: "O que os REEE podem liberar no meio ambiente?",
        alternativas: [
            { texto: "Cheiro bom", correta: false },
            { texto: "Poluentes e metais pesados", correta: true },
            { texto: "Flores", correta: false }
        ]
    },
    {
        pergunta: "O que é perigoso nos REEE?",
        alternativas: [
            { texto: "Eles são pesados demais", correta: false },
            { texto: "Contêm substâncias tóxicas", correta: true },
            { texto: "Ficam invisíveis", correta: false }
        ]
    },
    {
        pergunta: "O que acontece se jogarmos eletrônicos no lixo comum?",
        alternativas: [
            { texto: "Nada acontece", correta: false },
            { texto: "Polui o solo e a água", correta: true },
            { texto: "Eles desaparecem", correta: false }
        ]
    },
    {
        pergunta: "Jogar REEE no rio pode:",
        alternativas: [
            { texto: "Limpar a água", correta: false },
            { texto: "Fazer chover", correta: false },
            { texto: "Contaminar os peixes", correta: true }
        ]
    },
    {
        pergunta: "Que tipo de poluição pode acontecer com o lixo eletrônico queimado?",
        alternativas: [
            { texto: "Poluição do ar", correta: true },
            { texto: "Poluição sonora", correta: false },
            { texto: "Nenhuma", correta: false }
        ]
    },
    {
        pergunta: "Por que é importante reciclar eletrônicos?",
        alternativas: [
            { texto: "Para ganhar brinquedos", correta: false },
            { texto: "Para cuidar da natureza", correta: true },
            { texto: "Para fazer barulho", correta: false }
        ]
    },
    {
        pergunta: "Quem ajuda a cuidar da Terra reciclando o lixo eletrônico?",
        alternativas: [
            { texto: "Os catadores", correta: true },
            { texto: "Os jogadores de futebol", correta: false },
            { texto: "Os astronautas", correta: false }
        ]
    },
    {
        pergunta: "O que é um EPI?",
        alternativas: [
            { texto: "Um equipamento de segurança", correta: true },
            { texto: "Um tipo de celular", correta: false },
            { texto: "Um jogo eletrônico", correta: false }
        ]
    },
    {
        pergunta: "Por que os catadores usam luvas?",
        alternativas: [
            { texto: "Para brincar", correta: false },
            { texto: "Para se proteger de cortes", correta: true },
            { texto: "Para cozinhar", correta: false }
        ]
    },
    {
        pergunta: "O que as máscaras dos catadores de resíduos eletroeletrônicos ajudam a evitar?",
        alternativas: [
            { texto: "Gripe comum", correta: false },
            { texto: "Sono", correta: false },
            { texto: "Contaminação por poeira e metais pesados", correta: true }
        ]
    },
    {
        pergunta: "Os óculos de proteção servem para:",
        alternativas: [
            { texto: "Enfeitar o rosto", correta: false },
            { texto: "Proteger os olhos de fagulhas", correta: true },
            { texto: "Ler melhor", correta: false }
        ]
    },
    {
        pergunta: "O que o avental protege?",
        alternativas: [
            { texto: "As pernas", correta: false },
            { texto: "As mãos", correta: false },
            { texto: "O corpo contra respingos", correta: true }
        ]
    },
    {
        pergunta: "O que é logística reversa?",
        alternativas: [
            { texto: "Fazer os produtos voltarem para reciclagem", correta: true },
            { texto: "Mandar lixo para o espaço", correta: false },
            { texto: "Jogar fora", correta: false }
        ]
    },
    {
        pergunta: "A logística reversa ajuda a:",
        alternativas: [
            { texto: "Aumentar o lixo", correta: false },
            { texto: "Diminuir a poluição", correta: true },
            { texto: "Fazer brinquedos", correta: false }
        ]
    },
    {
        pergunta: "Quem precisa participar da logística reversa?",
        alternativas: [
            { texto: "Somente o governo", correta: false },
            { texto: "Todos: empresas, governo e pessoas", correta: true },
            { texto: "Só as crianças", correta: false }
        ]
    },
    {
        pergunta: "O que pode acontecer com os materiais reciclados?",
        alternativas: [
            { texto: "Serem reutilizados", correta: true },
            { texto: "Virarem lixo comum", correta: false },
            { texto: "Sumirem", correta: false }
        ]
    },
    {
        pergunta: "Onde os eletrônicos são tratados corretamente?",
        alternativas: [
            { texto: "Nos Centros de Recondicionamento de Computadores (CRCs)", correta: true },
            { texto: "No quintal de casa", correta: false },
            { texto: "No parquinho", correta: false }
        ]
    },
    {
        pergunta: "O que o Programa Computadores para Inclusão faz?",
        alternativas: [
            { texto: "Joga fora os computadores", correta: false },
            { texto: "Recondiciona e doa computadores", correta: true },
            { texto: "Compra novos", correta: false }
        ]
    },
    {
        pergunta: "Quem coordena o Programa Computadores para Inclusão?",
        alternativas: [
            { texto: "O Ministério das Comunicações", correta: true },
            { texto: "O Ministério do Esporte", correta: false },
            { texto: "Os Correios", correta: false }
        ]
    },
    {
        pergunta: "Para quem os computadores recondicionados são doados?",
        alternativas: [
            { texto: "Lojas", correta: false },
            { texto: "Fábricas", correta: false },
            { texto: "Escolas e comunidades", correta: true }
        ]
    },
    {
        pergunta: "Onde ficam os CRCs?",
        alternativas: [
            { texto: "Em todo o Brasil", correta: true },
            { texto: "Só em Brasília", correta: false },
            { texto: "Só no Rio de Janeiro", correta: false }
        ]
    },
    {
        pergunta: "O que os CRCs também oferecem?",
        alternativas: [
            { texto: "Jogos", correta: false },
            { texto: "Passeios", correta: false },
            { texto: "Cursos e oficinas", correta: true }
        ]
    },
    {
        pergunta: "Por que doar computadores ajuda na educação?",
        alternativas: [
            { texto: "Porque são bonitos", correta: false },
            { texto: "Porque ajudam a estudar e aprender", correta: true },
            { texto: "Porque ocupam espaço", correta: false }
        ]
    },
    {
        pergunta: "O que é inclusão digital?",
        alternativas: [
            { texto: "Ter acesso e aprender a usar a tecnologia", correta: true },
            { texto: "Assistir televisão", correta: false },
            { texto: "Jogar no celular", correta: false }
        ]
    },
    {
        pergunta: "Quem participa dos cursos dos CRCs?",
        alternativas: [
            { texto: "Jovens em situação de vulnerabilidade", correta: true },
            { texto: "Somente adultos", correta: false },
            { texto: "Apenas professores", correta: false }
        ]
    },
    {
        pergunta: "O que os alunos aprendem nos cursos?",
        alternativas: [
            { texto: "Pintura", correta: false },
            { texto: "Matemática e física", correta: false },
            { texto: "Tecnologia e cidadania digital", correta: true }
        ]
    },
    {
        pergunta: "Os cursos ajudam as pessoas a:",
        alternativas: [
            { texto: "Dormir melhor", correta: false },
            { texto: "Trabalhar e se desenvolver", correta: true },
            { texto: "Jogar online", correta: false }
        ]
    },
    {
        pergunta: "Sustentabilidade significa:",
        alternativas: [
            { texto: "Cuidar do planeta para o futuro", correta: true },
            { texto: "Comprar eletrônicos novos", correta: false },
            { texto: "Jogar fora tudo", correta: false }
        ]
    },
    {
        pergunta: "O que economizamos ao reciclar?",
        alternativas: [
            { texto: "Comida", correta: false },
            { texto: "Tempo", correta: false },
            { texto: "Água, energia e combustível", correta: true }
        ]
    },
    {
        pergunta: "Qual é o impacto positivo da reciclagem?",
        alternativas: [
            { texto: "Gera poluição", correta: false },
            { texto: "Evita danos ao meio ambiente", correta: true },
            { texto: "Faz barulho", correta: false }
        ]
    },
    {
        pergunta: "Que tipo de energia é economizada com a reciclagem?",
        alternativas: [
            { texto: "Solar", correta: false },
            { texto: "Combustível fóssil", correta: true },
            { texto: "Vento", correta: false }
        ]
    },
    {
        pergunta: "O que podemos fazer antes de jogar fora um eletrônico?",
        alternativas: [
            { texto: "Tentar consertar", correta: true },
            { texto: "Jogar no lixo comum", correta: false },
            { texto: "Esquecer", correta: false }
        ]
    },
    {
        pergunta: "Quem são os catadores?",
        alternativas: [
            { texto: "Pessoas que navegam em alto mar", correta: false },
            { texto: "Pessoas que plantam alimentos", correta: false },
            { texto: "Pessoas que ajudam na reciclagem", correta: true }
        ]
    },
    {
        pergunta: "Por que os catadores são importantes?",
        alternativas: [
            { texto: "Ajudam a separar o lixo eletrônico", correta: true },
            { texto: "Criam mais lixo", correta: false },
            { texto: "Vendem eletrônicos", correta: false }
        ]
    },
    {
        pergunta: "Como os catadores podem trabalhar com segurança?",
        alternativas: [
            { texto: "De roupa de manga curta", correta: false },
            { texto: "Sem proteção", correta: false },
            { texto: "Usando EPIs", correta: true }
        ]
    },
    {
        pergunta: "A reciclagem traz:",
        alternativas: [
            { texto: "Emprego e renda", correta: true },
            { texto: "Desemprego", correta: false },
            { texto: "Mais lixo", correta: false }
        ]
    },
    {
        pergunta: "Valorizar os catadores é:",
        alternativas: [
            { texto: "Jogar fora o lixo", correta: false },
            { texto: "Gastar dinheiro", correta: false },
            { texto: "Valorizar quem cuida do planeta", correta: true }
        ]
    },
    {
        pergunta: "Onde guardar pilhas usadas?",
        alternativas: [
            { texto: "Em caixas resistentes", correta: true },
            { texto: "No chão", correta: false },
            { texto: "No lixo comum", correta: false }
        ]
    },
    {
        pergunta: "Podemos misturar pilhas com outros resíduos?",
        alternativas: [
            { texto: "Sim", correta: false },
            { texto: "Não", correta: true },
            { texto: "Só às vezes", correta: false }
        ]
    },
    {
        pergunta: "É bom deixar pilhas perto do calor?",
        alternativas: [
            { texto: "Não", correta: true },
            { texto: "Sim", correta: false },
            { texto: "Tanto faz", correta: false }
        ]
    },
    {
        pergunta: "O que fazer com pilhas e baterias usadas?",
        alternativas: [
            { texto: "Jogar na rua", correta: false },
            { texto: "Guardar para sempre", correta: false },
            { texto: "Levar aos pontos de coleta", correta: true }
        ]
    },
    {
        pergunta: "Por que devemos ter cuidado com pilhas?",
        alternativas: [
            { texto: "Elas podem vazar produtos tóxicos", correta: true },
            { texto: "Elas derretem rápido", correta: false },
            { texto: "Elas explodem sempre", correta: false }
        ]
    },
    {
        pergunta: "O que devemos fazer com um eletrônico que ainda funciona?",
        alternativas: [
            { texto: "Doar ou reparar", correta: true },
            { texto: "Quebrar", correta: false },
            { texto: "Jogar fora", correta: false }
        ]
    },
    {
        pergunta: "Onde podemos levar eletrônicos velhos?",
        alternativas: [
            { texto: "Supermercado", correta: false },
            { texto: "Loja", correta: false },
            { texto: "Ponto de coleta", correta: true }
        ]
    },
    {
        pergunta: "Qual é o lema da cartilha?",
        alternativas: [
            { texto: "Pequenas atitudes, grandes impactos", correta: true },
            { texto: "Jogue fora o lixo", correta: false },
            { texto: "Quanto mais, melhor", correta: false }
        ]
    },
    {
        pergunta: "O que acontece quando cuidamos bem dos REEE?",
        alternativas: [
            { texto: "Não acontece nada", correta: false },
            { texto: "Poluímos mais", correta: false },
            { texto: "Protegemos o meio ambiente", correta: true }
        ]
    },
    {
        pergunta: "O que aprendemos a Cartilha de Boas Práticas em REEE?",
        alternativas: [
            { texto: "Que reciclar é desnecessário", correta: false },
            { texto: "Que resíduos eletroeletrônicos são perigosos", correta: true },
            { texto: "Que lixo é divertido", correta: false }
        ]
    }
];