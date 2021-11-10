# Blue_Projeto02_Mod03
Repositório do projeto 02 da Blue para integração com o Heroku

### ETAPAS DE EXECUÇÃO

* Início do projeto com o comando npm init -y;
* Instalação dos módulos 'nodemon', 'express';
* Criação da pasta 'config' e do arquivo 'ExpressConfig.js';
* No arquivo 'ExpressConfig.js', criar toda a configuração do Servidor como propriedades da classe App;
* Exportar o arquivo com o comando 'module.exports', já instanciando a classe e executando o método '.init', que executa o 'express()';
* Criar um arquivo 'server.js' na raíz do projeto;
* Importar 'app' no 'server.js' utilizando o comando 'require()';
* Através do comando '.listen()', subir o Servidor;
* Na pasta 'config', criar o arquivo 'mongooseConfig.js' e definir as configurações de conexões com o MongoAtlas;
* Instalar o módulo 'dotenv' com o comando npm i dotenv;
* Criar o arquivo '.env' na raíz do projeto e configurar quais dados serão protegidos;
* No 'mongooseConfig.js', importar 'dotenv' e chamar a função 'config()';
* Alterar o 'connectionString' substituindo os dados sensíveis pelas variáveis e exportar a arquivo;
* No 'ExpressConfig.js', importar o 'mongooseConfig.js' e defini-lo como uma propriedade de App;
* Criar uma pasta 'api' na raíz do projeto e dentro dela criar mais quatro sub-pastas: 'routes', 'models', 'database', 'controllers'. E por fim adicionar a pasta 'config' dentro de 'api';
* Em 'routes', criar arquivos 'paisesRoutes.js', 'estadosRoutes.js', 'cidadesRoutes.js' e 'index.js';
* No 'index.js', importar os três primeiros arquivos de 'routes' e criar uma função que recebe como parâmetro 'app' e define uma rota base para cada um dos arquivos importados. Exportar a função;
* No 'ExpressConfig.js', importar o módulo 'consign' com o comando npm i consign e definir o método 'routes()' utilizando 'consign()';
* Para todos os três primeiros arquivos de 'routes', utilizar o método Router() do express e definir as rotas 'GET, POST, PUT E DELETE' e exportar 'router';
* No 'controllers' criar três arquivos: 'PaisesControllers.js', 'EstadosControllers.js', 'CidadesControllers.js';
* Em cada um dos arquivos, definir as respectivas classes Controller contendo os métodos estáticos para trabalhar com as rotas. Por ser o Controller responsável por lidar com as 'requisições e respostas', definir as validações de entradas de dados e os retornos das respostas.
* Em cada método, é chamado o método equivalente da classe Model que será definido. Exportar a classe;
* Em cada 'Routes', importar o Controller;
* No 'models' criar três arquivos: 'PaisesModels.js','EstadosModels.js', 'CidadesModels.js';
* Em cada um dos arquivos definir a classe Model que será responsável pela integração com o banco de dados;
* Logo, dentro de cada método estático, definir os métodos de acesso ao banco de dados;
* Caso exista alguma regra de negócio, definir no models também;
* Exportar a classe;
* Dentro de cada Controller, importar o respectivo Models;
* No 'database', criar três arquivos: 'cidadesSchema.js', 'estadosSchema.js' e 'paisesSchema.js';
* Cada um deles definirá as especificações para acessar as Collections do banco de dados;
* Configurar os atributos de cada Collection utilizando '.Schema()' e exportar o '.model() e exportar;
* Em cada Model, importar o respectivo Schema;


