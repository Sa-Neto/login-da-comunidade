<h1>Sistema de login </h1>

<h2>Primeira Etapa concluida</h2>

<h3>Front-end</h3>
<p>O front-end está sendo usado o vite, e as requisições sendo feita pelo fetch uma lib cor do própio node.Com um hook cuidando da authenticação do usuario, nesse projeto uso o redux para cuidar dos states da aplicação,Com todos os states sendo criado na store.Existe uma pasta utils,contendo o arquivo de configuração de rotas,ele vai ser utilizado no services quando é feitas as chamadas das rotas do backend, o slice é resposavel por monitora os states e assim poder ultilizalos, exemplo o pending que monitora quando o loading é true e assim poder trabalhar com ela nesse estado.</p>
<p>
    A navbar irá apresentar comportamento diferentes caso o meu usuário esteja logado ou não apresentando o botão de logout, caso contrario não irá apresentar.
</p>
<p>No front-end é ultilizado uma lib para a estilização o Botstrap assim podendo passar somente class que iram estilizar meu componentes,ele é chamdo por cdn.O cdn é uma forma de chamar a biblioteca por url assim dependendo de um servidor externo.Tudo isso podendo ser observado no index.html onde é feito essa chamada</p>

<h3>Back-end</h3>
<p>O back-end foi feito numa arquitetura de mvc com distribuição de funções assim não centralizado nenhum arquivo e facilitando de dar manutenção, utilizando o sucrase com o intuito de ultilizar um linguagem mais moderna no caso o es6,o banco de dados ultilizado aqui é o mongodb,deixei um exemplo de um banco de dados ultilizado na nuvem através mongoatlas,está comentado, o que realmente utilizei foi um banco local e foi configurado.
OBS.:Prestem atenção se for usar o da nuvem passem a url,caso forem usar local será necessesario cria um banco com o nome de login para poder subir aplicação
</p>
<p>Olhem o dotenv para saber o que vai ser necessario para roda aplicação com banco local vai ter nesse caso so a PORT e o JWT_SECRET </p>

<p>Para as pessoas que nunca ultilizaram uma pasta de helpers basicamente eu coloco o código repetido, nesse caso aqui minha configuração do jwt, pois preciso passar um token quando entro na aplicação seja quando registro uma conta ou quando é feito o login,assim evito a repetição de código</p>

<p>Também é feito uma validação quando é feio o login e o registro do usuario, podem estranha a ! antes da variavel,dessa forma eu vejo se ela não é undefined</p>
<hr/>
<h3>Quando feito o pull</h3>
<ul>
    <li>Rodar o npm install nas duas pastas</li>
    <li>Para subir o backend só rodar npm start</li>
    <li>Para subir o frontend só rodar o npm run dev que irá rodar na porta 3000 então deixem essa porta livre</li>
</ul>