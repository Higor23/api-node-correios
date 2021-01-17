const express = require('express');
const app = express();
// const cors = require('cors');
// const { rastrearEncomendas } = require('correios-brasil');
// let codes = ['OA016913717BR']

// app.use(cors());


// app.get('/', function(req, res) {
//     const { rastrearEncomendas } = require('correios-brasil');
//     let codes = ['OA016913717BR']
//     rastrearEncomendas(codes).then((response) => {
//         console.log(response);
//         res.json(response)
//     });

// });

app.get('/', function(req, res) {
    const { rastrearEncomendas } = require('correios-brasil');
    let codes = ['OA016913717BR']
    rastrearEncomendas(codes).then((response) => {
        console.log(response);
        return res.json(response)
    });

});

// app.post('/add-pagamento', function(req, res) {
//     pagamento.create({
//             nome: req.body.nome,
//             valor: req.body.valor
//         }).then(function() {
//             res.redirect('/pagamento')
//                 //res.send("Pagamento cadastro com sucesso!")
//         }).catch(function(erro) {
//             res.send("Erro: Pagamento não foi cadastrado com sucesso!" + erro)
//         })
//         //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
// })


// app.post('/', function(req, res, next) {

//     next();

// }), rastrearEncomendas(codes).then((response) => {
//     console.log(response);
// });


app.listen(3005, function() {
    console.log('example app listening on port 3005')
})

// const $ = q => document.querySelector(q);


// document.querySelector('#send').addEventListener("click", e => {

// const code = $('#code').value;
//     console.log(code);

// if (!name || !licence) {
//     alert('Todos os campos precisam ser preeenchidos');

//     return false; //irá impedir que dê continuidade ao programa.
// }

// rastrearEncomendas(code).then((response) => {
//     console.log(response);
// });
// });

// index.listen(3000);


// var form = document.getElementById('form');
// var code = document.getElementById('code');
// let codRastreio = ['OA016913717BR'] // array de códigos de rastreios

// form.addEventListener('submit', function(e) {
//     // alerta o valor do campo
//     alert(code.value);

//     // impede o envio do form
//     e.preventDefault();
// })