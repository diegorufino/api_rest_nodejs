const express = require('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota pedidos'
    })
});

// INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o POST dentro da rota pedidos'
    })
})

// RETORNA UM PEDIDO ESPECIFICO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
        res.status(200).send({
            mensagem: 'Voce descobriu o ID especial',
            id_pedido: id
        });

});

// EXCLUI UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido excluido'
    })
});

module.exports = router;