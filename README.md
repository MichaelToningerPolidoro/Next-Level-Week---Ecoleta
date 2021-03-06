![Ecoleta_logo](https://raw.githubusercontent.com/MichaelToningerPolidoro/Next-Level-Week---Ecoleta/dcff99f3f4096a9b0ac59f22e2046cbbeaf8a328/public/assets/logo.svg)

***
## <a name="indice">Índice</a>
  1. [Next Level Week](#nlw)
  2. [Ecoleta](#ecoleta)
  3. [Tecnologias utilizadas](#tecnologias_utilizadas)
  4. [Aulas](#aulas)
  5. [Imagens da aplicação](#imagens_aplicacao)
  6. [Como utilizar](#como_utilizar)
  7. [Conceitos aprendidos](#conceitos_aprendidos)
  8. [Quem ministrou ?](#quem_ministrou)  
***

## <a name="nlw">1. Next Level Week :information_source:</a>
  A **Next Level Week** é uma semana de muito código, conteúdo prático, desafios e aprendizado, 
  é um evento online e gratuito, elaborado pela [Rocketseat](https://rocketseat.com.br/).
  <br/><br/>[Voltar ao índice](#indice)
  
## <a name="ecoleta">2. Ecoleta :recycle:</a>
  A ideia para esse projeto surgiu a partir da semana internacional do meio ambinete e visa conectar empresas 
  e pessoas através de pontos de coleta de resíduos específicos, cadastrados previamente.
  <br/><br/>[Voltar ao índice](#indice)

## <a name="tecnologias_utilizadas">3. Tecnologias utilizadas :computer:</a>
  As tecnologias utilizadas no projeto foram:  
  1. [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
  2. [CSS](https://developer.mozilla.org/pt-BR/docs/Glossario/CSS)
  3. [JavaScript](https://developer.mozilla.org/pt-BR/docs/Glossario/JavaScript)
  4. [NodeJS](https://nodejs.org/en/)
  5. [SQLite3](https://sqlite.org/index.html)
  6. [Git](https://git-scm.com/)
  7. [Nunjucks](https://mozilla.github.io/nunjucks/)
  <br/><br/>[Voltar ao índice](#indice)

## <a name="aulas">4. Aulas :memo:</a>
  **Dia 1 (01/06) - Acelerando sua evolução** :heavy_check_mark:  
    No primeiro dia do evento foi criada a página principal da aplicação, utilizando
    HTML e CSS.<br/><br/>
  **Dia 2 (02/06) - Olhando para as oportunidades** :heavy_check_mark:  
    No segundo dia, foi criado o inicio da página que cadastra os pontos de coleta e foi introduzido 
    o JavaScript para realizar acesso a APIs do [IBGE](https://servicodados.ibge.gov.br/api/docs).<br/><br/>
  **Dia 3 (03/06) - A escolha da Stack** :heavy_check_mark:  
    O NodeJS foi apresentado no terceiro dia, o qual foi utilizado para executar códigos JavaScript 
    fora do navegador e então instalamos o pacote [express](https://github.com/expressjs/express) 
    através do [NPM](https://www.npmjs.com/) e possibilitar a criação de um servidor local.<br/><br/>
  **Dia 4 (04/06) - Até 2 anos em 2 meses** :heavy_check_mark:  
    Nesse dia foi mostrado uma nova tecnologia, o [nunjucks](https://mozilla.github.io/nunjucks/), 
    essa é uma template engine que possibilita a criação de um "HTML mais dinâmico" e reaproveitar 
    pedaços do HTML em diversos arquivos.<br/><br/>
  **Dia 5 (05/06) - Milha extra** :heavy_check_mark:  
    O último dia foi introduzido o banco de dados SQLite3, um banco de dados que reside
    na aplicação e é ótimo para praticar conceitos por ser leve e prático.
  <br/><br/>[Voltar ao índice](#indice)

## <a name="imagens_aplicacao">5. Imagens da aplicação :camera:</a>
  Todos os assets foram disponibilizados pela **@Rocketseat**. <br>
  Página Home do projeto.
  ![home](https://github.com/MichaelToningerPolidoro/Next-Level-Week---Ecoleta/blob/master/github/home.png?raw=true)
  <br/><br/>
  Página de cadastro de ponto de coleta
  ![cadastro1](https://github.com/MichaelToningerPolidoro/Next-Level-Week---Ecoleta/blob/master/github/telaCadastro1.png?raw=true)
  <br/><br/>
  ![cadastro2](https://github.com/MichaelToningerPolidoro/Next-Level-Week---Ecoleta/blob/master/github/telaCadastro2.png?raw=true)
  <br/><br/>
  Modal para realizar a buscas pelos pontos a partir de uma cidade.
  ![modal_busca](https://github.com/MichaelToningerPolidoro/Next-Level-Week---Ecoleta/blob/master/github/modalBusca.png?raw=true)
  <br/><br/>
  Página de resultados da busca
  ![resultados](https://github.com/MichaelToningerPolidoro/Next-Level-Week---Ecoleta/blob/master/github/resultados.png?raw=true)
  <br/><br/>[Voltar ao índice](#indice)

## <a name="como_utilizar">6. Como utilizar :grey_question: </a>
  Para a utilização desse projeto, é necessário que você tenha instalado o node.js em sua máquina. <br/><br/>
   - Para instalar as dependências do projeto utilize o comando `npm install`.
   - Dentro da pasta do projeto, utilize o comando `node src/server.js` para iniciar o servidor local na porta 3000.
   - Com o atalho `ctrl + c` o servidor local é desativado.
   - No arquivo `db.js` o comando que realiza a criação da tabela está comentado, para a criação da
     mesma, é necessário retirar esses comentários para criar a tabela que armazena os dados sobre
     os pontos de coleta.
  <br/><br/>[Voltar ao índice](#indice)

## <a name="conceitos_aprendidos">7. Conceitos aprendidos :books:</a>
  Alguns conceitos que consegui assimilar e ter primeiro contato prático foram:  
    - Melhor entendimento dos formulários HTML. <br/><br/>
    - Posicionamento/layout e melhor entendimento do CSS. <br/><br/>
    - Acesso a uma API do [IBGE](https://www.ibge.gov.br/) utilizando JS. <br/><br/>
    - Como funcionam os métodos [GET](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/GET) 
    e [POST](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/POST) do protocolo 
    [HTTP](https://developer.mozilla.org/pt-BR/docs/Glossario/HTTP). <br/><br/>
    - O que são Template Engines. <br/><br/>
    - Tive contato na prática com a criação de rotas no servidor utilizando o express. <br/><br/>
    - Realizar buscas em uma base de dados diretamente da linguagem de programação. <br/><br/>
    - Além de dicas e conceitos apresentados.
  <br/><br/>[Voltar ao índice](#indice)

## <a name="quem_ministrou">8. Quem ministrou ? :mortar_board:</a>
  A trilha starter da NLW foi lecionada pelo [Mayk Brito](https://github.com/maykbrito), quem me ajudou
  a entender diversos conceitos edescobrir novas tecnologias, sou grato por todos esses ensinamentos.
  <br/><br/>[Voltar ao índice](#indice)
