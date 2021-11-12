# BLUE EdTech - MOD 3 - PROJETO 2



## ``SOBRE O PROJETO``

O projeto 2 consiste em criar uma API para manipular 3 rotas: Países, Estados e Cidades. Cada uma contendo sub-rotas: '/add', '/update', '/delete',' /listall', '/listname'.



## ``OBSERVAÇÕES``

No projeto foi adotado o padrão MVC com pequenos ajustes para tornar as responsabilidades e o fluxo da informação o mais fácil possível. Assim temos:

**ROUTES** - responsável pelas rotas;

**CONTROLLERS** - responsável pelo fluxo das requisições e respostas;

**MODELS** - responsável pela manipulação dos dados que integram o banco de dados;

**CONFIG** - responsável por todas as configurações de base;

**DATABASE** - responsável pelas definições das Collections;

**VALIDATIONS** - responsável pelas validações das requisições;



## ``Tecnologias``

* NODEJS
* EXPRESS
* MONGOOSE
* CONSIGN
* CORS
* DOTENV
* MOMENT



## ``INICIANDO``

Iniciamos o projeto criando um arquivo **server.js** na root do projeto

Em seguida utilizamos  o **npm**

```javascript
npm init -y
```

Para facilitar no desenvolvimento do projeto, instalamos o **nodemon** como uma dependência do desenvolvedor

```
npm i nodemon -D
```

No <u>package.json</u> definimos o **"dev"** e configuramos para rodar o <u>nodemon</u>

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

Criamos um diretório **api** no root e o estruturamos da seguinte forma: 

```
api
   |- config
   |- controllers
   |- database
   |- models
   |- routes
```

No <u>config</u> criamos dois arquivos: **ExpressConfig.js** e **mongooseConfig.js**

No <u>ExpressConfig.js</u> definimos as configurações do Servidor. Para isso, utilizamos o conceito de classes

```javascript
const express = require('express');
class App {
    constructor(){
        this.init = express();
        this.envVar();
        this.midd();
    }
    
    envVar(){
        this.init.set('port', 3000);
    }
    
    midd(){
        this.init.use(express.json());
    }
}
module.exports = new App().init
```

Agora importamos o <u>App</u> no **server.js** e utilizando o método **listen()**, subimos o Servidor

```javascript
const app = require('./api/config/ExpressConfig');

app.listen(app.get('port'), ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${app.get('port')}`)
})
```

Testamos o funcionamento do código com o comando 

```javascript
npm run dev
```

E se tudo rodar perfeitamente, teremos a seguinte saída

```javascript
[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node server.js`

SERVIDOR RODANDO NA PORTA 3000
```

Agora iniciamos a configuração para integração com o Banco de Dados. Para isso, utilizamos o mongoose

```javascript
npm i mongoose
```

No arquivo <u>mongooseConfig.js</u> realizamos as configurações para o mongoose conectar ao Mongo Atlas

```javascript
const mongoose = require('mongoose');

const connectionString = ``
//CONEXÃO COM O BD
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log("CONECTADO AO MONGODB")})
.catch((err)=>{console.error({"FALHA AO CONECTAR COM O MONGODB":err.message})})

//EVENTOS
mongoose.connection.on("connected", ()=>{console.log("CONECTADO AO MONGOOSE")});
mongoose.connection.on("disconnected", ()=>{console.log("DESCONECTADO DO MONGOOSE")});
mongoose.connection.on("error", (err)=>{console.error({"FALHA NA CONEXÃO COM O MONGOOSE":err.message})});
process.on('SIGINT', ()=>{
    mongoose.connection.close(()=>{
        console.log("APLICAÇÃO ENCERRADA PELO USUÁRIO");
        process.exit(0);
    });
});

module.exports = mongoose
```

Antes de definir o **connectionString**, primeiro vamos proteger os dados que são sensíveis com o **dotenv**

```javascript
npm i dotenv
```

Para que o <u>dotenv</u> funcione, definimos no root o arquivo **.env**(contendo as informações sensíveis) e importamos o **config()** do <u>dotenv</u> no arquivo <u>mongooseConfig.js</u> para configuramos o <u>connectionString</u>

```
.env
DB_USER = [nome do usuário do banco de dados]
DB_PWD = [senha]
DB_DATABASE = [nome do banco de dados]
DB_HOST = [link gerado pelo próprio banco de dados para acessá-lo remotamente]
PORT = 3000 [definimos a porta do servidor aqui para uso futuro]
```

```javascript
const mongoose = require('mongoose');
const {config} = require('dotenv')

//dotenv
config()
const db_user = process.env.DB_USER
const db_pwd = process.env.DB_PWD
const db_database = process.env.DB_DATABASE
const db_host = process.env.DB_HOST

const connectionString = `mongodb+srv://${db_user}:${db_pwd}@${db_host}/${db_database}`;

//CONEXÃO COM O BD
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log("CONECTADO AO MONGODB")})
.catch((err)=>{console.error({"FALHA AO CONECTAR COM O MONGODB":err.message})})

//EVENTOS
mongoose.connection.on("connected", ()=>{console.log("CONECTADO AO MONGOOSE")});
mongoose.connection.on("disconnected", ()=>{console.log("DESCONECTADO DO MONGOOSE")});
mongoose.connection.on("error", (err)=>{console.error({"FALHA NA CONEXÃO COM O MONGOOSE":err.message})});
process.on('SIGINT', ()=>{
    mongoose.connection.close(()=>{
        console.log("APLICAÇÃO ENCERRADA PELO USUÁRIO");
        process.exit(0);
    });
});

