const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const rotaProdutos = require('./routes/produtos')
const rotaPedidos = require('./routes/pedidos')

//morgan - monitora todas as acoes mostrando no log
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false })); //apenas dados simples
app.use(bodyParser.json()) //json de entrada no body

//CORS
app.use((req, res, next) => {
    // origem (url/site especifico) que ele permite que o acesse
    res.header('Access-Control-Allow-Origin', '*'); 
    // quais os cabecalhos que serao aceitos
    res.header(
        'Access-Control-Allow-Origin', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    // quais os metodos que poderao ser retornados
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Origin', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});        
    }
    next();
})

// ROTA
app.use('/produtos', rotaProdutos)
app.use('/pedidos', rotaPedidos)

app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;