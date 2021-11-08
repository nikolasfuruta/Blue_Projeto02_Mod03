const app = require('./api/config/ExpressConfig');

app.listen(app.get('port'), ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${app.get('port')}`)
})