module.exports = mongoose
```

Agora voltando para o *<u>ExpressConfig.js</u>*, importamos o mongoose de <u>mongooseConfig.js</u> e definimos como atributo da classe <u>App</u>

```javascript
const express = require('express');
const db = require("./mongooseConfig")

class App {

    constructor(){
        this.init = express();
        this.db = db;//conexão com o bd
        this.envVar();
        this.midd();
    }

    envVar(){
        this.init.set('port', process.env.PORT);//substituo para usar o .env
    }

    midd(){
        this.init.use(express.json());
    }
}

module.exports = new App().init
```

Ao rodarmos o código, temos a seguinte saída caso tudo esteja correto

```
[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node server.js`

SERVIDOR RODANDO NA PORTA 3000
CONECTADO AO MONGOOSE
CONECTADO AO MONGODB
```

Agora que temos a conexão com o banco de dados, vamos começar a manipulá-lo. Para isso, criamos dentro do <u>routes</u> 4 arquivos: **paisesRoutes.js**, **estadosRoutes.js**, **cidadesRoutes.js** e **index.js** 

Nos 3 primeiros arquivos a estrutura será a mesma.

Começamos por importar **Router()**  e definir as sub-rotas GET, POST,  PUT, DELETE

```javascript
const {Router} = require('express');
const router = Router();

router.post("/add", )
router.get("/listall", )
router.get("/listname/:nome", )
router.delete("/delete/:nome", )
router.put("/update/:nome", )

module.exports = router
```

No <u>index.js</u> criamos uma função que recebe como parâmetro **app** e define para cada rota uma **ROTA BASE**. Aqui, importamos todos os 3 arquivos de <u>routes</u> 

```javascript
const paisesRoutes = require('./paisesRoutes');
const estadosRoutes = require('./estadosRoutes');
const cidadesRoutes = require('./cidadesRoutes');

module.exports = (app) => {
    app
    .use("/paises", paisesRoutes)
    .use("/estados", estadosRoutes)
    .use("/cidades", cidadesRoutes)
}
```

Voltando para o <u>ExpressConfig.js</u>, definimos o método **routes()**. Para tanto, será necessário instalar o módulo **consign**

```
npm i consign
```

Ao chamar **consign()** dentro do método <u>routes()</u>, definimos como diretório base (cwd)  o diretório api. E configuramos para que **this.init**  passe como parâmetro para o path especificado (no caso, a função que acabamos de criar).

Agora todas as rotas são enviadas para o **index.js** e deste, para o **this.routes()**

```javascript
const express = require('express');
const db = require("./mongooseConfig")
const consign = require('consign');

class App {

    constructor(){
        this.init = express();
        this.db = db;
        this.envVar();
        this.midd();
        this.routes();//rotas adicionado
    }

    envVar(){
        this.init.set('port', process.env.PORT);
    }

    midd(){
        this.init.use(express.json());
    }

    routes(){
        consign({cwd:'api'})
            .include('routes/index.js')
            .into(this.init)
    }
}

module.exports = new App().init
```

Rodando o código, temos a seguinte saída

```
[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node server.js`
consign v0.1.6 Initialized in api
+ .\routes\index.js
SERVIDOR RODANDO NA PORTA 3000
CONECTADO AO MONGOOSE
CONECTADO AO MONGODB
```

```

DESCREVER SOBRE OS SCHEMAS AQUI!!!!!

```



No <u>controllers</u>, criamos 3 arquivos: **PaisesController.js**, **EstadosController.js**, **CidadesController.js** que serão exportados para os respectivos <u>routes</u>

No <u>models</u> também criamos 3 arquivos:  **PaisesModel.js**, **EstadosModel.js**, **CidadesModel.js** que serão exportados para os respectivos <u>controllers</u>

Agora definimos os métodos de manipulação do banco de dados no <u>routes</u>

```javascript
const PaisesController = require('../controllers/PaisesController');
const {Router} = require('express');
const router = Router();

router.post("/add", PaisesController.adicionar)
router.get("/listall", PaisesController.listar)
router.get("/listname/:nome", PaisesController.buscaPorNome)
router.delete("/delete/:nome", PaisesController.deletar)
router.put("/update/:nome", PaisesController.alterar)

module.exports = router
```



Os <u>controllers</u> serão classes contendo métodos que receberão as requisições e decidirão quais manipulações deverão ser realizadas no banco de dados pelos <u>models</u>.

 Por lidar com informações externas(requisições), estas devem ser validadas antes prosseguirem para o <u>models</u>, assim criamos no <u>api</u> o diretório **validations** que conterá as funções de validação das informações.

Com todo o ambiente pronto, definimos a classe <u>Controller</u>

```javascript
const PaisesModel = require('../models/PaisesModel');
const {validarNome, validarInfo} = require('../validations/paisesValidations')//funções do validations

class PaisesController {
    static async buscaPorNome(req,res){
        if(validarNome(req.params.nome)){
            try{
                const result = await PaisesModel.buscaPorNome(req.params.nome)
                return res.status(200).json(result)
            } catch(err){
                console.error(err.message);
                res.status(400).json({message:"ERRO NA BUSCA"})
            }
        } else {
            return res.status(400).json({message:"PARÂMETRO NOME INCORRETO"});
        }
    }

module.exports = PaisesController
```

E o **paisesValidations.js** definimos da seguinte forma

```javascript
exports.validarInfo = (info) => {
    //informações definidas no Schemas
    if(!info||!info.nome||!info.populacao||!info.linguaMae||!info.pib){
        return false
    }
    return true
}

exports.validarNome = (nome) => {
    if(/\d/.test(nome)||/\W/.test(nome)){
        return false
    }
    return true
}
```





