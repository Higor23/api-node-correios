const express = require('express');
const app = express();
// const cors = require('cors');

// app.use(cors());


app.get('/', function(req, res) {
    const { rastrearEncomendas } = require('correios-brasil');
    let codes = ['OA016913717BR']
    rastrearEncomendas(codes).then((response) => {
        return res.json(response)
    });
});


app.listen(3005, function() {
    console.log('example app listening on port 3005')
})