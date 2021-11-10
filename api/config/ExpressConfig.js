const express = require('express');
const db = require("./mongooseConfig")
const consign = require('consign');
//const cors = require('cors');

class App {

    constructor(){
        this.init = express();
        this.db = db;
        this.envVar();
        this.midd();
        this.routes();
    }

    envVar(){
        this.init.set('port', process.env.PORT);
    }

    midd(){
        this.init.use(express.json());
        // this.init.use(cors({
        //     origin:"*",
        //     methods:['GET','POST','PUT','DELETE']
        // }));
    }

    routes(){
        consign({cwd:'api'})
            .include('routes/index.js')
            .into(this.init)
    }
}

module.exports = new App().init